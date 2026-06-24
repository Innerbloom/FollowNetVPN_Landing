/**
 * Пример структуры — скопируй в `paddle.secrets.ts` или правь его напрямую.
 * Реальные `pri_...` только из Paddle Catalog (см. комментарии в paddle.secrets.ts).
 *
 * clientToken: вставь **целиком** client-side token из Paddle → Developer tools → Authentication.
 * Обрезанный токен даёт модалку «Something went wrong» без пояснения.
 *
 * successUrl: используется path + query; **origin подставляется с текущего сайта** (www / apex / localhost),
 * чтобы редирект после оплаты совпадал с доменом checkout.
 */
export const paddleSecrets = {
  //clientToken: 'live_2d0834f10684d467b759088f8d7',
  clientToken: 'test_83693d962d13cdc0a385cc9368e',

  // priceIds: {
  //   m1: 'pri_01kmdrtgkw757e5m8pj8zy3j7e',
  //   y1: 'pri_...',
  // },

//sandbox
  priceIds: {
    m1: 'pri_01kmebae9wcrd9sybrx9ff6nft',
    y1: '',
  },

  successUrl: 'https://follow-net.com/checkout?checkout=success',
} as const;
