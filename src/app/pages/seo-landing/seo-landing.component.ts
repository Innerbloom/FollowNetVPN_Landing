import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { landingContent, landingRelated, type LandingContent } from '../../core/seo-landing.content';
import { isLandingSlug, landingLabel, LandingSlug } from '../../core/seo-landing.slugs';
import { environment } from '../../../environments/environment';
import { appStoreUrl } from '../../core/app-store-url';

@Component({
  selector: 'app-seo-landing',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './seo-landing.component.html',
  styleUrls: ['./seo-landing.component.css'],
})
export class SeoLandingComponent implements OnInit {
  readonly iosAppStoreUrl = environment.iosAppStoreUrl;

  appStoreHref(): string {
    return appStoreUrl(this.slug ?? undefined);
  }
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
    this.related = landingRelated(slug);
    this.applyContent(slug);
    this.i18n.lang$.subscribe(() => this.applyContent(slug));
  }

  relatedLabel(relatedSlug: LandingSlug | null): string {
    if (!relatedSlug) return '';
    return landingLabel(relatedSlug, this.i18n.current);
  }

  relatedLead(relatedSlug: LandingSlug): string {
    return landingContent(relatedSlug, this.i18n.current).lead;
  }

  private applyContent(slug: LandingSlug): void {
    this.content = landingContent(slug, this.i18n.current);
    this.seo.updateForRoute(`/${slug}`, this.i18n.current);
  }
}
