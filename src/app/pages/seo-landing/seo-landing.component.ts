import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { landingContent, LANDING_RELATED, type LandingContent } from '../../core/seo-landing.content';
import { isLandingSlug, landingLabel, LandingSlug } from '../../core/seo-landing.slugs';
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
  heroShot = 'assets/screenshots/IMG_6290-portrait.png';

  private readonly heroShots: Partial<Record<LandingSlug, string>> = {
    'vpn-for-iphone': 'assets/screenshots/IMG_6290-portrait.png',
    'wireguard-vpn-ios': 'assets/screenshots/IMG_6291-portrait.png',
    'free-vpn-iphone': 'assets/screenshots/IMG_6290-portrait.png',
    'smart-connect-vpn': 'assets/screenshots/IMG_6292-portrait.png',
    'vpn-speed-test-ios': 'assets/screenshots/IMG_6293-portrait.png',
    'best-vpn-iphone': 'assets/screenshots/IMG_6294-portrait.png',
    'secure-vpn-iphone': 'assets/screenshots/IMG_6291-portrait.png',
    'vpn-for-ipad': 'assets/screenshots/IMG_6294-portrait.png',
  };

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
    this.heroShot = this.heroShots[slug] ?? this.heroShot;
    this.applyContent(slug);
    this.i18n.lang$.subscribe(() => this.applyContent(slug));
  }

  relatedLabel(relatedSlug: LandingSlug): string {
    return landingLabel(relatedSlug, this.i18n.current);
  }

  heroAlt(): string {
    return this.content?.h1 ?? 'FollowNet VPN for iOS';
  }

  private applyContent(slug: LandingSlug): void {
    this.content = landingContent(slug, this.i18n.current);
    this.seo.updateForRoute(`/${slug}`, this.i18n.current);
  }
}
