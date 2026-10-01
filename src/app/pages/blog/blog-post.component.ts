import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { localizedPath } from '../../core/locale-url';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import {
  blogPost,
  blogPosts,
  blogTopicLabel,
  type BlogPostView,
} from '../../core/blog.content';
import { appStoreUrl } from '../../core/app-store-url';
import { blogGuides } from '../../core/blog-guide-links';
import { landingContent } from '../../core/seo-landing.content';
import { landingLabel, type LandingSlug } from '../../core/seo-landing.slugs';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [LocalizePipe, NgFor, NgIf, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  post: BlogPostView | null = null;
  related: BlogPostView[] = [];
  guides: LandingSlug[] = [];

  constructor(
    public i18n: I18nService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.refresh());
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  appStoreHref(): string {
    return appStoreUrl(`blog-${this.post?.slug ?? 'post'}`);
  }

  topicLabel(post: BlogPostView): string {
    return blogTopicLabel(post.topic, this.i18n.current);
  }

  formatDate(iso: string): string {
    const locale =
      this.i18n.current === 'ru' || this.i18n.current === 'uk'
        ? 'ru-RU'
        : this.i18n.current === 'de'
          ? 'de-DE'
          : this.i18n.current === 'es'
            ? 'es-ES'
            : this.i18n.current === 'fr'
              ? 'fr-FR'
              : this.i18n.current === 'pt'
                ? 'pt-PT'
                : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(`${iso}T12:00:00Z`));
  }

  guideLabel(slug: LandingSlug): string {
    return landingLabel(slug, this.i18n.current);
  }

  guideLead(slug: LandingSlug): string {
    return landingContent(slug, this.i18n.current).lead;
  }

  readLabel(minutes: number): string {
    return this.i18n.t('BLOG_READ_TIME').replace('{n}', String(minutes));
  }

  private refresh(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    const post = blogPost(slug, this.i18n.current);
    if (!post) {
      void this.router.navigateByUrl(localizedPath('/blog', this.i18n.current));
      return;
    }
    this.post = post;
    this.guides = blogGuides(slug);
    // Closest posts first: shared guides weigh more than a shared topic; ties keep newest-first order.
    const score = (p: BlogPostView) =>
      blogGuides(p.slug).filter((g) => this.guides.includes(g)).length * 2 + (p.topic === post.topic ? 1 : 0);
    this.related = blogPosts(this.i18n.current)
      .filter((p) => p.slug !== slug)
      .map((p, i) => ({ p, i, s: score(p) }))
      .sort((a, b) => b.s - a.s || a.i - b.i)
      .slice(0, 3)
      .map((x) => x.p);
    this.seo.setPageOverride(`/blog/${slug}`, this.i18n.current, { datePublished: post.date });
    this.seo.updateForRoute(`/blog/${slug}`, this.i18n.current);
  }
}
