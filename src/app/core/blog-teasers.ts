import { AppLang } from './i18n.service';

export type BlogTeaserTopic = 'product' | 'updates' | 'guides';

/** Thin Learn cards for home — keeps full blog.content out of the initial bundle. */
export type BlogTeaser = {
  slug: string;
  date: string;
  minutes: number;
  topic: BlogTeaserTopic;
  title: string;
  excerpt: string;
};

type TeaserLocalized = { title: string; excerpt: string };

type TeaserMeta = {
  slug: string;
  date: string;
  minutes: number;
  topic: BlogTeaserTopic;
  translations: Record<AppLang, TeaserLocalized>;
};

const HOME_LEARN_TEASERS: TeaserMeta[] = [
  {
    slug: 'follownet-features-overview',
    date: '2026-08-01',
    minutes: 7,
    topic: 'product',
    translations: {
      en: {
        title: 'FollowNet features: Smart Connect, protocols, DNS, Auto-connect, and more',
        excerpt: 'A full tour of what ships in the iOS app and Chrome extension — protocols, Smart Connect, Auto-connect, DNS, Network Profiles, widgets, Speed Test, and Free vs Premium.',
      },
      ru: {
        title: 'Возможности FollowNet: Smart Connect, протоколы, DNS, автоподключение и остальное',
        excerpt: 'Полный обзор того, что есть в iOS-приложении и Chrome: протоколы, Smart Connect, автоподключение, DNS, профили сети, виджеты, Speed Test и Free vs Premium.',
      },
      uk: {
        title: 'Функції FollowNet: Smart Connect, протоколи, DNS, автоматичне підключення тощо',
        excerpt: 'Повний огляд того, що постачається в додатку для iOS і розширенні для Chrome — протоколи, Smart Connect, автоматичне підключення, DNS, мережеві профілі, віджети, перевірка швидкості та Free vs Premium.',
      },
      de: {
        title: 'FollowNet-Funktionen: Smart Connect, Protokolle, DNS, Auto-Connect und mehr',
        excerpt: 'Eine vollständige Übersicht über den Lieferumfang der iOS-App und der Chrome-Erweiterung – Protokolle, Smart Connect, Auto-Connect, DNS, Netzwerkprofile, Widgets, Geschwindigkeitstest und Free vs. Premium.',
      },
      es: {
        title: 'Funciones de FollowNet: Smart Connect, protocolos, DNS, conexión automática y más',
        excerpt: 'Un recorrido completo por lo que se incluye en la aplicación iOS y la extensión de Chrome: protocolos, Smart Connect, conexión automática, DNS, perfiles de red, widgets, prueba de velocidad y Free vs Premium.',
      },
      fr: {
        title: 'Fonctionnalités FollowNet : Smart Connect, protocoles, DNS, connexion automatique, etc.',
        excerpt: 'Une visite complète de ce qui est fourni dans l\'application iOS et l\'extension Chrome : protocoles, Smart Connect, connexion automatique, DNS, profils réseau, widgets, test de vitesse et Free vs Premium.',
      },
      pt: {
        title: 'Recursos do FollowNet: Smart Connect, protocolos, DNS, conexão automática e muito mais',
        excerpt: 'Um tour completo do que vem no aplicativo iOS e na extensão do Chrome – protocolos, Smart Connect, conexão automática, DNS, perfis de rede, widgets, teste de velocidade e gratuito x premium.',
      },
    },
  },
  {
    slug: 'hysteria2-on-ios',
    date: '2026-07-02',
    minutes: 6,
    topic: 'product',
    translations: {
      en: {
        title: 'Hysteria2 on iOS in FollowNet: when lossy networks need a different path',
        excerpt: 'Why FollowNet ships Hysteria2 alongside WireGuard, IKEv2, and AmneziaWG — and when Smart Connect should pick it.',
      },
      ru: {
        title: 'Hysteria2 на iOS в FollowNet: когда плохим сетям нужен другой путь',
        excerpt: 'Зачем FollowNet держит Hysteria2 рядом с WireGuard, IKEv2 и AmneziaWG — и когда Smart Connect должен его выбрать.',
      },
      uk: {
        title: 'Hysteria2 на iOS у FollowNet: коли мережі з втратами потребують іншого шляху',
        excerpt: 'Чому FollowNet постачає Hysteria2 поряд з WireGuard, IKEv2 і AmneziaWG — і коли Smart Connect має вибрати її.',
      },
      de: {
        title: 'Hysteria2 auf iOS in FollowNet: Wenn verlustbehaftete Netzwerke einen anderen Pfad benötigen',
        excerpt: 'Warum FollowNet Hysteria2 zusammen mit WireGuard, IKEv2 und AmneziaWG anbietet – und wann Smart Connect sich dafür entscheiden sollte.',
      },
      es: {
        title: 'Hysteria2 en iOS en FollowNet: cuando las redes con pérdidas necesitan un camino diferente',
        excerpt: 'Por qué FollowNet envía Hysteria2 junto con WireGuard, IKEv2 y AmneziaWG, y cuándo Smart Connect debería elegirlo.',
      },
      fr: {
        title: 'Hysteria2 sur iOS dans FollowNet : quand les réseaux avec perte ont besoin d\'un chemin différent',
        excerpt: 'Pourquoi FollowNet livre Hysteria2 aux côtés de WireGuard, IKEv2 et AmneziaWG – et quand Smart Connect devrait le choisir.',
      },
      pt: {
        title: 'Hysteria2 no iOS no FollowNet: quando redes com perdas precisam de um caminho diferente',
        excerpt: 'Por que a FollowNet envia Hysteria2 junto com WireGuard, IKEv2 e AmneziaWG – e quando o Smart Connect deve escolhê-lo.',
      },
    },
  },
  {
    slug: 'free-vs-premium-honest',
    date: '2026-06-12',
    minutes: 7,
    topic: 'product',
    translations: {
      en: {
        title: 'Free vs Premium without the fine print theater',
        excerpt: 'What FollowNet Free actually includes, when Premium is worth it, how weekly traffic works, and what we refuse to hide in a nine-point footer.',
      },
      ru: {
        title: 'Free и Premium без мелкого шрифта',
        excerpt: 'Что реально даёт FollowNet Free, когда нужен Premium, как работает недельный лимит и что мы не прячем в девятистрочный футер.',
      },
      uk: {
        title: 'Free і Premium без дрібного шрифту',
        excerpt: 'Що насправді дає FollowNet Free, коли варто брати Premium, як працює тижневий ліміт і що ми не ховаємо в дев’ятирядковий футер.',
      },
      de: {
        title: 'Free vs. Premium ohne Kleingedrucktes',
        excerpt: 'Was FollowNet Free wirklich enthält, wann Premium sinnvoll ist, wie der Wochen-Traffic funktioniert und was wir nicht in einer 9-Punkte-Fußzeile verstecken.',
      },
      es: {
        title: 'Gratis vs Premium sin letra pequeña',
        excerpt: 'Qué incluye realmente FollowNet Free, cuándo vale Premium, cómo funciona el tráfico semanal y qué nos negamos a ocultar en un pie de 9 puntos.',
      },
      fr: {
        title: 'Gratuit vs Premium sans le théâtre des petits caractères',
        excerpt: 'Ce que FollowNet Free inclut vraiment, quand Premium vaut le coup, comment marche le trafic hebdomadaire, et ce que nous refusons de cacher.',
      },
      pt: {
        title: 'Gratuito vs Premium sem as letras miúdas',
        excerpt: 'O que o FollowNet Free realmente inclui, quando o Premium vale a pena, como funciona o tráfego semanal e o que nos recusamos a esconder.',
      },
    },
  },
  {
    slug: 'speed-test-in-app',
    date: '2026-06-01',
    minutes: 5,
    topic: 'guides',
    translations: {
      en: {
        title: 'Using FollowNet Speed Test before you blame the VPN',
        excerpt: 'A short method: baseline without VPN, compare servers and protocols, and read results against your Free weekly limit.',
      },
      ru: {
        title: 'Speed Test в FollowNet: прежде чем винить VPN',
        excerpt: 'Короткий метод: baseline без VPN, сравнение серверов и протоколов, учёт недельного лимита Free.',
      },
      uk: {
        title: 'Використовуйте перевірку швидкості FollowNet, перш ніж звинувачувати VPN',
        excerpt: 'Короткий метод: базовий рівень без VPN, порівняння серверів і протоколів і зчитування результатів із вашим тижневим безкоштовним лімітом.',
      },
      de: {
        title: 'Verwenden Sie den FollowNet-Geschwindigkeitstest, bevor Sie dem VPN die Schuld geben',
        excerpt: 'Eine kurze Methode: Baseline ohne VPN, Server und Protokolle vergleichen und Ergebnisse mit Ihrem kostenlosen wöchentlichen Limit vergleichen.',
      },
      es: {
        title: 'Usando la prueba de velocidad de FollowNet antes de culpar a la VPN',
        excerpt: 'Un método breve: línea de base sin VPN, compare servidores y protocolos, y lea los resultados con respecto a su límite semanal gratuito.',
      },
      fr: {
        title: 'Utiliser FollowNet Speed ​​Test avant de blâmer le VPN',
        excerpt: 'Une méthode courte : référence sans VPN, comparez les serveurs et les protocoles et lisez les résultats par rapport à votre limite hebdomadaire gratuite.',
      },
      pt: {
        title: 'Usando o teste de velocidade FollowNet antes de culpar a VPN',
        excerpt: 'Um método curto: linha de base sem VPN, compare servidores e protocolos e leia os resultados em relação ao seu limite semanal gratuito.',
      },
    },
  },
  {
    slug: 'which-protocol-when',
    date: '2026-05-28',
    minutes: 8,
    topic: 'guides',
    translations: {
      en: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — which protocol when',
        excerpt: 'A practical map of FollowNet protocols on iOS: speed, stability, and what to use when a network fights VPNs.',
      },
      ru: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — какой протокол когда',
        excerpt: 'Практичная карта протоколов FollowNet на iOS: скорость, стабильность и что включать, когда сеть душит VPN.',
      },
      uk: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — який протокол коли',
        excerpt: 'Практична карта протоколів FollowNet на iOS: швидкість, стабільність і що вмикати, коли мережа душить VPN.',
      },
      de: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 – welches Protokoll wann',
        excerpt: 'Eine praktische Karte der FollowNet-Protokolle auf iOS: Geschwindigkeit, Stabilität und was zu tun ist, wenn ein Netz VPNs bekämpft.',
      },
      es: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2: qué protocolo y cuándo',
        excerpt: 'Un mapa práctico de los protocolos FollowNet en iOS: velocidad, estabilidad y qué usar cuando una red pelea con las VPN.',
      },
      fr: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — quel protocole quand',
        excerpt: 'Une carte pratique des protocoles FollowNet sur iOS : vitesse, stabilité et quoi utiliser quand un réseau combat les VPN.',
      },
      pt: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — qual protocolo quando',
        excerpt: 'Um mapa prático dos protocolos FollowNet no iOS: velocidade, estabilidade e o que usar quando uma rede luta contra VPNs.',
      },
    },
  },
  {
    slug: 'app-store-vpn-review',
    date: '2026-05-10',
    minutes: 5,
    topic: 'updates',
    translations: {
      en: {
        title: 'Shipping a VPN through App Store review: constraints that shaped FollowNet',
        excerpt: 'Network Extension, entitlements, and review edges — why FollowNet stays an App Store native iOS client.',
      },
      ru: {
        title: 'VPN через App Store Review: ограничения, которые сформировали FollowNet',
        excerpt: 'Network Extension, entitlements и нюансы ревью — почему FollowNet остаётся нативным iOS-клиентом из App Store.',
      },
      uk: {
        title: 'Огляд доставки VPN через App Store: обмеження, які сформували FollowNet',
        excerpt: 'Розширення мережі, повноваження та переваги перегляду — чому FollowNet залишається рідним клієнтом iOS для App Store.',
      },
      de: {
        title: 'Überprüfung des Versands eines VPN über den App Store: Einschränkungen, die FollowNet geprägt haben',
        excerpt: 'Netzwerkerweiterung, Berechtigungen und Überprüfungsgrenzen – warum FollowNet ein nativer iOS-Client im App Store bleibt.',
      },
      es: {
        title: 'Envío de una VPN a través de la revisión de la App Store: limitaciones que dieron forma a FollowNet',
        excerpt: 'Extensión de red, derechos y márgenes de revisión: por qué FollowNet sigue siendo un cliente iOS nativo de la App Store.',
      },
      fr: {
        title: 'Examen de l\'expédition d\'un VPN via l\'App Store : les contraintes qui ont façonné FollowNet',
        excerpt: 'Extension réseau, droits et limites de révision : pourquoi FollowNet reste un client iOS natif de l\'App Store.',
      },
      pt: {
        title: 'Revisão do envio de uma VPN pela App Store: restrições que moldaram o FollowNet',
        excerpt: 'Extensão de rede, direitos e bordas de revisão – por que o FollowNet continua sendo um cliente iOS nativo da App Store.',
      },
    },
  },
];

export function homeLearnTeasers(lang: AppLang): BlogTeaser[] {
  return HOME_LEARN_TEASERS.map((meta) => ({
    slug: meta.slug,
    date: meta.date,
    minutes: meta.minutes,
    topic: meta.topic,
    title: meta.translations[lang].title,
    excerpt: meta.translations[lang].excerpt,
  }));
}

export function blogTeaserTopicLabel(topic: BlogTeaserTopic, lang: AppLang): string {
  const map: Record<BlogTeaserTopic, Record<AppLang, string>> = {
    product: { en: 'Product', ru: 'Продукт', uk: 'Продукт', de: 'Produkt', es: 'Producto', fr: 'Produit', pt: 'Produto' },
    updates: { en: 'Updates', ru: 'Обновления', uk: 'Оновлення', de: 'Neuigkeiten', es: 'Novedades', fr: 'Actualités', pt: 'Novidades' },
    guides: { en: 'Guides', ru: 'Руководства', uk: 'Посібники', de: 'Ratgeber', es: 'Guías', fr: 'Guides', pt: 'Guias' },
  };
  return map[topic][lang];
}
