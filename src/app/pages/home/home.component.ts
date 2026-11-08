import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { localizedPath } from '../../core/locale-url';
import { LocalizePipe } from '../../shared/localize.pipe';
import { Subscription } from 'rxjs';
import { AppLang, I18nService } from '../../core/i18n.service';
import { PREMIUM_PLANS, formatPremiumUsd, premiumPlanPerMonth, premiumPlanSavePercent, premiumPlanTotal } from '../../core/premium-plans';
import { environment } from '../../../environments/environment';
import { appStoreUrl, macAppStoreUrl, playStoreUrl } from '../../core/app-store-url';
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
  imports: [LocalizePipe, NgClass, NgFor, NgIf, RouterLink],
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

  macAppStoreHref(source = 'home'): string {
    return macAppStoreUrl(source);
  }

  playStoreHref(source = 'home'): string {
    return playStoreUrl(source);
  }
  readonly chromeWebStoreUrl = environment.chromeWebStoreUrl;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly router = inject(Router);
  private langSub: Subscription | null = null;

  /** Scroll-linked offset unused on light fold; kept for template safety */
  heroParallaxPx = 0;

  /** Stable list — a getter recreates nodes every CD and cancels card clicks. */
  learnPosts: BlogTeaser[] = [];

  constructor(
    public i18n: I18nService,
  ) {
    this.refreshLearnPosts();
    this.langSub = this.i18n.lang$.subscribe(() => this.refreshLearnPosts());
    this.preloadHeroShot();
  }

  /**
   * The first hero screenshot is the home page LCP. Preloading it from <head> (baked into the
   * prerendered HTML) lets it start downloading with the CSS instead of after it.
   */
  private preloadHeroShot(): void {
    const doc = inject(DOCUMENT);
    const id = 'hero-shot-preload';
    if (doc.getElementById(id)) return;
    const link = doc.createElement('link');
    link.id = id;
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', 'image');
    link.setAttribute('href', `/${HomeComponent.SHOT_DIR}ios-connected-400.webp`);
    link.setAttribute('imagesrcset', `/${HomeComponent.SHOT_DIR}ios-connected-400.webp 400w, /${HomeComponent.SHOT_DIR}ios-connected-560.webp 560w, /${HomeComponent.SHOT_DIR}ios-connected.webp 760w`);
    link.setAttribute('imagesizes', '(max-width: 940px) 250px, 340px');
    link.setAttribute('fetchpriority', 'high');
    doc.head.appendChild(link);
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
    { q: 'FAQ_Q10', a: 'FAQ_A10' },
    { q: 'FAQ_Q11', a: 'FAQ_A11' },
    { q: 'FAQ_Q12', a: 'FAQ_A12', guides: ['vpn-for-mac', 'how-to-setup-vpn-mac'] },
  ];

  guideLabel(slug: LandingSlug): string {
    return landingLabel(slug, this.i18n.current as AppLang);
  }

  trackLearnPost(_index: number, post: BlogTeaser): string {
    return post.slug;
  }

  openLearnPost(post: BlogTeaser, event: Event): void {
    event.preventDefault();
    void this.router.navigateByUrl(localizedPath(`/blog/${post.slug}`, this.i18n.current));
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

  static readonly SHOT_DIR = 'assets/screenshots/v2/';

  /** "What websites see" line in the strip and hero card; browser only, best effort. */
  ipInfo: { ip: string; country?: string; city?: string; isOurNode?: boolean } | null = null;
  ipPlace = '';

  readonly featureCards = [
    { k: 'HV_FT1_K', t: 'HV_FT1_T', d: 'HV_FT1_D', img: 'ios-disconnected', tone: 'cd--mint' },
    { k: 'HV_FT2_K', t: 'HV_FT2_T', d: 'HV_FT2_D', img: 'ios-protocol', tone: 'cd--lime' },
    { k: 'HV_FT3_K', t: 'HV_FT3_T', d: 'HV_FT3_D', img: 'ios-servers', tone: 'cd--ink' },
    { k: 'HV_FT4_K', t: 'HV_FT4_T', d: 'HV_FT4_D', img: 'ios-speed', tone: 'cd--sand' },
    { k: 'HV_FT5_K', t: 'HV_FT5_T', d: 'HV_FT5_D', img: 'ios-autoconnect', tone: 'cd--sea' },
    { k: 'HV_FT6_K', t: 'HV_FT6_T', d: 'HV_FT6_D', img: 'ios-profiles', tone: 'cd--lime' },
  ];

  readonly controlCards = [
    { k: 'Premium', t: 'HV_TOR_T', d: 'HV_TOR_D', img: 'ios-tor' },
    { k: 'HV_K_SECURITY', t: 'HV_KS_T', d: 'HV_KS_D', img: 'ios-settings' },
    { k: 'HV_K_CONTROL', t: 'HV_ST_T', d: 'HV_ST_D', img: 'ios-split' },
    { k: 'HV_K_PRIVACY', t: 'HV_DNS_T', d: 'HV_DNS_D', img: 'ios-dns' },
  ];

  /** Real App Store reviews (UA storefront, fetched 2026-11-08), quoted as written. */
  readonly reviews = [
    { author: 'tslen-1', title: 'Super vpn', text: 'I really like this app. It’s a high-quality product, and I would like to buy a lifetime subscription if possible. Thanks a lot' },
    { author: 'Jamaica123y', title: 'Wow', text: 'This the BEST VPN for Mac. Thanx <3' },
    { author: 'Дімка777ххх777', title: 'Top', text: 'Швидкий конект, особливо на преміумі' },
    { author: '🌸🤯', title: 'Крутое приложение', text: 'Очень быстрый и стабильный впн особенно с премиумом 🫶' },
    { author: 'Man1ffest', title: 'Отличный vpn 😊', text: 'Быстро подключается, работает стабильно, все супер 😊' },
    { author: '[Pavel] S.D.', title: 'Отличное приложени', text: 'Давно искал что то подобное!' },
  ];

  readonly macShots = [
    { img: 'mac-speed', c: 'HV_MAC_C1' },
    { img: 'mac-stats', c: 'HV_MAC_C2' },
    { img: 'mac-paywall', c: 'HV_MAC_C3' },
  ];

  shot(name: string): string {
    return `${HomeComponent.SHOT_DIR}${name}-400.webp`;
  }

  shotSet(name: string): string {
    return `${HomeComponent.SHOT_DIR}${name}-400.webp 400w, ${HomeComponent.SHOT_DIR}${name}-560.webp 560w, ${HomeComponent.SHOT_DIR}${name}.webp 760w`;
  }

  countriesLine(): string {
    return this.i18n.t('HV_SC4_D').replace('{{n}}', String(this.locationCodes.length));
  }

  /** ISO codes of server locations; flags are self-hosted so they render on Windows too. */
  readonly locationCodes = [
    'us', 'gb', 'de', 'nl', 'fr', 'fi', 'se', 'ch', 'pl', 'es', 'it', 'at', 'be', 'dk', 'no', 'pt',
    'cz', 'ee', 'gr', 'hu', 'ro', 'tr', 'ae', 'il', 'in', 'jp', 'kr', 'sg', 'hk', 'ca', 'br', 'au',
  ];

  showAllLocations = false;

  private regionNames: { lang: string; full: Intl.DisplayNames; short: Intl.DisplayNames } | null =
    null;
  /** Full CLDR names that are needlessly long ("Hong Kong SAR China"); the short form reads fine. */
  private static readonly SHORT_NAME_CODES = new Set(['US', 'HK']);

  readonly howSteps = [
    { title: 'STEP1_TITLE' as const, text: 'STEP1_TEXT' as const },
    { title: 'STEP2_TITLE' as const, text: 'STEP2_TEXT' as const },
    { title: 'STEP3_TITLE' as const, text: 'STEP3_TEXT' as const },
    { title: 'STEP4_TITLE' as const, text: 'STEP4_TEXT' as const },
    { title: 'STEP5_TITLE' as const, text: 'STEP5_TEXT' as const },
  ];

  readonly compareRows = [
    { feat: 'COMPARE_R1_FEAT' as const, typical: 'COMPARE_R1_TYPICAL' as const, us: 'COMPARE_R1_US' as const },
    { feat: 'COMPARE_R2_FEAT' as const, typical: 'COMPARE_R2_TYPICAL' as const, us: 'COMPARE_R2_US' as const },
    { feat: 'COMPARE_R3_FEAT' as const, typical: 'COMPARE_R3_TYPICAL' as const, us: 'COMPARE_R3_US' as const },
    { feat: 'COMPARE_R4_FEAT' as const, typical: 'COMPARE_R4_TYPICAL' as const, us: 'COMPARE_R4_US' as const },
    { feat: 'COMPARE_R5_FEAT' as const, typical: 'COMPARE_R5_TYPICAL' as const, us: 'COMPARE_R5_US' as const },
    { feat: 'COMPARE_R6_FEAT' as const, typical: 'COMPARE_R6_TYPICAL' as const, us: 'COMPARE_R6_US' as const },
  ];

  countryName(code: string): string {
    const lang = this.i18n.current;
    if (this.regionNames?.lang !== lang) {
      this.regionNames = {
        lang,
        full: new Intl.DisplayNames([lang], { type: 'region' }),
        short: new Intl.DisplayNames([lang], { type: 'region', style: 'short' }),
      };
    }
    const region = code.toUpperCase();
    const names = HomeComponent.SHORT_NAME_CODES.has(region)
      ? this.regionNames.short
      : this.regionNames.full;
    return names.of(region) ?? region;
  }

  heroOfferLine(): string {
    const yearly = this.premiumPlans.find((p) => p.id === 'y1') ?? this.premiumPlans[0];
    const perMonth = formatPremiumUsd(yearly.amountUsd / 12);
    return this.i18n.t('HERO_OFFER').replace('{{price}}', perMonth);
  }

  stepNum(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.revealOnScroll();
    this.watchStickyCta();
    void this.loadIp();
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
    this.langSub = null;
    this.revealObserver?.disconnect();
    this.revealObserver = null;
    this.ctaObserver?.disconnect();
    this.ctaObserver = null;
  }

  private ctaObserver: IntersectionObserver | null = null;

  /** Phones: the sticky download button shows only while neither the hero badges nor the final CTA are on screen. */
  private watchStickyCta(): void {
    const root = this.document.querySelector('.landing');
    const targets = [root?.querySelector('.hero .badges'), root?.querySelector('.end')].filter(Boolean) as Element[];
    if (!root || !targets.length || typeof IntersectionObserver === 'undefined') return;
    const visible = new Set<Element>();
    this.ctaObserver = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      const pastHero = (root.querySelector('.hero .badges')?.getBoundingClientRect().bottom ?? 0) < 0;
      root.classList.toggle('show-mcta', visible.size === 0 && pastHero);
    });
    targets.forEach((t) => this.ctaObserver!.observe(t));
  }

  private revealObserver: IntersectionObserver | null = null;

  /** Fade-in of `.rv` blocks; without IntersectionObserver (or with reduced motion) they just show. */
  private revealOnScroll(): void {
    const doc = this.document;
    const root = doc.querySelector('.landing');
    if (!root || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('js-rv');
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('in');
          this.revealObserver?.unobserve(e.target);
        }
      },
      { threshold: 0.12 },
    );
    root.querySelectorAll('.rv').forEach((el) => this.revealObserver!.observe(el));
  }

  private async loadIp(): Promise<void> {
    try {
      const url = `${environment.apiBaseUrl.replace(/\/$/, '')}/geo/ip-check/public`;
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) return;
      const d = await res.json();
      if (!d?.ip) return;
      this.ipInfo = { ip: String(d.ip), country: d.country, city: d.city, isOurNode: !!d.isOurNode };
      this.ipPlace = [d.city, d.country].filter(Boolean).join(', ');
      this.cdr.markForCheck();
    } catch {
      /* the static copy stays */
    }
  }
}
