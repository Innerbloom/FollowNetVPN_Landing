import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import {
  CORE_LANDING_SLUGS,
  landingLabel,
  type LandingSlug,
} from '../../core/seo-landing.slugs';
import { landingContent } from '../../core/seo-landing.content';
import { EXTRA_LANDING_SLUGS } from '../../core/seo-landing.extra-guides';

type GuideCard = {
  slug: LandingSlug;
  title: string;
  lead: string;
};

@Component({
  selector: 'app-guides-hub',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './guides-hub.component.html',
  styleUrls: ['./guides-hub.component.css'],
})
export class GuidesHubComponent implements OnInit {
  featured: GuideCard[] = [];
  more: GuideCard[] = [];

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private card(slug: LandingSlug): GuideCard {
    const lang = this.i18n.current;
    return {
      slug,
      title: landingLabel(slug, lang),
      lead: landingContent(slug, lang).lead,
    };
  }

  private refresh(): void {
    const lang = this.i18n.current;
    this.featured = CORE_LANDING_SLUGS.map((slug) => this.card(slug));
    this.more = EXTRA_LANDING_SLUGS.map((slug) => this.card(slug));
    this.seo.updateForRoute('/guides', lang);
  }
}
