import type { AppLang } from '../../core/i18n.service';
import type { LandingSlug } from '../../core/seo-landing.slugs';

export type GuideCategory = {
  id: string;
  title: Record<AppLang, string>;
  note: Record<AppLang, string>;
  slugs: LandingSlug[];
};

/** Hub sections, ordered from first-time users to troubleshooting. Every guide appears exactly once. */
export const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    id: 'start',
    title: { en: 'Getting started', ru: 'С чего начать', uk: 'З чого почати', de: 'Erste Schritte', es: 'Primeros pasos', fr: 'Pour commencer', pt: 'Primeiros passos' },
    note: {
      en: 'What a VPN is, whether you need one and how to set it up on iPhone.',
      ru: 'Что такое VPN, нужен ли он вам и как настроить его на iPhone.',
      uk: 'Що таке VPN, чи потрібен він вам і як налаштувати його на iPhone.',
      de: 'Was ein VPN ist, ob Sie eines brauchen und wie Sie es auf dem iPhone einrichten.',
      es: 'Qué es una VPN, si la necesitas y cómo configurarla en el iPhone.',
      fr: 'Ce qu’est un VPN, si vous en avez besoin et comment le configurer sur iPhone.',
      pt: 'O que é uma VPN, se você precisa de uma e como configurá-la no iPhone.',
    },
    slugs: ['what-is-a-vpn', 'how-vpn-works', 'do-i-need-a-vpn', 'vpn-for-beginners', 'how-to-setup-vpn-iphone', 'vpn-for-iphone', 'vpn-for-ipad', 'best-vpn-iphone', 'secure-vpn-iphone'],
  },
  {
    id: 'wifi',
    title: { en: 'Wi‑Fi and travel', ru: 'Wi‑Fi и поездки', uk: 'Wi‑Fi і подорожі', de: 'WLAN und Reisen', es: 'Wi‑Fi y viajes', fr: 'Wi‑Fi et voyages', pt: 'Wi‑Fi e viagens' },
    note: {
      en: 'Cafés, hotels, airports and remote work — where a VPN matters most.',
      ru: 'Кафе, отели, аэропорты и удалённая работа — там, где VPN нужнее всего.',
      uk: 'Кафе, готелі, аеропорти й віддалена робота — там, де VPN потрібен найбільше.',
      de: 'Cafés, Hotels, Flughäfen und Remote-Arbeit — wo ein VPN am meisten zählt.',
      es: 'Cafeterías, hoteles, aeropuertos y teletrabajo: donde más importa una VPN.',
      fr: 'Cafés, hôtels, aéroports et télétravail — là où un VPN compte le plus.',
      pt: 'Cafés, hotéis, aeroportos e trabalho remoto — onde a VPN mais importa.',
    },
    slugs: ['vpn-for-wifi', 'vpn-hotel-wifi', 'vpn-airport-wifi', 'captive-portal-vpn-iphone', 'vpn-for-travel', 'vpn-for-remote-work', 'vpn-for-students', 'vpn-for-banking-apps', 'vpn-for-gaming-iphone'],
  },
  {
    id: 'protocols',
    title: { en: 'Protocols and features', ru: 'Протоколы и функции', uk: 'Протоколи й функції', de: 'Protokolle und Funktionen', es: 'Protocolos y funciones', fr: 'Protocoles et fonctions', pt: 'Protocolos e recursos' },
    note: {
      en: 'Smart Connect, WireGuard, IKEv2 and the rest — plus profiles, Auto-connect and widgets.',
      ru: 'Smart Connect, WireGuard, IKEv2 и другие протоколы, а также профили, автоподключение и виджеты.',
      uk: 'Smart Connect, WireGuard, IKEv2 та інші протоколи, а також профілі, автопідключення й віджети.',
      de: 'Smart Connect, WireGuard, IKEv2 und mehr — dazu Profile, automatisches Verbinden und Widgets.',
      es: 'Smart Connect, WireGuard, IKEv2 y el resto, además de perfiles, conexión automática y widgets.',
      fr: 'Smart Connect, WireGuard, IKEv2 et les autres — plus les profils, la connexion automatique et les widgets.',
      pt: 'Smart Connect, WireGuard, IKEv2 e os demais — além de perfis, conexão automática e widgets.',
    },
    slugs: ['smart-connect-vpn', 'wireguard-vs-ikev2', 'wireguard-vpn-ios', 'ikev2-vpn-ios', 'amneziawg-vpn-ios', 'hysteria2-vpn-ios', 'vless-reality-ios', 'network-profiles-ios', 'auto-connect-vpn-ios', 'vpn-widgets-ios', 'vpn-iphone-shortcuts', 'vpn-speed-test-ios'],
  },
  {
    id: 'privacy',
    title: { en: 'Privacy and security', ru: 'Приватность и безопасность', uk: 'Приватність і безпека', de: 'Datenschutz und Sicherheit', es: 'Privacidad y seguridad', fr: 'Confidentialité et sécurité', pt: 'Privacidade e segurança' },
    note: {
      en: 'DNS, kill switch, split tunneling and what we really process.',
      ru: 'DNS, kill switch, раздельное туннелирование и то, какие данные мы на самом деле обрабатываем.',
      uk: 'DNS, kill switch, роздільне тунелювання й те, які дані ми насправді обробляємо.',
      de: 'DNS, Kill Switch, Split-Tunneling und was wir wirklich verarbeiten.',
      es: 'DNS, kill switch, túnel dividido y lo que realmente tratamos.',
      fr: 'DNS, kill switch, split tunneling et ce que nous traitons vraiment.',
      pt: 'DNS, kill switch, split tunneling e o que realmente processamos.',
    },
    slugs: ['no-logs-vpn', 'dns-vpn-ios', 'what-is-dns-leak', 'what-is-kill-switch-vpn', 'vpn-split-tunneling-ios'],
  },
  {
    id: 'help',
    title: { en: 'Troubleshooting', ru: 'Решение проблем', uk: 'Розв’язання проблем', de: 'Problemlösung', es: 'Solución de problemas', fr: 'Dépannage', pt: 'Solução de problemas' },
    note: {
      en: 'When the VPN will not connect, feels slow or drains the battery.',
      ru: 'Если VPN не подключается, тормозит или садит батарею.',
      uk: 'Якщо VPN не підключається, гальмує чи розряджає батарею.',
      de: 'Wenn das VPN nicht verbindet, langsam ist oder den Akku leert.',
      es: 'Cuando la VPN no conecta, va lenta o gasta batería.',
      fr: 'Quand le VPN ne se connecte pas, rame ou vide la batterie.',
      pt: 'Quando a VPN não conecta, fica lenta ou gasta bateria.',
    },
    slugs: ['vpn-not-connecting-iphone', 'vpn-slow-iphone', 'vpn-battery-iphone'],
  },
  {
    id: 'plans',
    title: { en: 'Plans and devices', ru: 'Тарифы и устройства', uk: 'Тарифи й пристрої', de: 'Tarife und Geräte', es: 'Planes y dispositivos', fr: 'Offres et appareils', pt: 'Planos e aparelhos' },
    note: {
      en: 'Free vs Premium, the weekly limit, and FollowNet in Chrome.',
      ru: 'Free и Premium, недельный лимит и FollowNet в Chrome.',
      uk: 'Free і Premium, тижневий ліміт і FollowNet у Chrome.',
      de: 'Free und Premium, das Wochenlimit und FollowNet in Chrome.',
      es: 'Free y Premium, el límite semanal y FollowNet en Chrome.',
      fr: 'Free et Premium, la limite hebdomadaire et FollowNet dans Chrome.',
      pt: 'Free e Premium, o limite semanal e o FollowNet no Chrome.',
    },
    slugs: ['free-vpn-iphone', 'free-vpn-vs-paid', 'vpn-free-weekly-limit', 'vpn-premium-unlimited', 'vpn-chrome-extension', 'vpn-vs-proxy'],
  },
];
