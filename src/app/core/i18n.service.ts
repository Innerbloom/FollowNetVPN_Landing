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
  NAV_PRIVACY: { ru: 'Конфиденциальность', en: 'Privacy', de: 'Datenschutz', es: 'Privacidad', fr: 'Confidentialité', pt: 'Privacidade', uk: 'Конфіденційність' },
  NAV_TERMS: { ru: 'Условия', en: 'Terms', de: 'Bedingungen', es: 'Términos', fr: 'Conditions', pt: 'Termos', uk: 'Умови' },
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
    ru: 'Free с лимитом или Premium с полным доступом. Smart Connect, три протокола (включая AmneziaWG), DNS‑профили, виджеты и Speed Test — в одном приложении.',
    en: 'Free with limits or full Premium. Smart Connect, three protocols (including AmneziaWG), DNS profiles, widgets, and Speed Test — in one iOS app.',
    de: 'Free mit Limit oder volles Premium. Smart Connect, drei Protokolle (inkl. AmneziaWG), DNS‑Profile, Widgets und Speedtest — in einer iOS‑App.',
    es: 'Free con límites o Premium completo. Smart Connect, tres protocolos (incl. AmneziaWG), perfiles DNS, widgets y Speed Test — en una app iOS.',
    fr: 'Free avec limites ou Premium complet. Smart Connect, trois protocoles (dont AmneziaWG), profils DNS, widgets et Speed Test — dans une app iOS.',
    pt: 'Free com limites ou Premium completo. Smart Connect, três protocolos (incl. AmneziaWG), perfis DNS, widgets e Speed Test — num app iOS.',
    uk: 'Free з лімітом або повний Premium. Smart Connect, три протоколи (зокрема AmneziaWG), DNS‑профілі, віджети та Speed Test — в одному додатку.',
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
    uk: 'Один дотик — і ви в безпечній мережі',
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
    ru: 'IKEv2 · WireGuard · AmneziaWG · Smart Connect · DNS · вход по коду · App Store',
    en: 'IKEv2 · WireGuard · AmneziaWG · Smart Connect · DNS · passwordless login · App Store',
    de: 'IKEv2 · WireGuard · AmneziaWG · Smart Connect · DNS · Login per Code · App Store',
    es: 'IKEv2 · WireGuard · AmneziaWG · Smart Connect · DNS · acceso por código · App Store',
    fr: 'IKEv2 · WireGuard · AmneziaWG · Smart Connect · DNS · connexion par code · App Store',
    pt: 'IKEv2 · WireGuard · AmneziaWG · Smart Connect · DNS · login por código · App Store',
    uk: 'IKEv2 · WireGuard · AmneziaWG · Smart Connect · DNS · вхід за кодом · App Store',
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
    ru: '3 протокола',
    en: '3 protocols',
    de: '3 Protokolle',
    es: '3 protocolos',
    fr: '3 protocoles',
    pt: '3 protocolos',
    uk: '3 протоколи',
  },
  TRUST_STRIP_2_SUB: {
    ru: 'IKEv2, WireGuard и AmneziaWG',
    en: 'IKEv2, WireGuard, and AmneziaWG',
    de: 'IKEv2, WireGuard und AmneziaWG',
    es: 'IKEv2, WireGuard y AmneziaWG',
    fr: 'IKEv2, WireGuard et AmneziaWG',
    pt: 'IKEv2, WireGuard e AmneziaWG',
    uk: 'IKEv2, WireGuard та AmneziaWG',
  },
  TRUST_STRIP_3: { ru: 'App Store', en: 'App Store', de: 'App Store', es: 'App Store', fr: 'App Store', pt: 'App Store', uk: 'App Store' },
  TRUST_STRIP_3_SUB: {
    ru: 'скачайте бесплатно, Premium — в приложении',
    en: 'download free; Premium in the app',
    de: 'kostenlos laden; Premium in der App',
    es: 'descarga gratis; Premium en la app',
    fr: 'téléchargement gratuit ; Premium dans l’app',
    pt: 'baixe grátis; Premium no app',
    uk: 'завантажте безкоштовно, Premium — у додатку',
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
    ru: 'Speed Test, статистика, DNS‑профили и три протокола — в приложении. Правила Free и Premium понятны заранее, без выдуманных цифр.',
    en: 'Speed Test, stats, DNS profiles, and three protocols—in the app. Free vs Premium rules are clear upfront, with no made‑up numbers.',
    de: 'Speedtest, Statistik, DNS‑Profile und drei Protokolle—in der App. Free‑ und Premium‑Regeln sind klar, ohne erfundene Zahlen.',
    es: 'Speed Test, estadísticas, perfiles DNS y tres protocolos—en la app. Reglas Free y Premium claras, sin cifras inventadas.',
    fr: 'Speed Test, stats, profils DNS et trois protocoles—dans l’app. Règles Free et Premium claires, sans chiffres inventés.',
    pt: 'Speed Test, estatísticas, perfis DNS e três protocolos—no app. Regras Free e Premium claras, sem números inventados.',
    uk: 'Speed Test, статистика, DNS‑профілі та три протоколи — у додатку. Правила Free і Premium зрозумілі заздалегідь, без вигаданих цифр.',
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
    en: 'IKEv2, WireGuard, and AmneziaWG for everyone. Free: free servers and a traffic cap. Premium: premium servers and unlimited traffic.',
    de: 'IKEv2, WireGuard und AmneziaWG für alle. Free: kostenlose Server und Traffic‑Limit. Premium: Premium‑Server und unbegrenzter Traffic.',
    es: 'IKEv2, WireGuard y AmneziaWG para todos. Free: servidores gratis y límite de tráfico. Premium: servidores premium y tráfico ilimitado.',
    fr: 'IKEv2, WireGuard et AmneziaWG pour tous. Free : serveurs gratuits et plafond de trafic. Premium : serveurs premium et trafic illimité.',
    pt: 'IKEv2, WireGuard e AmneziaWG para todos. Free: servidores grátis e limite de tráfego. Premium: servidores premium e tráfego ilimitado.',
    uk: 'IKEv2, WireGuard і AmneziaWG — у всіх. Free: безкоштовні сервери та ліміт трафіку. Premium: преміум‑сервери та безліміт.',
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
    uk: 'AdGuard, Cloudflare або Google — під задачу: блокування, швидкість чи сумісність.',
  },
  PRICING_BADGE_M1: { ru: 'Популярный выбор', en: 'Popular choice', de: 'Beliebte Wahl', es: 'Opción popular', fr: 'Choix populaire', pt: 'Escolha popular', uk: 'Популярний вибір' },
  PRICING_BADGE_M3: {
    ru: 'Выгодно на квартал',
    en: 'Great for 3 months',
    de: 'Lohnt sich fürs Quartal',
    es: 'Ideal por trimestre',
    fr: 'Idéal sur 3 mois',
    pt: 'Melhor no trimestre',
    uk: 'Вигідно на квартал',
  },
  PRICING_BADGE_M6: {
    ru: 'Максимум экономии',
    en: 'Maximum savings',
    de: 'Maximale Ersparnis',
    es: 'Máximo ahorro',
    fr: 'Économie maximale',
    pt: 'Máxima economia',
    uk: 'Максимум економії',
  },

  // Bullets
  BULLET_SECURITY: { ru: 'Безопасность', en: 'Security', de: 'Sicherheit', es: 'Seguridad', fr: 'Sécurité', pt: 'Segurança', uk: 'Безпека' },
  BULLET_SECURITY_SUB: { ru: 'AES‑256, автоподключение, защита DNS', en: 'AES‑256, auto-connect, DNS protection', de: 'AES‑256, Auto-Verbindung, DNS‑Schutz', es: 'AES‑256, auto-conexión, protección DNS', fr: 'AES‑256, connexion auto, protection DNS', pt: 'AES‑256, conexão automática, proteção DNS', uk: 'AES‑256, автопідключення, захист DNS' },
  BULLET_SPEED: { ru: 'Скорость', en: 'Speed', de: 'Geschwindigkeit', es: 'Velocidad', fr: 'Vitesse', pt: 'Velocidade', uk: 'Швидкість' },
  BULLET_SPEED_SUB: {
    ru: 'Smart Connect и три протокола: IKEv2, WireGuard, AmneziaWG',
    en: 'Smart Connect plus IKEv2, WireGuard, and AmneziaWG',
    de: 'Smart Connect plus IKEv2, WireGuard und AmneziaWG',
    es: 'Smart Connect más IKEv2, WireGuard y AmneziaWG',
    fr: 'Smart Connect plus IKEv2, WireGuard et AmneziaWG',
    pt: 'Smart Connect com IKEv2, WireGuard e AmneziaWG',
    uk: 'Smart Connect і три протоколи: IKEv2, WireGuard, AmneziaWG',
  },
  BULLET_WORLD: { ru: 'Доступ по миру', en: 'Worldwide access', de: 'Weltweiter Zugriff', es: 'Acceso global', fr: 'Accès mondial', pt: 'Acesso global', uk: 'Доступ по світу' },
  BULLET_WORLD_SUB: { ru: 'Выбор локации и низкий пинг', en: 'Choose a location with low ping', de: 'Standortwahl mit niedrigem Ping', es: 'Elige ubicación con bajo ping', fr: 'Choisissez un lieu à faible ping', pt: 'Escolha locais com baixo ping', uk: 'Вибір локації та низький пінг' },

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
    ru: 'IKEv2 · WireGuard · AmneziaWG',
    en: 'IKEv2 · WireGuard · AmneziaWG',
    de: 'IKEv2 · WireGuard · AmneziaWG',
    es: 'IKEv2 · WireGuard · AmneziaWG',
    fr: 'IKEv2 · WireGuard · AmneziaWG',
    pt: 'IKEv2 · WireGuard · AmneziaWG',
    uk: 'IKEv2 · WireGuard · AmneziaWG',
  },

  // Features section
  FEATURES_KICKER: { ru: 'Преимущества', en: 'Features', de: 'Vorteile', es: 'Funciones', fr: 'Fonctionnalités', pt: 'Recursos', uk: 'Переваги' },
  FEATURES_TITLE: { ru: 'Фокус на скорости, приватности и UX', en: 'Focused on speed, privacy, and UX', de: 'Fokus auf Speed, Privatsphäre und UX', es: 'Enfoque en velocidad, privacidad y UX', fr: 'Focus sur vitesse, confidentialité et UX', pt: 'Foco em velocidade, privacidade e UX', uk: 'Фокус на швидкості, приватності та UX' },
  FEATURES_SUB: { ru: 'Собрали самые важные вещи в одном месте — без перегруза.', en: 'Everything important in one place — without overload.', de: 'Das Wichtigste an einem Ort — ohne Überladung.', es: 'Lo esencial en un solo lugar — sin exceso.', fr: "L’essentiel au même endroit — sans surcharge.", pt: 'O essencial em um só lugar — sem excesso.', uk: 'Найважливіше в одному місці — без перевантаження.' },
  TRUST_PROTOCOLS_TITLE: {
    ru: 'Три протокола',
    en: 'Three protocols',
    de: 'Drei Protokolle',
    es: 'Tres protocolos',
    fr: 'Trois protocoles',
    pt: 'Três protocolos',
    uk: 'Три протоколи',
  },
  TRUST_PROTOCOLS_TEXT: {
    ru: 'IKEv2, WireGuard и AmneziaWG — бесплатно для всех. Переключайте в настройках протокола под задачу: скорость, стабильность или обход блокировок.',
    en: 'IKEv2, WireGuard, and AmneziaWG are free for everyone. Switch in protocol settings for speed, stability, or bypassing blocks.',
    de: 'IKEv2, WireGuard und AmneziaWG — für alle kostenlos. In den Protokolleinstellungen je nach Bedarf: Speed, Stabilität oder Blockierungen umgehen.',
    es: 'IKEv2, WireGuard y AmneziaWG gratis para todos. Cambia en ajustes de protocolo según necesites: velocidad, estabilidad o evitar bloqueos.',
    fr: 'IKEv2, WireGuard et AmneziaWG gratuits pour tous. Changez dans les réglages protocole : vitesse, stabilité ou contournement.',
    pt: 'IKEv2, WireGuard e AmneziaWG grátis para todos. Alterne nas configurações de protocolo: velocidade, estabilidade ou contornar bloqueios.',
    uk: 'IKEv2, WireGuard і AmneziaWG — безкоштовно для всіх. Перемикайте в налаштуваннях протоколу: швидкість, стабільність або обхід блокувань.',
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
  TRUST_DNS_TEXT: { ru: 'AdGuard / Cloudflare / Google — под задачу.', en: 'AdGuard / Cloudflare / Google — pick what you need.', de: 'AdGuard / Cloudflare / Google — passend zur Aufgabe.', es: 'AdGuard / Cloudflare / Google — según tu necesidad.', fr: 'AdGuard / Cloudflare / Google — selon vos besoins.', pt: 'AdGuard / Cloudflare / Google — conforme a sua necessidade.', uk: 'AdGuard / Cloudflare / Google — під задачу.' },
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
  COUNTRIES_TITLE: { ru: 'Мгновенное подключение. В любом уголке мира.', en: 'Instant connection. Anywhere in the world.', de: 'Sofort verbunden. Überall auf der Welt.', es: 'Conexión instantánea. En cualquier lugar.', fr: 'Connexion instantanée. Partout.', pt: 'Conexão instantânea. Em qualquer lugar.', uk: 'Миттєве підключення. У будь‑якому куточку світу.' },
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
  STEP2_TEXT: { ru: 'Весь трафик идёт через защищённый канал — не напрямую через Wi‑Fi или мобильную сеть.', en: 'All traffic goes through a protected channel—not straight over Wi‑Fi or cellular.', de: 'Der gesamte Traffic läuft durch einen geschützten Kanal—nicht direkt über WLAN oder Mobilfunk.', es: 'Todo el tráfico pasa por un canal protegido—no directo por Wi‑Fi o datos móviles.', fr: 'Tout le trafic passe par un canal protégé—pas directement via Wi‑Fi ou mobile.', pt: 'Todo o tráfego passa por um canal protegido—não direto pelo Wi‑Fi ou celular.', uk: 'Уесь трафік іде через захищений канал — не напряму через Wi‑Fi чи мобільну мережу.' },
  STEP3_TITLE: { ru: 'Шифрование', en: 'Encryption', de: 'Verschlüsselung', es: 'Cifrado', fr: 'Chiffrement', pt: 'Criptografia', uk: 'Шифрування' },
  STEP3_TEXT: { ru: 'AES‑256 шифрует данные — их не прочитать ни провайдеру, ни в публичном Wi‑Fi.', en: 'AES‑256 encrypts your data—neither your ISP nor public Wi‑Fi can read it.', de: 'AES‑256 verschlüsselt Ihre Daten—weder Provider noch öffentliches WLAN lesen mit.', es: 'AES‑256 cifra tus datos—ni tu operador ni el Wi‑Fi público pueden leerlos.', fr: 'AES‑256 chiffre vos données—ni l’opérateur ni le Wi‑Fi public ne peuvent les lire.', pt: 'AES‑256 criptografa seus dados—nem a operadora nem o Wi‑Fi público conseguem ler.', uk: 'AES‑256 шифрує дані — їх не прочитає ні провайдер, ні в публічному Wi‑Fi.' },
  STEP4_TITLE: { ru: 'VPN‑сервер', en: 'VPN server', de: 'VPN‑Server', es: 'Servidor VPN', fr: 'Serveur VPN', pt: 'Servidor VPN', uk: 'VPN‑сервер' },
  STEP4_TEXT: { ru: 'Сервер выходит в интернет за вас — запросы уходят уже из выбранной локации.', en: 'The server reaches the internet for you—requests leave from your chosen location.', de: 'Der Server geht für Sie ins Internet—Anfragen starten am gewählten Standort.', es: 'El servidor accede a internet por ti—las peticiones salen desde la ubicación elegida.', fr: 'Le serveur accède à internet pour vous—les requêtes partent du lieu choisi.', pt: 'O servidor acessa a internet por você—as requisições saem do local escolhido.', uk: 'Сервер виходить в інтернет за вас — запити йдуть уже з обраної локації.' },
  STEP5_TITLE: { ru: 'Новый IP', en: 'New IP', de: 'Neue IP', es: 'Nueva IP', fr: 'Nouvelle IP', pt: 'Novo IP', uk: 'Новий IP' },
  STEP5_TEXT: { ru: 'Сайты и приложения видят IP сервера, а не ваш домашний или мобильный адрес.', en: 'Sites and apps see the server’s IP—not your home or mobile address.', de: 'Websites und Apps sehen die Server‑IP—nicht Ihre Heim‑ oder Mobilfunkadresse.', es: 'Sitios y apps ven la IP del servidor—no tu dirección de casa o móvil.', fr: 'Sites et apps voient l’IP du serveur—pas votre adresse domicile ou mobile.', pt: 'Sites e apps veem o IP do servidor—não seu endereço de casa ou celular.', uk: 'Сайти й додатки бачать IP сервера, а не ваш домашній чи мобільний адрес.' },

  // Apps
  APPS_KICKER: { ru: 'Приложения', en: 'Apps', de: 'Apps', es: 'Apps', fr: 'Apps', pt: 'Apps', uk: 'Додатки' },
  APPS_TITLE: { ru: 'Доступно на устройствах', en: 'Available on devices', de: 'Verfügbar auf Geräten', es: 'Disponible en dispositivos', fr: 'Disponible sur appareils', pt: 'Disponível em dispositivos', uk: 'Доступно на пристроях' },
  APPS_SUB: { ru: 'iOS уже в App Store. Расширение для Chrome — на проверке. macOS — скоро.', en: 'iOS is on the App Store. The Chrome extension is in review. macOS — soon.', de: 'iOS im App Store. Chrome‑Erweiterung in Prüfung. macOS — bald.', es: 'iOS en App Store. La extensión de Chrome en revisión. macOS — pronto.', fr: 'iOS sur l’App Store. Extension Chrome en revue. macOS — bientôt.', pt: 'iOS na App Store. Extensão Chrome em revisão. macOS — em breve.', uk: 'iOS уже в App Store. Розширення для Chrome — на перевірці. macOS — скоро.' },
  STATUS_AVAILABLE: { ru: 'Доступно', en: 'Available', de: 'Verfügbar', es: 'Disponible', fr: 'Disponible', pt: 'Disponível', uk: 'Доступно' },
  STATUS_SOON: { ru: 'Скоро', en: 'Soon', de: 'Bald', es: 'Pronto', fr: 'Bientôt', pt: 'Em breve', uk: 'Скоро' },
  STATUS_IN_REVIEW: { ru: 'В ревью', en: 'In review', de: 'In Prüfung', es: 'En revisión', fr: 'En revue', pt: 'Em revisão', uk: 'На рев’ю' },
  CHROME_EXT_TITLE: { ru: 'Chrome', en: 'Chrome', de: 'Chrome', es: 'Chrome', fr: 'Chrome', pt: 'Chrome', uk: 'Chrome' },
  CHROME_EXT_SUB: { ru: 'Расширение для браузера — на проверке в Chrome Web Store', en: 'Browser extension — under Chrome Web Store review', de: 'Browser‑Erweiterung — Prüfung im Chrome Web Store', es: 'Extensión de navegador — revisión en Chrome Web Store', fr: 'Extension navigateur — revue Chrome Web Store', pt: 'Extensão do navegador — revisão na Chrome Web Store', uk: 'Розширення для браузера — на перевірці в Chrome Web Store' },
  IOS_SUB: { ru: 'Уже доступно в App Store', en: 'Available on the App Store', de: 'Im App Store verfügbar', es: 'Disponible en App Store', fr: "Disponible sur l’App Store", pt: 'Disponível na App Store', uk: 'Вже доступно в App Store' },
  DEV_SUB: { ru: 'В разработке', en: 'In development', de: 'In Entwicklung', es: 'En desarrollo', fr: 'En développement', pt: 'Em desenvolvimento', uk: 'У розробці' },

  // Pricing
  PRICING_KICKER: { ru: 'Цены', en: 'Pricing', de: 'Preise', es: 'Precios', fr: 'Tarifs', pt: 'Preços', uk: 'Ціни' },
  PRICING_TITLE: { ru: 'Premium в приложении (App Store)', en: 'Premium in the app (App Store)', de: 'Premium in der App (App Store)', es: 'Premium en la app (App Store)', fr: 'Premium dans l’app (App Store)', pt: 'Premium no app (App Store)', uk: 'Premium у додатку (App Store)' },
  PRICING_SUB: { ru: 'Оформление и оплата подписки — только в iOS‑приложении через App Store. Пробный период и восстановление покупки — в приложении.', en: 'Subscribe and pay only in the iOS app via the App Store. Trial and restore purchases happen in the app.', de: 'Abo‑Abschluss und Zahlung nur in der iOS‑App über den App Store. Testphase und Wiederherstellung in der App.', es: 'Contratación y pago solo en la app iOS con App Store. Prueba y restauración en la app.', fr: 'Souscription et paiement uniquement dans l’app iOS via l’App Store. Essai et restauration dans l’app.', pt: 'Assinatura e pagamento somente no app iOS pela App Store. Teste e restauração no app.', uk: 'Оформлення та оплата підписки — лише в iOS‑додатку через App Store. Trial і відновлення покупки — у додатку.' },
  PRICING_FREE: { ru: 'Free', en: 'Free', de: 'Free', es: 'Gratis', fr: 'Gratuit', pt: 'Grátis', uk: 'Free' },
  PRICING_FREE_DESC: { ru: 'Все протоколы, бесплатные серверы и лимит трафика.', en: 'All protocols, free servers, and a traffic cap.', de: 'Alle Protokolle, kostenlose Server und Traffic‑Limit.', es: 'Todos los protocolos, servidores gratis y límite de tráfico.', fr: 'Tous les protocoles, serveurs gratuits et plafond de trafic.', pt: 'Todos os protocolos, servidores grátis e limite de tráfego.', uk: 'Усі протоколи, безкоштовні сервери та ліміт трафіку.' },
  PRICING_FREE_CTA: {
    ru: 'Начать бесплатно',
    en: 'Start for free',
    de: 'Kostenlos starten',
    es: 'Empezar gratis',
    fr: 'Commencer gratuitement',
    pt: 'Começar grátis',
    uk: 'Почати безкоштовно',
  },
  PRICING_TRIAL: { ru: '3 дня бесплатно для первых пользователей.', en: '3-day free trial for early users.', de: '3 Tage kostenloser Test für frühe Nutzer.', es: 'Prueba gratuita de 3 días para los primeros usuarios.', fr: 'Essai gratuit de 3 jours pour les premiers utilisateurs.', pt: 'Teste grátis de 3 dias para os primeiros usuários.', uk: '3 дні безкоштовно для перших користувачів.' },
  PRICING_TRIAL_CTA: {
    ru: 'Скачать и начать trial',
    en: 'Download to start trial',
    de: 'App laden & Test starten',
    es: 'Descargar e iniciar prueba',
    fr: 'Télécharger pour l’essai',
    pt: 'Baixar e iniciar teste',
    uk: 'Завантажити й почати trial',
  },
  PRICING_NOTE: { ru: 'Оплата и восстановление — внутри iOS приложения (App Store).', en: 'Payment and restore are inside the iOS app (App Store).', de: 'Zahlung und Wiederherstellung in der iOS‑App (App Store).', es: 'Pago y restauración dentro de la app iOS (App Store).', fr: "Paiement et restauration dans l’app iOS (App Store).", pt: 'Pagamento e restauração dentro do app iOS (App Store).', uk: 'Оплата та відновлення — в iOS‑додатку (App Store).' },
  PRICING_REGIONAL_NOTE: { ru: 'Цена в приложении зависит от страны и валюты App Store.', en: 'Price in the app depends on your country and App Store currency.', de: 'Der Preis in der App hängt von Land und Währung im App Store ab.', es: 'El precio en la app depende del país y la moneda de App Store.', fr: "Le prix dans l'app dépend du pays et de la devise de l'App Store.", pt: 'O preço no app depende do país e da moeda da App Store.', uk: 'Ціна в додатку залежить від країни та валюти App Store.' },

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
    ru: 'Условия пробного периода и продления вы увидите в окне оплаты перед подтверждением.',
    en: 'Trial and renewal terms are shown in the checkout window before confirmation.',
    de: 'Test- und Verlängerungsbedingungen werden vor der Bestätigung im Checkout angezeigt.',
    es: 'Las condiciones de prueba y renovación se muestran en el checkout antes de confirmar.',
    fr: 'Les conditions d’essai et de renouvellement sont affichées avant confirmation dans le checkout.',
    pt: 'As condições de teste e renovação aparecem no checkout antes da confirmação.',
    uk: 'Умови trial і продовження показуються у вікні оплати перед підтвердженням.',
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
    ru: 'Оформление Premium — в приложении FollowNet для iOS через App Store (Apple). На этом сайте карта не списывается.',
    en: 'Subscribe to Premium in the FollowNet iOS app via the App Store (Apple). This website does not charge your card.',
    de: 'Premium‑Abo in der FollowNet‑iOS‑App über den App Store (Apple). Auf dieser Website erfolgt keine Kartenzahlung.',
    es: 'Contrata Premium en la app FollowNet para iOS con App Store (Apple). Este sitio no cobra con tarjeta.',
    fr: 'Souscrivez au Premium dans l’app FollowNet iOS via l’App Store (Apple). Ce site ne débite pas votre carte.',
    pt: 'Assine o Premium no app FollowNet para iOS pela App Store (Apple). Este site não cobra no cartão.',
    uk: 'Оформіть Premium у додатку FollowNet для iOS через App Store (Apple). На цьому сайті картку не списують.',
  },
  CHECKOUT_SUCCESS_TITLE: {
    ru: 'Оплата прошла успешно',
    en: 'Payment successful',
    de: 'Zahlung erfolgreich',
    es: 'Pago exitoso',
    fr: 'Paiement reussi',
    pt: 'Pagamento concluido',
    uk: 'Оплату успішно проведено',
  },
  CHECKOUT_SUCCESS_TEXT: {
    ru: 'Подписка активируется в течение минуты. Если не обновилось — перезапустите приложение.',
    en: 'Your subscription should activate within a minute. If not, reopen the app.',
    de: 'Das Abo wird in der Regel innerhalb einer Minute aktiviert. Sonst App neu öffnen.',
    es: 'La suscripción se activa normalmente en un minuto. Si no, vuelve a abrir la app.',
    fr: "L’abonnement s’active normalement en une minute. Sinon, rouvrez l’application.",
    pt: 'A assinatura normalmente ativa em até um minuto. Se nao, reabra o app.',
    uk: 'Підписка зазвичай активується протягом хвилини. Якщо ні — перезапустіть додаток.',
  },
  CHECKOUT_CANCEL_TITLE: {
    ru: 'Оплата не завершена',
    en: 'Checkout was not completed',
    de: 'Zahlung nicht abgeschlossen',
    es: 'Pago no completado',
    fr: 'Paiement non finalise',
    pt: 'Pagamento nao concluido',
    uk: 'Оплату не завершено',
  },
  CHECKOUT_CANCEL_TEXT: {
    ru: 'Вы можете выбрать план и попробовать снова в любой момент.',
    en: 'You can choose a plan and try again anytime.',
    de: 'Sie können jederzeit einen Plan wählen und es erneut versuchen.',
    es: 'Puedes elegir un plan e intentarlo de nuevo en cualquier momento.',
    fr: 'Vous pouvez choisir un plan et reessayer a tout moment.',
    pt: 'Voce pode escolher um plano e tentar novamente a qualquer momento.',
    uk: 'Ви можете обрати план і спробувати знову у будь-який момент.',
  },
  PRICE_FOREVER: { ru: 'навсегда', en: 'forever', de: 'für immer', es: 'para siempre', fr: 'à vie', pt: 'para sempre', uk: 'назавжди' },
  FREE_FEATURE_1: { ru: 'IKEv2 · WireGuard · AmneziaWG', en: 'IKEv2 · WireGuard · AmneziaWG', de: 'IKEv2 · WireGuard · AmneziaWG', es: 'IKEv2 · WireGuard · AmneziaWG', fr: 'IKEv2 · WireGuard · AmneziaWG', pt: 'IKEv2 · WireGuard · AmneziaWG', uk: 'IKEv2 · WireGuard · AmneziaWG' },
  FREE_FEATURE_2: { ru: 'Бесплатные сервера', en: 'Free servers', de: 'Kostenlose Server', es: 'Servidores gratis', fr: 'Serveurs gratuits', pt: 'Servidores grátis', uk: 'Безкоштовні сервери' },
  FREE_FEATURE_3: { ru: 'Лимит трафика', en: 'Traffic limit', de: 'Traffic‑Limit', es: 'Límite de tráfico', fr: 'Limite de trafic', pt: 'Limite de tráfego', uk: 'Ліміт трафіку' },
  PREMIUM_DESC: { ru: 'Максимум скорости и функций.', en: 'Maximum speed and features.', de: 'Maximale Geschwindigkeit und Funktionen.', es: 'Máxima velocidad y funciones.', fr: 'Vitesse et fonctionnalités maximales.', pt: 'Velocidade e recursos máximos.', uk: 'Максимум швидкості та функцій.' },
  PREMIUM_FEATURE_2: { ru: 'Премиум‑серверы', en: 'Premium servers', de: 'Premium‑Server', es: 'Servidores Premium', fr: 'Serveurs Premium', pt: 'Servidores Premium', uk: 'Преміум‑сервери' },
  PREMIUM_FEATURE_3: { ru: 'Безлимитный трафик', en: 'Unlimited traffic', de: 'Unbegrenzter Traffic', es: 'Tráfico ilimitado', fr: 'Trafic illimité', pt: 'Tráfego ilimitado', uk: 'Безлімітний трафік' },
  PREMIUM_FEATURE_4: { ru: 'До 5 устройств', en: 'Up to 5 devices', de: 'Bis zu 5 Geräte', es: 'Hasta 5 dispositivos', fr: "Jusqu’à 5 appareils", pt: 'Até 5 dispositivos', uk: 'До 5 пристроїв' },
  PREMIUM_PLANS_ARIA: { ru: 'Планы Premium', en: 'Premium plans', de: 'Premium‑Pläne', es: 'Planes Premium', fr: 'Forfaits Premium', pt: 'Planos Premium', uk: 'Плани Premium' },

  // FAQ
  FAQ_KICKER: { ru: 'FAQ', en: 'FAQ', de: 'FAQ', es: 'FAQ', fr: 'FAQ', pt: 'FAQ', uk: 'FAQ' },
  FAQ_TITLE: { ru: 'Частые вопросы', en: 'Common questions', de: 'Häufige Fragen', es: 'Preguntas frecuentes', fr: 'Questions fréquentes', pt: 'Perguntas frequentes', uk: 'Поширені питання' },
  FAQ_SUB: { ru: 'Про Free и Premium, протоколы, Smart Connect, Chrome и подключение — коротко и по делу.', en: 'About Free and Premium, protocols, Smart Connect, Chrome, and connection — quick and clear.', de: 'Über Free und Premium, Protokolle, Smart Connect, Chrome und Verbindung — kurz und klar.', es: 'Sobre Free y Premium, protocolos, Smart Connect, Chrome y conexión — breve y claro.', fr: 'Sur Free et Premium, protocoles, Smart Connect, Chrome et connexion — clair et bref.', pt: 'Sobre Free e Premium, protocolos, Smart Connect, Chrome e conexão — rápido e claro.', uk: 'Про Free і Premium, протоколи, Smart Connect, Chrome і підключення — коротко та по суті.' },

  FAQ_Q1: { ru: 'Можно пользоваться бесплатно?', en: 'Can I use it for free?', de: 'Kann ich es kostenlos nutzen?', es: '¿Se puede usar gratis?', fr: 'Peut‑on l’utiliser gratuitement ?', pt: 'Posso usar de graça?', uk: 'Чи можна користуватися безкоштовно?' },
  FAQ_A1: { ru: 'Да. В Free — все протоколы (IKEv2, WireGuard, AmneziaWG), Smart Connect, бесплатные серверы и лимит трафика. Premium добавляет премиум‑серверы, безлимит и до 5 устройств.', en: 'Yes. Free includes all protocols (IKEv2, WireGuard, AmneziaWG), Smart Connect, free servers, and a traffic cap. Premium adds premium servers, unlimited traffic, and up to 5 devices.', de: 'Ja. Free: alle Protokolle (IKEv2, WireGuard, AmneziaWG), Smart Connect, kostenlose Server und Traffic‑Limit. Premium: Premium‑Server, unbegrenzter Traffic, bis zu 5 Geräte.', es: 'Sí. Free incluye todos los protocolos (IKEv2, WireGuard, AmneziaWG), Smart Connect, servidores gratis y límite de tráfico. Premium: servidores premium, tráfico ilimitado y hasta 5 dispositivos.', fr: 'Oui. Free : tous les protocoles (IKEv2, WireGuard, AmneziaWG), Smart Connect, serveurs gratuits et plafond de trafic. Premium : serveurs premium, trafic illimité et jusqu’à 5 appareils.', pt: 'Sim. Free inclui todos os protocolos (IKEv2, WireGuard, AmneziaWG), Smart Connect, servidores grátis e limite de tráfego. Premium: servidores premium, tráfego ilimitado e até 5 dispositivos.', uk: 'Так. У Free — усі протоколи (IKEv2, WireGuard, AmneziaWG), Smart Connect, безкоштовні сервери та ліміт трафіку. Premium додає преміум‑сервери, безліміт і до 5 пристроїв.' },

  FAQ_Q2: { ru: 'Как работает вход без пароля?', en: 'How does passwordless login work?', de: 'Wie funktioniert Login ohne Passwort?', es: '¿Cómo funciona el acceso sin contraseña?', fr: 'Comment fonctionne la connexion sans mot de passe ?', pt: 'Como funciona o login sem senha?', uk: 'Як працює вхід без пароля?' },
  FAQ_A2: { ru: 'Вы вводите email — мы отправляем код. Вводите код в приложении и входите. Пароль не нужен.', en: 'Enter your email — we send a code. Enter the code in the app to sign in. No password needed.', de: 'Sie geben Ihre E‑Mail ein — wir senden einen Code. Code in der App eingeben und einloggen. Kein Passwort nötig.', es: 'Ingresas tu email y enviamos un código. Lo introduces en la app y entras. Sin contraseña.', fr: "Vous saisissez votre email — nous envoyons un code. Saisissez-le dans l’app pour vous connecter. Pas de mot de passe.", pt: 'Você informa o email — enviamos um código. Digite o código no app e entre. Sem senha.', uk: 'Ви вводите email — ми надсилаємо код. Вводите код у додатку і входите. Пароль не потрібен.' },

  FAQ_Q3: { ru: 'Что входит в Premium?', en: "What's included in Premium?", de: 'Was ist in Premium enthalten?', es: '¿Qué incluye Premium?', fr: 'Que contient Premium ?', pt: 'O que inclui o Premium?', uk: 'Що входить у Premium?' },
  FAQ_A3: { ru: 'Премиум‑серверы, безлимитный трафик и до 5 устройств на аккаунт. Оформление — только в iOS‑приложении через App Store.', en: 'Premium servers, unlimited traffic, and up to 5 devices per account. Subscribe only in the iOS app via the App Store.', de: 'Premium‑Server, unbegrenzter Traffic und bis zu 5 Geräte pro Account. Abo nur in der iOS‑App über den App Store.', es: 'Servidores Premium, tráfico ilimitado y hasta 5 dispositivos por cuenta. Suscripción solo en la app iOS vía App Store.', fr: 'Serveurs Premium, trafic illimité et jusqu’à 5 appareils par compte. Abonnement uniquement dans l’app iOS via l’App Store.', pt: 'Servidores Premium, tráfego ilimitado e até 5 dispositivos por conta. Assinatura somente no app iOS pela App Store.', uk: 'Преміум‑сервери, безлімітний трафік і до 5 пристроїв на акаунт. Оформлення — лише в iOS‑додатку через App Store.' },

  FAQ_Q4: { ru: 'Что такое DNS‑профили?', en: 'What are DNS profiles?', de: 'Was sind DNS‑Profile?', es: '¿Qué son los perfiles DNS?', fr: 'Que sont les profils DNS ?', pt: 'O que são perfis DNS?', uk: 'Що таке DNS‑профілі?' },
  FAQ_A4: { ru: 'В настройках можно выбрать DNS: AdGuard, Cloudflare или Google — под блокировку рекламы, скорость или совместимость.', en: 'In settings you can pick AdGuard, Cloudflare, or Google DNS—for blocking, speed, or compatibility.', de: 'In den Einstellungen wählen Sie AdGuard, Cloudflare oder Google DNS—für Blockierung, Speed oder Kompatibilität.', es: 'En ajustes puedes elegir AdGuard, Cloudflare o Google DNS—para bloqueo, velocidad o compatibilidad.', fr: 'Dans les réglages, choisissez AdGuard, Cloudflare ou Google DNS—blocage, vitesse ou compatibilité.', pt: 'Nas configurações, escolha AdGuard, Cloudflare ou Google DNS—bloqueio, velocidade ou compatibilidade.', uk: 'У налаштуваннях можна вибрати DNS: AdGuard, Cloudflare або Google — під блокування, швидкість чи сумісність.' },

  FAQ_Q5: { ru: 'Когда будет расширение для Chrome?', en: 'When will the Chrome extension be available?', de: 'Wann kommt die Chrome‑Erweiterung?', es: '¿Cuándo estará la extensión de Chrome?', fr: 'Quand l’extension Chrome sera‑t‑elle disponible ?', pt: 'Quando sai a extensão do Chrome?', uk: 'Коли буде розширення для Chrome?' },
  FAQ_A5: { ru: 'Сейчас оно на проверке в Chrome Web Store. После одобрения появится в Store — обновим блок «Приложения» на сайте.', en: 'It’s currently under Chrome Web Store review. Once approved, it will appear in the Store—we’ll update the Apps section here.', de: 'Derzeit in Prüfung im Chrome Web Store. Nach Freigabe im Store — wir aktualisieren den Apps‑Bereich hier.', es: 'Ahora está en revisión en Chrome Web Store. Tras la aprobación aparecerá en la Store—actualizaremos la sección Apps aquí.', fr: 'Actuellement en revue sur le Chrome Web Store. Après approbation, disponible dans le Store—nous mettrons à jour la section Apps.', pt: 'Está em revisão na Chrome Web Store. Após aprovação, aparecerá na Store—atualizaremos a seção Apps aqui.', uk: 'Зараз воно на перевірці в Chrome Web Store. Після схвалення з’явиться в Store — оновимо блок «Додатки» на сайті.' },

  FAQ_Q6: { ru: 'Как работает trial 3 дня?', en: 'How does the 3‑day trial work?', de: 'Wie funktioniert der 3‑Tage‑Test?', es: '¿Cómo funciona la prueba de 3 días?', fr: "Comment fonctionne l’essai de 3 jours ?", pt: 'Como funciona o teste de 3 dias?', uk: 'Як працює trial 3 дні?' },
  FAQ_A6: { ru: 'Trial 3 дня доступен при первой подписке Premium в приложении. Управление и отмена — в подписках Apple (Настройки → Apple ID → Подписки).', en: 'A 3‑day trial is available with your first Premium subscription in the app. Manage or cancel in Apple subscriptions (Settings → Apple ID → Subscriptions).', de: '3 Tage Test bei der ersten Premium‑Aktivierung in der App. Verwaltung/Kündigung in Apple‑Abos (Einstellungen → Apple ID → Abonnements).', es: 'Prueba de 3 días con la primera suscripción Premium en la app. Gestionar/cancelar en Suscripciones de Apple (Ajustes → Apple ID → Suscripciones).', fr: 'Essai de 3 jours lors du premier abonnement Premium dans l’app. Gérer/annuler dans Abonnements Apple (Réglages → Apple ID → Abonnements).', pt: 'Teste de 3 dias na primeira assinatura Premium no app. Gerencie/cancele em Assinaturas Apple (Ajustes → Apple ID → Assinaturas).', uk: 'Trial 3 дні доступний при першій підписці Premium у додатку. Керування та скасування — в підписках Apple (Налаштування → Apple ID → Підписки).' },

  FAQ_Q7: { ru: 'Какие протоколы поддерживаются?', en: 'Which protocols are supported?', de: 'Welche Protokolle werden unterstützt?', es: '¿Qué protocolos se admiten?', fr: 'Quels protocoles sont pris en charge ?', pt: 'Quais protocolos são suportados?', uk: 'Які протоколи підтримуються?' },
  FAQ_A7: { ru: 'IKEv2, WireGuard и AmneziaWG доступны бесплатно (AmneziaWG — на серверах, где поддерживается). Протокол можно выбрать вручную или доверить Smart Connect.', en: 'IKEv2, WireGuard, and AmneziaWG are free (AmneziaWG on supported servers). Pick a protocol manually or use Smart Connect.', de: 'IKEv2, WireGuard und AmneziaWG sind kostenlos (AmneziaWG auf unterstützten Servern). Manuell wählen oder Smart Connect nutzen.', es: 'IKEv2, WireGuard y AmneziaWG son gratis (AmneziaWG en servidores compatibles). Elige manualmente o usa Smart Connect.', fr: 'IKEv2, WireGuard et AmneziaWG sont gratuits (AmneziaWG sur serveurs pris en charge). Choix manuel ou Smart Connect.', pt: 'IKEv2, WireGuard e AmneziaWG são grátis (AmneziaWG em servidores compatíveis). Escolha manualmente ou use Smart Connect.', uk: 'IKEv2, WireGuard і AmneziaWG доступні безкоштовно (AmneziaWG — на серверах, де підтримується). Протокол можна вибрати вручну або довірити Smart Connect.' },

  FAQ_Q8: { ru: 'Если VPN не подключается — что делать?', en: "If VPN doesn't connect — what should I do?", de: 'Wenn VPN nicht verbindet — was tun?', es: 'Si no conecta — ¿qué hago?', fr: 'Si ça ne se connecte pas — que faire ?', pt: 'Se não conectar — o que fazer?', uk: 'Якщо VPN не підключається — що робити?' },
  FAQ_A8: { ru: 'Попробуйте сменить сервер или протокол, включить Smart Connect, переключить Wi‑Fi/сотовую сеть и перезапустить приложение. Если не помогло — проверьте интернет и попробуйте позже.', en: 'Try switching server or protocol, enable Smart Connect, toggle Wi‑Fi/cellular, and restart the app. If it still fails, check your internet and try again later.', de: 'Wechseln Sie Server oder Protokoll, aktivieren Sie Smart Connect, schalten Sie WLAN/Mobilfunk um und starten Sie die App neu. Wenn es weiterhin nicht funktioniert, prüfen Sie die Internetverbindung und versuchen Sie es später erneut.', es: 'Cambia servidor o protocolo, activa Smart Connect, alterna Wi‑Fi/datos y reinicia la app. Si sigue, revisa internet y prueba más tarde.', fr: 'Essayez un autre serveur/protocole, activez Smart Connect, basculez Wi‑Fi/4G et redémarrez l’app. Si ça persiste, vérifiez internet et réessayez plus tard.', pt: 'Troque servidor/protocolo, ative Smart Connect, alterne Wi‑Fi/dados e reinicie o app. Se continuar, verifique a internet e tente novamente depois.', uk: 'Спробуйте змінити сервер або протокол, увімкнути Smart Connect, перемкнути Wi‑Fi/мобільну мережу і перезапустити додаток. Якщо не допомогло — перевірте інтернет і спробуйте пізніше.' },

  FAQ_Q9: { ru: 'Как работает Smart Connect?', en: 'How does Smart Connect work?', de: 'Wie funktioniert Smart Connect?', es: '¿Cómo funciona Smart Connect?', fr: 'Comment fonctionne Smart Connect ?', pt: 'Como funciona o Smart Connect?', uk: 'Як працює Smart Connect?' },
  FAQ_A9: {
    ru: 'Это умный режим в настройках протокола: приложение само подбирает сервер и протокол (IKEv2, WireGuard или AmneziaWG) под вашу сеть — Wi‑Fi или мобильную, стабильность и типичные ограничения у провайдера. Вы всегда можете выбрать протокол вручную.',
    en: 'Smart mode in protocol settings lets the app pick the server and protocol (IKEv2, WireGuard, or AmneziaWG) for your network—Wi‑Fi or cellular, stability, and common carrier restrictions. You can always choose a protocol manually.',
    de: 'Der Smart‑Modus in den Protokolleinstellungen wählt Server und Protokoll (IKEv2, WireGuard oder AmneziaWG) für Ihr Netz—WLAN oder Mobilfunk, Stabilität und übliche Anbieter‑Limits. Manuell wählen geht jederzeit.',
    es: 'El modo inteligente en ajustes de protocolo elige servidor y protocolo (IKEv2, WireGuard o AmneziaWG) según tu red—Wi‑Fi o datos, estabilidad y restricciones habituales del operador. Siempre puedes elegir manualmente.',
    fr: 'Le mode intelligent dans les réglages protocole choisit serveur et protocole (IKEv2, WireGuard ou AmneziaWG) selon votre réseau—Wi‑Fi ou mobile, stabilité et limites courantes de l’opérateur. Choix manuel possible à tout moment.',
    pt: 'O modo inteligente nas configurações de protocolo escolhe servidor e protocolo (IKEv2, WireGuard ou AmneziaWG) para sua rede—Wi‑Fi ou celular, estabilidade e restrições comuns da operadora. Você pode escolher manualmente quando quiser.',
    uk: 'Це розумний режим у налаштуваннях протоколу: додаток сам підбирає сервер і протокол (IKEv2, WireGuard або AmneziaWG) під вашу мережу — Wi‑Fi чи мобільну, стабільність і типові обмеження оператора. Протокол завжди можна вибрати вручну.',
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
    ru: 'Похожие гайды',
    en: 'Related guides',
    de: 'Verwandte Guides',
    es: 'Guías relacionadas',
    fr: 'Guides associés',
    pt: 'Guias relacionados',
    uk: 'Схожі гайди',
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

