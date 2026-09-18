import type { AppLang } from './i18n.service';

/** Substantive FollowNet product posts (not SEO micro-filler). */
type SeedLang = {
  title: string;
  excerpt: string;
  sections: { title: string; body: string }[];
};

type SeoPair = { title: string; excerpt: string };

type ExtraTopic = 'product' | 'updates' | 'guides';

type ExtraSeed = {
  slug: string;
  date: string;
  minutes: number;
  topic: ExtraTopic;
  seed: Record<AppLang, SeedLang>;
};

export type ExtraBlogPostMeta = {
  slug: string;
  date: string;
  minutes: number;
  topic: ExtraTopic;
  translations: Record<AppLang, SeedLang>;
};

function expand(meta: ExtraSeed): ExtraBlogPostMeta {
  const translations = {} as ExtraBlogPostMeta['translations'];
  (Object.keys(meta.seed) as AppLang[]).forEach((lang) => {
    translations[lang] = meta.seed[lang];
  });
  return {
    slug: meta.slug,
    date: meta.date,
    minutes: meta.minutes,
    topic: meta.topic,
    translations,
  };
}

const EXTRA_SEEDS: ExtraSeed[] = [
  {
    slug: 'smart-connect-vless-reality',
    date: '2026-09-10',
    minutes: 8,
    topic: 'product',
    seed: {
      en: {
        title: 'Smart Connect + VLESS Reality: how FollowNet recovers on hard networks',
        excerpt: 'Not a magic invisibility cloak — a real fallback chain with egress checks, so “Connected” means traffic actually works.',
        sections: [
          {
            title: 'What Smart Connect actually does',
            body: 'When Protocol is on Smart, FollowNet asks the backend for network context (geo / ISP hints when available), then picks a starting tunnel among Hysteria2, VLESS Reality, AmneziaWG, WireGuard, and IKEv2. If geo is missing, it prefers obfuscated stacks first — not IKEv2 as a first guess on hostile mobile networks.',
          },
          {
            title: 'The fallback theater you see',
            body: 'On a tough path the UI can step through candidates roughly as Hysteria2 → VLESS → AmneziaWG → WireGuard → IKEv2 (skipping protocols your plan/server list cannot offer). That order is a recovery ladder, not a speed ranking for home fiber.',
          },
          {
            title: 'Why VLESS Reality is in the chain',
            body: 'Some ISPs fingerprint or stall classic WireGuard / even AmneziaWG. VLESS with REALITY-style camouflage is another path when UDP-heavy tunnels look “connected” but do not pass real traffic. FollowNet still verifies egress — a green NE status alone is not enough if the tunnel is a dead fallthrough.',
          },
          {
            title: 'When to lock a protocol manually',
            body: 'If home Wi‑Fi is calm, lock WireGuard and stop paying the cost of probing. If one hotel chain only works on AmneziaWG or VLESS, pin it in Settings → Protocol or save it inside a Network Profile. Use in-app Speed Test after each change — “feels faster” burns Free weekly quota without data.',
          },
          {
            title: 'Honest limits',
            body: 'Smart Connect cannot invent a path through a captive portal you have not completed, a fully dead uplink, or every DPI fingerprint forever. It automates best-effort recovery inside FollowNet’s five-protocol stack on iOS. Chrome on desktop is a separate browser proxy — it does not run this Smart Connect chain.',
          },
        ],
      },
      ru: {
        title: 'Smart Connect и VLESS Reality: как FollowNet выживает на жёстких сетях',
        excerpt: 'Не плащ-невидимка — реальная цепочка fallback с проверкой egress, чтобы «Connected» означал рабочий трафик.',
        sections: [
          {
            title: 'Что Smart Connect делает на самом деле',
            body: 'Когда в Protocol выбран Smart, FollowNet берёт сетевой контекст с бэкенда (geo / подсказки по ISP, если есть) и выбирает стартовый туннель среди Hysteria2, VLESS Reality, AmneziaWG, WireGuard и IKEv2. Без geo сначала предпочитает обфусцированные стеки — не IKEv2 как первый выстрел на жёстком LTE.',
          },
          {
            title: 'Театр fallback, который вы видите',
            body: 'На жёстком канале UI может пройти кандидатов примерно так: Hysteria2 → VLESS → AmneziaWG → WireGuard → IKEv2 (пропуская то, чего нет на серверах вашего тарифа). Это лестница восстановления, а не рейтинг скорости для домашней оптики.',
          },
          {
            title: 'Зачем в цепочке VLESS Reality',
            body: 'Часть операторов давит классический WireGuard и даже AmneziaWG. VLESS с REALITY-камуфляжем — ещё один путь, когда UDP-туннель выглядит Connected, но трафик не идёт. FollowNet проверяет egress: одного зелёного статуса Network Extension мало, если туннель мёртвый fallthrough.',
          },
          {
            title: 'Когда зафиксировать протокол вручную',
            body: 'Если домашний Wi‑Fi спокойный — зафиксируйте WireGuard и не гоняйте probing зря. Если сеть отеля живёт только на AmneziaWG или VLESS — закрепите в Settings → Protocol или в профиле сети. После смены гоняйте Speed Test в приложении: «кажется быстрее» жрёт недельный лимит Free без цифр.',
          },
          {
            title: 'Честные пределы',
            body: 'Smart Connect не откроет captive portal, который вы не прошли, мёртвый uplink или любой DPI навсегда. Он автоматизирует recovery внутри пяти протоколов FollowNet на iOS. Chrome на десктопе — отдельный прокси браузера, эта цепочка Smart Connect там не крутится.',
          },
        ],
      },
      uk: {
        title: 'Smart Connect і VLESS Reality: як FollowNet виживає на жорстких мережах',
        excerpt: 'Не плащ-невидимка — реальний ланцюг fallback із перевіркою egress, щоб «Connected» означав робочий трафік.',
        sections: [
          {
            title: 'Що Smart Connect робить насправді',
            body: 'Коли в Protocol обрано Smart, FollowNet бере мережевий контекст з бекенду і обирає стартовий тунель серед Hysteria2, VLESS Reality, AmneziaWG, WireGuard і IKEv2. Без geo спочатку віддає перевагу обфускованим стекам — не IKEv2 як перший постріл на жорсткому LTE.',
          },
          {
            title: 'Театр fallback, який ви бачите',
            body: 'На жорсткому каналі UI може пройти кандидатів приблизно так: Hysteria2 → VLESS → AmneziaWG → WireGuard → IKEv2 (пропускаючи те, чого немає на серверах тарифу). Це драбина відновлення, а не рейтинг швидкості для домашньої оптики.',
          },
          {
            title: 'Навіщо в ланцюгу VLESS Reality',
            body: 'Частина операторів давить класичний WireGuard і навіть AmneziaWG. VLESS із REALITY-камуфляжем — ще один шлях, коли UDP-тунель виглядає Connected, але трафік не йде. FollowNet перевіряє egress: одного зеленого статусу Network Extension мало, якщо тунель мертвий fallthrough.',
          },
          {
            title: 'Коли зафіксувати протокол вручну',
            body: 'Якщо домашній Wi‑Fi спокійний — зафіксуйте WireGuard і не ганяйте probing дарма. Якщо мережа готелю живе лише на AmneziaWG чи VLESS — закріпіть у Settings → Protocol або в профілі мережі. Після зміни ганяйте Speed Test у застосунку.',
          },
          {
            title: 'Чесні межі',
            body: 'Smart Connect не відкриє captive portal, який ви не пройшли, мертвий uplink чи будь-який DPI назавжди. Він автоматизує recovery всередині п’яти протоколів FollowNet на iOS. Chrome на десктопі — окремий проксі браузера.',
          },
        ],
      },
      de: {
        title: 'Smart Connect + VLESS Reality: so erholt sich FollowNet auf harten Netzen',
        excerpt: 'Kein magischer Unsichtbarkeitsmantel — eine echte Fallback-Kette mit Egress-Checks, damit „Connected“ wirklich funktionierenden Traffic bedeutet.',
        sections: [
          {
            title: 'Was Smart Connect wirklich macht',
            body: 'Wenn Protocol auf Smart steht, holt FollowNet vom Backend den Netzwerkkontext (Geo / ISP-Hinweise, falls verfügbar) und wählt einen Starttunnel unter Hysteria2, VLESS Reality, AmneziaWG, WireGuard und IKEv2. Fehlt Geo, priorisiert es zuerst obfuskierte Stacks — nicht IKEv2 als ersten Versuch auf feindlichen Mobilnetzen.',
          },
          {
            title: 'Das Fallback-Theater, das Sie sehen',
            body: 'Auf einem schwierigen Pfad kann die UI die Kandidaten grob so durchlaufen: Hysteria2 → VLESS → AmneziaWG → WireGuard → IKEv2 (Protokolle, die Ihr Tarif/Serverliste nicht anbieten kann, werden übersprungen). Diese Reihenfolge ist eine Recovery-Leiter, kein Geschwindigkeitsranking für Glasfaser zu Hause.',
          },
          {
            title: 'Warum VLESS Reality in der Kette steckt',
            body: 'Manche ISPs fingerprinten oder bremsen klassischen WireGuard / sogar AmneziaWG. VLESS mit REALITY-ähnlicher Tarnung ist ein weiterer Pfad, wenn UDP-lastige Tunnel „verbunden“ wirken, aber keinen echten Traffic durchlassen. FollowNet prüft weiterhin den Egress — ein grüner NE-Status allein reicht nicht, wenn der Tunnel nur ein toter Fallthrough ist.',
          },
          {
            title: 'Wann Sie ein Protokoll manuell festnageln',
            body: 'Wenn das Heim-Wi‑Fi ruhig ist, sperren Sie WireGuard und sparen Sie die Kosten des Probings. Funktioniert eine Hotelkette nur mit AmneziaWG oder VLESS, pinnen Sie es unter Settings → Protocol oder speichern Sie es in einem Network Profile. Nutzen Sie nach jeder Änderung den Speed Test in der App — „fühlt sich schneller an“ verbrennt Free-Wochenkontingent ohne Zahlen.',
          },
          {
            title: 'Ehrliche Grenzen',
            body: 'Smart Connect erfindet keinen Weg durch ein Captive Portal, das Sie nicht abgeschlossen haben, eine völlig tote Uplink-Strecke oder jedes DPI-Fingerprint für immer. Es automatisiert Best-Effort-Recovery innerhalb des Fünf-Protokoll-Stacks von FollowNet auf iOS. Chrome auf dem Desktop ist ein separater Browser-Proxy — diese Smart-Connect-Kette läuft dort nicht.',
          },
        ],
      },
      es: {
        title: 'Smart Connect + VLESS Reality: cómo FollowNet se recupera en redes difíciles',
        excerpt: 'No es una capa de invisibilidad mágica: es una cadena real de fallback con comprobaciones de egress, para que «Connected» signifique tráfico que de verdad funciona.',
        sections: [
          {
            title: 'Qué hace Smart Connect de verdad',
            body: 'Cuando Protocol está en Smart, FollowNet pide al backend el contexto de red (geo / pistas de ISP si hay) y elige un túnel inicial entre Hysteria2, VLESS Reality, AmneziaWG, WireGuard e IKEv2. Sin geo, prioriza primero stacks ofuscados — no IKEv2 como primer intento en móviles hostiles.',
          },
          {
            title: 'El teatro de fallback que ves',
            body: 'En un camino duro la UI puede recorrer candidatos aproximadamente así: Hysteria2 → VLESS → AmneziaWG → WireGuard → IKEv2 (saltando protocolos que tu plan/lista de servidores no ofrece). Ese orden es una escalera de recuperación, no un ranking de velocidad para fibra en casa.',
          },
          {
            title: 'Por qué VLESS Reality está en la cadena',
            body: 'Algunos ISP fingerprintan o frenan WireGuard clásico / incluso AmneziaWG. VLESS con camuflaje tipo REALITY es otra vía cuando túneles muy UDP parecen «conectados» pero no pasan tráfico real. FollowNet sigue verificando egress: un NE en verde no basta si el túnel es un fallthrough muerto.',
          },
          {
            title: 'Cuándo fijar un protocolo a mano',
            body: 'Si el Wi‑Fi de casa está tranquilo, fija WireGuard y deja de pagar el coste del probing. Si una cadena hotelera solo funciona con AmneziaWG o VLESS, fíjalo en Settings → Protocol o guárdalo en un Network Profile. Usa Speed Test en la app tras cada cambio: «parece más rápido» quema la cuota semanal Free sin datos.',
          },
          {
            title: 'Límites honestos',
            body: 'Smart Connect no inventa un camino a través de un captive portal incompleto, un uplink muerto del todo, ni cada fingerprint de DPI para siempre. Automatiza recuperación best-effort dentro del stack de cinco protocolos de FollowNet en iOS. Chrome en escritorio es un proxy de navegador aparte: esta cadena de Smart Connect no corre ahí.',
          },
        ],
      },
      fr: {
        title: 'Smart Connect + VLESS Reality : comment FollowNet se rétablit sur les réseaux durs',
        excerpt: 'Pas une cape d’invisibilité magique — une vraie chaîne de fallback avec contrôles d’egress, pour que « Connected » signifie un trafic qui marche vraiment.',
        sections: [
          {
            title: 'Ce que Smart Connect fait vraiment',
            body: 'Quand Protocol est sur Smart, FollowNet demande au backend le contexte réseau (geo / indices ISP si disponibles), puis choisit un tunnel de départ parmi Hysteria2, VLESS Reality, AmneziaWG, WireGuard et IKEv2. Sans geo, il privilégie d’abord les stacks obfuscés — pas IKEv2 en premier essai sur un mobile hostile.',
          },
          {
            title: 'Le théâtre de fallback que vous voyez',
            body: 'Sur un chemin difficile, l’UI peut enchaîner les candidats à peu près ainsi : Hysteria2 → VLESS → AmneziaWG → WireGuard → IKEv2 (en sautant les protocoles que votre forfait / liste de serveurs ne peut pas offrir). Cet ordre est une échelle de récupération, pas un classement de vitesse pour la fibre à la maison.',
          },
          {
            title: 'Pourquoi VLESS Reality est dans la chaîne',
            body: 'Certains FAI fingerprintent ou ralentissent le WireGuard classique / même AmneziaWG. VLESS avec camouflage type REALITY est une autre voie quand des tunnels très UDP semblent « connectés » mais ne laissent pas passer le trafic réel. FollowNet vérifie toujours l’egress — un statut NE vert ne suffit pas si le tunnel est un fallthrough mort.',
          },
          {
            title: 'Quand verrouiller un protocole à la main',
            body: 'Si le Wi‑Fi maison est calme, verrouillez WireGuard et arrêtez de payer le coût du probing. Si une chaîne d’hôtels ne marche qu’avec AmneziaWG ou VLESS, épinglez-le dans Settings → Protocol ou enregistrez-le dans un Network Profile. Lancez Speed Test dans l’app après chaque changement — « ça a l’air plus rapide » brûle le quota Free hebdomadaire sans données.',
          },
          {
            title: 'Limites honnêtes',
            body: 'Smart Connect n’invente pas un chemin à travers un captive portal non terminé, une uplink totalement morte, ni chaque empreinte DPI pour toujours. Il automatise une recovery best-effort dans la pile à cinq protocoles de FollowNet sur iOS. Chrome sur desktop est un proxy navigateur séparé — cette chaîne Smart Connect n’y tourne pas.',
          },
        ],
      },
      pt: {
        title: 'Smart Connect + VLESS Reality: como o FollowNet se recupera em redes difíceis',
        excerpt: 'Não é capa de invisibilidade mágica — é uma cadeia real de fallback com checagens de egress, para que «Connected» signifique tráfego que de fato funciona.',
        sections: [
          {
            title: 'O que o Smart Connect realmente faz',
            body: 'Quando Protocol está em Smart, o FollowNet pede ao backend o contexto de rede (geo / dicas de ISP quando há) e escolhe um túnel inicial entre Hysteria2, VLESS Reality, AmneziaWG, WireGuard e IKEv2. Sem geo, prefere primeiro stacks ofuscados — não IKEv2 como primeiro chute em móveis hostis.',
          },
          {
            title: 'O teatro de fallback que você vê',
            body: 'Num caminho difícil a UI pode percorrer candidatos aproximadamente assim: Hysteria2 → VLESS → AmneziaWG → WireGuard → IKEv2 (pulando protocolos que seu plano/lista de servidores não oferece). Essa ordem é uma escada de recuperação, não um ranking de velocidade para fibra em casa.',
          },
          {
            title: 'Por que VLESS Reality está na cadeia',
            body: 'Alguns ISPs fazem fingerprint ou travam WireGuard clássico / até AmneziaWG. VLESS com camuflagem estilo REALITY é outro caminho quando túneis pesados em UDP parecem «conectados» mas não passam tráfego real. O FollowNet ainda verifica egress — um status NE verde sozinho não basta se o túnel for um fallthrough morto.',
          },
          {
            title: 'Quando travar um protocolo manualmente',
            body: 'Se o Wi‑Fi de casa está calmo, trave WireGuard e pare de pagar o custo do probing. Se uma rede de hotel só funciona com AmneziaWG ou VLESS, fixe em Settings → Protocol ou salve num Network Profile. Use o Speed Test no app após cada mudança — «parece mais rápido» queima a cota semanal Free sem dados.',
          },
          {
            title: 'Limites honestos',
            body: 'Smart Connect não inventa um caminho por um captive portal incompleto, um uplink totalmente morto, nem cada fingerprint de DPI para sempre. Ele automatiza recovery best-effort dentro do stack de cinco protocolos do FollowNet no iOS. Chrome no desktop é um proxy de navegador separado — esta cadeia Smart Connect não roda lá.',
          },
        ],
      },
    },
  },
  {
    slug: 'network-profiles-four-presets',
    date: '2026-09-11',
    minutes: 7,
    topic: 'product',
    seed: {
      en: {
        title: 'Network Profiles reference: Smart, Public Wi‑Fi, Travel, Restricted',
        excerpt: 'Exact built-in presets in FollowNet for iOS — protocol, DNS, Auto-connect, server mode — plus when to clone a custom profile.',
        sections: [
          {
            title: 'What one profile stores',
            body: 'Settings → Network Profiles packs four knobs: preferred protocol (or Smart), DNS preset, Auto-connect mode, and server mode (Fastest / Last used / Specific). Applying a profile writes those knobs so you do not re-tune four menus every time the SSID changes.',
          },
          {
            title: 'Smart (default)',
            body: 'Protocol: Smart · DNS: System/Default · Auto-connect: Off · Server: Last used. Everyday starting point when you want FollowNet to choose the tunnel and you are fine reconnecting to the last city.',
          },
          {
            title: 'Public Wi‑Fi',
            body: 'Protocol: WireGuard · DNS: Quad9 · Auto-connect: Wi‑Fi Only · Server: Fastest. Built for cafés and airports after the captive portal is done: encrypt on Wi‑Fi, prefer a low-latency server, use a privacy-leaning resolver.',
          },
          {
            title: 'Travel',
            body: 'Protocol: IKEv2 · DNS: Cloudflare · Auto-connect: Always · Server: Fastest. Tuned for roaming and handoffs between LTE and hotel Wi‑Fi — boring reliability over novelty protocols.',
          },
          {
            title: 'Restricted + custom',
            body: 'Restricted keeps Protocol on Smart, DNS Quad9, Auto-connect Always, Server Fastest — for DPI-shaped networks where you want Smart Connect’s full ladder (including Hysteria2 / VLESS / AmneziaWG) without babysitting. Clone a custom profile when a specific hotel only works on, say, AmneziaWG + Cloudflare + Specific city.',
          },
        ],
      },
      ru: {
        title: 'Справка по профилям сети: Smart, Public Wi‑Fi, Travel, Restricted',
        excerpt: 'Точные встроенные пресеты FollowNet на iOS — протокол, DNS, автоподключение, режим сервера — и когда клонировать свой профиль.',
        sections: [
          {
            title: 'Что хранит один профиль',
            body: 'Настройки → Профили сети собирают четыре ручки: протокол (или Smart), DNS, автоподключение и режим сервера (Самый быстрый / Последний / Конкретный). Применение профиля пишет все четыре — не надо крутить меню заново при смене SSID.',
          },
          {
            title: 'Smart (дефолт)',
            body: 'Протокол: Smart · DNS: System/Default · Автоподключение: Выкл · Сервер: Последний. Повседневная точка входа: пусть приложение выбирает туннель, а город — последний использованный.',
          },
          {
            title: 'Public Wi‑Fi',
            body: 'Протокол: WireGuard · DNS: Quad9 · Автоподключение: только Wi‑Fi · Сервер: Самый быстрый. Для кафе и аэропортов после captive portal: шифрование на Wi‑Fi, ближайший сервер, DNS с уклоном в приватность.',
          },
          {
            title: 'Travel',
            body: 'Протокол: IKEv2 · DNS: Cloudflare · Автоподключение: Всегда · Сервер: Самый быстрый. Под роуминг и скачки LTE ↔ Wi‑Fi отеля — скучная надёжность важнее «модного» протокола.',
          },
          {
            title: 'Restricted и свои',
            body: 'Restricted: Protocol = Smart, DNS Quad9, автоподключение Всегда, сервер Самый быстрый — для DPI-сетей, где нужна вся лестница Smart Connect (Hysteria2 / VLESS / AmneziaWG) без ручного нянченья. Свой профиль — когда конкретный отель живёт только на AmneziaWG + Cloudflare + конкретный город.',
          },
        ],
      },
      uk: {
        title: 'Довідка з профілів мережі: Smart, Public Wi‑Fi, Travel, Restricted',
        excerpt: 'Точні вбудовані пресети FollowNet на iOS — протокол, DNS, автовмикання, режим сервера — і коли клонувати свій профіль.',
        sections: [
          {
            title: 'Що зберігає один профіль',
            body: 'Налаштування → Профілі мережі збирають чотири ручки: протокол (або Smart), DNS, автовмикання і режим сервера. Застосування профілю пише всі чотири.',
          },
          {
            title: 'Smart (дефолт)',
            body: 'Протокол: Smart · DNS: System/Default · Автовмикання: Вимк · Сервер: Останній. Повсякденна точка входу.',
          },
          {
            title: 'Public Wi‑Fi',
            body: 'Протокол: WireGuard · DNS: Quad9 · Автовмикання: лише Wi‑Fi · Сервер: Найшвидший. Для кафе й аеропортів після captive portal.',
          },
          {
            title: 'Travel',
            body: 'Протокол: IKEv2 · DNS: Cloudflare · Автовмикання: Завжди · Сервер: Найшвидший. Під роумінг і стрибки LTE ↔ Wi‑Fi готелю.',
          },
          {
            title: 'Restricted і свої',
            body: 'Restricted: Protocol = Smart, DNS Quad9, автовмикання Завжди, сервер Найшвидший — для DPI-мереж. Власний профіль — коли конкретний готель живе лише на AmneziaWG + Cloudflare + конкретне місто.',
          },
        ],
      },
      de: {
        title: 'Network Profiles Referenz: Smart, Public Wi‑Fi, Travel, Restricted',
        excerpt: 'Die exakten eingebauten Presets in FollowNet für iOS — Protokoll, DNS, Auto-connect, Servermodus — und wann Sie ein eigenes Profil klonen.',
        sections: [
          {
            title: 'Was ein Profil speichert',
            body: 'Settings → Network Profiles bündelt vier Regler: bevorzugtes Protokoll (oder Smart), DNS-Preset, Auto-connect-Modus und Servermodus (Fastest / Last used / Specific). Ein Profil schreibt diese Regler, damit Sie bei jedem SSID-Wechsel nicht vier Menüs neu justieren.',
          },
          {
            title: 'Smart (Standard)',
            body: 'Protocol: Smart · DNS: System/Default · Auto-connect: Off · Server: Last used. Alltagseinstieg, wenn FollowNet den Tunnel wählen soll und die letzte Stadt in Ordnung ist.',
          },
          {
            title: 'Public Wi‑Fi',
            body: 'Protocol: WireGuard · DNS: Quad9 · Auto-connect: Wi‑Fi Only · Server: Fastest. Für Cafés und Flughäfen nach dem Captive Portal: auf Wi‑Fi verschlüsseln, latenzarmen Server bevorzugen, Resolver mit Privacy-Neigung nutzen.',
          },
          {
            title: 'Travel',
            body: 'Protocol: IKEv2 · DNS: Cloudflare · Auto-connect: Always · Server: Fastest. Abgestimmt auf Roaming und Handoffs zwischen LTE und Hotel-Wi‑Fi — langweilige Zuverlässigkeit vor Mode-Protokollen.',
          },
          {
            title: 'Restricted + eigene Profile',
            body: 'Restricted lässt Protocol auf Smart, DNS Quad9, Auto-connect Always, Server Fastest — für DPI-geprägte Netze, in denen Sie die volle Leiter von Smart Connect (inkl. Hysteria2 / VLESS / AmneziaWG) ohne Babysitting wollen. Klonen Sie ein eigenes Profil, wenn ein bestimmtes Hotel nur mit z. B. AmneziaWG + Cloudflare + Specific city läuft.',
          },
        ],
      },
      es: {
        title: 'Referencia de Network Profiles: Smart, Public Wi‑Fi, Travel, Restricted',
        excerpt: 'Los presets integrados exactos de FollowNet en iOS — protocolo, DNS, Auto-connect, modo de servidor — y cuándo clonar un perfil propio.',
        sections: [
          {
            title: 'Qué guarda un perfil',
            body: 'Settings → Network Profiles agrupa cuatro controles: protocolo preferido (o Smart), preset DNS, modo Auto-connect y modo de servidor (Fastest / Last used / Specific). Aplicar un perfil escribe esos controles para no retocar cuatro menús cada vez que cambia el SSID.',
          },
          {
            title: 'Smart (predeterminado)',
            body: 'Protocol: Smart · DNS: System/Default · Auto-connect: Off · Server: Last used. Punto de partida diario cuando quieres que FollowNet elija el túnel y te vale reconectar a la última ciudad.',
          },
          {
            title: 'Public Wi‑Fi',
            body: 'Protocol: WireGuard · DNS: Quad9 · Auto-connect: Wi‑Fi Only · Server: Fastest. Pensado para cafés y aeropuertos tras el captive portal: cifrar en Wi‑Fi, preferir un servidor de baja latencia, usar un resolver con sesgo de privacidad.',
          },
          {
            title: 'Travel',
            body: 'Protocol: IKEv2 · DNS: Cloudflare · Auto-connect: Always · Server: Fastest. Ajustado a roaming y handoffs entre LTE y Wi‑Fi de hotel — fiabilidad aburrida por delante de protocolos de moda.',
          },
          {
            title: 'Restricted + personalizados',
            body: 'Restricted deja Protocol en Smart, DNS Quad9, Auto-connect Always, Server Fastest — para redes con forma de DPI donde quieres la escalera completa de Smart Connect (incl. Hysteria2 / VLESS / AmneziaWG) sin cuidarlo a mano. Clona un perfil propio cuando un hotel concreto solo funciona con, digamos, AmneziaWG + Cloudflare + Specific city.',
          },
        ],
      },
      fr: {
        title: 'Référence Network Profiles : Smart, Public Wi‑Fi, Travel, Restricted',
        excerpt: 'Les presets intégrés exacts de FollowNet sur iOS — protocole, DNS, Auto-connect, mode serveur — et quand cloner un profil personnalisé.',
        sections: [
          {
            title: 'Ce qu’un profil stocke',
            body: 'Settings → Network Profiles regroupe quatre réglages : protocole préféré (ou Smart), preset DNS, mode Auto-connect et mode serveur (Fastest / Last used / Specific). Appliquer un profil écrit ces réglages pour ne pas retoucher quatre menus à chaque changement de SSID.',
          },
          {
            title: 'Smart (par défaut)',
            body: 'Protocol: Smart · DNS: System/Default · Auto-connect: Off · Server: Last used. Point de départ du quotidien quand vous voulez que FollowNet choisisse le tunnel et que la dernière ville vous convient.',
          },
          {
            title: 'Public Wi‑Fi',
            body: 'Protocol: WireGuard · DNS: Quad9 · Auto-connect: Wi‑Fi Only · Server: Fastest. Conçu pour cafés et aéroports après le captive portal : chiffrer sur Wi‑Fi, préférer un serveur à faible latence, utiliser un résolveur orienté confidentialité.',
          },
          {
            title: 'Travel',
            body: 'Protocol: IKEv2 · DNS: Cloudflare · Auto-connect: Always · Server: Fastest. Pensé pour le roaming et les handoffs LTE ↔ Wi‑Fi d’hôtel — la fiabilité ennuyeuse avant les protocoles à la mode.',
          },
          {
            title: 'Restricted + personnalisés',
            body: 'Restricted laisse Protocol sur Smart, DNS Quad9, Auto-connect Always, Server Fastest — pour les réseaux façonnés par le DPI où vous voulez toute l’échelle Smart Connect (dont Hysteria2 / VLESS / AmneziaWG) sans babysitting. Clonez un profil perso quand un hôtel précis ne marche qu’avec, disons, AmneziaWG + Cloudflare + Specific city.',
          },
        ],
      },
      pt: {
        title: 'Referência de Network Profiles: Smart, Public Wi‑Fi, Travel, Restricted',
        excerpt: 'Os presets embutidos exatos do FollowNet no iOS — protocolo, DNS, Auto-connect, modo de servidor — e quando clonar um perfil próprio.',
        sections: [
          {
            title: 'O que um perfil guarda',
            body: 'Settings → Network Profiles reúne quatro controles: protocolo preferido (ou Smart), preset DNS, modo Auto-connect e modo de servidor (Fastest / Last used / Specific). Aplicar um perfil grava esses controles para você não reajustar quatro menus a cada mudança de SSID.',
          },
          {
            title: 'Smart (padrão)',
            body: 'Protocol: Smart · DNS: System/Default · Auto-connect: Off · Server: Last used. Ponto de partida do dia a dia quando você quer que o FollowNet escolha o túnel e a última cidade serve.',
          },
          {
            title: 'Public Wi‑Fi',
            body: 'Protocol: WireGuard · DNS: Quad9 · Auto-connect: Wi‑Fi Only · Server: Fastest. Feito para cafés e aeroportos depois do captive portal: criptografar no Wi‑Fi, preferir servidor de baixa latência, usar resolver com viés de privacidade.',
          },
          {
            title: 'Travel',
            body: 'Protocol: IKEv2 · DNS: Cloudflare · Auto-connect: Always · Server: Fastest. Ajustado a roaming e handoffs entre LTE e Wi‑Fi de hotel — confiabilidade chata acima de protocolos da moda.',
          },
          {
            title: 'Restricted + personalizados',
            body: 'Restricted mantém Protocol em Smart, DNS Quad9, Auto-connect Always, Server Fastest — para redes moldadas por DPI em que você quer a escada completa do Smart Connect (incl. Hysteria2 / VLESS / AmneziaWG) sem babysitting. Clone um perfil próprio quando um hotel específico só funciona com, digamos, AmneziaWG + Cloudflare + Specific city.',
          },
        ],
      },
    },
  },
  {
    slug: 'restricted-network-profile',
    date: '2026-09-12',
    minutes: 6,
    topic: 'guides',
    seed: {
      en: {
        title: 'Restricted Network profile: when Smart Connect should stay aggressive',
        excerpt: 'How the fourth built-in preset differs from Travel and Public Wi‑Fi — and when it still will not save a broken portal.',
        sections: [
          {
            title: 'Why Restricted exists',
            body: 'Public Wi‑Fi locks WireGuard. Travel locks IKEv2. Both are sensible defaults — and both can fail on ISP DPI that fingerprints those signatures. Restricted leaves Protocol on Smart so FollowNet can climb Hysteria2, VLESS Reality, AmneziaWG, then WireGuard / IKEv2.',
          },
          {
            title: 'The other knobs',
            body: 'Quad9 DNS, Auto-connect Always, Fastest server. Always means on-demand rules try to keep the tunnel up across Wi‑Fi and LTE. Fastest prefers latency over “last city you toured for fun.”',
          },
          {
            title: 'Field checklist',
            body: '1) Finish captive portal on clear traffic. 2) Apply Restricted. 3) Watch Smart Connect step protocols. 4) Confirm with a real page load and Speed Test. 5) If one protocol wins, clone a custom profile so the next stay is one tap.',
          },
          {
            title: 'What it will not fix',
            body: 'Offline airplane mode, a hotel that blocks all UDP/TLS paths you have, or streaming catalog rules. Restricted is recovery automation — not a unlock guarantee.',
          },
        ],
      },
      ru: {
        title: 'Профиль Restricted Network: когда Smart Connect должен быть агрессивным',
        excerpt: 'Чем четвёртый пресет отличается от Travel и Public Wi‑Fi — и когда он всё равно не спасёт сломанный portal.',
        sections: [
          {
            title: 'Зачем нужен Restricted',
            body: 'Public Wi‑Fi фиксирует WireGuard. Travel — IKEv2. Это разумные дефолты — и оба могут умереть на DPI, который их узнаёт. Restricted оставляет Protocol = Smart, чтобы подняться по Hysteria2, VLESS Reality, AmneziaWG, затем WireGuard / IKEv2.',
          },
          {
            title: 'Остальные ручки',
            body: 'DNS Quad9, автоподключение Всегда, сервер Самый быстрый. Always — on-demand правила тянут туннель на Wi‑Fi и LTE. Fastest — задержка важнее «последнего туристического города».',
          },
          {
            title: 'Полевой чеклист',
            body: '1) Пройдите captive portal без VPN. 2) Примените Restricted. 3) Смотрите, как Smart Connect шагает по протоколам. 4) Проверьте реальной страницей и Speed Test. 5) Если победил один протокол — сохраните свой профиль на следующий заезд.',
          },
          {
            title: 'Что не починит',
            body: 'Офлайн airplane mode, отель без любого UDP/TLS пути из стека, или геокаталог стриминга. Restricted — автоматизация recovery, не гарантия разблокировки.',
          },
        ],
      },
      uk: {
        title: 'Профіль Restricted Network: коли Smart Connect має бути агресивним',
        excerpt: 'Чим четвертий пресет відрізняється від Travel і Public Wi‑Fi — і коли він усе одно не врятує зламаний portal.',
        sections: [
          {
            title: 'Навіщо потрібен Restricted',
            body: 'Public Wi‑Fi фіксує WireGuard. Travel — IKEv2. Restricted лишає Protocol = Smart, щоб піднятися по Hysteria2, VLESS Reality, AmneziaWG, потім WireGuard / IKEv2.',
          },
          {
            title: 'Інші ручки',
            body: 'DNS Quad9, автовмикання Завжди, сервер Найшвидший. Always — on-demand тягне тунель на Wi‑Fi і LTE.',
          },
          {
            title: 'Польовий чекліст',
            body: '1) Пройдіть captive portal без VPN. 2) Застосуйте Restricted. 3) Дивіться кроки Smart Connect. 4) Перевірте реальною сторінкою і Speed Test. 5) Якщо переміг один протокол — збережіть свій профіль.',
          },
          {
            title: 'Що не полагодить',
            body: 'Офлайн airplane mode, готель без будь-якого UDP/TLS шляху зі стека, або геокаталог стрімінгу.',
          },
        ],
      },
      de: {
        title: 'Restricted Network Profil: wann Smart Connect aggressiv bleiben soll',
        excerpt: 'Wie sich das vierte eingebaute Preset von Travel und Public Wi‑Fi unterscheidet — und wann es ein kaputtes Portal trotzdem nicht rettet.',
        sections: [
          {
            title: 'Warum Restricted existiert',
            body: 'Public Wi‑Fi sperrt WireGuard. Travel sperrt IKEv2. Beides sind sinnvolle Defaults — und beides kann an ISP-DPI scheitern, das diese Signaturen fingerprintet. Restricted lässt Protocol auf Smart, damit FollowNet Hysteria2, VLESS Reality, AmneziaWG und dann WireGuard / IKEv2 hochklettern kann.',
          },
          {
            title: 'Die anderen Regler',
            body: 'Quad9 DNS, Auto-connect Always, Fastest-Server. Always heißt: On-Demand-Regeln versuchen, den Tunnel über Wi‑Fi und LTE oben zu halten. Fastest bevorzugt Latenz gegenüber „letzter Stadt, die Sie zum Spaß bereist haben“.',
          },
          {
            title: 'Checkliste vor Ort',
            body: '1) Captive Portal auf klarem Traffic abschließen. 2) Restricted anwenden. 3) Smart Connect die Protokolle durchgehen lassen. 4) Mit echtem Seitenaufruf und Speed Test bestätigen. 5) Gewinnt ein Protokoll, klonen Sie ein eigenes Profil — der nächste Aufenthalt ist ein Tap.',
          },
          {
            title: 'Was es nicht repariert',
            body: 'Offline-Flugmodus, ein Hotel, das alle UDP/TLS-Pfade Ihres Stacks blockiert, oder Streaming-Katalogregeln. Restricted ist Recovery-Automation — keine Unlock-Garantie.',
          },
        ],
      },
      es: {
        title: 'Perfil Restricted Network: cuándo Smart Connect debe seguir agresivo',
        excerpt: 'Cómo el cuarto preset integrado difiere de Travel y Public Wi‑Fi — y cuándo igual no salva un portal roto.',
        sections: [
          {
            title: 'Por qué existe Restricted',
            body: 'Public Wi‑Fi fija WireGuard. Travel fija IKEv2. Ambos son defaults sensatos — y ambos pueden fallar ante DPI de ISP que fingerprinta esas firmas. Restricted deja Protocol en Smart para que FollowNet suba Hysteria2, VLESS Reality, AmneziaWG y luego WireGuard / IKEv2.',
          },
          {
            title: 'Los otros controles',
            body: 'DNS Quad9, Auto-connect Always, servidor Fastest. Always significa que las reglas on-demand intentan mantener el túnel en Wi‑Fi y LTE. Fastest prioriza latencia frente a «la última ciudad que visitaste por gusto».',
          },
          {
            title: 'Checklist de campo',
            body: '1) Termina el captive portal en tráfico limpio. 2) Aplica Restricted. 3) Mira cómo Smart Connect recorre protocolos. 4) Confirma con una página real y Speed Test. 5) Si gana un protocolo, clona un perfil propio para que la próxima estancia sea un toque.',
          },
          {
            title: 'Lo que no arreglará',
            body: 'Modo avión offline, un hotel que bloquea todas las rutas UDP/TLS de tu stack, o reglas de catálogo de streaming. Restricted es automatización de recovery — no una garantía de desbloqueo.',
          },
        ],
      },
      fr: {
        title: 'Profil Restricted Network : quand Smart Connect doit rester agressif',
        excerpt: 'En quoi le quatrième preset intégré diffère de Travel et Public Wi‑Fi — et quand il ne sauvera quand même pas un portal cassé.',
        sections: [
          {
            title: 'Pourquoi Restricted existe',
            body: 'Public Wi‑Fi verrouille WireGuard. Travel verrouille IKEv2. Ce sont des defaults sensés — et les deux peuvent échouer face au DPI d’un FAI qui fingerprint ces signatures. Restricted laisse Protocol sur Smart pour que FollowNet monte Hysteria2, VLESS Reality, AmneziaWG, puis WireGuard / IKEv2.',
          },
          {
            title: 'Les autres réglages',
            body: 'DNS Quad9, Auto-connect Always, serveur Fastest. Always signifie que les règles on-demand tentent de garder le tunnel actif sur Wi‑Fi et LTE. Fastest préfère la latence à « la dernière ville visitée pour le plaisir ».',
          },
          {
            title: 'Checklist terrain',
            body: '1) Terminez le captive portal en trafic clair. 2) Appliquez Restricted. 3) Regardez Smart Connect enchaîner les protocoles. 4) Confirmez avec une vraie page et Speed Test. 5) Si un protocole gagne, clonez un profil perso pour que le prochain séjour soit un tap.',
          },
          {
            title: 'Ce qu’il ne réparera pas',
            body: 'Mode avion offline, un hôtel qui bloque tous les chemins UDP/TLS de votre stack, ou les règles de catalogue streaming. Restricted, c’est de l’automation de recovery — pas une garantie de déblocage.',
          },
        ],
      },
      pt: {
        title: 'Perfil Restricted Network: quando o Smart Connect deve continuar agressivo',
        excerpt: 'Como o quarto preset embutido difere de Travel e Public Wi‑Fi — e quando mesmo assim não salva um portal quebrado.',
        sections: [
          {
            title: 'Por que Restricted existe',
            body: 'Public Wi‑Fi trava WireGuard. Travel trava IKEv2. Ambos são defaults sensatos — e ambos podem falhar em DPI de ISP que faz fingerprint dessas assinaturas. Restricted deixa Protocol em Smart para o FollowNet subir Hysteria2, VLESS Reality, AmneziaWG e depois WireGuard / IKEv2.',
          },
          {
            title: 'Os outros controles',
            body: 'DNS Quad9, Auto-connect Always, servidor Fastest. Always significa que regras on-demand tentam manter o túnel no Wi‑Fi e no LTE. Fastest prefere latência a «a última cidade que você visitou por diversão».',
          },
          {
            title: 'Checklist de campo',
            body: '1) Conclua o captive portal em tráfego limpo. 2) Aplique Restricted. 3) Veja o Smart Connect percorrer protocolos. 4) Confirme com uma página real e Speed Test. 5) Se um protocolo vencer, clone um perfil próprio para a próxima estadia ser um toque.',
          },
          {
            title: 'O que não vai consertar',
            body: 'Modo avião offline, um hotel que bloqueia todos os caminhos UDP/TLS do seu stack, ou regras de catálogo de streaming. Restricted é automação de recovery — não garantia de desbloqueio.',
          },
        ],
      },
    },
  },
  {
    slug: 'vpn-control-widget',
    date: '2026-09-13',
    minutes: 6,
    topic: 'product',
    seed: {
      en: {
        title: 'FollowNet VPN Control widget: status and connect without opening the app',
        excerpt: 'What the Home Screen / Control-style widget shows, how it talks to the tunnel, and the states that need the full app.',
        sections: [
          {
            title: 'What you get at a glance',
            body: 'The FollowNet widget is built for the one-tap habit: connection state, useful session context (country / timer / ping when available), and a control path that can start or stop the VPN without hunting the app icon.',
          },
          {
            title: 'How it stays in sync',
            body: 'iOS widgets and the Network Extension share App Group state. That is why the timer can survive when you connected from the widget, and why Settings / Control Center disconnects need careful latching so the UI does not fight itself.',
          },
          {
            title: 'States that bounce you to the app',
            body: 'Needs login, Free weekly quota blocked, or a permission / profile install that only the full app can finish. The widget will not invent an account or raise the traffic ceiling.',
          },
          {
            title: 'Pair with Auto-connect and Shortcuts',
            body: 'Widget taps are intentional. Auto-connect still covers on-demand Wi‑Fi / LTE rules. Apple Shortcuts (Connect / Disconnect / Apply Profile) sit beside the widget for Focus modes and NFC tags.',
          },
        ],
      },
      ru: {
        title: 'Виджет VPN Control FollowNet: статус и подключение без открытия приложения',
        excerpt: 'Что показывает виджет, как он связан с туннелем и какие состояния требуют полного приложения.',
        sections: [
          {
            title: 'Что видно с первого взгляда',
            body: 'Виджет заточен под привычку «один тап»: состояние соединения, контекст сессии (страна / таймер / пинг, когда доступны) и путь управления — включить или выключить VPN, не ища иконку приложения.',
          },
          {
            title: 'Как он синхронизируется',
            body: 'Виджеты iOS и Network Extension делят состояние через App Group. Поэтому таймер живёт, если подключились с виджета, а отключение из Настроек / Пункта управления аккуратно «защёлкивается», чтобы UI не дрался сам с собой.',
          },
          {
            title: 'Когда кинет в приложение',
            body: 'Нужен логин, упёрлись в недельный лимит Free, или iOS просит поставить VPN-профиль — это только полное приложение. Виджет не создаст аккаунт и не поднимет потолок трафика.',
          },
          {
            title: 'Связка с автоподключением и Командами',
            body: 'Тап по виджету — осознанный жест. Автоподключение закрывает on-demand Wi‑Fi / LTE. Команды Apple (Подключить / Отключить / Применить профиль) — рядом для Фокуса и NFC.',
          },
        ],
      },
      uk: {
        title: 'Віджет VPN Control FollowNet: статус і підключення без відкриття застосунку',
        excerpt: 'Що показує віджет, як він пов’язаний із тунелем і які стани потребують повного застосунку.',
        sections: [
          {
            title: 'Що видно з першого погляду',
            body: 'Віджет заточений під звичку «один тап»: стан з’єднання, контекст сесії та шлях керування без пошуку іконки застосунку.',
          },
          {
            title: 'Як він синхронізується',
            body: 'Віджети iOS і Network Extension ділять стан через App Group. Тому таймер живе після підключення з віджета.',
          },
          {
            title: 'Коли кине в застосунок',
            body: 'Потрібен логін, вперлися в тижневий ліміт Free, або iOS просить VPN-профіль — лише повний застосунок.',
          },
          {
            title: 'Зв’язка з автовмиканням і Командами',
            body: 'Тап по віджету — свідомий жест. Автовмикання закриває on-demand. Команди Apple — поруч для Фокусу і NFC.',
          },
        ],
      },
      de: {
        title: 'FollowNet VPN Control Widget: Status und Connect ohne die App zu öffnen',
        excerpt: 'Was das Home-Screen- / Control-Widget zeigt, wie es mit dem Tunnel spricht und welche Zustände die volle App brauchen.',
        sections: [
          {
            title: 'Was Sie auf einen Blick sehen',
            body: 'Das FollowNet-Widget ist für die One-Tap-Gewohnheit gebaut: Verbindungsstatus, nützlicher Session-Kontext (Land / Timer / Ping wenn verfügbar) und ein Steuerweg, der VPN starten oder stoppen kann, ohne das App-Icon zu suchen.',
          },
          {
            title: 'Wie es synchron bleibt',
            body: 'iOS-Widgets und die Network Extension teilen App-Group-Zustand. Deshalb kann der Timer überleben, wenn Sie vom Widget verbunden haben — und deshalb brauchen Disconnects aus Settings / Control Center sorgfältiges Latchen, damit die UI nicht mit sich selbst kämpft.',
          },
          {
            title: 'Zustände, die Sie in die App schicken',
            body: 'Login nötig, Free-Wochenkontingent blockiert, oder eine Berechtigung / Profilinstallation, die nur die volle App abschließen kann. Das Widget erfindet kein Konto und hebt die Traffic-Decke nicht an.',
          },
          {
            title: 'Kombinieren mit Auto-connect und Shortcuts',
            body: 'Widget-Taps sind absichtlich. Auto-connect deckt weiter On-Demand-Wi‑Fi- / LTE-Regeln ab. Apple Shortcuts (Connect / Disconnect / Apply Profile) sitzen neben dem Widget für Fokusmodi und NFC-Tags.',
          },
        ],
      },
      es: {
        title: 'Widget VPN Control de FollowNet: estado y conexión sin abrir la app',
        excerpt: 'Qué muestra el widget de Home Screen / Control, cómo habla con el túnel y qué estados requieren la app completa.',
        sections: [
          {
            title: 'Qué ves de un vistazo',
            body: 'El widget de FollowNet está hecho para el hábito de un toque: estado de conexión, contexto útil de sesión (país / temporizador / ping cuando hay) y un control que puede iniciar o detener el VPN sin buscar el icono de la app.',
          },
          {
            title: 'Cómo se mantiene en sync',
            body: 'Los widgets de iOS y la Network Extension comparten estado vía App Group. Por eso el temporizador puede sobrevivir si te conectaste desde el widget, y por eso los disconnects de Settings / Control Center necesitan un latch cuidadoso para que la UI no pelee consigo misma.',
          },
          {
            title: 'Estados que te mandan a la app',
            body: 'Hace falta login, la cuota semanal Free está bloqueada, o un permiso / instalación de perfil que solo la app completa puede terminar. El widget no inventa una cuenta ni sube el techo de tráfico.',
          },
          {
            title: 'Combinarlo con Auto-connect y Shortcuts',
            body: 'Los toques al widget son intencionales. Auto-connect sigue cubriendo reglas on-demand de Wi‑Fi / LTE. Apple Shortcuts (Connect / Disconnect / Apply Profile) van junto al widget para modos Focus y etiquetas NFC.',
          },
        ],
      },
      fr: {
        title: 'Widget VPN Control FollowNet : statut et connexion sans ouvrir l’app',
        excerpt: 'Ce que montre le widget Home Screen / Control, comment il parle au tunnel, et les états qui exigent l’app complète.',
        sections: [
          {
            title: 'Ce que vous voyez d’un coup d’œil',
            body: 'Le widget FollowNet est conçu pour l’habitude one-tap : état de connexion, contexte de session utile (pays / minuteur / ping quand disponible) et un contrôle qui peut démarrer ou arrêter le VPN sans chercher l’icône de l’app.',
          },
          {
            title: 'Comment il reste synchronisé',
            body: 'Les widgets iOS et la Network Extension partagent l’état via App Group. C’est pourquoi le minuteur peut survivre si vous vous êtes connecté depuis le widget, et pourquoi les déconnexions depuis Settings / Control Center demandent un latch soigneux pour que l’UI ne se batte pas contre elle-même.',
          },
          {
            title: 'Les états qui vous renvoient à l’app',
            body: 'Login requis, quota Free hebdomadaire bloqué, ou une permission / installation de profil que seule l’app complète peut finir. Le widget n’invente pas de compte et n’élève pas le plafond de trafic.',
          },
          {
            title: 'Associer Auto-connect et Shortcuts',
            body: 'Les taps sur le widget sont intentionnels. Auto-connect couvre toujours les règles on-demand Wi‑Fi / LTE. Apple Shortcuts (Connect / Disconnect / Apply Profile) côtoient le widget pour les modes Focus et les tags NFC.',
          },
        ],
      },
      pt: {
        title: 'Widget VPN Control do FollowNet: status e conexão sem abrir o app',
        excerpt: 'O que o widget de Home Screen / Control mostra, como fala com o túnel e quais estados precisam do app completo.',
        sections: [
          {
            title: 'O que você vê de relance',
            body: 'O widget do FollowNet é feito para o hábito de um toque: estado da conexão, contexto útil da sessão (país / timer / ping quando disponível) e um controle que pode iniciar ou parar o VPN sem procurar o ícone do app.',
          },
          {
            title: 'Como ele fica em sync',
            body: 'Widgets do iOS e a Network Extension compartilham estado via App Group. Por isso o timer pode sobreviver se você conectou pelo widget, e por isso disconnects de Settings / Control Center precisam de latch cuidadoso para a UI não brigar consigo mesma.',
          },
          {
            title: 'Estados que te mandam para o app',
            body: 'Precisa de login, cota semanal Free bloqueada, ou uma permissão / instalação de perfil que só o app completo conclui. O widget não inventa conta nem sobe o teto de tráfego.',
          },
          {
            title: 'Combinar com Auto-connect e Shortcuts',
            body: 'Toques no widget são intencionais. Auto-connect continua cobrindo regras on-demand de Wi‑Fi / LTE. Apple Shortcuts (Connect / Disconnect / Apply Profile) ficam ao lado do widget para modos Focus e tags NFC.',
          },
        ],
      },
    },
  },
  {
    slug: 'free-weekly-traffic',
    date: '2026-09-14',
    minutes: 7,
    topic: 'guides',
    seed: {
      en: {
        title: 'FollowNet Free weekly traffic: what counts, what resets, what does not',
        excerpt: 'How the Free allowance behaves in the iOS app — including Speed Test, tunnel overhead, and why Premium is capacity not “stronger crypto.”',
        sections: [
          {
            title: 'Free is a real VPN with a meter',
            body: 'FollowNet Free includes the same protocol toolkit as Premium on iOS (Smart Connect, WireGuard, AmneziaWG, Hysteria2, VLESS Reality, IKEv2) inside a weekly traffic allowance shown in the app. The meter is the product honesty layer — not a fake “unlimited forever” banner.',
          },
          {
            title: 'What burns the allowance',
            body: 'Tunnelled bytes count — browsing, video, updates, and in-app Speed Test runs. Protocol handshakes and Smart Connect probes are small but real. If you are near the ceiling, skip recreational speed tests.',
          },
          {
            title: 'When the week resets',
            body: 'The app and account UI show remaining / limit for the current weekly window. Exact megabyte numbers can change with plan config — always trust the in-app meter over an old blog screenshot.',
          },
          {
            title: 'Quota blocked UX',
            body: 'When the allowance is exhausted, connect attempts are blocked and the UI points to Premium. Widgets can surface a quota-blocked state instead of a fake Connected. Upgrading unlocks unlimited traffic, the wider server map, up to five devices, and removes ads — same encryption stack.',
          },
        ],
      },
      ru: {
        title: 'Недельный трафик FollowNet Free: что считается, что сбрасывается, чего нет',
        excerpt: 'Как ведёт себя лимит Free в iOS — включая Speed Test, оверхед туннеля и почему Premium это ёмкость, а не «сильнее шифрование».',
        sections: [
          {
            title: 'Free — настоящий VPN со счётчиком',
            body: 'FollowNet Free на iOS даёт тот же набор протоколов, что и Premium (Smart Connect, WireGuard, AmneziaWG, Hysteria2, VLESS Reality, IKEv2), внутри недельного лимита, который видно в приложении. Счётчик — честность продукта, не баннер «безлимит навсегда».',
          },
          {
            title: 'Что ест лимит',
            body: 'Считаются байты в туннеле — браузинг, видео, обновления и прогоны Speed Test в приложении. Handshake и probing Smart Connect малы, но реальны. Близко к потолку — не гоняйте Speed Test «для интереса».',
          },
          {
            title: 'Когда неделя сбрасывается',
            body: 'В приложении и аккаунте видно остаток / лимит текущего недельного окна. Точные мегабайты могут меняться с конфигом тарифа — верьте счётчику в приложении, а не старому скрину из блога.',
          },
          {
            title: 'UX при упоре в лимит',
            body: 'Когда лимит выбран, подключения блокируются, UI предлагает Premium. Виджет может показать quota-blocked вместо фейкового Connected. Апгрейд даёт безлимит, широкую карту серверов, до пяти устройств и убирает рекламу — стек шифрования тот же.',
          },
        ],
      },
      uk: {
        title: 'Тижневий трафік FollowNet Free: що рахується, що скидається, чого немає',
        excerpt: 'Як поводиться ліміт Free в iOS — включно зі Speed Test, оверхедом тунелю і чому Premium це ємність, а не «сильніше шифрування».',
        sections: [
          {
            title: 'Free — справжній VPN із лічильником',
            body: 'FollowNet Free на iOS дає той самий набір протоколів, що й Premium, всередині тижневого ліміту в застосунку.',
          },
          {
            title: 'Що їсть ліміт',
            body: 'Рахуються байти в тунелі — браузинг, відео, оновлення і Speed Test. Handshake і probing Smart Connect малі, але реальні.',
          },
          {
            title: 'Коли тиждень скидається',
            body: 'У застосунку видно залишок / ліміт поточного тижневого вікна. Точні мегабайти можуть змінюватися — вірте лічильнику в застосунку.',
          },
          {
            title: 'UX при впиранні в ліміт',
            body: 'Коли ліміт вибрано, підключення блокуються, UI пропонує Premium. Віджет може показати quota-blocked замість фейкового Connected.',
          },
        ],
      },
      de: {
        title: 'FollowNet Free Wochenverkehr: was zählt, was zurückgesetzt wird, was nicht',
        excerpt: 'Wie das Free-Kontingent in der iOS-App funktioniert — inklusive Speed Test, Tunnel-Overhead und warum Premium Kapazität ist, nicht „stärkere Krypto“.',
        sections: [
          {
            title: 'Free ist ein echtes VPN mit Zähler',
            body: 'FollowNet Free enthält auf iOS denselben Protokoll-Werkzeugkasten wie Premium (Smart Connect, WireGuard, AmneziaWG, Hysteria2, VLESS Reality, IKEv2) innerhalb eines wöchentlichen Traffic-Kontingents, das in der App angezeigt wird. Der Zähler ist die Ehrlichkeitsschicht des Produkts — kein Fake-Banner „unlimited forever“.',
          },
          {
            title: 'Was das Kontingent verbraucht',
            body: 'Getunnelte Bytes zählen — Surfen, Video, Updates und Speed-Test-Läufe in der App. Protokoll-Handshakes und Smart-Connect-Probes sind klein, aber real. Nahe am Limit: keine Freizeit-Speed-Tests.',
          },
          {
            title: 'Wann die Woche zurücksetzt',
            body: 'App und Account-UI zeigen Remaining / Limit für das aktuelle Wochenfenster. Exakte Megabyte-Zahlen können mit der Tarif-Config wechseln — vertrauen Sie immer dem In-App-Zähler statt einem alten Blog-Screenshot.',
          },
          {
            title: 'UX bei Quota blocked',
            body: 'Ist das Kontingent aufgebraucht, werden Connect-Versuche blockiert und die UI zeigt auf Premium. Widgets können einen quota-blocked-Zustand statt eines Fake-Connected anzeigen. Upgrade freischaltet unlimited Traffic, die breitere Serverkarte, bis zu fünf Geräte und entfernt Ads — gleicher Verschlüsselungsstack.',
          },
        ],
      },
      es: {
        title: 'Tráfico semanal FollowNet Free: qué cuenta, qué se reinicia, qué no',
        excerpt: 'Cómo se comporta la cuota Free en la app iOS — incluido Speed Test, overhead del túnel y por qué Premium es capacidad, no «cripto más fuerte».',
        sections: [
          {
            title: 'Free es un VPN real con medidor',
            body: 'FollowNet Free incluye en iOS el mismo kit de protocolos que Premium (Smart Connect, WireGuard, AmneziaWG, Hysteria2, VLESS Reality, IKEv2) dentro de una cuota semanal de tráfico que se muestra en la app. El medidor es la capa de honestidad del producto — no un banner falso de «unlimited forever».',
          },
          {
            title: 'Qué quema la cuota',
            body: 'Cuentan los bytes tunelizados — navegación, vídeo, actualizaciones y ejecuciones de Speed Test en la app. Handshakes de protocolo y probes de Smart Connect son pequeños pero reales. Cerca del techo, evita speed tests por diversión.',
          },
          {
            title: 'Cuándo se reinicia la semana',
            body: 'La app y la UI de cuenta muestran remaining / limit de la ventana semanal actual. Los megabytes exactos pueden cambiar con la config del plan — confía siempre en el medidor de la app frente a un screenshot viejo del blog.',
          },
          {
            title: 'UX con cuota bloqueada',
            body: 'Cuando se agota la cuota, los intentos de conexión se bloquean y la UI apunta a Premium. Los widgets pueden mostrar un estado quota-blocked en vez de un Connected falso. Actualizar desbloquea tráfico unlimited, el mapa de servidores más amplio, hasta cinco dispositivos y quita ads — mismo stack de cifrado.',
          },
        ],
      },
      fr: {
        title: 'Trafic hebdomadaire FollowNet Free : ce qui compte, ce qui se réinitialise, ce qui ne change pas',
        excerpt: 'Comment fonctionne l’allocation Free dans l’app iOS — Speed Test, overhead du tunnel, et pourquoi Premium c’est de la capacité, pas une « crypto plus forte ».',
        sections: [
          {
            title: 'Free est un vrai VPN avec compteur',
            body: 'FollowNet Free inclut sur iOS le même kit de protocoles que Premium (Smart Connect, WireGuard, AmneziaWG, Hysteria2, VLESS Reality, IKEv2) dans une allocation de trafic hebdomadaire affichée dans l’app. Le compteur est la couche d’honnêteté du produit — pas une bannière fake « unlimited forever ».',
          },
          {
            title: 'Ce qui brûle l’allocation',
            body: 'Les octets tunnelés comptent — navigation, vidéo, mises à jour et runs Speed Test dans l’app. Les handshakes protocole et les probes Smart Connect sont petits mais réels. Près du plafond, sautez les speed tests récréatifs.',
          },
          {
            title: 'Quand la semaine se réinitialise',
            body: 'L’app et l’UI compte montrent remaining / limit pour la fenêtre hebdomadaire en cours. Les mégaoctets exacts peuvent changer avec la config du forfait — faites toujours confiance au compteur in-app plutôt qu’à une vieille capture du blog.',
          },
          {
            title: 'UX quota blocked',
            body: 'Quand l’allocation est épuisée, les tentatives de connexion sont bloquées et l’UI pointe vers Premium. Les widgets peuvent afficher un état quota-blocked au lieu d’un Connected factice. L’upgrade débloque le trafic unlimited, la carte serveurs plus large, jusqu’à cinq appareils et retire les ads — même stack de chiffrement.',
          },
        ],
      },
      pt: {
        title: 'Tráfego semanal FollowNet Free: o que conta, o que reseta, o que não',
        excerpt: 'Como a cota Free se comporta no app iOS — incluindo Speed Test, overhead do túnel e por que Premium é capacidade, não «cripto mais forte».',
        sections: [
          {
            title: 'Free é um VPN de verdade com medidor',
            body: 'FollowNet Free inclui no iOS o mesmo kit de protocolos do Premium (Smart Connect, WireGuard, AmneziaWG, Hysteria2, VLESS Reality, IKEv2) dentro de uma cota semanal de tráfego mostrada no app. O medidor é a camada de honestidade do produto — não um banner falso de «unlimited forever».',
          },
          {
            title: 'O que queima a cota',
            body: 'Bytes no túnel contam — navegação, vídeo, atualizações e rodadas de Speed Test no app. Handshakes de protocolo e probes do Smart Connect são pequenos, mas reais. Perto do teto, pule speed tests por diversão.',
          },
          {
            title: 'Quando a semana reseta',
            body: 'O app e a UI da conta mostram remaining / limit da janela semanal atual. Megabytes exatos podem mudar com a config do plano — confie sempre no medidor do app, não num screenshot antigo do blog.',
          },
          {
            title: 'UX com cota bloqueada',
            body: 'Quando a cota acaba, tentativas de conexão são bloqueadas e a UI aponta para Premium. Widgets podem mostrar estado quota-blocked em vez de um Connected falso. O upgrade libera tráfego unlimited, o mapa de servidores mais amplo, até cinco dispositivos e remove ads — mesmo stack de criptografia.',
          },
        ],
      },
    },
  },
  {
    slug: 'premium-devices-seats',
    date: '2026-09-15',
    minutes: 6,
    topic: 'guides',
    seed: {
      en: {
        title: 'Premium’s five devices: iPhone, iPad, and Chrome seats without the chaos',
        excerpt: 'How FollowNet seats work in practice — shared account, shared Free/Premium entitlements, and freeing a forgotten iPad.',
        sections: [
          {
            title: 'One account, multiple endpoints',
            body: 'Premium follows the FollowNet account (email code login), not a single Apple ID. Sign in on iPhone, iPad, and the Chrome extension — they draw from the same plan: unlimited traffic and the Premium server map when entitled.',
          },
          {
            title: 'What usually counts as a seat',
            body: 'Active signed-in sessions on iOS/iPadOS apps and desktop Chrome typically consume seats toward the five-device cap. Exact labels live under account / devices in the app — use that list when you hit the limit.',
          },
          {
            title: 'Freeing a slot',
            body: 'Sign out or remove the stale device, then sign in on the new phone. Do not share one Premium login across a household beyond five endpoints — the sixth will fail loudly instead of silently stealing speed.',
          },
          {
            title: 'Chrome is not a free bonus seat',
            body: 'The extension protects browser traffic only, but a signed-in Chrome still occupies a Premium seat. Log out unused browsers before adding another iPhone.',
          },
        ],
      },
      ru: {
        title: 'Пять устройств Premium: iPhone, iPad и Chrome без хаоса',
        excerpt: 'Как на практике работают места FollowNet — общий аккаунт, общие права Free/Premium и освобождение забытого iPad.',
        sections: [
          {
            title: 'Один аккаунт, много точек',
            body: 'Premium идёт за аккаунтом FollowNet (вход по email-коду), не за одним Apple ID. iPhone, iPad и расширение Chrome берут один тариф: безлимит и Premium-карту серверов при активной подписке.',
          },
          {
            title: 'Что обычно занимает место',
            body: 'Активные сессии iOS/iPadOS и десктопного Chrome обычно занимают места из пяти. Точные подписи — в аккаунте / устройствах в приложении; смотрите список, когда упёрлись в лимит.',
          },
          {
            title: 'Освободить слот',
            body: 'Выйдите или удалите старое устройство, затем войдите на новом. Не размазывайте один Premium на семью больше пяти точек — шестая откажет явно, а не «тихо украдёт скорость».',
          },
          {
            title: 'Chrome — не бесплатный бонус',
            body: 'Расширение защищает только трафик браузера, но залогиненный Chrome всё равно занимает место Premium. Выйдите из лишних браузеров перед новым iPhone.',
          },
        ],
      },
      uk: {
        title: 'П’ять пристроїв Premium: iPhone, iPad і Chrome без хаосу',
        excerpt: 'Як на практиці працюють місця FollowNet — спільний акаунт, спільні права Free/Premium і звільнення забутого iPad.',
        sections: [
          {
            title: 'Один акаунт, багато точок',
            body: 'Premium йде за акаунтом FollowNet (вхід email-кодом), не за одним Apple ID.',
          },
          {
            title: 'Що зазвичай займає місце',
            body: 'Активні сесії iOS/iPadOS і десктопного Chrome зазвичай займають місця з п’яти.',
          },
          {
            title: 'Звільнити слот',
            body: 'Вийдіть або видаліть старий пристрій, потім увійдіть на новому. Не розмазуйте один Premium більш ніж на п’ять точок.',
          },
          {
            title: 'Chrome — не безкоштовний бонус',
            body: 'Розширення захищає лише трафік браузера, але залогінений Chrome все одно займає місце Premium.',
          },
        ],
      },
      de: {
        title: 'Fünf Premium-Geräte: iPhone, iPad und Chrome-Sitze ohne Chaos',
        excerpt: 'So funktionieren FollowNet-Sitze in der Praxis — gemeinsames Konto, gemeinsame Free/Premium-Rechte und ein vergessenes iPad freigeben.',
        sections: [
          {
            title: 'Ein Konto, mehrere Endpunkte',
            body: 'Premium folgt dem FollowNet-Konto (Login per E-Mail-Code), nicht einer einzelnen Apple ID. Melden Sie sich auf iPhone, iPad und der Chrome-Erweiterung an — sie ziehen denselben Plan: unlimited Traffic und die Premium-Serverkarte bei aktiver Berechtigung.',
          },
          {
            title: 'Was meist als Sitz zählt',
            body: 'Aktive angemeldete Sessions in iOS/iPadOS-Apps und Desktop-Chrome verbrauchen typischerweise Sitze bis zur Fünf-Geräte-Grenze. Exakte Labels stehen unter Account / Devices in der App — nutzen Sie diese Liste, wenn Sie am Limit sind.',
          },
          {
            title: 'Einen Slot freigeben',
            body: 'Melden Sie sich ab oder entfernen Sie das alte Gerät, dann melden Sie sich am neuen Telefon an. Teilen Sie einen Premium-Login nicht über mehr als fünf Endpunkte im Haushalt — der sechste scheitert laut statt still Speed zu stehlen.',
          },
          {
            title: 'Chrome ist kein gratis Bonus-Sitz',
            body: 'Die Erweiterung schützt nur Browser-Traffic, aber ein angemeldetes Chrome belegt trotzdem einen Premium-Sitz. Melden Sie ungenutzte Browser ab, bevor Sie ein weiteres iPhone hinzufügen.',
          },
        ],
      },
      es: {
        title: 'Cinco dispositivos Premium: iPhone, iPad y asientos Chrome sin caos',
        excerpt: 'Cómo funcionan los asientos de FollowNet en la práctica — cuenta compartida, derechos Free/Premium compartidos y liberar un iPad olvidado.',
        sections: [
          {
            title: 'Una cuenta, varios endpoints',
            body: 'Premium sigue la cuenta FollowNet (login con código por email), no un solo Apple ID. Inicia sesión en iPhone, iPad y la extensión de Chrome: comparten el mismo plan — tráfico unlimited y el mapa Premium cuando hay derecho.',
          },
          {
            title: 'Qué suele contar como asiento',
            body: 'Las sesiones activas iniciadas en apps iOS/iPadOS y Chrome de escritorio suelen consumir asientos hacia el tope de cinco dispositivos. Las etiquetas exactas están en account / devices en la app — usa esa lista cuando llegues al límite.',
          },
          {
            title: 'Liberar un slot',
            body: 'Cierra sesión o elimina el dispositivo viejo, luego inicia sesión en el teléfono nuevo. No compartas un login Premium en el hogar más allá de cinco endpoints: el sexto fallará en voz alta en vez de robar velocidad en silencio.',
          },
          {
            title: 'Chrome no es un asiento bonus gratis',
            body: 'La extensión protege solo el tráfico del navegador, pero un Chrome con sesión sigue ocupando un asiento Premium. Cierra sesión en navegadores sin uso antes de añadir otro iPhone.',
          },
        ],
      },
      fr: {
        title: 'Cinq appareils Premium : iPhone, iPad et sièges Chrome sans chaos',
        excerpt: 'Comment les sièges FollowNet fonctionnent en pratique — compte partagé, droits Free/Premium partagés, et libérer un iPad oublié.',
        sections: [
          {
            title: 'Un compte, plusieurs endpoints',
            body: 'Premium suit le compte FollowNet (connexion par code e-mail), pas un seul Apple ID. Connectez-vous sur iPhone, iPad et l’extension Chrome — ils tirent le même forfait : trafic unlimited et la carte serveurs Premium quand l’entitlement est actif.',
          },
          {
            title: 'Ce qui compte en général comme siège',
            body: 'Les sessions actives connectées sur apps iOS/iPadOS et Chrome desktop consomment en général des sièges jusqu’au plafond de cinq appareils. Les libellés exacts sont sous account / devices dans l’app — utilisez cette liste quand vous touchez la limite.',
          },
          {
            title: 'Libérer un slot',
            body: 'Déconnectez-vous ou retirez l’ancien appareil, puis connectez-vous sur le nouveau téléphone. Ne partagez pas un login Premium dans un foyer au-delà de cinq endpoints — le sixième échouera bruyamment au lieu de voler la vitesse en silence.',
          },
          {
            title: 'Chrome n’est pas un siège bonus gratuit',
            body: 'L’extension ne protège que le trafic navigateur, mais un Chrome connecté occupe quand même un siège Premium. Déconnectez les navigateurs inutilisés avant d’ajouter un autre iPhone.',
          },
        ],
      },
      pt: {
        title: 'Cinco dispositivos Premium: iPhone, iPad e assentos Chrome sem caos',
        excerpt: 'Como os assentos FollowNet funcionam na prática — conta compartilhada, direitos Free/Premium compartilhados e liberar um iPad esquecido.',
        sections: [
          {
            title: 'Uma conta, vários endpoints',
            body: 'Premium segue a conta FollowNet (login com código por e-mail), não um único Apple ID. Entre no iPhone, iPad e na extensão Chrome — eles usam o mesmo plano: tráfego unlimited e o mapa Premium quando há direito.',
          },
          {
            title: 'O que costuma contar como assento',
            body: 'Sessões ativas logadas em apps iOS/iPadOS e Chrome desktop costumam consumir assentos até o teto de cinco dispositivos. Rótulos exatos ficam em account / devices no app — use essa lista quando bater no limite.',
          },
          {
            title: 'Liberar um slot',
            body: 'Saia ou remova o dispositivo antigo, depois entre no telefone novo. Não compartilhe um login Premium na casa além de cinco endpoints — o sexto falha alto em vez de roubar velocidade em silêncio.',
          },
          {
            title: 'Chrome não é assento bônus grátis',
            body: 'A extensão protege só o tráfego do navegador, mas um Chrome logado ainda ocupa um assento Premium. Saia de navegadores sem uso antes de adicionar outro iPhone.',
          },
        ],
      },
    },
  },
  {
    slug: 'chrome-extension-architecture',
    date: '2026-09-16',
    minutes: 7,
    topic: 'product',
    seed: {
      en: {
        title: 'Inside FollowNet for Chrome: proxy, Kill Switch, ad lists, shared plan',
        excerpt: 'A clear map of what the desktop extension is — and the hard line where protection ends.',
        sections: [
          {
            title: 'Browser proxy, not system VPN',
            body: 'FollowNet for Chrome routes Chrome tab traffic through a proxy tied to your FollowNet account. FaceTime, Slack desktop, and other apps on the Mac stay outside that path. Full-device macOS / Android / Windows apps are not shipping yet — say that out loud when comparing to the iPhone Network Extension tunnel.',
          },
          {
            title: 'Kill Switch scope',
            body: 'If the proxy drops, Kill Switch aims to stop Chrome from leaking to the clear path. It is not an OS-wide kill switch. Edge cases across Chrome updates exist — reconnect from the popup if status looks stuck.',
          },
          {
            title: 'EasyList / AdGuard blocking',
            body: 'Optional list-based ad/tracker blocking lives in the extension. It does not replace VPN encryption and can over-block a site — disable per site when something breaks.',
          },
          {
            title: 'Same Free / Premium rules',
            body: 'Traffic and entitlements follow the account. Free weekly allowance and Premium unlimited apply across iOS and Chrome usage. Prefer iOS when you need every app covered; prefer Chrome when only the desktop browser matters.',
          },
        ],
      },
      ru: {
        title: 'Как устроен FollowNet для Chrome: прокси, Kill Switch, списки рекламы, общий тариф',
        excerpt: 'Понятная карта того, что умеет десктопное расширение — и жёсткая граница, где защита кончается.',
        sections: [
          {
            title: 'Прокси браузера, не системный VPN',
            body: 'FollowNet для Chrome гонит вкладки Chrome через прокси аккаунта FollowNet. FaceTime, десктопный Slack и другие приложения Mac остаются снаружи. Полноценных приложений для всей системы на macOS / Android / Windows пока нет — это важно при сравнении с Network Extension на iPhone.',
          },
          {
            title: 'Зона Kill Switch',
            body: 'Если прокси оборвался, Kill Switch старается не пустить Chrome в «голый» интернет. Это не OS-wide kill switch. На обновлениях Chrome бывают края — переподключитесь из попапа, если статус завис.',
          },
          {
            title: 'Блокировка EasyList / AdGuard',
            body: 'Опциональная блокировка рекламы/трекеров по спискам живёт в расширении. Она не заменяет шифрование и может резать лишнее — отключайте на сайте при поломке.',
          },
          {
            title: 'Те же правила Free / Premium',
            body: 'Трафик и права идут за аккаунтом. Недельный Free и безлимит Premium общие для iOS и Chrome. iOS — когда нужны все приложения; Chrome — когда достаточно десктопного браузера.',
          },
        ],
      },
      uk: {
        title: 'Як влаштований FollowNet для Chrome: проксі, Kill Switch, списки реклами, спільний тариф',
        excerpt: 'Зрозуміла карта того, що вміє десктопне розширення — і жорстка межа, де захист закінчується.',
        sections: [
          {
            title: 'Проксі браузера, не системний VPN',
            body: 'FollowNet для Chrome веде вкладки Chrome через проксі акаунта. Інші програми Mac лишаються зовні. Повноцінних системних додатків для macOS / Android / Windows поки немає.',
          },
          {
            title: 'Зона Kill Switch',
            body: 'Якщо проксі обірвався, Kill Switch намагається не пустити Chrome в «голий» інтернет. Це не OS-wide kill switch.',
          },
          {
            title: 'Блокування EasyList / AdGuard',
            body: 'Опційне блокування реклами/трекерів за списками живе в розширенні. Воно не замінює шифрування.',
          },
          {
            title: 'Ті самі правила Free / Premium',
            body: 'Трафік і права йдуть за акаунтом. Тижневий Free і безліміт Premium спільні для iOS і Chrome.',
          },
        ],
      },
      de: {
        title: 'Inside FollowNet für Chrome: Proxy, Kill Switch, Ad-Listen, gemeinsamer Plan',
        excerpt: 'Eine klare Karte dessen, was die Desktop-Erweiterung ist — und die harte Linie, wo der Schutz endet.',
        sections: [
          {
            title: 'Browser-Proxy, kein System-VPN',
            body: 'FollowNet für Chrome leitet Chrome-Tab-Traffic über einen Proxy, der an Ihr FollowNet-Konto gebunden ist. FaceTime, Slack Desktop und andere Mac-Apps bleiben außerhalb dieses Pfads. Vollständige macOS- / Android- / Windows-Apps für das ganze Gerät gibt es noch nicht — sagen Sie das laut, wenn Sie mit dem Network-Extension-Tunnel auf dem iPhone vergleichen.',
          },
          {
            title: 'Reichweite des Kill Switch',
            body: 'Wenn der Proxy abfällt, soll Kill Switch verhindern, dass Chrome auf den klaren Pfad leakt. Es ist kein OS-weiter Kill Switch. Edge Cases über Chrome-Updates hinweg gibt es — verbinden Sie neu aus dem Popup, wenn der Status hängt.',
          },
          {
            title: 'EasyList- / AdGuard-Blocking',
            body: 'Optionales listenbasiertes Ad-/Tracker-Blocking lebt in der Erweiterung. Es ersetzt keine VPN-Verschlüsselung und kann eine Seite überblocken — deaktivieren Sie es pro Site, wenn etwas kaputtgeht.',
          },
          {
            title: 'Dieselben Free- / Premium-Regeln',
            body: 'Traffic und Rechte folgen dem Konto. Free-Wochenkontingent und Premium unlimited gelten über iOS- und Chrome-Nutzung hinweg. Bevorzugen Sie iOS, wenn jede App abgedeckt sein soll; Chrome, wenn nur der Desktop-Browser zählt.',
          },
        ],
      },
      es: {
        title: 'Dentro de FollowNet para Chrome: proxy, Kill Switch, listas de ads, plan compartido',
        excerpt: 'Un mapa claro de qué es la extensión de escritorio — y la línea dura donde termina la protección.',
        sections: [
          {
            title: 'Proxy del navegador, no VPN de sistema',
            body: 'FollowNet para Chrome enruta el tráfico de pestañas de Chrome por un proxy ligado a tu cuenta FollowNet. FaceTime, Slack de escritorio y otras apps del Mac quedan fuera de ese camino. Apps de dispositivo completo para macOS / Android / Windows aún no están disponibles — dilo en voz alta al comparar con el túnel Network Extension del iPhone.',
          },
          {
            title: 'Alcance del Kill Switch',
            body: 'Si cae el proxy, Kill Switch busca impedir que Chrome filtre al camino claro. No es un kill switch a nivel de SO. Hay edge cases entre actualizaciones de Chrome — reconecta desde el popup si el estado parece atascado.',
          },
          {
            title: 'Bloqueo EasyList / AdGuard',
            body: 'El bloqueo opcional de ads/trackers por listas vive en la extensión. No sustituye el cifrado VPN y puede sobrebloquear un sitio — desactívalo por sitio cuando algo se rompa.',
          },
          {
            title: 'Las mismas reglas Free / Premium',
            body: 'Tráfico y derechos siguen la cuenta. La cuota semanal Free y Premium unlimited aplican entre uso en iOS y Chrome. Prefiere iOS cuando necesitas cubrir todas las apps; Chrome cuando solo importa el navegador de escritorio.',
          },
        ],
      },
      fr: {
        title: 'Inside FollowNet pour Chrome : proxy, Kill Switch, listes pubs, forfait partagé',
        excerpt: 'Une carte claire de ce qu’est l’extension desktop — et la ligne dure où la protection s’arrête.',
        sections: [
          {
            title: 'Proxy navigateur, pas un VPN système',
            body: 'FollowNet pour Chrome route le trafic des onglets Chrome via un proxy lié à votre compte FollowNet. FaceTime, Slack desktop et les autres apps Mac restent hors de ce chemin. Les apps appareil complet pour macOS / Android / Windows ne sont pas encore livrées — dites-le à voix haute en comparant au tunnel Network Extension de l’iPhone.',
          },
          {
            title: 'Portée du Kill Switch',
            body: 'Si le proxy tombe, Kill Switch vise à empêcher Chrome de fuiter vers le chemin clair. Ce n’est pas un kill switch OS-wide. Des cas limites existent selon les mises à jour Chrome — reconnectez depuis le popup si le statut semble figé.',
          },
          {
            title: 'Blocage EasyList / AdGuard',
            body: 'Le blocage optionnel pubs/trackers par listes vit dans l’extension. Il ne remplace pas le chiffrement VPN et peut sur-bloquer un site — désactivez-le par site si quelque chose casse.',
          },
          {
            title: 'Mêmes règles Free / Premium',
            body: 'Trafic et droits suivent le compte. L’allocation Free hebdomadaire et Premium unlimited s’appliquent sur l’usage iOS et Chrome. Préférez iOS quand chaque app doit être couverte ; Chrome quand seul le navigateur desktop compte.',
          },
        ],
      },
      pt: {
        title: 'Por dentro do FollowNet para Chrome: proxy, Kill Switch, listas de ads, plano compartilhado',
        excerpt: 'Um mapa claro do que a extensão desktop é — e a linha dura onde a proteção termina.',
        sections: [
          {
            title: 'Proxy do navegador, não VPN de sistema',
            body: 'FollowNet para Chrome roteia o tráfego das abas do Chrome por um proxy ligado à sua conta FollowNet. FaceTime, Slack desktop e outros apps no Mac ficam fora desse caminho. Apps de dispositivo completo para macOS / Android / Windows ainda não estão disponíveis — diga isso em voz alta ao comparar com o túnel Network Extension no iPhone.',
          },
          {
            title: 'Alcance do Kill Switch',
            body: 'Se o proxy cair, o Kill Switch tenta impedir que o Chrome vaze para o caminho limpo. Não é um kill switch em nível de SO. Há edge cases entre updates do Chrome — reconecte pelo popup se o status parecer travado.',
          },
          {
            title: 'Bloqueio EasyList / AdGuard',
            body: 'O bloqueio opcional de ads/trackers por listas mora na extensão. Não substitui a criptografia VPN e pode sobrebloquear um site — desative por site quando algo quebrar.',
          },
          {
            title: 'As mesmas regras Free / Premium',
            body: 'Tráfego e direitos seguem a conta. A cota semanal Free e Premium unlimited valem no uso iOS e Chrome. Prefira iOS quando precisa cobrir todos os apps; Chrome quando só o navegador desktop importa.',
          },
        ],
      },
    },
  },
  {
    slug: 'passwordless-account-restore',
    date: '2026-09-17',
    minutes: 6,
    topic: 'guides',
    seed: {
      en: {
        title: 'Passwordless FollowNet login: new phone, Apple subscription, Chrome sign-in',
        excerpt: 'How email codes replace yet another password — and how to reconnect Premium after you wiped an iPhone.',
        sections: [
          {
            title: 'Why codes instead of passwords',
            body: 'FollowNet signs you in with a one-time email code on iOS and Chrome. You do not maintain a FollowNet password to forget, reuse, or phish. Protect the mailbox — that is the account root.',
          },
          {
            title: 'New iPhone checklist',
            body: 'Install from the App Store → sign in with the same email → allow the VPN configuration prompt → restore Auto-connect / Network Profile if needed. Apple In-App Purchase subscriptions are restored through Apple’s account, then FollowNet maps entitlement to your FollowNet user.',
          },
          {
            title: 'Chrome on a new laptop',
            body: 'Install the extension, sign in with the same email code, then connect the browser proxy. It will consume a Premium seat if you are on Premium — free up devices if you hit five.',
          },
          {
            title: 'When Apple and FollowNet disagree',
            body: 'Restore Purchases in the iOS app first. Web checkout (when enabled) is a different payment rail on the same account. Trial terms for annual Premium appear on Apple’s pay sheet — not invented in a blog post.',
          },
        ],
      },
      ru: {
        title: 'Вход без пароля в FollowNet: новый телефон, подписка Apple, Chrome',
        excerpt: 'Как email-коды заменяют ещё один пароль — и как вернуть Premium после вайпа iPhone.',
        sections: [
          {
            title: 'Почему коды вместо паролей',
            body: 'Вход в FollowNet — одноразовый код на email в iOS и Chrome. Отдельного пароля FollowNet нет: нечего забывать, переиспользовать и фишить. Корень аккаунта — ваш почтовый ящик.',
          },
          {
            title: 'Чеклист нового iPhone',
            body: 'App Store → тот же email → разрешение VPN-профиля → при необходимости верните автоподключение / профиль сети. Подписка In-App Purchase восстанавливается через Apple, затем FollowNet привязывает entitlement к пользователю FollowNet.',
          },
          {
            title: 'Chrome на новом ноутбуке',
            body: 'Поставьте расширение, войдите тем же email-кодом, включите прокси браузера. На Premium это займёт место устройства — освободите слот, если уже пять.',
          },
          {
            title: 'Если Apple и FollowNet расходятся',
            body: 'Сначала Restore Purchases в iOS-приложении. Web-checkout (когда включён) — другая касса на том же аккаунте. Условия trial годового Premium — на экране оплаты Apple, не выдумка блога.',
          },
        ],
      },
      uk: {
        title: 'Вхід без пароля у FollowNet: новий телефон, підписка Apple, Chrome',
        excerpt: 'Як email-коди замінюють ще один пароль — і як повернути Premium після вайпу iPhone.',
        sections: [
          {
            title: 'Чому коди замість паролів',
            body: 'Вхід у FollowNet — одноразовий код на email в iOS і Chrome. Окремого пароля FollowNet немає — корінь акаунта — пошта.',
          },
          {
            title: 'Чекліст нового iPhone',
            body: 'App Store → той самий email → дозвіл VPN-профілю → за потреби поверніть автовмикання / профіль мережі.',
          },
          {
            title: 'Chrome на новому ноутбуці',
            body: 'Встановіть розширення, увійдіть тим самим email-кодом, увімкніть проксі. На Premium це займе місце пристрою.',
          },
          {
            title: 'Якщо Apple і FollowNet розходяться',
            body: 'Спочатку Restore Purchases у iOS-застосунку. Web-checkout (коли ввімкнено) — інша каса на тому ж акаунті.',
          },
        ],
      },
      de: {
        title: 'Passwortloser FollowNet-Login: neues Handy, Apple-Abo, Chrome-Anmeldung',
        excerpt: 'Wie E-Mail-Codes noch ein Passwort ersetzen — und wie Sie Premium nach einem iPhone-Wipe wieder verbinden.',
        sections: [
          {
            title: 'Warum Codes statt Passwörter',
            body: 'FollowNet meldet Sie mit einem einmaligen E-Mail-Code auf iOS und Chrome an. Sie pflegen kein FollowNet-Passwort zum Vergessen, Wiederverwenden oder Phishing. Schützen Sie das Postfach — das ist die Wurzel des Kontos.',
          },
          {
            title: 'Checkliste neues iPhone',
            body: 'Aus dem App Store installieren → mit derselben E-Mail anmelden → VPN-Konfigurationsprompt erlauben → Auto-connect / Network Profile bei Bedarf wiederherstellen. Apple In-App-Purchase-Abos werden über das Apple-Konto wiederhergestellt, dann mappt FollowNet das Entitlement auf Ihren FollowNet-Nutzer.',
          },
          {
            title: 'Chrome auf einem neuen Laptop',
            body: 'Erweiterung installieren, mit demselben E-Mail-Code anmelden, dann den Browser-Proxy verbinden. Auf Premium verbraucht das einen Sitz — geben Sie Geräte frei, wenn Sie bei fünf sind.',
          },
          {
            title: 'Wenn Apple und FollowNet uneinig sind',
            body: 'Zuerst Restore Purchases in der iOS-App. Web-Checkout (wenn aktiviert) ist ein anderer Zahlungsweg auf demselben Konto. Trial-Bedingungen für jährliches Premium stehen auf Apples Bezahlblatt — nicht erfunden in einem Blogpost.',
          },
        ],
      },
      es: {
        title: 'Login FollowNet sin contraseña: teléfono nuevo, suscripción Apple, Chrome',
        excerpt: 'Cómo los códigos por email sustituyen otra contraseña más — y cómo reconectar Premium tras borrar un iPhone.',
        sections: [
          {
            title: 'Por qué códigos en vez de contraseñas',
            body: 'FollowNet te inicia sesión con un código de un solo uso por email en iOS y Chrome. No mantienes una contraseña FollowNet para olvidar, reutilizar o phishear. Protege el buzón: esa es la raíz de la cuenta.',
          },
          {
            title: 'Checklist de iPhone nuevo',
            body: 'Instala desde el App Store → inicia sesión con el mismo email → acepta el prompt de configuración VPN → restaura Auto-connect / Network Profile si hace falta. Las suscripciones In-App Purchase de Apple se restauran vía la cuenta Apple; luego FollowNet mapea el entitlement a tu usuario FollowNet.',
          },
          {
            title: 'Chrome en un portátil nuevo',
            body: 'Instala la extensión, inicia sesión con el mismo código de email y conecta el proxy del navegador. En Premium consumirá un asiento — libera dispositivos si llegas a cinco.',
          },
          {
            title: 'Cuando Apple y FollowNet no coinciden',
            body: 'Primero Restore Purchases en la app iOS. El web checkout (cuando está activo) es otro raíl de pago en la misma cuenta. Los términos del trial de Premium anual aparecen en la hoja de pago de Apple — no se inventan en un post del blog.',
          },
        ],
      },
      fr: {
        title: 'Connexion FollowNet sans mot de passe : nouveau téléphone, abonnement Apple, Chrome',
        excerpt: 'Comment les codes e-mail remplacent encore un mot de passe — et comment reconnecter Premium après un wipe d’iPhone.',
        sections: [
          {
            title: 'Pourquoi des codes plutôt que des mots de passe',
            body: 'FollowNet vous connecte avec un code e-mail à usage unique sur iOS et Chrome. Vous ne maintenez pas de mot de passe FollowNet à oublier, réutiliser ou phisher. Protégez la boîte mail — c’est la racine du compte.',
          },
          {
            title: 'Checklist nouvel iPhone',
            body: 'Installer depuis l’App Store → se connecter avec le même e-mail → autoriser l’invite de configuration VPN → restaurer Auto-connect / Network Profile si besoin. Les abonnements In-App Purchase Apple se restaurent via le compte Apple, puis FollowNet mappe l’entitlement à votre utilisateur FollowNet.',
          },
          {
            title: 'Chrome sur un nouveau laptop',
            body: 'Installez l’extension, connectez-vous avec le même code e-mail, puis activez le proxy navigateur. Sur Premium, cela consomme un siège — libérez des appareils si vous êtes à cinq.',
          },
          {
            title: 'Quand Apple et FollowNet divergent',
            body: 'D’abord Restore Purchases dans l’app iOS. Le web checkout (quand activé) est un autre rail de paiement sur le même compte. Les conditions de trial du Premium annuel apparaissent sur la feuille de paiement Apple — pas inventées dans un billet de blog.',
          },
        ],
      },
      pt: {
        title: 'Login FollowNet sem senha: telefone novo, assinatura Apple, Chrome',
        excerpt: 'Como códigos por e-mail substituem mais uma senha — e como reconectar o Premium depois de limpar um iPhone.',
        sections: [
          {
            title: 'Por que códigos em vez de senhas',
            body: 'O FollowNet entra com um código de e-mail de uso único no iOS e no Chrome. Você não mantém uma senha FollowNet para esquecer, reutilizar ou sofrer phishing. Proteja a caixa de e-mail — essa é a raiz da conta.',
          },
          {
            title: 'Checklist de iPhone novo',
            body: 'Instale pela App Store → entre com o mesmo e-mail → aceite o prompt de configuração VPN → restaure Auto-connect / Network Profile se precisar. Assinaturas In-App Purchase da Apple restauram pela conta Apple; depois o FollowNet mapeia o entitlement para o seu usuário FollowNet.',
          },
          {
            title: 'Chrome num laptop novo',
            body: 'Instale a extensão, entre com o mesmo código de e-mail e conecte o proxy do navegador. No Premium isso consome um assento — liberte dispositivos se chegar a cinco.',
          },
          {
            title: 'Quando Apple e FollowNet discordam',
            body: 'Primeiro Restore Purchases no app iOS. O web checkout (quando ativo) é outro trilho de pagamento na mesma conta. Termos de trial do Premium anual aparecem na folha de pagamento da Apple — não inventados num post do blog.',
          },
        ],
      },
    },
  },
];

export const EXTRA_BLOG_POSTS: ExtraBlogPostMeta[] = EXTRA_SEEDS.map(expand);

export function extraBlogSeoMap(): Record<string, Record<AppLang, SeoPair>> {
  const out: Record<string, Record<AppLang, SeoPair>> = {};
  for (const meta of EXTRA_SEEDS) {
    out[meta.slug] = {} as Record<AppLang, SeoPair>;
    (Object.keys(meta.seed) as AppLang[]).forEach((lang) => {
      out[meta.slug][lang] = {
        title: meta.seed[lang].title,
        excerpt: meta.seed[lang].excerpt,
      };
    });
  }
  return out;
}
