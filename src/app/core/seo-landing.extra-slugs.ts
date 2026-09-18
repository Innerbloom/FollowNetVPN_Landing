import type { AppLang } from './i18n.service';
/** Lightweight EXTRA slug + label map (keeps heavy guides out of the initial bundle). */
export type ExtraLandingSlug =
  | 'vless-reality-ios'
  | 'vpn-kill-switch-chrome'
  | 'vpn-vs-proxy-chrome'
  | 'vpn-ad-blocking-chrome'
  | 'vpn-site-routing-chrome'
  | 'vpn-email-login'
  | 'vpn-qr-login'
  | 'vpn-family-devices'
  | 'vpn-free-weekly-limit'
  | 'vpn-premium-unlimited'
  | 'vpn-iphone-shortcuts'
  | 'vpn-dns-adguard'
  | 'vpn-battery-iphone'
  | 'vpn-speed-nearby-server'
  | 'how-to-change-vpn-server'
  | 'what-is-a-vpn'
  | 'how-vpn-works'
  | 'do-i-need-a-vpn'
  | 'vpn-for-beginners'
  | 'vpn-vs-proxy'
  | 'free-vpn-vs-paid'
  | 'what-is-dns-leak'
  | 'vpn-for-youtube'
  | 'vpn-for-netflix'
  | 'vpn-for-telegram'
  | 'vpn-for-instagram'
  | 'vpn-for-discord'
  | 'vpn-for-whatsapp'
  | 'vpn-for-tiktok'
  | 'vpn-hotel-wifi'
  | 'vpn-airport-wifi'
  | 'vpn-cafe-wifi'
  | 'vpn-for-remote-work'
  | 'vpn-for-students'
  | 'vpn-for-banking-apps'
  | 'obfuscated-vpn-ios'
  | 'wireguard-vs-ikev2'
  | 'what-is-kill-switch-vpn'
  | 'vpn-split-tunneling-ios'
  | 'vpn-not-connecting-iphone'
  | 'vpn-slow-iphone'
  | 'vpn-keeps-disconnecting-iphone'
  | 'captive-portal-vpn-iphone'
  | 'vpn-on-cellular-lte'
  | 'fastest-vpn-iphone'
  | 'no-account-vpn-iphone'
  | 'vpn-kill-switch-iphone'
  | 'hide-ip-iphone'
  | 'vpn-for-spotify';

export const EXTRA_LANDING_SLUGS: readonly ExtraLandingSlug[] = [
  'vless-reality-ios',
  'vpn-kill-switch-chrome',
  'vpn-vs-proxy-chrome',
  'vpn-ad-blocking-chrome',
  'vpn-site-routing-chrome',
  'vpn-email-login',
  'vpn-qr-login',
  'vpn-family-devices',
  'vpn-free-weekly-limit',
  'vpn-premium-unlimited',
  'vpn-iphone-shortcuts',
  'vpn-dns-adguard',
  'vpn-battery-iphone',
  'vpn-speed-nearby-server',
  'how-to-change-vpn-server',
  'what-is-a-vpn',
  'how-vpn-works',
  'do-i-need-a-vpn',
  'vpn-for-beginners',
  'vpn-vs-proxy',
  'free-vpn-vs-paid',
  'what-is-dns-leak',
  'vpn-for-youtube',
  'vpn-for-netflix',
  'vpn-for-telegram',
  'vpn-for-instagram',
  'vpn-for-discord',
  'vpn-for-whatsapp',
  'vpn-for-tiktok',
  'vpn-hotel-wifi',
  'vpn-airport-wifi',
  'vpn-cafe-wifi',
  'vpn-for-remote-work',
  'vpn-for-students',
  'vpn-for-banking-apps',
  'obfuscated-vpn-ios',
  'wireguard-vs-ikev2',
  'what-is-kill-switch-vpn',
  'vpn-split-tunneling-ios',
  'vpn-not-connecting-iphone',
  'vpn-slow-iphone',
  'vpn-keeps-disconnecting-iphone',
  'captive-portal-vpn-iphone',
  'vpn-on-cellular-lte',
  'fastest-vpn-iphone',
  'no-account-vpn-iphone',
  'vpn-kill-switch-iphone',
  'hide-ip-iphone',
  'vpn-for-spotify',
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
  'vpn-kill-switch-chrome': {
    en: 'Chrome Kill Switch',
    ru: 'Kill Switch в Chrome',
    uk: 'Kill Switch у Chrome',
    de: 'Chrome Kill Switch',
    es: 'Chrome Kill Switch',
    fr: 'Chrome Kill Switch',
    pt: 'Chrome Kill Switch',
  },
  'vpn-vs-proxy-chrome': {
    en: 'Chrome proxy vs iOS VPN',
    ru: 'Прокси Chrome vs VPN iOS',
    uk: 'Проксі Chrome vs VPN iOS',
    de: 'Chrome-Proxy vs. iOS-VPN',
    es: 'Proxy de Chrome vs VPN iOS',
    fr: 'Proxy Chrome vs VPN iOS',
    pt: 'Proxy Chrome vs VPN iOS',
  },
  'vpn-ad-blocking-chrome': {
    en: 'Chrome ad blocking',
    ru: 'Блокировка рекламы в Chrome',
    uk: 'Блокування реклами в Chrome',
    de: 'Chrome-Werbeblocker',
    es: 'Bloqueo de anuncios en Chrome',
    fr: 'Blocage pub Chrome',
    pt: 'Bloqueio de anúncios no Chrome',
  },
  'vpn-site-routing-chrome': {
    en: 'Chrome site routing',
    ru: 'Маршрутизация сайтов в Chrome',
    uk: 'Маршрутизація сайтів у Chrome',
    de: 'Chrome Site-Routing',
    es: 'Enrutado de sitios en Chrome',
    fr: 'Routage de sites Chrome',
    pt: 'Roteamento de sites no Chrome',
  },
  'vpn-email-login': {
    en: 'Email code login',
    ru: 'Вход по email-коду',
    uk: 'Вхід за email-кодом',
    de: 'E-Mail-Code-Login',
    es: 'Inicio con código de email',
    fr: 'Connexion par code e-mail',
    pt: 'Login com código de e-mail',
  },
  'vpn-qr-login': {
    en: 'QR login',
    ru: 'Вход по QR',
    uk: 'Вхід за QR',
    de: 'QR-Login',
    es: 'Inicio con QR',
    fr: 'Connexion QR',
    pt: 'Login por QR',
  },
  'vpn-family-devices': {
    en: 'Family devices & Premium seats',
    ru: 'Устройства семьи и места Premium',
    uk: 'Пристрої родини і місця Premium',
    de: 'Familien-Geräte & Premium-Plätze',
    es: 'Dispositivos familiares y asientos Premium',
    fr: 'Appareils famille & sièges Premium',
    pt: 'Dispositivos da família e assentos Premium',
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
  'vpn-dns-adguard': {
    en: 'AdGuard DNS profiles',
    ru: 'DNS AdGuard',
    uk: 'DNS AdGuard',
    de: 'AdGuard-DNS-Profile',
    es: 'Perfiles DNS AdGuard',
    fr: 'Profils DNS AdGuard',
    pt: 'Perfis DNS AdGuard',
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
  'vpn-speed-nearby-server': {
    en: 'Nearby servers & ping',
    ru: 'Ближние серверы и пинг',
    uk: 'Близькі сервери і пінг',
    de: 'Nahe Server & Ping',
    es: 'Servidores cercanos y ping',
    fr: 'Serveurs proches & ping',
    pt: 'Servidores próximos e ping',
  },
  'how-to-change-vpn-server': {
    en: 'Change VPN server',
    ru: 'Смена VPN-сервера',
    uk: 'Зміна VPN-сервера',
    de: 'VPN-Server wechseln',
    es: 'Cambiar servidor VPN',
    fr: 'Changer de serveur VPN',
    pt: 'Trocar servidor VPN',
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
  'vpn-for-youtube': {
    en: 'VPN for YouTube',
    ru: 'VPN для YouTube',
    uk: 'VPN для YouTube',
    de: 'VPN für YouTube',
    es: 'VPN para YouTube',
    fr: 'VPN pour YouTube',
    pt: 'VPN para YouTube',
  },
  'vpn-for-netflix': {
    en: 'VPN for Netflix',
    ru: 'VPN для Netflix',
    uk: 'VPN для Netflix',
    de: 'VPN für Netflix',
    es: 'VPN para Netflix',
    fr: 'VPN pour Netflix',
    pt: 'VPN para Netflix',
  },
  'vpn-for-telegram': {
    en: 'VPN for Telegram',
    ru: 'VPN для Telegram',
    uk: 'VPN для Telegram',
    de: 'VPN für Telegram',
    es: 'VPN para Telegram',
    fr: 'VPN pour Telegram',
    pt: 'VPN para Telegram',
  },
  'vpn-for-instagram': {
    en: 'VPN for Instagram',
    ru: 'VPN для Instagram',
    uk: 'VPN для Instagram',
    de: 'VPN für Instagram',
    es: 'VPN para Instagram',
    fr: 'VPN pour Instagram',
    pt: 'VPN para Instagram',
  },
  'vpn-for-discord': {
    en: 'VPN for Discord',
    ru: 'VPN для Discord',
    uk: 'VPN для Discord',
    de: 'VPN für Discord',
    es: 'VPN para Discord',
    fr: 'VPN pour Discord',
    pt: 'VPN para Discord',
  },
  'vpn-for-whatsapp': {
    en: 'VPN for Whatsapp',
    ru: 'VPN для WhatsApp',
    uk: 'VPN для WhatsApp',
    de: 'VPN für WhatsApp',
    es: 'VPN para WhatsApp',
    fr: 'VPN pour WhatsApp',
    pt: 'VPN para WhatsApp',
  },
  'vpn-for-tiktok': {
    en: 'VPN for TikTok',
    ru: 'VPN для TikTok',
    uk: 'VPN для TikTok',
    de: 'VPN für TikTok',
    es: 'VPN para TikTok',
    fr: 'VPN pour TikTok',
    pt: 'VPN para TikTok',
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
  'vpn-cafe-wifi': {
    en: 'Café Wi‑Fi VPN',
    ru: 'VPN в кафе',
    uk: 'VPN у кафе',
    de: 'Café-WLAN-VPN',
    es: 'VPN en Wi‑Fi de café',
    fr: 'VPN Wi‑Fi de café',
    pt: 'VPN no Wi‑Fi de café',
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
  'obfuscated-vpn-ios': {
    en: 'Obfuscated VPN',
    ru: 'Обфусцированный VPN',
    uk: 'Обфускований VPN',
    de: 'Obfuscated VPN',
    es: 'VPN ofuscada',
    fr: 'VPN obfusqué',
    pt: 'VPN ofuscada',
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
  'vpn-keeps-disconnecting-iphone': {
    en: 'VPN keeps disconnecting',
    ru: 'VPN отключается',
    uk: 'VPN відключається',
    de: 'VPN trennt sich ständig',
    es: 'La VPN se desconecta',
    fr: 'Le VPN se déconnecte',
    pt: 'VPN fica desconectando',
  },
  'captive-portal-vpn-iphone': {
    en: 'Captive portal + VPN',
    ru: 'Captive portal и VPN',
    uk: 'Captive portal і VPN',
    de: 'Captive Portal + VPN',
    es: 'Captive portal + VPN',
    fr: 'Captive portal + VPN',
    pt: 'Captive portal + VPN',
  },
  'vpn-on-cellular-lte': {
    en: 'VPN on cellular',
    ru: 'VPN на LTE',
    uk: 'VPN на LTE',
    de: 'VPN auf Mobilfunk',
    es: 'VPN en datos móviles',
    fr: 'VPN sur cellulaire',
    pt: 'VPN no celular',
  },
  'fastest-vpn-iphone': {
    en: 'Fastest VPN for iPhone',
    ru: 'Самый быстрый VPN для iPhone',
    uk: 'Найшвидший VPN для iPhone',
    de: 'Schnellstes VPN fürs iPhone',
    es: 'VPN más rápida para iPhone',
    fr: 'VPN le plus rapide pour iPhone',
    pt: 'VPN mais rápida para iPhone',
  },
  'no-account-vpn-iphone': {
    en: 'VPN without password',
    ru: 'VPN без пароля',
    uk: 'VPN без пароля',
    de: 'VPN ohne Passwort',
    es: 'VPN sin contraseña',
    fr: 'VPN sans mot de passe',
    pt: 'VPN sem senha',
  },
  'vpn-kill-switch-iphone': {
    en: 'Kill switch on iPhone',
    ru: 'Kill switch на iPhone',
    uk: 'Kill switch на iPhone',
    de: 'Kill Switch auf dem iPhone',
    es: 'Kill switch en iPhone',
    fr: 'Kill switch sur iPhone',
    pt: 'Kill switch no iPhone',
  },
  'hide-ip-iphone': {
    en: 'Hide IP on iPhone',
    ru: 'Скрыть IP на iPhone',
    uk: 'Приховати IP на iPhone',
    de: 'IP auf dem iPhone verbergen',
    es: 'Ocultar IP en iPhone',
    fr: 'Masquer l’IP sur iPhone',
    pt: 'Ocultar IP no iPhone',
  },
  'vpn-for-spotify': {
    en: 'VPN for Spotify',
    ru: 'VPN для Spotify',
    uk: 'VPN для Spotify',
    de: 'VPN für Spotify',
    es: 'VPN para Spotify',
    fr: 'VPN pour Spotify',
    pt: 'VPN para Spotify',
  },
};

export function isExtraLandingSlug(value: string): value is ExtraLandingSlug {
  return (EXTRA_LANDING_SLUGS as readonly string[]).includes(value);
}

export function extraLandingLabel(slug: ExtraLandingSlug, lang: AppLang): string {
  return EXTRA_LABELS[slug][lang] ?? EXTRA_LABELS[slug].en;
}
