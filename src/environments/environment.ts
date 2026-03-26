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

  /** Same host as the iOS app (`Config.baseURL`). Used for Paddle checkout eligibility. */
  apiBaseUrl: 'https://api.follow-net.com',

  paddle: {
    clientToken: paddleSecrets.clientToken,
    priceIds: paddleSecrets.priceIds,
    successUrl: paddleSecrets.successUrl,
    paddleJsEnv,
  },
};
