import { AppLang } from './i18n.service';

export type ProductBlock = {
  title: string;
  body: string;
};

export type ProductPage = {
  kicker: string;
  h1: string;
  lead: string;
  blocks: ProductBlock[];
  bullets: string[];
};

type LangPack = AppLang;

function pack(lang: AppLang): LangPack {
  return lang;
}

const DOWNLOAD: Record<LangPack, ProductPage> = {
  en: {
    kicker: 'Download',
    h1: 'Download FollowNet VPN',
    lead: 'Get FollowNet on iPhone and iPad from the App Store, or protect Chrome on desktop with the official extension. Same product honesty: Free to try, Premium when you need unlimited.',
    blocks: [
      {
        title: 'iOS first',
        body: 'The native iPhone and iPad app is the core of FollowNet — Network Extension tunnel, Smart Connect, protocol control, DNS profiles, widgets, and Auto-connect.',
      },
      {
        title: 'Chrome when you are at a desk',
        body: 'The Chrome extension covers browser sessions on desktop without waiting for a full macOS client. Sign in with the same FollowNet account flow.',
      },
      {
        title: 'What about macOS / Android?',
        body: 'macOS is on the roadmap. Android is not the focus yet. We would rather ship fewer platforms well than half-broken clients everywhere.',
      },
    ],
    bullets: [
      'iOS: App Store — Free weekly traffic cap, Premium optional',
      'Chrome: Chrome Web Store extension',
      'Protocols: WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'No credit card required to try Free',
    ],
  },
  ru: {
    kicker: 'Скачать',
    h1: 'Скачать FollowNet VPN',
    lead: 'FollowNet на iPhone и iPad — из App Store, а для Chrome на десктопе — официальное расширение. Та же честность: Free чтобы попробовать, Premium когда нужен безлимит.',
    blocks: [
      {
        title: 'Сначала iOS',
        body: 'Нативное приложение для iPhone и iPad — ядро FollowNet: туннель Network Extension, Smart Connect, протоколы, DNS, виджеты и автоподключение.',
      },
      {
        title: 'Chrome за столом',
        body: 'Расширение Chrome закрывает браузер на десктопе без ожидания полноценного macOS-клиента. Вход в том же аккаунтном потоке FollowNet.',
      },
      {
        title: 'А macOS / Android?',
        body: 'macOS в планах. Android пока не фокус. Лучше меньше платформ, но нормально, чем полусломанные клиенты везде.',
      },
    ],
    bullets: [
      'iOS: App Store — Free с недельным лимитом, Premium по желанию',
      'Chrome: расширение в Chrome Web Store',
      'Протоколы: WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Для Free карта не нужна',
    ],
  },
  uk: {
    kicker: 'Завантажити',
    h1: 'Завантажити FollowNet VPN',
    lead: 'Установіть FollowNet на iPhone та iPad з App Store або захистіть Chrome на комп’ютері офіційним розширенням. Усе прозоро: Free — щоб спробувати, Premium — коли потрібен безліміт.',
    blocks: [
      {
        title: 'Передусім iOS',
        body: 'Нативний застосунок для iPhone та iPad — основа FollowNet: тунель Network Extension, Smart Connect, вибір протоколу, DNS-профілі, віджети й автопідключення.',
      },
      {
        title: 'Chrome для роботи за комп’ютером',
        body: 'Розширення Chrome захищає сеанси браузера на комп’ютері, поки повноцінного клієнта для macOS ще немає. Для входу використовується той самий обліковий запис FollowNet.',
      },
      {
        title: 'А як щодо macOS та Android?',
        body: 'macOS є в планах. Android поки не в пріоритеті. Ми воліємо якісно підтримувати менше платформ, а не випускати недороблені клієнти для всіх.',
      },
    ],
    bullets: [
      'iOS: App Store — тижневий ліміт у Free, Premium за бажанням',
      'Chrome: розширення з Chrome Web Store',
      'Протоколи: WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Для користування Free банківська картка не потрібна',
    ],
  },
  de: {
    kicker: 'Download',
    h1: 'FollowNet VPN herunterladen',
    lead: 'Lade FollowNet für iPhone und iPad aus dem App Store oder schütze Chrome auf dem Desktop mit der offiziellen Erweiterung. Transparentes Modell: Free zum Ausprobieren, Premium für unbegrenzte Nutzung.',
    blocks: [
      {
        title: 'Zuerst für iOS',
        body: 'Die native App für iPhone und iPad ist das Herzstück von FollowNet: Network-Extension-Tunnel, Smart Connect, Protokollauswahl, DNS-Profile, Widgets und automatische Verbindung.',
      },
      {
        title: 'Chrome am Desktop',
        body: 'Die Chrome-Erweiterung schützt Browsersitzungen auf dem Desktop, solange es noch keinen vollständigen macOS-Client gibt. Die Anmeldung erfolgt mit demselben FollowNet-Konto.',
      },
      {
        title: 'Was ist mit macOS und Android?',
        body: 'macOS steht auf der Roadmap. Android hat derzeit keine Priorität. Wir unterstützen lieber weniger Plattformen zuverlässig, als überall unfertige Clients anzubieten.',
      },
    ],
    bullets: [
      'iOS: App Store — wöchentliches Datenlimit mit Free, Premium optional',
      'Chrome: Erweiterung im Chrome Web Store',
      'Protokolle: WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Zum Ausprobieren von Free ist keine Kreditkarte nötig',
    ],
  },
  es: {
    kicker: 'Descargar',
    h1: 'Descargar FollowNet VPN',
    lead: 'Descarga FollowNet para iPhone y iPad desde App Store o protege Chrome en tu ordenador con la extensión oficial. Un modelo claro: Free para probar y Premium cuando necesites uso ilimitado.',
    blocks: [
      {
        title: 'Primero en iOS',
        body: 'La app nativa para iPhone y iPad es el núcleo de FollowNet: túnel mediante Network Extension, Smart Connect, control de protocolos, perfiles DNS, widgets y conexión automática.',
      },
      {
        title: 'Chrome en el ordenador',
        body: 'La extensión de Chrome protege las sesiones del navegador en el ordenador mientras no haya un cliente completo para macOS. Inicia sesión con la misma cuenta de FollowNet.',
      },
      {
        title: '¿Y macOS y Android?',
        body: 'macOS está en nuestros planes. Android todavía no es una prioridad. Preferimos ofrecer menos plataformas bien mantenidas que clientes a medio terminar.',
      },
    ],
    bullets: [
      'iOS: App Store — límite semanal con Free, Premium opcional',
      'Chrome: extensión de Chrome Web Store',
      'Protocolos: WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'No necesitas tarjeta para probar Free',
    ],
  },
  fr: {
    kicker: 'Télécharger',
    h1: 'Télécharger FollowNet VPN',
    lead: 'Téléchargez FollowNet sur iPhone et iPad depuis l’App Store, ou protégez Chrome sur ordinateur avec l’extension officielle. Une offre claire : Free pour essayer, Premium pour un usage illimité.',
    blocks: [
      {
        title: 'D’abord sur iOS',
        body: 'L’app native pour iPhone et iPad est au cœur de FollowNet : tunnel Network Extension, Smart Connect, choix du protocole, profils DNS, widgets et connexion automatique.',
      },
      {
        title: 'Chrome sur ordinateur',
        body: 'L’extension Chrome protège les sessions du navigateur sur ordinateur en attendant un client macOS complet. Vous vous connectez avec le même compte FollowNet.',
      },
      {
        title: 'Et macOS ou Android ?',
        body: 'macOS figure sur notre feuille de route. Android n’est pas encore une priorité. Nous préférons prendre en charge moins de plateformes correctement plutôt que proposer des clients inachevés.',
      },
    ],
    bullets: [
      'iOS : App Store — limite hebdomadaire avec Free, Premium en option',
      'Chrome : extension du Chrome Web Store',
      'Protocoles : WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Aucune carte bancaire requise pour essayer Free',
    ],
  },
  pt: {
    kicker: 'Transferir',
    h1: 'Transferir o FollowNet VPN',
    lead: 'Transfira o FollowNet para iPhone e iPad na App Store ou proteja o Chrome no computador com a extensão oficial. Um modelo transparente: Free para experimentar e Premium quando precisar de utilização ilimitada.',
    blocks: [
      {
        title: 'Primeiro no iOS',
        body: 'A app nativa para iPhone e iPad é o centro do FollowNet: túnel Network Extension, Smart Connect, controlo de protocolos, perfis DNS, widgets e ligação automática.',
      },
      {
        title: 'Chrome no computador',
        body: 'A extensão do Chrome protege as sessões do navegador no computador enquanto não existe um cliente completo para macOS. Inicie sessão com a mesma conta FollowNet.',
      },
      {
        title: 'E o macOS e o Android?',
        body: 'O macOS está nos planos. O Android ainda não é uma prioridade. Preferimos oferecer menos plataformas com qualidade a lançar clientes incompletos.',
      },
    ],
    bullets: [
      'iOS: App Store — limite semanal no Free, Premium opcional',
      'Chrome: extensão da Chrome Web Store',
      'Protocolos: WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Não é necessário cartão para experimentar o Free',
    ],
  },
};

const DOWNLOAD_IOS: Record<LangPack, ProductPage> = {
  en: {
    kicker: 'iOS',
    h1: 'FollowNet for iPhone & iPad',
    lead: 'Install FollowNet from the App Store, allow the VPN configuration once, and connect in one tap. Free includes a weekly traffic cap; Premium unlocks unlimited traffic and all servers.',
    blocks: [
      {
        title: 'How to install',
        body: 'Open the App Store listing, install FollowNet, sign in with email (passwordless), approve the VPN profile when iOS asks, then tap connect. Smart Connect picks a protocol if you leave the default.',
      },
      {
        title: 'After first connect',
        body: 'Try Speed Test, set Auto-connect for Wi‑Fi or cellular, pick a DNS profile, and add a Home Screen widget if you want status at a glance. Protocol override lives in Settings.',
      },
      {
        title: 'Permissions explained',
        body: 'iOS requires a VPN configuration to create the tunnel. FollowNet runs inside Apple’s Network Extension sandbox like other App Store VPN apps. Review the Privacy Policy before you rely on it daily.',
      },
    ],
    bullets: [
      'Universal app for iPhone and iPad',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Smart Connect + manual protocol lock',
      'Widgets, DNS profiles, Auto-connect',
    ],
  },
  ru: {
    kicker: 'iOS',
    h1: 'FollowNet для iPhone и iPad',
    lead: 'Установите FollowNet из App Store, один раз разрешите VPN-конфигурацию и подключайтесь в один тап. Free — с недельным лимитом трафика; Premium — безлимит и все серверы.',
    blocks: [
      {
        title: 'Как установить',
        body: 'Откройте страницу в App Store, установите FollowNet, войдите по email (без пароля), подтвердите VPN-профиль iOS и нажмите connect. Smart Connect выберет протокол, если оставить default.',
      },
      {
        title: 'После первого подключения',
        body: 'Проверьте Speed Test, включите Auto-connect для Wi‑Fi или LTE, выберите DNS и при желании виджет. Ручной протокол — в Settings.',
      },
      {
        title: 'Про разрешения',
        body: 'iOS требует VPN-конфигурацию для туннеля. FollowNet работает в песочнице Network Extension, как другие VPN из App Store. Перед ежедневным использованием прочитайте Privacy Policy.',
      },
    ],
    bullets: [
      'Универсальное приложение для iPhone и iPad',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Smart Connect и ручной выбор протокола',
      'Виджеты, DNS, автоподключение',
    ],
  },
  uk: {
    kicker: 'iOS',
    h1: 'FollowNet для iPhone та iPad',
    lead: 'Установіть FollowNet з App Store, один раз дозвольте конфігурацію VPN і підключайтеся одним дотиком. Free має тижневий ліміт трафіку; Premium відкриває безліміт і всі сервери.',
    blocks: [
      {
        title: 'Як установити',
        body: 'Відкрийте сторінку в App Store, установіть FollowNet, увійдіть за допомогою email без пароля, підтвердьте VPN-конфігурацію на запит iOS і натисніть кнопку підключення. Якщо залишити стандартні налаштування, Smart Connect сам вибере протокол.',
      },
      {
        title: 'Після першого підключення',
        body: 'Скористайтеся Speed Test, налаштуйте автопідключення для Wi‑Fi або мобільної мережі, виберіть DNS-профіль і за бажанням додайте віджет на початковий екран. Протокол можна вибрати вручну в налаштуваннях.',
      },
      {
        title: 'Навіщо потрібен дозвіл',
        body: 'Для створення тунелю iOS потребує VPN-конфігурацію. FollowNet працює в захищеному середовищі Apple Network Extension, як і інші VPN-застосунки з App Store. Перед щоденним використанням ознайомтеся з Політикою конфіденційності.',
      },
    ],
    bullets: [
      'Універсальний застосунок для iPhone та iPad',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Smart Connect і ручний вибір протоколу',
      'Віджети, DNS-профілі та автопідключення',
    ],
  },
  de: {
    kicker: 'iOS',
    h1: 'FollowNet für iPhone und iPad',
    lead: 'Installiere FollowNet aus dem App Store, erlaube einmalig die VPN-Konfiguration und verbinde dich mit einem Fingertipp. Free hat ein wöchentliches Datenlimit; Premium bietet unbegrenzten Datenverkehr und alle Server.',
    blocks: [
      {
        title: 'Installation',
        body: 'Öffne den Eintrag im App Store, installiere FollowNet, melde dich ohne Passwort per E-Mail an, bestätige die VPN-Konfiguration auf Nachfrage von iOS und tippe auf Verbinden. Mit der Standardeinstellung wählt Smart Connect automatisch ein Protokoll.',
      },
      {
        title: 'Nach der ersten Verbindung',
        body: 'Teste die Geschwindigkeit, richte die automatische Verbindung für WLAN oder Mobilfunk ein, wähle ein DNS-Profil und füge bei Bedarf ein Home-Bildschirm-Widget hinzu. Das Protokoll lässt sich in den Einstellungen manuell festlegen.',
      },
      {
        title: 'Warum die Berechtigung nötig ist',
        body: 'iOS benötigt eine VPN-Konfiguration, um den Tunnel einzurichten. FollowNet läuft wie andere VPN-Apps aus dem App Store in Apples geschützter Network-Extension-Umgebung. Lies vor der regelmäßigen Nutzung die Datenschutzerklärung.',
      },
    ],
    bullets: [
      'Universelle App für iPhone und iPad',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Smart Connect und manuelle Protokollauswahl',
      'Widgets, DNS-Profile und automatische Verbindung',
    ],
  },
  es: {
    kicker: 'iOS',
    h1: 'FollowNet para iPhone y iPad',
    lead: 'Instala FollowNet desde App Store, permite una vez la configuración VPN y conéctate con un toque. Free incluye un límite semanal de tráfico; Premium ofrece tráfico ilimitado y todos los servidores.',
    blocks: [
      {
        title: 'Cómo instalar',
        body: 'Abre la ficha de App Store, instala FollowNet, inicia sesión por email sin contraseña, acepta la configuración VPN cuando la solicite iOS y pulsa Conectar. Si mantienes la opción predeterminada, Smart Connect elegirá un protocolo.',
      },
      {
        title: 'Después de la primera conexión',
        body: 'Prueba Speed Test, configura la conexión automática para Wi‑Fi o datos móviles, elige un perfil DNS y añade un widget a la pantalla de inicio si quieres consultar el estado rápidamente. Puedes fijar el protocolo en Ajustes.',
      },
      {
        title: 'Por qué se necesita permiso',
        body: 'iOS necesita una configuración VPN para crear el túnel. FollowNet funciona en el entorno protegido Network Extension de Apple, como otras apps VPN de App Store. Consulta la Política de privacidad antes de usarlo a diario.',
      },
    ],
    bullets: [
      'App universal para iPhone y iPad',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Smart Connect y selección manual de protocolo',
      'Widgets, perfiles DNS y conexión automática',
    ],
  },
  fr: {
    kicker: 'iOS',
    h1: 'FollowNet pour iPhone et iPad',
    lead: 'Installez FollowNet depuis l’App Store, autorisez une fois la configuration VPN et connectez-vous d’un geste. Free comprend une limite hebdomadaire de données ; Premium offre un trafic illimité et tous les serveurs.',
    blocks: [
      {
        title: 'Comment l’installer',
        body: 'Ouvrez la fiche App Store, installez FollowNet, connectez-vous par e-mail sans mot de passe, acceptez la configuration VPN demandée par iOS, puis touchez Se connecter. Avec le réglage par défaut, Smart Connect choisit automatiquement un protocole.',
      },
      {
        title: 'Après la première connexion',
        body: 'Lancez Speed Test, réglez la connexion automatique pour le Wi‑Fi ou le réseau mobile, choisissez un profil DNS et ajoutez un widget à l’écran d’accueil si vous souhaitez voir l’état rapidement. Le protocole peut être fixé dans Réglages.',
      },
      {
        title: 'Pourquoi cette autorisation est nécessaire',
        body: 'iOS exige une configuration VPN pour créer le tunnel. FollowNet fonctionne dans l’environnement protégé Network Extension d’Apple, comme les autres apps VPN de l’App Store. Consultez la Politique de confidentialité avant un usage quotidien.',
      },
    ],
    bullets: [
      'App universelle pour iPhone et iPad',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Smart Connect et choix manuel du protocole',
      'Widgets, profils DNS et connexion automatique',
    ],
  },
  pt: {
    kicker: 'iOS',
    h1: 'FollowNet para iPhone e iPad',
    lead: 'Instale o FollowNet a partir da App Store, permita a configuração VPN uma vez e ligue-se com um toque. O Free tem um limite semanal de tráfego; o Premium oferece tráfego ilimitado e todos os servidores.',
    blocks: [
      {
        title: 'Como instalar',
        body: 'Abra a página na App Store, instale o FollowNet, inicie sessão por email sem palavra-passe, aceite a configuração VPN quando o iOS pedir e toque em Ligar. Se mantiver a predefinição, o Smart Connect escolhe automaticamente um protocolo.',
      },
      {
        title: 'Após a primeira ligação',
        body: 'Experimente o Speed Test, configure a ligação automática para Wi‑Fi ou rede móvel, escolha um perfil DNS e adicione um widget ao ecrã principal se quiser ver rapidamente o estado. Pode fixar o protocolo nas Definições.',
      },
      {
        title: 'Porque é necessária esta permissão',
        body: 'O iOS exige uma configuração VPN para criar o túnel. O FollowNet funciona no ambiente protegido Network Extension da Apple, como outras apps VPN da App Store. Consulte a Política de Privacidade antes da utilização diária.',
      },
    ],
    bullets: [
      'App universal para iPhone e iPad',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2',
      'Smart Connect e seleção manual de protocolo',
      'Widgets, perfis DNS e ligação automática',
    ],
  },
};

const DOWNLOAD_CHROME: Record<LangPack, ProductPage> = {
  en: {
    kicker: 'Chrome',
    h1: 'FollowNet Chrome extension',
    lead: 'Protect Chrome browsing on desktop with the FollowNet extension: proxy connect, Kill Switch, ad blocking, servers with ping, and the same Free/Premium account story.',
    blocks: [
      {
        title: 'Install',
        body: 'Open the Chrome Web Store listing, add FollowNet VPN, pin the extension if you want, and sign in with email code, Apple, or Google. Connect from the popup when you browse.',
      },
      {
        title: 'What it includes',
        body: 'Browser proxy (SOCKS/HTTPS), server list with ping and favorites, session timer, statistics, Kill Switch if the proxy drops unexpectedly, and ad blocking (EasyList + AdGuard). Shortcut Alt+Shift+F toggles the VPN.',
      },
      {
        title: 'What it is not',
        body: 'Chrome covers browser traffic only — not a full-device VPN like the iOS app. No Smart Connect, DNS profiles, or Auto-connect in the extension; those live on iPhone/iPad.',
      },
    ],
    bullets: [
      'Chrome Web Store · proxy for browser traffic',
      'Kill Switch + EasyList/AdGuard adblock',
      'Servers, ping, favorites, Free/Premium',
      'Pairs with the iOS full-device VPN',
    ],
  },
  ru: {
    kicker: 'Chrome',
    h1: 'Расширение FollowNet для Chrome',
    lead: 'Защита браузинга в Chrome: proxy, Kill Switch, блокировка рекламы, серверы с пингом и тот же аккаунт Free/Premium.',
    blocks: [
      {
        title: 'Установка',
        body: 'Откройте Chrome Web Store, добавьте FollowNet VPN, при желании закрепите расширение и войдите по email-коду, Apple или Google. Подключайтесь из popup.',
      },
      {
        title: 'Что внутри',
        body: 'Proxy браузера (SOCKS/HTTPS), список серверов с пингом и избранным, таймер, статистика, Kill Switch при обрыве и блокировка рекламы (EasyList + AdGuard). Шорткат Alt+Shift+F переключает VPN.',
      },
      {
        title: 'Чем это не является',
        body: 'Chrome закрывает только трафик браузера — не полный VPN устройства, как на iOS. Smart Connect, DNS и автоподключение — в приложении на iPhone/iPad.',
      },
    ],
    bullets: [
      'Chrome Web Store · proxy для браузера',
      'Kill Switch + adblock EasyList/AdGuard',
      'Серверы, пинг, избранное, Free/Premium',
      'Дополняет полноценный VPN на iOS',
    ],
  },
  uk: {
    kicker: 'Chrome',
    h1: 'Розширення FollowNet для Chrome',
    lead: 'Захистіть перегляд сайтів у Chrome на комп’ютері за допомогою FollowNet: проксі-підключення, Kill Switch, блокування реклами, сервери з пінгом і той самий обліковий запис Free/Premium.',
    blocks: [
      {
        title: 'Установлення',
        body: 'Відкрийте сторінку в Chrome Web Store, додайте FollowNet VPN, за бажанням закріпіть розширення й увійдіть за кодом з email, через Apple або Google. Підключайтеся у спливному вікні розширення.',
      },
      {
        title: 'Що входить',
        body: 'Проксі для браузера (SOCKS/HTTPS), список серверів із пінгом та обраним, таймер сеансу, статистика, Kill Switch на випадок несподіваного розриву проксі та блокування реклами за фільтрами EasyList і AdGuard. Сполучення Alt+Shift+F перемикає підключення.',
      },
      {
        title: 'Чим розширення не є',
        body: 'Chrome захищає лише трафік браузера — це не VPN для всього пристрою, як застосунок для iOS. Smart Connect, DNS-профілі й автопідключення доступні на iPhone та iPad, але не в розширенні.',
      },
    ],
    bullets: [
      'Chrome Web Store · проксі для трафіку браузера',
      'Kill Switch і блокування реклами EasyList/AdGuard',
      'Сервери, пінг, обране, Free/Premium',
      'Доповнює VPN для всього пристрою на iOS',
    ],
  },
  de: {
    kicker: 'Chrome',
    h1: 'FollowNet-Erweiterung für Chrome',
    lead: 'Schütze das Surfen in Chrome auf dem Desktop mit FollowNet: Proxy-Verbindung, Kill Switch, Werbeblocker, Server mit Ping-Anzeige und dasselbe Free-/Premium-Konto.',
    blocks: [
      {
        title: 'Installation',
        body: 'Öffne den Eintrag im Chrome Web Store, füge FollowNet VPN hinzu, hefte die Erweiterung bei Bedarf an und melde dich per E-Mail-Code, Apple oder Google an. Stelle die Verbindung beim Surfen über das Pop-up her.',
      },
      {
        title: 'Enthaltene Funktionen',
        body: 'Browser-Proxy (SOCKS/HTTPS), Serverliste mit Ping und Favoriten, Sitzungstimer, Statistiken, Kill Switch bei unerwartetem Proxy-Ausfall sowie Werbeblocker mit EasyList- und AdGuard-Filtern. Alt+Umschalt+F schaltet die Verbindung um.',
      },
      {
        title: 'Was die Erweiterung nicht ist',
        body: 'Chrome schützt nur den Datenverkehr des Browsers — anders als die iOS-App ist dies kein VPN für das gesamte Gerät. Smart Connect, DNS-Profile und automatische Verbindung gibt es auf iPhone und iPad, aber nicht in der Erweiterung.',
      },
    ],
    bullets: [
      'Chrome Web Store · Proxy für Browser-Datenverkehr',
      'Kill Switch und EasyList-/AdGuard-Werbeblocker',
      'Server, Ping, Favoriten, Free/Premium',
      'Ergänzt das geräteweite VPN unter iOS',
    ],
  },
  es: {
    kicker: 'Chrome',
    h1: 'Extensión FollowNet para Chrome',
    lead: 'Protege la navegación en Chrome desde el ordenador con FollowNet: conexión proxy, Kill Switch, bloqueo de anuncios, servidores con ping y la misma cuenta Free/Premium.',
    blocks: [
      {
        title: 'Instalación',
        body: 'Abre la ficha de Chrome Web Store, añade FollowNet VPN, fija la extensión si quieres e inicia sesión con un código por email, Apple o Google. Conéctate desde la ventana emergente cuando navegues.',
      },
      {
        title: 'Qué incluye',
        body: 'Proxy para el navegador (SOCKS/HTTPS), lista de servidores con ping y favoritos, temporizador de sesión, estadísticas, Kill Switch si el proxy se interrumpe de forma inesperada y bloqueo de anuncios con EasyList y AdGuard. Alt+Mayús+F activa o desactiva la conexión.',
      },
      {
        title: 'Qué no es',
        body: 'Chrome solo protege el tráfico del navegador: no es una VPN para todo el dispositivo como la app de iOS. Smart Connect, los perfiles DNS y la conexión automática están en iPhone y iPad, no en la extensión.',
      },
    ],
    bullets: [
      'Chrome Web Store · proxy para el tráfico del navegador',
      'Kill Switch y bloqueo de anuncios EasyList/AdGuard',
      'Servidores, ping, favoritos, Free/Premium',
      'Complementa la VPN para todo el dispositivo en iOS',
    ],
  },
  fr: {
    kicker: 'Chrome',
    h1: 'Extension FollowNet pour Chrome',
    lead: 'Protégez votre navigation dans Chrome sur ordinateur avec FollowNet : connexion proxy, Kill Switch, blocage des publicités, serveurs avec mesure du ping et le même compte Free/Premium.',
    blocks: [
      {
        title: 'Installation',
        body: 'Ouvrez la fiche du Chrome Web Store, ajoutez FollowNet VPN, épinglez l’extension si vous le souhaitez, puis connectez-vous par code e-mail, avec Apple ou Google. Établissez la connexion depuis la fenêtre de l’extension lorsque vous naviguez.',
      },
      {
        title: 'Fonctions incluses',
        body: 'Proxy pour le navigateur (SOCKS/HTTPS), liste des serveurs avec ping et favoris, durée de session, statistiques, Kill Switch en cas de coupure inattendue du proxy et blocage des publicités avec EasyList et AdGuard. Alt+Maj+F active ou coupe la connexion.',
      },
      {
        title: 'Ce que l’extension n’est pas',
        body: 'Chrome protège uniquement le trafic du navigateur : contrairement à l’app iOS, ce n’est pas un VPN pour tout l’appareil. Smart Connect, les profils DNS et la connexion automatique sont disponibles sur iPhone et iPad, pas dans l’extension.',
      },
    ],
    bullets: [
      'Chrome Web Store · proxy pour le trafic du navigateur',
      'Kill Switch et blocage EasyList/AdGuard',
      'Serveurs, ping, favoris, Free/Premium',
      'Complète le VPN système disponible sur iOS',
    ],
  },
  pt: {
    kicker: 'Chrome',
    h1: 'Extensão FollowNet para Chrome',
    lead: 'Proteja a navegação no Chrome no computador com o FollowNet: ligação por proxy, Kill Switch, bloqueio de anúncios, servidores com ping e a mesma conta Free/Premium.',
    blocks: [
      {
        title: 'Instalação',
        body: 'Abra a página na Chrome Web Store, adicione o FollowNet VPN, fixe a extensão se quiser e inicie sessão com um código por email, Apple ou Google. Ligue-se a partir da janela da extensão quando navegar.',
      },
      {
        title: 'O que inclui',
        body: 'Proxy para o navegador (SOCKS/HTTPS), lista de servidores com ping e favoritos, temporizador da sessão, estatísticas, Kill Switch se o proxy falhar inesperadamente e bloqueio de anúncios com EasyList e AdGuard. Alt+Shift+F ativa ou desativa a ligação.',
      },
      {
        title: 'O que não é',
        body: 'O Chrome protege apenas o tráfego do navegador — não é uma VPN para todo o dispositivo como a app para iOS. Smart Connect, perfis DNS e ligação automática estão disponíveis no iPhone e iPad, mas não na extensão.',
      },
    ],
    bullets: [
      'Chrome Web Store · proxy para o tráfego do navegador',
      'Kill Switch e bloqueio de anúncios EasyList/AdGuard',
      'Servidores, ping, favoritos, Free/Premium',
      'Complementa a VPN para todo o dispositivo no iOS',
    ],
  },
};

const FEATURES: Record<LangPack, ProductPage> = {
  en: {
    kicker: 'Features',
    h1: 'All FollowNet features — what the app actually has',
    lead: 'A complete list of shipped features in the iOS app and Chrome extension: protocols, Smart Connect, Auto-connect, DNS, Network Profiles, Speed Test, widgets, Shortcuts, Free/Premium, and more.',
    blocks: [
      {
        title: 'One-tap VPN on iPhone & iPad',
        body: 'Full-device tunnel via Apple Network Extension. Open the app, tap connect, and traffic goes through FollowNet. Universal app for iPhone and iPad — same account and settings.',
      },
      {
        title: 'VPN Protocol: Smart, WireGuard, IKEv2, AmneziaWG, Hysteria2',
        body: 'In Settings → VPN Protocol you choose: Smart (recommended), IKEv2, WireGuard, AmneziaWG (when the server supports it), or Hysteria2 (QUIC + obfuscation when available). Lock a protocol manually anytime.',
      },
      {
        title: 'Smart Connect',
        body: 'Smart mode picks a working protocol from WireGuard, AmneziaWG, Hysteria2, and IKEv2 based on the network, with fallback if the handshake fails — so “one tap” still works on restrictive links without you becoming a protocol engineer.',
      },
      {
        title: 'Servers: Optimal location, ping, Free / Premium / Favorites',
        body: 'Server list with filters All / Free / Premium / Favorites. Optimal location picks by ping. Premium locations stay locked until you subscribe. Star favorites for quick reconnect.',
      },
      {
        title: 'Auto-connect',
        body: 'Settings → Auto-connect: Disabled, Wi‑Fi Only, LTE Only, or Always. Uses iOS on-demand rules so the VPN can come up when you join the selected network type — useful for public Wi‑Fi and travel.',
      },
      {
        title: 'DNS profiles',
        body: 'Settings → DNS: Default, Cloudflare (1.1.1.1), Google (8.8.8.8), AdGuard, AdGuard Family, or Quad9 (9.9.9.9). Pick a resolver for privacy, speed, or family filtering without a separate DNS app.',
      },
      {
        title: 'Network Profiles',
        body: 'Presets Smart, Public WiFi, and Travel — each bundles protocol + DNS + auto-connect + server mode (Fastest / Last used / Specific server). Create custom profiles (Free up to 2, Premium up to 5) for home, work, or roaming.',
      },
      {
        title: 'Speed Test',
        body: 'Dedicated Speed Test tab while VPN is connected: download, upload, latency, and jitter — measure the tunnel before you settle on a server habit.',
      },
      {
        title: 'Statistics',
        body: 'Statistics tab: today (time, sessions, traffic), weekly overview, sessions, longest day, data used, and active days — including Free weekly traffic cap visibility.',
      },
      {
        title: 'Home Screen widget',
        body: 'VPN Status widget (small and medium): connection status, country/city/flag, session timer, and ping. Deep link back into the app when you need to sign in or reconnect.',
      },
      {
        title: 'Apple Shortcuts',
        body: 'Shortcuts Automation: Connect FollowNet VPN, Disconnect FollowNet VPN, and Apply VPN Profile — wire FollowNet into your own automations (arrive home, join Wi‑Fi, etc.).',
      },
      {
        title: 'Account & devices',
        body: 'Start Free (guest), email + one-time code, Sign in with Apple, or Google. Account shows plan, devices, and traffic. Free up to 2 devices; Premium/trial up to 5. Logout and Delete Account in App Settings.',
      },
      {
        title: 'Free vs Premium',
        body: 'Free: weekly traffic quota and core servers so you can try a real tunnel. Premium: unlimited traffic, all servers, up to 5 devices, ad-free. Subscribe or restore via the App Store; manage the subscription in Apple’s subscription settings.',
      },
      {
        title: 'Help, languages, legal',
        body: 'In-app Help & Support (connection, payments, auto-connect, DNS, account). Languages follow iOS (en, ru, uk, es, de, fr, pt). Info screen: version, website, Privacy Policy, Terms.',
      },
      {
        title: 'Chrome extension',
        body: 'Browser proxy for Chrome (SOCKS/HTTPS): connect/disconnect, server list with ping and favorites, session timer, statistics, Free/Premium. Kill Switch blocks Chrome internet if the proxy drops. Ad blocking via EasyList + AdGuard filters. Shortcut Alt+Shift+F. Not a full-device VPN — desktop browser only.',
      },
      {
        title: 'What is not in the product (yet)',
        body: 'No macOS or Android app yet. No per-app split tunneling on iOS (platform limits). Auto-connect is not the same as a leak-blocking kill switch on iPhone — that Kill Switch exists in the Chrome extension.',
      },
    ],
    bullets: [
      'Smart Connect + WireGuard · IKEv2 · AmneziaWG · Hysteria2',
      'Auto-connect · DNS · Network Profiles',
      'Speed Test · Statistics · Widgets · Shortcuts',
      'iOS full-device VPN + Chrome proxy (Kill Switch & adblock)',
    ],
  },
  ru: {
    kicker: 'Возможности',
    h1: 'Все возможности FollowNet — что реально есть в приложении',
    lead: 'Полный список того, что уже в iOS-приложении и Chrome: протоколы, Smart Connect, автоподключение, DNS, профили сети, Speed Test, виджеты, Команды, Free/Premium и остальное.',
    blocks: [
      {
        title: 'VPN в один тап на iPhone и iPad',
        body: 'Полноценный туннель через Apple Network Extension. Открыли приложение, нажали connect — трафик идёт через FollowNet. Универсальное приложение для iPhone и iPad — один аккаунт и настройки.',
      },
      {
        title: 'Протокол VPN: Smart, WireGuard, IKEv2, AmneziaWG, Hysteria2',
        body: 'Настройки → Протокол VPN: Smart (рекомендуется), IKEv2, WireGuard, AmneziaWG (если сервер поддерживает) или Hysteria2 (QUIC + обфускация, когда доступен). В любой момент можно зафиксировать протокол вручную.',
      },
      {
        title: 'Smart Connect',
        body: 'Режим Smart выбирает рабочий протокол из WireGuard, AmneziaWG, Hysteria2 и IKEv2 под сеть, с fallback если handshake не прошёл — чтобы «один тап» работал и в жёстких сетях без ручной возни.',
      },
      {
        title: 'Серверы: Optimal location, пинг, Free / Premium / Избранное',
        body: 'Список серверов с фильтрами Все / Free / Premium / Избранное. Optimal location выбирает по пингу. Premium-локации закрыты без подписки. Звёздочка — быстрый reconnect к любимым.',
      },
      {
        title: 'Автоподключение',
        body: 'Настройки → Автоподключение: Выкл, только Wi‑Fi, только LTE или Всегда. Через on-demand правила iOS VPN поднимается при входе в выбранный тип сети — удобно для публичного Wi‑Fi и поездок.',
      },
      {
        title: 'DNS-профили',
        body: 'Настройки → DNS: Default, Cloudflare (1.1.1.1), Google (8.8.8.8), AdGuard, AdGuard Family или Quad9 (9.9.9.9). Резолвер под приватность, скорость или семейный фильтр — без отдельного DNS-приложения.',
      },
      {
        title: 'Профили сети',
        body: 'Пресеты Smart, Public WiFi и Travel — каждый собирает протокол + DNS + автоподключение + режим сервера (Самый быстрый / Последний / Конкретный). Свои профили: Free до 2, Premium до 5 — для дома, работы или роуминга.',
      },
      {
        title: 'Speed Test',
        body: 'Отдельная вкладка Speed Test при активном VPN: download, upload, latency и jitter — измерьте туннель, прежде чем привыкать к серверу.',
      },
      {
        title: 'Статистика',
        body: 'Вкладка статистики: сегодня (время, сессии, трафик), обзор за неделю, сессии, самый длинный день, объём данных и активные дни — включая видимость недельного лимита Free.',
      },
      {
        title: 'Виджет на Home Screen',
        body: 'Виджет VPN Status (маленький и средний): статус, страна/город/флаг, таймер сессии и пинг. Deep link обратно в приложение для входа или reconnect.',
      },
      {
        title: 'Apple Команды',
        body: 'Автоматизация: Подключить FollowNet VPN, Отключить FollowNet VPN и Применить профиль VPN — встройте FollowNet в свои сценарии (пришёл домой, подключился к Wi‑Fi и т.д.).',
      },
      {
        title: 'Аккаунт и устройства',
        body: 'Start Free (гость), email + код, Sign in with Apple или Google. В аккаунте: план, устройства, трафик. Free до 2 устройств; Premium/trial до 5. Выход и удаление аккаунта — в настройках приложения.',
      },
      {
        title: 'Free vs Premium',
        body: 'Free: недельный лимит трафика и базовые серверы — чтобы попробовать реальный туннель. Premium: безлимит, все серверы, до 5 устройств, без рекламы. Подписка и Restore через App Store; управление — в подписках Apple.',
      },
      {
        title: 'Помощь, языки, документы',
        body: 'Помощь и поддержка в приложении (связь, оплаты, автоподключение, DNS, аккаунт). Языки как в iOS (en, ru, uk, es, de, fr, pt). Информация: версия, сайт, Privacy Policy, Terms.',
      },
      {
        title: 'Расширение Chrome',
        body: 'Proxy для Chrome (SOCKS/HTTPS): connect/disconnect, серверы с пингом и избранным, таймер, статистика, Free/Premium. Kill Switch режет интернет Chrome при обрыве proxy. Блокировка рекламы EasyList + AdGuard. Шорткат Alt+Shift+F. Это не полный VPN устройства — только браузер.',
      },
      {
        title: 'Чего пока нет',
        body: 'Пока нет приложений для macOS и Android. Нет per-app split tunneling на iOS (ограничения платформы). Автоподключение на iPhone — не то же самое, что Kill Switch с блокировкой утечек; такой Kill Switch есть в расширении Chrome.',
      },
    ],
    bullets: [
      'Smart Connect + WireGuard · IKEv2 · AmneziaWG · Hysteria2',
      'Автоподключение · DNS · профили сети',
      'Speed Test · статистика · виджеты · Команды',
      'iOS VPN на всё устройство + Chrome proxy (Kill Switch и adblock)',
    ],
  },
  uk: {
    kicker: 'Можливості',
    h1: 'Усі можливості FollowNet — що насправді є в продукті',
    lead: 'Повний перелік доступних функцій застосунку для iOS і розширення Chrome: протоколи, Smart Connect, автопідключення, DNS, мережеві профілі, Speed Test, віджети, Швидкі команди, Free/Premium тощо.',
    blocks: [
      {
        title: 'VPN одним дотиком на iPhone та iPad',
        body: 'Повноцінний тунель для всього пристрою через Apple Network Extension. Відкрийте застосунок, натисніть «Підключити» — і трафік піде через FollowNet. Один застосунок для iPhone та iPad зі спільним обліковим записом і налаштуваннями.',
      },
      {
        title: 'Протоколи VPN: Smart, WireGuard, IKEv2, AmneziaWG, Hysteria2',
        body: 'У розділі Налаштування → Протокол VPN можна вибрати Smart (рекомендовано), IKEv2, WireGuard, AmneziaWG, якщо його підтримує сервер, або Hysteria2 із QUIC та обфускацією, коли він доступний. Протокол можна будь-коли зафіксувати вручну.',
      },
      {
        title: 'Smart Connect',
        body: 'Режим Smart підбирає для поточної мережі робочий протокол із WireGuard, AmneziaWG, Hysteria2 та IKEv2 і пробує інший, якщо рукостискання не вдалося. Завдяки цьому підключення одним дотиком працює й у мережах з обмеженнями.',
      },
      {
        title: 'Сервери: оптимальне розташування, пінг, Free, Premium та Обране',
        body: 'Список серверів має фільтри Усі, Free, Premium та Обране. Оптимальне розташування визначається за пінгом. Premium-локації доступні після передплати, а обрані сервери можна позначити зірочкою для швидкого повторного підключення.',
      },
      {
        title: 'Автопідключення',
        body: 'Налаштування → Автопідключення: Вимкнено, Лише Wi‑Fi, Лише LTE або Завжди. Правила iOS on-demand можуть запускати VPN під час підключення до вибраного типу мережі — зручно в публічному Wi‑Fi та подорожах.',
      },
      {
        title: 'DNS-профілі',
        body: 'Налаштування → DNS: За замовчуванням, Cloudflare (1.1.1.1), Google (8.8.8.8), AdGuard, AdGuard Family або Quad9 (9.9.9.9). Виберіть резолвер для приватності, швидкості чи сімейної фільтрації без окремого DNS-застосунку.',
      },
      {
        title: 'Мережеві профілі',
        body: 'Готові профілі Smart, Public WiFi та Travel поєднують протокол, DNS, автопідключення й режим сервера: найшвидший, останній використаний або конкретний. Можна створити власні профілі для дому, роботи чи роумінгу: до 2 у Free і до 5 у Premium.',
      },
      {
        title: 'Speed Test',
        body: 'Окрема вкладка Speed Test під час активного VPN показує швидкість завантаження й відвантаження, затримку та джиттер. Перевірте якість тунелю, перш ніж обрати сервер для постійного використання.',
      },
      {
        title: 'Статистика',
        body: 'На вкладці статистики є дані за сьогодні — час, сеанси й трафік, а також тижневий огляд, найдовший день, використані дані та активні дні. Тут також видно тижневий ліміт трафіку Free.',
      },
      {
        title: 'Віджет початкового екрана',
        body: 'Віджет стану VPN у малому та середньому розмірах показує стан підключення, країну, місто, прапор, тривалість сеансу й пінг. За посиланням із віджета можна повернутися в застосунок для входу чи повторного підключення.',
      },
      {
        title: 'Швидкі команди Apple',
        body: 'Дії для автоматизації: підключити FollowNet VPN, відключити FollowNet VPN і застосувати VPN-профіль. Додавайте FollowNet до власних сценаріїв, наприклад після повернення додому чи підключення до Wi‑Fi.',
      },
      {
        title: 'Обліковий запис і пристрої',
        body: 'Почніть із Free як гість або увійдіть за email з одноразовим кодом, через Apple чи Google. В обліковому записі видно тариф, пристрої та трафік. Free підтримує до 2 пристроїв, Premium і пробний період — до 5. Вихід і видалення облікового запису доступні в налаштуваннях.',
      },
      {
        title: 'Free і Premium',
        body: 'Free: тижневий ліміт трафіку й базові сервери для перевірки справжнього VPN-тунелю. Premium: необмежений трафік, усі сервери, до 5 пристроїв і жодної реклами. Передплату можна оформити або відновити через App Store, а керувати нею — у налаштуваннях передплат Apple.',
      },
      {
        title: 'Допомога, мови та документи',
        body: 'У застосунку є довідка щодо підключення, оплати, автопідключення, DNS та облікового запису. Підтримуються мови iOS: en, ru, uk, es, de, fr і pt. На інформаційному екрані є версія, сайт, Політика конфіденційності й Умови використання.',
      },
      {
        title: 'Розширення Chrome',
        body: 'Проксі для браузера Chrome (SOCKS/HTTPS): підключення, сервери з пінгом та обраним, таймер сеансу, статистика й тарифи Free/Premium. Kill Switch блокує доступ Chrome до інтернету в разі розриву проксі, а EasyList і AdGuard блокують рекламу. Сполучення Alt+Shift+F перемикає підключення. Це проксі лише для браузера, а не VPN для всього пристрою.',
      },
      {
        title: 'Чого в продукті поки немає',
        body: 'Застосунків для macOS та Android поки немає. На iOS немає роздільного тунелювання для окремих застосунків через обмеження платформи. Автопідключення на iPhone не є Kill Switch із блокуванням витоків — такий Kill Switch є в розширенні Chrome.',
      },
    ],
    bullets: [
      'Smart Connect + WireGuard · IKEv2 · AmneziaWG · Hysteria2',
      'Автопідключення · DNS · мережеві профілі',
      'Speed Test · статистика · віджети · Швидкі команди',
      'VPN для всього пристрою на iOS + проксі Chrome з Kill Switch і блокуванням реклами',
    ],
  },
  de: {
    kicker: 'Funktionen',
    h1: 'Alle FollowNet-Funktionen — was das Produkt wirklich bietet',
    lead: 'Die vollständige Liste der verfügbaren Funktionen in der iOS-App und der Chrome-Erweiterung: Protokolle, Smart Connect, automatische Verbindung, DNS, Netzwerkprofile, Speed Test, Widgets, Kurzbefehle, Free/Premium und mehr.',
    blocks: [
      {
        title: 'VPN mit einem Fingertipp auf iPhone und iPad',
        body: 'Ein vollständiger Tunnel für das gesamte Gerät über Apple Network Extension. App öffnen, auf Verbinden tippen und der Datenverkehr läuft über FollowNet. Eine universelle App für iPhone und iPad mit gemeinsamem Konto und gemeinsamen Einstellungen.',
      },
      {
        title: 'VPN-Protokolle: Smart, WireGuard, IKEv2, AmneziaWG, Hysteria2',
        body: 'Unter Einstellungen → VPN-Protokoll stehen Smart (empfohlen), IKEv2, WireGuard, AmneziaWG bei unterstützten Servern und Hysteria2 mit QUIC und Verschleierung zur Wahl, sofern verfügbar. Ein Protokoll kann jederzeit manuell festgelegt werden.',
      },
      {
        title: 'Smart Connect',
        body: 'Der Smart-Modus wählt passend zum Netzwerk ein funktionierendes Protokoll aus WireGuard, AmneziaWG, Hysteria2 und IKEv2 und weicht bei fehlgeschlagenem Handshake auf ein anderes aus. So funktioniert die Verbindung mit einem Fingertipp auch in eingeschränkten Netzen.',
      },
      {
        title: 'Server: optimaler Standort, Ping, Free, Premium und Favoriten',
        body: 'Die Serverliste lässt sich nach Alle, Free, Premium und Favoriten filtern. Der optimale Standort wird anhand des Pings gewählt. Premium-Standorte werden mit einem Abonnement freigeschaltet; Favoriten lassen sich für eine schnelle erneute Verbindung markieren.',
      },
      {
        title: 'Automatische Verbindung',
        body: 'Einstellungen → Automatische Verbindung: Aus, nur WLAN, nur LTE oder Immer. Mit den On-Demand-Regeln von iOS kann sich das VPN beim Beitritt zum gewählten Netzwerktyp verbinden — praktisch in öffentlichem WLAN und auf Reisen.',
      },
      {
        title: 'DNS-Profile',
        body: 'Einstellungen → DNS: Standard, Cloudflare (1.1.1.1), Google (8.8.8.8), AdGuard, AdGuard Family oder Quad9 (9.9.9.9). Wähle ohne zusätzliche DNS-App einen Resolver für Datenschutz, Geschwindigkeit oder Familienfilter.',
      },
      {
        title: 'Netzwerkprofile',
        body: 'Die Vorlagen Smart, Public WiFi und Travel bündeln Protokoll, DNS, automatische Verbindung und den Servermodus: Schnellster, zuletzt verwendet oder bestimmter Server. Eigene Profile für Zuhause, Arbeit oder Roaming sind ebenfalls möglich — bis zu 2 mit Free und bis zu 5 mit Premium.',
      },
      {
        title: 'Speed Test',
        body: 'Ein eigener Speed-Test-Tab zeigt bei aktiver VPN-Verbindung Download, Upload, Latenz und Jitter. Damit lässt sich die Tunnelqualität prüfen, bevor du dich dauerhaft für einen Server entscheidest.',
      },
      {
        title: 'Statistiken',
        body: 'Der Statistik-Tab zeigt für heute Zeit, Sitzungen und Datenverkehr sowie Wochenübersicht, längsten Tag, verbrauchte Daten und aktive Tage. Auch das wöchentliche Datenlimit von Free ist dort sichtbar.',
      },
      {
        title: 'Home-Bildschirm-Widget',
        body: 'Das VPN-Status-Widget in klein und mittel zeigt Verbindungsstatus, Land, Stadt, Flagge, Sitzungsdauer und Ping. Ein Link führt zurück zur App, wenn eine Anmeldung oder erneute Verbindung nötig ist.',
      },
      {
        title: 'Apple-Kurzbefehle',
        body: 'Für Automationen stehen FollowNet VPN verbinden, FollowNet VPN trennen und VPN-Profil anwenden bereit. Damit lässt sich FollowNet in eigene Abläufe einbinden, etwa beim Heimkommen oder beim Beitritt zu einem WLAN.',
      },
      {
        title: 'Konto und Geräte',
        body: 'Starte Free als Gast oder melde dich per E-Mail und Einmalcode, Apple oder Google an. Im Konto siehst du Tarif, Geräte und Datenverkehr. Free unterstützt bis zu 2 Geräte, Premium und Testphase bis zu 5. Abmeldung und Kontolöschung findest du in den App-Einstellungen.',
      },
      {
        title: 'Free und Premium',
        body: 'Free: wöchentliches Datenlimit und Basisserver, um einen echten VPN-Tunnel zu testen. Premium: unbegrenzter Datenverkehr, alle Server, bis zu 5 Geräte und keine Werbung. Abonnements lassen sich über den App Store abschließen oder wiederherstellen und in Apples Abonnement-Einstellungen verwalten.',
      },
      {
        title: 'Hilfe, Sprachen und Rechtliches',
        body: 'Die App enthält Hilfe zu Verbindung, Zahlungen, automatischer Verbindung, DNS und Konto. Unterstützt werden die iOS-Sprachen en, ru, uk, es, de, fr und pt. Der Infobereich enthält Version, Website, Datenschutzerklärung und Nutzungsbedingungen.',
      },
      {
        title: 'Chrome-Erweiterung',
        body: 'Browser-Proxy für Chrome (SOCKS/HTTPS) mit Verbindung, Servern samt Ping und Favoriten, Sitzungstimer, Statistiken und Free/Premium. Der Kill Switch blockiert den Internetzugriff von Chrome bei einem Proxy-Ausfall; EasyList und AdGuard filtern Werbung. Alt+Umschalt+F schaltet die Verbindung um. Dies ist nur ein Browser-Proxy, kein VPN für das gesamte Gerät.',
      },
      {
        title: 'Was das Produkt noch nicht bietet',
        body: 'Apps für macOS und Android gibt es noch nicht. Per-App-Split-Tunneling ist unter iOS aufgrund von Plattformbeschränkungen nicht verfügbar. Die automatische Verbindung auf dem iPhone ist kein Kill Switch gegen Datenlecks — einen solchen Kill Switch gibt es in der Chrome-Erweiterung.',
      },
    ],
    bullets: [
      'Smart Connect + WireGuard · IKEv2 · AmneziaWG · Hysteria2',
      'Automatische Verbindung · DNS · Netzwerkprofile',
      'Speed Test · Statistiken · Widgets · Kurzbefehle',
      'Geräteweites VPN unter iOS + Chrome-Proxy mit Kill Switch und Werbeblocker',
    ],
  },
  es: {
    kicker: 'Funciones',
    h1: 'Todas las funciones de FollowNet: lo que realmente ofrece',
    lead: 'Lista completa de funciones disponibles en la app de iOS y la extensión de Chrome: protocolos, Smart Connect, conexión automática, DNS, perfiles de red, Speed Test, widgets, Atajos, Free/Premium y más.',
    blocks: [
      {
        title: 'VPN con un toque en iPhone y iPad',
        body: 'Un túnel completo para todo el dispositivo mediante Apple Network Extension. Abre la app, pulsa Conectar y el tráfico pasará por FollowNet. Una app universal para iPhone y iPad con la misma cuenta y configuración.',
      },
      {
        title: 'Protocolos VPN: Smart, WireGuard, IKEv2, AmneziaWG, Hysteria2',
        body: 'En Ajustes → Protocolo VPN puedes elegir Smart (recomendado), IKEv2, WireGuard, AmneziaWG cuando el servidor sea compatible o Hysteria2 con QUIC y ofuscación cuando esté disponible. Puedes fijar un protocolo manualmente en cualquier momento.',
      },
      {
        title: 'Smart Connect',
        body: 'El modo Smart elige para cada red un protocolo operativo entre WireGuard, AmneziaWG, Hysteria2 e IKEv2 y prueba otro si falla la negociación. Así, la conexión con un toque también funciona en redes restrictivas.',
      },
      {
        title: 'Servidores: ubicación óptima, ping, Free, Premium y Favoritos',
        body: 'La lista incluye filtros para Todos, Free, Premium y Favoritos. La ubicación óptima se elige según el ping. Las ubicaciones Premium se desbloquean con la suscripción y puedes marcar servidores favoritos para volver a conectarte rápidamente.',
      },
      {
        title: 'Conexión automática',
        body: 'Ajustes → Conexión automática: Desactivada, solo Wi‑Fi, solo LTE o Siempre. Las reglas bajo demanda de iOS permiten iniciar la VPN al entrar en el tipo de red elegido, algo útil en redes Wi‑Fi públicas y al viajar.',
      },
      {
        title: 'Perfiles DNS',
        body: 'Ajustes → DNS: Predeterminado, Cloudflare (1.1.1.1), Google (8.8.8.8), AdGuard, AdGuard Family o Quad9 (9.9.9.9). Elige un resolvedor para privacidad, velocidad o filtrado familiar sin instalar otra app DNS.',
      },
      {
        title: 'Perfiles de red',
        body: 'Los perfiles Smart, Public WiFi y Travel combinan protocolo, DNS, conexión automática y modo de servidor: más rápido, último usado o uno concreto. También puedes crear perfiles para casa, trabajo o viajes: hasta 2 con Free y hasta 5 con Premium.',
      },
      {
        title: 'Speed Test',
        body: 'Una pestaña específica muestra descarga, subida, latencia y fluctuación mientras la VPN está conectada. Comprueba el rendimiento del túnel antes de elegir un servidor para el uso habitual.',
      },
      {
        title: 'Estadísticas',
        body: 'La pestaña de estadísticas muestra el tiempo, las sesiones y el tráfico de hoy, además del resumen semanal, el día más largo, los datos usados y los días activos. También permite consultar el límite semanal de tráfico de Free.',
      },
      {
        title: 'Widget de la pantalla de inicio',
        body: 'El widget de estado VPN, disponible en tamaño pequeño y mediano, muestra conexión, país, ciudad, bandera, duración de la sesión y ping. Su enlace abre la app para iniciar sesión o volver a conectarse.',
      },
      {
        title: 'Atajos de Apple',
        body: 'Acciones para automatizar: Conectar FollowNet VPN, Desconectar FollowNet VPN y Aplicar perfil VPN. Integra FollowNet en tus automatizaciones, por ejemplo al llegar a casa o conectarte a una red Wi‑Fi.',
      },
      {
        title: 'Cuenta y dispositivos',
        body: 'Empieza con Free como invitado o inicia sesión por email y código de un solo uso, Apple o Google. La cuenta muestra el plan, los dispositivos y el tráfico. Free admite hasta 2 dispositivos; Premium y la prueba, hasta 5. Puedes cerrar sesión o eliminar la cuenta desde los ajustes.',
      },
      {
        title: 'Free y Premium',
        body: 'Free: límite semanal de tráfico y servidores básicos para probar un túnel VPN real. Premium: tráfico ilimitado, todos los servidores, hasta 5 dispositivos y sin anuncios. Suscríbete o restaura la compra desde App Store y administra la suscripción en los ajustes de Apple.',
      },
      {
        title: 'Ayuda, idiomas y documentos legales',
        body: 'La app incluye ayuda sobre conexión, pagos, conexión automática, DNS y cuenta. Admite los idiomas de iOS en, ru, uk, es, de, fr y pt. La pantalla de información contiene versión, web, Política de privacidad y Condiciones.',
      },
      {
        title: 'Extensión de Chrome',
        body: 'Proxy para Chrome (SOCKS/HTTPS) con conexión, servidores con ping y favoritos, temporizador, estadísticas y Free/Premium. Kill Switch bloquea el acceso a internet de Chrome si falla el proxy; EasyList y AdGuard bloquean anuncios. Alt+Mayús+F activa o desactiva la conexión. Es un proxy solo para el navegador, no una VPN para todo el dispositivo.',
      },
      {
        title: 'Lo que todavía no incluye el producto',
        body: 'Todavía no hay apps para macOS ni Android. iOS no dispone de túnel dividido por app debido a las limitaciones de la plataforma. La conexión automática en iPhone no equivale a un Kill Switch que impida fugas; ese Kill Switch está en la extensión de Chrome.',
      },
    ],
    bullets: [
      'Smart Connect + WireGuard · IKEv2 · AmneziaWG · Hysteria2',
      'Conexión automática · DNS · perfiles de red',
      'Speed Test · estadísticas · widgets · Atajos',
      'VPN para todo el dispositivo en iOS + proxy de Chrome con Kill Switch y bloqueo de anuncios',
    ],
  },
  fr: {
    kicker: 'Fonctionnalités',
    h1: 'Toutes les fonctionnalités de FollowNet — ce que le produit propose vraiment',
    lead: 'La liste complète des fonctions disponibles dans l’app iOS et l’extension Chrome : protocoles, Smart Connect, connexion automatique, DNS, profils réseau, Speed Test, widgets, Raccourcis, Free/Premium et plus encore.',
    blocks: [
      {
        title: 'VPN d’un geste sur iPhone et iPad',
        body: 'Un tunnel complet pour tout l’appareil via Apple Network Extension. Ouvrez l’app, touchez Se connecter et le trafic passe par FollowNet. Une app universelle pour iPhone et iPad avec le même compte et les mêmes réglages.',
      },
      {
        title: 'Protocoles VPN : Smart, WireGuard, IKEv2, AmneziaWG, Hysteria2',
        body: 'Dans Réglages → Protocole VPN, choisissez Smart (recommandé), IKEv2, WireGuard, AmneziaWG si le serveur le prend en charge ou Hysteria2 avec QUIC et obfuscation lorsqu’il est disponible. Vous pouvez fixer manuellement un protocole à tout moment.',
      },
      {
        title: 'Smart Connect',
        body: 'Le mode Smart choisit selon le réseau un protocole opérationnel parmi WireGuard, AmneziaWG, Hysteria2 et IKEv2, puis en essaie un autre si la négociation échoue. La connexion d’un geste reste ainsi utilisable sur les réseaux restrictifs.',
      },
      {
        title: 'Serveurs : emplacement optimal, ping, Free, Premium et Favoris',
        body: 'La liste propose les filtres Tous, Free, Premium et Favoris. L’emplacement optimal est choisi selon le ping. Les emplacements Premium sont débloqués avec l’abonnement et vous pouvez marquer vos serveurs favoris pour vous reconnecter rapidement.',
      },
      {
        title: 'Connexion automatique',
        body: 'Réglages → Connexion automatique : Désactivée, Wi‑Fi uniquement, LTE uniquement ou Toujours. Les règles à la demande d’iOS peuvent lancer le VPN lorsque vous rejoignez le type de réseau choisi — pratique sur un Wi‑Fi public ou en voyage.',
      },
      {
        title: 'Profils DNS',
        body: 'Réglages → DNS : Par défaut, Cloudflare (1.1.1.1), Google (8.8.8.8), AdGuard, AdGuard Family ou Quad9 (9.9.9.9). Choisissez un résolveur pour la confidentialité, la vitesse ou le filtrage familial sans app DNS séparée.',
      },
      {
        title: 'Profils réseau',
        body: 'Les profils Smart, Public WiFi et Travel regroupent protocole, DNS, connexion automatique et mode de serveur : le plus rapide, le dernier utilisé ou un serveur précis. Créez aussi vos profils pour la maison, le travail ou les déplacements : jusqu’à 2 avec Free et 5 avec Premium.',
      },
      {
        title: 'Speed Test',
        body: 'Un onglet dédié affiche le débit descendant, le débit montant, la latence et la gigue lorsque le VPN est connecté. Mesurez le tunnel avant de choisir votre serveur habituel.',
      },
      {
        title: 'Statistiques',
        body: 'L’onglet présente pour aujourd’hui la durée, les sessions et le trafic, ainsi qu’un aperçu hebdomadaire, la plus longue journée, les données utilisées et les jours actifs. La limite hebdomadaire de données de Free y est également visible.',
      },
      {
        title: 'Widget d’écran d’accueil',
        body: 'Le widget d’état VPN, en petit ou moyen format, affiche la connexion, le pays, la ville, le drapeau, la durée de session et le ping. Son lien ouvre l’app pour vous connecter à votre compte ou rétablir la connexion.',
      },
      {
        title: 'Raccourcis Apple',
        body: 'Trois actions d’automatisation sont disponibles : Connecter FollowNet VPN, Déconnecter FollowNet VPN et Appliquer un profil VPN. Intégrez FollowNet à vos scénarios, par exemple en arrivant chez vous ou en rejoignant un réseau Wi‑Fi.',
      },
      {
        title: 'Compte et appareils',
        body: 'Commencez avec Free en tant qu’invité ou connectez-vous par e-mail et code à usage unique, avec Apple ou Google. Le compte affiche l’offre, les appareils et le trafic. Free accepte jusqu’à 2 appareils ; Premium et l’essai, jusqu’à 5. Déconnexion et suppression du compte sont disponibles dans les réglages.',
      },
      {
        title: 'Free et Premium',
        body: 'Free : limite hebdomadaire de données et serveurs essentiels pour essayer un véritable tunnel VPN. Premium : trafic illimité, tous les serveurs, jusqu’à 5 appareils et aucune publicité. Abonnez-vous ou restaurez l’achat via l’App Store, puis gérez l’abonnement dans les réglages Apple.',
      },
      {
        title: 'Aide, langues et mentions légales',
        body: 'L’app contient une aide sur la connexion, les paiements, la connexion automatique, le DNS et le compte. Elle prend en charge les langues iOS en, ru, uk, es, de, fr et pt. L’écran d’information contient la version, le site, la Politique de confidentialité et les Conditions.',
      },
      {
        title: 'Extension Chrome',
        body: 'Proxy pour Chrome (SOCKS/HTTPS) avec connexion, serveurs et leur ping, favoris, durée de session, statistiques et Free/Premium. Le Kill Switch bloque l’accès Internet de Chrome si le proxy tombe ; EasyList et AdGuard filtrent les publicités. Alt+Maj+F active ou coupe la connexion. Il s’agit d’un proxy pour le navigateur, pas d’un VPN pour tout l’appareil.',
      },
      {
        title: 'Ce que le produit ne propose pas encore',
        body: 'Il n’existe pas encore d’app pour macOS ou Android. Le split tunneling par app n’est pas disponible sur iOS en raison des limites de la plateforme. La connexion automatique sur iPhone n’est pas un Kill Switch contre les fuites ; ce Kill Switch existe dans l’extension Chrome.',
      },
    ],
    bullets: [
      'Smart Connect + WireGuard · IKEv2 · AmneziaWG · Hysteria2',
      'Connexion automatique · DNS · profils réseau',
      'Speed Test · statistiques · widgets · Raccourcis',
      'VPN pour tout l’appareil sur iOS + proxy Chrome avec Kill Switch et blocage des publicités',
    ],
  },
  pt: {
    kicker: 'Funcionalidades',
    h1: 'Todas as funcionalidades do FollowNet — o que o produto realmente oferece',
    lead: 'A lista completa das funcionalidades disponíveis na app para iOS e na extensão do Chrome: protocolos, Smart Connect, ligação automática, DNS, perfis de rede, Speed Test, widgets, Atalhos, Free/Premium e muito mais.',
    blocks: [
      {
        title: 'VPN com um toque no iPhone e iPad',
        body: 'Um túnel completo para todo o dispositivo através do Apple Network Extension. Abra a app, toque em Ligar e o tráfego passa pelo FollowNet. Uma app universal para iPhone e iPad com a mesma conta e definições.',
      },
      {
        title: 'Protocolos VPN: Smart, WireGuard, IKEv2, AmneziaWG, Hysteria2',
        body: 'Em Definições → Protocolo VPN, escolha Smart (recomendado), IKEv2, WireGuard, AmneziaWG se o servidor for compatível ou Hysteria2 com QUIC e ofuscação quando estiver disponível. Pode fixar manualmente um protocolo a qualquer momento.',
      },
      {
        title: 'Smart Connect',
        body: 'O modo Smart escolhe para cada rede um protocolo funcional entre WireGuard, AmneziaWG, Hysteria2 e IKEv2 e tenta outro se a negociação falhar. Assim, a ligação com um toque também funciona em redes restritivas.',
      },
      {
        title: 'Servidores: localização ideal, ping, Free, Premium e Favoritos',
        body: 'A lista tem filtros para Todos, Free, Premium e Favoritos. A localização ideal é escolhida pelo ping. As localizações Premium são desbloqueadas com a subscrição e pode marcar favoritos para voltar a ligar-se rapidamente.',
      },
      {
        title: 'Ligação automática',
        body: 'Definições → Ligação automática: Desativada, apenas Wi‑Fi, apenas LTE ou Sempre. As regras on-demand do iOS podem iniciar a VPN quando entra no tipo de rede selecionado — útil em Wi‑Fi público e durante viagens.',
      },
      {
        title: 'Perfis DNS',
        body: 'Definições → DNS: Predefinido, Cloudflare (1.1.1.1), Google (8.8.8.8), AdGuard, AdGuard Family ou Quad9 (9.9.9.9). Escolha um resolvedor para privacidade, velocidade ou filtragem familiar sem instalar outra app DNS.',
      },
      {
        title: 'Perfis de rede',
        body: 'Os perfis Smart, Public WiFi e Travel combinam protocolo, DNS, ligação automática e modo de servidor: mais rápido, último utilizado ou um servidor específico. Também pode criar perfis para casa, trabalho ou viagens: até 2 no Free e até 5 no Premium.',
      },
      {
        title: 'Speed Test',
        body: 'Um separador dedicado mostra download, upload, latência e jitter enquanto a VPN está ligada. Meça o desempenho do túnel antes de escolher o servidor que vai utilizar habitualmente.',
      },
      {
        title: 'Estatísticas',
        body: 'O separador apresenta o tempo, as sessões e o tráfego de hoje, além da visão semanal, do dia mais longo, dos dados utilizados e dos dias ativos. O limite semanal de tráfego do Free também está visível.',
      },
      {
        title: 'Widget do ecrã principal',
        body: 'O widget de estado da VPN, em tamanho pequeno ou médio, mostra a ligação, o país, a cidade, a bandeira, a duração da sessão e o ping. A ligação do widget abre a app para iniciar sessão ou voltar a ligar.',
      },
      {
        title: 'Atalhos da Apple',
        body: 'Ações de automatização: Ligar FollowNet VPN, Desligar FollowNet VPN e Aplicar perfil VPN. Integre o FollowNet nas suas rotinas, por exemplo ao chegar a casa ou ao entrar numa rede Wi‑Fi.',
      },
      {
        title: 'Conta e dispositivos',
        body: 'Comece no Free como convidado ou inicie sessão por email e código único, Apple ou Google. A conta mostra o plano, os dispositivos e o tráfego. O Free suporta até 2 dispositivos; o Premium e o período experimental, até 5. Pode terminar sessão ou eliminar a conta nas definições.',
      },
      {
        title: 'Free e Premium',
        body: 'Free: limite semanal de tráfego e servidores essenciais para experimentar um túnel VPN real. Premium: tráfego ilimitado, todos os servidores, até 5 dispositivos e sem anúncios. Subscreva ou restaure através da App Store e faça a gestão nas definições de subscrições da Apple.',
      },
      {
        title: 'Ajuda, idiomas e informações legais',
        body: 'A app inclui ajuda sobre ligação, pagamentos, ligação automática, DNS e conta. Suporta os idiomas do iOS en, ru, uk, es, de, fr e pt. O ecrã de informações apresenta a versão, o site, a Política de Privacidade e os Termos.',
      },
      {
        title: 'Extensão do Chrome',
        body: 'Proxy para Chrome (SOCKS/HTTPS) com ligação, servidores com ping e favoritos, temporizador, estatísticas e Free/Premium. O Kill Switch bloqueia o acesso à Internet do Chrome se o proxy falhar; EasyList e AdGuard bloqueiam anúncios. Alt+Shift+F ativa ou desativa a ligação. É um proxy apenas para o navegador, não uma VPN para todo o dispositivo.',
      },
      {
        title: 'O que o produto ainda não inclui',
        body: 'Ainda não existem apps para macOS ou Android. O túnel dividido por app não está disponível no iOS devido às limitações da plataforma. A ligação automática no iPhone não equivale a um Kill Switch contra fugas; esse Kill Switch existe na extensão do Chrome.',
      },
    ],
    bullets: [
      'Smart Connect + WireGuard · IKEv2 · AmneziaWG · Hysteria2',
      'Ligação automática · DNS · perfis de rede',
      'Speed Test · estatísticas · widgets · Atalhos',
      'VPN para todo o dispositivo no iOS + proxy Chrome com Kill Switch e bloqueio de anúncios',
    ],
  },
};

export function downloadPage(lang: AppLang): ProductPage {
  return DOWNLOAD[pack(lang)];
}

export function downloadIosPage(lang: AppLang): ProductPage {
  return DOWNLOAD_IOS[pack(lang)];
}

export function downloadChromePage(lang: AppLang): ProductPage {
  return DOWNLOAD_CHROME[pack(lang)];
}

export function featuresPage(lang: AppLang): ProductPage {
  return FEATURES[pack(lang)];
}
