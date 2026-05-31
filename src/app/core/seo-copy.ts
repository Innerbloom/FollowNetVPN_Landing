import { AppLang } from './i18n.service';
import { getGuidesHubSeoCopy, getLandingSeoCopy, landingSlugFromPath } from './seo-landing.meta';

export type SeoCopy = {
  title: string;
  ogTitle: string;
  description: string;
  robots?: string;
};

const APP_STORE =
  'https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829';

export { APP_STORE };

export function getSeoCopy(lang: AppLang, path: string): SeoCopy {
  const clean = (path.split('?')[0] || '/').replace(/\/+$/, '') || '/';

  if (clean === '/ios-vpn-guides') {
    return getGuidesHubSeoCopy(lang);
  }

  const landingSlug = landingSlugFromPath(clean);
  if (landingSlug) {
    return getLandingSeoCopy(landingSlug, lang);
  }

  if (clean.startsWith('/privacy')) {
    return privacyByLang[lang] ?? privacyByLang.en;
  }
  if (clean.startsWith('/terms')) {
    return termsByLang[lang] ?? termsByLang.en;
  }
  if (clean.startsWith('/checkout')) {
    return checkoutByLang[lang] ?? checkoutByLang.en;
  }
  return homeByLang[lang] ?? homeByLang.en;
}

const homeByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'FollowNet VPN — VPN для iPhone и iOS | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — быстрый VPN для iOS',
    description:
      'VPN для iPhone: Smart Connect, IKEv2, WireGuard и AmneziaWG бесплатно. DNS‑профили, Speed Test, виджеты. Premium — премиум‑серверы и безлимит в App Store.',
  },
  uk: {
    title: 'FollowNet VPN — VPN для iPhone та iOS | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — швидкий VPN для iOS',
    description:
      'VPN для iPhone: Smart Connect, IKEv2, WireGuard і AmneziaWG безкоштовно. DNS‑профілі, Speed Test, віджети. Premium — преміум‑сервери та безліміт у App Store.',
  },
  en: {
    title: 'FollowNet VPN for iPhone — Fast iOS VPN | WireGuard & IKEv2',
    ogTitle: 'FollowNet — VPN for iPhone & iOS',
    description:
      'Free VPN for iPhone: WireGuard, IKEv2, and Smart Connect for blocked networks. Kill Switch, DNS profiles, Speed Test. Download on the US App Store — Premium optional.',
  },
  de: {
    title: 'FollowNet VPN — iOS VPN für iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — schneller VPN für iOS',
    description:
      'iOS VPN mit Smart Connect, IKEv2, WireGuard und AmneziaWG in Free. DNS‑Profile, Speedtest, Widgets. Premium: Premium‑Server und unbegrenzter Traffic im App Store.',
  },
  es: {
    title: 'FollowNet VPN — VPN iOS para iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — VPN rápido para iOS',
    description:
      'VPN para iOS con Smart Connect, IKEv2, WireGuard y AmneziaWG en Free. Perfiles DNS, Speed Test y widgets. Premium: servidores premium y tráfico ilimitado en App Store.',
  },
  fr: {
    title: 'FollowNet VPN — VPN iOS pour iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — VPN rapide pour iOS',
    description:
      'VPN iOS avec Smart Connect, IKEv2, WireGuard et AmneziaWG en Free. Profils DNS, Speed Test, widgets. Premium : serveurs premium et trafic illimité via l’App Store.',
  },
  pt: {
    title: 'FollowNet VPN — VPN iOS para iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — VPN rápido para iOS',
    description:
      'VPN iOS com Smart Connect, IKEv2, WireGuard e AmneziaWG no Free. Perfis DNS, Speed Test e widgets. Premium: servidores premium e tráfego ilimitado na App Store.',
  },
};

const privacyByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'Политика конфиденциальности — FollowNet VPN',
    ogTitle: 'Политика конфиденциальности FollowNet VPN',
    description:
      'Как FollowNet VPN обрабатывает данные: вход по email‑коду, App Store, VPN‑метаданные, DNS, Firebase Analytics и ваши права GDPR/CCPA.',
  },
  uk: {
    title: 'Політика конфіденційності — FollowNet VPN',
    ogTitle: 'Політика конфіденційності FollowNet VPN',
    description:
      'Як FollowNet VPN обробляє дані: вхід за email‑кодом, App Store, VPN‑метадані, DNS, Firebase Analytics і ваші права GDPR/CCPA.',
  },
  en: {
    title: 'Privacy Policy — FollowNet VPN',
    ogTitle: 'FollowNet VPN Privacy Policy',
    description:
      'How FollowNet VPN processes data: email-code login, App Store subscriptions, VPN metadata, DNS, Firebase Analytics, and your GDPR/CCPA rights.',
  },
  de: {
    title: 'Datenschutz — FollowNet VPN',
    ogTitle: 'FollowNet VPN Datenschutzerklärung',
    description:
      'Wie FollowNet VPN Daten verarbeitet: E‑Mail‑Code‑Login, App Store, VPN‑Metadaten, DNS, Firebase Analytics und Ihre GDPR/CCPA‑Rechte.',
  },
  es: {
    title: 'Política de privacidad — FollowNet VPN',
    ogTitle: 'Política de privacidad FollowNet VPN',
    description:
      'Cómo FollowNet VPN procesa datos: login por código, App Store, metadatos VPN, DNS, Firebase Analytics y tus derechos GDPR/CCPA.',
  },
  fr: {
    title: 'Politique de confidentialité — FollowNet VPN',
    ogTitle: 'Politique de confidentialité FollowNet VPN',
    description:
      'Comment FollowNet VPN traite les données : connexion par code, App Store, métadonnées VPN, DNS, Firebase Analytics et vos droits GDPR/CCPA.',
  },
  pt: {
    title: 'Política de privacidade — FollowNet VPN',
    ogTitle: 'Política de privacidade FollowNet VPN',
    description:
      'Como o FollowNet VPN processa dados: login por código, App Store, metadados VPN, DNS, Firebase Analytics e seus direitos GDPR/CCPA.',
  },
};

const termsByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'Условия использования — FollowNet VPN',
    ogTitle: 'Условия использования FollowNet VPN',
    description:
      'Правила FollowNet VPN: аккаунт, подписка через App Store, допустимое использование, trial и ограничение ответственности.',
  },
  uk: {
    title: 'Умови використання — FollowNet VPN',
    ogTitle: 'Умови використання FollowNet VPN',
    description:
      'Правила FollowNet VPN: акаунт, підписка через App Store, допустиме використання, trial та обмеження відповідальності.',
  },
  en: {
    title: 'Terms of Service — FollowNet VPN',
    ogTitle: 'FollowNet VPN Terms of Service',
    description:
      'FollowNet VPN terms: account, App Store subscriptions, acceptable use, trial, and limitation of liability.',
  },
  de: {
    title: 'Nutzungsbedingungen — FollowNet VPN',
    ogTitle: 'FollowNet VPN Nutzungsbedingungen',
    description:
      'FollowNet VPN Bedingungen: Konto, App Store‑Abos, zulässige Nutzung, Testphase und Haftungsbeschränkung.',
  },
  es: {
    title: 'Términos de uso — FollowNet VPN',
    ogTitle: 'Términos de uso FollowNet VPN',
    description:
      'Términos de FollowNet VPN: cuenta, suscripciones App Store, uso aceptable, prueba y limitación de responsabilidad.',
  },
  fr: {
    title: 'Conditions d’utilisation — FollowNet VPN',
    ogTitle: 'Conditions d’utilisation FollowNet VPN',
    description:
      'Conditions FollowNet VPN : compte, abonnements App Store, utilisation acceptable, essai et limitation de responsabilité.',
  },
  pt: {
    title: 'Termos de uso — FollowNet VPN',
    ogTitle: 'Termos de uso FollowNet VPN',
    description:
      'Termos do FollowNet VPN: conta, assinaturas App Store, uso aceitável, teste e limitação de responsabilidade.',
  },
};

const checkoutByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'Оплата Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Оформление Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  uk: {
    title: 'Оплата Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Оформлення Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  en: {
    title: 'Premium checkout — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'FollowNet VPN Premium checkout.',
    robots: 'noindex, nofollow',
  },
  de: {
    title: 'Premium‑Checkout — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'FollowNet VPN Premium Checkout.',
    robots: 'noindex, nofollow',
  },
  es: {
    title: 'Pago Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Checkout Premium de FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  fr: {
    title: 'Paiement Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Paiement Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  pt: {
    title: 'Checkout Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Checkout Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
};

export const OG_LOCALE: Record<AppLang, string> = {
  ru: 'ru_RU',
  uk: 'uk_UA',
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  pt: 'pt_BR',
};
