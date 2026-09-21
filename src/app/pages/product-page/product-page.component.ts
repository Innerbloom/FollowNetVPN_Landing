import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import type { ProductPage } from '../../core/product-pages.content';
import { appStoreUrl } from '../../core/app-store-url';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnChanges {
  @Input({ required: true }) page!: ProductPage;
  @Input({ required: true }) seoPath!: string;
  @Input() primaryHref = '';
  @Input() primaryLabel = '';
  @Input() secondaryHref = '/';
  @Input() secondaryLabel = '';
  @Input() showChromeCta = false;

  readonly chromeUrl = environment.chromeWebStoreUrl;

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.applySeo();
    this.i18n.lang$.subscribe(() => this.applySeo());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['seoPath'] || changes['page']) {
      this.applySeo();
    }
  }

  private applySeo(): void {
    if (this.seoPath) {
      this.seo.updateForRoute(this.seoPath, this.i18n.current);
    }
  }

  resolvedPrimaryHref(): string {
    return this.primaryHref || appStoreUrl(this.seoPath.replace(/\//g, '-') || 'product');
  }

  resolvedPrimaryLabel(): string {
    return this.primaryLabel || this.i18n.t('HERO_CTA_PRIMARY');
  }

  resolvedSecondaryLabel(): string {
    return this.secondaryLabel || this.i18n.t('SEO_LANDING_BACK_HOME');
  }

  /** Turn bare https://… and emails into clickable anchors. */
  linkify(text: string): SafeHtml {
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    const withUrls = escaped.replace(
      /https?:\/\/[^\s·<]+/g,
      (url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`,
    );
    const withMails = withUrls.replace(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      (email) => `<a href="mailto:${email}">${email}</a>`,
    );
    return this.sanitizer.bypassSecurityTrustHtml(withMails);
  }
}
