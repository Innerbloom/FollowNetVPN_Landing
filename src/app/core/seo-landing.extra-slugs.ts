import type { AppLang } from './i18n.service';
/** Lightweight EXTRA slug + label map (keeps heavy guides out of the initial bundle). */
export type ExtraLandingSlug =
  | 'vless-reality-ios'
  | 'vpn-free-weekly-limit'
  | 'vpn-premium-unlimited'
  | 'vpn-iphone-shortcuts'
  | 'vpn-battery-iphone'
  | 'what-is-a-vpn'
  | 'how-vpn-works'
  | 'do-i-need-a-vpn'
  | 'vpn-for-beginners'
  | 'vpn-vs-proxy'
  | 'free-vpn-vs-paid'
  | 'what-is-dns-leak'
  | 'vpn-hotel-wifi'
  | 'vpn-airport-wifi'
  | 'vpn-for-remote-work'
  | 'vpn-for-students'
  | 'vpn-for-banking-apps'
  | 'wireguard-vs-ikev2'
  | 'what-is-kill-switch-vpn'
  | 'vpn-split-tunneling-ios'
  | 'vpn-not-connecting-iphone'
  | 'vpn-slow-iphone'
  | 'captive-portal-vpn-iphone';

export const EXTRA_LANDING_SLUGS: readonly ExtraLandingSlug[] = [
  'vless-reality-ios',
  'vpn-free-weekly-limit',
  'vpn-premium-unlimited',
  'vpn-iphone-shortcuts',
  'vpn-battery-iphone',
  'what-is-a-vpn',
  'how-vpn-works',
  'do-i-need-a-vpn',
  'vpn-for-beginners',
  'vpn-vs-proxy',
  'free-vpn-vs-paid',
  'what-is-dns-leak',
  'vpn-hotel-wifi',
  'vpn-airport-wifi',
  'vpn-for-remote-work',
  'vpn-for-students',
  'vpn-for-banking-apps',
  'wireguard-vs-ikev2',
  'what-is-kill-switch-vpn',
  'vpn-split-tunneling-ios',
  'vpn-not-connecting-iphone',
  'vpn-slow-iphone',
  'captive-portal-vpn-iphone',
];

const EXTRA_LABELS: Record<ExtraLandingSlug, Record<AppLang, string>> = {
  'vless-reality-ios': {
    en: 'VLESS Reality',
    ru: 'VLESS Reality',
    uk: 'VLESS Reality',
    de: 'VLESS Reality',
    es: 'VLESS Reality',
    fr: 'VLESS Reality',
    pt: 'VLESS Reality',
  },
  'vpn-free-weekly-limit': {
    en: 'Free weekly traffic',
    ru: 'Недельный лимит Free',
    uk: 'Тижневий ліміт Free',
    de: 'Free-Wochenverkehr',
    es: 'Tráfico semanal Free',
    fr: 'Trafic hebdo Free',
    pt: 'Tráfego semanal Free',
  },
  'vpn-premium-unlimited': {
    en: 'Premium unlimited',
    ru: 'Premium безлимит',
    uk: 'Premium безліміт',
    de: 'Premium unbegrenzt',
    es: 'Premium ilimitado',
    fr: 'Premium illimité',
    pt: 'Premium ilimitado',
  },
  'vpn-iphone-shortcuts': {
    en: 'Apple Shortcuts',
    ru: 'Команды Apple',
    uk: 'Команди Apple',
    de: 'Apple Shortcuts',
    es: 'Apple Shortcuts',
    fr: 'Apple Shortcuts',
    pt: 'Apple Shortcuts',
  },
  'vpn-battery-iphone': {
    en: 'VPN battery on iPhone',
    ru: 'VPN и батарея iPhone',
    uk: 'VPN і батарея iPhone',
    de: 'VPN-Akku auf dem iPhone',
    es: 'Batería VPN en iPhone',
    fr: 'Batterie VPN sur iPhone',
    pt: 'Bateria VPN no iPhone',
  },
  'what-is-a-vpn': {
    en: 'What is a VPN?',
    ru: 'Что такое VPN?',
    uk: 'Що таке VPN?',
    de: 'Was ist ein VPN?',
    es: '¿Qué es una VPN?',
    fr: 'Qu’est-ce qu’un VPN ?',
    pt: 'O que é uma VPN?',
  },
  'how-vpn-works': {
    en: 'How a VPN works',
    ru: 'Как работает VPN',
    uk: 'Як працює VPN',
    de: 'Wie ein VPN funktioniert',
    es: 'Cómo funciona una VPN',
    fr: 'Comment fonctionne un VPN',
    pt: 'Como uma VPN funciona',
  },
  'do-i-need-a-vpn': {
    en: 'Do I need a VPN?',
    ru: 'Нужен ли мне VPN?',
    uk: 'Чи потрібен мені VPN?',
    de: 'Brauche ich ein VPN?',
    es: '¿Necesito una VPN?',
    fr: 'Ai-je besoin d’un VPN ?',
    pt: 'Preciso de uma VPN?',
  },
  'vpn-for-beginners': {
    en: 'VPN for beginners',
    ru: 'VPN для новичков',
    uk: 'VPN для новачків',
    de: 'VPN für Einsteiger',
    es: 'VPN para principiantes',
    fr: 'VPN pour débutants',
    pt: 'VPN para iniciantes',
  },
  'vpn-vs-proxy': {
    en: 'VPN vs proxy',
    ru: 'VPN vs прокси',
    uk: 'VPN vs проксі',
    de: 'VPN vs. Proxy',
    es: 'VPN vs proxy',
    fr: 'VPN vs proxy',
    pt: 'VPN vs proxy',
  },
  'free-vpn-vs-paid': {
    en: 'Free VPN vs paid',
    ru: 'Бесплатный VPN vs платный',
    uk: 'Безкоштовний VPN vs платний',
    de: 'Free-VPN vs. Paid',
    es: 'VPN Free vs de pago',
    fr: 'VPN Free vs payant',
    pt: 'VPN Free vs paga',
  },
  'what-is-dns-leak': {
    en: 'DNS leaks',
    ru: 'DNS-утечки',
    uk: 'DNS-витоки',
    de: 'DNS-Leaks',
    es: 'Fugas DNS',
    fr: 'Fuites DNS',
    pt: 'Vazamentos DNS',
  },
  'vpn-hotel-wifi': {
    en: 'Hotel Wi‑Fi VPN',
    ru: 'VPN в отельном Wi‑Fi',
    uk: 'VPN у готельному Wi‑Fi',
    de: 'Hotel-WLAN-VPN',
    es: 'VPN en Wi‑Fi de hotel',
    fr: 'VPN Wi‑Fi d’hôtel',
    pt: 'VPN no Wi‑Fi de hotel',
  },
  'vpn-airport-wifi': {
    en: 'Airport Wi‑Fi VPN',
    ru: 'VPN в аэропорту',
    uk: 'VPN в аеропорту',
    de: 'Flughafen-WLAN-VPN',
    es: 'VPN en Wi‑Fi de aeropuerto',
    fr: 'VPN Wi‑Fi d’aéroport',
    pt: 'VPN no Wi‑Fi de aeroporto',
  },
  'vpn-for-remote-work': {
    en: 'VPN for remote work',
    ru: 'VPN для удалёнки',
    uk: 'VPN для віддаленої роботи',
    de: 'VPN für Remote Work',
    es: 'VPN para trabajo remoto',
    fr: 'VPN pour le télétravail',
    pt: 'VPN para trabalho remoto',
  },
  'vpn-for-students': {
    en: 'VPN for students',
    ru: 'VPN для студентов',
    uk: 'VPN для студентів',
    de: 'VPN für Studierende',
    es: 'VPN para estudiantes',
    fr: 'VPN pour étudiants',
    pt: 'VPN para estudantes',
  },
  'vpn-for-banking-apps': {
    en: 'VPN for banking apps',
    ru: 'VPN для банковских приложений',
    uk: 'VPN для банківських застосунків',
    de: 'VPN für Banking-Apps',
    es: 'VPN para apps bancarias',
    fr: 'VPN pour apps bancaires',
    pt: 'VPN para apps bancários',
  },
  'wireguard-vs-ikev2': {
    en: 'WireGuard vs IKEv2',
    ru: 'WireGuard vs IKEv2',
    uk: 'WireGuard vs IKEv2',
    de: 'WireGuard vs. IKEv2',
    es: 'WireGuard vs IKEv2',
    fr: 'WireGuard vs IKEv2',
    pt: 'WireGuard vs IKEv2',
  },
  'what-is-kill-switch-vpn': {
    en: 'What is a kill switch?',
    ru: 'Что такое kill switch?',
    uk: 'Що таке kill switch?',
    de: 'Was ist ein Kill Switch?',
    es: '¿Qué es un kill switch?',
    fr: 'Qu’est-ce qu’un kill switch ?',
    pt: 'O que é um kill switch?',
  },
  'vpn-split-tunneling-ios': {
    en: 'Split tunneling on iOS',
    ru: 'Split tunneling на iOS',
    uk: 'Split tunneling на iOS',
    de: 'Split Tunneling auf iOS',
    es: 'Split tunneling en iOS',
    fr: 'Split tunneling sur iOS',
    pt: 'Split tunneling no iOS',
  },
  'vpn-not-connecting-iphone': {
    en: 'VPN not connecting',
    ru: 'VPN не подключается',
    uk: 'VPN не підключається',
    de: 'VPN verbindet nicht',
    es: 'VPN no conecta',
    fr: 'VPN ne se connecte pas',
    pt: 'VPN não conecta',
  },
  'vpn-slow-iphone': {
    en: 'VPN is slow',
    ru: 'VPN тормозит',
    uk: 'VPN гальмує',
    de: 'VPN ist langsam',
    es: 'La VPN va lenta',
    fr: 'Le VPN est lent',
    pt: 'VPN está lenta',
  },
  'captive-portal-vpn-iphone': {
    en: 'Captive portal + VPN',
    ru: 'Страница входа Wi‑Fi и VPN',
    uk: 'Captive portal і VPN',
    de: 'Captive Portal + VPN',
    es: 'Captive portal + VPN',
    fr: 'Captive portal + VPN',
    pt: 'Captive portal + VPN',
  },
};

export function isExtraLandingSlug(value: string): value is ExtraLandingSlug {
  return (EXTRA_LANDING_SLUGS as readonly string[]).includes(value);
}

export function extraLandingLabel(slug: ExtraLandingSlug, lang: AppLang): string {
  return EXTRA_LABELS[slug][lang] ?? EXTRA_LABELS[slug].en;
}
