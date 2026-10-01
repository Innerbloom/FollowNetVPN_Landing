import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { landingLabel, type LandingSlug } from '../../core/seo-landing.slugs';
import { landingContent } from '../../core/seo-landing.content';
import { deepGuideCached } from '../../core/seo-landing.deep';
import { GUIDE_CATEGORIES } from './guides-hub.categories';

type GuideCard = {
  slug: LandingSlug;
  title: string;
  lead: string;
};

type GuideSection = {
  id: string;
  title: string;
  note: string;
  cards: GuideCard[];
};

@Component({
  selector: 'app-guides-hub',
  standalone: true,
  imports: [LocalizePipe, NgFor, RouterLink],
  templateUrl: './guides-hub.component.html',
  styleUrls: ['./guides-hub.component.css'],
})
export class GuidesHubComponent implements OnInit {
  sections: GuideSection[] = [];

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
      lead: (deepGuideCached(lang, slug) ?? landingContent(slug, lang)).lead,
    };
  }

  private refresh(): void {
    const lang = this.i18n.current;
    this.sections = GUIDE_CATEGORIES.map((c) => ({
      id: c.id,
      title: c.title[lang],
      note: c.note[lang],
      cards: c.slugs.map((slug) => this.card(slug)),
    }));
    this.seo.updateForRoute('/guides', lang);
  }
}
