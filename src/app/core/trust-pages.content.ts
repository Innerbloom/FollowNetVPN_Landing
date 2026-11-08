import { AppLang } from './i18n.service';
import type { ProductPage } from './product-pages.content';

const ABOUT: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'About',
    h1: 'About FollowNet',
    lead:
      'FollowNet is a focused VPN for iPhone, iPad, Mac and Android, with a Chrome extension for the browser. Built as a real product: clear Free vs Premium, modern protocols, and no marketing tricks.',
    blocks: [
      {
        title: 'What we build',
        body: 'The apps for iPhone, iPad, Mac and Android are full-device VPNs: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, kill switch, split tunneling, multi-hop, Tor over VPN, DNS profiles, auto-connect, network profiles and a speed test. On iPhone there are also widgets and Shortcuts. The Chrome extension adds a browser proxy with its own kill switch and ad blocking.',
      },
      {
        title: 'How we stay honest',
        body: 'Free includes a weekly traffic cap so you can evaluate a real tunnel. Premium unlocks unlimited traffic, all servers shown in the app, up to 5 devices, and an ad-free experience. We do not invent audit badges, mixnet claims, or “unlimited free forever” marketing.',
      },
      {
        title: 'What is not ready yet',
        body: 'There is no Windows app yet: on Windows and Linux, the Chrome extension protects the browser. Exact server locations and plan details always live in the current app build.',
      },
      {
        title: 'Contact',
        body: 'Support: support@follow-net.com. Privacy Policy and Terms are on this site. Status updates appear on /status when we publish them.',
      },
    ],
    bullets: [
      'VPN for iPhone, iPad, Mac and Android + Chrome extension',
      'Free weekly limit · Premium unlimited',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'No fake audits or inflated coverage claims',
    ],
  },
  ru: {
    kicker: 'О нас',
    h1: 'О FollowNet',
    lead:
      'FollowNet — сфокусированный VPN для iPhone, iPad, Mac и Android плюс расширение для Chrome. Реальный продукт: честный Free vs Premium, современные протоколы, без маркетинговых трюков.',
    blocks: [
      {
        title: 'Что мы делаем',
        body: 'Приложения для iPhone, iPad, Mac и Android — полноценный VPN на всё устройство: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, kill switch, раздельное туннелирование, мультихоп, Tor через VPN, DNS-профили, автоподключение, профили сети и тест скорости. На iPhone есть ещё виджеты и Команды. Расширение Chrome — proxy браузера со своим Kill Switch и блокировкой рекламы.',
      },
      {
        title: 'Как мы остаёмся честными',
        body: 'Free — с недельным лимитом трафика, чтобы оценить реальный туннель. Premium — безлимит, все серверы из приложения, до 5 устройств и без рекламы. Без выдуманных аудитов, mixnet и «безлимит навсегда бесплатно».',
      },
      {
        title: 'Чего пока нет',
        body: 'Приложения для Windows пока нет: на Windows и Linux браузер защищает расширение Chrome. Актуальные локации и условия тарифов — в текущей версии приложения.',
      },
      {
        title: 'Связь',
        body: 'Поддержка: support@follow-net.com. Privacy Policy и Terms — на этом сайте. Статус — на /status.',
      },
    ],
    bullets: [
      'VPN для iPhone, iPad, Mac и Android + расширение Chrome',
      'Free — недельный лимит · Premium — безлимит',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Без фейковых аудитов и завышенных цифр покрытия',
    ],
  },
  uk: {
    kicker: 'Про нас',
    h1: 'Про FollowNet',
    lead:
      'FollowNet — сфокусований VPN для iPhone, iPad, Mac і Android плюс розширення для Chrome. Реальний продукт: чесний Free vs Premium, сучасні протоколи, без маркетингових трюків.',
    blocks: [
      {
        title: 'Що ми робимо',
        body: 'Застосунки для iPhone, iPad, Mac і Android — повноцінний VPN на весь пристрій: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, kill switch, роздільне тунелювання, мультихоп, Tor через VPN, DNS-профілі, автопідключення, профілі мережі й тест швидкості. На iPhone є ще віджети й Команди. Розширення Chrome — proxy браузера з власним Kill Switch і блокуванням реклами.',
      },
      {
        title: 'Як ми лишаємося чесними',
        body: 'Free — з тижневим лімітом трафіку, щоб оцінити справжній тунель. Premium — безліміт, усі сервери із застосунку, до 5 пристроїв і без реклами. Без вигаданих аудитів, mixnet і «безліміт назавжди безкоштовно».',
      },
      {
        title: 'Чого поки немає',
        body: 'Застосунку для Windows поки немає: на Windows і Linux браузер захищає розширення Chrome. Актуальні локації й умови тарифів — у поточній версії застосунку.',
      },
      {
        title: 'Зв’язок',
        body: 'Підтримка: support@follow-net.com. Privacy Policy і Terms — на цьому сайті. Статус — на /status.',
      },
    ],
    bullets: [
      'VPN для iPhone, iPad, Mac і Android + розширення Chrome',
      'Free — тижневий ліміт · Premium — безліміт',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Без фейкових аудитів і завищених цифр покриття',
    ],
  },
  de: {
    kicker: 'Über uns',
    h1: 'Über FollowNet',
    lead:
      'FollowNet ist ein fokussiertes VPN für iPhone, iPad, Mac und Android, dazu eine Chrome-Erweiterung für den Browser. Ein echtes Produkt: klares Free vs Premium, moderne Protokolle, keine Marketingtricks.',
    blocks: [
      {
        title: 'Was wir bauen',
        body: 'Die Apps für iPhone, iPad, Mac und Android sind geräteweite VPNs: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, Kill Switch, Split Tunneling, Multi-Hop, Tor über VPN, DNS-Profile, Auto-Connect, Netzwerkprofile und Speedtest. Auf dem iPhone gibt es zusätzlich Widgets und Kurzbefehle. Die Chrome-Erweiterung bietet einen Browser-Proxy mit eigenem Kill Switch und Werbeblocker.',
      },
      {
        title: 'Wie wir ehrlich bleiben',
        body: 'Free hat ein wöchentliches Traffic-Limit, damit du einen echten Tunnel testen kannst. Premium bringt unbegrenzten Traffic, alle Server aus der App, bis zu 5 Geräte und keine Werbung. Keine erfundenen Audits, kein Mixnet, kein „für immer kostenlos unbegrenzt“.',
      },
      {
        title: 'Was noch fehlt',
        body: 'Eine Windows-App gibt es noch nicht: Unter Windows und Linux schützt die Chrome-Erweiterung den Browser. Aktuelle Standorte und Tarifdetails stehen in der aktuellen App-Version.',
      },
      {
        title: 'Kontakt',
        body: 'Support: support@follow-net.com. Datenschutz und AGB findest du auf dieser Seite. Status-Updates erscheinen unter /status.',
      },
    ],
    bullets: [
      'VPN für iPhone, iPad, Mac und Android + Chrome-Erweiterung',
      'Free mit Wochenlimit · Premium unbegrenzt',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Keine Fake-Audits oder aufgeblähten Abdeckungszahlen',
    ],
  },
  es: {
    kicker: 'Sobre nosotros',
    h1: 'Sobre FollowNet',
    lead:
      'FollowNet es una VPN enfocada para iPhone, iPad, Mac y Android, con una extensión de Chrome para el navegador. Un producto real: Free vs Premium claro, protocolos modernos y sin trucos de marketing.',
    blocks: [
      {
        title: 'Qué construimos',
        body: 'Las apps para iPhone, iPad, Mac y Android son VPN para todo el dispositivo: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, kill switch, túnel dividido, multi-hop, Tor sobre VPN, perfiles DNS, conexión automática, perfiles de red y test de velocidad. En iPhone también hay widgets y Atajos. La extensión de Chrome añade un proxy del navegador con su propio Kill Switch y bloqueo de anuncios.',
      },
      {
        title: 'Cómo seguimos siendo honestos',
        body: 'Free incluye un límite semanal de tráfico para que pruebes un túnel real. Premium desbloquea tráfico ilimitado, todos los servidores de la app, hasta 5 dispositivos y sin anuncios. No inventamos auditorías, mixnet ni «ilimitado gratis para siempre».',
      },
      {
        title: 'Lo que aún no existe',
        body: 'Todavía no hay app para Windows: en Windows y Linux, la extensión de Chrome protege el navegador. Las ubicaciones y los planes actuales están en la versión actual de la app.',
      },
      {
        title: 'Contacto',
        body: 'Soporte: support@follow-net.com. La Política de privacidad y los Términos están en este sitio. El estado se publica en /status.',
      },
    ],
    bullets: [
      'VPN para iPhone, iPad, Mac y Android + extensión de Chrome',
      'Free con límite semanal · Premium ilimitado',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Sin auditorías falsas ni cifras de cobertura infladas',
    ],
  },
  fr: {
    kicker: 'À propos',
    h1: 'À propos de FollowNet',
    lead:
      'FollowNet est un VPN ciblé pour iPhone, iPad, Mac et Android, avec une extension Chrome pour le navigateur. Un vrai produit : Free vs Premium clair, protocoles modernes, sans astuces marketing.',
    blocks: [
      {
        title: 'Ce que nous construisons',
        body: 'Les apps pour iPhone, iPad, Mac et Android sont des VPN pour tout l’appareil : Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, kill switch, tunnel divisé, multi-hop, Tor via VPN, profils DNS, connexion auto, profils réseau et test de débit. Sur iPhone, il y a aussi des widgets et des Raccourcis. L’extension Chrome ajoute un proxy navigateur avec son propre Kill Switch et un bloqueur de pubs.',
      },
      {
        title: 'Comment nous restons honnêtes',
        body: 'Free inclut un plafond de trafic hebdomadaire pour tester un vrai tunnel. Premium débloque le trafic illimité, tous les serveurs de l’app, jusqu’à 5 appareils et zéro pub. Pas de faux audits, pas de mixnet, pas de « illimité gratuit pour toujours ».',
      },
      {
        title: 'Ce qui manque encore',
        body: 'Il n’y a pas encore d’app Windows : sous Windows et Linux, l’extension Chrome protège le navigateur. Les emplacements et offres actuels sont dans la version actuelle de l’app.',
      },
      {
        title: 'Contact',
        body: 'Support : support@follow-net.com. La politique de confidentialité et les conditions sont sur ce site. Le statut est publié sur /status.',
      },
    ],
    bullets: [
      'VPN pour iPhone, iPad, Mac et Android + extension Chrome',
      'Free avec limite hebdo · Premium illimité',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Pas de faux audits ni de chiffres de couverture gonflés',
    ],
  },
  pt: {
    kicker: 'Sobre',
    h1: 'Sobre o FollowNet',
    lead:
      'FollowNet é uma VPN focada para iPhone, iPad, Mac e Android, com uma extensão do Chrome para o navegador. Um produto real: Free vs Premium claro, protocolos modernos e sem truques de marketing.',
    blocks: [
      {
        title: 'O que construímos',
        body: 'Os apps para iPhone, iPad, Mac e Android são VPN para o dispositivo inteiro: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, kill switch, túnel dividido, multi-hop, Tor via VPN, perfis de DNS, conexão automática, perfis de rede e teste de velocidade. No iPhone também há widgets e Atalhos. A extensão do Chrome adiciona um proxy do navegador com seu próprio Kill Switch e bloqueio de anúncios.',
      },
      {
        title: 'Como continuamos honestos',
        body: 'O Free tem um limite semanal de tráfego para você testar um túnel real. O Premium libera tráfego ilimitado, todos os servidores do app, até 5 dispositivos e sem anúncios. Não inventamos auditorias, mixnet nem «ilimitado grátis para sempre».',
      },
      {
        title: 'O que ainda não existe',
        body: 'Ainda não há app para Windows: no Windows e no Linux, a extensão do Chrome protege o navegador. Locais e planos atuais estão na versão atual do app.',
      },
      {
        title: 'Contato',
        body: 'Suporte: support@follow-net.com. A Política de privacidade e os Termos estão neste site. O status é publicado em /status.',
      },
    ],
    bullets: [
      'VPN para iPhone, iPad, Mac e Android + extensão do Chrome',
      'Free com limite semanal · Premium ilimitado',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Sem auditorias falsas nem números de cobertura inflados',
    ],
  },
};

const SUPPORT: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'Support',
    h1: 'FollowNet support',
    lead:
      'Quick help for connection, Free vs Premium, trial, restore, and the Chrome extension. Still stuck? Email support@follow-net.com.',
    blocks: [
      {
        title: 'VPN will not connect',
        body: 'Allow the iOS VPN configuration when prompted. Try another nearby server, switch protocol (or leave Smart Connect on), toggle Wi‑Fi/cellular, and reopen the app. Captive portals (hotel Wi‑Fi) must be accepted before the tunnel can stay up.',
      },
      {
        title: 'Free traffic and Premium',
        body: 'Free includes a weekly traffic cap shown in the app. Premium removes the cap and unlocks the Premium locations listed for your plan. Manage or restore App Store subscriptions in iOS Settings → Apple ID → Subscriptions.',
      },
      {
        title: '3-day trial',
        body: 'The trial is available in the App Store and Google Play on the annual plan for eligible first Premium subscriptions. Cancel before it ends if you do not want auto-renew.',
      },
      {
        title: 'Chrome extension',
        body: 'It protects Chrome browser traffic only. If pages fail after connect, check Kill Switch, try another server, and confirm you are signed into the same account as iOS. It does not encrypt other desktop apps.',
      },
      {
        title: 'Write to us',
        body: 'Email support@follow-net.com with your account email, iOS/Chrome version, protocol, and what you already tried. We do not ask for your App Store password.',
      },
    ],
    bullets: [
      'support@follow-net.com',
      'Guides hub: /guides',
      'Privacy Policy · Terms',
      'Status page: /status',
    ],
  },
  ru: {
    kicker: 'Поддержка',
    h1: 'Поддержка FollowNet',
    lead:
      'Быстрая помощь: подключение, Free/Premium, trial, restore и Chrome. Не помогло — напишите на support@follow-net.com.',
    blocks: [
      {
        title: 'VPN не подключается',
        body: 'Разрешите VPN-конфигурацию iOS. Смените ближайший сервер, протокол (или оставьте Smart Connect), переключите Wi‑Fi/LTE и перезапустите приложение. Captive portal в гостиницах нужно пройти до стабильного туннеля.',
      },
      {
        title: 'Трафик Free и Premium',
        body: 'Free — недельный лимит, он виден в приложении. Premium снимает лимит и открывает Premium-локации плана. Подписками App Store управляйте в Настройки → Apple ID → Подписки.',
      },
      {
        title: 'Пробный период 3 дня',
        body: 'Пробный период — в App Store и Google Play на годовом плане при первой подходящей подписке Premium. Отмените до окончания, если не нужен автопродление.',
      },
      {
        title: 'Расширение Chrome',
        body: 'Защищает только трафик Chrome. Если сайты не открываются — проверьте Kill Switch, другой сервер и тот же аккаунт, что на iOS. Другие программы компьютера не шифруются.',
      },
      {
        title: 'Напишите нам',
        body: 'support@follow-net.com — укажите email аккаунта, версию iOS/Chrome, протокол и что уже пробовали. Пароль App Store не нужен.',
      },
    ],
    bullets: [
      'support@follow-net.com',
      'Гайды: /guides',
      'Privacy Policy · Terms',
      'Статус: /status',
    ],
  },
  uk: {
    kicker: 'Підтримка',
    h1: 'Підтримка FollowNet',
    lead:
      'Швидка допомога: підключення, Free/Premium, trial, restore і Chrome. Не допомогло — support@follow-net.com.',
    blocks: [
      {
        title: 'VPN не підключається',
        body: 'Дозвольте VPN-конфігурацію iOS. Змініть близький сервер, протокол (або Smart Connect), перемкніть Wi‑Fi/LTE і перезапустіть застосунок. Captive portal у готелях треба пройти до стабільного тунелю.',
      },
      {
        title: 'Трафік Free і Premium',
        body: 'Free має тижневий ліміт у застосунку. Premium знімає ліміт і відкриває Premium-локації плану. Підписками App Store керуйте в Налаштування → Apple ID → Підписки.',
      },
      {
        title: 'Пробний період 3 дні',
        body: 'Пробний період — в App Store і Google Play на річному плані для першої відповідної підписки Premium. Скасуйте до завершення, якщо автопродовження не потрібне.',
      },
      {
        title: 'Розширення Chrome',
        body: 'Захищає лише трафік Chrome. Якщо сайти не відкриваються — Kill Switch, інший сервер і той самий акаунт, що на iOS. Інші програми комп’ютера не шифруються.',
      },
      {
        title: 'Напишіть нам',
        body: 'support@follow-net.com — email акаунта, версія iOS/Chrome, протокол і що вже пробували. Пароль App Store не потрібен.',
      },
    ],
    bullets: [
      'support@follow-net.com',
      'Гайди: /guides',
      'Privacy Policy · Terms',
      'Статус: /status',
    ],
  },
  de: {
    kicker: 'Support',
    h1: 'FollowNet Support',
    lead:
      'Schnelle Hilfe zu Verbindung, Free/Premium, Testphase, Wiederherstellen und Chrome. Sonst: support@follow-net.com.',
    blocks: [
      {
        title: 'VPN verbindet nicht',
        body: 'VPN-Konfiguration von iOS erlauben. Anderen nahen Server wählen, Protokoll wechseln (oder Smart Connect lassen), WLAN/Mobilfunk umschalten und die App neu öffnen. Captive Portale zuerst bestätigen.',
      },
      {
        title: 'Free-Traffic und Premium',
        body: 'Free hat ein wöchentliches Limit in der App. Premium hebt es auf und öffnet Premium-Standorte. Abos unter Einstellungen → Apple-ID → Abonnements verwalten oder wiederherstellen.',
      },
      {
        title: '3-Tage-Test',
        body: 'Im App Store und bei Google Play im Jahresplan für berechtigte Erst-Abos. Vor Ablauf kündigen, wenn keine Verlängerung gewünscht ist.',
      },
      {
        title: 'Chrome-Erweiterung',
        body: 'Schützt nur Chrome-Traffic. Bei Problemen Kill Switch, anderen Server und dasselbe Konto wie auf iOS prüfen. Andere Desktop-Apps bleiben ungeschützt.',
      },
      {
        title: 'Schreiben Sie uns',
        body: 'support@follow-net.com mit Konto-E-Mail, iOS/Chrome-Version, Protokoll und bisherigen Schritten. Kein App-Store-Passwort nötig.',
      },
    ],
    bullets: [
      'support@follow-net.com',
      'Guides: /guides',
      'Datenschutz · Bedingungen',
      'Status: /status',
    ],
  },
  es: {
    kicker: 'Soporte',
    h1: 'Soporte FollowNet',
    lead:
      'Ayuda rápida: conexión, Free/Premium, prueba, restaurar y Chrome. Si falla: support@follow-net.com.',
    blocks: [
      {
        title: 'El VPN no conecta',
        body: 'Permite la configuración VPN de iOS. Prueba otro servidor cercano, cambia de protocolo (o deja Smart Connect), alterna Wi‑Fi/datos y reinicia la app. Completa el portal cautivo antes.',
      },
      {
        title: 'Tráfico Free y Premium',
        body: 'Free tiene límite semanal en la app. Premium lo quita y abre ubicaciones Premium. Gestiona o restaura en Ajustes → Apple ID → Suscripciones.',
      },
      {
        title: 'Prueba de 3 días',
        body: 'En App Store y Google Play con el plan anual para primeras suscripciones elegibles. Cancela antes si no quieres renovación.',
      },
      {
        title: 'Extensión Chrome',
        body: 'Protege solo el tráfico de Chrome. Si falla, revisa Kill Switch, otro servidor y la misma cuenta que en iOS. No cifra otras apps del ordenador.',
      },
      {
        title: 'Escríbenos',
        body: 'support@follow-net.com con email de cuenta, versión iOS/Chrome, protocolo y pasos ya probados. No pedimos la contraseña de App Store.',
      },
    ],
    bullets: [
      'support@follow-net.com',
      'Guías: /guides',
      'Privacidad · Términos',
      'Estado: /status',
    ],
  },
  fr: {
    kicker: 'Support',
    h1: 'Support FollowNet',
    lead:
      'Aide rapide : connexion, Free/Premium, essai, restauration et Chrome. Sinon : support@follow-net.com.',
    blocks: [
      {
        title: 'Le VPN ne se connecte pas',
        body: 'Autorisez la configuration VPN iOS. Essayez un serveur proche, changez de protocole (ou laissez Smart Connect), basculez Wi‑Fi/cellulaire et rouvrez l’app. Validez d’abord le portail captif.',
      },
      {
        title: 'Trafic Free et Premium',
        body: 'Free a un plafond hebdomadaire dans l’app. Premium le retire et ouvre les emplacements Premium. Gérez ou restaurez via Réglages → Apple ID → Abonnements.',
      },
      {
        title: 'Essai 3 jours',
        body: 'Sur l’App Store et Google Play avec l’offre annuelle pour les premiers abonnements éligibles. Annulez avant la fin si vous ne voulez pas de renouvellement.',
      },
      {
        title: 'Extension Chrome',
        body: 'Protège uniquement le trafic Chrome. En cas de souci : Kill Switch, autre serveur, même compte qu’iOS. Les autres apps bureau ne sont pas chiffrées.',
      },
      {
        title: 'Écrivez-nous',
        body: 'support@follow-net.com avec e-mail du compte, versions iOS/Chrome, protocole et essais déjà faits. Pas de mot de passe App Store.',
      },
    ],
    bullets: [
      'support@follow-net.com',
      'Guides : /guides',
      'Confidentialité · Conditions',
      'Statut : /status',
    ],
  },
  pt: {
    kicker: 'Suporte',
    h1: 'Suporte FollowNet',
    lead:
      'Ajuda rápida: ligação, Free/Premium, teste, restauro e Chrome. Ainda preso? support@follow-net.com.',
    blocks: [
      {
        title: 'O VPN não liga',
        body: 'Autorize a configuração VPN do iOS. Experimente outro servidor próximo, mude o protocolo (ou deixe o Smart Connect), alterne Wi‑Fi/dados e reabra a app. Conclua o portal cativo primeiro.',
      },
      {
        title: 'Tráfego Free e Premium',
        body: 'O Free tem limite semanal na app. O Premium remove-o e abre locais Premium. Faça gestão/restauro em Definições → Apple ID → Subscrições.',
      },
      {
        title: 'Teste de 3 dias',
        body: 'Na App Store e no Google Play no plano anual para primeiras subscrições elegíveis. Cancele antes do fim se não quiser renovação.',
      },
      {
        title: 'Extensão Chrome',
        body: 'Protege só o tráfego do Chrome. Se falhar, veja Kill Switch, outro servidor e a mesma conta do iOS. Não cifra outras apps do computador.',
      },
      {
        title: 'Escreva-nos',
        body: 'support@follow-net.com com email da conta, versão iOS/Chrome, protocolo e o que já tentou. Não pedimos a palavra-passe da App Store.',
      },
    ],
    bullets: [
      'support@follow-net.com',
      'Guias: /guides',
      'Privacidade · Termos',
      'Estado: /status',
    ],
  },
};

const STATUS: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'Status',
    h1: 'FollowNet status',
    lead: 'Operational snapshot for the website, iOS app distribution, and Chrome extension. Updated manually when something material changes.',
    blocks: [
      {
        title: 'Current status',
        body: 'All systems appear operational: website, App Store listing, and Chrome Web Store extension. If your tunnel fails, it is usually a local network, captive portal, or protocol path — see Support.',
      },
      {
        title: 'What this page is (and is not)',
        body: 'This is a simple public note, not a live probe graph. For account-specific issues, email support@follow-net.com with details.',
      },
      {
        title: 'Last note',
        body: '2026-08-02 — marketing site content expanded (guides, blog, Features/Download). No known global outage.',
      },
    ],
    bullets: [
      'Website: operational',
      'iOS App Store: operational',
      'Chrome extension: operational',
      'Support: support@follow-net.com',
    ],
  },
  ru: {
    kicker: 'Статус',
    h1: 'Статус FollowNet',
    lead: 'Краткий снимок: сайт, раздача iOS-приложения и расширение Chrome. Обновляем вручную при важных изменениях.',
    blocks: [
      {
        title: 'Сейчас',
        body: 'Всё выглядит рабочим: сайт, карточка App Store и расширение Chrome Web Store. Если туннель не встаёт — чаще локальная сеть, captive portal или протокол. См. Поддержку.',
      },
      {
        title: 'Чем эта страница является',
        body: 'Публичная заметка, не живой график мониторинга. По аккаунту — support@follow-net.com.',
      },
      {
        title: 'Последняя запись',
        body: '2026-08-02 — расширен контент сайта (гайды, блог, Features/Download). Глобальных сбоев не известно.',
      },
    ],
    bullets: [
      'Сайт: работает',
      'App Store: работает',
      'Chrome extension: работает',
      'Поддержка: support@follow-net.com',
    ],
  },
  uk: {
    kicker: 'Статус',
    h1: 'Статус FollowNet',
    lead: 'Короткий знімок: сайт, iOS App Store і розширення Chrome. Оновлюємо вручну за важливих змін.',
    blocks: [
      {
        title: 'Зараз',
        body: 'Усе виглядає робочим: сайт, картка App Store і Chrome Web Store. Якщо тунель не піднімається — частіше локальна мережа, captive portal або протокол. Див. Підтримку.',
      },
      {
        title: 'Що це за сторінка',
        body: 'Публічна нотатка, не живий графік моніторингу. Щодо акаунта — support@follow-net.com.',
      },
      {
        title: 'Останній запис',
        body: '2026-08-02 — розширено контент сайту (гайди, блог, Features/Download). Глобальних збоїв не відомо.',
      },
    ],
    bullets: [
      'Сайт: працює',
      'App Store: працює',
      'Chrome extension: працює',
      'Підтримка: support@follow-net.com',
    ],
  },
  de: {
    kicker: 'Status',
    h1: 'FollowNet Status',
    lead: 'Kurzer Stand zu Website, iOS-Verteilung und Chrome-Erweiterung. Manuell aktualisiert bei relevanten Änderungen.',
    blocks: [
      {
        title: 'Aktuell',
        body: 'Alles wirkt betriebsbereit: Website, App-Store-Eintrag und Chrome Web Store. Verbindungsprobleme liegen meist am lokalen Netz, Captive Portal oder Protokoll — siehe Support.',
      },
      {
        title: 'Was diese Seite ist',
        body: 'Ein öffentlicher Hinweis, kein Live-Monitoring. Kontofragen an support@follow-net.com.',
      },
      {
        title: 'Letzter Eintrag',
        body: '2026-08-02 — Website-Inhalte erweitert (Guides, Blog, Features/Download). Kein bekannter globaler Ausfall.',
      },
    ],
    bullets: [
      'Website: betriebsbereit',
      'App Store: betriebsbereit',
      'Chrome-Erweiterung: betriebsbereit',
      'Support: support@follow-net.com',
    ],
  },
  es: {
    kicker: 'Estado',
    h1: 'Estado de FollowNet',
    lead: 'Resumen del sitio, App Store y extensión Chrome. Se actualiza a mano cuando hay cambios importantes.',
    blocks: [
      {
        title: 'Ahora',
        body: 'Todo parece operativo: web, ficha de App Store y Chrome Web Store. Si el túnel falla, suele ser red local, portal cautivo o protocolo — ver Soporte.',
      },
      {
        title: 'Qué es esta página',
        body: 'Una nota pública, no un gráfico en vivo. Problemas de cuenta: support@follow-net.com.',
      },
      {
        title: 'Última nota',
        body: '2026-08-02 — más contenido en el sitio (guías, blog, Features/Download). Sin incidencia global conocida.',
      },
    ],
    bullets: [
      'Web: operativo',
      'App Store: operativo',
      'Extensión Chrome: operativo',
      'Soporte: support@follow-net.com',
    ],
  },
  fr: {
    kicker: 'Statut',
    h1: 'Statut FollowNet',
    lead: 'Aperçu du site, de la distribution iOS et de l’extension Chrome. Mis à jour manuellement en cas de changement notable.',
    blocks: [
      {
        title: 'Actuellement',
        body: 'Tout semble opérationnel : site, fiche App Store et Chrome Web Store. Un tunnel qui échoue vient souvent du réseau local, du portail captif ou du protocole — voir Support.',
      },
      {
        title: 'Ce qu’est cette page',
        body: 'Une note publique, pas un graphe live. Compte : support@follow-net.com.',
      },
      {
        title: 'Dernière note',
        body: '2026-08-02 — contenu du site enrichi (guides, blog, Features/Download). Pas de panne globale connue.',
      },
    ],
    bullets: [
      'Site : opérationnel',
      'App Store : opérationnel',
      'Extension Chrome : opérationnelle',
      'Support : support@follow-net.com',
    ],
  },
  pt: {
    kicker: 'Estado',
    h1: 'Estado do FollowNet',
    lead: 'Resumo do site, App Store e extensão Chrome. Atualizado manualmente quando algo material muda.',
    blocks: [
      {
        title: 'Agora',
        body: 'Tudo parece operacional: site, ficha da App Store e Chrome Web Store. Se o túnel falhar, costuma ser rede local, portal cativo ou protocolo — veja Suporte.',
      },
      {
        title: 'O que é esta página',
        body: 'Uma nota pública, não um gráfico em tempo real. Conta: support@follow-net.com.',
      },
      {
        title: 'Última nota',
        body: '2026-08-02 — conteúdo do site expandido (guias, blog, Features/Download). Sem interrupção global conhecida.',
      },
    ],
    bullets: [
      'Site: operacional',
      'App Store: operacional',
      'Extensão Chrome: operacional',
      'Suporte: support@follow-net.com',
    ],
  },
};

export function aboutPage(lang: AppLang): ProductPage {
  return ABOUT[lang];
}

export function supportPage(lang: AppLang): ProductPage {
  return SUPPORT[lang];
}

export function statusPage(lang: AppLang): ProductPage {
  return STATUS[lang];
}
