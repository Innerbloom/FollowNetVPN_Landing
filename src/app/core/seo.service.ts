import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppLang, I18nService, SUPPORTED_LANGS } from './i18n.service';
import { landingContent } from './seo-landing.content';
import { landingSlugFromPath, LandingSlug } from './seo-landing.slugs';
import { APP_STORE, getSeoCopy, OG_LOCALE } from './seo-copy';
import { environment } from '../../environments/environment';

const HREFLANG_MARK = 'data-follownet-hreflang';
const DYNAMIC_JSONLD_ID = 'follownet-dynamic-jsonld';
const DEFAULT_LANG: AppLang = 'en';

const FAQ_KEYS: ReadonlyArray<{ q: string; a: string }> = [
  { q: 'FAQ_Q1', a: 'FAQ_A1' },
  { q: 'FAQ_Q2', a: 'FAQ_A2' },
  { q: 'FAQ_Q3', a: 'FAQ_A3' },
  { q: 'FAQ_Q4', a: 'FAQ_A4' },
  { q: 'FAQ_Q5', a: 'FAQ_A5' },
  { q: 'FAQ_Q6', a: 'FAQ_A6' },
  { q: 'FAQ_Q7', a: 'FAQ_A7' },
  { q: 'FAQ_Q8', a: 'FAQ_A8' },
  { q: 'FAQ_Q9', a: 'FAQ_A9' },
];

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly i18n: I18nService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.applyGoogleSiteVerification();
  }

  updateForRoute(path: string, lang: AppLang): void {
    const origin = this.siteOrigin();
    const cleanPath = (path.split('?')[0] || '/').replace(/\/+$/, '') || '/';
    const copy = getSeoCopy(lang, cleanPath);
    const pagePath = cleanPath === '/' ? '/' : cleanPath;
    const canonicalUrl = this.canonicalFor(pagePath, origin, lang);
    const ogImage = `${origin}/og/og.png`;

    this.title.setTitle(copy.title);
    this.setHtmlLang(lang);
    this.setCanonical(canonicalUrl);
    this.setHreflangAlternates(pagePath, origin);

    this.meta.updateTag({ name: 'description', content: copy.description });
    this.meta.updateTag({ name: 'robots', content: copy.robots ?? 'index,follow,max-image-preview:large' });

    this.meta.updateTag({ property: 'og:title', content: copy.ogTitle });
    this.meta.updateTag({ property: 'og:description', content: copy.description });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'FollowNet VPN' });
    this.meta.updateTag({ property: 'og:locale', content: OG_LOCALE[lang] ?? 'en_US' });

    this.document.head
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((node) => node.remove());
    for (const altLang of SUPPORTED_LANGS) {
      if (altLang === lang) continue;
      this.meta.addTag({
        property: 'og:locale:alternate',
        content: OG_LOCALE[altLang] ?? 'en_US',
      });
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: copy.ogTitle });
    this.meta.updateTag({ name: 'twitter:description', content: copy.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    const landingSlug = this.landingSlugFromPath(pagePath);
    if (pagePath === '/') {
      this.setHomeJsonLd(lang, origin, ogImage, canonicalUrl);
    } else if (landingSlug) {
      this.setLandingJsonLd(landingSlug, lang, origin, ogImage, canonicalUrl, copy);
    } else {
      this.removeDynamicJsonLd();
    }
  }

  private siteOrigin(): string {
    const configured = environment.siteUrl?.replace(/\/$/, '');
    if (configured) return configured;

    const origin = this.document.location?.origin;
    if (
      origin &&
      origin !== 'null' &&
      !origin.includes('ng-localhost') &&
      !origin.includes('localhost')
    ) {
      return origin;
    }
    return 'https://follow-net.com';
  }

  private canonicalFor(pagePath: string, origin: string, lang: AppLang): string {
    if (lang === DEFAULT_LANG) {
      return `${origin}${pagePath === '/' ? '/' : pagePath}`;
    }
    return this.urlForLang(pagePath, origin, lang);
  }

  private landingSlugFromPath(pagePath: string): LandingSlug | null {
    return landingSlugFromPath(pagePath.startsWith('/') ? pagePath : `/${pagePath}`);
  }

  private setHtmlLang(lang: AppLang): void {
    this.document.documentElement.lang = lang;
  }

  private setCanonical(href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = href;
  }

  private setHreflangAlternates(pagePath: string, origin: string): void {
    this.document.head
      .querySelectorAll(`link[rel="alternate"][hreflang], link[${HREFLANG_MARK}]`)
      .forEach((node) => node.remove());

    for (const lang of SUPPORTED_LANGS) {
      const link = this.document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = this.urlForLang(pagePath, origin, lang);
      link.setAttribute(HREFLANG_MARK, '1');
      this.document.head.appendChild(link);
    }

    const xDefault = this.document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${origin}${pagePath === '/' ? '/' : pagePath}`;
    xDefault.setAttribute(HREFLANG_MARK, '1');
    this.document.head.appendChild(xDefault);
  }

  private urlForLang(pagePath: string, origin: string, lang: AppLang): string {
    if (lang === DEFAULT_LANG) {
      return `${origin}${pagePath === '/' ? '/' : pagePath}`;
    }
    const url = new URL(`${origin}${pagePath === '/' ? '/' : pagePath}`);
    url.searchParams.set('lang', lang);
    return url.toString();
  }

  private applyGoogleSiteVerification(): void {
    const token = environment.googleSiteVerification?.trim();
    if (!token) return;
    this.meta.updateTag({ name: 'google-site-verification', content: token });
  }

  private setHomeJsonLd(lang: AppLang, origin: string, ogImage: string, pageUrl: string): void {
    const faqItems = FAQ_KEYS.map(({ q, a }) => ({
      '@type': 'Question',
      name: this.i18n.t(q as never),
      acceptedAnswer: {
        '@type': 'Answer',
        text: this.i18n.t(a as never),
      },
    }));

    const payload = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: getSeoCopy(lang, '/').ogTitle,
          description: getSeoCopy(lang, '/').description,
          inLanguage: lang,
          isPartOf: { '@id': `${origin}/#website` },
        },
        {
          '@type': 'MobileApplication',
          '@id': `${origin}/#app`,
          name: 'FollowNet VPN',
          operatingSystem: 'iOS',
          applicationCategory: 'SecurityApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          downloadUrl: APP_STORE,
          installUrl: APP_STORE,
          image: ogImage,
          description: getSeoCopy(lang, '/').description,
        },
        {
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          mainEntity: faqItems,
        },
      ],
    };

    this.upsertJsonLd(DYNAMIC_JSONLD_ID, payload);
  }

  private setLandingJsonLd(
    slug: LandingSlug,
    lang: AppLang,
    origin: string,
    ogImage: string,
    pageUrl: string,
    copy: ReturnType<typeof getSeoCopy>,
  ): void {
    const content = landingContent(slug, lang);
    const faqItems = content.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }));

    const payload = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: copy.ogTitle,
          description: copy.description,
          inLanguage: lang,
          isPartOf: { '@id': `${origin}/#website` },
        },
        {
          '@type': 'MobileApplication',
          '@id': `${origin}/#app`,
          name: 'FollowNet VPN',
          operatingSystem: 'iOS',
          applicationCategory: 'SecurityApplication',
          downloadUrl: APP_STORE,
          installUrl: APP_STORE,
          image: ogImage,
        },
        {
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          mainEntity: faqItems,
        },
      ],
    };

    this.upsertJsonLd(DYNAMIC_JSONLD_ID, payload);
  }

  private removeDynamicJsonLd(): void {
    this.document.getElementById(DYNAMIC_JSONLD_ID)?.remove();
  }

  private upsertJsonLd(id: string, payload: unknown): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(payload);
  }
}
