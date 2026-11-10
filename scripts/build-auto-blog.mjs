#!/usr/bin/env node
/**
 * Auto blog: content/blog-auto/<slug>.json (written by the n8n "FollowNet Blog" workflow, or by hand)
 * → src/app/core/blog.auto-posts.ts, which blog.content.ts / blog-seo.ts / blog-visuals.ts read.
 * Runs before generate-seo-routes.mjs, which picks the slugs + dates up for prerender and sitemap.
 *
 * A post that fails validation stops the build: a half-translated or broken article must never ship.
 * JSON shape:
 * {
 *   "slug": "public-wifi-hotel-checklist", "date": "2026-11-12", "minutes": 6,
 *   "topic": "guides",                       // product | updates | guides
 *   "shots": ["ios-profiles", "ios-ipcheck"], // optional, files in src/assets/screenshots/v2
 *   "translations": { "en": { "title": "", "excerpt": "", "sections": [{ "title": "", "body": "" }] },
 *                     "ru": …, "uk": …, "de": …, "es": …, "fr": …, "pt": … }
 * }
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'content/blog-auto');
const out = join(root, 'src/app/core/blog.auto-posts.ts');
/** Titles/excerpts + screenshots only: imported by the SEO / visuals code without the article bodies. */
const outSeo = join(root, 'src/app/core/blog.auto-seo.ts');
const shotsDir = join(root, 'src/assets/screenshots/v2');

const LANGS = ['en', 'ru', 'uk', 'de', 'es', 'fr', 'pt'];
const TOPICS = ['product', 'updates', 'guides'];
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Slugs already used by hand-written posts and landings — an auto post must not shadow them. */
function existingSlugs() {
  const set = new Set();
  for (const f of ['src/app/core/blog.content.ts', 'src/app/core/blog.extra-posts.ts']) {
    const src = readFileSync(join(root, f), 'utf8');
    for (const m of src.matchAll(/slug:\s*'([^']+)'/g)) set.add(m[1]);
  }
  return set;
}

function fail(file, msg) {
  throw new Error(`[build-auto-blog] ${file}: ${msg}`);
}

function text(file, path, v, min, max) {
  if (typeof v !== 'string' || v.trim().length < min) fail(file, `${path} is empty or shorter than ${min}`);
  if (v.length > max) fail(file, `${path} is longer than ${max}`);
  return v.trim();
}

function validate(file, raw, taken) {
  const p = JSON.parse(raw);
  if (!SLUG_RE.test(p.slug ?? '') || p.slug.length > 80) fail(file, `bad slug "${p.slug}"`);
  if (file !== `${p.slug}.json`) fail(file, `file name must be ${p.slug}.json`);
  if (taken.has(p.slug)) fail(file, `slug "${p.slug}" already exists`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.date ?? '')) fail(file, 'date must be YYYY-MM-DD');
  if (!TOPICS.includes(p.topic)) fail(file, `topic must be one of ${TOPICS.join(', ')}`);
  const minutes = Number(p.minutes);
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 30) fail(file, 'minutes must be 1–30');

  let shots = null;
  if (p.shots != null) {
    if (!Array.isArray(p.shots) || p.shots.length !== 2) fail(file, 'shots must be two screenshot names');
    for (const s of p.shots) {
      const name = s.startsWith('ext') ? `${s}.webp` : `${s}-400.webp`;
      if (!existsSync(join(shotsDir, name))) fail(file, `screenshot "${s}" not found`);
    }
    shots = p.shots;
  }

  const translations = {};
  for (const lang of LANGS) {
    const t = p.translations?.[lang];
    if (!t) fail(file, `missing translation "${lang}"`);
    if (!Array.isArray(t.sections) || t.sections.length < 3 || t.sections.length > 10) {
      fail(file, `${lang}.sections must have 3–10 items`);
    }
    translations[lang] = {
      title: text(file, `${lang}.title`, t.title, 10, 120),
      excerpt: text(file, `${lang}.excerpt`, t.excerpt, 40, 300),
      sections: t.sections.map((s, i) => ({
        title: text(file, `${lang}.sections[${i}].title`, s.title, 3, 120),
        body: text(file, `${lang}.sections[${i}].body`, s.body, 80, 2500),
      })),
    };
  }
  return { slug: p.slug, date: p.date, minutes, topic: p.topic, shots, translations };
}

const taken = existingSlugs();
const posts = [];
if (existsSync(dir)) {
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
    const post = validate(file, readFileSync(join(dir, file), 'utf8'), taken);
    taken.add(post.slug);
    posts.push(post);
  }
}

const q = (s) => `'${s}'`;
const body = posts
  .map(
    (p) =>
      // `slug: '…',\n    date: '…'` — generate-seo-routes.mjs reads slugs and dates with this exact shape.
      `  {\n    slug: ${q(p.slug)},\n    date: ${q(p.date)},\n    minutes: ${p.minutes},\n    topic: ${q(p.topic)},\n` +
      `    translations: ${JSON.stringify(p.translations)},\n  },`,
  )
  .join('\n');
const shots = posts
  .filter((p) => p.shots)
  .map((p) => `  ${q(p.slug)}: [${q(p.shots[0])}, ${q(p.shots[1])}],`)
  .join('\n');
const seo = posts
  .map((p) => {
    const langs = Object.fromEntries(
      Object.entries(p.translations).map(([l, t]) => [l, { title: t.title, excerpt: t.excerpt }]),
    );
    return `  ${q(p.slug)}: ${JSON.stringify(langs)},`;
  })
  .join('\n');

mkdirSync(dirname(out), { recursive: true });
writeFileSync(
  out,
  `// GENERATED by scripts/build-auto-blog.mjs from content/blog-auto/*.json — do not edit by hand.
import type { AppLang } from './i18n.service';

type AutoSection = { title: string; body: string };
type AutoLang = { title: string; excerpt: string; sections: AutoSection[] };

export type AutoBlogPost = {
  slug: string;
  date: string;
  minutes: number;
  topic: 'product' | 'updates' | 'guides';
  translations: Record<AppLang, AutoLang>;
};

export const AUTO_BLOG_POSTS: AutoBlogPost[] = [
${body}
];
`,
);
writeFileSync(
  outSeo,
  `// GENERATED by scripts/build-auto-blog.mjs from content/blog-auto/*.json — do not edit by hand.
import type { AppLang } from './i18n.service';

export const AUTO_BLOG_SEO: Record<string, Record<AppLang, { title: string; excerpt: string }>> = {
${seo}
};

export const AUTO_BLOG_SHOTS: Record<string, [string, string]> = {
${shots}
};
`,
);
console.log(`[build-auto-blog] ${posts.length} auto post(s) → blog.auto-posts.ts + blog.auto-seo.ts`);
