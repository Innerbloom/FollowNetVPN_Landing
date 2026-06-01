/** All public SEO landing paths (kebab-case, no leading slash). */
export const LANDING_SLUGS = [
  'vpn-for-iphone',
  'wireguard-vpn-ios',
  'free-vpn-iphone',
  'vpn-for-ipad',
  'ikev2-vpn-ios',
  'vpn-for-wifi',
  'smart-connect-vpn',
  'amneziawg-vpn-ios',
  'no-logs-vpn',
  'auto-connect-vpn-ios',
  'dns-vpn-ios',
  'vpn-for-travel',
  'best-vpn-iphone',
  'vpn-speed-test-ios',
  'secure-vpn-iphone',
] as const;

export type LandingSlug = (typeof LANDING_SLUGS)[number];

export function landingSlugs(): LandingSlug[] {
  return [...LANDING_SLUGS];
}

export function isLandingSlug(value: string): value is LandingSlug {
  return (LANDING_SLUGS as readonly string[]).includes(value);
}

export function landingSlugFromPath(path: string): LandingSlug | null {
  const clean = (path.split('?')[0] || '/').replace(/^\/+|\/+$/g, '');
  return isLandingSlug(clean) ? clean : null;
}

/** Short labels for internal links (all UI languages). */
export const LANDING_LABELS: Record<
  LandingSlug,
  Record<'en' | 'ru' | 'de' | 'es' | 'fr' | 'pt' | 'uk', string>
> = {
  'vpn-for-iphone': {
    en: 'VPN for iPhone',
    ru: 'VPN для iPhone',
    de: 'VPN für iPhone',
    es: 'VPN para iPhone',
    fr: 'VPN pour iPhone',
    pt: 'VPN para iPhone',
    uk: 'VPN для iPhone',
  },
  'wireguard-vpn-ios': {
    en: 'WireGuard for iOS',
    ru: 'WireGuard для iOS',
    de: 'WireGuard für iOS',
    es: 'WireGuard para iOS',
    fr: 'WireGuard pour iOS',
    pt: 'WireGuard para iOS',
    uk: 'WireGuard для iOS',
  },
  'free-vpn-iphone': {
    en: 'Free VPN for iPhone',
    ru: 'Бесплатный VPN для iPhone',
    de: 'Kostenloses VPN für iPhone',
    es: 'VPN gratis para iPhone',
    fr: 'VPN gratuit pour iPhone',
    pt: 'VPN grátis para iPhone',
    uk: 'Безкоштовний VPN для iPhone',
  },
  'vpn-for-ipad': {
    en: 'VPN for iPad',
    ru: 'VPN для iPad',
    de: 'VPN für iPad',
    es: 'VPN para iPad',
    fr: 'VPN pour iPad',
    pt: 'VPN para iPad',
    uk: 'VPN для iPad',
  },
  'ikev2-vpn-ios': {
    en: 'IKEv2 VPN for iOS',
    ru: 'IKEv2 VPN для iOS',
    de: 'IKEv2 VPN für iOS',
    es: 'IKEv2 VPN para iOS',
    fr: 'IKEv2 VPN pour iOS',
    pt: 'IKEv2 VPN para iOS',
    uk: 'IKEv2 VPN для iOS',
  },
  'vpn-for-wifi': {
    en: 'VPN for public Wi‑Fi',
    ru: 'VPN для публичного Wi‑Fi',
    de: 'VPN für öffentliches WLAN',
    es: 'VPN para Wi‑Fi público',
    fr: 'VPN pour Wi‑Fi public',
    pt: 'VPN para Wi‑Fi público',
    uk: 'VPN для публічного Wi‑Fi',
  },
  'smart-connect-vpn': {
    en: 'Smart Connect VPN',
    ru: 'Smart Connect VPN',
    de: 'Smart Connect VPN',
    es: 'Smart Connect VPN',
    fr: 'Smart Connect VPN',
    pt: 'Smart Connect VPN',
    uk: 'Smart Connect VPN',
  },
  'amneziawg-vpn-ios': {
    en: 'AmneziaWG for iOS',
    ru: 'AmneziaWG для iOS',
    de: 'AmneziaWG für iOS',
    es: 'AmneziaWG para iOS',
    fr: 'AmneziaWG pour iOS',
    pt: 'AmneziaWG para iOS',
    uk: 'AmneziaWG для iOS',
  },
  'no-logs-vpn': {
    en: 'No-logs VPN',
    ru: 'VPN без логов',
    de: 'VPN ohne Logs',
    es: 'VPN sin registros',
    fr: 'VPN sans logs',
    pt: 'VPN sem logs',
    uk: 'VPN без логів',
  },
  'auto-connect-vpn-ios': {
    en: 'Auto-connect on iOS',
    ru: 'Автоподключение на iOS',
    de: 'Auto-Verbindung auf iOS',
    es: 'Auto-conexión en iOS',
    fr: 'Connexion auto sur iOS',
    pt: 'Conexão automática no iOS',
    uk: 'Автопідключення на iOS',
  },
  'dns-vpn-ios': {
    en: 'Custom DNS VPN',
    ru: 'VPN с своим DNS',
    de: 'VPN mit eigenem DNS',
    es: 'VPN con DNS personalizado',
    fr: 'VPN avec DNS personnalisé',
    pt: 'VPN com DNS personalizado',
    uk: 'VPN з власним DNS',
  },
  'vpn-for-travel': {
    en: 'VPN for travel',
    ru: 'VPN для путешествий',
    de: 'VPN fürs Reisen',
    es: 'VPN para viajes',
    fr: 'VPN pour voyager',
    pt: 'VPN para viagens',
    uk: 'VPN для подорожей',
  },
  'best-vpn-iphone': {
    en: 'Best VPN for iPhone',
    ru: 'Лучший VPN для iPhone',
    de: 'Bestes VPN für iPhone',
    es: 'Mejor VPN para iPhone',
    fr: 'Meilleur VPN pour iPhone',
    pt: 'Melhor VPN para iPhone',
    uk: 'Найкращий VPN для iPhone',
  },
  'vpn-speed-test-ios': {
    en: 'VPN Speed Test',
    ru: 'Speed Test в VPN',
    de: 'VPN Speedtest',
    es: 'Test de velocidad VPN',
    fr: 'Test de vitesse VPN',
    pt: 'Teste de velocidade VPN',
    uk: 'Speed Test у VPN',
  },
  'secure-vpn-iphone': {
    en: 'Secure VPN for iPhone',
    ru: 'Безопасный VPN для iPhone',
    de: 'Sicheres VPN für iPhone',
    es: 'VPN seguro para iPhone',
    fr: 'VPN sécurisé pour iPhone',
    pt: 'VPN seguro para iPhone',
    uk: 'Безпечний VPN для iPhone',
  },
};

export function landingLabel(
  slug: LandingSlug,
  lang: 'en' | 'ru' | 'de' | 'es' | 'fr' | 'pt' | 'uk',
): string {
  return LANDING_LABELS[slug][lang] ?? LANDING_LABELS[slug].en;
}
