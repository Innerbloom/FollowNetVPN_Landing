import { AppLang } from './i18n.service';
import { LandingSlug, landingSlugFromPath } from './seo-landing.slugs';
import type { SeoCopy } from './seo-copy';

type LandingMeta = Partial<Record<AppLang, SeoCopy>> & { en: SeoCopy };

const M: Record<LandingSlug, LandingMeta> = {
  'vpn-for-iphone': {
    en: {
      title: 'VPN for iPhone — FollowNet | Free iOS VPN App',
      ogTitle: 'VPN for iPhone — FollowNet',
      description:
        'Download a VPN built for iPhone: one-tap connect, WireGuard & IKEv2, free daily data, Smart Connect for restrictive networks. Available on the App Store.',
    },
    ru: {
      title: 'VPN для iPhone — FollowNet | Бесплатный VPN для iOS',
      ogTitle: 'VPN для iPhone — FollowNet',
      description:
        'VPN для iPhone: подключение в одно касание, WireGuard и IKEv2, бесплатный тариф, Smart Connect. Скачать в App Store.',
    },
  },
  'wireguard-vpn-ios': {
    en: {
      title: 'WireGuard VPN for iOS — FollowNet | Fast iPhone VPN',
      ogTitle: 'WireGuard VPN for iOS — FollowNet',
      description:
        'Native WireGuard on iPhone and iPad plus AmneziaWG when networks block VPNs. Smart Connect picks the best protocol automatically.',
    },
    ru: {
      title: 'WireGuard VPN для iOS — FollowNet',
      ogTitle: 'WireGuard VPN для iOS — FollowNet',
      description:
        'Нативный WireGuard на iPhone и iPad и AmneziaWG при блокировках. Smart Connect выбирает протокол автоматически.',
    },
  },
  'free-vpn-iphone': {
    en: {
      title: 'Free VPN for iPhone — FollowNet | Daily Data, No Card',
      ogTitle: 'Free VPN for iPhone — FollowNet',
      description:
        'Try FollowNet free on iPhone: daily data, WireGuard & IKEv2, Smart Connect, Auto-connect, and DNS profiles. Upgrade to Premium for unlimited traffic.',
    },
    ru: {
      title: 'Бесплатный VPN для iPhone — FollowNet',
      ogTitle: 'Бесплатный VPN для iPhone — FollowNet',
      description:
        'FollowNet бесплатно на iPhone: дневной лимит, WireGuard и IKEv2, Smart Connect, автоподключение и DNS. Premium — безлимит.',
    },
  },
  'vpn-for-ipad': {
    en: {
      title: 'VPN for iPad — FollowNet | Same iOS App, Full Screen UI',
      ogTitle: 'VPN for iPad — FollowNet',
      description:
        'FollowNet runs on iPad with the same iOS VPN app: WireGuard, IKEv2, Smart Connect, Auto-connect, and global servers from the App Store.',
    },
    ru: {
      title: 'VPN для iPad — FollowNet',
      ogTitle: 'VPN для iPad — FollowNet',
      description:
        'FollowNet на iPad — то же iOS-приложение: WireGuard, IKEv2, Smart Connect, автоподключение и серверы по всему миру.',
    },
  },
  'ikev2-vpn-ios': {
    en: {
      title: 'IKEv2 VPN for iOS — FollowNet | Stable on Mobile Networks',
      ogTitle: 'IKEv2 VPN for iOS — FollowNet',
      description:
        'Use IKEv2 on iPhone and iPad for stable reconnects on cellular and Wi‑Fi. FollowNet also offers WireGuard, AmneziaWG, and Smart Connect.',
    },
    ru: {
      title: 'IKEv2 VPN для iOS — FollowNet',
      ogTitle: 'IKEv2 VPN для iOS — FollowNet',
      description:
        'IKEv2 на iPhone и iPad для стабильной работы в мобильных сетях. Также WireGuard, AmneziaWG и Smart Connect.',
    },
  },
  'vpn-for-wifi': {
    en: {
      title: 'VPN for Public Wi‑Fi on iPhone — FollowNet',
      ogTitle: 'VPN for Public Wi‑Fi — FollowNet',
      description:
        'Encrypt traffic on coffee-shop, airport, and hotel Wi‑Fi with FollowNet for iOS. One tap, Auto-connect, and Smart Connect for tricky networks.',
    },
    ru: {
      title: 'VPN для публичного Wi‑Fi на iPhone — FollowNet',
      ogTitle: 'VPN для публичного Wi‑Fi — FollowNet',
      description:
        'Шифруйте трафик в кафе, аэропорту и отеле с FollowNet для iOS. Автоподключение и Smart Connect для сложных сетей.',
    },
  },
  'smart-connect-vpn': {
    en: {
      title: 'Smart Connect VPN — FollowNet | Auto Protocol for iOS',
      ogTitle: 'Smart Connect VPN — FollowNet',
      description:
        'Smart Connect picks WireGuard, IKEv2, or AmneziaWG based on your network, carrier, and region — built into FollowNet for iPhone and iPad.',
    },
    ru: {
      title: 'Smart Connect VPN — FollowNet',
      ogTitle: 'Smart Connect VPN — FollowNet',
      description:
        'Smart Connect выбирает WireGuard, IKEv2 или AmneziaWG по вашей сети и региону — встроено в FollowNet для iPhone и iPad.',
    },
  },
  'amneziawg-vpn-ios': {
    en: {
      title: 'AmneziaWG VPN for iOS — FollowNet | Obfuscated WireGuard',
      ogTitle: 'AmneziaWG for iOS — FollowNet',
      description:
        'When WireGuard is blocked, FollowNet can use AmneziaWG on iOS. Smart Connect switches automatically or choose it manually in Settings.',
    },
    ru: {
      title: 'AmneziaWG VPN для iOS — FollowNet',
      ogTitle: 'AmneziaWG для iOS — FollowNet',
      description:
        'Если WireGuard блокируют, FollowNet использует AmneziaWG на iOS. Smart Connect или ручной выбор в настройках.',
    },
  },
  'no-logs-vpn': {
    en: {
      title: 'No-Logs VPN for iPhone — FollowNet Privacy Policy',
      ogTitle: 'No-Logs VPN — FollowNet',
      description:
        'FollowNet minimizes data collection. Read how we handle VPN metadata, DNS, analytics, and your rights — no-logs approach for iOS users.',
    },
    ru: {
      title: 'VPN без логов для iPhone — FollowNet',
      ogTitle: 'VPN без логов — FollowNet',
      description:
        'FollowNet минимизирует сбор данных. Как мы обрабатываем VPN-метаданные, DNS и аналитику — политика no logs для iOS.',
    },
  },
  'auto-connect-vpn-ios': {
    en: {
      title: 'Auto-connect VPN for iOS — FollowNet | Wi‑Fi & Cellular',
      ogTitle: 'Auto-connect on iOS — FollowNet',
      description:
        'FollowNet Auto-connect starts VPN on Wi‑Fi, LTE, or any network on iPhone and iPad. Choose Wi‑Fi Only, LTE Only, or Always in Settings.',
    },
    ru: {
      title: 'Автоподключение VPN для iOS — FollowNet',
      ogTitle: 'Автоподключение на iOS — FollowNet',
      description:
        'Автоподключение FollowNet запускает VPN на Wi‑Fi, LTE или любой сети на iPhone и iPad. Режимы: только Wi‑Fi, только LTE или всегда.',
    },
  },
  'dns-vpn-ios': {
    en: {
      title: 'Custom DNS VPN for iPhone — FollowNet | Quad9, Cloudflare',
      ogTitle: 'Custom DNS VPN — FollowNet',
      description:
        'Pick DNS profiles in FollowNet for iOS: system, Quad9, Cloudflare, AdGuard, and more — alongside WireGuard, IKEv2, and Smart Connect.',
    },
    ru: {
      title: 'VPN с DNS для iPhone — FollowNet',
      ogTitle: 'Свой DNS в VPN — FollowNet',
      description:
        'DNS-профили в FollowNet для iOS: системный, Quad9, Cloudflare, AdGuard и другие — вместе с WireGuard, IKEv2 и Smart Connect.',
    },
  },
  'vpn-for-travel': {
    en: {
      title: 'VPN for Travel on iPhone — FollowNet | Roaming & Hotspots',
      ogTitle: 'VPN for Travel — FollowNet',
      description:
        'Stay private on travel SIMs, hotel Wi‑Fi, and airport networks with FollowNet for iOS. Smart Connect adapts to foreign carriers and restrictions.',
    },
    ru: {
      title: 'VPN для путешествий на iPhone — FollowNet',
      ogTitle: 'VPN для путешествий — FollowNet',
      description:
        'Приватность в роуминге, отелях и аэропортах с FollowNet для iOS. Smart Connect подстраивается под зарубежные сети.',
    },
  },
  'best-vpn-iphone': {
    en: {
      title: 'Best VPN for iPhone — FollowNet Features Compared',
      ogTitle: 'Best VPN for iPhone — FollowNet',
      description:
        'Why choose FollowNet on iPhone: native iOS VPN, free tier, WireGuard & IKEv2, Smart Connect, Auto-connect, DNS profiles, Speed Test, and Shortcuts.',
    },
    ru: {
      title: 'Лучший VPN для iPhone — возможности FollowNet',
      ogTitle: 'Лучший VPN для iPhone — FollowNet',
      description:
        'Почему FollowNet на iPhone: нативный iOS VPN, бесплатный тариф, WireGuard и IKEv2, Smart Connect, автоподключение, DNS и Speed Test.',
    },
  },
  'vpn-speed-test-ios': {
    en: {
      title: 'VPN Speed Test for iPhone — FollowNet Built-In Tool',
      ogTitle: 'VPN Speed Test — FollowNet',
      description:
        'Measure download and latency inside FollowNet for iOS before and after connecting. Compare servers and protocols on iPhone and iPad.',
    },
    ru: {
      title: 'Speed Test VPN для iPhone — FollowNet',
      ogTitle: 'Speed Test в FollowNet',
      description:
        'Замер скорости и задержки в FollowNet для iOS до и после подключения. Сравнение серверов на iPhone и iPad.',
    },
  },
  'secure-vpn-iphone': {
    en: {
      title: 'Secure VPN for iPhone — FollowNet Encryption & Privacy',
      ogTitle: 'Secure VPN for iPhone — FollowNet',
      description:
        'FollowNet encrypts traffic with WireGuard, IKEv2, or AmneziaWG on iOS. Auto-connect, DNS hardening, and a clear Privacy Policy for iPhone users.',
    },
    ru: {
      title: 'Безопасный VPN для iPhone — FollowNet',
      ogTitle: 'Безопасный VPN для iPhone — FollowNet',
      description:
        'FollowNet шифрует трафик через WireGuard, IKEv2 или AmneziaWG на iOS. Автоподключение, DNS и прозрачная политика конфиденциальности.',
    },
  },
};

export { landingSlugFromPath };

export function getLandingSeoCopy(slug: LandingSlug, lang: AppLang): SeoCopy {
  const block = M[slug];
  return block[lang] ?? block.en;
}

export function getGuidesHubSeoCopy(lang: AppLang): SeoCopy {
  const en: SeoCopy = {
    title: 'iOS VPN Guides — FollowNet | iPhone & iPad Help',
    ogTitle: 'iOS VPN Guides — FollowNet',
    description:
      'Browse FollowNet guides: VPN for iPhone, free VPN, WireGuard, IKEv2, Smart Connect, Auto-connect, DNS, travel Wi‑Fi, and more.',
  };
  const ru: SeoCopy = {
    title: 'Гайды VPN для iOS — FollowNet',
    ogTitle: 'Гайды VPN для iOS — FollowNet',
    description:
      'Гайды FollowNet: VPN для iPhone, бесплатный VPN, WireGuard, IKEv2, Smart Connect, автоподключение, DNS, Wi‑Fi в поездках и другое.',
  };
  if (lang === 'ru') return ru;
  if (lang === 'uk') return { ...ru, title: 'Гайди VPN для iOS — FollowNet', ogTitle: 'Гайди VPN для iOS — FollowNet' };
  return en;
}
