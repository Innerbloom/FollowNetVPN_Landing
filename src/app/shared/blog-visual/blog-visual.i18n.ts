/** Labels for the diagrams drawn inside blog posts. */
type L = { ru: string; en: string; de: string; es: string; fr: string; pt: string; uk: string };

export const BLOG_VISUAL_DICT: Record<string, L> = {
  BV_YOU: { ru: 'Ваше устройство', en: 'Your device', de: 'Dein Gerät', es: 'Tu dispositivo', fr: 'Votre appareil', pt: 'Seu dispositivo', uk: 'Ваш пристрій' },
  BV_NET: { ru: 'Wi‑Fi или оператор', en: 'Wi‑Fi or carrier', de: 'WLAN oder Anbieter', es: 'Wi‑Fi u operador', fr: 'Wi‑Fi ou opérateur', pt: 'Wi‑Fi ou operadora', uk: 'Wi‑Fi або оператор' },
  BV_NET_SEES: { ru: 'видит только шифр', en: 'sees only encrypted data', de: 'sieht nur verschlüsselte Daten', es: 'solo ve datos cifrados', fr: 'ne voit que du chiffré', pt: 'só vê dados criptografados', uk: 'бачить лише шифр' },
  BV_SERVER: { ru: 'Сервер FollowNet', en: 'FollowNet server', de: 'FollowNet-Server', es: 'Servidor FollowNet', fr: 'Serveur FollowNet', pt: 'Servidor FollowNet', uk: 'Сервер FollowNet' },
  BV_SITE: { ru: 'Сайт', en: 'Website', de: 'Website', es: 'Sitio web', fr: 'Site web', pt: 'Site', uk: 'Сайт' },
  BV_SITE_SEES: { ru: 'видит адрес сервера', en: 'sees the server address', de: 'sieht die Serveradresse', es: 've la dirección del servidor', fr: 'voit l’adresse du serveur', pt: 'vê o endereço do servidor', uk: 'бачить адресу сервера' },
  BV_TUNNEL: { ru: 'Зашифрованный туннель', en: 'Encrypted tunnel', de: 'Verschlüsselter Tunnel', es: 'Túnel cifrado', fr: 'Tunnel chiffré', pt: 'Túnel criptografado', uk: 'Зашифрований тунель' },

  BV_PROTO_TITLE: { ru: 'Пять протоколов, у каждого своя сила', en: 'Five protocols, each with its strength', de: 'Fünf Protokolle, jedes mit eigener Stärke', es: 'Cinco protocolos, cada uno con su fuerza', fr: 'Cinq protocoles, chacun son point fort', pt: 'Cinco protocolos, cada um com sua força', uk: 'П’ять протоколів, у кожного своя сила' },
  BV_P_WG: { ru: 'Быстрый и лёгкий', en: 'Fast and light', de: 'Schnell und leicht', es: 'Rápido y ligero', fr: 'Rapide et léger', pt: 'Rápido e leve', uk: 'Швидкий і легкий' },
  BV_P_IKE: { ru: 'Держится при смене сети', en: 'Holds on when networks change', de: 'Hält beim Netzwechsel', es: 'Aguanta al cambiar de red', fr: 'Tient lors des changements de réseau', pt: 'Aguenta ao trocar de rede', uk: 'Тримається при зміні мережі' },
  BV_P_AWG: { ru: 'Маскирует WireGuard', en: 'Disguised WireGuard', de: 'Getarntes WireGuard', es: 'WireGuard camuflado', fr: 'WireGuard camouflé', pt: 'WireGuard disfarçado', uk: 'Маскує WireGuard' },
  BV_P_HY2: { ru: 'QUIC для плохих сетей', en: 'QUIC for weak networks', de: 'QUIC für schwache Netze', es: 'QUIC para redes débiles', fr: 'QUIC pour réseaux faibles', pt: 'QUIC para redes fracas', uk: 'QUIC для слабких мереж' },
  BV_P_VLESS: { ru: 'Похож на обычный HTTPS', en: 'Looks like regular HTTPS', de: 'Sieht aus wie normales HTTPS', es: 'Parece HTTPS normal', fr: 'Ressemble à du HTTPS classique', pt: 'Parece HTTPS comum', uk: 'Схожий на звичайний HTTPS' },

  BV_SMART_TITLE: { ru: 'Smart Connect пробует по очереди', en: 'Smart Connect tries them in turn', de: 'Smart Connect probiert der Reihe nach', es: 'Smart Connect los prueba por turnos', fr: 'Smart Connect les essaie tour à tour', pt: 'Smart Connect testa um por vez', uk: 'Smart Connect пробує по черзі' },
  BV_SMART_FAIL: { ru: 'не прошёл', en: 'blocked', de: 'blockiert', es: 'bloqueado', fr: 'bloqué', pt: 'bloqueado', uk: 'не пройшов' },
  BV_SMART_OK: { ru: 'подключено', en: 'connected', de: 'verbunden', es: 'conectado', fr: 'connecté', pt: 'conectado', uk: 'підключено' },

  BV_ACCOUNT: { ru: 'Один аккаунт', en: 'One account', de: 'Ein Konto', es: 'Una cuenta', fr: 'Un compte', pt: 'Uma conta', uk: 'Один акаунт' },
  BV_SEATS: { ru: 'До 5 устройств на Premium', en: 'Up to 5 devices on Premium', de: 'Bis zu 5 Geräte mit Premium', es: 'Hasta 5 dispositivos con Premium', fr: 'Jusqu’à 5 appareils avec Premium', pt: 'Até 5 dispositivos no Premium', uk: 'До 5 пристроїв на Premium' },

  BV_FREE_D: { ru: 'Недельный лимит трафика, сброс раз в неделю', en: 'Weekly traffic limit, resets every week', de: 'Wöchentliches Limit, setzt sich jede Woche zurück', es: 'Límite semanal, se reinicia cada semana', fr: 'Limite hebdomadaire, remise à zéro chaque semaine', pt: 'Limite semanal, reinicia toda semana', uk: 'Тижневий ліміт трафіку, скидається щотижня' },
  BV_PREM_D: { ru: 'Без лимита, все локации', en: 'No limit, all locations', de: 'Ohne Limit, alle Standorte', es: 'Sin límite, todas las ubicaciones', fr: 'Sans limite, tous les emplacements', pt: 'Sem limite, todos os locais', uk: 'Без ліміту, усі локації' },
  BV_USED: { ru: 'использовано', en: 'used', de: 'verbraucht', es: 'usado', fr: 'utilisé', pt: 'usado', uk: 'використано' },
  BV_UNLIM: { ru: 'безлимит', en: 'unlimited', de: 'unbegrenzt', es: 'ilimitado', fr: 'illimité', pt: 'ilimitado', uk: 'безліміт' },

  BV_DNS_TITLE: { ru: 'DNS-запросы идут внутри туннеля', en: 'DNS lookups travel inside the tunnel', de: 'DNS-Anfragen laufen im Tunnel', es: 'Las consultas DNS van dentro del túnel', fr: 'Les requêtes DNS passent dans le tunnel', pt: 'As consultas DNS vão dentro do túnel', uk: 'DNS-запити йдуть усередині тунелю' },
  BV_DNS_Q: { ru: 'какой адрес у сайта?', en: 'what is the site’s address?', de: 'welche Adresse hat die Seite?', es: '¿cuál es la dirección del sitio?', fr: 'quelle est l’adresse du site ?', pt: 'qual é o endereço do site?', uk: 'яка адреса в сайту?' },
  BV_DNS_PICK: { ru: 'выбранный DNS-профиль', en: 'your chosen DNS profile', de: 'dein DNS-Profil', es: 'tu perfil DNS', fr: 'votre profil DNS', pt: 'seu perfil de DNS', uk: 'вибраний DNS-профіль' },

  BV_EXT: { ru: 'Расширение Chrome', en: 'Chrome extension', de: 'Chrome-Erweiterung', es: 'Extensión de Chrome', fr: 'Extension Chrome', pt: 'Extensão do Chrome', uk: 'Розширення Chrome' },
  BV_EXT_D: { ru: 'только вкладки браузера', en: 'browser tabs only', de: 'nur Browser-Tabs', es: 'solo las pestañas del navegador', fr: 'uniquement les onglets du navigateur', pt: 'só as abas do navegador', uk: 'лише вкладки браузера' },
  BV_APP: { ru: 'Приложение FollowNet', en: 'FollowNet app', de: 'FollowNet-App', es: 'App FollowNet', fr: 'App FollowNet', pt: 'App FollowNet', uk: 'Застосунок FollowNet' },
  BV_APP_D: { ru: 'все приложения устройства', en: 'every app on the device', de: 'alle Apps des Geräts', es: 'todas las apps del dispositivo', fr: 'toutes les apps de l’appareil', pt: 'todos os apps do dispositivo', uk: 'усі застосунки пристрою' },
  BV_PROTECTED: { ru: 'защищено', en: 'protected', de: 'geschützt', es: 'protegido', fr: 'protégé', pt: 'protegido', uk: 'захищено' },
  BV_DIRECT: { ru: 'напрямую', en: 'direct', de: 'direkt', es: 'directo', fr: 'en direct', pt: 'direto', uk: 'напряму' },
  BV_OTHER_APPS: { ru: 'Почта, мессенджеры, игры', en: 'Mail, messengers, games', de: 'Mail, Messenger, Spiele', es: 'Correo, mensajería, juegos', fr: 'Mail, messageries, jeux', pt: 'E-mail, mensageiros, jogos', uk: 'Пошта, месенджери, ігри' },

  BV_AC_T: { ru: 'VPN включается сам', en: 'The VPN turns on by itself', de: 'Das VPN schaltet sich selbst ein', es: 'La VPN se activa sola', fr: 'Le VPN s’active seul', pt: 'A VPN liga sozinha', uk: 'VPN вмикається сам' },
  BV_AC_WIFI: { ru: 'Только Wi‑Fi', en: 'Wi‑Fi only', de: 'Nur WLAN', es: 'Solo Wi‑Fi', fr: 'Wi‑Fi uniquement', pt: 'Só Wi‑Fi', uk: 'Лише Wi‑Fi' },
  BV_AC_WIFI_D: { ru: 'кафе, отели, аэропорты', en: 'cafés, hotels, airports', de: 'Cafés, Hotels, Flughäfen', es: 'cafés, hoteles, aeropuertos', fr: 'cafés, hôtels, aéroports', pt: 'cafés, hotéis, aeroportos', uk: 'кафе, готелі, аеропорти' },
  BV_AC_LTE: { ru: 'Только LTE', en: 'LTE only', de: 'Nur LTE', es: 'Solo LTE', fr: 'LTE uniquement', pt: 'Só LTE', uk: 'Лише LTE' },
  BV_AC_LTE_D: { ru: 'мобильная сеть и роуминг', en: 'mobile data and roaming', de: 'Mobilfunk und Roaming', es: 'datos móviles y roaming', fr: 'réseau mobile et itinérance', pt: 'dados móveis e roaming', uk: 'мобільна мережа й роумінг' },
  BV_AC_ALWAYS: { ru: 'Всегда', en: 'Always', de: 'Immer', es: 'Siempre', fr: 'Toujours', pt: 'Sempre', uk: 'Завжди' },
  BV_AC_ALWAYS_D: { ru: 'в любой сети', en: 'on any network', de: 'in jedem Netz', es: 'en cualquier red', fr: 'sur tout réseau', pt: 'em qualquer rede', uk: 'у будь-якій мережі' },
};
