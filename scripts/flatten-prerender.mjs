#!/usr/bin/env node
/**
 * Cloudflare Pages serves `foo/index.html` at `/foo/` (and 308s `/foo` → `/foo/`),
 * but `foo.html` at `/foo`. Canonicals, sitemap and routerLinks use slash-less URLs,
 * so move every prerendered `<route>/index.html` to `<route>.html`.
 * `/404` becomes `404.html`, which Pages returns with a real 404 status.
 */
import { existsSync, readdirSync, renameSync, rmdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const browser = join(root, 'dist/follow-net-front/browser');
const SKIP = new Set(['assets', 'icons', 'og']);

let moved = 0;

function walk(dir, isRoot) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory() || (isRoot && SKIP.has(name))) continue;
    walk(full, false);
    const index = join(full, 'index.html');
    if (existsSync(index)) {
      renameSync(index, `${full}.html`);
      moved++;
      if (readdirSync(full).length === 0) rmdirSync(full);
    }
  }
}

if (!existsSync(browser)) {
  console.error(`flatten-prerender: ${browser} not found — run ng build first`);
  process.exit(1);
}
walk(browser, true);
if (!existsSync(join(browser, '404.html'))) {
  console.error('flatten-prerender: 404.html missing — is /404 in prerender-routes.txt?');
  process.exit(1);
}
console.log(`flatten-prerender: moved ${moved} pages to <route>.html`);
