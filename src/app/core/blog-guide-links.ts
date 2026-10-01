import type { LandingSlug } from './seo-landing.slugs';

/** Curated blog → guide links. The reverse (guide → blog) is derived from this map. */
const BLOG_GUIDES: Record<string, LandingSlug[]> = {
  'follownet-features-overview': ['smart-connect-vpn', 'network-profiles-ios', 'vpn-for-iphone'],
  'free-vs-premium-honest': ['free-vpn-vs-paid', 'vpn-free-weekly-limit', 'vpn-premium-unlimited'],
  'which-protocol-when': ['wireguard-vpn-ios', 'ikev2-vpn-ios', 'hysteria2-vpn-ios'],
  'chrome-extension': ['vpn-chrome-extension', 'vpn-vs-proxy'],
  'smart-connect-explained': ['smart-connect-vpn', 'vpn-not-connecting-iphone', 'wireguard-vs-ikev2'],
  'ios-widgets-vpn': ['vpn-widgets-ios', 'vpn-iphone-shortcuts', 'auto-connect-vpn-ios'],
  'dns-profiles-explained': ['dns-vpn-ios', 'what-is-dns-leak', 'network-profiles-ios'],
  'auto-connect-wifi-lte': ['auto-connect-vpn-ios', 'vpn-for-wifi', 'vpn-battery-iphone'],
  'public-wifi-risks': ['vpn-for-wifi', 'vpn-hotel-wifi', 'vpn-for-banking-apps'],
  'travel-vpn-roaming': ['vpn-for-travel', 'vpn-airport-wifi', 'captive-portal-vpn-iphone'],
  'hysteria2-on-ios': ['hysteria2-vpn-ios', 'vless-reality-ios', 'vpn-slow-iphone'],
  'passwordless-login': ['how-to-setup-vpn-iphone', 'free-vpn-iphone'],
  'speed-test-in-app': ['vpn-speed-test-ios', 'vpn-slow-iphone', 'vpn-for-gaming-iphone'],
  'chrome-vs-ios-vpn': ['vpn-chrome-extension', 'vpn-vs-proxy', 'vpn-for-iphone'],
  'what-no-logs-means': ['no-logs-vpn', 'what-is-dns-leak', 'what-is-kill-switch-vpn'],
  'app-store-vpn-review': ['secure-vpn-iphone', 'best-vpn-iphone'],
  'multi-device-premium': ['vpn-premium-unlimited', 'vpn-for-ipad'],
  'when-vpn-wont-help': ['do-i-need-a-vpn', 'what-is-a-vpn', 'how-vpn-works'],
  'follownet-roadmap-2026': ['amneziawg-vpn-ios', 'vpn-chrome-extension'],
  'network-profiles-four-presets': ['network-profiles-ios', 'dns-vpn-ios', 'vpn-split-tunneling-ios'],
  'vpn-control-widget': ['vpn-widgets-ios', 'vpn-iphone-shortcuts'],
  'free-weekly-traffic': ['vpn-free-weekly-limit', 'free-vpn-iphone', 'vpn-for-students'],
  'premium-devices-seats': ['vpn-premium-unlimited', 'vpn-for-ipad', 'vpn-for-remote-work'],
  'chrome-extension-architecture': ['vpn-chrome-extension', 'what-is-kill-switch-vpn'],
  'passwordless-account-restore': ['how-to-setup-vpn-iphone', 'vpn-for-beginners'],
};

export function blogGuides(postSlug: string): LandingSlug[] {
  return BLOG_GUIDES[postSlug] ?? [];
}

/** Blog post slugs that link to the given guide. */
export function guideBlogSlugs(guide: LandingSlug): string[] {
  return Object.keys(BLOG_GUIDES).filter((slug) => BLOG_GUIDES[slug].includes(guide));
}
