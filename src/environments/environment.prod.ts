import { firebaseConfig } from './firebase.config';

export const environment = {
  production: true,

  siteUrl: 'https://follow-net.com',

  googleSiteVerification: '',

  googleAnalyticsMeasurementId: firebaseConfig.measurementId,

  googleAdsConversionSendTo: '',

  iosAppStoreProviderToken: '',

  iosAppStoreUrl:
    'https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829',

  chromeWebStoreUrl:
    'https://chromewebstore.google.com/detail/follownet-vpn/chgbhiifkahijoochbdegfalclniokhk',

  apiBaseUrl: 'https://api.follow-net.com',

  /** Веб‑оплата WayForPay. На API: `WEB_WAYFORPAY_CHECKOUT_DISABLED=true` чтобы отключить. */
  webWayForPayCheckoutEnabled: true,
};
