#!/usr/bin/env node
/**
 * Regenerates prerender-routes.txt and public/sitemap.xml
 * from CORE + EXTRA landing slugs + blog.content + blog.extra-posts + static pages.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function extractQuotedList(source, exportName) {
  const block =
    source.match(new RegExp(`export const ${exportName}(?::[^=]*)?= \\[([\\s\\S]*?)\\](?: as const)?`)) ||
    source.match(new RegExp(`export const ${exportName} = \\[([\\s\\S]*?)\\] as const`));
  if (!block) throw new Error(`${exportName} not found`);
  return [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

function extractTypeUnionSlugs(source, typeName) {
  const block = source.match(new RegExp(`export type ${typeName} =([\\s\\S]*?)\\n\\ntype `));
  const alt = source.match(new RegExp(`export type ${typeName} =([\\s\\S]*?)\\ntype Seed`));
  const body = (block || alt)?.[1];
  if (!body) {
    // fallback: all slug: '...' in EXTRA_GUIDES
    return [...source.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  }
  return [...body.matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

function extractBlogSlugs(...sources) {
  const set = new Set();
  for (const source of sources) {
    for (const m of source.matchAll(/slug:\s*'([^']+)'/g)) set.add(m[1]);
  }
  return [...set];
}

const slugsTs = readFileSync(join(root, 'src/app/core/seo-landing.slugs.ts'), 'utf8');
const extraSlugsTs = readFileSync(join(root, 'src/app/core/seo-landing.extra-slugs.ts'), 'utf8');
const blogTs = readFileSync(join(root, 'src/app/core/blog.content.ts'), 'utf8');
let blogExtraTs = '';
try {
  blogExtraTs = readFileSync(join(root, 'src/app/core/blog.extra-posts.ts'), 'utf8');
} catch {
  // optional
}

/** slug → publish date, so blog <lastmod> reflects real changes instead of every build. */
function extractBlogDates(...sources) {
  const dates = new Map();
  for (const source of sources) {
    for (const m of source.matchAll(/slug:\s*'([^']+)',\s*date:\s*'(\d{4}-\d{2}-\d{2})'/g)) dates.set(m[1], m[2]);
  }
  return dates;
}

const coreSlugs = extractQuotedList(slugsTs, 'CORE_LANDING_SLUGS');
const extraSlugs = extractQuotedList(extraSlugsTs, 'EXTRA_LANDING_SLUGS');
const slugs = [...coreSlugs, ...extraSlugs];
const blogSlugs = extractBlogSlugs(blogTs, blogExtraTs);
const blogDates = extractBlogDates(blogTs, blogExtraTs);

const LANGS = ['en', 'ru', 'de', 'es', 'fr', 'pt', 'uk'];
const SITE = 'https://follow-net.com';
const LASTMOD = new Date().toISOString().slice(0, 10);

const staticPaths = [
  '/',
  '/privacy',
  '/terms',
  '/blog',
  '/guides',
  '/features',
  '/download',
  '/download/ios',
  '/download/chrome',
  '/about',
  '/press',
  '/affiliates',
  '/support',
  '/status',
];
const landingPaths = slugs.map((s) => `/${s}`);
const blogPaths = blogSlugs.map((s) => `/blog/${s}`);
const allContentPaths = [...staticPaths, ...landingPaths, ...blogPaths];

/** EN lives at the root; other languages under /ru, /de/vpn-for-iphone, … */
function localized(path, lang) {
  if (lang === 'en') return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

// Not in the sitemap, but must exist as real files once the SPA fallback is gone.
const utilityPaths = ['/checkout', '/account'];

const lines = [];
for (const lang of LANGS) {
  for (const p of [...allContentPaths, ...utilityPaths]) lines.push(localized(p, lang));
}
// Rendered by the `**` route; flattened to /404.html for Cloudflare Pages.
lines.push('/404');

writeFileSync(join(root, 'prerender-routes.txt'), `${lines.join('\n')}\n`);

function hreflangBlock(path) {
  const rows = LANGS.map(
    (lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}${localized(path, lang)}"/>`,
  );
  rows.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${path}"/>`);
  return rows.join('\n');
}

/** One <url> per language version, each listing all alternates (Google's sitemap hreflang format). */
function urlEntries(path, priority, changefreq = 'monthly') {
  const lastmod = path.startsWith('/blog/') ? blogDates.get(path.slice('/blog/'.length)) ?? LASTMOD : LASTMOD;
  return LANGS.map(
    (lang) => `  <url>
    <loc>${SITE}${localized(path, lang)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${hreflangBlock(path)}
  </url>`,
  ).join('\n');
}

const sitemapPaths = [
  ['/', '1.0', 'weekly'],
  ...landingPaths.map((p) => [p, '0.85']),
  ['/guides', '0.85', 'weekly'],
  ['/blog', '0.8', 'weekly'],
  ...blogPaths.map((p) => [p, '0.75']),
  ['/features', '0.8'],
  ['/download', '0.85'],
  ['/download/ios', '0.8'],
  ['/download/chrome', '0.8'],
  ['/about', '0.7'],
  ['/press', '0.75'],
  ['/affiliates', '0.75'],
  ['/support', '0.75'],
  ['/status', '0.55'],
  ['/privacy', '0.5'],
  ['/terms', '0.5'],
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapPaths.map(([p, priority, freq]) => urlEntries(p, priority, freq)).join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), sitemap);
console.log(
  `Generated ${lines.length} prerender routes (${slugs.length} landings, ${blogSlugs.length} posts) and sitemap with ${sitemapPaths.length * LANGS.length} URLs.`,
);
