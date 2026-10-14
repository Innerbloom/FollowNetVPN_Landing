import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { PULSE_APP_STORE_URL, PULSE_PRICE, PulseContent, pulseContent } from '../../core/pulse.content';

@Component({
  selector: 'app-pulse-page',
  standalone: true,
  imports: [LocalizePipe, NgFor, NgIf, RouterLink],
  templateUrl: './pulse.component.html',
  styleUrls: ['./pulse.component.css'],
})
export class PulsePageComponent implements OnInit {
  c!: PulseContent;
  readonly price = PULSE_PRICE;
  activeShot = 0;

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.c = pulseContent(this.i18n.current);
    this.seo.setPageOverride('/pulse', this.i18n.current, { faq: this.c.faq });
    this.seo.updateForRoute('/pulse', this.i18n.current);
  }

  storeUrl(placement: string): string {
    const url = new URL(PULSE_APP_STORE_URL);
    url.searchParams.set('ct', `pulse-${placement}`);
    url.searchParams.set('mt', '12');
    return url.toString();
  }

  /** Transparent app renders ship per site language: assets/pulse/<lang>/{strip,win1…win5}.webp */
  asset(name: string): string {
    return `/assets/pulse/${this.i18n.current}/${name}.webp`;
  }
}
