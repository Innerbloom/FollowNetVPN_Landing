import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import type { ProductPage } from '../../core/product-pages.content';
import { PULSE_APP_STORE_URL, pulsePrivacyPage } from '../../core/pulse.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-pulse-privacy-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/pulse/privacy"
      [primaryHref]="storeUrl"
      primaryLabel="Mac App Store"
      secondaryHref="/pulse"
      secondaryLabel="FollowNet Pulse"
    />
  `,
})
export class PulsePrivacyPageComponent implements OnInit {
  page!: ProductPage;
  readonly storeUrl = PULSE_APP_STORE_URL;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = pulsePrivacyPage(this.i18n.current);
  }
}
