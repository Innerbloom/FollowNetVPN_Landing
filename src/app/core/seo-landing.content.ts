import { AppLang } from './i18n.service';
import { CoreLandingSlug, LANDING_SLUGS, type LandingSlug } from './seo-landing.slugs';
import { RU } from './seo-landing.content.ru';
import { localizedLandingContent } from './seo-landing.content.locales';
import { extraLandingContent, isExtraLandingSlug } from './seo-landing.extra-guides';

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

const EN: Record<CoreLandingSlug, LandingContent> = {
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
          'FollowNet uses native iOS VPN APIs (Network Extension) and brings Shortcuts, Auto-connect, custom DNS, and the server locations currently listed in the app into an iPhone-focused interface.',
      },
    ],
    bullets: [
      'Free plan with weekly traffic — try before you subscribe',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2, and VLESS Reality (Smart Connect picks when needed)',
      'Data handling is explained in our Privacy Policy',
      'Premium: unlimited data and the locations included in the current plan',
    ],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet a free VPN for iPhone?', a: 'Yes. FollowNet offers a free tier with weekly traffic. Premium removes the traffic cap and provides the locations shown for that plan in the app.' },
      { q: 'Does FollowNet work on iPad?', a: 'Yes. The same iOS app runs on iPhone and iPad.' },
      { q: 'Which VPN protocol should I use on iOS?', a: 'WireGuard is fast and modern. IKEv2 is stable on mobile networks. Smart Connect automatically chooses the best protocol for your network.' },
    ],
  },
  'wireguard-vpn-ios': {
    h1: 'WireGuard VPN for iOS — fast and modern',
    lead:
      'FollowNet includes native WireGuard on iPhone and iPad, plus AmneziaWG and other protocols when networks block standard VPNs. Smart Connect can switch for you so you stay connected without guessing.',
    sections: [
      {
        title: 'Why WireGuard on iOS?',
        body:
          'WireGuard is lightweight, uses modern cryptography, and typically delivers lower latency than older VPN protocols. On iPhone and iPad it is a strong default for browsing, messaging, video calls, and many streaming or gaming sessions on calm networks.',
      },
      {
        title: 'How to enable WireGuard in FollowNet',
        body:
          'Open Settings → Protocol and choose WireGuard, or leave Smart Connect on and let FollowNet pick when WireGuard fits. After connecting, confirm the active protocol in the app, then run Speed Test on the same Wi‑Fi or LTE so you compare real numbers.',
      },
      {
        title: 'When WireGuard is blocked or throttled',
        body:
          'Some ISPs, hotels, and travel SIMs detect or throttle WireGuard. FollowNet can fall back to AmneziaWG, Hysteria2, VLESS Reality, or IKEv2 depending on what your plan and network support — manually or via Smart Connect (and the Restricted Network profile when you want that ladder by default).',
      },
      {
        title: 'WireGuard vs other FollowNet protocols',
        body:
          'WireGuard is often the fastest on open networks. IKEv2 can reconnect more smoothly on cellular handoffs. AmneziaWG and Hysteria2 help when the network fights classic tunnels. No protocol wins everywhere — measure on your route.',
      },
      {
        title: 'Free weekly vs Premium',
        body:
          'WireGuard is available within the Free weekly traffic allowance so you can evaluate speed and reliability. Premium removes the traffic cap and unlocks the locations included in the current Premium plan shown in the app. We do not invent server counts here.',
      },
    ],
    bullets: [
      'Native WireGuard via iOS Network Extension',
      'Manual WireGuard or Smart Connect auto-selection',
      'Fallback options: IKEv2, AmneziaWG, Hysteria2 when needed',
      'Server locations listed in the app — not inflated on this page',
      'Works within Free weekly traffic; Premium for unlimited use',
    ],
    cta: 'Get FollowNet on the App Store',
    faq: [
      { q: 'Is WireGuard safe on iPhone?', a: 'WireGuard uses a modern cryptographic design. FollowNet runs it through Apple’s Network Extension framework like other App Store VPNs.' },
      { q: 'Can I force WireGuard only?', a: 'Yes. Open Settings → Protocol and choose WireGuard. Use Smart Connect when you want automatic selection instead.' },
      { q: 'What if WireGuard will not connect?', a: 'Try Smart Connect, switch to AmneziaWG, IKEv2, or Hysteria2, pick another location listed in the app, and re-test with Speed Test.' },
      { q: 'Does FollowNet support split tunneling on iOS?', a: 'iOS routes device traffic through the VPN tunnel when connected. Per-app split tunneling is limited by Apple’s platform; FollowNet follows system VPN rules.' },
    ],
  },
  'free-vpn-iphone': {
    h1: 'Free VPN for iPhone — try FollowNet with weekly traffic',
    lead:
      'Looking for a free VPN on iPhone without a credit card? FollowNet Free includes a weekly traffic allowance, modern protocols, Smart Connect, and the tools you need to evaluate the service before Premium.',
    sections: [
      {
        title: 'What you get on Free',
        body:
          'FollowNet Free lets you connect on iPhone and iPad within a weekly traffic allowance. You can try the protocols currently offered for your plan, pick from the Free locations listed in the app, use Smart Connect, and check Auto-connect, DNS profiles, and Speed Test where available.',
      },
      {
        title: 'How the weekly allowance works',
        body:
          'Free is capped per week, not “unlimited forever.” Use the allowance to test real Wi‑Fi and cellular networks you care about. When the weekly traffic is used up, wait for the next period or upgrade to Premium for unlimited traffic under current App Store terms.',
      },
      {
        title: 'Free vs Premium — honest comparison',
        body:
          'Free is for evaluation: weekly traffic and the Free servers shown in the app. Premium removes the traffic cap and unlocks Premium locations included in the current plan. Premium is not “stronger encryption” — it is capacity, locations, and convenience. Exact plan details live in the app.',
      },
      {
        title: 'How to get started without a card',
        body:
          'Download FollowNet from the App Store, sign in with an email code, approve the iOS VPN configuration once, and tap Connect. No credit card is required for Free. Read the Privacy Policy before you rely on the app for sensitive sessions.',
      },
      {
        title: 'When Free is enough — and when it is not',
        body:
          'Free works well for short public Wi‑Fi sessions, travel check-ins, and comparing protocols. Long HD streaming, all-day mobile use, or heavy downloads usually need Premium because of the weekly Free limit. Streaming unlocks are never guaranteed on any tier.',
      },
    ],
    bullets: [
      'No credit card required for Free',
      'Weekly traffic allowance — enough to evaluate, not unlimited',
      'Protocols and Free locations are shown in the app',
      'Smart Connect, Auto-connect, DNS, and Speed Test where available',
      'Upgrade in-app via App Store when you need unlimited traffic',
    ],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet really free on iPhone?', a: 'Yes. Free includes weekly traffic for evaluation. Premium is optional and removes the traffic cap according to the current plan terms in the app.' },
      { q: 'Is the Free limit daily or weekly?', a: 'Weekly. Check the app for the current allowance and reset timing — do not assume a daily refill.' },
      { q: 'Are there ads in the free version?', a: 'FollowNet Free is ad-supported in some regions; Premium is ad-free.' },
      { q: 'Can I use Free on public Wi‑Fi?', a: 'Yes. Free still encrypts traffic within the weekly allowance — useful for cafés, airports, and hotels.' },
    ],
  },
  'vpn-for-ipad': {
    h1: 'VPN for iPad — same FollowNet app, optimized for iOS',
    lead:
      'FollowNet is available for iPhone and iPad as an iOS app, with the protocols and account features shown in the current App Store build.',
    sections: [
      { title: 'Why use VPN on iPad?', body: 'iPad is often used on the same public Wi‑Fi as your phone — travel, coworking, and home guest networks. A VPN helps protect Safari, apps, and downloads on cellular and Wi‑Fi.' },
      { title: 'Using FollowNet on iPad', body: 'Set up the VPN through the same iOS permission flow, then choose the protocol, Auto-connect, and DNS options available in the current build.' },
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
      { title: 'IKEv2 in FollowNet', body: 'Select IKEv2 manually in Settings → Protocol, or use Smart Connect. The app shows which protocol and server combinations are currently available.' },
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
      'Coffee shops, airports, hotels, and guest networks are convenient but risky. FollowNet encrypts iPhone and iPad traffic to the VPN server on Wi‑Fi you do not fully trust — within Free weekly traffic or Premium unlimited use.',
    sections: [
      {
        title: 'Risks on open and guest Wi‑Fi',
        body:
          'Shared hotspots can expose unencrypted traffic to others on the same network. Even password-protected guest Wi‑Fi may be operated by untrusted parties. A VPN adds encryption between your device and the VPN server; it does not make a malicious hotspot “safe” by itself or stop phishing.',
      },
      {
        title: 'Recommended setup for public Wi‑Fi',
        body:
          'Join the network, complete any captive portal login first, then connect FollowNet. Prefer Smart Connect on unfamiliar networks. Enable Auto-connect for Wi‑Fi Only if you want the tunnel to start when you leave home networks you already trust.',
      },
      {
        title: 'Auto-connect and everyday habits',
        body:
          'Auto-connect modes (Wi‑Fi Only, LTE Only, Always, or Disabled) decide when VPN starts. Pair with a Home Screen widget to confirm the tunnel is up after you sit down with coffee — status first, not a marketing dashboard.',
      },
      {
        title: 'Speed and captive portals',
        body:
          'Some overhead is normal on hotel uplinks. Use Speed Test and a closer location listed in the app. If WireGuard fails after portal login, try Smart Connect or AmneziaWG/Hysteria2. VPN cannot invent bandwidth the hotspot does not have.',
      },
      {
        title: 'Free weekly vs Premium on Wi‑Fi',
        body:
          'Free encrypts public Wi‑Fi sessions within the weekly traffic allowance — enough for travel days and café work. All-day streaming or large uploads on hotel Wi‑Fi usually need Premium. Locations available on each plan are listed in the app.',
      },
    ],
    bullets: [
      'Encrypt traffic on café, airport, hotel, and guest Wi‑Fi',
      'Complete captive portal login, then connect VPN',
      'Auto-connect on Wi‑Fi so you do not forget',
      'Smart Connect for filtered or awkward hotspots',
      'Free weekly allowance or Premium for unlimited sessions',
    ],
    cta: CTA,
    faq: [
      { q: 'Do I need VPN on home Wi‑Fi?', a: 'Home networks are usually safer. Use VPN if you want extra privacy from ISP-visible browsing or you share the network with guests.' },
      { q: 'Will VPN slow down hotel Wi‑Fi?', a: 'Some overhead is normal. Use Speed Test and try a closer server listed in the app for better results.' },
      { q: 'Does FollowNet work on captive portal login pages?', a: 'Usually connect VPN after you complete the portal login. Then keep the tunnel up for the rest of the session.' },
      { q: 'Is Free enough for public Wi‑Fi?', a: 'Yes for short and medium sessions within the weekly Free traffic. Heavy all-day use typically needs Premium.' },
    ],
  },
  'smart-connect-vpn': {
    h1: 'Smart Connect VPN — automatic protocol for iOS',
    lead:
      'Smart Connect is FollowNet’s adaptive mode: it uses network context when available and chooses among WireGuard, IKEv2, AmneziaWG, Hysteria2, and VLESS Reality — with fallbacks and egress checks so you spend less time on manual trial and error.',
    sections: [
      {
        title: 'How Smart Connect works',
        body:
          'When Protocol is on Smart, FollowNet weighs geo / ISP hints from the backend when available, picks a starting tunnel, and can climb a recovery ladder (often Hysteria2 → VLESS Reality → AmneziaWG → WireGuard → IKEv2, skipping what your servers cannot offer). After you are online, the app shows what is active. Override anytime in Settings → Protocol.',
      },
      {
        title: 'Why VLESS Reality is in the chain',
        body:
          'Some carriers fingerprint or stall classic WireGuard — and even AmneziaWG. VLESS with REALITY-style camouflage is another path when a tunnel looks Connected but does not pass real traffic. FollowNet still verifies egress before treating the session as healthy.',
      },
      {
        title: 'When to leave Smart Connect on',
        body:
          'Travelers, restrictive ISPs, hotel uplinks, and travel SIMs are the main use cases. Prefer the Restricted Network profile when you want Smart Connect plus Always Auto-connect and Fastest server without babysitting each protocol.',
      },
      {
        title: 'When to pick a protocol manually',
        body:
          'If WireGuard is already fast at home, lock it. Use manual mode for Speed Test comparisons. Switch back to Smart Connect (or Restricted) on unfamiliar café, airport, or foreign SIM networks.',
      },
      {
        title: 'Smart Connect vs Auto-connect vs profiles',
        body:
          'Auto-connect decides when VPN starts (Wi‑Fi, LTE, Always). Smart Connect decides which protocol path to try after VPN starts. Network Profiles bundle both plus DNS and server mode — Public Wi‑Fi locks WireGuard; Travel locks IKEv2; Restricted keeps Smart aggressive.',
      },
      {
        title: 'Limits and Free weekly vs Premium',
        body:
          'Smart Connect improves convenience; it does not guarantee a connection on every network or invent a path through a captive portal you skipped. Free includes Smart Connect within the weekly traffic cap. Premium removes the traffic limit and unlocks Premium locations shown for that plan in the app.',
      },
    ],
    bullets: [
      'Auto protocol among WireGuard, IKEv2, AmneziaWG, Hysteria2, and VLESS Reality',
      'Fallback ladder with egress checks — not a green status alone',
      'Pairs with Auto-connect and Network Profiles (incl. Restricted)',
      'Active protocol and server visible after connect',
      'Available on Free weekly traffic and on Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'How do I turn on Smart Connect?', a: 'Settings → Protocol → Smart (wording may vary by app version). Or apply the Restricted Network profile.' },
      { q: 'Can I see which protocol Smart Connect chose?', a: 'Yes. The app shows the active protocol and server after connection.' },
      { q: 'Does Smart Connect use VLESS Reality?', a: 'Yes when that protocol is available for your session and the network context / fallbacks call for it. You can also lock VLESS manually.' },
      { q: 'Does Smart Connect guarantee access everywhere?', a: 'No. It improves odds on difficult networks but cannot override local laws, total blocks, or broken hotspots.' },
    ],
  },
  'network-profiles-ios': {
    h1: 'Network Profiles on iOS — Smart, Public Wi‑Fi, Travel, Restricted',
    lead:
      'One FollowNet profile packs protocol, DNS, Auto-connect, and server mode so a café and home Wi‑Fi do not share the same defaults. Built-in presets match what ships in the app.',
    sections: [
      {
        title: 'What a profile stores',
        body:
          'Settings → Network Profiles writes four knobs at once: preferred protocol (or Smart), DNS preset, Auto-connect mode, and server mode (Fastest / Last used / Specific). Apply a profile instead of retuning four menus every time the SSID changes.',
      },
      {
        title: 'Smart (default)',
        body:
          'Protocol: Smart · DNS: System/Default · Auto-connect: Off · Server: Last used. Everyday starting point when FollowNet should choose the tunnel and reconnect to the last city.',
      },
      {
        title: 'Public Wi‑Fi',
        body:
          'Protocol: WireGuard · DNS: Quad9 · Auto-connect: Wi‑Fi Only · Server: Fastest. After you finish a captive portal, encrypt on shared hotspots with a low-latency exit and a privacy-leaning resolver.',
      },
      {
        title: 'Travel',
        body:
          'Protocol: IKEv2 · DNS: Cloudflare · Auto-connect: Always · Server: Fastest. Tuned for roaming and LTE ↔ hotel Wi‑Fi handoffs — boring reliability over novelty protocols.',
      },
      {
        title: 'Restricted + custom profiles',
        body:
          'Restricted keeps Protocol on Smart, DNS Quad9, Auto-connect Always, Server Fastest — for DPI-shaped networks where you want Smart Connect’s full ladder (Hysteria2 / VLESS Reality / AmneziaWG / WireGuard / IKEv2). Clone a custom profile when a hotel only works on a pinned protocol + DNS + Specific city.',
      },
    ],
    bullets: [
      'Four built-in presets with exact protocol / DNS / Auto-connect / server mode',
      'Restricted = Smart + Always + Fastest for hostile networks',
      'Custom profiles for hotel or office recipes you already tested',
      'Same toolkit on Free weekly and Premium',
      'Pairs with Apple Shortcuts Apply Profile',
    ],
    cta: CTA,
    faq: [
      { q: 'Where do I find Network Profiles?', a: 'In the FollowNet iOS app: Settings → Network Profiles (and the profile menu on the main screen).' },
      { q: 'Does Restricted use VLESS?', a: 'Restricted leaves Protocol on Smart, so Smart Connect can climb to VLESS Reality when that path is available — it does not lock a single protocol.' },
      { q: 'Are profiles Premium-only?', a: 'Built-in presets are available on Free within the weekly traffic cap. Premium mainly adds capacity and the wider server map.' },
      { q: 'How is this different from Smart Connect alone?', a: 'Smart Connect is the protocol picker. A profile also sets DNS, Auto-connect, and server mode in one tap.' },
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
    bullets: ['Obfuscated WireGuard for restrictive networks', 'Available via Smart Connect or manual selection', 'Server availability is shown in the app', 'Native iOS Network Extension'],
    cta: CTA,
    faq: [
      { q: 'Is AmneziaWG the same as WireGuard?', a: 'It is WireGuard-based with obfuscation layers for networks that block vanilla WireGuard.' },
      { q: 'When should I use AmneziaWG?', a: 'When WireGuard fails to connect or speeds collapse — common on some ISPs and travel SIMs.' },
      { q: 'Is AmneziaWG on the free plan?', a: 'Protocol availability follows your subscription tier; check the app for current Free vs Premium limits.' },
    ],
  },
  'no-logs-vpn': {
    h1: 'VPN privacy on iPhone — beyond no-logs slogans',
    lead:
      'FollowNet aims to minimize data collection. Read our Privacy Policy for exactly what is processed for account access, VPN operation, support, and analytics — not an absolute “zero logs” marketing line.',
    sections: [
      {
        title: 'What privacy claims mean in practice',
        body:
          'An account-based VPN cannot operate with literally zero data: email login and subscription status require service metadata. Absolute “no-logs” slogans hide that reality. The published Privacy Policy defines FollowNet’s current handling and retention.',
      },
      {
        title: 'What to read before you connect',
        body:
          'Our Privacy Policy covers categories of data, purposes, retention, GDPR and CCPA rights, Firebase Analytics usage, DNS handling, and support tickets. Prefer that document over any landing-page shorthand — including this one.',
      },
      {
        title: 'Account, billing, and Apple',
        body:
          'FollowNet uses email-code login. Premium billing is processed through Apple’s App Store. Apple handles subscription payments; the VPN tunnel runs in the iOS Network Extension sandbox. We do not claim third-party “no-logs audits” we have not published here.',
      },
      {
        title: 'Practical privacy habits on iPhone',
        body:
          'Keep iOS updated, use a strong passcode or Face ID, enable Auto-connect on public Wi‑Fi, and review DNS profiles if you want a specific resolver. VPN encrypts traffic to the VPN server; it does not replace phishing awareness or device hygiene.',
      },
      {
        title: 'Free weekly, Premium, and transparency',
        body:
          'The same Privacy Policy applies on Free and Premium. Free includes weekly traffic for evaluation; Premium removes the traffic cap. Plan limits and locations are shown in the app — not invented as marketing counts on this page.',
      },
    ],
    bullets: [
      'Privacy Policy at follow-net.com/privacy — the source of truth',
      'Email-code login; no absolute “zero data” claims',
      'Data categories and retention described in the policy',
      'Premium billing handled through Apple',
      'Same honesty on Free weekly traffic and Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'What does FollowNet process?', a: 'See the current Privacy Policy for the precise data categories, purposes, and retention terms.' },
      { q: 'Where is the privacy policy?', a: 'https://follow-net.com/privacy — linked in the app and App Store listing.' },
      { q: 'Do you claim a formal no-logs audit?', a: 'Do not rely on audit slogans on this page. Use the published Privacy Policy for what we process today.' },
      { q: 'Does Apple see my VPN usage?', a: 'Apple processes App Store subscriptions; the VPN tunnel runs in the iOS Network Extension sandbox. Details that matter for privacy are in our Privacy Policy.' },
    ],
  },
  'best-vpn-iphone': {
    h1: 'Best VPN for iPhone — what to look for in 2026',
    lead:
      'The best iPhone VPN for you is native to iOS, transparent about privacy, fast on your networks, and honest about Free vs paid. Here is a practical checklist and how FollowNet fits — without claiming to be #1 for everyone.',
    sections: [
      {
        title: 'Checklist for iPhone VPN apps',
        body:
          'Prefer App Store distribution, real Network Extension VPN (not browser-only “VPN”), a clear Privacy Policy, modern protocols (WireGuard/IKEv2 and options for filtered networks), Auto-connect, and support you can reach. Avoid apps with no verifiable company or policy.',
      },
      {
        title: 'How FollowNet scores on that checklist',
        body:
          'FollowNet is a native iOS app with WireGuard, IKEv2, AmneziaWG, Hysteria2, Smart Connect, Auto-connect, custom DNS, Speed Test, widgets, and Shortcuts. Free includes weekly traffic; Premium is optional via Apple. Server locations are listed in the app.',
      },
      {
        title: 'Test before you subscribe',
        body:
          'Install Free, approve the VPN configuration, run Speed Test with and without VPN on your home Wi‑Fi and cellular, then try a café network with Smart Connect. If speeds and reliability work for you, Premium removes the weekly Free cap.',
      },
      {
        title: 'What “best” should not mean',
        body:
          'Beware guaranteed streaming unlocks, “servers in every country,” absolute no-logs slogans without a policy, and fake server counts. FollowNet does not promise those. Availability depends on your network and local rules.',
      },
      {
        title: 'Free weekly vs Premium decision',
        body:
          'Choose Free when you need occasional public Wi‑Fi protection and evaluation. Choose Premium for unlimited traffic and the Premium locations in your plan. Encryption quality is not a paywall — capacity and locations are.',
      },
    ],
    bullets: [
      'App Store native Network Extension — not a sideloaded profile',
      'WireGuard + IKEv2 + Smart Connect + AmneziaWG + Hysteria2',
      'Auto-connect, DNS, Speed Test, and widgets for real daily use',
      'Free weekly traffic to evaluate — Premium optional',
      'Privacy Policy over marketing slogans',
    ],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet the best VPN for everyone?', a: 'No single VPN fits all users. FollowNet focuses on iOS, modern protocols, and Smart Connect — try Free weekly traffic to see if speeds and servers work for you.' },
      { q: 'Why prioritize iOS?', a: 'FollowNet prioritizes a polished iPhone and iPad experience, with a Chrome extension for desktop browsing rather than spreading thin across every platform.' },
      { q: 'How do I compare speeds?', a: 'Use the built-in Speed Test with and without VPN on your usual Wi‑Fi and cellular networks.' },
      { q: 'Will it unlock every streaming library?', a: 'No. FollowNet encrypts your path and offers regional exits listed in the app; catalogs may still restrict VPN users.' },
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
      'Travel means unfamiliar Wi‑Fi, foreign SIMs, and sometimes filtered networks. FollowNet keeps the same iOS workflow while Smart Connect helps choose a protocol for the current network.',
    sections: [
      { title: 'Travel scenarios', body: 'Airport lounge Wi‑Fi, hotel captive portals, and local prepaid SIMs can all behave differently. VPN helps privacy; Smart Connect helps connectivity when protocols are restricted abroad.' },
      { title: 'Tips for travelers', body: 'Download FollowNet before you leave, sign in with email, run Speed Test on Wi‑Fi and cellular, and enable Auto-connect on untrusted networks. Check the app for the locations included in your plan.' },
    ],
    bullets: ['Multiple server locations listed in the app', 'Smart Connect for unfamiliar networks', 'Auto-connect on hotel and airport Wi‑Fi', 'Install and test before your trip'],
    cta: CTA,
    faq: [
      { q: 'Will VPN work in every country?', a: 'Availability depends on local laws and network policies. Users are responsible for complying with local regulations.' },
      { q: 'Should I connect before or after hotel Wi‑Fi login?', a: 'Usually after the captive portal; then enable VPN for the rest of the session.' },
      { q: 'Does travel roaming cost extra with VPN?', a: 'VPN adds data overhead; roaming charges depend on your carrier plan, not FollowNet.' },
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
      { q: 'Does Speed Test use my data allowance?', a: 'Yes. Tests consume data like any download — keep that in mind on the free weekly limit.' },
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
  'hysteria2-vpn-ios': {
    h1: 'Hysteria2 VPN for iOS — another path when networks fight tunnels',
    lead:
      'FollowNet includes Hysteria2 on iPhone and iPad alongside WireGuard, IKEv2, and AmneziaWG. Use it manually or let Smart Connect pick a protocol when your network is lossy or hostile to classic VPN traffic.',
    sections: [
      { title: 'When Hysteria2 helps on iOS', body: 'Some hotel uplinks, travel SIMs, and filtered carriers degrade WireGuard or stall handshakes. Hysteria2 is a practical alternative path in FollowNet’s conventional VPN stack — not a mixnet and not a guarantee of access everywhere.' },
      { title: 'How to enable Hysteria2', body: 'Open Settings → Protocol and choose Hysteria2, or leave Smart Connect on for automatic selection. After switching, run Speed Test on the same Wi‑Fi or LTE so you compare real numbers instead of guessing.' },
    ],
    bullets: ['Hysteria2 next to WireGuard, IKEv2, and AmneziaWG', 'Smart Connect can select it on hard networks', 'Manual override always available', 'Works with Free weekly limit and Premium'],
    cta: CTA,
    faq: [
      { q: 'Is Hysteria2 better than WireGuard?', a: 'Not always. WireGuard is often fastest on calm networks; Hysteria2 can help when those paths fail. Use Speed Test locally.' },
      { q: 'Does Smart Connect include Hysteria2?', a: 'Smart Connect weighs network conditions and can choose among FollowNet’s supported protocols, including Hysteria2 where it fits.' },
      { q: 'Is Hysteria2 on Free?', a: 'Protocol availability follows your plan in the app. Free still uses the same modern protocol set within the weekly traffic cap.' },
    ],
  },
  'vpn-chrome-extension': {
    h1: 'FollowNet VPN Chrome extension — desktop browsing, same account',
    lead:
      'Need FollowNet when you are not on iPhone? The Chrome extension covers browser traffic in Chrome on desktop with the same account and honest Free weekly vs Premium limits — while iOS remains the system-wide VPN for the whole device.',
    sections: [
      {
        title: 'What the extension is for',
        body:
          'The Chrome extension protects browsing inside Chrome (or Chromium-based browsers that support it) on a computer. Sign in with your FollowNet email code, choose a location listed for your plan, and keep the popup light. It is a browser proxy path — not a full macOS or Windows system VPN for every app.',
      },
      {
        title: 'What it does not cover',
        body:
          'Traffic outside the supported browser — desktop apps, other browsers, system updates — is not protected by the extension. For whole-device coverage on phone or tablet, use the iOS FollowNet app with Network Extension.',
      },
      {
        title: 'How it pairs with iPhone',
        body:
          'Use the iOS app for Auto-connect, widgets, cellular, Network Profiles, and all-app VPN. Use Chrome when you work on a computer. One account ties both; Free weekly / Premium and device seats follow the account.',
      },
      {
        title: 'Kill Switch, ad lists, and routing',
        body:
          'Kill Switch aims to stop Chrome from leaking if the proxy drops (browser-scoped, not OS-wide). Optional EasyList / AdGuard-style lists reduce ads and trackers. Site routing can send chosen hosts through the proxy while other tabs stay direct — still Chrome-only.',
      },
      {
        title: 'Setup in a few steps',
        body:
          'Install the FollowNet extension from the Chrome store listing, sign in with the same email code as iOS, pick a server from locations shown for your plan, and connect. If something fails, confirm you are signed in and that weekly Free traffic remains.',
      },
      {
        title: 'Free weekly vs Premium',
        body:
          'Free includes a weekly traffic allowance so you can evaluate desktop browsing before paying. Premium removes the traffic cap per your subscription. Neither tier turns the extension into a system-wide desktop VPN.',
      },
    ],
    bullets: [
      'Same FollowNet account as iOS',
      'Browser proxy + Kill Switch — not full-device desktop VPN',
      'Optional EasyList / AdGuard-style ad blocking',
      'Free weekly traffic allowance for evaluation',
      'Premium optional for unlimited traffic under current terms',
    ],
    cta: 'Install the Chrome extension',
    faq: [
      { q: 'Does the Chrome extension replace the iPhone app?', a: 'No. iOS VPN covers the whole phone; Chrome covers browser traffic on desktop.' },
      { q: 'Can I use Free on Chrome?', a: 'Yes. Free includes a weekly traffic allowance for evaluation; Premium removes the cap per your subscription.' },
      { q: 'Does the extension protect Slack, Zoom, or other desktop apps?', a: 'No. It covers supported browser traffic only. Use a system VPN if you need every app — on phone, that is the FollowNet iOS app.' },
      { q: 'Is there a macOS VPN app?', a: 'FollowNet prioritizes iOS and the Chrome extension today rather than waiting on a full macOS client.' },
    ],
  },
  'vpn-widgets-ios': {
    h1: 'VPN widgets for iOS — FollowNet status on your Home Screen',
    lead:
      'FollowNet widgets show connection status at a glance on iPhone and iPad so you know the tunnel is up without opening the app every time.',
    sections: [
      { title: 'Why VPN widgets help', body: 'Public Wi‑Fi and Auto-connect only work if you notice when VPN failed to start. Widgets surface status next to your other Home Screen tiles — status first, not a miniature dashboard of marketing metrics.' },
      { title: 'Pair widgets with Auto-connect', body: 'Set Auto-connect to Wi‑Fi Only, LTE Only, or Always in Settings, then use widgets to confirm the tunnel after you join a network. Protocol choice still lives in Settings or Smart Connect.' },
    ],
    bullets: ['Home Screen status without opening the app', 'Works with Auto-connect habits', 'Native iOS app from the App Store', 'Free to try — Premium optional'],
    cta: CTA,
    faq: [
      { q: 'Which iOS versions support FollowNet widgets?', a: 'Widget support follows the current App Store build requirements — keep FollowNet and iOS updated.' },
      { q: 'Can I connect from the widget alone?', a: 'Widgets emphasize status and a quick path into the app. Full connect controls remain in FollowNet and system VPN prompts.' },
      { q: 'Do widgets use extra battery?', a: 'Widgets are lightweight status surfaces; VPN battery cost comes from the active tunnel, not the tile itself.' },
    ],
  },
  'how-to-setup-vpn-iphone': {
    h1: 'How to set up a VPN on iPhone with FollowNet',
    lead:
      'Install FollowNet from the App Store, sign in with an email code, allow the VPN configuration once, and connect in one tap — Free weekly traffic included, Premium when you need unlimited.',
    sections: [
      {
        title: 'Step-by-step setup',
        body:
          '1) Download FollowNet from the App Store. 2) Sign in with the email verification code. 3) Approve the iOS VPN configuration prompt. 4) Tap Connect or enable Smart Connect. 5) Optionally set Auto-connect, DNS profiles, and a Home Screen widget.',
      },
      {
        title: 'What the iOS VPN permission means',
        body:
          'Apple requires explicit permission for Network Extension VPN apps. You are adding a system VPN configuration managed by FollowNet — not sideloading a random profile. You can remove it later in iOS Settings → VPN if you uninstall.',
      },
      {
        title: 'First-run tips',
        body:
          'Test on home Wi‑Fi before travel. Run Speed Test with VPN on and off. Pick a nearby location from those listed in the app. If WireGuard fails on a restrictive network, leave Smart Connect on or try AmneziaWG, IKEv2, or Hysteria2 in Settings → Protocol.',
      },
      {
        title: 'Recommended settings after connect',
        body:
          'For cafés and hotels, set Auto-connect to Wi‑Fi Only. Keep Smart Connect on when you travel. Add a widget to confirm status. Review DNS only if you want a specific resolver — it does not replace VPN encryption.',
      },
      {
        title: 'Free weekly vs Premium after setup',
        body:
          'Free works immediately without a credit card and includes weekly traffic for evaluation. When you outgrow the allowance, upgrade to Premium in the App Store for unlimited traffic and Premium locations shown for that plan. Streaming unlocks are never guaranteed on either tier.',
      },
    ],
    bullets: [
      'App Store install — no configuration profiles to sideload',
      'Passwordless email login',
      'Approve Network Extension once, then connect',
      'Smart Connect, Auto-connect, DNS, Speed Test, widgets',
      'Free weekly limit to evaluate before Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Do I need a credit card for setup?', a: 'No. FollowNet Free works without a card. Premium is optional via the App Store.' },
      { q: 'Why does iOS ask to add a VPN configuration?', a: 'Apple requires explicit permission for Network Extension VPN apps. This is normal for App Store VPNs.' },
      { q: 'Can I use the same account on iPad and Chrome?', a: 'Yes. Sign in with the same email on iPad and the Chrome extension.' },
      { q: 'Setup failed or VPN will not connect — what next?', a: 'Confirm the VPN configuration is allowed, try Smart Connect, switch protocol or location listed in the app, and re-test on another network if a captive portal is involved.' },
    ],
  },
  'vpn-for-streaming-iphone': {
    h1: 'VPN for streaming on iPhone — speed, servers, and honest limits',
    lead:
      'FollowNet helps keep iPhone streaming private on Wi‑Fi and cellular with WireGuard, Smart Connect, and an in-app Speed Test — without promising every catalog will unlock on every server.',
    sections: [
      { title: 'What matters for streaming', body: 'Pick a nearby server, prefer WireGuard on calm networks, and measure with Speed Test before long sessions. Auto-connect on hotel Wi‑Fi keeps the tunnel up so you are not streaming in the clear on a shared hotspot.' },
      { title: 'What VPN cannot guarantee', body: 'Some streaming services block known VPN exits. That is the service’s policy, not a FollowNet outage. Premium unlocks more locations and removes the Free weekly cap; it does not force a platform to allow VPN traffic.' },
    ],
    bullets: ['WireGuard and Smart Connect for everyday streams', 'Speed Test to compare servers on your network', 'Auto-connect on public Wi‑Fi', 'Free to evaluate — Premium for unlimited data'],
    cta: CTA,
    faq: [
      { q: 'Will FollowNet unlock every streaming library?', a: 'No. FollowNet encrypts your path and offers regional exits; catalogs may still restrict VPN users.' },
      { q: 'Which protocol should I use for video?', a: 'Start with WireGuard or Smart Connect. If the network fights VPN, try AmneziaWG or Hysteria2 and re-test speed.' },
      { q: 'Does Free work for streaming?', a: 'Yes within the weekly traffic cap. Long HD sessions usually need Premium.' },
    ],
  },
  'vpn-for-gaming-iphone': {
    h1: 'VPN for gaming on iPhone — latency, protocols, and when to skip it',
    lead:
      'Use FollowNet on iPhone when you need encrypted mobile gaming on untrusted networks — and measure latency with Speed Test so you know whether WireGuard or another protocol is worth it.',
    sections: [
      { title: 'When a gaming VPN helps', body: 'Public Wi‑Fi, travel SIMs, and privacy-sensitive sessions are good reasons to tunnel game traffic. WireGuard is usually the first try for lower overhead; IKEv2 can help when you bounce between LTE and Wi‑Fi mid-match.' },
      { title: 'When to turn VPN off', body: 'If Speed Test shows a large latency jump to a distant server, gaming may feel worse with VPN. Prefer a closer exit, try Smart Connect, or disconnect on trusted home networks. FollowNet will not invent a better route than your underlying connection.' },
    ],
    bullets: ['WireGuard-first for lower overhead', 'Smart Connect when networks filter VPN', 'Speed Test for latency reality checks', 'Same Free vs Premium model as everyday VPN'],
    cta: CTA,
    faq: [
      { q: 'Does FollowNet reduce ping?', a: 'Sometimes a better exit helps; often VPN adds overhead. Measure with Speed Test instead of assuming.' },
      { q: 'Is AmneziaWG good for games?', a: 'Use it when plain WireGuard is blocked. Obfuscation can trade some performance for reachability.' },
      { q: 'Can I game on Free?', a: 'Yes within the weekly limit. Competitive all-day play usually needs Premium.' },
    ],
  },
};

/** Related guides shown at the bottom of each landing page (internal linking). */
export const LANDING_RELATED: Record<CoreLandingSlug, LandingSlug[]> = {
  'vpn-for-iphone': ['how-to-setup-vpn-iphone', 'free-vpn-iphone', 'best-vpn-iphone', 'vpn-widgets-ios'],
  'wireguard-vpn-ios': ['hysteria2-vpn-ios', 'amneziawg-vpn-ios', 'smart-connect-vpn', 'vpn-speed-test-ios'],
  'free-vpn-iphone': ['vpn-for-iphone', 'how-to-setup-vpn-iphone', 'vpn-chrome-extension', 'no-logs-vpn'],
  'vpn-for-ipad': ['vpn-for-iphone', 'vpn-widgets-ios', 'auto-connect-vpn-ios', 'dns-vpn-ios'],
  'ikev2-vpn-ios': ['wireguard-vpn-ios', 'hysteria2-vpn-ios', 'smart-connect-vpn', 'vpn-for-gaming-iphone'],
  'vpn-for-wifi': ['auto-connect-vpn-ios', 'secure-vpn-iphone', 'vpn-for-streaming-iphone', 'smart-connect-vpn'],
  'smart-connect-vpn': ['network-profiles-ios', 'hysteria2-vpn-ios', 'amneziawg-vpn-ios', 'vless-reality-ios'],
  'network-profiles-ios': ['smart-connect-vpn', 'auto-connect-vpn-ios', 'dns-vpn-ios', 'vpn-for-wifi'],
  'amneziawg-vpn-ios': ['smart-connect-vpn', 'hysteria2-vpn-ios', 'wireguard-vpn-ios', 'vpn-for-travel'],
  'no-logs-vpn': ['secure-vpn-iphone', 'dns-vpn-ios', 'free-vpn-iphone', 'vpn-chrome-extension'],
  'auto-connect-vpn-ios': ['vpn-for-wifi', 'vpn-widgets-ios', 'vpn-for-travel', 'how-to-setup-vpn-iphone'],
  'dns-vpn-ios': ['secure-vpn-iphone', 'no-logs-vpn', 'auto-connect-vpn-ios', 'vpn-for-iphone'],
  'vpn-for-travel': ['smart-connect-vpn', 'hysteria2-vpn-ios', 'auto-connect-vpn-ios', 'vpn-for-wifi'],
  'best-vpn-iphone': ['vpn-for-iphone', 'how-to-setup-vpn-iphone', 'vpn-speed-test-ios', 'vpn-for-streaming-iphone'],
  'vpn-speed-test-ios': ['vpn-for-gaming-iphone', 'vpn-for-streaming-iphone', 'wireguard-vpn-ios', 'hysteria2-vpn-ios'],
  'secure-vpn-iphone': ['auto-connect-vpn-ios', 'dns-vpn-ios', 'no-logs-vpn', 'vpn-for-wifi'],
  'hysteria2-vpn-ios': ['smart-connect-vpn', 'amneziawg-vpn-ios', 'wireguard-vpn-ios', 'vpn-speed-test-ios'],
  'vpn-chrome-extension': ['vpn-vs-proxy-chrome', 'vpn-kill-switch-chrome', 'vpn-ad-blocking-chrome', 'vpn-for-iphone'],
  'vpn-widgets-ios': ['auto-connect-vpn-ios', 'how-to-setup-vpn-iphone', 'vpn-for-iphone', 'secure-vpn-iphone'],
  'how-to-setup-vpn-iphone': ['vpn-for-iphone', 'free-vpn-iphone', 'auto-connect-vpn-ios', 'vpn-widgets-ios'],
  'vpn-for-streaming-iphone': ['vpn-speed-test-ios', 'wireguard-vpn-ios', 'vpn-for-wifi', 'best-vpn-iphone'],
  'vpn-for-gaming-iphone': ['vpn-speed-test-ios', 'wireguard-vpn-ios', 'ikev2-vpn-ios', 'smart-connect-vpn'],
};

const EXTRA_RELATED_DEFAULT: LandingSlug[] = [
  'vpn-for-iphone',
  'how-to-setup-vpn-iphone',
  'vpn-chrome-extension',
  'free-vpn-iphone',
];

export function landingRelated(slug: LandingSlug): LandingSlug[] {
  if (isExtraLandingSlug(slug)) {
    if (slug.includes('chrome')) {
      return ['vpn-chrome-extension', 'vpn-vs-proxy-chrome', 'vpn-kill-switch-chrome', 'vpn-for-iphone'];
    }
    if (slug === 'vless-reality-ios' || slug === 'obfuscated-vpn-ios') {
      return ['smart-connect-vpn', 'network-profiles-ios', 'amneziawg-vpn-ios', 'hysteria2-vpn-ios'];
    }
    if (
      slug.includes('youtube') ||
      slug.includes('netflix') ||
      slug.includes('tiktok') ||
      slug.includes('spotify') ||
      slug.includes('instagram')
    ) {
      return ['vpn-for-streaming-iphone', 'vpn-speed-test-ios', 'vpn-for-wifi', 'free-vpn-iphone'];
    }
    if (slug.includes('telegram') || slug.includes('whatsapp') || slug.includes('discord')) {
      return ['smart-connect-vpn', 'vpn-speed-test-ios', 'obfuscated-vpn-ios', 'vpn-for-wifi'];
    }
    if (slug.includes('wifi') || slug.includes('hotel') || slug.includes('airport') || slug.includes('cafe') || slug.includes('captive')) {
      return ['vpn-for-wifi', 'network-profiles-ios', 'auto-connect-vpn-ios', 'smart-connect-vpn'];
    }
    if (slug.includes('beginner') || slug.startsWith('what-is') || slug.startsWith('how-vpn') || slug.startsWith('do-i-need')) {
      return ['how-to-setup-vpn-iphone', 'free-vpn-iphone', 'vpn-for-iphone', 'vpn-for-beginners'];
    }
    if (slug.includes('not-connecting') || slug.includes('slow') || slug.includes('disconnect')) {
      return ['how-to-setup-vpn-iphone', 'smart-connect-vpn', 'vpn-speed-test-ios', 'captive-portal-vpn-iphone'];
    }
    if (slug.includes('free') || slug.includes('premium') || slug.includes('family') || slug.includes('paid')) {
      return ['free-vpn-iphone', 'vpn-premium-unlimited', 'vpn-family-devices', 'vpn-for-iphone'];
    }
    if (slug.includes('dns') || slug.includes('server') || slug.includes('kill-switch') || slug.includes('split')) {
      return ['dns-vpn-ios', 'vpn-chrome-extension', 'network-profiles-ios', 'smart-connect-vpn'];
    }
    if (slug.includes('fastest') || slug.includes('hide-ip')) {
      return ['vpn-speed-test-ios', 'secure-vpn-iphone', 'no-logs-vpn', 'best-vpn-iphone'];
    }
    if (slug.includes('no-account') || slug.includes('email-login') || slug.includes('qr-login')) {
      return ['free-vpn-iphone', 'vpn-email-login', 'vpn-for-iphone', 'how-to-setup-vpn-iphone'];
    }
    return EXTRA_RELATED_DEFAULT;
  }
  return LANDING_RELATED[slug] ?? EXTRA_RELATED_DEFAULT;
}

export function landingContent(slug: LandingSlug, lang: AppLang): LandingContent {
  if (isExtraLandingSlug(slug)) return extraLandingContent(slug, lang);
  if (lang === 'en') return EN[slug];
  if (lang === 'ru') return RU[slug];
  return localizedLandingContent(slug, lang);
}

export { LANDING_SLUGS as landingSlugsList };
