import { paddleSecrets } from './paddle.secrets';

/**
 * Live-токен + live `pri_...` требуют Paddle.js **production**.
 * Sandbox-токен `test_...` + sandbox prices → **sandbox**.
 * Иначе checkout показывает «Something went wrong».
 */
const paddleJsEnv: 'production' | 'sandbox' = paddleSecrets.clientToken
  .trim()
  .startsWith('live_')
  ? 'production'
  : 'sandbox';

export const environment = {
  production: false,

  /** Public App Store listing (iOS). */
  iosAppStoreUrl:
    'https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829',

  /** Same host as the iOS app (`Config.baseURL`). Used for Paddle checkout eligibility. */
  apiBaseUrl: 'https://api.follow-net.com',

  /**
   * Временно скрыть веб‑оплату (Paddle) на лендинге. На API дополнительно выставь `WEB_PADDLE_CHECKOUT_DISABLED=true`.
   */
  webPaddleCheckoutEnabled: false,

  paddle: {
    clientToken: paddleSecrets.clientToken,
    priceIds: paddleSecrets.priceIds,
    successUrl: paddleSecrets.successUrl,
    paddleJsEnv,
  },
};
