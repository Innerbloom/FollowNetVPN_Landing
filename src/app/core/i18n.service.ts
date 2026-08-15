import { DOCUMENT, isPlatformBrowser, Location } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID, REQUEST } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AppLang = 'en' | 'de' | 'es' | 'fr' | 'pt' | 'ru' | 'uk';

type Dict = Record<string, Record<AppLang, string>>;

export const SUPPORTED_LANGS: readonly AppLang[] = ['en', 'ru', 'de', 'es', 'fr', 'pt', 'uk'] as const;

export const LANG_LABELS: Record<AppLang, string> = {
  ru: 'Русский',
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  uk: 'Українська',
};

const DICT: Dict = {
  // Header
  NAV_HOME: { ru: 'Главная', en: 'Home', de: 'Start', es: 'Inicio', fr: 'Accueil', pt: 'Início', uk: 'Головна' },
  NAV_FEATURES: { ru: 'Преимущества', en: 'Features', de: 'Vorteile', es: 'Funciones', fr: 'Fonctionnalités', pt: 'Recursos', uk: 'Переваги' },
  NAV_PRICING: { ru: 'Цены', en: 'Pricing', de: 'Preise', es: 'Precios', fr: 'Tarifs', pt: 'Preços', uk: 'Ціни' },
  NAV_BLOG: { ru: 'Блог', en: 'Blog', de: 'Blog', es: 'Blog', fr: 'Blog', pt: 'Blog', uk: 'Блог' },
  NAV_GUIDES: { ru: 'Гайды', en: 'Guides', de: 'Guides', es: 'Guías', fr: 'Guides', pt: 'Guias', uk: 'Гайди' },
  NAV_DOWNLOAD_PAGE: {
    ru: 'Скачать',
    en: 'Download',
    de: 'Download',
    es: 'Descargar',
    fr: 'Télécharger',
    pt: 'Baixar',
    uk: 'Завантажити',
  },
  NAV_FEATURES_PAGE: {
    ru: 'Возможности',
    en: 'Features',
    de: 'Features',
    es: 'Funciones',
    fr: 'Fonctionnalités',
    pt: 'Recursos',
    uk: 'Можливості',
  },
  NAV_ABOUT: {
    ru: 'О нас',
    en: 'About',
    de: 'Über uns',
    es: 'Acerca de',
    fr: 'À propos',
    pt: 'Sobre',
    uk: 'Про нас',
  },
  NAV_SUPPORT: {
    ru: 'Поддержка',
    en: 'Support',
    de: 'Support',
    es: 'Soporte',
    fr: 'Support',
    pt: 'Suporte',
    uk: 'Підтримка',
  },
  NAV_STATUS: {
    ru: 'Статус',
    en: 'Status',
    de: 'Status',
    es: 'Estado',
    fr: 'Statut',
    pt: 'Estado',
    uk: 'Статус',
  },
  FOOTER_COPY: {
    ru: '© 2026 FollowNet. Все права защищены.',
    en: '© 2026 FollowNet. All rights reserved.',
    de: '© 2026 FollowNet. Alle Rechte vorbehalten.',
    es: '© 2026 FollowNet. Todos los derechos reservados.',
    fr: '© 2026 FollowNet. Tous droits réservés.',
    pt: '© 2026 FollowNet. Todos os direitos reservados.',
    uk: '© 2026 FollowNet. Усі права захищені.',
  },
  FOOTER_TAGLINE: {
    ru: 'VPN для iPhone и расширение Chrome — с честными лимитами Free и Premium.',
    en: 'VPN for iPhone and a Chrome extension — with clear Free and Premium limits.',
    de: 'VPN für iPhone und Chrome-Erweiterung — mit klaren Free- und Premium-Limits.',
    es: 'VPN para iPhone y extensión de Chrome — con límites Free y Premium claros.',
    fr: 'VPN pour iPhone et extension Chrome — avec des limites Free et Premium claires.',
    pt: 'VPN para iPhone e extensão Chrome — com limites Free e Premium claros.',
    uk: 'VPN для iPhone і розширення Chrome — з чесними лімітами Free і Premium.',
  },
  FOOTER_COL_PRODUCT: {
    ru: 'Продукт',
    en: 'Product',
    de: 'Produkt',
    es: 'Producto',
    fr: 'Produit',
    pt: 'Produto',
    uk: 'Продукт',
  },
  FOOTER_COL_COMPANY: {
    ru: 'Компания',
    en: 'Company',
    de: 'Unternehmen',
    es: 'Empresa',
    fr: 'Entreprise',
    pt: 'Empresa',
    uk: 'Компанія',
  },
  FOOTER_COL_LEGAL: {
    ru: 'Документы',
    en: 'Legal',
    de: 'Rechtliches',
    es: 'Legal',
    fr: 'Légal',
    pt: 'Legal',
    uk: 'Документи',
  },
  TRUST_HOME_KICKER: {
    ru: 'Доверие',
    en: 'Trust',
    de: 'Vertrauen',
    es: 'Confianza',
    fr: 'Confiance',
    pt: 'Confiança',
    uk: 'Довіра',
  },
  TRUST_HOME_TITLE: {
    ru: 'Честные условия — без маркетинговых трюков',
    en: 'Clear terms — no marketing tricks',
    de: 'Klare Bedingungen — ohne Marketingtricks',
    es: 'Condiciones claras — sin trucos de marketing',
    fr: 'Conditions claires — sans astuces marketing',
    pt: 'Condições claras — sem truques de marketing',
    uk: 'Чесні умови — без маркетингових трюків',
  },
  TRUST_HOME_SUB: {
    ru: 'App Store · Chrome Web Store · поддержка по email. Free — с недельным лимитом; Premium — безлимит. Мы не обещаем «бесплатный безлимит навсегда».',
    en: 'App Store · Chrome Web Store · email support. Free has a weekly limit; Premium is unlimited. We do not promise “free unlimited forever”.',
    de: 'App Store · Chrome Web Store · E‑Mail‑Support. Free hat ein Wochenlimit; Premium ist unbegrenzt. Wir versprechen kein „gratis unlimited für immer“.',
    es: 'App Store · Chrome Web Store · soporte por email. Free tiene límite semanal; Premium es ilimitado. No prometemos “gratis ilimitado para siempre”.',
    fr: 'App Store · Chrome Web Store · support e‑mail. Free a une limite hebdomadaire ; Premium est illimité. Nous ne promettons pas un « gratuit illimité pour toujours ».',
    pt: 'App Store · Chrome Web Store · suporte por email. Free tem limite semanal; Premium é ilimitado. Não prometemos “grátis ilimitado para sempre”.',
    uk: 'App Store · Chrome Web Store · підтримка email. Free — з тижневим лімітом; Premium — безліміт. Ми не обіцяємо «безкоштовний безліміт назавжди».',
  },
  TRUST_HOME_POINTS: {
    ru: 'Локации — те, что сейчас в приложении. macOS и Android пока в планах. Подробнее: О нас и Поддержка.',
    en: 'Locations are those currently listed in the app. macOS and Android are still on the roadmap. More: About and Support.',
    de: 'Standorte sind die aktuell in der App gelisteten. macOS und Android stehen noch auf der Roadmap. Mehr: Über uns und Support.',
    es: 'Las ubicaciones son las que aparecen ahora en la app. macOS y Android siguen en el roadmap. Más: Acerca de y Soporte.',
    fr: 'Les emplacements sont ceux listés actuellement dans l’app. macOS et Android restent sur la feuille de route. Plus : À propos et Support.',
    pt: 'As localizações são as listadas atualmente na app. macOS e Android ainda estão no roadmap. Mais: Sobre e Suporte.',
    uk: 'Локації — ті, що зараз у застосунку. macOS і Android поки в планах. Детальніше: Про нас і Підтримка.',
  },
  TRUST_HOME_ABOUT: {
    ru: 'О FollowNet',
    en: 'About FollowNet',
    de: 'Über FollowNet',
    es: 'Sobre FollowNet',
    fr: 'À propos de FollowNet',
    pt: 'Sobre o FollowNet',
    uk: 'Про FollowNet',
  },
  TRUST_HOME_SUPPORT: {
    ru: 'Центр поддержки',
    en: 'Support center',
    de: 'Support-Center',
    es: 'Centro de soporte',
    fr: 'Centre d’aide',
    pt: 'Centro de suporte',
    uk: 'Центр підтримки',
  },
  DOWNLOAD_CHROME_CTA: {
    ru: 'Расширение для Chrome',
    en: 'Get Chrome extension',
    de: 'Chrome-Erweiterung',
    es: 'Extensión para Chrome',
    fr: 'Extension pour Chrome',
    pt: 'Extensão para Chrome',
    uk: 'Розширення Chrome',
  },
  DOWNLOAD_IOS_MORE: {
    ru: 'Как установить на iOS',
    en: 'iOS install guide',
    de: 'iOS-Installationsguide',
    es: 'Guía de instalación iOS',
    fr: 'Guide d’installation iOS',
    pt: 'Guia de instalação iOS',
    uk: 'Як встановити на iOS',
  },
  DOWNLOAD_ALL: {
    ru: 'Все загрузки',
    en: 'All downloads',
    de: 'Alle Downloads',
    es: 'Todas las descargas',
    fr: 'Tous les téléchargements',
    pt: 'Todos os downloads',
    uk: 'Усі завантаження',
  },
  GUIDES_TITLE: {
    ru: 'Гайды FollowNet',
    en: 'FollowNet guides',
    de: 'FollowNet Guides',
    es: 'Guías FollowNet',
    fr: 'Guides FollowNet',
    pt: 'Guias FollowNet',
    uk: 'Гайди FollowNet',
  },
  GUIDES_LEAD: {
    ru: 'Все руководства в одном месте: протоколы, Free и Premium, Wi‑Fi, поездки и настройка на iPhone.',
    en: 'All guides in one place: protocols, Free and Premium, Wi‑Fi, travel, and iPhone setup.',
    de: 'Alle Anleitungen an einem Ort: Protokolle, Free und Premium, WLAN, Reisen und die Einrichtung auf dem iPhone.',
    es: 'Todas las guías en un solo lugar: protocolos, Free y Premium, Wi‑Fi, viajes y configuración en iPhone.',
    fr: 'Tous les guides au même endroit : protocoles, Free et Premium, Wi‑Fi, voyages et configuration sur iPhone.',
    pt: 'Todos os guias em um só lugar: protocolos, Free e Premium, Wi‑Fi, viagens e configuração no iPhone.',
    uk: 'Усі посібники в одному місці: протоколи, Free і Premium, Wi‑Fi, подорожі та налаштування на iPhone.',
  },
  NAV_PRIVACY: { ru: 'Конфиденциальность', en: 'Privacy', de: 'Datenschutz', es: 'Privacidad', fr: 'Confidentialité', pt: 'Privacidade', uk: 'Конфіденційність' },
  NAV_TERMS: { ru: 'Условия', en: 'Terms', de: 'Bedingungen', es: 'Términos', fr: 'Conditions', pt: 'Termos', uk: 'Умови' },
  BLOG_TITLE: {
    ru: 'Изучите FollowNet',
    en: 'Learn FollowNet',
    de: 'FollowNet entdecken',
    es: 'Conoce FollowNet',
    fr: 'Découvrir FollowNet',
    pt: 'Conheça o FollowNet',
    uk: 'Дізнайтеся більше про FollowNet',
  },
  BLOG_LEAD: {
    ru: 'Обновления продукта, честные разборы тарифов и гайды по протоколам — без воды.',
    en: 'Product updates, honest Free vs Premium notes, and protocol guides — no fluff.',
    de: 'Produkt-Updates, ehrliche Free/Premium-Notizen und Protokoll-Guides — ohne Fülltext.',
    es: 'Novedades del producto, Free vs Premium sin letra pequeña y guías de protocolos.',
    fr: 'Mises à jour produit, Free vs Premium sans petite lettre, et guides de protocoles.',
    pt: 'Atualizações do produto, Free vs Premium sem letra miúda e guias de protocolos.',
    uk: 'Оновлення продукту, чесне порівняння Free і Premium та посібники з протоколів — без зайвого.',
  },
  BLOG_ALL: {
    ru: 'Все статьи',
    en: 'All articles',
    de: 'Alle Artikel',
    es: 'Todos los artículos',
    fr: 'Tous les articles',
    pt: 'Todos os artigos',
    uk: 'Усі статті',
  },
  BLOG_READ_TIME: {
    ru: '{n} мин',
    en: '{n} min read',
    de: '{n} Min.',
    es: '{n} min',
    fr: '{n} min',
    pt: '{n} min',
    uk: '{n} хв',
  },
  BLOG_HOME_KICKER: {
    ru: 'Блог',
    en: 'Blog',
    de: 'Blog',
    es: 'Blog',
    fr: 'Blog',
    pt: 'Blog',
    uk: 'Блог',
  },
  BLOG_HOME_SUB: {
    ru: 'Короткие и полезные материалы о FollowNet, приватности и VPN‑технологиях.',
    en: 'Short, useful articles about FollowNet, privacy, and VPN technology.',
    de: 'Kurze, hilfreiche Artikel über FollowNet, Datenschutz und VPN‑Technologie.',
    es: 'Artículos breves y útiles sobre FollowNet, privacidad y tecnología VPN.',
    fr: 'Des articles courts et utiles sur FollowNet, la confidentialité et les technologies VPN.',
    pt: 'Artigos curtos e úteis sobre o FollowNet, privacidade e tecnologia VPN.',
    uk: 'Короткі й корисні матеріали про FollowNet, приватність і VPN‑технології.',
  },
  NAV_DOWNLOAD: {
    ru: 'Скачать бесплатно',
    en: 'Download free',
    de: 'Kostenlos laden',
    es: 'Descargar gratis',
    fr: 'Télécharger gratuitement',
    pt: 'Baixar grátis',
    uk: 'Завантажити безкоштовно',
  },

  // Hero (outcome + pain, accent on middle line)
  HERO_TITLE_1: {
    ru: 'Без лагов и лишних экранов.',
    en: 'No clutter. No needless steps.',
    de: 'Kein Chaos. Keine unnötigen Schritte.',
    es: 'Sin líos. Sin pasos de más.',
    fr: 'Sans fouillis. Sans étapes inutiles.',
    pt: 'Sem enrolação. Sem passos extras.',
    uk: 'Без лагів і зайвих екранів.',
  },
  HERO_TITLE_2: {
    ru: 'Один тап',
    en: 'One tap',
    de: 'Ein Tap',
    es: 'Un toque',
    fr: 'Un tap',
    pt: 'Um toque',
    uk: 'Один дотик',
  },
  HERO_TITLE_3: {
    ru: '— стабильный VPN для iOS',
    en: '— a stable VPN for iOS',
    de: '— stabiles VPN für iOS',
    es: '— VPN estable para iOS',
    fr: '— un VPN stable pour iOS',
    pt: '— VPN estável para iOS',
    uk: '— стабільний VPN для iOS',
  },
  HERO_LEAD: {
    ru: 'Free с лимитом или Premium с полным доступом. Smart Connect, четыре протокола (включая AmneziaWG и Hysteria2), DNS‑профили, виджеты и Speed Test — в одном приложении.',
    en: 'Free with limits or full Premium. Smart Connect, four protocols (including AmneziaWG and Hysteria2), DNS profiles, widgets, and Speed Test — in one iOS app.',
    de: 'Free mit Limit oder volles Premium. Smart Connect, vier Protokolle (inkl. AmneziaWG und Hysteria2), DNS‑Profile, Widgets und Speedtest — in einer iOS‑App.',
    es: 'Free con límites o Premium completo. Smart Connect, cuatro protocolos (incl. AmneziaWG y Hysteria2), perfiles DNS, widgets y Speed Test — en una app iOS.',
    fr: 'Free avec limites ou Premium complet. Smart Connect, quatre protocoles (dont AmneziaWG et Hysteria2), profils DNS, widgets et Speed Test — dans une app iOS.',
    pt: 'Free com limites ou Premium completo. Smart Connect, quatro protocolos (incluindo AmneziaWG e Hysteria2), perfis DNS, widgets e Speed Test — em um app para iOS.',
    uk: 'Free з лімітом або повний Premium. Smart Connect, чотири протоколи (зокрема AmneziaWG і Hysteria2), DNS‑профілі, віджети та Speed Test — в одному додатку.',
  },
  HERO_CTA_PRIMARY: {
    ru: 'Скачать бесплатно для iOS',
    en: 'Download free for iOS',
    de: 'Kostenlos für iOS laden',
    es: 'Descargar gratis para iOS',
    fr: 'Télécharger gratuitement pour iOS',
    pt: 'Baixar grátis para iOS',
    uk: 'Завантажити безкоштовно для iOS',
  },
  HERO_CTA_SECONDARY: { ru: 'Что внутри', en: "What's inside", de: 'Was drin ist', es: 'Qué incluye', fr: 'Ce qui est inclus', pt: 'O que tem', uk: 'Що всередині' },

  SCREENSHOT_ALT_1: {
    ru: 'FollowNet VPN на iPhone — главный экран подключения',
    en: 'FollowNet VPN on iPhone — main connect screen',
    de: 'FollowNet VPN auf iPhone — Hauptbildschirm Verbindung',
    es: 'FollowNet VPN en iPhone — pantalla principal de conexión',
    fr: 'FollowNet VPN sur iPhone — écran principal de connexion',
    pt: 'FollowNet VPN no iPhone — tela principal de conexão',
    uk: 'FollowNet VPN на iPhone — головний екран підключення',
  },
  SCREENSHOT_ALT_2: {
    ru: 'FollowNet VPN — выбор сервера и локации',
    en: 'FollowNet VPN — server and location picker',
    de: 'FollowNet VPN — Server- und Standortauswahl',
    es: 'FollowNet VPN — selector de servidor y ubicación',
    fr: 'FollowNet VPN — choix du serveur et de la localisation',
    pt: 'FollowNet VPN — seleção de servidor e localização',
    uk: 'FollowNet VPN — вибір сервера та локації',
  },
  SCREENSHOT_ALT_3: {
    ru: 'FollowNet VPN — Smart Connect и протоколы VPN',
    en: 'FollowNet VPN — Smart Connect and VPN protocols',
    de: 'FollowNet VPN — Smart Connect und VPN-Protokolle',
    es: 'FollowNet VPN — Smart Connect y protocolos VPN',
    fr: 'FollowNet VPN — Smart Connect et protocoles VPN',
    pt: 'FollowNet VPN — Smart Connect e protocolos VPN',
    uk: 'FollowNet VPN — Smart Connect і протоколи VPN',
  },
  SCREENSHOT_ALT_4: {
    ru: 'FollowNet VPN — DNS‑профили и настройки',
    en: 'FollowNet VPN — DNS profiles and settings',
    de: 'FollowNet VPN — DNS-Profile und Einstellungen',
    es: 'FollowNet VPN — perfiles DNS y ajustes',
    fr: 'FollowNet VPN — profils DNS et réglages',
    pt: 'FollowNet VPN — perfis DNS e configurações',
    uk: 'FollowNet VPN — DNS‑профілі та налаштування',
  },
  SCREENSHOT_ALT_5: {
    ru: 'FollowNet VPN — статистика и Speed Test',
    en: 'FollowNet VPN — statistics and Speed Test',
    de: 'FollowNet VPN — Statistiken und Speedtest',
    es: 'FollowNet VPN — estadísticas y Speed Test',
    fr: 'FollowNet VPN — statistiques et Speed Test',
    pt: 'FollowNet VPN — estatísticas e Speed Test',
    uk: 'FollowNet VPN — статистика та Speed Test',
  },

  // Sales / value (ClearVPN-style clarity, own copy)
  SALES_VALUE_KICKER: { ru: 'FollowNet VPN', en: 'FollowNet VPN', de: 'FollowNet VPN', es: 'FollowNet VPN', fr: 'FollowNet VPN', pt: 'FollowNet VPN', uk: 'FollowNet VPN' },
  SALES_VALUE_TITLE: {
    ru: 'Один тап — и вы в безопасной сети',
    en: 'One tap to a safer connection',
    de: 'Ein Tap zu einer sichereren Verbindung',
    es: 'Un toque para una conexión más segura',
    fr: 'Un tap pour une connexion plus sûre',
    pt: 'Um toque para uma conexão mais segura',
    uk: 'Один дотик — до безпечнішого з’єднання',
  },
  SALES_VALUE_SUB: {
    ru: 'Простой VPN для iOS: скорость, приватность и понятный интерфейс — без лишнего шума.',
    en: 'A focused iOS VPN: speed, privacy, and a clear UI — without the noise.',
    de: 'Ein fokussiertes iOS‑VPN: Speed, Privatsphäre und klare UI — ohne Schnickschnack.',
    es: 'Un VPN iOS claro: velocidad, privacidad e interfaz limpia — sin ruido.',
    fr: 'Un VPN iOS clair : vitesse, confidentialité et interface lisible — sans bruit.',
    pt: 'Um VPN iOS direto: velocidade, privacidade e UI clara — sem ruído.',
    uk: 'Зосереджений VPN для iOS: швидкість, приватність і зрозумілий інтерфейс — без зайвого шуму.',
  },
  SALES_VALUE_POINTS: {
    ru: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2 · Smart Connect · DNS · вход по коду · App Store',
    en: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2 · Smart Connect · DNS · passwordless login · App Store',
    de: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2 · Smart Connect · DNS · Login per Code · App Store',
    es: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2 · Smart Connect · DNS · acceso por código · App Store',
    fr: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2 · Smart Connect · DNS · connexion par code · App Store',
    pt: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2 · Smart Connect · DNS · login por código · App Store',
    uk: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2 · Smart Connect · DNS · вхід за кодом · App Store',
  },
  TRUST_STRIP_1: { ru: '1 тап', en: '1 tap', de: '1 Tap', es: '1 toque', fr: '1 tap', pt: '1 toque', uk: '1 дотик' },
  TRUST_STRIP_1_SUB: {
    ru: 'до защищённого соединения',
    en: 'to connect securely',
    de: 'für eine sichere Verbindung',
    es: 'para conectar con seguridad',
    fr: 'pour vous connecter en sécurité',
    pt: 'para conectar com segurança',
    uk: 'до захищеного з’єднання',
  },
  TRUST_STRIP_2: {
    ru: '4 протокола',
    en: '4 protocols',
    de: '4 Protokolle',
    es: '4 protocolos',
    fr: '4 protocoles',
    pt: '4 protocolos',
    uk: '4 протоколи',
  },
  TRUST_STRIP_2_SUB: {
    ru: 'IKEv2, WireGuard, AmneziaWG и Hysteria2',
    en: 'IKEv2, WireGuard, AmneziaWG, and Hysteria2',
    de: 'IKEv2, WireGuard, AmneziaWG und Hysteria2',
    es: 'IKEv2, WireGuard, AmneziaWG y Hysteria2',
    fr: 'IKEv2, WireGuard, AmneziaWG et Hysteria2',
    pt: 'IKEv2, WireGuard, AmneziaWG e Hysteria2',
    uk: 'IKEv2, WireGuard, AmneziaWG та Hysteria2',
  },
  TRUST_STRIP_3: { ru: 'App Store', en: 'App Store', de: 'App Store', es: 'App Store', fr: 'App Store', pt: 'App Store', uk: 'App Store' },
  TRUST_STRIP_3_SUB: {
    ru: 'скачайте бесплатно; Premium — в приложении или на сайте',
    en: 'download free; Premium in the app or on the website',
    de: 'kostenlos laden; Premium in der App oder auf der Website',
    es: 'descarga gratis; Premium en la app o en la web',
    fr: 'téléchargement gratuit ; Premium dans l’app ou sur le site',
    pt: 'baixe grátis; Premium no app ou no site',
    uk: 'завантажте безкоштовно; Premium — у додатку або на сайті',
  },
  TRUST_STRIP_ARIA: {
    ru: 'Ключевые преимущества в цифрах',
    en: 'Key benefits at a glance',
    de: 'Wichtige Vorteile auf einen Blick',
    es: 'Ventajas clave de un vistazo',
    fr: 'Avantages clés en un coup d’œil',
    pt: 'Principais benefícios em resumo',
    uk: 'Ключові переваги коротко',
  },

  // Why FollowNet (honest differentiation — no invented user counts)
  WHY_KICKER: {
    ru: 'Не как у всех',
    en: 'Not like every other VPN',
    de: 'Nicht wie jeder andere VPN',
    es: 'No como cualquier otro VPN',
    fr: 'Pas comme tous les VPN',
    pt: 'Não é só mais um VPN',
    uk: 'Не як усі інші',
  },
  WHY_TITLE: {
    ru: 'Почему FollowNet',
    en: 'Why FollowNet',
    de: 'Warum FollowNet',
    es: 'Por qué FollowNet',
    fr: 'Pourquoi FollowNet',
    pt: 'Por que FollowNet',
    uk: 'Чому FollowNet',
  },
  WHY_SUB: {
    ru: 'Speed Test, статистика, DNS‑профили и четыре протокола — в приложении. Правила Free и Premium понятны заранее, без выдуманных цифр.',
    en: 'Speed Test, stats, DNS profiles, and four protocols—in the app. Free vs Premium rules are clear upfront, with no made‑up numbers.',
    de: 'Speedtest, Statistik, DNS‑Profile und vier Protokolle—in der App. Free‑ und Premium‑Regeln sind klar, ohne erfundene Zahlen.',
    es: 'Speed Test, estadísticas, perfiles DNS y cuatro protocolos—en la app. Reglas Free y Premium claras, sin cifras inventadas.',
    fr: 'Speed Test, stats, profils DNS et quatre protocoles—dans l’app. Règles Free et Premium claires, sans chiffres inventés.',
    pt: 'Speed Test, estatísticas, perfis DNS e quatro protocolos—no app. Regras Free e Premium claras, sem números inventados.',
    uk: 'Speed Test, статистика, DNS‑профілі та чотири протоколи — у додатку. Правила Free і Premium зрозумілі заздалегідь, без вигаданих цифр.',
  },
  WHY_1_TITLE: {
    ru: 'Вход без пароля',
    en: 'Passwordless sign‑in',
    de: 'Anmeldung ohne Passwort',
    es: 'Acceso sin contraseña',
    fr: 'Connexion sans mot de passe',
    pt: 'Entrada sem senha',
    uk: 'Вхід без пароля',
  },
  WHY_1_TEXT: {
    ru: 'Код на email — не нужно хранить и вспоминать пароль для VPN.',
    en: 'Email code sign‑in—no VPN password to store or forget.',
    de: 'Code per E‑Mail—kein VPN‑Passwort zum Merken.',
    es: 'Código por email—sin contraseña de VPN que guardar.',
    fr: 'Code par e‑mail—pas de mot de passe VPN à stocker.',
    pt: 'Código no e‑mail—sem senha de VPN para guardar.',
    uk: 'Код на email — без пароля для VPN, який треба зберігати.',
  },
  WHY_2_TITLE: {
    ru: 'Понятные лимиты',
    en: 'Clear limits',
    de: 'Klare Limits',
    es: 'Límites claros',
    fr: 'Limites claires',
    pt: 'Limites claros',
    uk: 'Зрозумілі ліміти',
  },
  WHY_2_TEXT: {
    ru: 'IKEv2, WireGuard и AmneziaWG — у всех. Free: бесплатные серверы и лимит трафика. Premium: премиум‑серверы и безлимит.',
    en: 'IKEv2, WireGuard, AmneziaWG, and Hysteria2 for everyone. Free: free servers and a traffic cap. Premium: premium servers and unlimited traffic.',
    de: 'IKEv2, WireGuard, AmneziaWG und Hysteria2 für alle. Free: kostenlose Server und Traffic‑Limit. Premium: Premium‑Server und unbegrenzter Traffic.',
    es: 'IKEv2, WireGuard, AmneziaWG y Hysteria2 para todos. Free: servidores gratis y límite de tráfico. Premium: servidores premium y tráfico ilimitado.',
    fr: 'IKEv2, WireGuard, AmneziaWG et Hysteria2 pour tous. Free : serveurs gratuits et plafond de trafic. Premium : serveurs premium et trafic illimité.',
    pt: 'IKEv2, WireGuard, AmneziaWG e Hysteria2 para todos. Free: servidores grátis e limite de tráfego. Premium: servidores premium e tráfego ilimitado.',
    uk: 'IKEv2, WireGuard, AmneziaWG та Hysteria2 — у всіх. Free: безкоштовні сервери та ліміт трафіку. Premium: преміум‑сервери та безліміт.',
  },
  WHY_3_TITLE: {
    ru: 'Smart Connect',
    en: 'Smart Connect',
    de: 'Smart Connect',
    es: 'Smart Connect',
    fr: 'Smart Connect',
    pt: 'Smart Connect',
    uk: 'Smart Connect',
  },
  WHY_3_TEXT: {
    ru: 'Умное подключение подбирает сервер и протокол под вашу сеть — Wi‑Fi или мобильную, стабильность и ограничения у провайдера. Можно доверить выбор приложению или настроить вручную.',
    en: 'Smart Connect picks the server and protocol that fit your network—Wi‑Fi or cellular, stability, and carrier restrictions. Let the app choose or set it manually.',
    de: 'Smart Connect wählt Server und Protokoll passend zu Ihrem Netz—WLAN oder Mobilfunk, Stabilität und Anbieter‑Limits. App entscheiden lassen oder manuell einstellen.',
    es: 'Smart Connect elige servidor y protocolo según tu red—Wi‑Fi o datos, estabilidad y restricciones del operador. Deja que la app elija o configúralo tú.',
    fr: 'Smart Connect choisit serveur et protocole selon votre réseau—Wi‑Fi ou mobile, stabilité et limites opérateur. Laisser l’app choisir ou régler manuellement.',
    pt: 'Smart Connect escolhe servidor e protocolo para sua rede—Wi‑Fi ou celular, estabilidade e restrições da operadora. Deixe o app escolher ou configure manualmente.',
    uk: 'Розумне підключення підбирає сервер і протокол під вашу мережу — Wi‑Fi чи мобільну, стабільність і обмеження оператора. Можна довірити вибір додатку або налаштувати вручну.',
  },
  WHY_4_TITLE: {
    ru: 'DNS профили',
    en: 'DNS profiles',
    de: 'DNS‑Profile',
    es: 'Perfiles DNS',
    fr: 'Profils DNS',
    pt: 'Perfis DNS',
    uk: 'Профілі DNS',
  },
  WHY_4_TEXT: {
    ru: 'AdGuard, Cloudflare или Google — выбирайте под задачу: блокировка, скорость или совместимость.',
    en: 'AdGuard, Cloudflare, or Google—pick blocking, speed, or compatibility.',
    de: 'AdGuard, Cloudflare oder Google—Blockierung, Speed oder Kompatibilität.',
    es: 'AdGuard, Cloudflare o Google—bloqueo, velocidad o compatibilidad.',
    fr: 'AdGuard, Cloudflare ou Google—blocage, vitesse ou compatibilité.',
    pt: 'AdGuard, Cloudflare ou Google—bloqueio, velocidade ou compatibilidade.',
    uk: 'AdGuard, Cloudflare або Google — відповідно до потреб: блокування, швидкість чи сумісність.',
  },
  PRICING_BADGE_Y1: {
    ru: 'Лучшее предложение',
    en: 'Best value',
    de: 'Bestes Angebot',
    es: 'Mejor oferta',
    fr: 'Meilleure offre',
    pt: 'Melhor oferta',
    uk: 'Найкраща пропозиція',
  },
  PRICING_BADGE_M1: { ru: 'Гибкий план', en: 'Flexible plan', de: 'Flexibler Plan', es: 'Plan flexible', fr: 'Forfait flexible', pt: 'Plano flexível', uk: 'Гнучкий план' },
  PRICING_MOST_POPULAR: {
    ru: 'Самый популярный',
    en: 'Most popular',
    de: 'Am beliebtesten',
    es: 'Más popular',
    fr: 'Le plus populaire',
    pt: 'Mais popular',
    uk: 'Найпопулярніший',
  },
  PRICING_BILLED_YEAR: {
    ru: '{{AMOUNT}} за первый год',
    en: '{{AMOUNT}} billed for the first year',
    de: '{{AMOUNT}} im ersten Jahr',
    es: '{{AMOUNT}} el primer año',
    fr: '{{AMOUNT}} la première année',
    pt: '{{AMOUNT}} no primeiro ano',
    uk: '{{AMOUNT}} за перший рік',
  },
  PRICING_BILLED_MONTH: {
    ru: '{{AMOUNT}} в месяц, продление ежемесячно',
    en: '{{AMOUNT}}/mo, renews monthly',
    de: '{{AMOUNT}}/Monat, monatliche Verlängerung',
    es: '{{AMOUNT}}/mes, renovación mensual',
    fr: '{{AMOUNT}}/mois, renouvellement mensuel',
    pt: '{{AMOUNT}}/mês, renovação mensal',
    uk: '{{AMOUNT}}/міс, щомісячне поновлення',
  },

  // Bullets
  BULLET_SECURITY: { ru: 'Безопасность', en: 'Security', de: 'Sicherheit', es: 'Seguridad', fr: 'Sécurité', pt: 'Segurança', uk: 'Безпека' },
  BULLET_SECURITY_SUB: { ru: 'Современное шифрование, автоподключение, защита DNS', en: 'Modern encryption, auto-connect, DNS protection', de: 'Moderne Verschlüsselung, automatische Verbindung, DNS‑Schutz', es: 'Cifrado moderno, conexión automática y protección DNS', fr: 'Chiffrement moderne, connexion automatique et protection DNS', pt: 'Criptografia moderna, conexão automática e proteção DNS', uk: 'Сучасне шифрування, автопідключення та захист DNS' },
  BULLET_SPEED: { ru: 'Скорость', en: 'Speed', de: 'Geschwindigkeit', es: 'Velocidad', fr: 'Vitesse', pt: 'Velocidade', uk: 'Швидкість' },
  BULLET_SPEED_SUB: {
    ru: 'Smart Connect и 4 VPN‑протокола',
    en: 'Smart Connect and 4 VPN protocols',
    de: 'Smart Connect und 4 VPN‑Protokolle',
    es: 'Smart Connect y 4 protocolos VPN',
    fr: 'Smart Connect et 4 protocoles VPN',
    pt: 'Smart Connect e 4 protocolos VPN',
    uk: 'Smart Connect і 4 VPN‑протоколи',
  },
  BULLET_WORLD: { ru: 'Доступные локации', en: 'Available locations', de: 'Verfügbare Standorte', es: 'Ubicaciones disponibles', fr: 'Localisations disponibles', pt: 'Localizações disponíveis', uk: 'Доступні локації' },
  BULLET_WORLD_SUB: { ru: 'Выберите подходящий сервер с низким пингом', en: 'Choose a suitable server with low ping', de: 'Passenden Server mit niedrigem Ping wählen', es: 'Elige un servidor adecuado con ping bajo', fr: 'Choisissez un serveur adapté avec un faible ping', pt: 'Escolha um servidor adequado com ping baixo', uk: 'Оберіть відповідний сервер із низьким пінгом' },

  // Strip chips
  CHIP_CODE: { ru: 'Без пароля — вход по коду на email', en: 'Passwordless — email code login', de: 'Ohne Passwort — Login per E‑Mail‑Code', es: 'Sin contraseña — acceso por código', fr: 'Sans mot de passe — code email', pt: 'Sem senha — login por código', uk: 'Без пароля — вхід за кодом на email' },
  CHIP_WIDGETS: { ru: 'Виджеты: статус + таймер', en: 'Widgets: status + timer', de: 'Widgets: Status + Timer', es: 'Widgets: estado + temporizador', fr: 'Widgets : statut + minuteur', pt: 'Widgets: status + timer', uk: 'Віджети: статус + таймер' },
  CHIP_SPEEDTEST: { ru: 'Speed Test и статистика', en: 'Speed Test and statistics', de: 'Speedtest und Statistik', es: 'Speed Test y estadísticas', fr: 'Speed Test et statistiques', pt: 'Speed Test e estatísticas', uk: 'Speed Test і статистика' },
  CHIP_DNS: {
    ru: 'Выбор DNS‑профиля',
    en: 'DNS profile picker',
    de: 'DNS‑Profil wählen',
    es: 'Perfil DNS a elegir',
    fr: 'Choix du profil DNS',
    pt: 'Escolha do perfil DNS',
    uk: 'Вибір DNS‑профілю',
  },
  CHIP_SMART_CONNECT: {
    ru: 'Smart Connect',
    en: 'Smart Connect',
    de: 'Smart Connect',
    es: 'Smart Connect',
    fr: 'Smart Connect',
    pt: 'Smart Connect',
    uk: 'Smart Connect',
  },
  CHIP_PROTOCOLS: {
    ru: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2',
    en: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2',
    de: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2',
    es: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2',
    fr: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2',
    pt: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2',
    uk: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2',
  },

  // Features section
  FEATURES_KICKER: { ru: 'Преимущества', en: 'Features', de: 'Vorteile', es: 'Funciones', fr: 'Fonctionnalités', pt: 'Recursos', uk: 'Переваги' },
  FEATURES_TITLE: { ru: 'Фокус на скорости, приватности и UX', en: 'Focused on speed, privacy, and UX', de: 'Fokus auf Speed, Privatsphäre und UX', es: 'Enfoque en velocidad, privacidad y UX', fr: 'Focus sur vitesse, confidentialité et UX', pt: 'Foco em velocidade, privacidade e UX', uk: 'Фокус на швидкості, приватності та UX' },
  FEATURES_SUB: { ru: 'Собрали самые важные вещи в одном месте — без перегруза.', en: 'Everything important in one place — without overload.', de: 'Das Wichtigste an einem Ort — ohne Überladung.', es: 'Lo esencial en un solo lugar — sin exceso.', fr: "L’essentiel au même endroit — sans surcharge.", pt: 'O essencial em um só lugar — sem excesso.', uk: 'Найважливіше в одному місці — без перевантаження.' },
  TRUST_PROTOCOLS_TITLE: {
    ru: 'Четыре протокола',
    en: 'Four protocols',
    de: 'Vier Protokolle',
    es: 'Cuatro protocolos',
    fr: 'Quatre protocoles',
    pt: 'Quatro protocolos',
    uk: 'Чотири протоколи',
  },
  TRUST_PROTOCOLS_TEXT: {
    ru: 'IKEv2, WireGuard, AmneziaWG и Hysteria2 доступны бесплатно. Выбирайте протокол в настройках под задачу: скорость, стабильность или обход блокировок.',
    en: 'IKEv2, WireGuard, AmneziaWG, and Hysteria2 are free for everyone. Switch in protocol settings for speed, stability, or bypassing blocks.',
    de: 'IKEv2, WireGuard, AmneziaWG und Hysteria2 — für alle kostenlos. In den Protokolleinstellungen je nach Bedarf: Speed, Stabilität oder Blockierungen umgehen.',
    es: 'IKEv2, WireGuard, AmneziaWG y Hysteria2 gratis para todos. Cambia en ajustes de protocolo según necesites: velocidad, estabilidad o evitar bloqueos.',
    fr: 'IKEv2, WireGuard, AmneziaWG et Hysteria2 gratuits pour tous. Changez dans les réglages protocole : vitesse, stabilité ou contournement.',
    pt: 'IKEv2, WireGuard, AmneziaWG e Hysteria2 grátis para todos. Alterne nas configurações de protocolo: velocidade, estabilidade ou contornar bloqueios.',
    uk: 'IKEv2, WireGuard, AmneziaWG та Hysteria2 — безкоштовно для всіх. Перемикайте в налаштуваннях протоколу: швидкість, стабільність або обхід блокувань.',
  },
  TRUST_SMART_CONNECT_TITLE: {
    ru: 'Smart Connect',
    en: 'Smart Connect',
    de: 'Smart Connect',
    es: 'Smart Connect',
    fr: 'Smart Connect',
    pt: 'Smart Connect',
    uk: 'Smart Connect',
  },
  TRUST_SMART_CONNECT_TEXT: {
    ru: 'Умный режим сам подбирает сервер и протокол под Wi‑Fi или мобильную сеть, стабильность и ограничения у провайдера.',
    en: 'Smart mode picks the server and protocol for Wi‑Fi or cellular, stability, and typical carrier restrictions.',
    de: 'Der Smart‑Modus wählt Server und Protokoll für WLAN oder Mobilfunk, Stabilität und übliche Anbieter‑Limits.',
    es: 'El modo inteligente elige servidor y protocolo según Wi‑Fi o datos, estabilidad y restricciones del operador.',
    fr: 'Le mode intelligent choisit serveur et protocole selon Wi‑Fi ou mobile, stabilité et limites de l’opérateur.',
    pt: 'O modo inteligente escolhe servidor e protocolo para Wi‑Fi ou celular, estabilidade e restrições da operadora.',
    uk: 'Розумний режим сам підбирає сервер і протокол під Wi‑Fi чи мобільну мережу, стабільність і обмеження оператора.',
  },
  TRUST_AUTOCONNECT_TITLE: { ru: 'Автоподключение', en: 'Auto-connect', de: 'Auto-Verbindung', es: 'Auto-conexión', fr: 'Connexion auto', pt: 'Conexão automática', uk: 'Автопідключення' },
  TRUST_AUTOCONNECT_TEXT: { ru: 'Автоматическое восстановление соединения при обрывах и смене сети.', en: 'Automatic reconnection on dropouts and network changes.', de: 'Automatische Wiederverbindung bei Abbrüchen und Netzwerkwechsel.', es: 'Reconexión automática ante cortes y cambios de red.', fr: 'Reconnexion automatique en cas de coupure ou changement de réseau.', pt: 'Reconexão automática em quedas e mudanças de rede.', uk: 'Автоматичне відновлення з’єднання при розривах та зміні мережі.' },
  TRUST_DNS_TITLE: { ru: 'DNS профили', en: 'DNS profiles', de: 'DNS‑Profile', es: 'Perfiles DNS', fr: 'Profils DNS', pt: 'Perfis DNS', uk: 'Профілі DNS' },
  TRUST_DNS_TEXT: { ru: 'AdGuard / Cloudflare / Google — под задачу.', en: 'AdGuard / Cloudflare / Google — pick what you need.', de: 'AdGuard / Cloudflare / Google — passend zur Aufgabe.', es: 'AdGuard / Cloudflare / Google — según tus necesidades.', fr: 'AdGuard / Cloudflare / Google — selon vos besoins.', pt: 'AdGuard / Cloudflare / Google — de acordo com sua necessidade.', uk: 'AdGuard / Cloudflare / Google — відповідно до потреб.' },
  TRUST_STATS_TITLE: { ru: 'Статистика и Speed Test', en: 'Stats and Speed Test', de: 'Statistik und Speedtest', es: 'Estadísticas y Speed Test', fr: 'Statistiques et Speed Test', pt: 'Estatísticas e Speed Test', uk: 'Статистика та Speed Test' },
  TRUST_STATS_TEXT: {
    ru: 'История сессий, пинг и скорость. Speed Test — до и после VPN, чтобы увидеть разницу без сторонних сервисов.',
    en: 'Session history, ping, and speed. Speed Test before and after VPN—see the difference without third‑party tools.',
    de: 'Session‑Verlauf, Ping und Speed. Speedtest vor und nach VPN—Unterschied ohne Drittanbieter sehen.',
    es: 'Historial de sesiones, ping y velocidad. Speed Test antes y después del VPN—sin herramientas externas.',
    fr: 'Historique des sessions, ping et débit. Speed Test avant/après VPN—sans outils tiers.',
    pt: 'Histórico de sessões, ping e velocidade. Speed Test antes e depois do VPN—sem ferramentas externas.',
    uk: 'Історія сесій, пінг і швидкість. Speed Test — до і після VPN, щоб побачити різницю без сторонніх сервісів.',
  },

  // Countries
  COUNTRIES_TITLE: { ru: 'Выберите доступную локацию. Подключитесь к подходящему серверу.', en: 'Choose an available location. Connect to a suitable server.', de: 'Verfügbaren Standort wählen. Mit einem passenden Server verbinden.', es: 'Elige una ubicación disponible. Conéctate a un servidor adecuado.', fr: 'Choisissez une localisation disponible. Connectez-vous à un serveur adapté.', pt: 'Escolha uma localização disponível. Conecte-se a um servidor adequado.', uk: 'Оберіть доступну локацію. Підключіться до відповідного сервера.' },
  COUNTRIES_SUB: {
    ru: 'Выбирайте локацию с низкой задержкой и стабильной скоростью — дома или в поездке.',
    en: 'Pick a low-latency location with stable speed — at home or while traveling.',
    de: 'Wählen Sie einen Standort mit niedriger Latenz und stabiler Geschwindigkeit — zuhause oder unterwegs.',
    es: 'Elige una ubicación con baja latencia y velocidad estable — en casa o de viaje.',
    fr: 'Choisissez un lieu à faible latence et vitesse stable — chez vous ou en voyage.',
    pt: 'Escolha um local com baixa latência e velocidade estável — em casa ou viajando.',
    uk: 'Обирайте локацію з низькою затримкою та стабільною швидкістю — вдома чи в подорожі.',
  },

  // How
  HOW_KICKER: { ru: 'Как работает VPN', en: 'How VPN works', de: 'Wie VPN funktioniert', es: 'Cómo funciona VPN', fr: 'Comment fonctionne un VPN', pt: 'Como funciona um VPN', uk: 'Як працює VPN' },
  HOW_TITLE: { ru: 'Что происходит, когда вы нажимаете Connect', en: 'What happens when you tap Connect', de: 'Was passiert, wenn Sie Connect tippen', es: 'Qué pasa cuando tocas Connect', fr: 'Ce qui se passe quand vous appuyez sur Connect', pt: 'O que acontece quando você toca em Connect', uk: 'Що відбувається, коли ви натискаєте Connect' },
  HOW_SUB: { ru: 'Пять шагов — от iPhone до защищённого выхода в интернет. Коротко и по делу.', en: 'Five steps—from your iPhone to a protected connection online. Short and clear.', de: 'Fünf Schritte—vom iPhone zum geschützten Internetzugang. Kurz und klar.', es: 'Cinco pasos: del iPhone a una conexión protegida. Breve y claro.', fr: 'Cinq étapes—de l’iPhone à une connexion protégée. Court et clair.', pt: 'Cinco passos—do iPhone à conexão protegida. Breve e claro.', uk: 'П’ять кроків — від iPhone до захищеного виходу в інтернет. Коротко та по суті.' },
  STEP1_TITLE: { ru: 'Подключение', en: 'Connection', de: 'Verbindung', es: 'Conexión', fr: 'Connexion', pt: 'Conexão', uk: 'Підключення' },
  STEP1_TEXT: { ru: 'FollowNet связывает ваш iPhone с VPN‑сервером в выбранной стране.', en: 'FollowNet links your iPhone to a VPN server in the country you picked.', de: 'FollowNet verbindet Ihr iPhone mit einem VPN‑Server im gewählten Land.', es: 'FollowNet conecta tu iPhone con un servidor VPN en el país elegido.', fr: 'FollowNet relie votre iPhone à un serveur VPN dans le pays choisi.', pt: 'FollowNet liga seu iPhone a um servidor VPN no país escolhido.', uk: 'FollowNet з’єднує ваш iPhone з VPN‑сервером у вибраній країні.' },
  STEP2_TITLE: { ru: 'Туннель', en: 'Tunnel', de: 'Tunnel', es: 'Túnel', fr: 'Tunnel', pt: 'Túnel', uk: 'Тунель' },
  STEP2_TEXT: { ru: 'Весь трафик идёт через защищённый канал — не напрямую через Wi‑Fi или мобильную сеть.', en: 'All traffic goes through a protected channel—not straight over Wi‑Fi or cellular.', de: 'Der gesamte Traffic läuft durch einen geschützten Kanal—nicht direkt über WLAN oder Mobilfunk.', es: 'Todo el tráfico pasa por un canal protegido—no directamente por Wi‑Fi o datos móviles.', fr: 'Tout le trafic passe par un canal protégé—pas directement via Wi‑Fi ou le réseau mobile.', pt: 'Todo o tráfego passa por um canal protegido—não diretamente pelo Wi‑Fi ou pela rede celular.', uk: 'Увесь трафік іде через захищений канал — не напряму через Wi‑Fi чи мобільну мережу.' },
  STEP3_TITLE: { ru: 'Шифрование', en: 'Encryption', de: 'Verschlüsselung', es: 'Cifrado', fr: 'Chiffrement', pt: 'Criptografia', uk: 'Шифрування' },
  STEP3_TEXT: { ru: 'Современное шифрование защищает данные от перехвата провайдером или в публичной сети Wi‑Fi.', en: 'Modern encryption protects your data from interception by your ISP or on public Wi‑Fi.', de: 'Moderne Verschlüsselung schützt Ihre Daten vor dem Mitlesen durch den Anbieter oder in öffentlichen WLANs.', es: 'El cifrado moderno protege tus datos frente a interceptaciones del operador o en redes Wi‑Fi públicas.', fr: 'Un chiffrement moderne protège vos données contre l’interception par l’opérateur ou sur un Wi‑Fi public.', pt: 'A criptografia moderna protege seus dados contra interceptação pela operadora ou em redes Wi‑Fi públicas.', uk: 'Сучасне шифрування захищає дані від перехоплення провайдером або в публічній мережі Wi‑Fi.' },
  STEP4_TITLE: { ru: 'VPN‑сервер', en: 'VPN server', de: 'VPN‑Server', es: 'Servidor VPN', fr: 'Serveur VPN', pt: 'Servidor VPN', uk: 'VPN‑сервер' },
  STEP4_TEXT: { ru: 'Сервер выходит в интернет за вас — запросы уходят уже из выбранной локации.', en: 'The server reaches the internet for you—requests leave from your chosen location.', de: 'Der Server geht für Sie ins Internet—Anfragen starten am gewählten Standort.', es: 'El servidor accede a internet por ti—las peticiones salen desde la ubicación elegida.', fr: 'Le serveur accède à internet pour vous—les requêtes partent du lieu choisi.', pt: 'O servidor acessa a internet por você—as requisições saem do local escolhido.', uk: 'Сервер виходить в інтернет за вас — запити йдуть уже з обраної локації.' },
  STEP5_TITLE: { ru: 'Новый IP', en: 'New IP', de: 'Neue IP', es: 'Nueva IP', fr: 'Nouvelle IP', pt: 'Novo IP', uk: 'Новий IP' },
  STEP5_TEXT: { ru: 'Сайты и приложения видят IP сервера, а не ваш домашний или мобильный адрес.', en: 'Sites and apps see the server’s IP—not your home or mobile address.', de: 'Websites und Apps sehen die Server‑IP—nicht Ihre Heim‑ oder Mobilfunkadresse.', es: 'Los sitios y las apps ven la IP del servidor, no tu dirección doméstica o móvil.', fr: 'Les sites et les apps voient l’adresse IP du serveur, pas celle de votre connexion fixe ou mobile.', pt: 'Sites e apps veem o IP do servidor, não o endereço da sua conexão residencial ou móvel.', uk: 'Сайти й додатки бачать IP сервера, а не вашу домашню чи мобільну адресу.' },

  // Apps
  APPS_KICKER: { ru: 'Приложения', en: 'Apps', de: 'Apps', es: 'Apps', fr: 'Apps', pt: 'Apps', uk: 'Додатки' },
  APPS_TITLE: {
    ru: 'Скачать FollowNet',
    en: 'Download FollowNet',
    de: 'FollowNet herunterladen',
    es: 'Descargar FollowNet',
    fr: 'Télécharger FollowNet',
    pt: 'Baixar FollowNet',
    uk: 'Завантажити FollowNet',
  },
  APPS_SUB: {
    ru: 'iOS — VPN на всё устройство. Chrome — защита браузера на десктопе.',
    en: 'iOS — full-device VPN. Chrome — browser protection on desktop.',
    de: 'iOS — VPN für das ganze Gerät. Chrome — Browser‑Schutz am Desktop.',
    es: 'iOS — VPN en todo el dispositivo. Chrome — protección del navegador en escritorio.',
    fr: 'iOS — VPN sur tout l’appareil. Chrome — protection navigateur sur bureau.',
    pt: 'iOS — VPN no dispositivo inteiro. Chrome — proteção do navegador no desktop.',
    uk: 'iOS — VPN на весь пристрій. Chrome — захист браузера на десктопі.',
  },
  APPS_MACOS_NOTE: {
    ru: 'macOS-приложение — скоро',
    en: 'macOS app — coming soon',
    de: 'macOS‑App — demnächst',
    es: 'App macOS — próximamente',
    fr: 'App macOS — bientôt',
    pt: 'App macOS — em breve',
    uk: 'Додаток macOS — незабаром',
  },
  STATUS_AVAILABLE: { ru: 'Доступно', en: 'Available', de: 'Verfügbar', es: 'Disponible', fr: 'Disponible', pt: 'Disponível', uk: 'Доступно' },
  STATUS_SOON: { ru: 'Скоро', en: 'Soon', de: 'Bald', es: 'Pronto', fr: 'Bientôt', pt: 'Em breve', uk: 'Скоро' },
  STATUS_IN_REVIEW: { ru: 'В ревью', en: 'In review', de: 'In Prüfung', es: 'En revisión', fr: 'En revue', pt: 'Em revisão', uk: 'На рев’ю' },
  CHROME_EXT_TITLE: { ru: 'Chrome', en: 'Chrome', de: 'Chrome', es: 'Chrome', fr: 'Chrome', pt: 'Chrome', uk: 'Chrome' },
  CHROME_EXT_SUB: { ru: 'VPN для браузера — в Chrome Web Store', en: 'Browser VPN — on Chrome Web Store', de: 'Browser‑VPN — im Chrome Web Store', es: 'VPN para navegador — en Chrome Web Store', fr: 'VPN navigateur — sur Chrome Web Store', pt: 'VPN para navegador — na Chrome Web Store', uk: 'VPN для браузера — у Chrome Web Store' },
  CHROME_EXT_CTA: { ru: 'Установить в Chrome', en: 'Add to Chrome', de: 'Zu Chrome hinzufügen', es: 'Añadir a Chrome', fr: 'Ajouter à Chrome', pt: 'Adicionar ao Chrome', uk: 'Встановити в Chrome' },
  IOS_SUB: {
    ru: 'Полный VPN в App Store',
    en: 'Full-device VPN on the App Store',
    de: 'Vollständiges VPN im App Store',
    es: 'VPN completo en App Store',
    fr: 'VPN complet sur l’App Store',
    pt: 'VPN completo na App Store',
    uk: 'Повний VPN в App Store',
  },
  DEV_SUB: { ru: 'В разработке', en: 'In development', de: 'In Entwicklung', es: 'En desarrollo', fr: 'En développement', pt: 'Em desenvolvimento', uk: 'У розробці' },

  // Pricing
  PRICING_KICKER: { ru: 'Цены', en: 'Pricing', de: 'Preise', es: 'Precios', fr: 'Tarifs', pt: 'Preços', uk: 'Ціни' },
  PRICING_TITLE: {
    ru: 'Простые тарифы',
    en: 'Simple pricing',
    de: 'Einfache Preise',
    es: 'Precios simples',
    fr: 'Tarifs simples',
    pt: 'Preços simples',
    uk: 'Прості тарифи',
  },
  PRICING_SUB_1: {
    ru: 'Оформите подписку в iOS‑приложении через App Store или оплатите картой на сайте, когда веб‑оплата доступна.',
    en: 'Subscribe in the iOS app through the App Store, or pay by card on the website when web checkout is available.',
    de: 'Abonnieren Sie in der iOS‑App über den App Store oder zahlen Sie bei verfügbarem Web‑Checkout per Karte auf der Website.',
    es: 'Suscríbete en la app para iOS mediante App Store o paga con tarjeta en la web cuando el pago web esté disponible.',
    fr: 'Souscrivez dans l’app iOS via l’App Store ou payez par carte sur le site lorsque le paiement web est disponible.',
    pt: 'Assine no app para iOS pela App Store ou pague com cartão no site quando o checkout web estiver disponível.',
    uk: 'Оформіть підписку в iOS‑додатку через App Store або оплатіть карткою на сайті, коли вебоплата доступна.',
  },
  PRICING_SUB_2: {
    ru: 'Пробный период 3 дня доступен только через App Store.',
    en: 'The 3-day trial is available only through the App Store.',
    de: 'Der 3‑tägige Testzeitraum ist nur über den App Store verfügbar.',
    es: 'La prueba de 3 días solo está disponible a través de App Store.',
    fr: 'L’essai de 3 jours est disponible uniquement via l’App Store.',
    pt: 'O período de teste de 3 dias está disponível somente pela App Store.',
    uk: 'Пробний період на 3 дні доступний лише через App Store.',
  },
  PRICING_FREE: { ru: 'Free', en: 'Free', de: 'Free', es: 'Gratis', fr: 'Gratuit', pt: 'Grátis', uk: 'Free' },
  PRICING_FREE_DESC: {
    ru: 'Реальный VPN с недельным лимитом — без карты.',
    en: 'A real VPN with a weekly cap — no card required.',
    de: 'Echtes VPN mit Wochenlimit — ohne Karte.',
    es: 'VPN real con límite semanal — sin tarjeta.',
    fr: 'Un vrai VPN avec plafond hebdo — sans carte.',
    pt: 'VPN real com limite semanal — sem cartão.',
    uk: 'Справжній VPN з тижневим лімітом — без картки.',
  },
  PRICING_FREE_CTA: {
    ru: 'Начать бесплатно',
    en: 'Start for free',
    de: 'Kostenlos starten',
    es: 'Empezar gratis',
    fr: 'Commencer gratuitement',
    pt: 'Começar grátis',
    uk: 'Почати безкоштовно',
  },
  PRICING_TRIAL_IOS: {
    ru: '3 дня бесплатно в App Store (годовой план)',
    en: '3-day free trial in the App Store (annual plan)',
    de: '3 Tage gratis im App Store (Jahresplan)',
    es: '3 días gratis en App Store (plan anual)',
    fr: '3 jours gratuits sur l’App Store (forfait annuel)',
    pt: '3 dias grátis na App Store (plano anual)',
    uk: '3 дні безкоштовно в App Store (річний план)',
  },
  PRICING_TRIAL_CTA: {
    ru: 'Скачать в App Store',
    en: 'Download on the App Store',
    de: 'Im App Store laden',
    es: 'Descargar en App Store',
    fr: 'Télécharger sur l’App Store',
    pt: 'Baixar na App Store',
    uk: 'Завантажити в App Store',
  },
  PRICING_NOTE: {
    ru: 'Если веб‑оплата включена, карта списывается через WayForPay. Покупки из App Store восстанавливаются в приложении.',
    en: 'When web checkout is enabled, card payments are processed by WayForPay. Restore App Store purchases in the app.',
    de: 'Wenn der Web‑Checkout aktiviert ist, verarbeitet WayForPay die Kartenzahlung. App‑Store‑Käufe stellen Sie in der App wieder her.',
    es: 'Cuando el pago web está habilitado, WayForPay procesa la tarjeta. Restaura las compras de App Store en la app.',
    fr: 'Lorsque le paiement web est activé, WayForPay traite le paiement par carte. Restaurez les achats de l’App Store dans l’app.',
    pt: 'Quando o checkout web está ativado, a WayForPay processa o pagamento com cartão. Restaure as compras da App Store no app.',
    uk: 'Коли вебоплату ввімкнено, платіж карткою обробляє WayForPay. Покупки з App Store відновлюються в додатку.',
  },
  PRICING_REGIONAL_NOTE: { ru: 'Цена в приложении зависит от страны и валюты App Store.', en: 'Price in the app depends on your country and App Store currency.', de: 'Der Preis in der App hängt von Land und Währung im App Store ab.', es: 'El precio en la app depende del país y la moneda de App Store.', fr: "Le prix dans l'app dépend du pays et de la devise de l'App Store.", pt: 'O preço no app depende do país e da moeda da App Store.', uk: 'Ціна в додатку залежить від країни та валюти App Store.' },

  WEB_CHECKOUT_EMAIL_LABEL: { ru: 'Email аккаунта FollowNet', en: 'FollowNet account email', de: 'FollowNet‑E-Mail', es: 'Email de cuenta FollowNet', fr: 'Email du compte FollowNet', pt: 'Email da conta FollowNet', uk: 'Email акаунта FollowNet' },
  WEB_CHECKOUT_EMAIL_PLACEHOLDER: {
    ru: 'Ваш email',
    en: 'Your email',
    de: 'Ihre E-Mail',
    es: 'Tu email',
    fr: 'Votre email',
    pt: 'Seu email',
    uk: 'Ваш email',
  },
  WEB_CHECKOUT_EMAIL_HINT: {
    ru: 'Введите email, который используете для входа в приложение FollowNet. Аккаунт должен быть создан заранее.',
    en: 'Enter the same email you use to sign in to the FollowNet app. Create your account in the app first.',
    de: 'Gib dieselbe E‑Mail ein, die du für die FollowNet-App nutzt. Konto zuerst in der App anlegen.',
    es: 'Introduce el mismo email que usas en FollowNet. Crea la cuenta en la app primero.',
    fr: 'Entrez le même email que dans l’app FollowNet. Créez d’abord le compte dans l’app.',
    pt: 'Digite o mesmo email do app FollowNet. Crie a conta no app antes.',
    uk: 'Введіть той самий email, що й у додатку FollowNet. Спочатку створіть акаунт у додатку.',
  },
  CHECKOUT_SUB_SESSION: {
    ru: 'Оплата привяжется к аккаунту, с которого вы открыли эту страницу.',
    en: 'Payment will be linked to the account that opened this page.',
    de: 'Die Zahlung wird mit dem Konto verknüpft, von dem du diese Seite geöffnet hast.',
    es: 'El pago se vincula a la cuenta que abrió esta página.',
    fr: 'Le paiement sera lié au compte qui a ouvert cette page.',
    pt: 'O pagamento será vinculado à conta que abriu esta página.',
    uk: 'Оплата привʼяжеться до акаунта, з якого ви відкрили цю сторінку.',
  },
  WEB_CHECKOUT_SESSION_BADGE: {
    ru: 'Анонимный вход',
    en: 'Anonymous account',
    de: 'Anonymer Zugang',
    es: 'Cuenta anónima',
    fr: 'Compte anonyme',
    pt: 'Conta anônima',
    uk: 'Анонімний вхід',
  },
  WEB_CHECKOUT_SESSION_HINT: {
    ru: 'Чек на почту не придёт, пока не свяжете email в приложении. Premium всё равно окажется на этом аккаунте — как покупка в App Store.',
    en: 'You won’t get a receipt by email until you link an email in the app. Premium still lands on this account — same as an App Store purchase.',
    de: 'Ohne verknüpfte E-Mail gibt es keine Quittung. Premium landet trotzdem auf diesem Konto — wie ein App-Store-Kauf.',
    es: 'No recibirás el recibo por email hasta que vincules uno en la app. Premium se activa en esta cuenta, como en App Store.',
    fr: 'Pas de reçu par email tant que vous n’avez pas lié d’email dans l’app. Premium s’active quand même sur ce compte, comme un achat App Store.',
    pt: 'Você não receberá o recibo por email até vincular um email no app. O Premium ainda entra nesta conta — como na App Store.',
    uk: 'Чек на пошту не прийде, доки не привʼяжете email у додатку. Premium усе одно буде на цьому акаунті — як покупка в App Store.',
  },
  WEB_CHECKOUT_TICKET_INVALID: {
    ru: 'Сессия оплаты истекла. Откройте оплату ещё раз из расширения или приложения.',
    en: 'Checkout session expired. Open payment again from the extension or the app.',
    de: 'Die Zahlungssitzung ist abgelaufen. Öffne die Zahlung erneut über die Erweiterung oder die App.',
    es: 'La sesión de pago caducó. Ábrela de nuevo desde la extensión o la app.',
    fr: 'La session de paiement a expiré. Rouvrez le paiement depuis l’extension ou l’app.',
    pt: 'A sessão de pagamento expirou. Abra de novo na extensão ou no app.',
    uk: 'Сесія оплати закінчилась. Відкрийте оплату ще раз із розширення або додатка.',
  },
  WEB_CHECKOUT_PAY_CTA: { ru: 'Оплатить картой (WayForPay)', en: 'Pay by card (WayForPay)', de: 'Mit Karte zahlen (WayForPay)', es: 'Pagar con tarjeta (WayForPay)', fr: 'Payer par carte (WayForPay)', pt: 'Pagar com cartão (WayForPay)', uk: 'Оплатити карткою (WayForPay)' },
  WEB_CHECKOUT_OPEN_PAGE: { ru: 'Перейти к оплате', en: 'Go to checkout', de: 'Zur Zahlung', es: 'Ir al pago', fr: 'Aller au paiement', pt: 'Ir para o checkout', uk: 'Перейти до оплати' },
  WEB_CHECKOUT_NEED_EMAIL: { ru: 'Введите email аккаунта.', en: 'Enter your account email.', de: 'Bitte Konto‑E-Mail eingeben.', es: 'Introduce el email de tu cuenta.', fr: 'Saisissez l’email de votre compte.', pt: 'Informe o email da sua conta.', uk: 'Введіть email акаунта.' },
  WEB_CHECKOUT_ERROR: { ru: 'Не удалось открыть оплату. Попробуйте позже.', en: 'Could not open checkout. Try again later.', de: 'Checkout konnte nicht geöffnet werden.', es: 'No se pudo abrir el pago.', fr: 'Impossible d’ouvrir le paiement.', pt: 'Não foi possível abrir o checkout.', uk: 'Не вдалося відкрити оплату.' },
  WEB_CHECKOUT_USER_NOT_FOUND: {
    ru: 'Аккаунт с этим email не найден. Сначала войдите в приложение FollowNet.',
    en: 'No FollowNet account with this email. Sign in to the app first.',
    de: 'Kein FollowNet-Konto mit dieser E-Mail. Zuerst in der App anmelden.',
    es: 'No hay cuenta FollowNet con este email. Inicia sesión en la app primero.',
    fr: 'Aucun compte FollowNet avec cet email. Connectez-vous d’abord dans l’app.',
    pt: 'Nenhuma conta FollowNet com este email. Entre no app primeiro.',
    uk: 'Акаунт з цим email не знайдено. Спочатку увійдіть у додаток FollowNet.',
  },
  WEB_CHECKOUT_RECURRING_HINT: {
    ru: 'Подписка продлевается автоматически. Отменить можно в личном кабинете WayForPay или через поддержку.',
    en: 'Subscription renews automatically. Cancel via WayForPay or contact support.',
    de: 'Abo verlängert sich automatisch. Kündigung über WayForPay oder Support.',
    es: 'La suscripción se renueva automáticamente. Cancela en WayForPay o con soporte.',
    fr: 'L’abonnement se renouvelle automatiquement. Annulation via WayForPay ou le support.',
    pt: 'A assinatura renova automaticamente. Cancele no WayForPay ou com o suporte.',
    uk: 'Підписка продовжується автоматично. Скасувати можна в WayForPay або через підтримку.',
  },
  WEB_CHECKOUT_WAYFORPAY_HINT: {
    ru: 'Оплата в долларах США (USD) через WayForPay. Premium активируется на всех устройствах с этим аккаунтом.',
    en: 'Payment in US dollars (USD) via WayForPay. Premium activates on all devices with this account.',
    de: 'Zahlung in US-Dollar (USD) über WayForPay. Premium gilt für alle Geräte mit diesem Konto.',
    es: 'Pago en dólares estadounidenses (USD) con WayForPay. Premium en todos los dispositivos con esta cuenta.',
    fr: 'Paiement en dollars US (USD) via WayForPay. Premium sur tous les appareils avec ce compte.',
    pt: 'Pagamento em dólares americanos (USD) via WayForPay. Premium em todos os dispositivos desta conta.',
    uk: 'Оплата в доларах США (USD) через WayForPay. Premium на всіх пристроях з цим акаунтом.',
  },
  WEB_CHECKOUT_ACTIVE_WAYFORPAY_BLOCK: {
    ru: 'У этого аккаунта уже есть активная подписка на сайте. Повторная оплата не нужна — продление спишется автоматически. Доступ до {{DATE}}.',
    en: 'This account already has an active web subscription. You don’t need to pay again — renewal is automatic. Active until {{DATE}}.',
    de: 'Für dieses Konto läuft bereits ein Web‑Abo. Keine zweite Zahlung nötig — Verlängerung erfolgt automatisch. Gültig bis {{DATE}}.',
    es: 'Esta cuenta ya tiene una suscripción web activa. No hace falta pagar otra vez; la renovación es automática. Válida hasta {{DATE}}.',
    fr: 'Ce compte a déjà un abonnement web actif. Pas besoin de payer à nouveau — le renouvellement est automatique. Valide jusqu’au {{DATE}}.',
    pt: 'Esta conta já tem uma assinatura web ativa. Não é preciso pagar de novo — a renovação é automática. Válida até {{DATE}}.',
    uk: 'У цього акаунта вже є активна веб‑підписка. Повторна оплата не потрібна — продовження спишеться автоматично. Діє до {{DATE}}.',
  },
  WEB_CHECKOUT_ACTIVE_APPLE_BLOCK: {
    ru: 'У этого аккаунта уже активен Premium через App Store. Повторная оплата на сайте не нужна. Доступ до {{DATE}}. Управление — в Настройки → Apple ID → Подписки.',
    en: 'This account already has Premium via the App Store. No need to pay again on the website. Active until {{DATE}}. Manage in Settings → Apple ID → Subscriptions.',
    de: 'Für dieses Konto ist Premium bereits über den App Store aktiv. Keine erneute Web‑Zahlung nötig. Gültig bis {{DATE}}. Verwalten unter Einstellungen → Apple‑ID → Abos.',
    es: 'Esta cuenta ya tiene Premium en App Store. No hace falta pagar otra vez en la web. Válido hasta {{DATE}}. Gestiona en Ajustes → Apple ID → Suscripciones.',
    fr: 'Ce compte a déjà Premium via l’App Store. Pas besoin de payer à nouveau sur le site. Valide jusqu’au {{DATE}}. Gérer dans Réglages → Apple ID → Abonnements.',
    pt: 'Esta conta já tem Premium pela App Store. Não é preciso pagar de novo no site. Válido até {{DATE}}. Gerencie em Ajustes → Apple ID → Assinaturas.',
    uk: 'У цього акаунта вже активний Premium через App Store. Повторна оплата на сайті не потрібна. Діє до {{DATE}}. Керування — Налаштування → Apple ID → Підписки.',
  },
  WEB_CHECKOUT_ACTIVE_PREMIUM_BLOCK: {
    ru: 'У этого аккаунта уже активен Premium. Повторная оплата не нужна. Доступ до {{DATE}}.',
    en: 'This account already has active Premium. No need to pay again. Active until {{DATE}}.',
    de: 'Für dieses Konto ist Premium bereits aktiv. Keine erneute Zahlung nötig. Gültig bis {{DATE}}.',
    es: 'Esta cuenta ya tiene Premium activo. No hace falta pagar otra vez. Válido hasta {{DATE}}.',
    fr: 'Ce compte a déjà Premium actif. Pas besoin de payer à nouveau. Valide jusqu’au {{DATE}}.',
    pt: 'Esta conta já tem Premium ativo. Não é preciso pagar de novo. Válido até {{DATE}}.',
    uk: 'У цього акаунта вже активний Premium. Повторна оплата не потрібна. Діє до {{DATE}}.',
  },

  PADDLE_EMAIL_LABEL: { ru: 'Email аккаунта FollowNet', en: 'FollowNet account email', de: 'FollowNet‑E-Mail', es: 'Email de cuenta FollowNet', fr: 'Email du compte FollowNet', pt: 'Email da conta FollowNet', uk: 'Email акаунта FollowNet' },
  PADDLE_EMAIL_PLACEHOLDER: {
    ru: 'Ваш email',
    en: 'Your email',
    de: 'Ihre E-Mail',
    es: 'Tu email',
    fr: 'Votre email',
    pt: 'Seu email',
    uk: 'Ваш email',
  },
  PADDLE_EMAIL_HINT: {
    ru: 'Введите email, который используете для входа в приложение FollowNet.',
    en: 'Enter the same email you use to sign in to the FollowNet app.',
    de: 'Gib dieselbe E‑Mail ein, die du für die FollowNet-App nutzt.',
    es: 'Introduce el mismo email que usas para iniciar sesión en FollowNet.',
    fr: 'Entrez le même email que vous utilisez dans l’app FollowNet.',
    pt: 'Digite o mesmo email usado para entrar no app FollowNet.',
    uk: 'Введіть той самий email, який використовуєте у додатку FollowNet.',
  },
  PADDLE_PAY_WEB_CTA: { ru: 'Оплатить на сайте', en: 'Pay on the website', de: 'Auf der Website zahlen', es: 'Pagar en la web', fr: 'Payer sur le site', pt: 'Pagar no site', uk: 'Оплатити на сайті' },
  PADDLE_OPEN_CHECKOUT_PAGE: { ru: 'Перейти к оплате', en: 'Go to checkout', de: 'Zur Zahlung', es: 'Ir al pago', fr: 'Aller au paiement', pt: 'Ir para o checkout', uk: 'Перейти до оплати' },
  PADDLE_NOT_CONFIGURED: { ru: 'Оплата Premium на сайте не используется — оформите подписку в приложении для iOS (App Store).', en: 'Premium is not sold on the website — subscribe in the FollowNet iOS app (App Store).', de: 'Premium wird auf der Website nicht verkauft — bitte in der FollowNet‑iOS‑App (App Store) abonnieren.', es: 'No vendemos Premium en la web — contrátalo en la app FollowNet para iOS (App Store).', fr: 'Le Premium n’est pas vendu sur le site — souscrivez dans l’app FollowNet iOS (App Store).', pt: 'Premium não é vendido no site — assine no app FollowNet para iOS (App Store).', uk: 'Premium на сайті не продається — оформіть підписку в додатку FollowNet для iOS (App Store).' },
  PADDLE_NOT_CONFIGURED_HELP: {
    ru: 'Если веб‑оплата снова понадобится, мы обновим эту страницу и условия. Сейчас единственный способ — App Store.',
    en: 'If web checkout returns later, we will update this page and the Terms. Right now, subscriptions are App Store only.',
    de: 'Falls Web‑Checkout zurückkehrt, aktualisieren wir Seite und Bedingungen. Derzeit nur App Store.',
    es: 'Si el pago web vuelve, actualizaremos esta página y los términos. Por ahora solo App Store.',
    fr: 'Si le paiement web revient, nous mettrons à jour cette page et les conditions. Pour l’instant, uniquement l’App Store.',
    pt: 'Se o checkout web voltar, atualizaremos esta página e os termos. Por enquanto, somente App Store.',
    uk: 'Якщо веб‑оплата з’явиться знову, оновимо цю сторінку та умови. Зараз лише App Store.',
  },
  PADDLE_NEED_EMAIL: { ru: 'Введите email аккаунта.', en: 'Enter your account email.', de: 'Bitte Konto‑E-Mail eingeben.', es: 'Introduce el email de tu cuenta.', fr: 'Saisissez l’email de votre compte.', pt: 'Informe o email da sua conta.', uk: 'Введіть email акаунта.' },
  PADDLE_NEED_PRICE_ID: {
    ru: 'Для выбранного плана {{PLAN}} не задан Price ID. Открой src/environments/paddle.secrets.ts → в объекте priceIds заполни ключ {{PLAN}} значением pri_… из Paddle (Catalog → Prices) и пересобери сайт.',
    en: 'No Price ID for plan {{PLAN}}. Open src/environments/paddle.secrets.ts → set priceIds.{{PLAN}} to your pri_… from Paddle (Catalog → Prices), then rebuild.',
    de: 'Keine Price‑ID für Plan {{PLAN}}. In paddle.secrets.ts priceIds.{{PLAN}} = pri_… aus Paddle (Catalog → Prices), dann neu bauen.',
    es: 'Sin Price ID para el plan {{PLAN}}. En paddle.secrets.ts pon priceIds.{{PLAN}} = pri_… desde Paddle (Catalog → Prices) y recompila.',
    fr: 'Pas de Price ID pour le plan {{PLAN}}. Dans paddle.secrets.ts, mets priceIds.{{PLAN}} = pri_… depuis Paddle (Catalog → Prices), puis rebuild.',
    pt: 'Sem Price ID para o plano {{PLAN}}. Em paddle.secrets.ts defina priceIds.{{PLAN}} = pri_… do Paddle (Catalog → Prices) e faça rebuild.',
    uk: 'Для плану {{PLAN}} не задано Price ID. У paddle.secrets.ts заповни priceIds.{{PLAN}} значенням pri_… з Paddle (Catalog → Prices) і перезбери сайт.',
  },
  PADDLE_TRIAL_HINT: {
    ru: 'Условия оплаты и продления указаны в окне оплаты до подтверждения. Пробный период доступен только через App Store.',
    en: 'Payment and renewal terms appear in checkout before confirmation. The trial is available only through the App Store.',
    de: 'Zahlungs- und Verlängerungsbedingungen werden vor der Bestätigung angezeigt. Der Testzeitraum ist nur über den App Store verfügbar.',
    es: 'Las condiciones de pago y renovación aparecen antes de confirmar. La prueba solo está disponible mediante App Store.',
    fr: 'Les conditions de paiement et de renouvellement sont affichées avant confirmation. L’essai est disponible uniquement via l’App Store.',
    pt: 'As condições de pagamento e renovação aparecem antes da confirmação. O período de teste está disponível somente pela App Store.',
    uk: 'Умови оплати та продовження показуються до підтвердження. Пробний період доступний лише через App Store.',
  },
  PADDLE_CHECKOUT_ERROR: { ru: 'Не удалось открыть оплату. Попробуйте позже.', en: 'Could not open checkout. Try again later.', de: 'Checkout konnte nicht geöffnet werden.', es: 'No se pudo abrir el pago.', fr: 'Impossible d’ouvrir le paiement.', pt: 'Não foi possível abrir o checkout.', uk: 'Не вдалося відкрити оплату.' },
  PADDLE_ACTIVE_SUBSCRIPTION_BLOCK: {
    ru: 'У этого аккаунта уже есть активная подписка на сайте. Повторная оплата не нужна — продление спишется автоматически. Доступ до {{DATE}}.',
    en: 'This account already has an active web subscription. You don’t need to pay again — renewal is automatic. Active until {{DATE}}.',
    de: 'Für dieses Konto läuft bereits ein Web‑Abo. Keine zweite Zahlung nötig — Verlängerung erfolgt automatisch. Gültig bis {{DATE}}.',
    es: 'Esta cuenta ya tiene una suscripción web activa. No hace falta pagar otra vez; la renovación es automática. Válida hasta {{DATE}}.',
    fr: 'Ce compte a déjà un abonnement web actif. Pas besoin de payer à nouveau — le renouvellement est automatique. Valide jusqu’au {{DATE}}.',
    pt: 'Esta conta já tem uma assinatura web ativa. Não é preciso pagar de novo — a renovação é automática. Válida até {{DATE}}.',
    uk: 'У цього акаунта вже є активна веб‑підписка. Повторна оплата не потрібна — продовження спишеться автоматично. Діє до {{DATE}}.',
  },
  WEB_CHECKOUT_PAUSED_TITLE: {
    ru: 'Оплата на сайте временно недоступна',
    en: 'Web checkout is temporarily unavailable',
    de: 'Web‑Checkout vorübergehend nicht verfügbar',
    es: 'El pago web no está disponible temporalmente',
    fr: 'Paiement web temporairement indisponible',
    pt: 'Checkout web temporariamente indisponível',
    uk: 'Оплата на сайті тимчасово недоступна',
  },
  WEB_CHECKOUT_PAUSED_CHECKOUT: {
    ru: 'Мы обновляем способ оплаты на сайте. Пока оформите Premium в приложении FollowNet для iOS (App Store).',
    en: 'We’re updating how website payments work. For now, subscribe to Premium in the FollowNet iOS app (App Store).',
    de: 'Wir passen die Website‑Zahlung an. Premium derzeit in der FollowNet‑iOS‑App (App Store) abschließen.',
    es: 'Estamos actualizando el pago web. Por ahora, contrata Premium en la app FollowNet para iOS (App Store).',
    fr: 'Nous mettons à jour le paiement web. Pour l’instant, souscrivez au Premium dans l’app FollowNet iOS (App Store).',
    pt: 'Estamos atualizando o pagamento no site. Por enquanto, assine o Premium no app FollowNet para iOS (App Store).',
    uk: 'Ми оновлюємо оплату на сайті. Поки що оформіть Premium у додатку FollowNet для iOS (App Store).',
  },
  WEB_CHECKOUT_PAUSED_APP_HINT: {
    ru: 'Спасибо за понимание. Вопросы — через поддержку в приложении или на сайте.',
    en: 'Thanks for your patience. Questions — use in‑app support or the website contact options.',
    de: 'Danke für Ihre Geduld. Fragen — App‑Support oder Website‑Kontakt.',
    es: 'Gracias por tu paciencia. Dudas — soporte en la app o contacto en la web.',
    fr: 'Merci de votre patience. Questions — support dans l’app ou contact sur le site.',
    pt: 'Obrigado pela paciência. Dúvidas — suporte no app ou contato no site.',
    uk: 'Дякуємо за розуміння. Питання — підтримка в додатку або контакти на сайті.',
  },
  WEB_CHECKOUT_PAUSED_HOME: {
    ru: 'Оплата на сайте временно отключена — Premium можно оформить в приложении для iOS (App Store).',
    en: 'Website checkout is temporarily off — get Premium in the iOS app (App Store).',
    de: 'Website‑Checkout vorübergehend aus — Premium in der iOS‑App (App Store).',
    es: 'Pago web temporalmente desactivado — Premium en la app iOS (App Store).',
    fr: 'Paiement web temporairement désactivé — Premium dans l’app iOS (App Store).',
    pt: 'Checkout web temporariamente desligado — Premium no app iOS (App Store).',
    uk: 'Оплату на сайті тимчасово вимкнено — Premium у додатку для iOS (App Store).',
  },
  CHECKOUT_BACK: { ru: '← Назад к тарифам', en: '← Back to pricing', de: '← Zurück zu Preisen', es: '← Volver a precios', fr: '← Retour aux tarifs', pt: '← Voltar aos preços', uk: '← Назад до тарифів' },
  CHECKOUT_TITLE: { ru: 'Оплата Premium', en: 'Premium checkout', de: 'Premium-Zahlung', es: 'Pago Premium', fr: 'Paiement Premium', pt: 'Checkout Premium', uk: 'Оплата Premium' },
  CHECKOUT_SUB: { ru: 'Выберите план и завершите оплату на отдельной странице.', en: 'Pick a plan and complete payment on this dedicated page.', de: 'Wähle einen Plan und schließe die Zahlung hier ab.', es: 'Elige un plan y completa el pago en esta página.', fr: 'Choisissez un forfait et terminez le paiement sur cette page.', pt: 'Escolha um plano e conclua o pagamento nesta página.', uk: 'Оберіть план і завершіть оплату на окремій сторінці.' },
  CHECKOUT_SECTION_PLAN: {
    ru: 'Период',
    en: 'Billing period',
    de: 'Laufzeit',
    es: 'Periodo',
    fr: 'Période',
    pt: 'Período',
    uk: 'Період',
  },
  CHECKOUT_TRUST: {
    ru: 'Premium можно оформить через App Store или, когда веб‑оплата включена, картой через WayForPay. Пробный период доступен только в App Store.',
    en: 'Subscribe to Premium through the App Store or, when web checkout is enabled, pay by card through WayForPay. The trial is App Store only.',
    de: 'Premium ist über den App Store oder bei aktiviertem Web‑Checkout per Karte über WayForPay erhältlich. Der Testzeitraum gilt nur im App Store.',
    es: 'Suscríbete a Premium mediante App Store o, cuando el pago web esté habilitado, paga con tarjeta mediante WayForPay. La prueba solo está disponible en App Store.',
    fr: 'Souscrivez au Premium via l’App Store ou, lorsque le paiement web est activé, payez par carte via WayForPay. L’essai est réservé à l’App Store.',
    pt: 'Assine o Premium pela App Store ou, quando o checkout web estiver ativado, pague com cartão pela WayForPay. O período de teste está disponível somente na App Store.',
    uk: 'Premium можна оформити через App Store або, коли вебоплату ввімкнено, карткою через WayForPay. Пробний період доступний лише в App Store.',
  },
  CHECKOUT_SUCCESS_TITLE: {
    ru: 'Оплата прошла успешно',
    en: 'Payment successful',
    de: 'Zahlung erfolgreich',
    es: 'Pago exitoso',
    fr: 'Paiement réussi',
    pt: 'Pagamento concluído',
    uk: 'Оплату успішно проведено',
  },
  CHECKOUT_SUCCESS_TEXT: {
    ru: 'Подписка активируется в течение минуты. Если не обновилось — перезапустите приложение.',
    en: 'Your subscription should activate within a minute. If not, reopen the app.',
    de: 'Das Abo wird in der Regel innerhalb einer Minute aktiviert. Sonst App neu öffnen.',
    es: 'La suscripción se activa normalmente en un minuto. Si no, vuelve a abrir la app.',
    fr: "L’abonnement s’active normalement en une minute. Sinon, rouvrez l’application.",
    pt: 'A assinatura normalmente é ativada em até um minuto. Caso contrário, reabra o app.',
    uk: 'Підписка зазвичай активується протягом хвилини. Якщо ні — перезапустіть додаток.',
  },
  CHECKOUT_CANCEL_TITLE: {
    ru: 'Оплата не завершена',
    en: 'Checkout was not completed',
    de: 'Zahlung nicht abgeschlossen',
    es: 'Pago no completado',
    fr: 'Paiement non finalisé',
    pt: 'Pagamento não concluído',
    uk: 'Оплату не завершено',
  },
  CHECKOUT_CANCEL_TEXT: {
    ru: 'Вы можете выбрать план и попробовать снова в любой момент.',
    en: 'You can choose a plan and try again anytime.',
    de: 'Sie können jederzeit einen Plan wählen und es erneut versuchen.',
    es: 'Puedes elegir un plan e intentarlo de nuevo en cualquier momento.',
    fr: 'Vous pouvez choisir un forfait et réessayer à tout moment.',
    pt: 'Você pode escolher um plano e tentar novamente a qualquer momento.',
    uk: 'Ви можете обрати план і спробувати знову будь-коли.',
  },
  PRICE_FOREVER: {
    ru: 'с недельным лимитом',
    en: 'with weekly limit',
    de: 'mit Wochenlimit',
    es: 'con límite semanal',
    fr: 'avec limite hebdo',
    pt: 'com limite semanal',
    uk: 'з тижневим лімітом',
  },
  FREE_FEATURE_1: { ru: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2', en: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2', de: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2', es: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2', fr: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2', pt: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2', uk: 'IKEv2 · WireGuard · AmneziaWG · Hysteria2' },
  FREE_FEATURE_2: { ru: 'Бесплатные серверы', en: 'Free servers', de: 'Kostenlose Server', es: 'Servidores gratis', fr: 'Serveurs gratuits', pt: 'Servidores grátis', uk: 'Безкоштовні сервери' },
  FREE_FEATURE_3: {
    ru: 'Недельный лимит трафика',
    en: 'Weekly traffic limit',
    de: 'Wöchentliches Traffic‑Limit',
    es: 'Límite de tráfico semanal',
    fr: 'Limite de trafic hebdomadaire',
    pt: 'Limite de tráfego semanal',
    uk: 'Тижневий ліміт трафіку',
  },
  PREMIUM_DESC: {
    ru: 'Безлимит, все серверы и до 5 устройств.',
    en: 'Unlimited, all servers, up to 5 devices.',
    de: 'Unbegrenzt, alle Server, bis zu 5 Geräte.',
    es: 'Ilimitado, todos los servidores, hasta 5 dispositivos.',
    fr: 'Illimité, tous les serveurs, jusqu’à 5 appareils.',
    pt: 'Ilimitado, todos os servidores, até 5 dispositivos.',
    uk: 'Безліміт, усі сервери та до 5 пристроїв.',
  },
  PREMIUM_FEATURE_2: { ru: 'Премиум‑серверы', en: 'Premium servers', de: 'Premium‑Server', es: 'Servidores Premium', fr: 'Serveurs Premium', pt: 'Servidores Premium', uk: 'Преміум‑сервери' },
  PREMIUM_FEATURE_3: { ru: 'Безлимитный трафик', en: 'Unlimited traffic', de: 'Unbegrenzter Traffic', es: 'Tráfico ilimitado', fr: 'Trafic illimité', pt: 'Tráfego ilimitado', uk: 'Безлімітний трафік' },
  PREMIUM_FEATURE_4: { ru: 'До 5 устройств', en: 'Up to 5 devices', de: 'Bis zu 5 Geräte', es: 'Hasta 5 dispositivos', fr: "Jusqu’à 5 appareils", pt: 'Até 5 dispositivos', uk: 'До 5 пристроїв' },
  PREMIUM_PLANS_ARIA: { ru: 'Планы Premium', en: 'Premium plans', de: 'Premium‑Pläne', es: 'Planes Premium', fr: 'Forfaits Premium', pt: 'Planos Premium', uk: 'Плани Premium' },
  PREMIUM_PLAN_M1: { ru: '1 месяц', en: '1 month', de: '1 Monat', es: '1 mes', fr: '1 mois', pt: '1 mês', uk: '1 місяць' },
  PREMIUM_PLAN_Y1: { ru: '1 год', en: '1 year', de: '1 Jahr', es: '1 año', fr: '1 an', pt: '1 ano', uk: '1 рік' },
  PRICE_PER_MONTH_SUFFIX: { ru: '/мес', en: '/mo', de: '/Mon.', es: '/mes', fr: '/mois', pt: '/mês', uk: '/міс' },
  PREMIUM_SAVE_Y1: { ru: 'экономия ~{{PCT}}%', en: 'save ~{{PCT}}%', de: 'spare ~{{PCT}}%', es: 'ahorra ~{{PCT}}%', fr: 'économisez ~{{PCT}}%', pt: 'economize ~{{PCT}}%', uk: 'економія ~{{PCT}}%' },

  // FAQ
  FAQ_KICKER: { ru: 'FAQ', en: 'FAQ', de: 'FAQ', es: 'FAQ', fr: 'FAQ', pt: 'FAQ', uk: 'FAQ' },
  FAQ_TITLE: { ru: 'Частые вопросы', en: 'Common questions', de: 'Häufige Fragen', es: 'Preguntas frecuentes', fr: 'Questions fréquentes', pt: 'Perguntas frequentes', uk: 'Поширені питання' },
  FAQ_SUB: { ru: 'Про Free и Premium, протоколы, Smart Connect, Chrome и подключение — коротко и по делу.', en: 'About Free and Premium, protocols, Smart Connect, Chrome, and connection — quick and clear.', de: 'Über Free und Premium, Protokolle, Smart Connect, Chrome und Verbindung — kurz und klar.', es: 'Sobre Free y Premium, protocolos, Smart Connect, Chrome y conexión — breve y claro.', fr: 'Sur Free et Premium, protocoles, Smart Connect, Chrome et connexion — clair et bref.', pt: 'Sobre Free e Premium, protocolos, Smart Connect, Chrome e conexão — rápido e claro.', uk: 'Про Free і Premium, протоколи, Smart Connect, Chrome і підключення — коротко та по суті.' },
  FAQ_READ_MORE: { ru: 'Подробнее', en: 'Read more', de: 'Mehr erfahren', es: 'Más información', fr: 'En savoir plus', pt: 'Saiba mais', uk: 'Докладніше' },

  FAQ_Q1: { ru: 'Можно пользоваться бесплатно?', en: 'Can I use it for free?', de: 'Kann ich es kostenlos nutzen?', es: '¿Se puede usar gratis?', fr: 'Peut‑on l’utiliser gratuitement ?', pt: 'Posso usar de graça?', uk: 'Чи можна користуватися безкоштовно?' },
  FAQ_A1: { ru: 'Да. В Free — все протоколы (IKEv2, WireGuard, AmneziaWG, Hysteria2), Smart Connect, бесплатные серверы и лимит трафика. Premium добавляет премиум‑серверы, безлимит и до 5 устройств.', en: 'Yes. Free includes all protocols (IKEv2, WireGuard, AmneziaWG, Hysteria2), Smart Connect, free servers, and a traffic cap. Premium adds premium servers, unlimited traffic, and up to 5 devices.', de: 'Ja. Free: alle Protokolle (IKEv2, WireGuard, AmneziaWG, Hysteria2), Smart Connect, kostenlose Server und Traffic‑Limit. Premium: Premium‑Server, unbegrenzter Traffic, bis zu 5 Geräte.', es: 'Sí. Free incluye todos los protocolos (IKEv2, WireGuard, AmneziaWG, Hysteria2), Smart Connect, servidores gratis y límite de tráfico. Premium: servidores premium, tráfico ilimitado y hasta 5 dispositivos.', fr: 'Oui. Free : tous les protocoles (IKEv2, WireGuard, AmneziaWG, Hysteria2), Smart Connect, serveurs gratuits et plafond de trafic. Premium : serveurs premium, trafic illimité et jusqu’à 5 appareils.', pt: 'Sim. Free inclui todos os protocolos (IKEv2, WireGuard, AmneziaWG, Hysteria2), Smart Connect, servidores grátis e limite de tráfego. Premium: servidores premium, tráfego ilimitado e até 5 dispositivos.', uk: 'Так. У Free — усі протоколи (IKEv2, WireGuard, AmneziaWG, Hysteria2), Smart Connect, безкоштовні сервери та ліміт трафіку. Premium додає преміум‑сервери, безліміт і до 5 пристроїв.' },

  FAQ_Q2: { ru: 'Как работает вход без пароля?', en: 'How does passwordless login work?', de: 'Wie funktioniert Login ohne Passwort?', es: '¿Cómo funciona el acceso sin contraseña?', fr: 'Comment fonctionne la connexion sans mot de passe ?', pt: 'Como funciona o login sem senha?', uk: 'Як працює вхід без пароля?' },
  FAQ_A2: { ru: 'Вы вводите email — мы отправляем код. Вводите код в приложении и входите. Пароль не нужен.', en: 'Enter your email — we send a code. Enter the code in the app to sign in. No password needed.', de: 'Sie geben Ihre E‑Mail ein — wir senden einen Code. Code in der App eingeben und einloggen. Kein Passwort nötig.', es: 'Ingresas tu email y enviamos un código. Lo introduces en la app y entras. Sin contraseña.', fr: "Vous saisissez votre email — nous envoyons un code. Saisissez-le dans l’app pour vous connecter. Pas de mot de passe.", pt: 'Você informa o email — enviamos um código. Digite o código no app e entre. Sem senha.', uk: 'Ви вводите email — ми надсилаємо код. Вводите код у додатку і входите. Пароль не потрібен.' },

  FAQ_Q3: { ru: 'Что входит в Premium?', en: "What's included in Premium?", de: 'Was ist in Premium enthalten?', es: '¿Qué incluye Premium?', fr: 'Que contient Premium ?', pt: 'O que inclui o Premium?', uk: 'Що входить у Premium?' },
  FAQ_A3: { ru: 'Премиум‑серверы, безлимитный трафик и до 5 устройств на аккаунт. Подписку можно оформить через App Store или на сайте, когда веб‑оплата доступна.', en: 'Premium servers, unlimited traffic, and up to 5 devices per account. Subscribe through the App Store or on the website when web checkout is available.', de: 'Premium‑Server, unbegrenzter Traffic und bis zu 5 Geräte pro Konto. Das Abo ist über den App Store oder bei verfügbarem Web‑Checkout auf der Website erhältlich.', es: 'Servidores Premium, tráfico ilimitado y hasta 5 dispositivos por cuenta. Suscríbete mediante App Store o en la web cuando el pago web esté disponible.', fr: 'Serveurs Premium, trafic illimité et jusqu’à 5 appareils par compte. Souscrivez via l’App Store ou sur le site lorsque le paiement web est disponible.', pt: 'Servidores Premium, tráfego ilimitado e até 5 dispositivos por conta. Assine pela App Store ou pelo site quando o checkout web estiver disponível.', uk: 'Преміум‑сервери, безлімітний трафік і до 5 пристроїв на акаунт. Підписку можна оформити через App Store або на сайті, коли вебоплата доступна.' },

  FAQ_Q4: { ru: 'Что такое DNS‑профили?', en: 'What are DNS profiles?', de: 'Was sind DNS‑Profile?', es: '¿Qué son los perfiles DNS?', fr: 'Que sont les profils DNS ?', pt: 'O que são perfis DNS?', uk: 'Що таке DNS‑профілі?' },
  FAQ_A4: { ru: 'В настройках можно выбрать DNS: AdGuard, Cloudflare или Google — под блокировку рекламы, скорость или совместимость.', en: 'In settings you can pick AdGuard, Cloudflare, or Google DNS—for blocking, speed, or compatibility.', de: 'In den Einstellungen wählen Sie AdGuard, Cloudflare oder Google DNS—für Blockierung, Speed oder Kompatibilität.', es: 'En ajustes puedes elegir AdGuard, Cloudflare o Google DNS—para bloqueo, velocidad o compatibilidad.', fr: 'Dans les réglages, choisissez AdGuard, Cloudflare ou Google DNS—blocage, vitesse ou compatibilité.', pt: 'Nas configurações, escolha AdGuard, Cloudflare ou Google DNS—bloqueio, velocidade ou compatibilidade.', uk: 'У налаштуваннях можна вибрати DNS: AdGuard, Cloudflare або Google — під блокування, швидкість чи сумісність.' },

  FAQ_Q5: { ru: 'Как установить расширение для Chrome?', en: 'How do I install the Chrome extension?', de: 'Wie installiere ich die Chrome‑Erweiterung?', es: '¿Cómo instalo la extensión de Chrome?', fr: 'Comment installer l’extension Chrome ?', pt: 'Como instalo a extensão do Chrome?', uk: 'Як встановити розширення для Chrome?' },
  FAQ_A5: { ru: 'Откройте FollowNet VPN в Chrome Web Store и нажмите «Установить». Войдите с тем же аккаунтом, что и в iOS: статус Premium синхронизируется через аккаунт.', en: 'Open FollowNet VPN in the Chrome Web Store and click Add to Chrome. Sign in with the same account as on iOS; Premium status syncs through your account.', de: 'Öffnen Sie FollowNet VPN im Chrome Web Store und klicken Sie auf „Hinzufügen“. Melden Sie sich mit demselben Konto wie unter iOS an; der Premium‑Status wird über Ihr Konto synchronisiert.', es: 'Abre FollowNet VPN en Chrome Web Store y pulsa Añadir. Inicia sesión con la misma cuenta que en iOS; el estado Premium se sincroniza mediante tu cuenta.', fr: 'Ouvrez FollowNet VPN dans le Chrome Web Store et cliquez sur Ajouter. Connectez‑vous avec le même compte que sur iOS ; le statut Premium se synchronise via votre compte.', pt: 'Abra o FollowNet VPN na Chrome Web Store e clique em Adicionar. Entre com a mesma conta usada no iOS; o status Premium é sincronizado pela conta.', uk: 'Відкрийте FollowNet VPN у Chrome Web Store і натисніть «Встановити». Увійдіть із тим самим акаунтом, що й в iOS: статус Premium синхронізується через акаунт.' },

  FAQ_Q6: { ru: 'Как работает пробный период 3 дня?', en: 'How does the 3‑day trial work?', de: 'Wie funktioniert der 3‑Tage‑Test?', es: '¿Cómo funciona la prueba de 3 días?', fr: "Comment fonctionne l’essai de 3 jours ?", pt: 'Como funciona o teste de 3 dias?', uk: 'Як працює пробний період на 3 дні?' },
  FAQ_A6: { ru: 'Пробный период 3 дня доступен через App Store на годовом плане при первой подписке Premium (для подходящих пользователей). После его окончания подписка автоматически продлевается по цене плана в приложении. Управление и отмена — в подписках Apple (Настройки → Apple ID → Подписки).', en: 'An App Store 3-day free trial is available on the annual plan with your first Premium subscription (for eligible users). After the trial, your subscription auto-renews at the in-app plan price. Manage or cancel in Apple subscriptions (Settings → Apple ID → Subscriptions).', de: 'Ein 3‑tägiger App‑Store‑Test ist im Jahresplan beim ersten Premium‑Abo verfügbar (für berechtigte Nutzer). Danach verlängert sich das Abo automatisch zum Preis in der App. Verwalten oder kündigen Sie es unter Apple‑Abonnements (Einstellungen → Apple ID → Abonnements).', es: 'La prueba de 3 días de App Store está disponible con el plan anual en la primera suscripción Premium (para usuarios elegibles). Después, la suscripción se renueva automáticamente al precio de la app. Gestiónala o cancélala en Suscripciones de Apple (Ajustes → Apple ID → Suscripciones).', fr: 'L’essai App Store de 3 jours est disponible avec le forfait annuel lors du premier abonnement Premium (pour les utilisateurs éligibles). Ensuite, l’abonnement se renouvelle automatiquement au tarif indiqué dans l’app. Gérez-le ou annulez-le dans les abonnements Apple (Réglages → Apple ID → Abonnements).', pt: 'O teste de 3 dias da App Store está disponível no plano anual na primeira assinatura Premium (para usuários elegíveis). Depois, a assinatura é renovada automaticamente pelo preço do app. Gerencie ou cancele em Assinaturas Apple (Ajustes → Apple ID → Assinaturas).', uk: 'Пробний період на 3 дні доступний через App Store на річному плані під час першої підписки Premium (для користувачів, які відповідають умовам). Після його завершення підписка автоматично поновлюється за ціною плану в додатку. Керування та скасування — у підписках Apple (Налаштування → Apple ID → Підписки).' },

  FAQ_Q7: { ru: 'Какие протоколы поддерживаются?', en: 'Which protocols are supported?', de: 'Welche Protokolle werden unterstützt?', es: '¿Qué protocolos se admiten?', fr: 'Quels protocoles sont pris en charge ?', pt: 'Quais protocolos são suportados?', uk: 'Які протоколи підтримуються?' },
  FAQ_A7: { ru: 'IKEv2, WireGuard, AmneziaWG и Hysteria2 доступны бесплатно (AmneziaWG и Hysteria2 — на поддерживающих их серверах). Протокол можно выбрать вручную или доверить Smart Connect.', en: 'IKEv2, WireGuard, AmneziaWG, and Hysteria2 are free (AmneziaWG and Hysteria2 on supported servers). Pick a protocol manually or use Smart Connect.', de: 'IKEv2, WireGuard, AmneziaWG und Hysteria2 sind kostenlos (AmneziaWG und Hysteria2 auf unterstützten Servern). Manuell wählen oder Smart Connect nutzen.', es: 'IKEv2, WireGuard, AmneziaWG y Hysteria2 son gratis (AmneziaWG y Hysteria2 en servidores compatibles). Elige un protocolo manualmente o usa Smart Connect.', fr: 'IKEv2, WireGuard, AmneziaWG et Hysteria2 sont gratuits (AmneziaWG et Hysteria2 sur les serveurs compatibles). Choisissez un protocole manuellement ou utilisez Smart Connect.', pt: 'IKEv2, WireGuard, AmneziaWG e Hysteria2 são grátis (AmneziaWG e Hysteria2 em servidores compatíveis). Escolha um protocolo manualmente ou use o Smart Connect.', uk: 'IKEv2, WireGuard, AmneziaWG та Hysteria2 доступні безкоштовно (AmneziaWG і Hysteria2 — на серверах, які їх підтримують). Протокол можна вибрати вручну або довірити Smart Connect.' },

  FAQ_Q8: { ru: 'Если VPN не подключается — что делать?', en: "If VPN doesn't connect — what should I do?", de: 'Wenn VPN nicht verbindet — was tun?', es: 'Si no conecta — ¿qué hago?', fr: 'Si ça ne se connecte pas — que faire ?', pt: 'Se não conectar — o que fazer?', uk: 'Якщо VPN не підключається — що робити?' },
  FAQ_A8: { ru: 'Попробуйте сменить сервер или протокол, включить Smart Connect, переключить Wi‑Fi/сотовую сеть и перезапустить приложение. Если не помогло — проверьте интернет и попробуйте позже.', en: 'Try switching server or protocol, enable Smart Connect, toggle Wi‑Fi/cellular, and restart the app. If it still fails, check your internet and try again later.', de: 'Wechseln Sie Server oder Protokoll, aktivieren Sie Smart Connect, schalten Sie WLAN/Mobilfunk um und starten Sie die App neu. Wenn es weiterhin nicht funktioniert, prüfen Sie die Internetverbindung und versuchen Sie es später erneut.', es: 'Cambia servidor o protocolo, activa Smart Connect, alterna Wi‑Fi/datos y reinicia la app. Si sigue, revisa internet y prueba más tarde.', fr: 'Essayez un autre serveur/protocole, activez Smart Connect, basculez Wi‑Fi/4G et redémarrez l’app. Si ça persiste, vérifiez internet et réessayez plus tard.', pt: 'Troque servidor/protocolo, ative Smart Connect, alterne Wi‑Fi/dados e reinicie o app. Se continuar, verifique a internet e tente novamente depois.', uk: 'Спробуйте змінити сервер або протокол, увімкнути Smart Connect, перемкнути Wi‑Fi/мобільну мережу і перезапустити додаток. Якщо не допомогло — перевірте інтернет і спробуйте пізніше.' },

  FAQ_Q9: { ru: 'Как работает Smart Connect?', en: 'How does Smart Connect work?', de: 'Wie funktioniert Smart Connect?', es: '¿Cómo funciona Smart Connect?', fr: 'Comment fonctionne Smart Connect ?', pt: 'Como funciona o Smart Connect?', uk: 'Як працює Smart Connect?' },
  FAQ_A9: {
    ru: 'Это умный режим в настройках протокола: приложение само подбирает сервер и протокол (IKEv2, WireGuard, AmneziaWG или Hysteria2) под вашу сеть — Wi‑Fi или мобильную, стабильность и типичные ограничения у провайдера. Вы всегда можете выбрать протокол вручную.',
    en: 'Smart mode in protocol settings lets the app pick the server and protocol (IKEv2, WireGuard, AmneziaWG, or Hysteria2) for your network—Wi‑Fi or cellular, stability, and common carrier restrictions. You can always choose a protocol manually.',
    de: 'Der Smart‑Modus in den Protokolleinstellungen wählt Server und Protokoll (IKEv2, WireGuard, AmneziaWG oder Hysteria2) passend zu Ihrem Netz—WLAN oder Mobilfunk, Stabilität und übliche Anbieterbeschränkungen. Eine manuelle Auswahl ist jederzeit möglich.',
    es: 'El modo inteligente de los ajustes elige el servidor y el protocolo (IKEv2, WireGuard, AmneziaWG o Hysteria2) según tu red—Wi‑Fi o datos móviles, estabilidad y restricciones habituales del operador. Siempre puedes elegirlos manualmente.',
    fr: 'Dans les réglages, le mode intelligent choisit le serveur et le protocole (IKEv2, WireGuard, AmneziaWG ou Hysteria2) selon votre réseau—Wi‑Fi ou mobile, stabilité et restrictions courantes de l’opérateur. Le choix manuel reste toujours possible.',
    pt: 'O modo inteligente nas configurações escolhe o servidor e o protocolo (IKEv2, WireGuard, AmneziaWG ou Hysteria2) de acordo com sua rede—Wi‑Fi ou celular, estabilidade e restrições comuns da operadora. A escolha manual está sempre disponível.',
    uk: 'Це розумний режим у налаштуваннях протоколу: додаток сам підбирає сервер і протокол (IKEv2, WireGuard, AmneziaWG або Hysteria2) під вашу мережу — Wi‑Fi чи мобільну, стабільність і типові обмеження оператора. Протокол завжди можна вибрати вручну.',
  },
  SEO_LANDING_BACK_HOME: {
    ru: '← На главную',
    en: '← Back to home',
    de: '← Zur Startseite',
    es: '← Volver al inicio',
    fr: '← Retour à l’accueil',
    pt: '← Voltar ao início',
    uk: '← На головну',
  },
  SEO_LANDING_ALL_GUIDES: {
    ru: 'Все гайды',
    en: 'All guides',
    de: 'Alle Guides',
    es: 'Todas las guías',
    fr: 'Tous les guides',
    pt: 'Todos os guias',
    uk: 'Усі гайди',
  },
  SEO_LANDING_RELATED: {
    ru: 'Читать дальше',
    en: 'Keep reading',
    de: 'Weiterlesen',
    es: 'Sigue leyendo',
    fr: 'Continuer à lire',
    pt: 'Continue lendo',
    uk: 'Читати далі',
  },
  SEO_LANDING_ARTICLE_KICKER: {
    ru: 'Гайд',
    en: 'Guide',
    de: 'Guide',
    es: 'Guía',
    fr: 'Guide',
    pt: 'Guia',
    uk: 'Гайд',
  },
  SEO_LANDING_RELATED_META: {
    ru: 'Гайд',
    en: 'Guide',
    de: 'Guide',
    es: 'Guía',
    fr: 'Guide',
    pt: 'Guia',
    uk: 'Гайд',
  },
  SEO_LANDING_KEYPOINTS: {
    ru: 'Коротко',
    en: 'Key points',
    de: 'Kurz gesagt',
    es: 'En resumen',
    fr: 'En bref',
    pt: 'Em resumo',
    uk: 'Коротко',
  },
  SEO_LANDING_FAQ_TITLE: {
    ru: 'Частые вопросы',
    en: 'FAQ',
    de: 'FAQ',
    es: 'Preguntas frecuentes',
    fr: 'FAQ',
    pt: 'Perguntas frequentes',
    uk: 'Поширені питання',
  },
  SEO_LANDING_BREADCRUMB: {
    ru: 'FollowNet',
    en: 'FollowNet',
    de: 'FollowNet',
    es: 'FollowNet',
    fr: 'FollowNet',
    pt: 'FollowNet',
    uk: 'FollowNet',
  },
  SEO_GUIDES_TITLE: {
    ru: 'Гайды VPN для iOS',
    en: 'iOS VPN guides',
    de: 'iOS VPN Guides',
    es: 'Guías VPN para iOS',
    fr: 'Guides VPN iOS',
    pt: 'Guias VPN para iOS',
    uk: 'Гайди VPN для iOS',
  },
  SEO_GUIDES_LEAD: {
    ru: '15 страниц о FollowNet: iPhone, iPad, WireGuard, Smart Connect, Wi‑Fi, путешествия и безопасность.',
    en: '15 guides about FollowNet: iPhone, iPad, WireGuard, Smart Connect, Wi‑Fi, travel, and security.',
    de: '15 Guides zu FollowNet: iPhone, iPad, WireGuard, Smart Connect, Wi‑Fi, Reisen und Sicherheit.',
    es: '15 guías sobre FollowNet: iPhone, iPad, WireGuard, Smart Connect, Wi‑Fi, viajes y seguridad.',
    fr: '15 guides FollowNet : iPhone, iPad, WireGuard, Smart Connect, Wi‑Fi, voyage et sécurité.',
    pt: '15 guias sobre FollowNet: iPhone, iPad, WireGuard, Smart Connect, Wi‑Fi, viagem e segurança.',
    uk: '15 гайдів про FollowNet: iPhone, iPad, WireGuard, Smart Connect, Wi‑Fi, подорожі та безпека.',
  },
  FOOTER_ALL_GUIDES: {
    ru: 'Гайды iOS VPN',
    en: 'iOS VPN guides',
    de: 'iOS VPN Guides',
    es: 'Guías VPN iOS',
    fr: 'Guides VPN iOS',
    pt: 'Guias VPN iOS',
    uk: 'Гайди VPN iOS',
  },
  FOOTER_VPN_IPHONE: {
    ru: 'VPN для iPhone',
    en: 'VPN for iPhone',
    de: 'VPN für iPhone',
    es: 'VPN para iPhone',
    fr: 'VPN pour iPhone',
    pt: 'VPN para iPhone',
    uk: 'VPN для iPhone',
  },
  FOOTER_CHROME: {
    ru: 'Chrome',
    en: 'Chrome extension',
    de: 'Chrome',
    es: 'Chrome',
    fr: 'Chrome',
    pt: 'Chrome',
    uk: 'Chrome',
  },
  FOOTER_FREE_VPN: {
    ru: 'Бесплатный VPN',
    en: 'Free VPN',
    de: 'Kostenloser VPN',
    es: 'VPN gratis',
    fr: 'VPN gratuit',
    pt: 'VPN grátis',
    uk: 'Безкоштовний VPN',
  },
  FOOTER_WIREGUARD_IOS: {
    ru: 'WireGuard для iOS',
    en: 'WireGuard for iOS',
    de: 'WireGuard für iOS',
    es: 'WireGuard para iOS',
    fr: 'WireGuard pour iOS',
    pt: 'WireGuard para iOS',
    uk: 'WireGuard для iOS',
  },
};

const STORAGE_KEY = 'follownet_lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private lang: AppLang = 'en';
  readonly lang$ = new BehaviorSubject<AppLang>(this.lang);

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
    @Optional() private readonly location: Location | null,
    @Optional() @Inject(REQUEST) private readonly request: { url?: string } | null,
  ) {
    this.lang = this.readInitialLang();
    this.lang$.next(this.lang);
    this.applyHtmlLang(this.lang);
  }

  get current(): AppLang {
    return this.lang;
  }

  setLang(next: AppLang) {
    this.lang = next;
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
    }
    this.applyHtmlLang(next);
    this.lang$.next(next);
  }

  toggle() {
    const idx = SUPPORTED_LANGS.indexOf(this.lang);
    const next = SUPPORTED_LANGS[(idx + 1) % SUPPORTED_LANGS.length] ?? 'en';
    this.setLang(next);
  }

  t(key: keyof typeof DICT): string {
    return DICT[key]?.[this.lang] ?? DICT[key]?.en ?? String(key);
  }

  langLabel(lang: AppLang): string {
    return LANG_LABELS[lang] ?? lang.toUpperCase();
  }

  private applyHtmlLang(lang: AppLang): void {
    this.document.documentElement.lang = lang;
  }

  private isSupported(lang: string): lang is AppLang {
    return (SUPPORTED_LANGS as readonly string[]).includes(lang);
  }

  private readInitialLang(): AppLang {
    if (!isPlatformBrowser(this.platformId) && this.request?.url) {
      try {
        const fromReq = this.langFromQuery(new URL(this.request.url, 'http://prerender.local').search);
        if (fromReq) return fromReq;
      } catch {
        // ignore
      }
    }

    const fromUrl = this.langFromQuery(this.currentSearch());
    if (fromUrl) return fromUrl;

    if (isPlatformBrowser(this.platformId)) {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as AppLang | null;
        if (saved && this.isSupported(saved)) return saved;
      } catch {
        // ignore
      }

      const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
      if (nav.startsWith('ru')) return 'ru';
      if (nav.startsWith('uk')) return 'uk';
      if (nav.startsWith('de')) return 'de';
      if (nav.startsWith('es')) return 'es';
      if (nav.startsWith('fr')) return 'fr';
      if (nav.startsWith('pt')) return 'pt';
      return 'en';
    }

    return 'en';
  }

  private currentSearch(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.search;
    }
    const path = this.location?.path() ?? '';
    const q = path.indexOf('?');
    return q >= 0 ? path.slice(q) : '';
  }

  private langFromQuery(search: string): AppLang | null {
    if (!search) return null;
    try {
      const raw = search.startsWith('?') ? search.slice(1) : search;
      const fromUrl = new URLSearchParams(raw).get('lang')?.toLowerCase();
      if (fromUrl && this.isSupported(fromUrl)) return fromUrl;
    } catch {
      // ignore
    }
    return null;
  }
}

