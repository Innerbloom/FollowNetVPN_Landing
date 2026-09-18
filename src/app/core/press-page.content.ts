import { AppLang } from './i18n.service';
import type { ProductPage } from './product-pages.content';

/** Press / media kit — linkable page for journalists, directories, and partners. */
const PRESS: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'Press',
    h1: 'FollowNet press & media kit',
    lead:
      'Facts, links, and assets for journalists, review sites, directories, and partners. Use this page when you mention FollowNet — no fake audits, no inflated server counts.',
    blocks: [
      {
        title: 'Boilerplate',
        body: 'FollowNet is an iOS VPN for iPhone and iPad with a Chrome browser extension. It ships WireGuard, IKEv2, AmneziaWG, Hysteria2, and VLESS Reality, plus Smart Connect for restrictive networks. Free includes a weekly traffic allowance; Premium unlocks unlimited traffic and up to 5 devices via the App Store.',
      },
      {
        title: 'Key links',
        body: 'Website: https://follow-net.com · App Store: https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829 · Chrome Web Store: https://chromewebstore.google.com/detail/follownet-vpn/chgbhiifkahijoochbdegfalclniokhk · Privacy: https://follow-net.com/privacy · Support: support@follow-net.com · Press email: press@follow-net.com',
      },
      {
        title: 'What to say (and not say)',
        body: 'Accurate: weekly Free limit, Premium unlimited, five protocols, Smart Connect, email-code login, Chrome is browser-only. Avoid: “unlimited free forever,” fake independent audit badges, invented country counts, full macOS/Android apps, or an iOS leak-blocking kill switch (Kill Switch ships in Chrome).',
      },
      {
        title: 'Assets',
        body: 'Logo and screenshots live under https://follow-net.com/assets/ and https://follow-net.com/og/og.png. For high-res brand files or a quote, email press@follow-net.com.',
      },
    ],
    bullets: [
      'iOS VPN + Chrome extension',
      'Free weekly · Premium unlimited',
      'WireGuard · AmneziaWG · Hysteria2 · VLESS Reality · IKEv2',
      'press@follow-net.com',
    ],
  },
  ru: {
    kicker: 'Пресса',
    h1: 'FollowNet — пресс‑кит',
    lead:
      'Факты, ссылки и ассеты для журналистов, обзоров, каталогов и партнёров. Упоминайте FollowNet по этой странице — без фейковых аудитов и завышенных цифр.',
    blocks: [
      {
        title: 'Коротко о продукте',
        body: 'FollowNet — VPN для iPhone и iPad плюс расширение Chrome. Протоколы: WireGuard, IKEv2, AmneziaWG, Hysteria2 и VLESS Reality, плюс Smart Connect. Free — с недельным лимитом; Premium — безлимит и до 5 устройств через App Store.',
      },
      {
        title: 'Ссылки',
        body: 'Сайт: https://follow-net.com · App Store: https://apps.apple.com/us/app/follownet-vpn-fast-secure/id6757725829 · Chrome Web Store · Privacy · support@follow-net.com · Пресса: press@follow-net.com',
      },
      {
        title: 'Что писать (и чего не писать)',
        body: 'Верно: недельный Free, Premium безлимит, пять протоколов, Smart Connect, вход по email‑коду, Chrome только для браузера. Неверно: «бесплатный безлимит навсегда», фейковые аудиты, выдуманные страны, macOS/Android сейчас, kill switch утечек на iOS (он есть в Chrome).',
      },
      {
        title: 'Ассеты',
        body: 'Логотип и скриншоты: https://follow-net.com/assets/ и https://follow-net.com/og/og.png. Hi‑res и цитаты — press@follow-net.com.',
      },
    ],
    bullets: [
      'iOS VPN + расширение Chrome',
      'Free — неделя · Premium — безлимит',
      'WireGuard · AmneziaWG · Hysteria2 · VLESS Reality · IKEv2',
      'press@follow-net.com',
    ],
  },
  uk: {
    kicker: 'Преса',
    h1: 'FollowNet — прес‑кіт',
    lead:
      'Факти, посилання та ассети для журналістів, оглядів, каталогів і партнерів. Згадуйте FollowNet за цією сторінкою — без фейкових аудитів.',
    blocks: [
      {
        title: 'Коротко',
        body: 'FollowNet — VPN для iPhone і iPad плюс розширення Chrome. Протоколи: WireGuard, IKEv2, AmneziaWG, Hysteria2 і VLESS Reality, плюс Smart Connect. Free — з тижневим лімітом; Premium — безліміт і до 5 пристроїв через App Store.',
      },
      {
        title: 'Посилання',
        body: 'Сайт: https://follow-net.com · App Store · Chrome Web Store · Privacy · support@follow-net.com · Преса: press@follow-net.com',
      },
      {
        title: 'Що писати',
        body: 'Вірно: тижневий Free, Premium безліміт, п’ять протоколів, Smart Connect, вхід за email‑кодом. Невірно: «безліміт назавжди безкоштовно», фейкові аудити, вигадані країни, macOS/Android зараз, iOS kill switch (є в Chrome).',
      },
      {
        title: 'Ассети',
        body: 'Логотип і скріншоти: https://follow-net.com/assets/ та og.png. Hi‑res — press@follow-net.com.',
      },
    ],
    bullets: [
      'iOS VPN + Chrome',
      'Free — тиждень · Premium — безліміт',
      '5 протоколів включно з VLESS Reality',
      'press@follow-net.com',
    ],
  },
  de: {
    kicker: 'Presse',
    h1: 'FollowNet Presse- & Media-Kit',
    lead:
      'Fakten, Links und Assets für Journalisten, Reviews, Verzeichnisse und Partner. Bitte FollowNet über diese Seite erwähnen — ohne Fake-Audits und aufgeblähte Serverzahlen.',
    blocks: [
      {
        title: 'Kurzbeschreibung',
        body: 'FollowNet ist ein iOS-VPN für iPhone und iPad plus Chrome-Erweiterung. Protokolle: WireGuard, IKEv2, AmneziaWG, Hysteria2 und VLESS Reality, dazu Smart Connect. Free mit Wochenlimit; Premium unbegrenzt und bis zu 5 Geräte über den App Store.',
      },
      {
        title: 'Links',
        body: 'Website: https://follow-net.com · App Store · Chrome Web Store · Datenschutz · support@follow-net.com · Presse: press@follow-net.com',
      },
      {
        title: 'Formulierung',
        body: 'Korrekt: Free-Wochenlimit, Premium unbegrenzt, fünf Protokolle, Smart Connect, E-Mail-Code-Login, Chrome nur Browser. Vermeiden: „unbegrenzt kostenlos für immer“, Fake-Audits, erfundene Länderzahlen, macOS/Android jetzt, iOS-Leak-Kill-Switch (gibt es in Chrome).',
      },
      {
        title: 'Assets',
        body: 'Logo und Screenshots: https://follow-net.com/assets/ und og.png. Hi-res: press@follow-net.com.',
      },
    ],
    bullets: [
      'iOS-VPN + Chrome-Erweiterung',
      'Free wöchentlich · Premium unbegrenzt',
      'WireGuard · AmneziaWG · Hysteria2 · VLESS Reality · IKEv2',
      'press@follow-net.com',
    ],
  },
  es: {
    kicker: 'Prensa',
    h1: 'Kit de prensa FollowNet',
    lead:
      'Hechos, enlaces y recursos para periodistas, reseñas, directorios y partners. Menciona FollowNet con esta página — sin auditorías falsas ni cifras infladas.',
    blocks: [
      {
        title: 'Resumen',
        body: 'FollowNet es un VPN para iPhone e iPad más extensión de Chrome. Protocolos: WireGuard, IKEv2, AmneziaWG, Hysteria2 y VLESS Reality, más Smart Connect. Free con límite semanal; Premium ilimitado y hasta 5 dispositivos vía App Store.',
      },
      {
        title: 'Enlaces',
        body: 'Web: https://follow-net.com · App Store · Chrome Web Store · Privacidad · support@follow-net.com · Prensa: press@follow-net.com',
      },
      {
        title: 'Qué decir',
        body: 'Correcto: Free semanal, Premium ilimitado, cinco protocolos, Smart Connect, login por código email, Chrome solo navegador. Evitar: “gratis ilimitado para siempre”, auditorías falsas, países inventados, macOS/Android ya, kill switch anti-fugas en iOS (está en Chrome).',
      },
      {
        title: 'Recursos',
        body: 'Logo y capturas: https://follow-net.com/assets/ y og.png. Hi-res: press@follow-net.com.',
      },
    ],
    bullets: [
      'VPN iOS + extensión Chrome',
      'Free semanal · Premium ilimitado',
      '5 protocolos incl. VLESS Reality',
      'press@follow-net.com',
    ],
  },
  fr: {
    kicker: 'Presse',
    h1: 'Kit presse FollowNet',
    lead:
      'Faits, liens et assets pour journalistes, tests, annuaires et partenaires. Citez FollowNet via cette page — sans faux audits ni chiffres gonflés.',
    blocks: [
      {
        title: 'En bref',
        body: 'FollowNet est un VPN iOS pour iPhone et iPad plus une extension Chrome. Protocoles : WireGuard, IKEv2, AmneziaWG, Hysteria2 et VLESS Reality, plus Smart Connect. Free avec quota hebdo ; Premium illimité et jusqu’à 5 appareils via l’App Store.',
      },
      {
        title: 'Liens',
        body: 'Site : https://follow-net.com · App Store · Chrome Web Store · Confidentialité · support@follow-net.com · Presse : press@follow-net.com',
      },
      {
        title: 'Formulation',
        body: 'Exact : Free hebdo, Premium illimité, cinq protocoles, Smart Connect, connexion par code e-mail, Chrome navigateur uniquement. À éviter : « gratuit illimité pour toujours », faux audits, pays inventés, macOS/Android déjà, kill switch anti-fuite iOS (présent dans Chrome).',
      },
      {
        title: 'Assets',
        body: 'Logo et captures : https://follow-net.com/assets/ et og.png. Hi-res : press@follow-net.com.',
      },
    ],
    bullets: [
      'VPN iOS + extension Chrome',
      'Free hebdo · Premium illimité',
      '5 protocoles dont VLESS Reality',
      'press@follow-net.com',
    ],
  },
  pt: {
    kicker: 'Imprensa',
    h1: 'Kit de imprensa FollowNet',
    lead:
      'Fatos, links e assets para jornalistas, reviews, diretórios e parceiros. Mencione o FollowNet por esta página — sem auditorias falsas nem números inflados.',
    blocks: [
      {
        title: 'Resumo',
        body: 'FollowNet é um VPN para iPhone e iPad mais extensão do Chrome. Protocolos: WireGuard, IKEv2, AmneziaWG, Hysteria2 e VLESS Reality, mais Smart Connect. Free com limite semanal; Premium ilimitado e até 5 dispositivos via App Store.',
      },
      {
        title: 'Links',
        body: 'Site: https://follow-net.com · App Store · Chrome Web Store · Privacidade · support@follow-net.com · Imprensa: press@follow-net.com',
      },
      {
        title: 'O que dizer',
        body: 'Correto: Free semanal, Premium ilimitado, cinco protocolos, Smart Connect, login por código de e-mail, Chrome só navegador. Evitar: “grátis ilimitado para sempre”, auditorias falsas, países inventados, macOS/Android já, kill switch anti-vazamento no iOS (existe no Chrome).',
      },
      {
        title: 'Assets',
        body: 'Logo e capturas: https://follow-net.com/assets/ e og.png. Hi-res: press@follow-net.com.',
      },
    ],
    bullets: [
      'VPN iOS + extensão Chrome',
      'Free semanal · Premium ilimitado',
      '5 protocolos incl. VLESS Reality',
      'press@follow-net.com',
    ],
  },
};

export function pressPage(lang: AppLang): ProductPage {
  return PRESS[lang];
}
