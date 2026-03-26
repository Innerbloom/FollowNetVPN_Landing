import { environment } from '../../environments/environment';

export type PaddleJsEnvironment = 'production' | 'sandbox';

/**
 * Настройки Paddle для сайта берутся из `src/environments/*` и `paddle.secrets.ts`.
 *
 * - `ng build` (по умолчанию production) → `environment.prod.ts` → **paddleJsEnv: production**
 * - `ng serve` → `environment.ts` → **paddleJsEnv: sandbox** (для тестового токена)
 *
 * Заполни `src/environments/paddle.secrets.ts` (client token + pri_...).
 */
export const PADDLE_SETTINGS: {
  readonly clientToken: string;
  readonly environment: PaddleJsEnvironment;
  readonly priceIds: { readonly m1: string; readonly m3: string; readonly m6: string };
  readonly successUrl: string;
} = {
  clientToken: environment.paddle.clientToken,

  environment: environment.paddle.paddleJsEnv as PaddleJsEnvironment,

  priceIds: {
    m1: environment.paddle.priceIds.m1,
    m3: environment.paddle.priceIds.m3,
    m6: environment.paddle.priceIds.m6,
  },

  successUrl: environment.paddle.successUrl,
};
