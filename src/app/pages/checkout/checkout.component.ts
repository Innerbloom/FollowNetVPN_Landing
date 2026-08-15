import { NgFor, NgIf, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, DestroyRef, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
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
import { WayForPayCheckoutService } from '../../core/wayforpay-checkout.service';
import { WayForPayCheckoutEligibilityService } from '../../core/wayforpay-checkout-eligibility.service';
import { PREMIUM_PLANS, premiumPlanPerMonth, premiumPlanSavePercent, premiumPlanTotal, type PremiumPlanId } from '../../core/premium-plans';
import { environment } from '../../../environments/environment';

const CHECKOUT_EMAIL_STORAGE_KEY = 'follownet_checkout_email';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  private readonly emailEligibility$ = new Subject<string>();

  readonly envWebCheckoutEnabled = environment.webWayForPayCheckoutEnabled;
  apiSaysWebCheckoutDisabled = false;

  constructor(
    public i18n: I18nService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly wayForPayCheckout: WayForPayCheckoutService,
    private readonly wayForPayEligibility: WayForPayCheckoutEligibilityService,
  ) {}

  readonly premiumPlans = PREMIUM_PLANS;

  selectedPremiumPlanId: PremiumPlanId = 'y1';
  checkoutEmail = '';
  checkoutTicket: string | null = null;
  ticketInvalid = false;
  checkoutLoading = false;
  eligibilityLoading = false;
  inlineMessage = '';
  checkoutStatus: 'success' | 'cancel' | null = null;

  checkoutBlockActive = false;
  activeUntilIso: string | null = null;
  checkoutBlockReason: 'apple' | 'wayforpay' | 'premium' | null = null;
  private planFromUrl = false;

  ngOnInit(): void {
    const checkout = (this.route.snapshot.queryParamMap.get('checkout') || '').trim().toLowerCase();
    if (checkout === 'success' || checkout === 'cancel') {
      this.checkoutStatus = checkout;
    }

    const plan = this.route.snapshot.queryParamMap.get('plan') as PremiumPlanId | null;
    if (plan && this.premiumPlans.some((p) => p.id === plan)) {
      this.selectedPremiumPlanId = plan;
      this.planFromUrl = true;
    }

    const fromStorage = this.readStoredCheckoutEmail();
    const fromUrl = (this.route.snapshot.queryParamMap.get('email') || '').trim();
    const ticket = (this.route.snapshot.queryParamMap.get('ticket') || '').trim();
    const fromExtension =
      (this.route.snapshot.queryParamMap.get('utm_source') || '').trim() === 'chrome_extension';

    if (ticket) {
      this.checkoutTicket = ticket;
      this.stripCheckoutTicketFromUrl();
      this.eligibilityLoading = true;
      this.wayForPayEligibility
        .checkByTicket(ticket)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((res) => {
          this.eligibilityLoading = false;
          this.apiSaysWebCheckoutDisabled = !!res.webCheckoutDisabled;
          this.ticketInvalid = !!res.ticketInvalid;
          this.checkoutBlockActive = !res.canStartNewCheckout && !res.ticketInvalid;
          this.activeUntilIso = res.activeWayForPayPeriodEndsAt;
          this.checkoutBlockReason = res.blockReason ?? null;
          if (
            !this.planFromUrl &&
            (res.planId === 'm1' || res.planId === 'y1')
          ) {
            this.selectedPremiumPlanId = res.planId;
          }
        });
      return;
    }

    // Don't reuse a previous email when Chrome opens checkout without one:
    // anonymous pay must not show the last registered address from this browser.
    this.checkoutEmail = fromUrl || (fromExtension ? '' : fromStorage);
    if (fromUrl) {
      this.persistCheckoutEmail(fromUrl);
    }

    this.emailEligibility$
      .pipe(
        debounceTime(450),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
        switchMap((email) => {
          const trimmed = (email || '').trim();
          if (!this.emailRegex.test(trimmed)) {
            this.checkoutBlockActive = false;
            this.activeUntilIso = null;
            this.checkoutBlockReason = null;
            this.eligibilityLoading = false;
            return EMPTY;
          }
          this.eligibilityLoading = true;
          return this.wayForPayEligibility.check(trimmed).pipe(
            finalize(() => {
              this.eligibilityLoading = false;
            }),
          );
        }),
      )
      .subscribe((res) => {
        this.apiSaysWebCheckoutDisabled = !!res.webCheckoutDisabled;
        this.checkoutBlockActive = !res.canStartNewCheckout;
        this.activeUntilIso = res.activeWayForPayPeriodEndsAt;
        this.checkoutBlockReason = res.blockReason ?? null;
      });

    this.emailEligibility$.next(this.checkoutEmail);
  }

  get isSessionCheckout(): boolean {
    return !!this.checkoutTicket;
  }

  get isCheckoutEmailValid(): boolean {
    return this.emailRegex.test((this.checkoutEmail || '').trim());
  }

  get canOpenCheckout(): boolean {
    if (
      !this.envWebCheckoutEnabled ||
      this.checkoutLoading ||
      this.eligibilityLoading ||
      this.checkoutBlockActive
    ) {
      return false;
    }
    if (this.isSessionCheckout) {
      return !this.ticketInvalid && !!this.checkoutTicket;
    }
    return this.isCheckoutEmailValid;
  }

  get webCheckoutPaused(): boolean {
    return !this.envWebCheckoutEnabled || this.apiSaysWebCheckoutDisabled;
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

  private stripCheckoutTicketFromUrl(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const url = new URL(window.location.href);
    if (!url.searchParams.has('ticket')) return;
    url.searchParams.delete('ticket');
    window.history.replaceState(
      window.history.state,
      '',
      `${url.pathname}${url.search}${url.hash}`,
    );
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ticket: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  get selectedPremiumPlan() {
    return this.premiumPlans.find((p) => p.id === this.selectedPremiumPlanId) ?? this.premiumPlans[0];
  }

  premiumLabel(p: (typeof this.premiumPlans)[number]) {
    return p.id === 'y1' ? this.i18n.t('PREMIUM_PLAN_Y1') : this.i18n.t('PREMIUM_PLAN_M1');
  }

  premiumPerMonth(p: (typeof this.premiumPlans)[number]) {
    return premiumPlanPerMonth(p, this.i18n.t('PRICE_PER_MONTH_SUFFIX'));
  }

  premiumTotal(p: (typeof this.premiumPlans)[number]) {
    return premiumPlanTotal(p);
  }

  premiumSave(p: (typeof this.premiumPlans)[number]) {
    const pct = premiumPlanSavePercent(p);
    if (pct == null) return null;
    return this.i18n.t('PREMIUM_SAVE_Y1').replace('{{PCT}}', String(pct));
  }

  selectPremiumPlan(id: PremiumPlanId) {
    this.selectedPremiumPlanId = id;
    this.inlineMessage = '';
  }

  onCheckoutEmailChange(value: string): void {
    this.inlineMessage = '';
    const v = value?.trim() ?? '';
    this.persistCheckoutEmail(v || null);
    this.emailEligibility$.next(value ?? '');
  }

  private readStoredCheckoutEmail(): string {
    if (!isPlatformBrowser(this.platformId)) return '';
    return window.localStorage.getItem(CHECKOUT_EMAIL_STORAGE_KEY)?.trim() ?? '';
  }

  private persistCheckoutEmail(email: string | null): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (email) {
      window.localStorage.setItem(CHECKOUT_EMAIL_STORAGE_KEY, email);
    } else {
      window.localStorage.removeItem(CHECKOUT_EMAIL_STORAGE_KEY);
    }
  }

  activeBlockText(): string {
    const tplKey =
      this.checkoutBlockReason === 'apple'
        ? 'WEB_CHECKOUT_ACTIVE_APPLE_BLOCK'
        : this.checkoutBlockReason === 'wayforpay'
          ? 'WEB_CHECKOUT_ACTIVE_WAYFORPAY_BLOCK'
          : 'WEB_CHECKOUT_ACTIVE_PREMIUM_BLOCK';
    const tpl = this.i18n.t(tplKey);
    const iso = this.activeUntilIso;
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

  private wayForPayLanguage(): string {
    const lang = this.i18n.current;
    if (lang === 'uk' || lang === 'ru') return 'UA';
    if (lang === 'en') return 'EN';
    if (lang === 'de') return 'DE';
    if (lang === 'es') return 'ES';
    if (lang === 'fr') return 'FR';
    if (lang === 'pt') return 'PT';
    return 'UA';
  }

  async openWebCheckout(): Promise<void> {
    this.inlineMessage = '';
    if (!this.envWebCheckoutEnabled) {
      this.inlineMessage = this.i18n.t('WEB_CHECKOUT_PAUSED_CHECKOUT');
      return;
    }
    const ticket = this.checkoutTicket?.trim() || null;
    const email = this.checkoutEmail?.trim();
    if (!ticket && (!email || !this.emailRegex.test(email))) {
      this.inlineMessage = this.i18n.t('WEB_CHECKOUT_NEED_EMAIL');
      return;
    }

    this.checkoutLoading = true;
    try {
      const elig = ticket
        ? await firstValueFrom(this.wayForPayEligibility.checkByTicket(ticket))
        : await firstValueFrom(this.wayForPayEligibility.check(email!));
      if (elig.ticketInvalid) {
        this.ticketInvalid = true;
        this.inlineMessage = this.i18n.t('WEB_CHECKOUT_TICKET_INVALID');
        return;
      }
      if (!elig.canStartNewCheckout) {
        this.checkoutBlockActive = true;
        this.activeUntilIso = elig.activeWayForPayPeriodEndsAt;
        this.checkoutBlockReason = elig.blockReason ?? null;
        return;
      }
      await this.wayForPayCheckout.openWidgetCheckout(
        ticket ? { checkoutToken: ticket } : { email: email! },
        this.selectedPremiumPlanId,
        this.wayForPayLanguage(),
      );
    } catch (err: unknown) {
      const apiErr = this.apiErrorFromUnknown(err);
      if (apiErr?.code === 'USER_NOT_FOUND') {
        this.inlineMessage = this.i18n.t('WEB_CHECKOUT_USER_NOT_FOUND');
      } else if (apiErr?.code === 'CHECKOUT_TICKET_EXPIRED') {
        this.ticketInvalid = true;
        this.inlineMessage = this.i18n.t('WEB_CHECKOUT_TICKET_INVALID');
      } else if (apiErr?.code === 'SUBSCRIPTION_ALREADY_ACTIVE') {
        this.checkoutBlockActive = true;
        this.activeUntilIso = apiErr.activeWayForPayPeriodEndsAt ?? null;
        this.checkoutBlockReason = apiErr.blockReason ?? 'premium';
        this.inlineMessage = '';
      } else if (apiErr?.code && apiErr.message) {
        this.inlineMessage = apiErr.message;
      } else {
        this.inlineMessage = this.i18n.t('WEB_CHECKOUT_ERROR');
      }
    } finally {
      this.checkoutLoading = false;
    }
  }

  private apiErrorFromUnknown(err: unknown): {
    code?: string;
    message?: string;
    activeWayForPayPeriodEndsAt?: string | null;
    blockReason?: 'apple' | 'wayforpay' | 'premium' | null;
  } | undefined {
    if (!err || typeof err !== 'object') return undefined;
    const body =
      'error' in err
        ? (err as { error?: Record<string, unknown> }).error
        : (err as Record<string, unknown>);
    if (!body || typeof body !== 'object') return undefined;
    const codeRaw = body['error'] ?? body['code'];
    const code = typeof codeRaw === 'string' ? codeRaw : undefined;
    const message = typeof body['message'] === 'string' ? body['message'] : undefined;
    const until = body['activeWayForPayPeriodEndsAt'];
    const reason = body['blockReason'];
    return {
      code,
      message,
      activeWayForPayPeriodEndsAt: typeof until === 'string' ? until : null,
      blockReason:
        reason === 'apple' || reason === 'wayforpay' || reason === 'premium'
          ? reason
          : null,
    };
  }
}
