import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { LANDING_LABELS, landingSlugs, LandingSlug } from '../../core/seo-landing.slugs';

@Component({
  selector: 'app-seo-guides',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './seo-guides.component.html',
  styleUrls: ['./seo-guides.component.css'],
})
export class SeoGuidesComponent implements OnInit {
  readonly slugs = landingSlugs();

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.refreshSeo();
    this.i18n.lang$.subscribe(() => this.refreshSeo());
  }

  label(slug: LandingSlug): string {
    const lang: 'en' | 'ru' =
      this.i18n.current === 'ru' || this.i18n.current === 'uk' ? 'ru' : 'en';
    return LANDING_LABELS[slug][lang];
  }

  private refreshSeo(): void {
    this.seo.updateForRoute('/ios-vpn-guides', this.i18n.current);
  }
}
