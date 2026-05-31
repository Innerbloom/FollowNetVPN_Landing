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
  'kill-switch-vpn-ios',
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

/** Short labels for guides hub + internal links. */
export const LANDING_LABELS: Record<LandingSlug, Record<'en' | 'ru', string>> = {
  'vpn-for-iphone': { en: 'VPN for iPhone', ru: 'VPN для iPhone' },
  'wireguard-vpn-ios': { en: 'WireGuard for iOS', ru: 'WireGuard для iOS' },
  'free-vpn-iphone': { en: 'Free VPN for iPhone', ru: 'Бесплатный VPN для iPhone' },
  'vpn-for-ipad': { en: 'VPN for iPad', ru: 'VPN для iPad' },
  'ikev2-vpn-ios': { en: 'IKEv2 VPN for iOS', ru: 'IKEv2 VPN для iOS' },
  'vpn-for-wifi': { en: 'VPN for public Wi‑Fi', ru: 'VPN для публичного Wi‑Fi' },
  'smart-connect-vpn': { en: 'Smart Connect VPN', ru: 'Smart Connect VPN' },
  'amneziawg-vpn-ios': { en: 'AmneziaWG for iOS', ru: 'AmneziaWG для iOS' },
  'no-logs-vpn': { en: 'No-logs VPN', ru: 'VPN без логов' },
  'kill-switch-vpn-ios': { en: 'Kill Switch on iOS', ru: 'Kill Switch на iOS' },
  'dns-vpn-ios': { en: 'Custom DNS VPN', ru: 'VPN с своим DNS' },
  'vpn-for-travel': { en: 'VPN for travel', ru: 'VPN для путешествий' },
  'best-vpn-iphone': { en: 'Best VPN for iPhone', ru: 'Лучший VPN для iPhone' },
  'vpn-speed-test-ios': { en: 'VPN Speed Test', ru: 'Speed Test в VPN' },
  'secure-vpn-iphone': { en: 'Secure VPN for iPhone', ru: 'Безопасный VPN для iPhone' },
};
