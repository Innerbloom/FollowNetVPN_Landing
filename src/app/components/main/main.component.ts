import {
  Component,
  OnDestroy,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-main',
  imports: [NgFor, NgIf, LucideAngularModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
})
export class MainComponent implements OnDestroy {
  constructor(public i18n: I18nService) {
    // Start autoplay; pause when user interacts.
    this.autoplayId = window.setInterval(() => this.autoplayStep(), 3200);
  }

  readonly premiumPlans = [
    { id: 'm1', labelRu: '1 месяц', labelEn: '1 month', total: '$4.99', perMonthRu: '$4.99/мес', perMonthEn: '$4.99/mo', saveRu: null as string | null, saveEn: null as string | null },
    { id: 'm3', labelRu: '3 месяца', labelEn: '3 months', total: '$12.99', perMonthRu: '$4.33/мес', perMonthEn: '$4.33/mo', saveRu: 'экономия 13%', saveEn: 'save 13%' },
    { id: 'm6', labelRu: '6 месяцев', labelEn: '6 months', total: '$21.99', perMonthRu: '$3.67/мес', perMonthEn: '$3.67/mo', saveRu: 'экономия 27%', saveEn: 'save 27%' },
  ] as const;

  selectedPremiumPlanId: (typeof this.premiumPlans)[number]['id'] = 'm1';

  selectPremiumPlan(id: (typeof this.premiumPlans)[number]['id']) {
    this.selectedPremiumPlanId = id;
  }

  get selectedPremiumPlan() {
    return this.premiumPlans.find(p => p.id === this.selectedPremiumPlanId) ?? this.premiumPlans[0];
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

  readonly shots = [
    'assets/IMG_5810-portrait.png',
    'assets/IMG_5811-portrait.png',
    'assets/IMG_5813-portrait.png',
    'assets/IMG_5814-portrait.png',
    'assets/IMG_5816-portrait.png',
  ];

  activeIndex = 0;

  private autoplayId: number | null = null;
  private stopAutoplayUntil = 0;
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

  ngOnDestroy() {
    if (this.autoplayId != null) {
      window.clearInterval(this.autoplayId);
      this.autoplayId = null;
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
