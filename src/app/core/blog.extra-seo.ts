import type { AppLang } from './i18n.service';

type BlogSeoMeta = { title: string; excerpt: string };

/** Title/excerpt for EXTRA blog posts — keeps full bodies out of the initial SEO bundle. */
export const EXTRA_BLOG_SEO: Record<string, Record<AppLang, BlogSeoMeta>> = {
  'smart-connect-vless-reality': {
    en: { title: 'Smart Connect + VLESS Reality: how FollowNet recovers on hard networks', excerpt: 'Not a magic invisibility cloak — a real fallback chain with egress checks, so “Connected” means traffic actually works.' },
    ru: { title: 'Smart Connect и VLESS Reality: как FollowNet выживает на жёстких сетях', excerpt: 'Не плащ-невидимка — реальная цепочка fallback с проверкой egress, чтобы «Connected» означал рабочий трафик.' },
    uk: { title: 'Smart Connect і VLESS Reality: як FollowNet виживає на жорстких мережах', excerpt: 'Не плащ-невидимка — реальний ланцюг fallback із перевіркою egress, щоб «Connected» означав робочий трафік.' },
    de: { title: 'Smart Connect + VLESS Reality: so erholt sich FollowNet auf harten Netzen', excerpt: 'Kein magischer Unsichtbarkeitsmantel — eine echte Fallback-Kette mit Egress-Checks, damit „Connected“ wirklich funktionierenden Traffic bedeutet.' },
    es: { title: 'Smart Connect + VLESS Reality: cómo FollowNet se recupera en redes difíciles', excerpt: 'No es una capa de invisibilidad mágica: es una cadena real de fallback con comprobaciones de egress, para que «Connected» signifique tráfico que de verdad funciona.' },
    fr: { title: 'Smart Connect + VLESS Reality : comment FollowNet se rétablit sur les réseaux durs', excerpt: 'Pas une cape d’invisibilité magique — une vraie chaîne de fallback avec contrôles d’egress, pour que « Connected » signifie un trafic qui marche vraiment.' },
    pt: { title: 'Smart Connect + VLESS Reality: como o FollowNet se recupera em redes difíceis', excerpt: 'Não é capa de invisibilidade mágica — é uma cadeia real de fallback com checagens de egress, para que «Connected» signifique tráfego que de fato funciona.' },
  },
  'network-profiles-four-presets': {
    en: { title: 'Network Profiles reference: Smart, Public Wi‑Fi, Travel, Restricted', excerpt: 'Exact built-in presets in FollowNet for iOS — protocol, DNS, Auto-connect, server mode — plus when to clone a custom profile.' },
    ru: { title: 'Справка по профилям сети: Smart, Public Wi‑Fi, Travel, Restricted', excerpt: 'Точные встроенные пресеты FollowNet на iOS — протокол, DNS, автоподключение, режим сервера — и когда клонировать свой профиль.' },
    uk: { title: 'Довідка з профілів мережі: Smart, Public Wi‑Fi, Travel, Restricted', excerpt: 'Точні вбудовані пресети FollowNet на iOS — протокол, DNS, автовмикання, режим сервера — і коли клонувати свій профіль.' },
    de: { title: 'Network Profiles Referenz: Smart, Public Wi‑Fi, Travel, Restricted', excerpt: 'Die exakten eingebauten Presets in FollowNet für iOS — Protokoll, DNS, Auto-connect, Servermodus — und wann Sie ein eigenes Profil klonen.' },
    es: { title: 'Referencia de Network Profiles: Smart, Public Wi‑Fi, Travel, Restricted', excerpt: 'Los presets integrados exactos de FollowNet en iOS — protocolo, DNS, Auto-connect, modo de servidor — y cuándo clonar un perfil propio.' },
    fr: { title: 'Référence Network Profiles : Smart, Public Wi‑Fi, Travel, Restricted', excerpt: 'Les presets intégrés exacts de FollowNet sur iOS — protocole, DNS, Auto-connect, mode serveur — et quand cloner un profil personnalisé.' },
    pt: { title: 'Referência de Network Profiles: Smart, Public Wi‑Fi, Travel, Restricted', excerpt: 'Os presets embutidos exatos do FollowNet no iOS — protocolo, DNS, Auto-connect, modo de servidor — e quando clonar um perfil próprio.' },
  },
  'restricted-network-profile': {
    en: { title: 'Restricted Network profile: when Smart Connect should stay aggressive', excerpt: 'How the fourth built-in preset differs from Travel and Public Wi‑Fi — and when it still will not save a broken portal.' },
    ru: { title: 'Профиль Restricted Network: когда Smart Connect должен быть агрессивным', excerpt: 'Чем четвёртый пресет отличается от Travel и Public Wi‑Fi — и когда он всё равно не спасёт сломанный portal.' },
    uk: { title: 'Профіль Restricted Network: коли Smart Connect має бути агресивним', excerpt: 'Чим четвертий пресет відрізняється від Travel і Public Wi‑Fi — і коли він усе одно не врятує зламаний portal.' },
    de: { title: 'Restricted Network Profil: wann Smart Connect aggressiv bleiben soll', excerpt: 'Wie sich das vierte eingebaute Preset von Travel und Public Wi‑Fi unterscheidet — und wann es ein kaputtes Portal trotzdem nicht rettet.' },
    es: { title: 'Perfil Restricted Network: cuándo Smart Connect debe seguir agresivo', excerpt: 'Cómo el cuarto preset integrado difiere de Travel y Public Wi‑Fi — y cuándo igual no salva un portal roto.' },
    fr: { title: 'Profil Restricted Network : quand Smart Connect doit rester agressif', excerpt: 'En quoi le quatrième preset intégré diffère de Travel et Public Wi‑Fi — et quand il ne sauvera quand même pas un portal cassé.' },
    pt: { title: 'Perfil Restricted Network: quando o Smart Connect deve continuar agressivo', excerpt: 'Como o quarto preset embutido difere de Travel e Public Wi‑Fi — e quando mesmo assim não salva um portal quebrado.' },
  },
  'vpn-control-widget': {
    en: { title: 'FollowNet VPN Control widget: status and connect without opening the app', excerpt: 'What the Home Screen / Control-style widget shows, how it talks to the tunnel, and the states that need the full app.' },
    ru: { title: 'Виджет VPN Control FollowNet: статус и подключение без открытия приложения', excerpt: 'Что показывает виджет, как он связан с туннелем и какие состояния требуют полного приложения.' },
    uk: { title: 'Віджет VPN Control FollowNet: статус і підключення без відкриття застосунку', excerpt: 'Що показує віджет, як він пов’язаний із тунелем і які стани потребують повного застосунку.' },
    de: { title: 'FollowNet VPN Control Widget: Status und Connect ohne die App zu öffnen', excerpt: 'Was das Home-Screen- / Control-Widget zeigt, wie es mit dem Tunnel spricht und welche Zustände die volle App brauchen.' },
    es: { title: 'Widget VPN Control de FollowNet: estado y conexión sin abrir la app', excerpt: 'Qué muestra el widget de Home Screen / Control, cómo habla con el túnel y qué estados requieren la app completa.' },
    fr: { title: 'Widget VPN Control FollowNet : statut et connexion sans ouvrir l’app', excerpt: 'Ce que montre le widget Home Screen / Control, comment il parle au tunnel, et les états qui exigent l’app complète.' },
    pt: { title: 'Widget VPN Control do FollowNet: status e conexão sem abrir o app', excerpt: 'O que o widget de Home Screen / Control mostra, como fala com o túnel e quais estados precisam do app completo.' },
  },
  'free-weekly-traffic': {
    en: { title: 'FollowNet Free weekly traffic: what counts, what resets, what does not', excerpt: 'How the Free allowance behaves in the iOS app — including Speed Test, tunnel overhead, and why Premium is capacity not “stronger crypto.”' },
    ru: { title: 'Недельный трафик FollowNet Free: что считается, что сбрасывается, чего нет', excerpt: 'Как ведёт себя лимит Free в iOS — включая Speed Test, оверхед туннеля и почему Premium это ёмкость, а не «сильнее шифрование».' },
    uk: { title: 'Тижневий трафік FollowNet Free: що рахується, що скидається, чого немає', excerpt: 'Як поводиться ліміт Free в iOS — включно зі Speed Test, оверхедом тунелю і чому Premium це ємність, а не «сильніше шифрування».' },
    de: { title: 'FollowNet Free Wochenverkehr: was zählt, was zurückgesetzt wird, was nicht', excerpt: 'Wie das Free-Kontingent in der iOS-App funktioniert — inklusive Speed Test, Tunnel-Overhead und warum Premium Kapazität ist, nicht „stärkere Krypto“.' },
    es: { title: 'Tráfico semanal FollowNet Free: qué cuenta, qué se reinicia, qué no', excerpt: 'Cómo se comporta la cuota Free en la app iOS — incluido Speed Test, overhead del túnel y por qué Premium es capacidad, no «cripto más fuerte».' },
    fr: { title: 'Trafic hebdomadaire FollowNet Free : ce qui compte, ce qui se réinitialise, ce qui ne change pas', excerpt: 'Comment fonctionne l’allocation Free dans l’app iOS — Speed Test, overhead du tunnel, et pourquoi Premium c’est de la capacité, pas une « crypto plus forte ».' },
    pt: { title: 'Tráfego semanal FollowNet Free: o que conta, o que reseta, o que não', excerpt: 'Como a cota Free se comporta no app iOS — incluindo Speed Test, overhead do túnel e por que Premium é capacidade, não «cripto mais forte».' },
  },
  'premium-devices-seats': {
    en: { title: 'Premium’s five devices: iPhone, iPad, and Chrome seats without the chaos', excerpt: 'How FollowNet seats work in practice — shared account, shared Free/Premium entitlements, and freeing a forgotten iPad.' },
    ru: { title: 'Пять устройств Premium: iPhone, iPad и Chrome без хаоса', excerpt: 'Как на практике работают места FollowNet — общий аккаунт, общие права Free/Premium и освобождение забытого iPad.' },
    uk: { title: 'П’ять пристроїв Premium: iPhone, iPad і Chrome без хаосу', excerpt: 'Як на практиці працюють місця FollowNet — спільний акаунт, спільні права Free/Premium і звільнення забутого iPad.' },
    de: { title: 'Fünf Premium-Geräte: iPhone, iPad und Chrome-Sitze ohne Chaos', excerpt: 'So funktionieren FollowNet-Sitze in der Praxis — gemeinsames Konto, gemeinsame Free/Premium-Rechte und ein vergessenes iPad freigeben.' },
    es: { title: 'Cinco dispositivos Premium: iPhone, iPad y asientos Chrome sin caos', excerpt: 'Cómo funcionan los asientos de FollowNet en la práctica — cuenta compartida, derechos Free/Premium compartidos y liberar un iPad olvidado.' },
    fr: { title: 'Cinq appareils Premium : iPhone, iPad et sièges Chrome sans chaos', excerpt: 'Comment les sièges FollowNet fonctionnent en pratique — compte partagé, droits Free/Premium partagés, et libérer un iPad oublié.' },
    pt: { title: 'Cinco dispositivos Premium: iPhone, iPad e assentos Chrome sem caos', excerpt: 'Como os assentos FollowNet funcionam na prática — conta compartilhada, direitos Free/Premium compartilhados e liberar um iPad esquecido.' },
  },
  'chrome-extension-architecture': {
    en: { title: 'Inside FollowNet for Chrome: proxy, Kill Switch, ad lists, shared plan', excerpt: 'A clear map of what the desktop extension is — and the hard line where protection ends.' },
    ru: { title: 'Как устроен FollowNet для Chrome: прокси, Kill Switch, списки рекламы, общий тариф', excerpt: 'Понятная карта того, что умеет десктопное расширение — и жёсткая граница, где защита кончается.' },
    uk: { title: 'Як влаштований FollowNet для Chrome: проксі, Kill Switch, списки реклами, спільний тариф', excerpt: 'Зрозуміла карта того, що вміє десктопне розширення — і жорстка межа, де захист закінчується.' },
    de: { title: 'Inside FollowNet für Chrome: Proxy, Kill Switch, Ad-Listen, gemeinsamer Plan', excerpt: 'Eine klare Karte dessen, was die Desktop-Erweiterung ist — und die harte Linie, wo der Schutz endet.' },
    es: { title: 'Dentro de FollowNet para Chrome: proxy, Kill Switch, listas de ads, plan compartido', excerpt: 'Un mapa claro de qué es la extensión de escritorio — y la línea dura donde termina la protección.' },
    fr: { title: 'Inside FollowNet pour Chrome : proxy, Kill Switch, listes pubs, forfait partagé', excerpt: 'Une carte claire de ce qu’est l’extension desktop — et la ligne dure où la protection s’arrête.' },
    pt: { title: 'Por dentro do FollowNet para Chrome: proxy, Kill Switch, listas de ads, plano compartilhado', excerpt: 'Um mapa claro do que a extensão desktop é — e a linha dura onde a proteção termina.' },
  },
  'passwordless-account-restore': {
    en: { title: 'Passwordless FollowNet login: new phone, Apple subscription, Chrome sign-in', excerpt: 'How email codes replace yet another password — and how to reconnect Premium after you wiped an iPhone.' },
    ru: { title: 'Вход без пароля в FollowNet: новый телефон, подписка Apple, Chrome', excerpt: 'Как email-коды заменяют ещё один пароль — и как вернуть Premium после вайпа iPhone.' },
    uk: { title: 'Вхід без пароля у FollowNet: новий телефон, підписка Apple, Chrome', excerpt: 'Як email-коди замінюють ще один пароль — і як повернути Premium після вайпу iPhone.' },
    de: { title: 'Passwortloser FollowNet-Login: neues Handy, Apple-Abo, Chrome-Anmeldung', excerpt: 'Wie E-Mail-Codes noch ein Passwort ersetzen — und wie Sie Premium nach einem iPhone-Wipe wieder verbinden.' },
    es: { title: 'Login FollowNet sin contraseña: teléfono nuevo, suscripción Apple, Chrome', excerpt: 'Cómo los códigos por email sustituyen otra contraseña más — y cómo reconectar Premium tras borrar un iPhone.' },
    fr: { title: 'Connexion FollowNet sans mot de passe : nouveau téléphone, abonnement Apple, Chrome', excerpt: 'Comment les codes e-mail remplacent encore un mot de passe — et comment reconnecter Premium après un wipe d’iPhone.' },
    pt: { title: 'Login FollowNet sem senha: telefone novo, assinatura Apple, Chrome', excerpt: 'Como códigos por e-mail substituem mais uma senha — e como reconectar o Premium depois de limpar um iPhone.' },
  },
};
