/** Shared locale URL helpers for SEO (canonical / hreflang / ?lang=). */
import type { AppLang } from './i18n.service';

export const SEO_DEFAULT_LANG: AppLang = 'en';

export function pagePathFromUrl(url: string): string {
  const path = (url.split('?')[0] || '/').replace(/\/+$/, '') || '/';
  return path.startsWith('/') ? path : `/${path}`;
}

/** Absolute URL for a page in a given language (EN = clean path, others = ?lang=). */
export function absoluteUrlForLang(
  pagePath: string,
  origin: string,
  lang: AppLang,
  defaultLang: AppLang = SEO_DEFAULT_LANG,
): string {
  const base = `${origin.replace(/\/$/, '')}${pagePath === '/' ? '/' : pagePath}`;
  if (lang === defaultLang) return base;
  const url = new URL(base);
  url.searchParams.set('lang', lang);
  return url.toString();
}

/** Browser path+search for language switch without full reload. */
export function browserPathForLang(pagePath: string, lang: AppLang, defaultLang: AppLang = SEO_DEFAULT_LANG): string {
  if (lang === defaultLang) return pagePath === '/' ? '/' : pagePath;
  const q = new URLSearchParams({ lang });
  return `${pagePath === '/' ? '/' : pagePath}?${q.toString()}`;
}
