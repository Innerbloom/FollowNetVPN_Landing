import type { DeepGuides } from './seo-landing.deep';

const CTA = 'Download on the App Store';

export const DEEP: DeepGuides = {
  'what-is-a-vpn': {
    h1: 'What is a VPN? A plain-English guide for iPhone users',
    lead:
      'A VPN (virtual private network) encrypts the connection between your device and a VPN server, so the Wi‑Fi you are on and your internet provider see far less of what you do. Here is how it works, what it protects, what it does not — and how FollowNet does it on iPhone.',
    sections: [
      {
        title: 'The short answer',
        body:
          'Normally every app on your iPhone talks to the internet directly through whatever network you joined — a café hotspot, a hotel router, your mobile carrier. Anyone running that network can see which servers you contact and, for unencrypted traffic, what you send. A VPN wraps all of that traffic in an encrypted tunnel to a server you choose. The local network only sees encrypted data going to one VPN server; websites see the VPN server’s IP address instead of yours.',
      },
      {
        title: 'What a VPN actually protects',
        body:
          'A VPN protects the path between your device and the VPN server. That matters most on networks you do not control: public Wi‑Fi in cafés, airports and hotels, guest networks at offices, and travel SIM cards. It hides which sites and apps you use from the network owner, stops simple snooping on shared hotspots, and makes it harder for a network to throttle or block specific services by inspecting your traffic.',
      },
      {
        title: 'What a VPN does not do',
        body:
          'A VPN is not antivirus and it does not make you anonymous. If you sign in to Google, Instagram or your bank, those services still know it is you. It will not stop phishing links, fake login pages or malware you install yourself. Cookies, accounts and payment details can still identify you. Be wary of any VPN that promises “total anonymity” or “military-grade invisibility” — those are marketing words, not features.',
      },
      {
        title: 'How a VPN works on iPhone',
        body:
          'iOS has a built-in framework for VPN apps called Network Extension. When you install a VPN from the App Store and tap Connect, iOS asks once for permission to add a VPN configuration. After that, the app creates the tunnel and iOS routes device traffic through it — Safari, messengers, mail, every app. You will see the VPN icon in the status bar while it is active. FollowNet is built on this framework rather than on a downloaded configuration profile.',
        image: 'connect',
        imageCaption: 'FollowNet connected: the timer runs and the active protocol is shown under the status.',
      },
      {
        title: 'Protocols: the “language” of the tunnel',
        body:
          'A VPN protocol defines how the encrypted tunnel is built. WireGuard is modern and fast; IKEv2 reconnects smoothly when you switch between Wi‑Fi and LTE; AmneziaWG, Hysteria2 and VLESS Reality help on networks that slow down or block ordinary VPN traffic. You do not need to learn them on day one: FollowNet’s Smart Connect picks a protocol for the network you are on and falls back to another one if it fails.',
        image: 'protocol',
        imageCaption: 'Settings → VPN Protocol: leave it on Smart or pick a protocol yourself.',
      },
      {
        title: 'Do you need one?',
        body:
          'If you regularly use public or guest Wi‑Fi, travel, work from cafés, or are on a network that filters services, a VPN is a sensible everyday tool. On a home network you control, the benefit is mostly privacy from your internet provider. A good way to decide is to try one on the networks you actually use: FollowNet Free includes weekly traffic without a credit card, so you can see whether it helps before paying.',
      },
    ],
    steps: {
      title: 'Try a VPN on iPhone in five steps',
      items: [
        'Install FollowNet from the App Store.',
        'Sign in with the code sent to your email — no password to create.',
        'Tap Connect and allow the VPN configuration when iOS asks (only the first time).',
        'Leave the protocol on Smart and check the VPN icon in the status bar.',
        'Open a few sites and apps, then run Speed Test to see your real-world speed.',
      ],
    },
    table: {
      title: 'Without a VPN vs with a VPN',
      head: ['', 'Without VPN', 'With VPN'],
      rows: [
        ['What the Wi‑Fi owner sees', 'Which servers and sites you contact', 'Encrypted traffic to one VPN server'],
        ['What websites see', 'Your real IP address', 'The VPN server’s IP address'],
        ['Protection on public Wi‑Fi', 'Depends on each site’s HTTPS', 'Whole path to the VPN server is encrypted'],
        ['Login, cookies, accounts', 'Identify you', 'Still identify you'],
        ['Phishing and malware', 'Not blocked', 'Not blocked by the VPN itself'],
      ],
    },
    bullets: [
      'A VPN encrypts the path from your device to the VPN server',
      'Most useful on public Wi‑Fi, travel networks and filtered networks',
      'Not antivirus and not anonymity — accounts still identify you',
      'On iPhone, App Store VPNs use Apple’s Network Extension framework',
      'FollowNet Free lets you test it with weekly traffic, no card required',
    ],
    cta: CTA,
    faq: [
      { q: 'Is using a VPN legal?', a: 'In most countries using a VPN is legal, but rules differ. You are responsible for following local laws and the terms of the services you use.' },
      { q: 'Does a VPN slow down my iPhone?', a: 'Encryption and the extra distance to the server add some overhead. A nearby server and a modern protocol such as WireGuard usually keep the difference small; Speed Test shows the real numbers.' },
      { q: 'Does a VPN drain the battery?', a: 'A little. Keeping a tunnel open costs some energy, mostly on weak cellular signal. Modern protocols are efficient and you will rarely notice it in daily use.' },
      { q: 'Is a free VPN safe?', a: 'It depends on the provider. Read the privacy policy and check how the free tier is funded. FollowNet Free is a real VPN with a weekly traffic limit and a published Privacy Policy.' },
    ],
  },

  'how-vpn-works': {
    h1: 'How a VPN works on iPhone: tunnel, protocols, servers and DNS',
    lead:
      'A VPN looks like a single switch, but four things work together behind it: an encrypted tunnel, the protocol that builds it, the server where your traffic exits, and the DNS resolver that turns names into addresses. This guide walks through each one using FollowNet on iPhone as the example.',
    sections: [
      {
        title: '1. The tunnel',
        body:
          'When you tap Connect, FollowNet asks iOS to start a Network Extension. The extension opens an encrypted connection to a VPN server and iOS sends device traffic into it. Every packet is encrypted on your iPhone, travels to the server, is decrypted there and continues to its destination. Replies take the same route back. To the café or hotel network, all of this looks like one encrypted stream to one address.',
      },
      {
        title: '2. The protocol',
        body:
          'The protocol decides how the tunnel is negotiated and how packets are wrapped. WireGuard is lightweight and fast on calm networks. IKEv2 is good at resuming the tunnel when you move between Wi‑Fi and LTE. AmneziaWG keeps WireGuard’s core but changes how the traffic looks; Hysteria2 runs over QUIC and copes with lossy links; VLESS Reality disguises the connection as ordinary HTTPS. Smart Connect chooses among them for you.',
        image: 'protocol',
        imageCaption: 'Protocols available in FollowNet. Smart picks one and falls back automatically.',
      },
      {
        title: '3. The server (exit point)',
        body:
          'The server is where your traffic leaves the tunnel and enters the public internet. Websites see that server’s IP address and approximate location. A closer server usually means lower latency; a different country changes which regional version of some services you see. In FollowNet the server list shows ping for each location, and “Optimal location” picks a fast one automatically.',
        image: 'servers',
        imageCaption: 'The server list with ping, Free and Premium locations, and favorites.',
      },
      {
        title: '4. DNS',
        body:
          'Before your iPhone can open a site it must translate the name (example.com) into an IP address. That lookup is DNS. While connected, FollowNet lets you choose who answers it: the default resolver, or presets such as Cloudflare, Google, Quad9 or AdGuard (which also blocks ad and tracker domains). DNS is separate from encryption — it decides who resolves names, not whether the tunnel is encrypted.',
        image: 'dns',
        imageCaption: 'Settings → DNS: choose a resolver for privacy, speed or filtering.',
      },
      {
        title: 'Putting it together: Smart Connect and profiles',
        body:
          'Smart Connect handles the protocol layer: it starts with the option most likely to work on your network and climbs a fallback ladder if a handshake fails or traffic does not pass. Network Profiles bundle protocol, DNS, Auto-connect and server mode into one tap — for example Public Wi‑Fi (WireGuard, Quad9, Wi‑Fi only, fastest server) or Travel (IKEv2, Cloudflare, always on).',
      },
      {
        title: 'Where the protection ends',
        body:
          'Encryption ends at the VPN server. From there your traffic travels like any other internet traffic, so HTTPS on the sites themselves still matters. The VPN also cannot work before you finish a hotel or airport login page — those captive portals need a direct connection first. And on a desktop computer, FollowNet’s Chrome extension is a browser proxy: it covers Chrome tabs, not every app on the computer.',
      },
    ],
    steps: {
      title: 'See each layer for yourself',
      items: [
        'Connect with Protocol set to Smart and note which protocol FollowNet reports.',
        'Open Speed Test and measure latency, download and upload on the current server.',
        'Switch to a server in another country and run Speed Test again — latency changes with distance.',
        'Change DNS to Quad9 or AdGuard in Settings and reload a few sites.',
        'Try the Public Wi‑Fi or Travel network profile to set all layers at once.',
      ],
    },
    table: {
      title: 'The four layers at a glance',
      head: ['Layer', 'What it decides', 'Where to change it in FollowNet'],
      rows: [
        ['Tunnel', 'Traffic is encrypted between iPhone and server', 'Connect button'],
        ['Protocol', 'How the tunnel is built and how it looks on the network', 'Settings → VPN Protocol'],
        ['Server', 'Where traffic exits and which IP sites see', 'Server list / Optimal location'],
        ['DNS', 'Who translates site names into addresses', 'Settings → DNS'],
      ],
    },
    bullets: [
      'Tunnel, protocol, server and DNS are separate layers',
      'Smart Connect picks the protocol and falls back automatically',
      'Server choice affects latency and the IP websites see',
      'DNS presets change the resolver, not the encryption',
      'Network Profiles set all layers in one tap',
    ],
    cta: CTA,
    faq: [
      { q: 'Can my internet provider see I use a VPN?', a: 'It can usually see that you are connected to a VPN server, but not what travels inside the tunnel. Protocols such as VLESS Reality make the connection look more like ordinary HTTPS.' },
      { q: 'Does the VPN encrypt traffic that is already HTTPS?', a: 'Yes, it wraps it in a second layer. HTTPS protects the content; the VPN additionally hides which sites you contact from the local network.' },
      { q: 'Why do some apps behave differently with a VPN?', a: 'Some services adjust content or security checks based on the server’s IP and location. Switching to a nearer server usually helps.' },
      { q: 'Is all traffic on my iPhone tunnelled?', a: 'While connected, iOS sends device traffic through the VPN. Some system services and local network traffic follow Apple’s own rules.' },
    ],
  },

  'do-i-need-a-vpn': {
    h1: 'Do I need a VPN on my iPhone? An honest checklist',
    lead:
      'You do not need a VPN for everything — but in a few common situations it is the simplest protection you can add. This checklist helps you decide based on how you actually use your phone, without fear marketing.',
    sections: [
      {
        title: 'When a VPN clearly helps',
        body:
          'Public and guest Wi‑Fi is the classic case: cafés, airports, hotels, coworking spaces and conference networks are shared with strangers and run by people you do not know. A VPN encrypts everything between your iPhone and the VPN server, so the hotspot cannot see which services you use. It also helps on travel SIMs and on networks that slow down or filter certain services.',
      },
      {
        title: 'When it helps a little',
        body:
          'At home on your own router, a VPN mainly adds privacy from your internet provider, which otherwise sees the domains you visit. If you share your home network with guests or flatmates, that is another reason. Remote workers who join different networks during the day benefit from keeping one consistent, encrypted path.',
      },
      {
        title: 'When a VPN will not solve the problem',
        body:
          'A VPN does not stop phishing emails, scam sites, weak passwords or malware. It does not make you anonymous to services you are logged in to. It will not guarantee access to every streaming catalogue, and it is not a replacement for a corporate VPN if your employer requires one. If those are your concerns, start with updates, a password manager and two-factor authentication.',
      },
      {
        title: 'A simple way to decide',
        body:
          'Think about the last week. If you joined at least one network you do not control, a VPN is worth having ready. Set it up so you do not have to remember: FollowNet’s Auto-connect can start the VPN automatically whenever you join Wi‑Fi, while leaving your mobile data alone — or always, on every network.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect: Disabled, Wi‑Fi Only, LTE Only or Always.',
      },
      {
        title: 'Free or paid?',
        body:
          'Try before you pay. FollowNet Free is a real VPN with a weekly traffic allowance, the same protocols and Smart Connect, no credit card required. Premium removes the weekly limit, opens Premium locations and covers up to five devices. If Free covers your café and travel sessions, you may never need more.',
      },
    ],
    steps: {
      title: 'Set up a “don’t think about it” VPN',
      items: [
        'Install FollowNet and sign in with an email code.',
        'Connect once and allow the iOS VPN configuration.',
        'Open Settings → Auto-connect and choose Wi‑Fi Only (or Always).',
        'Keep Protocol on Smart so difficult networks are handled for you.',
        'Check the Statistics screen after a week to see how much traffic you really use.',
      ],
    },
    table: {
      title: 'Your situation and whether a VPN helps',
      head: ['Situation', 'VPN helps?', 'Why'],
      rows: [
        ['Café, airport or hotel Wi‑Fi', 'Yes, strongly', 'Shared network run by strangers'],
        ['Travel SIM or roaming', 'Yes', 'Unknown network, sometimes filtered'],
        ['Home Wi‑Fi you control', 'Somewhat', 'Privacy from your internet provider'],
        ['Phishing or scam links', 'No', 'Needs caution and security tools, not a tunnel'],
        ['Employer requires its VPN', 'Use theirs', 'Company policy comes first'],
      ],
    },
    bullets: [
      'Most valuable on Wi‑Fi you do not control and when travelling',
      'Adds privacy from your internet provider at home',
      'Does not replace updates, passwords or caution with links',
      'Auto-connect makes protection automatic on Wi‑Fi',
      'Free weekly traffic lets you decide before paying',
    ],
    cta: CTA,
    faq: [
      { q: 'Do I need a VPN on mobile data?', a: 'Mobile networks are generally safer than open Wi‑Fi. A VPN on LTE mainly adds privacy from the carrier and helps on filtered or roaming networks.' },
      { q: 'Should I keep the VPN on all the time?', a: 'You can. Auto-connect “Always” keeps it on everywhere; “Wi‑Fi Only” is a good balance if you mostly care about hotspots.' },
      { q: 'Does iCloud Private Relay replace a VPN?', a: 'Private Relay covers Safari and some traffic only. A VPN covers all apps on the device and lets you choose the server location.' },
      { q: 'Will a VPN protect my bank app?', a: 'It encrypts the path on untrusted networks, which is useful. Banking security itself still depends on the bank’s app, HTTPS and your device security.' },
    ],
  },

  'vpn-for-beginners': {
    h1: 'VPN for beginners: set up FollowNet on iPhone in five minutes',
    lead:
      'Never used a VPN before? You do not need to understand protocols to be protected. This beginner guide covers installation, the one iOS permission you will see, what the main screen means and the three settings worth knowing.',
    sections: [
      {
        title: 'What you need',
        body:
          'An iPhone or iPad with a recent version of iOS, an email address and about five minutes. FollowNet Free does not ask for a credit card. You sign in with a one-time code sent to your email, so there is no password to invent or forget.',
      },
      {
        title: 'The iOS permission prompt',
        body:
          'The first time you tap Connect, iOS shows a message that FollowNet wants to add a VPN configuration. This is normal for every VPN on the App Store — it is how Apple lets an app create a system-wide tunnel. Tap Allow and confirm with Face ID or your passcode. You only do this once; afterwards Connect works with a single tap.',
      },
      {
        title: 'Reading the main screen',
        body:
          'When the big button turns green and the timer starts, you are connected. Under the timer FollowNet shows the protocol in use, and at the bottom the current location with its ping. The VPN icon in the iPhone status bar confirms the tunnel is up. To disconnect, tap the button again.',
        image: 'connect',
        imageCaption: 'Connected: timer, protocol and current location at a glance.',
      },
      {
        title: 'Three settings worth knowing',
        body:
          'Protocol: leave it on Smart — FollowNet picks what works on each network. Auto-connect: choose Wi‑Fi Only so the VPN starts whenever you join a hotspot. Location: use Optimal location for speed, or pick a country from the list. Everything else — DNS, Network Profiles, Shortcuts — can wait until you are curious.',
        image: 'settings',
        imageCaption: 'Settings: protocol, DNS, Auto-connect, network profiles and other devices.',
      },
      {
        title: 'If something does not work',
        body:
          'Most problems have simple causes. On hotel or airport Wi‑Fi, first complete the login page in Safari, then connect. If the connection hangs, keep Smart on or try another location. If you are on the Free plan, check that weekly traffic is left on the Statistics screen. Restarting Wi‑Fi fixes many one-off glitches.',
      },
      {
        title: 'Using it on other devices',
        body:
          'The same account works on your iPad and in the FollowNet Chrome extension on a computer. On a new device, sign in with the same email or scan a QR code from Settings → Other devices on your phone. The Chrome extension protects browser tabs only; the iPhone and iPad apps protect the whole device.',
      },
    ],
    steps: {
      title: 'Your first connection, step by step',
      items: [
        'Download FollowNet from the App Store and open it.',
        'Enter your email and type the code you receive.',
        'Tap the large Connect button.',
        'Tap Allow on the iOS prompt and confirm with Face ID or passcode.',
        'Wait for the timer to start and the VPN icon to appear in the status bar.',
        'Optional: Settings → Auto-connect → Wi‑Fi Only.',
      ],
    },
    bullets: [
      'No credit card and no password: sign in with an email code',
      'Allow the iOS VPN prompt once, then connect with one tap',
      'Keep Protocol on Smart — no technical choices needed',
      'Auto-connect Wi‑Fi Only protects you on hotspots automatically',
      'The same account works on iPad and in Chrome',
    ],
    cta: CTA,
    faq: [
      { q: 'Is it safe to allow the VPN configuration?', a: 'Yes, for an App Store VPN this is the standard Apple mechanism. You can remove it any time in iOS Settings → VPN or by deleting the app.' },
      { q: 'Do I need to change any technical settings?', a: 'No. The defaults — Smart protocol and Optimal location — work for most people. Auto-connect is the only setting most beginners benefit from changing.' },
      { q: 'How do I know the VPN is on?', a: 'The FollowNet button is green with a running timer and the VPN icon appears in the iPhone status bar.' },
      { q: 'What happens when Free traffic runs out?', a: 'New connections pause until the weekly allowance resets, or you can upgrade to Premium for unlimited traffic.' },
    ],
  },

  'free-vpn-vs-paid': {
    h1: 'Free VPN vs paid VPN: what you really get (and give up)',
    lead:
      '“Free” VPNs range from honest limited plans to apps that sell your data. Paid plans are not automatically better either. Here is what actually differs, what to check before trusting either, and how FollowNet’s Free and Premium compare.',
    sections: [
      {
        title: 'How free VPNs pay their bills',
        body:
          'Running servers costs money, so every free VPN is funded somehow. Honest models are a limited free tier that encourages upgrades, or advertising inside the app. Problematic models sell browsing data, inject ads into traffic or bundle tracking SDKs. The privacy policy and the app’s privacy label on the App Store usually tell you which kind you are looking at.',
      },
      {
        title: 'Typical limits of free plans',
        body:
          'Expect a data cap (daily, weekly or monthly), fewer server locations, slower or busier servers, ads, or a time limit per session. None of these is a problem by itself — they become a problem when they are hidden. A good free plan shows its limit clearly so you can see when you are close to it.',
      },
      {
        title: 'FollowNet Free in practice',
        body:
          'FollowNet Free is the same app with the same protocols, Smart Connect, DNS presets and Auto-connect. The difference is a weekly traffic allowance and the Free set of locations. The Statistics screen shows how much you have used and how much is left this week, and the allowance resets weekly rather than daily.',
        image: 'stats',
        imageCaption: 'Statistics: sessions, time, data used and the weekly cap.',
      },
      {
        title: 'What Premium adds',
        body:
          'Premium removes the weekly limit, unlocks Premium locations, lets you use one subscription on up to five devices and removes ads. It is bought through the App Store as a monthly or annual subscription; the annual plan includes a short free trial shown on Apple’s payment sheet. Encryption is the same on both plans — you pay for capacity and choice, not for “stronger security”.',
        image: 'premium',
        imageCaption: 'Premium: unlimited traffic, all Premium servers, Smart Connect and up to five devices.',
      },
      {
        title: 'Red flags in any VPN, free or paid',
        body:
          'Be careful with apps that have no clear company or privacy policy, promise “100% anonymity”, show fake countdown timers or claim thousands of servers in every country. Also check what happens when you cancel: subscriptions bought through the App Store can be managed and cancelled in your Apple ID settings at any time.',
      },
    ],
    table: {
      title: 'FollowNet Free vs Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Traffic', 'Weekly allowance shown in the app', 'Unlimited'],
        ['Locations', 'Free locations', 'Free + Premium locations'],
        ['Protocols and Smart Connect', 'Included', 'Included'],
        ['DNS presets, Auto-connect, Speed Test', 'Included', 'Included'],
        ['Devices', 'Your devices with the Free allowance', 'Up to 5 devices'],
        ['Ads', 'May be shown in some regions', 'No ads'],
      ],
    },
    steps: {
      title: 'How to decide in one week',
      items: [
        'Use FollowNet Free on the networks you actually join — café, office, travel.',
        'Check the Statistics screen at the end of the week.',
        'If you stayed within the allowance and the Free locations worked, stay on Free.',
        'If you hit the limit or need a specific Premium location, consider Premium.',
        'Start with the monthly plan if you are unsure; switch to annual later.',
      ],
    },
    bullets: [
      'Every free VPN is funded somehow — check how',
      'A good free plan shows its limits openly',
      'FollowNet Free: same protocols, weekly traffic allowance',
      'Premium: unlimited traffic, more locations, up to five devices',
      'Encryption does not depend on the plan',
    ],
    cta: CTA,
    faq: [
      { q: 'Is FollowNet Free really free?', a: 'Yes. No card is required. You get a weekly traffic allowance; Premium is optional.' },
      { q: 'Is a paid VPN more secure than a free one?', a: 'Not automatically. Security depends on the protocols and the provider’s practices. In FollowNet both plans use the same encryption.' },
      { q: 'Can I cancel Premium any time?', a: 'Yes. Subscriptions are managed through your Apple ID; cancel before renewal and you keep access until the end of the paid period.' },
      { q: 'Does one Premium subscription cover my iPad?', a: 'Yes, Premium covers up to five devices signed in to the same account, including the Chrome extension.' },
    ],
  },

  'vpn-vs-proxy': {
    h1: 'VPN vs proxy: what is the difference and which one do you need?',
    lead:
      'Both a VPN and a proxy send your traffic through another server, so they are often confused. The real difference is scope: a VPN covers the whole device, a proxy usually covers one app — typically the browser. Here is when each makes sense, with FollowNet’s iPhone app and Chrome extension as examples.',
    sections: [
      {
        title: 'What a proxy does',
        body:
          'A proxy is a server that forwards requests for one application. You configure it in that app — most often the browser — and only that app’s traffic goes through it. Many proxies do not encrypt anything themselves; secure ones use encrypted connections, but the coverage is still limited to the configured app.',
      },
      {
        title: 'What a VPN does',
        body:
          'A VPN creates an encrypted tunnel at the system level. On iPhone, FollowNet uses Apple’s Network Extension, so Safari, messengers, mail, games and system services all go through the tunnel while it is on. You do not configure each app separately, and apps that ignore proxy settings are covered too.',
      },
      {
        title: 'FollowNet uses both — on different devices',
        body:
          'On iPhone and iPad, FollowNet is a full VPN for the whole device. On a desktop computer, the FollowNet Chrome extension works as a browser proxy: it protects Chrome tabs with the same account, adds an optional browser Kill Switch, ad and tracker lists, and per-site routing. It does not cover Slack, Zoom or other desktop apps.',
      },
      {
        title: 'When a proxy is enough',
        body:
          'If you only need to protect web browsing on a laptop — for example in a café or a shared office — a browser proxy is light, quick to switch on and does not touch the rest of the system. Per-site routing lets you send only chosen sites through it while others stay direct.',
      },
      {
        title: 'When you want a VPN',
        body:
          'Whenever apps outside the browser matter — messengers, mail, banking apps, games, calls — you want a system VPN. On a phone this is almost always the case, which is why FollowNet on iOS is a VPN, not a proxy.',
      },
    ],
    table: {
      title: 'VPN vs proxy side by side',
      head: ['', 'VPN (FollowNet iOS)', 'Proxy (FollowNet Chrome)'],
      rows: [
        ['Coverage', 'All apps on the device', 'Browser tabs only'],
        ['Setup', 'One iOS permission, then one tap', 'Install extension, sign in'],
        ['Encryption', 'Whole tunnel to the VPN server', 'Browser traffic to the proxy'],
        ['Kill Switch', 'Auto-connect rules on iOS', 'Browser Kill Switch'],
        ['Best for', 'Phones, all-app protection', 'Laptop browsing in public places'],
      ],
    },
    steps: {
      title: 'Choosing in practice',
      items: [
        'On iPhone or iPad: install the FollowNet app — it covers every app.',
        'On a laptop where you only browse: add the FollowNet Chrome extension.',
        'Sign in to both with the same email — the account and plan are shared.',
        'Use per-site routing in Chrome if only some sites should go through the proxy.',
      ],
    },
    bullets: [
      'Proxy: one app (usually the browser); VPN: the whole device',
      'FollowNet on iPhone is a system VPN via Network Extension',
      'FollowNet for Chrome is a browser proxy with Kill Switch and routing',
      'One account and plan across both',
      'Messengers, calls and banking apps need a VPN, not a browser proxy',
    ],
    cta: CTA,
    faq: [
      { q: 'Is a proxy less secure than a VPN?', a: 'Not necessarily for the traffic it covers, but it covers less. Anything outside the configured app is unprotected.' },
      { q: 'Is there a FollowNet VPN app for Mac or Windows?', a: 'Today FollowNet focuses on iPhone/iPad and the Chrome extension for desktop browsing.' },
      { q: 'Can I use the iPhone app and Chrome extension together?', a: 'Yes, with the same account. Premium covers up to five devices.' },
      { q: 'Does the Chrome extension hide my IP from websites?', a: 'For sites opened in Chrome through the proxy, websites see the proxy server’s address.' },
    ],
  },

  'what-is-dns-leak': {
    h1: 'What is a DNS leak, and how to choose DNS with a VPN on iPhone',
    lead:
      'Every time you open a site, your device first asks a DNS server for its address. If those lookups bypass the VPN, the network can still see which sites you visit — that is a DNS leak. Here is what it means in practice and how FollowNet’s DNS presets fit in.',
    sections: [
      {
        title: 'DNS in one paragraph',
        body:
          'DNS is the internet’s phone book. Your iPhone asks a resolver “what is the address of example.com?” before connecting. The resolver therefore learns every domain you look up. Without a VPN, that resolver is usually your internet provider’s or the Wi‑Fi network’s — and the lookups often travel unencrypted.',
      },
      {
        title: 'What a DNS leak is',
        body:
          'A leak happens when the tunnel protects your traffic but name lookups still go to the local network’s resolver outside the tunnel. The content stays encrypted, yet the network sees the list of domains you visit. Leaks are usually caused by misconfigured apps, manually installed configuration profiles or OS edge cases.',
      },
      {
        title: 'How FollowNet handles DNS',
        body:
          'While FollowNet is connected, you choose the resolver in Settings → DNS. Default uses the recommended resolver for compatibility. Cloudflare is fast and privacy-oriented, Google is widely available, Quad9 blocks known malicious domains, AdGuard blocks ads, trackers and phishing domains, and AdGuard Family adds adult-content filtering.',
        image: 'dns',
        imageCaption: 'DNS presets in FollowNet: Default, Cloudflare, Google, AdGuard, AdGuard Family and Quad9.',
      },
      {
        title: 'Choosing a resolver',
        body:
          'For most people Default or Cloudflare is the right start. Pick Quad9 if you want extra protection from malicious sites, AdGuard if you want fewer ads in apps and browsers, AdGuard Family for children’s devices. If a bank site or company intranet stops working after a change, switch back to Default — filtering resolvers occasionally block legitimate domains.',
      },
      {
        title: 'DNS is not encryption',
        body:
          'Changing DNS changes who answers lookups; it does not encrypt your traffic. The VPN tunnel does that. Combining the two gives you both: encrypted traffic and a resolver you chose. Network Profiles set both at once — Public Wi‑Fi uses Quad9, Travel uses Cloudflare.',
      },
      {
        title: 'Testing for leaks',
        body:
          'Connect FollowNet, open a DNS leak test site in Safari and run the extended test. The resolvers it reports should belong to your chosen preset or the VPN provider, not your home internet provider or the hotel. Repeat after changing networks. Keep iOS updated and avoid installing random VPN configuration profiles from the web.',
      },
    ],
    steps: {
      title: 'Set DNS in FollowNet',
      items: [
        'Connect FollowNet.',
        'Open Settings → DNS.',
        'Choose a preset — for example Cloudflare or Quad9.',
        'Reload a few sites and run a DNS leak test in Safari.',
        'If something breaks, return to Default.',
      ],
    },
    table: {
      title: 'Which DNS preset for which goal',
      head: ['Preset', 'Best for', 'Note'],
      rows: [
        ['Default', 'Maximum compatibility', 'Recommended starting point'],
        ['Cloudflare', 'Speed and privacy', 'Used by the Travel profile'],
        ['Google', 'Reliability', 'Widely available'],
        ['Quad9', 'Blocking malicious domains', 'Used by Public Wi‑Fi and Restricted profiles'],
        ['AdGuard', 'Fewer ads and trackers', 'May block some legitimate domains'],
        ['AdGuard Family', 'Children’s devices', 'Adds adult-content filtering'],
      ],
    },
    bullets: [
      'A DNS leak reveals visited domains even when traffic is encrypted',
      'FollowNet lets you pick the resolver while connected',
      'Quad9 and AdGuard add security or ad filtering',
      'DNS choice does not replace the VPN’s encryption',
      'Test with a DNS leak site after changing settings',
    ],
    cta: CTA,
    faq: [
      { q: 'Which DNS is the most private?', a: 'Privacy depends on the provider’s policy. Cloudflare and Quad9 publish privacy commitments; read them and choose what you trust.' },
      { q: 'Can AdGuard DNS replace an ad blocker?', a: 'It blocks many ad and tracker domains across all apps, but cannot remove ads served from the same domain as the content.' },
      { q: 'Why did a site stop working after changing DNS?', a: 'Filtering resolvers sometimes block a domain the site needs. Switch back to Default and the site should load.' },
      { q: 'Do I need to change DNS at all?', a: 'No. Default works well. DNS presets are an optional extra for filtering or preference.' },
    ],
  },

  'vpn-hotel-wifi': {
    h1: 'Using a VPN on hotel Wi‑Fi with your iPhone',
    lead:
      'Hotel Wi‑Fi is shared, often old, and usually sits behind a login page. That makes it one of the best places to use a VPN — and one of the most frustrating if you connect in the wrong order. Here is the routine that works.',
    sections: [
      {
        title: 'Why hotel networks deserve a VPN',
        body:
          'Every guest shares the same network, equipment is rarely updated, and you have no idea who manages it. Some hotels also log traffic or inject pages. A VPN encrypts everything between your iPhone and the VPN server, so neither other guests nor the network operator can see which services you use.',
      },
      {
        title: 'Login page first, VPN second',
        body:
          'Most hotels use a captive portal — the page where you enter your room number or accept terms. It needs a direct connection. If the VPN is already running, the page may not load and the tunnel cannot reach the internet. Join the Wi‑Fi, finish the portal in Safari, check that a normal site opens, then connect FollowNet.',
      },
      {
        title: 'Pick the right settings',
        body:
          'On calm hotel networks the Public Wi‑Fi profile is ideal: WireGuard for speed, Quad9 DNS and Auto-connect on Wi‑Fi. Some hotels throttle or block VPN traffic; then switch to the Restricted profile, which keeps Smart Connect on and lets it fall back to AmneziaWG, Hysteria2 or VLESS Reality.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect on Wi‑Fi Only starts the VPN on every hotspot automatically.',
      },
      {
        title: 'Check the speed honestly',
        body:
          'Hotel uplinks are often slow in the evening when everyone streams. Run Speed Test without and with the VPN on the same network. If the difference is large, pick a closer server or let Optimal location choose. The VPN cannot add bandwidth the hotel does not have.',
        image: 'speedtest',
        imageCaption: 'Speed Test shows download, upload, latency, jitter and packet loss.',
      },
      {
        title: 'Save what works',
        body:
          'Hotel chains often use the same network setup in every property. When you find a combination that works — protocol, DNS and server — save it as a custom Network Profile and name it after the chain. Next time, apply it with one tap.',
      },
      {
        title: 'When the connection keeps dropping',
        body:
          'Some portals log you out every few hours or every day. When the VPN suddenly stops passing traffic, disconnect, open Safari to see whether the login page is back, sign in again and reconnect. That is the hotel’s policy, not a VPN fault.',
      },
    ],
    steps: {
      title: 'Hotel Wi‑Fi routine',
      items: [
        'Join the hotel Wi‑Fi and complete the login page in Safari.',
        'Open any normal site to confirm the internet works.',
        'Connect FollowNet with the Public Wi‑Fi or Smart profile.',
        'If it will not connect or pages hang, switch to the Restricted profile.',
        'Run Speed Test, and pick a closer server if needed.',
        'Save the working setup as a custom profile for this hotel chain.',
      ],
    },
    bullets: [
      'Shared hotel networks are a prime case for a VPN',
      'Always finish the login page before connecting',
      'Public Wi‑Fi profile for calm networks, Restricted for difficult ones',
      'Speed Test reveals whether the hotel or the server is the bottleneck',
      'Save a working profile per hotel chain',
    ],
    cta: CTA,
    faq: [
      { q: 'Why does the hotel login page not open with the VPN on?', a: 'The portal needs a direct connection. Disconnect, finish the login, then reconnect.' },
      { q: 'Is hotel Wi‑Fi with a password safe?', a: 'A shared password protects you from outsiders, not from other guests or the operator. A VPN adds that missing layer.' },
      { q: 'Will a VPN fix slow hotel Wi‑Fi?', a: 'No. It can sometimes help if the hotel throttles specific services, but it cannot add bandwidth.' },
      { q: 'Is Free enough for a hotel stay?', a: 'For browsing, messaging and email, usually yes. Evening streaming can use the weekly allowance quickly; Premium is unlimited.' },
    ],
  },

  'vpn-airport-wifi': {
    h1: 'Airport Wi‑Fi and VPN: staying private while you travel',
    lead:
      'Airport Wi‑Fi is free, crowded and full of look-alike networks. A VPN keeps your traffic encrypted while you wait for your flight. Here is how to connect safely, what to expect from speed and how to make the most of a limited Free allowance.',
    sections: [
      {
        title: 'Risks specific to airports',
        body:
          'Thousands of people share the same hotspots, and it is easy to create a fake network with an official-sounding name. Before connecting, check the official network name on airport signs. Once connected, a VPN encrypts your traffic so neither the network nor other passengers can see what you do.',
      },
      {
        title: 'Connect in the right order',
        body:
          'Airport networks almost always have a login page. Join the network, complete the page (sometimes it asks for an email or shows an advert), check that a normal site loads, and only then tap Connect in FollowNet. With Auto-connect set to Wi‑Fi Only, the VPN will start by itself once the portal is done.',
      },
      {
        title: 'Expect congestion',
        body:
          'At peak times airport Wi‑Fi can be very slow. Choose a nearby server or Optimal location, and run Speed Test before a large download. If the Wi‑Fi is unusable, switch to mobile data — FollowNet works on LTE too, and Auto-connect Always keeps it on across both.',
        image: 'servers',
        imageCaption: 'Pick a nearby location or let Optimal location choose for you.',
      },
      {
        title: 'Making a Free allowance last',
        body:
          'Video streaming uses the weekly allowance fastest. Download films and music at home before you travel, keep the VPN for messaging, email, banking and browsing at the gate, and skip unnecessary speed tests. Check the remaining traffic on the Statistics screen; Premium removes the limit if you travel often.',
        image: 'stats',
        imageCaption: 'Statistics shows how much of the weekly allowance is left.',
      },
      {
        title: 'Roaming and arrival',
        body:
          'After landing, you may be on a foreign SIM or roaming. Keep Smart Connect on: some networks abroad handle VPN traffic differently, and Smart Connect falls back to a protocol that works. The Travel profile uses IKEv2, which copes well with switching between airport Wi‑Fi and cellular.',
      },
    ],
    steps: {
      title: 'Before and at the airport',
      items: [
        'At home: install FollowNet, sign in and download offline content.',
        'Set Auto-connect to Wi‑Fi Only or apply the Travel profile.',
        'At the airport: confirm the official Wi‑Fi name on signs.',
        'Join it and complete the login page.',
        'Let FollowNet connect, then browse, message and work as usual.',
      ],
    },
    bullets: [
      'Verify the official network name — fake hotspots exist',
      'Finish the login page, then connect the VPN',
      'Choose a nearby server; airports are congested',
      'Download videos before you go to save Free traffic',
      'Travel profile and Smart Connect help on foreign networks',
    ],
    cta: CTA,
    faq: [
      { q: 'Is airport Wi‑Fi dangerous?', a: 'It is shared with many strangers and easy to imitate. Using the official network plus a VPN removes most of the risk for everyday use.' },
      { q: 'Should I use airport Wi‑Fi or mobile data?', a: 'Mobile data is usually safer and sometimes faster. If you use Wi‑Fi, keep the VPN on.' },
      { q: 'Why is the VPN slow at the airport?', a: 'The Wi‑Fi itself is usually congested. A nearby server helps; the VPN cannot add bandwidth.' },
      { q: 'Does FollowNet work abroad?', a: 'Yes, subject to local laws. Smart Connect adapts to different network conditions.' },
    ],
  },

  'vpn-for-remote-work': {
    h1: 'VPN for remote work: protecting your iPhone in cafés, coworkings and on the road',
    lead:
      'Working remotely means email, documents and calls over networks you do not control. A personal VPN keeps that traffic encrypted. Here is a practical setup for remote workers — and where your employer’s rules take priority.',
    sections: [
      {
        title: 'Why remote work needs encryption',
        body:
          'Your day may start on home Wi‑Fi, continue in a café and end in a coworking space or on a train. Each network is run by someone else. A VPN encrypts the path for mail, chat, cloud documents and video calls, so the network operator cannot see which services you use or tamper with unencrypted traffic.',
      },
      {
        title: 'Personal VPN vs corporate VPN',
        body:
          'If your company provides its own VPN for accessing internal systems, use it — company policy wins and FollowNet is not a replacement. FollowNet is a personal VPN: it protects your device on public networks and is ideal for freelancers, contractors and anyone without a corporate VPN.',
      },
      {
        title: 'Recommended setup',
        body:
          'Set Auto-connect to Wi‑Fi Only so the VPN starts on every hotspot. Keep Protocol on Smart for reliability across different networks. For important calls, pick a server close to you or to the people you are calling — latency matters more than raw download speed for video.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect on Wi‑Fi Only protects you in every café automatically.',
      },
      {
        title: 'Check call quality before it matters',
        body:
          'Run Speed Test ten minutes before a meeting. Look at latency and jitter, not just download: high jitter causes choppy audio even on a fast connection. If it looks bad, try another nearby server or switch to mobile data for the call.',
        image: 'speedtest',
        imageCaption: 'Jitter and packet loss matter most for video calls.',
      },
      {
        title: 'Phone and laptop with one account',
        body:
          'Use FollowNet on your iPhone for all apps, and the FollowNet Chrome extension on your laptop for browser-based work — webmail, Google Docs, Notion, CRMs. One Premium subscription covers up to five devices. Remember that the Chrome extension protects Chrome tabs only, not desktop apps like Slack or Zoom.',
      },
      {
        title: 'When Free is not enough',
        body:
          'Daily video calls and large file uploads use a lot of traffic. If you work remotely every day, Premium’s unlimited traffic is the practical choice; Free works well for occasional café sessions.',
      },
    ],
    steps: {
      title: 'Remote work checklist',
      items: [
        'Install FollowNet on your iPhone and sign in.',
        'Set Auto-connect → Wi‑Fi Only.',
        'Add the FollowNet Chrome extension on your laptop with the same email.',
        'Before calls, run Speed Test and pick a nearby server if jitter is high.',
        'Follow your employer’s VPN policy for internal systems.',
      ],
    },
    bullets: [
      'Encrypts mail, chat, documents and calls on public networks',
      'Use your company’s VPN when policy requires it',
      'Auto-connect Wi‑Fi Only removes the need to remember',
      'Watch latency and jitter before important calls',
      'One account for iPhone and Chrome; Premium covers five devices',
    ],
    cta: CTA,
    faq: [
      { q: 'Can I use FollowNet together with my company VPN?', a: 'iOS runs one VPN at a time. Use the company VPN when you need internal systems and FollowNet otherwise.' },
      { q: 'Does a VPN make video calls worse?', a: 'It adds a little latency. A nearby server keeps it minimal; Speed Test shows the real effect.' },
      { q: 'Does FollowNet protect Slack or Zoom on my laptop?', a: 'The Chrome extension covers browser tabs only. On iPhone, the app covers every app including Slack and Zoom.' },
      { q: 'Is my work data visible to FollowNet?', a: 'Traffic inside HTTPS remains encrypted end to end. What FollowNet processes is described in the Privacy Policy.' },
    ],
  },

  'wireguard-vs-ikev2': {
    h1: 'WireGuard vs IKEv2 on iPhone: which VPN protocol should you use?',
    lead:
      'WireGuard and IKEv2 are the two most common VPN protocols on iOS, and FollowNet supports both. They are equally secure in practice; the difference is in speed, behaviour when you move between networks and how easily networks recognise them.',
    sections: [
      {
        title: 'WireGuard in short',
        body:
          'WireGuard is a modern protocol with a small, auditable codebase and current cryptography. It connects quickly, has low overhead and is usually the fastest option on stable home and office networks. Because its traffic has a recognisable pattern, some networks throttle or block it.',
      },
      {
        title: 'IKEv2 in short',
        body:
          'IKEv2 is an established standard with native support in iOS. Its strength is mobility: when you walk from Wi‑Fi to LTE or ride through areas with patchy coverage, it resumes the tunnel smoothly. It is slightly heavier than WireGuard and can also be blocked by restrictive networks.',
      },
      {
        title: 'Speed',
        body:
          'On a calm network WireGuard is typically a little faster and has lower latency. The difference is often small next to the effect of server distance. Measure it yourself: connect to the same server with each protocol and run Speed Test twice.',
        image: 'speedtest',
        imageCaption: 'Compare protocols on the same server with Speed Test.',
      },
      {
        title: 'Switching networks',
        body:
          'If you commute, travel or move around a lot, IKEv2’s reconnection behaviour is noticeable — fewer stalls when the phone hands over between networks. That is why FollowNet’s Travel profile uses IKEv2 by default.',
      },
      {
        title: 'When neither works',
        body:
          'Some networks interfere with both. Then use Smart Connect: it falls back to AmneziaWG (a WireGuard variant with altered traffic patterns), Hysteria2 (over QUIC, good on lossy links) or VLESS Reality (looks like ordinary HTTPS). The Restricted profile keeps that ladder on by default.',
        image: 'protocol',
        imageCaption: 'Choose WireGuard or IKEv2 manually, or leave Smart on.',
      },
    ],
    table: {
      title: 'WireGuard vs IKEv2',
      head: ['', 'WireGuard', 'IKEv2'],
      rows: [
        ['Speed on stable networks', 'Usually the fastest', 'Fast, slightly more overhead'],
        ['Switching Wi‑Fi ↔ LTE', 'Good', 'Excellent, resumes smoothly'],
        ['Connection time', 'Very quick', 'Quick'],
        ['Blocked on restrictive networks', 'Sometimes', 'Sometimes'],
        ['FollowNet profile', 'Public Wi‑Fi', 'Travel'],
      ],
    },
    steps: {
      title: 'Pick yours in two minutes',
      items: [
        'Connect to a nearby server with WireGuard and run Speed Test.',
        'Switch to IKEv2 on the same server and run Speed Test again.',
        'If you mostly sit still, keep the faster one.',
        'If you move a lot, prefer IKEv2 or the Travel profile.',
        'If neither connects, return to Smart and let it fall back.',
      ],
    },
    bullets: [
      'Both are secure; the difference is speed and mobility',
      'WireGuard: fastest on stable networks',
      'IKEv2: best when switching between Wi‑Fi and LTE',
      'Smart Connect falls back to AmneziaWG, Hysteria2 or VLESS Reality',
      'Measure on your own network with Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: 'Which is more secure?', a: 'Both use strong modern cryptography when implemented correctly. Choose based on speed and mobility, not security.' },
      { q: 'Which uses less battery?', a: 'WireGuard is generally a little lighter, but the difference is small in daily use.' },
      { q: 'Can I let FollowNet choose?', a: 'Yes. Smart Connect picks the protocol for each network and switches if one fails.' },
      { q: 'Are both available on Free?', a: 'Protocol availability follows your plan in the app; the core protocols are available on Free within the weekly allowance.' },
    ],
  },

  'what-is-kill-switch-vpn': {
    h1: 'What is a VPN kill switch, and how does it work on iPhone and Chrome?',
    lead:
      'A kill switch is a safety net: if the VPN connection drops, it stops traffic from flowing unprotected. How it works depends on the platform. Here is what it means on iPhone, in FollowNet’s Chrome extension, and how to set things up so a drop does not expose you.',
    sections: [
      {
        title: 'The problem a kill switch solves',
        body:
          'VPN connections can drop — a weak signal, a network change, a server restart. For a few seconds apps may then send traffic outside the tunnel over the local network. On a hotspot you do not trust, that is exactly what you wanted to avoid. A kill switch blocks traffic until the tunnel is back.',
      },
      {
        title: 'On desktop: the Chrome Kill Switch',
        body:
          'FollowNet’s Chrome extension includes a browser Kill Switch. When enabled, Chrome stops loading pages if the proxy connection fails, instead of silently falling back to a direct connection. It is scoped to Chrome: other browsers and desktop apps are not affected.',
      },
      {
        title: 'On iPhone: how iOS handles it',
        body:
          'iOS manages VPN tunnels at the system level through Network Extension. FollowNet relies on that system behaviour plus Auto-connect rules to bring the tunnel back quickly: with Auto-connect set to Always, the VPN restarts automatically on every network. We do not promise a magic toggle that guarantees zero packets on every iOS edge case — no honest iOS VPN can.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect Always restarts the VPN on any network.',
      },
      {
        title: 'Settings that reduce leaks on iPhone',
        body:
          'Use Auto-connect Always on untrusted networks. Keep Protocol on Smart, so a failing protocol is replaced instead of leaving you disconnected. On difficult networks apply the Restricted profile, which combines Smart Connect with Always and the fastest server. Add a Home Screen widget to see at a glance whether you are protected.',
      },
      {
        title: 'What a kill switch cannot do',
        body:
          'It cannot prevent leaks you cause yourself — signing in to accounts, sharing location or installing tracking apps. It also cannot keep you online on a broken network; it only keeps traffic from going out unprotected while the VPN reconnects.',
      },
    ],
    table: {
      title: 'Kill switch behaviour by platform',
      head: ['', 'FollowNet iOS', 'FollowNet Chrome'],
      rows: [
        ['Scope', 'Whole device while connected', 'Chrome tabs'],
        ['Mechanism', 'iOS Network Extension + Auto-connect', 'Browser Kill Switch setting'],
        ['If the connection drops', 'Auto-connect re-establishes the tunnel', 'Chrome stops loading pages'],
        ['Recommended setting', 'Auto-connect Always or Restricted profile', 'Kill Switch on'],
      ],
    },
    steps: {
      title: 'Turn on the protections',
      items: [
        'iPhone: Settings → Auto-connect → Always.',
        'iPhone: keep Protocol on Smart, or apply the Restricted profile.',
        'Chrome: open the FollowNet extension settings and enable Kill Switch.',
        'Add the FollowNet widget to your Home Screen to watch status.',
      ],
    },
    bullets: [
      'A kill switch blocks traffic when the VPN drops',
      'Chrome extension: explicit browser Kill Switch',
      'iPhone: iOS Network Extension plus Auto-connect Always',
      'Smart Connect replaces a failing protocol automatically',
      'No kill switch protects against your own logins and apps',
    ],
    cta: CTA,
    faq: [
      { q: 'Does FollowNet have a kill switch on iPhone?', a: 'FollowNet uses iOS’s system VPN handling with Auto-connect to restore the tunnel; the explicit Kill Switch toggle is in the Chrome extension.' },
      { q: 'Will a kill switch block my internet entirely?', a: 'Only while the VPN is reconnecting. If the network itself is down, you will be offline either way.' },
      { q: 'Should I always use a kill switch?', a: 'On untrusted networks, yes. At home it is optional.' },
      { q: 'Does the Chrome Kill Switch affect other browsers?', a: 'No, it only applies to Chrome with the FollowNet extension.' },
    ],
  },

  'vpn-not-connecting-iphone': {
    h1: 'VPN not connecting on iPhone? A step-by-step fix',
    lead:
      'When a VPN refuses to connect, the cause is almost always one of five things: the iOS permission, a Wi‑Fi login page, the traffic limit, a network that blocks the protocol, or a temporary glitch. Work through this list in order — most problems are solved in the first three steps.',
    sections: [
      {
        title: '1. Check the iOS VPN permission',
        body:
          'If you tapped “Don’t Allow” on the iOS prompt, or the VPN configuration was removed, FollowNet cannot start the tunnel. Open FollowNet and tap Connect again — iOS will ask once more. You can also check iOS Settings → VPN to see whether the FollowNet configuration is present.',
      },
      {
        title: '2. Finish any Wi‑Fi login page',
        body:
          'Hotels, airports, trains and some cafés require you to sign in on a captive portal before the internet works. Disconnect the VPN, open Safari, complete the page, confirm a normal site loads, then connect again.',
      },
      {
        title: '3. Check your traffic allowance',
        body:
          'On the Free plan, new connections pause when the weekly allowance is used up. Open the Statistics screen to see what is left. Wait for the weekly reset or upgrade to Premium for unlimited traffic.',
        image: 'stats',
        imageCaption: 'Statistics shows the weekly cap and how much is used.',
      },
      {
        title: '4. Let Smart Connect handle the network',
        body:
          'Some networks block or slow specific protocols. Set Protocol to Smart so FollowNet can fall back automatically. If it still fails, apply the Restricted profile, or manually try AmneziaWG, Hysteria2 or VLESS Reality. Also try another server — one location may be busy or temporarily unavailable.',
        image: 'protocol',
        imageCaption: 'Settings → VPN Protocol: Smart is the most resilient choice.',
      },
      {
        title: '5. Rule out a glitch',
        body:
          'Toggle Airplane mode on and off, forget and rejoin the Wi‑Fi network, or switch to mobile data to see whether the problem is the network. Make sure FollowNet and iOS are up to date. As a last resort, remove the VPN configuration in iOS Settings → VPN and connect again in FollowNet to recreate it.',
      },
      {
        title: 'Connected but nothing loads',
        body:
          'If FollowNet shows Connected but pages do not open, the network is probably interfering with the protocol. Switch protocol or server, and run Speed Test to confirm traffic passes. FollowNet checks real traffic before treating a session as healthy, but networks can change mid-session.',
      },
    ],
    steps: {
      title: 'Quick fix checklist',
      items: [
        'Tap Connect and allow the VPN configuration if iOS asks.',
        'Disconnect, finish the Wi‑Fi login page in Safari, reconnect.',
        'Check remaining weekly traffic on the Statistics screen (Free plan).',
        'Set Protocol to Smart, or apply the Restricted profile.',
        'Choose a different server.',
        'Toggle Airplane mode or switch to mobile data to test the network.',
        'Update FollowNet and iOS; recreate the VPN configuration if needed.',
      ],
    },
    table: {
      title: 'Symptom and likely cause',
      head: ['Symptom', 'Likely cause', 'Fix'],
      rows: [
        ['Connect does nothing', 'VPN permission missing', 'Allow the iOS prompt'],
        ['Works on LTE, not on Wi‑Fi', 'Captive portal or blocked protocol', 'Finish login; use Smart or Restricted'],
        ['Stopped working mid-week', 'Free allowance used', 'Wait for reset or upgrade'],
        ['Connected but no pages', 'Protocol interfered with', 'Switch protocol or server'],
        ['Fails everywhere', 'Temporary glitch', 'Airplane mode, update, recreate configuration'],
      ],
    },
    bullets: [
      'Most failures: permission, login page or traffic limit',
      'Smart Connect and the Restricted profile handle difficult networks',
      'Try another server before assuming the app is broken',
      'Test on mobile data to tell network problems from app problems',
      'Recreating the VPN configuration fixes rare iOS glitches',
    ],
    cta: CTA,
    faq: [
      { q: 'Why does the VPN work on LTE but not on Wi‑Fi?', a: 'The Wi‑Fi network probably needs a login page or blocks the protocol. Finish the login and use Smart Connect.' },
      { q: 'I accidentally tapped “Don’t Allow”. What now?', a: 'Tap Connect in FollowNet again; iOS will show the prompt again.' },
      { q: 'Does reinstalling the app help?', a: 'Rarely necessary. Recreating the VPN configuration from iOS Settings → VPN usually does the same job.' },
      { q: 'Who can I contact if nothing helps?', a: 'Write to support@follow-net.com with your network type, protocol and the time it happened.' },
    ],
  },

  'vpn-slow-iphone': {
    h1: 'VPN slow on iPhone? How to find the cause and speed it up',
    lead:
      'Some slowdown with a VPN is normal; a lot of it is not. The trick is to measure before changing anything. This guide shows how to find out whether the network, the server or the protocol is the bottleneck — and what to do in each case.',
    sections: [
      {
        title: 'Measure first',
        body:
          'Disconnect the VPN and run a speed test to get your baseline. Then connect FollowNet and run its built-in Speed Test on the same network. Compare download, upload, latency and jitter. If the baseline is already slow, the network is the problem, not the VPN.',
        image: 'speedtest',
        imageCaption: 'FollowNet Speed Test: download, upload, latency, jitter and loss.',
      },
      {
        title: 'Server distance matters most',
        body:
          'Every extra thousand kilometres adds latency. A server on another continent can turn a fast connection into a sluggish one. Use Optimal location, or pick the nearest server with the lowest ping in the list. Only choose distant servers when you need that specific region.',
        image: 'servers',
        imageCaption: 'Ping next to each location helps you choose a close, fast server.',
      },
      {
        title: 'Try a different protocol',
        body:
          'On stable networks WireGuard is usually fastest. If the network throttles VPN traffic, WireGuard may crawl while AmneziaWG, Hysteria2 or VLESS Reality perform better. Smart Connect does this automatically; to compare manually, switch protocol in Settings and test again on the same server.',
      },
      {
        title: 'Busy times and busy networks',
        body:
          'Evening hours in hotels, trains and airports mean shared bandwidth. Weak cellular signal also limits speed regardless of VPN. If a test shows high packet loss, the radio link is the issue — move closer to the router or a window, or switch between Wi‑Fi and LTE.',
      },
      {
        title: 'Calls and games: watch jitter',
        body:
          'For video calls and online games, latency and jitter matter more than download speed. A 200 Mbps connection with high jitter will still stutter. Choose the closest server and prefer WireGuard on stable networks.',
      },
      {
        title: 'When turning the VPN off is the answer',
        body:
          'On a weak LTE signal or a trusted home network, sometimes the fastest option is no VPN. That is physics: encryption and the detour through a server always cost something. Auto-connect Wi‑Fi Only gives you protection on hotspots without affecting mobile data.',
      },
    ],
    steps: {
      title: 'Speed troubleshooting in order',
      items: [
        'Run a speed test without the VPN for a baseline.',
        'Connect and run FollowNet Speed Test on the same network.',
        'Switch to Optimal location or the nearest low-ping server.',
        'Compare WireGuard with Smart Connect on the same server.',
        'If loss is high, improve the signal or switch between Wi‑Fi and LTE.',
        'Test again at a quieter time if the network is congested.',
      ],
    },
    table: {
      title: 'What the numbers tell you',
      head: ['Result', 'Meaning', 'Action'],
      rows: [
        ['Baseline already slow', 'Network is the bottleneck', 'Change network or wait'],
        ['High latency only with VPN', 'Server too far away', 'Pick a closer server'],
        ['Download drops sharply with VPN', 'Protocol throttled', 'Try Smart or another protocol'],
        ['High jitter or loss', 'Unstable radio link', 'Improve signal, switch Wi‑Fi/LTE'],
      ],
    },
    bullets: [
      'Always compare against a baseline without the VPN',
      'Server distance is the biggest factor',
      'Throttled networks favour AmneziaWG, Hysteria2 or VLESS Reality',
      'Jitter matters more than Mbps for calls and games',
      'Some overhead is normal and unavoidable',
    ],
    cta: CTA,
    faq: [
      { q: 'How much slower should a VPN be?', a: 'With a nearby server, often only a little. Distant servers and congested networks increase the difference.' },
      { q: 'Is Premium faster than Free?', a: 'Encryption is the same. Premium gives access to more locations, which can mean a closer or less busy server.' },
      { q: 'Does Speed Test use my traffic?', a: 'Yes, it downloads and uploads data. On Free, avoid running it repeatedly.' },
      { q: 'Why is the VPN fast at home but slow in the café?', a: 'The café network is slower or throttles VPN traffic. Try Smart Connect and a nearby server.' },
    ],
  },

  'captive-portal-vpn-iphone': {
    h1: 'Captive portals and VPN on iPhone: hotel, airport and train Wi‑Fi',
    lead:
      'A captive portal is the login page some Wi‑Fi networks show before letting you online. It is the most common reason a VPN “does not work” on public Wi‑Fi. Here is why, and the simple order of steps that avoids the problem.',
    sections: [
      {
        title: 'What a captive portal is',
        body:
          'Hotels, airports, trains, cafés and conference venues often intercept your first web request and show a page: enter a room number, accept terms, watch an advert or type an email. Until you complete it, the network blocks normal internet access. iOS usually detects this and opens a small login sheet automatically.',
      },
      {
        title: 'Why it conflicts with a VPN',
        body:
          'A VPN wants to send everything through an encrypted tunnel to its server. But before you complete the portal, the network blocks that connection. The result looks like a VPN that will not connect, or connects but loads nothing. Nothing is broken — the network simply has not let you in yet.',
      },
      {
        title: 'The right order',
        body:
          'Join the network with the VPN off, complete the portal in the iOS sheet or in Safari, confirm a regular website loads, and then connect FollowNet. If you use Auto-connect on Wi‑Fi, it will start the VPN once the network is usable.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect starts the VPN on Wi‑Fi once the network is usable.',
      },
      {
        title: 'When the portal does not appear',
        body:
          'Sometimes iOS does not open the login sheet. Open Safari and go to a plain http address (for example neverssl.com) — the network will redirect you to the portal. If you already had the VPN running, disconnect it first.',
      },
      {
        title: 'Portals that log you out',
        body:
          'Many networks require you to sign in again after a few hours or every day. If the VPN suddenly stops passing traffic in a hotel, check whether the portal is back. Sign in again and reconnect. This is the network’s policy, not a VPN outage.',
      },
      {
        title: 'Saving time on networks you revisit',
        body:
          'For a hotel or train operator you use often, save a custom Network Profile with the protocol, DNS and server that work there. After the portal, apply it with one tap.',
      },
    ],
    steps: {
      title: 'Captive portal routine',
      items: [
        'Make sure FollowNet is disconnected.',
        'Join the Wi‑Fi network.',
        'Complete the login page (iOS sheet or Safari).',
        'Open any normal website to confirm access.',
        'Connect FollowNet or let Auto-connect do it.',
        'If traffic stops later, check whether the portal needs a new login.',
      ],
    },
    bullets: [
      'Portals must be completed before the VPN can connect',
      'Connect the VPN only after a normal site loads',
      'Use neverssl.com to trigger a hidden portal',
      'Some networks require logging in again every day',
      'Save a profile for networks you use often',
    ],
    cta: CTA,
    faq: [
      { q: 'Why does the login page not show up?', a: 'The VPN or a cached connection may be blocking it. Disconnect the VPN and open a plain http site in Safari.' },
      { q: 'Is the portal page itself safe?', a: 'It travels before the VPN is up, so avoid entering anything sensitive besides what the network asks for.' },
      { q: 'Can FollowNet connect automatically after the portal?', a: 'Yes, with Auto-connect on Wi‑Fi Only or Always it starts once the network allows traffic.' },
      { q: 'The VPN worked yesterday in this hotel, why not today?', a: 'The portal probably expired. Sign in again, then reconnect.' },
    ],
  },

  'vless-reality-ios': {
    h1: 'VLESS Reality on iPhone: what it is and when FollowNet uses it',
    lead:
      'VLESS Reality is a newer VPN transport designed to look like ordinary encrypted web traffic. FollowNet includes it alongside WireGuard, IKEv2, AmneziaWG and Hysteria2. This guide explains what it does differently, when it helps and why it is not always the fastest choice.',
    sections: [
      {
        title: 'What VLESS Reality is',
        body:
          'VLESS is a lightweight transport protocol; Reality is a technique that makes the connection resemble a normal TLS (HTTPS) session to a real website. For a network that inspects traffic patterns, the connection looks much like ordinary browsing rather than a typical VPN tunnel.',
      },
      {
        title: 'Why it exists',
        body:
          'Some networks recognise and slow down classic VPN protocols such as WireGuard or IKEv2 — sometimes even modified ones. In those conditions a tunnel may show “Connected” yet pass little or no traffic. A transport that blends in with regular web traffic gives you another path when the usual ones stall.',
      },
      {
        title: 'How FollowNet uses it',
        body:
          'With Protocol on Smart, FollowNet uses network context and fallbacks to decide when VLESS Reality is worth trying. You can also select it manually in Settings → VPN Protocol, or apply the Restricted profile, which keeps Smart Connect’s full fallback ladder. FollowNet verifies that real traffic passes before treating a session as healthy.',
        image: 'protocol',
        imageCaption: 'Settings → VPN Protocol: Smart can use VLESS Reality when needed.',
      },
      {
        title: 'When not to use it',
        body:
          'On a calm home network VLESS Reality is rarely the fastest option — WireGuard usually wins on raw speed and latency. Use VLESS Reality when other protocols fail or perform poorly, not as a default everywhere. Its availability also depends on the servers that support it for your plan.',
      },
      {
        title: 'Check it actually helps',
        body:
          'After switching, load a few real pages and run Speed Test rather than trusting the status colour alone. Compare with Smart and WireGuard on the same server. If VLESS Reality is clearly better on a particular network, save it in a custom Network Profile for that place.',
        image: 'speedtest',
        imageCaption: 'Confirm with Speed Test that traffic really passes.',
      },
    ],
    table: {
      title: 'Where VLESS Reality fits',
      head: ['Protocol', 'Strength', 'Best used'],
      rows: [
        ['WireGuard', 'Speed, low latency', 'Stable home and office networks'],
        ['IKEv2', 'Smooth reconnects', 'Switching Wi‑Fi and LTE'],
        ['AmneziaWG', 'WireGuard with altered patterns', 'Networks that slow WireGuard'],
        ['Hysteria2', 'Copes with packet loss', 'Lossy or congested links'],
        ['VLESS Reality', 'Resembles ordinary HTTPS', 'When other protocols stall'],
      ],
    },
    steps: {
      title: 'Using VLESS Reality',
      items: [
        'Keep Protocol on Smart and let FollowNet decide, or',
        'Apply the Restricted network profile for difficult networks, or',
        'Select VLESS Reality manually in Settings → VPN Protocol.',
        'Load real pages and run Speed Test to confirm it helps.',
        'Save a custom profile for networks where it works best.',
      ],
    },
    bullets: [
      'Designed to resemble ordinary encrypted web traffic',
      'Useful when classic protocols are slowed or stalled',
      'Smart Connect and the Restricted profile can use it automatically',
      'Not the fastest on calm networks — WireGuard usually is',
      'Always confirm with real page loads and Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: 'Is VLESS Reality more secure than WireGuard?', a: 'Both encrypt your traffic. VLESS Reality differs in how the connection looks on the network, not in being “more secure”.' },
      { q: 'Should I use it all the time?', a: 'No. Use Smart, and let VLESS Reality step in when other protocols struggle.' },
      { q: 'Is VLESS Reality available on Free?', a: 'Availability depends on the servers and your plan, as shown in the app.' },
      { q: 'Does it guarantee access everywhere?', a: 'No protocol can. It improves the odds on difficult networks and must be used in line with local laws.' },
    ],
  },

  'vpn-free-weekly-limit': {
    h1: 'FollowNet Free weekly traffic: how the limit works',
    lead:
      'FollowNet Free is a full VPN with one honest limit: a weekly traffic allowance shown in the app. Here is what counts toward it, when it resets, how to make it last and what happens when you reach it.',
    sections: [
      {
        title: 'Weekly, not daily',
        body:
          'Free traffic is counted per week, which suits real life better than a daily cap: a heavy travel day can use more, a quiet day less. The current allowance and how much you have used are shown in the app. Exact figures can change with plan settings, so the in-app meter is always the source of truth.',
        image: 'stats',
        imageCaption: 'Statistics: data used this week and the weekly cap.',
      },
      {
        title: 'What counts',
        body:
          'All traffic that goes through the VPN tunnel counts — browsing, video, music, app updates, cloud backups and the built-in Speed Test. Traffic while the VPN is off does not count. Smart Connect’s connection checks are tiny but real.',
      },
      {
        title: 'Making it last',
        body:
          'Video is the biggest consumer, so download films and series over a trusted network before travelling. Use Auto-connect Wi‑Fi Only so the VPN runs on hotspots, where it matters most, but not on mobile data at home. Pause iCloud Photos uploads and large app updates while on the VPN, and run Speed Test only when you need it.',
        image: 'autoconnect',
        imageCaption: 'Wi‑Fi Only Auto-connect focuses Free traffic on public hotspots.',
      },
      {
        title: 'What is included on Free',
        body:
          'Free is not a stripped-down demo. You get the same protocols, Smart Connect, DNS presets, Network Profiles, Auto-connect, widgets and Speed Test as Premium, plus the Free set of locations. The weekly meter is the main difference.',
      },
      {
        title: 'When you reach the limit',
        body:
          'New connections pause until the weekly reset, and widgets show that the quota is used instead of a misleading “Connected”. You can wait for the reset or upgrade to Premium for unlimited traffic, more locations and up to five devices.',
      },
    ],
    table: {
      title: 'What uses the most traffic',
      head: ['Activity', 'Traffic use', 'Tip'],
      rows: [
        ['HD video streaming', 'Very high', 'Download in advance'],
        ['Video calls', 'High', 'Prefer audio-only when possible'],
        ['App updates and backups', 'High, in bursts', 'Run them on trusted Wi‑Fi without VPN'],
        ['Music streaming', 'Moderate', 'Download playlists'],
        ['Browsing, email, messaging', 'Low', 'Ideal for Free'],
      ],
    },
    steps: {
      title: 'Keep track of your allowance',
      items: [
        'Open the Statistics screen to see used and remaining traffic.',
        'Set Auto-connect to Wi‑Fi Only.',
        'Download videos and large files before you travel.',
        'Avoid repeated Speed Tests.',
        'Upgrade to Premium if you regularly hit the limit.',
      ],
    },
    bullets: [
      'A weekly allowance, shown in the app',
      'All tunnelled traffic counts, including Speed Test',
      'Same features as Premium apart from the meter and locations',
      'Video uses the most; browsing and messaging very little',
      'Premium removes the limit and adds locations and devices',
    ],
    cta: CTA,
    faq: [
      { q: 'How much traffic does Free include?', a: 'The current weekly allowance is shown in the app. It can change with plan settings, so check the Statistics screen.' },
      { q: 'When does the allowance reset?', a: 'Weekly. The app shows your current usage for the week.' },
      { q: 'Does traffic without the VPN count?', a: 'No. Only traffic through the FollowNet tunnel counts.' },
      { q: 'Can I add more traffic without subscribing?', a: 'Premium is the way to remove the limit; it is available monthly or annually.' },
    ],
  },

  'vpn-premium-unlimited': {
    h1: 'FollowNet Premium: unlimited traffic, more locations, five devices',
    lead:
      'Premium is for people who use a VPN every day. It removes the weekly Free limit, unlocks Premium locations, covers up to five devices and removes ads. Here is exactly what changes, what stays the same and how billing works.',
    sections: [
      {
        title: 'What Premium adds',
        body:
          'Unlimited traffic with no weekly cap, access to all Premium server locations, one subscription for up to five devices — iPhone, iPad and the Chrome extension — and no ads. Everything else you already know from Free stays exactly the same.',
        image: 'premium',
        imageCaption: 'Premium: unlimited traffic, all Premium servers, Smart Connect and up to five devices.',
      },
      {
        title: 'What does not change',
        body:
          'Encryption, protocols and Smart Connect are identical on Free and Premium. Premium is about capacity and choice, not “stronger security”. If someone tells you a paid plan uses “double military encryption”, that is marketing.',
      },
      {
        title: 'Plans and billing',
        body:
          'Premium is sold through the App Store as a monthly or an annual subscription; the annual plan works out cheaper per month and includes a short free trial shown on Apple’s payment sheet. Apple handles the payment, and you can manage or cancel the subscription at any time in your Apple ID settings.',
      },
      {
        title: 'Using Premium on several devices',
        body:
          'Sign in with the same email on your iPad and in the Chrome extension, or link a device by scanning a QR code from Settings → Other devices. Up to five devices share one subscription. On a new iPhone, use Restore Purchases to reactivate Premium.',
        image: 'settings',
        imageCaption: 'Settings → Other devices: link another phone or Chrome with a QR code.',
      },
      {
        title: 'Who should upgrade',
        body:
          'Upgrade if you regularly hit the weekly limit, stream on the go, work remotely over public Wi‑Fi, need a specific Premium location, or want one plan for the whole family’s devices. If Free covers your occasional café sessions, there is no need to pay.',
      },
      {
        title: 'What Premium cannot promise',
        body:
          'No VPN can guarantee access to every streaming catalogue or override local laws. Premium gives you more capacity and locations; how specific services behave remains up to them.',
      },
    ],
    table: {
      title: 'Free vs Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Traffic', 'Weekly allowance', 'Unlimited'],
        ['Locations', 'Free locations', 'Free + Premium locations'],
        ['Devices', 'With Free allowance', 'Up to 5 on one subscription'],
        ['Protocols, Smart Connect, DNS', 'Included', 'Included'],
        ['Ads', 'May appear in some regions', 'None'],
        ['Billing', '—', 'Monthly or annual via App Store'],
      ],
    },
    steps: {
      title: 'Upgrading and moving devices',
      items: [
        'In the FollowNet iOS app, open the Premium screen.',
        'Choose monthly or annual and confirm with Apple Pay / Apple ID.',
        'Sign in to iPad or Chrome with the same email, or scan the QR code.',
        'On a new iPhone, tap Restore Purchases.',
        'Manage or cancel any time in your Apple ID subscriptions.',
      ],
    },
    bullets: [
      'Unlimited traffic and all Premium locations',
      'Up to five devices on one subscription',
      'No ads',
      'Same encryption and protocols as Free',
      'Billed and cancellable through the App Store',
    ],
    cta: CTA,
    faq: [
      { q: 'Can I try Premium before paying?', a: 'The annual plan includes a short free trial, shown on Apple’s payment sheet before you confirm.' },
      { q: 'How do I cancel?', a: 'In iOS Settings → your name → Subscriptions. You keep Premium until the end of the paid period.' },
      { q: 'Does Premium work in the Chrome extension?', a: 'Yes, sign in with the same account. Chrome counts as one of the five devices.' },
      { q: 'Will Premium make my VPN faster?', a: 'Encryption is the same, but more locations can mean a closer or less busy server.' },
    ],
  },

  'vpn-battery-iphone': {
    h1: 'VPN and iPhone battery — what really drains power and how to save it',
    lead:
      'A VPN does cost some battery, but usually far less than people think. The real drain comes from the radio, weak signal and networks that keep breaking the tunnel. This guide shows how to measure the impact on your own iPhone and set up FollowNet so protection costs as little power as possible.',
    sections: [
      {
        title: 'Where the energy actually goes',
        body:
          'Encryption on modern iPhone chips is cheap. What costs power is keeping the Wi‑Fi or cellular radio active, re-establishing the tunnel after drops and retrying on lossy networks. A stable WireGuard session on good home Wi‑Fi barely shows up in battery stats; the same phone on a weak LTE signal on a train will drain faster with or without a VPN.',
      },
      {
        title: 'Check Battery settings before blaming the VPN',
        body:
          'Open Settings → Battery and look at the last 24 hours and 10 days. iOS often lists VPN usage under the system or the app that triggered it. Compare a day with the VPN on and a similar day without it, on the same routes. One unusual day with poor signal says more about the network than about the tunnel.',
      },
      {
        title: 'Auto-connect: protect hotspots, not every minute',
        body:
          'If you mainly need protection in cafés, hotels and airports, set Auto-connect to Wi‑Fi Only. The VPN then switches on for untrusted hotspots and stays off on mobile data, where the radio is already the biggest consumer. Keep always-on mode for situations where you really need the tunnel everywhere.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect in FollowNet: choose Wi‑Fi Only or always-on.',
      },
      {
        title: 'Pick the protocol that fits the network',
        body:
          'On calm networks WireGuard is the lightest choice: short handshakes, small overhead and quick recovery after sleep. On networks that interfere with VPN traffic, a tunnel that keeps reconnecting wastes far more energy than a slightly heavier protocol that stays up. Smart Connect picks a working option for the current network so the phone does not burn power on endless retries.',
        image: 'protocol',
        imageCaption: 'Protocol settings: Smart, WireGuard, IKEv2, AmneziaWG and others.',
      },
      {
        title: 'Distance and signal matter more than encryption',
        body:
          'A far-away server means longer sessions for the same download, and the radio stays awake longer. Choose Optimal location or a nearby server with low ping. On a weak cellular signal every packet costs more energy; if you are on a trusted network with poor reception, switching the VPN off is a reasonable trade-off.',
      },
      {
        title: 'Low Power Mode and background rules',
        body:
          'Low Power Mode limits background activity, but iOS keeps an active VPN tunnel running. If you need to stretch the last 10–20 %, disconnect on trusted networks and reconnect when you join public Wi‑Fi. FollowNet does not keep extra background tasks alive to pad statistics.',
      },
    ],
    steps: {
      title: 'Battery-friendly setup in five minutes',
      items: [
        'Check Settings → Battery to see your real baseline.',
        'Set Auto-connect to Wi‑Fi Only if you mainly need hotspot protection.',
        'Leave Protocol on Smart, or lock WireGuard on trusted home Wi‑Fi.',
        'Use Optimal location or the nearest low-ping server.',
        'On weak signal and trusted networks, disconnect instead of fighting the radio.',
      ],
    },
    table: {
      title: 'Typical scenarios and their battery cost',
      head: ['Scenario', 'Battery impact', 'What to do'],
      rows: [
        ['Home Wi‑Fi, WireGuard, nearby server', 'Minimal', 'Keep as is'],
        ['Café Wi‑Fi with Auto-connect Wi‑Fi Only', 'Low', 'Recommended default'],
        ['Always-on over weak LTE', 'Noticeable', 'Use Wi‑Fi Only or disconnect on trusted networks'],
        ['Network that keeps dropping the tunnel', 'High', 'Use Smart Connect or another protocol'],
      ],
    },
    bullets: [
      'Encryption is cheap; the radio and weak signal are expensive',
      'Wi‑Fi Only Auto-connect covers hotspots without draining mobile data',
      'WireGuard is the lightest protocol on stable networks',
      'Reconnect loops cost more than any protocol choice',
      'Compare battery stats over several similar days',
    ],
    cta: CTA,
    faq: [
      { q: 'Does a VPN drain the iPhone battery?', a: 'A little. On stable Wi‑Fi with a nearby server the difference is usually small; weak signal and constant reconnects increase it.' },
      { q: 'Which protocol uses the least battery?', a: 'On stable networks WireGuard. On networks that interfere with VPNs, the most efficient option is the one that stays connected, which is what Smart Connect looks for.' },
      { q: 'Should I keep the VPN on all the time?', a: 'Only if you need it everywhere. For café and hotel protection, Auto-connect Wi‑Fi Only is a good balance.' },
      { q: 'Does the VPN work in Low Power Mode?', a: 'Yes. iOS keeps the tunnel running; Low Power Mode only limits other background activity.' },
    ],
  },

  'vpn-iphone-shortcuts': {
    h1: 'VPN in Apple Shortcuts — connect FollowNet with one tap, Siri or automation',
    lead:
      'FollowNet works with the Shortcuts app: you can connect, disconnect or apply a Network Profile without opening the app. This guide shows practical shortcuts for work, travel and evenings, and how they fit together with Auto-connect.',
    sections: [
      {
        title: 'What FollowNet can do in Shortcuts',
        body:
          'The app adds three actions: Connect, Disconnect and Apply Profile. Apply Profile switches to one of the presets — Smart, Public Wi‑Fi, Travel, Restricted — or to a profile you created yourself. Actions can be run from the Shortcuts app, a Home Screen icon, Siri, the Action button on newer iPhones or a personal automation.',
      },
      {
        title: 'Shortcuts vs Auto-connect',
        body:
          'Auto-connect follows network rules: for example, turn on for untrusted Wi‑Fi. Shortcuts are deliberate actions or automations tied to time, place or a Focus mode. They complement each other: Auto-connect covers hotspots on its own, and a shortcut handles the cases rules cannot guess, like starting work or arriving at an airport.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect handles network rules; Shortcuts handle everything else.',
      },
      {
        title: 'Recipe: Work Focus',
        body:
          'Create a personal automation: when the Work Focus turns on, run Apply Profile → your work profile, then Connect. When the Focus turns off, run Disconnect. This way the tunnel follows your schedule without a single tap.',
      },
      {
        title: 'Recipe: Arriving at the airport or hotel',
        body:
          'Use a location automation for a terminal or hotel address: Apply Profile → Travel, then Connect. The Travel profile is tuned for unstable public networks and captive portals, so you do not have to remember settings while carrying luggage.',
      },
      {
        title: 'Recipe: Action button and Siri',
        body:
          'Put a "Connect FollowNet" shortcut on the Action button or ask Siri to run it by name. That is the fastest way to switch the VPN on before opening a sensitive app on public Wi‑Fi.',
      },
      {
        title: 'Permissions and limits',
        body:
          'The first time a shortcut runs, iOS may ask for permission — approve it once. Shortcuts cannot bypass a VPN configuration you removed or denied in Settings. On Free, if the weekly traffic is used up, Connect will not start the tunnel until the week resets or you upgrade.',
      },
    ],
    steps: {
      title: 'Create your first VPN shortcut',
      items: [
        'Open the Shortcuts app and tap +.',
        'Search for FollowNet and add Apply Profile, then Connect.',
        'Name the shortcut, for example "Safe Wi‑Fi".',
        'Run it once and approve the permission prompt.',
        'Optionally add it to the Home Screen, the Action button or an automation.',
      ],
    },
    table: {
      title: 'Ready-made ideas',
      head: ['Trigger', 'Actions', 'Why'],
      rows: [
        ['Work Focus on', 'Apply Profile → Connect', 'Tunnel follows your schedule'],
        ['Arrive at airport', 'Apply Travel → Connect', 'Ready for public Wi‑Fi'],
        ['Action button', 'Connect', 'One press before a sensitive app'],
        ['Bedtime Focus', 'Disconnect', 'No tunnel when it is not needed'],
      ],
    },
    bullets: [
      'Three actions: Connect, Disconnect and Apply Profile',
      'Works with Siri, the Action button and automations',
      'Complements Auto-connect rather than replacing it',
      'Profiles include Smart, Public Wi‑Fi, Travel, Restricted and your own',
      'Free weekly traffic limits still apply',
    ],
    cta: CTA,
    faq: [
      { q: 'Can I turn the VPN on with Siri?', a: 'Yes. Create a shortcut with the FollowNet Connect action and run it by its name through Siri.' },
      { q: 'Do I need to open the app for the shortcut to work?', a: 'No. Actions run in the background; the app just needs to be installed and the VPN configuration allowed.' },
      { q: 'Can a shortcut choose a server?', a: 'Shortcuts apply profiles and connect. Pick your server or Optimal location in the app; the shortcut uses it.' },
      { q: 'Will automations run without confirmation?', a: 'For most triggers iOS lets you disable "Ask Before Running". Some location triggers may still show a notification.' },
    ],
  },

  'vpn-for-students': {
    h1: 'VPN for students on iPhone — campus Wi‑Fi, dorms and a budget-friendly plan',
    lead:
      'Students spend most of the day on shared networks: campus Wi‑Fi, dorms, libraries and cafés. A VPN encrypts that traffic on the way to the server. This guide covers when it is worth using, how to start with Free and how to stay within your school’s rules.',
    sections: [
      {
        title: 'Why shared networks are the main risk',
        body:
          'Campus and dorm networks connect hundreds of devices you do not know. Most traffic is already HTTPS, but a VPN adds another layer: the local network sees only an encrypted connection to the VPN server, not which services you use. This matters most on open library and café hotspots without a password.',
      },
      {
        title: 'Start with Free',
        body:
          'FollowNet Free includes a weekly traffic allowance — enough for messengers, email, banking and occasional browsing on public Wi‑Fi. The meter in the app shows how much is left and when the week resets. For lectures, large downloads and video, use trusted networks or consider Premium.',
        image: 'stats',
        imageCaption: 'The app shows your weekly traffic and when it resets.',
      },
      {
        title: 'When campus Wi‑Fi interferes with VPNs',
        body:
          'Some institutional networks filter VPN protocols. Leave Protocol on Smart: Smart Connect tries different protocols and keeps the one that actually passes traffic. If the network still blocks the tunnel, respect that — it is the network owner’s policy, and mobile data remains an option.',
        image: 'protocol',
        imageCaption: 'Smart Connect picks a protocol that works on the current network.',
      },
      {
        title: 'Share Premium wisely',
        body:
          'One Premium account works on up to five devices, including iPhone, iPad and the Chrome extension. Roommates sometimes split a plan, but devices on one account share it — keep it to people you trust and remove devices you no longer use.',
        image: 'premium',
        imageCaption: 'Premium: more locations and up to five devices on one account.',
      },
      {
        title: 'Rules still apply',
        body:
          'A VPN does not change your school’s acceptable-use policy. Do not use it to reach systems you are not allowed to access, and never during exams where it is prohibited. A VPN protects your connection; it is not a tool for getting around academic rules.',
      },
      {
        title: 'Before travelling home or on exchange',
        body:
          'Install and test FollowNet before you leave. Abroad, hotel and hostel Wi‑Fi are typical places where the Travel profile and Auto-connect Wi‑Fi Only help. Check that you know how to switch protocols if one network behaves strangely.',
      },
    ],
    steps: {
      title: 'Student setup',
      items: [
        'Install FollowNet and sign in with your email code.',
        'Turn on Auto-connect Wi‑Fi Only for campus and café hotspots.',
        'Leave Protocol on Smart.',
        'Watch the weekly meter if you are on Free.',
        'Read your school’s network policy once.',
      ],
    },
    table: {
      title: 'Where a VPN helps on campus',
      head: ['Place', 'Risk', 'Recommendation'],
      rows: [
        ['Open library or café Wi‑Fi', 'High', 'Always connect'],
        ['Dorm network', 'Medium', 'Auto-connect Wi‑Fi Only'],
        ['Campus Wi‑Fi with login', 'Medium', 'Connect after signing in'],
        ['Mobile data', 'Low', 'Optional'],
      ],
    },
    bullets: [
      'Shared networks are the main reason to use a VPN on campus',
      'Free weekly traffic covers everyday messaging and browsing',
      'Smart Connect handles networks that interfere with VPNs',
      'Premium covers up to five devices on one account',
      'School network rules still apply',
    ],
    cta: CTA,
    faq: [
      { q: 'Is Free enough for a student?', a: 'For messengers, email and browsing on public Wi‑Fi — usually yes. Video and big downloads use the weekly allowance quickly.' },
      { q: 'Is it legal to use a VPN on campus?', a: 'Using a VPN is generally legal, but the network owner sets rules for its network. Follow your school’s policy.' },
      { q: 'Can I share Premium with roommates?', a: 'One account works on up to five devices. Share only with people you trust, since they use the same account.' },
      { q: 'Why does the VPN not connect on campus Wi‑Fi?', a: 'Some networks filter VPN protocols. Try Smart Connect; if it is still blocked, that is the network policy.' },
    ],
  },

  'vpn-for-banking-apps': {
    h1: 'VPN for banking apps on iPhone — safer public Wi‑Fi, not a replacement for bank security',
    lead:
      'Opening a bank app on café or hotel Wi‑Fi is exactly the situation where a VPN helps: it encrypts the path between your iPhone and the VPN server. But it does not replace Face ID, two-factor codes or the bank’s own fraud checks. Here is how to use them together without triggering extra security checks.',
    sections: [
      {
        title: 'What a VPN adds for banking',
        body:
          'Bank apps already use HTTPS and certificate checks. A VPN adds protection at the network level: on public Wi‑Fi the hotspot owner and other users see only an encrypted tunnel, not which bank or service you contact. It also reduces the risk from fake hotspots that imitate a café network name.',
      },
      {
        title: 'What a VPN cannot do',
        body:
          'A VPN does not protect against phishing links, fake calls from "the bank" or someone who learned your one-time code. Never share codes and never install apps on request from a caller. Your bank’s security features and your own caution remain the main defence.',
      },
      {
        title: 'Why a bank may ask for extra verification',
        body:
          'Banks watch for unusual sign-ins. A login from an unfamiliar country or data centre may trigger an SMS code or a temporary block. Choose a server in your own country or the nearest location — it looks like normal usage and keeps latency low.',
        image: 'servers',
        imageCaption: 'Choose a nearby server so bank logins look familiar.',
      },
      {
        title: 'If the bank app refuses to work with the VPN',
        body:
          'Some banks restrict VPN connections in their apps. In that case follow the bank’s policy: disconnect FollowNet, switch to mobile data instead of public Wi‑Fi and complete the operation. We do not help bypass bank security checks.',
      },
      {
        title: 'Safe routine on public Wi‑Fi',
        body:
          'Turn on Auto-connect Wi‑Fi Only so the tunnel is already up when you join a hotspot. Wait for the connected status, then open the bank app and unlock it with Face ID. Avoid confirming large payments on unknown networks when mobile data is available.',
        image: 'connect',
        imageCaption: 'Wait for Connected before opening the bank app.',
      },
    ],
    steps: {
      title: 'Banking on public Wi‑Fi step by step',
      items: [
        'Enable Auto-connect Wi‑Fi Only in FollowNet.',
        'Select Optimal location or a server in your country.',
        'Join the Wi‑Fi and wait for Connected.',
        'Open the bank app and unlock with Face ID.',
        'If the bank blocks the VPN, disconnect and use mobile data.',
      ],
    },
    table: {
      title: 'Who protects what',
      head: ['Threat', 'VPN', 'Bank / you'],
      rows: [
        ['Snooping on public Wi‑Fi', 'Encrypts the tunnel', '—'],
        ['Fake hotspot', 'Reduces risk', 'Check the network name'],
        ['Phishing link or call', 'No', 'Never share codes'],
        ['Stolen password', 'No', 'Face ID, 2FA, bank alerts'],
      ],
    },
    bullets: [
      'A VPN protects the network path on public Wi‑Fi',
      'Choose a server in your country to avoid extra checks',
      'Face ID and two-factor codes remain essential',
      'Follow the bank’s policy if it restricts VPNs',
      'Prefer mobile data for large payments on unknown networks',
    ],
    cta: CTA,
    faq: [
      { q: 'Is it safe to use a bank app with a VPN?', a: 'Yes, with a reputable VPN it adds protection on public networks. Choose a server in your country to avoid extra checks.' },
      { q: 'Why did my bank block the login?', a: 'An unfamiliar location can look suspicious. Use a nearby server or disconnect and log in over mobile data.' },
      { q: 'Does a VPN protect against phishing?', a: 'No. Phishing tricks you, not the network. Never share one-time codes.' },
      { q: 'Do I need a VPN for banking at home?', a: 'On your own secured Wi‑Fi it is optional. It matters most on public and shared networks.' },
    ],
  },

  'vpn-split-tunneling-ios': {
    h1: 'Split tunneling on iPhone — what iOS allows and what to use instead',
    lead:
      'Split tunneling means sending only some traffic through the VPN and the rest directly. On Windows and Android many apps let you exclude individual apps. On iPhone, consumer VPN apps work differently. This guide explains Apple’s limits honestly and shows which FollowNet tools solve the same tasks.',
    sections: [
      {
        title: 'How a VPN works on iOS',
        body:
          'On iPhone a consumer VPN creates a system tunnel: while connected, apps generally send their traffic through it. Per-app VPN exists in iOS, but it is designed for company-managed devices through MDM, not for App Store apps on personal phones. That is why honest iOS VPN apps do not offer an "exclude this app" list.',
      },
      {
        title: 'Why we do not promise per-app split tunneling',
        body:
          'Some apps advertise split tunneling on iPhone, but in practice it is either limited to managed devices or works only for specific network ranges. We prefer to describe what really happens rather than show a switch that does not do what it says.',
      },
      {
        title: 'Network Profiles instead of exclusions',
        body:
          'Most split-tunnel use cases are really "VPN in some places, not in others". Network Profiles and Auto-connect cover that: Wi‑Fi Only protects public hotspots while mobile data goes direct, and presets like Public Wi‑Fi and Travel tune behaviour for specific situations.',
        image: 'autoconnect',
        imageCaption: 'Auto-connect Wi‑Fi Only: VPN on hotspots, direct on mobile data.',
      },
      {
        title: 'DNS settings for finer control',
        body:
          'Sometimes the goal is not to route traffic differently but to change name resolution — for example, blocking ads or trackers. DNS presets in FollowNet — for example AdGuard for filtering — do that inside the tunnel without a separate app.',
        image: 'dns',
        imageCaption: 'DNS presets change name resolution inside the tunnel.',
      },
      {
        title: 'On a computer: route only the browser',
        body:
          'If you need protection only for browsing on a Mac or PC, the FollowNet Chrome extension routes browser traffic while other apps on the computer go direct. It is the closest practical equivalent to split tunneling and uses the same account.',
      },
      {
        title: 'When an app does not work through the VPN',
        body:
          'If a specific app — a bank, a local streaming service, a smart-home hub on your LAN — refuses to work while connected, the simplest option is to disconnect for that task or try a server in your own country. Shortcuts make switching quick: one tap to disconnect, one to reconnect.',
      },
    ],
    steps: {
      title: 'Get split-tunnel results on iPhone',
      items: [
        'Decide where you really need the VPN: hotspots, travel or everywhere.',
        'Set Auto-connect to Wi‑Fi Only if mobile data can go direct.',
        'Pick a Network Profile for the situation.',
        'Use a server in your country for apps that dislike foreign locations.',
        'Add Connect / Disconnect shortcuts for quick exceptions.',
      ],
    },
    table: {
      title: 'Task and the right tool',
      head: ['Task', 'Per-app split tunnel', 'FollowNet tool'],
      rows: [
        ['VPN only on public Wi‑Fi', 'Not needed', 'Auto-connect Wi‑Fi Only'],
        ['Protect only the browser on a computer', 'Not needed', 'Chrome extension'],
        ['App fails abroad-looking IP', 'Not on iOS', 'Server in your country'],
        ['Quick exception for one task', 'Not on iOS', 'Disconnect shortcut'],
      ],
    },
    bullets: [
      'iOS consumer VPNs work as a system tunnel',
      'Per-app VPN on iPhone is for MDM-managed devices',
      'Auto-connect Wi‑Fi Only covers most split-tunnel needs',
      'The Chrome extension routes only browser traffic on a computer',
      'Shortcuts make quick exceptions easy',
    ],
    cta: CTA,
    faq: [
      { q: 'Does FollowNet support split tunneling on iPhone?', a: 'Not per app — iOS reserves that for managed devices. Auto-connect rules, profiles and shortcuts solve most of the same tasks.' },
      { q: 'Can I exclude my bank app from the VPN?', a: 'Not individually. Use a server in your country or disconnect briefly with a shortcut.' },
      { q: 'Is there split tunneling on desktop?', a: 'The Chrome extension routes only the browser, so other apps on the computer go direct.' },
      { q: 'Why do some iPhone VPNs claim split tunneling?', a: 'It is usually limited to IP ranges or managed devices. Check what exactly is excluded before relying on it.' },
    ],
  },
};
