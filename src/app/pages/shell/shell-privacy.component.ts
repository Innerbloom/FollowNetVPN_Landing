import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import type { ProductPage } from '../../core/product-pages.content';
import { SHELL_APP_STORE_URL } from '../../core/shell.content';
import { shellPrivacyPage } from '../../core/shell-legal.content';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-shell-privacy-page',
  standalone: true,
  imports: [ProductPageComponent],
  template: `
    <app-product-page
      [page]="page"
      seoPath="/shell/privacy"
      [primaryHref]="storeUrl"
      primaryLabel="App Store"
      secondaryHref="/shell"
      secondaryLabel="Remora"
    />
  `,
})
export class ShellPrivacyPageComponent implements OnInit {
  page!: ProductPage;
  /** Until the app is live the primary button points at the product page instead. */
  readonly storeUrl = SHELL_APP_STORE_URL || 'https://follow-net.com/shell';

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.page = shellPrivacyPage(this.i18n.current);
  }
}
