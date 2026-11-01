import { AppLang } from './i18n.service';
import type { ProductPage } from './product-pages.content';
import type { SeoCopy } from './seo-copy';

/** FollowNet Pulse — menu bar system monitor for macOS (Mac App Store). */
export const PULSE_APP_STORE_URL = 'https://apps.apple.com/app/follownet-pulse/id6822468257';
/**
 * Flip to true once Pulse is live on the Mac App Store. Until then it stays out of the menus,
 * footer and sitemap and is noindex; the pages stay reachable by URL (App Review needs /pulse/privacy).
 */
export const PULSE_PUBLIC = false;
export const PULSE_PRICE = { yearly: '$4.99', lifetime: '$14.99' } as const;

export type PulseFeatureIcon = 'menubar' | 'cpu' | 'memory' | 'network' | 'battery' | 'palette';

export type PulseContent = {
  kicker: string;
  h1: string;
  h1Accent: string;
  lead: string;
  storeTop: string;
  meta: string[];
  privacyNote: string;
  featuresKicker: string;
  featuresTitle: string;
  featuresSub: string;
  features: { icon: PulseFeatureIcon; title: string; text: string }[];
  shotsKicker: string;
  shotsTitle: string;
  shots: { title: string; text: string }[];
  plansKicker: string;
  plansTitle: string;
  plansSub: string;
  freeName: string;
  freePrice: string;
  freeTagline: string;
  freeItems: string[];
  proName: string;
  proTagline: string;
  proItems: string[];
  perYear: string;
  trial: string;
  lifetimeName: string;
  once: string;
  lifetimeTagline: string;
  lifetimeItems: string[];
  lifetimeCta: string;
  bestValue: string;
  priceNote: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  privacyLink: string;
  supportLink: string;
};

const EN: PulseContent = {
  kicker: 'New from FollowNet · for Mac',
  h1: 'FollowNet',
  h1Accent: 'Pulse',
  lead: 'A clean system monitor for your menu bar. CPU, GPU, memory, disk, network, temperature and battery — live, at a glance, without opening Activity Monitor.',
  storeTop: 'Download on the',
  meta: ['Free download', 'macOS 14+', 'Apple silicon & Intel'],
  privacyNote: 'No account. No tracking. Everything stays on your Mac.',
  featuresKicker: 'What it shows',
  featuresTitle: 'Everything your Mac is doing, in one glance',
  featuresSub: 'Pulse lives in the menu bar and opens a compact dashboard with a click.',
  features: [
    { icon: 'menubar', title: 'Live menu bar', text: 'CPU, GPU, RAM, SSD, network speed, temperature and battery right next to the clock — pick what you want to see.' },
    { icon: 'cpu', title: 'Every core, every degree', text: 'Efficiency and performance cores, CPU and SSD temperatures, fan speeds and the processes that load your Mac.' },
    { icon: 'memory', title: 'Memory and disk', text: 'Memory pressure, swap, compressed memory, free space and the apps that use the most.' },
    { icon: 'network', title: 'Network and connection', text: 'Upload and download speed, public IP, country, provider, latency and jitter — handy with or without a VPN.' },
    { icon: 'battery', title: 'Battery health', text: 'Charge, time remaining, cycle count, capacity versus new, and adapter power.' },
    { icon: 'palette', title: 'Made to fit your Mac', text: 'Light and dark themes, color palettes, three window sizes and a menu bar that never jumps around.' },
  ],
  shotsKicker: 'Screenshots',
  shotsTitle: 'See it in action',
  shots: [
    { title: "Your Mac at a glance", text: "CPU, GPU, memory, disk, network and battery — live in your menu bar." },
    { title: "Every core, every degree", text: "Efficiency and performance cores, temperature, fans and top processes." },
    { title: "Know where memory goes", text: "Memory pressure, swap and the apps that use the most." },
    { title: "Network and connection check", text: "Speed, public IP, latency and VPN status in one place." },
    { title: "Make it yours", text: "Light and dark themes, color palettes and a flexible menu bar." },
  ],
  plansKicker: 'Pricing',
  plansTitle: 'Free to use. Pro when you want more.',
  plansSub: 'The dashboard and the core menu bar metrics are free forever. Pro unlocks the detailed screens and full customization.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Everything you need every day',
  freeItems: [
    'Live dashboard: CPU, GPU, RAM, SSD, network, battery',
    'Top processes',
    'Core metrics in the menu bar',
    'Battery details',
    'Light and dark theme',
  ],
  proName: 'Pro',
  proTagline: 'For people who like to know everything',
  proItems: [
    'Detailed CPU, memory, disk and network screens',
    'Fan speeds and temperatures',
    'Any metric and format in the menu bar',
    'All themes, palettes and custom colors',
    'Connection and IP leak check',
  ],
  perYear: '/ year',
  trial: '7-day free trial',
  lifetimeName: "Pro Forever",
  once: "once",
  lifetimeTagline: "Pay once, keep Pro for good",
  lifetimeItems: ["Everything in Pro", "No subscription, no renewals", "Works on all your Macs with one Apple ID"],
  lifetimeCta: "Buy once",
  bestValue: "Best value",
  priceNote: 'US prices. The App Store shows the price for your country.',
  faqTitle: 'Questions',
  faq: [
    { q: 'Is FollowNet Pulse free?', a: 'Yes. The dashboard, top processes, battery details and the core menu bar metrics are free with no time limit. Pro is optional: a yearly subscription with a 7-day free trial, or a one-time lifetime purchase.' },
    { q: 'Which Macs are supported?', a: 'Any Mac with macOS 14 Sonoma or later, on Apple silicon (M1–M4 and newer) or Intel.' },
    { q: 'Does Pulse collect my data?', a: 'No. There is no account, no analytics and no tracking. All readings stay on your Mac. The only network request is to ipinfo.io when you open the Network screen, to show your public IP and provider.' },
    { q: 'Can Pulse change fan speed?', a: 'No. Pulse only reads sensors — temperatures and fan speeds. It never writes to the hardware, so it is safe to leave running all day.' },
    { q: 'How much does it slow my Mac down?', a: 'Barely at all. Pulse is a native Swift app; by default it refreshes once per second and you can make it update less often in Settings.' },
    { q: 'How do I restore Pro on another Mac?', a: 'Sign in with the same Apple ID, open Settings → Pro and tap “Restore purchases”. A lifetime purchase works on all your Macs.' },
  ],
  privacyLink: 'Privacy policy',
  supportLink: 'Support',
};

const RU: PulseContent = {
  kicker: 'Новинка от FollowNet · для Mac',
  h1: 'FollowNet',
  h1Accent: 'Pulse',
  lead: 'Аккуратный монитор системы в строке меню. Процессор, графика, память, диск, сеть, температура и аккумулятор — вживую и с одного взгляда, без «Мониторинга системы».',
  storeTop: 'Загрузите в',
  meta: ['Бесплатно', 'macOS 14+', 'Apple silicon и Intel'],
  privacyNote: 'Без аккаунта. Без слежки. Все данные остаются на вашем Mac.',
  featuresKicker: 'Что показывает',
  featuresTitle: 'Всё, чем занят ваш Mac, — с одного взгляда',
  featuresSub: 'Pulse живёт в строке меню и по клику открывает компактную панель.',
  features: [
    { icon: 'menubar', title: 'Живая строка меню', text: 'CPU, GPU, RAM, SSD, скорость сети, температура и заряд рядом с часами — показывайте только то, что нужно.' },
    { icon: 'cpu', title: 'Каждое ядро и каждый градус', text: 'Энергоэффективные и производительные ядра, температура процессора и SSD, обороты вентиляторов и процессы, которые грузят Mac.' },
    { icon: 'memory', title: 'Память и диск', text: 'Давление памяти, swap, сжатая память, свободное место и приложения, которые занимают больше всего.' },
    { icon: 'network', title: 'Сеть и соединение', text: 'Скорость загрузки и отдачи, публичный IP, страна, провайдер, задержка и джиттер — удобно и с VPN, и без него.' },
    { icon: 'battery', title: 'Здоровье аккумулятора', text: 'Заряд, оставшееся время, циклы зарядки, ёмкость по сравнению с новым и мощность адаптера.' },
    { icon: 'palette', title: 'Под ваш Mac', text: 'Светлая и тёмная тема, палитры, три размера окна и строка меню, которая не прыгает.' },
  ],
  shotsKicker: 'Скриншоты',
  shotsTitle: 'Как это выглядит',
  shots: [
    { title: "Весь Mac на ладони", text: "Процессор, графика, память, диск, сеть и аккумулятор — прямо в строке меню." },
    { title: "Каждое ядро и каждый градус", text: "Энергоэффективные и производительные ядра, температура, вентиляторы и топ процессов." },
    { title: "Куда уходит память", text: "Давление памяти, swap и приложения, которые занимают больше всего." },
    { title: "Сеть и проверка соединения", text: "Скорость, публичный IP, задержка и статус VPN в одном месте." },
    { title: "Всё под вас", text: "Светлая и тёмная тема, палитры и гибкая строка меню." },
  ],
  plansKicker: 'Цены',
  plansTitle: 'Пользуйтесь бесплатно. Pro — когда захочется большего.',
  plansSub: 'Панель и основные метрики в строке меню бесплатны навсегда. Pro открывает подробные экраны и полную настройку.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Всё нужное на каждый день',
  freeItems: [
    'Живая панель: CPU, GPU, RAM, SSD, сеть, аккумулятор',
    'Топ процессов',
    'Основные метрики в строке меню',
    'Подробности об аккумуляторе',
    'Светлая и тёмная тема',
  ],
  proName: 'Pro',
  proTagline: 'Для тех, кто любит знать всё',
  proItems: [
    'Подробные экраны CPU, памяти, диска и сети',
    'Обороты вентиляторов и температура',
    'Любые метрики и форматы в строке меню',
    'Все темы, палитры и свои цвета',
    'Проверка соединения и утечек IP',
  ],
  perYear: '/ год',
  trial: '7 дней бесплатно',
  lifetimeName: "Pro навсегда",
  once: "один раз",
  lifetimeTagline: "Заплатите один раз — Pro останется с вами",
  lifetimeItems: ["Всё, что есть в Pro", "Без подписки и продлений", "На всех ваших Mac с одним Apple ID"],
  lifetimeCta: "Купить навсегда",
  bestValue: "Выгодно",
  priceNote: 'Цены для США. В App Store вы увидите цену для своей страны.',
  faqTitle: 'Вопросы',
  faq: [
    { q: 'FollowNet Pulse бесплатный?', a: 'Да. Панель, топ процессов, подробности об аккумуляторе и основные метрики в строке меню бесплатны без ограничения по времени. Pro — по желанию: годовая подписка с 7 бесплатными днями или разовая покупка навсегда.' },
    { q: 'Какие Mac поддерживаются?', a: 'Любой Mac с macOS 14 Sonoma и новее — на Apple silicon (M1–M4 и новее) или Intel.' },
    { q: 'Pulse собирает мои данные?', a: 'Нет. Нет аккаунта, аналитики и слежки. Все показания остаются на вашем Mac. Единственный сетевой запрос — к ipinfo.io, когда вы открываете экран «Сеть», чтобы показать публичный IP и провайдера.' },
    { q: 'Pulse умеет менять скорость вентиляторов?', a: 'Нет. Pulse только читает датчики — температуру и обороты. Он ничего не записывает в железо, поэтому его безопасно держать включённым весь день.' },
    { q: 'Насколько он нагружает Mac?', a: 'Почти никак. Pulse — нативное приложение на Swift; по умолчанию обновляется раз в секунду, а в настройках можно сделать реже.' },
    { q: 'Как восстановить Pro на другом Mac?', a: 'Войдите с тем же Apple ID, откройте Настройки → Pro и нажмите «Восстановить покупки». Покупка навсегда работает на всех ваших Mac.' },
  ],
  privacyLink: 'Политика конфиденциальности',
  supportLink: 'Поддержка',
};

const UK: PulseContent = {
  kicker: 'Новинка від FollowNet · для Mac',
  h1: 'FollowNet',
  h1Accent: 'Pulse',
  lead: 'Охайний монітор системи в рядку меню. Процесор, графіка, пам’ять, диск, мережа, температура й акумулятор — наживо й з одного погляду, без «Моніторингу системи».',
  storeTop: 'Завантажте в',
  meta: ['Безкоштовно', 'macOS 14+', 'Apple silicon та Intel'],
  privacyNote: 'Без акаунта. Без стеження. Усі дані залишаються на вашому Mac.',
  featuresKicker: 'Що показує',
  featuresTitle: 'Усе, чим зайнятий ваш Mac, — з одного погляду',
  featuresSub: 'Pulse живе в рядку меню й за кліком відкриває компактну панель.',
  features: [
    { icon: 'menubar', title: 'Живий рядок меню', text: 'CPU, GPU, RAM, SSD, швидкість мережі, температура й заряд поруч із годинником — показуйте лише те, що потрібно.' },
    { icon: 'cpu', title: 'Кожне ядро й кожен градус', text: 'Енергоефективні та продуктивні ядра, температура процесора й SSD, оберти вентиляторів і процеси, що навантажують Mac.' },
    { icon: 'memory', title: 'Пам’ять і диск', text: 'Тиск пам’яті, swap, стиснена пам’ять, вільне місце й програми, які займають найбільше.' },
    { icon: 'network', title: 'Мережа й з’єднання', text: 'Швидкість завантаження й віддачі, публічний IP, країна, провайдер, затримка й джитер — зручно і з VPN, і без нього.' },
    { icon: 'battery', title: 'Здоров’я акумулятора', text: 'Заряд, час, що залишився, цикли заряджання, ємність порівняно з новим і потужність адаптера.' },
    { icon: 'palette', title: 'Під ваш Mac', text: 'Світла й темна тема, палітри, три розміри вікна й рядок меню, який не стрибає.' },
  ],
  shotsKicker: 'Скриншоти',
  shotsTitle: 'Як це виглядає',
  shots: [
    { title: "Весь Mac на долоні", text: "Процесор, графіка, пам’ять, диск, мережа й акумулятор — просто в рядку меню." },
    { title: "Кожне ядро й кожен градус", text: "Енергоефективні та продуктивні ядра, температура, вентилятори й топ процесів." },
    { title: "Куди йде пам’ять", text: "Тиск пам’яті, swap і програми, які займають найбільше." },
    { title: "Мережа й перевірка з’єднання", text: "Швидкість, публічний IP, затримка та статус VPN в одному місці." },
    { title: "Усе під вас", text: "Світла й темна тема, палітри та гнучкий рядок меню." },
  ],
  plansKicker: 'Ціни',
  plansTitle: 'Користуйтеся безкоштовно. Pro — коли захочеться більшого.',
  plansSub: 'Панель і основні метрики в рядку меню безкоштовні назавжди. Pro відкриває детальні екрани й повне налаштування.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Усе потрібне на щодень',
  freeItems: [
    'Жива панель: CPU, GPU, RAM, SSD, мережа, акумулятор',
    'Топ процесів',
    'Основні метрики в рядку меню',
    'Подробиці про акумулятор',
    'Світла й темна тема',
  ],
  proName: 'Pro',
  proTagline: 'Для тих, хто любить знати все',
  proItems: [
    'Детальні екрани CPU, пам’яті, диска й мережі',
    'Оберти вентиляторів і температура',
    'Будь-які метрики й формати в рядку меню',
    'Усі теми, палітри й власні кольори',
    'Перевірка з’єднання та витоків IP',
  ],
  perYear: '/ рік',
  trial: '7 днів безкоштовно',
  lifetimeName: "Pro назавжди",
  once: "один раз",
  lifetimeTagline: "Заплатіть один раз — Pro залишиться з вами",
  lifetimeItems: ["Усе, що є в Pro", "Без підписки й продовжень", "На всіх ваших Mac з одним Apple ID"],
  lifetimeCta: "Купити назавжди",
  bestValue: "Вигідно",
  priceNote: 'Ціни для США. В App Store ви побачите ціну для своєї країни.',
  faqTitle: 'Запитання',
  faq: [
    { q: 'FollowNet Pulse безкоштовний?', a: 'Так. Панель, топ процесів, подробиці про акумулятор і основні метрики в рядку меню безкоштовні без обмеження в часі. Pro — за бажанням: річна підписка із 7 безкоштовними днями або разова покупка назавжди.' },
    { q: 'Які Mac підтримуються?', a: 'Будь-який Mac з macOS 14 Sonoma і новіше — на Apple silicon (M1–M4 і новіші) або Intel.' },
    { q: 'Pulse збирає мої дані?', a: 'Ні. Немає акаунта, аналітики й стеження. Усі показники залишаються на вашому Mac. Єдиний мережевий запит — до ipinfo.io, коли ви відкриваєте екран «Мережа», щоб показати публічний IP і провайдера.' },
    { q: 'Pulse вміє змінювати швидкість вентиляторів?', a: 'Ні. Pulse лише читає датчики — температуру й оберти. Він нічого не записує в залізо, тож його безпечно тримати ввімкненим увесь день.' },
    { q: 'Наскільки він навантажує Mac?', a: 'Майже ніяк. Pulse — нативна програма на Swift; за замовчуванням оновлюється раз на секунду, а в налаштуваннях можна зробити рідше.' },
    { q: 'Як відновити Pro на іншому Mac?', a: 'Увійдіть із тим самим Apple ID, відкрийте Налаштування → Pro й натисніть «Відновити покупки». Покупка назавжди працює на всіх ваших Mac.' },
  ],
  privacyLink: 'Політика конфіденційності',
  supportLink: 'Підтримка',
};

const DE: PulseContent = {
  kicker: 'Neu von FollowNet · für Mac',
  h1: 'FollowNet',
  h1Accent: 'Pulse',
  lead: 'Ein aufgeräumter Systemmonitor für die Menüleiste. CPU, GPU, Speicher, Festplatte, Netzwerk, Temperatur und Akku – live und auf einen Blick, ohne die Aktivitätsanzeige zu öffnen.',
  storeTop: 'Laden im',
  meta: ['Kostenlos', 'macOS 14+', 'Apple silicon & Intel'],
  privacyNote: 'Kein Konto. Kein Tracking. Alles bleibt auf deinem Mac.',
  featuresKicker: 'Was es zeigt',
  featuresTitle: 'Alles, was dein Mac gerade tut – auf einen Blick',
  featuresSub: 'Pulse sitzt in der Menüleiste und öffnet per Klick ein kompaktes Dashboard.',
  features: [
    { icon: 'menubar', title: 'Live-Menüleiste', text: 'CPU, GPU, RAM, SSD, Netzwerktempo, Temperatur und Akku direkt neben der Uhr – zeig nur, was du brauchst.' },
    { icon: 'cpu', title: 'Jeder Kern, jedes Grad', text: 'Effizienz- und Leistungskerne, CPU- und SSD-Temperatur, Lüfterdrehzahl und die Prozesse, die deinen Mac auslasten.' },
    { icon: 'memory', title: 'Speicher und Festplatte', text: 'Speicherdruck, Swap, komprimierter Speicher, freier Platz und die Apps, die am meisten belegen.' },
    { icon: 'network', title: 'Netzwerk und Verbindung', text: 'Up- und Download-Tempo, öffentliche IP, Land, Anbieter, Latenz und Jitter – praktisch mit oder ohne VPN.' },
    { icon: 'battery', title: 'Akkuzustand', text: 'Ladung, Restlaufzeit, Ladezyklen, Kapazität im Vergleich zu neu und Netzteilleistung.' },
    { icon: 'palette', title: 'Passt zu deinem Mac', text: 'Helles und dunkles Design, Farbpaletten, drei Fenstergrößen und eine Menüleiste, die nicht springt.' },
  ],
  shotsKicker: 'Screenshots',
  shotsTitle: 'So sieht es aus',
  shots: [
    { title: "Dein Mac auf einen Blick", text: "CPU, GPU, Speicher, Festplatte, Netzwerk und Akku – live in der Menüleiste." },
    { title: "Jeder Kern, jedes Grad", text: "Effizienz- und Leistungskerne, Temperatur, Lüfter und Top-Prozesse." },
    { title: "Wohin der Speicher geht", text: "Speicherdruck, Swap und die Apps, die am meisten belegen." },
    { title: "Netzwerk & Verbindungstest", text: "Geschwindigkeit, öffentliche IP, Latenz und VPN-Status an einem Ort." },
    { title: "Ganz nach deinem Stil", text: "Helle und dunkle Themen, Farbpaletten und eine flexible Menüleiste." },
  ],
  plansKicker: 'Preise',
  plansTitle: 'Kostenlos nutzen. Pro, wenn du mehr willst.',
  plansSub: 'Dashboard und die wichtigsten Menüleisten-Werte sind dauerhaft kostenlos. Pro schaltet die Detailansichten und alle Anpassungen frei.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Alles für jeden Tag',
  freeItems: [
    'Live-Dashboard: CPU, GPU, RAM, SSD, Netzwerk, Akku',
    'Top-Prozesse',
    'Wichtigste Werte in der Menüleiste',
    'Akku-Details',
    'Helles und dunkles Design',
  ],
  proName: 'Pro',
  proTagline: 'Für alle, die alles wissen wollen',
  proItems: [
    'Detailansichten für CPU, Speicher, Festplatte und Netzwerk',
    'Lüfterdrehzahl und Temperaturen',
    'Jeder Wert und jedes Format in der Menüleiste',
    'Alle Designs, Paletten und eigene Farben',
    'Verbindungs- und IP-Leck-Test',
  ],
  perYear: '/ Jahr',
  trial: '7 Tage kostenlos',
  lifetimeName: "Pro für immer",
  once: "einmalig",
  lifetimeTagline: "Einmal zahlen, Pro für immer behalten",
  lifetimeItems: ["Alles aus Pro", "Kein Abo, keine Verlängerung", "Auf all deinen Macs mit einer Apple-ID"],
  lifetimeCta: "Einmal kaufen",
  bestValue: "Bester Preis",
  priceNote: 'US-Preise. Im App Store siehst du den Preis für dein Land.',
  faqTitle: 'Fragen',
  faq: [
    { q: 'Ist FollowNet Pulse kostenlos?', a: 'Ja. Dashboard, Top-Prozesse, Akku-Details und die wichtigsten Menüleisten-Werte sind ohne Zeitlimit kostenlos. Pro ist optional: ein Jahresabo mit 7 Tagen gratis oder ein Einmalkauf für immer.' },
    { q: 'Welche Macs werden unterstützt?', a: 'Jeder Mac mit macOS 14 Sonoma oder neuer – mit Apple silicon (M1–M4 und neuer) oder Intel.' },
    { q: 'Sammelt Pulse meine Daten?', a: 'Nein. Kein Konto, keine Analyse, kein Tracking. Alle Messwerte bleiben auf deinem Mac. Die einzige Netzwerkanfrage geht an ipinfo.io, wenn du die Netzwerkansicht öffnest – für öffentliche IP und Anbieter.' },
    { q: 'Kann Pulse die Lüfterdrehzahl ändern?', a: 'Nein. Pulse liest nur Sensoren – Temperaturen und Lüfterdrehzahl. Es schreibt nichts in die Hardware und kann daher bedenkenlos den ganzen Tag laufen.' },
    { q: 'Wie sehr bremst es meinen Mac?', a: 'Kaum. Pulse ist eine native Swift-App; standardmäßig aktualisiert sie einmal pro Sekunde, in den Einstellungen geht es auch seltener.' },
    { q: 'Wie stelle ich Pro auf einem anderen Mac wieder her?', a: 'Mit derselben Apple-ID anmelden, Einstellungen → Pro öffnen und „Käufe wiederherstellen“ tippen. Der Einmalkauf gilt auf all deinen Macs.' },
  ],
  privacyLink: 'Datenschutz',
  supportLink: 'Support',
};

const ES: PulseContent = {
  kicker: 'Novedad de FollowNet · para Mac',
  h1: 'FollowNet',
  h1Accent: 'Pulse',
  lead: 'Un monitor del sistema limpio para la barra de menús. CPU, GPU, memoria, disco, red, temperatura y batería, en directo y de un vistazo, sin abrir el Monitor de Actividad.',
  storeTop: 'Descárgalo en',
  meta: ['Gratis', 'macOS 14+', 'Apple silicon e Intel'],
  privacyNote: 'Sin cuenta. Sin rastreo. Todo se queda en tu Mac.',
  featuresKicker: 'Qué muestra',
  featuresTitle: 'Todo lo que hace tu Mac, de un vistazo',
  featuresSub: 'Pulse vive en la barra de menús y abre un panel compacto con un clic.',
  features: [
    { icon: 'menubar', title: 'Barra de menús en vivo', text: 'CPU, GPU, RAM, SSD, velocidad de red, temperatura y batería junto al reloj: muestra solo lo que necesitas.' },
    { icon: 'cpu', title: 'Cada núcleo, cada grado', text: 'Núcleos de eficiencia y rendimiento, temperatura de CPU y SSD, velocidad de ventiladores y los procesos que cargan tu Mac.' },
    { icon: 'memory', title: 'Memoria y disco', text: 'Presión de memoria, swap, memoria comprimida, espacio libre y las apps que más ocupan.' },
    { icon: 'network', title: 'Red y conexión', text: 'Velocidad de subida y bajada, IP pública, país, proveedor, latencia y jitter: útil con o sin VPN.' },
    { icon: 'battery', title: 'Salud de la batería', text: 'Carga, tiempo restante, ciclos, capacidad frente a nueva y potencia del adaptador.' },
    { icon: 'palette', title: 'Hecho para tu Mac', text: 'Tema claro y oscuro, paletas de colores, tres tamaños de ventana y una barra de menús que no salta.' },
  ],
  shotsKicker: 'Capturas',
  shotsTitle: 'Así se ve',
  shots: [
    { title: "Tu Mac de un vistazo", text: "CPU, GPU, memoria, disco, red y batería, en directo en la barra de menús." },
    { title: "Cada núcleo, cada grado", text: "Núcleos de eficiencia y rendimiento, temperatura, ventiladores y procesos." },
    { title: "Adónde va la memoria", text: "Presión de memoria, swap y las apps que más usan." },
    { title: "Red y prueba de conexión", text: "Velocidad, IP pública, latencia y estado de la VPN en un solo lugar." },
    { title: "A tu manera", text: "Tema claro y oscuro, paletas de colores y una barra de menús flexible." },
  ],
  plansKicker: 'Precios',
  plansTitle: 'Úsalo gratis. Pro cuando quieras más.',
  plansSub: 'El panel y las métricas principales de la barra de menús son gratis para siempre. Pro desbloquea las pantallas detalladas y toda la personalización.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Todo lo necesario para el día a día',
  freeItems: [
    'Panel en vivo: CPU, GPU, RAM, SSD, red, batería',
    'Procesos principales',
    'Métricas principales en la barra de menús',
    'Detalles de la batería',
    'Tema claro y oscuro',
  ],
  proName: 'Pro',
  proTagline: 'Para quien quiere saberlo todo',
  proItems: [
    'Pantallas detalladas de CPU, memoria, disco y red',
    'Velocidad de ventiladores y temperaturas',
    'Cualquier métrica y formato en la barra de menús',
    'Todos los temas, paletas y colores propios',
    'Prueba de conexión y fugas de IP',
  ],
  perYear: '/ año',
  trial: '7 días gratis',
  lifetimeName: "Pro para siempre",
  once: "una vez",
  lifetimeTagline: "Paga una vez y quédate con Pro",
  lifetimeItems: ["Todo lo de Pro", "Sin suscripción ni renovaciones", "En todos tus Mac con un Apple ID"],
  lifetimeCta: "Comprar una vez",
  bestValue: "Mejor precio",
  priceNote: 'Precios de EE. UU. El App Store muestra el precio de tu país.',
  faqTitle: 'Preguntas',
  faq: [
    { q: '¿FollowNet Pulse es gratis?', a: 'Sí. El panel, los procesos principales, los detalles de la batería y las métricas principales de la barra de menús son gratis sin límite de tiempo. Pro es opcional: suscripción anual con 7 días gratis o compra única para siempre.' },
    { q: '¿Qué Mac son compatibles?', a: 'Cualquier Mac con macOS 14 Sonoma o posterior, con Apple silicon (M1–M4 y posteriores) o Intel.' },
    { q: '¿Pulse recopila mis datos?', a: 'No. Sin cuenta, sin analítica y sin rastreo. Todas las lecturas se quedan en tu Mac. La única petición de red va a ipinfo.io cuando abres la pantalla Red, para mostrar tu IP pública y proveedor.' },
    { q: '¿Pulse puede cambiar la velocidad de los ventiladores?', a: 'No. Pulse solo lee sensores: temperaturas y velocidad de ventiladores. Nunca escribe en el hardware, así que puedes dejarlo abierto todo el día.' },
    { q: '¿Cuánto ralentiza mi Mac?', a: 'Casi nada. Pulse es una app nativa en Swift; por defecto se actualiza una vez por segundo y en Ajustes puedes hacerlo menos frecuente.' },
    { q: '¿Cómo restauro Pro en otro Mac?', a: 'Inicia sesión con el mismo Apple ID, abre Ajustes → Pro y pulsa «Restaurar compras». La compra para siempre funciona en todos tus Mac.' },
  ],
  privacyLink: 'Política de privacidad',
  supportLink: 'Soporte',
};

const FR: PulseContent = {
  kicker: 'Nouveau chez FollowNet · pour Mac',
  h1: 'FollowNet',
  h1Accent: 'Pulse',
  lead: 'Un moniteur système épuré dans la barre des menus. CPU, GPU, mémoire, disque, réseau, température et batterie, en direct et d’un coup d’œil, sans ouvrir le Moniteur d’activité.',
  storeTop: 'Télécharger sur le',
  meta: ['Gratuit', 'macOS 14+', 'Apple silicon et Intel'],
  privacyNote: 'Pas de compte. Pas de pistage. Tout reste sur votre Mac.',
  featuresKicker: 'Ce qu’il affiche',
  featuresTitle: 'Tout ce que fait votre Mac, d’un coup d’œil',
  featuresSub: 'Pulse vit dans la barre des menus et ouvre un tableau de bord compact d’un clic.',
  features: [
    { icon: 'menubar', title: 'Barre des menus en direct', text: 'CPU, GPU, RAM, SSD, débit réseau, température et batterie à côté de l’horloge : affichez seulement ce qu’il vous faut.' },
    { icon: 'cpu', title: 'Chaque cœur, chaque degré', text: 'Cœurs efficacité et performance, température CPU et SSD, vitesse des ventilateurs et processus qui chargent votre Mac.' },
    { icon: 'memory', title: 'Mémoire et disque', text: 'Pression mémoire, swap, mémoire compressée, espace libre et apps les plus gourmandes.' },
    { icon: 'network', title: 'Réseau et connexion', text: 'Débit montant et descendant, IP publique, pays, fournisseur, latence et gigue : utile avec ou sans VPN.' },
    { icon: 'battery', title: 'Santé de la batterie', text: 'Charge, autonomie restante, cycles, capacité par rapport à neuve et puissance de l’adaptateur.' },
    { icon: 'palette', title: 'À l’image de votre Mac', text: 'Thèmes clair et sombre, palettes de couleurs, trois tailles de fenêtre et une barre des menus qui ne bouge pas.' },
  ],
  shotsKicker: 'Captures',
  shotsTitle: 'En images',
  shots: [
    { title: "Votre Mac en un coup d’œil", text: "CPU, GPU, mémoire, disque, réseau et batterie, en direct dans la barre des menus." },
    { title: "Chaque cœur, chaque degré", text: "Cœurs efficacité et performance, température, ventilateurs et processus." },
    { title: "Où part la mémoire", text: "Pression mémoire, swap et apps les plus gourmandes." },
    { title: "Réseau et test de connexion", text: "Débit, IP publique, latence et état du VPN au même endroit." },
    { title: "À votre image", text: "Thèmes clair et sombre, palettes de couleurs et barre des menus flexible." },
  ],
  plansKicker: 'Tarifs',
  plansTitle: 'Gratuit au quotidien. Pro quand vous voulez plus.',
  plansSub: 'Le tableau de bord et les principales mesures de la barre des menus sont gratuits pour toujours. Pro débloque les écrans détaillés et toute la personnalisation.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'L’essentiel pour tous les jours',
  freeItems: [
    'Tableau de bord en direct : CPU, GPU, RAM, SSD, réseau, batterie',
    'Processus principaux',
    'Mesures principales dans la barre des menus',
    'Détails de la batterie',
    'Thème clair et sombre',
  ],
  proName: 'Pro',
  proTagline: 'Pour ceux qui veulent tout savoir',
  proItems: [
    'Écrans détaillés CPU, mémoire, disque et réseau',
    'Vitesse des ventilateurs et températures',
    'Toutes les mesures et formats dans la barre des menus',
    'Tous les thèmes, palettes et couleurs personnalisées',
    'Test de connexion et de fuite d’IP',
  ],
  perYear: '/ an',
  trial: '7 jours gratuits',
  lifetimeName: "Pro à vie",
  once: "une fois",
  lifetimeTagline: "Payez une fois, gardez Pro pour toujours",
  lifetimeItems: ["Tout ce qu’offre Pro", "Sans abonnement ni renouvellement", "Sur tous vos Mac avec un identifiant Apple"],
  lifetimeCta: "Acheter une fois",
  bestValue: "Meilleur prix",
  priceNote: 'Prix américains. L’App Store affiche le prix de votre pays.',
  faqTitle: 'Questions',
  faq: [
    { q: 'FollowNet Pulse est-il gratuit ?', a: 'Oui. Le tableau de bord, les processus principaux, les détails de la batterie et les principales mesures de la barre des menus sont gratuits sans limite de durée. Pro est optionnel : abonnement annuel avec 7 jours gratuits ou achat unique à vie.' },
    { q: 'Quels Mac sont compatibles ?', a: 'Tout Mac sous macOS 14 Sonoma ou plus récent, avec Apple silicon (M1–M4 et suivants) ou Intel.' },
    { q: 'Pulse collecte-t-il mes données ?', a: 'Non. Pas de compte, pas d’analytique, pas de pistage. Toutes les mesures restent sur votre Mac. La seule requête réseau va à ipinfo.io quand vous ouvrez l’écran Réseau, pour afficher votre IP publique et votre fournisseur.' },
    { q: 'Pulse peut-il modifier la vitesse des ventilateurs ?', a: 'Non. Pulse lit seulement les capteurs : températures et vitesse des ventilateurs. Il n’écrit jamais dans le matériel, vous pouvez donc le laisser tourner toute la journée.' },
    { q: 'Ralentit-il mon Mac ?', a: 'À peine. Pulse est une app native en Swift ; par défaut il se met à jour une fois par seconde, et vous pouvez espacer les mises à jour dans les Réglages.' },
    { q: 'Comment restaurer Pro sur un autre Mac ?', a: 'Connectez-vous avec le même identifiant Apple, ouvrez Réglages → Pro et touchez « Restaurer les achats ». L’achat à vie fonctionne sur tous vos Mac.' },
  ],
  privacyLink: 'Politique de confidentialité',
  supportLink: 'Assistance',
};

const PT: PulseContent = {
  kicker: 'Novidade da FollowNet · para Mac',
  h1: 'FollowNet',
  h1Accent: 'Pulse',
  lead: 'Um monitor do sistema limpo na barra de menus. CPU, GPU, memória, disco, rede, temperatura e bateria, ao vivo e num relance, sem abrir o Monitor de Atividade.',
  storeTop: 'Baixe na',
  meta: ['Grátis', 'macOS 14+', 'Apple silicon e Intel'],
  privacyNote: 'Sem conta. Sem rastreamento. Tudo fica no seu Mac.',
  featuresKicker: 'O que mostra',
  featuresTitle: 'Tudo o que o seu Mac está fazendo, num relance',
  featuresSub: 'O Pulse fica na barra de menus e abre um painel compacto com um clique.',
  features: [
    { icon: 'menubar', title: 'Barra de menus ao vivo', text: 'CPU, GPU, RAM, SSD, velocidade da rede, temperatura e bateria ao lado do relógio: mostre só o que precisa.' },
    { icon: 'cpu', title: 'Cada núcleo, cada grau', text: 'Núcleos de eficiência e desempenho, temperatura da CPU e do SSD, velocidade das ventoinhas e os processos que pesam no Mac.' },
    { icon: 'memory', title: 'Memória e disco', text: 'Pressão de memória, swap, memória comprimida, espaço livre e os apps que mais ocupam.' },
    { icon: 'network', title: 'Rede e conexão', text: 'Velocidade de upload e download, IP público, país, provedor, latência e jitter: útil com ou sem VPN.' },
    { icon: 'battery', title: 'Saúde da bateria', text: 'Carga, tempo restante, ciclos, capacidade em relação à nova e potência do adaptador.' },
    { icon: 'palette', title: 'Feito para o seu Mac', text: 'Tema claro e escuro, paletas de cores, três tamanhos de janela e uma barra de menus que não pula.' },
  ],
  shotsKicker: 'Capturas',
  shotsTitle: 'Veja como fica',
  shots: [
    { title: "Seu Mac num relance", text: "CPU, GPU, memória, disco, rede e bateria ao vivo na barra de menus." },
    { title: "Cada núcleo, cada grau", text: "Núcleos de eficiência e desempenho, temperatura, ventoinhas e processos." },
    { title: "Para onde vai a memória", text: "Pressão de memória, swap e os apps que mais usam." },
    { title: "Rede e teste de conexão", text: "Velocidade, IP público, latência e status da VPN em um só lugar." },
    { title: "Do seu jeito", text: "Tema claro e escuro, paletas de cores e uma barra de menus flexível." },
  ],
  plansKicker: 'Preços',
  plansTitle: 'Use grátis. Pro quando quiser mais.',
  plansSub: 'O painel e as principais métricas da barra de menus são grátis para sempre. O Pro libera as telas detalhadas e toda a personalização.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Tudo o que precisa no dia a dia',
  freeItems: [
    'Painel ao vivo: CPU, GPU, RAM, SSD, rede, bateria',
    'Principais processos',
    'Métricas principais na barra de menus',
    'Detalhes da bateria',
    'Tema claro e escuro',
  ],
  proName: 'Pro',
  proTagline: 'Para quem gosta de saber tudo',
  proItems: [
    'Telas detalhadas de CPU, memória, disco e rede',
    'Velocidade das ventoinhas e temperaturas',
    'Qualquer métrica e formato na barra de menus',
    'Todos os temas, paletas e cores próprias',
    'Teste de conexão e vazamento de IP',
  ],
  perYear: '/ ano',
  trial: '7 dias grátis',
  lifetimeName: "Pro para sempre",
  once: "uma vez",
  lifetimeTagline: "Pague uma vez e fique com o Pro",
  lifetimeItems: ["Tudo do Pro", "Sem assinatura nem renovações", "Em todos os seus Macs com um Apple ID"],
  lifetimeCta: "Comprar uma vez",
  bestValue: "Melhor preço",
  priceNote: 'Preços dos EUA. A App Store mostra o preço do seu país.',
  faqTitle: 'Perguntas',
  faq: [
    { q: 'O FollowNet Pulse é grátis?', a: 'Sim. O painel, os principais processos, os detalhes da bateria e as métricas principais da barra de menus são grátis sem limite de tempo. O Pro é opcional: assinatura anual com 7 dias grátis ou compra única para sempre.' },
    { q: 'Quais Macs são compatíveis?', a: 'Qualquer Mac com macOS 14 Sonoma ou posterior, com Apple silicon (M1–M4 e posteriores) ou Intel.' },
    { q: 'O Pulse coleta meus dados?', a: 'Não. Sem conta, sem análise e sem rastreamento. Todas as leituras ficam no seu Mac. A única requisição de rede vai para ipinfo.io quando você abre a tela Rede, para mostrar seu IP público e provedor.' },
    { q: 'O Pulse muda a velocidade das ventoinhas?', a: 'Não. O Pulse só lê sensores: temperaturas e velocidade das ventoinhas. Ele nunca grava nada no hardware, então pode ficar aberto o dia todo.' },
    { q: 'Quanto ele deixa o Mac mais lento?', a: 'Quase nada. O Pulse é um app nativo em Swift; por padrão atualiza uma vez por segundo, e nos Ajustes dá para deixar menos frequente.' },
    { q: 'Como restaurar o Pro em outro Mac?', a: 'Entre com o mesmo Apple ID, abra Ajustes → Pro e toque em “Restaurar compras”. A compra vitalícia funciona em todos os seus Macs.' },
  ],
  privacyLink: 'Política de privacidade',
  supportLink: 'Suporte',
};

const CONTENT: Record<AppLang, PulseContent> = { en: EN, ru: RU, uk: UK, de: DE, es: ES, fr: FR, pt: PT };

export function pulseContent(lang: AppLang): PulseContent {
  return CONTENT[lang] ?? EN;
}

export const PULSE_SEO: Record<AppLang, SeoCopy> = {
  en: {
    title: 'FollowNet Pulse — Mac system monitor for the menu bar',
    ogTitle: 'FollowNet Pulse — your Mac at a glance',
    description: 'Free menu bar system monitor for macOS: CPU, GPU, memory, disk, network, temperature, fans and battery. No account, no tracking. On the Mac App Store.',
  },
  ru: {
    title: 'FollowNet Pulse — монитор системы Mac в строке меню',
    ogTitle: 'FollowNet Pulse — весь Mac на ладони',
    description: 'Бесплатный монитор системы для macOS в строке меню: процессор, графика, память, диск, сеть, температура, вентиляторы и аккумулятор. Без аккаунта и слежки.',
  },
  uk: {
    title: 'FollowNet Pulse — монітор системи Mac у рядку меню',
    ogTitle: 'FollowNet Pulse — весь Mac на долоні',
    description: 'Безкоштовний монітор системи для macOS у рядку меню: процесор, графіка, пам’ять, диск, мережа, температура, вентилятори й акумулятор. Без акаунта й стеження.',
  },
  de: {
    title: 'FollowNet Pulse — Mac-Systemmonitor für die Menüleiste',
    ogTitle: 'FollowNet Pulse — dein Mac auf einen Blick',
    description: 'Kostenloser Systemmonitor für die macOS-Menüleiste: CPU, GPU, Speicher, Festplatte, Netzwerk, Temperatur, Lüfter und Akku. Kein Konto, kein Tracking.',
  },
  es: {
    title: 'FollowNet Pulse — monitor del sistema Mac en la barra de menús',
    ogTitle: 'FollowNet Pulse — tu Mac de un vistazo',
    description: 'Monitor del sistema gratis para la barra de menús de macOS: CPU, GPU, memoria, disco, red, temperatura, ventiladores y batería. Sin cuenta ni rastreo.',
  },
  fr: {
    title: 'FollowNet Pulse — moniteur système Mac dans la barre des menus',
    ogTitle: 'FollowNet Pulse — votre Mac en un coup d’œil',
    description: 'Moniteur système gratuit pour la barre des menus macOS : CPU, GPU, mémoire, disque, réseau, température, ventilateurs et batterie. Sans compte ni pistage.',
  },
  pt: {
    title: 'FollowNet Pulse — monitor do sistema Mac na barra de menus',
    ogTitle: 'FollowNet Pulse — seu Mac num relance',
    description: 'Monitor do sistema grátis para a barra de menus do macOS: CPU, GPU, memória, disco, rede, temperatura, ventoinhas e bateria. Sem conta nem rastreamento.',
  },
};

export const PULSE_PRIVACY_SEO: Record<AppLang, SeoCopy> = {
  en: { title: 'FollowNet Pulse privacy policy', ogTitle: 'FollowNet Pulse privacy policy', description: 'FollowNet Pulse collects no personal data: no account, no analytics, no tracking. What the app reads on your Mac and the one network request it makes.' },
  ru: { title: 'Политика конфиденциальности FollowNet Pulse', ogTitle: 'Конфиденциальность FollowNet Pulse', description: 'FollowNet Pulse не собирает персональные данные: без аккаунта, аналитики и слежки. Что приложение читает на Mac и единственный сетевой запрос.' },
  uk: { title: 'Політика конфіденційності FollowNet Pulse', ogTitle: 'Конфіденційність FollowNet Pulse', description: 'FollowNet Pulse не збирає персональні дані: без акаунта, аналітики й стеження. Що програма читає на Mac і єдиний мережевий запит.' },
  de: { title: 'FollowNet Pulse – Datenschutzerklärung', ogTitle: 'FollowNet Pulse – Datenschutz', description: 'FollowNet Pulse erhebt keine personenbezogenen Daten: kein Konto, keine Analyse, kein Tracking. Was die App auf deinem Mac liest und ihre einzige Netzwerkanfrage.' },
  es: { title: 'Política de privacidad de FollowNet Pulse', ogTitle: 'Privacidad de FollowNet Pulse', description: 'FollowNet Pulse no recopila datos personales: sin cuenta, analítica ni rastreo. Qué lee la app en tu Mac y su única petición de red.' },
  fr: { title: 'Politique de confidentialité de FollowNet Pulse', ogTitle: 'Confidentialité de FollowNet Pulse', description: 'FollowNet Pulse ne collecte aucune donnée personnelle : pas de compte, d’analytique ni de pistage. Ce que l’app lit sur votre Mac et sa seule requête réseau.' },
  pt: { title: 'Política de privacidade do FollowNet Pulse', ogTitle: 'Privacidade do FollowNet Pulse', description: 'O FollowNet Pulse não coleta dados pessoais: sem conta, análise nem rastreamento. O que o app lê no seu Mac e sua única requisição de rede.' },
};

const UPDATED = { en: 'Last updated: 14 October 2026', ru: 'Обновлено: 14 октября 2026', uk: 'Оновлено: 14 жовтня 2026', de: 'Stand: 14. Oktober 2026', es: 'Última actualización: 14 de octubre de 2026', fr: 'Dernière mise à jour : 14 octobre 2026', pt: 'Última atualização: 14 de outubro de 2026' } satisfies Record<AppLang, string>;

const PRIVACY: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'FollowNet Pulse',
    h1: 'Privacy policy',
    lead: `FollowNet Pulse is a system monitor for macOS. It is built to work without collecting anything about you. ${UPDATED.en}.`,
    blocks: [
      { title: 'What we collect', body: 'Nothing. Pulse has no account, no sign-in, no analytics, no advertising and no tracking SDKs. We do not collect, store, sell or share personal data.' },
      { title: 'What the app reads on your Mac', body: 'To show its metrics, Pulse reads system information locally: CPU, GPU, memory and disk usage, network throughput, running processes, battery state, and temperature and fan sensors (read-only, through the Mac’s System Management Controller). These readings are shown on screen and kept only in memory; they never leave your Mac.' },
      { title: 'The one network request', body: 'When you open the Network screen, Pulse requests https://ipinfo.io/json to show your public IP address, country, city and internet provider, and measures connection latency. That request goes directly from your Mac to ipinfo.io, which, like any web server, sees your IP address. We do not receive or store the result. See the ipinfo.io privacy policy: https://ipinfo.io/privacy-policy' },
      { title: 'Settings', body: 'Your preferences (theme, menu bar layout, refresh interval) are stored on your Mac in the app’s sandboxed settings. Deleting the app removes them.' },
      { title: 'Purchases', body: 'Pro is sold through the Mac App Store. Payments, subscriptions, trials and refunds are handled by Apple under the Apple Media Services Terms; we never see your payment details. The app checks your purchase status with Apple’s StoreKit on the device. Manage or cancel your subscription in your Apple ID settings: https://apps.apple.com/account/subscriptions' },
      { title: 'Terms of use', body: 'FollowNet Pulse is licensed under the Apple Standard End User License Agreement: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
      { title: 'Children', body: 'Pulse does not knowingly collect data from anyone, including children under 13.' },
      { title: 'Contact', body: 'Questions about privacy or the app: support@follow-net.com. If this policy changes, we will update this page and the date above.' },
    ],
    bullets: [],
  },
  ru: {
    kicker: 'FollowNet Pulse',
    h1: 'Политика конфиденциальности',
    lead: `FollowNet Pulse — монитор системы для macOS. Он устроен так, чтобы работать, ничего о вас не собирая. ${UPDATED.ru}.`,
    blocks: [
      { title: 'Что мы собираем', body: 'Ничего. В Pulse нет аккаунта, входа, аналитики, рекламы и SDK для отслеживания. Мы не собираем, не храним, не продаём и не передаём персональные данные.' },
      { title: 'Что приложение читает на Mac', body: 'Чтобы показывать метрики, Pulse локально читает сведения о системе: загрузку процессора, графики, памяти и диска, сетевой трафик, запущенные процессы, состояние аккумулятора, а также датчики температуры и вентиляторов (только чтение, через контроллер управления системой Mac). Эти данные показываются на экране и хранятся только в памяти; они никогда не покидают ваш Mac.' },
      { title: 'Единственный сетевой запрос', body: 'Когда вы открываете экран «Сеть», Pulse запрашивает https://ipinfo.io/json, чтобы показать ваш публичный IP-адрес, страну, город и интернет-провайдера, и измеряет задержку соединения. Запрос идёт напрямую с вашего Mac на ipinfo.io, который, как любой веб-сервер, видит ваш IP-адрес. Мы не получаем и не храним результат. Политика ipinfo.io: https://ipinfo.io/privacy-policy' },
      { title: 'Настройки', body: 'Ваши настройки (тема, вид строки меню, частота обновления) хранятся на вашем Mac в изолированных настройках приложения. При удалении приложения они удаляются.' },
      { title: 'Покупки', body: 'Pro продаётся через Mac App Store. Оплату, подписки, пробный период и возвраты обрабатывает Apple по Условиям медиасервисов Apple; мы не видим ваши платёжные данные. Приложение проверяет статус покупки через Apple StoreKit на устройстве. Управлять подпиской или отменить её можно в настройках Apple ID: https://apps.apple.com/account/subscriptions' },
      { title: 'Условия использования', body: 'FollowNet Pulse распространяется по Стандартному лицензионному соглашению Apple с конечным пользователем: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
      { title: 'Дети', body: 'Pulse сознательно не собирает данные ни о ком, в том числе о детях младше 13 лет.' },
      { title: 'Контакты', body: 'Вопросы о конфиденциальности или приложении: support@follow-net.com. Если политика изменится, мы обновим эту страницу и дату выше.' },
    ],
    bullets: [],
  },
  uk: {
    kicker: 'FollowNet Pulse',
    h1: 'Політика конфіденційності',
    lead: `FollowNet Pulse — монітор системи для macOS. Він працює, нічого про вас не збираючи. ${UPDATED.uk}.`,
    blocks: [
      { title: 'Що ми збираємо', body: 'Нічого. У Pulse немає акаунта, входу, аналітики, реклами й SDK для відстеження. Ми не збираємо, не зберігаємо, не продаємо й не передаємо персональні дані.' },
      { title: 'Що програма читає на Mac', body: 'Щоб показувати метрики, Pulse локально читає відомості про систему: навантаження процесора, графіки, пам’яті й диска, мережевий трафік, запущені процеси, стан акумулятора, а також датчики температури й вентиляторів (лише читання, через контролер керування системою Mac). Ці дані показуються на екрані й зберігаються лише в пам’яті; вони ніколи не залишають ваш Mac.' },
      { title: 'Єдиний мережевий запит', body: 'Коли ви відкриваєте екран «Мережа», Pulse запитує https://ipinfo.io/json, щоб показати ваш публічний IP, країну, місто й провайдера, і вимірює затримку з’єднання. Запит іде напряму з вашого Mac на ipinfo.io, який, як будь-який вебсервер, бачить вашу IP-адресу. Ми не отримуємо й не зберігаємо результат. Політика ipinfo.io: https://ipinfo.io/privacy-policy' },
      { title: 'Налаштування', body: 'Ваші налаштування (тема, вигляд рядка меню, частота оновлення) зберігаються на вашому Mac в ізольованих налаштуваннях програми. Після видалення програми вони видаляються.' },
      { title: 'Покупки', body: 'Pro продається через Mac App Store. Оплату, підписки, пробний період і повернення обробляє Apple за Умовами медіасервісів Apple; ми не бачимо ваших платіжних даних. Програма перевіряє статус покупки через Apple StoreKit на пристрої. Керувати підпискою чи скасувати її можна в налаштуваннях Apple ID: https://apps.apple.com/account/subscriptions' },
      { title: 'Умови використання', body: 'FollowNet Pulse поширюється за Стандартною ліцензійною угодою Apple з кінцевим користувачем: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
      { title: 'Діти', body: 'Pulse свідомо не збирає даних ні про кого, зокрема про дітей до 13 років.' },
      { title: 'Контакти', body: 'Запитання про конфіденційність чи програму: support@follow-net.com. Якщо політика зміниться, ми оновимо цю сторінку й дату вище.' },
    ],
    bullets: [],
  },
  de: {
    kicker: 'FollowNet Pulse',
    h1: 'Datenschutzerklärung',
    lead: `FollowNet Pulse ist ein Systemmonitor für macOS und funktioniert, ohne etwas über dich zu sammeln. ${UPDATED.de}.`,
    blocks: [
      { title: 'Was wir erheben', body: 'Nichts. Pulse hat kein Konto, keine Anmeldung, keine Analyse, keine Werbung und keine Tracking-SDKs. Wir erheben, speichern, verkaufen oder teilen keine personenbezogenen Daten.' },
      { title: 'Was die App auf deinem Mac liest', body: 'Für die Anzeige liest Pulse lokal Systeminformationen: Auslastung von CPU, GPU, Speicher und Festplatte, Netzwerkdurchsatz, laufende Prozesse, Akkuzustand sowie Temperatur- und Lüftersensoren (nur lesend, über den System Management Controller des Mac). Diese Werte werden angezeigt und nur im Arbeitsspeicher gehalten; sie verlassen deinen Mac nie.' },
      { title: 'Die einzige Netzwerkanfrage', body: 'Wenn du die Netzwerkansicht öffnest, ruft Pulse https://ipinfo.io/json ab, um deine öffentliche IP-Adresse, Land, Stadt und Internetanbieter anzuzeigen, und misst die Latenz. Die Anfrage geht direkt von deinem Mac an ipinfo.io, das – wie jeder Webserver – deine IP-Adresse sieht. Wir erhalten oder speichern das Ergebnis nicht. Datenschutz von ipinfo.io: https://ipinfo.io/privacy-policy' },
      { title: 'Einstellungen', body: 'Deine Einstellungen (Design, Menüleisten-Layout, Aktualisierungsintervall) werden auf deinem Mac in den Sandbox-Einstellungen der App gespeichert. Beim Löschen der App werden sie entfernt.' },
      { title: 'Käufe', body: 'Pro wird über den Mac App Store verkauft. Zahlungen, Abos, Testphasen und Erstattungen wickelt Apple gemäß den Bedingungen für Apple-Mediendienste ab; wir sehen deine Zahlungsdaten nie. Die App prüft den Kaufstatus mit Apple StoreKit auf dem Gerät. Abo verwalten oder kündigen in den Apple-ID-Einstellungen: https://apps.apple.com/account/subscriptions' },
      { title: 'Nutzungsbedingungen', body: 'FollowNet Pulse wird unter der Standard-Endbenutzer-Lizenzvereinbarung von Apple lizenziert: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
      { title: 'Kinder', body: 'Pulse erhebt wissentlich keine Daten von irgendjemandem, auch nicht von Kindern unter 13 Jahren.' },
      { title: 'Kontakt', body: 'Fragen zum Datenschutz oder zur App: support@follow-net.com. Ändert sich diese Erklärung, aktualisieren wir diese Seite und das Datum oben.' },
    ],
    bullets: [],
  },
  es: {
    kicker: 'FollowNet Pulse',
    h1: 'Política de privacidad',
    lead: `FollowNet Pulse es un monitor del sistema para macOS pensado para funcionar sin recopilar nada sobre ti. ${UPDATED.es}.`,
    blocks: [
      { title: 'Qué recopilamos', body: 'Nada. Pulse no tiene cuenta, inicio de sesión, analítica, publicidad ni SDK de rastreo. No recopilamos, almacenamos, vendemos ni compartimos datos personales.' },
      { title: 'Qué lee la app en tu Mac', body: 'Para mostrar sus métricas, Pulse lee información del sistema en local: uso de CPU, GPU, memoria y disco, tráfico de red, procesos en ejecución, estado de la batería y sensores de temperatura y ventiladores (solo lectura, mediante el controlador de gestión del sistema del Mac). Estas lecturas se muestran en pantalla y solo se guardan en memoria; nunca salen de tu Mac.' },
      { title: 'La única petición de red', body: 'Al abrir la pantalla Red, Pulse solicita https://ipinfo.io/json para mostrar tu dirección IP pública, país, ciudad y proveedor de internet, y mide la latencia. La petición va directamente de tu Mac a ipinfo.io, que, como cualquier servidor web, ve tu dirección IP. No recibimos ni guardamos el resultado. Privacidad de ipinfo.io: https://ipinfo.io/privacy-policy' },
      { title: 'Ajustes', body: 'Tus preferencias (tema, diseño de la barra de menús, intervalo de actualización) se guardan en tu Mac, en los ajustes aislados de la app. Al eliminar la app, se borran.' },
      { title: 'Compras', body: 'Pro se vende a través de la Mac App Store. Apple gestiona pagos, suscripciones, pruebas y reembolsos según los Términos de los Servicios Multimedia de Apple; nunca vemos tus datos de pago. La app comprueba el estado de la compra con Apple StoreKit en el dispositivo. Gestiona o cancela la suscripción en los ajustes de tu Apple ID: https://apps.apple.com/account/subscriptions' },
      { title: 'Condiciones de uso', body: 'FollowNet Pulse se distribuye bajo el Contrato de Licencia de Usuario Final Estándar de Apple: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
      { title: 'Menores', body: 'Pulse no recopila conscientemente datos de nadie, incluidos menores de 13 años.' },
      { title: 'Contacto', body: 'Preguntas sobre privacidad o la app: support@follow-net.com. Si esta política cambia, actualizaremos esta página y la fecha de arriba.' },
    ],
    bullets: [],
  },
  fr: {
    kicker: 'FollowNet Pulse',
    h1: 'Politique de confidentialité',
    lead: `FollowNet Pulse est un moniteur système pour macOS conçu pour fonctionner sans rien collecter sur vous. ${UPDATED.fr}.`,
    blocks: [
      { title: 'Ce que nous collectons', body: 'Rien. Pulse n’a ni compte, ni connexion, ni analytique, ni publicité, ni SDK de pistage. Nous ne collectons, ne stockons, ne vendons ni ne partageons aucune donnée personnelle.' },
      { title: 'Ce que l’app lit sur votre Mac', body: 'Pour afficher ses mesures, Pulse lit localement des informations système : utilisation CPU, GPU, mémoire et disque, débit réseau, processus en cours, état de la batterie et capteurs de température et de ventilateurs (en lecture seule, via le contrôleur de gestion système du Mac). Ces mesures sont affichées à l’écran et conservées uniquement en mémoire ; elles ne quittent jamais votre Mac.' },
      { title: 'La seule requête réseau', body: 'Quand vous ouvrez l’écran Réseau, Pulse interroge https://ipinfo.io/json pour afficher votre adresse IP publique, votre pays, votre ville et votre fournisseur, et mesure la latence. La requête part directement de votre Mac vers ipinfo.io qui, comme tout serveur web, voit votre adresse IP. Nous ne recevons ni ne stockons le résultat. Confidentialité d’ipinfo.io : https://ipinfo.io/privacy-policy' },
      { title: 'Réglages', body: 'Vos préférences (thème, disposition de la barre des menus, fréquence d’actualisation) sont stockées sur votre Mac, dans les réglages isolés de l’app. Elles sont supprimées avec l’app.' },
      { title: 'Achats', body: 'Pro est vendu sur le Mac App Store. Apple gère paiements, abonnements, essais et remboursements selon les Conditions des services multimédias Apple ; nous ne voyons jamais vos données de paiement. L’app vérifie l’état de l’achat avec Apple StoreKit sur l’appareil. Gérez ou résiliez l’abonnement dans les réglages de votre identifiant Apple : https://apps.apple.com/account/subscriptions' },
      { title: 'Conditions d’utilisation', body: 'FollowNet Pulse est concédé sous licence selon le Contrat de licence utilisateur final standard d’Apple : https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
      { title: 'Enfants', body: 'Pulse ne collecte sciemment de données sur personne, y compris les enfants de moins de 13 ans.' },
      { title: 'Contact', body: 'Questions sur la confidentialité ou l’app : support@follow-net.com. Si cette politique change, nous mettrons à jour cette page et la date ci-dessus.' },
    ],
    bullets: [],
  },
  pt: {
    kicker: 'FollowNet Pulse',
    h1: 'Política de privacidade',
    lead: `O FollowNet Pulse é um monitor do sistema para macOS feito para funcionar sem coletar nada sobre você. ${UPDATED.pt}.`,
    blocks: [
      { title: 'O que coletamos', body: 'Nada. O Pulse não tem conta, login, análise, anúncios nem SDKs de rastreamento. Não coletamos, armazenamos, vendemos nem compartilhamos dados pessoais.' },
      { title: 'O que o app lê no seu Mac', body: 'Para mostrar as métricas, o Pulse lê informações do sistema localmente: uso de CPU, GPU, memória e disco, tráfego de rede, processos em execução, estado da bateria e sensores de temperatura e ventoinhas (somente leitura, pelo controlador de gerenciamento do sistema do Mac). Essas leituras aparecem na tela e ficam apenas na memória; nunca saem do seu Mac.' },
      { title: 'A única requisição de rede', body: 'Quando você abre a tela Rede, o Pulse consulta https://ipinfo.io/json para mostrar seu IP público, país, cidade e provedor de internet, e mede a latência. A requisição vai direto do seu Mac para o ipinfo.io, que, como qualquer servidor web, vê seu endereço IP. Não recebemos nem armazenamos o resultado. Privacidade do ipinfo.io: https://ipinfo.io/privacy-policy' },
      { title: 'Ajustes', body: 'Suas preferências (tema, layout da barra de menus, intervalo de atualização) ficam no seu Mac, nos ajustes isolados do app. Ao apagar o app, elas são removidas.' },
      { title: 'Compras', body: 'O Pro é vendido pela Mac App Store. A Apple cuida de pagamentos, assinaturas, testes e reembolsos conforme os Termos dos Serviços de Mídia da Apple; nunca vemos seus dados de pagamento. O app verifica o status da compra com o Apple StoreKit no dispositivo. Gerencie ou cancele a assinatura nos ajustes do seu Apple ID: https://apps.apple.com/account/subscriptions' },
      { title: 'Termos de uso', body: 'O FollowNet Pulse é licenciado sob o Contrato de Licença de Usuário Final Padrão da Apple: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
      { title: 'Crianças', body: 'O Pulse não coleta conscientemente dados de ninguém, incluindo crianças menores de 13 anos.' },
      { title: 'Contato', body: 'Dúvidas sobre privacidade ou o app: support@follow-net.com. Se esta política mudar, atualizaremos esta página e a data acima.' },
    ],
    bullets: [],
  },
};

export function pulsePrivacyPage(lang: AppLang): ProductPage {
  return PRIVACY[lang] ?? PRIVACY.en;
}
