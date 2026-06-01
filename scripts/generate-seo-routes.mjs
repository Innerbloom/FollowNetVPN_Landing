#!/usr/bin/env node
/**
 * Regenerates prerender-routes.txt and landing sections of public/sitemap.xml
 * from src/app/core/seo-landing.slugs.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const slugsTs = readFileSync(join(root, 'src/app/core/seo-landing.slugs.ts'), 'utf8');
const block = slugsTs.match(/export const LANDING_SLUGS = \[([\s\S]*?)\] as const/);
if (!block) throw new Error('LANDING_SLUGS not found');
const slugs = [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);

const LANGS = ['ru', 'en', 'de', 'es', 'fr', 'pt', 'uk'];
const SITE = 'https://follow-net.com';
const LASTMOD = '2026-06-01';

const staticPaths = ['/', '/privacy', '/terms'];
const landingPaths = slugs.map((s) => `/${s}`);

const lines = [];
for (const p of [...staticPaths, ...landingPaths]) {
  lines.push(p);
}
for (const p of ['/', ...landingPaths, '/privacy', '/terms']) {
  for (const lang of LANGS) {
    lines.push(`${p}?lang=${lang}`);
  }
}

writeFileSync(join(root, 'prerender-routes.txt'), `${lines.join('\n')}\n`);

function hreflangBlock(path) {
  const base = `${SITE}${path === '/' ? '/' : path}`;
  const rows = LANGS.map(
    (lang) =>
      `    <xhtml:link rel="alternate" hreflang="${lang}" href="${lang === 'en' ? base : `${base}?lang=${lang}`}"/>`,
  );
  rows.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${base}"/>`);
  return rows.join('\n');
}

function urlEntry(path, priority) {
  const loc = `${SITE}${path === '/' ? '/' : path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
${hreflangBlock(path)}
  </url>`;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntry('/', '1.0')}
${landingPaths.map((p) => urlEntry(p, '0.85')).join('\n')}
${urlEntry('/privacy', '0.5')}
${urlEntry('/terms', '0.5')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), sitemap);
console.log(`Generated ${lines.length} prerender routes and sitemap with ${landingPaths.length + 3} URLs.`);
