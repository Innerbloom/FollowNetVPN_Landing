import type { AppLang } from '../../core/i18n.service';

export interface IpCheckCopy {
  kicker: string;
  h1: string;
  lead: string;
  checking: string;
  failed: string;
  retry: string;
  copy: string;
  copied: string;
  verdictOurs: string;
  verdictExposed: string;
  rows: {
    ip: string;
    location: string;
    isp: string;
    ipv6: string;
    webrtc: string;
    timezone: string;
    blacklist: string;
  };
  values: {
    none: string;
    unknown: string;
    webrtcClean: string;
    webrtcLeak: string;
    webrtcOff: string;
    tzSame: string;
    tzDifferent: string;
    blacklistClean: string;
    blacklistListed: string;
  };
  cta: string;
  dnsNote: string;
  storedNote: string;
  aboutTitle: string;
  about: readonly string[];
  faqTitle: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
}

const en: IpCheckCopy = {
  kicker: 'Free tool',
  h1: 'What is my IP address?',
  lead: 'See the IP address, location and provider websites see right now, and run a quick WebRTC and IPv6 leak test in your browser.',
  checking: 'Checking your connection…',
  failed: 'The check did not finish. Please try again.',
  retry: 'Check again',
  copy: 'Copy',
  copied: 'Copied',
  verdictOurs: 'You are connected through FollowNet VPN. Websites see our server, not your own address.',
  verdictExposed: 'Websites can see this address and the provider below.',
  rows: {
    ip: 'IP address',
    location: 'Location',
    isp: 'Provider',
    ipv6: 'IPv6',
    webrtc: 'WebRTC',
    timezone: 'Time zone',
    blacklist: 'Blacklists',
  },
  values: {
    none: 'Not detected',
    unknown: 'Unknown',
    webrtcClean: 'No other address exposed',
    webrtcLeak: 'Another address is exposed: {ip}',
    webrtcOff: 'Not available in this browser',
    tzSame: 'Matches this IP',
    tzDifferent: 'Device: {device}, IP: {ip}',
    blacklistClean: 'Not listed ({n} checked)',
    blacklistListed: 'Listed in {n}',
  },
  cta: 'Protect your connection with FollowNet',
  dnsNote: 'A browser cannot test DNS leaks reliably, so this page does not claim to. The FollowNet app runs that test through the tunnel.',
  storedNote: 'We do not store the results of this check. IPv6 is read through ipify and WebRTC through a Cloudflare STUN server, directly from your browser.',
  aboutTitle: 'What your IP address tells a website',
  about: [
    'Every site you open receives your IP address. It usually shows your country, city and internet provider, and sites use it for analytics, regional content and fraud checks.',
    'A VPN encrypts traffic between your device and the VPN server, so sites see the address of that server instead. It does not make you invisible: cookies, accounts and browser fingerprints still identify you.',
  ],
  faqTitle: 'Questions',
  faq: [
    { q: 'How do I find my IP address?', a: 'Open this page. The address at the top is the public IP that websites see for your connection.' },
    { q: 'What is a WebRTC leak?', a: 'WebRTC lets browsers connect directly for calls. It can reveal an address other than the one your VPN shows. This page compares the addresses your browser reports with your public IP.' },
    { q: 'What is an IPv6 leak?', a: 'If your network has IPv6 but your VPN covers only IPv4, sites that support IPv6 can see your real address. If IPv6 is shown here while connected to a VPN, compare it with your provider’s address.' },
    { q: 'Why is my location wrong?', a: 'IP location comes from databases and shows where your provider registered the address. It is often only accurate to a city or region.' },
    { q: 'Does this page store my IP?', a: 'No. The result is calculated for this request and is not saved.' },
  ],
};

const ru: IpCheckCopy = {
  kicker: 'Бесплатный инструмент',
  h1: 'Какой у меня IP-адрес?',
  lead: 'Посмотрите, какой IP-адрес, местоположение и провайдера видят сайты прямо сейчас, и проверьте утечки WebRTC и IPv6 в браузере.',
  checking: 'Проверяем соединение…',
  failed: 'Проверка не завершилась. Попробуйте ещё раз.',
  retry: 'Проверить снова',
  copy: 'Скопировать',
  copied: 'Скопировано',
  verdictOurs: 'Вы подключены через FollowNet VPN. Сайты видят наш сервер, а не ваш адрес.',
  verdictExposed: 'Сайты видят этот адрес и провайдера ниже.',
  rows: {
    ip: 'IP-адрес',
    location: 'Местоположение',
    isp: 'Провайдер',
    ipv6: 'IPv6',
    webrtc: 'WebRTC',
    timezone: 'Часовой пояс',
    blacklist: 'Чёрные списки',
  },
  values: {
    none: 'Не обнаружен',
    unknown: 'Неизвестно',
    webrtcClean: 'Других адресов не видно',
    webrtcLeak: 'Виден другой адрес: {ip}',
    webrtcOff: 'Недоступно в этом браузере',
    tzSame: 'Совпадает с IP',
    tzDifferent: 'Устройство: {device}, IP: {ip}',
    blacklistClean: 'Не найден (проверено: {n})',
    blacklistListed: 'Найден в списках: {n}',
  },
  cta: 'Защитить соединение с FollowNet',
  dnsNote: 'Браузер не может надёжно проверить утечку DNS, поэтому эта страница такого не обещает. Этот тест делает приложение FollowNet через туннель.',
  storedNote: 'Мы не сохраняем результаты этой проверки. IPv6 определяется через ipify, а WebRTC через STUN-сервер Cloudflare, напрямую из вашего браузера.',
  aboutTitle: 'Что ваш IP-адрес сообщает сайту',
  about: [
    'Каждый сайт получает ваш IP-адрес. Обычно по нему видны страна, город и интернет-провайдер, а сайты используют его для аналитики, региональных версий и защиты от мошенничества.',
    'VPN шифрует трафик между устройством и VPN-сервером, и сайты видят адрес этого сервера. Невидимым он вас не делает: cookies, аккаунты и отпечаток браузера всё равно вас определяют.',
  ],
  faqTitle: 'Вопросы',
  faq: [
    { q: 'Как узнать свой IP-адрес?', a: 'Откройте эту страницу. Адрес вверху это публичный IP, который сайты видят у вашего соединения.' },
    { q: 'Что такое утечка WebRTC?', a: 'WebRTC позволяет браузерам соединяться напрямую для звонков. Он может показать адрес, отличный от адреса VPN. Эта страница сравнивает адреса из браузера с вашим публичным IP.' },
    { q: 'Что такое утечка IPv6?', a: 'Если в вашей сети есть IPv6, а VPN защищает только IPv4, сайты с IPv6 могут видеть ваш настоящий адрес. Если при включённом VPN здесь виден IPv6, сравните его с адресом провайдера.' },
    { q: 'Почему местоположение неточное?', a: 'Положение по IP берётся из баз данных и показывает, где провайдер зарегистрировал адрес. Обычно точность на уровне города или региона.' },
    { q: 'Сохраняет ли страница мой IP?', a: 'Нет. Результат считается для этого запроса и не сохраняется.' },
  ],
};

const uk: IpCheckCopy = {
  kicker: 'Безкоштовний інструмент',
  h1: 'Яка в мене IP-адреса?',
  lead: 'Подивіться, яку IP-адресу, місцезнаходження та провайдера бачать сайти просто зараз, і перевірте витоки WebRTC та IPv6 у браузері.',
  checking: 'Перевіряємо з’єднання…',
  failed: 'Перевірка не завершилася. Спробуйте ще раз.',
  retry: 'Перевірити знову',
  copy: 'Скопіювати',
  copied: 'Скопійовано',
  verdictOurs: 'Ви підключені через FollowNet VPN. Сайти бачать наш сервер, а не вашу адресу.',
  verdictExposed: 'Сайти бачать цю адресу та провайдера нижче.',
  rows: {
    ip: 'IP-адреса',
    location: 'Місцезнаходження',
    isp: 'Провайдер',
    ipv6: 'IPv6',
    webrtc: 'WebRTC',
    timezone: 'Часовий пояс',
    blacklist: 'Чорні списки',
  },
  values: {
    none: 'Не виявлено',
    unknown: 'Невідомо',
    webrtcClean: 'Інших адрес не видно',
    webrtcLeak: 'Видно іншу адресу: {ip}',
    webrtcOff: 'Недоступно в цьому браузері',
    tzSame: 'Збігається з IP',
    tzDifferent: 'Пристрій: {device}, IP: {ip}',
    blacklistClean: 'Не знайдено (перевірено: {n})',
    blacklistListed: 'Знайдено у списках: {n}',
  },
  cta: 'Захистити з’єднання з FollowNet',
  dnsNote: 'Браузер не може надійно перевірити витік DNS, тому ця сторінка такого не обіцяє. Цей тест робить застосунок FollowNet через тунель.',
  storedNote: 'Ми не зберігаємо результати цієї перевірки. IPv6 визначається через ipify, а WebRTC через STUN-сервер Cloudflare, безпосередньо з вашого браузера.',
  aboutTitle: 'Що ваша IP-адреса повідомляє сайту',
  about: [
    'Кожен сайт отримує вашу IP-адресу. Зазвичай за нею видно країну, місто й інтернет-провайдера, а сайти використовують її для аналітики, регіональних версій і захисту від шахрайства.',
    'VPN шифрує трафік між пристроєм і VPN-сервером, і сайти бачать адресу цього сервера. Невидимим він вас не робить: cookies, акаунти й відбиток браузера все одно вас визначають.',
  ],
  faqTitle: 'Запитання',
  faq: [
    { q: 'Як дізнатися свою IP-адресу?', a: 'Відкрийте цю сторінку. Адреса вгорі це публічна IP, яку сайти бачать у вашого з’єднання.' },
    { q: 'Що таке витік WebRTC?', a: 'WebRTC дає браузерам з’єднуватися напряму для дзвінків. Він може показати адресу, відмінну від адреси VPN. Ця сторінка порівнює адреси з браузера з вашою публічною IP.' },
    { q: 'Що таке витік IPv6?', a: 'Якщо у вашій мережі є IPv6, а VPN захищає лише IPv4, сайти з IPv6 можуть бачити вашу справжню адресу. Якщо з увімкненим VPN тут видно IPv6, порівняйте його з адресою провайдера.' },
    { q: 'Чому місцезнаходження неточне?', a: 'Положення за IP береться з баз даних і показує, де провайдер зареєстрував адресу. Зазвичай точність на рівні міста або регіону.' },
    { q: 'Чи зберігає сторінка мою IP?', a: 'Ні. Результат обчислюється для цього запиту й не зберігається.' },
  ],
};

const de: IpCheckCopy = {
  kicker: 'Kostenloses Tool',
  h1: 'Wie lautet meine IP-Adresse?',
  lead: 'Sieh, welche IP-Adresse, welchen Standort und welchen Anbieter Websites gerade sehen, und teste im Browser auf WebRTC- und IPv6-Lecks.',
  checking: 'Verbindung wird geprüft…',
  failed: 'Die Prüfung wurde nicht abgeschlossen. Bitte versuche es erneut.',
  retry: 'Erneut prüfen',
  copy: 'Kopieren',
  copied: 'Kopiert',
  verdictOurs: 'Du bist über FollowNet VPN verbunden. Websites sehen unseren Server, nicht deine Adresse.',
  verdictExposed: 'Websites sehen diese Adresse und den Anbieter unten.',
  rows: {
    ip: 'IP-Adresse',
    location: 'Standort',
    isp: 'Anbieter',
    ipv6: 'IPv6',
    webrtc: 'WebRTC',
    timezone: 'Zeitzone',
    blacklist: 'Blacklists',
  },
  values: {
    none: 'Nicht erkannt',
    unknown: 'Unbekannt',
    webrtcClean: 'Keine andere Adresse sichtbar',
    webrtcLeak: 'Eine andere Adresse ist sichtbar: {ip}',
    webrtcOff: 'In diesem Browser nicht verfügbar',
    tzSame: 'Passt zur IP',
    tzDifferent: 'Gerät: {device}, IP: {ip}',
    blacklistClean: 'Nicht gelistet ({n} geprüft)',
    blacklistListed: 'Gelistet in {n}',
  },
  cta: 'Verbindung mit FollowNet schützen',
  dnsNote: 'Ein Browser kann DNS-Lecks nicht zuverlässig testen, daher verspricht diese Seite das nicht. Die FollowNet-App führt diesen Test durch den Tunnel aus.',
  storedNote: 'Wir speichern die Ergebnisse nicht. IPv6 wird über ipify und WebRTC über einen Cloudflare-STUN-Server direkt aus deinem Browser ermittelt.',
  aboutTitle: 'Was deine IP-Adresse einer Website verrät',
  about: [
    'Jede Website erhält deine IP-Adresse. Meist zeigt sie Land, Stadt und Internetanbieter, und Websites nutzen sie für Statistiken, regionale Inhalte und Betrugsschutz.',
    'Ein VPN verschlüsselt den Verkehr zwischen deinem Gerät und dem VPN-Server, Websites sehen dann die Adresse dieses Servers. Unsichtbar macht es dich nicht: Cookies, Konten und Browser-Fingerabdrücke erkennen dich weiterhin.',
  ],
  faqTitle: 'Fragen',
  faq: [
    { q: 'Wie finde ich meine IP-Adresse?', a: 'Öffne diese Seite. Die Adresse oben ist die öffentliche IP, die Websites für deine Verbindung sehen.' },
    { q: 'Was ist ein WebRTC-Leck?', a: 'WebRTC verbindet Browser für Anrufe direkt. Dabei kann eine andere Adresse sichtbar werden als die deines VPN. Diese Seite vergleicht die Adressen des Browsers mit deiner öffentlichen IP.' },
    { q: 'Was ist ein IPv6-Leck?', a: 'Hat dein Netz IPv6, dein VPN deckt aber nur IPv4 ab, können Websites mit IPv6 deine echte Adresse sehen. Wird hier bei aktivem VPN IPv6 angezeigt, vergleiche es mit der Adresse deines Anbieters.' },
    { q: 'Warum stimmt mein Standort nicht?', a: 'Der IP-Standort stammt aus Datenbanken und zeigt, wo der Anbieter die Adresse registriert hat. Er ist meist nur auf Stadt oder Region genau.' },
    { q: 'Speichert diese Seite meine IP?', a: 'Nein. Das Ergebnis wird für diese Anfrage berechnet und nicht gespeichert.' },
  ],
};

const es: IpCheckCopy = {
  kicker: 'Herramienta gratuita',
  h1: '¿Cuál es mi dirección IP?',
  lead: 'Mira qué dirección IP, ubicación y proveedor ven los sitios web ahora mismo, y prueba fugas de WebRTC e IPv6 en tu navegador.',
  checking: 'Comprobando tu conexión…',
  failed: 'La comprobación no terminó. Inténtalo de nuevo.',
  retry: 'Comprobar de nuevo',
  copy: 'Copiar',
  copied: 'Copiado',
  verdictOurs: 'Estás conectado a través de FollowNet VPN. Los sitios ven nuestro servidor, no tu dirección.',
  verdictExposed: 'Los sitios web ven esta dirección y el proveedor de abajo.',
  rows: {
    ip: 'Dirección IP',
    location: 'Ubicación',
    isp: 'Proveedor',
    ipv6: 'IPv6',
    webrtc: 'WebRTC',
    timezone: 'Zona horaria',
    blacklist: 'Listas negras',
  },
  values: {
    none: 'No detectado',
    unknown: 'Desconocido',
    webrtcClean: 'No se ve otra dirección',
    webrtcLeak: 'Se ve otra dirección: {ip}',
    webrtcOff: 'No disponible en este navegador',
    tzSame: 'Coincide con la IP',
    tzDifferent: 'Dispositivo: {device}, IP: {ip}',
    blacklistClean: 'No aparece ({n} comprobadas)',
    blacklistListed: 'Aparece en {n}',
  },
  cta: 'Protege tu conexión con FollowNet',
  dnsNote: 'Un navegador no puede comprobar fugas de DNS con fiabilidad, así que esta página no lo promete. La app de FollowNet hace esa prueba a través del túnel.',
  storedNote: 'No guardamos los resultados. IPv6 se consulta con ipify y WebRTC con un servidor STUN de Cloudflare, directamente desde tu navegador.',
  aboutTitle: 'Qué le dice tu IP a un sitio web',
  about: [
    'Cada sitio que abres recibe tu dirección IP. Suele mostrar tu país, ciudad y proveedor, y los sitios la usan para estadísticas, contenido regional y prevención de fraude.',
    'Una VPN cifra el tráfico entre tu dispositivo y el servidor VPN, y los sitios ven la dirección de ese servidor. No te hace invisible: las cookies, las cuentas y la huella del navegador siguen identificándote.',
  ],
  faqTitle: 'Preguntas',
  faq: [
    { q: '¿Cómo encuentro mi dirección IP?', a: 'Abre esta página. La dirección de arriba es la IP pública que los sitios ven en tu conexión.' },
    { q: '¿Qué es una fuga de WebRTC?', a: 'WebRTC permite a los navegadores conectarse directamente para llamadas. Puede mostrar una dirección distinta a la de tu VPN. Esta página compara las direcciones del navegador con tu IP pública.' },
    { q: '¿Qué es una fuga de IPv6?', a: 'Si tu red tiene IPv6 pero tu VPN solo cubre IPv4, los sitios con IPv6 pueden ver tu dirección real. Si aquí aparece IPv6 con la VPN activa, compárala con la de tu proveedor.' },
    { q: '¿Por qué mi ubicación es incorrecta?', a: 'La ubicación por IP viene de bases de datos y muestra dónde registró el proveedor la dirección. Suele ser precisa solo a nivel de ciudad o región.' },
    { q: '¿Esta página guarda mi IP?', a: 'No. El resultado se calcula para esta solicitud y no se guarda.' },
  ],
};

const fr: IpCheckCopy = {
  kicker: 'Outil gratuit',
  h1: 'Quelle est mon adresse IP ?',
  lead: 'Voyez l’adresse IP, la localisation et le fournisseur que les sites voient en ce moment, et testez les fuites WebRTC et IPv6 dans votre navigateur.',
  checking: 'Vérification de votre connexion…',
  failed: 'La vérification n’a pas abouti. Veuillez réessayer.',
  retry: 'Vérifier à nouveau',
  copy: 'Copier',
  copied: 'Copié',
  verdictOurs: 'Vous êtes connecté via FollowNet VPN. Les sites voient notre serveur, pas votre adresse.',
  verdictExposed: 'Les sites voient cette adresse et le fournisseur ci-dessous.',
  rows: {
    ip: 'Adresse IP',
    location: 'Localisation',
    isp: 'Fournisseur',
    ipv6: 'IPv6',
    webrtc: 'WebRTC',
    timezone: 'Fuseau horaire',
    blacklist: 'Listes noires',
  },
  values: {
    none: 'Non détecté',
    unknown: 'Inconnu',
    webrtcClean: 'Aucune autre adresse visible',
    webrtcLeak: 'Une autre adresse est visible : {ip}',
    webrtcOff: 'Indisponible dans ce navigateur',
    tzSame: 'Correspond à l’IP',
    tzDifferent: 'Appareil : {device}, IP : {ip}',
    blacklistClean: 'Non listée ({n} vérifiées)',
    blacklistListed: 'Listée dans {n}',
  },
  cta: 'Protéger votre connexion avec FollowNet',
  dnsNote: 'Un navigateur ne peut pas tester les fuites DNS de façon fiable, cette page ne le promet donc pas. L’app FollowNet effectue ce test via le tunnel.',
  storedNote: 'Nous ne conservons pas les résultats. L’IPv6 est lue via ipify et WebRTC via un serveur STUN Cloudflare, directement depuis votre navigateur.',
  aboutTitle: 'Ce que votre adresse IP dit à un site',
  about: [
    'Chaque site reçoit votre adresse IP. Elle indique en général votre pays, votre ville et votre fournisseur, et les sites s’en servent pour les statistiques, le contenu régional et la lutte contre la fraude.',
    'Un VPN chiffre le trafic entre votre appareil et le serveur VPN, et les sites voient l’adresse de ce serveur. Il ne vous rend pas invisible : les cookies, les comptes et l’empreinte du navigateur vous identifient toujours.',
  ],
  faqTitle: 'Questions',
  faq: [
    { q: 'Comment trouver mon adresse IP ?', a: 'Ouvrez cette page. L’adresse en haut est l’IP publique que les sites voient pour votre connexion.' },
    { q: 'Qu’est-ce qu’une fuite WebRTC ?', a: 'WebRTC permet aux navigateurs de se connecter directement pour les appels. Il peut révéler une adresse différente de celle de votre VPN. Cette page compare les adresses du navigateur à votre IP publique.' },
    { q: 'Qu’est-ce qu’une fuite IPv6 ?', a: 'Si votre réseau a l’IPv6 mais que votre VPN ne couvre que l’IPv4, les sites en IPv6 peuvent voir votre vraie adresse. Si l’IPv6 apparaît ici avec le VPN actif, comparez-la à celle de votre fournisseur.' },
    { q: 'Pourquoi ma localisation est-elle fausse ?', a: 'La localisation par IP vient de bases de données et indique où le fournisseur a enregistré l’adresse. Elle n’est souvent précise qu’à la ville ou à la région.' },
    { q: 'Cette page enregistre-t-elle mon IP ?', a: 'Non. Le résultat est calculé pour cette requête et n’est pas conservé.' },
  ],
};

const pt: IpCheckCopy = {
  kicker: 'Ferramenta gratuita',
  h1: 'Qual é o meu endereço IP?',
  lead: 'Veja qual endereço IP, localização e provedor os sites veem agora e teste vazamentos de WebRTC e IPv6 no navegador.',
  checking: 'Verificando sua conexão…',
  failed: 'A verificação não terminou. Tente novamente.',
  retry: 'Verificar novamente',
  copy: 'Copiar',
  copied: 'Copiado',
  verdictOurs: 'Você está conectado pela FollowNet VPN. Os sites veem nosso servidor, não o seu endereço.',
  verdictExposed: 'Os sites veem este endereço e o provedor abaixo.',
  rows: {
    ip: 'Endereço IP',
    location: 'Localização',
    isp: 'Provedor',
    ipv6: 'IPv6',
    webrtc: 'WebRTC',
    timezone: 'Fuso horário',
    blacklist: 'Listas negras',
  },
  values: {
    none: 'Não detectado',
    unknown: 'Desconhecido',
    webrtcClean: 'Nenhum outro endereço visível',
    webrtcLeak: 'Outro endereço está visível: {ip}',
    webrtcOff: 'Indisponível neste navegador',
    tzSame: 'Coincide com o IP',
    tzDifferent: 'Dispositivo: {device}, IP: {ip}',
    blacklistClean: 'Não listado ({n} verificadas)',
    blacklistListed: 'Listado em {n}',
  },
  cta: 'Proteja sua conexão com a FollowNet',
  dnsNote: 'Um navegador não consegue testar vazamentos de DNS com confiabilidade, então esta página não promete isso. O app FollowNet faz esse teste pelo túnel.',
  storedNote: 'Não guardamos os resultados. O IPv6 é lido pelo ipify e o WebRTC por um servidor STUN da Cloudflare, diretamente do seu navegador.',
  aboutTitle: 'O que seu IP informa a um site',
  about: [
    'Todo site que você abre recebe seu endereço IP. Ele costuma mostrar país, cidade e provedor, e os sites o usam para estatísticas, conteúdo regional e prevenção de fraudes.',
    'Uma VPN criptografa o tráfego entre seu dispositivo e o servidor VPN, e os sites veem o endereço desse servidor. Ela não torna você invisível: cookies, contas e a impressão digital do navegador ainda identificam você.',
  ],
  faqTitle: 'Perguntas',
  faq: [
    { q: 'Como descubro meu endereço IP?', a: 'Abra esta página. O endereço no topo é o IP público que os sites veem na sua conexão.' },
    { q: 'O que é um vazamento de WebRTC?', a: 'O WebRTC permite que navegadores se conectem diretamente para chamadas. Ele pode revelar um endereço diferente do da sua VPN. Esta página compara os endereços do navegador com seu IP público.' },
    { q: 'O que é um vazamento de IPv6?', a: 'Se sua rede tem IPv6, mas a VPN cobre só IPv4, sites com IPv6 podem ver seu endereço real. Se o IPv6 aparecer aqui com a VPN ligada, compare-o com o do seu provedor.' },
    { q: 'Por que minha localização está errada?', a: 'A localização por IP vem de bancos de dados e mostra onde o provedor registrou o endereço. Costuma ser precisa só no nível de cidade ou região.' },
    { q: 'Esta página guarda meu IP?', a: 'Não. O resultado é calculado para esta solicitação e não é guardado.' },
  ],
};

export const IP_CHECK_COPY: Record<AppLang, IpCheckCopy> = { en, ru, uk, de, es, fr, pt };
