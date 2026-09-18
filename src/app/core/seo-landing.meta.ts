import { AppLang } from './i18n.service';
import { CoreLandingSlug, LandingSlug, landingSlugFromPath, landingLabel } from './seo-landing.slugs';
import type { SeoCopy } from './seo-copy';
import { isExtraLandingSlug } from './seo-landing.extra-slugs';

type LandingMeta = Partial<Record<AppLang, SeoCopy>> & { en: SeoCopy };

const M: Record<CoreLandingSlug, LandingMeta> = {
  'vpn-for-iphone': {
    en: {
      title: 'VPN for iPhone — FollowNet | Free iOS VPN App',
      ogTitle: 'VPN for iPhone — FollowNet',
      description:
        'Download a VPN built for iPhone: WireGuard, VLESS Reality, Smart Connect, free weekly traffic. No card required to try. Available on the App Store.',
    },
    ru: {
      title: 'VPN для iPhone — FollowNet | Бесплатный VPN для iOS',
      ogTitle: 'VPN для iPhone — FollowNet',
      description:
        'VPN для iPhone: WireGuard, VLESS Reality, Smart Connect, бесплатный тариф с недельным лимитом. Попробуйте без карты — скачать в App Store.',
    },
  },
  'wireguard-vpn-ios': {
    en: {
      title: 'WireGuard VPN for iOS — FollowNet | Fast iPhone VPN',
      ogTitle: 'WireGuard VPN for iOS — FollowNet',
      description:
        'Native WireGuard on iPhone plus AmneziaWG, Hysteria2, and VLESS Reality when networks block VPNs. Smart Connect picks the best path.',
    },
    ru: {
      title: 'WireGuard VPN для iOS — FollowNet',
      ogTitle: 'WireGuard VPN для iOS — FollowNet',
      description:
        'Нативный WireGuard на iPhone и AmneziaWG, Hysteria2, VLESS Reality при блокировках. Smart Connect выбирает протокол автоматически.',
    },
  },
  'free-vpn-iphone': {
    en: {
      title: 'Free VPN for iPhone — FollowNet | Weekly Data, No Card',
      ogTitle: 'Free VPN for iPhone — FollowNet',
      description:
        'Try FollowNet free on iPhone: weekly traffic, WireGuard & VLESS Reality, Smart Connect, Auto-connect, DNS. Upgrade to Premium for unlimited.',
    },
    ru: {
      title: 'Бесплатный VPN для iPhone — FollowNet',
      ogTitle: 'Бесплатный VPN для iPhone — FollowNet',
      description:
        'FollowNet бесплатно на iPhone: недельный лимит, WireGuard и VLESS Reality, Smart Connect, автоподключение и DNS. Premium — безлимит.',
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
        'FollowNet на iPad — то же iOS-приложение: WireGuard, IKEv2, Smart Connect, автоподключение и доступные в приложении серверы.',
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
        'Smart Connect picks among WireGuard, IKEv2, AmneziaWG, Hysteria2, and VLESS Reality with fallbacks and egress checks on iPhone and iPad.',
    },
    ru: {
      title: 'Smart Connect VPN — FollowNet',
      ogTitle: 'Smart Connect VPN — FollowNet',
      description:
        'Smart Connect выбирает среди WireGuard, IKEv2, AmneziaWG, Hysteria2 и VLESS Reality с fallback и проверкой egress на iPhone и iPad.',
    },
  },
  'network-profiles-ios': {
    en: {
      title: 'Network Profiles on iOS — FollowNet | Smart, Public Wi‑Fi, Travel, Restricted',
      ogTitle: 'Network Profiles — FollowNet',
      description:
        'Exact FollowNet presets: Smart, Public Wi‑Fi, Travel, Restricted — protocol, DNS, Auto-connect, and server mode in one tap.',
    },
    ru: {
      title: 'Профили сети на iOS — FollowNet | Smart, Public Wi‑Fi, Travel, Restricted',
      ogTitle: 'Профили сети — FollowNet',
      description:
        'Точные пресеты FollowNet: Smart, Public Wi‑Fi, Travel, Restricted — протокол, DNS, автоподключение и режим сервера одним тапом.',
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
      title: 'VPN Privacy on iPhone — FollowNet Data Policy',
      ogTitle: 'VPN Privacy — FollowNet',
      description:
        'Read how FollowNet handles account data, VPN metadata, DNS, analytics, retention, and privacy rights for iOS and Android users.',
    },
    ru: {
      title: 'Приватность VPN на iPhone — политика FollowNet',
      ogTitle: 'Приватность VPN — FollowNet',
      description:
        'Как FollowNet обрабатывает данные аккаунта, VPN-метаданные, DNS и аналитику: цели, сроки хранения и права пользователя.',
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
  'hysteria2-vpn-ios': {
    en: {
      title: 'Hysteria2 VPN for iOS — FollowNet | When Networks Fight Tunnels',
      ogTitle: 'Hysteria2 VPN for iOS — FollowNet',
      description:
        'Use Hysteria2 on iPhone and iPad with FollowNet alongside WireGuard, IKEv2, and AmneziaWG. Smart Connect or manual protocol selection for lossy networks.',
    },
    ru: {
      title: 'Hysteria2 VPN для iOS — FollowNet',
      ogTitle: 'Hysteria2 VPN для iOS — FollowNet',
      description:
        'Hysteria2 на iPhone и iPad в FollowNet рядом с WireGuard, IKEv2 и AmneziaWG. Smart Connect или ручной выбор для сложных сетей.',
    },
  },
  'vpn-chrome-extension': {
    en: {
      title: 'VPN Chrome Extension — FollowNet | Same Account as iOS',
      ogTitle: 'FollowNet VPN for Chrome',
      description:
        'FollowNet Chrome extension for desktop browsing with the same account as iPhone. Free weekly traffic, optional Premium, simple server flow.',
    },
    ru: {
      title: 'VPN-расширение Chrome — FollowNet',
      ogTitle: 'FollowNet VPN для Chrome',
      description:
        'Расширение FollowNet для Chrome: тот же аккаунт, что на iPhone, недельный лимит Free и опциональный Premium.',
    },
  },
  'vpn-widgets-ios': {
    en: {
      title: 'VPN Widgets for iOS — FollowNet Home Screen Status',
      ogTitle: 'VPN Widgets for iOS — FollowNet',
      description:
        'See FollowNet connection status on your iPhone Home Screen. Pair widgets with Auto-connect for public Wi‑Fi and travel networks.',
    },
    ru: {
      title: 'Виджеты VPN для iOS — FollowNet',
      ogTitle: 'Виджеты VPN для iOS — FollowNet',
      description:
        'Статус FollowNet на Home Screen iPhone. Сочетайте виджеты с автоподключением для публичного Wi‑Fi и поездок.',
    },
  },
  'how-to-setup-vpn-iphone': {
    en: {
      title: 'How to Set Up VPN on iPhone — FollowNet Guide',
      ogTitle: 'How to Set Up VPN on iPhone — FollowNet',
      description:
        'Install FollowNet from the App Store, sign in with email code, allow VPN configuration, and connect in one tap. Free weekly traffic, Smart Connect, Auto-connect.',
    },
    ru: {
      title: 'Как настроить VPN на iPhone — гайд FollowNet',
      ogTitle: 'Как настроить VPN на iPhone — FollowNet',
      description:
        'Установите FollowNet из App Store, войдите по email-коду, разрешите VPN и подключайтесь в одно касание. Free, Smart Connect, автоподключение.',
    },
  },
  'vpn-for-streaming-iphone': {
    en: {
      title: 'VPN for Streaming on iPhone — FollowNet Speed & Servers',
      ogTitle: 'VPN for Streaming on iPhone — FollowNet',
      description:
        'Stream more privately on iPhone with FollowNet: WireGuard, Smart Connect, Speed Test, and Auto-connect on Wi‑Fi — honest limits on catalog unlocks.',
    },
    ru: {
      title: 'VPN для стриминга на iPhone — FollowNet',
      ogTitle: 'VPN для стриминга на iPhone — FollowNet',
      description:
        'Более приватный стриминг на iPhone с FollowNet: WireGuard, Smart Connect, Speed Test и автоподключение — без ложных обещаний про каталоги.',
    },
  },
  'vpn-for-gaming-iphone': {
    en: {
      title: 'VPN for Gaming on iPhone — FollowNet Latency Tips',
      ogTitle: 'VPN for Gaming on iPhone — FollowNet',
      description:
        'Game on untrusted networks with FollowNet for iOS. WireGuard-first, Smart Connect when filtered, Speed Test for latency — Free and Premium.',
    },
    ru: {
      title: 'VPN для игр на iPhone — FollowNet',
      ogTitle: 'VPN для игр на iPhone — FollowNet',
      description:
        'Игры в ненадёжных сетях с FollowNet для iOS. Сначала WireGuard, Smart Connect при фильтрах, Speed Test для latency — Free и Premium.',
    },
  },
};

export { landingSlugFromPath };

export function getLandingSeoCopy(slug: LandingSlug, lang: AppLang): SeoCopy {
  if (isExtraLandingSlug(slug)) {
    const label = landingLabel(slug, lang);
    return {
      title: `${label} — FollowNet`,
      ogTitle: label,
      description: `${label}. FollowNet VPN for iPhone — Free weekly traffic or Premium unlimited.`,
    };
  }
  const block = M[slug];
  if (block[lang]) return block[lang]!;
  const label = landingLabel(slug, lang);
  // Prefer hand-tuned EN meta structure for missing langs without pulling full landing bodies into the initial bundle.
  return {
    title: `${label} — FollowNet`,
    ogTitle: label,
    description: block.en.description,
  };
}

export function getGuidesHubSeoCopy(lang: AppLang): SeoCopy {
  const copy: Record<AppLang, SeoCopy> = {
    en: {
      title: 'iOS VPN Guides — FollowNet | iPhone & iPad Help',
      ogTitle: 'iOS VPN Guides — FollowNet',
      description:
        'FollowNet guides: WireGuard, VLESS Reality, Smart Connect, Free weekly limits, public Wi‑Fi, travel, troubleshooting, and Chrome.',
    },
    ru: {
      title: 'Гайды VPN для iOS — FollowNet',
      ogTitle: 'Гайды VPN для iOS — FollowNet',
      description:
        'Гайды FollowNet: WireGuard, VLESS Reality, Smart Connect, недельный Free, публичный Wi‑Fi, поездки и Chrome.',
    },
    uk: {
      title: 'Гайди VPN для iOS — FollowNet',
      ogTitle: 'Гайди VPN для iOS — FollowNet',
      description:
        'Гайди FollowNet: WireGuard, VLESS Reality, Smart Connect, тижневий Free, публічний Wi‑Fi, подорожі і Chrome.',
    },
    de: {
      title: 'VPN-Ratgeber für iOS — FollowNet',
      ogTitle: 'iOS VPN-Ratgeber — FollowNet',
      description:
        'FollowNet-Ratgeber: WireGuard, VLESS Reality, Smart Connect, Free-Wochenlimit, öffentliches WLAN, Reisen und Chrome.',
    },
    es: {
      title: 'Guías VPN para iOS — FollowNet',
      ogTitle: 'Guías VPN para iOS — FollowNet',
      description:
        'Guías FollowNet: WireGuard, VLESS Reality, Smart Connect, Free semanal, Wi‑Fi público, viajes y Chrome.',
    },
    fr: {
      title: 'Guides VPN pour iOS — FollowNet',
      ogTitle: 'Guides VPN pour iOS — FollowNet',
      description:
        'Guides FollowNet : WireGuard, VLESS Reality, Smart Connect, Free hebdo, Wi‑Fi public, voyages et Chrome.',
    },
    pt: {
      title: 'Guias de VPN para iOS — FollowNet',
      ogTitle: 'Guias de VPN para iOS — FollowNet',
      description:
        'Guias FollowNet: WireGuard, VLESS Reality, Smart Connect, Free semanal, Wi‑Fi público, viagens e Chrome.',
    },
  };
  return copy[lang] ?? copy.en;
}
