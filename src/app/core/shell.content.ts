import { AppLang } from './i18n.service';
import type { SeoCopy } from './seo-copy';

/** Remora — SSH / SFTP / Mosh / Telnet terminal for iPhone, iPad and Mac (App Store). */
/** Empty until the app is live — the page then shows "Coming soon to the App Store". */
export const SHELL_APP_STORE_URL = '';
/**
 * Shell stays out of the menus, footer and sitemap (and is noindex) until the App Store link is set.
 * The pages themselves stay reachable by URL — App Review needs /shell/privacy and /shell/terms.
 */
export const SHELL_PUBLIC = SHELL_APP_STORE_URL !== '';
export const SHELL_PRICE = { monthly: '$3.99', yearly: '$19.99', lifetime: '$69.99' } as const;

export type ShellFeatureIcon = 'terminal' | 'files' | 'wifi' | 'key' | 'cloud' | 'tunnel' | 'grid' | 'laptop';

export type ShellContent = {
  kicker: string;
  h1: string;
  h1Accent: string;
  lead: string;
  storeTop: string;
  comingSoon: string;
  meta: string[];
  privacyNote: string;
  featuresKicker: string;
  featuresTitle: string;
  featuresSub: string;
  features: { icon: ShellFeatureIcon; title: string; text: string }[];
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
  /** "or $3.99 / month" under the yearly price. */
  orMonthly: string;
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
  termsLink: string;
  supportLink: string;
};

const EN: ShellContent = {
  kicker: 'New from FollowNet · iPhone, iPad and Mac',
  h1: 'Remora',
  h1Accent: '',
  lead: 'A fast, private terminal for your servers. SSH, SFTP, Mosh and Telnet on iPhone, iPad and Mac — with your hosts and keys synced through your own iCloud, not our servers.',
  storeTop: 'Download on the',
  comingSoon: 'Coming soon',
  meta: ['Free download', 'iOS 17+ · macOS 15+', 'No account'],
  privacyNote: 'No account. No analytics. Your hosts, passwords and keys never touch our servers.',
  featuresKicker: 'What it does',
  featuresTitle: 'Everything you need to work on a server',
  featuresSub: 'One app on every Apple device, built for people who live in the terminal.',
  features: [
    { icon: 'terminal', title: 'SSH that just works', text: 'Password and key login, host-key verification, auto-reconnect and keep-alive. Autocomplete knows git, docker, kubectl, systemctl, pm2 and thousands more.' },
    { icon: 'files', title: 'SFTP file browser', text: 'Browse, upload, download and preview files with syntax highlighting — next to your terminal tab.' },
    { icon: 'wifi', title: 'Mosh for flaky networks', text: 'Sessions survive Wi‑Fi changes, sleep and roaming between networks.' },
    { icon: 'key', title: 'Keys that stay safe', text: 'Ed25519, RSA and ECDSA keys, encrypted keys, and Secure Enclave keys that can never be copied off your device.' },
    { icon: 'cloud', title: 'Your iCloud, not ours', text: 'Hosts sync through your private iCloud database; passwords and keys through end-to-end encrypted iCloud Keychain.' },
    { icon: 'tunnel', title: 'Tunnels and jump hosts', text: 'Local, remote and SOCKS port forwarding, multi-hop ProxyJump and agent forwarding.' },
    { icon: 'grid', title: 'Split, grid and broadcast', text: 'Up to four panes in a 2×2 grid, and type one command into all of them at once.' },
    { icon: 'laptop', title: 'Telnet, serial and local shell', text: 'Telnet for network gear, serial consoles over USB on Mac, and your real local shell in a tab.' },
  ],
  plansKicker: 'Pricing',
  plansTitle: 'Free for SSH. Pro when you need more.',
  plansSub: 'SSH, SFTP, Telnet and up to five hosts are free forever. Pro unlocks sync of secrets and the power features.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Everything to get connected',
  freeItems: [
    'SSH and SFTP, password and key login',
    'Up to 5 saved hosts, synced through iCloud',
    'Telnet, serial (Mac) and local terminal',
    'Snippets, history and autocomplete',
    'Split panes and themes',
  ],
  proName: 'Pro',
  proTagline: 'For people who run servers every day',
  proItems: [
    'Unlimited hosts',
    'Passwords and keys in iCloud Keychain',
    'Mosh, jump hosts and port forwarding',
    'Agent forwarding and start in tmux',
    'Server monitor: CPU, memory, disks, Docker',
    'Secure Enclave keys',
  ],
  perYear: '/ year',
  orMonthly: 'or $3.99 / month',
  trial: '7-day free trial',
  lifetimeName: 'Pro Forever',
  once: 'once',
  lifetimeTagline: 'Pay once, keep Pro for good',
  lifetimeItems: ['Everything in Pro', 'No subscription, no renewals', 'iPhone, iPad and Mac with one Apple ID'],
  lifetimeCta: 'Buy once',
  bestValue: 'Best value',
  priceNote: 'US prices. The App Store shows the price for your country. The free trial applies to the yearly plan.',
  faqTitle: 'Questions',
  faq: [
    { q: 'Is Remora free?', a: 'Yes. SSH, SFTP, Telnet, the local terminal and up to five saved hosts are free with no time limit. Pro is optional: $3.99 a month, $19.99 a year with a 7-day free trial, or $69.99 once.' },
    { q: 'Where are my passwords and keys stored?', a: 'In the Apple Keychain on your device. If you turn on sync (Pro), they travel through iCloud Keychain, which Apple encrypts end to end. Secure Enclave keys never leave the device that created them. We have no servers that could see them.' },
    { q: 'Which devices are supported?', a: 'iPhone and iPad with iOS 17 or later, and Macs with macOS 15 or later, on Apple silicon or Intel. One purchase covers all of them with the same Apple ID.' },
    { q: 'Do I need an account?', a: 'No. There is no sign-up. Your hosts sync through your own iCloud, and purchases go through your Apple ID.' },
    { q: 'How does the local terminal work on Mac?', a: 'Mac App Store apps run in a sandbox, so on first use the app asks you to place a small helper script in ~/Library/Application Scripts. It starts your normal login shell — with sudo, your ~/.zshrc and your home folder — exactly like Terminal. You can remove it at any time.' },
    { q: 'Is Telnet safe?', a: 'Telnet is not encrypted — that is how the protocol works. Remora supports it for routers and network gear without SSH, and warns you when you choose it. Use SSH whenever you can.' },
  ],
  privacyLink: 'Privacy policy',
  termsLink: 'Terms of use',
  supportLink: 'Support',
};

const RU: ShellContent = {
  kicker: 'Новое от FollowNet · iPhone, iPad и Mac',
  h1: 'Remora',
  h1Accent: '',
  lead: 'Быстрый и приватный терминал для ваших серверов. SSH, SFTP, Mosh и Telnet на iPhone, iPad и Mac — хосты и ключи синхронизируются через ваш iCloud, а не через наши серверы.',
  storeTop: 'Загрузите в',
  comingSoon: 'Скоро',
  meta: ['Бесплатно', 'iOS 17+ · macOS 15+', 'Без аккаунта'],
  privacyNote: 'Без аккаунта и аналитики. Хосты, пароли и ключи никогда не попадают на наши серверы.',
  featuresKicker: 'Возможности',
  featuresTitle: 'Всё, чтобы работать на сервере',
  featuresSub: 'Одно приложение на всех устройствах Apple — для тех, кто живёт в терминале.',
  features: [
    { icon: 'terminal', title: 'SSH, который просто работает', text: 'Вход по паролю и ключу, проверка ключа сервера, автопереподключение и keep-alive. Автодополнение знает git, docker, kubectl, systemctl, pm2 и тысячи других команд.' },
    { icon: 'files', title: 'Файлы по SFTP', text: 'Просмотр, загрузка, скачивание и превью файлов с подсветкой синтаксиса — рядом с вкладкой терминала.' },
    { icon: 'wifi', title: 'Mosh для нестабильной сети', text: 'Сессия переживает смену Wi‑Fi, сон и переходы между сетями.' },
    { icon: 'key', title: 'Ключи под защитой', text: 'Ключи Ed25519, RSA и ECDSA, в том числе зашифрованные, и ключи Secure Enclave, которые невозможно скопировать с устройства.' },
    { icon: 'cloud', title: 'Ваш iCloud, а не наш', text: 'Хосты синхронизируются через вашу личную базу iCloud, пароли и ключи — через iCloud Keychain со сквозным шифрованием.' },
    { icon: 'tunnel', title: 'Туннели и jump-хосты', text: 'Локальный, удалённый и SOCKS-проброс портов, цепочки ProxyJump и agent forwarding.' },
    { icon: 'grid', title: 'Сплит, сетка и broadcast', text: 'До четырёх панелей сеткой 2×2 и одна команда сразу во все.' },
    { icon: 'laptop', title: 'Telnet, serial и локальный терминал', text: 'Telnet для сетевого оборудования, serial-консоль по USB на Mac и ваша настоящая локальная оболочка во вкладке.' },
  ],
  plansKicker: 'Цены',
  plansTitle: 'SSH бесплатно. Pro — когда нужно больше.',
  plansSub: 'SSH, SFTP, Telnet и до пяти хостов бесплатны навсегда. Pro открывает синхронизацию секретов и продвинутые функции.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Всё, чтобы подключиться',
  freeItems: [
    'SSH и SFTP, вход по паролю и ключу',
    'До 5 хостов с синхронизацией через iCloud',
    'Telnet, serial (Mac) и локальный терминал',
    'Сниппеты, история и автодополнение',
    'Сплит-панели и темы',
  ],
  proName: 'Pro',
  proTagline: 'Для тех, кто работает с серверами каждый день',
  proItems: [
    'Безлимит хостов',
    'Пароли и ключи в iCloud Keychain',
    'Mosh, jump-хосты и проброс портов',
    'Agent forwarding и запуск в tmux',
    'Монитор сервера: CPU, память, диски, Docker',
    'Ключи Secure Enclave',
  ],
  perYear: '/ год',
  orMonthly: 'или $3.99 / мес',
  trial: '7 дней бесплатно',
  lifetimeName: 'Pro навсегда',
  once: 'один раз',
  lifetimeTagline: 'Заплатите один раз — Pro останется навсегда',
  lifetimeItems: ['Всё из Pro', 'Без подписки и продлений', 'iPhone, iPad и Mac с одним Apple ID'],
  lifetimeCta: 'Купить навсегда',
  bestValue: 'Выгоднее всего',
  priceNote: 'Цены в США. App Store покажет цену для вашей страны. Пробный период действует для годового плана.',
  faqTitle: 'Вопросы',
  faq: [
    { q: 'Пользоваться Remora можно бесплатно?', a: 'Да. SSH, SFTP, Telnet, локальный терминал и до пяти сохранённых хостов бесплатны без ограничения по времени. Pro — по желанию: $3.99 в месяц, $19.99 в год с 7-дневным пробным периодом или $69.99 один раз.' },
    { q: 'Где хранятся пароли и ключи?', a: 'В связке ключей Apple на вашем устройстве. Если включить синхронизацию (Pro), они передаются через iCloud Keychain, который Apple шифрует сквозным шифрованием. Ключи Secure Enclave никогда не покидают устройство, где были созданы. У нас нет серверов, которые могли бы их видеть.' },
    { q: 'Какие устройства поддерживаются?', a: 'iPhone и iPad с iOS 17 и новее, Mac с macOS 15 и новее — на Apple silicon и Intel. Одна покупка действует на всех устройствах с тем же Apple ID.' },
    { q: 'Нужен ли аккаунт?', a: 'Нет. Регистрации нет. Хосты синхронизируются через ваш iCloud, покупки — через ваш Apple ID.' },
    { q: 'Как работает локальный терминал на Mac?', a: 'Приложения из Mac App Store работают в песочнице, поэтому при первом запуске приложение попросит положить небольшой скрипт-помощник в ~/Library/Application Scripts. Он запускает вашу обычную оболочку — с sudo, ~/.zshrc и домашней папкой — как Terminal. Удалить его можно в любой момент.' },
    { q: 'Telnet безопасен?', a: 'Telnet не шифрует трафик — так устроен сам протокол. Remora поддерживает его для роутеров и сетевого оборудования без SSH и предупреждает при выборе. Везде, где можно, используйте SSH.' },
  ],
  privacyLink: 'Политика конфиденциальности',
  termsLink: 'Условия использования',
  supportLink: 'Поддержка',
};

const UK: ShellContent = {
  kicker: 'Нове від FollowNet · iPhone, iPad і Mac',
  h1: 'Remora',
  h1Accent: '',
  lead: 'Швидкий і приватний термінал для ваших серверів. SSH, SFTP, Mosh і Telnet на iPhone, iPad і Mac — хости й ключі синхронізуються через ваш iCloud, а не через наші сервери.',
  storeTop: 'Завантажте в',
  comingSoon: 'Незабаром',
  meta: ['Безкоштовно', 'iOS 17+ · macOS 15+', 'Без акаунта'],
  privacyNote: 'Без акаунта й аналітики. Хости, паролі та ключі ніколи не потрапляють на наші сервери.',
  featuresKicker: 'Можливості',
  featuresTitle: 'Усе, щоб працювати на сервері',
  featuresSub: 'Одна програма на всіх пристроях Apple — для тих, хто живе в терміналі.',
  features: [
    { icon: 'terminal', title: 'SSH, що просто працює', text: 'Вхід за паролем і ключем, перевірка ключа сервера, автоперепідключення й keep-alive. Автодоповнення знає git, docker, kubectl, systemctl, pm2 та тисячі інших команд.' },
    { icon: 'files', title: 'Файли через SFTP', text: 'Перегляд, вивантаження, завантаження й прев’ю файлів із підсвічуванням синтаксису — поруч із вкладкою термінала.' },
    { icon: 'wifi', title: 'Mosh для нестабільної мережі', text: 'Сесія переживає зміну Wi‑Fi, сон і переходи між мережами.' },
    { icon: 'key', title: 'Ключі під захистом', text: 'Ключі Ed25519, RSA та ECDSA, зокрема зашифровані, і ключі Secure Enclave, які неможливо скопіювати з пристрою.' },
    { icon: 'cloud', title: 'Ваш iCloud, а не наш', text: 'Хости синхронізуються через вашу особисту базу iCloud, паролі й ключі — через iCloud Keychain із наскрізним шифруванням.' },
    { icon: 'tunnel', title: 'Тунелі та jump-хости', text: 'Локальне, віддалене та SOCKS-перенаправлення портів, ланцюжки ProxyJump і agent forwarding.' },
    { icon: 'grid', title: 'Спліт, сітка й broadcast', text: 'До чотирьох панелей сіткою 2×2 і одна команда одразу в усі.' },
    { icon: 'laptop', title: 'Telnet, serial і локальний термінал', text: 'Telnet для мережевого обладнання, serial-консоль через USB на Mac і ваша справжня локальна оболонка у вкладці.' },
  ],
  plansKicker: 'Ціни',
  plansTitle: 'SSH безкоштовно. Pro — коли потрібно більше.',
  plansSub: 'SSH, SFTP, Telnet і до п’яти хостів безкоштовні назавжди. Pro відкриває синхронізацію секретів і розширені функції.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Усе, щоб підключитися',
  freeItems: [
    'SSH і SFTP, вхід за паролем і ключем',
    'До 5 хостів із синхронізацією через iCloud',
    'Telnet, serial (Mac) і локальний термінал',
    'Сніпети, історія й автодоповнення',
    'Спліт-панелі та теми',
  ],
  proName: 'Pro',
  proTagline: 'Для тих, хто працює з серверами щодня',
  proItems: [
    'Безліміт хостів',
    'Паролі та ключі в iCloud Keychain',
    'Mosh, jump-хости й перенаправлення портів',
    'Agent forwarding і запуск у tmux',
    'Монітор сервера: CPU, пам’ять, диски, Docker',
    'Ключі Secure Enclave',
  ],
  perYear: '/ рік',
  orMonthly: 'або $3.99 / міс',
  trial: '7 днів безкоштовно',
  lifetimeName: 'Pro назавжди',
  once: 'один раз',
  lifetimeTagline: 'Заплатіть один раз — Pro залишиться назавжди',
  lifetimeItems: ['Усе з Pro', 'Без підписки та продовжень', 'iPhone, iPad і Mac з одним Apple ID'],
  lifetimeCta: 'Купити назавжди',
  bestValue: 'Найвигідніше',
  priceNote: 'Ціни в США. App Store покаже ціну для вашої країни. Пробний період діє для річного плану.',
  faqTitle: 'Запитання',
  faq: [
    { q: 'Remora безкоштовний?', a: 'Так. SSH, SFTP, Telnet, локальний термінал і до п’яти збережених хостів безкоштовні без обмеження в часі. Pro — за бажанням: $3.99 на місяць, $19.99 на рік із 7-денним пробним періодом або $69.99 один раз.' },
    { q: 'Де зберігаються паролі та ключі?', a: 'У зв’язці ключів Apple на вашому пристрої. Якщо ввімкнути синхронізацію (Pro), вони передаються через iCloud Keychain, який Apple шифрує наскрізно. Ключі Secure Enclave ніколи не залишають пристрій, де їх створено. У нас немає серверів, які могли б їх бачити.' },
    { q: 'Які пристрої підтримуються?', a: 'iPhone та iPad з iOS 17 і новіше, Mac з macOS 15 і новіше — на Apple silicon та Intel. Одна покупка діє на всіх пристроях з тим самим Apple ID.' },
    { q: 'Чи потрібен акаунт?', a: 'Ні. Реєстрації немає. Хости синхронізуються через ваш iCloud, покупки — через ваш Apple ID.' },
    { q: 'Як працює локальний термінал на Mac?', a: 'Програми з Mac App Store працюють у пісочниці, тож під час першого запуску програма попросить покласти невеликий скрипт-помічник у ~/Library/Application Scripts. Він запускає вашу звичайну оболонку — із sudo, ~/.zshrc і домашньою папкою — як Terminal. Видалити його можна будь-коли.' },
    { q: 'Чи безпечний Telnet?', a: 'Telnet не шифрує трафік — так влаштований сам протокол. Remora підтримує його для роутерів і мережевого обладнання без SSH і попереджає під час вибору. Скрізь, де можна, використовуйте SSH.' },
  ],
  privacyLink: 'Політика конфіденційності',
  termsLink: 'Умови використання',
  supportLink: 'Підтримка',
};

const DE: ShellContent = {
  kicker: 'Neu von FollowNet · iPhone, iPad und Mac',
  h1: 'Remora',
  h1Accent: '',
  lead: 'Ein schnelles, privates Terminal für deine Server. SSH, SFTP, Mosh und Telnet auf iPhone, iPad und Mac – Hosts und Schlüssel synchronisieren über dein eigenes iCloud, nicht über unsere Server.',
  storeTop: 'Laden im',
  comingSoon: 'Demnächst',
  meta: ['Kostenloser Download', 'iOS 17+ · macOS 15+', 'Kein Konto'],
  privacyNote: 'Kein Konto. Keine Analyse. Hosts, Passwörter und Schlüssel erreichen nie unsere Server.',
  featuresKicker: 'Funktionen',
  featuresTitle: 'Alles, was du auf einem Server brauchst',
  featuresSub: 'Eine App für jedes Apple-Gerät – für alle, die im Terminal zu Hause sind.',
  features: [
    { icon: 'terminal', title: 'SSH, das einfach funktioniert', text: 'Anmeldung per Passwort und Schlüssel, Host-Key-Prüfung, automatisches Wiederverbinden und Keep-alive. Die Autovervollständigung kennt git, docker, kubectl, systemctl, pm2 und tausende weitere Befehle.' },
    { icon: 'files', title: 'SFTP-Dateibrowser', text: 'Dateien durchsuchen, hoch- und herunterladen und mit Syntaxhervorhebung ansehen – direkt neben dem Terminal-Tab.' },
    { icon: 'wifi', title: 'Mosh für wackelige Netze', text: 'Sitzungen überstehen WLAN-Wechsel, Ruhezustand und Netzwechsel.' },
    { icon: 'key', title: 'Schlüssel bleiben sicher', text: 'Ed25519-, RSA- und ECDSA-Schlüssel, auch verschlüsselte, sowie Secure-Enclave-Schlüssel, die das Gerät nie verlassen können.' },
    { icon: 'cloud', title: 'Dein iCloud, nicht unseres', text: 'Hosts synchronisieren über deine private iCloud-Datenbank, Passwörter und Schlüssel über den Ende-zu-Ende-verschlüsselten iCloud-Schlüsselbund.' },
    { icon: 'tunnel', title: 'Tunnel und Jump-Hosts', text: 'Lokale, entfernte und SOCKS-Portweiterleitung, mehrstufiges ProxyJump und Agent-Forwarding.' },
    { icon: 'grid', title: 'Split, Raster und Broadcast', text: 'Bis zu vier Bereiche im 2×2-Raster – und ein Befehl gleichzeitig in alle.' },
    { icon: 'laptop', title: 'Telnet, seriell und lokale Shell', text: 'Telnet für Netzwerkgeräte, serielle Konsolen per USB auf dem Mac und deine echte lokale Shell in einem Tab.' },
  ],
  plansKicker: 'Preise',
  plansTitle: 'SSH gratis. Pro, wenn du mehr brauchst.',
  plansSub: 'SSH, SFTP, Telnet und bis zu fünf Hosts sind für immer kostenlos. Pro schaltet die Synchronisierung von Geheimnissen und die Profi-Funktionen frei.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Alles, um dich zu verbinden',
  freeItems: [
    'SSH und SFTP, Passwort- und Schlüssel-Login',
    'Bis zu 5 Hosts, synchronisiert über iCloud',
    'Telnet, seriell (Mac) und lokales Terminal',
    'Snippets, Verlauf und Autovervollständigung',
    'Geteilte Bereiche und Themes',
  ],
  proName: 'Pro',
  proTagline: 'Für alle, die täglich mit Servern arbeiten',
  proItems: [
    'Unbegrenzte Hosts',
    'Passwörter und Schlüssel im iCloud-Schlüsselbund',
    'Mosh, Jump-Hosts und Portweiterleitung',
    'Agent-Forwarding und Start in tmux',
    'Server-Monitor: CPU, Speicher, Laufwerke, Docker',
    'Secure-Enclave-Schlüssel',
  ],
  perYear: '/ Jahr',
  orMonthly: 'oder $3.99 / Monat',
  trial: '7 Tage gratis testen',
  lifetimeName: 'Pro für immer',
  once: 'einmalig',
  lifetimeTagline: 'Einmal zahlen, Pro für immer behalten',
  lifetimeItems: ['Alles aus Pro', 'Kein Abo, keine Verlängerungen', 'iPhone, iPad und Mac mit einer Apple-ID'],
  lifetimeCta: 'Einmal kaufen',
  bestValue: 'Bester Wert',
  priceNote: 'US-Preise. Der App Store zeigt den Preis für dein Land. Die Testphase gilt für das Jahresabo.',
  faqTitle: 'Fragen',
  faq: [
    { q: 'Ist Remora kostenlos?', a: 'Ja. SSH, SFTP, Telnet, das lokale Terminal und bis zu fünf gespeicherte Hosts sind zeitlich unbegrenzt kostenlos. Pro ist optional: $3.99 pro Monat, $19.99 pro Jahr mit 7 Tagen Testphase oder einmalig $69.99.' },
    { q: 'Wo werden Passwörter und Schlüssel gespeichert?', a: 'Im Apple-Schlüsselbund auf deinem Gerät. Wenn du die Synchronisierung (Pro) aktivierst, laufen sie über den iCloud-Schlüsselbund, den Apple Ende-zu-Ende verschlüsselt. Secure-Enclave-Schlüssel verlassen nie das Gerät, auf dem sie erstellt wurden. Wir haben keine Server, die sie sehen könnten.' },
    { q: 'Welche Geräte werden unterstützt?', a: 'iPhone und iPad ab iOS 17 sowie Macs ab macOS 15, mit Apple Silicon oder Intel. Ein Kauf gilt für alle Geräte mit derselben Apple-ID.' },
    { q: 'Brauche ich ein Konto?', a: 'Nein. Es gibt keine Registrierung. Hosts synchronisieren über dein eigenes iCloud, Käufe laufen über deine Apple-ID.' },
    { q: 'Wie funktioniert das lokale Terminal auf dem Mac?', a: 'Apps aus dem Mac App Store laufen in einer Sandbox. Beim ersten Start bittet dich die App daher, ein kleines Hilfsskript in ~/Library/Application Scripts abzulegen. Es startet deine normale Login-Shell – mit sudo, deiner ~/.zshrc und deinem Benutzerordner – genau wie Terminal. Du kannst es jederzeit entfernen.' },
    { q: 'Ist Telnet sicher?', a: 'Telnet ist unverschlüsselt – so funktioniert das Protokoll. Remora unterstützt es für Router und Netzwerkgeräte ohne SSH und warnt dich bei der Auswahl. Nutze SSH, wo immer es geht.' },
  ],
  privacyLink: 'Datenschutzerklärung',
  termsLink: 'Nutzungsbedingungen',
  supportLink: 'Support',
};

const ES: ShellContent = {
  kicker: 'Nuevo de FollowNet · iPhone, iPad y Mac',
  h1: 'Remora',
  h1Accent: '',
  lead: 'Un terminal rápido y privado para tus servidores. SSH, SFTP, Mosh y Telnet en iPhone, iPad y Mac, con tus hosts y claves sincronizados por tu propio iCloud, no por nuestros servidores.',
  storeTop: 'Descárgalo en el',
  comingSoon: 'Próximamente',
  meta: ['Descarga gratuita', 'iOS 17+ · macOS 15+', 'Sin cuenta'],
  privacyNote: 'Sin cuenta. Sin analítica. Tus hosts, contraseñas y claves nunca llegan a nuestros servidores.',
  featuresKicker: 'Qué hace',
  featuresTitle: 'Todo lo que necesitas para trabajar en un servidor',
  featuresSub: 'Una app en todos tus dispositivos Apple, hecha para quien vive en el terminal.',
  features: [
    { icon: 'terminal', title: 'SSH que simplemente funciona', text: 'Inicio de sesión con contraseña y clave, verificación de la clave del host, reconexión automática y keep-alive. El autocompletado conoce git, docker, kubectl, systemctl, pm2 y miles de comandos más.' },
    { icon: 'files', title: 'Explorador de archivos SFTP', text: 'Navega, sube, descarga y previsualiza archivos con resaltado de sintaxis, junto a tu pestaña de terminal.' },
    { icon: 'wifi', title: 'Mosh para redes inestables', text: 'Las sesiones sobreviven a cambios de Wi‑Fi, al reposo y al cambio de red.' },
    { icon: 'key', title: 'Claves a salvo', text: 'Claves Ed25519, RSA y ECDSA, también cifradas, y claves de Secure Enclave que nunca pueden salir de tu dispositivo.' },
    { icon: 'cloud', title: 'Tu iCloud, no el nuestro', text: 'Los hosts se sincronizan con tu base de datos privada de iCloud; contraseñas y claves, con el Llavero de iCloud cifrado de extremo a extremo.' },
    { icon: 'tunnel', title: 'Túneles y jump hosts', text: 'Reenvío de puertos local, remoto y SOCKS, ProxyJump de varios saltos y reenvío de agente.' },
    { icon: 'grid', title: 'Paneles, cuadrícula y difusión', text: 'Hasta cuatro paneles en una cuadrícula 2×2, y un mismo comando en todos a la vez.' },
    { icon: 'laptop', title: 'Telnet, serie y shell local', text: 'Telnet para equipos de red, consolas serie por USB en Mac y tu shell local real en una pestaña.' },
  ],
  plansKicker: 'Precios',
  plansTitle: 'SSH gratis. Pro cuando necesites más.',
  plansSub: 'SSH, SFTP, Telnet y hasta cinco hosts son gratis para siempre. Pro desbloquea la sincronización de secretos y las funciones avanzadas.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Todo para conectarte',
  freeItems: [
    'SSH y SFTP, acceso con contraseña y clave',
    'Hasta 5 hosts sincronizados por iCloud',
    'Telnet, serie (Mac) y terminal local',
    'Snippets, historial y autocompletado',
    'Paneles divididos y temas',
  ],
  proName: 'Pro',
  proTagline: 'Para quien gestiona servidores a diario',
  proItems: [
    'Hosts ilimitados',
    'Contraseñas y claves en el Llavero de iCloud',
    'Mosh, jump hosts y reenvío de puertos',
    'Reenvío de agente e inicio en tmux',
    'Monitor del servidor: CPU, memoria, discos, Docker',
    'Claves de Secure Enclave',
  ],
  perYear: '/ año',
  orMonthly: 'o $3.99 / mes',
  trial: '7 días gratis',
  lifetimeName: 'Pro para siempre',
  once: 'un pago',
  lifetimeTagline: 'Paga una vez y quédate con Pro',
  lifetimeItems: ['Todo lo de Pro', 'Sin suscripción ni renovaciones', 'iPhone, iPad y Mac con un Apple ID'],
  lifetimeCta: 'Comprar una vez',
  bestValue: 'Mejor valor',
  priceNote: 'Precios de EE. UU. El App Store muestra el precio de tu país. La prueba gratuita se aplica al plan anual.',
  faqTitle: 'Preguntas',
  faq: [
    { q: '¿Remora es gratis?', a: 'Sí. SSH, SFTP, Telnet, el terminal local y hasta cinco hosts guardados son gratis sin límite de tiempo. Pro es opcional: $3.99 al mes, $19.99 al año con 7 días de prueba gratis o $69.99 en un solo pago.' },
    { q: '¿Dónde se guardan mis contraseñas y claves?', a: 'En el llavero de Apple de tu dispositivo. Si activas la sincronización (Pro), viajan por el Llavero de iCloud, que Apple cifra de extremo a extremo. Las claves de Secure Enclave nunca salen del dispositivo que las creó. No tenemos servidores que puedan verlas.' },
    { q: '¿Qué dispositivos son compatibles?', a: 'iPhone y iPad con iOS 17 o posterior, y Mac con macOS 15 o posterior, con Apple silicon o Intel. Una compra sirve para todos con el mismo Apple ID.' },
    { q: '¿Necesito una cuenta?', a: 'No. No hay registro. Tus hosts se sincronizan por tu propio iCloud y las compras van por tu Apple ID.' },
    { q: '¿Cómo funciona el terminal local en Mac?', a: 'Las apps del Mac App Store se ejecutan en un entorno aislado, así que la primera vez la app te pide colocar un pequeño script auxiliar en ~/Library/Application Scripts. Inicia tu shell de siempre —con sudo, tu ~/.zshrc y tu carpeta de inicio—, igual que Terminal. Puedes quitarlo cuando quieras.' },
    { q: '¿Telnet es seguro?', a: 'Telnet no está cifrado: así funciona el protocolo. Remora lo admite para routers y equipos de red sin SSH y te avisa al elegirlo. Usa SSH siempre que puedas.' },
  ],
  privacyLink: 'Política de privacidad',
  termsLink: 'Términos de uso',
  supportLink: 'Soporte',
};

const FR: ShellContent = {
  kicker: 'Nouveau chez FollowNet · iPhone, iPad et Mac',
  h1: 'Remora',
  h1Accent: '',
  lead: 'Un terminal rapide et privé pour vos serveurs. SSH, SFTP, Mosh et Telnet sur iPhone, iPad et Mac — vos hôtes et clés se synchronisent via votre propre iCloud, pas via nos serveurs.',
  storeTop: 'Télécharger dans',
  comingSoon: 'Bientôt',
  meta: ['Téléchargement gratuit', 'iOS 17+ · macOS 15+', 'Sans compte'],
  privacyNote: 'Sans compte. Sans analytique. Vos hôtes, mots de passe et clés ne touchent jamais nos serveurs.',
  featuresKicker: 'Ce qu’il fait',
  featuresTitle: 'Tout ce qu’il faut pour travailler sur un serveur',
  featuresSub: 'Une seule app sur tous vos appareils Apple, pensée pour ceux qui vivent dans le terminal.',
  features: [
    { icon: 'terminal', title: 'Un SSH qui fonctionne', text: 'Connexion par mot de passe et par clé, vérification de la clé de l’hôte, reconnexion automatique et keep-alive. L’autocomplétion connaît git, docker, kubectl, systemctl, pm2 et des milliers d’autres commandes.' },
    { icon: 'files', title: 'Explorateur de fichiers SFTP', text: 'Parcourez, envoyez, téléchargez et prévisualisez vos fichiers avec coloration syntaxique, à côté de l’onglet du terminal.' },
    { icon: 'wifi', title: 'Mosh pour les réseaux instables', text: 'Les sessions survivent aux changements de Wi‑Fi, à la veille et au passage d’un réseau à l’autre.' },
    { icon: 'key', title: 'Des clés en sécurité', text: 'Clés Ed25519, RSA et ECDSA, y compris chiffrées, et clés Secure Enclave qui ne peuvent jamais quitter votre appareil.' },
    { icon: 'cloud', title: 'Votre iCloud, pas le nôtre', text: 'Les hôtes se synchronisent via votre base iCloud privée ; mots de passe et clés via le trousseau iCloud chiffré de bout en bout.' },
    { icon: 'tunnel', title: 'Tunnels et hôtes de rebond', text: 'Redirection de ports locale, distante et SOCKS, ProxyJump multi-sauts et transfert d’agent.' },
    { icon: 'grid', title: 'Panneaux, grille et diffusion', text: 'Jusqu’à quatre panneaux en grille 2×2, et une même commande dans tous à la fois.' },
    { icon: 'laptop', title: 'Telnet, série et shell local', text: 'Telnet pour le matériel réseau, consoles série en USB sur Mac et votre vrai shell local dans un onglet.' },
  ],
  plansKicker: 'Tarifs',
  plansTitle: 'SSH gratuit. Pro quand il vous faut plus.',
  plansSub: 'SSH, SFTP, Telnet et jusqu’à cinq hôtes sont gratuits pour toujours. Pro débloque la synchronisation des secrets et les fonctions avancées.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Tout pour se connecter',
  freeItems: [
    'SSH et SFTP, connexion par mot de passe et par clé',
    'Jusqu’à 5 hôtes synchronisés via iCloud',
    'Telnet, série (Mac) et terminal local',
    'Snippets, historique et autocomplétion',
    'Panneaux partagés et thèmes',
  ],
  proName: 'Pro',
  proTagline: 'Pour ceux qui gèrent des serveurs chaque jour',
  proItems: [
    'Hôtes illimités',
    'Mots de passe et clés dans le trousseau iCloud',
    'Mosh, hôtes de rebond et redirection de ports',
    'Transfert d’agent et démarrage dans tmux',
    'Moniteur de serveur : CPU, mémoire, disques, Docker',
    'Clés Secure Enclave',
  ],
  perYear: '/ an',
  orMonthly: 'ou $3.99 / mois',
  trial: '7 jours d’essai gratuit',
  lifetimeName: 'Pro à vie',
  once: 'une fois',
  lifetimeTagline: 'Payez une fois, gardez Pro pour de bon',
  lifetimeItems: ['Tout Pro', 'Sans abonnement ni renouvellement', 'iPhone, iPad et Mac avec un identifiant Apple'],
  lifetimeCta: 'Acheter une fois',
  bestValue: 'Meilleur rapport',
  priceNote: 'Prix américains. L’App Store affiche le prix de votre pays. L’essai gratuit s’applique à l’offre annuelle.',
  faqTitle: 'Questions',
  faq: [
    { q: 'Remora est-il gratuit ?', a: 'Oui. SSH, SFTP, Telnet, le terminal local et jusqu’à cinq hôtes enregistrés sont gratuits sans limite de durée. Pro est facultatif : $3.99 par mois, $19.99 par an avec 7 jours d’essai gratuit, ou $69.99 une seule fois.' },
    { q: 'Où sont stockés mes mots de passe et mes clés ?', a: 'Dans le trousseau Apple de votre appareil. Si vous activez la synchronisation (Pro), ils passent par le trousseau iCloud, chiffré de bout en bout par Apple. Les clés Secure Enclave ne quittent jamais l’appareil qui les a créées. Nous n’avons aucun serveur qui pourrait les voir.' },
    { q: 'Quels appareils sont pris en charge ?', a: 'iPhone et iPad sous iOS 17 ou plus récent, et Mac sous macOS 15 ou plus récent, Apple silicon ou Intel. Un seul achat vaut pour tous, avec le même identifiant Apple.' },
    { q: 'Faut-il un compte ?', a: 'Non. Aucune inscription. Vos hôtes se synchronisent via votre propre iCloud et les achats passent par votre identifiant Apple.' },
    { q: 'Comment fonctionne le terminal local sur Mac ?', a: 'Les apps du Mac App Store tournent dans un bac à sable : au premier lancement, l’app vous demande de placer un petit script d’assistance dans ~/Library/Application Scripts. Il lance votre shell de connexion habituel — avec sudo, votre ~/.zshrc et votre dossier personnel — exactement comme Terminal. Vous pouvez le retirer à tout moment.' },
    { q: 'Telnet est-il sûr ?', a: 'Telnet n’est pas chiffré : c’est le fonctionnement du protocole. Remora le prend en charge pour les routeurs et le matériel réseau sans SSH, et vous avertit quand vous le choisissez. Utilisez SSH dès que possible.' },
  ],
  privacyLink: 'Politique de confidentialité',
  termsLink: 'Conditions d’utilisation',
  supportLink: 'Assistance',
};

const PT: ShellContent = {
  kicker: 'Novo da FollowNet · iPhone, iPad e Mac',
  h1: 'Remora',
  h1Accent: '',
  lead: 'Um terminal rápido e privado para os seus servidores. SSH, SFTP, Mosh e Telnet no iPhone, iPad e Mac — com hosts e chaves sincronizados pelo seu próprio iCloud, não pelos nossos servidores.',
  storeTop: 'Baixar na',
  comingSoon: 'Em breve',
  meta: ['Download gratuito', 'iOS 17+ · macOS 15+', 'Sem conta'],
  privacyNote: 'Sem conta. Sem análise. Seus hosts, senhas e chaves nunca chegam aos nossos servidores.',
  featuresKicker: 'O que faz',
  featuresTitle: 'Tudo o que você precisa para trabalhar num servidor',
  featuresSub: 'Um app em todos os seus dispositivos Apple, feito para quem vive no terminal.',
  features: [
    { icon: 'terminal', title: 'SSH que simplesmente funciona', text: 'Login por senha e chave, verificação da chave do host, reconexão automática e keep-alive. O autocompletar conhece git, docker, kubectl, systemctl, pm2 e milhares de outros comandos.' },
    { icon: 'files', title: 'Navegador de arquivos SFTP', text: 'Navegue, envie, baixe e visualize arquivos com realce de sintaxe, ao lado da aba do terminal.' },
    { icon: 'wifi', title: 'Mosh para redes instáveis', text: 'As sessões sobrevivem a trocas de Wi‑Fi, ao repouso e à mudança de rede.' },
    { icon: 'key', title: 'Chaves protegidas', text: 'Chaves Ed25519, RSA e ECDSA, inclusive criptografadas, e chaves do Secure Enclave que nunca saem do seu dispositivo.' },
    { icon: 'cloud', title: 'Seu iCloud, não o nosso', text: 'Os hosts sincronizam pelo seu banco de dados privado do iCloud; senhas e chaves, pelas Chaves do iCloud com criptografia de ponta a ponta.' },
    { icon: 'tunnel', title: 'Túneis e jump hosts', text: 'Redirecionamento de portas local, remoto e SOCKS, ProxyJump com vários saltos e encaminhamento de agente.' },
    { icon: 'grid', title: 'Painéis, grade e transmissão', text: 'Até quatro painéis numa grade 2×2 e um mesmo comando em todos ao mesmo tempo.' },
    { icon: 'laptop', title: 'Telnet, serial e shell local', text: 'Telnet para equipamentos de rede, consoles seriais por USB no Mac e seu shell local de verdade numa aba.' },
  ],
  plansKicker: 'Preços',
  plansTitle: 'SSH grátis. Pro quando precisar de mais.',
  plansSub: 'SSH, SFTP, Telnet e até cinco hosts são grátis para sempre. O Pro libera a sincronização de segredos e os recursos avançados.',
  freeName: 'Free',
  freePrice: '$0',
  freeTagline: 'Tudo para se conectar',
  freeItems: [
    'SSH e SFTP, login por senha e chave',
    'Até 5 hosts sincronizados pelo iCloud',
    'Telnet, serial (Mac) e terminal local',
    'Snippets, histórico e autocompletar',
    'Painéis divididos e temas',
  ],
  proName: 'Pro',
  proTagline: 'Para quem gerencia servidores todo dia',
  proItems: [
    'Hosts ilimitados',
    'Senhas e chaves nas Chaves do iCloud',
    'Mosh, jump hosts e redirecionamento de portas',
    'Encaminhamento de agente e início no tmux',
    'Monitor do servidor: CPU, memória, discos, Docker',
    'Chaves do Secure Enclave',
  ],
  perYear: '/ ano',
  orMonthly: 'ou $3.99 / mês',
  trial: '7 dias grátis',
  lifetimeName: 'Pro vitalício',
  once: 'uma vez',
  lifetimeTagline: 'Pague uma vez e fique com o Pro para sempre',
  lifetimeItems: ['Tudo do Pro', 'Sem assinatura nem renovações', 'iPhone, iPad e Mac com um Apple ID'],
  lifetimeCta: 'Comprar uma vez',
  bestValue: 'Melhor custo',
  priceNote: 'Preços dos EUA. A App Store mostra o preço do seu país. O teste grátis vale para o plano anual.',
  faqTitle: 'Perguntas',
  faq: [
    { q: 'O Remora é grátis?', a: 'Sim. SSH, SFTP, Telnet, o terminal local e até cinco hosts salvos são grátis, sem limite de tempo. O Pro é opcional: $3.99 por mês, $19.99 por ano com 7 dias de teste grátis ou $69.99 uma única vez.' },
    { q: 'Onde ficam minhas senhas e chaves?', a: 'Nas Chaves da Apple no seu dispositivo. Se você ativar a sincronização (Pro), elas passam pelas Chaves do iCloud, que a Apple criptografa de ponta a ponta. As chaves do Secure Enclave nunca saem do dispositivo que as criou. Não temos servidores que possam vê-las.' },
    { q: 'Quais dispositivos são compatíveis?', a: 'iPhone e iPad com iOS 17 ou posterior, e Mac com macOS 15 ou posterior, com Apple silicon ou Intel. Uma compra vale para todos com o mesmo Apple ID.' },
    { q: 'Preciso de uma conta?', a: 'Não. Não há cadastro. Seus hosts sincronizam pelo seu próprio iCloud e as compras passam pelo seu Apple ID.' },
    { q: 'Como funciona o terminal local no Mac?', a: 'Os apps da Mac App Store rodam numa sandbox, então no primeiro uso o app pede que você coloque um pequeno script auxiliar em ~/Library/Application Scripts. Ele inicia o seu shell de login de sempre — com sudo, seu ~/.zshrc e sua pasta pessoal — exatamente como o Terminal. Você pode removê-lo quando quiser.' },
    { q: 'O Telnet é seguro?', a: 'O Telnet não é criptografado: é assim que o protocolo funciona. O Remora o suporta para roteadores e equipamentos de rede sem SSH e avisa quando você o escolhe. Use SSH sempre que puder.' },
  ],
  privacyLink: 'Política de privacidade',
  termsLink: 'Termos de uso',
  supportLink: 'Suporte',
};

const CONTENT: Record<AppLang, ShellContent> = { en: EN, ru: RU, uk: UK, de: DE, es: ES, fr: FR, pt: PT };

export function shellContent(lang: AppLang): ShellContent {
  return CONTENT[lang] ?? CONTENT.en;
}

export const SHELL_SEO: Record<AppLang, SeoCopy> = {
  en: {
    title: 'Remora — SSH & SFTP terminal for iPhone, iPad and Mac',
    ogTitle: 'Remora — a private SSH terminal for Apple devices',
    description: 'SSH, SFTP, Mosh and Telnet for iPhone, iPad and Mac. Hosts and keys sync through your own iCloud, Secure Enclave keys, port forwarding. Free to start.',
  },
  ru: {
    title: 'Remora — SSH и SFTP терминал для iPhone, iPad и Mac',
    ogTitle: 'Remora — приватный SSH-терминал для устройств Apple',
    description: 'SSH, SFTP, Mosh и Telnet для iPhone, iPad и Mac. Хосты и ключи синхронизируются через ваш iCloud, ключи Secure Enclave, проброс портов. Бесплатно.',
  },
  uk: {
    title: 'Remora — SSH і SFTP термінал для iPhone, iPad і Mac',
    ogTitle: 'Remora — приватний SSH-термінал для пристроїв Apple',
    description: 'SSH, SFTP, Mosh і Telnet для iPhone, iPad і Mac. Хости й ключі синхронізуються через ваш iCloud, ключі Secure Enclave, проброс портів. Безкоштовно.',
  },
  de: {
    title: 'Remora – SSH- und SFTP-Terminal für iPhone, iPad, Mac',
    ogTitle: 'Remora – ein privates SSH-Terminal für Apple-Geräte',
    description: 'SSH, SFTP, Mosh und Telnet für iPhone, iPad und Mac. Hosts und Schlüssel über dein iCloud, Secure-Enclave-Schlüssel, Portweiterleitung. Kostenlos starten.',
  },
  es: {
    title: 'Remora: terminal SSH y SFTP para iPhone, iPad y Mac',
    ogTitle: 'Remora: un terminal SSH privado para dispositivos Apple',
    description: 'SSH, SFTP, Mosh y Telnet para iPhone, iPad y Mac. Hosts y claves sincronizados por tu iCloud, claves de Secure Enclave, reenvío de puertos. Empieza gratis.',
  },
  fr: {
    title: 'Remora — terminal SSH et SFTP pour iPhone, iPad et Mac',
    ogTitle: 'Remora — un terminal SSH privé pour les appareils Apple',
    description: 'SSH, SFTP, Mosh et Telnet pour iPhone, iPad et Mac. Hôtes et clés synchronisés via votre iCloud, clés Secure Enclave, redirection de ports. Gratuit.',
  },
  pt: {
    title: 'Remora — terminal SSH e SFTP para iPhone, iPad e Mac',
    ogTitle: 'Remora — um terminal SSH privado para dispositivos Apple',
    description: 'SSH, SFTP, Mosh e Telnet para iPhone, iPad e Mac. Hosts e chaves pelo seu iCloud, chaves do Secure Enclave, redirecionamento de portas. Comece grátis.',
  },
};
