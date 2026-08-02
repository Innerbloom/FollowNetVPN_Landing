import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import {
  blogPost,
  blogPosts,
  blogTopicLabel,
  type BlogPostView,
} from '../../core/blog.content';
import { appStoreUrl } from '../../core/app-store-url';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  post: BlogPostView | null = null;
  related: BlogPostView[] = [];

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

  readLabel(minutes: number): string {
    return this.i18n.t('BLOG_READ_TIME').replace('{n}', String(minutes));
  }

  private refresh(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    const post = blogPost(slug, this.i18n.current);
    if (!post) {
      void this.router.navigateByUrl('/blog');
      return;
    }
    this.post = post;
    this.related = blogPosts(this.i18n.current)
      .filter((p) => p.slug !== slug)
      .slice(0, 3);
    this.seo.updateForRoute(`/blog/${slug}`, this.i18n.current);
  }
}
