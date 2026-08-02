import type { AppLang } from './i18n.service';
import type { LandingContent } from './seo-landing.content';
import type { LandingSlug } from './seo-landing.slugs';

type LocalizedLang = Exclude<AppLang, 'en' | 'ru'>;

interface LocaleUi {
  details: string;
  practical: string;
  limitsTitle: string;
  weekly: string;
  currentPlan: string;
  cta: string;
  chromeCta: string;
  qOverview: string;
  qUse: string;
  qLimits: string;
  qWeekly: string;
}

interface LandingSeed {
  h1: string;
  lead: string;
  use: string;
  limits: string;
  /** Optional extra sections for deeper localized guides; omitted slugs stay on the 2-section template. */
  extra?: Array<{ title: string; body: string }>;
}

const UI: Record<LocalizedLang, LocaleUi> = {
  uk: {
    details: 'Що варто знати',
    practical: 'Як користуватися на практиці',
    limitsTitle: 'Обмеження та чесні очікування',
    weekly: 'Безкоштовний тариф має тижневий ліміт трафіку',
    currentPlan: 'Актуальні можливості тарифу завжди вказані в застосунку',
    cta: 'Завантажити в App Store',
    chromeCta: 'Встановити для Chrome',
    qOverview: 'У чому головна користь?',
    qUse: 'З чого почати?',
    qLimits: 'Які є обмеження?',
    qWeekly: 'Як працює Free?',
  },
  de: {
    details: 'Das sollten Sie wissen',
    practical: 'So nutzen Sie es sinnvoll',
    limitsTitle: 'Grenzen und ehrliche Erwartungen',
    weekly: 'Der kostenlose Tarif enthält ein wöchentliches Datenlimit',
    currentPlan: 'Die aktuellen Tarifdetails stehen immer in der App',
    cta: 'Im App Store laden',
    chromeCta: 'Für Chrome installieren',
    qOverview: 'Was ist der wichtigste Vorteil?',
    qUse: 'Wie fange ich an?',
    qLimits: 'Welche Grenzen gibt es?',
    qWeekly: 'Wie funktioniert Free?',
  },
  es: {
    details: 'Lo que conviene saber',
    practical: 'Cómo usarlo en la práctica',
    limitsTitle: 'Límites y expectativas honestas',
    weekly: 'El plan gratuito incluye un límite semanal de datos',
    currentPlan: 'Las condiciones actuales de cada plan aparecen en la app',
    cta: 'Descargar en App Store',
    chromeCta: 'Instalar para Chrome',
    qOverview: '¿Cuál es la ventaja principal?',
    qUse: '¿Cómo empiezo?',
    qLimits: '¿Qué limitaciones existen?',
    qWeekly: '¿Cómo funciona Free?',
  },
  fr: {
    details: 'Ce qu’il faut savoir',
    practical: 'Bien l’utiliser en pratique',
    limitsTitle: 'Limites et attentes honnêtes',
    weekly: 'L’offre gratuite comprend un quota de données hebdomadaire',
    currentPlan: 'Les conditions actuelles de chaque offre sont indiquées dans l’app',
    cta: 'Télécharger dans l’App Store',
    chromeCta: 'Installer pour Chrome',
    qOverview: 'Quel est l’avantage principal ?',
    qUse: 'Comment commencer ?',
    qLimits: 'Quelles sont les limites ?',
    qWeekly: 'Comment fonctionne Free ?',
  },
  pt: {
    details: 'O que vale saber',
    practical: 'Como usar na prática',
    limitsTitle: 'Limites e expectativas honestas',
    weekly: 'O plano gratuito inclui um limite semanal de dados',
    currentPlan: 'As condições atuais de cada plano aparecem no app',
    cta: 'Baixar na App Store',
    chromeCta: 'Instalar para Chrome',
    qOverview: 'Qual é a principal vantagem?',
    qUse: 'Como começar?',
    qLimits: 'Quais são as limitações?',
    qWeekly: 'Como funciona o Free?',
  },
};

const UK: Record<LandingSlug, LandingSeed> = {
  'vpn-for-iphone': { h1: 'VPN для iPhone — приватніше з’єднання без зайвих налаштувань', lead: 'FollowNet захищає трафік iPhone та iPad у VPN-тунелі й дає вибір між WireGuard, IKEv2, AmneziaWG та Hysteria2.', use: 'Почніть зі Smart Connect, а потім порівняйте близькі сервери у звичних Wi‑Fi та мобільних мережах.', limits: 'VPN не замінює оновлення iOS, надійний код доступу та обережність із фішинговими сайтами.' },
  'wireguard-vpn-ios': { h1: 'WireGuard VPN для iOS — швидкий сучасний протокол', lead: 'WireGuard у FollowNet працює через Network Extension на iPhone та iPad і зазвичай дає низьку затримку на спокійних мережах.', use: 'Виберіть WireGuard у Налаштування → Протокол або залиште Smart Connect; порівняйте швидкість Speed Test на тому самому Wi‑Fi чи LTE.', limits: 'Деякі мережі фільтрують WireGuard — тоді AmneziaWG, IKEv2 або Hysteria2. Локації без вигаданих лічильників — у застосунку. Free має тижневий ліміт.', extra: [
      { title: 'Коли WireGuard блокують', body: 'Увімкніть Smart Connect або перемкніться вручну на AmneziaWG, IKEv2 чи Hysteria2 і повторіть тест на тій самій мережі.' },
      { title: 'Free і Premium', body: 'WireGuard доступний у межах тижневого Free. Premium знімає ліміт трафіку й відкриває локації поточного Premium-тарифу в застосунку.' },
    ] },
  'free-vpn-iphone': { h1: 'Безкоштовний VPN для iPhone з тижневим лімітом', lead: 'FollowNet Free дає тижневий ліміт трафіку без банківської картки, щоб перевірити VPN на iPhone до рішення про Premium.', use: 'Встановіть застосунок, увійдіть за email-кодом, дозвольте VPN-конфігурацію iOS і перевірте свої Wi‑Fi та LTE в межах тижневого ліміту.', limits: 'Free має тижневий, а не денний ліміт; локації Free і точний обсяг дивіться в застосунку. Premium знімає ліміт за умовами підписки.', extra: [
      { title: 'Free vs Premium', body: 'Free — для оцінки: тижневий трафік і Free-локації зі списку в застосунку. Premium — безліміт і Premium-локації поточного тарифу. Це обсяг і зручність, а не «сильніше шифрування».' },
      { title: 'Коли тижневого Free достатньо', body: 'Короткі сесії в публічному Wi‑Fi, порівняння протоколів і подорожні перевірки. Довгий HD-стрім або цілий день мобільного трафіку зазвичай потребують Premium.' },
    ] },
  'vpn-for-ipad': { h1: 'VPN для iPad — захист Wi‑Fi та мобільного трафіку', lead: 'Той самий застосунок FollowNet працює на iPad та iPhone й використовує системний VPN-механізм iOS.', use: 'Налаштуйте протокол, DNS і автопідключення окремо під сценарії планшета: подорожі, коворкінг або домашню мережу.', limits: 'Можливості інтерфейсу й віджетів залежать від поточної версії iOS та збірки з App Store.' },
  'ikev2-vpn-ios': { h1: 'IKEv2 VPN для iOS — стабільне перемикання між мережами', lead: 'IKEv2 корисний, коли iPhone часто переходить з Wi‑Fi на мобільний зв’язок і має швидко відновлювати тунель.', use: 'Спробуйте IKEv2 у дорозі або там, де WireGuard працює нестабільно, та порівняйте затримку на тому самому сервері.', limits: 'Жоден протокол не є найкращим у кожній мережі; Smart Connect або ручний тест дають надійнішу відповідь.' },
  'vpn-for-wifi': { h1: 'VPN для публічного Wi‑Fi на iPhone', lead: 'FollowNet шифрує шлях від iPhone/iPad до VPN-сервера в кафе, готелі, аеропорту чи гостьовій мережі в межах тижневого Free або Premium.', use: 'Спочатку пройдіть captive portal, потім увімкніть VPN; для звички — автопідключення «лише Wi‑Fi» і Smart Connect у незнайомих мережах.', limits: 'VPN не робить підозрілий hotspot безпечним і не захищає від фішингу. Локації — у застосунку, без вигаданих чисел серверів.', extra: [
      { title: 'Швидкість у готельному Wi‑Fi', body: 'Невеликий overhead нормальний. Speed Test і ближча локація зі списку в застосунку допомагають реалістично оцінити канал.' },
      { title: 'Тижневий Free у публічних мережах', body: 'Короткі й середні сесії вкладаються в Free. Цілий день стріму чи великих завантажень зазвичай потребує Premium.' },
    ] },
  'smart-connect-vpn': { h1: 'Smart Connect VPN — автоматичний вибір протоколу', lead: 'Smart Connect підбирає серед WireGuard, IKEv2, AmneziaWG і Hysteria2 за умовами мережі, щоб менше перебирати протоколи вручну.', use: 'Залиште автоматичний режим у незнайомих мережах; для порівняння фіксуйте протокол вручну й дивіться активний після підключення.', limits: 'Автовибір підвищує зручність, але не гарантує доступ у кожній мережі чи країні. Працює в межах тижневого Free або Premium.', extra: [
      { title: 'Smart Connect і автопідключення', body: 'Автопідключення вирішує, коли стартувати VPN; Smart Connect — який протокол спробувати після старту. Часто корисно вмикати обидва.' },
      { title: 'Ручний override', body: 'У Налаштуваннях → Протокол завжди можна зафіксувати WireGuard чи інший варіант, якщо ви вже знаєте, що працює вдома.' },
    ] },
  'amneziawg-vpn-ios': { h1: 'AmneziaWG для iOS — альтернатива у мережах із фільтрацією', lead: 'AmneziaWG базується на WireGuard і змінює впізнавані ознаки трафіку, що може допомогти в окремих мережах із DPI.', use: 'Спробуйте його, якщо звичайний WireGuard не підключається, а потім перевірте швидкість і стабільність на тому самому сервері.', limits: 'Обфускація не є гарантією обходу будь-якого блокування та може впливати на продуктивність.' },
  'no-logs-vpn': { h1: 'Приватність FollowNet — мінімізація даних без абсолютних слоганів', lead: 'Коректніше читати Privacy Policy, ніж вірити слогану «нуль логів»: акаунт і підписка потребують службових даних.', use: 'Перед підключенням перевірте політику щодо акаунта, підписки, DNS, VPN, аналітики й підтримки на follow-net.com/privacy.', limits: 'Ми не заявляємо тут формальних no-logs audit, яких не публікували. Email-вхід і App Store потребують технічних даних; правила — у політиці.', extra: [
      { title: 'Чому не «absolute no-logs»', body: 'VPN з акаунтом не може працювати з буквальним нулем даних. Політика описує категорії, цілі та строки зберігання.' },
      { title: 'Free і Premium', body: 'Та сама Privacy Policy для тижневого Free і Premium. Ліміти тарифу й локації — у застосунку.' },
    ] },
  'auto-connect-vpn-ios': { h1: 'Автопідключення VPN на iOS при зміні мережі', lead: 'Автопідключення запускає FollowNet за вибраним правилом для Wi‑Fi, мобільної мережі або будь-якого з’єднання.', use: 'Оберіть режим під свою звичку та перевірте його вдома, перш ніж покладатися на автоматизацію в подорожі.', limits: 'Системні обмеження iOS і captive portal можуть вимагати ручної дії або входу в мережу до запуску VPN.' },
  'dns-vpn-ios': { h1: 'Власний DNS у VPN на iPhone', lead: 'DNS-профілі дають змогу вибрати резолвер на кшталт Quad9, Cloudflare чи AdGuard під час використання FollowNet.', use: 'Обирайте DNS за метою: фільтрація, безпека або швидкість, і перевіряйте, чи не ламає він потрібні сайти.', limits: 'Зміна DNS не замінює VPN-шифрування й не гарантує блокування всієї реклами або шкідливого контенту.' },
  'vpn-for-travel': { h1: 'VPN для подорожей на iPhone — готелі, аеропорти й місцеві SIM', lead: 'FollowNet допомагає захистити з’єднання в незнайомих мережах і дає кілька протоколів для різних умов у дорозі.', use: 'Встановіть застосунок до поїздки, увійдіть у акаунт, перевірте автопідключення та підготуйте альтернативний протокол.', limits: 'Робота VPN залежить від місцевого законодавства й мережевих правил; користувач має дотримуватися вимог країни перебування.' },
  'best-vpn-iphone': { h1: 'Як вибрати VPN для iPhone без маркетингових перебільшень', lead: 'Оцінюйте нативний Network Extension, прозорість Privacy Policy, протоколи, реальну швидкість у ваших мережах і чесний тижневий Free vs Premium.', use: 'Спробуйте FollowNet Free на домашньому Wi‑Fi та LTE, зробіть Speed Test і лише потім вирішуйте про Premium.', limits: 'Універсально «найкращого» VPN немає. Немає гарантії розблокування стримінгу чи доступу «скрізь у світі»; локації — у застосунку.', extra: [
      { title: 'Чеклист без слоганів', body: 'App Store, Network Extension (не browser-only), Privacy Policy, WireGuard/IKEv2 і варіанти для фільтрів, Auto-connect, підтримка. Уникайте фейкових лічильників серверів.' },
      { title: 'Що дає FollowNet', body: 'Smart Connect, AmneziaWG, Hysteria2, DNS, Speed Test, віджети. Free з тижневим лімітом; Premium опційний через Apple.' },
    ] },
  'vpn-speed-test-ios': { h1: 'Тест швидкості VPN на iPhone — порівнюйте на власній мережі', lead: 'Вбудований Speed Test допомагає зіставити затримку та швидкість до й після підключення до різних серверів.', use: 'Зробіть базовий тест без VPN, а потім повторіть його з тим самим типом мережі для кількох близьких серверів і протоколів.', limits: 'Тест витрачає трафік і показує стан мережі в конкретний момент, а не гарантовану швидкість надалі.' },
  'secure-vpn-iphone': { h1: 'Безпечніше з’єднання iPhone через VPN', lead: 'FollowNet поєднує сучасні протоколи, автопідключення та DNS-профілі, але не підміняє базову безпеку пристрою.', use: 'Оновлюйте iOS, використовуйте Face ID або надійний код і вмикайте VPN у мережах, яким не довіряєте.', limits: 'VPN шифрує транспорт до сервера, але не лікує заражений пристрій і не розпізнає кожну шахрайську сторінку.' },
  'hysteria2-vpn-ios': { h1: 'Hysteria2 VPN для iOS у нестабільних мережах', lead: 'Hysteria2 є додатковим шляхом для мереж із втратами або фільтрацією, де класичний VPN-тунель працює погано.', use: 'Перемкніться на Hysteria2 вручну або через Smart Connect і порівняйте результат з WireGuard на однакових умовах.', limits: 'Протокол не гарантує доступ усюди й не обов’язково буде швидшим у стабільній мережі.' },
  'vpn-chrome-extension': { h1: 'Розширення FollowNet VPN для Chrome — лише браузерний трафік', lead: 'Розширення захищає перегляд у Chrome на комп’ютері з акаунтом FollowNet; це не повноцінний системний VPN для всіх програм.', use: 'Увійдіть тим самим email-кодом, що на iOS, оберіть локацію зі списку тарифу й використовуйте iOS-застосунок для VPN усього пристрою.', limits: 'Трафік поза підтримуваним браузером не покривається. Free має тижневий ліміт; Premium знімає його за підпискою.', extra: [
      { title: 'Що саме захищає розширення', body: 'Browsing у підтримуваному Chrome/Chromium. Slack, Zoom та інші десктоп-застосунки — ні; для телефону потрібен iOS FollowNet.' },
      { title: 'Тижневий Free на десктопі', body: 'Free дає оцінити браузерний VPN до оплати. Жоден тариф не перетворює розширення на системний VPN macOS/Windows.' },
    ] },
  'vpn-widgets-ios': { h1: 'Віджети VPN для iOS — статус з’єднання на екрані', lead: 'Віджети FollowNet допомагають швидко побачити стан VPN, не відкриваючи повний інтерфейс застосунку.', use: 'Додайте віджет поруч із часто використовуваними елементами й поєднайте його з автопідключенням для контролю статусу.', limits: 'Доступні дії залежать від версії iOS; системний запит або сам застосунок іноді все одно потрібні.' },
  'how-to-setup-vpn-iphone': { h1: 'Як налаштувати VPN на iPhone з FollowNet', lead: 'Встановіть FollowNet з App Store, увійдіть за кодом з email, один раз дозвольте системну VPN-конфігурацію й підключіться — тижневий Free уже доступний.', use: 'Після старту перевірте Smart Connect, автопідключення, DNS і Speed Test у мережі, якою користуєтеся щодня; локації беріть зі списку в застосунку.', limits: 'Запит iOS на VPN-конфігурацію — нормальна вимога Network Extension, не sideload-профіль. Розблокування стримінгу не гарантується.', extra: [
      { title: 'Якщо не підключається', body: 'Перевірте дозвіл VPN, спробуйте Smart Connect, інший протокол або локацію зі списку в застосунку, і спочатку пройдіть captive portal у готелі.' },
      { title: 'Тижневий Free після налаштування', body: 'Картка не потрібна. Коли ліміту мало — Premium у App Store для безліміту та локацій тарифу, показаних у застосунку.' },
    ] },
  'vpn-for-streaming-iphone': { h1: 'VPN для стримінгу на iPhone — швидкість без обіцянок розблокування', lead: 'FollowNet шифрує з’єднання й дає вибір серверів, але доступ до каталогів визначає сам стримінговий сервіс.', use: 'Оберіть близький сервер, перевірте швидкість і лише потім починайте довгу відеосесію, особливо в готельному Wi‑Fi.', limits: 'Жоден сервер не може гарантувати розблокування кожної платформи, країни чи конкретного каталогу.' },
  'vpn-for-gaming-iphone': { h1: 'VPN для ігор на iPhone — контролюйте затримку', lead: 'VPN корисний у ненадійних мережах, але додатковий маршрут може як допомогти, так і збільшити ping.', use: 'Почніть із близького сервера та WireGuard, виміряйте затримку, а за фільтрації перевірте Smart Connect або інший протокол.', limits: 'FollowNet не гарантує нижчий ping: якщо маршрут стає довшим, у довіреній мережі краще грати без VPN.' },
};

const DE: Record<LandingSlug, LandingSeed> = {
  'vpn-for-iphone': { h1: 'VPN für iPhone — privater verbinden, einfach bedienen', lead: 'FollowNet schützt den Datenweg von iPhone und iPad mit einem VPN-Tunnel und mehreren wählbaren Protokollen.', use: 'Starten Sie mit Smart Connect und vergleichen Sie nahe Server in Ihrem üblichen WLAN und Mobilfunknetz.', limits: 'Ein VPN ersetzt weder iOS-Updates noch einen sicheren Gerätecode oder Vorsicht vor Phishing.' },
  'wireguard-vpn-ios': { h1: 'WireGuard VPN für iOS — modern und reaktionsschnell', lead: 'WireGuard läuft in FollowNet über Network Extension auf iPhone und iPad und bietet oft geringe Latenz in ruhigen Netzen.', use: 'WireGuard unter Einstellungen → Protokoll wählen oder Smart Connect nutzen; Speedtest im gleichen WLAN/Mobilfunk vergleichen.', limits: 'Manche Netze filtern WireGuard — dann AmneziaWG, IKEv2 oder Hysteria2. Standorte ohne erfundene Zahlen stehen in der App. Free hat ein Wochenlimit.', extra: [
      { title: 'Wenn WireGuard blockiert wird', body: 'Smart Connect aktivieren oder manuell auf AmneziaWG, IKEv2 oder Hysteria2 wechseln und erneut messen.' },
      { title: 'Free und Premium', body: 'WireGuard ist im wöchentlichen Free nutzbar. Premium hebt das Datenlimit auf und öffnet Premium-Standorte laut App.' },
    ] },
  'free-vpn-iphone': { h1: 'Kostenloses VPN für iPhone mit Wochenlimit', lead: 'FollowNet Free bietet ein wöchentliches Datenlimit ohne Kreditkarte, damit Sie den VPN-Dienst auf dem iPhone vor Premium prüfen können.', use: 'App installieren, per E-Mail-Code anmelden, die iOS-VPN-Konfiguration erlauben und WLAN sowie Mobilfunk innerhalb des Wochenlimits testen.', limits: 'Free gilt wöchentlich, nicht täglich; Free-Standorte und Volumen stehen in der App. Premium hebt das Limit laut Abo auf.', extra: [
      { title: 'Free vs Premium', body: 'Free dient der Bewertung: Wochenlimit und Free-Standorte aus der App. Premium bringt unbegrenzten Traffic und Premium-Standorte des aktuellen Tarifs — nicht „stärkere Verschlüsselung“.' },
      { title: 'Wann Free reicht', body: 'Kurze Sessions im öffentlichen WLAN und Protokollvergleiche. Langer HD-Stream oder ganztägiger Mobilverkehr brauchen meist Premium.' },
    ] },
  'vpn-for-ipad': { h1: 'VPN für iPad — Schutz für WLAN und mobile Daten', lead: 'Dieselbe FollowNet-App läuft auf iPad und iPhone und nutzt die VPN-Funktionen von iOS.', use: 'Passen Sie Protokoll, DNS und Auto-Verbindung an Reisen, Arbeit oder das Heimnetz an.', limits: 'Oberfläche und Widget-Funktionen richten sich nach der aktuellen iOS- und App-Version.' },
  'ikev2-vpn-ios': { h1: 'IKEv2 VPN für iOS — stabil beim Netzwechsel', lead: 'IKEv2 eignet sich, wenn das iPhone häufig zwischen WLAN und Mobilfunk wechselt und den Tunnel zügig erneuern soll.', use: 'Testen Sie IKEv2 unterwegs oder wenn WireGuard in Ihrem Netz instabil ist.', limits: 'Kein Protokoll gewinnt in jedem Netz; ein lokaler Vergleich ist aussagekräftiger als pauschale Versprechen.' },
  'vpn-for-wifi': { h1: 'VPN für öffentliches WLAN auf dem iPhone', lead: 'FollowNet verschlüsselt den Weg vom iPhone/iPad zum VPN-Server in Cafés, Hotels und Flughäfen — im wöchentlichen Free oder mit Premium.', use: 'Zuerst Captive Portal, dann VPN; Auto-Verbindung „nur WLAN“ und Smart Connect in fremden Netzen helfen im Alltag.', limits: 'VPN macht einen verdächtigen Hotspot nicht vertrauenswürdig und stoppt kein Phishing. Standorte stehen in der App.', extra: [
      { title: 'Tempo im Hotel-WLAN', body: 'Etwas Overhead ist normal. Speedtest und ein näherer Standort aus der App helfen bei realistischen Erwartungen.' },
      { title: 'Wochenlimit im öffentlichen WLAN', body: 'Kurze und mittlere Sessions passen oft in Free. Ganztägiges Streaming braucht meist Premium.' },
    ] },
  'smart-connect-vpn': { h1: 'Smart Connect VPN — Protokoll automatisch wählen', lead: 'Smart Connect wählt unter WireGuard, IKEv2, AmneziaWG und Hysteria2 nach Netzbedingungen, damit Sie weniger manuell umschalten.', use: 'Automatik in fremden Netzen lassen; für Vergleiche Protokoll manuell fixieren und die aktive Wahl nach dem Connect prüfen.', limits: 'Komfort ohne Garantie für jedes Netz oder jedes Land. Nutzbar im wöchentlichen Free oder mit Premium.', extra: [
      { title: 'Smart Connect und Auto-Verbindung', body: 'Auto-Verbindung startet VPN; Smart Connect wählt danach das Protokoll. Beides zusammen ist auf Reisen sinnvoll.' },
      { title: 'Manueller Override', body: 'Unter Einstellungen → Protokoll können Sie WireGuard oder ein anderes Protokoll fest einstellen.' },
    ] },
  'amneziawg-vpn-ios': { h1: 'AmneziaWG für iOS — Option bei gefilterten Netzen', lead: 'AmneziaWG basiert auf WireGuard und verändert erkennbare Verkehrsmuster, was bei bestimmten DPI-Filtern helfen kann.', use: 'Probieren Sie es aus, wenn normales WireGuard scheitert, und vergleichen Sie anschließend Stabilität und Tempo.', limits: 'Verschleierung kann Sperren nicht zuverlässig in jedem Netz umgehen und kostet unter Umständen Leistung.' },
  'no-logs-vpn': { h1: 'FollowNet Datenschutz — Datenminimierung statt Absolutversprechen', lead: 'Lesen Sie die Datenschutzerklärung statt eines „Null-Logs“-Slogans: Konto und Abo brauchen technische Daten.', use: 'Prüfen Sie vor dem Connect die Policy zu Konto, Abo, DNS, VPN, Analyse und Support unter follow-net.com/privacy.', limits: 'Keine behaupteten No-Logs-Audits auf dieser Seite. E-Mail-Login und App Store erfordern Metadaten; maßgeblich ist die veröffentlichte Richtlinie.', extra: [
      { title: 'Warum kein absolutes No-Logs', body: 'Ein kontobasiertes VPN kann nicht mit buchstäblich null Daten arbeiten. Die Policy nennt Kategorien, Zwecke und Fristen.' },
      { title: 'Free und Premium', body: 'Dieselbe Datenschutzerklärung gilt für Wochen-Free und Premium. Tariflimits und Standorte stehen in der App.' },
    ] },
  'auto-connect-vpn-ios': { h1: 'VPN auf iOS automatisch verbinden', lead: 'Auto-Verbindung startet FollowNet nach Ihrer Regel im WLAN, Mobilfunk oder in jedem Netz.', use: 'Richten Sie die gewünschte Regel ein und testen Sie sie zuhause, bevor Sie sich auf Reisen darauf verlassen.', limits: 'iOS-Vorgaben und Captive Portals können weiterhin eine manuelle Aktion verlangen.' },
  'dns-vpn-ios': { h1: 'Eigenes DNS mit VPN auf dem iPhone', lead: 'DNS-Profile erlauben Resolver wie Quad9, Cloudflare oder AdGuard zusammen mit FollowNet.', use: 'Wählen Sie DNS nach Ziel — Filterung, Sicherheit oder Reaktionszeit — und prüfen Sie wichtige Websites.', limits: 'Ein DNS-Wechsel ersetzt keine VPN-Verschlüsselung und blockiert nicht garantiert jede Werbung oder Schadseite.' },
  'vpn-for-travel': { h1: 'VPN auf Reisen — Hotels, Flughäfen und lokale SIM-Karten', lead: 'FollowNet schützt Verbindungen in fremden Netzen und bietet mehrere Protokolle für unterschiedliche Bedingungen.', use: 'Installieren und testen Sie die App vor der Abreise und halten Sie ein alternatives Protokoll bereit.', limits: 'Nutzung und Verfügbarkeit hängen von lokalen Gesetzen und Netzregeln ab.' },
  'best-vpn-iphone': { h1: 'VPN fürs iPhone auswählen — ohne Superlative', lead: 'Achten Sie auf native Network Extension, transparente Datenschutzerklärung, Protokolle, lokale Leistung und ehrliches Wochen-Free vs Premium.', use: 'Testen Sie FollowNet Free im Heim-WLAN und Mobilfunk mit Speedtest, bevor Sie Premium buchen.', limits: 'Es gibt kein bestes VPN für alle. Keine Streaming-Entsperrgarantie und kein „überall auf der Welt“; Standorte stehen in der App.', extra: [
      { title: 'Checkliste ohne Slogans', body: 'App Store, Network Extension (nicht nur Browser), Privacy Policy, moderne Protokolle, Auto-Verbindung. Keine erfundenen Serverzahlen.' },
      { title: 'Was FollowNet bietet', body: 'Smart Connect, AmneziaWG, Hysteria2, DNS, Speedtest, Widgets. Free mit Wochenlimit; Premium optional über Apple.' },
    ] },
  'vpn-speed-test-ios': { h1: 'VPN-Speedtest auf dem iPhone — im eigenen Netz messen', lead: 'Der integrierte Test vergleicht Latenz und Download vor und nach der Verbindung mit verschiedenen Servern.', use: 'Messen Sie zuerst ohne VPN und wiederholen Sie den Test unter gleichen Bedingungen mit nahen Servern.', limits: 'Ein Test verbraucht Daten und zeigt eine Momentaufnahme, keine garantierte Dauergeschwindigkeit.' },
  'secure-vpn-iphone': { h1: 'Sicherer verbinden mit VPN auf dem iPhone', lead: 'FollowNet kombiniert moderne Protokolle, Auto-Verbindung und DNS-Profile, ersetzt aber keine Gerätesicherheit.', use: 'Halten Sie iOS aktuell, sichern Sie das Gerät und aktivieren Sie VPN in nicht vertrauenswürdigen Netzen.', limits: 'VPN verschlüsselt den Transport zum Server, erkennt aber nicht jede Phishing-Seite oder infizierte App.' },
  'hysteria2-vpn-ios': { h1: 'Hysteria2 VPN für iOS in schwierigen Netzen', lead: 'Hysteria2 bietet einen alternativen Transport bei Verlusten oder Filtern, wenn klassische Tunnel schlecht funktionieren.', use: 'Wählen Sie Hysteria2 direkt oder über Smart Connect und vergleichen Sie es unter gleichen Bedingungen mit WireGuard.', limits: 'Das Protokoll garantiert keinen Zugang überall und ist in stabilen Netzen nicht automatisch schneller.' },
  'vpn-chrome-extension': { h1: 'FollowNet VPN-Erweiterung für Chrome — nur Browserverkehr', lead: 'Die Erweiterung schützt die Navigation in Chrome am Desktop mit Ihrem FollowNet-Konto; sie ist kein vollständiges System-VPN für alle Programme.', use: 'Mit demselben E-Mail-Code wie auf iOS anmelden, einen Standort aus der Tarifliste wählen und die iOS-App für geräteweiten VPN nutzen.', limits: 'Verkehr außerhalb des unterstützten Browsers bleibt ungeschützt. Free hat ein Wochenlimit; Premium hebt es laut Abo auf.', extra: [
      { title: 'Was die Erweiterung abdeckt', body: 'Browsing in Chrome/Chromium. Desktop-Apps wie Slack oder Zoom nicht — dafür auf dem Telefon die iOS-App.' },
      { title: 'Wochenlimit am Desktop', body: 'Free dient der Bewertung. Kein Tarif macht aus der Erweiterung ein macOS-/Windows-System-VPN.' },
    ] },
  'vpn-widgets-ios': { h1: 'VPN-Widgets für iOS — Verbindungsstatus im Blick', lead: 'FollowNet-Widgets zeigen den VPN-Status, ohne dass Sie jedes Mal die ganze App öffnen müssen.', use: 'Platzieren Sie das Widget gut sichtbar und kombinieren Sie es mit Auto-Verbindung.', limits: 'Welche Aktionen möglich sind, hängt von iOS ab; gelegentlich bleibt die App oder ein Systemdialog nötig.' },
  'how-to-setup-vpn-iphone': { h1: 'VPN auf dem iPhone mit FollowNet einrichten', lead: 'App aus dem App Store laden, per E-Mail-Code anmelden, einmal die System-VPN-Konfiguration erlauben und verbinden — Free mit Wochenlimit ist sofort nutzbar.', use: 'Danach Smart Connect, Auto-Verbindung, DNS und Speedtest im Alltagnetz prüfen; Standorte nur aus der App-Liste wählen.', limits: 'Die iOS-Abfrage ist eine normale Network-Extension-Anforderung, kein Sideload-Profil. Streaming-Entsperrung wird nicht garantiert.', extra: [
      { title: 'Wenn die Verbindung scheitert', body: 'VPN-Erlaubnis prüfen, Smart Connect oder anderes Protokoll/Standort aus der App versuchen; Captive Portal zuerst abschließen.' },
      { title: 'Wochenlimit nach dem Setup', body: 'Keine Karte nötig. Reicht Free nicht — Premium im App Store für unbegrenzten Traffic und Tarif-Standorte in der App.' },
    ] },
  'vpn-for-streaming-iphone': { h1: 'VPN für Streaming auf dem iPhone — Tempo ohne Entsperrgarantie', lead: 'FollowNet verschlüsselt die Verbindung und bietet Serverstandorte; über Katalogzugriff entscheidet der Streamingdienst.', use: 'Wählen Sie einen nahen Server und testen Sie das Tempo vor einer längeren Videositzung.', limits: 'Kein VPN-Server kann jede Plattform, Region oder Mediathek garantiert entsperren.' },
  'vpn-for-gaming-iphone': { h1: 'VPN für Gaming auf dem iPhone — Latenz zuerst messen', lead: 'In fremden Netzen kann ein VPN sinnvoll sein, doch der zusätzliche Weg kann den Ping auch erhöhen.', use: 'Beginnen Sie mit einem nahen Server und WireGuard; bei Filtern testen Sie Smart Connect.', limits: 'FollowNet garantiert keinen niedrigeren Ping; bei schlechterem Routing ist Spielen ohne VPN oft besser.' },
};

const ES: Record<LandingSlug, LandingSeed> = {
  'vpn-for-iphone': { h1: 'VPN para iPhone — conexión privada y sencilla', lead: 'FollowNet protege el tráfico de iPhone y iPad mediante un túnel VPN con varios protocolos disponibles.', use: 'Empieza con Smart Connect y compara servidores cercanos en tu Wi‑Fi y red móvil habituales.', limits: 'Una VPN no sustituye las actualizaciones de iOS, un código seguro ni la precaución ante el phishing.' },
  'wireguard-vpn-ios': { h1: 'WireGuard VPN para iOS — moderno y ligero', lead: 'WireGuard en FollowNet usa Network Extension en iPhone y iPad y suele ofrecer baja latencia en redes tranquilas.', use: 'Elige WireGuard en Ajustes → Protocolo o deja Smart Connect; compara con Speed Test en el mismo Wi‑Fi o datos.', limits: 'Algunas redes filtran WireGuard: usa AmneziaWG, IKEv2 o Hysteria2. Las ubicaciones están en la app, sin cifras inventadas. Free tiene límite semanal.', extra: [
      { title: 'Si WireGuard está bloqueado', body: 'Activa Smart Connect o cambia manualmente a AmneziaWG, IKEv2 o Hysteria2 y vuelve a medir.' },
      { title: 'Free y Premium', body: 'WireGuard funciona dentro del Free semanal. Premium quita el límite y abre ubicaciones Premium según la app.' },
    ] },
  'free-vpn-iphone': { h1: 'VPN gratis para iPhone con límite semanal', lead: 'FollowNet Free incluye un límite semanal de datos sin tarjeta para probar el VPN en iPhone antes de decidir Premium.', use: 'Instala la app, entra con el código de email, permite la configuración VPN de iOS y prueba tu Wi‑Fi y datos dentro del límite semanal.', limits: 'Free es semanal, no diario; ubicaciones Free y el volumen exacto están en la app. Premium quita el límite según la suscripción.', extra: [
      { title: 'Free vs Premium', body: 'Free sirve para evaluar: tráfico semanal y ubicaciones Free de la app. Premium aporta tráfico ilimitado y ubicaciones Premium del plan actual — no un cifrado «más fuerte».' },
      { title: 'Cuándo basta Free', body: 'Sesiones cortas en Wi‑Fi público y comparación de protocolos. Streaming HD largo o uso móvil todo el día suele exigir Premium.' },
    ] },
  'vpn-for-ipad': { h1: 'VPN para iPad — protección en Wi‑Fi y datos móviles', lead: 'La misma app FollowNet funciona en iPad y iPhone mediante las funciones VPN del sistema iOS.', use: 'Ajusta protocolo, DNS y conexión automática a viajes, trabajo o red doméstica.', limits: 'La interfaz y los widgets dependen de la versión actual de iOS y de la app.' },
  'ikev2-vpn-ios': { h1: 'IKEv2 VPN para iOS — estabilidad al cambiar de red', lead: 'IKEv2 resulta útil cuando el iPhone alterna entre Wi‑Fi y datos móviles y debe recuperar el túnel rápido.', use: 'Pruébalo al viajar o cuando WireGuard sea inestable en tu operador.', limits: 'Ningún protocolo gana en todas las redes; una comparación local es más fiable.' },
  'vpn-for-wifi': { h1: 'VPN para Wi‑Fi público en iPhone', lead: 'FollowNet cifra el trayecto del iPhone/iPad al servidor VPN en cafés, hoteles y aeropuertos — con Free semanal o Premium.', use: 'Completa primero el portal cautivo y luego conecta VPN; la conexión automática solo Wi‑Fi y Smart Connect ayudan en redes nuevas.', limits: 'La VPN no hace fiable un hotspot sospechoso ni evita el phishing. Las ubicaciones están en la app.', extra: [
      { title: 'Velocidad en Wi‑Fi de hotel', body: 'Algo de overhead es normal. Speed Test y una ubicación cercana de la app dan expectativas realistas.' },
      { title: 'Free semanal en Wi‑Fi público', body: 'Sesiones cortas y medias suelen caber en Free. Streaming todo el día suele exigir Premium.' },
    ] },
  'smart-connect-vpn': { h1: 'Smart Connect VPN — protocolo automático', lead: 'Smart Connect elige entre WireGuard, IKEv2, AmneziaWG y Hysteria2 según la red para ahorrarte pruebas manuales.', use: 'Deja el modo automático en redes desconocidas; fija un protocolo a mano para comparar y revisa el activo tras conectar.', limits: 'Mejora la comodidad, pero no garantiza acceso en toda red o país. Disponible con Free semanal o Premium.', extra: [
      { title: 'Smart Connect y conexión automática', body: 'La conexión automática decide cuándo iniciar VPN; Smart Connect elige el protocolo después. Ambos juntos ayudan de viaje.' },
      { title: 'Override manual', body: 'En Ajustes → Protocolo puedes fijar WireGuard u otra opción si ya sabes qué funciona en casa.' },
    ] },
  'amneziawg-vpn-ios': { h1: 'AmneziaWG para iOS — opción ante redes filtradas', lead: 'AmneziaWG se basa en WireGuard y modifica patrones reconocibles, algo útil frente a ciertos filtros DPI.', use: 'Pruébalo si WireGuard no conecta y compara después estabilidad y velocidad.', limits: 'La ofuscación no garantiza superar todos los bloqueos y puede reducir el rendimiento.' },
  'no-logs-vpn': { h1: 'Privacidad en FollowNet — minimización sin absolutos', lead: 'Lee la Privacy Policy en lugar de creer un eslogan de «cero registros»: la cuenta y la suscripción requieren datos técnicos.', use: 'Antes de conectar, revisa la política sobre cuenta, suscripción, DNS, VPN, analítica y soporte en follow-net.com/privacy.', limits: 'No afirmamos aquí auditorías no-logs no publicadas. El login por email y App Store necesitan metadatos; manda la política publicada.', extra: [
      { title: 'Por qué no «no-logs absoluto»', body: 'Una VPN con cuenta no puede operar con cero datos literales. La política describe categorías, fines y retención.' },
      { title: 'Free y Premium', body: 'La misma Privacy Policy aplica al Free semanal y a Premium. Límites y ubicaciones están en la app.' },
    ] },
  'auto-connect-vpn-ios': { h1: 'Conexión VPN automática en iOS', lead: 'La conexión automática inicia FollowNet según tu regla para Wi‑Fi, datos móviles o cualquier red.', use: 'Configura la regla y pruébala en casa antes de depender de ella durante un viaje.', limits: 'iOS y los portales cautivos pueden exigir una acción manual.' },
  'dns-vpn-ios': { h1: 'DNS personalizado con VPN en iPhone', lead: 'Los perfiles DNS permiten usar resolutores como Quad9, Cloudflare o AdGuard junto a FollowNet.', use: 'Elige DNS por filtrado, seguridad o rapidez y comprueba tus sitios importantes.', limits: 'Cambiar DNS no sustituye el cifrado VPN ni bloquea toda publicidad o amenaza.' },
  'vpn-for-travel': { h1: 'VPN para viajar — hoteles, aeropuertos y SIM locales', lead: 'FollowNet protege conexiones en redes desconocidas y ofrece varios protocolos para condiciones distintas.', use: 'Instala y prueba la app antes de salir y prepara un protocolo alternativo.', limits: 'El uso depende de la legislación y las reglas de red locales.' },
  'best-vpn-iphone': { h1: 'Cómo elegir VPN para iPhone sin exageraciones', lead: 'Valora Network Extension nativo, Privacy Policy clara, protocolos, rendimiento local y Free semanal vs Premium honestos.', use: 'Prueba FollowNet Free en Wi‑Fi y datos con Speed Test antes de contratar Premium.', limits: 'No hay una VPN mejor para todos. Sin garantía de desbloquear streaming ni acceso «en todo el mundo»; ubicaciones en la app.', extra: [
      { title: 'Lista sin eslóganes', body: 'App Store, Network Extension (no solo navegador), Privacy Policy, protocolos modernos, conexión automática. Sin recuentos inventados de servidores.' },
      { title: 'Qué ofrece FollowNet', body: 'Smart Connect, AmneziaWG, Hysteria2, DNS, Speed Test, widgets. Free con límite semanal; Premium opcional vía Apple.' },
    ] },
  'vpn-speed-test-ios': { h1: 'Test de velocidad VPN en iPhone — mide en tu red', lead: 'La prueba integrada compara latencia y descarga antes y después de conectar a distintos servidores.', use: 'Mide primero sin VPN y repite en las mismas condiciones con servidores cercanos.', limits: 'La prueba consume datos y refleja un momento concreto, no una velocidad garantizada.' },
  'secure-vpn-iphone': { h1: 'Conexión más segura con VPN en iPhone', lead: 'FollowNet combina protocolos actuales, conexión automática y DNS, sin sustituir la seguridad del dispositivo.', use: 'Actualiza iOS, protege el equipo y activa VPN en redes que no sean de confianza.', limits: 'La VPN cifra el transporte al servidor, pero no detecta todas las webs fraudulentas.' },
  'hysteria2-vpn-ios': { h1: 'Hysteria2 VPN para iOS en redes difíciles', lead: 'Hysteria2 ofrece una ruta alternativa cuando las pérdidas o filtros perjudican a túneles clásicos.', use: 'Actívalo manualmente o con Smart Connect y compáralo con WireGuard en las mismas condiciones.', limits: 'No garantiza acceso en todas partes ni será siempre más rápido en redes estables.' },
  'vpn-chrome-extension': { h1: 'Extensión VPN FollowNet para Chrome — solo tráfico del navegador', lead: 'La extensión protege la navegación en Chrome en el escritorio con tu cuenta FollowNet; no es una VPN de sistema para todas las apps.', use: 'Entra con el mismo código de email que en iOS, elige una ubicación de tu plan y usa la app iOS para el VPN de todo el dispositivo.', limits: 'El tráfico fuera del navegador compatible no está cubierto. Free tiene límite semanal; Premium lo quita según la suscripción.', extra: [
      { title: 'Qué cubre la extensión', body: 'Navegación en Chrome/Chromium. Apps de escritorio como Slack o Zoom no; en el teléfono usa FollowNet iOS.' },
      { title: 'Free semanal en escritorio', body: 'Free permite evaluar antes de pagar. Ningún plan convierte la extensión en VPN de sistema macOS/Windows.' },
    ] },
  'vpn-widgets-ios': { h1: 'Widgets VPN para iOS — estado visible', lead: 'Los widgets FollowNet muestran el estado de la VPN sin abrir toda la aplicación.', use: 'Colócalo en una zona visible y combínalo con la conexión automática.', limits: 'Las acciones disponibles dependen de iOS; a veces hará falta abrir la app.' },
  'how-to-setup-vpn-iphone': { h1: 'Cómo configurar una VPN en iPhone con FollowNet', lead: 'Instala FollowNet desde App Store, entra con el código de email, permite una vez la configuración VPN del sistema y conéctate — Free semanal ya está disponible.', use: 'Después prueba Smart Connect, conexión automática, DNS y Speed Test en tu red habitual; elige ubicaciones de la lista de la app.', limits: 'El aviso de iOS es un requisito normal de Network Extension, no un perfil sideload. No se garantiza desbloquear streaming.', extra: [
      { title: 'Si no conecta', body: 'Revisa el permiso VPN, prueba Smart Connect u otro protocolo/ubicación de la app; completa primero el portal cautivo del hotel.' },
      { title: 'Límite semanal tras el setup', body: 'No hace falta tarjeta. Si Free no alcanza — Premium en App Store para ilimitado y ubicaciones del plan en la app.' },
    ] },
  'vpn-for-streaming-iphone': { h1: 'VPN para streaming en iPhone — velocidad sin promesas falsas', lead: 'FollowNet cifra la conexión y ofrece ubicaciones; el acceso al catálogo lo decide la plataforma.', use: 'Elige un servidor cercano y mide la velocidad antes de una sesión larga de vídeo.', limits: 'Ningún servidor garantiza desbloquear todas las plataformas, regiones o bibliotecas.' },
  'vpn-for-gaming-iphone': { h1: 'VPN para jugar en iPhone — mide primero la latencia', lead: 'Una VPN puede ser útil en redes ajenas, pero la ruta adicional también puede aumentar el ping.', use: 'Empieza con WireGuard y un servidor cercano; ante filtros, prueba Smart Connect.', limits: 'FollowNet no garantiza reducir el ping; si empeora la ruta, juega sin VPN en redes fiables.' },
};

const FR: Record<LandingSlug, LandingSeed> = {
  'vpn-for-iphone': { h1: 'VPN pour iPhone — connexion privée et simple', lead: 'FollowNet protège le trafic de l’iPhone et de l’iPad dans un tunnel VPN avec plusieurs protocoles.', use: 'Commencez avec Smart Connect puis comparez des serveurs proches sur vos réseaux habituels.', limits: 'Un VPN ne remplace ni les mises à jour iOS, ni un code robuste, ni la vigilance contre le phishing.' },
  'wireguard-vpn-ios': { h1: 'WireGuard VPN pour iOS — moderne et léger', lead: 'WireGuard dans FollowNet passe par Network Extension sur iPhone et iPad et offre souvent une faible latence sur les réseaux calmes.', use: 'Choisissez WireGuard dans Réglages → Protocole ou laissez Smart Connect ; comparez avec Speed Test sur le même Wi‑Fi ou mobile.', limits: 'Certains réseaux filtrent WireGuard : essayez AmneziaWG, IKEv2 ou Hysteria2. Emplacements sans chiffres inventés dans l’app. Free a un quota hebdomadaire.', extra: [
      { title: 'Si WireGuard est bloqué', body: 'Activez Smart Connect ou passez manuellement à AmneziaWG, IKEv2 ou Hysteria2, puis remesurez.' },
      { title: 'Free et Premium', body: 'WireGuard est utilisable dans le Free hebdomadaire. Premium retire le quota et ouvre les emplacements Premium indiqués dans l’app.' },
    ] },
  'free-vpn-iphone': { h1: 'VPN gratuit pour iPhone avec quota hebdomadaire', lead: 'FollowNet Free offre un quota de données hebdomadaire sans carte pour tester le VPN sur iPhone avant Premium.', use: 'Installez l’app, connectez-vous par code email, autorisez la configuration VPN iOS et testez Wi‑Fi et mobile dans le quota hebdomadaire.', limits: 'Free est hebdomadaire, pas quotidien ; emplacements Free et volume exact sont dans l’app. Premium retire le quota selon l’abonnement.', extra: [
      { title: 'Free vs Premium', body: 'Free sert à évaluer : quota hebdomadaire et emplacements Free. Premium apporte le trafic illimité et les emplacements Premium de l’offre — pas un chiffrement « plus fort ».' },
      { title: 'Quand Free suffit', body: 'Sessions courtes en Wi‑Fi public et comparaison de protocoles. Stream HD long ou usage mobile toute la journée demandent souvent Premium.' },
    ] },
  'vpn-for-ipad': { h1: 'VPN pour iPad — protection du Wi‑Fi et des données mobiles', lead: 'La même app FollowNet fonctionne sur iPad et iPhone avec les fonctions VPN d’iOS.', use: 'Adaptez protocole, DNS et connexion automatique aux voyages, au travail ou au domicile.', limits: 'L’interface et les widgets dépendent des versions actuelles d’iOS et de l’app.' },
  'ikev2-vpn-ios': { h1: 'IKEv2 VPN pour iOS — stable lors des changements de réseau', lead: 'IKEv2 est utile lorsque l’iPhone passe souvent du Wi‑Fi au réseau mobile et doit rétablir le tunnel.', use: 'Essayez-le en déplacement ou si WireGuard manque de stabilité chez votre opérateur.', limits: 'Aucun protocole n’est meilleur partout ; un test local reste plus fiable.' },
  'vpn-for-wifi': { h1: 'VPN pour le Wi‑Fi public sur iPhone', lead: 'FollowNet chiffre le trajet iPhone/iPad vers le serveur VPN dans les cafés, hôtels et aéroports — avec Free hebdomadaire ou Premium.', use: 'Validez d’abord le portail captif, puis connectez le VPN ; connexion automatique Wi‑Fi seul et Smart Connect aident sur les réseaux inconnus.', limits: 'Le VPN ne rend pas un hotspot suspect fiable et ne bloque pas le phishing. Emplacements dans l’app.', extra: [
      { title: 'Débit sur Wi‑Fi d’hôtel', body: 'Un peu de surcharge est normal. Speed Test et un emplacement proche listé dans l’app aident à rester réaliste.' },
      { title: 'Quota hebdomadaire en Wi‑Fi public', body: 'Sessions courtes et moyennes tiennent souvent dans Free. Streaming toute la journée demande souvent Premium.' },
    ] },
  'smart-connect-vpn': { h1: 'Smart Connect VPN — choix automatique du protocole', lead: 'Smart Connect choisit parmi WireGuard, IKEv2, AmneziaWG et Hysteria2 selon le réseau pour limiter les essais manuels.', use: 'Gardez l’automatique sur les réseaux inconnus ; fixez un protocole pour comparer et vérifiez le protocole actif après connexion.', limits: 'Plus de confort, sans garantie d’accès sur chaque réseau ou pays. Disponible avec Free hebdomadaire ou Premium.', extra: [
      { title: 'Smart Connect et connexion automatique', body: 'La connexion automatique décide quand démarrer le VPN ; Smart Connect choisit le protocole ensuite. Les deux aident en voyage.' },
      { title: 'Override manuel', body: 'Dans Réglages → Protocole vous pouvez verrouiller WireGuard ou une autre option si elle fonctionne déjà chez vous.' },
    ] },
  'amneziawg-vpn-ios': { h1: 'AmneziaWG pour iOS — option face aux réseaux filtrés', lead: 'Basé sur WireGuard, AmneziaWG modifie des signatures reconnaissables et peut aider face à certains filtres DPI.', use: 'Essayez-le si WireGuard échoue, puis comparez stabilité et débit.', limits: 'L’obfuscation ne contourne pas tous les blocages et peut réduire les performances.' },
  'no-logs-vpn': { h1: 'Confidentialité FollowNet — minimiser les données sans promesse absolue', lead: 'Lisez la Privacy Policy plutôt qu’un slogan « zéro logs » : compte et abonnement nécessitent des données techniques.', use: 'Avant de connecter, consultez la politique sur compte, abonnement, DNS, VPN, analytique et support sur follow-net.com/privacy.', limits: 'Nous n’affirmons pas ici d’audits no-logs non publiés. Connexion email et App Store exigent des métadonnées ; la politique publiée fait foi.', extra: [
      { title: 'Pourquoi pas de no-logs absolu', body: 'Un VPN avec compte ne peut pas fonctionner avec zéro donnée littérale. La politique décrit catégories, finalités et durées.' },
      { title: 'Free et Premium', body: 'La même Privacy Policy s’applique au Free hebdomadaire et à Premium. Limites et emplacements sont dans l’app.' },
    ] },
  'auto-connect-vpn-ios': { h1: 'Connexion VPN automatique sur iOS', lead: 'La connexion automatique lance FollowNet selon votre règle pour le Wi‑Fi, le mobile ou tout réseau.', use: 'Configurez la règle et testez-la chez vous avant d’en dépendre en voyage.', limits: 'iOS et les portails captifs peuvent encore imposer une action manuelle.' },
  'dns-vpn-ios': { h1: 'DNS personnalisé avec VPN sur iPhone', lead: 'Les profils DNS proposent des résolveurs comme Quad9, Cloudflare ou AdGuard avec FollowNet.', use: 'Choisissez selon votre priorité — filtrage, sécurité ou réactivité — puis testez vos sites essentiels.', limits: 'Changer de DNS ne remplace pas le chiffrement VPN et ne bloque pas toutes les publicités.' },
  'vpn-for-travel': { h1: 'VPN en voyage — hôtels, aéroports et SIM locales', lead: 'FollowNet protège les connexions sur des réseaux inconnus et propose plusieurs protocoles.', use: 'Installez et testez l’app avant le départ, avec un protocole alternatif prêt.', limits: 'L’utilisation dépend des lois et règles réseau locales.' },
  'best-vpn-iphone': { h1: 'Choisir un VPN pour iPhone sans superlatifs', lead: 'Évaluez Network Extension native, politique de confidentialité claire, protocoles, performances locales et Free hebdomadaire vs Premium honnêtes.', use: 'Testez FollowNet Free en Wi‑Fi et mobile avec Speed Test avant de prendre Premium.', limits: 'Il n’existe pas de meilleur VPN universel. Aucune garantie de déblocage streaming ni d’accès « partout dans le monde » ; emplacements dans l’app.', extra: [
      { title: 'Checklist sans slogans', body: 'App Store, Network Extension (pas navigateur seul), Privacy Policy, protocoles modernes, connexion automatique. Pas de compteurs de serveurs inventés.' },
      { title: 'Ce que propose FollowNet', body: 'Smart Connect, AmneziaWG, Hysteria2, DNS, Speed Test, widgets. Free avec quota hebdomadaire ; Premium optionnel via Apple.' },
    ] },
  'vpn-speed-test-ios': { h1: 'Test de vitesse VPN sur iPhone — mesurez sur votre réseau', lead: 'Le test intégré compare latence et téléchargement avant et après la connexion à plusieurs serveurs.', use: 'Mesurez sans VPN puis répétez dans les mêmes conditions avec des serveurs proches.', limits: 'Le test consomme des données et montre un instant, pas un débit garanti.' },
  'secure-vpn-iphone': { h1: 'Connexion plus sûre avec un VPN sur iPhone', lead: 'FollowNet associe protocoles modernes, connexion automatique et DNS sans remplacer la sécurité de l’appareil.', use: 'Mettez iOS à jour, protégez l’appareil et activez le VPN sur les réseaux non fiables.', limits: 'Le VPN chiffre le transport vers le serveur mais ne détecte pas tous les sites frauduleux.' },
  'hysteria2-vpn-ios': { h1: 'Hysteria2 VPN pour iOS sur les réseaux difficiles', lead: 'Hysteria2 offre un transport alternatif quand pertes ou filtres gênent les tunnels classiques.', use: 'Activez-le manuellement ou via Smart Connect et comparez avec WireGuard à conditions égales.', limits: 'Il ne garantit pas l’accès partout et n’est pas forcément plus rapide sur un bon réseau.' },
  'vpn-chrome-extension': { h1: 'Extension VPN FollowNet pour Chrome — trafic navigateur uniquement', lead: 'L’extension protège la navigation dans Chrome sur ordinateur avec votre compte FollowNet ; ce n’est pas un VPN système pour toutes les apps.', use: 'Connectez-vous avec le même code email que sur iOS, choisissez un emplacement de votre offre et utilisez l’app iOS pour le VPN de tout l’appareil.', limits: 'Le trafic hors navigateur pris en charge n’est pas couvert. Free a un quota hebdomadaire ; Premium le retire selon l’abonnement.', extra: [
      { title: 'Ce que couvre l’extension', body: 'Navigation Chrome/Chromium. Pas Slack, Zoom ni autres apps de bureau — sur téléphone, utilisez FollowNet iOS.' },
      { title: 'Quota hebdomadaire sur bureau', body: 'Free permet d’évaluer avant de payer. Aucune offre ne transforme l’extension en VPN système macOS/Windows.' },
    ] },
  'vpn-widgets-ios': { h1: 'Widgets VPN pour iOS — état visible en un coup d’œil', lead: 'Les widgets FollowNet affichent l’état du VPN sans ouvrir toute l’application.', use: 'Placez le widget bien en vue et associez-le à la connexion automatique.', limits: 'Les actions disponibles dépendent d’iOS ; l’app reste parfois nécessaire.' },
  'how-to-setup-vpn-iphone': { h1: 'Configurer un VPN sur iPhone avec FollowNet', lead: 'Installez FollowNet depuis l’App Store, connectez-vous par code email, autorisez une fois la configuration VPN système et connectez — Free hebdomadaire est déjà disponible.', use: 'Ensuite testez Smart Connect, connexion automatique, DNS et Speed Test sur votre réseau habituel ; choisissez les emplacements listés dans l’app.', limits: 'La demande iOS est une exigence normale de Network Extension, pas un profil sideload. Aucune garantie de déblocage streaming.', extra: [
      { title: 'Si la connexion échoue', body: 'Vérifiez l’autorisation VPN, essayez Smart Connect ou un autre protocole/emplacement de l’app ; validez d’abord le portail captif.' },
      { title: 'Quota hebdomadaire après installation', body: 'Pas de carte requise. Si Free ne suffit pas — Premium via l’App Store pour l’illimité et les emplacements du tarif dans l’app.' },
    ] },
  'vpn-for-streaming-iphone': { h1: 'VPN pour le streaming sur iPhone — débit sans garantie de déblocage', lead: 'FollowNet chiffre la connexion et propose des emplacements ; la plateforme décide de l’accès au catalogue.', use: 'Choisissez un serveur proche et mesurez le débit avant une longue session vidéo.', limits: 'Aucun serveur ne garantit le déblocage de toutes les plateformes ou médiathèques.' },
  'vpn-for-gaming-iphone': { h1: 'VPN pour jouer sur iPhone — mesurez d’abord la latence', lead: 'Un VPN aide sur un réseau inconnu, mais le détour peut aussi augmenter le ping.', use: 'Commencez par WireGuard et un serveur proche ; en cas de filtre, essayez Smart Connect.', limits: 'FollowNet ne garantit pas un ping plus bas ; sans bon routage, jouez sans VPN sur un réseau fiable.' },
};

const PT: Record<LandingSlug, LandingSeed> = {
  'vpn-for-iphone': { h1: 'VPN para iPhone — conexão privada e simples', lead: 'O FollowNet protege o tráfego do iPhone e iPad em um túnel VPN com vários protocolos disponíveis.', use: 'Comece com o Smart Connect e compare servidores próximos no Wi‑Fi e na rede móvel que você usa.', limits: 'VPN não substitui atualizações do iOS, senha forte nem cuidado com phishing.' },
  'wireguard-vpn-ios': { h1: 'WireGuard VPN para iOS — moderno e leve', lead: 'O WireGuard no FollowNet usa Network Extension no iPhone e iPad e costuma oferecer baixa latência em redes tranquilas.', use: 'Escolha WireGuard em Ajustes → Protocolo ou deixe o Smart Connect; compare com Speed Test no mesmo Wi‑Fi ou dados.', limits: 'Algumas redes filtram WireGuard: use AmneziaWG, IKEv2 ou Hysteria2. Locais sem números inventados estão no app. Free tem limite semanal.', extra: [
      { title: 'Quando o WireGuard é bloqueado', body: 'Ative o Smart Connect ou mude manualmente para AmneziaWG, IKEv2 ou Hysteria2 e meça de novo.' },
      { title: 'Free e Premium', body: 'WireGuard funciona no Free semanal. Premium remove o limite e abre locais Premium indicados no app.' },
    ] },
  'free-vpn-iphone': { h1: 'VPN grátis para iPhone com limite semanal', lead: 'O FollowNet Free oferece limite semanal de dados sem cartão para testar o VPN no iPhone antes do Premium.', use: 'Instale o app, entre com o código de email, permita a configuração VPN do iOS e teste Wi‑Fi e dados dentro do limite semanal.', limits: 'O Free é semanal, não diário; locais Free e o volume exato aparecem no app. O Premium remove o limite conforme a assinatura.', extra: [
      { title: 'Free vs Premium', body: 'Free serve para avaliar: tráfego semanal e locais Free do app. Premium traz tráfego ilimitado e locais Premium do plano atual — não uma criptografia «mais forte».' },
      { title: 'Quando o Free basta', body: 'Sessões curtas em Wi‑Fi público e comparação de protocolos. Streaming HD longo ou uso móvel o dia todo costuma exigir Premium.' },
    ] },
  'vpn-for-ipad': { h1: 'VPN para iPad — proteção no Wi‑Fi e nos dados móveis', lead: 'O mesmo app FollowNet funciona no iPad e iPhone usando os recursos VPN do iOS.', use: 'Ajuste protocolo, DNS e conexão automática para viagem, trabalho ou casa.', limits: 'Interface e widgets dependem das versões atuais do iOS e do app.' },
  'ikev2-vpn-ios': { h1: 'IKEv2 VPN para iOS — estabilidade ao trocar de rede', lead: 'O IKEv2 ajuda quando o iPhone alterna entre Wi‑Fi e rede móvel e precisa retomar o túnel rapidamente.', use: 'Teste em deslocamentos ou quando o WireGuard estiver instável na sua operadora.', limits: 'Nenhum protocolo é melhor em toda rede; compare nas suas condições.' },
  'vpn-for-wifi': { h1: 'VPN para Wi‑Fi público no iPhone', lead: 'O FollowNet criptografa o trajeto do iPhone/iPad ao servidor VPN em cafés, hotéis e aeroportos — com Free semanal ou Premium.', use: 'Conclua primeiro o portal cativo e depois conecte a VPN; conexão automática só Wi‑Fi e Smart Connect ajudam em redes novas.', limits: 'VPN não torna um hotspot suspeito confiável nem impede phishing. Locais estão no app.', extra: [
      { title: 'Velocidade no Wi‑Fi de hotel', body: 'Algum overhead é normal. Speed Test e um local próximo listado no app ajudam a manter expectativas realistas.' },
      { title: 'Limite semanal em Wi‑Fi público', body: 'Sessões curtas e médias costumam caber no Free. Streaming o dia todo geralmente precisa de Premium.' },
    ] },
  'smart-connect-vpn': { h1: 'Smart Connect VPN — escolha automática de protocolo', lead: 'O Smart Connect escolhe entre WireGuard, IKEv2, AmneziaWG e Hysteria2 conforme a rede para reduzir tentativas manuais.', use: 'Deixe o automático em redes desconhecidas; fixe um protocolo para comparar e veja o ativo após conectar.', limits: 'Mais comodidade, sem garantia de acesso em toda rede ou país. Disponível no Free semanal ou Premium.', extra: [
      { title: 'Smart Connect e conexão automática', body: 'A conexão automática decide quando iniciar a VPN; o Smart Connect escolhe o protocolo depois. Os dois ajudam em viagem.' },
      { title: 'Override manual', body: 'Em Ajustes → Protocolo você pode fixar WireGuard ou outra opção se já funciona em casa.' },
    ] },
  'amneziawg-vpn-ios': { h1: 'AmneziaWG para iOS — opção em redes filtradas', lead: 'Baseado em WireGuard, o AmneziaWG altera padrões reconhecíveis e pode ajudar diante de certos filtros DPI.', use: 'Teste quando o WireGuard não conectar e compare estabilidade e velocidade.', limits: 'A ofuscação não supera todo bloqueio e pode afetar o desempenho.' },
  'no-logs-vpn': { h1: 'Privacidade no FollowNet — minimização sem promessa absoluta', lead: 'Leia a Privacy Policy em vez de acreditar em slogan de «zero logs»: conta e assinatura exigem dados técnicos.', use: 'Antes de conectar, confira a política sobre conta, assinatura, DNS, VPN, análise e suporte em follow-net.com/privacy.', limits: 'Não afirmamos aqui auditorias no-logs não publicadas. Login por email e App Store precisam de metadados; vale a política publicada.', extra: [
      { title: 'Por que não «no-logs absoluto»', body: 'Uma VPN com conta não opera com zero dados literais. A política descreve categorias, finalidades e retenção.' },
      { title: 'Free e Premium', body: 'A mesma Privacy Policy vale para Free semanal e Premium. Limites e locais estão no app.' },
    ] },
  'auto-connect-vpn-ios': { h1: 'Conexão VPN automática no iOS', lead: 'A conexão automática inicia o FollowNet conforme sua regra para Wi‑Fi, rede móvel ou qualquer rede.', use: 'Configure e teste a regra em casa antes de depender dela durante uma viagem.', limits: 'O iOS e portais de acesso ainda podem exigir uma ação manual.' },
  'dns-vpn-ios': { h1: 'DNS personalizado com VPN no iPhone', lead: 'Perfis DNS permitem usar resolvedores como Quad9, Cloudflare ou AdGuard com o FollowNet.', use: 'Escolha por filtragem, segurança ou resposta e teste os sites importantes.', limits: 'Trocar o DNS não substitui a criptografia VPN nem bloqueia todo anúncio ou ameaça.' },
  'vpn-for-travel': { h1: 'VPN em viagens — hotéis, aeroportos e chips locais', lead: 'O FollowNet protege conexões em redes desconhecidas e oferece protocolos para condições diferentes.', use: 'Instale e teste antes da viagem e deixe um protocolo alternativo preparado.', limits: 'O uso depende das leis e regras de rede locais.' },
  'best-vpn-iphone': { h1: 'Como escolher VPN para iPhone sem exageros', lead: 'Avalie Network Extension nativo, Privacy Policy clara, protocolos, desempenho local e Free semanal vs Premium honestos.', use: 'Teste o FollowNet Free no Wi‑Fi e na rede móvel com Speed Test antes do Premium.', limits: 'Não existe a melhor VPN para todos. Sem garantia de desbloquear streaming nem acesso «em todo o mundo»; locais no app.', extra: [
      { title: 'Checklist sem slogans', body: 'App Store, Network Extension (não só navegador), Privacy Policy, protocolos modernos, conexão automática. Sem contagens inventadas de servidores.' },
      { title: 'O que o FollowNet oferece', body: 'Smart Connect, AmneziaWG, Hysteria2, DNS, Speed Test, widgets. Free com limite semanal; Premium opcional via Apple.' },
    ] },
  'vpn-speed-test-ios': { h1: 'Teste de velocidade VPN no iPhone — meça na sua rede', lead: 'O teste integrado compara latência e download antes e depois da conexão com vários servidores.', use: 'Meça sem VPN e repita nas mesmas condições com servidores próximos.', limits: 'O teste consome dados e mostra um momento, não uma velocidade garantida.' },
  'secure-vpn-iphone': { h1: 'Conexão mais segura com VPN no iPhone', lead: 'O FollowNet combina protocolos modernos, conexão automática e DNS sem substituir a segurança do aparelho.', use: 'Atualize o iOS, proteja o aparelho e ative a VPN em redes não confiáveis.', limits: 'A VPN criptografa o transporte ao servidor, mas não detecta todo site fraudulento.' },
  'hysteria2-vpn-ios': { h1: 'Hysteria2 VPN para iOS em redes difíceis', lead: 'O Hysteria2 oferece transporte alternativo quando perdas ou filtros prejudicam túneis clássicos.', use: 'Ative manualmente ou pelo Smart Connect e compare com WireGuard nas mesmas condições.', limits: 'Não garante acesso em todo lugar nem será sempre mais rápido em redes estáveis.' },
  'vpn-chrome-extension': { h1: 'Extensão VPN FollowNet para Chrome — só tráfego do navegador', lead: 'A extensão protege a navegação no Chrome no computador com sua conta FollowNet; não é VPN de sistema para todos os apps.', use: 'Entre com o mesmo código de email do iOS, escolha um local do seu plano e use o app iOS para VPN de todo o aparelho.', limits: 'Tráfego fora do navegador compatível não é coberto. Free tem limite semanal; Premium remove conforme a assinatura.', extra: [
      { title: 'O que a extensão cobre', body: 'Navegação no Chrome/Chromium. Apps de desktop como Slack ou Zoom não — no telefone use o FollowNet iOS.' },
      { title: 'Limite semanal no desktop', body: 'Free permite avaliar antes de pagar. Nenhum plano transforma a extensão em VPN de sistema macOS/Windows.' },
    ] },
  'vpn-widgets-ios': { h1: 'Widgets VPN para iOS — status visível', lead: 'Os widgets FollowNet mostram o estado da VPN sem abrir o aplicativo inteiro.', use: 'Coloque o widget em área visível e combine com a conexão automática.', limits: 'As ações dependem do iOS; às vezes ainda será preciso abrir o app.' },
  'how-to-setup-vpn-iphone': { h1: 'Como configurar VPN no iPhone com FollowNet', lead: 'Instale o FollowNet na App Store, entre com o código de email, permita uma vez a configuração VPN do sistema e conecte — o Free semanal já está disponível.', use: 'Depois teste Smart Connect, conexão automática, DNS e Speed Test na rede habitual; escolha locais da lista do app.', limits: 'O aviso do iOS é exigência normal de Network Extension, não perfil sideload. Desbloqueio de streaming não é garantido.', extra: [
      { title: 'Se não conectar', body: 'Verifique a permissão VPN, tente Smart Connect ou outro protocolo/local do app; conclua primeiro o portal cativo do hotel.' },
      { title: 'Limite semanal após o setup', body: 'Não precisa de cartão. Se o Free não bastar — Premium na App Store para ilimitado e locais do plano no app.' },
    ] },
  'vpn-for-streaming-iphone': { h1: 'VPN para streaming no iPhone — velocidade sem promessa de desbloqueio', lead: 'O FollowNet criptografa a conexão e oferece locais; a plataforma decide o acesso ao catálogo.', use: 'Escolha um servidor próximo e meça a velocidade antes de uma sessão longa.', limits: 'Nenhum servidor garante desbloquear todas as plataformas, regiões ou bibliotecas.' },
  'vpn-for-gaming-iphone': { h1: 'VPN para jogos no iPhone — meça a latência', lead: 'Uma VPN ajuda em redes desconhecidas, mas a rota extra também pode aumentar o ping.', use: 'Comece com WireGuard e servidor próximo; se houver filtro, teste o Smart Connect.', limits: 'O FollowNet não garante ping menor; se a rota piorar, jogue sem VPN em uma rede confiável.' },
};

const SEEDS: Record<LocalizedLang, Record<LandingSlug, LandingSeed>> = {
  uk: UK,
  de: DE,
  es: ES,
  fr: FR,
  pt: PT,
};

export function localizedLandingContent(slug: LandingSlug, lang: LocalizedLang): LandingContent {
  const seed = SEEDS[lang][slug];
  const ui = UI[lang];
  const extras = seed.extra ?? [];
  return {
    h1: seed.h1,
    lead: seed.lead,
    sections: [
      { title: ui.details, body: seed.lead },
      { title: ui.practical, body: seed.use },
      { title: ui.limitsTitle, body: seed.limits },
      ...extras,
    ],
    bullets: [
      seed.use,
      seed.limits,
      ui.weekly,
      ui.currentPlan,
      ...(extras[0] ? [extras[0].title] : []),
    ].slice(0, 5),
    cta: slug === 'vpn-chrome-extension' ? ui.chromeCta : ui.cta,
    faq: [
      { q: ui.qOverview, a: seed.lead },
      { q: ui.qUse, a: seed.use },
      { q: ui.qLimits, a: seed.limits },
      { q: ui.qWeekly, a: `${ui.weekly}. ${ui.currentPlan}` },
    ],
  };
}
