import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { aboutPage } from '../../core/trust-pages.content';
import type { ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/about"
      secondaryHref="/support"
      [secondaryLabel]="i18n.t('NAV_SUPPORT')"
    />
  `,
})
export class AboutPageComponent implements OnInit {
  page!: ProductPage;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = aboutPage(this.i18n.current);
  }
}
