import { paddleSecrets } from './paddle.secrets';

export const environment = {
  production: true,

  /** Public App Store listing (iOS). */
  iosAppStoreUrl:
    'https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829',

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
