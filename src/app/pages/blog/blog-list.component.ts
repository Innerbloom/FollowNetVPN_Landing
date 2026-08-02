import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import {
  blogPosts,
  blogTopicLabel,
  type BlogPostView,
} from '../../core/blog.content';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  posts: BlogPostView[] = [];

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
    this.posts = blogPosts(this.i18n.current);
    this.seo.updateForRoute('/blog', this.i18n.current);
  }
}
