import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../environments/environment';

type GtagFn = (...args: unknown[]) => void;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private initialized = false;
  private readonly measurementId = environment.googleAnalyticsMeasurementId?.trim() ?? '';
  private readonly adsSendTo = environment.googleAdsConversionSendTo?.trim() ?? '';

  constructor(
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  /** Call once from the main shell (browser only). */
  start(): void {
    if (!isPlatformBrowser(this.platformId) || this.initialized || !this.measurementId) {
      return;
    }

    this.initialized = true;
    void this.bootstrap().then(() => {
      this.trackPageView(this.router.url);
      this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((e) => this.trackPageView(e.urlAfterRedirects));

      this.document.addEventListener('click', (ev) => this.onDocumentClick(ev), true);
    });
  }

  trackPageView(url: string): void {
    if (!this.initialized) return;

    const path = this.normalizePath(url);
    const pageLocation = `${this.siteOrigin()}${path === '/' ? '' : path}`;

    this.gtag('event', 'page_view', {
      page_path: path,
      page_location: pageLocation,
      page_title: this.document.title,
    });
  }

  trackAppStoreClick(source?: string): void {
    if (!this.initialized) return;

    const path = this.normalizePath(this.router.url);

    this.gtag('event', 'app_store_click', {
      page_path: path,
      link_url: environment.iosAppStoreUrl,
      event_category: 'engagement',
      event_label: source ?? 'app_store',
      transport_type: 'beacon',
      ...this.campaignParams(),
    });

    if (this.adsSendTo) {
      this.gtag('event', 'conversion', { send_to: this.adsSendTo });
    }
  }

  private async bootstrap(): Promise<void> {
    await this.loadGtagScript(this.measurementId);
    const w = this.document.defaultView;
    if (!w) return;

    w.dataLayer = w.dataLayer ?? [];
    const gtag: GtagFn = (...args) => {
      w.dataLayer!.push(args);
    };
    w.gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.measurementId, { send_page_view: false });

    const adsId = this.adsConversionId();
    if (adsId) {
      gtag('config', adsId);
    }
  }

  private loadGtagScript(id: string): Promise<void> {
    const src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    const existing = this.document.querySelector(`script[src="${src}"]`);
    if (existing) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const script = this.document.createElement('script');
      script.async = true;
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('gtag.js failed to load'));
      this.document.head.appendChild(script);
    });
  }

  private onDocumentClick(ev: MouseEvent): void {
    const target = ev.target;
    if (!(target instanceof Element)) return;

    const anchor = target.closest('a[href]');
    if (!(anchor instanceof HTMLAnchorElement)) return;
    if (!this.isAppStoreLink(anchor.href)) return;

    // Give gtag time to send before the browser opens App Store in a new tab.
    if (!this.initialized) return;
    ev.preventDefault();
    this.trackAppStoreClick(this.linkLabel(anchor));
    const href = anchor.href;
    const targetAttr = anchor.target;
    window.setTimeout(() => {
      if (targetAttr === '_blank') {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.assign(href);
      }
    }, 150);
  }

  private isAppStoreLink(href: string): boolean {
    try {
      const url = new URL(href, this.siteOrigin());
      return url.hostname === 'apps.apple.com';
    } catch {
      return false;
    }
  }

  private linkLabel(anchor: HTMLAnchorElement): string {
    const text = anchor.textContent?.trim().replace(/\s+/g, ' ');
    return text ? text.slice(0, 80) : 'app_store';
  }

  private adsConversionId(): string | null {
    if (!this.adsSendTo.startsWith('AW-')) return null;
    const slash = this.adsSendTo.indexOf('/');
    return slash > 0 ? this.adsSendTo.slice(0, slash) : this.adsSendTo;
  }

  private normalizePath(url: string): string {
    const path = (url.split('?')[0] || '/').replace(/\/+$/, '') || '/';
    return path.startsWith('/') ? path : `/${path}`;
  }

  private siteOrigin(): string {
    return environment.siteUrl?.replace(/\/$/, '') || this.document.location?.origin || '';
  }

  /** UTM / gclid from landing URL — passed to GA4 on App Store clicks. */
  private campaignParams(): Record<string, string> {
    if (!isPlatformBrowser(this.platformId)) return {};

    const params = new URLSearchParams(this.document.defaultView?.location.search ?? '');
    const out: Record<string, string> = {};
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid']) {
      const value = params.get(key)?.trim();
      if (value) out[key] = value;
    }
    return out;
  }

  private gtag(...args: unknown[]): void {
    this.document.defaultView?.gtag?.(...args);
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}
