import { AUTO_BLOG_SHOTS } from './blog.auto-seo';
/** Screenshots that illustrate each blog post: [cover, mid-article]. */
const BLOG_SHOTS: Record<string, [string, string]> = {
  'public-wifi-risks': ['ios-profiles', 'ios-ipcheck'],
  'travel-vpn-roaming': ['ios-servers', 'ios-profiles'],
  'what-no-logs-means': ['ios-ipcheck', 'ios-settings'],
  'when-vpn-wont-help': ['ios-ipcheck', 'ios-connected'],
  'follownet-features-overview': ['ios-connected', 'ios-settings'],
  'app-store-vpn-review': ['ios-connected', 'ios-protocol'],
  'which-protocol-when': ['ios-protocol', 'ios-speed'],
  'hysteria2-on-ios': ['ios-protocol', 'ios-speed'],
  'speed-test-in-app': ['ios-speed', 'ios-protocol'],
  'follownet-roadmap-2026': ['ios-multihop', 'ios-tor'],
  'smart-connect-explained': ['ios-protocol', 'ios-connected'],
  'multi-device-premium': ['ios-settings', 'ios-servers'],
  'premium-devices-seats': ['ios-settings', 'ios-servers'],
  'passwordless-login': ['ios-settings', 'ios-connected'],
  'passwordless-account-restore': ['ios-settings', 'ios-connected'],
  'free-weekly-traffic': ['ios-servers', 'ios-speed'],
  'free-vs-premium-honest': ['ios-servers', 'ios-settings'],
  'dns-profiles-explained': ['ios-dns', 'ios-ipcheck'],
  'chrome-extension': ['ext-connected', 'ext-servers'],
  'chrome-extension-architecture': ['ext-servers', 'ext-connected'],
  'chrome-vs-ios-vpn': ['ext-connected', 'ios-connected'],
  'auto-connect-wifi-lte': ['ios-autoconnect', 'ios-profiles'],
  'network-profiles-four-presets': ['ios-profiles', 'ios-autoconnect'],
  'ios-widgets-vpn': ['ios-connected', 'ios-autoconnect'],
  'vpn-control-widget': ['ios-connected', 'ios-disconnected'],
};

export type BlogShot = { src: string; srcset: string | null; ext: boolean };

export function blogShot(slug: string, i: 0 | 1 = 0): BlogShot {
  const img = (BLOG_SHOTS[slug] ?? AUTO_BLOG_SHOTS[slug] ?? ['ios-connected', 'ios-servers'])[i];
  const dir = 'assets/screenshots/v2/';
  if (img.startsWith('ext')) return { src: `${dir}${img}.webp`, srcset: null, ext: true };
  return { src: `${dir}${img}-400.webp`, srcset: `${dir}${img}-400.webp 400w, ${dir}${img}-560.webp 560w, ${dir}${img}.webp 760w`, ext: false };
}
