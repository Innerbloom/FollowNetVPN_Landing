import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { landingSlugs, landingLabel, type LandingSlug } from '../../core/seo-landing.slugs';
import { landingContent } from '../../core/seo-landing.content';

type GuideCard = {
  slug: LandingSlug;
  title: string;
  lead: string;
};

@Component({
  selector: 'app-guides-hub',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './guides-hub.component.html',
  styleUrls: ['./guides-hub.component.css'],
})
export class GuidesHubComponent implements OnInit {
  guides: GuideCard[] = [];

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    const lang = this.i18n.current;
    this.guides = landingSlugs().map((slug) => ({
      slug,
      title: landingLabel(slug, lang),
      lead: landingContent(slug, lang).lead,
    }));
    this.seo.updateForRoute('/guides', lang);
  }
}
