import { paddleSecrets } from './paddle.secrets';

export const environment = {
  production: true,

  /** Canonical origin for SEO (prerender/SSR must not use ng-localhost). */
  siteUrl: 'https://follow-net.com',

  /**
   * Google Search Console HTML tag verification (Search Console → Settings → Ownership).
   * Paste the content value only, e.g. "abc123…". Leave empty until verified.
   */
  googleSiteVerification: '',

  /** Public App Store listing (iOS). */
  iosAppStoreUrl:
    'https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829',

  /** Chrome Web Store listing (extension). */
  chromeWebStoreUrl:
    'https://chromewebstore.google.com/detail/follownet-vpn/chgbhiifkahijoochbdegfalclniokhk',

  apiBaseUrl: 'https://api.follow-net.com',

  /** Временно скрыть веб‑оплату; на API: `WEB_PADDLE_CHECKOUT_DISABLED=true`. */
  webPaddleCheckoutEnabled: false,

  paddle: {
    clientToken: paddleSecrets.clientToken,
    priceIds: paddleSecrets.priceIds,
    successUrl: paddleSecrets.successUrl,
    paddleJsEnv: 'production' as const,
  },
};
