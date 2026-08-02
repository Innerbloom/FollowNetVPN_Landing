import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { downloadChromePage, type ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-download-chrome',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/download/chrome"
      [primaryHref]="chromeUrl"
      [primaryLabel]="i18n.t('DOWNLOAD_CHROME_CTA')"
      secondaryHref="/download"
      [secondaryLabel]="i18n.t('DOWNLOAD_ALL')"
    />
  `,
})
export class DownloadChromeComponent implements OnInit {
  page!: ProductPage;
  readonly chromeUrl = environment.chromeWebStoreUrl;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = downloadChromePage(this.i18n.current);
  }
}
