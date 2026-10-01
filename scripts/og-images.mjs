#!/usr/bin/env node
/**
 * Renders a 1200×630 social card for every prerendered page whose og:image points at
 * `/og/p/...` (set by SeoService from the canonical URL). The card text comes from the
 * page's own <h1>, so it always matches the prerendered language.
 */
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { initWasm, Resvg } from '@resvg/resvg-wasm';

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const browser = join(root, 'dist/follow-net-front/browser');
const SKIP = new Set(['assets', 'icons', 'og']);

await initWasm(readFileSync(require.resolve('@resvg/resvg-wasm/index_bg.wasm')));

const font = (pkg, file) => readFileSync(join(dirname(require.resolve(`${pkg}/package.json`)), 'files', file));
// Satori falls back between differently named families only, so the Cyrillic subset gets its own name.
const fonts = [
  { name: 'Sora', data: font('@fontsource/sora', 'sora-latin-800-normal.woff'), weight: 800 },
  { name: 'Manrope', data: font('@fontsource/manrope', 'manrope-latin-800-normal.woff'), weight: 800 },
  { name: 'ManropeCyr', data: font('@fontsource/manrope', 'manrope-cyrillic-800-normal.woff'), weight: 800 },
  { name: 'Manrope', data: font('@fontsource/manrope', 'manrope-latin-700-normal.woff'), weight: 700 },
  { name: 'ManropeCyr', data: font('@fontsource/manrope', 'manrope-cyrillic-700-normal.woff'), weight: 700 },
];
const logo = `data:image/png;base64,${readFileSync(join(root, 'src/assets/new_logo.png')).toString('base64')}`;

const KICKER = {
  blog: { en: 'Blog', ru: 'Блог', uk: 'Блог', de: 'Blog', es: 'Blog', fr: 'Blog', pt: 'Blog' },
  guide: { en: 'iPhone VPN guide', ru: 'Гайд по VPN для iPhone', uk: 'Гайд з VPN для iPhone', de: 'iPhone-VPN-Guide', es: 'Guía VPN para iPhone', fr: 'Guide VPN iPhone', pt: 'Guia de VPN para iPhone' },
  site: { en: 'VPN for iPhone and iPad', ru: 'VPN для iPhone и iPad', uk: 'VPN для iPhone та iPad', de: 'VPN für iPhone und iPad', es: 'VPN para iPhone y iPad', fr: 'VPN pour iPhone et iPad', pt: 'VPN para iPhone e iPad' },
};
/** Top-level product pages; any other single-segment path is a guide. */
const SITE_PAGES = new Set(['', 'features', 'download', 'download/ios', 'download/chrome', 'guides', 'blog', 'about', 'support', 'press', 'privacy', 'terms', 'status', 'affiliates']);
const LANGS = new Set(['ru', 'uk', 'de', 'es', 'fr', 'pt']);

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/‑/g, '-')
    .replace(/\s+/g, ' ')
    .trim();

function kind(ogPath) {
  const segs = ogPath.replace(/^\/og\/p\//, '').replace(/\.png$/, '').split('/');
  const lang = LANGS.has(segs[0]) ? segs.shift() : 'en';
  const rest = segs.join('/') === 'home' ? '' : segs.join('/');
  if (rest.startsWith('blog/')) return { lang, kicker: KICKER.blog[lang] };
  if (SITE_PAGES.has(rest)) return { lang, kicker: KICKER.site[lang] };
  return { lang, kicker: KICKER.guide[lang] };
}

const h = (type, style, children) => ({ type, props: { style, children } });

function card(title, kicker) {
  const size = title.length > 70 ? 54 : title.length > 45 ? 62 : 72;
  return h(
    'div',
    {
      width: 1200,
      height: 630,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      background: 'linear-gradient(135deg, #0b0d08 0%, #12180a 55%, #1f2c0c 100%)',
      color: '#f4f7ee',
      fontFamily: 'Sora, Manrope, ManropeCyr',
    },
    [
      h('div', { display: 'flex', alignItems: 'center', gap: 20 }, [
        { type: 'img', props: { src: logo, width: 58, height: 64 } },
        h('div', { display: 'flex', fontSize: 30, fontWeight: 800, letterSpacing: -0.5 }, [
          'FollowNet',
          h('span', { color: '#9cc23b', marginLeft: 10 }, 'VPN'),
        ]),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', gap: 22 }, [
        h(
          'div',
          { display: 'flex', fontFamily: 'Manrope, ManropeCyr', fontSize: 24, fontWeight: 700, color: '#9cc23b', letterSpacing: 2.5, textTransform: 'uppercase' },
          kicker,
        ),
        h('div', { display: 'flex', fontSize: size, fontWeight: 800, lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 1000 }, title),
      ]),
      h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Manrope, ManropeCyr', fontSize: 24, fontWeight: 700, color: '#a6ad9a' }, [
        'follow-net.com',
        h('div', { display: 'flex', width: 120, height: 8, borderRadius: 8, background: '#9cc23b' }, []),
      ]),
    ],
  );
}

function* htmlFiles(dir, isRoot = true) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (!(isRoot && SKIP.has(name))) yield* htmlFiles(full, false);
    } else if (name.endsWith('.html')) yield full;
  }
}

let rendered = 0;
const done = new Set();
for (const file of htmlFiles(browser)) {
  const html = readFileSync(file, 'utf8');
  const og = html.match(/<meta property="og:image" content="https?:\/\/[^/"]+(\/og\/p\/[^"]+\.png)"/)?.[1];
  if (!og || done.has(og)) continue;
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
  if (!h1) throw new Error(`og-images: no <h1> in ${file}`);
  const { kicker } = kind(og);
  const svg = await satori(card(decode(h1), kicker), { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  const out = join(browser, og);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, png);
  done.add(og);
  rendered++;
}

console.log(`og-images: rendered ${rendered} cards.`);
