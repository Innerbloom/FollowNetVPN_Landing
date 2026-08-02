import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { statusPage } from '../../core/trust-pages.content';
import type { ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-status-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/status"
      secondaryHref="/support"
      [secondaryLabel]="i18n.t('NAV_SUPPORT')"
    />
  `,
})
export class StatusPageComponent implements OnInit {
  page!: ProductPage;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = statusPage(this.i18n.current);
  }
}
