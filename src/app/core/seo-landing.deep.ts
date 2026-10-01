import type { AppLang } from './i18n.service';
import type { LandingContent } from './seo-landing.content';
import type { ExtraLandingSlug } from './seo-landing.extra-slugs';

/** Long-form rewrites of the priority guides, one lazily loaded chunk per language. */
export type DeepGuides = Partial<Record<ExtraLandingSlug, LandingContent>>;

const cache = new Map<AppLang, DeepGuides>();

export async function loadDeepGuides(lang: AppLang): Promise<DeepGuides> {
  const hit = cache.get(lang);
  if (hit) return hit;
  let pack: DeepGuides;
  switch (lang) {
    case 'ru':
      pack = (await import('./seo-landing.deep.ru')).DEEP;
      break;
    case 'de':
      pack = (await import('./seo-landing.deep.de')).DEEP;
      break;
    case 'es':
      pack = (await import('./seo-landing.deep.es')).DEEP;
      break;
    case 'fr':
      pack = (await import('./seo-landing.deep.fr')).DEEP;
      break;
    case 'pt':
      pack = (await import('./seo-landing.deep.pt')).DEEP;
      break;
    case 'uk':
      pack = (await import('./seo-landing.deep.uk')).DEEP;
      break;
    default:
      pack = (await import('./seo-landing.deep.en')).DEEP;
  }
  cache.set(lang, pack);
  return pack;
}

/** Synchronous lookup once loadDeepGuides(lang) has resolved (route resolver guarantees it). */
export function deepGuideCached(lang: AppLang, slug: string): LandingContent | null {
  return cache.get(lang)?.[slug as ExtraLandingSlug] ?? null;
}
