import { AppLang } from './i18n.service';
import type { ProductPage } from './product-pages.content';

const AFFILIATES: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'Affiliates',
    h1: 'Partner with FollowNet — 30% revenue share',
    lead:
      'Promote FollowNet VPN (iOS, Android and Chrome) and earn 30% of qualifying Premium payments from your traffic. Tracking via AppsFlyer OneLink. Apply by email — we review every partner manually.',
    blocks: [
      {
        title: 'What you get',
        body: 'A unique AppsFlyer OneLink for your channel, creatives and short copy you can reuse, and monthly payouts based on attributed paid conversions. Web checkout can also be attributed through FirstPromoter when the visitor pays on follow-net.com.',
      },
      {
        title: 'Commission',
        body: '30% of qualifying Premium payments attributed to your link. Exact hold period and payout method are confirmed when you are approved (typically monthly, after refund window). We do not pay for fake installs, incentivized junk traffic, or trademark bidding on “FollowNet”.',
      },
      {
        title: 'How to apply',
        body: 'Email support@follow-net.com with: your name or brand, where you will promote (Telegram / YouTube / site / etc.), approximate audience size, and preferred payout contact. We reply with terms and your personal OneLink.',
      },
      {
        title: 'Allowed messaging',
        body: 'Promote privacy, public Wi‑Fi, travel, encryption, and modern protocols. Do not use streaming-brand “unblock” claims, piracy angles, or competitor-trademark bait — those get partners and the app rejected in stores.',
      },
    ],
    bullets: [
      '30% revenue share on qualifying Premium payments',
      'AppsFlyer OneLink attribution (iOS + Android + Chrome)',
      'Manual approval — real channels only',
      'Apply: support@follow-net.com',
    ],
  },
  ru: {
    kicker: 'Партнёрам',
    h1: 'Партнёрка FollowNet — 30% с оплат',
    lead:
      'Рекламируйте FollowNet VPN (iOS, Android и Chrome) и получайте 30% с подходящих Premium-оплат с вашего трафика. Трекинг — AppsFlyer OneLink. Заявка по email — каждого партнёра смотрим вручную.',
    blocks: [
      {
        title: 'Что вы получаете',
        body: 'Уникальный AppsFlyer OneLink под ваш канал, креативы и короткие тексты, ежемесячные выплаты по атрибутированным оплатам. Web-checkout на follow-net.com дополнительно можно атрибутировать через FirstPromoter.',
      },
      {
        title: 'Комиссия',
        body: '30% с подходящих Premium-оплат по вашей ссылке. Холд и способ выплаты подтверждаем при апруве (обычно раз в месяц после окна рефандов). Не платим за накрутку, инсентив-мусор и конкуренцию по бренду «FollowNet».',
      },
      {
        title: 'Как подать заявку',
        body: 'Напишите на support@follow-net.com: имя/бренд, где будете лить (Telegram / YouTube / сайт и т.д.), примерный охват и контакт для выплат. Ответим условиями и личной OneLink.',
      },
      {
        title: 'Как можно писать',
        body: 'Privacy, публичный Wi‑Fi, поездки, шифрование, современные протоколы. Без «разблокируй Netflix», пиратства и чужих trademark — из‑за этого режут и партнёров, и приложение в сторах.',
      },
    ],
    bullets: [
      '30% с подходящих Premium-оплат',
      'Атрибуция AppsFlyer OneLink (iOS + Android + Chrome)',
      'Ручной апрув — только живые каналы',
      'Заявка: support@follow-net.com',
    ],
  },
  uk: {
    kicker: 'Партнерам',
    h1: 'Партнерка FollowNet — 30% з оплат',
    lead:
      'Просувайте FollowNet VPN (iOS, Android і Chrome) і отримуйте 30% з відповідних Premium-оплат з вашого трафіку. Трекінг — AppsFlyer OneLink. Заявка на email — кожного партнера дивимось вручну.',
    blocks: [
      {
        title: 'Що ви отримуєте',
        body: 'Унікальний AppsFlyer OneLink під ваш канал, креативи й короткі тексти, щомісячні виплати за атрибутованими оплатами. Web-checkout на follow-net.com також можна атрибутувати через FirstPromoter.',
      },
      {
        title: 'Комісія',
        body: '30% з відповідних Premium-оплат за вашим посиланням. Холд і спосіб виплати підтверджуємо при апруві. Не платимо за накрутку, інсентив-сміття і бід на бренд «FollowNet».',
      },
      {
        title: 'Як подати заявку',
        body: 'Напишіть на support@follow-net.com: ім’я/бренд, де будете лити, орієнтовний охоплення і контакт для виплат. Відповімо умовами та особистою OneLink.',
      },
      {
        title: 'Як можна писати',
        body: 'Privacy, публічний Wi‑Fi, подорожі, шифрування, сучасні протоколи. Без «розблокуй Netflix», піратства і чужих trademark.',
      },
    ],
    bullets: [
      '30% з відповідних Premium-оплат',
      'Атрибуція AppsFlyer OneLink',
      'Ручний апрув',
      'Заявка: support@follow-net.com',
    ],
  },
  de: {
    kicker: 'Partner',
    h1: 'FollowNet-Partnerprogramm — 30% Revenue Share',
    lead:
      'Bewerben Sie FollowNet VPN (iOS, Android und Chrome) und verdienen Sie 30% an qualifizierenden Premium-Zahlungen. Tracking über AppsFlyer OneLink. Bewerbung per E-Mail — jeder Partner wird manuell geprüft.',
    blocks: [
      {
        title: 'Was Sie erhalten',
        body: 'Einen eindeutigen AppsFlyer-OneLink für Ihren Kanal, Creatives und Kurztexte sowie monatliche Auszahlungen für attribuierte Käufe. Web-Checkout auf follow-net.com kann zusätzlich über FirstPromoter attribuiert werden.',
      },
      {
        title: 'Provision',
        body: '30% der qualifizierenden Premium-Zahlungen über Ihren Link. Hold und Auszahlungsmethode bestätigen wir bei Freigabe. Keine Zahlung für Fake-Installs, Incentive-Müll oder Markengebot auf „FollowNet“.',
      },
      {
        title: 'Bewerbung',
        body: 'E-Mail an support@follow-net.com mit Name/Marke, Kanal, Reichweite und Auszahlungskontakt. Wir antworten mit Konditionen und persönlichem OneLink.',
      },
      {
        title: 'Erlaubte Botschaften',
        body: 'Privacy, öffentliches WLAN, Reisen, Verschlüsselung, moderne Protokolle. Keine Streaming-Unblock-/Piraterie-Claims und keine Fremdmarken als Köder.',
      },
    ],
    bullets: [
      '30% Revenue Share',
      'AppsFlyer OneLink',
      'Manuelle Freigabe',
      'support@follow-net.com',
    ],
  },
  es: {
    kicker: 'Afiliados',
    h1: 'Partners FollowNet — 30% de comisión',
    lead:
      'Promociona FollowNet VPN (iOS, Android y Chrome) y gana el 30% de los pagos Premium atribuibles. Tracking con AppsFlyer OneLink. Solicita por email — revisamos cada partner a mano.',
    blocks: [
      {
        title: 'Qué recibes',
        body: 'OneLink único de AppsFlyer, creatividades y textos cortos, pagos mensuales por conversiones de pago. El checkout web en follow-net.com también puede atribuirse con FirstPromoter.',
      },
      {
        title: 'Comisión',
        body: '30% de pagos Premium cualificados. Hold y método de pago se confirman al aprobarte. No pagamos installs falsos, tráfico incentive basura ni pujas de marca «FollowNet».',
      },
      {
        title: 'Cómo aplicar',
        body: 'Escribe a support@follow-net.com con nombre/marca, canal, audiencia y contacto de pago. Respondemos con condiciones y tu OneLink.',
      },
      {
        title: 'Mensajes permitidos',
        body: 'Privacidad, Wi‑Fi público, viajes, cifrado y protocolos modernos. Sin “desbloquear Netflix”, piratería ni marcas ajenas.',
      },
    ],
    bullets: [
      '30% revenue share',
      'AppsFlyer OneLink',
      'Aprobación manual',
      'support@follow-net.com',
    ],
  },
  fr: {
    kicker: 'Affiliation',
    h1: 'Partenaires FollowNet — 30% de commission',
    lead:
      'Poussez FollowNet VPN (iOS, Android et Chrome) et gagnez 30% sur les paiements Premium éligibles. Tracking AppsFlyer OneLink. Candidature par e-mail — chaque partenaire est validé à la main.',
    blocks: [
      {
        title: 'Ce que vous obtenez',
        body: 'OneLink AppsFlyer unique, créas et textes courts, paiements mensuels sur conversions payantes. Le checkout web follow-net.com peut aussi passer par FirstPromoter.',
      },
      {
        title: 'Commission',
        body: '30% des paiements Premium éligibles. Hold et mode de paiement confirmés à l’approbation. Pas de paiement pour faux installs, trafic incentive pourri ou brand bidding « FollowNet ».',
      },
      {
        title: 'Candidature',
        body: 'Écrivez à support@follow-net.com : nom/marque, canal, audience, contact de paiement. Nous renvoyons les conditions et votre OneLink.',
      },
      {
        title: 'Messages autorisés',
        body: 'Confidentialité, Wi‑Fi public, voyage, chiffrement, protocoles modernes. Pas de « débloquer Netflix », piraterie ou marques tierces.',
      },
    ],
    bullets: [
      '30% revenue share',
      'AppsFlyer OneLink',
      'Validation manuelle',
      'support@follow-net.com',
    ],
  },
  pt: {
    kicker: 'Afiliados',
    h1: 'Parceiros FollowNet — 30% de comissão',
    lead:
      'Promova o FollowNet VPN (iOS, Android e Chrome) e ganhe 30% dos pagamentos Premium elegíveis. Tracking com AppsFlyer OneLink. Candidate-se por e-mail — cada parceiro é aprovado manualmente.',
    blocks: [
      {
        title: 'O que você recebe',
        body: 'OneLink AppsFlyer exclusivo, criativos e textos curtos, pagamentos mensais por conversões pagas. O checkout web em follow-net.com também pode usar FirstPromoter.',
      },
      {
        title: 'Comissão',
        body: '30% dos pagamentos Premium elegíveis. Hold e método de pagamento confirmados na aprovação. Não pagamos installs falsos, tráfego incentive lixo nem brand bidding em «FollowNet».',
      },
      {
        title: 'Como se candidatar',
        body: 'Envie e-mail para support@follow-net.com com nome/marca, canal, audiência e contato de pagamento. Respondemos com termos e seu OneLink.',
      },
      {
        title: 'Mensagens permitidas',
        body: 'Privacidade, Wi‑Fi público, viagem, criptografia e protocolos modernos. Sem “desbloquear Netflix”, pirataria ou marcas de terceiros.',
      },
    ],
    bullets: [
      '30% revenue share',
      'AppsFlyer OneLink',
      'Aprovação manual',
      'support@follow-net.com',
    ],
  },
};

export function affiliatesPage(lang: AppLang): ProductPage {
  return AFFILIATES[lang];
}
