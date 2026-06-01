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

  /**
   * GA4 Measurement ID (Admin → Data streams → Web → Measurement ID), e.g. G-XXXXXXXXXX.
   * Leave empty until created — analytics stays off.
   */
  googleAnalyticsMeasurementId: 'G-QYGHZ1XNEF',

  /**
   * Google Ads conversion tag (Ads → Goals → Conversions → tag setup), e.g. AW-123456789/AbCdEfGh.
   * Optional; enables conversion events on App Store clicks.
   */
  googleAdsConversionSendTo: '',

  /**
   * App Store Connect → Marketing → Campaign Links → Provider ID (pt=…).
   * With ct on each page, installs from ads show in App Analytics by campaign.
   */
  iosAppStoreProviderToken: '',

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
