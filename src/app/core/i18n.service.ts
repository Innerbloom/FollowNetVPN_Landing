import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AppLang = 'en' | 'de' | 'es' | 'fr' | 'pt' | 'ru' | 'uk';

type Dict = Record<string, Record<AppLang, string>>;

export const SUPPORTED_LANGS: readonly AppLang[] = ['ru', 'en', 'de', 'es', 'fr', 'pt', 'uk'] as const;

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
    ru: 'Скачивайте бесплатно: Free с лимитом или Premium с полным доступом. DNS, виджеты, статистика и Speed Test — в одном приложении.',
    en: 'Start free: a real Free tier or upgrade to Premium. DNS profiles, widgets, stats, and Speed Test — in one iOS app.',
    de: 'Starten Sie gratis: echtes Free‑Limit oder Premium. DNS‑Profile, Widgets, Statistik und Speedtest — in einer iOS‑App.',
    es: 'Empieza gratis: plan Free real o Premium. Perfiles DNS, widgets, estadísticas y Speed Test — en una app iOS.',
    fr: 'Commencez gratuitement : vrai plan Free ou Premium. Profils DNS, widgets, stats et Speed Test — dans une app iOS.',
    pt: 'Comece grátis: Free real ou Premium. Perfis DNS, widgets, estatísticas e Speed Test — num app iOS.',
    uk: 'Почніть безкоштовно: Free з лімітом або Premium. DNS, віджети, статистика та Speed Test — в одному додатку.',
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
    ru: 'WireGuard + IKEv2',
    en: 'WireGuard + IKEv2',
    de: 'WireGuard + IKEv2',
    es: 'WireGuard + IKEv2',
    fr: 'WireGuard + IKEv2',
    pt: 'WireGuard + IKEv2',
    uk: 'WireGuard + IKEv2',
  },
  TRUST_STRIP_2_SUB: {
    ru: 'IKEv2 в Free, WireGuard — в Premium',
    en: 'IKEv2 on Free; WireGuard with Premium',
    de: 'IKEv2 in Free; WireGuard mit Premium',
    es: 'IKEv2 en Free; WireGuard en Premium',
    fr: 'IKEv2 en Free ; WireGuard avec Premium',
    pt: 'IKEv2 no Free; WireGuard no Premium',
    uk: 'IKEv2 у Free, WireGuard — у Premium',
  },
  TRUST_STRIP_3: { ru: 'Сайт + iOS', en: 'Web + iOS', de: 'Web + iOS', es: 'Web + iOS', fr: 'Web + iOS', pt: 'Web + iOS', uk: 'Сайт + iOS' },
  TRUST_STRIP_3_SUB: {
    ru: 'подписка на сайте или в App Store',
    en: 'subscribe on the web or in the App Store',
    de: 'Abo im Web oder im App Store',
    es: 'suscripción en la web o en App Store',
    fr: 'abonnement sur le web ou sur l’App Store',
    pt: 'assinatura na web ou na App Store',
    uk: 'підписка на сайті або в App Store',
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
    ru: 'Проверяйте скорость сами: встроенный Speed Test и статистика. Мы не публикуем выдуманные «1000+ пользователей» — зато правила Free и Premium понятны заранее.',
    en: 'Verify speed yourself with the built‑in Speed Test and stats. We don’t publish made‑up “1000+ users”—but Free vs Premium rules are clear upfront.',
    de: 'Prüfen Sie die Geschwindigkeit mit integriertem Speedtest und Statistik. Keine erfundenen „1000+ Nutzer“—dafür klare Free‑ und Premium‑Regeln.',
    es: 'Comprueba la velocidad con Speed Test y estadísticas integradas. Sin cifras inventadas de “1000+ usuarios”: las reglas Free y Premium están claras.',
    fr: 'Vérifiez la vitesse avec Speed Test et statistiques intégrés. Pas de faux “1000+ utilisateurs”—les règles Free et Premium sont claires.',
    pt: 'Confira a velocidade com Speed Test e estatísticas no app. Sem números inventados de “1000+ usuários”—regras Free e Premium claras.',
    uk: 'Перевіряйте швидкість самі: вбудований Speed Test і статистика. Без вигаданих «1000+ користувачів» — натомість зрозумілі правила Free і Premium.',
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
    ru: 'Free с реальным лимитом трафика и IKEv2. Premium добавляет WireGuard, премиум‑серверы и безлимит. Без скрытых сюрпризов в интерфейсе.',
    en: 'Free has a real traffic cap and IKEv2. Premium adds WireGuard, premium servers, and unlimited traffic. No surprise paywalls mid‑flow.',
    de: 'Free mit Datenlimit und IKEv2. Premium ergänzt WireGuard, Premium‑Server und unbegrenzten Traffic. Keine versteckten Paywalls.',
    es: 'Free con límite real e IKEv2. Premium añade WireGuard, servidores premium y tráfico ilimitado. Sin paywalls sorpresa.',
    fr: 'Free avec plafond et IKEv2. Premium ajoute WireGuard, serveurs premium et trafic illimité. Pas de paywalls surprises.',
    pt: 'Free com limite real e IKEv2. Premium inclui WireGuard, servidores premium e tráfego ilimitado. Sem paywalls surpresa.',
    uk: 'Free з реальним лімітом трафіку та IKEv2. Premium додає WireGuard, преміум‑сервери та безліміт. Без прихованих сюрпризів.',
  },
  WHY_3_TITLE: {
    ru: 'Два протокола — разные тарифы',
    en: 'Two protocols, two tiers',
    de: 'Zwei Protokolle, zwei Stufen',
    es: 'Dos protocolos, dos planes',
    fr: 'Deux protocoles, deux offres',
    pt: 'Dois protocolos, dois planos',
    uk: 'Два протоколи — різні тарифи',
  },
  WHY_3_TEXT: {
    ru: 'IKEv2 в Free для стабильного подключения. WireGuard — с Premium, когда нужна максимальная скорость.',
    en: 'IKEv2 on Free for stable connectivity. WireGuard unlocks with Premium when you want maximum speed.',
    de: 'IKEv2 in Free für stabile Verbindung. WireGuard mit Premium für maximale Geschwindigkeit.',
    es: 'IKEv2 en Free para conexión estable. WireGuard con Premium para máxima velocidad.',
    fr: 'IKEv2 en Free pour une connexion stable. WireGuard avec Premium pour la vitesse maximale.',
    pt: 'IKEv2 no Free para conexão estável. WireGuard no Premium para velocidade máxima.',
    uk: 'IKEv2 у Free для стабільного з’єднання. WireGuard — з Premium, коли потрібна максимальна швидкість.',
  },
  WHY_4_TITLE: {
    ru: 'Прозрачная политика',
    en: 'Transparent policy',
    de: 'Transparente Richtlinie',
    es: 'Política transparente',
    fr: 'Politique transparente',
    pt: 'Política transparente',
    uk: 'Прозора політика',
  },
  WHY_4_TEXT: {
    ru: 'В политике конфиденциальности описано, какие данные нужны для аккаунта и биллинга — без размытых обещаний.',
    en: 'Privacy policy explains what account and billing need—no hand‑wavy promises.',
    de: 'Die Datenschutzerklärung erklärt, was Konto und Abrechnung brauchen—ohne leere Versprechen.',
    es: 'La privacidad explica qué necesitan cuenta y facturación—sin promesas vagas.',
    fr: 'La confidentialité détaille compte et facturation—sans promesses floues.',
    pt: 'A privacidade explica o que conta e cobrança precisam—sem promessas vagas.',
    uk: 'У політиці конфіденційності — що потрібно для акаунта й оплати, без розмитих обіцянок.',
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
    ru: 'IKEv2 в Free; WireGuard — в Premium',
    en: 'IKEv2 on Free; WireGuard with Premium',
    de: 'IKEv2 in Free; WireGuard mit Premium',
    es: 'IKEv2 en Free; WireGuard en Premium',
    fr: 'IKEv2 en Free ; WireGuard avec Premium',
    pt: 'IKEv2 no Free; WireGuard no Premium',
    uk: 'IKEv2 у Free; WireGuard — у Premium',
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

  // Features section
  FEATURES_KICKER: { ru: 'Преимущества', en: 'Features', de: 'Vorteile', es: 'Funciones', fr: 'Fonctionnalités', pt: 'Recursos', uk: 'Переваги' },
  FEATURES_TITLE: { ru: 'Фокус на скорости, приватности и UX', en: 'Focused on speed, privacy, and UX', de: 'Fokus auf Speed, Privatsphäre und UX', es: 'Enfoque en velocidad, privacidad y UX', fr: 'Focus sur vitesse, confidentialité et UX', pt: 'Foco em velocidade, privacidade e UX', uk: 'Фокус на швидкості, приватності та UX' },
  FEATURES_SUB: { ru: 'Собрали самые важные вещи в одном месте — без перегруза.', en: 'Everything important in one place — without overload.', de: 'Das Wichtigste an einem Ort — ohne Überladung.', es: 'Lo esencial en un solo lugar — sin exceso.', fr: "L’essentiel au même endroit — sans surcharge.", pt: 'O essencial em um só lugar — sem excesso.', uk: 'Найважливіше в одному місці — без перевантаження.' },
  TRUST_WG_TITLE: {
    ru: 'IKEv2 и WireGuard',
    en: 'IKEv2 and WireGuard',
    de: 'IKEv2 und WireGuard',
    es: 'IKEv2 y WireGuard',
    fr: 'IKEv2 et WireGuard',
    pt: 'IKEv2 e WireGuard',
    uk: 'IKEv2 і WireGuard',
  },
  TRUST_WG_TEXT: {
    ru: 'IKEv2 в Free для стабильного VPN. WireGuard — в Premium, когда важна скорость.',
    en: 'IKEv2 on Free for stable VPN. WireGuard is included with Premium when speed matters.',
    de: 'IKEv2 in Free für stabiles VPN. WireGuard mit Premium, wenn Speed zählt.',
    es: 'IKEv2 en Free para VPN estable. WireGuard en Premium cuando importa la velocidad.',
    fr: 'IKEv2 en Free pour un VPN stable. WireGuard avec Premium quand la vitesse compte.',
    pt: 'IKEv2 no Free para VPN estável. WireGuard no Premium quando a velocidade importa.',
    uk: 'IKEv2 у Free для стабільного VPN. WireGuard — у Premium, коли важлива швидкість.',
  },
  TRUST_AUTOCONNECT_TITLE: { ru: 'Автоподключение', en: 'Auto-connect', de: 'Auto-Verbindung', es: 'Auto-conexión', fr: 'Connexion auto', pt: 'Conexão automática', uk: 'Автопідключення' },
  TRUST_AUTOCONNECT_TEXT: { ru: 'Автоматическое восстановление соединения при обрывах и смене сети.', en: 'Automatic reconnection on dropouts and network changes.', de: 'Automatische Wiederverbindung bei Abbrüchen und Netzwerkwechsel.', es: 'Reconexión automática ante cortes y cambios de red.', fr: 'Reconnexion automatique en cas de coupure ou changement de réseau.', pt: 'Reconexão automática em quedas e mudanças de rede.', uk: 'Автоматичне відновлення з’єднання при розривах та зміні мережі.' },
  TRUST_DNS_TITLE: { ru: 'DNS профили', en: 'DNS profiles', de: 'DNS‑Profile', es: 'Perfiles DNS', fr: 'Profils DNS', pt: 'Perfis DNS', uk: 'Профілі DNS' },
  TRUST_DNS_TEXT: { ru: 'AdGuard / Cloudflare / Google — под задачу.', en: 'AdGuard / Cloudflare / Google — pick what you need.', de: 'AdGuard / Cloudflare / Google — passend zur Aufgabe.', es: 'AdGuard / Cloudflare / Google — según tu necesidad.', fr: 'AdGuard / Cloudflare / Google — selon vos besoins.', pt: 'AdGuard / Cloudflare / Google — conforme a sua necessidade.', uk: 'AdGuard / Cloudflare / Google — під задачу.' },
  TRUST_STATS_TITLE: { ru: 'Статистика + Speed Test', en: 'Stats + Speed Test', de: 'Statistik + Speedtest', es: 'Estadísticas + Speed Test', fr: 'Statistiques + Speed Test', pt: 'Estatísticas + Speed Test', uk: 'Статистика + Speed Test' },
  TRUST_STATS_TEXT: { ru: 'Пинг, скорость, сессии — удобно и красиво.', en: 'Ping, speed, sessions — clean and handy.', de: 'Ping, Speed, Sessions — übersichtlich und praktisch.', es: 'Ping, velocidad, sesiones — claro y útil.', fr: 'Ping, vitesse, sessions — clair et pratique.', pt: 'Ping, velocidade, sessões — simples e útil.', uk: 'Пінг, швидкість, сесії — зручно і красиво.' },

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
  HOW_TITLE: { ru: 'Что происходит после нажатия «Connect»', en: 'What happens after you tap “Connect”', de: 'Was passiert nach dem Tippen auf „Connect“', es: 'Qué pasa después de tocar “Connect”', fr: 'Que se passe‑t‑il après “Connect”', pt: 'O que acontece após tocar “Connect”', uk: 'Що відбувається після натискання «Connect»' },
  HOW_SUB: { ru: 'Соединение → туннель → шифрование → сервер → новый IP.', en: 'Connection → tunnel → encryption → server → new IP.', de: 'Verbindung → Tunnel → Verschlüsselung → Server → neue IP.', es: 'Conexión → túnel → cifrado → servidor → nueva IP.', fr: 'Connexion → tunnel → chiffrement → serveur → nouvelle IP.', pt: 'Conexão → túnel → criptografia → servidor → novo IP.', uk: 'З’єднання → тунель → шифрування → сервер → новий IP.' },
  STEP1_TITLE: { ru: 'VPN‑соединение', en: 'VPN connection', de: 'VPN‑Verbindung', es: 'Conexión VPN', fr: 'Connexion VPN', pt: 'Conexão VPN', uk: 'VPN‑з’єднання' },
  STEP1_TEXT: { ru: 'Приложение устанавливает защищённое соединение с сервером.', en: 'The app establishes a secure connection to a server.', de: 'Die App baut eine sichere Verbindung zum Server auf.', es: 'La app establece una conexión segura con un servidor.', fr: 'L’app établit une connexion sécurisée à un serveur.', pt: 'O app estabelece uma conexão segura com um servidor.', uk: 'Додаток встановлює захищене з’єднання із сервером.' },
  STEP2_TITLE: { ru: 'Туннель', en: 'Tunnel', de: 'Tunnel', es: 'Túnel', fr: 'Tunnel', pt: 'Túnel', uk: 'Тунель' },
  STEP2_TEXT: { ru: 'Трафик “упаковывается” и идёт через защищённый канал.', en: 'Your traffic is routed through a protected tunnel.', de: 'Der Datenverkehr läuft durch einen geschützten Tunnel.', es: 'Tu tráfico va por un túnel protegido.', fr: 'Votre trafic passe par un tunnel protégé.', pt: 'Seu tráfego passa por um túnel protegido.', uk: 'Трафік проходить через захищений тунель.' },
  STEP3_TITLE: { ru: 'Шифрование', en: 'Encryption', de: 'Verschlüsselung', es: 'Cifrado', fr: 'Chiffrement', pt: 'Criptografia', uk: 'Шифрування' },
  STEP3_TEXT: { ru: 'Данные становятся нечитаемыми для наблюдателей в сети.', en: 'Your data becomes unreadable to observers on the network.', de: 'Daten werden für Beobachter im Netzwerk unlesbar.', es: 'Tus datos se vuelven ilegibles para observadores en la red.', fr: 'Vos données deviennent illisibles pour les observateurs.', pt: 'Seus dados ficam ilegíveis para observadores na rede.', uk: 'Дані стають нечитабельними для спостерігачів у мережі.' },
  STEP4_TITLE: { ru: 'VPN‑сервер', en: 'VPN server', de: 'VPN‑Server', es: 'Servidor VPN', fr: 'Serveur VPN', pt: 'Servidor VPN', uk: 'VPN‑сервер' },
  STEP4_TEXT: { ru: 'Сервер отправляет запросы в интернет от вашего имени.', en: 'The server sends requests to the internet on your behalf.', de: 'Der Server sendet Anfragen ins Internet in Ihrem Namen.', es: 'El servidor envía solicitudes a internet en tu nombre.', fr: 'Le serveur envoie les requêtes sur internet à votre place.', pt: 'O servidor envia requisições à internet em seu nome.', uk: 'Сервер надсилає запити в інтернет від вашого імені.' },
  STEP5_TITLE: { ru: 'Новый IP', en: 'New IP', de: 'Neue IP', es: 'Nueva IP', fr: 'Nouvelle IP', pt: 'Novo IP', uk: 'Новий IP' },
  STEP5_TEXT: { ru: 'Сайты видят IP сервера, а не ваш реальный адрес.', en: 'Websites see the server IP, not your real address.', de: 'Websites sehen die IP des Servers, nicht Ihre echte Adresse.', es: 'Los sitios ven la IP del servidor, no tu dirección real.', fr: 'Les sites voient l’IP du serveur, pas votre adresse réelle.', pt: 'Os sites veem a IP do servidor, não seu endereço real.', uk: 'Сайти бачать IP сервера, а не вашу реальну адресу.' },

  // Apps
  APPS_KICKER: { ru: 'Приложения', en: 'Apps', de: 'Apps', es: 'Apps', fr: 'Apps', pt: 'Apps', uk: 'Додатки' },
  APPS_TITLE: { ru: 'Доступно на устройствах', en: 'Available on devices', de: 'Verfügbar auf Geräten', es: 'Disponible en dispositivos', fr: 'Disponible sur appareils', pt: 'Disponível em dispositivos', uk: 'Доступно на пристроях' },
  APPS_SUB: { ru: 'Стартуем с iOS. Остальные платформы — по мере роста.', en: 'Starting with iOS. More platforms soon.', de: 'Start mit iOS. Weitere Plattformen folgen.', es: 'Empezamos con iOS. Más plataformas pronto.', fr: 'On commence avec iOS. Plus de plateformes bientôt.', pt: 'Começamos com iOS. Mais plataformas em breve.', uk: 'Починаємо з iOS. Інші платформи — згодом.' },
  STATUS_AVAILABLE: { ru: 'Доступно', en: 'Available', de: 'Verfügbar', es: 'Disponible', fr: 'Disponible', pt: 'Disponível', uk: 'Доступно' },
  STATUS_SOON: { ru: 'Скоро', en: 'Soon', de: 'Bald', es: 'Pronto', fr: 'Bientôt', pt: 'Em breve', uk: 'Скоро' },
  IOS_SUB: { ru: 'Уже доступно в App Store', en: 'Available on the App Store', de: 'Im App Store verfügbar', es: 'Disponible en App Store', fr: "Disponible sur l’App Store", pt: 'Disponível na App Store', uk: 'Вже доступно в App Store' },
  DEV_SUB: { ru: 'В разработке', en: 'In development', de: 'In Entwicklung', es: 'En desarrollo', fr: 'En développement', pt: 'Em desenvolvimento', uk: 'У розробці' },

  // Pricing
  PRICING_KICKER: { ru: 'Цены', en: 'Pricing', de: 'Preise', es: 'Precios', fr: 'Tarifs', pt: 'Preços', uk: 'Ціни' },
  PRICING_TITLE: { ru: 'Premium на сайте и в приложении', en: 'Premium on the web and in the app', de: 'Premium im Web und in der App', es: 'Premium en la web y en la app', fr: 'Premium sur le web et dans l’app', pt: 'Premium na web e no app', uk: 'Premium на сайті та в додатку' },
  PRICING_SUB: { ru: 'Оплатить можно здесь (карта, Paddle) или в iOS через App Store. Trial и восстановление — в приложении.', en: 'Pay here (card, Paddle) or in iOS via the App Store. Trial and restore are in the app.', de: 'Zahlung hier (Karte, Paddle) oder in iOS über den App Store. Test und Wiederherstellung in der App.', es: 'Paga aquí (tarjeta, Paddle) o en iOS con App Store. La prueba y la restauración están en la app.', fr: 'Payez ici (carte, Paddle) ou sur iOS via l’App Store. L’essai et la restauration sont dans l’app.', pt: 'Pague aqui (cartão, Paddle) ou no iOS pela App Store. Teste e restauração ficam no app.', uk: 'Оплата тут (картка, Paddle) або в iOS через App Store. Trial і відновлення — у додатку.' },
  PRICING_FREE: { ru: 'Free', en: 'Free', de: 'Free', es: 'Gratis', fr: 'Gratuit', pt: 'Grátis', uk: 'Free' },
  PRICING_FREE_DESC: { ru: 'Базовые серверы и лимит.', en: 'Basic servers and limits.', de: 'Basis‑Server und Limits.', es: 'Servidores básicos y límites.', fr: 'Serveurs de base et limites.', pt: 'Servidores básicos e limites.', uk: 'Базові сервери та ліміти.' },
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
  PADDLE_NOT_CONFIGURED: { ru: 'Оплата на сайте ещё не настроена (Paddle).', en: 'Web checkout is not configured yet (Paddle).', de: 'Web‑Checkout ist noch nicht konfiguriert (Paddle).', es: 'El pago web aún no está configurado (Paddle).', fr: 'Le paiement web n’est pas encore configuré (Paddle).', pt: 'Checkout web ainda não configurado (Paddle).', uk: 'Оплату на сайті ще не налаштовано (Paddle).' },
  PADDLE_NOT_CONFIGURED_HELP: {
    ru: 'Нужен client-side токен Paddle и price id (pri_…). Заполни src/environments/paddle.secrets.ts и пересобери сайт — без этого кнопка не заработает.',
    en: 'You need a Paddle client-side token and price IDs (pri_…). Fill src/environments/paddle.secrets.ts and rebuild.',
    de: 'Client‑Token und Price‑IDs (pri_…) fehlen. Trage sie in paddle.secrets.ts ein und baue neu.',
    es: 'Faltan el token de cliente y los price id (pri_…). Rellena paddle.secrets.ts y vuelve a compilar.',
    fr: 'Il manque le client token et les price id (pri_…). Remplis paddle.secrets.ts puis rebuild.',
    pt: 'Faltam o client token e os price id (pri_…). Preencha paddle.secrets.ts e faça rebuild.',
    uk: 'Потрібні client-side токен Paddle та price id (pri_…). Заповни paddle.secrets.ts і перезбери сайт.',
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
    ru: 'У этого аккаунта уже есть активная подписка через сайт (Paddle). Повторная оплата не нужна — продление спишется автоматически. Доступ до {{DATE}}.',
    en: 'This account already has an active web subscription (Paddle). You don’t need to pay again — renewal is automatic. Active until {{DATE}}.',
    de: 'Für dieses Konto läuft bereits ein Web‑Abo (Paddle). Keine zweite Zahlung nötig — Verlängerung erfolgt automatisch. Gültig bis {{DATE}}.',
    es: 'Esta cuenta ya tiene una suscripción web activa (Paddle). No hace falta pagar otra vez; la renovación es automática. Válida hasta {{DATE}}.',
    fr: 'Ce compte a déjà un abonnement web actif (Paddle). Pas besoin de payer à nouveau — le renouvellement est automatique. Valide jusqu’au {{DATE}}.',
    pt: 'Esta conta já tem uma assinatura web ativa (Paddle). Não é preciso pagar de novo — a renovação é automática. Válida até {{DATE}}.',
    uk: 'У цього акаунта вже є активна веб‑підписка (Paddle). Повторна оплата не потрібна — продовження спишеться автоматично. Діє до {{DATE}}.',
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
    ru: 'Оплата через Paddle — безопасное окно. Данные карты не проходят через наш сервер.',
    en: 'Payments are processed by Paddle in a secure window. Card data never touches our servers.',
    de: 'Zahlungen laufen über Paddle in einem sicheren Fenster. Kartendaten erreichen unsere Server nicht.',
    es: 'El pago lo procesa Paddle en una ventana segura. Los datos de la tarjeta no pasan por nuestros servidores.',
    fr: 'Le paiement est traité par Paddle dans une fenêtre sécurisée. Les données de carte ne transitent pas par nos serveurs.',
    pt: 'O pagamento é processado pela Paddle em uma janela segura. Os dados do cartão não passam pelos nossos servidores.',
    uk: 'Оплата через Paddle у захищеному вікні. Дані картки не проходять через наш сервер.',
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
  FREE_FEATURE_1: { ru: 'IKEv2', en: 'IKEv2', de: 'IKEv2', es: 'IKEv2', fr: 'IKEv2', pt: 'IKEv2', uk: 'IKEv2' },
  FREE_FEATURE_2: { ru: 'Бесплатные сервера', en: 'Free servers', de: 'Kostenlose Server', es: 'Servidores gratis', fr: 'Serveurs gratuits', pt: 'Servidores grátis', uk: 'Безкоштовні сервери' },
  FREE_FEATURE_3: { ru: 'Лимит трафика', en: 'Traffic limit', de: 'Traffic‑Limit', es: 'Límite de tráfico', fr: 'Limite de trafic', pt: 'Limite de tráfego', uk: 'Ліміт трафіку' },
  PREMIUM_DESC: { ru: 'Максимум скорости и функций.', en: 'Maximum speed and features.', de: 'Maximale Geschwindigkeit und Funktionen.', es: 'Máxima velocidad y funciones.', fr: 'Vitesse et fonctionnalités maximales.', pt: 'Velocidade e recursos máximos.', uk: 'Максимум швидкості та функцій.' },
  PREMIUM_FEATURE_1: { ru: 'WireGuard', en: 'WireGuard', de: 'WireGuard', es: 'WireGuard', fr: 'WireGuard', pt: 'WireGuard', uk: 'WireGuard' },
  PREMIUM_FEATURE_2: { ru: 'Премиум‑серверы', en: 'Premium servers', de: 'Premium‑Server', es: 'Servidores Premium', fr: 'Serveurs Premium', pt: 'Servidores Premium', uk: 'Преміум‑сервери' },
  PREMIUM_FEATURE_3: { ru: 'Безлимитный трафик', en: 'Unlimited traffic', de: 'Unbegrenzter Traffic', es: 'Tráfico ilimitado', fr: 'Trafic illimité', pt: 'Tráfego ilimitado', uk: 'Безлімітний трафік' },
  PREMIUM_FEATURE_4: { ru: 'До 5 устройств', en: 'Up to 5 devices', de: 'Bis zu 5 Geräte', es: 'Hasta 5 dispositivos', fr: "Jusqu’à 5 appareils", pt: 'Até 5 dispositivos', uk: 'До 5 пристроїв' },
  PREMIUM_PLANS_ARIA: { ru: 'Планы Premium', en: 'Premium plans', de: 'Premium‑Pläne', es: 'Planes Premium', fr: 'Forfaits Premium', pt: 'Planos Premium', uk: 'Плани Premium' },

  // FAQ
  FAQ_KICKER: { ru: 'FAQ', en: 'FAQ', de: 'FAQ', es: 'FAQ', fr: 'FAQ', pt: 'FAQ', uk: 'FAQ' },
  FAQ_TITLE: { ru: 'Частые вопросы', en: 'Common questions', de: 'Häufige Fragen', es: 'Preguntas frecuentes', fr: 'Questions fréquentes', pt: 'Perguntas frequentes', uk: 'Поширені питання' },
  FAQ_SUB: { ru: 'Про вход по коду, подписку, trial и подключение — коротко и по делу.', en: 'About passwordless login, subscription, trial, and connection — quick and clear.', de: 'Über Login per Code, Abo, Testphase und Verbindung — kurz und klar.', es: 'Sobre acceso por código, suscripción, prueba y conexión — breve y claro.', fr: 'Sur la connexion par code, l’abonnement, l’essai et la connexion — clair et bref.', pt: 'Sobre login por código, assinatura, teste e conexão — rápido e claro.', uk: 'Про вхід за кодом, підписку, trial і підключення — коротко та по суті.' },

  FAQ_Q1: { ru: 'Можно пользоваться бесплатно?', en: 'Can I use it for free?', de: 'Kann ich es kostenlos nutzen?', es: '¿Se puede usar gratis?', fr: 'Peut‑on l’utiliser gratuitement ?', pt: 'Posso usar de graça?', uk: 'Чи можна користуватися безкоштовно?' },
  FAQ_A1: { ru: 'Да. Free план подойдёт, чтобы попробовать FollowNet: базовые сервера и лимиты. Premium открывает максимум скорости и функций.', en: 'Yes. The Free plan is great to try FollowNet: basic servers and limits. Premium unlocks maximum speed and features.', de: 'Ja. Der Free‑Plan eignet sich zum Testen: Basis‑Server und Limits. Premium schaltet maximale Geschwindigkeit und Funktionen frei.', es: 'Sí. El plan Gratis sirve para probar: servidores básicos y límites. Premium desbloquea máxima velocidad y funciones.', fr: 'Oui. Le plan Gratuit est idéal pour essayer : serveurs de base et limites. Premium débloque la vitesse max et les fonctions.', pt: 'Sim. O plano Grátis é para testar: servidores básicos e limites. Premium libera velocidade máxima e recursos.', uk: 'Так. Free план підходить, щоб спробувати FollowNet: базові сервери та ліміти. Premium відкриває максимум швидкості та функцій.' },

  FAQ_Q2: { ru: 'Как работает вход без пароля?', en: 'How does passwordless login work?', de: 'Wie funktioniert Login ohne Passwort?', es: '¿Cómo funciona el acceso sin contraseña?', fr: 'Comment fonctionne la connexion sans mot de passe ?', pt: 'Como funciona o login sem senha?', uk: 'Як працює вхід без пароля?' },
  FAQ_A2: { ru: 'Вы вводите email — мы отправляем код. Вводите код в приложении и входите. Пароль не нужен.', en: 'Enter your email — we send a code. Enter the code in the app to sign in. No password needed.', de: 'Sie geben Ihre E‑Mail ein — wir senden einen Code. Code in der App eingeben und einloggen. Kein Passwort nötig.', es: 'Ingresas tu email y enviamos un código. Lo introduces en la app y entras. Sin contraseña.', fr: "Vous saisissez votre email — nous envoyons un code. Saisissez-le dans l’app pour vous connecter. Pas de mot de passe.", pt: 'Você informa o email — enviamos um código. Digite o código no app e entre. Sem senha.', uk: 'Ви вводите email — ми надсилаємо код. Вводите код у додатку і входите. Пароль не потрібен.' },

  FAQ_Q3: { ru: 'Что входит в Premium?', en: "What's included in Premium?", de: 'Was ist in Premium enthalten?', es: '¿Qué incluye Premium?', fr: 'Que contient Premium ?', pt: 'O que inclui o Premium?', uk: 'Що входить у Premium?' },
  FAQ_A3: { ru: 'Премиум‑серверы, WireGuard + IKEv2, безлимитный трафик, максимум скорости и до 5 устройств на аккаунт.', en: 'Premium servers, WireGuard + IKEv2, unlimited traffic, maximum speed, and up to 5 devices per account.', de: 'Premium‑Server, WireGuard + IKEv2, unbegrenzter Traffic, maximale Geschwindigkeit und bis zu 5 Geräte pro Account.', es: 'Servidores Premium, WireGuard + IKEv2, tráfico ilimitado, máxima velocidad y hasta 5 dispositivos por cuenta.', fr: 'Serveurs Premium, WireGuard + IKEv2, trafic illimité, vitesse maximale et jusqu’à 5 appareils par compte.', pt: 'Servidores Premium, WireGuard + IKEv2, tráfego ilimitado, velocidade máxima e até 5 dispositivos por conta.', uk: 'Преміум‑сервери, WireGuard + IKEv2, безлімітний трафік, максимум швидкості та до 5 пристроїв на акаунт.' },

  FAQ_Q4: { ru: 'Что такое DNS профили и зачем они?', en: 'What are DNS profiles and why do they matter?', de: 'Was sind DNS‑Profile und wozu?', es: '¿Qué son los perfiles DNS y para qué sirven?', fr: 'Que sont les profils DNS et à quoi servent‑ils ?', pt: 'O que são perfis DNS e por quê?', uk: 'Що таке профілі DNS і навіщо вони?' },
  FAQ_A4: { ru: 'В приложении можно выбрать DNS (AdGuard / Cloudflare / Google). Это влияет на блокировки/скорость/приватность в зависимости от профиля.', en: 'In the app you can pick DNS (AdGuard / Cloudflare / Google). It affects blocking, speed, and privacy depending on the profile.', de: 'In der App können Sie DNS wählen (AdGuard / Cloudflare / Google). Das beeinflusst Blockierung, Geschwindigkeit und Privatsphäre.', es: 'En la app puedes elegir DNS (AdGuard / Cloudflare / Google). Afecta bloqueo, velocidad y privacidad según el perfil.', fr: 'Dans l’app, vous pouvez choisir le DNS (AdGuard / Cloudflare / Google). Cela influence blocage, vitesse et confidentialité.', pt: 'No app você escolhe DNS (AdGuard / Cloudflare / Google). Isso afeta bloqueio, velocidade e privacidade.', uk: 'У додатку можна вибрати DNS (AdGuard / Cloudflare / Google). Це впливає на блокування/швидкість/приватність залежно від профілю.' },

  FAQ_Q5: { ru: 'Какие виджеты есть?', en: 'What widgets do you have?', de: 'Welche Widgets gibt es?', es: '¿Qué widgets hay?', fr: 'Quels widgets avez‑vous ?', pt: 'Quais widgets existem?', uk: 'Які є віджети?' },
  FAQ_A5: { ru: 'На iOS доступны виджеты со статусом подключения и таймером сессии — удобно видеть VPN без открытия приложения.', en: 'On iOS, widgets show your connection status and session timer — useful to see VPN state without opening the app.', de: 'Auf iOS gibt es Widgets mit Verbindungsstatus und Session‑Timer — praktisch ohne App‑Öffnen.', es: 'En iOS hay widgets con estado y temporizador de sesión — útil sin abrir la app.', fr: 'Sur iOS, des widgets affichent le statut et le minuteur de session — pratique sans ouvrir l’app.', pt: 'No iOS, os widgets mostram o status e o timer da sessão — útil sem abrir o app.', uk: 'На iOS є віджети зі статусом підключення і таймером сесії — зручно без відкриття додатка.' },

  FAQ_Q6: { ru: 'Как работает trial 3 дня?', en: 'How does the 3‑day trial work?', de: 'Wie funktioniert der 3‑Tage‑Test?', es: '¿Cómo funciona la prueba de 3 días?', fr: "Comment fonctionne l’essai de 3 jours ?", pt: 'Como funciona o teste de 3 dias?', uk: 'Як працює trial 3 дні?' },
  FAQ_A6: { ru: 'Trial активируется при оформлении Premium в приложении. Управление и отмена — в подписках Apple (Settings → Apple ID → Subscriptions).', en: 'The trial starts when you activate Premium in the app. Manage and cancel via Apple subscriptions (Settings → Apple ID → Subscriptions).', de: 'Der Test startet, wenn Sie Premium in der App aktivieren. Verwaltung/Abbruch in Apple‑Abos (Settings → Apple ID → Subscriptions).', es: 'La prueba inicia al activar Premium en la app. Gestionar/cancelar en Suscripciones de Apple (Settings → Apple ID → Subscriptions).', fr: "L’essai démarre lors de l’activation de Premium. Gérez/annulez via Abonnements Apple (Settings → Apple ID → Subscriptions).", pt: 'O teste começa ao ativar Premium no app. Gerencie/cancele em Assinaturas Apple (Settings → Apple ID → Subscriptions).', uk: 'Trial активується при оформленні Premium у додатку. Керування/скасування — в підписках Apple (Settings → Apple ID → Subscriptions).' },

  FAQ_Q7: { ru: 'Какие протоколы поддерживаются?', en: 'Which protocols are supported?', de: 'Welche Protokolle werden unterstützt?', es: '¿Qué protocolos se admiten?', fr: 'Quels protocoles sont pris en charge ?', pt: 'Quais protocolos são suportados?', uk: 'Які протоколи підтримуються?' },
  FAQ_A7: { ru: 'FollowNet поддерживает WireGuard и IKEv2. Можно выбрать подходящий вариант под сеть и стабильность.', en: 'FollowNet supports WireGuard and IKEv2. You can choose what fits your network and stability.', de: 'FollowNet unterstützt WireGuard und IKEv2. Sie können je nach Netzwerk/Stabilität wählen.', es: 'FollowNet admite WireGuard e IKEv2. Puedes elegir según red y estabilidad.', fr: 'FollowNet prend en charge WireGuard et IKEv2. Choisissez selon réseau et stabilité.', pt: 'FollowNet suporta WireGuard e IKEv2. Você pode escolher conforme rede/estabilidade.', uk: 'FollowNet підтримує WireGuard та IKEv2. Можна вибрати варіант під мережу та стабільність.' },

  FAQ_Q8: { ru: 'Если VPN не подключается — что делать?', en: "If VPN doesn't connect — what should I do?", de: 'Wenn VPN nicht verbindet — was tun?', es: 'Si no conecta — ¿qué hago?', fr: 'Si ça не se connecte pas — que faire ?', pt: 'Se não conectar — o que fazer?', uk: 'Якщо VPN не підключається — що робити?' },
  FAQ_A8: { ru: 'Попробуйте сменить сервер или протокол, переключить Wi‑Fi/сотовую сеть и перезапустить приложение. Если не помогло — проверьте интернет и попробуйте позже.', en: 'Try switching server or protocol, toggle Wi‑Fi/cellular, and restart the app. If it still fails, check your internet and try again later.', de: 'Wechseln Sie Server oder Protokoll, schalten Sie WLAN/Mobilfunk um und starten Sie die App neu. Wenn es weiterhin nicht funktioniert, prüfen Sie die Internetverbindung und versuchen Sie es später erneut.', es: 'Cambia servidor o protocolo, alterna Wi‑Fi/datos y reinicia la app. Si sigue, revisa internet y prueba más tarde.', fr: 'Essayez un autre serveur/protocole, basculez Wi‑Fi/4G et redémarrez l’app. Si ça persiste, vérifiez internet et réessayez plus tard.', pt: 'Troque servidor/protocolo, alterne Wi‑Fi/dados e reinicie o app. Se continuar, verifique a internet e tente novamente depois.', uk: 'Спробуйте змінити сервер або протокол, перемкнути Wi‑Fi/мобільну мережу і перезапустити додаток. Якщо не допомогло — перевірте інтернет і спробуйте пізніше.' },
};

const STORAGE_KEY = 'follownet_lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private lang: AppLang = this.readInitialLang();
  readonly lang$ = new BehaviorSubject<AppLang>(this.lang);

  constructor() {
    document.documentElement.lang = this.lang;
  }

  get current(): AppLang {
    return this.lang;
  }

  setLang(next: AppLang) {
    this.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    document.documentElement.lang = next;
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

  private readInitialLang(): AppLang {
    // 1) URL override: ?lang=ru|en|de|es|fr|pt|uk
    try {
      const fromUrl = new URLSearchParams(window.location.search).get('lang')?.toLowerCase();
      if (fromUrl && (SUPPORTED_LANGS as readonly string[]).includes(fromUrl)) return fromUrl as AppLang;
    } catch {
      // ignore
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY) as AppLang | null;
      if (saved && (SUPPORTED_LANGS as readonly string[]).includes(saved)) return saved;
    } catch {
      // ignore
    }
    const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
    // map navigator languages to supported set (e.g. en-US -> en)
    if (nav.startsWith('ru')) return 'ru';
    if (nav.startsWith('uk')) return 'uk';
    if (nav.startsWith('de')) return 'de';
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('pt')) return 'pt';
    return 'en';
  }
}

