import { AppLang } from './i18n.service';
import { getLandingSeoCopy, landingSlugFromPath } from './seo-landing.meta';
import { blogSeoMeta } from './blog-seo';

export type SeoCopy = {
  title: string;
  ogTitle: string;
  description: string;
  robots?: string;
};

const APP_STORE =
  'https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829';

export { APP_STORE };

export function getSeoCopy(lang: AppLang, path: string): SeoCopy {
  const clean = (path.split('?')[0] || '/').replace(/\/+$/, '') || '/';

  const landingSlug = landingSlugFromPath(clean);
  if (landingSlug) {
    return getLandingSeoCopy(landingSlug, lang);
  }

  if (clean === '/blog') {
    return blogIndexByLang[lang] ?? blogIndexByLang.en;
  }

  if (clean.startsWith('/blog/')) {
    const slug = clean.slice('/blog/'.length);
    const post = blogSeoMeta(slug, lang);
    if (post) {
      return {
        title: `${post.title} | FollowNet`,
        ogTitle: post.title,
        description: post.excerpt,
      };
    }
  }

  if (clean === '/guides') {
    return guidesByLang[lang];
  }
  if (clean === '/features') {
    return featuresByLang[lang];
  }
  if (clean === '/download') {
    return downloadByLang[lang];
  }
  if (clean === '/download/ios') {
    return downloadIosByLang[lang];
  }
  if (clean === '/download/chrome') {
    return downloadChromeByLang[lang];
  }
  if (clean === '/about') {
    return aboutByLang[lang];
  }
  if (clean === '/support') {
    return supportByLang[lang];
  }
  if (clean === '/status') {
    return statusByLang[lang];
  }

  if (clean.startsWith('/privacy')) {
    return privacyByLang[lang] ?? privacyByLang.en;
  }
  if (clean.startsWith('/terms')) {
    return termsByLang[lang] ?? termsByLang.en;
  }
  if (clean.startsWith('/checkout')) {
    return checkoutByLang[lang] ?? checkoutByLang.en;
  }
  return homeByLang[lang] ?? homeByLang.en;
}

const guidesByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'FollowNet guides — iOS VPN protocols & setup',
    ogTitle: 'FollowNet guides',
    description:
      'FollowNet VPN guides: iPhone setup, protocols, Smart Connect, weekly Free limits, public Wi‑Fi, travel, and the browser-only Chrome extension.',
  },
  ru: {
    title: 'Гайды FollowNet — протоколы и настройка VPN на iOS',
    ogTitle: 'Гайды FollowNet',
    description:
      'Гайды FollowNet: настройка VPN на iPhone, протоколы, Smart Connect, недельный лимит Free, публичный Wi‑Fi, поездки и расширение Chrome для браузера.',
  },
  uk: {
    title: 'Гайди FollowNet — протоколи та налаштування VPN на iOS',
    ogTitle: 'Гайди FollowNet',
    description:
      'Гайди FollowNet: налаштування VPN на iPhone, протоколи, Smart Connect, тижневий ліміт Free, публічний Wi‑Fi, подорожі та розширення Chrome для браузера.',
  },
  de: {
    title: 'FollowNet-Ratgeber — VPN-Protokolle und Einrichtung auf iOS',
    ogTitle: 'FollowNet-Ratgeber',
    description:
      'FollowNet-Ratgeber zu iPhone-Einrichtung, Protokollen, Smart Connect, dem wöchentlichen Free-Limit, öffentlichem WLAN, Reisen und der Chrome-Browsererweiterung.',
  },
  es: {
    title: 'Guías FollowNet — protocolos y configuración VPN en iOS',
    ogTitle: 'Guías FollowNet',
    description:
      'Guías sobre configuración en iPhone, protocolos, Smart Connect, límite semanal de Free, Wi‑Fi público, viajes y la extensión de navegador para Chrome.',
  },
  fr: {
    title: 'Guides FollowNet — protocoles et configuration VPN sur iOS',
    ogTitle: 'Guides FollowNet',
    description:
      'Guides sur la configuration iPhone, les protocoles, Smart Connect, le quota hebdomadaire Free, le Wi‑Fi public, les voyages et l’extension Chrome limitée au navigateur.',
  },
  pt: {
    title: 'Guias FollowNet — protocolos e configuração VPN no iOS',
    ogTitle: 'Guias FollowNet',
    description:
      'Guias sobre configuração no iPhone, protocolos, Smart Connect, limite semanal do Free, Wi‑Fi público, viagens e a extensão de navegador para Chrome.',
  },
};

const featuresByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'FollowNet features — Smart Connect, protocols, DNS',
    ogTitle: 'FollowNet features',
    description:
      'Explore FollowNet for iOS: supported VPN protocols, Smart Connect, DNS, Auto-connect, widgets, Speed Test, Free with a weekly traffic limit, and Premium.',
  },
  ru: {
    title: 'Возможности FollowNet — Smart Connect, протоколы, DNS',
    ogTitle: 'Возможности FollowNet',
    description:
      'Возможности FollowNet для iOS: VPN-протоколы, Smart Connect, DNS, автоподключение, виджеты, Speed Test, Free с недельным лимитом и Premium.',
  },
  uk: {
    title: 'Можливості FollowNet — Smart Connect, протоколи та DNS',
    ogTitle: 'Можливості FollowNet',
    description:
      'Можливості FollowNet для iOS: VPN-протоколи, Smart Connect, DNS, автопідключення, віджети, Speed Test, Free з тижневим лімітом і Premium.',
  },
  de: {
    title: 'FollowNet-Funktionen — Smart Connect, Protokolle und DNS',
    ogTitle: 'FollowNet-Funktionen',
    description:
      'FollowNet für iOS: VPN-Protokolle, Smart Connect, DNS, Auto-Verbindung, Widgets, Speedtest, Free mit wöchentlichem Datenlimit und Premium.',
  },
  es: {
    title: 'Funciones de FollowNet — Smart Connect, protocolos y DNS',
    ogTitle: 'Funciones de FollowNet',
    description:
      'FollowNet para iOS: protocolos VPN, Smart Connect, DNS, conexión automática, widgets, Speed Test, Free con límite semanal y Premium.',
  },
  fr: {
    title: 'Fonctions FollowNet — Smart Connect, protocoles et DNS',
    ogTitle: 'Fonctions FollowNet',
    description:
      'FollowNet pour iOS : protocoles VPN, Smart Connect, DNS, connexion automatique, widgets, Speed Test, offre Free avec quota hebdomadaire et Premium.',
  },
  pt: {
    title: 'Recursos do FollowNet — Smart Connect, protocolos e DNS',
    ogTitle: 'Recursos do FollowNet',
    description:
      'FollowNet para iOS: protocolos VPN, Smart Connect, DNS, conexão automática, widgets, Speed Test, Free com limite semanal e Premium.',
  },
};

const downloadByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'Download FollowNet VPN — iOS App Store & Chrome',
    ogTitle: 'Download FollowNet',
    description:
      'Get FollowNet for iPhone and iPad from the App Store, or install the Chrome extension for browser traffic on desktop. Chrome does not cover other apps.',
  },
  ru: {
    title: 'Скачать FollowNet VPN — iOS App Store и Chrome',
    ogTitle: 'Скачать FollowNet',
    description:
      'Скачайте FollowNet для iPhone и iPad в App Store или установите расширение Chrome для трафика браузера. Другие приложения на компьютере оно не защищает.',
  },
  uk: {
    title: 'Завантажити FollowNet VPN — App Store для iOS і Chrome',
    ogTitle: 'Завантажити FollowNet',
    description:
      'Завантажте FollowNet для iPhone та iPad з App Store або встановіть розширення Chrome для трафіку браузера. Інші програми на комп’ютері воно не захищає.',
  },
  de: {
    title: 'FollowNet VPN laden — iOS App Store und Chrome',
    ogTitle: 'FollowNet herunterladen',
    description:
      'Laden Sie FollowNet für iPhone und iPad im App Store oder installieren Sie die Chrome-Erweiterung für Browserdaten. Andere Desktop-Apps sind nicht abgedeckt.',
  },
  es: {
    title: 'Descargar FollowNet VPN — App Store para iOS y Chrome',
    ogTitle: 'Descargar FollowNet',
    description:
      'Descarga FollowNet para iPhone y iPad en App Store o instala la extensión de Chrome para el tráfico del navegador. No protege otras aplicaciones del ordenador.',
  },
  fr: {
    title: 'Télécharger FollowNet VPN — App Store iOS et Chrome',
    ogTitle: 'Télécharger FollowNet',
    description:
      'Téléchargez FollowNet pour iPhone et iPad dans l’App Store ou installez l’extension Chrome pour le trafic du navigateur. Les autres apps ne sont pas couvertes.',
  },
  pt: {
    title: 'Baixar FollowNet VPN — App Store para iOS e Chrome',
    ogTitle: 'Baixar FollowNet',
    description:
      'Baixe o FollowNet para iPhone e iPad na App Store ou instale a extensão do Chrome para o tráfego do navegador. Ela não protege outros aplicativos do computador.',
  },
};

const downloadIosByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'Install FollowNet on iPhone & iPad — App Store guide',
    ogTitle: 'FollowNet for iOS',
    description:
      'Install FollowNet on iPhone or iPad from the App Store, allow the required iOS VPN configuration, and make your first connection with Smart Connect or a chosen protocol.',
  },
  ru: {
    title: 'Установка FollowNet на iPhone и iPad — гайд App Store',
    ogTitle: 'FollowNet для iOS',
    description:
      'Установите FollowNet на iPhone или iPad из App Store, разрешите системную VPN-конфигурацию iOS и выполните первое подключение через Smart Connect или выбранный протокол.',
  },
  uk: {
    title: 'Встановлення FollowNet на iPhone та iPad — гайд App Store',
    ogTitle: 'FollowNet для iOS',
    description:
      'Встановіть FollowNet на iPhone або iPad з App Store, дозвольте системну VPN-конфігурацію iOS і виконайте перше підключення через Smart Connect або обраний протокол.',
  },
  de: {
    title: 'FollowNet auf iPhone und iPad installieren — App-Store-Anleitung',
    ogTitle: 'FollowNet für iOS',
    description:
      'Installieren Sie FollowNet aus dem App Store, erlauben Sie die erforderliche iOS-VPN-Konfiguration und verbinden Sie sich mit Smart Connect oder einem gewählten Protokoll.',
  },
  es: {
    title: 'Instalar FollowNet en iPhone y iPad — guía de App Store',
    ogTitle: 'FollowNet para iOS',
    description:
      'Instala FollowNet desde App Store, permite la configuración VPN requerida por iOS y realiza la primera conexión con Smart Connect o el protocolo que elijas.',
  },
  fr: {
    title: 'Installer FollowNet sur iPhone et iPad — guide App Store',
    ogTitle: 'FollowNet pour iOS',
    description:
      'Installez FollowNet depuis l’App Store, autorisez la configuration VPN requise par iOS et lancez la première connexion avec Smart Connect ou le protocole choisi.',
  },
  pt: {
    title: 'Instalar FollowNet no iPhone e iPad — guia da App Store',
    ogTitle: 'FollowNet para iOS',
    description:
      'Instale o FollowNet pela App Store, permita a configuração VPN exigida pelo iOS e faça a primeira conexão com o Smart Connect ou o protocolo escolhido.',
  },
};

const downloadChromeByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'FollowNet Chrome extension — download & setup',
    ogTitle: 'FollowNet for Chrome',
    description:
      'Install FollowNet from the Chrome Web Store to route supported Chrome browser traffic. The extension is not a full-device VPN for desktop apps.',
  },
  ru: {
    title: 'Расширение FollowNet для Chrome — установка',
    ogTitle: 'FollowNet для Chrome',
    description:
      'Установите FollowNet из Chrome Web Store для поддерживаемого трафика Chrome. Расширение не является системным VPN для всех приложений компьютера.',
  },
  uk: {
    title: 'Розширення FollowNet для Chrome — встановлення',
    ogTitle: 'FollowNet для Chrome',
    description:
      'Встановіть FollowNet із Chrome Web Store для підтримуваного трафіку Chrome. Розширення не є системним VPN для всіх програм комп’ютера.',
  },
  de: {
    title: 'FollowNet Chrome-Erweiterung — Download und Einrichtung',
    ogTitle: 'FollowNet für Chrome',
    description:
      'Installieren Sie FollowNet aus dem Chrome Web Store für unterstützten Chrome-Datenverkehr. Die Erweiterung ist kein systemweites VPN für Desktop-Apps.',
  },
  es: {
    title: 'Extensión FollowNet para Chrome — descarga y configuración',
    ogTitle: 'FollowNet para Chrome',
    description:
      'Instala FollowNet desde Chrome Web Store para el tráfico compatible de Chrome. La extensión no es una VPN completa para las aplicaciones del ordenador.',
  },
  fr: {
    title: 'Extension FollowNet pour Chrome — installation',
    ogTitle: 'FollowNet pour Chrome',
    description:
      'Installez FollowNet depuis le Chrome Web Store pour le trafic Chrome pris en charge. L’extension n’est pas un VPN système pour les applications de l’ordinateur.',
  },
  pt: {
    title: 'Extensão FollowNet para Chrome — download e configuração',
    ogTitle: 'FollowNet para Chrome',
    description:
      'Instale o FollowNet pela Chrome Web Store para o tráfego compatível do Chrome. A extensão não é uma VPN de sistema para os aplicativos do computador.',
  },
};

const aboutByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'About FollowNet — honest iOS VPN & Chrome extension',
    ogTitle: 'About FollowNet',
    description:
      'Who builds FollowNet, what ships today on iOS and Chrome, Free weekly vs Premium, and what is not ready yet — without fake audits.',
  },
  ru: {
    title: 'О FollowNet — честный VPN для iOS и Chrome',
    ogTitle: 'О FollowNet',
    description:
      'Кто делает FollowNet, что есть в iOS и Chrome, Free с недельным лимитом vs Premium и чего пока нет — без фейковых аудитов.',
  },
  uk: {
    title: 'Про FollowNet — чесний VPN для iOS і Chrome',
    ogTitle: 'Про FollowNet',
    description:
      'Хто робить FollowNet, що є в iOS і Chrome, Free з тижневим лімітом vs Premium і чого поки немає — без фейкових аудитів.',
  },
  de: {
    title: 'Über FollowNet — ehrliches iOS‑VPN & Chrome‑Erweiterung',
    ogTitle: 'Über FollowNet',
    description:
      'Wer FollowNet baut, was heute auf iOS und Chrome verfügbar ist, Free mit Wochenlimit vs Premium — ohne Fake‑Audits.',
  },
  es: {
    title: 'Sobre FollowNet — VPN iOS y extensión Chrome honestos',
    ogTitle: 'Sobre FollowNet',
    description:
      'Quién hace FollowNet, qué hay hoy en iOS y Chrome, Free con límite semanal vs Premium — sin auditorías falsas.',
  },
  fr: {
    title: 'À propos de FollowNet — VPN iOS et extension Chrome',
    ogTitle: 'À propos de FollowNet',
    description:
      'Qui construit FollowNet, ce qui existe sur iOS et Chrome, Free avec quota hebdo vs Premium — sans faux audits.',
  },
  pt: {
    title: 'Sobre o FollowNet — VPN iOS e extensão Chrome honestos',
    ogTitle: 'Sobre o FollowNet',
    description:
      'Quem faz o FollowNet, o que existe no iOS e Chrome, Free com limite semanal vs Premium — sem auditorias falsas.',
  },
};

const supportByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'FollowNet support — connection, billing, Chrome',
    ogTitle: 'FollowNet support',
    description:
      'Help for VPN connection issues, Free weekly limits, Premium, App Store trial/restore, and the Chrome browser extension.',
  },
  ru: {
    title: 'Поддержка FollowNet — связь, оплата, Chrome',
    ogTitle: 'Поддержка FollowNet',
    description:
      'Помощь с подключением VPN, недельным лимитом Free, Premium, trial/restore App Store и расширением Chrome.',
  },
  uk: {
    title: 'Підтримка FollowNet — зв’язок, оплата, Chrome',
    ogTitle: 'Підтримка FollowNet',
    description:
      'Допомога з підключенням VPN, тижневим лімітом Free, Premium, trial/restore App Store і розширенням Chrome.',
  },
  de: {
    title: 'FollowNet Support — Verbindung, Abo, Chrome',
    ogTitle: 'FollowNet Support',
    description:
      'Hilfe bei VPN‑Verbindung, Free‑Wochenlimit, Premium, App‑Store‑Test/Wiederherstellen und Chrome‑Erweiterung.',
  },
  es: {
    title: 'Soporte FollowNet — conexión, pago, Chrome',
    ogTitle: 'Soporte FollowNet',
    description:
      'Ayuda con conexión VPN, límite semanal Free, Premium, prueba/restaurar App Store y extensión Chrome.',
  },
  fr: {
    title: 'Support FollowNet — connexion, abonnement, Chrome',
    ogTitle: 'Support FollowNet',
    description:
      'Aide pour la connexion VPN, le quota Free hebdo, Premium, essai/restauration App Store et extension Chrome.',
  },
  pt: {
    title: 'Suporte FollowNet — ligação, pagamento, Chrome',
    ogTitle: 'Suporte FollowNet',
    description:
      'Ajuda com ligação VPN, limite semanal Free, Premium, teste/restauro App Store e extensão Chrome.',
  },
};

const statusByLang: Record<AppLang, SeoCopy> = {
  en: {
    title: 'FollowNet status',
    ogTitle: 'FollowNet status',
    description: 'Public operational notes for the FollowNet website, iOS App Store app, and Chrome extension.',
  },
  ru: {
    title: 'Статус FollowNet',
    ogTitle: 'Статус FollowNet',
    description: 'Публичные заметки о работе сайта FollowNet, приложения App Store и расширения Chrome.',
  },
  uk: {
    title: 'Статус FollowNet',
    ogTitle: 'Статус FollowNet',
    description: 'Публічні нотатки про роботу сайту FollowNet, застосунку App Store і розширення Chrome.',
  },
  de: {
    title: 'FollowNet Status',
    ogTitle: 'FollowNet Status',
    description: 'Öffentliche Betriebsnotizen zu Website, App Store und Chrome‑Erweiterung.',
  },
  es: {
    title: 'Estado de FollowNet',
    ogTitle: 'Estado de FollowNet',
    description: 'Notas públicas sobre el sitio, la app de App Store y la extensión de Chrome.',
  },
  fr: {
    title: 'Statut FollowNet',
    ogTitle: 'Statut FollowNet',
    description: 'Notes publiques sur le site, l’app App Store et l’extension Chrome.',
  },
  pt: {
    title: 'Estado do FollowNet',
    ogTitle: 'Estado do FollowNet',
    description: 'Notas públicas sobre o site, a app da App Store e a extensão Chrome.',
  },
};

const blogIndexByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'Блог FollowNet — обновления и гайды VPN',
    ogTitle: 'Изучите FollowNet',
    description:
      'Статьи про FollowNet: возможности продукта, Free vs Premium, протоколы WireGuard/AmneziaWG и практические гайды.',
  },
  uk: {
    title: 'Блог FollowNet — оновлення та гайди VPN',
    ogTitle: 'Дізнайтесь про FollowNet',
    description:
      'Статті про FollowNet: можливості продукту, Free vs Premium, протоколи WireGuard/AmneziaWG і практичні гайди.',
  },
  en: {
    title: 'FollowNet Blog — VPN updates and guides',
    ogTitle: 'Learn FollowNet',
    description:
      'FollowNet articles: product features, Free vs Premium, WireGuard/AmneziaWG protocols, and practical guides.',
  },
  de: {
    title: 'FollowNet Blog — VPN-Updates und Guides',
    ogTitle: 'FollowNet entdecken',
    description:
      'Artikel über FollowNet: Produktfunktionen, Free vs Premium, WireGuard/AmneziaWG und praktische Anleitungen.',
  },
  es: {
    title: 'Blog FollowNet — novedades y guías VPN',
    ogTitle: 'Conoce FollowNet',
    description:
      'Artículos de FollowNet: funciones del producto, Free vs Premium, protocolos WireGuard/AmneziaWG y guías prácticas.',
  },
  fr: {
    title: 'Blog FollowNet — actus et guides VPN',
    ogTitle: 'Découvrir FollowNet',
    description:
      'Articles FollowNet : fonctionnalités, Free vs Premium, protocoles WireGuard/AmneziaWG et guides pratiques.',
  },
  pt: {
    title: 'Blog FollowNet — atualizações e guias VPN',
    ogTitle: 'Conheça o FollowNet',
    description:
      'Artigos FollowNet: recursos do produto, Free vs Premium, protocolos WireGuard/AmneziaWG e guias práticos.',
  },
};

const homeByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'FollowNet VPN — VPN для iPhone и iOS | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — быстрый VPN для iOS',
    description:
      'VPN для iPhone: Smart Connect, IKEv2, WireGuard и AmneziaWG, Hysteria2 бесплатно. DNS‑профили, Speed Test, виджеты. Premium — премиум‑серверы и безлимит в App Store.',
  },
  uk: {
    title: 'FollowNet VPN — VPN для iPhone та iOS | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — швидкий VPN для iOS',
    description:
      'VPN для iPhone: Smart Connect, IKEv2, WireGuard і AmneziaWG, Hysteria2 безкоштовно. DNS‑профілі, Speed Test, віджети. Premium — преміум‑сервери та безліміт у App Store.',
  },
  en: {
    title: 'FollowNet VPN for iPhone — Fast iOS VPN | WireGuard & IKEv2',
    ogTitle: 'FollowNet — VPN for iPhone & iOS',
    description:
      'Free VPN for iPhone: WireGuard, IKEv2, and Smart Connect for blocked networks. Auto-connect, DNS profiles, Speed Test. Download on the US App Store — Premium optional.',
  },
  de: {
    title: 'FollowNet VPN — iOS VPN für iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — schneller VPN für iOS',
    description:
      'iOS VPN mit Smart Connect, IKEv2, WireGuard und AmneziaWG, Hysteria2 in Free. DNS‑Profile, Speedtest, Widgets. Premium: Premium‑Server und unbegrenzter Traffic im App Store.',
  },
  es: {
    title: 'FollowNet VPN — VPN iOS para iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — VPN rápido para iOS',
    description:
      'VPN para iOS con Smart Connect, IKEv2, WireGuard y AmneziaWG, Hysteria2 en Free. Perfiles DNS, Speed Test y widgets. Premium: servidores premium y tráfico ilimitado en App Store.',
  },
  fr: {
    title: 'FollowNet VPN — VPN iOS pour iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — VPN rapide pour iOS',
    description:
      'VPN iOS avec Smart Connect, IKEv2, WireGuard et AmneziaWG, Hysteria2 en Free. Profils DNS, Speed Test, widgets. Premium : serveurs premium et trafic illimité via l’App Store.',
  },
  pt: {
    title: 'FollowNet VPN — VPN iOS para iPhone | WireGuard, AmneziaWG',
    ogTitle: 'FollowNet VPN — VPN rápido para iOS',
    description:
      'VPN iOS com Smart Connect, IKEv2, WireGuard e AmneziaWG, Hysteria2 no Free. Perfis DNS, Speed Test e widgets. Premium: servidores premium e tráfego ilimitado na App Store.',
  },
};

const privacyByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'Политика конфиденциальности — FollowNet VPN',
    ogTitle: 'Политика конфиденциальности FollowNet VPN',
    description:
      'Как FollowNet VPN обрабатывает данные: вход по email‑коду, App Store/Google Play, VPN‑метаданные, DNS, Firebase Analytics, AppsFlyer и ваши права GDPR/CCPA.',
  },
  uk: {
    title: 'Політика конфіденційності — FollowNet VPN',
    ogTitle: 'Політика конфіденційності FollowNet VPN',
    description:
      'Як FollowNet VPN обробляє дані: вхід за email‑кодом, App Store/Google Play, VPN‑метадані, DNS, Firebase Analytics, AppsFlyer і ваші права GDPR/CCPA.',
  },
  en: {
    title: 'Privacy Policy — FollowNet VPN',
    ogTitle: 'FollowNet VPN Privacy Policy',
    description:
      'How FollowNet VPN processes data: email-code login, App Store/Google Play, VPN metadata, DNS, Firebase Analytics, AppsFlyer, and your GDPR/CCPA rights.',
  },
  de: {
    title: 'Datenschutz — FollowNet VPN',
    ogTitle: 'FollowNet VPN Datenschutzerklärung',
    description:
      'Wie FollowNet VPN Daten verarbeitet: E‑Mail‑Code‑Login, App Store/Google Play, VPN‑Metadaten, DNS, Firebase Analytics, AppsFlyer und Ihre GDPR/CCPA‑Rechte.',
  },
  es: {
    title: 'Política de privacidad — FollowNet VPN',
    ogTitle: 'Política de privacidad FollowNet VPN',
    description:
      'Cómo FollowNet VPN procesa datos: login por código, App Store/Google Play, metadatos VPN, DNS, Firebase Analytics, AppsFlyer y tus derechos GDPR/CCPA.',
  },
  fr: {
    title: 'Politique de confidentialité — FollowNet VPN',
    ogTitle: 'Politique de confidentialité FollowNet VPN',
    description:
      'Comment FollowNet VPN traite les données : connexion par code, App Store/Google Play, métadonnées VPN, DNS, Firebase Analytics, AppsFlyer et vos droits GDPR/CCPA.',
  },
  pt: {
    title: 'Política de privacidade — FollowNet VPN',
    ogTitle: 'Política de privacidade FollowNet VPN',
    description:
      'Como o FollowNet VPN processa dados: login por código, App Store/Google Play, metadados VPN, DNS, Firebase Analytics, AppsFlyer e seus direitos GDPR/CCPA.',
  },
};

const termsByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'Условия использования — FollowNet VPN',
    ogTitle: 'Условия использования FollowNet VPN',
    description:
      'Правила FollowNet VPN: аккаунт, подписка через App Store, допустимое использование, trial и ограничение ответственности.',
  },
  uk: {
    title: 'Умови використання — FollowNet VPN',
    ogTitle: 'Умови використання FollowNet VPN',
    description:
      'Правила FollowNet VPN: акаунт, підписка через App Store, допустиме використання, trial та обмеження відповідальності.',
  },
  en: {
    title: 'Terms of Service — FollowNet VPN',
    ogTitle: 'FollowNet VPN Terms of Service',
    description:
      'FollowNet VPN terms: account, App Store subscriptions, acceptable use, trial, and limitation of liability.',
  },
  de: {
    title: 'Nutzungsbedingungen — FollowNet VPN',
    ogTitle: 'FollowNet VPN Nutzungsbedingungen',
    description:
      'FollowNet VPN Bedingungen: Konto, App Store‑Abos, zulässige Nutzung, Testphase und Haftungsbeschränkung.',
  },
  es: {
    title: 'Términos de uso — FollowNet VPN',
    ogTitle: 'Términos de uso FollowNet VPN',
    description:
      'Términos de FollowNet VPN: cuenta, suscripciones App Store, uso aceptable, prueba y limitación de responsabilidad.',
  },
  fr: {
    title: 'Conditions d’utilisation — FollowNet VPN',
    ogTitle: 'Conditions d’utilisation FollowNet VPN',
    description:
      'Conditions FollowNet VPN : compte, abonnements App Store, utilisation acceptable, essai et limitation de responsabilité.',
  },
  pt: {
    title: 'Termos de uso — FollowNet VPN',
    ogTitle: 'Termos de uso FollowNet VPN',
    description:
      'Termos do FollowNet VPN: conta, assinaturas App Store, uso aceitável, teste e limitação de responsabilidade.',
  },
};

const checkoutByLang: Record<AppLang, SeoCopy> = {
  ru: {
    title: 'Оплата Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Оформление Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  uk: {
    title: 'Оплата Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Оформлення Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  en: {
    title: 'Premium checkout — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'FollowNet VPN Premium checkout.',
    robots: 'noindex, nofollow',
  },
  de: {
    title: 'Premium‑Checkout — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'FollowNet VPN Premium Checkout.',
    robots: 'noindex, nofollow',
  },
  es: {
    title: 'Pago Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Checkout Premium de FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  fr: {
    title: 'Paiement Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Paiement Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
  pt: {
    title: 'Checkout Premium — FollowNet VPN',
    ogTitle: 'FollowNet VPN Premium',
    description: 'Checkout Premium FollowNet VPN.',
    robots: 'noindex, nofollow',
  },
};

export const OG_LOCALE: Record<AppLang, string> = {
  ru: 'ru_RU',
  uk: 'uk_UA',
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  pt: 'pt_BR',
};
