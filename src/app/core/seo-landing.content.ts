import { AppLang } from './i18n.service';
import { LandingSlug, LANDING_SLUGS } from './seo-landing.slugs';
import { RU } from './seo-landing.content.ru';

export interface LandingSection {
  title: string;
  body: string;
}

export interface LandingFaqItem {
  q: string;
  a: string;
}

export interface LandingContent {
  h1: string;
  lead: string;
  sections: LandingSection[];
  bullets: string[];
  cta: string;
  faq: LandingFaqItem[];
}

const CTA = 'Download on the App Store';

const EN: Record<LandingSlug, LandingContent> = {
  'vpn-for-iphone': {
    h1: 'VPN for iPhone — fast, private, and easy to use',
    lead:
      'FollowNet is an iOS VPN built for iPhone and iPad: one tap to connect, WireGuard and IKEv2, Smart Connect for restrictive networks, and a free tier with no credit card.',
    sections: [
      {
        title: 'Why use a VPN on iPhone?',
        body:
          'Public Wi‑Fi, travel hotspots, and some mobile carriers expose your traffic to snooping or throttling. A VPN encrypts your connection and helps keep browsing, messaging, and streaming private on iOS.',
      },
      {
        title: 'Built for iOS, not a generic clone',
        body:
          'FollowNet uses native iOS VPN APIs (Network Extension), supports Shortcuts and automation, Auto-connect, custom DNS, and server locations worldwide — with a UI designed for iPhone.',
      },
    ],
    bullets: [
      'Free plan with daily data — try before you subscribe',
      'WireGuard, IKEv2, and AmneziaWG (Smart Connect picks the best)',
      'No logs policy — see our Privacy Policy for details',
      'Premium: unlimited data, all servers, ad-free',
    ],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet a free VPN for iPhone?', a: 'Yes. FollowNet offers a free tier with daily data. Premium unlocks unlimited traffic and all server locations.' },
      { q: 'Does FollowNet work on iPad?', a: 'Yes. The same iOS app runs on iPhone and iPad.' },
      { q: 'Which VPN protocol should I use on iOS?', a: 'WireGuard is fast and modern. IKEv2 is stable on mobile networks. Smart Connect automatically chooses the best protocol for your network.' },
    ],
  },
  'wireguard-vpn-ios': {
    h1: 'WireGuard VPN for iOS — fast and modern',
    lead:
      'FollowNet includes native WireGuard on iPhone and iPad, plus AmneziaWG when networks block standard VPNs. Smart Connect switches protocols so you stay connected.',
    sections: [
      { title: 'Why WireGuard on iOS?', body: 'WireGuard is lightweight, uses modern cryptography, and typically delivers lower latency than older VPN protocols — ideal for streaming, gaming, and everyday browsing on iPhone.' },
      { title: 'When WireGuard is blocked', body: 'Some ISPs and countries detect or throttle WireGuard. FollowNet Smart Connect can fall back to IKEv2 or AmneziaWG (obfuscated WireGuard) based on your network — without manual tinkering.' },
    ],
    bullets: ['Native WireGuard via iOS Network Extension', 'AmneziaWG for DPI-heavy networks (Smart Connect)', 'Manual protocol override in Settings', 'Global servers — US, EU, Asia, and more'],
    cta: 'Get FollowNet on the App Store',
    faq: [
      { q: 'Is WireGuard safe on iPhone?', a: 'WireGuard uses modern, audited cryptography. FollowNet runs it inside Apple’s VPN sandbox like other App Store VPN apps.' },
      { q: 'Can I force WireGuard only?', a: 'Yes. Open Settings → Protocol and choose WireGuard, or use Smart Connect for automatic selection.' },
      { q: 'Does FollowNet support split tunneling on iOS?', a: 'iOS routes device traffic through the VPN tunnel when connected. Per-app split tunneling is limited by Apple’s platform; FollowNet follows system VPN rules.' },
    ],
  },
  'free-vpn-iphone': {
    h1: 'Free VPN for iPhone — try FollowNet with daily data',
    lead:
      'Looking for a free VPN on iPhone without a credit card? FollowNet Free includes daily data, core servers, WireGuard and IKEv2, and Smart Connect — upgrade only if you need unlimited traffic.',
    sections: [
      { title: 'What you get on the free plan', body: 'FollowNet Free lets you test real VPN performance on iOS: encrypted tunnel, server selection, DNS profiles, Speed Test, and Auto-connect. Premium removes daily limits and unlocks all premium server locations.' },
      { title: 'Free vs sketchy “100% free” VPNs', body: 'Some free VPN apps monetize your data or show aggressive ads. FollowNet is transparent: a limited free tier plus optional Premium via the App Store. Read our Privacy Policy before you connect.' },
    ],
    bullets: ['No credit card required for Free', 'Daily data allowance — enough to evaluate the service', 'Same protocols as Premium: WireGuard, IKEv2, Smart Connect', 'Upgrade in-app when you need unlimited traffic'],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet really free on iPhone?', a: 'Yes. The free tier includes daily data. Premium is optional for unlimited usage and all servers.' },
      { q: 'Are there ads in the free version?', a: 'FollowNet Free is ad-supported in some regions; Premium is ad-free.' },
      { q: 'Can I use free VPN on public Wi‑Fi?', a: 'Yes. Free tier still encrypts traffic — useful for coffee shops and airports.' },
    ],
  },
  'vpn-for-ipad': {
    h1: 'VPN for iPad — same FollowNet app, optimized for iOS',
    lead:
      'FollowNet is a universal iOS app: install once on iPad and iPhone with one Apple ID. Full-screen UI, WireGuard and IKEv2, Smart Connect, and all settings sync through your account.',
    sections: [
      { title: 'Why use VPN on iPad?', body: 'iPad is often used on the same public Wi‑Fi as your phone — travel, coworking, and home guest networks. A VPN helps protect Safari, apps, and downloads on cellular and Wi‑Fi.' },
      { title: 'iPad-specific advantages', body: 'FollowNet supports iPad multitasking and landscape layout. Use Shortcuts to toggle VPN before video calls or banking. Auto-connect and custom DNS work the same as on iPhone.' },
    ],
    bullets: ['Universal iOS app — iPhone and iPad', 'Native Network Extension VPN', 'Smart Connect for restrictive networks', 'Free tier and Premium via App Store'],
    cta: CTA,
    faq: [
      { q: 'Do I need a separate iPad app?', a: 'No. Download FollowNet once from the App Store; it runs on both iPhone and iPad.' },
      { q: 'Does VPN work with iPad keyboard and Stage Manager?', a: 'Yes. VPN runs at the system level and does not conflict with multitasking.' },
      { q: 'Can I use different servers on iPad and iPhone?', a: 'Your account works on any device signed in; pick servers per device as needed.' },
    ],
  },
  'ikev2-vpn-ios': {
    h1: 'IKEv2 VPN for iOS — stable on mobile networks',
    lead:
      'IKEv2 is a proven VPN protocol for iPhone and iPad: fast reconnects when you switch Wi‑Fi and cellular. FollowNet supports IKEv2 alongside WireGuard, AmneziaWG, and Smart Connect.',
    sections: [
      { title: 'When to choose IKEv2 on iOS', body: 'IKEv2 handles network changes well — commuting, elevators, and switching between LTE and Wi‑Fi. It is a solid choice when WireGuard is throttled or blocked on your carrier.' },
      { title: 'IKEv2 in FollowNet', body: 'Select IKEv2 manually in Settings → Protocol, or let Smart Connect pick IKEv2 when it detects mobile instability or provider restrictions. All server locations support IKEv2.' },
    ],
    bullets: ['Stable reconnects on cellular handoffs', 'Available on Free and Premium', 'Works with Auto-connect and custom DNS', 'Smart Connect can auto-select IKEv2'],
    cta: CTA,
    faq: [
      { q: 'Is IKEv2 secure on iPhone?', a: 'IKEv2 uses strong encryption when configured correctly. FollowNet implements it inside Apple’s VPN framework.' },
      { q: 'IKEv2 vs WireGuard on iOS?', a: 'WireGuard is often faster; IKEv2 can be more stable on some mobile networks. Smart Connect tries both.' },
      { q: 'How do I enable IKEv2?', a: 'Settings → Protocol → IKEv2, or enable Smart Connect for automatic selection.' },
    ],
  },
  'vpn-for-wifi': {
    h1: 'VPN for public Wi‑Fi on iPhone — stay encrypted',
    lead:
      'Coffee shops, airports, hotels, and guest networks are convenient but risky. FollowNet encrypts your iPhone and iPad traffic on any Wi‑Fi network with one tap.',
    sections: [
      { title: 'Risks on open Wi‑Fi', body: 'Shared hotspots can expose unencrypted traffic to others on the same network. Even password-protected guest Wi‑Fi may be operated by untrusted parties. VPN adds a layer of encryption between your device and the internet.' },
      { title: 'Auto-connect on Wi‑Fi', body: 'FollowNet supports automation profiles and Auto-connect settings so VPN can connect when you join Wi‑Fi or always stay on. Combine with Smart Connect when traveling abroad.' },
    ],
    bullets: ['Encrypt traffic on any Wi‑Fi SSID', 'Auto-connect when you join Wi‑Fi or switch networks', 'Smart Connect for captive portals and restricted hotspots', 'Speed Test to pick the fastest server'],
    cta: CTA,
    faq: [
      { q: 'Do I need VPN on home Wi‑Fi?', a: 'Home networks are usually safer, but VPN still helps with privacy from ISP tracking if you want it.' },
      { q: 'Will VPN slow down hotel Wi‑Fi?', a: 'Some overhead is normal. Use Speed Test and try a closer server for best results.' },
      { q: 'Does FollowNet work on captive portal login pages?', a: 'Connect VPN after you complete the portal login, or use Smart Connect which adapts to network conditions.' },
    ],
  },
  'smart-connect-vpn': {
    h1: 'Smart Connect VPN — automatic protocol for iOS',
    lead:
      'Smart Connect is FollowNet’s adaptive mode: it evaluates your network, region, and carrier signals to choose WireGuard, IKEv2, or AmneziaWG — and the best server — without manual trial and error.',
    sections: [
      { title: 'How Smart Connect works', body: 'When you connect, FollowNet scores censorship level, DPI hints, and link stability. Restrictive networks may get AmneziaWG; stable mobile links may use WireGuard or IKEv2. You can override anytime in Settings.' },
      { title: 'Who should enable Smart Connect?', body: 'Travelers, users on restrictive ISPs, and anyone tired of switching protocols manually. It is especially useful in regions where plain WireGuard is filtered.' },
    ],
    bullets: ['Auto protocol: WireGuard, IKEv2, AmneziaWG', 'Network-aware server and protocol selection', 'Manual override always available', 'Built into FollowNet for iPhone and iPad'],
    cta: CTA,
    faq: [
      { q: 'How do I turn on Smart Connect?', a: 'Settings → Protocol → Smart Connect (wording may vary by app version).' },
      { q: 'Can I see which protocol Smart Connect chose?', a: 'Yes. The app shows the active protocol and server after connection.' },
      { q: 'Does Smart Connect use more battery?', a: 'Minimal extra overhead; VPN itself has a modest battery cost on any iOS app.' },
    ],
  },
  'amneziawg-vpn-ios': {
    h1: 'AmneziaWG VPN for iOS — when WireGuard is blocked',
    lead:
      'AmneziaWG is obfuscated WireGuard for networks that detect standard VPN traffic. FollowNet includes AmneziaWG on iOS and can activate it automatically via Smart Connect.',
    sections: [
      { title: 'Why obfuscation matters', body: 'Deep packet inspection (DPI) can block or throttle recognizable VPN signatures. AmneziaWG wraps WireGuard in a form that is harder to classify — useful on some mobile carriers and in censorship-heavy regions.' },
      { title: 'Using AmneziaWG in FollowNet', body: 'Enable Smart Connect for automatic fallback, or select AmneziaWG manually in Settings → Protocol. Performance may differ from plain WireGuard; Speed Test helps compare.' },
    ],
    bullets: ['Obfuscated WireGuard for restrictive networks', 'Available via Smart Connect or manual selection', 'Same servers as WireGuard and IKEv2', 'Native iOS Network Extension'],
    cta: CTA,
    faq: [
      { q: 'Is AmneziaWG the same as WireGuard?', a: 'It is WireGuard-based with obfuscation layers for networks that block vanilla WireGuard.' },
      { q: 'When should I use AmneziaWG?', a: 'When WireGuard fails to connect or speeds collapse — common on some ISPs and travel SIMs.' },
      { q: 'Is AmneziaWG on the free plan?', a: 'Protocol availability follows your subscription tier; check the app for current Free vs Premium limits.' },
    ],
  },
  'no-logs-vpn': {
    h1: 'No-logs VPN for iPhone — FollowNet privacy approach',
    lead:
      'FollowNet is designed to minimize data collection. We do not sell your browsing history. Read our Privacy Policy for exactly what we process for account, VPN, and analytics.',
    sections: [
      { title: 'What “no logs” means in practice', body: 'No VPN can be “zero data” if you have an account — email login and subscription status require some metadata. FollowNet focuses on not logging contents of your traffic and limiting retention of connection metadata.' },
      { title: 'Your rights and transparency', body: 'Our Privacy Policy covers GDPR and CCPA rights, Firebase Analytics usage, DNS handling, and support tickets. We recommend reading it before connecting on iPhone or iPad.' },
    ],
    bullets: ['Clear Privacy Policy at follow-net.com/privacy', 'Email-code login — no social tracking required', 'VPN metadata minimized per policy', 'Premium billed through Apple — not stored card data in-app'],
    cta: CTA,
    faq: [
      { q: 'Does FollowNet log websites I visit?', a: 'FollowNet does not log the contents of your VPN traffic per our Privacy Policy.' },
      { q: 'Where is the privacy policy?', a: 'https://follow-net.com/privacy — linked in the app and App Store listing.' },
      { q: 'Does Apple see my VPN usage?', a: 'Apple processes App Store subscriptions; VPN tunnel runs in iOS Network Extension sandbox.' },
    ],
  },
  'auto-connect-vpn-ios': {
    h1: 'Auto-connect VPN for iOS — connect when your network changes',
    lead:
      'FollowNet Auto-connect starts VPN automatically on Wi‑Fi, mobile data, or any network — so you do not need to tap Connect every time you join a hotspot or switch from Wi‑Fi to LTE.',
    sections: [
      { title: 'Why auto-connect on iPhone?', body: 'Public Wi‑Fi and travel networks are when people need VPN most — and when they forget to turn it on. Auto-connect watches your network and launches FollowNet when your chosen rule matches.' },
      { title: 'Auto-connect modes in FollowNet', body: 'Pick Disabled, Wi‑Fi Only, LTE Only, or Always in Settings → Auto-connect. Pair with Smart Connect so the best protocol and server are selected after VPN starts.' },
    ],
    bullets: ['Wi‑Fi Only, LTE Only, or Always', 'Works with WireGuard, IKEv2, and Smart Connect', 'Available on Free and Premium', 'Set up in Settings → Auto-connect'],
    cta: CTA,
    faq: [
      { q: 'How do I enable Auto-connect?', a: 'Open FollowNet → Settings → Auto-connect and choose Wi‑Fi Only, LTE Only, Always, or Disabled.' },
      { q: 'Will Auto-connect run on home Wi‑Fi?', a: 'Only if you select Wi‑Fi Only or Always. Many users pick Wi‑Fi Only for cafes and hotels while leaving home networks off.' },
      { q: 'Is Auto-connect the same as Smart Connect?', a: 'No. Auto-connect decides when to start VPN; Smart Connect picks protocol and server after connecting.' },
    ],
  },
  'dns-vpn-ios': {
    h1: 'Custom DNS VPN for iPhone — Quad9, Cloudflare, and more',
    lead:
      'FollowNet lets you choose DNS profiles on iOS: stick with system DNS, or switch to Quad9, Cloudflare, AdGuard, and other presets while the VPN tunnel is active.',
    sections: [
      { title: 'Why DNS matters with VPN', body: 'DNS translates domain names to IP addresses. Some users want malware-blocking resolvers (Quad9), faster public DNS (Cloudflare), or ad-blocking DNS (AdGuard) in addition to VPN encryption.' },
      { title: 'DNS profiles in FollowNet', body: 'Pick a DNS preset in Settings without leaving the app. DNS queries can route through the VPN tunnel depending on configuration — see Privacy Policy for handling details.' },
    ],
    bullets: ['Multiple DNS presets built in', 'Works alongside WireGuard and IKEv2', 'Useful for privacy and filtering goals', 'No separate DNS app required'],
    cta: CTA,
    faq: [
      { q: 'Which DNS should I use?', a: 'Quad9 for security focus, Cloudflare for speed, AdGuard DNS for ad blocking — or system default.' },
      { q: 'Does custom DNS replace VPN encryption?', a: 'No. DNS changes resolver choice; VPN still encrypts traffic to the VPN server.' },
      { q: 'Can I use DNS profiles on Free?', a: 'DNS settings are available per your current plan in the app.' },
    ],
  },
  'vpn-for-travel': {
    h1: 'VPN for travel on iPhone — roaming, hotels, and airports',
    lead:
      'Travel means unfamiliar Wi‑Fi, foreign SIMs, and sometimes filtered networks. FollowNet Smart Connect adapts protocols for your location while you use one familiar iOS app worldwide.',
    sections: [
      { title: 'Travel scenarios', body: 'Airport lounge Wi‑Fi, hotel captive portals, and local prepaid SIMs can all behave differently. VPN helps privacy; Smart Connect helps connectivity when protocols are restricted abroad.' },
      { title: 'Tips for travelers', body: 'Download FollowNet before you leave, sign in with email, run Speed Test on Wi‑Fi vs cellular, and enable Auto-connect on untrusted networks. Premium unlocks all server regions if you need a specific exit country.' },
    ],
    bullets: ['Global server locations', 'Smart Connect for foreign carriers', 'Auto-connect on hotel and airport Wi‑Fi', 'Same app in every country — App Store download'],
    cta: CTA,
    faq: [
      { q: 'Will VPN work in every country?', a: 'Availability depends on local laws and network policies. Users are responsible for complying with local regulations.' },
      { q: 'Should I connect before or after hotel Wi‑Fi login?', a: 'Usually after the captive portal; then enable VPN for the rest of the session.' },
      { q: 'Does travel roaming cost extra with VPN?', a: 'VPN adds data overhead; roaming charges depend on your carrier plan, not FollowNet.' },
    ],
  },
  'best-vpn-iphone': {
    h1: 'Best VPN for iPhone — what to look for in 2026',
    lead:
      'The best iPhone VPN is native to iOS, transparent about privacy, fast on your networks, and honest about free vs paid tiers. Here is how FollowNet compares on features that matter.',
    sections: [
      { title: 'Checklist for iPhone VPN apps', body: 'Look for App Store distribution, Network Extension (not browser-only “VPN”), clear Privacy Policy, modern protocols (WireGuard/IKEv2), Auto-connect, and responsive support. Avoid apps with no verifiable company behind them.' },
      { title: 'FollowNet highlights', body: 'Native iOS app, free tier with daily data, Smart Connect for restrictive networks, AmneziaWG, custom DNS, Speed Test, Shortcuts automation, and Premium via Apple subscriptions.' },
    ],
    bullets: ['App Store native — not sideloaded profiles', 'WireGuard + IKEv2 + Smart Connect + AmneziaWG', 'Auto-connect, DNS, Speed Test, widgets', 'Free to try — Premium optional'],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet the best VPN for everyone?', a: 'No single VPN fits all users. FollowNet focuses on iOS, modern protocols, and Smart Connect — try the free tier to see if speeds and servers work for you.' },
      { q: 'Why iOS-only?', a: 'FollowNet prioritizes a polished iPhone and iPad experience rather than spreading thin across many platforms.' },
      { q: 'How do I compare speeds?', a: 'Use the built-in Speed Test with and without VPN on your usual Wi‑Fi and cellular networks.' },
    ],
  },
  'vpn-speed-test-ios': {
    h1: 'VPN Speed Test for iPhone — measure before you commit',
    lead:
      'FollowNet includes a Speed Test so you can compare download speed and latency on iOS with VPN on or off, and between server locations — before upgrading to Premium.',
    sections: [
      { title: 'Why test VPN speed on iOS', body: 'Speed depends on your baseline network, server distance, and protocol. Testing on your actual Wi‑Fi and LTE helps set realistic expectations — especially for streaming and video calls on iPad.' },
      { title: 'How to use Speed Test in FollowNet', body: 'Open Speed Test from the app, run a baseline without VPN, then connect and test again. Try Smart Connect vs manual WireGuard or IKEv2 if results differ on your carrier.' },
    ],
    bullets: ['Built into FollowNet — no third-party app', 'Compare servers and protocols', 'Useful on Free and Premium', 'Run on iPhone and iPad'],
    cta: CTA,
    faq: [
      { q: 'Will VPN always be slower?', a: 'Some overhead is normal due to encryption and server distance. A nearby server often minimizes the gap.' },
      { q: 'Which protocol is fastest?', a: 'Often WireGuard on good networks; your mileage varies — use Speed Test locally.' },
      { q: 'Does Speed Test use my data allowance?', a: 'Yes. Tests consume data like any download — keep that in mind on the free daily limit.' },
    ],
  },
  'secure-vpn-iphone': {
    h1: 'Secure VPN for iPhone — encryption, Auto-connect, and DNS',
    lead:
      'Security on iOS means more than a padlock icon. FollowNet combines WireGuard or IKEv2 encryption, optional Auto-connect, custom DNS, and a published Privacy Policy.',
    sections: [
      { title: 'Layers of protection', body: 'VPN encrypts traffic to the VPN server. Auto-connect starts VPN on public Wi‑Fi or cellular without manual taps. DNS profiles can add blocking or privacy-focused resolvers. Together they harden everyday iPhone use on untrusted networks.' },
      { title: 'Security best practices', body: 'Keep iOS updated, use Strong Passcode or Face ID, enable Auto-connect on public Wi‑Fi, and review FollowNet’s Privacy Policy. Premium does not mean “more encryption” — it unlocks capacity and servers.' },
    ],
    bullets: ['Modern protocols: WireGuard, IKEv2, AmneziaWG', 'Auto-connect on Wi‑Fi or LTE', 'Custom DNS presets', 'App Store review and sandboxed VPN extension'],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet safe for banking on iPhone?', a: 'VPN adds transport encryption, but use official banking apps and HTTPS sites. FollowNet is not a substitute for device security hygiene.' },
      { q: 'Does secure VPN mean military-grade?', a: 'Marketing terms vary. FollowNet uses standard modern VPN protocols — see our docs and Privacy Policy for specifics.' },
      { q: 'Can VPN protect against phishing?', a: 'No. VPN encrypts traffic; it does not block malicious links or fake login pages.' },
    ],
  },
};

/** Related guides shown at the bottom of each landing page (internal linking). */
export const LANDING_RELATED: Record<LandingSlug, LandingSlug[]> = {
  'vpn-for-iphone': ['free-vpn-iphone', 'best-vpn-iphone', 'vpn-for-ipad', 'secure-vpn-iphone'],
  'wireguard-vpn-ios': ['amneziawg-vpn-ios', 'smart-connect-vpn', 'ikev2-vpn-ios', 'vpn-speed-test-ios'],
  'free-vpn-iphone': ['vpn-for-iphone', 'best-vpn-iphone', 'vpn-for-wifi', 'no-logs-vpn'],
  'vpn-for-ipad': ['vpn-for-iphone', 'secure-vpn-iphone', 'dns-vpn-ios', 'auto-connect-vpn-ios'],
  'ikev2-vpn-ios': ['wireguard-vpn-ios', 'smart-connect-vpn', 'vpn-for-travel', 'vpn-speed-test-ios'],
  'vpn-for-wifi': ['auto-connect-vpn-ios', 'secure-vpn-iphone', 'free-vpn-iphone', 'smart-connect-vpn'],
  'smart-connect-vpn': ['amneziawg-vpn-ios', 'wireguard-vpn-ios', 'ikev2-vpn-ios', 'vpn-for-travel'],
  'amneziawg-vpn-ios': ['smart-connect-vpn', 'wireguard-vpn-ios', 'vpn-for-travel', 'ikev2-vpn-ios'],
  'no-logs-vpn': ['secure-vpn-iphone', 'dns-vpn-ios', 'free-vpn-iphone', 'best-vpn-iphone'],
  'auto-connect-vpn-ios': ['vpn-for-wifi', 'secure-vpn-iphone', 'vpn-for-travel', 'vpn-for-iphone'],
  'dns-vpn-ios': ['secure-vpn-iphone', 'no-logs-vpn', 'auto-connect-vpn-ios', 'vpn-for-iphone'],
  'vpn-for-travel': ['smart-connect-vpn', 'vpn-for-wifi', 'auto-connect-vpn-ios', 'amneziawg-vpn-ios'],
  'best-vpn-iphone': ['vpn-for-iphone', 'free-vpn-iphone', 'vpn-speed-test-ios', 'no-logs-vpn'],
  'vpn-speed-test-ios': ['wireguard-vpn-ios', 'ikev2-vpn-ios', 'best-vpn-iphone', 'vpn-for-iphone'],
  'secure-vpn-iphone': ['auto-connect-vpn-ios', 'dns-vpn-ios', 'no-logs-vpn', 'vpn-for-wifi'],
};

export function landingContent(slug: LandingSlug, lang: AppLang): LandingContent {
  const pack = lang === 'ru' || lang === 'uk' ? RU : EN;
  return pack[slug];
}

export { LANDING_SLUGS as landingSlugsList };
