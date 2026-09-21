import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { affiliatesPage } from '../../core/affiliates-page.content';
import type { ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-affiliates-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/affiliates"
      primaryHref="mailto:support@follow-net.com?subject=FollowNet%20Affiliate"
      [primaryLabel]="i18n.t('AFFILIATES_CTA')"
      secondaryHref="/press"
      [secondaryLabel]="i18n.t('NAV_PRESS')"
    />
  `,
})
export class AffiliatesPageComponent implements OnInit {
  page!: ProductPage;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = affiliatesPage(this.i18n.current);
  }
}
