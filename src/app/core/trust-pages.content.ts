import { AppLang } from './i18n.service';
import type { ProductPage } from './product-pages.content';

const ABOUT: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'About',
    h1: 'About FollowNet',
    lead:
      'FollowNet is a focused VPN for iPhone and iPad, with a Chrome extension for desktop browsing. Built as a real product: clear Free vs Premium, modern protocols, and no marketing tricks.',
    blocks: [
      {
        title: 'What we build',
        body: 'The iOS app is a full-device VPN via Apple Network Extension: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, VLESS Reality, DNS profiles, Auto-connect, Network Profiles, Speed Test, widgets, and Shortcuts. Chrome adds a browser proxy, Kill Switch for the extension, and ad blocking — not a full-desktop VPN yet.',
      },
      {
        title: 'How we stay honest',
        body: 'Free includes a weekly traffic cap so you can evaluate a real tunnel. Premium unlocks unlimited traffic, all servers shown in the app, up to 5 devices, and an ad-free experience. We do not invent audit badges, mixnet claims, or “unlimited free forever” marketing.',
      },
      {
        title: 'What is not ready yet',
        body: 'There is no Android app yet. Auto-connect on iOS is not the same as a leak-blocking kill switch; that Kill Switch exists in the Chrome extension. Exact server locations and plan details always live in the current App Store build.',
      },
      {
        title: 'Contact',
        body: 'Support: support@follow-net.com. Privacy Policy and Terms are on this site. Status updates appear on /status when we publish them.',
      },
    ],
    bullets: [
      'iOS full-device VPN + Chrome browser proxy',
      'Free weekly limit · Premium unlimited',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'No fake audits or inflated coverage claims',
    ],
  },
  ru: {
    kicker: 'О нас',
    h1: 'О FollowNet',
    lead:
      'FollowNet — сфокусированный VPN для iPhone и iPad плюс расширение Chrome для браузера на десктопе. Реальный продукт: честный Free vs Premium, современные протоколы, без маркетинговых трюков.',
    blocks: [
      {
        title: 'Что мы делаем',
        body: 'iOS-приложение — полноценный VPN через Network Extension: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, DNS, автоподключение, профили сети, Speed Test, виджеты и Команды. В Chrome — proxy браузера, Kill Switch расширения и блокировка рекламы. Полноценного VPN на весь компьютер пока нет.',
      },
      {
        title: 'Как мы остаёмся честными',
        body: 'Free — с недельным лимитом трафика, чтобы оценить реальный туннель. Premium — безлимит, все серверы из приложения, до 5 устройств и без рекламы. Без выдуманных аудитов, mixnet и «безлимит навсегда бесплатно».',
      },
      {
        title: 'Чего пока нет',
        body: 'Пока нет приложения для Android. Автоподключение на iOS — не kill switch с блокировкой утечек; такой Kill Switch есть в Chrome. Актуальные локации и условия тарифов — в текущей сборке App Store.',
      },
      {
        title: 'Связь',
        body: 'Поддержка: support@follow-net.com. Privacy Policy и Terms — на этом сайте. Статус — на /status.',
      },
    ],
    bullets: [
      'iOS VPN на устройство + Chrome proxy',
      'Free — недельный лимит · Premium — безлимит',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Без фейковых аудитов и завышенных цифр покрытия',
    ],
  },
  uk: {
    kicker: 'Про нас',
    h1: 'Про FollowNet',
    lead:
      'FollowNet — сфокусований VPN для iPhone і iPad та розширення Chrome для браузера. Реальний продукт: чесний Free vs Premium, сучасні протоколи, без маркетингових трюків.',
    blocks: [
      {
        title: 'Що ми робимо',
        body: 'iOS-застосунок — повноцінний VPN через Network Extension: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, DNS, автопідключення, профілі мережі, Speed Test, віджети й Команди. У Chrome — proxy браузера, Kill Switch і блокування реклами. Повного VPN на весь комп’ютер поки немає.',
      },
      {
        title: 'Як ми залишаємось чесними',
        body: 'Free має тижневий ліміт трафіку, щоб оцінити справжній тунель. Premium — безліміт, усі сервери з застосунку, до 5 пристроїв і без реклами. Без вигаданих аудитів, mixnet і «безліміт назавжди безкоштовно».',
      },
      {
        title: 'Чого поки немає',
        body: 'Поки немає застосунку для Android. Автопідключення на iOS — не kill switch; такий Kill Switch є в Chrome. Актуальні локації й умови тарифів — у поточній збірці App Store.',
      },
      {
        title: 'Зв’язок',
        body: 'Підтримка: support@follow-net.com. Privacy Policy і Terms — на цьому сайті. Статус — на /status.',
      },
    ],
    bullets: [
      'iOS VPN на пристрій + Chrome proxy',
      'Free — тижневий ліміт · Premium — безліміт',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Без фейкових аудитів і завищених цифр покриття',
    ],
  },
  de: {
    kicker: 'Über uns',
    h1: 'Über FollowNet',
    lead:
      'FollowNet ist ein fokussiertes VPN für iPhone und iPad plus Chrome-Erweiterung für den Desktop-Browser. Echtes Produkt: klares Free vs Premium, moderne Protokolle, keine Marketingtricks.',
    blocks: [
      {
        title: 'Was wir bauen',
        body: 'Die iOS-App ist ein geräteweites VPN über Network Extension: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, DNS, Auto-Connect, Netzwerkprofile, Speed Test, Widgets und Shortcuts. Chrome bietet Browser-Proxy, Kill Switch und Werbeblocker — noch kein volles Desktop-VPN.',
      },
      {
        title: 'Wie wir ehrlich bleiben',
        body: 'Free hat ein wöchentliches Traffic-Limit zum Testen. Premium entfernt das Limit, öffnet die in der App gezeigten Server, bis zu 5 Geräte und ist werbefrei. Keine erfundenen Audits, kein Mixnet-Marketing, kein „lifetime free“.',
      },
      {
        title: 'Was noch fehlt',
        body: 'Noch keine Android-App. Auto-Connect auf iOS ist kein Leak-Kill-Switch; der Kill Switch sitzt in der Chrome-Erweiterung. Standorte und Tarifdetails stehen in der aktuellen App-Store-Version.',
      },
      {
        title: 'Kontakt',
        body: 'Support: support@follow-net.com. Datenschutz und AGB liegen auf dieser Website. Status unter /status.',
      },
    ],
    bullets: [
      'iOS-VPN fürs Gerät + Chrome-Proxy',
      'Free Wochenlimit · Premium unbegrenzt',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Keine Fake-Audits oder aufgeblähte Abdeckungszahlen',
    ],
  },
  es: {
    kicker: 'Acerca de',
    h1: 'Sobre FollowNet',
    lead:
      'FollowNet es un VPN centrado en iPhone y iPad, con extensión de Chrome para el navegador. Producto real: Free vs Premium claros, protocolos modernos, sin trucos de marketing.',
    blocks: [
      {
        title: 'Qué construimos',
        body: 'La app iOS es un VPN de dispositivo completo vía Network Extension: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, DNS, auto-conexión, perfiles, Speed Test, widgets y Atajos. Chrome añade proxy del navegador, Kill Switch y bloqueo de anuncios — aún no un VPN de escritorio completo.',
      },
      {
        title: 'Cómo somos honestos',
        body: 'Free incluye un límite semanal de tráfico para probar un túnel real. Premium quita el tope, abre los servidores mostrados en la app, hasta 5 dispositivos y sin anuncios. Sin auditorías inventadas ni “gratis ilimitado para siempre”.',
      },
      {
        title: 'Qué aún no está',
        body: 'Todavía no hay app para Android. La auto-conexión en iOS no es un kill switch anti-fugas; ese Kill Switch está en Chrome. Ubicaciones y planes actuales están en la build de App Store.',
      },
      {
        title: 'Contacto',
        body: 'Soporte: support@follow-net.com. Privacidad y términos en este sitio. Estado en /status.',
      },
    ],
    bullets: [
      'VPN iOS de dispositivo + proxy Chrome',
      'Free límite semanal · Premium ilimitado',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Sin auditorías falsas ni cifras de cobertura infladas',
    ],
  },
  fr: {
    kicker: 'À propos',
    h1: 'À propos de FollowNet',
    lead:
      'FollowNet est un VPN centré sur iPhone et iPad, avec une extension Chrome pour le navigateur. Produit réel : Free vs Premium clairs, protocoles modernes, sans astuces marketing.',
    blocks: [
      {
        title: 'Ce que nous construisons',
        body: 'L’app iOS est un VPN système via Network Extension : Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, DNS, connexion auto, profils, Speed Test, widgets et Raccourcis. Chrome ajoute un proxy navigateur, Kill Switch et bloqueur de pubs — pas encore un VPN bureau complet.',
      },
      {
        title: 'Comment rester honnêtes',
        body: 'Free inclut un plafond hebdomadaire pour tester un vrai tunnel. Premium retire le plafond, ouvre les serveurs affichés dans l’app, jusqu’à 5 appareils, sans pubs. Pas d’audits inventés ni de « gratuit illimité pour toujours ».',
      },
      {
        title: 'Ce qui n’est pas prêt',
        body: 'Pas encore d’app macOS ou Android. La connexion auto iOS n’est pas un kill switch anti-fuite ; celui de Chrome l’est. Les emplacements et offres actuels sont dans la build App Store.',
      },
      {
        title: 'Contact',
        body: 'Support : support@follow-net.com. Confidentialité et conditions sur ce site. Statut sur /status.',
      },
    ],
    bullets: [
      'VPN iOS appareil + proxy Chrome',
      'Free quota hebdo · Premium illimité',
      'WireGuard · IKEv2 · AmneziaWG · Hysteria2 · VLESS Reality',
      'Pas de faux audits ni de couverture inventée',
    ],
  },
  pt: {
    kicker: 'Sobre',
    h1: 'Sobre o FollowNet',
    lead:
      'FollowNet é um VPN focado em iPhone e iPad, com extensão Chrome para o navegador. Produto real: Free vs Premium claros, protocolos modernos, sem truques de marketing.',
    blocks: [
      {
        title: 'O que construímos',
        body: 'O app iOS é um VPN de dispositivo via Network Extension: Smart Connect, WireGuard, IKEv2, AmneziaWG, Hysteria2, DNS, auto-conexão, perfis, Speed Test, widgets e Atalhos. O Chrome adiciona proxy do navegador, Kill Switch e bloqueio de anúncios — ainda não um VPN completo de desktop.',
      },
      {
        title: 'Como somos honestos',
        body: 'O Free tem limite semanal de tráfego para avaliar um túnel real. O Premium remove o limite, abre os servidores mostrados no app, até 5 dispositivos e sem anúncios. Sem auditorias inventadas nem “grátis ilimitado para sempre”.',
      },
      {
        title: 'O que ainda não existe',
        body: 'Ainda não há app Android. Auto-conexão no iOS não é kill switch anti-vazamento; esse Kill Switch está no Chrome. Locais e planos atuais estão na build da App Store.',
      },
      {
        title: 'Contacto',
        body: 'Suporte: support@follow-net.com. Privacidade e termos neste site. Estado em /status.',
      },
    ],
    bullets: [
      'VPN iOS de dispositivo + proxy Chrome',
      'Free limite semanal · Premium ilimitado',
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
        body: 'The trial is available only through the App Store on the annual plan for eligible first Premium subscriptions. Cancel before it ends if you do not want auto-renew.',
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
        body: 'Trial только через App Store на годовом плане при первой подходящей подписке Premium. Отмените до окончания, если не нужен автопродление.',
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
        body: 'Trial лише через App Store на річному плані для першої відповідної підписки Premium. Скасуйте до завершення, якщо автопродовження не потрібне.',
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
        body: 'Nur über den App Store im Jahresplan für berechtigte Erst-Abos. Vor Ablauf kündigen, wenn keine Verlängerung gewünscht ist.',
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
        body: 'Solo vía App Store en el plan anual para primeras suscripciones elegibles. Cancela antes si no quieres renovación.',
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
        body: 'Uniquement via l’App Store sur l’offre annuelle pour les premiers abonnements éligibles. Annulez avant la fin si vous ne voulez pas de renouvellement.',
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
        body: 'Só pela App Store no plano anual para primeiras subscrições elegíveis. Cancele antes do fim se não quiser renovação.',
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
