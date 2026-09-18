import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { pressPage } from '../../core/press-page.content';
import type { ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-press-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/press"
      secondaryHref="/about"
      [secondaryLabel]="i18n.t('NAV_ABOUT')"
    />
  `,
})
export class PressPageComponent implements OnInit {
  page!: ProductPage;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = pressPage(this.i18n.current);
  }
}
