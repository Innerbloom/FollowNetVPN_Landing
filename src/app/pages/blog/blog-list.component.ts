import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import {
  blogPosts,
  blogTopicLabel,
  type BlogPostView,
  type BlogTopic,
} from '../../core/blog.content';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [LocalizePipe, NgFor, NgIf, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  posts: BlogPostView[] = [];
  featured: BlogPostView | null = null;
  rest: BlogPostView[] = [];
  topics: { id: BlogTopic; label: string; count: number }[] = [];
  topic: BlogTopic | null = null;

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
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
    const lang = this.i18n.current;
    this.posts = blogPosts(lang);
    [this.featured = null, ...this.rest] = this.posts;
    const order: BlogTopic[] = ['guides', 'product', 'updates'];
    this.topics = order
      .map((id) => ({
        id,
        label: blogTopicLabel(id, lang),
        count: this.rest.filter((p) => p.topic === id).length,
      }))
      .filter((t) => t.count > 0);
    this.seo.updateForRoute('/blog', this.i18n.current);
  }
}
