import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import type { ProductPage } from '../../core/product-pages.content';
import { appStoreUrl, macAppStoreUrl, playStoreUrl } from '../../core/app-store-url';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [LocalizePipe, NgFor, NgIf, RouterLink],
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
  @Input() showPlayCta = false;
  @Input() showMacCta = false;

  readonly chromeUrl = environment.chromeWebStoreUrl;

  /** Real screenshot next to the page title, picked by page. */
  private static readonly HERO_SHOTS: Record<string, { img: string; wide?: boolean; ext?: boolean }> = {
    features: { img: 'ios-connected' },
    download: { img: 'ios-servers' },
    'download/ios': { img: 'ios-connected' },
    'download/mac': { img: 'mac-connected', wide: true },
    'download/chrome': { img: 'ext-connected', ext: true },
    about: { img: 'ios-multihop' },
    support: { img: 'ios-settings' },
    status: { img: 'ios-speed' },
    affiliates: { img: 'ios-profiles' },
  };

  get heroShot(): { src: string; srcset: string | null; wide: boolean; ext: boolean } | null {
    const key = (this.seoPath || '').replace(/^\/+|\/+$/g, '');
    const hit = ProductPageComponent.HERO_SHOTS[key];
    if (!hit) return null;
    const dir = 'assets/screenshots/v2/';
    if (hit.wide) {
      return { src: `${dir}${hit.img}-800.webp`, srcset: `${dir}${hit.img}-800.webp 800w, ${dir}${hit.img}.webp 1600w`, wide: true, ext: false };
    }
    if (hit.ext) {
      return { src: `${dir}${hit.img}.webp`, srcset: null, wide: false, ext: true };
    }
    return { src: `${dir}${hit.img}-400.webp`, srcset: `${dir}${hit.img}-400.webp 400w, ${dir}${hit.img}-560.webp 560w, ${dir}${hit.img}.webp 760w`, wide: false, ext: false };
  }

  appStoreBadgeHref(): string {
    return appStoreUrl((this.seoPath.replace(/\//g, '-') || 'product') + '-end');
  }

  playBadgeHref(): string {
    return playStoreUrl((this.seoPath.replace(/\//g, '-') || 'product') + '-end');
  }

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

  macHref(): string {
    return macAppStoreUrl(this.seoPath.replace(/\//g, '-') || 'product');
  }

  playHref(): string {
    return playStoreUrl(this.seoPath.replace(/\//g, '-') || 'product');
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
