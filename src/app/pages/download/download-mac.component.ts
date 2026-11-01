import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { downloadMacPage, type ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';
import { macAppStoreUrl } from '../../core/app-store-url';

@Component({
  selector: 'app-download-mac',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/download/mac"
      [primaryHref]="macUrl"
      [primaryLabel]="i18n.t('DOWNLOAD_MAC_CTA')"
      secondaryHref="/download"
      [secondaryLabel]="i18n.t('DOWNLOAD_ALL')"
    />
  `,
})
export class DownloadMacComponent implements OnInit {
  page!: ProductPage;
  readonly macUrl = macAppStoreUrl('download-mac');

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = downloadMacPage(this.i18n.current);
  }
}
