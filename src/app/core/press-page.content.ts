import { AppLang } from './i18n.service';

export type PressLink = {
  label: string;
  href: string;
};

export type PressAsset = {
  label: string;
  href: string;
  /** Path for on-page preview (same as href for PNG assets). */
  preview: string;
  kind: 'logo' | 'icon' | 'og';
};

export type PressKit = {
  kicker: string;
  h1: string;
  lead: string;
  boilerplateTitle: string;
  boilerplate: string;
  linksTitle: string;
  links: PressLink[];
  guidanceTitle: string;
  sayTitle: string;
  say: string[];
  avoidTitle: string;
  avoid: string[];
  brandTitle: string;
  brandNoteBefore: string;
  brandNoteAfter: string;
  supportEmail: string;
  assets: PressAsset[];
  factsTitle: string;
  facts: string[];
};

const SITE = 'https://follow-net.com';
const APP_STORE =
  'https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829';
const CHROME =
  'https://chromewebstore.google.com/detail/follownet-vpn/chgbhiifkahijoochbdegfalclniokhk';
const PRIVACY = `${SITE}/privacy`;
const LOGO = '/assets/new_logo.png';
const ICON = '/assets/logo-180.png';
const OG = '/og/og.png';
const SUPPORT = 'support@follow-net.com';

function assets(labels: { logo: string; icon: string; og: string }): PressAsset[] {
  return [
    { label: labels.logo, href: LOGO, preview: LOGO, kind: 'logo' },
    { label: labels.icon, href: ICON, preview: ICON, kind: 'icon' },
    { label: labels.og, href: OG, preview: OG, kind: 'og' },
  ];
}

function links(labels: {
  website: string;
  appStore: string;
  chrome: string;
  privacy: string;
}): PressLink[] {
  return [
    { label: labels.website, href: SITE },
    { label: labels.appStore, href: APP_STORE },
    { label: labels.chrome, href: CHROME },
    { label: labels.privacy, href: PRIVACY },
    { label: SUPPORT, href: `mailto:${SUPPORT}` },
  ];
}

const PRESS: Record<AppLang, PressKit> = {
  en: {
    kicker: 'Press',
    h1: 'FollowNet press kit',
    lead:
      'Facts and brand files for journalists, directories, and partners. Cite FollowNet from this page — no fake audits, no inflated server counts.',
    boilerplateTitle: 'Boilerplate',
    boilerplate:
      'FollowNet is an iOS VPN for iPhone and iPad with a Chrome browser extension. It ships WireGuard, IKEv2, AmneziaWG, Hysteria2, and VLESS Reality, plus Smart Connect for restrictive networks. Free includes a weekly traffic allowance; Premium unlocks unlimited traffic and up to 5 devices via the App Store.',
    linksTitle: 'Key links',
    links: links({
      website: 'Website',
      appStore: 'App Store',
      chrome: 'Chrome Web Store',
      privacy: 'Privacy',
    }),
    guidanceTitle: 'What to say',
    sayTitle: 'Accurate',
    say: [
      'Weekly Free traffic limit; Premium is unlimited',
      'Five protocols including VLESS Reality',
      'Smart Connect for restrictive networks',
      'Email-code login; Chrome is browser-only',
    ],
    avoidTitle: 'Avoid',
    avoid: [
      '“Unlimited free forever”',
      'Fake independent audit badges',
      'Invented country or server counts',
      'Claiming full macOS / Android apps today',
      'iOS leak-blocking kill switch (that’s in Chrome)',
    ],
    brandTitle: 'Brand files',
    brandNoteBefore: 'Need a quote or another export — ',
    brandNoteAfter: '.',
    supportEmail: SUPPORT,
    assets: assets({
      logo: 'Logo',
      icon: 'App icon',
      og: 'Social / OG',
    }),
    factsTitle: 'At a glance',
    facts: [
      'iOS VPN + Chrome extension',
      'Free weekly · Premium unlimited',
      'WireGuard · AmneziaWG · Hysteria2 · VLESS Reality · IKEv2',
      SUPPORT,
    ],
  },
  ru: {
    kicker: 'Пресса',
    h1: 'FollowNet — пресс‑кит',
    lead:
      'Факты и бренд‑файлы для журналистов, каталогов и партнёров. Упоминайте FollowNet по этой странице — без фейковых аудитов и завышенных цифр.',
    boilerplateTitle: 'О продукте',
    boilerplate:
      'FollowNet — VPN для iPhone и iPad плюс расширение Chrome. Протоколы: WireGuard, IKEv2, AmneziaWG, Hysteria2 и VLESS Reality, плюс Smart Connect. Free — с недельным лимитом; Premium — безлимит и до 5 устройств через App Store.',
    linksTitle: 'Ссылки',
    links: links({
      website: 'Сайт',
      appStore: 'App Store',
      chrome: 'Chrome Web Store',
      privacy: 'Privacy',
    }),
    guidanceTitle: 'Что писать',
    sayTitle: 'Верно',
    say: [
      'Недельный лимит Free; Premium безлимит',
      'Пять протоколов, включая VLESS Reality',
      'Smart Connect для сложных сетей',
      'Вход по email‑коду; Chrome только браузер',
    ],
    avoidTitle: 'Не писать',
    avoid: [
      '«Бесплатный безлимит навсегда»',
      'Фейковые независимые аудиты',
      'Выдуманные страны и число серверов',
      'Полноценные macOS / Android «уже сейчас»',
      'Kill switch утечек на iOS (он в Chrome)',
    ],
    brandTitle: 'Бренд‑файлы',
    brandNoteBefore: 'Нужна цитата или другой экспорт — ',
    brandNoteAfter: '.',
    supportEmail: SUPPORT,
    assets: assets({
      logo: 'Логотип',
      icon: 'Иконка',
      og: 'Для соцсетей',
    }),
    factsTitle: 'Коротко',
    facts: [
      'iOS VPN + расширение Chrome',
      'Free — неделя · Premium — безлимит',
      'WireGuard · AmneziaWG · Hysteria2 · VLESS Reality · IKEv2',
      SUPPORT,
    ],
  },
  uk: {
    kicker: 'Преса',
    h1: 'FollowNet — прес‑кіт',
    lead:
      'Факти та бренд‑файли для журналістів, каталогів і партнерів. Згадуйте FollowNet за цією сторінкою — без фейкових аудитів.',
    boilerplateTitle: 'Про продукт',
    boilerplate:
      'FollowNet — VPN для iPhone і iPad плюс розширення Chrome. Протоколи: WireGuard, IKEv2, AmneziaWG, Hysteria2 і VLESS Reality, плюс Smart Connect. Free — з тижневим лімітом; Premium — безліміт і до 5 пристроїв через App Store.',
    linksTitle: 'Посилання',
    links: links({
      website: 'Сайт',
      appStore: 'App Store',
      chrome: 'Chrome Web Store',
      privacy: 'Privacy',
    }),
    guidanceTitle: 'Що писати',
    sayTitle: 'Вірно',
    say: [
      'Тижневий ліміт Free; Premium безліміт',
      'П’ять протоколів, включно з VLESS Reality',
      'Smart Connect для складних мереж',
      'Вхід за email‑кодом; Chrome лише браузер',
    ],
    avoidTitle: 'Не писати',
    avoid: [
      '«Безліміт назавжди безкоштовно»',
      'Фейкові незалежні аудити',
      'Вигадані країни й кількість серверів',
      'Повноцінні macOS / Android «вже зараз»',
      'Kill switch витоків на iOS (є в Chrome)',
    ],
    brandTitle: 'Бренд‑файли',
    brandNoteBefore: 'Цитата чи інший експорт — ',
    brandNoteAfter: '.',
    supportEmail: SUPPORT,
    assets: assets({
      logo: 'Логотип',
      icon: 'Іконка',
      og: 'Для соцмереж',
    }),
    factsTitle: 'Коротко',
    facts: [
      'iOS VPN + Chrome',
      'Free — тиждень · Premium — безліміт',
      '5 протоколів включно з VLESS Reality',
      SUPPORT,
    ],
  },
  de: {
    kicker: 'Presse',
    h1: 'FollowNet Presse-Kit',
    lead:
      'Fakten und Brand-Dateien für Journalisten, Verzeichnisse und Partner. Bitte FollowNet über diese Seite erwähnen — ohne Fake-Audits.',
    boilerplateTitle: 'Kurzbeschreibung',
    boilerplate:
      'FollowNet ist ein iOS-VPN für iPhone und iPad plus Chrome-Erweiterung. Protokolle: WireGuard, IKEv2, AmneziaWG, Hysteria2 und VLESS Reality, dazu Smart Connect. Free mit Wochenlimit; Premium unbegrenzt und bis zu 5 Geräte über den App Store.',
    linksTitle: 'Links',
    links: links({
      website: 'Website',
      appStore: 'App Store',
      chrome: 'Chrome Web Store',
      privacy: 'Datenschutz',
    }),
    guidanceTitle: 'Formulierung',
    sayTitle: 'Korrekt',
    say: [
      'Free-Wochenlimit; Premium unbegrenzt',
      'Fünf Protokolle inkl. VLESS Reality',
      'Smart Connect für restriktive Netze',
      'E-Mail-Code-Login; Chrome nur Browser',
    ],
    avoidTitle: 'Vermeiden',
    avoid: [
      '„Unbegrenzt kostenlos für immer“',
      'Fake-Audits',
      'Erfundene Länder-/Serverzahlen',
      'Vollständige macOS-/Android-Apps jetzt',
      'iOS-Leak-Kill-Switch (gibt es in Chrome)',
    ],
    brandTitle: 'Brand-Dateien',
    brandNoteBefore: 'Zitat oder anderes Format: ',
    brandNoteAfter: '.',
    supportEmail: SUPPORT,
    assets: assets({
      logo: 'Logo',
      icon: 'App-Icon',
      og: 'Social / OG',
    }),
    factsTitle: 'Kurz',
    facts: [
      'iOS-VPN + Chrome-Erweiterung',
      'Free wöchentlich · Premium unbegrenzt',
      'WireGuard · AmneziaWG · Hysteria2 · VLESS Reality · IKEv2',
      SUPPORT,
    ],
  },
  es: {
    kicker: 'Prensa',
    h1: 'Kit de prensa FollowNet',
    lead:
      'Hechos y archivos de marca para periodistas, directorios y partners. Menciona FollowNet con esta página — sin auditorías falsas.',
    boilerplateTitle: 'Resumen',
    boilerplate:
      'FollowNet es un VPN para iPhone e iPad más extensión de Chrome. Protocolos: WireGuard, IKEv2, AmneziaWG, Hysteria2 y VLESS Reality, más Smart Connect. Free con límite semanal; Premium ilimitado y hasta 5 dispositivos vía App Store.',
    linksTitle: 'Enlaces',
    links: links({
      website: 'Web',
      appStore: 'App Store',
      chrome: 'Chrome Web Store',
      privacy: 'Privacidad',
    }),
    guidanceTitle: 'Qué decir',
    sayTitle: 'Correcto',
    say: [
      'Límite semanal Free; Premium ilimitado',
      'Cinco protocolos, incl. VLESS Reality',
      'Smart Connect para redes restrictivas',
      'Login por código email; Chrome solo navegador',
    ],
    avoidTitle: 'Evitar',
    avoid: [
      '“Gratis ilimitado para siempre”',
      'Auditorías falsas',
      'Países o servidores inventados',
      'Apps macOS / Android completas ya',
      'Kill switch anti-fugas en iOS (está en Chrome)',
    ],
    brandTitle: 'Archivos de marca',
    brandNoteBefore: 'Cita u otro formato: ',
    brandNoteAfter: '.',
    supportEmail: SUPPORT,
    assets: assets({
      logo: 'Logo',
      icon: 'Icono',
      og: 'Social / OG',
    }),
    factsTitle: 'En breve',
    facts: [
      'VPN iOS + extensión Chrome',
      'Free semanal · Premium ilimitado',
      '5 protocolos incl. VLESS Reality',
      SUPPORT,
    ],
  },
  fr: {
    kicker: 'Presse',
    h1: 'Kit presse FollowNet',
    lead:
      'Faits et fichiers de marque pour journalistes, annuaires et partenaires. Citez FollowNet via cette page — sans faux audits.',
    boilerplateTitle: 'En bref',
    boilerplate:
      'FollowNet est un VPN iOS pour iPhone et iPad plus une extension Chrome. Protocoles : WireGuard, IKEv2, AmneziaWG, Hysteria2 et VLESS Reality, plus Smart Connect. Free avec quota hebdo ; Premium illimité et jusqu’à 5 appareils via l’App Store.',
    linksTitle: 'Liens',
    links: links({
      website: 'Site',
      appStore: 'App Store',
      chrome: 'Chrome Web Store',
      privacy: 'Confidentialité',
    }),
    guidanceTitle: 'Formulation',
    sayTitle: 'Exact',
    say: [
      'Quota Free hebdo ; Premium illimité',
      'Cinq protocoles dont VLESS Reality',
      'Smart Connect pour réseaux restrictifs',
      'Connexion par code e-mail ; Chrome navigateur uniquement',
    ],
    avoidTitle: 'À éviter',
    avoid: [
      '« Gratuit illimité pour toujours »',
      'Faux audits',
      'Pays ou serveurs inventés',
      'Apps macOS / Android complètes déjà',
      'Kill switch anti-fuite iOS (présent dans Chrome)',
    ],
    brandTitle: 'Fichiers de marque',
    brandNoteBefore: 'Citation ou autre export : ',
    brandNoteAfter: '.',
    supportEmail: SUPPORT,
    assets: assets({
      logo: 'Logo',
      icon: 'Icône',
      og: 'Social / OG',
    }),
    factsTitle: 'En un coup d’œil',
    facts: [
      'VPN iOS + extension Chrome',
      'Free hebdo · Premium illimité',
      '5 protocoles dont VLESS Reality',
      SUPPORT,
    ],
  },
  pt: {
    kicker: 'Imprensa',
    h1: 'Kit de imprensa FollowNet',
    lead:
      'Fatos e arquivos de marca para jornalistas, diretórios e parceiros. Mencione o FollowNet por esta página — sem auditorias falsas.',
    boilerplateTitle: 'Resumo',
    boilerplate:
      'FollowNet é um VPN para iPhone e iPad mais extensão do Chrome. Protocolos: WireGuard, IKEv2, AmneziaWG, Hysteria2 e VLESS Reality, mais Smart Connect. Free com limite semanal; Premium ilimitado e até 5 dispositivos via App Store.',
    linksTitle: 'Links',
    links: links({
      website: 'Site',
      appStore: 'App Store',
      chrome: 'Chrome Web Store',
      privacy: 'Privacidade',
    }),
    guidanceTitle: 'O que dizer',
    sayTitle: 'Correto',
    say: [
      'Limite semanal Free; Premium ilimitado',
      'Cinco protocolos, incl. VLESS Reality',
      'Smart Connect para redes restritivas',
      'Login por código de e-mail; Chrome só navegador',
    ],
    avoidTitle: 'Evitar',
    avoid: [
      '“Grátis ilimitado para sempre”',
      'Auditorias falsas',
      'Países ou servidores inventados',
      'Apps macOS / Android completos já',
      'Kill switch anti-vazamento no iOS (existe no Chrome)',
    ],
    brandTitle: 'Arquivos de marca',
    brandNoteBefore: 'Citação ou outro export: ',
    brandNoteAfter: '.',
    supportEmail: SUPPORT,
    assets: assets({
      logo: 'Logo',
      icon: 'Ícone',
      og: 'Social / OG',
    }),
    factsTitle: 'Em resumo',
    facts: [
      'VPN iOS + extensão Chrome',
      'Free semanal · Premium ilimitado',
      '5 protocolos incl. VLESS Reality',
      SUPPORT,
    ],
  },
};

export function pressKit(lang: AppLang): PressKit {
  return PRESS[lang];
}
