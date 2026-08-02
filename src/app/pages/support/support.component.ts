import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { supportPage } from '../../core/trust-pages.content';
import type { ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-support-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/support"
      secondaryHref="/guides"
      [secondaryLabel]="i18n.t('NAV_GUIDES')"
    />
  `,
})
export class SupportPageComponent implements OnInit {
  page!: ProductPage;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = supportPage(this.i18n.current);
  }
}
