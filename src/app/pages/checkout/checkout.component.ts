import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  Subject,
  EMPTY,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  finalize,
  firstValueFrom,
} from 'rxjs';
import { I18nService, type AppLang } from '../../core/i18n.service';
import { PaddleCheckoutService } from '../../core/paddle-checkout.service';
import { PaddleCheckoutEligibilityService } from '../../core/paddle-checkout-eligibility.service';
import { PREMIUM_PLANS, type PremiumPlanId } from '../../core/premium-plans';
import { environment } from '../../../environments/environment';

const PADDLE_EMAIL_STORAGE_KEY = 'follownet_paddle_email';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  private readonly emailEligibility$ = new Subject<string>();

  /** Сайт: флаг в `environment`. API: ответ `webCheckoutDisabled`. */
  readonly envWebPaddleCheckoutEnabled = environment.webPaddleCheckoutEnabled;
  apiSaysWebCheckoutDisabled = false;

  constructor(
    public i18n: I18nService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly paddleCheckout: PaddleCheckoutService,
    private readonly paddleEligibility: PaddleCheckoutEligibilityService,
  ) {}

  readonly premiumPlans = PREMIUM_PLANS;

  selectedPremiumPlanId: PremiumPlanId = 'm1';
  paddleEmail = '';
  paddleCheckoutLoading = false;
  paddleEligibilityLoading = false;
  paddleInlineMessage = '';
  checkoutStatus: 'success' | 'cancel' | null = null;

  /** True when API says Paddle period still grants access — block second checkout. */
  paddleBlockActive = false;
  paddleActiveUntilIso: string | null = null;

  ngOnInit(): void {
    const checkout = (this.route.snapshot.queryParamMap.get('checkout') || '').trim().toLowerCase();
    if (checkout === 'success' || checkout === 'cancel') {
      this.checkoutStatus = checkout;
    }

    const plan = this.route.snapshot.queryParamMap.get('plan') as PremiumPlanId | null;
    if (plan && this.premiumPlans.some((p) => p.id === plan)) {
      this.selectedPremiumPlanId = plan;
    }

    const fromStorage = window.localStorage.getItem(PADDLE_EMAIL_STORAGE_KEY)?.trim() ?? '';
    const fromUrl = (
      this.route.snapshot.queryParamMap.get('email') ||
      ''
    ).trim();

    this.paddleEmail = fromUrl || fromStorage;
    if (fromUrl) {
      window.localStorage.setItem(PADDLE_EMAIL_STORAGE_KEY, fromUrl);
    }

    this.emailEligibility$
      .pipe(
        debounceTime(450),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
        switchMap((email) => {
          const trimmed = (email || '').trim();
          if (!this.emailRegex.test(trimmed)) {
            this.paddleBlockActive = false;
            this.paddleActiveUntilIso = null;
            this.paddleEligibilityLoading = false;
            return EMPTY;
          }
          this.paddleEligibilityLoading = true;
          return this.paddleEligibility.check(trimmed).pipe(
            finalize(() => {
              this.paddleEligibilityLoading = false;
            }),
          );
        }),
      )
      .subscribe((res) => {
        this.apiSaysWebCheckoutDisabled = !!res.webCheckoutDisabled;
        this.paddleBlockActive = !res.canStartNewCheckout;
        this.paddleActiveUntilIso = res.activePaddlePeriodEndsAt;
      });

    this.emailEligibility$.next(this.paddleEmail);

    this.paddleCheckout.checkoutError$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((err) => {
        const detail = typeof err.detail === 'string' ? err.detail.trim() : '';
        const code = typeof err.code === 'string' ? err.code.trim() : '';
        if (!detail && !code) {
          return;
        }
        this.paddleInlineMessage = [detail, code ? `(${code})` : '']
          .filter(Boolean)
          .join(' ');
      });
  }

  get paddleWebConfigured(): boolean {
    return this.paddleCheckout.isConfigured();
  }

  get isPaddleEmailValid(): boolean {
    return this.emailRegex.test((this.paddleEmail || '').trim());
  }

  get canOpenCheckout(): boolean {
    return (
      this.envWebPaddleCheckoutEnabled &&
      this.paddleWebConfigured &&
      !this.paddleCheckoutLoading &&
      !this.paddleEligibilityLoading &&
      this.isPaddleEmailValid &&
      !this.paddleBlockActive
    );
  }

  get webCheckoutPaused(): boolean {
    return !this.envWebPaddleCheckoutEnabled || this.apiSaysWebCheckoutDisabled;
  }

  dismissCheckoutStatus(): void {
    this.checkoutStatus = null;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { checkout: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  get selectedPremiumPlan() {
    return this.premiumPlans.find((p) => p.id === this.selectedPremiumPlanId) ?? this.premiumPlans[0];
  }

  premiumLabel(p: (typeof this.premiumPlans)[number]) {
    return this.i18n.current === 'ru' ? p.labelRu : p.labelEn;
  }

  premiumPerMonth(p: (typeof this.premiumPlans)[number]) {
    return this.i18n.current === 'ru' ? p.perMonthRu : p.perMonthEn;
  }

  premiumSave(p: (typeof this.premiumPlans)[number]) {
    return this.i18n.current === 'ru' ? p.saveRu : p.saveEn;
  }

  selectPremiumPlan(id: PremiumPlanId) {
    this.selectedPremiumPlanId = id;
    this.paddleInlineMessage = '';
  }

  onPaddleEmailChange(value: string): void {
    this.paddleInlineMessage = '';
    const v = value?.trim() ?? '';
    if (v) {
      window.localStorage.setItem(PADDLE_EMAIL_STORAGE_KEY, v);
    } else {
      window.localStorage.removeItem(PADDLE_EMAIL_STORAGE_KEY);
    }
    this.emailEligibility$.next(value ?? '');
  }

  paddleActiveBlockText(): string {
    const tpl = this.i18n.t('PADDLE_ACTIVE_SUBSCRIPTION_BLOCK');
    const iso = this.paddleActiveUntilIso;
    if (!iso) {
      return tpl.replace(/\{\{DATE\}\}/g, '—');
    }
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) {
      return tpl.replace(/\{\{DATE\}\}/g, '—');
    }
    const locale = this.dateLocaleForLang(this.i18n.current);
    const dateStr = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
    return tpl.replace(/\{\{DATE\}\}/g, dateStr);
  }

  private dateLocaleForLang(lang: AppLang): string {
    const map: Record<AppLang, string> = {
      ru: 'ru-RU',
      en: 'en-US',
      de: 'de-DE',
      es: 'es-ES',
      fr: 'fr-FR',
      pt: 'pt-PT',
      uk: 'uk-UA',
    };
    return map[lang];
  }

  async openPaddleWebCheckout(): Promise<void> {
    this.paddleInlineMessage = '';
    if (!this.envWebPaddleCheckoutEnabled) {
      this.paddleInlineMessage = this.i18n.t('WEB_CHECKOUT_PAUSED_CHECKOUT');
      return;
    }
    if (!this.paddleCheckout.isConfigured()) {
      this.paddleInlineMessage = this.i18n.t('PADDLE_NOT_CONFIGURED');
      return;
    }
    const email = this.paddleEmail?.trim();
    if (!email || !this.emailRegex.test(email)) {
      this.paddleInlineMessage = this.i18n.t('PADDLE_NEED_EMAIL');
      return;
    }
    const priceId = this.paddleCheckout.priceIdForPlan(this.selectedPremiumPlanId);
    if (!priceId) {
      const plan = this.selectedPremiumPlanId;
      this.paddleInlineMessage = this.i18n
        .t('PADDLE_NEED_PRICE_ID')
        .replace(/\{\{PLAN\}\}/g, plan);
      return;
    }

    this.paddleCheckoutLoading = true;
    try {
      const elig = await firstValueFrom(this.paddleEligibility.check(email));
      if (!elig.canStartNewCheckout) {
        this.paddleBlockActive = true;
        this.paddleActiveUntilIso = elig.activePaddlePeriodEndsAt;
        return;
      }
      await this.paddleCheckout.openOverlayCheckout(priceId, email);
    } catch {
      this.paddleInlineMessage = this.i18n.t('PADDLE_CHECKOUT_ERROR');
    } finally {
      this.paddleCheckoutLoading = false;
    }
  }
}
