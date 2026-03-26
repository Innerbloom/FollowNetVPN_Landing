import { paddleSecrets } from './paddle.secrets';

export const environment = {
  production: true,

  apiBaseUrl: 'https://api.follow-net.com',

  paddle: {
    clientToken: paddleSecrets.clientToken,
    priceIds: paddleSecrets.priceIds,
    successUrl: paddleSecrets.successUrl,
    paddleJsEnv: 'production' as const,
  },
};
