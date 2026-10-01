/** Shared locale URL helpers for SEO (canonical / hreflang / /ru/… prefixes). */
import type { AppLang } from './i18n.service';

export const SEO_DEFAULT_LANG: AppLang = 'en';

/** Non-default languages live under a path prefix: /ru, /de/vpn-for-iphone, … */
export const PREFIXED_LANGS: readonly AppLang[] = ['ru', 'de', 'es', 'fr', 'pt', 'uk'] as const;

export function pagePathFromUrl(url: string): string {
  const path = (url.split(/[?#]/)[0] || '/').replace(/\/+$/, '') || '/';
  return path.startsWith('/') ? path : `/${path}`;
}

/** `/ru/vpn-for-iphone` → { lang: 'ru', path: '/vpn-for-iphone' }; unprefixed paths are EN. */
export function splitLangPrefix(url: string): { lang: AppLang | null; path: string } {
  const path = pagePathFromUrl(url);
  const first = path.split('/')[1] ?? '';
  if ((PREFIXED_LANGS as readonly string[]).includes(first)) {
    const rest = path.slice(first.length + 1) || '/';
    return { lang: first as AppLang, path: rest };
  }
  return { lang: null, path };
}

/** Site-relative path for a page in a given language (EN = clean path). */
export function localizedPath(
  pagePath: string,
  lang: AppLang,
  defaultLang: AppLang = SEO_DEFAULT_LANG,
): string {
  const clean = pagePathFromUrl(pagePath);
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

/** Absolute URL for a page in a given language. */
export function absoluteUrlForLang(
  pagePath: string,
  origin: string,
  lang: AppLang,
  defaultLang: AppLang = SEO_DEFAULT_LANG,
): string {
  const path = localizedPath(pagePath, lang, defaultLang);
  return `${origin.replace(/\/$/, '')}${path}`;
}

/** routerLink value (string or commands array) prefixed for the current language. */
export function localizeLink(link: string | readonly unknown[], lang: AppLang): string | unknown[] {
  if (typeof link === 'string') {
    return link.startsWith('/') ? localizedPath(link, lang) : link;
  }
  const [head, ...rest] = link;
  if (typeof head !== 'string' || !head.startsWith('/')) return [...link];
  const prefixed = localizedPath(head, lang);
  // ['/', slug] → ['/ru', slug]; ['/blog', slug] → ['/ru/blog', slug]
  return [prefixed, ...rest];
}
