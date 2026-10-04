import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { NgFor, NgIf } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { landingContent, landingRelated, type LandingContent } from '../../core/seo-landing.content';
import { isLandingSlug, landingLabel, LandingSlug } from '../../core/seo-landing.slugs';
import { hasLandingMeta, metaDescriptionFromLead, titleFromH1 } from '../../core/seo-landing.meta';
import { environment } from '../../../environments/environment';
import { deepGuideCached } from '../../core/seo-landing.deep';
import type { LandingShot } from '../../core/seo-landing.content';
import { appStoreUrl, playStoreUrl } from '../../core/app-store-url';
import { guideBlogSlugs } from '../../core/blog-guide-links';
import { blogPosts, type BlogPostView } from '../../core/blog.content';

@Component({
  selector: 'app-seo-landing',
  standalone: true,
  imports: [LocalizePipe, NgFor, NgIf, RouterLink],
  templateUrl: './seo-landing.component.html',
  styleUrls: ['./seo-landing.component.css'],
})
export class SeoLandingComponent implements OnInit {
  readonly iosAppStoreUrl = environment.iosAppStoreUrl;

  appStoreHref(): string {
    return appStoreUrl(this.slug ?? undefined);
  }

  playStoreHref(): string {
    return playStoreUrl(this.slug ?? undefined);
  }
  content: LandingContent | null = null;
  slug: LandingSlug | null = null;
  related: LandingSlug[] = [];
  posts: BlogPostView[] = [];

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
    return this.contentFor(relatedSlug).lead;
  }

  shotSrc(shot: LandingShot): string {
    return `assets/screenshots/guide/${shot}-320.webp`;
  }

  shotSrcset(shot: LandingShot): string {
    return `assets/screenshots/guide/${shot}-320.webp 320w, assets/screenshots/guide/${shot}-640.webp 640w`;
  }

  private contentFor(slug: LandingSlug) {
    return deepGuideCached(this.i18n.current, slug) ?? landingContent(slug, this.i18n.current);
  }

  readLabel(minutes: number): string {
    return this.i18n.t('BLOG_READ_TIME').replace('{n}', String(minutes));
  }

  private applyContent(slug: LandingSlug): void {
    const lang = this.i18n.current;
    this.content = this.contentFor(slug);
    const linked = guideBlogSlugs(slug);
    this.posts = blogPosts(lang)
      .filter((p) => linked.includes(p.slug))
      .slice(0, 2);
    this.seo.setPageOverride(`/${slug}`, lang, {
      faq: this.content.faq,
      ...(hasLandingMeta(slug, lang)
        ? {}
        : {
            title: titleFromH1(this.content.h1, landingLabel(slug, lang)),
            description: metaDescriptionFromLead(this.content.lead, lang),
          }),
    });
    this.seo.updateForRoute(`/${slug}`, lang);
  }
}
