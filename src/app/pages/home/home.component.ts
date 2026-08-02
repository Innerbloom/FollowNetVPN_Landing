import {
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppLang, I18nService } from '../../core/i18n.service';
import { PREMIUM_PLANS, formatPremiumUsd, premiumPlanPerMonth, premiumPlanSavePercent, premiumPlanTotal } from '../../core/premium-plans';
import { environment } from '../../../environments/environment';
import { appStoreUrl } from '../../core/app-store-url';
import { landingLabel, LandingSlug } from '../../core/seo-landing.slugs';
import {
  blogTeaserTopicLabel,
  homeLearnTeasers,
  type BlogTeaser,
} from '../../core/blog-teasers';

type FaqItem = {
  q: string;
  a: string;
  guides?: LandingSlug[];
};

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly webCheckoutEnabled = environment.webWayForPayCheckoutEnabled;
  readonly iosAppStoreUrl = environment.iosAppStoreUrl;

  appStoreHref(source = 'home'): string {
    return appStoreUrl(source);
  }
  readonly chromeWebStoreUrl = environment.chromeWebStoreUrl;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private langSub: Subscription | null = null;

  /** Scroll-linked offset for hero map (::before); 0 when reduced motion */
  heroParallaxPx = 0;

  /** Stable list — a getter recreates nodes every CD and cancels card clicks. */
  learnPosts: BlogTeaser[] = [];

  constructor(
    public i18n: I18nService,
    private readonly ngZone: NgZone,
  ) {
    this.refreshLearnPosts();
    this.langSub = this.i18n.lang$.subscribe(() => this.refreshLearnPosts());
  }

  readonly premiumPlans = PREMIUM_PLANS;
  readonly premiumPlanSavePercent = premiumPlanSavePercent;

  readonly faqItems: FaqItem[] = [
    { q: 'FAQ_Q1', a: 'FAQ_A1', guides: ['free-vpn-iphone', 'vpn-for-iphone'] },
    { q: 'FAQ_Q2', a: 'FAQ_A2' },
    { q: 'FAQ_Q3', a: 'FAQ_A3', guides: ['best-vpn-iphone'] },
    { q: 'FAQ_Q4', a: 'FAQ_A4', guides: ['dns-vpn-ios'] },
    { q: 'FAQ_Q5', a: 'FAQ_A5' },
    { q: 'FAQ_Q6', a: 'FAQ_A6' },
    {
      q: 'FAQ_Q7',
      a: 'FAQ_A7',
      guides: ['wireguard-vpn-ios', 'ikev2-vpn-ios', 'amneziawg-vpn-ios'],
    },
    { q: 'FAQ_Q8', a: 'FAQ_A8', guides: ['smart-connect-vpn', 'vpn-for-wifi'] },
    { q: 'FAQ_Q9', a: 'FAQ_A9', guides: ['smart-connect-vpn'] },
  ];

  guideLabel(slug: LandingSlug): string {
    return landingLabel(slug, this.i18n.current as AppLang);
  }

  trackLearnPost(_index: number, post: BlogTeaser): string {
    return post.slug;
  }

  openLearnPost(post: BlogTeaser, event: Event): void {
    event.preventDefault();
    void this.router.navigate(['/blog', post.slug]);
  }

  private refreshLearnPosts(): void {
    this.learnPosts = homeLearnTeasers(this.i18n.current);
  }

  blogTopic(post: BlogTeaser): string {
    return blogTeaserTopicLabel(post.topic, this.i18n.current);
  }

  blogDate(iso: string): string {
    const locale =
      this.i18n.current === 'ru' || this.i18n.current === 'uk'
        ? 'ru-RU'
        : this.i18n.current === 'de'
          ? 'de-DE'
          : this.i18n.current === 'es'
            ? 'es-ES'
            : this.i18n.current === 'fr'
              ? 'fr-FR'
              : this.i18n.current === 'pt'
                ? 'pt-PT'
                : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(`${iso}T12:00:00Z`));
  }

  blogRead(minutes: number): string {
    return this.i18n.t('BLOG_READ_TIME').replace('{n}', String(minutes));
  }

  selectedPremiumPlanId: (typeof this.premiumPlans)[number]['id'] = 'y1';

  selectPremiumPlan(id: (typeof this.premiumPlans)[number]['id']) {
    this.selectedPremiumPlanId = id;
  }

  get selectedPremiumPlan() {
    return this.premiumPlans.find(p => p.id === this.selectedPremiumPlanId) ?? this.premiumPlans[0];
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

  /** Large hero price (monthly equivalent for annual plan). */
  premiumHeroAmount(p: (typeof this.premiumPlans)[number]): string {
    if (p.id === 'y1') {
      return `~${formatPremiumUsd(p.amountUsd / 12)}`;
    }
    return premiumPlanTotal(p);
  }

  premiumHeroPeriod(_p: (typeof this.premiumPlans)[number]): string {
    return this.i18n.t('PRICE_PER_MONTH_SUFFIX');
  }

  premiumBilledLine(p: (typeof this.premiumPlans)[number]): string {
    const amount = premiumPlanTotal(p);
    const key = p.id === 'y1' ? 'PRICING_BILLED_YEAR' : 'PRICING_BILLED_MONTH';
    return this.i18n.t(key).replace('{{AMOUNT}}', amount);
  }

  /** App Store marketing screenshots (portrait) */
  readonly shots = [
    'assets/screenshots/IMG_6290-portrait.png',
    'assets/screenshots/IMG_6291-portrait.png',
    'assets/screenshots/IMG_6292-portrait.png',
    'assets/screenshots/IMG_6293-portrait.png',
    'assets/screenshots/IMG_6294-portrait.png',
  ];

  activeIndex = 0;

  private autoplayId: number | null = null;
  private stopAutoplayUntil = 0;
  private scrollRaf = 0;
  private onScrollBound: (() => void) | null = null;
  readonly flagsRow1 = this.buildFlagRow([
    // keep 🇺🇸 centered (odd count)
    '🇬🇧','🇦🇪','🇹🇷','🇨🇭','🇸🇪','🇰🇷','🇸🇬','🇭🇰','🇷🇴',
    '🇺🇸',
    '🇵🇱','🇳🇴','🇮🇹','🇳🇱','🇲🇩','🇲🇦','🇲🇷','🇯🇵','🇮🇱',
  ], { peak: 1.22, edge: 0.76, minOpacity: 0.55 });

  readonly flagsRow2 = this.buildFlagRow([
    '🇮🇳','🇭🇺','🇭🇰','🇬🇷','🇩🇪','🇫🇮','🇪🇪','🇩🇰','🇨🇿','🇨🇦','🇧🇷','🇧🇪','🇦🇹',
  ], { peak: 1.08, edge: 0.74, minOpacity: 0.55 });

  private buildFlagRow(
    emojis: string[],
    opts: { peak: number; edge: number; minOpacity: number },
  ) {
    const n = emojis.length;
    const mid = (n - 1) / 2;
    return emojis.map((emoji, i) => {
      const d = mid === 0 ? 0 : Math.abs(i - mid) / mid; // 0..1
      const s = opts.peak + (opts.edge - opts.peak) * d;
      const o = 1 - (1 - opts.minOpacity) * d;
      return { emoji, s: Number(s.toFixed(3)), o: Number(o.toFixed(3)) };
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.autoplayId = window.setInterval(() => this.autoplayStep(), 3200);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.onScrollBound = () => {
        if (this.scrollRaf) return;
        this.scrollRaf = window.requestAnimationFrame(() => {
          this.scrollRaf = 0;
          const y = Math.min(window.scrollY, 420);
          const next = Math.round(y * 0.09);
          if (next === this.heroParallaxPx) return;
          this.ngZone.run(() => {
            this.heroParallaxPx = next;
          });
        });
      };
      window.addEventListener('scroll', this.onScrollBound, { passive: true });
      this.onScrollBound();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
    this.langSub = null;
    if (this.autoplayId != null) {
      window.clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
    if (this.scrollRaf) {
      window.cancelAnimationFrame(this.scrollRaf);
      this.scrollRaf = 0;
    }
    if (this.onScrollBound) {
      window.removeEventListener('scroll', this.onScrollBound);
      this.onScrollBound = null;
    }
  }

  goTo(index: number) {
    const clamped = Math.max(0, Math.min(index, this.shots.length - 1));
    this.activeIndex = clamped;
    this.pauseAutoplay(6000);
  }

  screenshotAlt(index: number): string {
    const keys = [
      'SCREENSHOT_ALT_1',
      'SCREENSHOT_ALT_2',
      'SCREENSHOT_ALT_3',
      'SCREENSHOT_ALT_4',
      'SCREENSHOT_ALT_5',
    ] as const;
    const key = keys[index] ?? 'SCREENSHOT_ALT_1';
    return this.i18n.t(key);
  }

  onUserPointer() {
    this.pauseAutoplay(7000);
  }

  private pauseAutoplay(ms: number) {
    this.stopAutoplayUntil = Date.now() + ms;
  }

  private autoplayStep() {
    if (Date.now() < this.stopAutoplayUntil) return;
    const next = (this.activeIndex + 1) % this.shots.length;
    this.goTo(next);
  }
}
