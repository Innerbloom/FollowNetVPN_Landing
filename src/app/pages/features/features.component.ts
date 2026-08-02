import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { featuresPage, type ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/features"
      secondaryHref="/blog"
      [secondaryLabel]="i18n.t('BLOG_ALL')"
    />
  `,
})
export class FeaturesPageComponent implements OnInit {
  page!: ProductPage;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = featuresPage(this.i18n.current);
  }
}
