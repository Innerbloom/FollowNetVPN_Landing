import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { downloadIosPage, type ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-download-ios',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/download/ios"
      [primaryHref]="iosUrl"
      secondaryHref="/download"
      [secondaryLabel]="i18n.t('DOWNLOAD_ALL')"
    />
  `,
})
export class DownloadIosComponent implements OnInit {
  page!: ProductPage;
  readonly iosUrl = environment.iosAppStoreUrl;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = downloadIosPage(this.i18n.current);
  }
}
