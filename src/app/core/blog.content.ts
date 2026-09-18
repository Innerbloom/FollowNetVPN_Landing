import { AppLang } from './i18n.service';
import { EXTRA_BLOG_POSTS } from './blog.extra-posts';

export type BlogTopic = 'product' | 'updates' | 'guides';

export type BlogSection = {
  title: string;
  body: string;
};

export type BlogPostLocalized = {
  title: string;
  excerpt: string;
  sections: BlogSection[];
};

export type BlogPostMeta = {
  slug: string;
  date: string;
  minutes: number;
  topic: BlogTopic;
  translations: Record<AppLang, BlogPostLocalized>;
};

const CORE_BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'follownet-features-overview',
    date: '2026-08-01',
    minutes: 7,
    topic: 'product',
    translations: {
      en: {
        title:
          'FollowNet features: Smart Connect, protocols, DNS, Auto-connect, and more',
        excerpt:
          'A full tour of what ships in the iOS app and Chrome extension — protocols, Smart Connect, Auto-connect, DNS, Network Profiles, widgets, Speed Test, and Free vs Premium.',
        sections: [
          {
            title: 'Protocols + Smart Connect',
            body: 'In Settings → VPN Protocol you can pick Smart (recommended), IKEv2, WireGuard, AmneziaWG, or Hysteria2. Smart Connect chooses a working path from WireGuard / AmneziaWG / Hysteria2 / IKEv2 using network context and fallbacks when a handshake fails. Optimal location picks a server by ping.',
          },
          {
            title: 'Auto-connect, DNS, Network Profiles',
            body: 'Auto-connect modes: Disabled, Wi‑Fi Only, LTE Only, or Always (iOS on-demand rules). DNS presets: Default, Cloudflare, Google, AdGuard, AdGuard Family, Quad9. Network Profiles bundle protocol + DNS + auto-connect + server mode (Fastest / Last used / Specific) — presets Smart, Public WiFi, Travel, plus custom profiles.',
          },
          {
            title: 'Speed Test, Statistics, widgets, Shortcuts',
            body: 'In-app Speed Test measures download, upload, latency, and jitter while connected. Statistics covers today and the week. The VPN Status widget shows country, timer, and ping. Apple Shortcuts: Connect, Disconnect, Apply VPN Profile.',
          },
          {
            title: 'Free vs Premium + Chrome',
            body: 'Free has a weekly traffic cap and core servers; Premium unlocks unlimited traffic, all servers, up to 5 devices, and an ad-free experience. Chrome adds a browser proxy, protection if that proxy disconnects, and EasyList/AdGuard ad blocking. It protects Chrome traffic only: full-device macOS and Android apps are not available yet.',
          },
        ],
      },
      ru: {
        title:
          'Возможности FollowNet: Smart Connect, протоколы, DNS, автоподключение и остальное',
        excerpt:
          'Полный обзор того, что есть в iOS-приложении и Chrome: протоколы, Smart Connect, автоподключение, DNS, профили сети, виджеты, Speed Test и Free vs Premium.',
        sections: [
          {
            title: 'Протоколы + Smart Connect',
            body: 'В Настройки → Протокол VPN: Smart (рекомендуется), IKEv2, WireGuard, AmneziaWG или Hysteria2. Smart Connect выбирает рабочий путь из WireGuard / AmneziaWG / Hysteria2 / IKEv2 с учётом сети и переключается на резервный вариант при ошибке установления соединения. Optimal location — сервер по пингу.',
          },
          {
            title: 'Автоподключение, DNS, профили сети',
            body: 'Автоподключение: Выкл, только Wi‑Fi, только LTE или Всегда (on-demand iOS). DNS: Default, Cloudflare, Google, AdGuard, AdGuard Family, Quad9. Профили сети собирают протокол + DNS + автоподключение + режим сервера (Самый быстрый / Последний / Конкретный) — пресеты Smart, Public WiFi, Travel и свои профили.',
          },
          {
            title: 'Speed Test, статистика, виджеты, Команды',
            body: 'Speed Test в приложении: download, upload, latency, jitter при активном VPN. Статистика за сегодня и неделю. Виджет VPN Status — страна, таймер, пинг. Apple Команды: Подключить, Отключить, Применить профиль.',
          },
          {
            title: 'Free vs Premium + Chrome',
            body: 'В Free действует недельный лимит трафика и доступны основные серверы; Premium даёт безлимитный трафик, все серверы, до 5 устройств и работу без рекламы. Расширение Chrome включает прокси для браузера, защиту при разрыве прокси и блокировку рекламы по спискам EasyList/AdGuard. Оно защищает только трафик Chrome: приложений для всей системы на macOS и Android пока нет.',
          },
        ],
      },
      de: {
        title:
          'FollowNet-Funktionen: Smart Connect, Protokolle, DNS, Auto-Connect und mehr',
        excerpt:
          'Eine vollständige Übersicht über den Lieferumfang der iOS-App und der Chrome-Erweiterung – Protokolle, Smart Connect, Auto-Connect, DNS, Netzwerkprofile, Widgets, Geschwindigkeitstest und Free vs. Premium.',
        sections: [
          {
            title: 'Protokolle + Smart Connect',
            body: 'Unter Einstellungen → VPN-Protokoll können Sie Smart (empfohlen), IKEv2, WireGuard, AmneziaWG oder Hysteria2 auswählen. Smart Connect wählt einen Arbeitspfad von WireGuard / AmneziaWG / Hysteria2 / IKEv2 unter Verwendung des Netzwerkkontexts und von Fallbacks, wenn ein Handshake fehlschlägt. Der optimale Standort wählt einen Server per Ping aus.',
          },
          {
            title: 'Automatische Verbindung, DNS, Netzwerkprofile',
            body: 'Automatische Verbindungsmodi: Deaktiviert, Nur WLAN, Nur LTE oder Immer (iOS-On-Demand-Regeln). DNS-Voreinstellungen: Standard, Cloudflare, Google, AdGuard, AdGuard Family, Quad9. Netzwerkprofile bündeln Protokoll + DNS + automatische Verbindung + Servermodus (Schnellste / Zuletzt verwendet / Spezifisch) – Voreinstellungen: Smart, Öffentliches WLAN, Reisen sowie benutzerdefinierte Profile.',
          },
          {
            title: 'Geschwindigkeitstest, Statistiken, Widgets, Verknüpfungen',
            body: 'Der In-App-Geschwindigkeitstest misst Download, Upload, Latenz und Jitter während der Verbindung. Die Statistik umfasst heute und die Woche. Das VPN-Status-Widget zeigt Land, Timer und Ping an. Apple-Verknüpfungen: Verbinden, Trennen, VPN-Profil anwenden.',
          },
          {
            title: 'Kostenlos vs. Premium + Chrome',
            body: 'Free hat eine wöchentliche Traffic-Obergrenze und Kernserver; Premium schaltet unbegrenzten Datenverkehr, alle Server, bis zu 5 Geräte und ein werbefreies Erlebnis frei. Chrome fügt einen Browser-Proxy, Schutz bei Verbindungsabbrüchen dieses Proxys und EasyList/AdGuard-Werbeblocker hinzu. Es schützt nur den Chrome-Datenverkehr: Vollständige macOS- und Android-Apps sind noch nicht verfügbar.',
          },
        ],
      },
      es: {
        title:
          'Funciones de FollowNet: Smart Connect, protocolos, DNS, conexión automática y más',
        excerpt:
          'Un recorrido completo por lo que se incluye en la aplicación iOS y la extensión de Chrome: protocolos, Smart Connect, conexión automática, DNS, perfiles de red, widgets, prueba de velocidad y Free vs Premium.',
        sections: [
          {
            title: 'Protocolos + Conexión Inteligente',
            body: 'En Configuración → Protocolo VPN puede elegir Smart (recomendado), IKEv2, WireGuard, AmneziaWG o Hysteria2. Smart Connect elige una ruta de trabajo desde WireGuard / AmneziaWG / Hysteria2 / IKEv2 utilizando el contexto de red y respaldos cuando falla un protocolo de enlace. La ubicación óptima elige un servidor mediante ping.',
          },
          {
            title: 'Conexión automática, DNS, perfiles de red',
            body: 'Modos de conexión automática: Desactivado, Solo Wi‑Fi, Solo LTE o Siempre (reglas bajo demanda de iOS). Ajustes preestablecidos de DNS: Predeterminado, Cloudflare, Google, AdGuard, Familia AdGuard, Quad9. Protocolo de paquete de perfiles de red + DNS + conexión automática + modo de servidor (más rápido/último usado/específico): ajustes preestablecidos inteligente, WiFi público, viajes y perfiles personalizados.',
          },
          {
            title: 'Prueba de velocidad, Estadísticas, widgets, Atajos',
            body: 'La prueba de velocidad en la aplicación mide la descarga, carga, latencia y fluctuación mientras está conectado. Las estadísticas cubren hoy y la semana. El widget Estado de VPN muestra el país, el temporizador y el ping. Atajos de Apple: conectar, desconectar, aplicar perfil VPN.',
          },
          {
            title: 'Gratis frente a Premium + Chrome',
            body: 'Gratis tiene un límite de tráfico semanal y servidores centrales; Premium desbloquea tráfico ilimitado, todos los servidores, hasta 5 dispositivos y una experiencia sin publicidad. Chrome agrega un proxy de navegador, protección si ese proxy se desconecta y bloqueo de anuncios EasyList/AdGuard. Protege únicamente el tráfico de Chrome: las aplicaciones con VPN para todo el sistema en macOS y Android aún no están disponibles.',
          },
        ],
      },
      fr: {
        title:
          'Fonctionnalités FollowNet : Smart Connect, protocoles, DNS, connexion automatique, etc.',
        excerpt:
          "Une visite complète de ce qui est fourni dans l'application iOS et l'extension Chrome : protocoles, Smart Connect, connexion automatique, DNS, profils réseau, widgets, test de vitesse et Free vs Premium.",
        sections: [
          {
            title: 'Protocoles + Smart Connect',
            body: "Dans Paramètres → Protocole VPN, vous pouvez choisir Smart (recommandé), IKEv2, WireGuard, AmneziaWG ou Hysteria2. Smart Connect choisit un chemin de travail parmi WireGuard / AmneziaWG / Hysteria2 / IKEv2 en utilisant le contexte réseau et les solutions de secours en cas d'échec d'une prise de contact. L'emplacement optimal sélectionne un serveur par ping.",
          },
          {
            title: 'Connexion automatique, DNS, profils réseau',
            body: 'Modes de connexion automatique : Désactivé, Wi‑Fi uniquement, LTE uniquement ou Toujours (règles iOS à la demande). Préréglages DNS : Par défaut, Cloudflare, Google, AdGuard, AdGuard Family, Quad9. Protocole de regroupement de profils réseau + DNS + connexion automatique + mode serveur (le plus rapide/dernier utilisé/spécifique) — préréglages Smart, WiFi public, Voyage, ainsi que des profils personnalisés.',
          },
          {
            title: 'Test de vitesse, statistiques, widgets, raccourcis',
            body: "Le test de vitesse intégré à l'application mesure le téléchargement, le téléchargement, la latence et la gigue lors de la connexion. Les statistiques couvrent aujourd'hui et la semaine. Le widget État VPN affiche le pays, la minuterie et le ping. Raccourcis Apple : connecter, déconnecter, appliquer le profil VPN.",
          },
          {
            title: 'Gratuit ou Premium + Chrome',
            body: "Free a un plafond de trafic hebdomadaire et des serveurs principaux ; Premium débloque un trafic illimité, tous les serveurs, jusqu'à 5 appareils et une expérience sans publicité. Chrome ajoute un proxy de navigateur, une protection si ce proxy se déconnecte et un blocage des publicités EasyList/AdGuard. Il protège uniquement le trafic Chrome : les applications VPN couvrant tout le système ne sont pas encore disponibles sur macOS et Android.",
          },
        ],
      },
      pt: {
        title:
          'Recursos do FollowNet: Smart Connect, protocolos, DNS, conexão automática e muito mais',
        excerpt:
          'Um tour completo do que vem no aplicativo iOS e na extensão do Chrome – protocolos, Smart Connect, conexão automática, DNS, perfis de rede, widgets, teste de velocidade e gratuito x premium.',
        sections: [
          {
            title: 'Protocolos + Conexão Inteligente',
            body: 'Em Configurações → Protocolo VPN você pode escolher Smart (recomendado), IKEv2, WireGuard, AmneziaWG ou Hysteria2. O Smart Connect escolhe um caminho de trabalho de WireGuard/AmneziaWG/Hysteria2/IKEv2 usando contexto de rede e substitutos quando um handshake falha. A localização ideal escolhe um servidor por ping.',
          },
          {
            title: 'Conexão automática, DNS, perfis de rede',
            body: 'Modos de conexão automática: Desativado, Somente Wi-Fi, Somente LTE ou Sempre (regras sob demanda do iOS). Predefinições de DNS: Padrão, Cloudflare, Google, AdGuard, Família AdGuard, Quad9. Protocolo de pacote de perfis de rede + DNS + conexão automática + modo de servidor (mais rápido / último usado / específico) - predefinições inteligentes, WiFi público, viagens, além de perfis personalizados.',
          },
          {
            title: 'Teste de velocidade, estatísticas, widgets, atalhos',
            body: 'O teste de velocidade no aplicativo mede download, upload, latência e instabilidade enquanto conectado. As estatísticas cobrem hoje e a semana. O widget Status da VPN mostra país, cronômetro e ping. Atalhos da Apple: conectar, desconectar, aplicar perfil VPN.',
          },
          {
            title: 'Grátis vs Premium + Chrome',
            body: 'Gratuito tem limite de tráfego semanal e servidores principais; Premium desbloqueia tráfego ilimitado, todos os servidores, até 5 dispositivos e uma experiência sem anúncios. O Chrome adiciona um proxy de navegador, proteção caso esse proxy seja desconectado e bloqueio de anúncios EasyList/AdGuard. Ele protege apenas o tráfego do Chrome: ainda não há aplicativos com VPN para todo o sistema no macOS e Android.',
          },
        ],
      },
      uk: {
        title:
          'Функції FollowNet: Smart Connect, протоколи, DNS, автоматичне підключення тощо',
        excerpt:
          'Повний огляд того, що постачається в додатку для iOS і розширенні для Chrome — протоколи, Smart Connect, автоматичне підключення, DNS, мережеві профілі, віджети, перевірка швидкості та Free vs Premium.',
        sections: [
          {
            title: 'Протоколи + Smart Connect',
            body: 'У налаштуваннях → Протокол VPN ви можете вибрати Smart (рекомендовано), IKEv2, WireGuard, AmneziaWG або Hysteria2. Smart Connect вибирає робочий шлях із WireGuard / AmneziaWG / Hysteria2 / IKEv2, з урахуванням мережі та перемикається на резервний варіант, якщо не вдається встановити з’єднання. Оптимальне розташування вибирає сервер за допомогою ping.',
          },
          {
            title: 'Автоматичне підключення, DNS, мережеві профілі',
            body: 'Режими автоматичного підключення: вимкнено, лише Wi‑Fi, лише LTE або завжди (правила iOS за запитом). Попередні налаштування DNS: за замовчуванням, Cloudflare, Google, AdGuard, AdGuard Family, Quad9. Пакет протоколів мережевих профілів + DNS + автоматичне підключення + режим сервера (найшвидший/останній використаний/специфічний) — попередні налаштування Smart, Public WiFi, Travel, а також спеціальні профілі.',
          },
          {
            title: 'Тест швидкості, статистика, віджети, ярлики',
            body: 'Тест швидкості в застосунку вимірює швидкість завантаження й віддавання, затримку та джиттер під час підключення. Статистика охоплює сьогоднішній день і тиждень. Віджет Статус VPN показує країну, таймер і ping. Ярлики Apple: підключення, відключення, застосування профілю VPN.',
          },
          {
            title: 'Безкоштовно проти Premium + Chrome',
            body: 'Free має тижневе обмеження трафіку та основні сервери; Преміум відкриває необмежений трафік, усі сервери, до 5 пристроїв і без реклами. Chrome додає проксі-сервер браузера, захист, якщо цей проксі-сервер від’єднується, і блокування реклами EasyList/AdGuard. Він захищає лише трафік Chrome: повноцінні програми macOS і Android поки що недоступні.',
          },
        ],
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
        excerpt:
          'What FollowNet Free actually includes, when Premium is worth it, how weekly traffic works, and what we refuse to hide in a nine-point footer.',
        sections: [
          { title: 'Free is real — capped weekly on purpose', body: 'FollowNet Free is not a demo banner. You get a working iOS VPN with core servers, modern protocols, Smart Connect, DNS presets, Network Profiles, Speed Test, and the same account for Chrome. The limit is weekly traffic — never a daily refill trick — so Free stays honest evaluation capacity, not “unlimited forever” marketing.' },
          { title: 'What ships on Free today', body: 'On iPhone and iPad, Free connects within the weekly allowance shown in the app. You can try WireGuard, IKEv2, AmneziaWG, Hysteria2, or Smart Connect, pick Free locations for your plan, and use Auto-connect where available. No credit card is required to start Free on iPhone.' },
          { title: 'What Premium actually unlocks', body: 'Premium removes the weekly traffic cap (unlimited traffic), unlocks Premium locations for the current plan, supports up to five devices on one subscription, and keeps the experience ad-free. Premium is capacity and convenience — not stronger encryption. Free and Premium use the same protocol stack.' },
          { title: 'How to upgrade without theater', body: 'Most users upgrade in the iOS app via Apple In-App Purchase. When web checkout is enabled, Premium is also available through WayForPay on follow-net.com — same account, different payment surface. Eligible App Store accounts may see an annual Premium trial at purchase; availability is controlled by Apple and shown on the pay screen, not invented in a blog post.' },
          { title: 'Chrome and platform scope', body: 'The Chrome extension is a browser proxy with Kill Switch and EasyList/AdGuard ad blocking — not a macOS, Android, or Windows system VPN. It shares your FollowNet account and plan limits across surfaces. Full-device macOS and Android apps are not available yet.' },
          { title: 'What we will not claim', body: 'We will not sell absolute no-logs theater, mixnet marketing, or “Premium = military-grade double encryption.” Read https://follow-net.com/privacy for data handling. If Free’s weekly traffic is enough, stay. If you need unlimited traffic, upgrade — no dark-pattern countdown required.' },
        ],
      },
      ru: {
        title: 'Free и Premium без мелкого шрифта',
        excerpt:
          'Что реально даёт FollowNet Free, когда нужен Premium, как работает недельный лимит и что мы не прячем в девятистрочный футер.',
        sections: [
          { title: 'Free настоящий — недельный лимит осознанно', body: 'FollowNet Free — не демо-баннер. Рабочий VPN на iOS: базовые серверы, современные протоколы, Smart Connect, DNS, профили сети, Speed Test и тот же аккаунт для Chrome. Лимит — недельный трафик, не «ежедневная хитрость», чтобы Free оставался честной оценкой, а не сказкой про «безлимит навсегда».' },
          { title: 'Что есть в Free сегодня', body: 'На iPhone и iPad Free работает в рамках недельного объёма, показанного в приложении. Можно пробовать WireGuard, IKEv2, AmneziaWG, Hysteria2 или Smart Connect, выбирать Free-локации плана и Auto-connect, где доступно. Для старта Free на iPhone карта не нужна.' },
          { title: 'Что реально открывает Premium', body: 'Premium снимает недельный лимит (безлимитный трафик), открывает Premium-локации текущего плана, поддерживает до пяти устройств на одной подписке и убирает рекламу. Premium — ёмкость и удобство, не «более сильное шифрование». Free и Premium используют один стек протоколов.' },
          { title: 'Как апгрейдить без театра', body: 'Чаще всего апгрейд идёт в iOS-приложении через Apple In-App Purchase. Когда включён web checkout, Premium также доступен через WayForPay на follow-net.com — тот же аккаунт, другая оплата. Eligible-аккаунтам App Store может показаться trial годового Premium при покупке; условия задаёт Apple на экране оплаты, а не блог-пост.' },
          { title: 'Chrome и границы платформ', body: 'Расширение Chrome — прокси браузера с Kill Switch и блокировкой EasyList/AdGuard, не системный VPN для macOS, Android или Windows. Один аккаунт FollowNet и общие лимиты плана. Полноценных приложений для macOS и Android пока нет.' },
          { title: 'Чего мы не обещаем', body: 'Не продаём абсолютный no-logs, mixnet-маркетинг и «Premium = военное двойное шифрование». Данные — в https://follow-net.com/privacy. Хватает недельного Free — оставайтесь. Нужен безлимит — апгрейд без тёмных паттернов и фейковых таймеров.' },
        ],
      },
      de: {
        title: 'Free vs. Premium ohne Kleingedrucktes',
        excerpt:
          'Was FollowNet Free wirklich enthält, wann Premium sinnvoll ist, wie der Wochen-Traffic funktioniert und was wir nicht in einer 9-Punkte-Fußzeile verstecken.',
        sections: [
          { title: 'Free ist echt – wöchentlich begrenzt mit Absicht', body: 'FollowNet Free ist kein Demobanner. Sie bekommen ein echtes iOS-VPN mit Kernservern, modernen Protokollen, Smart Connect, DNS-Presets, Netzwerkprofilen, Speed Test und demselben Konto für Chrome. Das Limit ist wöchentlicher Traffic – kein täglicher Refill-Trick –, damit Free ehrliche Evaluierung bleibt und kein „unbegrenzt für immer“-Marketing.' },
          { title: 'Was Free heute liefert', body: 'Auf iPhone und iPad verbindet Free innerhalb der im App gezeigten Wochenmenge. Sie können WireGuard, IKEv2, AmneziaWG, Hysteria2 oder Smart Connect testen, Free-Standorte Ihres Plans wählen und Auto-connect nutzen, wo verfügbar. Zum Start von Free auf dem iPhone ist keine Kreditkarte nötig.' },
          { title: 'Was Premium wirklich freischaltet', body: 'Premium entfernt die wöchentliche Traffic-Grenze (unbegrenzter Traffic), schaltet Premium-Standorte des aktuellen Plans frei, unterstützt bis zu fünf Geräte auf einem Abo und bleibt werbefrei. Premium ist Kapazität und Komfort – nicht stärkere Verschlüsselung. Free und Premium teilen denselben Protokoll-Stack.' },
          { title: 'Upgrade ohne Theater', body: 'Die meisten upgraden in der iOS-App über Apple In-App Purchase. Wenn Web-Checkout aktiv ist, ist Premium auch über WayForPay auf follow-net.com verfügbar – gleiches Konto, andere Zahlung. Eligible App-Store-Konten können beim Kauf einen Jahres-Premium-Trial sehen; Verfügbarkeit steuert Apple auf dem Bezahlbildschirm, nicht ein Blogpost.' },
          { title: 'Chrome und Plattformumfang', body: 'Die Chrome-Erweiterung ist ein Browser-Proxy mit Kill Switch und EasyList/AdGuard-Werbeblock – kein System-VPN für macOS, Android oder Windows. Sie teilt Ihr FollowNet-Konto und Planlimits. Vollständige macOS- und Android-Apps gibt es noch nicht.' },
          { title: 'Was wir nicht behaupten', body: 'Wir verkaufen kein absolutes No-Logs-Theater, kein Mixnet-Marketing und kein „Premium = militärische Doppelverschlüsselung“. Datenhandling: https://follow-net.com/privacy. Reicht der Free-Wochen-Traffic – bleiben Sie. Brauchen Sie unlimited – upgrade ohne Dark-Pattern-Countdown.' },
        ],
      },
      es: {
        title: 'Gratis vs Premium sin letra pequeña',
        excerpt:
          'Qué incluye realmente FollowNet Free, cuándo vale Premium, cómo funciona el tráfico semanal y qué nos negamos a ocultar en un pie de 9 puntos.',
        sections: [
          { title: 'Free es real — límite semanal a propósito', body: 'FollowNet Free no es un banner demo. Obtienes un VPN iOS real con servidores principales, protocolos modernos, Smart Connect, DNS, perfiles de red, Speed Test y la misma cuenta para Chrome. El límite es tráfico semanal — nunca un truco de recarga diaria — para que Free sea evaluación honesta, no marketing de “ilimitado para siempre”.' },
          { title: 'Qué incluye Free hoy', body: 'En iPhone y iPad, Free conecta dentro de la cuota semanal mostrada en la app. Puedes probar WireGuard, IKEv2, AmneziaWG, Hysteria2 o Smart Connect, elegir ubicaciones Free de tu plan y usar Auto-connect donde esté disponible. No hace falta tarjeta para empezar Free en iPhone.' },
          { title: 'Qué desbloquea Premium de verdad', body: 'Premium quita el tope semanal (tráfico ilimitado), abre ubicaciones Premium del plan actual, admite hasta cinco dispositivos en una suscripción y mantiene la experiencia sin anuncios. Premium es capacidad y comodidad — no cifrado más fuerte. Free y Premium usan el mismo stack de protocolos.' },
          { title: 'Cómo subir de plan sin teatro', body: 'La mayoría actualiza en la app iOS vía Apple In-App Purchase. Cuando el checkout web está activo, Premium también está en WayForPay en follow-net.com — misma cuenta, otro pago. Cuentas App Store eligible pueden ver un trial anual de Premium al comprar; lo controla Apple en la pantalla de pago, no un post del blog.' },
          { title: 'Chrome y alcance de plataformas', body: 'La extensión de Chrome es un proxy del navegador con Kill Switch y bloqueo EasyList/AdGuard — no un VPN de sistema para macOS, Android o Windows. Comparte tu cuenta FollowNet y los límites del plan. Aún no hay apps nativas macOS ni Android.' },
          { title: 'Lo que no afirmaremos', body: 'No vendemos teatro de no-logs absoluto, marketing mixnet ni “Premium = cifrado militar doble”. Datos: https://follow-net.com/privacy. Si el tráfico semanal Free basta, quédate. Si necesitas ilimitado, actualiza — sin contadores oscuros.' },
        ],
      },
      fr: {
        title: 'Gratuit vs Premium sans le théâtre des petits caractères',
        excerpt:
          'Ce que FollowNet Free inclut vraiment, quand Premium vaut le coup, comment marche le trafic hebdomadaire, et ce que nous refusons de cacher.',
        sections: [
          { title: 'Free est réel — plafonné hebdomadaire volontairement', body: 'FollowNet Free n’est pas une bannière démo. Vous avez un vrai VPN iOS : serveurs principaux, protocoles modernes, Smart Connect, DNS, profils réseau, Speed Test et le même compte pour Chrome. La limite est un trafic hebdomadaire — jamais une astuce de recharge quotidienne — pour une évaluation honnête, pas du marketing « illimité pour toujours ».' },
          { title: 'Ce que Free offre aujourd’hui', body: 'Sur iPhone et iPad, Free se connecte dans l’allocation hebdomadaire affichée dans l’app. Vous pouvez essayer WireGuard, IKEv2, AmneziaWG, Hysteria2 ou Smart Connect, choisir des emplacements Free du plan et utiliser Auto-connect si disponible. Aucune carte n’est requise pour démarrer Free sur iPhone.' },
          { title: 'Ce que Premium débloque vraiment', body: 'Premium retire le plafond hebdomadaire (trafic illimité), ouvre les emplacements Premium du plan actuel, prend en charge jusqu’à cinq appareils sur un abonnement et reste sans pubs. Premium, c’est capacité et confort — pas un chiffrement plus fort. Free et Premium partagent la même pile de protocoles.' },
          { title: 'Upgrader sans théâtre', body: 'La plupart upgradent dans l’app iOS via Apple In-App Purchase. Quand le checkout web est actif, Premium est aussi dispo via WayForPay sur follow-net.com — même compte, autre paiement. Les comptes App Store eligible peuvent voir un essai annuel Premium à l’achat ; Apple contrôle ça sur l’écran de paiement, pas un article de blog.' },
          { title: 'Chrome et périmètre des plateformes', body: 'L’extension Chrome est un proxy navigateur avec Kill Switch et blocage EasyList/AdGuard — pas un VPN système macOS, Android ou Windows. Elle partage votre compte FollowNet et les limites du plan. Pas encore d’apps natives macOS ni Android.' },
          { title: 'Ce que nous ne revendiquerons pas', body: 'Nous ne vendons pas le théâtre du no-logs absolu, le marketing mixnet, ni « Premium = double chiffrement militaire ». Données : https://follow-net.com/privacy. Si le trafic Free hebdomadaire suffit, restez. Besoin d’illimité — upgradez sans countdown dark pattern.' },
        ],
      },
      pt: {
        title: 'Gratuito vs Premium sem as letras miúdas',
        excerpt:
          'O que o FollowNet Free realmente inclui, quando o Premium vale a pena, como funciona o tráfego semanal e o que nos recusamos a esconder.',
        sections: [
          { title: 'Free é real — limite semanal de propósito', body: 'FollowNet Free não é um banner demo. Você tem um VPN iOS de verdade: servidores principais, protocolos modernos, Smart Connect, DNS, perfis de rede, Speed Test e a mesma conta no Chrome. O limite é tráfego semanal — nunca truque de recarga diária — para Free ser avaliação honesta, não marketing de “ilimitado para sempre”.' },
          { title: 'O que o Free oferece hoje', body: 'No iPhone e iPad, o Free conecta dentro da cota semanal mostrada no app. Você pode testar WireGuard, IKEv2, AmneziaWG, Hysteria2 ou Smart Connect, escolher locais Free do plano e usar Auto-connect onde disponível. Não precisa de cartão para começar o Free no iPhone.' },
          { title: 'O que o Premium realmente desbloqueia', body: 'Premium remove o teto semanal (tráfego ilimitado), libera locais Premium do plano atual, permite até cinco dispositivos numa assinatura e mantém a experiência sem anúncios. Premium é capacidade e comodidade — não criptografia mais forte. Free e Premium usam o mesmo stack de protocolos.' },
          { title: 'Como fazer upgrade sem teatro', body: 'A maioria faz upgrade no app iOS via Apple In-App Purchase. Quando o checkout web está ativo, Premium também está no WayForPay em follow-net.com — mesma conta, outro pagamento. Contas App Store eligible podem ver trial anual de Premium na compra; a Apple controla isso na tela de pagamento, não um post de blog.' },
          { title: 'Chrome e escopo das plataformas', body: 'A extensão do Chrome é um proxy do navegador com Kill Switch e bloqueio EasyList/AdGuard — não uma VPN de sistema para macOS, Android ou Windows. Ela compartilha sua conta FollowNet e os limites do plano. Ainda não há apps nativos de macOS nem Android.' },
          { title: 'O que não vamos afirmar', body: 'Não vendemos teatro de no-logs absoluto, marketing de mixnet nem “Premium = criptografia militar dupla”. Dados: https://follow-net.com/privacy. Se o tráfego semanal Free basta, fique. Se precisa de ilimitado, faça upgrade — sem countdown dark pattern.' },
        ],
      },
      uk: {
        title: 'Free і Premium без дрібного шрифту',
        excerpt:
          'Що насправді дає FollowNet Free, коли варто брати Premium, як працює тижневий ліміт і що ми не ховаємо в дев’ятирядковий футер.',
        sections: [
          { title: 'Free справжній — тижневий ліміт свідомо', body: 'FollowNet Free — не демо-банер. Робочий VPN на iOS: базові сервери, сучасні протоколи, Smart Connect, DNS, профілі мережі, Speed Test і той самий акаунт для Chrome. Ліміт — тижневий трафік, не «щоденна хитрість», щоб Free лишався чесною оцінкою, а не казкою про «безліміт назавжди».' },
          { title: 'Що є у Free сьогодні', body: 'На iPhone і iPad Free працює в межах тижневого обсягу, показаного в додатку. Можна пробувати WireGuard, IKEv2, AmneziaWG, Hysteria2 або Smart Connect, обирати Free-локації плану й Auto-connect, де доступно. Для старту Free на iPhone картка не потрібна.' },
          { title: 'Що насправді відкриває Premium', body: 'Premium знімає тижневий ліміт (безлімітний трафік), відкриває Premium-локації поточного плану, підтримує до п’яти пристроїв на одній підписці й прибирає рекламу. Premium — ємність і зручність, не «сильніше шифрування». Free і Premium використовують один стек протоколів.' },
          { title: 'Як апгрейдити без театру', body: 'Найчастіше апгрейд іде в iOS-додатку через Apple In-App Purchase. Коли увімкнено web checkout, Premium також доступний через WayForPay на follow-net.com — той самий акаунт, інша оплата. Eligible-акаунтам App Store може показатися trial річного Premium при купівлі; умови задає Apple на екрані оплати, а не блог-пост.' },
          { title: 'Chrome і межі платформ', body: 'Розширення Chrome — проксі браузера з Kill Switch і блокуванням EasyList/AdGuard, не системний VPN для macOS, Android чи Windows. Один акаунт FollowNet і спільні ліміти плану. Повноцінних додатків для macOS і Android поки немає.' },
          { title: 'Чого ми не обіцяємо', body: 'Не продаємо абсолютний no-logs, mixnet-маркетинг і «Premium = військове подвійне шифрування». Дані — на https://follow-net.com/privacy. Вистачає тижневого Free — лишайтеся. Потрібен безліміт — апгрейд без темних патернів і фейкових таймерів.' },
        ],
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
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2, VLESS — which protocol when',
        excerpt:
          'A practical map of FollowNet protocols on iOS: speed, stability, and what to use when a network fights VPNs.',
        sections: [
          { title: 'Start with Smart Connect', body: 'For most people, leave Settings → VPN Protocol on Smart. Smart Connect uses network context and can fall through Hysteria2, VLESS Reality, AmneziaWG, WireGuard, and IKEv2 when a handshake fails or egress looks dead. Switch manually when you already know what a hotel Wi‑Fi or carrier blocks.' },
          { title: 'WireGuard for everyday speed', body: 'WireGuard is the everyday pick for calm Wi‑Fi and cellular: modern crypto, low overhead, strong for browsing and streaming. If Speed Test looks healthy and the tunnel stays up, stay here instead of chasing novelty protocols.' },
          { title: 'AmneziaWG when WireGuard is blocked', body: 'Some networks detect or throttle plain WireGuard. AmneziaWG keeps a WireGuard-like experience with obfuscation. Try it when WireGuard never handshakes on one network but works on LTE.' },
          { title: 'VLESS Reality on fingerprint-heavy paths', body: 'VLESS with REALITY-style camouflage is another option when UDP-heavy tunnels stall or look Connected without usable traffic. Smart Connect may try it on DPI-shaped ISPs; you can also lock it in Settings → Protocol. Confirm with a real page load and Speed Test.' },
          { title: 'IKEv2 for flaky mobile handoffs', body: 'IKEv2 still shines when you bounce between LTE and Wi‑Fi. Not always the fastest, but often the most boringly reliable on iOS mobility. Prefer it for commuting when tunnels flap more than they fail to start — Travel profile uses IKEv2 for that reason.' },
          { title: 'Hysteria2 on lossy or hostile paths', body: 'Hysteria2 helps on lossy, congested, or hostile paths. Use it after WireGuard/AmneziaWG struggle, then confirm with Speed Test. It is a tool for hard networks — not a permanent “faster everywhere” switch.' },
          { title: 'Manual override and Network Profiles', body: 'Pin a working protocol for a known bad location, or use presets: Public Wi‑Fi (WireGuard), Travel (IKEv2), Restricted (Smart + Always). Free and Premium share the same protocol toolkit — Free has weekly traffic, Premium is unlimited. Chrome on desktop is a browser proxy, not these iOS tunnel protocols; macOS and Android system apps are not available yet.' },
        ],
      },
      ru: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2, VLESS — какой протокол когда',
        excerpt:
          'Практичная карта протоколов FollowNet на iOS: скорость, стабильность и что включать, когда сеть душит VPN.',
        sections: [
          { title: 'Начните со Smart Connect', body: 'Большинству достаточно оставить Settings → VPN Protocol на Smart. Smart Connect учитывает сетевой контекст и может пройти Hysteria2 → VLESS Reality → AmneziaWG → WireGuard → IKEv2 при ошибке handshake или мёртвом egress. Ручной выбор — когда вы уже знаете, что режет отель или оператор.' },
          { title: 'WireGuard для повседневной скорости', body: 'WireGuard — базовый выбор для спокойного Wi‑Fi и LTE: современная криптография, низкий оверхед, удобно для браузинга и стриминга. Если Speed Test в норме и туннель держится — оставайтесь здесь.' },
          { title: 'AmneziaWG, когда WireGuard режут', body: 'Некоторые сети детектят или душат обычный WireGuard. AmneziaWG сохраняет похожий опыт с обфускацией. Имеет смысл, когда WireGuard не рукополагается на одной сети, но жив на LTE.' },
          { title: 'VLESS Reality на fingerprint-сетях', body: 'VLESS с REALITY-камуфляжем — ещё один путь, когда UDP-туннели зависают или выглядят Connected без трафика. Smart Connect может взять его на DPI-операторах; можно зафиксировать в Settings → Protocol. Подтверждайте реальной страницей и Speed Test.' },
          { title: 'IKEv2 для скачущего мобильного', body: 'IKEv2 силён при прыжках между LTE и Wi‑Fi. Не всегда самый быстрый, но на iOS часто самый надёжный в движении. Берите для поездок по городу — профиль Travel как раз на IKEv2.' },
          { title: 'Hysteria2 на потерях и враждебных каналах', body: 'Hysteria2 помогает на потерях, перегрузе и враждебных путях. Пробуйте после проблем с WireGuard/AmneziaWG и проверяйте Speed Test. Инструмент для жёстких сетей — не вечный переключатель «везде быстрее».' },
          { title: 'Ручной выбор и профили сети', body: 'Закрепите рабочий протокол или берите пресеты: Public Wi‑Fi (WireGuard), Travel (IKEv2), Restricted (Smart + Always). Free и Premium — один набор протоколов; Free с недельным трафиком, Premium безлимит. Chrome на десктопе — прокси браузера, не эти iOS-туннели; системных приложений macOS и Android пока нет.' },
        ],
      },
      de: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 – welches Protokoll wann',
        excerpt:
          'Eine praktische Karte der FollowNet-Protokolle auf iOS: Geschwindigkeit, Stabilität und was zu tun ist, wenn ein Netz VPNs bekämpft.',
        sections: [
          { title: 'Mit Smart Connect starten', body: 'Für die meisten reicht Settings → VPN Protocol auf Smart. Smart Connect wählt zwischen WireGuard, AmneziaWG, Hysteria2 und IKEv2 anhand des Netzes und weicht aus, wenn ein Handshake scheitert. Manuell wählen, wenn Sie schon wissen, was Hotel-WLAN oder Netzbetreiber blockieren.' },
          { title: 'WireGuard für Alltagstempo', body: 'WireGuard ist die Alltagswahl für ruhiges WLAN und Mobilfunk: moderne Krypto, geringer Overhead, stark für Surfen und Streaming. Wenn Speed Test gut aussieht und der Tunnel hält, bleiben Sie hier.' },
          { title: 'AmneziaWG, wenn WireGuard blockiert wird', body: 'Manche Netze erkennen oder drosseln plain WireGuard. AmneziaWG hält ein WireGuard-ähnliches Erlebnis mit Obfuscation. Probieren Sie es, wenn WireGuard in einem Netz nie handshaket, auf LTE aber funktioniert.' },
          { title: 'IKEv2 bei wackligen Mobilübergängen', body: 'IKEv2 glänzt beim Wechsel zwischen LTE und WLAN. Nicht immer am schnellsten, unter iOS oft besonders zuverlässig unterwegs. Gut für den Pendelverkehr, wenn Tunnel eher flattern als gar nicht starten.' },
          { title: 'Hysteria2 auf verlustreichen oder feindlichen Pfaden', body: 'Hysteria2 hilft bei Verlust, Stau oder feindlichen Pfaden. Nutzen Sie es nach Problemen mit WireGuard/AmneziaWG und prüfen Sie mit Speed Test. Werkzeug für harte Netze — kein Dauer-Schalter „überall schneller“.' },
          { title: 'Manuelle Auswahl und Netzwerkprofile', body: 'Pinnen Sie ein funktionierendes Protokoll für bekannte Problemorte oder speichern Sie es in einem Netzwerkprofil mit DNS und Auto-connect. Free und Premium teilen denselben Protokollsatz — Free mit wöchentlichem Traffic, Premium unlimited — und Premium fügt vor allem Kapazität und Serverbreite hinzu, keine anderen Engines. Chrome am Desktop ist Browser-Proxy, nicht diese iOS-Tunnel; macOS- und Android-System-Apps gibt es noch nicht.' },
        ],
      },
      es: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2: qué protocolo y cuándo',
        excerpt:
          'Un mapa práctico de los protocolos FollowNet en iOS: velocidad, estabilidad y qué usar cuando una red pelea con las VPN.',
        sections: [
          { title: 'Empieza con Smart Connect', body: 'Para la mayoría, deja Settings → VPN Protocol en Smart. Smart Connect elige entre WireGuard, AmneziaWG, Hysteria2 e IKEv2 según la red y cambia si falla el handshake. Elige a mano cuando ya sabes qué bloquea el Wi‑Fi del hotel o el operador.' },
          { title: 'WireGuard para la velocidad diaria', body: 'WireGuard es la opción diaria en Wi‑Fi y móvil tranquilos: cripto moderna, poco overhead, fuerte para navegar y streaming. Si Speed Test se ve bien y el túnel aguanta, quédate aquí.' },
          { title: 'AmneziaWG cuando WireGuard está bloqueado', body: 'Algunas redes detectan o limitan WireGuard puro. AmneziaWG mantiene una experiencia similar con ofuscación. Pruébalo cuando WireGuard no hace handshake en una red pero sí en LTE.' },
          { title: 'IKEv2 para cambios móviles inestables', body: 'IKEv2 brilla al saltar entre LTE y Wi‑Fi. No siempre es el más rápido, pero en iOS suele ser el más fiable en movimiento. Úsalo en trayectos urbanos cuando el túnel parpadea más de lo que falla al arrancar.' },
          { title: 'Hysteria2 en rutas con pérdida u hostiles', body: 'Hysteria2 ayuda en rutas con pérdida, congestión u hostiles. Úsalo tras problemas con WireGuard/AmneziaWG y confirma con Speed Test. Herramienta para redes difíciles, no un interruptor permanente de “más rápido en todas partes”.' },
          { title: 'Selección manual y perfiles de red', body: 'Fija un protocolo que funcione en un sitio problemático conocido, o guárdalo en un perfil de red con DNS y Auto-connect. Free y Premium usan el mismo conjunto de protocolos — Free con tráfico semanal, Premium ilimitado — y Premium añade sobre todo capacidad y amplitud de servidores, no otros motores. Chrome en escritorio es proxy de navegador, no estos túneles iOS; aún no hay apps de sistema macOS ni Android.' },
        ],
      },
      fr: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — quel protocole quand',
        excerpt:
          'Une carte pratique des protocoles FollowNet sur iOS : vitesse, stabilité et quoi utiliser quand un réseau combat les VPN.',
        sections: [
          { title: 'Commencez par Smart Connect', body: 'Pour la plupart, laissez Settings → VPN Protocol sur Smart. Smart Connect choisit parmi WireGuard, AmneziaWG, Hysteria2 et IKEv2 selon le réseau et bascule si le handshake échoue. Choix manuel quand vous savez déjà ce qu’un Wi‑Fi d’hôtel ou un opérateur bloque.' },
          { title: 'WireGuard pour la vitesse du quotidien', body: 'WireGuard est le choix quotidien sur Wi‑Fi et cellulaire calmes : crypto moderne, faible overhead, solide pour navigation et streaming. Si Speed Test est bon et le tunnel tient, restez ici.' },
          { title: 'AmneziaWG quand WireGuard est bloqué', body: 'Certains réseaux détectent ou bridgent le WireGuard nu. AmneziaWG garde une expérience proche avec obfuscation. Essayez-le quand WireGuard ne handshake jamais sur un réseau mais marche en LTE.' },
          { title: 'IKEv2 pour les bascules mobiles capricieuses', body: 'IKEv2 brille quand vous passez entre LTE et Wi‑Fi. Pas toujours le plus rapide, mais sur iOS souvent très fiable en mobilité. Préférez-le en trajets urbains quand le tunnel clignote plus qu’il ne refuse de démarrer.' },
          { title: 'Hysteria2 sur chemins à pertes ou hostiles', body: 'Hysteria2 aide sur pertes, congestion ou chemins hostiles. Utilisez-le après WireGuard/AmneziaWG, puis vérifiez avec Speed Test. Outil pour réseaux durs — pas un commutateur permanent « plus rapide partout ».' },
          { title: 'Choix manuel et profils réseau', body: 'Épinglez un protocole qui marche pour un lieu connu pourri, ou rangez-le dans un profil réseau avec DNS et Auto-connect. Free et Premium partagent le même jeu de protocoles — Free avec trafic hebdomadaire, Premium illimité — et Premium ajoute surtout capacité et étendue des serveurs, pas d’autres moteurs. Chrome sur bureau est un proxy navigateur, pas ces tunnels iOS ; pas encore d’apps système macOS ni Android.' },
        ],
      },
      pt: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — qual protocolo quando',
        excerpt:
          'Um mapa prático dos protocolos FollowNet no iOS: velocidade, estabilidade e o que usar quando uma rede luta contra VPNs.',
        sections: [
          { title: 'Comece com Smart Connect', body: 'Para a maioria, deixe Settings → VPN Protocol em Smart. Smart Connect escolhe entre WireGuard, AmneziaWG, Hysteria2 e IKEv2 conforme a rede e faz fallback se o handshake falhar. Escolha manual quando você já sabe o que o Wi‑Fi do hotel ou a operadora bloqueia.' },
          { title: 'WireGuard para velocidade do dia a dia', body: 'WireGuard é a escolha diária em Wi‑Fi e celular calmos: crypto moderna, baixo overhead, forte para navegação e streaming. Se o Speed Test parece saudável e o túnel se mantém, fique aqui.' },
          { title: 'AmneziaWG quando o WireGuard é bloqueado', body: 'Algumas redes detectam ou limitam WireGuard puro. AmneziaWG mantém uma experiência parecida com ofuscação. Vale quando WireGuard não faz handshake numa rede, mas funciona no LTE.' },
          { title: 'IKEv2 para handoffs móveis instáveis', body: 'IKEv2 brilha quando você alterna entre LTE e Wi‑Fi. Nem sempre é o mais rápido, mas no iOS costuma ser muito confiável em movimento. Prefira no deslocamento urbano quando o túnel pisca mais do que falha ao subir.' },
          { title: 'Hysteria2 em caminhos com perda ou hostis', body: 'Hysteria2 ajuda em perda, congestionamento ou caminhos hostis. Use depois de WireGuard/AmneziaWG e confirme com Speed Test. Ferramenta para redes difíceis — não um interruptor permanente de “mais rápido em todo lugar”.' },
          { title: 'Override manual e perfis de rede', body: 'Fixe um protocolo que funciona num local problemático conhecido, ou guarde-o num perfil de rede com DNS e Auto-connect. Free e Premium usam o mesmo conjunto de protocolos — Free com tráfego semanal, Premium ilimitado — e Premium adiciona sobretudo capacidade e amplitude de servidores, não outros motores. Chrome no desktop é proxy do navegador, não esses túneis iOS; ainda não há apps de sistema macOS nem Android.' },
        ],
      },
      uk: {
        title: 'WireGuard, AmneziaWG, IKEv2, Hysteria2 — який протокол коли',
        excerpt:
          'Практична карта протоколів FollowNet на iOS: швидкість, стабільність і що вмикати, коли мережа душить VPN.',
        sections: [
          { title: 'Почніть зі Smart Connect', body: 'Більшості достатньо лишити Settings → VPN Protocol на Smart. Smart Connect обирає між WireGuard, AmneziaWG, Hysteria2 і IKEv2 з урахуванням мережі й перемикається, якщо handshake не проходить. Ручний вибір — коли ви вже знаєте, що ріже готельний Wi‑Fi чи оператор.' },
          { title: 'WireGuard для щоденної швидкості', body: 'WireGuard — базовий вибір для спокійного Wi‑Fi і LTE: сучасна криптографія, низький оверхед, зручно для браузингу й стрімінгу. Якщо Speed Test у нормі й тунель тримається — лишайтеся тут.' },
          { title: 'AmneziaWG, коли WireGuard ріжуть', body: 'Деякі мережі детектять або душать звичайний WireGuard. AmneziaWG зберігає схожий досвід з обфускацією. Має сенс, коли WireGuard не рукопотискається в одній мережі, але живий на LTE.' },
          { title: 'IKEv2 для стрибкого мобільного', body: 'IKEv2 сильний при стрибках між LTE і Wi‑Fi. Не завжди найшвидший, але на iOS часто найнадійніший у русі. Беріть для міських поїздок, коли тунель частіше «моргає», ніж не піднімається.' },
          { title: 'Hysteria2 на втратах і ворожих каналах', body: 'Hysteria2 допомагає на втратах, перевантаженні й ворожих шляхах. Пробуйте після проблем з WireGuard/AmneziaWG і перевіряйте Speed Test. Інструмент для жорстких мереж — не вічний перемикач «скрізь швидше».' },
          { title: 'Ручний вибір і профілі мережі', body: 'Закріпіть робочий протокол для відомого поганого місця або збережіть у профілі мережі з DNS і Auto-connect. Free і Premium використовують один набір протоколів — Free з тижневим трафіком, Premium безліміт — і Premium здебільшого додає ємність і ширину серверів, а не інші рушії. Chrome на десктопі — проксі браузера, не ці iOS-тунелі; системних додатків macOS і Android поки немає.' },
        ],
      },
    },
  },
  {
    slug: 'chrome-extension',
    date: '2026-04-18',
    minutes: 4,
    topic: 'updates',
    translations: {
      en: {
        title: 'FollowNet for Chrome is live',
        excerpt:
          'The same account and a browser proxy for desktop Chrome — what the extension does today and where its protection ends.',
        sections: [
          {
            title: 'Why a browser extension',
            body: 'Not every session starts on iOS. The Chrome extension routes Chrome traffic through a FollowNet proxy using the same account. It does not protect other desktop apps, and a full macOS client is not available yet.',
          },
          {
            title: 'What to expect now',
            body: 'Sign in, pick a server mindset familiar from the app, and keep the flow simple. We will keep shipping polish — reviews, clearer status, and fewer dead ends — without turning the popup into a dashboard.',
          },
          {
            title: 'iOS remains the core',
            body: 'Phone VPN is still the center of FollowNet. Chrome is the second surface: useful, lighter, and aligned with the same Free/Premium honesty.',
          },
        ],
      },
      ru: {
        title: 'FollowNet для Chrome уже доступен',
        excerpt:
          'Тот же аккаунт и прокси для Chrome на компьютере — что расширение умеет сейчас и где заканчивается его защита.',
        sections: [
          {
            title: 'Зачем расширение',
            body: 'Не каждая сессия начинается на iOS. Расширение направляет трафик Chrome через прокси FollowNet и использует тот же аккаунт. Другие программы на компьютере оно не защищает, а полноценного клиента для macOS пока нет.',
          },
          {
            title: 'Что есть сейчас',
            body: 'Вход, выбор сервера в духе приложения, простой поток. Будем допиливать статус, отзывы и меньше тупиков — без превращения попапа в дашборд.',
          },
          {
            title: 'iOS остаётся ядром',
            body: 'Телефонный VPN — центр FollowNet. Расширение Chrome дополняет его прокси-защитой трафика браузера и работает по тем же условиям Free и Premium.',
          },
        ],
      },
      de: {
        title: 'FollowNet für Chrome ist live',
        excerpt:
          'Das gleiche Konto und ein Browser-Proxy für Desktop-Chrome – was die Erweiterung heute macht und wo ihr Schutz endet.',
        sections: [
          {
            title: 'Warum eine Browsererweiterung',
            body: 'Nicht jede Sitzung startet unter iOS. Die Chrome-Erweiterung leitet den Chrome-Verkehr über einen FollowNet-Proxy unter Verwendung desselben Kontos weiter. Es schützt keine anderen Desktop-Apps und ein vollständiger macOS-Client ist noch nicht verfügbar.',
          },
          {
            title: 'Was Sie jetzt erwartet',
            body: 'Melden Sie sich an, wählen Sie eine aus der App bekannte Server-Denkweise und sorgen Sie für einen einfachen Ablauf. Wir werden weiterhin den Feinschliff liefern – Bewertungen, klarerer Status und weniger Sackgassen –, ohne das Popup in ein Dashboard zu verwandeln.',
          },
          {
            title: 'iOS bleibt der Kern',
            body: 'Telefon-VPN ist immer noch das Zentrum von FollowNet. Chrome ist die zweite Oberfläche: nützlich, leichter und mit der gleichen Free/Premium-Ehrlichkeit ausgerichtet.',
          },
        ],
      },
      es: {
        title: 'FollowNet para Chrome ya está disponible',
        excerpt:
          'La misma cuenta y un navegador proxy para Chrome de escritorio: qué hace la extensión hoy y dónde termina su protección.',
        sections: [
          {
            title: 'Por qué una extensión del navegador',
            body: 'No todas las sesiones comienzan en iOS. La extensión de Chrome dirige el tráfico de Chrome a través de un proxy FollowNet utilizando la misma cuenta. No protege otras aplicaciones de escritorio y aún no está disponible un cliente macOS completo.',
          },
          {
            title: 'Que esperar ahora',
            body: 'Inicia sesión, elige un servidor como en la aplicación y conéctate. Seguiremos aclarando el estado y los errores sin convertir la ventana de la extensión en un panel complejo.',
          },
          {
            title: 'iOS sigue siendo el núcleo',
            body: 'Phone VPN sigue siendo el centro de FollowNet. Chrome es la segunda superficie: útil, más ligera y alineada con la misma honestidad Free/Premium.',
          },
        ],
      },
      fr: {
        title: 'FollowNet pour Chrome est en ligne',
        excerpt:
          "Le même compte et un proxy de navigateur pour Chrome de bureau : ce que fait l'extension aujourd'hui et où s'arrête sa protection.",
        sections: [
          {
            title: 'Pourquoi une extension de navigateur',
            body: "Toutes les sessions ne démarrent pas sur iOS. L'extension Chrome achemine le trafic Chrome via un proxy FollowNet en utilisant le même compte. Il ne protège pas les autres applications de bureau et un client macOS complet n'est pas encore disponible.",
          },
          {
            title: "À quoi s'attendre maintenant",
            body: "Connectez-vous, choisissez un état d'esprit de serveur familier dans l'application et gardez le flux simple. Nous continuerons à peaufiner les expéditions – avis, statut plus clair et moins d’impasses – sans transformer la fenêtre contextuelle en tableau de bord.",
          },
          {
            title: 'iOS reste le noyau',
            body: 'Phone VPN est toujours le centre de FollowNet. Chrome est la deuxième surface : utile, plus légère et alignée sur la même honnêteté Free/Premium.',
          },
        ],
      },
      pt: {
        title: 'FollowNet para Chrome está ativo',
        excerpt:
          'A mesma conta e um proxy de navegador para desktop Chrome – o que a extensão faz hoje e onde termina sua proteção.',
        sections: [
          {
            title: 'Por que uma extensão de navegador',
            body: 'Nem todas as sessões começam no iOS. A extensão do Chrome roteia o tráfego do Chrome por meio de um proxy FollowNet usando a mesma conta. Ele não protege outros aplicativos de desktop e um cliente macOS completo ainda não está disponível.',
          },
          {
            title: 'O que esperar agora',
            body: 'Entre na conta, escolha um servidor como no aplicativo e conecte-se. Continuaremos melhorando os estados e erros sem transformar a janela da extensão em um painel complexo.',
          },
          {
            title: 'iOS continua sendo o núcleo',
            body: 'A VPN por telefone ainda é o centro da FollowNet. O Chrome é a segunda superfície: útil, mais leve e alinhado com a mesma honestidade Free/Premium.',
          },
        ],
      },
      uk: {
        title: 'FollowNet для Chrome працює',
        excerpt:
          'Той самий обліковий запис і проксі-сервер веб-переглядача для комп’ютерного Chrome — що робить розширення сьогодні та де закінчується його захист.',
        sections: [
          {
            title: 'Навіщо розширення для браузера',
            body: 'Не кожен сеанс починається на iOS. Розширення Chrome направляє трафік Chrome через проксі-сервер FollowNet, використовуючи той самий обліковий запис. Він не захищає інші настільні програми, а повноцінний клієнт macOS поки що недоступний.',
          },
          {
            title: 'Чого тепер очікувати',
            body: 'Увійдіть, виберіть спосіб мислення сервера, знайомий із програми, і зробіть процес простим. Ми продовжуватимемо вдосконалювати доставку — огляди, чіткіший статус і менше глухих кутів — не перетворюючи спливаюче вікно на інформаційну панель.',
          },
          {
            title: 'iOS залишається ядром',
            body: 'Системний VPN на iPhone залишається основою FollowNet. Розширення Chrome захищає трафік браузера та працює за тими самими умовами Free і Premium.',
          },
        ],
      },
    },
  },
  {
    slug: 'smart-connect-explained',
    date: '2026-03-09',
    minutes: 5,
    topic: 'guides',
    translations: {
      en: {
        title: 'Smart Connect: how FollowNet picks a path',
        excerpt:
          'Automatic protocol selection is not magic — here is what it optimizes for and when to override it.',
        sections: [
          {
            title: 'The job of Smart Connect',
            body: 'Smart Connect tries to get you a working, fast-enough tunnel without forcing every user to become a protocol engineer. It uses network context when available and can climb a recovery ladder across Hysteria2, VLESS Reality, AmneziaWG, WireGuard, and IKEv2 — with egress checks so a green status is not a dead tunnel.',
          },
          {
            title: 'When to override',
            body: 'If you know WireGuard is fine at home, lock it. On hostile networks leave Smart Connect on, apply the Restricted Network profile, or try AmneziaWG / Hysteria2 / VLESS Reality manually. Settings → Protocol is always there.',
          },
          {
            title: 'What it is not',
            body: 'Smart Connect is not a promise of invisibility or a substitute for device hygiene. It is a practical default so “one tap” stays true outside the lab. Chrome on desktop does not run this iOS protocol chain.',
          },
        ],
      },
      ru: {
        title: 'Smart Connect: как FollowNet выбирает путь',
        excerpt:
          'Автовыбор протокола — не магия. Что он оптимизирует и когда лучше переключить вручную.',
        sections: [
          {
            title: 'Задача Smart Connect',
            body: 'Smart Connect должен дать рабочий и достаточно быстрый туннель, не превращая пользователя в инженера протоколов. При наличии сетевого контекста он выбирает старт и может подняться по лестнице Hysteria2 → VLESS Reality → AmneziaWG → WireGuard → IKEv2 с проверкой egress — чтобы зелёный статус не был мёртвым туннелем.',
          },
          {
            title: 'Когда переключать вручную',
            body: 'Если дома WireGuard стабилен — зафиксируйте его. На жёстких сетях оставьте Smart Connect, примените профиль Restricted Network или попробуйте AmneziaWG / Hysteria2 / VLESS Reality вручную. Settings → Protocol всегда доступен.',
          },
          {
            title: 'Чем это не является',
            body: 'Smart Connect — не обещание невидимости и не замена гигиене устройства. Это практичный дефолт, чтобы «один тап» работал вне лаборатории. В Chrome на десктопе эта iOS-цепочка протоколов не крутится.',
          },
        ],
      },
      de: {
        title: 'Smart Connect: Wie FollowNet einen Weg wählt',
        excerpt:
          'Die automatische Protokollauswahl ist keine Zauberei – hier erfahren Sie, wofür sie optimiert wird und wann sie außer Kraft gesetzt werden sollte.',
        sections: [
          {
            title: 'Die Aufgabe von Smart Connect',
            body: 'Smart Connect versucht, Ihnen einen funktionierenden, ausreichend schnellen Tunnel bereitzustellen, ohne dass jeder Benutzer Protokollingenieur werden muss. Dabei werden Netzwerkbedingungen und bekannte Fehlermodi berücksichtigt – insbesondere DPI-lastige Pfade.',
          },
          {
            title: 'Wann überschrieben werden soll',
            body: 'Wenn Sie wissen, dass WireGuard zu Hause in Ordnung ist, sperren Sie es. Wenn Sie durch feindliche Netzwerke reisen, lassen Sie Smart Connect eingeschaltet oder probieren Sie AmneziaWG / Hysteria2 manuell aus. Einstellungen → Protokoll ist immer da.',
          },
          {
            title: 'Was es nicht ist',
            body: 'Smart Connect ist kein Versprechen der Unsichtbarkeit und kein Ersatz für Gerätehygiene. Es handelt sich um eine praktische Standardeinstellung, sodass „One Tap“ auch außerhalb des Labors gilt.',
          },
        ],
      },
      es: {
        title: 'Smart Connect: cómo FollowNet elige un camino',
        excerpt:
          'La selección automática de protocolos no es mágica: esto es para qué se optimiza y cuándo anularla.',
        sections: [
          {
            title: 'El trabajo de Smart Connect',
            body: 'Smart Connect intenta ofrecerle un túnel que funcione y sea lo suficientemente rápido sin obligar a cada usuario a convertirse en ingeniero de protocolos. Sopesa las condiciones de la red y los modos de falla conocidos, especialmente las rutas con mucho DPI.',
          },
          {
            title: 'Cuando anular',
            body: 'Si sabes que WireGuard está bien en casa, ciérralo. Si viajas a través de redes hostiles, deja activado Smart Connect o prueba AmneziaWG/Hysteria2 manualmente. Configuración → El protocolo siempre está ahí.',
          },
          {
            title: 'lo que no es',
            body: 'Smart Connect no es una promesa de invisibilidad ni un sustituto de la higiene del dispositivo. Es un valor predeterminado práctico, por lo que “un toque” sigue siendo válido fuera del laboratorio.',
          },
        ],
      },
      fr: {
        title: 'Smart Connect : comment FollowNet choisit un chemin',
        excerpt:
          'La sélection automatique du protocole n’est pas magique : voici ce pour quoi elle est optimisée et quand la remplacer.',
        sections: [
          {
            title: 'Le travail de Smart Connect',
            body: 'Smart Connect essaie de vous fournir un tunnel fonctionnel et suffisamment rapide sans obliger chaque utilisateur à devenir ingénieur de protocole. Il évalue les conditions du réseau et les modes de défaillance connus, en particulier les chemins à forte densité DPI.',
          },
          {
            title: 'Quand remplacer',
            body: 'Si vous savez que WireGuard convient à la maison, verrouillez-le. Si vous voyagez à travers des réseaux hostiles, laissez Smart Connect activé ou essayez AmneziaWG / Hysteria2 manuellement. Paramètres → Le protocole est toujours là.',
          },
          {
            title: "Ce que ce n'est pas",
            body: "Smart Connect n'est pas une promesse d'invisibilité ou un substitut à l'hygiène de l'appareil. Il s'agit d'une valeur par défaut pratique, de sorte que le « un seul clic » reste valable en dehors du laboratoire.",
          },
        ],
      },
      pt: {
        title: 'Smart Connect: como a FollowNet escolhe um caminho',
        excerpt:
          'A seleção automática de protocolo não é mágica – aqui está o que ela otimiza e quando substituí-la.',
        sections: [
          {
            title: 'O trabalho do Smart Connect',
            body: 'O Smart Connect tenta fornecer a você um túnel funcional e rápido o suficiente, sem forçar cada usuário a se tornar um engenheiro de protocolo. Ele avalia as condições da rede e os modos de falha conhecidos – especialmente caminhos com muitos DPI.',
          },
          {
            title: 'Quando substituir',
            body: 'Se você sabe que o WireGuard funciona bem em casa, bloqueie-o. Se você viajar por redes hostis, deixe o Smart Connect ativado ou experimente o AmneziaWG/Hysteria2 manualmente. Configurações → O protocolo está sempre disponível.',
          },
          {
            title: 'O que não é',
            body: 'O Smart Connect não é uma promessa de invisibilidade nem um substituto para a higiene do dispositivo. É um padrão prático para que “um toque” permaneça verdadeiro fora do laboratório.',
          },
        ],
      },
      uk: {
        title: 'Smart Connect: як FollowNet вибирає шлях',
        excerpt:
          'Автоматичний вибір протоколу — це не магія — ось для чого він оптимізується та коли його можна змінити.',
        sections: [
          {
            title: 'Робота Smart Connect',
            body: 'Smart Connect намагається створити робочий, достатньо швидкий тунель, не змушуючи кожного користувача ставати інженером протоколу. Він зважує умови мережі та відомі режими збоїв, особливо шляхи з інтенсивним DPI.',
          },
          {
            title: 'Коли перевизначати',
            body: 'Якщо ви знаєте, що з WireGuard добре вдома, замкніть його. Якщо ви подорожуєте через ворожі мережі, залиште Smart Connect увімкненим або спробуйте AmneziaWG / Hysteria2 вручну. Параметри → Протокол завжди є.',
          },
          {
            title: 'Що це не так',
            body: 'Smart Connect не є обіцянкою невидимості чи заміною гігієни пристрою. Це практичне налаштування за замовчуванням, тому «один дотик» залишається вірним поза межами лабораторії.',
          },
        ],
      },
    },
  },
  {
    slug: 'ios-widgets-vpn',
    date: '2026-02-18',
    minutes: 5,
    topic: 'updates',
    translations: {
      en: {
        title: 'iOS widgets for FollowNet: status without opening the app',
        excerpt:
          'Home Screen widgets show connection state at a glance — how they fit the one-tap VPN habit on iPhone.',
        sections: [
          {
            title: 'Why widgets matter for VPN',
            body: 'Opening FollowNet every time you glance at the lock screen breaks the “set and forget” habit. Widgets surface whether the tunnel is up, which mode you are in, and a quick path back into the app — without turning the Home Screen into a control panel.',
          },
          {
            title: 'What you can see today',
            body: 'FollowNet widgets focus on connection status and a short nudge to connect or open Settings. They respect iOS layout sizes so a small widget stays readable next to calendar and battery tiles. We keep the chrome minimal on purpose.',
          },
          {
            title: 'Pair with Auto-connect',
            body: 'Widgets are status, not a replacement for Auto-connect. If you want VPN to start on café Wi‑Fi, set Auto-connect in the app; use widgets to confirm it actually did. That split keeps automation boring and visible.',
          },
          {
            title: 'What we will not cram in',
            body: 'No fake speed graphs or marketing badges on the Home Screen. If a metric is not actionable in two seconds, it stays inside the app next to Speed Test and protocol controls.',
          },
        ],
      },
      ru: {
        title: 'Виджеты FollowNet на iOS: статус без открытия приложения',
        excerpt:
          'Виджеты на Home Screen показывают состояние туннеля — как они вписываются в привычку VPN в один тап.',
        sections: [
          {
            title: 'Зачем виджеты для VPN',
            body: 'Открывать FollowNet каждый раз, чтобы глянуть статус, ломает привычку «включил и забыл». Виджеты показывают, поднят ли туннель и куда ткнуться, если нужно вернуться в приложение — без превращения Home Screen в пульт.',
          },
          {
            title: 'Что видно сейчас',
            body: 'Фокус на статусе подключения и коротком пути в приложение или настройки. Размеры под сетку iOS, чтобы маленький виджет читался рядом с календарём. Хрома минимум — осознанно.',
          },
          {
            title: 'Вместе с автоподключением',
            body: 'Виджет — про статус, не замена Auto-connect. Нужен VPN в кафе — настройте автоподключение в приложении; виджет подтвердит, что оно сработало. Автоматизация остаётся скучной и видимой.',
          },
          {
            title: 'Чего не будет на экране',
            body: 'Никаких фейковых графиков скорости и маркетинговых бейджей. Если метрика не читается за две секунды — она остаётся в приложении рядом со Speed Test и выбором протокола.',
          },
        ],
      },
      de: {
        title: 'iOS-Widgets für FollowNet: Status ohne Öffnen der App',
        excerpt:
          'Widgets auf dem Startbildschirm zeigen den Verbindungsstatus auf einen Blick – wie sie zur One-Tap-VPN-Gewohnheit auf dem iPhone passen.',
        sections: [
          {
            title: 'Warum Widgets für VPN wichtig sind',
            body: 'Wenn Sie FollowNet jedes Mal öffnen, wenn Sie auf den Sperrbildschirm blicken, wird die Gewohnheit „Einstellen und Vergessen“ durchbrochen. Widgets zeigen an, ob der Tunnel aktiv ist, in welchem ​​Modus Sie sich befinden und einen schnellen Weg zurück zur App – ohne den Startbildschirm in ein Bedienfeld zu verwandeln.',
          },
          {
            title: 'Was Sie heute sehen können',
            body: 'FollowNet-Widgets konzentrieren sich auf den Verbindungsstatus und einen kurzen Anstoß zum Herstellen einer Verbindung oder zum Öffnen der Einstellungen. Sie respektieren die Layoutgrößen von iOS, sodass ein kleines Widget neben den Kalender- und Akkukacheln lesbar bleibt. Wir haben den Chromanteil bewusst minimal gehalten.',
          },
          {
            title: 'Koppeln Sie mit der automatischen Verbindung',
            body: 'Widgets sind Status und kein Ersatz für die automatische Verbindung. Wenn Sie möchten, dass VPN über Café-WLAN gestartet wird, stellen Sie in der App die Option „Automatisch verbinden“ ein. Verwenden Sie Widgets, um zu bestätigen, dass dies tatsächlich der Fall war. Durch diese Aufteilung bleibt die Automatisierung langweilig und sichtbar.',
          },
          {
            title: 'Was wir nicht reinstopfen werden',
            body: 'Keine gefälschten Geschwindigkeitsdiagramme oder Marketingabzeichen auf dem Startbildschirm. Wenn eine Metrik nicht innerhalb von zwei Sekunden umsetzbar ist, bleibt sie in der App neben den Geschwindigkeitstest- und Protokollkontrollen.',
          },
        ],
      },
      es: {
        title: 'Widgets de iOS para FollowNet: estado sin abrir la aplicación',
        excerpt:
          'Los widgets de la pantalla de inicio muestran el estado de la conexión de un vistazo: cómo se adaptan al hábito de VPN de un solo toque en el iPhone.',
        sections: [
          {
            title: 'Por qué los widgets son importantes para la VPN',
            body: 'Abrir FollowNet cada vez que miras la pantalla de bloqueo rompe el hábito de "configurar y olvidar". Los widgets muestran si el túnel está activo, en qué modo se encuentra y un camino rápido de regreso a la aplicación, sin convertir la pantalla de inicio en un panel de control.',
          },
          {
            title: 'Lo que puedes ver hoy',
            body: 'Los widgets de FollowNet se centran en el estado de la conexión y un breve empujón para conectarse o abrir Configuración. Respetan los tamaños de diseño de iOS, por lo que un pequeño widget permanece legible junto al calendario y los mosaicos de batería. Mantenemos el cromo al mínimo a propósito.',
          },
          {
            title: 'Emparejar con conexión automática',
            body: 'Los widgets son estados, no reemplazan la conexión automática. Si desea que la VPN se inicie en la conexión Wi-Fi de una cafetería, configure la conexión automática en la aplicación; use widgets para confirmar que realmente lo hizo. Esa división hace que la automatización sea aburrida y visible.',
          },
          {
            title: 'Lo que no meteremos',
            body: 'No hay gráficos de velocidad falsos ni insignias de marketing en la pantalla de inicio. Si una métrica no es procesable en dos segundos, permanece dentro de la aplicación junto a la Prueba de velocidad y los controles de protocolo.',
          },
        ],
      },
      fr: {
        title: "Widgets iOS pour FollowNet : statut sans ouvrir l'application",
        excerpt:
          'Les widgets de l’écran d’accueil affichent l’état de la connexion en un coup d’œil – comment ils s’adaptent à l’habitude VPN en un clic sur iPhone.',
        sections: [
          {
            title: 'Pourquoi les widgets sont importants pour le VPN',
            body: "Ouvrir FollowNet à chaque fois que vous jetez un coup d’œil à l’écran de verrouillage brise l’habitude de « définir et oublier ». Les widgets indiquent si le tunnel est actif, dans quel mode vous vous trouvez et un chemin de retour rapide vers l'application, sans transformer l'écran d'accueil en panneau de commande.",
          },
          {
            title: "Ce que vous pouvez voir aujourd'hui",
            body: "Les widgets FollowNet se concentrent sur l'état de la connexion et un bref coup de pouce pour se connecter ou ouvrir les paramètres. Ils respectent les tailles de mise en page iOS afin qu'un petit widget reste lisible à côté des vignettes du calendrier et de la batterie. Nous gardons volontairement le chrome au minimum.",
          },
          {
            title: 'Associer avec la connexion automatique',
            body: "Les widgets sont un statut et ne remplacent pas la connexion automatique. Si vous souhaitez que le VPN démarre sur le café Wi‑Fi, définissez la connexion automatique dans l'application ; utilisez des widgets pour confirmer que c'est réellement le cas. Cette division rend l’automatisation ennuyeuse et visible.",
          },
          {
            title: "Ce que nous n'entasserons pas",
            body: "Pas de faux graphiques de vitesse ou de badges marketing sur l'écran d'accueil. Si une métrique n’est pas exploitable dans les deux secondes, elle reste dans l’application à côté du test de vitesse et des contrôles de protocole.",
          },
        ],
      },
      pt: {
        title: 'Widgets iOS para FollowNet: status sem abrir o aplicativo',
        excerpt:
          'Os widgets da tela inicial mostram rapidamente o estado da conexão – como eles se adaptam ao hábito VPN de um toque no iPhone.',
        sections: [
          {
            title: 'Por que os widgets são importantes para VPN',
            body: 'Abrir o FollowNet toda vez que você olha para a tela de bloqueio quebra o hábito de “definir e esquecer”. Os widgets mostram se o túnel está ativo, em qual modo você está e um caminho rápido de volta ao aplicativo – sem transformar a tela inicial em um painel de controle.',
          },
          {
            title: 'O que você pode ver hoje',
            body: 'Os widgets FollowNet concentram-se no status da conexão e em um pequeno empurrão para conectar ou abrir Configurações. Eles respeitam os tamanhos de layout do iOS para que um pequeno widget permaneça legível próximo ao calendário e aos blocos da bateria. Mantemos o cromo mínimo de propósito.',
          },
          {
            title: 'Emparelhar com conexão automática',
            body: 'Widgets são status, não substituem a conexão automática. Se você deseja que a VPN seja iniciada no Wi-Fi do café, defina Conexão automática no aplicativo; use widgets para confirmar se realmente aconteceu. Essa divisão mantém a automação enfadonha e visível.',
          },
          {
            title: 'O que não vamos enfiar',
            body: 'Não há gráficos de velocidade falsos ou emblemas de marketing na tela inicial. Se uma métrica não for acionável em dois segundos, ela permanecerá dentro do aplicativo ao lado do Teste de velocidade e dos controles de protocolo.',
          },
        ],
      },
      uk: {
        title: 'Віджети iOS для FollowNet: статус без відкриття програми',
        excerpt:
          'Віджети на головному екрані миттєво показують стан з’єднання — як вони відповідають звичці VPN одним дотиком на iPhone.',
        sections: [
          {
            title: 'Чому віджети важливі для VPN',
            body: 'Відкриваючи FollowNet кожного разу, коли ви кидаєте погляд на екран блокування, ви позбавляєтеся звички «встановити й забути». З’являються віджети про те, чи відкрито тунель, у якому режимі ви перебуваєте, і швидкий шлях назад у програму — без перетворення головного екрана на панель керування.',
          },
          {
            title: 'Що можна побачити сьогодні',
            body: 'Віджети FollowNet зосереджені на статусі підключення та короткому спонуканні до підключення або відкриття налаштувань. Вони поважають розміри макета iOS, тому маленький віджет залишається читабельним поруч із плитками календаря та акумулятора. Ми спеціально зберігаємо мінімальну кількість хрому.',
          },
          {
            title: 'З’єднайте з автопідключенням',
            body: 'Віджети є статусними, а не заміною автоматичного підключення. Якщо ви хочете, щоб VPN запускався на Wi‑Fi кафе, установіть у програмі автоматичне підключення; використовуйте віджети, щоб підтвердити, що це дійсно так. Такий поділ робить автоматизацію нудною та видимою.',
          },
          {
            title: 'Чого не запхнемо',
            body: 'Жодних підроблених графіків швидкості чи маркетингових значків на головному екрані. Якщо метрика не активна протягом двох секунд, вона залишається в додатку поруч із перевіркою швидкості та елементами керування протоколом.',
          },
        ],
      },
    },
  },
  {
    slug: 'dns-profiles-explained',
    date: '2026-01-22',
    minutes: 6,
    topic: 'guides',
    translations: {
      en: {
        title:
          'DNS profiles in FollowNet: Quad9, Cloudflare, and when to switch',
        excerpt:
          'Custom DNS does not replace VPN encryption — here is how presets work on iOS and what they actually change.',
        sections: [
          {
            title: 'DNS vs the VPN tunnel',
            body: 'The VPN encrypts traffic to the FollowNet server. DNS decides which resolver answers name lookups. Changing DNS can improve filtering or latency feelings, but it is not a second VPN and it does not hide you from a malicious site you already opened.',
          },
          {
            title: 'Built-in presets',
            body: 'FollowNet ships practical presets: system default when you want carrier or router behavior, Cloudflare for a fast public resolver, Quad9 when you care about malware-oriented blocking, and AdGuard DNS when ad filtering at resolve time is the goal. Pick one in Settings without installing another app.',
          },
          {
            title: 'When to leave system DNS alone',
            body: 'Some captive portals and enterprise networks break if you force a public resolver too early. On hotel Wi‑Fi, finish the portal login first, connect VPN, then switch DNS if you still need it. Travelers often keep Smart Connect on and DNS on a known preset after the portal.',
          },
          {
            title: 'Privacy notes',
            body: 'Any DNS provider sees the domains you resolve. Read FollowNet’s Privacy Policy for how DNS is handled with the tunnel. Prefer a preset you trust over random “fast DNS” lists from forums.',
          },
        ],
      },
      ru: {
        title: 'DNS-профили в FollowNet: Quad9, Cloudflare и когда переключать',
        excerpt:
          'Свой DNS не заменяет шифрование VPN — как работают пресеты на iOS и что они реально меняют.',
        sections: [
          {
            title: 'DNS и туннель VPN',
            body: 'VPN шифрует трафик до сервера FollowNet. DNS выбирает резолвер для имён. Смена DNS может помочь с фильтрацией или ощущением скорости, но это не второй VPN и не защита от фишинговой страницы, которую вы уже открыли.',
          },
          {
            title: 'Встроенные пресеты',
            body: 'В FollowNet есть практичные варианты: системный DNS, Cloudflare для быстрого публичного резолвера, Quad9 с упором на блокировку malware и AdGuard DNS для фильтрации рекламы на этапе резолва. Выбор в Settings — без отдельного приложения.',
          },
          {
            title: 'Когда оставить системный DNS',
            body: 'Часть captive portal и корпоративных сетей ломается, если сразу форсировать публичный резолвер. В отеле сначала логин в портал, потом VPN, потом DNS при необходимости. В поездках удобно держать Smart Connect и знакомый пресет после портала.',
          },
          {
            title: 'Про приватность',
            body: 'Любой DNS-провайдер видит домены, которые вы резолвите. Как FollowNet обрабатывает DNS с туннелем — в Privacy Policy. Лучше доверенный пресет, чем случайные «быстрые DNS» с форумов.',
          },
        ],
      },
      de: {
        title:
          'DNS-Profile in FollowNet: Quad9, Cloudflare und wann man wechseln sollte',
        excerpt:
          'Benutzerdefiniertes DNS ersetzt keine VPN-Verschlüsselung – hier erfahren Sie, wie Voreinstellungen unter iOS funktionieren und was sie tatsächlich ändern.',
        sections: [
          {
            title: 'DNS vs. VPN-Tunnel',
            body: 'Das VPN verschlüsselt den Datenverkehr zum FollowNet-Server. DNS entscheidet, welcher Resolver Namenssuchen beantwortet. Das Ändern des DNS kann die Filterung oder das Latenzgefühl verbessern, es handelt sich jedoch nicht um ein zweites VPN und es schützt Sie nicht vor einer schädlichen Website, die Sie bereits geöffnet haben.',
          },
          {
            title: 'Integrierte Voreinstellungen',
            body: 'FollowNet bietet praktische Voreinstellungen: Systemstandard, wenn Sie Netzbetreiber- oder Routerverhalten wünschen, Cloudflare für einen schnellen öffentlichen Resolver, Quad9, wenn Sie Malware-orientierte Blockierung berücksichtigen möchten, und AdGuard DNS, wenn die Anzeigenfilterung zum Zeitpunkt der Auflösung das Ziel ist. Wählen Sie eine in den Einstellungen aus, ohne eine weitere App zu installieren.',
          },
          {
            title: 'Wann sollte das System-DNS in Ruhe gelassen werden?',
            body: 'Einige Captive-Portale und Unternehmensnetzwerke brechen zusammen, wenn Sie zu früh einen öffentlichen Resolver erzwingen. Schließen Sie im Hotel-WLAN zunächst die Portalanmeldung ab, stellen Sie eine VPN-Verbindung her und wechseln Sie dann den DNS, falls Sie ihn noch benötigen. Reisende behalten nach dem Portal häufig Smart Connect und DNS auf einer bekannten Voreinstellung bei.',
          },
          {
            title: 'Datenschutzhinweise',
            body: 'Jeder DNS-Anbieter sieht die von Ihnen aufgelösten Domänen. Lesen Sie die Datenschutzrichtlinie von FollowNet, um zu erfahren, wie DNS mit dem Tunnel gehandhabt wird. Bevorzugen Sie eine Voreinstellung, der Sie vertrauen, gegenüber zufälligen „Fast DNS“-Listen aus Foren.',
          },
        ],
      },
      es: {
        title: 'Perfiles DNS en FollowNet: Quad9, Cloudflare y cuándo cambiar',
        excerpt:
          'El DNS personalizado no reemplaza el cifrado VPN: así es como funcionan los ajustes preestablecidos en iOS y qué cambian realmente.',
        sections: [
          {
            title: 'DNS frente al túnel VPN',
            body: 'La VPN cifra el tráfico al servidor FollowNet. DNS decide qué solucionador responde a las búsquedas de nombres. Cambiar DNS puede mejorar el filtrado o la sensación de latencia, pero no es una segunda VPN y no te oculta de un sitio malicioso que ya hayas abierto.',
          },
          {
            title: 'Preajustes incorporados',
            body: 'FollowNet incluye ajustes preestablecidos prácticos: sistema predeterminado cuando desea el comportamiento del operador o enrutador, Cloudflare para una resolución pública rápida, Quad9 cuando le interesa el bloqueo orientado al malware y AdGuard DNS cuando el objetivo es el filtrado de anuncios en el momento de la resolución. Elija uno en Configuración sin instalar otra aplicación.',
          },
          {
            title: 'Cuándo dejar el DNS del sistema en paz',
            body: 'Algunos portales cautivos y redes empresariales se rompen si se fuerza un solucionador público demasiado pronto. En el Wi-Fi del hotel, primero finalice el inicio de sesión en el portal, conecte la VPN y luego cambie el DNS si aún lo necesita. Los viajeros suelen mantener activado Smart Connect y DNS en un valor preestablecido conocido después del portal.',
          },
          {
            title: 'Notas de privacidad',
            body: 'Cualquier proveedor de DNS ve los dominios que usted resuelve. Lea la Política de privacidad de FollowNet para saber cómo se maneja el DNS con el túnel. Prefiera un ajuste preestablecido en el que confíe en lugar de listas aleatorias de "DNS rápidos" de foros.',
          },
        ],
      },
      fr: {
        title:
          'Profils DNS dans FollowNet : Quad9, Cloudflare et quand changer',
        excerpt:
          "Le DNS personnalisé ne remplace pas le cryptage VPN. Voici comment les préréglages fonctionnent sur iOS et ce qu'ils modifient réellement.",
        sections: [
          {
            title: 'DNS contre le tunnel VPN',
            body: "Le VPN crypte le trafic vers le serveur FollowNet. DNS décide quel résolveur répond aux recherches de nom. Changer le DNS peut améliorer le filtrage ou les sensations de latence, mais ce n'est pas un deuxième VPN et il ne vous cache pas d'un site malveillant que vous avez déjà ouvert.",
          },
          {
            title: 'Préréglages intégrés',
            body: "FollowNet propose des préréglages pratiques : le système par défaut lorsque vous souhaitez un comportement d'opérateur ou de routeur, Cloudflare pour un résolveur public rapide, Quad9 lorsque vous vous souciez du blocage orienté vers les logiciels malveillants et AdGuard DNS lorsque l'objectif est le filtrage des publicités au moment de la résolution. Choisissez-en un dans Paramètres sans installer une autre application.",
          },
          {
            title: 'Quand laisser le DNS du système tranquille',
            body: "Certains portails captifs et réseaux d'entreprise tombent en panne si vous forcez un résolveur public trop tôt. Sur le Wi‑Fi de l'hôtel, terminez d'abord la connexion au portail, connectez le VPN, puis changez de DNS si vous en avez toujours besoin. Les voyageurs gardent souvent Smart Connect activé et DNS sur un préréglage connu après le portail.",
          },
          {
            title: 'Notes de confidentialité',
            body: 'Tout fournisseur DNS voit les domaines que vous résolvez. Lisez la politique de confidentialité de FollowNet pour savoir comment le DNS est géré avec le tunnel. Préférez un préréglage auquel vous faites confiance plutôt que des listes aléatoires de « DNS rapide » provenant des forums.',
          },
        ],
      },
      pt: {
        title: 'Perfis DNS no FollowNet: Quad9, Cloudflare e quando mudar',
        excerpt:
          'O DNS personalizado não substitui a criptografia VPN – veja como as predefinições funcionam no iOS e o que elas realmente mudam.',
        sections: [
          {
            title: 'DNS versus túnel VPN',
            body: 'A VPN criptografa o tráfego para o servidor FollowNet. O DNS decide qual resolvedor responde às pesquisas de nome. Alterar o DNS pode melhorar a sensação de filtragem ou latência, mas não é uma segunda VPN e não o esconde de um site malicioso que você já abriu.',
          },
          {
            title: 'Predefinições integradas',
            body: 'FollowNet fornece predefinições práticas: padrão do sistema quando você deseja comportamento de operadora ou roteador, Cloudflare para um resolvedor público rápido, Quad9 quando você se preocupa com bloqueio orientado a malware e AdGuard DNS quando a filtragem de anúncios em tempo de resolução é o objetivo. Escolha um em Configurações sem instalar outro aplicativo.',
          },
          {
            title: 'Quando deixar o DNS do sistema sozinho',
            body: 'Alguns portais cativos e redes corporativas quebram se você forçar um resolvedor público muito cedo. No Wi-Fi do hotel, conclua primeiro o login do portal, conecte a VPN e depois troque o DNS se ainda precisar. Os viajantes geralmente mantêm o Smart Connect ativado e o DNS em uma predefinição conhecida após o portal.',
          },
          {
            title: 'Notas de privacidade',
            body: 'Qualquer provedor de DNS vê os domínios que você resolve. Leia a Política de Privacidade da FollowNet para saber como o DNS é tratado com o túnel. Prefira uma predefinição em que você confie em vez de listas aleatórias de “DNS rápido” de fóruns.',
          },
        ],
      },
      uk: {
        title: 'Профілі DNS у FollowNet: Quad9, Cloudflare та час перемикання',
        excerpt:
          'Спеціальний DNS не замінює шифрування VPN — ось як працюють попередні налаштування в iOS і що вони насправді змінюють.',
        sections: [
          {
            title: 'DNS проти тунелю VPN',
            body: 'VPN шифрує трафік до сервера FollowNet. DNS вирішує, який резолвер відповідає на пошук імен. Зміна DNS може покращити фільтрацію або відчуття затримки, але це не другий VPN і не приховує вас від шкідливого сайту, який ви вже відкривали.',
          },
          {
            title: 'Вбудовані пресети',
            body: 'FollowNet пропонує практичні налаштування: системні налаштування за замовчуванням, коли вам потрібна поведінка оператора чи маршрутизатора, Cloudflare для швидкого загальнодоступного розпізнавача, Quad9, коли ви дбаєте про блокування, орієнтоване на зловмисне програмне забезпечення, і AdGuard DNS, коли метою є фільтрація реклами під час вирішення. Виберіть одну в налаштуваннях, не встановлюючи іншу програму.',
          },
          {
            title: 'Коли залишити систему DNS у спокої',
            body: 'Деякі адаптивні портали та корпоративні мережі ламаються, якщо завчасно запустити загальнодоступний розпізнавач. У готелі Wi‑Fi спершу завершіть вхід на портал, підключіть VPN, а потім увімкніть DNS, якщо він все ще потрібен. Мандрівники часто залишають увімкненим Smart Connect і DNS у відомих налаштуваннях після порталу.',
          },
          {
            title: 'Примітки щодо конфіденційності',
            body: 'Будь-який постачальник DNS бачить домени, які ви вирішуєте. Ознайомтеся з Політикою конфіденційності FollowNet про те, як DNS обробляється з тунелем. Віддавайте перевагу попередньому налаштуванню, якому довіряєте, а не випадковим спискам «швидкого DNS» з форумів.',
          },
        ],
      },
    },
  },
  {
    slug: 'auto-connect-wifi-lte',
    date: '2025-12-14',
    minutes: 5,
    topic: 'guides',
    translations: {
      en: {
        title: 'Auto-connect on Wi‑Fi vs LTE: which mode to pick',
        excerpt:
          'Disabled, Wi‑Fi Only, LTE Only, or Always — a practical guide so VPN starts when you need it and stays quiet at home.',
        sections: [
          {
            title: 'What Auto-connect actually does',
            body: 'Auto-connect decides when FollowNet starts the tunnel after a network change. It does not pick WireGuard vs AmneziaWG — that is Smart Connect or your manual protocol lock. Think of Auto-connect as the on-switch schedule, not the path picker.',
          },
          {
            title: 'Wi‑Fi Only for cafés and hotels',
            body: 'Most people need VPN on untrusted Wi‑Fi and are fine on their home SSID and carrier. Wi‑Fi Only covers airports and guest networks without burning Free weekly traffic on every cellular hop. Pair it with a widget glance so you know it fired.',
          },
          {
            title: 'LTE Only and Always',
            body: 'LTE Only helps if your carrier is the problem and home Wi‑Fi is trusted. Always keeps the tunnel up whenever iOS reports a path — useful for travel weeks, heavier on battery and Free quota. Disable it when you are back on a network you trust.',
          },
          {
            title: 'Order of operations',
            body: 'On captive portals, authenticate first, then let Auto-connect or a manual Connect start VPN. If Smart Connect is on, protocol selection happens after the tunnel starts — that is intentional, not a race you need to micromanage.',
          },
        ],
      },
      ru: {
        title: 'Автоподключение Wi‑Fi vs LTE: какой режим выбрать',
        excerpt:
          'Выключено, только Wi‑Fi, только LTE или всегда — практичный гайд, чтобы VPN включался когда нужно и не мешал дома.',
        sections: [
          {
            title: 'Что делает автоподключение',
            body: 'Auto-connect решает, когда FollowNet поднимает туннель после смены сети. Он не выбирает WireGuard или AmneziaWG — это Smart Connect или ручная фиксация протокола. Это расписание включения, а не выбор пути.',
          },
          {
            title: 'Только Wi‑Fi для кафе и отелей',
            body: 'Чаще VPN нужен в ненадёжном Wi‑Fi, а дома и у оператора — нет. Режим «только Wi‑Fi» закрывает аэропорты и гостевые сети, не тратя недельный лимит Free на каждый hop LTE. Виджет поможет убедиться, что оно сработало.',
          },
          {
            title: 'Только LTE и «всегда»',
            body: '«Только LTE» — если проблема у оператора, а домашний Wi‑Fi доверенный. «Всегда» держит туннель на любом пути — удобно в travel-неделях, но жрёт батарею и квоту Free. Дома снова отключайте.',
          },
          {
            title: 'Порядок действий',
            body: 'На captive portal сначала авторизация, потом Auto-connect или ручной Connect. Если включён Smart Connect, выбор протокола идёт после старта туннеля — так задумано, не гонка, которую надо микроменеджить.',
          },
        ],
      },
      de: {
        title:
          'Automatische Verbindung über WLAN vs. LTE: Welcher Modus soll ausgewählt werden?',
        excerpt:
          'Deaktiviert, Nur WLAN, Nur LTE oder Immer – eine praktische Anleitung, damit VPN startet, wenn Sie es brauchen, und zu Hause ruhig bleibt.',
        sections: [
          {
            title: 'Was Auto-Connect tatsächlich bewirkt',
            body: 'Die automatische Verbindung entscheidet, wann FollowNet den Tunnel nach einer Netzwerkänderung startet. Es wird nicht WireGuard vs. AmneziaWG ausgewählt – das ist Smart Connect oder Ihre manuelle Protokollsperre. Stellen Sie sich Auto-Connect als Einschaltplan und nicht als Pfadauswahl vor.',
          },
          {
            title: 'WLAN Nur für Cafés und Hotels',
            body: 'Die meisten Menschen benötigen ein VPN über nicht vertrauenswürdiges WLAN und sind mit ihrer Heim-SSID und ihrem Mobilfunkanbieter zufrieden. Wi-Fi deckt nur Flughäfen und Gastnetzwerke ab, ohne dass kostenloser wöchentlicher Datenverkehr bei jedem Mobilfunk-Hop verloren geht. Koppeln Sie es mit einem Widget-Blick, damit Sie wissen, dass es ausgelöst wurde.',
          },
          {
            title: 'Nur LTE und immer',
            body: 'LTE hilft nur, wenn Ihr Mobilfunkanbieter das Problem ist und Sie dem Heim-WLAN vertrauen. Hält den Tunnel immer aufrecht, wenn iOS einen Pfad meldet – nützlich für Reisewochen, stärkerer Akkuverbrauch und kostenloses Kontingent. Deaktivieren Sie es, wenn Sie wieder in einem Netzwerk sind, dem Sie vertrauen.',
          },
          {
            title: 'Reihenfolge der Operationen',
            body: 'Bei Captive-Portalen authentifizieren Sie sich zuerst und lassen Sie dann die automatische Verbindung oder eine manuelle Verbindung das VPN starten. Wenn Smart Connect aktiviert ist, erfolgt die Protokollauswahl nach dem Start des Tunnels – das ist beabsichtigt und kein Rennen, das Sie im Mikromanagement verwalten müssen.',
          },
        ],
      },
      es: {
        title: 'Conexión automática en Wi‑Fi frente a LTE: qué modo elegir',
        excerpt:
          'Deshabilitado, Solo Wi‑Fi, Solo LTE o Siempre: una guía práctica para que la VPN se inicie cuando la necesites y permanezca silenciosa en casa.',
        sections: [
          {
            title: 'Qué hace realmente la conexión automática',
            body: 'La conexión automática decide cuándo FollowNet inicia el túnel después de un cambio de red. No selecciona WireGuard vs AmneziaWG, es decir, Smart Connect o su bloqueo de protocolo manual. Piense en la conexión automática como la programación del conmutador, no como el selector de ruta.',
          },
          {
            title: 'Wi-Fi Solo para cafeterías y hoteles',
            body: 'La mayoría de las personas necesitan una VPN en Wi-Fi que no sea de confianza y están bien con el SSID y el operador de su casa. Solo Wi-Fi cubre aeropuertos y redes de huéspedes sin quemar Tráfico semanal gratuito en cada salto celular. Combínelo con un vistazo al widget para saber que se activó.',
          },
          {
            title: 'LTE sólo y siempre',
            body: 'LTE solo ayuda si tu proveedor es el problema y se confía en el Wi‑Fi doméstico. Siempre mantiene el túnel activo cada vez que iOS informa una ruta: útil para semanas de viaje, con mayor consumo de batería y cuota gratuita. Desactívelo cuando vuelva a estar en una red de confianza.',
          },
          {
            title: 'Orden de operaciones',
            body: 'En portales cautivos, autentíquese primero y luego permita que la conexión automática o una conexión manual inicien la VPN. Si Smart Connect está activado, la selección del protocolo se realiza después de que comienza el túnel; eso es intencional, no una carrera que deba microgestionar.',
          },
        ],
      },
      fr: {
        title: 'Connexion automatique sur Wi‑Fi vs LTE : quel mode choisir',
        excerpt:
          'Désactivé, Wi‑Fi uniquement, LTE uniquement ou Toujours : un guide pratique pour que le VPN démarre lorsque vous en avez besoin et reste silencieux à la maison.',
        sections: [
          {
            title: 'Ce que fait réellement la connexion automatique',
            body: "La connexion automatique décide quand FollowNet démarre le tunnel après un changement de réseau. Il ne sélectionne pas WireGuard vs AmneziaWG – c'est-à-dire Smart Connect ou votre verrouillage de protocole manuel. Considérez la connexion automatique comme la planification du commutateur, et non comme le sélecteur de chemin.",
          },
          {
            title: 'Wi‑Fi Uniquement pour les cafés et les hôtels',
            body: "La plupart des gens ont besoin d'un VPN sur un réseau Wi-Fi non fiable et se contentent de leur SSID et de leur opérateur domestiques. Wi‑Fi couvre uniquement les aéroports et les réseaux invités sans brûler le trafic hebdomadaire gratuit sur chaque saut cellulaire. Associez-le à un aperçu du widget pour savoir qu'il a été déclenché.",
          },
          {
            title: 'LTE uniquement et toujours',
            body: "LTE n'est utile que si votre opérateur est à l'origine du problème et que le Wi-Fi domestique est fiable. Maintient toujours le tunnel ouvert chaque fois qu'iOS signale un chemin - utile pour les semaines de voyage, plus lourd en batterie et en quota gratuit. Désactivez-le lorsque vous êtes de retour sur un réseau de confiance.",
          },
          {
            title: 'Ordre des opérations',
            body: "Sur les portails captifs, authentifiez-vous d’abord, puis laissez la connexion automatique ou une connexion manuelle démarrer le VPN. Si Smart Connect est activé, la sélection du protocole a lieu après le démarrage du tunnel – c'est intentionnel, ce n'est pas une course que vous devez microgérer.",
          },
        ],
      },
      pt: {
        title: 'Conexão automática em Wi-Fi vs LTE: qual modo escolher',
        excerpt:
          'Desativado, Somente Wi‑Fi, Somente LTE ou Sempre — um guia prático para que a VPN seja iniciada quando você precisar e permaneça silenciosa em casa.',
        sections: [
          {
            title: 'O que a conexão automática realmente faz',
            body: 'A conexão automática decide quando o FollowNet inicia o túnel após uma mudança de rede. Ele não escolhe WireGuard vs AmneziaWG – isto é Smart Connect ou seu bloqueio manual de protocolo. Pense na conexão automática como a programação do switch, não como o seletor de caminho.',
          },
          {
            title: 'Wi‑Fi apenas para cafés e hotéis',
            body: 'A maioria das pessoas precisa de VPN em redes Wi-Fi não confiáveis ​​e não tem problemas com SSID e operadora doméstica. O Wi-Fi cobre apenas aeroportos e redes de visitantes sem queimar o tráfego semanal gratuito em cada salto de celular. Combine-o com um widget para saber que ele disparou.',
          },
          {
            title: 'Somente LTE e sempre',
            body: 'LTE só ajuda se sua operadora for o problema e o Wi-Fi doméstico for confiável. Sempre mantém o túnel aberto sempre que o iOS informa um caminho – útil para semanas de viagem, com maior consumo de bateria e cota gratuita. Desative-o quando estiver de volta a uma rede em que você confia.',
          },
          {
            title: 'Ordem das operações',
            body: 'Em portais cativos, autentique primeiro e depois deixe a conexão automática ou uma conexão manual iniciar a VPN. Se o Smart Connect estiver ativado, a seleção do protocolo ocorre após o início do túnel – isso é intencional, não uma corrida que você precisa microgerenciar.',
          },
        ],
      },
      uk: {
        title: 'Автоматичне підключення через Wi‑Fi чи LTE: який режим вибрати',
        excerpt:
          'Вимкнено, лише Wi‑Fi, лише LTE або завжди — практичний посібник, щоб VPN запускався, коли вам це потрібно, і залишався тихим удома.',
        sections: [
          {
            title: 'Що насправді робить автоматичне підключення',
            body: 'Автоматичне підключення вирішує, коли FollowNet запускає тунель після зміни мережі. Він не вибирає WireGuard проти AmneziaWG — це Smart Connect або ручне блокування протоколу. Думайте про автоматичне підключення як про розклад увімкнення, а не засіб вибору шляху.',
          },
          {
            title: 'Wi‑Fi лише для кафе та готелів',
            body: 'Більшості людей потрібен VPN у ненадійних мережах Wi‑Fi, і вони добре працюють на домашньому SSID і операторі. Wi‑Fi охоплює лише аеропорти та гостьові мережі без спалювання безкоштовного щотижневого трафіку на кожному стільниковому зв’язку. Поєднайте його з поглядом віджета, щоб ви знали, що він стріляв.',
          },
          {
            title: 'Тільки LTE і завжди',
            body: 'LTE допомагає, лише якщо проблема є у вашого оператора, а домашня Wi‑Fi є надійною. Завжди підтримує тунель щоразу, коли iOS повідомляє про шлях — корисно для багатотижневих подорожей, більше заряду батареї та вільної квоти. Вимкніть його, коли ви повернетеся до мережі, якій довіряєте.',
          },
          {
            title: 'Порядок виконання операцій',
            body: 'На адаптивних порталах спочатку пройдіть автентифікацію, а потім дозвольте автоматичному підключенню або підключенню вручну запустити VPN. Якщо Smart Connect увімкнено, вибір протоколу відбувається після початку тунелю — це навмисно, а не гонка, якою вам потрібно мікрокерувати.',
          },
        ],
      },
    },
  },
  {
    slug: 'public-wifi-risks',
    date: '2025-11-30',
    minutes: 6,
    topic: 'guides',
    translations: {
      en: {
        title:
          'Public Wi‑Fi risks on iPhone — what VPN fixes and what it does not',
        excerpt:
          'Airports and cafés are convenient. Here is the honest threat model for FollowNet users on shared hotspots.',
        sections: [
          {
            title: 'What shared networks expose',
            body: 'On open or poorly managed Wi‑Fi, other clients and the hotspot operator can observe unencrypted traffic and attempt local attacks. HTTPS still matters for sites, but a VPN adds a private path from your iPhone to the VPN server so local snoopers see less of your session.',
          },
          {
            title: 'What FollowNet changes',
            body: 'With the tunnel up — WireGuard, IKEv2, AmneziaWG, or Hysteria2 via Smart Connect — your device traffic is encrypted to FollowNet before it leaves the café SSID. Auto-connect on Wi‑Fi Only is the habit that makes this real instead of optional.',
          },
          {
            title: 'What VPN will not fix',
            body: 'Phishing pages, malware you install, weak App Store account security, and shoulder-surfing still win. Captive portals can also require a clear login before VPN works. FollowNet encrypts transport; it is not antivirus or a password manager.',
          },
          {
            title: 'A simple café checklist',
            body: 'Join Wi‑Fi, complete the portal if needed, confirm FollowNet is connected (widget or main screen), avoid entering credentials on sketchy HTTP pages, and use Speed Test if the hotspot feels broken after connect.',
          },
        ],
      },
      ru: {
        title: 'Риски публичного Wi‑Fi на iPhone — что чинит VPN и чего нет',
        excerpt:
          'Аэропорты и кафе удобны. Честная модель угроз для пользователей FollowNet в общих точках доступа.',
        sections: [
          {
            title: 'Что видно в общей сети',
            body: 'В открытом или плохо управляемом Wi‑Fi другие клиенты и оператор точки могут видеть незашифрованный трафик и пробовать локальные атаки. HTTPS важен для сайтов, а VPN даёт приватный путь от iPhone до VPN-сервера, чтобы локальные снифферы видели меньше.',
          },
          {
            title: 'Что меняет FollowNet',
            body: 'С поднятым туннелем — WireGuard, IKEv2, AmneziaWG или Hysteria2 через Smart Connect — трафик шифруется до FollowNet ещё до выхода из SSID кафе. Auto-connect «только Wi‑Fi» превращает это в привычку, а не опцию «если вспомнил».',
          },
          {
            title: 'Чего VPN не чинит',
            body: 'Фишинг, установленный malware, слабая защита Apple ID и подглядывание через плечо остаются. Captive portal часто требует логин до VPN. FollowNet шифрует транспорт — это не антивирус и не менеджер паролей.',
          },
          {
            title: 'Короткий чеклист для кафе',
            body: 'Подключились к Wi‑Fi, прошли портал при необходимости, убедились что FollowNet online (виджет или главный экран), не вводите пароли на сомнительном HTTP, и если хотспот «мертвый» после VPN — прогоните Speed Test.',
          },
        ],
      },
      de: {
        title:
          'Risiken durch öffentliches WLAN auf dem iPhone – was VPN behebt und was nicht',
        excerpt:
          'Flughäfen und Cafés sind praktisch. Hier ist das ehrliche Bedrohungsmodell für FollowNet-Benutzer an gemeinsam genutzten Hotspots.',
        sections: [
          {
            title: 'Was gemeinsame Netzwerke enthüllen',
            body: 'Bei offenem oder schlecht verwaltetem WLAN können andere Clients und der Hotspot-Betreiber unverschlüsselten Datenverkehr beobachten und lokale Angriffe versuchen. HTTPS ist für Websites immer noch wichtig, aber ein VPN fügt einen privaten Pfad von Ihrem iPhone zum VPN-Server hinzu, sodass lokale Schnüffler weniger von Ihrer Sitzung sehen.',
          },
          {
            title: 'Was FollowNet ändert',
            body: 'Wenn der Tunnel aktiv ist – WireGuard, IKEv2, AmneziaWG oder Hysteria2 über Smart Connect – wird Ihr Geräteverkehr an FollowNet verschlüsselt, bevor er die Café-SSID verlässt. Die automatische Verbindung nur über Wi-Fi ist die Gewohnheit, die dies real und nicht optional macht.',
          },
          {
            title: 'Welches VPN wird nicht behoben?',
            body: 'Phishing-Seiten, von Ihnen installierte Malware, schwache Sicherheit des App Store-Kontos und unbefugtes Hin und Her gewinnen immer noch. Captive-Portale erfordern möglicherweise auch eine eindeutige Anmeldung, bevor VPN funktioniert. FollowNet verschlüsselt den Transport; Es handelt sich nicht um ein Antivirenprogramm oder einen Passwort-Manager.',
          },
          {
            title: 'Eine einfache Café-Checkliste',
            body: 'Treten Sie Wi-Fi bei, vervollständigen Sie das Portal bei Bedarf, bestätigen Sie, dass FollowNet verbunden ist (Widget oder Hauptbildschirm), vermeiden Sie die Eingabe von Anmeldeinformationen auf unsicheren HTTP-Seiten und verwenden Sie den Geschwindigkeitstest, wenn der Hotspot nach der Verbindung defekt erscheint.',
          },
        ],
      },
      es: {
        title:
          'Riesgos del Wi‑Fi público en el iPhone: qué soluciona la VPN y qué no',
        excerpt:
          'Los aeropuertos y cafeterías son convenientes. Este es el modelo de amenaza honesto para los usuarios de FollowNet en puntos de acceso compartidos.',
        sections: [
          {
            title: 'Lo que exponen las redes compartidas',
            body: 'En redes Wi-Fi abiertas o mal administradas, otros clientes y el operador del punto de acceso pueden observar el tráfico no cifrado e intentar ataques locales. HTTPS sigue siendo importante para los sitios, pero una VPN agrega una ruta privada desde su iPhone al servidor VPN para que los fisgones locales vean menos de su sesión.',
          },
          {
            title: 'Qué cambia FollowNet',
            body: 'Con el túnel activo (WireGuard, IKEv2, AmneziaWG o Hysteria2 a través de Smart Connect), el tráfico de su dispositivo se cifra en FollowNet antes de salir del SSID de la cafetería. La conexión automática solo mediante Wi-Fi es el hábito que hace que esto sea una realidad en lugar de una opción.',
          },
          {
            title: 'Qué VPN no solucionará',
            body: 'Las páginas de phishing, el malware que usted instala, la débil seguridad de la cuenta de la App Store y la navegación de hombros siguen ganando. Los portales cautivos también pueden requerir un inicio de sesión claro antes de que funcione la VPN. FollowNet cifra el transporte; No es antivirus ni administrador de contraseñas.',
          },
          {
            title: 'Una sencilla lista de verificación para un café',
            body: 'Únase a Wi-Fi, complete el portal si es necesario, confirme que FollowNet esté conectado (widget o pantalla principal), evite ingresar credenciales en páginas HTTP incompletas y use la Prueba de velocidad si el punto de acceso se siente roto después de conectarse.',
          },
        ],
      },
      fr: {
        title:
          "Risques liés au Wi-Fi public sur iPhone : quels VPN corrigent et ce qu'il ne corrige pas",
        excerpt:
          'Les aéroports et les cafés sont pratiques. Voici le modèle de menace honnête pour les utilisateurs de FollowNet sur les hotspots partagés.',
        sections: [
          {
            title: 'Ce que révèlent les réseaux partagés',
            body: "Sur un Wi‑Fi ouvert ou mal géré, d'autres clients et l'opérateur du hotspot peuvent observer le trafic non chiffré et tenter des attaques locales. HTTPS est toujours important pour les sites, mais un VPN ajoute un chemin privé de votre iPhone au serveur VPN afin que les espions locaux voient moins votre session.",
          },
          {
            title: 'Ce que FollowNet change',
            body: "Avec le tunnel activé – WireGuard, IKEv2, AmneziaWG ou Hysteria2 via Smart Connect – le trafic de votre appareil est crypté sur FollowNet avant de quitter le SSID du café. La connexion automatique sur Wi-Fi uniquement est l'habitude qui rend cela réel plutôt que facultatif.",
          },
          {
            title: 'Quel VPN ne résoudra pas',
            body: "Les pages de phishing, les logiciels malveillants que vous installez, la faible sécurité du compte App Store et la navigation sur l'épaule gagnent toujours. Les portails captifs peuvent également nécessiter une connexion claire avant que le VPN ne fonctionne. FollowNet crypte le transport ; ce n'est pas un antivirus ou un gestionnaire de mots de passe.",
          },
          {
            title: 'Une simple liste de contrôle pour un café',
            body: "Rejoignez le Wi-Fi, complétez le portail si nécessaire, confirmez que FollowNet est connecté (widget ou écran principal), évitez de saisir les informations d'identification sur des pages HTTP sommaires et utilisez Speed ​​​​Test si le point d'accès semble cassé après la connexion.",
          },
        ],
      },
      pt: {
        title:
          'Riscos de Wi-Fi público no iPhone – o que a VPN corrige e o que não corrige',
        excerpt:
          'Aeroportos e cafés são convenientes. Aqui está o modelo de ameaça honesto para usuários do FollowNet em pontos de acesso compartilhados.',
        sections: [
          {
            title: 'O que as redes compartilhadas expõem',
            body: 'Em redes Wi-Fi abertas ou mal gerenciadas, outros clientes e o operador do hotspot podem observar tráfego não criptografado e tentar ataques locais. O HTTPS ainda é importante para os sites, mas uma VPN adiciona um caminho privado do seu iPhone ao servidor VPN para que os bisbilhoteiros locais vejam menos da sua sessão.',
          },
          {
            title: 'O que o FollowNet muda',
            body: 'Com o túnel ativado – WireGuard, IKEv2, AmneziaWG ou Hysteria2 via Smart Connect – o tráfego do seu dispositivo é criptografado para FollowNet antes de sair do SSID do café. A conexão automática somente por Wi‑Fi é o hábito que torna isso real, em vez de opcional.',
          },
          {
            title: 'O que a VPN não resolverá',
            body: 'Páginas de phishing, malware que você instala, segurança fraca da conta da App Store e navegação no ombro ainda vencem. Os portais cativos também podem exigir um login claro antes que a VPN funcione. FollowNet criptografa o transporte; não é antivírus ou gerenciador de senhas.',
          },
          {
            title: 'Uma lista de verificação simples para um café',
            body: 'Conecte-se ao Wi-Fi, preencha o portal se necessário, confirme se o FollowNet está conectado (widget ou tela principal), evite inserir credenciais em páginas HTTP incompletas e use o Teste de velocidade se o ponto de acesso parecer quebrado após a conexão.',
          },
        ],
      },
      uk: {
        title: 'Ризики публічного Wi‑Fi на iPhone — що VPN виправляє, а що ні',
        excerpt:
          'Аеропорти та кафе зручні. Ось чесна модель загроз для користувачів FollowNet у спільних точках доступу.',
        sections: [
          {
            title: 'Що розкривають спільні мережі',
            body: 'У відкритому або погано керованому Wi‑Fi інші клієнти та оператор точки доступу можуть спостерігати за незашифрованим трафіком і здійснювати локальні атаки. HTTPS все ще має значення для сайтів, але VPN додає приватний шлях від вашого iPhone до сервера VPN, тож місцеві шпигуни бачать менше вашої сесії.',
          },
          {
            title: 'Що змінює FollowNet',
            body: 'За допомогою тунелю — WireGuard, IKEv2, AmneziaWG або Hysteria2 через Smart Connect — трафік вашого пристрою шифрується до FollowNet перед тим, як покине SSID кафе. Автоматичне підключення лише через Wi‑Fi — це звичка, яка робить це реальним, а не необов’язковим.',
          },
          {
            title: 'Що VPN не виправить',
            body: 'Фішингові сторінки, зловмисне програмне забезпечення, яке ви встановлюєте, слабка безпека облікового запису App Store і постійний серфінг все одно перемагають. Приєднані портали також можуть вимагати чіткого входу до роботи VPN. FollowNet шифрує транспорт; це не антивірус чи менеджер паролів.',
          },
          {
            title: 'Простий контрольний список для кафе',
            body: 'Підключіться до Wi‑Fi, за потреби завершіть портал, підтвердьте підключення FollowNet (віджет або головний екран), уникайте введення облікових даних на неоднозначних HTTP-сторінках і скористайтеся перевіркою швидкості, якщо після з’єднання точка доступу не працює.',
          },
        ],
      },
    },
  },
  {
    slug: 'travel-vpn-roaming',
    date: '2025-11-08',
    minutes: 6,
    topic: 'guides',
    translations: {
      en: {
        title: 'Travel roaming with FollowNet: SIMs, hotels, and Smart Connect',
        excerpt:
          'How to prepare before you fly, what to expect on foreign carriers, and when Premium locations matter.',
        sections: [
          {
            title: 'Install before you leave',
            body: 'Download FollowNet, sign in with email code, and verify Connect works on home Wi‑Fi. Airport networks are a bad place to discover App Store or login friction. Save a working protocol preference or leave Smart Connect on for unknown carriers.',
          },
          {
            title: 'Hotels and captive portals',
            body: 'Complete the hotel portal first, then connect VPN. Auto-connect on Wi‑Fi Only shines here. If WireGuard stalls on the property network, Smart Connect may move you to AmneziaWG, IKEv2, or Hysteria2 — watch the active protocol in the app.',
          },
          {
            title: 'Roaming data and Free limits',
            body: 'VPN adds overhead; roaming charges come from your carrier, not FollowNet. On Free, weekly caps still apply abroad — Premium removes the cap when you rely on VPN all day across cities. Speed Test on Wi‑Fi vs LTE tells you which path is worth using.',
          },
          {
            title: 'Laws and expectations',
            body: 'FollowNet is a conventional VPN with global exits, not a guarantee of access everywhere. Local rules and network policies vary; you are responsible for complying. Use travel VPN for privacy and stability — not as a promise of unrestricted content.',
          },
        ],
      },
      ru: {
        title: 'Роуминг с FollowNet: SIM, отели и Smart Connect',
        excerpt:
          'Как подготовиться до вылета, чего ждать у зарубежных операторов и когда важны Premium-локации.',
        sections: [
          {
            title: 'Установите до вылета',
            body: 'Скачайте FollowNet, войдите по email-коду и проверьте Connect на домашнем Wi‑Fi. Аэропорт — плохой момент выяснять проблемы с App Store. Зафиксируйте протокол или оставьте Smart Connect для незнакомых сетей.',
          },
          {
            title: 'Отели и captive portal',
            body: 'Сначала портал отеля, потом VPN. Auto-connect «только Wi‑Fi» здесь особенно полезен. Если WireGuard не идёт, Smart Connect может перейти на AmneziaWG, IKEv2 или Hysteria2 — смотрите активный протокол в приложении.',
          },
          {
            title: 'Роуминг и лимит Free',
            body: 'VPN даёт overhead; деньги за роуминг — у оператора, не у FollowNet. На Free недельный лимит действует и за границей — Premium снимает его, когда VPN нужен весь день. Speed Test на Wi‑Fi и LTE покажет, какой путь выгоднее.',
          },
          {
            title: 'Законы и ожидания',
            body: 'FollowNet — обычный VPN с выходами в разных регионах, не гарантия доступа везде. Правила и сети разные; ответственность за соблюдение — на вас. Travel VPN — про приватность и стабильность, не про «весь контент без ограничений».',
          },
        ],
      },
      de: {
        title: 'Reiseroaming mit FollowNet: SIMs, Hotels und Smart Connect',
        excerpt:
          'Wie Sie sich vor Ihrem Flug vorbereiten, was Sie bei ausländischen Fluggesellschaften erwartet und wann Premium-Standorte wichtig sind.',
        sections: [
          {
            title: 'Installieren Sie es, bevor Sie gehen',
            body: 'Laden Sie FollowNet herunter, melden Sie sich mit dem E-Mail-Code an und überprüfen Sie, ob Connect im Heim-WLAN funktioniert. Flughafennetzwerke sind ein schlechter Ort, um App Store- oder Anmeldeprobleme zu entdecken. Speichern Sie eine Arbeitsprotokolleinstellung oder lassen Sie Smart Connect für unbekannte Netzbetreiber aktiviert.',
          },
          {
            title: 'Hotels und Captive-Portale',
            body: 'Füllen Sie zuerst das Hotelportal aus und stellen Sie dann eine VPN-Verbindung her. Hier leuchtet „Auto-Connect on Wi-Fi Only“. Wenn WireGuard im Immobiliennetzwerk blockiert, werden Sie von Smart Connect möglicherweise zu AmneziaWG, IKEv2 oder Hysteria2 weitergeleitet – sehen Sie sich das aktive Protokoll in der App an.',
          },
          {
            title: 'Roaming-Daten und kostenlose Limits',
            body: 'VPN erhöht den Overhead; Roaming-Gebühren werden von Ihrem Mobilfunkanbieter erhoben, nicht von FollowNet. Bei Free gelten im Ausland weiterhin wöchentliche Obergrenzen. Bei Premium entfällt die Obergrenze, wenn Sie den ganzen Tag über in Städten auf VPN angewiesen sind. Der Geschwindigkeitstest für WLAN vs. LTE verrät Ihnen, welcher Weg sich lohnt.',
          },
          {
            title: 'Gesetze und Erwartungen',
            body: 'FollowNet ist ein herkömmliches VPN mit globalen Ausgängen und bietet keine Garantie für den Zugriff überall. Lokale Regeln und Netzwerkrichtlinien variieren; Sie sind für die Einhaltung verantwortlich. Nutzen Sie Reise-VPN für Privatsphäre und Stabilität – nicht als Versprechen für uneingeschränkte Inhalte.',
          },
        ],
      },
      es: {
        title: 'Viaja en roaming con FollowNet: SIM, hoteles y Smart Connect',
        excerpt:
          'Cómo prepararse antes de volar, qué esperar de las aerolíneas extranjeras y cuándo son importantes las ubicaciones Premium.',
        sections: [
          {
            title: 'Instalar antes de salir',
            body: 'Descargue FollowNet, inicie sesión con un código de correo electrónico y verifique que Connect funcione en la red Wi‑Fi de su hogar. Las redes de aeropuertos son un mal lugar para descubrir la App Store o problemas de inicio de sesión. Guarde una preferencia de protocolo de trabajo o deje activado Smart Connect para operadores desconocidos.',
          },
          {
            title: 'Hoteles y portales cautivos',
            body: 'Primero complete el portal del hotel y luego conecte la VPN. Aquí solo brilla la conexión automática mediante Wi‑Fi. Si WireGuard se bloquea en la red de la propiedad, Smart Connect puede trasladarlo a AmneziaWG, IKEv2 o Hysteria2; observe el protocolo activo en la aplicación.',
          },
          {
            title: 'Datos de roaming y límites gratuitos',
            body: 'VPN añade gastos generales; Los cargos de roaming provienen de su operador, no de FollowNet. En Free, los límites semanales aún se aplican en el extranjero: Premium elimina el límite cuando dependes de VPN todo el día en todas las ciudades. La prueba de velocidad en Wi‑Fi frente a LTE te indica qué ruta vale la pena usar.',
          },
          {
            title: 'Leyes y expectativas',
            body: 'FollowNet es una VPN convencional con salidas globales, no una garantía de acceso en todas partes. Las reglas locales y las políticas de red varían; usted es responsable de cumplir. Utilice una VPN para viajes para obtener privacidad y estabilidad, no como una promesa de contenido sin restricciones.',
          },
        ],
      },
      fr: {
        title:
          'Itinérance de voyage avec FollowNet : cartes SIM, hôtels et Smart Connect',
        excerpt:
          "Comment se préparer avant de prendre l'avion, à quoi s'attendre sur les transporteurs étrangers et quand les emplacements Premium sont importants.",
        sections: [
          {
            title: 'Installez avant de partir',
            body: 'Téléchargez FollowNet, connectez-vous avec votre code de messagerie et vérifiez que Connect fonctionne sur le Wi-Fi domestique. Les réseaux aéroportuaires ne sont pas un bon endroit pour découvrir l’App Store ou se connecter. Enregistrez une préférence de protocole fonctionnel ou laissez Smart Connect activé pour les opérateurs inconnus.',
          },
          {
            title: 'Hôtels et portails captifs',
            body: "Remplissez d'abord le portail de l'hôtel, puis connectez le VPN. La connexion automatique sur Wi‑Fi uniquement brille ici. Si WireGuard bloque sur le réseau immobilier, Smart Connect peut vous déplacer vers AmneziaWG, IKEv2 ou Hysteria2 – surveillez le protocole actif dans l'application.",
          },
          {
            title: "Données d'itinérance et limites gratuites",
            body: "Le VPN ajoute une surcharge ; les frais d'itinérance proviennent de votre opérateur, et non de FollowNet. Sur Free, des plafonds hebdomadaires s'appliquent toujours à l'étranger. Premium supprime le plafond lorsque vous utilisez un VPN toute la journée dans toutes les villes. Le test de vitesse sur Wi‑Fi vs LTE vous indique quel chemin vaut la peine d'être utilisé.",
          },
          {
            title: 'Lois et attentes',
            body: 'FollowNet est un VPN conventionnel avec des sorties mondiales, mais il ne garantit pas un accès partout. Les règles locales et les politiques de réseau varient ; vous êtes responsable de vous y conformer. Utilisez un VPN de voyage pour garantir la confidentialité et la stabilité, et non pour garantir un contenu illimité.',
          },
        ],
      },
      pt: {
        title: 'Roaming de viagens com FollowNet: SIMs, hotéis e Smart Connect',
        excerpt:
          'Como se preparar antes de voar, o que esperar de companhias aéreas estrangeiras e quando as localizações Premium são importantes.',
        sections: [
          {
            title: 'Instale antes de sair',
            body: 'Baixe o FollowNet, faça login com o código de e-mail e verifique se o Connect funciona no Wi-Fi doméstico. As redes de aeroportos são um lugar ruim para descobrir a App Store ou problemas de login. Salve uma preferência de protocolo funcional ou deixe o Smart Connect ativado para operadoras desconhecidas.',
          },
          {
            title: 'Hotéis e portais cativos',
            body: 'Preencha primeiro o portal do hotel e depois conecte a VPN. A conexão automática somente por Wi-Fi brilha aqui. Se o WireGuard travar na rede imobiliária, o Smart Connect poderá movê-lo para AmneziaWG, IKEv2 ou Hysteria2 – observe o protocolo ativo no aplicativo.',
          },
          {
            title: 'Dados em roaming e limites gratuitos',
            body: 'VPN adiciona sobrecarga; as tarifas de roaming vêm da sua operadora, não da FollowNet. No Grátis, os limites semanais ainda se aplicam no exterior – o Premium remove o limite quando você confia na VPN o dia todo nas cidades. O teste de velocidade em Wi-Fi vs LTE informa qual caminho vale a pena usar.',
          },
          {
            title: 'Leis e expectativas',
            body: 'FollowNet é uma VPN convencional com saídas globais, não uma garantia de acesso em todos os lugares. As regras locais e as políticas de rede variam; você é responsável por cumprir. Use VPN para viagens para privacidade e estabilidade — não como uma promessa de conteúdo irrestrito.',
          },
        ],
      },
      uk: {
        title:
          'Подорожуйте в роумінгу з FollowNet: SIM-карти, готелі та Smart Connect',
        excerpt:
          'Як підготуватися до польоту, чого очікувати від іноземних перевізників і коли місцезнаходження Premium має значення.',
        sections: [
          {
            title: "Встановіть перед від'їздом",
            body: 'Завантажте FollowNet, увійдіть за допомогою коду електронної пошти та переконайтеся, що Connect працює в домашньому Wi‑Fi. Мережі аеропортів – погане місце для відкриття App Store або проблем із входом. Збережіть налаштування робочого протоколу або залиште Smart Connect для невідомих операторів.',
          },
          {
            title: 'Готелі та адаптивні портали',
            body: 'Спочатку заповніть портал готелю, а потім підключіть VPN. Тут світиться лише автоматичне підключення через Wi‑Fi. Якщо WireGuard зупиняється в мережі власності, Smart Connect може перемістити вас на AmneziaWG, IKEv2 або Hysteria2 — спостерігайте за активним протоколом у програмі.',
          },
          {
            title: 'Дані в роумінгу та безкоштовні ліміти',
            body: 'VPN додає накладні витрати; плата за роумінг надходить від вашого оператора, а не від FollowNet. У безкоштовному режимі тижневі обмеження все ще діють за кордоном — Premium знімає обмеження, коли ви покладаєтеся на VPN цілий день у різних містах. Тест швидкості на Wi‑Fi чи LTE підкаже вам, який шлях варто використовувати.',
          },
          {
            title: 'Закони та очікування',
            body: 'FollowNet — це звичайна VPN із глобальними виходами, а не гарантія доступу скрізь. Місцеві правила та політика мережі відрізняються; ви несете відповідальність за дотримання. Використовуйте подорожі VPN для конфіденційності та стабільності, а не як обіцянку необмеженого вмісту.',
          },
        ],
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
        title:
          'Hysteria2 on iOS in FollowNet: when lossy networks need a different path',
        excerpt:
          'Why FollowNet ships Hysteria2 alongside WireGuard, IKEv2, and AmneziaWG — and when Smart Connect should pick it.',
        sections: [
          {
            title: 'The problem Hysteria2 targets',
            body: 'Some paths are lossy, heavily shaped, or hostile to classic VPN signatures. WireGuard and IKEv2 remain excellent defaults, but they are not always the protocol that survives a bad hotel uplink or a carrier that fights UDP-heavy tunnels.',
          },
          {
            title: 'How it fits the FollowNet stack',
            body: 'FollowNet is still a conventional iOS VPN: Network Extension, account login, Free weekly limit, Premium for unlimited. Hysteria2 is another selectable protocol next to WireGuard, IKEv2, and AmneziaWG.',
          },
          {
            title: 'Manual pick vs Smart Connect',
            body: 'If you know a network kills WireGuard, try Hysteria2 or AmneziaWG manually in Settings → Protocol. Otherwise leave Smart Connect on and let it weigh conditions. Use Speed Test after each switch; “feels faster” without numbers wastes Free quota.',
          },
          {
            title: 'What success looks like',
            body: 'Success is a boring green connected state for browsing, messaging, and streaming — not a protocol trophy. If Hysteria2 underperforms on your home fiber, go back to WireGuard. Protocol choice is a tool, not an identity.',
          },
        ],
      },
      ru: {
        title:
          'Hysteria2 на iOS в FollowNet: когда плохим сетям нужен другой путь',
        excerpt:
          'Зачем FollowNet держит Hysteria2 рядом с WireGuard, IKEv2 и AmneziaWG — и когда Smart Connect должен его выбрать.',
        sections: [
          {
            title: 'Какую проблему закрывает Hysteria2',
            body: 'Часть каналов с потерями, шейпингом или враждебна к привычным VPN-сигнатурам. WireGuard и IKEv2 — отличные default, но не всегда переживают убогий uplink отеля или оператора, который душит UDP-туннели.',
          },
          {
            title: 'Место в стеке FollowNet',
            body: 'FollowNet остаётся обычным iOS VPN: Network Extension, аккаунт, недельный лимит Free, Premium без лимита. Hysteria2 — ещё один выбираемый протокол рядом с WireGuard, IKEv2 и AmneziaWG.',
          },
          {
            title: 'Вручную или Smart Connect',
            body: 'Если сеть убивает WireGuard — попробуйте Hysteria2 или AmneziaWG в Settings → Protocol. Иначе оставьте Smart Connect. После смены гоняйте Speed Test; «кажется быстрее» без цифр только жрёт квоту Free.',
          },
          {
            title: 'Как выглядит успех',
            body: 'Успех — скучный зелёный Connected для браузинга, чатов и стрима, а не трофей протокола. Если дома на оптике Hysteria2 хуже — вернитесь на WireGuard. Выбор протокола — инструмент, не идентичность.',
          },
        ],
      },
      de: {
        title:
          'Hysteria2 auf iOS in FollowNet: Wenn verlustbehaftete Netzwerke einen anderen Pfad benötigen',
        excerpt:
          'Warum FollowNet Hysteria2 zusammen mit WireGuard, IKEv2 und AmneziaWG anbietet – und wann Smart Connect sich dafür entscheiden sollte.',
        sections: [
          {
            title: 'Das Problem, auf das Hysteria2 abzielt',
            body: 'Einige Pfade sind verlustbehaftet, stark geformt oder feindlich gegenüber klassischen VPN-Signaturen. WireGuard und IKEv2 sind nach wie vor ausgezeichnete Standardeinstellungen, aber sie sind nicht immer das Protokoll, das einen schlechten Hotel-Uplink übersteht oder ein Carrier, der UDP-lastige Tunnel bekämpft.',
          },
          {
            title: 'Wie es zum FollowNet-Stack passt',
            body: 'FollowNet ist immer noch ein herkömmliches iOS-VPN: Netzwerkerweiterung, Kontoanmeldung, kostenloses wöchentliches Limit, Premium für unbegrenzt. Hysteria2 ist neben WireGuard, IKEv2 und AmneziaWG ein weiteres auswählbares Protokoll.',
          },
          {
            title: 'Manuelle Auswahl vs. Smart Connect',
            body: 'Wenn ein Netzwerk WireGuard blockiert, testen Sie Hysteria2 oder AmneziaWG unter Einstellungen → Protokoll. Andernfalls lassen Sie Smart Connect aktiviert. Geschwindigkeitstests werden auf das wöchentliche Datenlimit von Free angerechnet.',
          },
          {
            title: 'Wie Erfolg aussieht',
            body: 'Erfolg ist ein langweiliger grüner Verbindungszustand zum Surfen, Messaging und Streaming – keine Protokolltrophäe. Wenn Hysteria2 auf Ihrem Heim-Glasfaserkabel nicht leistungsfähig ist, kehren Sie zu WireGuard zurück. Die Protokollwahl ist ein Werkzeug, keine Identität.',
          },
        ],
      },
      es: {
        title:
          'Hysteria2 en iOS en FollowNet: cuando las redes con pérdidas necesitan un camino diferente',
        excerpt:
          'Por qué FollowNet envía Hysteria2 junto con WireGuard, IKEv2 y AmneziaWG, y cuándo Smart Connect debería elegirlo.',
        sections: [
          {
            title: 'El problema al que apunta Hysteria2',
            body: 'Algunas rutas tienen pérdidas, tienen muchas formas u son hostiles a las firmas de VPN clásicas. WireGuard e IKEv2 siguen siendo excelentes valores predeterminados, pero no siempre son el protocolo que sobrevive a un mal enlace ascendente de un hotel o a un operador que lucha contra los túneles con mucho UDP.',
          },
          {
            title: 'Cómo encaja en la pila FollowNet',
            body: 'FollowNet sigue siendo una VPN para iOS convencional: extensión de red, inicio de sesión de cuenta, límite semanal gratuito, Premium ilimitado. Hysteria2 es otro protocolo seleccionable junto a WireGuard, IKEv2 y AmneziaWG.',
          },
          {
            title: 'Selección manual frente a Smart Connect',
            body: 'Si una red bloquea WireGuard, prueba Hysteria2 o AmneziaWG en Ajustes → Protocolo. En los demás casos, deja Smart Connect activado. Recuerda que las pruebas de velocidad consumen datos del límite semanal de Free.',
          },
          {
            title: 'Cómo se ve el éxito',
            body: 'El éxito es un estado aburrido y verde conectado para navegar, enviar mensajes y transmitir, no un trofeo de protocolo. Si Hysteria2 tiene un rendimiento inferior en la fibra de su hogar, regrese a WireGuard. La elección del protocolo es una herramienta, no una identidad.',
          },
        ],
      },
      fr: {
        title:
          "Hysteria2 sur iOS dans FollowNet : quand les réseaux avec perte ont besoin d'un chemin différent",
        excerpt:
          'Pourquoi FollowNet livre Hysteria2 aux côtés de WireGuard, IKEv2 et AmneziaWG – et quand Smart Connect devrait le choisir.',
        sections: [
          {
            title: 'Le problème ciblé par Hysteria2',
            body: "Certains chemins sont avec perte, fortement structurés ou hostiles aux signatures VPN classiques. WireGuard et IKEv2 restent d'excellents paramètres par défaut, mais ils ne constituent pas toujours le protocole qui survit à une mauvaise liaison montante d'hôtel ou un opérateur qui combat les tunnels lourds en UDP.",
          },
          {
            title: "Comment il s'adapte à la pile FollowNet",
            body: 'FollowNet est toujours un VPN iOS conventionnel : extension réseau, connexion au compte, limite hebdomadaire gratuite, Premium pour illimité. Hysteria2 est un autre protocole sélectionnable à côté de WireGuard, IKEv2 et AmneziaWG.',
          },
          {
            title: 'Sélection manuelle vs Smart Connect',
            body: "Si vous savez qu'un réseau tue WireGuard, essayez Hysteria2 ou AmneziaWG manuellement dans Paramètres → Protocole. Sinon, laissez Smart Connect activé et laissez-le peser les conditions. Utilisez le test de vitesse après chaque changement ; « se sent plus rapide » sans gaspillage de chiffres Quota gratuit.",
          },
          {
            title: 'À quoi ressemble le succès',
            body: 'Le succès est un état connecté vert ennuyeux pour la navigation, la messagerie et le streaming – pas un trophée protocolaire. Si Hysteria2 est sous-performant sur votre fibre domestique, revenez à WireGuard. Le choix du protocole est un outil, pas une identité.',
          },
        ],
      },
      pt: {
        title:
          'Hysteria2 no iOS no FollowNet: quando redes com perdas precisam de um caminho diferente',
        excerpt:
          'Por que a FollowNet envia Hysteria2 junto com WireGuard, IKEv2 e AmneziaWG – e quando o Smart Connect deve escolhê-lo.',
        sections: [
          {
            title: 'O problema que Hysteria2 visa',
            body: 'Alguns caminhos apresentam perdas, são fortemente modelados ou são hostis às assinaturas VPN clássicas. WireGuard e IKEv2 continuam sendo excelentes padrões, mas nem sempre são o protocolo que sobrevive a um uplink de hotel ruim ou uma operadora que combate túneis com uso pesado de UDP.',
          },
          {
            title: 'Como ele se encaixa na pilha FollowNet',
            body: 'FollowNet ainda é uma VPN iOS convencional: extensão de rede, login de conta, limite semanal gratuito, Premium ilimitado. Hysteria2 é outro protocolo selecionável ao lado de WireGuard, IKEv2 e AmneziaWG.',
          },
          {
            title: 'Escolha manual vs Smart Connect',
            body: 'Se uma rede bloquear o WireGuard, teste Hysteria2 ou AmneziaWG em Ajustes → Protocolo. Nos demais casos, deixe o Smart Connect ativado. Os testes de velocidade consomem dados do limite semanal do Free.',
          },
          {
            title: 'Como é o sucesso',
            body: 'O sucesso é um estado conectado verde e chato para navegação, mensagens e streaming – não um troféu de protocolo. Se o Hysteria2 tiver desempenho inferior na fibra doméstica, volte para o WireGuard. A escolha do protocolo é uma ferramenta, não uma identidade.',
          },
        ],
      },
      uk: {
        title:
          'Hysteria2 на iOS у FollowNet: коли мережі з втратами потребують іншого шляху',
        excerpt:
          'Чому FollowNet постачає Hysteria2 поряд з WireGuard, IKEv2 і AmneziaWG — і коли Smart Connect має вибрати її.',
        sections: [
          {
            title: 'Проблема, на яку спрямована Hysteria2',
            body: 'Деякі мережі втрачають пакети, обмежують швидкість або блокують характерні ознаки VPN. WireGuard та IKEv2 залишаються добрим основним вибором, але не завжди працюють на нестабільному каналі в готелі чи за обмежень UDP з боку оператора.',
          },
          {
            title: 'Як це відповідає стеку FollowNet',
            body: 'FollowNet все ще залишається звичайним VPN для iOS: мережеве розширення, вхід до облікового запису, безкоштовний тижневий ліміт, преміум для необмеженого. Hysteria2 — ще один доступний для вибору протокол поруч із WireGuard, IKEv2 і AmneziaWG.',
          },
          {
            title: 'Ручний вибір проти Smart Connect',
            body: 'Якщо ви знаєте, що мережа вимикає WireGuard, спробуйте Hysteria2 або AmneziaWG вручну в Налаштуваннях → Протокол. В іншому випадку залиште Smart Connect увімкненим і дайте йому зважити умови. Використовуйте перевірку швидкості після кожного перемикання; «відчувається швидше» без чисел витрачає безкоштовну квоту.',
          },
          {
            title: 'Як виглядає успіх',
            body: 'Успіх — це нудний зелений стан підключення для перегляду, обміну повідомленнями та потокового передавання, а не трофей протоколу. Якщо Hysteria2 погано працює на вашому домашньому оптоволокні, поверніться до WireGuard. Вибір протоколу – це інструмент, а не ідентифікація.',
          },
        ],
      },
    },
  },
  {
    slug: 'passwordless-login',
    date: '2025-10-16',
    minutes: 4,
    topic: 'product',
    translations: {
      en: {
        title:
          'Passwordless login in FollowNet: email codes instead of another password',
        excerpt:
          'Why FollowNet uses email verification codes on iOS and Chrome — and what that means for account security.',
        sections: [
          {
            title: 'One less password to reuse',
            body: 'VPN apps that invent yet another password invite reuse and support resets. FollowNet signs you in with an email code so the account is tied to inbox access you already protect with Apple ID, Google, or your mail provider’s 2FA.',
          },
          {
            title: 'What we store for the account',
            body: 'We need enough to know you are subscribed or Free, restore Premium across devices, and support the Chrome extension with the same identity. That is account metadata — not a dump of browsed URLs. Details live in the Privacy Policy.',
          },
          {
            title: 'Practical tips',
            body: 'Use a real inbox you control, keep device passcode and Face ID on, and treat login codes like OTPs — do not forward them. If you switch phones, sign in again; Premium follows the Apple subscription and your FollowNet account, not a local password file.',
          },
        ],
      },
      ru: {
        title:
          'Вход без пароля в FollowNet: email-коды вместо ещё одного пароля',
        excerpt:
          'Почему FollowNet на iOS и в Chrome использует коды на почту — и что это значит для безопасности аккаунта.',
        sections: [
          {
            title: 'На один пароль меньше',
            body: 'VPN с ещё одним паролем провоцируют reuse и саппорт-ресеты. FollowNet входит по коду на email: аккаунт привязан к почте, которую вы уже защищаете через Apple ID, Google или 2FA у провайдера.',
          },
          {
            title: 'Что храним для аккаунта',
            body: 'Нужно понимать Free или Premium, восстанавливать подписку на устройствах и пускать Chrome extension под той же личностью. Это метаданные аккаунта, не дамп посещённых URL. Подробности — в Privacy Policy.',
          },
          {
            title: 'Практика',
            body: 'Используйте свой ящик, держите код и Face ID на устройстве, коды входа — как OTP, не пересылайте. Сменили телефон — войдите снова; Premium идёт за подпиской Apple и аккаунтом FollowNet, не за локальным файлом паролей.',
          },
        ],
      },
      de: {
        title:
          'Passwortloses Login in FollowNet: E-Mail-Codes anstelle eines anderen Passworts',
        excerpt:
          'Warum FollowNet E-Mail-Bestätigungscodes auf iOS und Chrome verwendet – und was das für die Kontosicherheit bedeutet.',
        sections: [
          {
            title: 'Ein Passwort weniger zur Wiederverwendung',
            body: 'VPN-Apps, die ein weiteres Passwort erfinden, laden zur Wiederverwendung ein und unterstützen das Zurücksetzen. FollowNet meldet Sie mit einem E-Mail-Code an, sodass das Konto an den Posteingangszugriff gebunden ist, den Sie bereits mit Apple ID, Google oder der 2FA Ihres E-Mail-Anbieters schützen.',
          },
          {
            title: 'Was wir für das Konto speichern',
            body: 'Wir benötigen ausreichend Informationen, um zu wissen, ob Sie ein Abonnement haben oder kostenlos sind, Premium auf allen Geräten wiederherstellen und die Chrome-Erweiterung mit derselben Identität unterstützen können. Dabei handelt es sich um Kontometadaten – nicht um einen Dump der durchsuchten URLs. Details finden Sie in der Datenschutzerklärung.',
          },
          {
            title: 'Praktische Tipps',
            body: 'Verwenden Sie einen echten Posteingang, den Sie kontrollieren, behalten Sie den Gerätepasscode und die Face ID bei und behandeln Sie Anmeldecodes wie OTPs – leiten Sie sie nicht weiter. Wenn Sie das Telefon wechseln, melden Sie sich erneut an. Premium folgt dem Apple-Abonnement und Ihrem FollowNet-Konto, nicht einer lokalen Passwortdatei.',
          },
        ],
      },
      es: {
        title:
          'Inicio de sesión sin contraseña en FollowNet: códigos de correo electrónico en lugar de otra contraseña',
        excerpt:
          'Por qué FollowNet utiliza códigos de verificación de correo electrónico en iOS y Chrome, y qué significa eso para la seguridad de la cuenta.',
        sections: [
          {
            title: 'Una contraseña menos para reutilizar',
            body: 'Las aplicaciones VPN que inventan otra contraseña invitan a su reutilización y admiten restablecimientos. FollowNet inicia sesión con un código de correo electrónico para que la cuenta esté vinculada al acceso a la bandeja de entrada que ya protege con ID de Apple, Google o la 2FA de su proveedor de correo.',
          },
          {
            title: 'Qué almacenamos para la cuenta',
            body: 'Necesitamos lo suficiente para saber que está suscrito o es gratuito, restaurar Premium en todos los dispositivos y admitir la extensión de Chrome con la misma identidad. Se trata de metadatos de la cuenta, no un volcado de URL exploradas. Los detalles se encuentran en la Política de Privacidad.',
          },
          {
            title: 'Consejos prácticos',
            body: 'Utilice una bandeja de entrada real que usted controle, mantenga activados el código de acceso del dispositivo y el Face ID, y trate los códigos de inicio de sesión como OTP, no los reenvíe. Si cambia de teléfono, inicie sesión nuevamente; Premium sigue la suscripción de Apple y su cuenta FollowNet, no un archivo de contraseña local.',
          },
        ],
      },
      fr: {
        title:
          "Connexion sans mot de passe dans FollowNet : codes e-mail au lieu d'un autre mot de passe",
        excerpt:
          'Pourquoi FollowNet utilise des codes de vérification de courrier électronique sur iOS et Chrome – et ce que cela signifie pour la sécurité des comptes.',
        sections: [
          {
            title: 'Un mot de passe de moins à réutiliser',
            body: "Les applications VPN qui inventent un autre mot de passe invitent à la réutilisation et prennent en charge les réinitialisations. FollowNet vous connecte avec un code de messagerie afin que le compte soit lié à l'accès à la boîte de réception que vous protégez déjà avec l'identifiant Apple, Google ou le 2FA de votre fournisseur de messagerie.",
          },
          {
            title: 'Ce que nous stockons pour le compte',
            body: "Nous en avons besoin de suffisamment pour savoir que vous êtes abonné ou gratuit, restaurer Premium sur tous les appareils et prendre en charge l'extension Chrome avec la même identité. Il s'agit de métadonnées de compte, et non d'un vidage des URL consultées. Les détails se trouvent dans la politique de confidentialité.",
          },
          {
            title: 'Conseils pratiques',
            body: "Utilisez une véritable boîte de réception que vous contrôlez, conservez le code d’accès de l’appareil et Face ID et traitez les codes de connexion comme des OTP – ne les transférez pas. Si vous changez de téléphone, reconnectez-vous ; Premium suit l'abonnement Apple et votre compte FollowNet, pas un fichier de mot de passe local.",
          },
        ],
      },
      pt: {
        title:
          'Login sem senha no FollowNet: códigos de e-mail em vez de outra senha',
        excerpt:
          'Por que a FollowNet usa códigos de verificação de e-mail no iOS e no Chrome — e o que isso significa para a segurança da conta.',
        sections: [
          {
            title: 'Menos uma senha para reutilizar',
            body: 'Aplicativos VPN que inventam mais uma senha convidam à reutilização e suportam redefinições. FollowNet faz login com um código de e-mail para que a conta fique vinculada ao acesso à caixa de entrada que você já protege com Apple ID, Google ou 2FA do seu provedor de e-mail.',
          },
          {
            title: 'O que armazenamos para a conta',
            body: 'Precisamos o suficiente para saber que você é assinante ou gratuito, restaura o Premium em todos os dispositivos e oferece suporte à extensão do Chrome com a mesma identidade. Isso são metadados de conta – não um despejo de URLs navegados. Os detalhes estão na Política de Privacidade.',
          },
          {
            title: 'Dicas práticas',
            body: 'Use uma caixa de entrada real que você controla, mantenha a senha do dispositivo e o Face ID ativados e trate os códigos de login como OTPs – não os encaminhe. Se você trocar de telefone, faça login novamente; Premium segue a assinatura da Apple e sua conta FollowNet, não um arquivo de senha local.',
          },
        ],
      },
      uk: {
        title:
          'Вхід без пароля у FollowNet: коди електронної пошти замість іншого пароля',
        excerpt:
          'Чому FollowNet використовує коди підтвердження електронної пошти в iOS і Chrome — і що це означає для безпеки облікового запису.',
        sections: [
          {
            title: 'На один пароль менше для повторного використання',
            body: 'Програми VPN, які винаходять ще один пароль, запрошують до повторного використання та підтримують скидання. FollowNet здійснює вхід за допомогою коду електронної пошти, щоб обліковий запис було прив’язано до доступу до вхідних, який ви вже захищаєте за допомогою Apple ID, Google або 2FA вашого постачальника послуг електронної пошти.',
          },
          {
            title: 'Що ми зберігаємо для рахунку',
            body: 'Нам потрібно достатньо інформації, щоб знати, що ви підписані чи безкоштовні, відновити Premium на всіх пристроях і підтримувати розширення Chrome з тим самим ідентифікатором. Це метадані облікового запису, а не дамп переглянутих URL-адрес. Деталі розміщені в Політиці конфіденційності.',
          },
          {
            title: 'Практичні поради',
            body: 'Використовуйте справжню скриньку вхідних повідомлень, якою ви керуєте, увімкніть пароль пристрою та Face ID, а коди входу розглядайте як одноразові паролі — не пересилайте їх. Якщо ви змінюєте телефон, увійдіть знову; Premium слідує підписці Apple і вашому обліковому запису FollowNet, а не локальному файлу паролів.',
          },
        ],
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
        excerpt:
          'A short method: baseline without VPN, compare servers and protocols, and read results against your Free weekly limit.',
        sections: [
          {
            title: 'Always take a baseline',
            body: 'Run Speed Test with VPN off on the same Wi‑Fi or LTE you care about. If the hotspot is already 8 Mbps, no protocol will feel like fiber. Baselines keep support conversations honest and stop useless protocol roulette.',
          },
          {
            title: 'Compare apples to apples',
            body: 'Connect, pick a nearby server, test WireGuard, then try Smart Connect or IKEv2 if numbers collapse. Change one variable at a time. Streaming and calls care about latency and stability as much as raw download.',
          },
          {
            title: 'Free quota awareness',
            body: 'Speed tests download real data. On FollowNet Free that counts toward the weekly limit. Two careful tests beat ten angry ones. Premium users still benefit from testing after travel SIM changes.',
          },
          {
            title: 'When slow is expected',
            body: 'Distant exits, congested hotel Wi‑Fi, and obfuscated modes like AmneziaWG can trade speed for reachability. Prefer a closer server for everyday use; keep harder protocols for networks that block the easy ones.',
          },
        ],
      },
      ru: {
        title: 'Speed Test в FollowNet: прежде чем винить VPN',
        excerpt:
          'Короткий метод: baseline без VPN, сравнение серверов и протоколов, учёт недельного лимита Free.',
        sections: [
          {
            title: 'Сначала baseline',
            body: 'Прогоните Speed Test без VPN на том же Wi‑Fi или LTE. Если хотспот уже 8 Мбит/с, никакой протокол не станет «оптикой». Baseline делает разговор с поддержкой честным и останавливает бессмысленную рулетку протоколов.',
          },
          {
            title: 'Сравнивайте честно',
            body: 'Подключитесь, возьмите ближний сервер, замерьте WireGuard, затем Smart Connect или IKEv2, если цифры просели. Меняйте одну переменную за раз. Для стрима и звонков важны latency и стабильность не меньше download.',
          },
          {
            title: 'Лимит Free',
            body: 'Тесты качают реальные данные и входят в недельную квоту Free. Два аккуратных замера лучше десяти злых. На Premium тесты всё равно полезны после смены travel SIM.',
          },
          {
            title: 'Когда медленно — нормально',
            body: 'Далёкий exit, забитый отельный Wi‑Fi и обфускация вроде AmneziaWG могут менять скорость на доступность. Для будней — ближний сервер; жёсткие протоколы — для сетей, где простые не живут.',
          },
        ],
      },
      de: {
        title:
          'Verwenden Sie den FollowNet-Geschwindigkeitstest, bevor Sie dem VPN die Schuld geben',
        excerpt:
          'Eine kurze Methode: Baseline ohne VPN, Server und Protokolle vergleichen und Ergebnisse mit Ihrem kostenlosen wöchentlichen Limit vergleichen.',
        sections: [
          {
            title: 'Nehmen Sie immer eine Grundlinie',
            body: 'Führen Sie den Geschwindigkeitstest mit ausgeschaltetem VPN über dasselbe WLAN oder LTE durch, das Ihnen wichtig ist. Wenn der Hotspot bereits 8 Mbit/s hat, fühlt sich kein Protokoll wie Glasfaser an. Baselines sorgen für ehrliche Support-Gespräche und verhindern nutzloses Protokoll-Roulette.',
          },
          {
            title: 'Vergleichen Sie Äpfel mit Äpfeln',
            body: 'Stellen Sie eine Verbindung her, wählen Sie einen Server in der Nähe aus, testen Sie WireGuard und versuchen Sie es dann mit Smart Connect oder IKEv2, wenn die Zahlen einbrechen. Ändern Sie jeweils eine Variable. Bei Streaming und Anrufen sind Latenz und Stabilität genauso wichtig wie beim Roh-Download.',
          },
          {
            title: 'Kostenlose Quotenbekanntheit',
            body: 'Geschwindigkeitstests laden echte Daten herunter. Bei FollowNet Free wird dies auf das wöchentliche Limit angerechnet. Zwei sorgfältige Tests schlagen zehn Verärgerte. Premium-Benutzer profitieren weiterhin vom Testen nach einem Wechsel der Reise-SIM-Karte.',
          },
          {
            title: 'Wenn langsam erwartet wird',
            body: 'Weit entfernte Server, überlastetes Hotel-WLAN und verschleierte Protokolle wie AmneziaWG können langsamer sein. Nutzen Sie im Alltag einen näheren Server und verschleierte Protokolle nur in Netzen mit Sperren.',
          },
        ],
      },
      es: {
        title:
          'Usando la prueba de velocidad de FollowNet antes de culpar a la VPN',
        excerpt:
          'Un método breve: línea de base sin VPN, compare servidores y protocolos, y lea los resultados con respecto a su límite semanal gratuito.',
        sections: [
          {
            title: 'Tome siempre una línea de base',
            body: 'Ejecute la prueba de velocidad con la VPN desactivada en el mismo Wi‑Fi o LTE que le interese. Si el punto de acceso ya tiene 8 Mbps, ningún protocolo se sentirá como fibra. Las líneas de base mantienen las conversaciones de soporte honestas y detienen la ruleta de protocolos inútiles.',
          },
          {
            title: 'Compara manzanas con manzanas',
            body: 'Conéctese, elija un servidor cercano, pruebe WireGuard y luego pruebe Smart Connect o IKEv2 si los números colapsan. Cambie una variable a la vez. La transmisión y las llamadas se preocupan tanto por la latencia y la estabilidad como por la descarga sin formato.',
          },
          {
            title: 'Conciencia de cuotas gratuita',
            body: 'Las pruebas de velocidad descargan datos reales. En FollowNet Free eso cuenta para el límite semanal. Dos pruebas cuidadosas vencieron a diez enojadas. Los usuarios premium aún se benefician de las pruebas después de los cambios en la SIM de viaje.',
          },
          {
            title: 'Cuando se espera lentitud',
            body: 'Los servidores lejanos, el Wi‑Fi saturado y los protocolos ofuscados como AmneziaWG pueden reducir la velocidad. Para el uso diario, elige un servidor cercano y reserva esos protocolos para redes con bloqueos.',
          },
        ],
      },
      fr: {
        title: 'Utiliser FollowNet Speed ​​Test avant de blâmer le VPN',
        excerpt:
          'Une méthode courte : référence sans VPN, comparez les serveurs et les protocoles et lisez les résultats par rapport à votre limite hebdomadaire gratuite.',
        sections: [
          {
            title: 'Prenez toujours une base de référence',
            body: 'Exécutez un test de vitesse avec VPN désactivé sur le même réseau Wi-Fi ou LTE qui vous intéresse. Si le hotspot atteint déjà 8 Mbps, aucun protocole ne ressemblera à la fibre. Les lignes de base maintiennent les conversations d’assistance honnêtes et mettent fin à la roulette protocolaire inutile.',
          },
          {
            title: 'Comparez des pommes avec des pommes',
            body: "Connectez-vous, choisissez un serveur à proximité, testez WireGuard, puis essayez Smart Connect ou IKEv2 si les chiffres s'effondrent. Modifiez une variable à la fois. Le streaming et les appels se soucient autant de la latence et de la stabilité que du téléchargement brut.",
          },
          {
            title: 'Sensibilisation gratuite aux quotas',
            body: 'Les tests de vitesse téléchargent des données réelles. Sur FollowNet Free, cela compte dans la limite hebdomadaire. Deux tests minutieux en ont battu dix en colère. Les utilisateurs Premium bénéficient toujours des tests après les changements de carte SIM de voyage.',
          },
          {
            title: "Quand on s'attend à une lenteur",
            body: "Les serveurs éloignés, un Wi‑Fi saturé et les protocoles masqués comme AmneziaWG peuvent réduire le débit. Au quotidien, choisissez un serveur proche et réservez ces protocoles aux réseaux qui imposent des blocages.",
          },
        ],
      },
      pt: {
        title: 'Usando o teste de velocidade FollowNet antes de culpar a VPN',
        excerpt:
          'Um método curto: linha de base sem VPN, compare servidores e protocolos e leia os resultados em relação ao seu limite semanal gratuito.',
        sections: [
          {
            title: 'Sempre tome uma linha de base',
            body: 'Execute o teste de velocidade com VPN desativada no mesmo Wi-Fi ou LTE de seu interesse. Se o hotspot já tiver 8 Mbps, nenhum protocolo será parecido com fibra. As linhas de base mantêm as conversas de suporte honestas e impedem a roleta de protocolos inútil.',
          },
          {
            title: 'Compare maçãs com maçãs',
            body: 'Conecte-se, escolha um servidor próximo, teste o WireGuard e, em seguida, tente o Smart Connect ou o IKEv2 se os números caírem. Altere uma variável de cada vez. O streaming e as chamadas preocupam-se tanto com a latência e a estabilidade quanto com o download bruto.',
          },
          {
            title: 'Conscientização sobre cotas gratuitas',
            body: 'Os testes de velocidade baixam dados reais. No FollowNet Free isso conta para o limite semanal. Dois testes cuidadosos venceram dez testes furiosos. Os usuários premium ainda se beneficiam dos testes após alterações no SIM de viagem.',
          },
          {
            title: 'Quando lento é esperado',
            body: 'Servidores distantes, Wi‑Fi congestionado e protocolos ofuscados como AmneziaWG podem reduzir a velocidade. No dia a dia, escolha um servidor próximo e use esses protocolos apenas em redes com bloqueios.',
          },
        ],
      },
      uk: {
        title:
          'Використовуйте перевірку швидкості FollowNet, перш ніж звинувачувати VPN',
        excerpt:
          'Короткий метод: базовий рівень без VPN, порівняння серверів і протоколів і зчитування результатів із вашим тижневим безкоштовним лімітом.',
        sections: [
          {
            title: 'Завжди беріть базову лінію',
            body: 'Запустіть перевірку швидкості з вимкненою VPN на тій самій мережі Wi‑Fi або LTE, яка вам потрібна. Якщо точка доступу вже має швидкість 8 Мбіт/с, жоден протокол не буде схожий на оптоволокно. Базові показники забезпечують чесність розмов служби підтримки та припиняють марну рулетку протоколів.',
          },
          {
            title: 'Порівняйте яблука з яблуками',
            body: 'Підключіться, виберіть найближчий сервер, перевірте WireGuard, а потім спробуйте Smart Connect або IKEv2, якщо цифри впадуть. Змінюйте одну змінну за раз. Потокове передавання та дзвінки важливі для затримки та стабільності так само, як і необроблені завантаження.',
          },
          {
            title: 'Безкоштовне інформування про квоти',
            body: 'Тести швидкості завантаження реальних даних. На FollowNet безкоштовно, що враховується в тижневий ліміт. Два ретельні тести перемогли десять розлючених. Користувачі преміум-класу все ще отримують переваги від тестування після зміни туристичної SIM-карти.',
          },
          {
            title: 'Коли очікується повільний',
            body: 'Віддалені сервери, перевантажений Wi‑Fi та масковані протоколи на кшталт AmneziaWG можуть знижувати швидкість. Для щоденного використання обирайте ближчий сервер, а такі протоколи залиште для мереж із блокуваннями.',
          },
        ],
      },
    },
  },
  {
    slug: 'chrome-vs-ios-vpn',
    date: '2026-04-02',
    minutes: 7,
    topic: 'product',
    translations: {
      en: {
        title: 'Chrome extension vs iOS VPN: same account, different jobs',
        excerpt:
          'When to use FollowNet on iPhone system-wide and when the Chrome extension is enough for desktop browsing.',
        sections: [
          { title: 'iOS covers the whole phone', body: 'The FollowNet iOS app uses Network Extension so Safari, apps, and background traffic can go through the tunnel. That is the right tool for public Wi‑Fi, cellular privacy, Auto-connect, widgets, and Shortcuts — habits a browser alone cannot provide.' },
          { title: 'Chrome covers browser traffic only', body: 'The Chrome extension routes Chrome browsing through a FollowNet proxy with the same account. It does not encrypt or route every app on the computer the way the system-wide iOS VPN does. Other browsers and desktop apps stay outside that path.' },
          { title: 'What is not shipping yet', body: 'FollowNet does not offer full-device macOS or Android VPN apps today, and there is no full Windows desktop VPN either. Chrome on desktop is the supported second surface — browser-only by design.' },
          { title: 'Shared Free and Premium rules', body: 'Both products follow the same honesty: Free has a weekly traffic cap for evaluation; Premium provides unlimited traffic and broader server access. The extension does not invent a separate pricing story or replace phone Auto-connect.' },
          { title: 'One account, two surfaces', body: 'Sign in once and reuse the account on iPhone and in Chrome. Pick servers per surface without inventing a second identity. Free traffic still counts toward the weekly allowance across how you use the service.' },
          { title: 'A simple rule of thumb', body: 'Phone in your pocket at the airport → iOS app. Long desktop research session in Chrome → extension. Travel week with both → stay signed in on both, and remember the desktop side protects Chrome tabs, not Slack or the OS.' },
        ],
      },
      ru: {
        title: 'Chrome extension vs iOS VPN: один аккаунт, разные задачи',
        excerpt:
          'Когда нужен системный FollowNet на iPhone и когда хватает расширения Chrome для десктопного браузинга.',
        sections: [
          { title: 'iOS закрывает весь телефон', body: 'Приложение FollowNet на iOS через Network Extension пускает через туннель Safari, приложения и фоновый трафик. Это инструмент для публичного Wi‑Fi, LTE, Auto-connect, виджетов и Shortcuts — браузерное расширение так не умеет.' },
          { title: 'Chrome защищает только трафик браузера', body: 'Расширение направляет трафик Chrome через прокси FollowNet и использует тот же аккаунт. В отличие от системного VPN на iOS, оно не шифрует и не маршрутизирует все программы на компьютере. Другие браузеры и десктопные приложения остаются вне этого пути.' },
          { title: 'Чего пока нет', body: 'Полноценных VPN-приложений для всей системы на macOS и Android у FollowNet сегодня нет, и полноценного Windows desktop VPN тоже нет. Chrome на десктопе — поддерживаемая вторая поверхность, browser-only по задумке.' },
          { title: 'Общие правила Free и Premium', body: 'Обе поверхности живут по одним правилам: Free с недельным лимитом трафика для оценки, Premium — безлимитный трафик и больше серверов. Extension не придумывает отдельную ценовую историю и не заменяет Auto-connect на телефоне.' },
          { title: 'Один аккаунт, две поверхности', body: 'Войдите один раз и используйте аккаунт на iPhone и в Chrome. Серверы выбирайте на каждой поверхности отдельно. Трафик Free учитывается в недельном лимите по использованию сервиса.' },
          { title: 'Простое правило', body: 'Телефон в аэропорту → iOS. Долгая работа в десктопном Chrome → extension. Travel-неделя с обоими → один вход на обеих поверхностях: десктоп защищает вкладки Chrome, а не Slack и не всю ОС.' },
        ],
      },
      de: {
        title: 'Chrome-Erweiterung vs. iOS VPN: gleiches Konto, unterschiedliche Jobs',
        excerpt:
          'Wann Sie FollowNet systemweit auf dem iPhone nutzen sollten und wann die Chrome-Erweiterung für Desktop-Surfen ausreicht.',
        sections: [
          { title: 'iOS deckt das ganze Telefon ab', body: 'Die FollowNet-iOS-App nutzt Network Extension, sodass Safari, Apps und Hintergrundverkehr durch den Tunnel können. Das ist das richtige Werkzeug für öffentliches WLAN, Mobilfunk-Privatsphäre, Auto-connect, Widgets und Shortcuts.' },
          { title: 'Chrome deckt nur Browserverkehr ab', body: 'Die Chrome-Erweiterung leitet Chrome-Browsing über einen FollowNet-Proxy mit demselben Konto. Sie verschlüsselt oder routet nicht jede App auf dem Computer wie das systemweite iOS-VPN. Andere Browser und Desktop-Apps bleiben außerhalb.' },
          { title: 'Was noch nicht kommt', body: 'FollowNet bietet heute keine systemweiten macOS- oder Android-VPN-Apps und auch keinen vollständigen Windows-Desktop-VPN. Chrome auf dem Desktop ist die unterstützte zweite Oberfläche — bewusst browser-only.' },
          { title: 'Gemeinsame Free- und Premium-Regeln', body: 'Beide Produkte folgen derselben Ehrlichkeit: Free hat eine wöchentliche Traffic-Obergrenze; Premium liefert unbegrenzten Traffic und breiteren Serverzugang. Die Erweiterung ersetzt kein Telefon-Auto-connect.' },
          { title: 'Ein Konto, zwei Oberflächen', body: 'Einmal anmelden und dasselbe Konto auf iPhone und in Chrome nutzen. Server pro Oberfläche wählen. Free-Traffic zählt weiter zum Wochenkontingent über die Nutzung.' },
          { title: 'Eine einfache Faustregel', body: 'Telefon am Flughafen → iOS-App. Lange Desktop-Recherche in Chrome → Erweiterung. Reisewoche mit beidem → auf beiden angemeldet bleiben: Desktop schützt Chrome-Tabs, nicht Slack und nicht das OS.' },
        ],
      },
      es: {
        title: 'Extensión de Chrome vs VPN para iOS: misma cuenta, diferentes trabajos',
        excerpt:
          'Cuándo usar FollowNet en todo el sistema del iPhone y cuándo basta la extensión de Chrome para navegar en el escritorio.',
        sections: [
          { title: 'iOS cubre todo el teléfono', body: 'La app FollowNet para iOS usa Network Extension para que Safari, apps y tráfico en segundo plano pasen por el túnel. Es la herramienta correcta para Wi‑Fi público, privacidad móvil, Auto-connect, widgets y Shortcuts.' },
          { title: 'Chrome cubre solo el tráfico del navegador', body: 'La extensión de Chrome enruta la navegación de Chrome por un proxy FollowNet con la misma cuenta. No cifra ni enruta todas las apps del ordenador como la VPN de sistema en iOS. Otros navegadores y apps de escritorio quedan fuera.' },
          { title: 'Lo que aún no está', body: 'FollowNet no ofrece hoy apps VPN de sistema para macOS ni Android, ni un VPN de escritorio completo en Windows. Chrome en escritorio es la segunda superficie soportada — solo navegador, a propósito.' },
          { title: 'Las mismas reglas Free y Premium', body: 'Ambos productos siguen la misma honestidad: Free tiene límite semanal de tráfico; Premium da tráfico ilimitado y más servidores. La extensión no sustituye Auto-connect del teléfono.' },
          { title: 'Una cuenta, dos superficies', body: 'Inicia sesión una vez y reutiliza la cuenta en iPhone y Chrome. Elige servidores por superficie. El tráfico Free sigue contando en la cuota semanal según el uso.' },
          { title: 'Una regla simple', body: 'Teléfono en el aeropuerto → app iOS. Sesión larga en Chrome de escritorio → extensión. Semana de viaje con ambos → sesión en ambos: el escritorio protege pestañas de Chrome, no Slack ni el SO.' },
        ],
      },
      fr: {
        title: 'Extension Chrome vs VPN iOS : même compte, tâches différentes',
        excerpt:
          'Quand utiliser FollowNet sur tout le système iPhone et quand l’extension Chrome suffit pour la navigation bureau.',
        sections: [
          { title: 'iOS couvre tout le téléphone', body: 'L’app FollowNet iOS utilise Network Extension pour que Safari, les apps et le trafic d’arrière-plan passent par le tunnel. Bon outil pour Wi‑Fi public, confidentialité cellulaire, Auto-connect, widgets et Shortcuts.' },
          { title: 'Chrome ne couvre que le trafic navigateur', body: 'L’extension Chrome achemine la navigation Chrome via un proxy FollowNet avec le même compte. Elle ne chiffre ni n’achemine toutes les apps de l’ordinateur comme le VPN système iOS. Autres navigateurs et apps bureau restent hors chemin.' },
          { title: 'Ce qui n’est pas encore là', body: 'FollowNet n’offre pas aujourd’hui d’apps VPN système macOS ou Android, ni un VPN bureau Windows complet. Chrome sur bureau est la seconde surface supportée — browser-only par conception.' },
          { title: 'Mêmes règles Free et Premium', body: 'Les deux produits suivent la même honnêteté : Free a un plafond de trafic hebdomadaire ; Premium offre un trafic illimité et plus de serveurs. L’extension ne remplace pas l’Auto-connect du téléphone.' },
          { title: 'Un compte, deux surfaces', body: 'Connectez-vous une fois et réutilisez le compte sur iPhone et dans Chrome. Choisissez les serveurs par surface. Le trafic Free compte toujours dans l’allocation hebdomadaire.' },
          { title: 'Une règle simple', body: 'Téléphone à l’aéroport → app iOS. Longue session Chrome bureau → extension. Semaine de voyage avec les deux → restez connecté aux deux : le bureau protège les onglets Chrome, pas Slack ni l’OS.' },
        ],
      },
      pt: {
        title: 'Extensão do Chrome vs VPN para iOS: mesma conta, trabalhos diferentes',
        excerpt:
          'Quando usar o FollowNet em todo o sistema do iPhone e quando a extensão do Chrome basta para navegar no desktop.',
        sections: [
          { title: 'iOS cobre o telefone inteiro', body: 'O app FollowNet no iOS usa Network Extension para que Safari, apps e tráfego em segundo plano passem pelo túnel. É a ferramenta certa para Wi‑Fi público, privacidade celular, Auto-connect, widgets e Shortcuts.' },
          { title: 'Chrome cobre só o tráfego do navegador', body: 'A extensão do Chrome roteia a navegação do Chrome por um proxy FollowNet com a mesma conta. Não criptografa nem roteia todos os apps do computador como a VPN de sistema no iOS. Outros navegadores e apps de desktop ficam fora.' },
          { title: 'O que ainda não existe', body: 'FollowNet não oferece hoje apps VPN de sistema para macOS nem Android, nem uma VPN desktop completa no Windows. Chrome no desktop é a segunda superfície suportada — só navegador, de propósito.' },
          { title: 'As mesmas regras Free e Premium', body: 'Ambos os produtos seguem a mesma honestidade: Free tem limite semanal de tráfego; Premium dá tráfego ilimitado e mais servidores. A extensão não substitui Auto-connect do telefone.' },
          { title: 'Uma conta, duas superfícies', body: 'Entre uma vez e reutilize a conta no iPhone e no Chrome. Escolha servidores por superfície. O tráfego Free continua contando na cota semanal conforme o uso.' },
          { title: 'Uma regra prática simples', body: 'Telefone no aeroporto → app iOS. Sessão longa no Chrome desktop → extensão. Semana de viagem com os dois → fique logado nos dois: o desktop protege abas do Chrome, não o Slack nem o SO.' },
        ],
      },
      uk: {
        title: 'Розширення Chrome проти iOS VPN: той самий акаунт, різні задачі',
        excerpt:
          'Коли потрібен системний FollowNet на iPhone і коли вистачає розширення Chrome для десктопного браузингу.',
        sections: [
          { title: 'iOS покриває весь телефон', body: 'Додаток FollowNet на iOS через Network Extension пускає через тунель Safari, додатки й фоновий трафік. Це інструмент для публічного Wi‑Fi, LTE, Auto-connect, віджетів і Shortcuts.' },
          { title: 'Chrome захищає лише трафік браузера', body: 'Розширення спрямовує трафік Chrome через проксі FollowNet і використовує той самий акаунт. На відміну від системного VPN на iOS, воно не шифрує й не маршрутизує всі програми на комп’ютері. Інші браузери й десктопні додатки лишаються поза цим шляхом.' },
          { title: 'Чого поки немає', body: 'Повноцінних VPN-додатків для всієї системи на macOS і Android у FollowNet сьогодні немає, і повноцінного Windows desktop VPN теж немає. Chrome на десктопі — підтримувана друга поверхня, browser-only за задумом.' },
          { title: 'Спільні правила Free і Premium', body: 'Обидві поверхні живуть за одними правилами: Free з тижневим лімітом трафіку, Premium — безлімітний трафік і більше серверів. Extension не замінює Auto-connect на телефоні.' },
          { title: 'Один акаунт, дві поверхні', body: 'Увійдіть один раз і використовуйте акаунт на iPhone і в Chrome. Сервери обирайте на кожній поверхні окремо. Трафік Free враховується в тижневому ліміті за використанням сервісу.' },
          { title: 'Просте правило', body: 'Телефон в аеропорту → iOS. Довга робота в десктопному Chrome → extension. Travel-тиждень з обома → один вхід на обох поверхнях: десктоп захищає вкладки Chrome, а не Slack і не всю ОС.' },
        ],
      },
    },
  },
  {
    slug: 'what-no-logs-means',
    date: '2025-09-24',
    minutes: 8,
    topic: 'product',
    translations: {
      en: {
        title: 'Privacy and data in FollowNet: what to check beyond slogans',
        excerpt:
          'A practical look at account data, analytics, DNS providers, and the limits of broad privacy claims.',
        sections: [
          { title: 'Why absolute “no logs” slogans fail', body: '“No logs” often means whatever marketing wants it to mean. Operating a VPN still involves accounts, billing, abuse handling, and diagnostics. Treat absolute slogans with suspicion. FollowNet will not sell absolute no-logs theater or mixnet mystique.' },
          { title: 'Traffic data and account metadata', body: 'A VPN still needs some account data to operate: email login, subscription status, and records needed for support and billing through Apple or the web when available. For exact traffic-related data and retention, rely on the current Privacy Policy rather than an absolute slogan.' },
          { title: 'Analytics and product signals', body: 'FollowNet uses analytics for product operation and diagnostics as described in the Privacy Policy. Check categories, purposes, and retention there. Analytics is not the same as claiming that no data exists at all.' },
          { title: 'DNS and third parties', body: 'If you pick a third-party DNS preset (Cloudflare, Google, AdGuard, Quad9, and similar), that resolver sees domains you look up. VPN encryption to FollowNet and DNS choice are related but not identical. Configure DNS intentionally.' },
          { title: 'What FollowNet is — and is not', body: 'FollowNet is a conventional VPN with modern protocols on iOS and a Chrome browser proxy — not a mixnet, not an anonymity network, and not a promise that nothing can ever be attributed to an account. Free has weekly traffic; Premium is unlimited. Chrome remains browser-only; macOS/Android system apps are not available yet.' },
          { title: 'How to assess privacy as a user', body: 'Read https://follow-net.com/privacy, prefer App Store distribution for iOS, and treat any VPN — including FollowNet — as one layer. Device passcodes, phishing caution, and official apps still matter more than a padlock icon.' },
        ],
      },
      ru: {
        title: 'Приватность и данные в FollowNet: что проверять кроме слоганов',
        excerpt:
          'Практичный разбор данных аккаунта, аналитики, DNS-провайдеров и границ широких заявлений о приватности.',
        sections: [
          { title: 'Почему абсолютный «no logs» не работает', body: '«No logs» часто значит то, что удобно маркетингу. Для работы VPN нужны аккаунты, биллинг, борьба со злоупотреблениями и диагностика. Относитесь к абсолютным слоганам с подозрением. FollowNet не продаёт абсолютный no-logs-театр и mixnet-мистику.' },
          { title: 'Данные трафика и метаданные аккаунта', body: 'Нужны данные аккаунта: email для входа, статус подписки и записи для поддержки и оплаты через Apple или сайт, когда доступна. Точный состав данных о трафике и сроки хранения — в действующей Политике конфиденциальности, не в абсолютном слогане.' },
          { title: 'Аналитика и сигналы продукта', body: 'FollowNet использует аналитику для работы и диагностики, как описано в Политике конфиденциальности. Там категории, цели и сроки хранения. Аналитика — не обещание, будто никаких данных не существует.' },
          { title: 'DNS и третьи стороны', body: 'Сторонний DNS (Cloudflare, Google, AdGuard, Quad9 и подобные) видит домены ваших запросов. Шифрование до FollowNet и выбор DNS связаны, но это разные механизмы. Настраивайте DNS осознанно.' },
          { title: 'Чем FollowNet является — и чем нет', body: 'FollowNet — обычный VPN с современными протоколами на iOS и прокси для Chrome, а не mixnet, не сеть анонимности и не обещание, что к аккаунту никогда ничего не привяжется. Free — недельный трафик; Premium — безлимит. Chrome остаётся browser-only; системных приложений macOS/Android пока нет.' },
          { title: 'Как пользователю оценить приватность', body: 'Читайте https://follow-net.com/privacy, берите iOS-приложение из App Store и считайте любой VPN, включая FollowNet, одним слоем. Код устройства, осторожность с фишингом и официальные приложения важнее иконки замочка.' },
        ],
      },
      de: {
        title: 'Datenschutz und Daten in FollowNet: Was Sie über Slogans hinaus prüfen sollten',
        excerpt:
          'Ein praktischer Blick auf Kontodaten, Analysen, DNS-Anbieter und die Grenzen breiter Datenschutzversprechen.',
        sections: [
          { title: 'Warum absolute „No logs“-Slogans scheitern', body: '„No logs“ bedeutet oft, was Marketing gerade braucht. Ein VPN braucht Konten, Abrechnung, Missbrauchsabwehr und Diagnostik. Misstrauen Sie absoluten Slogans. FollowNet verkauft kein absolutes No-Logs-Theater und keine Mixnet-Mystik.' },
          { title: 'Verkehrsdaten und Kontometadaten', body: 'Ein VPN braucht Kontodaten: E-Mail-Login, Abo-Status und Unterlagen für Support und Abrechnung über Apple oder das Web, falls verfügbar. Für genaue traffic-bezogene Daten und Aufbewahrung gilt die aktuelle Datenschutzerklärung.' },
          { title: 'Analytik und Produktsignale', body: 'FollowNet nutzt Analysen für Betrieb und Diagnose wie in der Datenschutzerklärung beschrieben. Prüfen Sie dort Kategorien, Zwecke und Aufbewahrung. Analytik ist nicht die Behauptung, es existierten gar keine Daten.' },
          { title: 'DNS und Dritte', body: 'Bei DNS-Voreinstellungen von Drittanbietern (Cloudflare, Google, AdGuard, Quad9 und ähnliche) sieht der Resolver die Domains Ihrer Lookups. VPN-Verschlüsselung zu FollowNet und DNS-Wahl hängen zusammen, sind aber nicht identisch.' },
          { title: 'Was FollowNet ist — und was nicht', body: 'FollowNet ist ein klassisches VPN mit modernen Protokollen auf iOS und einem Chrome-Browser-Proxy — kein Mixnet, kein Anonymitätsnetz und kein Versprechen, dass einem Konto nie etwas zuzuordnen sei. Free hat wöchentlichen Traffic; Premium ist unlimited. Chrome bleibt browser-only; macOS-/Android-System-Apps gibt es noch nicht.' },
          { title: 'So beurteilen Sie Privatsphäre als Nutzer', body: 'Lesen Sie https://follow-net.com/privacy, bevorzugen Sie die App-Store-Distribution für iOS und behandeln Sie jedes VPN — inklusive FollowNet — als eine Schicht. Gerätecode, Phishing-Vorsicht und offizielle Apps zählen mehr als ein Schloss-Icon.' },
        ],
      },
      es: {
        title: 'Privacidad y datos en FollowNet: qué comprobar más allá de los eslóganes',
        excerpt:
          'Una mirada práctica a los datos de cuentas, analítica, proveedores DNS y los límites de las afirmaciones amplias de privacidad.',
        sections: [
          { title: 'Por qué fallan los eslóganes absolutos de “no logs”', body: '“No logs” suele significar lo que el marketing quiera. Operar una VPN implica cuentas, facturación, abuso y diagnóstico. Desconfía de eslóganes absolutos. FollowNet no vende teatro de no-logs absoluto ni mística de mixnet.' },
          { title: 'Datos de tráfico y metadatos de la cuenta', body: 'Una VPN necesita datos de cuenta: login por email, estado de suscripción y registros para soporte y facturación vía Apple o la web cuando esté disponible. Para el detalle exacto de datos de tráfico y retención, confía en la Política de Privacidad vigente.' },
          { title: 'Analítica y señales de producto', body: 'FollowNet usa analítica para operación y diagnóstico según la Política de Privacidad. Revisa categorías, finalidades y retención. La analítica no es afirmar que no existe ningún dato.' },
          { title: 'DNS y terceros', body: 'Si eliges un DNS de terceros (Cloudflare, Google, AdGuard, Quad9 y similares), ese resolver ve los dominios que consultas. El cifrado VPN hacia FollowNet y la elección de DNS están relacionados, pero no son idénticos.' },
          { title: 'Qué es FollowNet — y qué no es', body: 'FollowNet es una VPN convencional con protocolos modernos en iOS y un proxy de Chrome — no un mixnet, no una red de anonimato y no una promesa de que nunca nada se atribuya a una cuenta. Free tiene tráfico semanal; Premium es ilimitado. Chrome sigue siendo solo navegador; aún no hay apps de sistema macOS/Android.' },
          { title: 'Cómo valorar la privacidad como usuario', body: 'Lee https://follow-net.com/privacy, prefiere la distribución por App Store en iOS y trata cualquier VPN — incluida FollowNet — como una capa. Código del dispositivo, cuidado con el phishing y apps oficiales importan más que un icono de candado.' },
        ],
      },
      fr: {
        title: 'Confidentialité et données dans FollowNet : quoi vérifier au-delà des slogans',
        excerpt:
          'Un regard pratique sur les données de compte, l’analytique, les fournisseurs DNS et les limites des grandes promesses de confidentialité.',
        sections: [
          { title: 'Pourquoi les slogans « no logs » absolus échouent', body: '« No logs » signifie souvent ce que le marketing veut. Faire tourner un VPN implique comptes, facturation, abus et diagnostic. Méfiez-vous des slogans absolus. FollowNet ne vend pas le théâtre du no-logs absolu ni la mystique mixnet.' },
          { title: 'Données de trafic et métadonnées de compte', body: 'Un VPN a besoin de données de compte : login e-mail, statut d’abonnement et enregistrements pour le support et la facturation via Apple ou le web quand c’est disponible. Pour le détail exact, fiez-vous à la politique de confidentialité en vigueur.' },
          { title: 'Analytique et signaux produit', body: 'FollowNet utilise de l’analytique pour l’exploitation et le diagnostic, comme décrit dans la politique de confidentialité. Vérifiez catégories, finalités et conservation. L’analytique n’équivaut pas à affirmer qu’aucune donnée n’existe.' },
          { title: 'DNS et tiers', body: 'Si vous choisissez un DNS tiers (Cloudflare, Google, AdGuard, Quad9 et similaires), ce résolveur voit les domaines que vous interrogez. Le chiffrement VPN vers FollowNet et le choix DNS sont liés mais pas identiques.' },
          { title: 'Ce qu’est FollowNet — et ce qu’il n’est pas', body: 'FollowNet est un VPN classique avec des protocoles modernes sur iOS et un proxy Chrome — pas un mixnet, pas un réseau d’anonymat, et pas une promesse que rien ne pourra jamais être rattaché à un compte. Free a un trafic hebdomadaire ; Premium est illimité. Chrome reste browser-only ; pas encore d’apps système macOS/Android.' },
          { title: 'Comment évaluer la confidentialité en tant qu’utilisateur', body: 'Lisez https://follow-net.com/privacy, préférez la distribution App Store pour iOS, et traitez tout VPN — FollowNet inclus — comme une couche. Code appareil, prudence phishing et apps officielles comptent plus qu’une icône cadenas.' },
        ],
      },
      pt: {
        title: 'Privacidade e dados no FollowNet: o que conferir além dos slogans',
        excerpt:
          'Uma visão prática dos dados da conta, analytics, provedores de DNS e os limites de promessas amplas de privacidade.',
        sections: [
          { title: 'Por que slogans absolutos de “no logs” falham', body: '“No logs” costuma significar o que o marketing quiser. Operar uma VPN envolve contas, cobrança, abuso e diagnóstico. Desconfie de slogans absolutos. FollowNet não vende teatro de no-logs absoluto nem mística de mixnet.' },
          { title: 'Dados de tráfego e metadados da conta', body: 'Uma VPN precisa de dados de conta: login por e-mail, status da assinatura e registros para suporte e cobrança via Apple ou web quando disponível. Para o detalhe exato, confie na Política de Privacidade vigente.' },
          { title: 'Analytics e sinais de produto', body: 'FollowNet usa analytics para operação e diagnóstico conforme a Política de Privacidade. Confira categorias, finalidades e retenção. Analytics não é afirmar que não existe dado algum.' },
          { title: 'DNS e terceiros', body: 'Se você escolher um DNS de terceiros (Cloudflare, Google, AdGuard, Quad9 e similares), esse resolvedor vê os domínios das suas consultas. Criptografia VPN até o FollowNet e escolha de DNS estão relacionadas, mas não são idênticas.' },
          { title: 'O que FollowNet é — e o que não é', body: 'FollowNet é uma VPN convencional com protocolos modernos no iOS e um proxy do Chrome — não um mixnet, não uma rede de anonimato e não uma promessa de que nada jamais se atribui a uma conta. Free tem tráfego semanal; Premium é ilimitado. Chrome continua só navegador; ainda não há apps de sistema macOS/Android.' },
          { title: 'Como avaliar privacidade como usuário', body: 'Leia https://follow-net.com/privacy, prefira a distribuição pela App Store no iOS e trate qualquer VPN — inclusive FollowNet — como uma camada. Código do dispositivo, cuidado com phishing e apps oficiais ainda importam mais do que um ícone de cadeado.' },
        ],
      },
      uk: {
        title: 'Конфіденційність і дані у FollowNet: що перевіряти, крім гасел',
        excerpt:
          'Практичний погляд на дані акаунта, аналітику, постачальників DNS і межі широких заяв про приватність.',
        sections: [
          { title: 'Чому абсолютний «no logs» не працює', body: '«No logs» часто означає те, що зручно маркетингу. Для роботи VPN потрібні акаунти, білінг, боротьба зі зловживаннями й діагностика. Ставтеся до абсолютних гасел із підозрою. FollowNet не продає абсолютний no-logs-театр і mixnet-містику.' },
          { title: 'Дані трафіку й метадані акаунта', body: 'Потрібні дані акаунта: email для входу, статус підписки та записи для підтримки й оплати через Apple або сайт, коли доступна. Точний склад даних про трафік і строки зберігання — у чинній Політиці конфіденційності.' },
          { title: 'Аналітика й сигнали продукту', body: 'FollowNet використовує аналітику для роботи й діагностики, як описано в Політиці конфіденційності. Там категорії, цілі й строки зберігання. Аналітика — не обіцянка, ніби жодних даних не існує.' },
          { title: 'DNS і треті сторони', body: 'Сторонній DNS (Cloudflare, Google, AdGuard, Quad9 і подібні) бачить домени ваших запитів. Шифрування до FollowNet і вибір DNS пов’язані, але це різні механізми. Налаштовуйте DNS свідомо.' },
          { title: 'Чим FollowNet є — і чим ні', body: 'FollowNet — звичайний VPN із сучасними протоколами на iOS і проксі для Chrome, а не mixnet, не мережа анонімності й не обіцянка, що до акаунта ніколи нічого не прив’яжеться. Free — тижневий трафік; Premium — безліміт. Chrome лишається browser-only; системних додатків macOS/Android поки немає.' },
          { title: 'Як користувачу оцінити приватність', body: 'Читайте https://follow-net.com/privacy, беріть iOS-додаток з App Store і вважайте будь-який VPN, включно з FollowNet, одним шаром. Код пристрою, обережність із фішингом і офіційні додатки важливіші за іконку замка.' },
        ],
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
        title:
          'Shipping a VPN through App Store review: constraints that shaped FollowNet',
        excerpt:
          'Network Extension, entitlements, and review edges — why FollowNet stays an App Store native iOS client.',
        sections: [
          {
            title: 'Why App Store distribution matters',
            body: 'iOS VPN that lives in Network Extension is reviewable, updatable, and sandboxed. Sideloaded configuration profiles and shady “install this certificate” flows are a different trust model. FollowNet ships through the App Store on purpose.',
          },
          {
            title: 'What review forces you to design for',
            body: 'Clear purpose strings, honest Free vs Premium messaging, and privacy disclosures are not paperwork theater — they shape the product. Features that only work as dark patterns tend to fail review or fail users later.',
          },
          {
            title: 'Post-release reality',
            body: 'Updates still go through review. Protocol work, widgets, and Auto-connect tweaks ship in batches. That is slower than a website deploy and better for users who expect a stable system VPN on iPhone and iPad.',
          },
          {
            title: 'Chrome is a separate surface',
            body: 'The Chrome extension is not a workaround for App Store rules on iOS. Phone VPN remains the core; desktop browsing is the second surface with the same account honesty.',
          },
        ],
      },
      ru: {
        title:
          'VPN через App Store Review: ограничения, которые сформировали FollowNet',
        excerpt:
          'Network Extension, entitlements и нюансы ревью — почему FollowNet остаётся нативным iOS-клиентом из App Store.',
        sections: [
          {
            title: 'Зачем дистрибуция через App Store',
            body: 'iOS VPN на Network Extension проходит ревью, обновляется и живёт в sandbox. Sideload-профили и «установите сертификат» — другая модель доверия. FollowNet осознанно идёт через App Store.',
          },
          {
            title: 'Что review заставляет проектировать',
            body: 'Честные purpose strings, понятный Free vs Premium и privacy-дискламеры — не бумажный театр, они влияют на продукт. Фичи на тёмных паттернах чаще валятся на ревью или на пользователях позже.',
          },
          {
            title: 'После релиза',
            body: 'Обновления снова идут через review. Протоколы, виджеты и Auto-connect выходят пакетами. Это медленнее деплоя сайта и лучше для тех, кто ждёт стабильный системный VPN на iPhone и iPad.',
          },
          {
            title: 'Chrome — отдельная поверхность',
            body: 'Chrome extension — не обход правил App Store на iOS. Телефонный VPN остаётся ядром; десктопный браузинг — вторая поверхность с той же честностью аккаунта.',
          },
        ],
      },
      de: {
        title:
          'Überprüfung des Versands eines VPN über den App Store: Einschränkungen, die FollowNet geprägt haben',
        excerpt:
          'Netzwerkerweiterung, Berechtigungen und Überprüfungsgrenzen – warum FollowNet ein nativer iOS-Client im App Store bleibt.',
        sections: [
          {
            title: 'Warum der Vertrieb im App Store wichtig ist',
            body: 'iOS VPN, das in Network Extension läuft, ist überprüfbar, aktualisierbar und in einer Sandbox verfügbar. Quergeladene Konfigurationsprofile und zwielichtige „Installieren Sie dieses Zertifikat“-Abläufe sind ein anderes Vertrauensmodell. FollowNet versendet absichtlich über den App Store.',
          },
          {
            title: 'Welche Rezension zwingt Sie zum Entwerfen?',
            body: 'Klare Zweckbestimmungen, ehrliche Free vs. Premium-Nachrichten und Offenlegungen zum Datenschutz sind kein Papierkram – sie prägen das Produkt. Funktionen, die nur als dunkle Muster funktionieren, scheitern in der Regel an der Überprüfung oder scheitern später an Benutzern.',
          },
          {
            title: 'Realität nach der Veröffentlichung',
            body: 'Aktualisierungen werden noch überprüft. Protokollarbeit, Widgets und Auto-Connect-Optimierungen werden in Stapeln geliefert. Das ist langsamer als die Bereitstellung einer Website und besser für Benutzer, die ein stabiles System-VPN auf iPhone und iPad erwarten.',
          },
          {
            title: 'Chrom ist eine separate Oberfläche',
            body: 'Die Chrome-Erweiterung ist kein Workaround für App Store-Regeln unter iOS. Telefon-VPN bleibt der Kern; Desktop-Browsing ist die zweite Oberfläche mit der gleichen Account-Ehrlichkeit.',
          },
        ],
      },
      es: {
        title:
          'Envío de una VPN a través de la revisión de la App Store: limitaciones que dieron forma a FollowNet',
        excerpt:
          'Extensión de red, derechos y márgenes de revisión: por qué FollowNet sigue siendo un cliente iOS nativo de la App Store.',
        sections: [
          {
            title: 'Por qué es importante la distribución de la App Store',
            body: 'La VPN de iOS que reside en la extensión de red se puede revisar, actualizar y está protegida. Los perfiles de configuración descargados y los flujos turbios de "instalar este certificado" son un modelo de confianza diferente. FollowNet se envía a través de la App Store a propósito.',
          },
          {
            title: '¿Para qué te obliga la revisión a diseñar?',
            body: 'Los objetivos claros, los mensajes honestos gratuitos frente a los premium y las declaraciones de privacidad no son un teatro de papeleo: dan forma al producto. Las funciones que solo funcionan como patrones oscuros tienden a no pasar la revisión o fallar a los usuarios más adelante.',
          },
          {
            title: 'La realidad posterior al lanzamiento',
            body: 'Las actualizaciones aún pasan por revisión. El trabajo de protocolo, los widgets y los ajustes de conexión automática se envían en lotes. Esto es más lento que la implementación de un sitio web y mejor para los usuarios que esperan un sistema VPN estable en iPhone y iPad.',
          },
          {
            title: 'Chrome es una superficie separada.',
            body: 'La extensión de Chrome no es una solución alternativa para las reglas de la App Store en iOS. La VPN telefónica sigue siendo el núcleo; La navegación de escritorio es la segunda superficie con la misma honestidad de cuenta.',
          },
        ],
      },
      fr: {
        title:
          "Examen de l'expédition d'un VPN via l'App Store : les contraintes qui ont façonné FollowNet",
        excerpt:
          "Extension réseau, droits et limites de révision : pourquoi FollowNet reste un client iOS natif de l'App Store.",
        sections: [
          {
            title: "Pourquoi la distribution sur l'App Store est importante",
            body: 'Le VPN iOS qui réside dans Network Extension est révisable, mis à jour et mis en bac à sable. Les profils de configuration téléchargés et les flux douteux « installer ce certificat » constituent un modèle de confiance différent. FollowNet est volontairement expédié via l’App Store.',
          },
          {
            title: 'Pour quelle révision vous oblige-t-il à concevoir',
            body: "Les chaînes d'objectif claires, les messages honnêtes Free vs Premium et les divulgations de confidentialité ne sont pas un théâtre de paperasse : ils façonnent le produit. Les fonctionnalités qui fonctionnent uniquement en tant que modèles sombres ont tendance à échouer lors de l'examen ou à échouer par les utilisateurs plus tard.",
          },
          {
            title: 'Réalité post-sortie',
            body: "Les mises à jour sont toujours en cours d'examen. Le travail de protocole, les widgets et les ajustements de connexion automatique sont expédiés par lots. C'est plus lent que le déploiement d'un site Web et meilleur pour les utilisateurs qui attendent un système VPN stable sur iPhone et iPad.",
          },
          {
            title: 'Chrome est une surface distincte',
            body: "L'extension Chrome ne constitue pas une solution de contournement pour les règles de l'App Store sur iOS. Le VPN téléphonique reste le noyau ; la navigation sur ordinateur est la deuxième surface avec la même honnêteté de compte.",
          },
        ],
      },
      pt: {
        title:
          'Revisão do envio de uma VPN pela App Store: restrições que moldaram o FollowNet',
        excerpt:
          'Extensão de rede, direitos e bordas de revisão – por que o FollowNet continua sendo um cliente iOS nativo da App Store.',
        sections: [
          {
            title: 'Por que a distribuição da App Store é importante',
            body: 'A VPN para iOS que reside na extensão de rede é revisável, atualizável e em área restrita. Perfis de configuração carregados lateralmente e fluxos obscuros de “instalar este certificado” são um modelo de confiança diferente. FollowNet é enviado pela App Store propositalmente.',
          },
          {
            title: 'Qual revisão força você a projetar',
            body: 'Sequências de propósito claras, mensagens honestas Gratuitas versus Premium e divulgações de privacidade não são um teatro de papelada – elas moldam o produto. Recursos que funcionam apenas como padrões escuros tendem a ser reprovados na revisão ou reprovados pelos usuários posteriormente.',
          },
          {
            title: 'Realidade pós-lançamento',
            body: 'As atualizações ainda passam por revisão. Trabalho de protocolo, widgets e ajustes de conexão automática são enviados em lotes. Isso é mais lento do que a implantação de um site e melhor para usuários que esperam um sistema VPN estável no iPhone e iPad.',
          },
          {
            title: 'O Chrome é uma superfície separada',
            body: 'A extensão do Chrome não é uma solução alternativa para as regras da App Store no iOS. A VPN por telefone continua sendo o núcleo; a navegação na área de trabalho é a segunda superfície com a mesma honestidade de conta.',
          },
        ],
      },
      uk: {
        title:
          'Огляд доставки VPN через App Store: обмеження, які сформували FollowNet',
        excerpt:
          'Розширення мережі, повноваження та переваги перегляду — чому FollowNet залишається рідним клієнтом iOS для App Store.',
        sections: [
          {
            title: 'Чому поширення App Store має значення',
            body: 'iOS VPN, яка живе в мережевому розширенні, доступна для перегляду, оновлення та ізольованого програмного середовища. Завантажені збоку профілі конфігурації та тіньові потоки «встановити цей сертифікат» — це інша модель довіри. FollowNet спеціально доставляється через App Store.',
          },
          {
            title: 'Як вимоги App Store впливають на продукт',
            body: 'Зрозумілі пояснення дозволів, чесний опис Free і Premium та відомості про приватність безпосередньо впливають на продукт. Оманливі механіки можуть не пройти перевірку App Store або згодом нашкодити користувачам.',
          },
          {
            title: 'Реальність після звільнення',
            body: 'Оновлення все ще проходять перевірку. Робота з протоколом, віджети та налаштування автоматичного підключення постачаються пакетами. Це повільніше, ніж розгортання веб-сайту, і краще для користувачів, які очікують стабільної системи VPN на iPhone та iPad.',
          },
          {
            title: 'Chrome — окремий продукт',
            body: 'Розширення Chrome не є обхідним шляхом для правил App Store для iOS. Телефон VPN залишається ядром; перегляд на робочому столі – це друга поверхня з такою ж чесністю облікового запису.',
          },
        ],
      },
    },
  },
  {
    slug: 'multi-device-premium',
    date: '2026-03-22',
    minutes: 4,
    topic: 'product',
    translations: {
      en: {
        title: 'Premium across iPhone, iPad, and Chrome',
        excerpt:
          'How FollowNet Premium follows your account — and what still differs per device.',
        sections: [
          {
            title: 'One account, multiple surfaces',
            body: 'Sign in with the same email on iPhone, iPad, and the Chrome extension. Premium is about unlocking capacity and server access for that account — not inventing a separate SKU per screen size.',
          },
          {
            title: 'What stays per device',
            body: 'Protocol locks, Auto-connect mode, DNS preset, and selected server can differ per device. That is useful: hotel Wi‑Fi on the phone may need Smart Connect while home iPad stays on WireGuard.',
          },
          {
            title: 'Billing clarity',
            body: 'iOS Premium is purchased through the App Store. Manage subscription in Apple’s subscription settings. Free remains available to evaluate before you pay — weekly limit included on purpose.',
          },
        ],
      },
      ru: {
        title: 'Premium на iPhone, iPad и в Chrome',
        excerpt:
          'Как FollowNet Premium следует за аккаунтом — и что по-прежнему настраивается на каждом устройстве отдельно.',
        sections: [
          {
            title: 'Один аккаунт, несколько поверхностей',
            body: 'Входите с одним email на iPhone, iPad и в Chrome extension. Premium открывает ёмкость и серверы для аккаунта — без отдельного SKU на каждый размер экрана.',
          },
          {
            title: 'Что остаётся per device',
            body: 'Фиксация протокола, режим Auto-connect, DNS и выбранный сервер могут отличаться. Это удобно: в отеле на телефоне Smart Connect, дома на iPad — WireGuard.',
          },
          {
            title: 'Биллинг',
            body: 'Premium на iOS покупается через App Store. Подпиской управляйте в настройках Apple. Free остаётся для оценки до оплаты — недельный лимит осознанный.',
          },
        ],
      },
      de: {
        title: 'Premium für iPhone, iPad und Chrome',
        excerpt:
          'Wie FollowNet Premium Ihrem Konto folgt – und was je nach Gerät noch unterschiedlich ist.',
        sections: [
          {
            title: 'Ein Konto, mehrere Oberflächen',
            body: 'Melden Sie sich mit derselben E-Mail-Adresse auf dem iPhone, iPad und der Chrome-Erweiterung an. Bei Premium geht es darum, Kapazität und Serverzugriff für dieses Konto freizuschalten – und nicht darum, eine separate SKU pro Bildschirmgröße zu erfinden.',
          },
          {
            title: 'Was bleibt pro Gerät?',
            body: 'Protokollsperren, automatischer Verbindungsmodus, DNS-Voreinstellung und ausgewählter Server können je nach Gerät unterschiedlich sein. Das ist nützlich: Das Hotel-WLAN auf dem Telefon benötigt möglicherweise Smart Connect, während das iPad zu Hause auf WireGuard bleibt.',
          },
          {
            title: 'Klarheit bei der Abrechnung',
            body: 'iOS Premium wird über den App Store erworben. Verwalten Sie das Abonnement in den Abonnementeinstellungen von Apple. Das kostenlose Angebot bleibt vor der Zahlung zur Evaluierung verfügbar – das wöchentliche Limit ist absichtlich enthalten.',
          },
        ],
      },
      es: {
        title: 'Premium en iPhone, iPad y Chrome',
        excerpt:
          'Cómo sigue FollowNet Premium su cuenta y qué difiere según el dispositivo.',
        sections: [
          {
            title: 'Una cuenta, múltiples superficies',
            body: 'Inicie sesión con el mismo correo electrónico en iPhone, iPad y la extensión de Chrome. Premium se trata de desbloquear la capacidad y el acceso al servidor para esa cuenta, no de inventar un SKU separado por tamaño de pantalla.',
          },
          {
            title: 'Lo que queda por dispositivo',
            body: 'Los bloqueos de protocolo, el modo de conexión automática, el valor predeterminado de DNS y el servidor seleccionado pueden variar según el dispositivo. Esto es útil: el Wi-Fi del hotel en el teléfono puede necesitar Smart Connect mientras el iPad de casa permanece en WireGuard.',
          },
          {
            title: 'Claridad de facturación',
            body: 'iOS Premium se compra a través de la App Store. Administre la suscripción en la configuración de suscripción de Apple. Lo gratuito permanece disponible para evaluar antes de pagar; el límite semanal se incluye a propósito.',
          },
        ],
      },
      fr: {
        title: 'Premium sur iPhone, iPad et Chrome',
        excerpt:
          "Comment FollowNet Premium suit votre compte – et ce qui diffère encore selon l'appareil.",
        sections: [
          {
            title: 'Un compte, plusieurs surfaces',
            body: "Connectez-vous avec le même e-mail sur iPhone, iPad et l'extension Chrome. Premium consiste à débloquer la capacité et l'accès au serveur pour ce compte, sans inventer un SKU distinct par taille d'écran.",
          },
          {
            title: 'Ce qui reste par appareil',
            body: "Les verrous de protocole, le mode de connexion automatique, le préréglage DNS et le serveur sélectionné peuvent différer selon l'appareil. C'est utile : le Wi-Fi de l'hôtel sur le téléphone peut avoir besoin de Smart Connect tandis que l'iPad domestique reste sur WireGuard.",
          },
          {
            title: 'Clarté de facturation',
            body: "iOS Premium est acheté via l'App Store. Gérez l'abonnement dans les paramètres d'abonnement d'Apple. La gratuité reste disponible pour être évaluée avant de payer – limite hebdomadaire volontairement incluse.",
          },
        ],
      },
      pt: {
        title: 'Premium no iPhone, iPad e Chrome',
        excerpt:
          'Como o FollowNet Premium acompanha sua conta — e o que ainda difere por dispositivo.',
        sections: [
          {
            title: 'Uma conta, várias superfícies',
            body: 'Faça login com o mesmo e-mail no iPhone, iPad e na extensão do Chrome. Premium trata de desbloquear capacidade e acesso ao servidor para essa conta, e não inventar um SKU separado por tamanho de tela.',
          },
          {
            title: 'O que fica por dispositivo',
            body: 'Bloqueios de protocolo, modo de conexão automática, predefinição de DNS e servidor selecionado podem variar de acordo com o dispositivo. Isso é útil: o Wi-Fi do hotel no telefone pode precisar do Smart Connect enquanto o iPad doméstico permanece no WireGuard.',
          },
          {
            title: 'Clareza de faturamento',
            body: 'iOS Premium é adquirido na App Store. Gerencie a assinatura nas configurações de assinatura da Apple. O Gratuito permanece disponível para avaliação antes de pagar – limite semanal incluído propositalmente.',
          },
        ],
      },
      uk: {
        title: 'Преміум для iPhone, iPad і Chrome',
        excerpt:
          'Як FollowNet Premium стежить за вашим обліковим записом — і що все ще відрізняється для кожного пристрою.',
        sections: [
          {
            title: 'Один обліковий запис, кілька поверхонь',
            body: 'Увійдіть за допомогою тієї самої електронної пошти на iPhone, iPad і розширення Chrome. Преміум передбачає розблокування ємності та доступу до сервера для цього облікового запису, а не винайдення окремого SKU для розміру екрана.',
          },
          {
            title: 'Що залишається на пристрої',
            body: 'Блокування протоколу, режим автоматичного підключення, попередні налаштування DNS і вибраний сервер можуть відрізнятися залежно від пристрою. Це корисно: готельний Wi‑Fi на телефоні може потребувати Smart Connect, тоді як домашній iPad залишається на WireGuard.',
          },
          {
            title: 'Чіткість виставлення рахунків',
            body: 'iOS Premium можна придбати через App Store. Керуйте підпискою в налаштуваннях підписки Apple. Безкоштовні залишки доступні для оцінки перед оплатою — тижневий ліміт включено спеціально.',
          },
        ],
      },
    },
  },
  {
    slug: 'when-vpn-wont-help',
    date: '2025-08-28',
    minutes: 8,
    topic: 'guides',
    translations: {
      en: {
        title: 'When a VPN will not help — honest limits for FollowNet users',
        excerpt:
          'Encryption is powerful and finite. Cases where FollowNet cannot fix the underlying problem.',
        sections: [
          { title: 'Broken local Wi‑Fi', body: 'If the café router cannot reach the internet, no tunnel will invent upstream. Finish captive portals, try LTE, and use Speed Test baselines. VPN needs a working path to the FollowNet server first.' },
          { title: 'Account and phishing failures', body: 'VPN does not stop you from typing a password into a fake site or approving a malicious prompt. Keep iOS updated, use official apps, and treat unexpected login emails carefully — including FollowNet codes.' },
          { title: 'Content and geo expectations', body: 'FollowNet offers servers in multiple regions, but streaming catalogs, banks, and sites may still block VPN exits. That is their policy, not a FollowNet outage. Smart Connect improves connectivity on hostile networks; it is not a content-unlock guarantee.' },
          { title: 'Device compromise', body: 'A compromised phone can see traffic before it enters the tunnel. Face ID, passcode, and App Store hygiene matter. FollowNet encrypts the path — it does not replace endpoint security.' },
          { title: 'Browser extension vs phone VPN', body: 'The Chrome extension protects Chrome tabs only. It will not secure other desktop apps, and FollowNet has no full macOS or Android system VPN yet. If you expected whole-device desktop protection, that gap is product scope — not a broken toggle.' },
          { title: 'What FollowNet still does well', body: 'On a working uplink, FollowNet still encrypts the path to its exits, helps on public Wi‑Fi and travel networks, and gives Free weekly traffic for evaluation or Premium unlimited when you live on VPN. Honest limits are part of the product, not a disclaimer after the fact.' },
        ],
      },
      ru: {
        title: 'Когда VPN не поможет — честные пределы FollowNet',
        excerpt:
          'Шифрование сильно и конечно. Случаи, где FollowNet не чинит исходную проблему.',
        sections: [
          { title: 'Мёртвый локальный Wi‑Fi', body: 'Если роутер кафе не видит интернет, туннель не создаст uplink. Пройдите captive portal, попробуйте LTE, снимите baseline Speed Test. VPN сначала нужен рабочий путь до сервера FollowNet.' },
          { title: 'Фишинг и аккаунт', body: 'VPN не мешает ввести пароль на фейковом сайте или подтвердить вредоносный prompt. Обновляйте iOS, берите официальные приложения и осторожно с неожиданными письмами — включая коды FollowNet.' },
          { title: 'Контент и гео', body: 'У FollowNet есть серверы в разных регионах, но каталоги стриминга, банки и сайты могут блокировать VPN-exit. Это их политика, не «падение» FollowNet. Smart Connect улучшает связность в жёстких сетях — не гарантирует разблокировку контента.' },
          { title: 'Компрометация устройства', body: 'Взломанный телефон видит трафик до входа в туннель. Face ID, код и гигиена App Store важны. FollowNet шифрует путь — не заменяет безопасность endpoint.' },
          { title: 'Расширение браузера vs VPN на телефоне', body: 'Расширение Chrome защищает только вкладки Chrome. Оно не защитит другие десктопные программы, а полноценного системного VPN для macOS и Android у FollowNet пока нет. Если ждали защиту всего компьютера — это граница продукта, а не «сломанный тумблер».' },
          { title: 'Где FollowNet всё же силён', body: 'При живом uplink FollowNet шифрует путь до своих exit, помогает в публичном Wi‑Fi и travel-сетях, даёт Free с недельным трафиком для оценки или Premium с безлимитом, когда VPN нужен каждый день. Честные пределы — часть продукта, а не дисклеймер постфактум.' },
        ],
      },
      de: {
        title: 'Wenn ein VPN nicht hilft – ehrliche Grenzen für FollowNet-Nutzer',
        excerpt:
          'Verschlüsselung ist mächtig und endlich. Fälle, in denen FollowNet das eigentliche Problem nicht lösen kann.',
        sections: [
          { title: 'Kaputtes lokales WLAN', body: 'Wenn der Café-Router kein Internet erreicht, erfindet kein Tunnel einen Upstream. Captive Portals abschließen, LTE testen, Speed-Test-Baselines nutzen. VPN braucht zuerst einen funktionierenden Pfad zum FollowNet-Server.' },
          { title: 'Konto- und Phishing-Fehler', body: 'VPN hält Sie nicht davon ab, ein Passwort auf einer Fake-Seite einzugeben oder einen bösartigen Prompt zu bestätigen. iOS aktuell halten, offizielle Apps nutzen und unerwartete Login-Mails vorsichtig behandeln — inklusive FollowNet-Codes.' },
          { title: 'Inhalts- und Geo-Erwartungen', body: 'FollowNet bietet Server in mehreren Regionen, aber Streaming-Kataloge, Banken und Sites können VPN-Exits trotzdem blockieren. Das ist deren Policy, kein FollowNet-Ausfall. Smart Connect verbessert Konnektivität in feindlichen Netzen; es ist keine Content-Unlock-Garantie.' },
          { title: 'Gerätekompromittierung', body: 'Ein kompromittiertes Telefon kann Traffic sehen, bevor er in den Tunnel geht. Face ID, Code und App-Store-Hygiene zählen. FollowNet verschlüsselt den Pfad — es ersetzt keine Endpoint-Sicherheit.' },
          { title: 'Browser-Erweiterung vs. Telefon-VPN', body: 'Die Chrome-Erweiterung schützt nur Chrome-Tabs. Sie sichert keine anderen Desktop-Apps, und FollowNet hat noch keinen systemweiten macOS- oder Android-VPN. Erwarteten Sie Ganzgerät-Schutz am Desktop, ist das Produktumfang — kein kaputter Schalter.' },
          { title: 'Wo FollowNet trotzdem stark ist', body: 'Bei funktionierendem Uplink verschlüsselt FollowNet den Weg zu seinen Exits, hilft in öffentlichem WLAN und Reisenetzen und bietet Free mit Wochen-Traffic zur Evaluierung oder Premium unlimited für den Alltag. Ehrliche Grenzen sind Teil des Produkts, kein Nachklapp-Disclaimer.' },
        ],
      },
      es: {
        title: 'Cuando una VPN no ayuda: límites honestos para usuarios de FollowNet',
        excerpt:
          'El cifrado es poderoso y finito. Casos en los que FollowNet no puede arreglar el problema de fondo.',
        sections: [
          { title: 'Wi‑Fi local roto', body: 'Si el router del café no llega a internet, ningún túnel inventa el uplink. Termina el captive portal, prueba LTE y usa baselines de Speed Test. La VPN necesita primero un camino vivo hasta el servidor FollowNet.' },
          { title: 'Fallos de cuenta y phishing', body: 'La VPN no evita que escribas una contraseña en un sitio falso o apruebes un prompt malicioso. Mantén iOS al día, usa apps oficiales y trata con cuidado los emails de login inesperados — incluidos códigos FollowNet.' },
          { title: 'Expectativas de contenido y geo', body: 'FollowNet ofrece servidores en varias regiones, pero catálogos de streaming, bancos y sitios pueden seguir bloqueando salidas VPN. Es su política, no una caída de FollowNet. Smart Connect mejora la conectividad en redes hostiles; no garantiza desbloquear contenido.' },
          { title: 'Compromiso del dispositivo', body: 'Un teléfono comprometido puede ver el tráfico antes de entrar al túnel. Face ID, código e higiene de App Store importan. FollowNet cifra el camino — no sustituye la seguridad del endpoint.' },
          { title: 'Extensión del navegador vs VPN del teléfono', body: 'La extensión de Chrome protege solo las pestañas de Chrome. No asegura otras apps de escritorio, y FollowNet aún no tiene VPN de sistema para macOS ni Android. Si esperabas protección de todo el escritorio, es alcance de producto — no un interruptor roto.' },
          { title: 'Dónde FollowNet sigue siendo fuerte', body: 'Con un uplink vivo, FollowNet cifra el camino a sus exits, ayuda en Wi‑Fi público y redes de viaje, y ofrece Free con tráfico semanal para evaluar o Premium ilimitado cuando vives en VPN. Los límites honestos son parte del producto, no un disclaimer a posteriori.' },
        ],
      },
      fr: {
        title: 'Quand un VPN n’aide pas — limites honnêtes pour les utilisateurs FollowNet',
        excerpt:
          'Le chiffrement est puissant et limité. Cas où FollowNet ne peut pas corriger le problème de fond.',
        sections: [
          { title: 'Wi‑Fi local en panne', body: 'Si le routeur du café n’atteint pas internet, aucun tunnel n’invente l’upstream. Terminez le captive portal, essayez le LTE, utilisez des baselines Speed Test. Le VPN a d’abord besoin d’un chemin vivant vers le serveur FollowNet.' },
          { title: 'Échecs de compte et phishing', body: 'Le VPN ne vous empêche pas de saisir un mot de passe sur un faux site ou d’approuver une invite malveillante. Gardez iOS à jour, utilisez les apps officielles et traitez avec soin les e-mails de connexion inattendus — y compris les codes FollowNet.' },
          { title: 'Attentes contenu et géo', body: 'FollowNet propose des serveurs dans plusieurs régions, mais catalogues de streaming, banques et sites peuvent encore bloquer les sorties VPN. C’est leur politique, pas une panne FollowNet. Smart Connect améliore la connectivité sur réseaux hostiles ; ce n’est pas une garantie de déblocage de contenu.' },
          { title: 'Appareil compromis', body: 'Un téléphone compromis peut voir le trafic avant qu’il n’entre dans le tunnel. Face ID, code et hygiène App Store comptent. FollowNet chiffre le chemin — il ne remplace pas la sécurité endpoint.' },
          { title: 'Extension navigateur vs VPN téléphone', body: 'L’extension Chrome ne protège que les onglets Chrome. Elle ne sécurise pas les autres apps bureau, et FollowNet n’a pas encore de VPN système macOS ou Android. Si vous attendiez une protection desktop complète, c’est le périmètre produit — pas un interrupteur cassé.' },
          { title: 'Là où FollowNet reste fort', body: 'Avec un uplink vivant, FollowNet chiffre le chemin vers ses exits, aide sur Wi‑Fi public et réseaux de voyage, et offre Free avec trafic hebdomadaire pour évaluer ou Premium illimité au quotidien. Les limites honnêtes font partie du produit, pas d’un disclaimer après coup.' },
        ],
      },
      pt: {
        title: 'Quando uma VPN não ajuda — limites honestos para usuários FollowNet',
        excerpt:
          'Criptografia é poderosa e finita. Casos em que o FollowNet não resolve o problema de fundo.',
        sections: [
          { title: 'Wi‑Fi local quebrado', body: 'Se o roteador do café não alcança a internet, nenhum túnel inventa o uplink. Conclua o captive portal, tente LTE e use baselines de Speed Test. A VPN precisa primeiro de um caminho vivo até o servidor FollowNet.' },
          { title: 'Falhas de conta e phishing', body: 'A VPN não impede digitar senha em um site falso ou aprovar um prompt malicioso. Mantenha o iOS atualizado, use apps oficiais e trate com cuidado e-mails de login inesperados — inclusive códigos FollowNet.' },
          { title: 'Expectativas de conteúdo e geo', body: 'FollowNet oferece servidores em várias regiões, mas catálogos de streaming, bancos e sites ainda podem bloquear saídas VPN. É a política deles, não uma queda do FollowNet. Smart Connect melhora conectividade em redes hostis; não é garantia de desbloqueio de conteúdo.' },
          { title: 'Comprometimento do dispositivo', body: 'Um telefone comprometido pode ver o tráfego antes de entrar no túnel. Face ID, senha e higiene da App Store importam. FollowNet criptografa o caminho — não substitui a segurança do endpoint.' },
          { title: 'Extensão do navegador vs VPN no telefone', body: 'A extensão do Chrome protege só as abas do Chrome. Não protege outros apps de desktop, e FollowNet ainda não tem VPN de sistema para macOS nem Android. Se você esperava proteção de todo o desktop, isso é escopo do produto — não um interruptor quebrado.' },
          { title: 'Onde o FollowNet ainda é forte', body: 'Com uplink vivo, FollowNet criptografa o caminho até seus exits, ajuda em Wi‑Fi público e redes de viagem, e oferece Free com tráfego semanal para avaliar ou Premium ilimitado no uso diário. Limites honestos fazem parte do produto, não um disclaimer depois.' },
        ],
      },
      uk: {
        title: 'Коли VPN не допоможе — чесні межі для користувачів FollowNet',
        excerpt:
          'Шифрування потужне й кінцеве. Випадки, де FollowNet не лагодить вихідну проблему.',
        sections: [
          { title: 'Мертвий локальний Wi‑Fi', body: 'Якщо роутер кафе не бачить інтернет, тунель не створить uplink. Пройдіть captive portal, спробуйте LTE, зніміть baseline Speed Test. VPN спочатку потрібен робочий шлях до сервера FollowNet.' },
          { title: 'Фішинг і акаунт', body: 'VPN не заважає ввести пароль на фейковому сайті чи підтвердити шкідливий prompt. Оновлюйте iOS, беріть офіційні додатки й обережно з неочікуваними листами — включно з кодами FollowNet.' },
          { title: 'Контент і гео', body: 'У FollowNet є сервери в різних регіонах, але каталоги стрімінгу, банки й сайти можуть блокувати VPN-exit. Це їхня політика, не «падіння» FollowNet. Smart Connect покращує зв’язність у жорстких мережах — не гарантує розблокування контенту.' },
          { title: 'Компрометація пристрою', body: 'Зламаний телефон бачить трафік до входу в тунель. Face ID, код і гігієна App Store важливі. FollowNet шифрує шлях — не замінює безпеку endpoint.' },
          { title: 'Розширення браузера vs VPN на телефоні', body: 'Розширення Chrome захищає лише вкладки Chrome. Воно не захистить інші десктопні програми, а повноцінного системного VPN для macOS і Android у FollowNet поки немає. Якщо чекали захист усього комп’ютера — це межа продукту, а не «зламаний тумблер».' },
          { title: 'Де FollowNet усе ж сильний', body: 'За живого uplink FollowNet шифрує шлях до своїх exit, допомагає в публічному Wi‑Fi і travel-мережах, дає Free з тижневим трафіком для оцінки або Premium з безлімітом, коли VPN потрібен щодня. Чесні межі — частина продукту, а не дисклеймер постфактум.' },
        ],
      },
    },
  },
  {
    slug: 'follownet-roadmap-2026',
    date: '2026-01-08',
    minutes: 5,
    topic: 'updates',
    translations: {
      en: {
        title: 'FollowNet roadmap notes for 2026',
        excerpt:
          'Where the product is headed: deeper iOS polish, Chrome parity where it matters, and protocols that survive real networks.',
        sections: [
          {
            title: 'iOS remains the center',
            body: 'Expect more work on Auto-connect reliability, widgets, Shortcuts, and making Smart Connect failures explainable in plain language. The App Store client is the product people trust with system VPN.',
          },
          {
            title: 'Protocols as tools',
            body: 'WireGuard, IKEv2, AmneziaWG, and Hysteria2 stay first-class. The roadmap is better selection under DPI and loss. Manual override will remain for power users.',
          },
          {
            title: 'Chrome and account',
            body: 'The extension should feel like the same Free vs Premium story with clearer status and fewer dead ends. Passwordless login stays the default identity path across surfaces.',
          },
          {
            title: 'How we prioritize',
            body: 'Bugs that strand travelers beat shiny marketing pages. If something is on the public site, it should match the app. Small team, honest scope — that constraint is the roadmap filter.',
          },
        ],
      },
      ru: {
        title: 'Заметки о роадмапе FollowNet на 2026',
        excerpt:
          'Куда движется продукт: глубже iOS, паритет Chrome где важно, протоколы, которые выживают в реальных сетях.',
        sections: [
          {
            title: 'iOS остаётся центром',
            body: 'Ждите работы над надёжностью Auto-connect, виджетами, Shortcuts и понятными ошибками Smart Connect. Клиент App Store — то, чему доверяют системный VPN.',
          },
          {
            title: 'Протоколы как инструменты',
            body: 'WireGuard, IKEv2, AmneziaWG и Hysteria2 остаются first-class. Роадмап — лучший выбор при DPI и потерях. Ручной override для тех, кому нужно, сохранится.',
          },
          {
            title: 'Chrome и аккаунт',
            body: 'Extension должен чувствовать ту же историю Free vs Premium с более ясным статусом и меньшим числом тупиков. Passwordless login остаётся общим путём идентичности.',
          },
          {
            title: 'Как приоритезируем',
            body: 'Баги, которые бросают путешественников, важнее блестящих лендингов. Если написано на сайте — должно совпадать с приложением. Маленькая команда и честный scope — фильтр роадмапа.',
          },
        ],
      },
      de: {
        title: 'Hinweise zur FollowNet-Roadmap für 2026',
        excerpt:
          'Wohin das Produkt geht: tiefere iOS-Verfeinerung, Chrome-Parität dort, wo es darauf ankommt, und Protokolle, die echte Netzwerke überleben.',
        sections: [
          {
            title: 'iOS bleibt das Zentrum',
            body: 'Erwarten Sie mehr Arbeit an der Zuverlässigkeit von Auto-Connect, Widgets, Verknüpfungen und der Erklärbarkeit von Smart Connect-Fehlern im Klartext. Der App Store-Client ist das Produkt, dem Menschen mit System-VPN vertrauen.',
          },
          {
            title: 'Protokolle als Werkzeuge',
            body: 'WireGuard, IKEv2, AmneziaWG und Hysteria2 bleiben erstklassig. Die Roadmap ist eine bessere Auswahl unter DPI und Verlust. Die manuelle Übersteuerung bleibt Power-Usern vorbehalten.',
          },
          {
            title: 'Chrome und Konto',
            body: 'Die Erweiterung sollte sich wie die gleiche Free- vs. Premium-Story anfühlen, mit klarerem Status und weniger Sackgassen. Die passwortlose Anmeldung bleibt der Standardidentitätspfad auf allen Oberflächen.',
          },
          {
            title: 'Wie wir Prioritäten setzen',
            body: 'Bugs, die Reisende stranden, schlagen glänzende Marketingseiten. Wenn sich etwas auf der öffentlichen Website befindet, sollte es mit der App übereinstimmen. Kleines Team, ehrlicher Umfang – diese Einschränkung ist der Roadmap-Filter.',
          },
        ],
      },
      es: {
        title: 'Notas de la hoja de ruta de FollowNet para 2026',
        excerpt:
          'Hacia dónde se dirige el producto: un pulido más profundo de iOS, paridad de Chrome donde importa y protocolos que sobrevivan a las redes reales.',
        sections: [
          {
            title: 'iOS sigue siendo el centro',
            body: 'Espere más trabajo en la confiabilidad de la conexión automática, los widgets, los accesos directos y en cómo explicar las fallas de Smart Connect en un lenguaje sencillo. El cliente de App Store es el producto en el que la gente confía con el sistema VPN.',
          },
          {
            title: 'Protocolos como herramientas.',
            body: 'WireGuard, IKEv2, AmneziaWG e Hysteria2 siguen siendo de primera clase. La hoja de ruta es una mejor selección bajo DPI y pérdida. La anulación manual permanecerá para los usuarios avanzados.',
          },
          {
            title: 'Chrome y cuenta',
            body: 'La extensión debería parecer la misma historia entre Gratis y Premium, con un estado más claro y menos callejones sin salida. El inicio de sesión sin contraseña sigue siendo la ruta de identidad predeterminada en todas las superficies.',
          },
          {
            title: 'Cómo priorizamos',
            body: 'Los errores que dejan varados a los viajeros superan a las brillantes páginas de marketing. Si hay algo en el sitio público, debe coincidir con la aplicación. Equipo pequeño, alcance honesto: esa limitación es el filtro de la hoja de ruta.',
          },
        ],
      },
      fr: {
        title: 'Notes de la feuille de route FollowNet pour 2026',
        excerpt:
          'Vers où se dirige le produit : un peaufinage iOS plus approfondi, la parité Chrome là où cela compte et des protocoles qui survivent aux réseaux réels.',
        sections: [
          {
            title: 'iOS reste le centre',
            body: 'Attendez-vous à plus de travail sur la fiabilité de la connexion automatique, les widgets, les raccourcis et à rendre les échecs de Smart Connect explicables dans un langage simple. Le client App Store est le produit auquel les gens font confiance avec le VPN système.',
          },
          {
            title: 'Les protocoles comme outils',
            body: 'WireGuard, IKEv2, AmneziaWG et Hysteria2 restent de première classe. La feuille de route est une meilleure sélection sous DPI et perte. La commande manuelle restera réservée aux utilisateurs expérimentés.',
          },
          {
            title: 'Chrome et compte',
            body: "L'extension devrait ressembler à la même histoire Free vs Premium avec un statut plus clair et moins d'impasses. La connexion sans mot de passe reste le chemin d’identité par défaut sur toutes les surfaces.",
          },
          {
            title: 'Comment nous priorisons',
            body: "Les bugs qui bloquent les voyageurs battent les pages marketing brillantes. Si quelque chose se trouve sur le site public, il doit correspondre à l'application. Petite équipe, portée honnête – cette contrainte est le filtre de la feuille de route.",
          },
        ],
      },
      pt: {
        title: 'Notas do roteiro da FollowNet para 2026',
        excerpt:
          'Para onde o produto está indo: aprimoramento mais profundo do iOS, paridade do Chrome onde é importante e protocolos que sobrevivem a redes reais.',
        sections: [
          {
            title: 'iOS continua sendo o centro',
            body: 'Espere mais trabalho na confiabilidade da conexão automática, widgets, atalhos e na explicação de falhas do Smart Connect em linguagem simples. O cliente da App Store é o produto em que as pessoas confiam com a VPN do sistema.',
          },
          {
            title: 'Protocolos como ferramentas',
            body: 'WireGuard, IKEv2, AmneziaWG e Hysteria2 permanecem de primeira classe. O roteiro é uma melhor seleção em DPI e perda. A substituição manual permanecerá para usuários avançados.',
          },
          {
            title: 'Chrome e conta',
            body: 'A extensão deve parecer a mesma história Gratuita vs Premium, com status mais claro e menos becos sem saída. O login sem senha permanece como o caminho de identidade padrão nas superfícies.',
          },
          {
            title: 'Como priorizamos',
            body: 'Falhas que deixam viajantes sem conexão têm prioridade sobre páginas de marketing chamativas. Se algo estiver no site público, deverá corresponder ao aplicativo. Equipe pequena, escopo honesto — essa restrição é o filtro do roteiro.',
          },
        ],
      },
      uk: {
        title: 'Дорожня карта FollowNet на 2026 рік',
        excerpt:
          'Куди прямує продукт: глибше вдосконалення iOS, паритет Chrome, де це важливо, і протоколи, які виживають у реальних мережах.',
        sections: [
          {
            title: 'Центром залишається iOS',
            body: 'Очікуйте більше роботи над надійністю автоматичного підключення, віджетами, ярликами та поясненням збоїв Smart Connect простою мовою. Клієнт App Store — це продукт, якому люди довіряють системну VPN.',
          },
          {
            title: 'Протоколи як інструменти',
            body: 'WireGuard, IKEv2, AmneziaWG і Hysteria2 залишаються першокласними. Дорожня карта - кращий вибір під DPI і втрати. Ручне перевизначення залишиться для досвідчених користувачів.',
          },
          {
            title: 'Chrome і обліковий запис',
            body: 'Розширення має виглядати як та сама історія Free vs Premium із чіткішим статусом і меншою кількістю глухих кутів. Вхід без пароля залишається шляхом ідентифікації за замовчуванням на різних поверхнях.',
          },
          {
            title: 'Як ми розставляємо пріоритети',
            body: 'Помилки, через які мандрівники вигадують блискучі маркетингові сторінки. Якщо щось є на загальнодоступному сайті, воно має відповідати програмі. Невелика команда, чесний масштаб — це обмеження є фільтром дорожньої карти.',
          },
        ],
      },
    },
  },
  {
    slug: 'censorship-networks-amneziawg',
    date: '2025-12-02',
    minutes: 7,
    topic: 'guides',
    translations: {
      en: {
        title:
          'Restrictive networks and AmneziaWG: a field guide for FollowNet',
        excerpt:
          'How DPI-shaped networks behave, when to try AmneziaWG or Hysteria2, and how Smart Connect fits without magic claims.',
        sections: [
          {
            title: 'What “restrictive” usually looks like',
            body: 'Symptoms include WireGuard that never handshakes, sudden speed collapses on one protocol, or VPN that works on LTE but dies on a specific Wi‑Fi. Deep packet inspection and crude blocking are common causes — not always a FollowNet outage.',
          },
          {
            title: 'AmneziaWG’s job',
            body: 'AmneziaWG keeps a WireGuard-like experience with obfuscation aimed at networks that classify plain WireGuard. In FollowNet you can select it manually or let Smart Connect fall back when signals say vanilla WireGuard is a bad bet.',
          },
          {
            title: 'Hysteria2 and IKEv2 in the same toolkit',
            body: 'If AmneziaWG still fails, try Hysteria2 or IKEv2 depending on the path. IKEv2 often helps on messy mobile handoffs; Hysteria2 can help on lossy or hostile links. Speed Test after each change; leave working settings pinned for that location.',
          },
          {
            title: 'Stay honest about outcomes',
            body: 'No conventional VPN — FollowNet included — can promise connectivity on every filtered network. Comply with local law, keep the app updated, and treat Smart Connect as best-effort automation. When nothing connects, switch networks or report the failure with protocol and region details.',
          },
        ],
      },
      ru: {
        title: 'Жёсткие сети и AmneziaWG: полевой гайд для FollowNet',
        excerpt:
          'Как ведут себя сети с DPI, когда пробовать AmneziaWG или Hysteria2 и где место Smart Connect без магических обещаний.',
        sections: [
          {
            title: 'Как обычно выглядит «жёсткая» сеть',
            body: 'Симптомы: WireGuard не рукополагается, скорость на одном протоколе внезапно падает, VPN жив на LTE и умирает на конкретном Wi‑Fi. Частые причины — DPI и грубые блокировки, не всегда «падение» FollowNet.',
          },
          {
            title: 'Задача AmneziaWG',
            body: 'AmneziaWG сохраняет опыт, близкий к WireGuard, с обфускацией для сетей, которые классифицируют обычный WireGuard. В FollowNet его можно выбрать вручную или отдать Smart Connect, когда vanilla WireGuard — плохая ставка.',
          },
          {
            title: 'Hysteria2 и IKEv2 в том же наборе',
            body: 'Если AmneziaWG тоже не идёт — пробуйте Hysteria2 или IKEv2. IKEv2 часто спасает на скачущем мобильном; Hysteria2 — на потерях и враждебных линках. После смены — Speed Test; рабочие настройки для места зафиксируйте.',
          },
          {
            title: 'Честно про результат',
            body: 'Ни один обычный VPN, включая FollowNet, не обещает связность в каждой фильтруемой сети. Соблюдайте закон, обновляйте приложение, считайте Smart Connect best-effort. Если ничего не коннектится — смените сеть или пришлите в поддержку протокол и регион.',
          },
        ],
      },
      de: {
        title:
          'Restriktive Netzwerke und AmneziaWG: ein Leitfaden für FollowNet',
        excerpt:
          'Wie sich DPI-förmige Netzwerke verhalten, wann man AmneziaWG oder Hysteria2 ausprobieren sollte und wie Smart Connect ohne Zaubersprüche funktioniert.',
        sections: [
          {
            title: 'Wie „restriktiv“ normalerweise aussieht',
            body: 'Zu den Symptomen gehören WireGuard, das nie Handshakes durchführt, plötzliche Geschwindigkeitseinbrüche bei einem Protokoll oder VPN, das mit LTE funktioniert, aber bei einem bestimmten WLAN abstürzt. Deep Packet Inspection und grobes Blockieren sind häufige Ursachen – nicht immer ein FollowNet-Ausfall.',
          },
          {
            title: 'Die Aufgabe von AmneziaWG',
            body: 'AmneziaWG bietet eine WireGuard-ähnliche Erfahrung mit Verschleierung, die auf Netzwerke abzielt, die einfaches WireGuard klassifizieren. In FollowNet können Sie es manuell auswählen oder Smart Connect zurückgreifen lassen, wenn Signale besagen, dass Vanilla WireGuard eine schlechte Wahl ist.',
          },
          {
            title: 'Hysteria2 und IKEv2 im selben Toolkit',
            body: 'Wenn AmneziaWG immer noch fehlschlägt, versuchen Sie es je nach Pfad mit Hysteria2 oder IKEv2. IKEv2 hilft oft bei chaotischen mobilen Übergaben; Hysteria2 kann bei verlustbehafteten oder feindseligen Links helfen. Geschwindigkeitstest nach jeder Änderung; Lassen Sie die Arbeitseinstellungen für diesen Standort angeheftet.',
          },
          {
            title: 'Bleiben Sie ehrlich, was die Ergebnisse angeht',
            body: 'Kein herkömmliches VPN – FollowNet eingeschlossen – kann Konnektivität in jedem gefilterten Netzwerk versprechen. Halten Sie die örtlichen Gesetze ein, halten Sie die App auf dem neuesten Stand und betrachten Sie Smart Connect als bestmögliche Automatisierung. Wenn keine Verbindung hergestellt wird, wechseln Sie das Netzwerk oder melden Sie den Fehler mit Protokoll- und Regionsdetails.',
          },
        ],
      },
      es: {
        title:
          'Redes restrictivas y AmneziaWG: una guía de campo para FollowNet',
        excerpt:
          'Cómo se comportan las redes en forma de DPI, cuándo probar AmneziaWG o Hysteria2 y cómo encaja Smart Connect sin afirmaciones mágicas.',
        sections: [
          {
            title: 'Cómo suele verse "restrictivo"',
            body: 'Los síntomas incluyen WireGuard que nunca da apretones de manos, caídas repentinas de velocidad en un protocolo o VPN que funciona en LTE pero se apaga en un Wi-Fi específico. La inspección profunda de paquetes y el bloqueo crudo son causas comunes, no siempre una interrupción de FollowNet.',
          },
          {
            title: 'El trabajo de AmneziaWG',
            body: 'AmneziaWG mantiene una experiencia similar a WireGuard con ofuscación dirigida a redes que clasifican WireGuard simple. En FollowNet, puede seleccionarlo manualmente o dejar que Smart Connect retroceda cuando las señales indiquen que WireGuard básico es una mala apuesta.',
          },
          {
            title: 'Hysteria2 e IKEv2 en el mismo kit de herramientas',
            body: 'Si AmneziaWG aún falla, pruebe Hysteria2 o IKEv2 según la ruta. IKEv2 a menudo ayuda en transferencias móviles complicadas; Hysteria2 puede ayudar con enlaces hostiles o con pérdidas. Prueba de velocidad después de cada cambio; deje la configuración de trabajo fijada para esa ubicación.',
          },
          {
            title: 'Sea honesto acerca de los resultados',
            body: 'Ninguna VPN convencional, incluida FollowNet, puede prometer conectividad en todas las redes filtradas. Cumpla con las leyes locales, mantenga la aplicación actualizada y trate a Smart Connect como la mejor automatización. Cuando no se conecte nada, cambie de red o informe la falla con detalles de protocolo y región.',
          },
        ],
      },
      fr: {
        title:
          'Réseaux restrictifs et AmneziaWG : un guide de terrain pour FollowNet',
        excerpt:
          "Comment se comportent les réseaux en forme de DPI, quand essayer AmneziaWG ou Hysteria2 et comment Smart Connect s'intègre sans prétention magique.",
        sections: [
          {
            title: 'À quoi ressemble généralement le terme « restrictif »',
            body: "Les symptômes incluent WireGuard qui n'établit jamais de poignée de main, la vitesse s'effondre soudainement sur un protocole ou un VPN qui fonctionne sur LTE mais meurt sur un Wi-Fi spécifique. L’inspection approfondie des paquets et le blocage grossier sont des causes courantes – pas toujours une panne de FollowNet.",
          },
          {
            title: 'Le travail d’AmneziaWG',
            body: 'AmneziaWG conserve une expérience de type WireGuard avec une obscurcissement destinée aux réseaux qui classent simplement WireGuard. Dans FollowNet, vous pouvez le sélectionner manuellement ou laisser Smart Connect se replier lorsque les signaux indiquent que Vanilla WireGuard est un mauvais pari.',
          },
          {
            title: 'Hysteria2 et IKEv2 dans la même boîte à outils',
            body: 'Si AmneziaWG échoue toujours, essayez Hysteria2 ou IKEv2 en fonction du chemin. IKEv2 aide souvent lors des transferts mobiles compliqués ; Hysteria2 peut aider sur les liens avec perte ou hostiles. Test de vitesse après chaque changement ; laissez les paramètres de travail épinglés pour cet emplacement.',
          },
          {
            title: 'Restez honnête sur les résultats',
            body: "Aucun VPN conventionnel – FollowNet inclus – ne peut promettre une connectivité sur chaque réseau filtré. Respectez la législation locale, maintenez l'application à jour et traitez Smart Connect comme une automatisation au mieux. Lorsque rien ne se connecte, changez de réseau ou signalez l'échec avec les détails du protocole et de la région.",
          },
        ],
      },
      pt: {
        title: 'Redes restritivas e AmneziaWG: um guia de campo para FollowNet',
        excerpt:
          'Como as redes em formato DPI se comportam, quando experimentar o AmneziaWG ou o Hysteria2 e como o Smart Connect se encaixa sem reivindicações mágicas.',
        sections: [
          {
            title: 'Como geralmente é “restritivo”',
            body: 'Os sintomas incluem WireGuard que nunca faz handshakes, quedas repentinas de velocidade em um protocolo ou VPN que funciona em LTE, mas morre em um Wi-Fi específico. A inspeção profunda de pacotes e o bloqueio bruto são causas comuns – nem sempre uma interrupção do FollowNet.',
          },
          {
            title: 'O trabalho da AmneziaWG',
            body: 'AmneziaWG mantém uma experiência semelhante ao WireGuard com ofuscação voltada para redes que classificam WireGuard simples. No FollowNet, você pode selecioná-lo manualmente ou deixar o Smart Connect recuar quando os sinais indicarem que o Vanilla WireGuard é uma má aposta.',
          },
          {
            title: 'Hysteria2 e IKEv2 no mesmo kit de ferramentas',
            body: 'Se o AmneziaWG ainda falhar, tente Hysteria2 ou IKEv2 dependendo do caminho. O IKEv2 geralmente ajuda em transferências móveis complicadas; Hysteria2 pode ajudar em links hostis ou com perdas. Teste de velocidade após cada alteração; deixe as configurações de trabalho fixadas para esse local.',
          },
          {
            title: 'Seja honesto sobre os resultados',
            body: 'Nenhuma VPN convencional – incluindo o FollowNet – pode prometer conectividade em todas as redes filtradas. Cumpra a legislação local, mantenha o aplicativo atualizado e trate o Smart Connect como uma automação de melhor esforço. Quando nada se conectar, troque de rede ou relate a falha com detalhes de protocolo e região.',
          },
        ],
      },
      uk: {
        title:
          'Обмежувальні мережі та AmneziaWG: польовий посібник для FollowNet',
        excerpt:
          'Як поводяться мережі у формі DPI, коли спробувати AmneziaWG або Hysteria2 і як Smart Connect підходить без магічних претензій.',
        sections: [
          {
            title: 'Як зазвичай виглядає «обмежувальний».',
            body: 'Симптоми включають WireGuard, який ніколи не рукостискає, раптові падіння швидкості на одному протоколі або VPN, яка працює в LTE, але вимикає в певному Wi‑Fi. Глибока перевірка пакетів і грубе блокування є поширеними причинами — не завжди збій FollowNet.',
          },
          {
            title: 'Робота AmneziaWG',
            body: 'AmneziaWG підтримує роботу, подібну до WireGuard, із обфускацією, спрямованою на мережі, які класифікують звичайний WireGuard. У FollowNet ви можете вибрати його вручну або дозволити Smart Connect відключитися, коли сигнали повідомлять, що ванільний WireGuard є поганим вибором.',
          },
          {
            title: 'Hysteria2 і IKEv2 в одному наборі інструментів',
            body: 'Якщо AmneziaWG все одно не працює, спробуйте Hysteria2 або IKEv2 залежно від шляху. IKEv2 часто допомагає під час безладної мобільної передачі; Hysteria2 може допомогти у втратних або ворожих посиланнях. Тест швидкості після кожної зміни; залишити робочі налаштування закріпленими для цього місця.',
          },
          {
            title: 'Будьте чесними щодо результатів',
            body: 'Жоден звичайний VPN (включаючи FollowNet) не може обіцяти підключення до кожної відфільтрованої мережі. Дотримуйтеся місцевого законодавства, постійно оновлюйте програму та розглядайте Smart Connect як найкращу автоматизацію. Якщо нічого не з’єднується, перемкніть мережу або повідомте про помилку з деталями протоколу та регіону.',
          },
        ],
      },
    },
  },
];

export const BLOG_POSTS: BlogPostMeta[] = [
  ...CORE_BLOG_POSTS,
  ...(EXTRA_BLOG_POSTS as BlogPostMeta[]),
];

export type BlogPostView = BlogPostLocalized &
  Pick<BlogPostMeta, 'slug' | 'date' | 'minutes' | 'topic'>;

function packForLang(meta: BlogPostMeta, lang: AppLang): BlogPostLocalized {
  return meta.translations[lang];
}

export function blogPosts(lang: AppLang): BlogPostView[] {
  return [...BLOG_POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((meta) => ({
      slug: meta.slug,
      date: meta.date,
      minutes: meta.minutes,
      topic: meta.topic,
      ...packForLang(meta, lang),
    }));
}

export function blogPost(slug: string, lang: AppLang): BlogPostView | null {
  const meta = BLOG_POSTS.find((p) => p.slug === slug);
  if (!meta) return null;
  return {
    slug: meta.slug,
    date: meta.date,
    minutes: meta.minutes,
    topic: meta.topic,
    ...packForLang(meta, lang),
  };
}

export function blogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function isBlogSlug(value: string): boolean {
  return BLOG_POSTS.some((p) => p.slug === value);
}

export function blogTopicLabel(topic: BlogTopic, lang: AppLang): string {
  const map: Record<BlogTopic, Record<AppLang, string>> = {
    product: {
      en: 'Product',
      ru: 'Продукт',
      uk: 'Продукт',
      de: 'Produkt',
      es: 'Producto',
      fr: 'Produit',
      pt: 'Produto',
    },
    updates: {
      en: 'Updates',
      ru: 'Обновления',
      uk: 'Оновлення',
      de: 'Neuigkeiten',
      es: 'Novedades',
      fr: 'Actualités',
      pt: 'Novidades',
    },
    guides: {
      en: 'Guides',
      ru: 'Руководства',
      uk: 'Посібники',
      de: 'Ratgeber',
      es: 'Guías',
      fr: 'Guides',
      pt: 'Guias',
    },
  };
  return map[topic][lang];
}
