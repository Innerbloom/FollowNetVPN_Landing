import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

const APEX_HOST = 'follow-net.com';

/** Never SSR these — crawlers must get static XML/text even if SPA fallback exists. */
function sendBrowserFile(
  res: express.Response,
  relativePath: string,
  contentType: string,
  cacheControl: string,
): boolean {
  const filePath = join(browserDistFolder, relativePath);
  if (!existsSync(filePath)) {
    return false;
  }
  res.status(200);
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', cacheControl);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.send(readFileSync(filePath));
  return true;
}

/** Apex-only: www often 522 at Cloudflare if origin is not configured for that host. */
app.use((req, res, next) => {
  const host = (req.headers.host ?? '').split(':')[0].toLowerCase();
  if (host === `www.${APEX_HOST}`) {
    const path = req.originalUrl || '/';
    return res.redirect(301, `https://${APEX_HOST}${path}`);
  }
  return next();
});

app.get(['/sitemap.xml', '/sitemap.xml/'], (_req, res) => {
  if (
    sendBrowserFile(
      res,
      'sitemap.xml',
      'application/xml; charset=utf-8',
      'public, max-age=3600, stale-while-revalidate=86400',
    )
  ) {
    return;
  }
  // Do not fall through to Angular SSR (that produced intermittent 500s for bots).
  res.status(404).type('text/plain').send('sitemap.xml not found');
});

app.get(['/robots.txt', '/robots.txt/'], (_req, res) => {
  if (
    sendBrowserFile(
      res,
      'robots.txt',
      'text/plain; charset=utf-8',
      'public, max-age=3600, stale-while-revalidate=86400',
    )
  ) {
    return;
  }
  res.status(404).type('text/plain').send('robots.txt not found');
});

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
