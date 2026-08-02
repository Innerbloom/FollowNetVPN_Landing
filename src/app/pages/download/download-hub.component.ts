import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { downloadPage, type ProductPage } from '../../core/product-pages.content';
import { ProductPageComponent } from '../product-page/product-page.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-download-hub',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/download"
      [showChromeCta]="true"
      [primaryHref]="iosUrl"
      secondaryHref="/download/ios"
      [secondaryLabel]="i18n.t('DOWNLOAD_IOS_MORE')"
    />
  `,
})
export class DownloadHubComponent implements OnInit {
  page!: ProductPage;
  readonly iosUrl = environment.iosAppStoreUrl;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = downloadPage(this.i18n.current);
  }
}
