import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
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
}
