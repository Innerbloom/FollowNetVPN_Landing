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

  /** Web OAuth client for Google Identity Services on /account (origin must be authorized). */
  googleWebClientId: '760205106281-ru2bl42203jgug36uh80jbrs32m27rtr.apps.googleusercontent.com',

  /** Apple Services ID; the return URL is the API relay, which bounces back to /account. */
  appleServicesId: 'Artem-Mishurovskiy.com.follownet.web',
  appleRelayUrl: 'https://api.follow-net.com/auth/social/apple/extension-callback',

  /** Веб‑оплата WayForPay. На API: `WEB_WAYFORPAY_CHECKOUT_DISABLED=true` чтобы отключить. */
  webWayForPayCheckoutEnabled: true,
};
