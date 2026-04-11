import { paddleSecrets } from './paddle.secrets';

export const environment = {
  production: true,

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
