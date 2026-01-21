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
  NAV_DOWNLOAD: { ru: 'Скачать', en: 'Download', de: 'Download', es: 'Descargar', fr: 'Télécharger', pt: 'Baixar', uk: 'Завантажити' },

  // Hero
  HERO_TITLE_1: { ru: 'Быстрый VPN, который', en: 'A fast VPN that', de: 'Ein schnelles VPN, das', es: 'Un VPN rápido que', fr: 'Un VPN rapide qui', pt: 'Um VPN rápido que', uk: 'Швидкий VPN, який' },
  HERO_TITLE_2: { ru: 'выглядит', en: 'looks', de: 'aussieht', es: 'se ve', fr: 'a l’air', pt: 'parece', uk: 'виглядає' },
  HERO_TITLE_3: { ru: 'и работает премиально', en: 'and feels premium', de: 'und premium wirkt', es: 'y se siente premium', fr: 'et paraît premium', pt: 'e parece premium', uk: 'і працює преміально' },
  HERO_LEAD: {
    ru: 'Подключайтесь в 1 тап. Стабильная скорость, выбор DNS, статистика и виджеты. Покупка Premium — в приложении на iOS.',
    en: 'Connect in 1 tap. Stable speed, DNS profiles, stats, and widgets. Premium purchase is inside the iOS app.',
    de: 'Verbinden Sie sich mit einem Tap. Stabile Geschwindigkeit, DNS‑Profile, Statistiken und Widgets. Premium wird in der iOS‑App gekauft.',
    es: 'Conéctate con 1 toque. Velocidad estable, perfiles DNS, estadísticas y widgets. La compra de Premium es dentro de la app de iOS.',
    fr: "Connectez‑vous en 1 tap. Vitesse stable, profils DNS, statistiques et widgets. L’achat Premium se fait dans l’app iOS.",
    pt: 'Conecte com 1 toque. Velocidade estável, perfis DNS, estatísticas e widgets. A compra do Premium é dentro do app iOS.',
    uk: 'Підключайтесь в 1 дотик. Стабільна швидкість, профілі DNS, статистика та віджети. Покупка Premium — в iOS‑додатку.',
  },
  HERO_CTA_PRIMARY: { ru: 'Скачать для iOS', en: 'Download for iOS', de: 'Für iOS laden', es: 'Descargar para iOS', fr: 'Télécharger pour iOS', pt: 'Baixar para iOS', uk: 'Завантажити для iOS' },
  HERO_CTA_SECONDARY: { ru: 'Что внутри', en: "What's inside", de: 'Was drin ist', es: 'Qué incluye', fr: 'Ce qui est inclus', pt: 'O que tem', uk: 'Що всередині' },

  // Bullets
  BULLET_SECURITY: { ru: 'Безопасность', en: 'Security', de: 'Sicherheit', es: 'Seguridad', fr: 'Sécurité', pt: 'Segurança', uk: 'Безпека' },
  BULLET_SECURITY_SUB: { ru: 'AES‑256, Kill Switch, защита DNS', en: 'AES‑256, Kill Switch, DNS protection', de: 'AES‑256, Kill Switch, DNS‑Schutz', es: 'AES‑256, Kill Switch, protección DNS', fr: 'AES‑256, Kill Switch, protection DNS', pt: 'AES‑256, Kill Switch, proteção DNS', uk: 'AES‑256, Kill Switch, захист DNS' },
  BULLET_SPEED: { ru: 'Скорость', en: 'Speed', de: 'Geschwindigkeit', es: 'Velocidad', fr: 'Vitesse', pt: 'Velocidade', uk: 'Швидкість' },
  BULLET_SPEED_SUB: { ru: 'WireGuard и быстрые маршруты', en: 'WireGuard and fast routes', de: 'WireGuard und schnelle Routen', es: 'WireGuard y rutas rápidas', fr: 'WireGuard et routes rapides', pt: 'WireGuard e rotas rápidas', uk: 'WireGuard і швидкі маршрути' },
  BULLET_WORLD: { ru: 'Доступ по миру', en: 'Worldwide access', de: 'Weltweiter Zugriff', es: 'Acceso global', fr: 'Accès mondial', pt: 'Acesso global', uk: 'Доступ по світу' },
  BULLET_WORLD_SUB: { ru: 'Выбор локации и низкий пинг', en: 'Choose a location with low ping', de: 'Standortwahl mit niedrigem Ping', es: 'Elige ubicación con bajo ping', fr: 'Choisissez un lieu à faible ping', pt: 'Escolha locais com baixo ping', uk: 'Вибір локації та низький пінг' },

  // Strip chips
  CHIP_CODE: { ru: 'Без пароля — вход по коду на email', en: 'Passwordless — email code login', de: 'Ohne Passwort — Login per E‑Mail‑Code', es: 'Sin contraseña — acceso por código', fr: 'Sans mot de passe — code email', pt: 'Sem senha — login por código', uk: 'Без пароля — вхід за кодом на email' },
  CHIP_WIDGETS: { ru: 'Виджеты: статус + таймер', en: 'Widgets: status + timer', de: 'Widgets: Status + Timer', es: 'Widgets: estado + temporizador', fr: 'Widgets : statut + minuteur', pt: 'Widgets: status + timer', uk: 'Віджети: статус + таймер' },
  CHIP_SPEEDTEST: { ru: 'Speed Test и статистика', en: 'Speed Test and statistics', de: 'Speedtest und Statistik', es: 'Speed Test y estadísticas', fr: 'Speed Test et statistiques', pt: 'Speed Test e estatísticas', uk: 'Speed Test і статистика' },
  CHIP_DNS: { ru: 'Выбор DNS: AdGuard / Cloudflare / Google', en: 'DNS profiles: AdGuard / Cloudflare / Google', de: 'DNS‑Profile: AdGuard / Cloudflare / Google', es: 'Perfiles DNS: AdGuard / Cloudflare / Google', fr: 'Profils DNS : AdGuard / Cloudflare / Google', pt: 'Perfis DNS: AdGuard / Cloudflare / Google', uk: 'Профілі DNS: AdGuard / Cloudflare / Google' },

  // Features section
  FEATURES_KICKER: { ru: 'Преимущества', en: 'Features', de: 'Vorteile', es: 'Funciones', fr: 'Fonctionnalités', pt: 'Recursos', uk: 'Переваги' },
  FEATURES_TITLE: { ru: 'Фокус на скорости, приватности и UX', en: 'Focused on speed, privacy, and UX', de: 'Fokus auf Speed, Privatsphäre und UX', es: 'Enfoque en velocidad, privacidad y UX', fr: 'Focus sur vitesse, confidentialité et UX', pt: 'Foco em velocidade, privacidade e UX', uk: 'Фокус на швидкості, приватності та UX' },
  FEATURES_SUB: { ru: 'Собрали самые важные вещи в одном месте — без перегруза.', en: 'Everything important in one place — without overload.', de: 'Das Wichtigste an einem Ort — ohne Überladung.', es: 'Lo esencial en un solo lugar — sin exceso.', fr: "L’essentiel au même endroit — sans surcharge.", pt: 'O essencial em um só lugar — sem excesso.', uk: 'Найважливіше в одному місці — без перевантаження.' },
  TRUST_WG_TEXT: { ru: 'Быстрые протоколы и стабильное подключение.', en: 'Fast protocols and stable connection.', de: 'Schnelle Protokolle und stabile Verbindung.', es: 'Protocolos rápidos y conexión estable.', fr: 'Protocoles rapides et connexion stable.', pt: 'Protocolos rápidos e conexão estável.', uk: 'Швидкі протоколи та стабільне підключення.' },
  TRUST_KILLSWITCH_TEXT: { ru: 'Контроль безопасности при смене сети и разрывах.', en: 'Extra safety on network changes and dropouts.', de: 'Zusätzliche Sicherheit bei Netzwerkwechseln und Abbrüchen.', es: 'Seguridad extra ante cambios de red y cortes.', fr: 'Sécurité supplémentaire lors des changements de réseau et coupures.', pt: 'Segurança extra em mudanças de rede e quedas.', uk: 'Додаткова безпека при зміні мережі та розривах.' },
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
  PRICING_TITLE: { ru: 'Premium внутри приложения', en: 'Premium inside the app', de: 'Premium in der App', es: 'Premium dentro de la app', fr: 'Premium dans l’app', pt: 'Premium dentro do app', uk: 'Premium всередині додатка' },
  PRICING_SUB: { ru: 'Покупка и восстановление — через App Store (внутри iOS приложения).', en: 'Purchase and restore via App Store (inside the iOS app).', de: 'Kauf und Wiederherstellung über den App Store (in der iOS‑App).', es: 'Compra y restauración vía App Store (en la app iOS).', fr: "Achat et restauration via l’App Store (dans l’app iOS).", pt: 'Compra e restauração via App Store (no app iOS).', uk: 'Покупка та відновлення — через App Store (в iOS‑додатку).' },
  PRICING_FREE: { ru: 'Free', en: 'Free', de: 'Free', es: 'Gratis', fr: 'Gratuit', pt: 'Grátis', uk: 'Free' },
  PRICING_FREE_DESC: { ru: 'Базовые серверы и лимит.', en: 'Basic servers and limits.', de: 'Basis‑Server und Limits.', es: 'Servidores básicos y límites.', fr: 'Serveurs de base et limites.', pt: 'Servidores básicos e limites.', uk: 'Базові сервери та ліміти.' },
  PRICING_FREE_CTA: { ru: 'Скачать приложение', en: 'Download the app', de: 'App herunterladen', es: 'Descargar la app', fr: 'Télécharger l’app', pt: 'Baixar o app', uk: 'Завантажити додаток' },
  PRICING_TRIAL: { ru: '3 дня бесплатно для первых пользователей.', en: '3-day free trial for early users.', de: '3 Tage kostenloser Test für frühe Nutzer.', es: 'Prueba gratuita de 3 días para los primeros usuarios.', fr: 'Essai gratuit de 3 jours pour les premiers utilisateurs.', pt: 'Teste grátis de 3 dias para os primeiros usuários.', uk: '3 дні безкоштовно для перших користувачів.' },
  PRICING_TRIAL_CTA: { ru: 'Начать trial', en: 'Start trial', de: 'Test starten', es: 'Iniciar prueba', fr: "Démarrer l’essai", pt: 'Iniciar teste', uk: 'Почати trial' },
  PRICING_NOTE: { ru: 'Оплата и восстановление — внутри iOS приложения (App Store).', en: 'Payment and restore are inside the iOS app (App Store).', de: 'Zahlung und Wiederherstellung in der iOS‑App (App Store).', es: 'Pago y restauración dentro de la app iOS (App Store).', fr: "Paiement et restauration dans l’app iOS (App Store).", pt: 'Pagamento e restauração dentro do app iOS (App Store).', uk: 'Оплата та відновлення — в iOS‑додатку (App Store).' },
  PRICE_FOREVER: { ru: 'навсегда', en: 'forever', de: 'für immer', es: 'para siempre', fr: 'à vie', pt: 'para sempre', uk: 'назавжди' },
  FREE_FEATURE_1: { ru: 'IKEv2', en: 'IKEv2', de: 'IKEv2', es: 'IKEv2', fr: 'IKEv2', pt: 'IKEv2', uk: 'IKEv2' },
  FREE_FEATURE_2: { ru: 'Бесплатные сервера', en: 'Free servers', de: 'Kostenlose Server', es: 'Servidores gratis', fr: 'Serveurs gratuits', pt: 'Servidores grátis', uk: 'Безкоштовні сервери' },
  FREE_FEATURE_3: { ru: 'Лимит трафика', en: 'Traffic limit', de: 'Traffic‑Limit', es: 'Límite de tráfico', fr: 'Limite de trafic', pt: 'Limite de tráfego', uk: 'Ліміт трафіку' },
  PREMIUM_DESC: { ru: 'Максимум скорости и функций.', en: 'Maximum speed and features.', de: 'Maximale Geschwindigkeit und Funktionen.', es: 'Máxima velocidad y funciones.', fr: 'Vitesse et fonctionnalités maximales.', pt: 'Velocidade e recursos máximos.', uk: 'Максимум швидкості та функцій.' },
  PREMIUM_FEATURE_1: { ru: 'WireGuard + IKEv2', en: 'WireGuard + IKEv2', de: 'WireGuard + IKEv2', es: 'WireGuard + IKEv2', fr: 'WireGuard + IKEv2', pt: 'WireGuard + IKEv2', uk: 'WireGuard + IKEv2' },
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

