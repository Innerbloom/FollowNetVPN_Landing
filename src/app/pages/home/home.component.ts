import {
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { PREMIUM_PLANS } from '../../core/premium-plans';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly webPaddleCheckoutEnabled = environment.webPaddleCheckoutEnabled;
  readonly iosAppStoreUrl = environment.iosAppStoreUrl;

  /** Scroll-linked offset for hero map (::before); 0 when reduced motion */
  heroParallaxPx = 0;

  constructor(
    public i18n: I18nService,
    private readonly ngZone: NgZone,
  ) {
    // Start autoplay; pause when user interacts.
    this.autoplayId = window.setInterval(() => this.autoplayStep(), 3200);
  }

  readonly premiumPlans = PREMIUM_PLANS;

  selectedPremiumPlanId: (typeof this.premiumPlans)[number]['id'] = 'm1';

  selectPremiumPlan(id: (typeof this.premiumPlans)[number]['id']) {
    this.selectedPremiumPlanId = id;
  }

  get selectedPremiumPlan() {
    return this.premiumPlans.find(p => p.id === this.selectedPremiumPlanId) ?? this.premiumPlans[0];
  }

  premiumPeriodBadgeText(): string {
    switch (this.selectedPremiumPlanId) {
      case 'm3':
        return this.i18n.t('PRICING_BADGE_M3');
      case 'm6':
        return this.i18n.t('PRICING_BADGE_M6');
      default:
        return this.i18n.t('PRICING_BADGE_M1');
    }
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

  /** App Store marketing screenshots (portrait), see `src/assets/screenshots/README.md` */
  readonly shots = [
    'assets/screenshots/IMG_5810-portrait.png',
    'assets/screenshots/IMG_5811-portrait.png',
    'assets/screenshots/IMG_5813-portrait.png',
    'assets/screenshots/IMG_5814-portrait.png',
    'assets/screenshots/IMG_5816-portrait.png',
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
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
