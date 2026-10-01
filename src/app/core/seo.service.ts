import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppLang, I18nService, SUPPORTED_LANGS } from './i18n.service';
import { landingSlugFromPath, LandingSlug } from './seo-landing.slugs';
import { APP_STORE, getSeoCopy, OG_LOCALE } from './seo-copy';
import { absoluteUrlForLang, SEO_DEFAULT_LANG, splitLangPrefix } from './locale-url';
import { environment } from '../../environments/environment';

export interface PageSeoOverride {
  title?: string;
  description?: string;
  faq?: ReadonlyArray<{ q: string; a: string }>;
  datePublished?: string;
  dateModified?: string;
}

interface PageJsonLdInput {
  lang: AppLang;
  origin: string;
  ogImage: string;
  pageUrl: string;
  pagePath: string;
  copy: ReturnType<typeof getSeoCopy>;
  override: PageSeoOverride;
}

const HREFLANG_MARK = 'data-follownet-hreflang';
const DYNAMIC_JSONLD_ID = 'follownet-dynamic-jsonld';
const DEFAULT_LANG: AppLang = SEO_DEFAULT_LANG;

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
  /** Page-provided SEO data (from lazily loaded page bodies), keyed by `lang:path`. */
  private readonly pageOverrides = new Map<string, PageSeoOverride>();

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly i18n: I18nService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.applyGoogleSiteVerification();
  }

  /**
   * Pages call this before updateForRoute with data only they have loaded: a description
   * from the page lead, FAQ items, or an article date. Keeps JSON-LD synchronous so it
   * lands in the prerendered HTML.
   */
  setPageOverride(path: string, lang: AppLang, data: PageSeoOverride): void {
    const key = `${lang}:${splitLangPrefix(path).path}`;
    this.pageOverrides.set(key, { ...this.pageOverrides.get(key), ...data });
  }

  updateForRoute(path: string, lang: AppLang): void {
    const origin = this.siteOrigin();
    const cleanPath = splitLangPrefix(path).path;
    const base = getSeoCopy(lang, cleanPath);
    const override = this.pageOverrides.get(`${lang}:${cleanPath}`) ?? {};
    const copy = {
      ...base,
      ...(override.title ? { title: override.title } : {}),
      ...(override.description ? { description: override.description } : {}),
    };
    const pagePath = cleanPath === '/' ? '/' : cleanPath;
    const canonicalUrl = this.canonicalFor(pagePath, origin, lang);
    const indexable = !copy.robots?.includes('noindex');
    // Per-page cards are rendered at build time by scripts/og-images.mjs from the prerendered HTML.
    const ogImage = indexable ? `${origin}${ogImagePath(canonicalUrl)}` : `${origin}/og/og.png`;

    this.title.setTitle(copy.title);
    this.setHtmlLang(lang);
    if (indexable) {
      this.setCanonical(canonicalUrl);
      this.setHreflangAlternates(pagePath, origin);
    } else {
      // 404 / checkout: no canonical or language alternates pointing at a non-page.
      this.document.head
        .querySelectorAll(`link[rel="canonical"], link[rel="alternate"][hreflang]`)
        .forEach((node) => node.remove());
    }

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

    if (!indexable) {
      this.removeDynamicJsonLd();
      return;
    }
    const page = { lang, origin, ogImage, pageUrl: canonicalUrl, pagePath, copy, override };
    if (pagePath === '/') {
      this.setHomeJsonLd(lang, origin, ogImage, canonicalUrl);
    } else if (this.landingSlugFromPath(pagePath)) {
      this.setLandingJsonLd(page);
    } else if (pagePath.startsWith('/blog/')) {
      this.setBlogJsonLd(page);
    } else {
      this.setSimpleWebPageJsonLd(page);
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
    return absoluteUrlForLang(pagePath, origin, lang, DEFAULT_LANG);
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
    return absoluteUrlForLang(pagePath, origin, lang, DEFAULT_LANG);
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

  private webPageNode(p: PageJsonLdInput) {
    return {
      '@type': 'WebPage',
      '@id': `${p.pageUrl}#webpage`,
      url: p.pageUrl,
      name: p.copy.ogTitle,
      description: p.copy.description,
      inLanguage: p.lang,
      isPartOf: { '@id': `${p.origin}/#website` },
      breadcrumb: { '@id': `${p.pageUrl}#breadcrumb` },
    };
  }

  /** Home › [Guides | Blog] › Page — mirrors the visible breadcrumb on landing and blog pages. */
  private breadcrumbNode(p: PageJsonLdInput) {
    const home = absoluteUrlForLang('/', p.origin, p.lang, DEFAULT_LANG);
    const items: Array<{ name: string; item: string }> = [{ name: 'FollowNet', item: home }];
    if (this.landingSlugFromPath(p.pagePath) && p.pagePath !== '/guides') {
      items.push({ name: getSeoCopy(p.lang, '/guides').ogTitle, item: absoluteUrlForLang('/guides', p.origin, p.lang, DEFAULT_LANG) });
    } else if (p.pagePath.startsWith('/blog/')) {
      items.push({ name: getSeoCopy(p.lang, '/blog').ogTitle, item: absoluteUrlForLang('/blog', p.origin, p.lang, DEFAULT_LANG) });
    }
    items.push({ name: p.copy.ogTitle, item: p.pageUrl });
    return {
      '@type': 'BreadcrumbList',
      '@id': `${p.pageUrl}#breadcrumb`,
      itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.item })),
    };
  }

  private setLandingJsonLd(p: PageJsonLdInput): void {
    const build = (faq: ReadonlyArray<{ q: string; a: string }>) => ({
      '@context': 'https://schema.org',
      '@graph': [
        this.webPageNode(p),
        this.breadcrumbNode(p),
        {
          '@type': 'MobileApplication',
          '@id': `${p.origin}/#app`,
          name: 'FollowNet VPN',
          operatingSystem: 'iOS',
          applicationCategory: 'SecurityApplication',
          downloadUrl: APP_STORE,
          installUrl: APP_STORE,
          image: p.ogImage,
        },
        ...(faq.length
          ? [
              {
                '@type': 'FAQPage',
                '@id': `${p.pageUrl}#faq`,
                mainEntity: faq.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              },
            ]
          : []),
      ],
    });

    if (p.override.faq) {
      this.upsertJsonLd(DYNAMIC_JSONLD_ID, build(p.override.faq));
      return;
    }
    const slug = this.landingSlugFromPath(p.pagePath)!;
    void import('./seo-landing.content').then(({ landingContent }) => {
      this.upsertJsonLd(DYNAMIC_JSONLD_ID, build(landingContent(slug, p.lang).faq));
    });
  }

  private setBlogJsonLd(p: PageJsonLdInput): void {
    const date = p.override.datePublished;
    const payload = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `${p.pageUrl}#article`,
          headline: p.copy.ogTitle,
          description: p.copy.description,
          url: p.pageUrl,
          image: p.ogImage,
          inLanguage: p.lang,
          ...(date ? { datePublished: date, dateModified: p.override.dateModified ?? date } : {}),
          author: { '@id': `${p.origin}/#organization` },
          publisher: { '@id': `${p.origin}/#organization` },
          isPartOf: { '@id': `${p.origin}/#website` },
          mainEntityOfPage: { '@id': `${p.pageUrl}#webpage` },
        },
        this.webPageNode(p),
        this.breadcrumbNode(p),
      ],
    };
    this.upsertJsonLd(DYNAMIC_JSONLD_ID, payload);
  }

  private setSimpleWebPageJsonLd(p: PageJsonLdInput): void {
    this.upsertJsonLd(DYNAMIC_JSONLD_ID, {
      '@context': 'https://schema.org',
      '@graph': [this.webPageNode(p), this.breadcrumbNode(p)],
    });
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

/** `/og/p/<canonical path>.png`; the root page maps to `home`. */
function ogImagePath(canonicalUrl: string): string {
  const path = new URL(canonicalUrl).pathname.replace(/\/+$/, '');
  return `/og/p${path || '/home'}.png`;
}
