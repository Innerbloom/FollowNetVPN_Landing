import { LandingSlug } from './seo-landing.slugs';
import type { LandingContent } from './seo-landing.content';

const CTA = 'Скачать в App Store';

export const RU: Record<LandingSlug, LandingContent> = {
  'vpn-for-iphone': {
    h1: 'VPN для iPhone — быстро, приватно и просто',
    lead:
      'FollowNet — VPN для iPhone и iPad: подключение в одно касание, WireGuard и IKEv2, Smart Connect для сложных сетей и бесплатный тариф без карты.',
    sections: [
      {
        title: 'Зачем VPN на iPhone?',
        body: 'Публичный Wi‑Fi, роуминг и некоторые операторы повышают риски перехвата или замедления трафика. VPN шифрует соединение и помогает сохранить приватность в Safari, мессенджерах и стриминге.',
      },
      {
        title: 'Сделано для iOS, а не «универсальная оболочка»',
        body: 'FollowNet использует нативные VPN API iOS (Network Extension), Shortcuts, автоподключение, свой DNS и серверы по всему миру — с интерфейсом под iPhone.',
      },
    ],
    bullets: [
      'Free с дневным лимитом — попробуйте до подписки',
      'WireGuard, IKEv2 и AmneziaWG (Smart Connect выберет лучший)',
      'Политика без логов трафика — см. Privacy Policy',
      'Premium: безлимит, все серверы, без рекламы',
    ],
    cta: CTA,
    faq: [
      { q: 'FollowNet — бесплатный VPN для iPhone?', a: 'Да. Free включает дневной лимит. Premium снимает ограничения и открывает все серверы.' },
      { q: 'Работает ли на iPad?', a: 'Да. Одно iOS‑приложение для iPhone и iPad.' },
      { q: 'Какой протокол выбрать?', a: 'WireGuard — быстрый и современный. IKEv2 стабилен в мобильных сетях. Smart Connect подберёт протокол автоматически.' },
    ],
  },
  'wireguard-vpn-ios': {
    h1: 'WireGuard VPN для iOS — быстрый и современный',
    lead:
      'В FollowNet нативный WireGuard на iPhone и iPad плюс AmneziaWG, когда сети блокируют обычный VPN. Smart Connect переключает протоколы без ручной настройки.',
    sections: [
      { title: 'Почему WireGuard на iOS?', body: 'WireGuard лёгкий, с современной криптографией и обычно даёт меньшую задержку, чем старые протоколы — удобно для стриминга, игр и повседневного серфинга.' },
      { title: 'Когда WireGuard блокируют', body: 'Некоторые провайдеры распознают или режут WireGuard. Smart Connect может переключиться на IKEv2 или AmneziaWG (обфусцированный WireGuard) под вашу сеть.' },
    ],
    bullets: ['Нативный WireGuard через Network Extension', 'AmneziaWG для сетей с DPI (Smart Connect)', 'Ручной выбор протокола в настройках', 'Серверы в US, EU, Азии и других регионах'],
    cta: CTA,
    faq: [
      { q: 'WireGuard безопасен на iPhone?', a: 'WireGuard использует проверенную криптографию. FollowNet работает в песочнице VPN Apple, как другие App Store VPN.' },
      { q: 'Можно только WireGuard?', a: 'Да. Настройки → Протокол → WireGuard или включите Smart Connect.' },
      { q: 'Есть split tunneling на iOS?', a: 'iOS направляет трафик устройства через VPN‑туннель. Per‑app split ограничен платформой Apple.' },
    ],
  },
  'free-vpn-iphone': {
    h1: 'Бесплатный VPN для iPhone — FollowNet с дневным лимитом',
    lead:
      'Нужен free VPN на iPhone без карты? FollowNet Free: дневной трафик, базовые серверы, WireGuard и IKEv2, Smart Connect — Premium только если нужен безлимит.',
    sections: [
      { title: 'Что в бесплатном тарифе', body: 'Free позволяет проверить реальную скорость VPN: шифрование, выбор сервера, DNS, Speed Test и автоподключение. Premium снимает лимит и открывает премиум‑локации.' },
      { title: 'Free vs сомнительные «100% free» VPN', body: 'Часть бесплатных приложений монетизирует данные или заваливает рекламой. FollowNet прозрачен: лимит Free + опциональный Premium через App Store.' },
    ],
    bullets: ['Карта не нужна для Free', 'Дневной лимит — достаточно для оценки сервиса', 'Те же протоколы, что в Premium', 'Upgrade в приложении при необходимости'],
    cta: CTA,
    faq: [
      { q: 'FollowNet правда бесплатный?', a: 'Да, с дневным лимитом. Premium опционален для безлимита и всех серверов.' },
      { q: 'Есть реклама в Free?', a: 'В некоторых регионах Free с рекламой; Premium без рекламы.' },
      { q: 'Free подходит для публичного Wi‑Fi?', a: 'Да. Трафик всё равно шифруется — кафе, аэропорты, отели.' },
    ],
  },
  'vpn-for-ipad': {
    h1: 'VPN для iPad — то же приложение FollowNet для iOS',
    lead:
      'FollowNet — универсальное iOS‑приложение: один Apple ID для iPad и iPhone. Полноэкранный UI, WireGuard и IKEv2, Smart Connect, синхронизация через аккаунт.',
    sections: [
      { title: 'Зачем VPN на iPad?', body: 'iPad часто в тех же сетях, что и телефон — отели, коворкинги, гостевой Wi‑Fi. VPN защищает Safari, приложения и загрузки.' },
      { title: 'Плюсы на iPad', body: 'Поддержка landscape и multitasking, Shortcuts перед звонками или банком, автоподключение и DNS как на iPhone.' },
    ],
    bullets: ['Одно приложение — iPhone и iPad', 'Нативный Network Extension VPN', 'Smart Connect для сложных сетей', 'Free и Premium через App Store'],
    cta: CTA,
    faq: [
      { q: 'Нужно отдельное приложение для iPad?', a: 'Нет. Одна загрузка из App Store для обоих устройств.' },
      { q: 'Работает с клавиатурой и Stage Manager?', a: 'Да. VPN на уровне системы, не мешает multitasking.' },
      { q: 'Разные серверы на iPad и iPhone?', a: 'Один аккаунт — выбирайте сервер на каждом устройстве отдельно.' },
    ],
  },
  'ikev2-vpn-ios': {
    h1: 'IKEv2 VPN для iOS — стабильность в мобильных сетях',
    lead:
      'IKEv2 хорошо переживает смену Wi‑Fi и LTE на iPhone и iPad. В FollowNet — вместе с WireGuard, AmneziaWG и Smart Connect.',
    sections: [
      { title: 'Когда выбирать IKEv2', body: 'IKEv2 быстро переподключается при поездках, лифтах и переключении LTE ↔ Wi‑Fi. Полезен, если WireGuard режут на вашем операторе.' },
      { title: 'IKEv2 в FollowNet', body: 'Выберите вручную в Настройки → Протокол или доверьте Smart Connect. IKEv2 доступен на всех серверах.' },
    ],
    bullets: ['Стабильные переподключения на cellular', 'Доступен в Free и Premium', 'Автоподключение и свой DNS', 'Smart Connect может выбрать IKEv2 сам'],
    cta: CTA,
    faq: [
      { q: 'IKEv2 безопасен на iPhone?', a: 'При правильной настройке IKEv2 использует сильное шифрование в рамках VPN Apple.' },
      { q: 'IKEv2 vs WireGuard?', a: 'WireGuard часто быстрее; IKEv2 стабильнее на части мобильных сетей. Smart Connect пробует оба.' },
      { q: 'Как включить IKEv2?', a: 'Настройки → Протокол → IKEv2 или Smart Connect.' },
    ],
  },
  'vpn-for-wifi': {
    h1: 'VPN для публичного Wi‑Fi на iPhone',
    lead:
      'Кафе, аэропорты, отели — удобно, но рискованно. FollowNet шифрует трафик iPhone и iPad в любой Wi‑Fi сети в одно касание.',
    sections: [
      { title: 'Риски открытого Wi‑Fi', body: 'В общих точках доступа трафик могут перехватить. Даже гостевой Wi‑Fi с паролем не всегда надёжен. VPN добавляет шифрование между устройством и интернетом.' },
      { title: 'Автоподключение на Wi‑Fi', body: 'Автоподключение помогает включать VPN при входе в Wi‑Fi или при смене сети. В поездках сочетайте со Smart Connect.' },
    ],
    bullets: ['Шифрование в любой Wi‑Fi сети', 'Автоподключение при входе в Wi‑Fi', 'Smart Connect для порталов и фильтров', 'Speed Test для выбора сервера'],
    cta: CTA,
    faq: [
      { q: 'Нужен ли VPN дома?', a: 'Дома обычно безопаснее, но VPN помогает скрыть активность от провайдера, если это важно.' },
      { q: 'VPN замедлит отельный Wi‑Fi?', a: 'Небольшая нагрузка нормальна. Speed Test и ближний сервер помогут.' },
      { q: 'Captive portal в отеле?', a: 'Обычно сначала логин в портале, затем VPN. Smart Connect адаптируется к сети.' },
    ],
  },
  'smart-connect-vpn': {
    h1: 'Smart Connect VPN — автоматический протокол для iOS',
    lead:
      'Smart Connect оценивает сеть, регион и оператора и выбирает WireGuard, IKEv2 или AmneziaWG и сервер — без ручного перебора.',
    sections: [
      { title: 'Как работает Smart Connect', body: 'При подключении учитываются цензура, DPI и стабильность канала. Жёсткие сети → AmneziaWG; стабильный LTE → WireGuard или IKEv2. Переключить вручную можно всегда.' },
      { title: 'Кому включать Smart Connect', body: 'Путешественникам, пользователям с фильтрующими провайдерами и тем, кто устал менять протоколы вручную.' },
    ],
    bullets: ['Авто: WireGuard, IKEv2, AmneziaWG', 'Выбор сервера под сеть', 'Ручной режим всегда доступен', 'Встроено в FollowNet для iPhone и iPad'],
    cta: CTA,
    faq: [
      { q: 'Как включить Smart Connect?', a: 'Настройки → Протокол → Smart Connect.' },
      { q: 'Видно, какой протокол выбран?', a: 'Да — после подключения в приложении.' },
      { q: 'Больше расход батареи?', a: 'Минимально; сам VPN на iOS уже потребляет энергию.' },
    ],
  },
  'amneziawg-vpn-ios': {
    h1: 'AmneziaWG для iOS — когда WireGuard блокируют',
    lead:
      'AmneziaWG — обфусцированный WireGuard для сетей с DPI. FollowNet включает его на iOS и активирует через Smart Connect.',
    sections: [
      { title: 'Зачем обфускация', body: 'DPI может блокировать или резать узнаваемый VPN‑трафик. AmneziaWG усложняет классификацию — полезно у части операторов и в регионах с фильтрами.' },
      { title: 'AmneziaWG в FollowNet', body: 'Smart Connect для авто‑fallback или ручной выбор в Настройки → Протокол. Сравните скорость через Speed Test.' },
    ],
    bullets: ['Обфусцированный WireGuard', 'Smart Connect или вручную', 'Те же серверы', 'Нативный Network Extension'],
    cta: CTA,
    faq: [
      { q: 'AmneziaWG = WireGuard?', a: 'На базе WireGuard с обфускацией для сетей, где обычный WireGuard не проходит.' },
      { q: 'Когда использовать?', a: 'Если WireGuard не подключается или сильно режут скорость.' },
      { q: 'Доступен в Free?', a: 'Смотрите актуальные лимиты Free vs Premium в приложении.' },
    ],
  },
  'no-logs-vpn': {
    h1: 'VPN без логов для iPhone — подход FollowNet',
    lead:
      'FollowNet минимизирует сбор данных и не продаёт историю browsing. Подробности — в Privacy Policy: аккаунт, VPN и аналитика.',
    sections: [
      { title: 'Что значит «no logs»', body: 'Полный «ноль данных» с аккаунтом невозможен — email и подписка требуют метаданных. Мы не логируем содержимое трафика и ограничиваем retention соединений.' },
      { title: 'Прозрачность и права', body: 'Privacy Policy описывает GDPR/CCPA, Firebase Analytics, DNS и тикеты поддержки. Прочитайте до первого подключения.' },
    ],
    bullets: ['Privacy Policy на follow-net.com/privacy', 'Вход по email‑коду', 'Минимум метаданных VPN', 'Premium через Apple, без карты в приложении'],
    cta: CTA,
    faq: [
      { q: 'Логируете сайты?', a: 'Содержимое VPN‑трафика не логируется — см. Privacy Policy.' },
      { q: 'Где политика?', a: 'https://follow-net.com/privacy — в приложении и App Store.' },
      { q: 'Apple видит VPN?', a: 'Подписки через App Store; туннель — в sandbox Network Extension.' },
    ],
  },
  'auto-connect-vpn-ios': {
    h1: 'Автоподключение VPN для iOS — VPN при смене сети',
    lead:
      'Автоподключение FollowNet включает VPN на Wi‑Fi, мобильной сети или любой сети — не нужно нажимать Connect каждый раз в кафе или при переключении Wi‑Fi ↔ LTE.',
    sections: [
      { title: 'Зачем автоподключение на iPhone', body: 'В публичном Wi‑Fi и в поездках VPN нужен чаще всего — и чаще забывают включить. FollowNet отслеживает тип сети и запускает VPN по выбранному правилу.' },
      { title: 'Режимы автоподключения', body: 'Выберите «Выключено», «Только Wi‑Fi», «Только LTE» или «Всегда» в Настройки → Автоподключение. Сочетайте со Smart Connect для выбора протокола и сервера.' },
    ],
    bullets: ['Только Wi‑Fi, только LTE или всегда', 'WireGuard, IKEv2 и Smart Connect', 'Free и Premium', 'Настройки → Автоподключение'],
    cta: CTA,
    faq: [
      { q: 'Как включить автоподключение?', a: 'FollowNet → Настройки → Автоподключение → Только Wi‑Fi, Только LTE, Всегда или Выключено.' },
      { q: 'Будет ли подключаться дома?', a: 'Только при режиме «Только Wi‑Fi» или «Всегда». Многие включают VPN только в кафе и отелях.' },
      { q: 'Это то же самое, что Smart Connect?', a: 'Нет. Автоподключение решает, когда стартовать VPN; Smart Connect выбирает протокол и сервер после подключения.' },
    ],
  },
  'dns-vpn-ios': {
    h1: 'Свой DNS VPN для iPhone — Quad9, Cloudflare и другие',
    lead:
      'В FollowNet на iOS можно выбрать DNS: системный или пресеты Quad9, Cloudflare, AdGuard и другие при активном VPN.',
    sections: [
      { title: 'Зачем DNS с VPN', body: 'DNS переводит домены в IP. Нужен блок malware (Quad9), скорость (Cloudflare) или блок рекламы (AdGuard) вместе с шифрованием VPN.' },
      { title: 'DNS в FollowNet', body: 'Пресеты в настройках приложения. Запросы могут идти через туннель — детали в Privacy Policy.' },
    ],
    bullets: ['Несколько пресетов DNS', 'Работает с WireGuard и IKEv2', 'Приватность и фильтрация', 'Без отдельного DNS‑приложения'],
    cta: CTA,
    faq: [
      { q: 'Какой DNS выбрать?', a: 'Quad9 — безопасность, Cloudflare — скорость, AdGuard — блок рекламы, или системный.' },
      { q: 'DNS заменяет шифрование VPN?', a: 'Нет. DNS — только резолвер; VPN шифрует трафик до сервера.' },
      { q: 'DNS в Free?', a: 'Смотрите доступность в текущем тарифе в приложении.' },
    ],
  },
  'vpn-for-travel': {
    h1: 'VPN для путешествий на iPhone — роуминг и отели',
    lead:
      'В поездках — незнакомый Wi‑Fi, местные SIM и фильтры. Smart Connect подстраивает протоколы; одно iOS‑приложение по всему миру.',
    sections: [
      { title: 'Сценарии в travel', body: 'Аэропорты, отели с порталами и prepaid SIM ведут себя по‑разному. VPN — приватность; Smart Connect — связность при блокировках.' },
      { title: 'Советы путешественникам', body: 'Скачайте FollowNet заранее, войдите по email, сделайте Speed Test на Wi‑Fi и LTE, включите автоподключение в ненадёжных сетях. Premium — все регионы выхода.' },
    ],
    bullets: ['Серверы по миру', 'Smart Connect для foreign carriers', 'Автоподключение в отелях и аэропортах', 'Одно приложение из App Store'],
    cta: CTA,
    faq: [
      { q: 'VPN работает везде?', a: 'Зависит от законов и сетей страны. Соблюдайте местные правила.' },
      { q: 'До или после логина в hotel Wi‑Fi?', a: 'Обычно после captive portal, затем VPN на сессию.' },
      { q: 'Роуминг дороже с VPN?', a: 'VPN добавляет overhead; тарифы — у вашего оператора.' },
    ],
  },
  'best-vpn-iphone': {
    h1: 'Лучший VPN для iPhone — на что смотреть в 2026',
    lead:
      'Хороший iPhone VPN — нативный для iOS, прозрачный в privacy, быстрый у вас в сети и честный про free vs paid. Как FollowNet по ключевым пунктам.',
    sections: [
      { title: 'Чеклист VPN для iPhone', body: 'App Store, Network Extension (не browser‑only), Privacy Policy, WireGuard/IKEv2, автоподключение, поддержка. Осторожно с приложениями без компании за ними.' },
      { title: 'FollowNet', body: 'Нативное iOS‑приложение, free с лимитом, Smart Connect, AmneziaWG, DNS, Speed Test, Shortcuts, Premium через Apple.' },
    ],
    bullets: ['Только App Store — без sideload профилей', 'WireGuard + IKEv2 + Smart Connect + AmneziaWG', 'Автоподключение, DNS, Speed Test, виджеты', 'Free для пробы — Premium опционален'],
    cta: CTA,
    faq: [
      { q: 'FollowNet лучший для всех?', a: 'Нет универсального VPN. Мы фокус на iOS и Smart Connect — попробуйте Free.' },
      { q: 'Почему только iOS?', a: 'Приоритет — качество на iPhone и iPad, а не десяток платформ.' },
      { q: 'Как сравнить скорость?', a: 'Встроенный Speed Test с VPN и без на ваших Wi‑Fi и LTE.' },
    ],
  },
  'vpn-speed-test-ios': {
    h1: 'Speed Test VPN на iPhone — измерьте до подписки',
    lead:
      'В FollowNet есть Speed Test: скорость и задержка с VPN и без, между серверами — до апгрейда на Premium.',
    sections: [
      { title: 'Зачем тест на iOS', body: 'Скорость зависит от сети, расстояния до сервера и протокола. Тест на ваших Wi‑Fi и LTE даёт реалистичную картину.' },
      { title: 'Как пользоваться', body: 'Speed Test в приложении: baseline без VPN, затем с VPN. Сравните Smart Connect и ручной WireGuard/IKEv2.' },
    ],
    bullets: ['Встроено в FollowNet', 'Сравнение серверов и протоколов', 'Free и Premium', 'iPhone и iPad'],
    cta: CTA,
    faq: [
      { q: 'VPN всегда медленнее?', a: 'Небольшой overhead нормален. Ближний сервер уменьшает разницу.' },
      { q: 'Какой протокол быстрее?', a: 'Часто WireGuard; проверяйте Speed Test локально.' },
      { q: 'Тест тратит лимит Free?', a: 'Да, как любая загрузка — учитывайте дневной лимит.' },
    ],
  },
  'secure-vpn-iphone': {
    h1: 'Безопасный VPN для iPhone — шифрование, автоподключение, DNS',
    lead:
      'Безопасность на iOS — не только «замочек». FollowNet: WireGuard/IKEv2, автоподключение, свой DNS и опубликованная Privacy Policy.',
    sections: [
      { title: 'Слои защиты', body: 'VPN шифрует до сервера. Автоподключение запускает VPN в публичном Wi‑Fi без ручного нажатия. DNS‑профили добавляют фильтрацию или приватные резолверы.' },
      { title: 'Best practices', body: 'Обновляйте iOS, Face ID/код, автоподключение в public Wi‑Fi, читайте Privacy Policy. Premium — не «сильнее шифрует», а больше серверов и без лимита.' },
    ],
    bullets: ['WireGuard, IKEv2, AmneziaWG', 'Автоподключение на Wi‑Fi или LTE', 'Пресеты DNS', 'App Store review и sandbox'],
    cta: CTA,
    faq: [
      { q: 'Безопасен для банка?', a: 'VPN шифрует транспорт; используйте официальные приложения банков и HTTPS.' },
      { q: '«Военное шифрование»?', a: 'Маркетинг разный. FollowNet — стандартные современные протоколы, см. Privacy Policy.' },
      { q: 'VPN от фишинга?', a: 'Нет. VPN не блокирует поддельные сайты.' },
    ],
  },
};
