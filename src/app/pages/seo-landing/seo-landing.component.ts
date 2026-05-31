import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import {
  LandingContent,
  landingContent,
  LANDING_RELATED,
} from '../../core/seo-landing.content';
import { LANDING_LABELS, isLandingSlug, LandingSlug } from '../../core/seo-landing.slugs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-seo-landing',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './seo-landing.component.html',
  styleUrls: ['./seo-landing.component.css'],
})
export class SeoLandingComponent implements OnInit {
  readonly iosAppStoreUrl = environment.iosAppStoreUrl;
  content: LandingContent | null = null;
  slug: LandingSlug | null = null;
  related: LandingSlug[] = [];

  constructor(
    private route: ActivatedRoute,
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    const path = this.route.snapshot.routeConfig?.path ?? '';
    const slug = isLandingSlug(path) ? path : null;
    this.slug = slug;
    if (!slug) return;
    this.related = LANDING_RELATED[slug] ?? [];
    this.applyContent(slug);
    this.i18n.lang$.subscribe(() => this.applyContent(slug));
  }

  relatedLabel(relatedSlug: LandingSlug): string {
    const lang: 'en' | 'ru' =
      this.i18n.current === 'ru' || this.i18n.current === 'uk' ? 'ru' : 'en';
    return LANDING_LABELS[relatedSlug][lang];
  }

  private applyContent(slug: LandingSlug): void {
    this.content = landingContent(slug, this.i18n.current);
    this.seo.updateForRoute(`/${slug}`, this.i18n.current);
  }
}
