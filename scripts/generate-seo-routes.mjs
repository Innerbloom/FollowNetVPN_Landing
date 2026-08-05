#!/usr/bin/env node
/**
 * Regenerates prerender-routes.txt and public/sitemap.xml
 * from seo-landing.slugs.ts + blog.content.ts + static product pages
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function extractQuotedList(source, exportName) {
  const block = source.match(new RegExp(`export const ${exportName} = \\[([\\s\\S]*?)\\] as const`));
  if (!block) throw new Error(`${exportName} not found`);
  return [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

function extractBlogSlugs(source) {
  return [...source.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
}

const slugsTs = readFileSync(join(root, 'src/app/core/seo-landing.slugs.ts'), 'utf8');
const blogTs = readFileSync(join(root, 'src/app/core/blog.content.ts'), 'utf8');
const slugs = extractQuotedList(slugsTs, 'LANDING_SLUGS');
const blogSlugs = extractBlogSlugs(blogTs);

const LANGS = ['ru', 'en', 'de', 'es', 'fr', 'pt', 'uk'];
const SITE = 'https://follow-net.com';
/** UTC calendar day — refresh on every `npm run build` / `seo:routes`. */
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
  '/support',
  '/status',
];
const landingPaths = slugs.map((s) => `/${s}`);
const blogPaths = blogSlugs.map((s) => `/blog/${s}`);
const allContentPaths = [...staticPaths, ...landingPaths, ...blogPaths];

const lines = [];
for (const p of allContentPaths) lines.push(p);
for (const p of allContentPaths) {
  for (const lang of LANGS) lines.push(`${p}?lang=${lang}`);
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

function urlEntry(path, priority, changefreq = 'monthly') {
  const loc = `${SITE}${path === '/' ? '/' : path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${hreflangBlock(path)}
  </url>`;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntry('/', '1.0', 'weekly')}
${landingPaths.map((p) => urlEntry(p, '0.85')).join('\n')}
${urlEntry('/guides', '0.85', 'weekly')}
${urlEntry('/blog', '0.8', 'weekly')}
${blogPaths.map((p) => urlEntry(p, '0.75')).join('\n')}
${urlEntry('/features', '0.8')}
${urlEntry('/download', '0.85')}
${urlEntry('/download/ios', '0.8')}
${urlEntry('/download/chrome', '0.8')}
${urlEntry('/about', '0.7')}
${urlEntry('/support', '0.75')}
${urlEntry('/status', '0.55')}
${urlEntry('/privacy', '0.5')}
${urlEntry('/terms', '0.5')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), sitemap);
console.log(
  `Generated ${lines.length} prerender routes and sitemap with ${allContentPaths.length} URLs.`,
);
