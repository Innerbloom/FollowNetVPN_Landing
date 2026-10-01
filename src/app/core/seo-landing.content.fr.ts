import type { LandingContent } from './seo-landing.content';
import type { CoreLandingSlug } from './seo-landing.slugs';

const CTA = 'Télécharger dans l’App Store';

export const FR: Record<CoreLandingSlug, LandingContent> = {
  'vpn-for-iphone': {
    h1: 'VPN pour iPhone — rapide, privé et simple',
    lead:
      'FollowNet est un VPN iOS conçu pour l’iPhone et l’iPad : connexion en un geste, WireGuard et IKEv2, Smart Connect pour les réseaux restrictifs et une offre gratuite sans carte bancaire.',
    sections: [
      {
        title: 'Pourquoi un VPN sur iPhone ?',
        body:
          'Le Wi‑Fi public, les hotspots en voyage et certains opérateurs mobiles exposent votre trafic à l’espionnage ou au bridage. Un VPN chiffre la connexion et aide à garder privés la navigation, les messageries et le streaming sur iOS.',
      },
      {
        title: 'Conçu pour iOS, pas un clone générique',
        body:
          'FollowNet utilise les API VPN natives d’iOS (Network Extension) et réunit Raccourcis, connexion automatique, DNS personnalisé et les emplacements actuellement listés dans l’app dans une interface pensée pour l’iPhone.',
      },
    ],
    bullets: [
      'Offre Free avec trafic hebdomadaire — essayez avant de vous abonner',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2 et VLESS Reality (Smart Connect choisit si besoin)',
      'Le traitement des données est expliqué dans notre Politique de confidentialité',
      'Premium : données illimitées et emplacements inclus dans l’offre actuelle',
    ],
    cta: CTA,
    faq: [
      { q: 'FollowNet est-il un VPN gratuit pour iPhone ?', a: 'Oui. FollowNet propose une offre gratuite avec un trafic hebdomadaire. Premium supprime la limite et donne accès aux emplacements affichés pour cette offre dans l’app.' },
      { q: 'FollowNet fonctionne-t-il sur iPad ?', a: 'Oui. La même app iOS fonctionne sur iPhone et iPad.' },
      { q: 'Quel protocole VPN utiliser sur iOS ?', a: 'WireGuard est rapide et moderne. IKEv2 est stable sur les réseaux mobiles. Smart Connect choisit automatiquement le meilleur protocole pour votre réseau.' },
    ],
  },
  'wireguard-vpn-ios': {
    h1: 'VPN WireGuard pour iOS — rapide et moderne',
    lead:
      'FollowNet intègre WireGuard en natif sur iPhone et iPad, ainsi qu’AmneziaWG et d’autres protocoles quand les réseaux bloquent les VPN classiques. Smart Connect peut basculer pour vous afin que vous restiez connecté sans tâtonner.',
    sections: [
      {
        title: 'Pourquoi WireGuard sur iOS ?',
        body:
          'WireGuard est léger, utilise une cryptographie moderne et offre généralement une latence plus faible que les anciens protocoles VPN. Sur iPhone et iPad, c’est un excellent choix par défaut pour la navigation, les messageries, les appels vidéo et beaucoup de sessions de streaming ou de jeu sur des réseaux calmes.',
      },
      {
        title: 'Activer WireGuard dans FollowNet',
        body:
          'Ouvrez Réglages → Protocole et choisissez WireGuard, ou laissez Smart Connect activé pour que FollowNet le choisisse quand il convient. Après la connexion, vérifiez le protocole actif dans l’app, puis lancez le Speed Test sur le même Wi‑Fi ou la même 4G pour comparer de vrais chiffres.',
      },
      {
        title: 'Quand WireGuard est bloqué ou bridé',
        body:
          'Certains FAI, hôtels et cartes SIM de voyage détectent ou ralentissent WireGuard. Selon votre offre et votre réseau, FollowNet peut se rabattre sur AmneziaWG, Hysteria2, VLESS Reality ou IKEv2 — manuellement ou via Smart Connect (et avec le profil Restricted si vous voulez cette échelle par défaut).',
      },
      {
        title: 'WireGuard face aux autres protocoles FollowNet',
        body:
          'Sur les réseaux ouverts, WireGuard est souvent le plus rapide. IKEv2 peut se reconnecter plus en douceur lors des changements d’antenne. AmneziaWG et Hysteria2 aident quand le réseau freine les tunnels classiques. Aucun protocole ne gagne partout : mesurez sur votre trajet.',
      },
      {
        title: 'Free hebdomadaire ou Premium',
        body:
          'WireGuard est disponible dans le trafic hebdomadaire Free pour évaluer la vitesse et la fiabilité. Premium supprime la limite et débloque les emplacements de l’offre Premium actuelle affichés dans l’app. Nous n’inventons pas de nombre de serveurs ici.',
      },
    ],
    bullets: [
      'WireGuard natif via Network Extension d’iOS',
      'WireGuard manuel ou sélection automatique avec Smart Connect',
      'Solutions de repli si besoin : IKEv2, AmneziaWG, Hysteria2',
      'Emplacements listés dans l’app — sans les gonfler sur cette page',
      'Fonctionne dans le trafic hebdomadaire Free ; Premium pour un usage illimité',
    ],
    cta: 'Obtenir FollowNet sur l’App Store',
    faq: [
      { q: 'WireGuard est-il sûr sur iPhone ?', a: 'WireGuard repose sur une conception cryptographique moderne. FollowNet l’exécute via le framework Network Extension d’Apple, comme les autres VPN de l’App Store.' },
      { q: 'Puis-je forcer WireGuard uniquement ?', a: 'Oui. Ouvrez Réglages → Protocole et choisissez WireGuard. Utilisez Smart Connect si vous préférez une sélection automatique.' },
      { q: 'Et si WireGuard ne se connecte pas ?', a: 'Essayez Smart Connect, passez à AmneziaWG, IKEv2 ou Hysteria2, choisissez un autre emplacement de l’app et refaites un Speed Test.' },
      { q: 'FollowNet gère-t-il le split tunneling sur iOS ?', a: 'Une fois connecté, iOS fait passer le trafic de l’appareil par le tunnel VPN. Le split tunneling par app est limité par la plateforme Apple ; FollowNet suit les règles VPN du système.' },
    ],
  },
  'free-vpn-iphone': {
    h1: 'VPN gratuit pour iPhone — essayez FollowNet avec un trafic hebdomadaire',
    lead:
      'Vous cherchez un VPN gratuit sur iPhone sans carte bancaire ? FollowNet Free inclut un trafic hebdomadaire, des protocoles modernes, Smart Connect et tout le nécessaire pour évaluer le service avant Premium.',
    sections: [
      {
        title: 'Ce que comprend Free',
        body:
          'FollowNet Free vous permet de vous connecter sur iPhone et iPad dans la limite d’un trafic hebdomadaire. Vous pouvez essayer les protocoles de votre offre, choisir parmi les emplacements Free listés dans l’app, utiliser Smart Connect et tester la connexion automatique, les profils DNS et le Speed Test quand ils sont disponibles.',
      },
      {
        title: 'Comment fonctionne le quota hebdomadaire',
        body:
          'Free est plafonné par semaine, pas « illimité pour toujours ». Utilisez ce quota pour tester les réseaux Wi‑Fi et mobiles qui comptent pour vous. Une fois épuisé, attendez la période suivante ou passez à Premium pour un trafic illimité selon les conditions actuelles de l’App Store.',
      },
      {
        title: 'Free ou Premium — comparaison honnête',
        body:
          'Free sert à évaluer : trafic hebdomadaire et serveurs Free affichés dans l’app. Premium supprime la limite et débloque les emplacements Premium de l’offre actuelle. Premium n’est pas un « chiffrement plus fort » : c’est de la capacité, des emplacements et du confort. Le détail exact des offres est dans l’app.',
      },
      {
        title: 'Démarrer sans carte',
        body:
          'Téléchargez FollowNet sur l’App Store, connectez-vous avec un code reçu par e-mail, approuvez une fois la configuration VPN d’iOS et touchez Se connecter. Aucune carte bancaire n’est requise pour Free. Lisez la Politique de confidentialité avant d’utiliser l’app pour des sessions sensibles.',
      },
      {
        title: 'Quand Free suffit — et quand ce n’est pas le cas',
        body:
          'Free convient bien aux courtes sessions sur Wi‑Fi public, aux escales en voyage et à la comparaison de protocoles. Le streaming HD prolongé, l’usage mobile toute la journée ou les gros téléchargements demandent généralement Premium à cause du quota hebdomadaire. Aucune offre ne garantit le déblocage de catalogues de streaming.',
      },
    ],
    bullets: [
      'Aucune carte bancaire requise pour Free',
      'Quota hebdomadaire — assez pour évaluer, pas illimité',
      'Protocoles et emplacements Free affichés dans l’app',
      'Smart Connect, connexion automatique, DNS et Speed Test quand disponibles',
      'Passage à Premium dans l’app via l’App Store quand il vous faut de l’illimité',
    ],
    cta: CTA,
    faq: [
      { q: 'FollowNet est-il vraiment gratuit sur iPhone ?', a: 'Oui. Free inclut un trafic hebdomadaire pour évaluer. Premium est facultatif et supprime la limite selon les conditions actuelles de l’offre dans l’app.' },
      { q: 'La limite Free est-elle quotidienne ou hebdomadaire ?', a: 'Hebdomadaire. Consultez l’app pour le quota actuel et la date de renouvellement — ne comptez pas sur une recharge quotidienne.' },
      { q: 'Y a-t-il des publicités dans la version gratuite ?', a: 'FollowNet Free est financé par la publicité dans certaines régions ; Premium est sans publicité.' },
      { q: 'Puis-je utiliser Free sur un Wi‑Fi public ?', a: 'Oui. Free chiffre aussi le trafic dans la limite du quota hebdomadaire — utile dans les cafés, aéroports et hôtels.' },
    ],
  },
  'vpn-for-ipad': {
    h1: 'VPN pour iPad — la même app FollowNet, optimisée pour iOS',
    lead:
      'FollowNet est disponible sur iPhone et iPad sous forme d’app iOS, avec les protocoles et fonctions de compte de la version actuelle de l’App Store.',
    sections: [
      { title: 'Pourquoi un VPN sur iPad ?', body: 'L’iPad se connecte souvent aux mêmes Wi‑Fi publics que votre téléphone : voyages, coworking, réseaux invités. Un VPN aide à protéger Safari, les apps et les téléchargements en données mobiles comme en Wi‑Fi.' },
      { title: 'Utiliser FollowNet sur iPad', body: 'Configurez le VPN via la même autorisation iOS, puis choisissez le protocole, la connexion automatique et les options DNS disponibles dans la version actuelle.' },
    ],
    bullets: ['App iOS universelle — iPhone et iPad', 'VPN natif via Network Extension', 'Smart Connect pour les réseaux restrictifs', 'Offre Free et Premium via l’App Store'],
    cta: CTA,
    faq: [
      { q: 'Faut-il une app iPad séparée ?', a: 'Non. Téléchargez FollowNet une seule fois sur l’App Store ; elle fonctionne sur iPhone et iPad.' },
      { q: 'Le VPN fonctionne-t-il avec le clavier iPad et Stage Manager ?', a: 'Oui. Le VPN fonctionne au niveau du système et n’interfère pas avec le multitâche.' },
      { q: 'Puis-je utiliser des serveurs différents sur iPad et iPhone ?', a: 'Votre compte fonctionne sur chaque appareil connecté ; choisissez le serveur appareil par appareil.' },
    ],
  },
  'ikev2-vpn-ios': {
    h1: 'VPN IKEv2 pour iOS — stable sur les réseaux mobiles',
    lead:
      'IKEv2 est un protocole VPN éprouvé pour iPhone et iPad : reconnexion rapide quand vous passez du Wi‑Fi aux données mobiles. FollowNet prend en charge IKEv2 aux côtés de WireGuard, AmneziaWG et Smart Connect.',
    sections: [
      { title: 'Quand choisir IKEv2 sur iOS', body: 'IKEv2 gère bien les changements de réseau : trajets quotidiens, ascenseurs, bascules entre 4G et Wi‑Fi. C’est un bon choix quand votre opérateur bride ou bloque WireGuard.' },
      { title: 'IKEv2 dans FollowNet', body: 'Sélectionnez IKEv2 manuellement dans Réglages → Protocole, ou utilisez Smart Connect. L’app indique quelles combinaisons de protocole et de serveur sont disponibles actuellement.' },
    ],
    bullets: ['Reconnexions stables lors des changements d’antenne', 'Disponible en Free et en Premium', 'Fonctionne avec la connexion automatique et le DNS personnalisé', 'Smart Connect peut choisir IKEv2 automatiquement'],
    cta: CTA,
    faq: [
      { q: 'IKEv2 est-il sûr sur iPhone ?', a: 'Bien configuré, IKEv2 utilise un chiffrement robuste. FollowNet l’implémente dans le framework VPN d’Apple.' },
      { q: 'IKEv2 ou WireGuard sur iOS ?', a: 'WireGuard est souvent plus rapide ; IKEv2 peut être plus stable sur certains réseaux mobiles. Smart Connect essaie les deux.' },
      { q: 'Comment activer IKEv2 ?', a: 'Réglages → Protocole → IKEv2, ou activez Smart Connect pour une sélection automatique.' },
    ],
  },
  'vpn-for-wifi': {
    h1: 'VPN pour Wi‑Fi public sur iPhone — restez chiffré',
    lead:
      'Cafés, aéroports, hôtels et réseaux invités sont pratiques mais risqués. FollowNet chiffre le trafic de l’iPhone et de l’iPad jusqu’au serveur VPN sur les Wi‑Fi auxquels vous ne faites pas entièrement confiance — dans le quota hebdomadaire Free ou en illimité avec Premium.',
    sections: [
      {
        title: 'Les risques des Wi‑Fi ouverts et invités',
        body:
          'Les hotspots partagés peuvent exposer le trafic non chiffré aux autres utilisateurs du même réseau. Même un Wi‑Fi invité protégé par mot de passe peut être géré par des tiers peu fiables. Un VPN ajoute un chiffrement entre votre appareil et le serveur VPN ; il ne rend pas à lui seul un hotspot malveillant « sûr » et n’arrête pas l’hameçonnage.',
      },
      {
        title: 'Configuration recommandée pour le Wi‑Fi public',
        body:
          'Rejoignez le réseau, terminez d’abord la connexion au portail captif, puis connectez FollowNet. Sur un réseau inconnu, préférez Smart Connect. Activez la connexion automatique « Wi‑Fi uniquement » si vous voulez que le tunnel démarre dès que vous quittez les réseaux de confiance de la maison.',
      },
      {
        title: 'Connexion automatique et habitudes au quotidien',
        body:
          'Les modes de connexion automatique (Wi‑Fi uniquement, 4G uniquement, Toujours ou Désactivé) décident quand le VPN démarre. Associez-les à un widget sur l’écran d’accueil pour vérifier que le tunnel est actif une fois installé avec votre café — l’état d’abord, pas un tableau de bord marketing.',
      },
      {
        title: 'Vitesse et portails captifs',
        body:
          'Un peu de surcharge est normal sur les connexions d’hôtel. Utilisez le Speed Test et un emplacement plus proche listé dans l’app. Si WireGuard échoue après le portail, essayez Smart Connect ou AmneziaWG/Hysteria2. Un VPN ne peut pas inventer la bande passante que le hotspot n’a pas.',
      },
      {
        title: 'Free hebdomadaire ou Premium en Wi‑Fi',
        body:
          'Free chiffre les sessions sur Wi‑Fi public dans la limite du quota hebdomadaire — assez pour des journées de voyage et du travail au café. Le streaming toute la journée ou les gros envois sur le Wi‑Fi de l’hôtel demandent généralement Premium. Les emplacements de chaque offre sont listés dans l’app.',
      },
    ],
    bullets: [
      'Chiffrer le trafic sur le Wi‑Fi des cafés, aéroports, hôtels et invités',
      'Terminer le portail captif, puis connecter le VPN',
      'Connexion automatique en Wi‑Fi pour ne pas oublier',
      'Smart Connect pour les hotspots filtrés ou capricieux',
      'Quota hebdomadaire Free ou Premium pour des sessions illimitées',
    ],
    cta: CTA,
    faq: [
      { q: 'Ai-je besoin d’un VPN sur le Wi‑Fi de la maison ?', a: 'Les réseaux domestiques sont généralement plus sûrs. Utilisez un VPN si vous voulez plus de confidentialité vis-à-vis de votre FAI ou si vous partagez le réseau avec des invités.' },
      { q: 'Le VPN ralentit-il le Wi‑Fi de l’hôtel ?', a: 'Un peu de surcharge est normal. Utilisez le Speed Test et essayez un serveur plus proche listé dans l’app pour de meilleurs résultats.' },
      { q: 'FollowNet fonctionne-t-il sur les pages de connexion des portails captifs ?', a: 'Connectez généralement le VPN après avoir terminé le portail, puis gardez le tunnel actif pour le reste de la session.' },
      { q: 'Free suffit-il pour le Wi‑Fi public ?', a: 'Oui pour des sessions courtes et moyennes dans le quota hebdomadaire Free. Un usage intensif toute la journée demande en général Premium.' },
    ],
  },
  'smart-connect-vpn': {
    h1: 'VPN Smart Connect — protocole automatique pour iOS',
    lead:
      'Smart Connect est le mode adaptatif de FollowNet : il utilise le contexte réseau quand il est disponible et choisit entre WireGuard, IKEv2, AmneziaWG, Hysteria2 et VLESS Reality — avec des replis et des vérifications de sortie pour vous éviter les essais manuels.',
    sections: [
      {
        title: 'Comment fonctionne Smart Connect',
        body:
          'Quand le protocole est sur Smart, FollowNet tient compte des indices de région et de FAI fournis par le serveur quand ils existent, choisit un tunnel de départ et peut gravir une échelle de repli (souvent Hysteria2 → VLESS Reality → AmneziaWG → WireGuard → IKEv2, en sautant ce que vos serveurs ne proposent pas). Une fois en ligne, l’app affiche ce qui est actif. Vous pouvez reprendre la main à tout moment dans Réglages → Protocole.',
      },
      {
        title: 'Pourquoi VLESS Reality fait partie de la chaîne',
        body:
          'Certains opérateurs identifient ou freinent WireGuard classique — et même AmneziaWG. VLESS avec un camouflage de type REALITY est une autre voie quand un tunnel paraît connecté mais ne laisse pas passer de vrai trafic. FollowNet vérifie la sortie avant de considérer la session comme saine.',
      },
      {
        title: 'Quand laisser Smart Connect activé',
        body:
          'Voyageurs, FAI restrictifs, connexions d’hôtel et SIM de voyage sont les cas principaux. Préférez le profil Restricted si vous voulez Smart Connect avec connexion automatique « Toujours » et le serveur le plus rapide sans surveiller chaque protocole.',
      },
      {
        title: 'Quand choisir un protocole manuellement',
        body:
          'Si WireGuard est déjà rapide chez vous, verrouillez-le. Utilisez le mode manuel pour les comparaisons au Speed Test. Revenez à Smart Connect (ou Restricted) sur les réseaux inconnus de cafés, d’aéroports ou de SIM étrangères.',
      },
      {
        title: 'Smart Connect, connexion automatique et profils',
        body:
          'La connexion automatique décide quand le VPN démarre (Wi‑Fi, 4G, Toujours). Smart Connect décide quel chemin de protocole essayer ensuite. Les profils réseau combinent les deux avec le DNS et le mode serveur : Public Wi‑Fi verrouille WireGuard, Travel verrouille IKEv2, Restricted garde Smart Connect à plein régime.',
      },
      {
        title: 'Limites, Free hebdomadaire et Premium',
        body:
          'Smart Connect améliore le confort ; il ne garantit pas une connexion sur chaque réseau et ne contourne pas un portail captif que vous avez ignoré. Free inclut Smart Connect dans le quota hebdomadaire. Premium supprime la limite de trafic et débloque les emplacements Premium affichés pour cette offre dans l’app.',
      },
    ],
    bullets: [
      'Protocole automatique entre WireGuard, IKEv2, AmneziaWG, Hysteria2 et VLESS Reality',
      'Échelle de repli avec vérification de sortie — pas seulement un statut vert',
      'Fonctionne avec la connexion automatique et les profils réseau (dont Restricted)',
      'Protocole et serveur actifs visibles après la connexion',
      'Disponible avec le trafic hebdomadaire Free et en Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Comment activer Smart Connect ?', a: 'Réglages → Protocole → Smart (l’intitulé peut varier selon la version). Ou appliquez le profil Restricted.' },
      { q: 'Puis-je voir le protocole choisi par Smart Connect ?', a: 'Oui. L’app affiche le protocole et le serveur actifs après la connexion.' },
      { q: 'Smart Connect utilise-t-il VLESS Reality ?', a: 'Oui, quand ce protocole est disponible pour votre session et que le contexte réseau ou les replis l’exigent. Vous pouvez aussi verrouiller VLESS manuellement.' },
      { q: 'Smart Connect garantit-il l’accès partout ?', a: 'Non. Il améliore les chances sur les réseaux difficiles, mais ne passe pas outre les lois locales, les blocages totaux ou les hotspots défaillants.' },
    ],
  },
  'network-profiles-ios': {
    h1: 'Profils réseau sur iOS — Smart, Public Wi‑Fi, Travel, Restricted',
    lead:
      'Un profil FollowNet regroupe protocole, DNS, connexion automatique et mode serveur pour que le café et le Wi‑Fi de la maison ne partagent pas les mêmes réglages. Les préréglages intégrés correspondent exactement à ce que propose l’app.',
    sections: [
      {
        title: 'Ce que contient un profil',
        body:
          'Réglages → Profils réseau règle quatre paramètres d’un coup : protocole préféré (ou Smart), préréglage DNS, mode de connexion automatique et mode serveur (Le plus rapide / Dernier utilisé / Spécifique). Appliquez un profil au lieu de reconfigurer quatre menus à chaque changement de réseau.',
      },
      {
        title: 'Smart (par défaut)',
        body:
          'Protocole : Smart · DNS : Système/Par défaut · Connexion automatique : Désactivée · Serveur : Dernier utilisé. Le point de départ au quotidien quand FollowNet doit choisir le tunnel et revenir à la dernière ville.',
      },
      {
        title: 'Public Wi‑Fi',
        body:
          'Protocole : WireGuard · DNS : Quad9 · Connexion automatique : Wi‑Fi uniquement · Serveur : Le plus rapide. Après le portail captif, chiffrez sur les hotspots partagés avec une faible latence et un résolveur orienté confidentialité.',
      },
      {
        title: 'Travel',
        body:
          'Protocole : IKEv2 · DNS : Cloudflare · Connexion automatique : Toujours · Serveur : Le plus rapide. Réglé pour l’itinérance et les bascules entre 4G et Wi‑Fi d’hôtel — une fiabilité sans surprise plutôt que les protocoles à la mode.',
      },
      {
        title: 'Restricted et profils personnalisés',
        body:
          'Restricted laisse le protocole sur Smart, le DNS sur Quad9, la connexion automatique sur Toujours et le serveur sur Le plus rapide — pour les réseaux avec inspection approfondie des paquets où vous voulez toute l’échelle de Smart Connect (Hysteria2 / VLESS Reality / AmneziaWG / WireGuard / IKEv2). Créez un profil personnalisé quand un hôtel ne fonctionne qu’avec un protocole, un DNS et une ville précis.',
      },
    ],
    bullets: [
      'Quatre préréglages intégrés avec protocole / DNS / connexion automatique / mode serveur précis',
      'Restricted = Smart + Toujours + Le plus rapide pour les réseaux hostiles',
      'Profils personnalisés pour les recettes d’hôtel ou de bureau déjà testées',
      'Les mêmes outils en Free hebdomadaire et en Premium',
      'Compatible avec le raccourci Apple « Appliquer le profil »',
    ],
    cta: CTA,
    faq: [
      { q: 'Où trouver les profils réseau ?', a: 'Dans l’app FollowNet pour iOS : Réglages → Profils réseau (et dans le menu des profils de l’écran principal).' },
      { q: 'Restricted utilise-t-il VLESS ?', a: 'Restricted laisse le protocole sur Smart, donc Smart Connect peut monter jusqu’à VLESS Reality quand ce chemin est disponible — il ne verrouille pas un seul protocole.' },
      { q: 'Les profils sont-ils réservés à Premium ?', a: 'Les préréglages intégrés sont disponibles en Free dans la limite du quota hebdomadaire. Premium apporte surtout de la capacité et une carte de serveurs plus large.' },
      { q: 'Quelle différence avec Smart Connect seul ?', a: 'Smart Connect choisit le protocole. Un profil règle en plus le DNS, la connexion automatique et le mode serveur en un geste.' },
    ],
  },
  'amneziawg-vpn-ios': {
    h1: 'VPN AmneziaWG pour iOS — WireGuard amélioré pour les réseaux instables',
    lead:
      'AmneziaWG est un protocole basé sur WireGuard, amélioré pour les réseaux instables ou saturés. FollowNet intègre AmneziaWG sur iOS et peut l’activer automatiquement via Smart Connect.',
    sections: [
      { title: 'Pourquoi un protocole supplémentaire aide', body: 'Certains opérateurs mobiles et réseaux Wi‑Fi d’hôtel ou publics gèrent mal le trafic VPN standard : les connexions coupent ou ralentissent. AmneziaWG conserve le cœur de WireGuard et ajoute des réglages de connexion qui peuvent rester plus stables sur ces réseaux.' },
      { title: 'Utiliser AmneziaWG dans FollowNet', body: 'Activez Smart Connect pour le repli automatique, ou sélectionnez AmneziaWG manuellement dans Réglages → Protocole. Les performances peuvent différer de WireGuard pur ; le Speed Test aide à comparer.' },
    ],
    bullets: ['Protocole basé sur WireGuard pour les réseaux instables', 'Disponible via Smart Connect ou en sélection manuelle', 'La disponibilité des serveurs est affichée dans l’app', 'Network Extension iOS native'],
    cta: CTA,
    faq: [
      { q: 'AmneziaWG, est-ce la même chose que WireGuard ?', a: 'Il est basé sur WireGuard avec des réglages de connexion supplémentaires pour les réseaux où WireGuard standard est instable.' },
      { q: 'Quand utiliser AmneziaWG ?', a: 'Quand WireGuard est instable ou lent sur votre réseau — par exemple avec certaines SIM de voyage ou un Wi‑Fi public saturé.' },
      { q: 'AmneziaWG est-il inclus dans l’offre gratuite ?', a: 'La disponibilité des protocoles dépend de votre offre ; consultez l’app pour les limites actuelles de Free et Premium.' },
    ],
  },
  'no-logs-vpn': {
    h1: 'Confidentialité VPN sur iPhone — au-delà des slogans « no-logs »',
    lead:
      'FollowNet cherche à limiter la collecte de données. Notre Politique de confidentialité détaille précisément ce qui est traité pour l’accès au compte, le fonctionnement du VPN, le support et l’analytique — pas un slogan marketing « zéro log » absolu.',
    sections: [
      {
        title: 'Ce que signifient concrètement les promesses de confidentialité',
        body:
          'Un VPN avec compte ne peut pas fonctionner avec littéralement zéro donnée : la connexion par e-mail et le statut d’abonnement exigent des métadonnées de service. Les slogans « no-logs » absolus masquent cette réalité. La Politique de confidentialité publiée définit le traitement et la conservation actuels chez FollowNet.',
      },
      {
        title: 'À lire avant de vous connecter',
        body:
          'Notre Politique de confidentialité couvre les catégories de données, les finalités, la conservation, les droits RGPD et CCPA, l’usage de Firebase Analytics, le traitement DNS et les tickets de support. Fiez-vous à ce document plutôt qu’à un résumé de page d’accueil — y compris celui-ci.',
      },
      {
        title: 'Compte, facturation et Apple',
        body:
          'FollowNet utilise une connexion par code e-mail. Premium est facturé via l’App Store d’Apple. Apple gère les paiements d’abonnement ; le tunnel VPN s’exécute dans le bac à sable Network Extension d’iOS. Nous ne revendiquons pas d’audits « no-logs » tiers que nous n’avons pas publiés ici.',
      },
      {
        title: 'Bonnes habitudes de confidentialité sur iPhone',
        body:
          'Gardez iOS à jour, utilisez un code robuste ou Face ID, activez la connexion automatique sur le Wi‑Fi public et vérifiez les profils DNS si vous voulez un résolveur précis. Le VPN chiffre le trafic jusqu’au serveur VPN ; il ne remplace ni la vigilance face à l’hameçonnage ni l’hygiène de l’appareil.',
      },
      {
        title: 'Free hebdomadaire, Premium et transparence',
        body:
          'La même Politique de confidentialité s’applique à Free et à Premium. Free inclut un trafic hebdomadaire pour évaluer ; Premium supprime la limite. Les limites d’offre et les emplacements sont affichés dans l’app — pas inventés comme chiffres marketing sur cette page.',
      },
    ],
    bullets: [
      'Politique de confidentialité sur follow-net.com/privacy — la référence',
      'Connexion par code e-mail ; aucune promesse de « zéro donnée »',
      'Catégories de données et durées de conservation décrites dans la politique',
      'Facturation Premium gérée par Apple',
      'La même honnêteté en Free hebdomadaire et en Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Que traite FollowNet ?', a: 'Consultez la Politique de confidentialité en vigueur pour les catégories de données, finalités et durées de conservation exactes.' },
      { q: 'Où se trouve la politique de confidentialité ?', a: 'Sur https://follow-net.com/privacy — accessible depuis l’app et la fiche App Store.' },
      { q: 'Revendiquez-vous un audit no-logs formel ?', a: 'Ne vous fiez pas aux slogans d’audit sur cette page. Ce que nous traitons aujourd’hui figure dans la Politique de confidentialité publiée.' },
      { q: 'Apple voit-il mon usage du VPN ?', a: 'Apple gère les abonnements App Store ; le tunnel VPN s’exécute dans le bac à sable Network Extension d’iOS. Les détails importants pour la confidentialité sont dans notre Politique de confidentialité.' },
    ],
  },
  'best-vpn-iphone': {
    h1: 'Meilleur VPN pour iPhone — les critères qui comptent en 2026',
    lead:
      'Le meilleur VPN iPhone pour vous est natif d’iOS, transparent sur la confidentialité, rapide sur vos réseaux et honnête sur Free et payant. Voici une liste de contrôle pratique et la place de FollowNet — sans prétendre être le n° 1 pour tout le monde.',
    sections: [
      {
        title: 'Liste de contrôle pour les apps VPN iPhone',
        body:
          'Privilégiez la distribution via l’App Store, un vrai VPN Network Extension (pas un « VPN » limité au navigateur), une Politique de confidentialité claire, des protocoles modernes (WireGuard/IKEv2 et des options pour réseaux filtrés), la connexion automatique et un support joignable. Évitez les apps sans société ni politique vérifiables.',
      },
      {
        title: 'Comment FollowNet répond à cette liste',
        body:
          'FollowNet est une app iOS native avec WireGuard, IKEv2, AmneziaWG, Hysteria2, Smart Connect, connexion automatique, DNS personnalisé, Speed Test, widgets et Raccourcis. Free inclut un trafic hebdomadaire ; Premium est facultatif via Apple. Les emplacements des serveurs sont listés dans l’app.',
      },
      {
        title: 'Testez avant de vous abonner',
        body:
          'Installez Free, approuvez la configuration VPN, lancez le Speed Test avec et sans VPN sur votre Wi‑Fi et en données mobiles, puis essayez un réseau de café avec Smart Connect. Si la vitesse et la fiabilité vous conviennent, Premium supprime la limite hebdomadaire Free.',
      },
      {
        title: 'Ce que « le meilleur » ne devrait pas vouloir dire',
        body:
          'Méfiez-vous des déblocages de streaming garantis, des « serveurs dans tous les pays », des slogans no-logs absolus sans politique et des nombres de serveurs inventés. FollowNet ne promet rien de tout cela. La disponibilité dépend de votre réseau et des règles locales.',
      },
      {
        title: 'Choisir entre Free hebdomadaire et Premium',
        body:
          'Choisissez Free pour une protection ponctuelle sur Wi‑Fi public et pour évaluer. Choisissez Premium pour un trafic illimité et les emplacements Premium de votre offre. La qualité du chiffrement n’est pas payante ; la capacité et les emplacements, si.',
      },
    ],
    bullets: [
      'Network Extension native via l’App Store — pas de profil installé à part',
      'WireGuard + IKEv2 + Smart Connect + AmneziaWG + Hysteria2',
      'Connexion automatique, DNS, Speed Test et widgets pour le quotidien',
      'Trafic hebdomadaire Free pour évaluer — Premium facultatif',
      'La Politique de confidentialité plutôt que les slogans',
    ],
    cta: CTA,
    faq: [
      { q: 'FollowNet est-il le meilleur VPN pour tout le monde ?', a: 'Aucun VPN ne convient à tous. FollowNet se concentre sur iOS, les protocoles modernes et Smart Connect — testez le trafic hebdomadaire Free pour voir si la vitesse et les serveurs vous conviennent.' },
      { q: 'Pourquoi privilégier iOS ?', a: 'FollowNet mise sur une expérience soignée sur iPhone et iPad, avec une extension Chrome pour l’ordinateur, plutôt que de s’éparpiller sur toutes les plateformes.' },
      { q: 'Comment comparer les vitesses ?', a: 'Utilisez le Speed Test intégré avec et sans VPN sur vos réseaux Wi‑Fi et mobiles habituels.' },
      { q: 'Débloque-t-il tous les catalogues de streaming ?', a: 'Non. FollowNet chiffre votre connexion et propose les sorties régionales listées dans l’app ; les catalogues peuvent toujours restreindre les utilisateurs de VPN.' },
    ],
  },
  'auto-connect-vpn-ios': {
    h1: 'Connexion VPN automatique sur iOS — dès que le réseau change',
    lead:
      'La connexion automatique de FollowNet lance le VPN tout seul en Wi‑Fi, en données mobiles ou sur n’importe quel réseau — plus besoin de toucher Se connecter à chaque hotspot ou à chaque passage du Wi‑Fi à la 4G.',
    sections: [
      { title: 'Pourquoi la connexion automatique sur iPhone ?', body: 'Le Wi‑Fi public et les réseaux en voyage sont justement les moments où l’on a le plus besoin d’un VPN — et où l’on oublie le plus de l’activer. La connexion automatique surveille votre réseau et lance FollowNet quand la règle choisie s’applique.' },
      { title: 'Les modes de connexion automatique dans FollowNet', body: 'Choisissez Désactivé, Wi‑Fi uniquement, 4G uniquement ou Toujours dans Réglages → Connexion automatique. Associez-la à Smart Connect pour que le meilleur protocole et le meilleur serveur soient choisis au démarrage du VPN.' },
    ],
    bullets: ['Wi‑Fi uniquement, 4G uniquement ou Toujours', 'Fonctionne avec WireGuard, IKEv2 et Smart Connect', 'Disponible en Free et en Premium', 'Se règle dans Réglages → Connexion automatique'],
    cta: CTA,
    faq: [
      { q: 'Comment activer la connexion automatique ?', a: 'Ouvrez FollowNet → Réglages → Connexion automatique et choisissez Wi‑Fi uniquement, 4G uniquement, Toujours ou Désactivé.' },
      { q: 'Se déclenchera-t-elle sur le Wi‑Fi de la maison ?', a: 'Seulement si vous choisissez Wi‑Fi uniquement ou Toujours. Beaucoup choisissent Wi‑Fi uniquement pour les cafés et les hôtels.' },
      { q: 'Est-ce la même chose que Smart Connect ?', a: 'Non. La connexion automatique décide quand lancer le VPN ; Smart Connect choisit ensuite le protocole et le serveur.' },
    ],
  },
  'dns-vpn-ios': {
    h1: 'VPN avec DNS personnalisé sur iPhone — Quad9, Cloudflare et plus',
    lead:
      'FollowNet vous permet de choisir des profils DNS sur iOS : garder le DNS du système ou passer à Quad9, Cloudflare, AdGuard et d’autres préréglages pendant que le tunnel VPN est actif.',
    sections: [
      { title: 'Pourquoi le DNS compte avec un VPN', body: 'Le DNS traduit les noms de domaine en adresses IP. Certains veulent, en plus du chiffrement VPN, un résolveur qui bloque les logiciels malveillants (Quad9), un DNS public rapide (Cloudflare) ou un DNS anti-publicité (AdGuard).' },
      { title: 'Les profils DNS dans FollowNet', body: 'Choisissez un préréglage DNS dans les Réglages sans quitter l’app. Selon la configuration, les requêtes DNS peuvent passer par le tunnel VPN — voir la Politique de confidentialité pour le détail du traitement.' },
    ],
    bullets: ['Plusieurs préréglages DNS intégrés', 'Fonctionne avec WireGuard et IKEv2', 'Utile pour la confidentialité et le filtrage', 'Pas besoin d’une app DNS séparée'],
    cta: CTA,
    faq: [
      { q: 'Quel DNS choisir ?', a: 'Quad9 pour la sécurité, Cloudflare pour la vitesse, AdGuard DNS contre la publicité — ou le DNS par défaut du système.' },
      { q: 'Un DNS personnalisé remplace-t-il le chiffrement VPN ?', a: 'Non. Le DNS change le résolveur ; le VPN chiffre toujours le trafic jusqu’au serveur VPN.' },
      { q: 'Puis-je utiliser les profils DNS en Free ?', a: 'Les réglages DNS sont disponibles selon votre offre actuelle dans l’app.' },
    ],
  },
  'vpn-for-travel': {
    h1: 'VPN en voyage sur iPhone — itinérance, hôtels et aéroports',
    lead:
      'Voyager, c’est des Wi‑Fi inconnus, des SIM étrangères et parfois des réseaux filtrés. FollowNet garde la même utilisation sur iOS pendant que Smart Connect aide à choisir un protocole adapté au réseau du moment.',
    sections: [
      { title: 'Situations de voyage', body: 'Le Wi‑Fi des salons d’aéroport, les portails captifs d’hôtel et les SIM prépayées locales se comportent tous différemment. Le VPN aide pour la confidentialité ; Smart Connect aide pour la connexion quand les protocoles sont restreints à l’étranger.' },
      { title: 'Conseils pour les voyageurs', body: 'Téléchargez FollowNet avant de partir, connectez-vous avec votre e-mail, lancez le Speed Test en Wi‑Fi et en données mobiles et activez la connexion automatique sur les réseaux non fiables. Les emplacements inclus dans votre offre sont indiqués dans l’app.' },
    ],
    bullets: ['Plusieurs emplacements listés dans l’app', 'Smart Connect pour les réseaux inconnus', 'Connexion automatique sur le Wi‑Fi des hôtels et aéroports', 'Installer et tester avant le départ'],
    cta: CTA,
    faq: [
      { q: 'Le VPN fonctionnera-t-il dans tous les pays ?', a: 'Cela dépend des lois et des politiques réseau locales. Chaque utilisateur doit respecter la réglementation locale.' },
      { q: 'Faut-il se connecter avant ou après le Wi‑Fi de l’hôtel ?', a: 'En général après le portail captif ; activez ensuite le VPN pour le reste de la session.' },
      { q: 'L’itinérance coûte-t-elle plus cher avec un VPN ?', a: 'Le VPN ajoute un peu de trafic ; les frais d’itinérance dépendent de votre forfait, pas de FollowNet.' },
    ],
  },
  'vpn-speed-test-ios': {
    h1: 'Speed Test VPN pour iPhone — mesurez avant de vous engager',
    lead:
      'FollowNet intègre un Speed Test pour comparer sur iOS le débit descendant et la latence avec ou sans VPN, et entre emplacements — avant de passer à Premium.',
    sections: [
      { title: 'Pourquoi tester la vitesse du VPN sur iOS', body: 'La vitesse dépend de votre réseau de base, de la distance au serveur et du protocole. Tester sur votre vrai Wi‑Fi et en 4G permet d’avoir des attentes réalistes, surtout pour le streaming et les appels vidéo sur iPad.' },
      { title: 'Utiliser le Speed Test dans FollowNet', body: 'Ouvrez le Speed Test dans l’app, mesurez d’abord sans VPN, puis connectez-vous et refaites le test. Si les résultats varient selon votre opérateur, comparez Smart Connect à WireGuard ou IKEv2 en manuel.' },
    ],
    bullets: ['Intégré à FollowNet — pas d’app tierce', 'Comparez serveurs et protocoles', 'Utile en Free comme en Premium', 'Fonctionne sur iPhone et iPad'],
    cta: CTA,
    faq: [
      { q: 'Le VPN sera-t-il toujours plus lent ?', a: 'Un peu de surcharge est normal à cause du chiffrement et de la distance. Un serveur proche réduit souvent l’écart.' },
      { q: 'Quel protocole est le plus rapide ?', a: 'Souvent WireGuard sur un bon réseau, mais cela varie : mesurez localement avec le Speed Test.' },
      { q: 'Le Speed Test consomme-t-il mon quota ?', a: 'Oui. Les tests consomment des données comme tout téléchargement — pensez-y avec la limite hebdomadaire gratuite.' },
    ],
  },
  'secure-vpn-iphone': {
    h1: 'VPN sécurisé pour iPhone — chiffrement, connexion automatique et DNS',
    lead:
      'La sécurité sur iOS, c’est plus qu’un cadenas. FollowNet associe le chiffrement WireGuard ou IKEv2, une connexion automatique facultative, un DNS personnalisé et une Politique de confidentialité publiée.',
    sections: [
      { title: 'Plusieurs couches de protection', body: 'Le VPN chiffre le trafic jusqu’au serveur VPN. La connexion automatique lance le VPN sur le Wi‑Fi public ou en données mobiles sans intervention. Les profils DNS peuvent ajouter des résolveurs filtrants ou axés sur la confidentialité. Ensemble, ils renforcent l’usage quotidien de l’iPhone sur les réseaux non fiables.' },
      { title: 'Bonnes pratiques de sécurité', body: 'Gardez iOS à jour, utilisez un code robuste ou Face ID, activez la connexion automatique sur le Wi‑Fi public et lisez la Politique de confidentialité de FollowNet. Premium ne veut pas dire « plus de chiffrement » : il débloque de la capacité et des serveurs.' },
    ],
    bullets: ['Protocoles modernes : WireGuard, IKEv2, AmneziaWG', 'Connexion automatique en Wi‑Fi ou en 4G', 'Préréglages DNS personnalisés', 'Validation App Store et extension VPN isolée'],
    cta: CTA,
    faq: [
      { q: 'FollowNet est-il sûr pour la banque sur iPhone ?', a: 'Le VPN ajoute un chiffrement du transport, mais utilisez les apps bancaires officielles et des sites HTTPS. FollowNet ne remplace pas l’hygiène de sécurité de l’appareil.' },
      { q: 'VPN sécurisé veut-il dire « niveau militaire » ?', a: 'Les termes marketing varient. FollowNet utilise des protocoles VPN modernes standard — voir notre documentation et la Politique de confidentialité pour les détails.' },
      { q: 'Un VPN protège-t-il de l’hameçonnage ?', a: 'Non. Le VPN chiffre le trafic ; il ne bloque ni les liens malveillants ni les fausses pages de connexion.' },
    ],
  },
  'hysteria2-vpn-ios': {
    h1: 'VPN Hysteria2 pour iOS — une autre voie quand le réseau freine les tunnels',
    lead:
      'FollowNet intègre Hysteria2 sur iPhone et iPad aux côtés de WireGuard, IKEv2 et AmneziaWG. Utilisez-le manuellement ou laissez Smart Connect choisir un protocole quand votre réseau perd des paquets ou se montre hostile au trafic VPN classique.',
    sections: [
      { title: 'Quand Hysteria2 aide sur iOS', body: 'Certaines connexions d’hôtel, SIM de voyage et opérateurs filtrants dégradent WireGuard ou bloquent l’établissement de la connexion. Hysteria2 est une voie alternative pratique dans la pile VPN de FollowNet — ni un réseau de mélange, ni une garantie d’accès partout.' },
      { title: 'Activer Hysteria2', body: 'Ouvrez Réglages → Protocole et choisissez Hysteria2, ou laissez Smart Connect activé pour la sélection automatique. Après le changement, lancez le Speed Test sur le même Wi‑Fi ou la même 4G pour comparer de vrais chiffres plutôt que de deviner.' },
    ],
    bullets: ['Hysteria2 aux côtés de WireGuard, IKEv2 et AmneziaWG', 'Smart Connect peut le choisir sur les réseaux difficiles', 'Choix manuel toujours possible', 'Fonctionne avec la limite hebdomadaire Free et Premium'],
    cta: CTA,
    faq: [
      { q: 'Hysteria2 est-il meilleur que WireGuard ?', a: 'Pas toujours. Sur un réseau calme, WireGuard est souvent le plus rapide ; Hysteria2 aide quand ces voies échouent. Mesurez avec le Speed Test.' },
      { q: 'Smart Connect inclut-il Hysteria2 ?', a: 'Smart Connect évalue les conditions du réseau et peut choisir parmi les protocoles pris en charge par FollowNet, y compris Hysteria2 quand il convient.' },
      { q: 'Hysteria2 est-il disponible en Free ?', a: 'Les protocoles disponibles dépendent de votre offre dans l’app. Free utilise le même ensemble de protocoles modernes dans la limite hebdomadaire.' },
    ],
  },
  'vpn-chrome-extension': {
    h1: 'Extension VPN FollowNet pour Chrome — navigation sur ordinateur, même compte',
    lead:
      'Besoin de FollowNet ailleurs que sur l’iPhone ? L’extension Chrome couvre le trafic du navigateur dans Chrome sur ordinateur, avec le même compte et des limites Free et Premium honnêtes — l’app iOS restant le VPN système de tout l’appareil.',
    sections: [
      {
        title: 'À quoi sert l’extension',
        body:
          'L’extension Chrome protège la navigation dans Chrome (ou les navigateurs Chromium compatibles) sur ordinateur. Connectez-vous avec votre code e-mail FollowNet, choisissez un emplacement de votre offre et gardez le popup léger. C’est un proxy pour le navigateur — pas un VPN système complet pour toutes les apps macOS ou Windows.',
      },
      {
        title: 'Ce qu’elle ne couvre pas',
        body:
          'Le trafic hors du navigateur compatible — apps de bureau, autres navigateurs, mises à jour système — n’est pas protégé par l’extension. Pour couvrir tout le téléphone ou la tablette, utilisez l’app FollowNet pour iOS avec Network Extension.',
      },
      {
        title: 'Comment elle complète l’iPhone',
        body:
          'Utilisez l’app iOS pour la connexion automatique, les widgets, les données mobiles, les profils réseau et le VPN pour toutes les apps. Utilisez Chrome quand vous travaillez sur ordinateur. Un seul compte relie les deux ; le trafic hebdomadaire Free, Premium et les places d’appareils suivent le compte.',
      },
      {
        title: 'Kill Switch, listes anti-pub et routage',
        body:
          'Le Kill Switch vise à empêcher Chrome de fuir si le proxy tombe (limité au navigateur, pas à tout le système). Des listes facultatives de type EasyList / AdGuard réduisent publicités et traqueurs. Le routage par site peut envoyer certains domaines via le proxy tandis que les autres onglets restent en direct — toujours dans Chrome uniquement.',
      },
      {
        title: 'Installation en quelques étapes',
        body:
          'Installez l’extension FollowNet depuis le Chrome Web Store, connectez-vous avec le même code e-mail que sur iOS, choisissez un serveur parmi les emplacements de votre offre et connectez-vous. En cas d’échec, vérifiez que vous êtes connecté et qu’il vous reste du trafic hebdomadaire Free.',
      },
      {
        title: 'Free hebdomadaire ou Premium',
        body:
          'Free inclut un quota de trafic hebdomadaire pour évaluer la navigation sur ordinateur avant de payer. Premium supprime la limite selon votre abonnement. Aucune offre ne transforme l’extension en VPN système pour ordinateur.',
      },
    ],
    bullets: [
      'Le même compte FollowNet que sur iOS',
      'Proxy navigateur + Kill Switch — pas un VPN pour tout l’ordinateur',
      'Blocage des publicités facultatif de type EasyList / AdGuard',
      'Quota hebdomadaire Free pour évaluer',
      'Premium facultatif pour un trafic illimité selon les conditions actuelles',
    ],
    cta: 'Installer l’extension Chrome',
    faq: [
      { q: 'L’extension Chrome remplace-t-elle l’app iPhone ?', a: 'Non. Le VPN iOS couvre tout le téléphone ; Chrome couvre le trafic du navigateur sur ordinateur.' },
      { q: 'Puis-je utiliser Free dans Chrome ?', a: 'Oui. Free inclut un trafic hebdomadaire pour évaluer ; Premium supprime la limite selon votre abonnement.' },
      { q: 'L’extension protège-t-elle Slack, Zoom ou d’autres apps de bureau ?', a: 'Non. Elle ne couvre que le trafic du navigateur compatible. Pour toutes les apps, il faut un VPN système — sur téléphone, c’est l’app FollowNet pour iOS.' },
      { q: 'Existe-t-il une app VPN pour macOS ?', a: 'Aujourd’hui, FollowNet privilégie iOS et l’extension Chrome plutôt que d’attendre un client macOS complet.' },
    ],
  },
  'vpn-widgets-ios': {
    h1: 'Widgets VPN pour iOS — l’état de FollowNet sur l’écran d’accueil',
    lead:
      'Les widgets FollowNet affichent l’état de la connexion d’un coup d’œil sur iPhone et iPad, pour savoir si le tunnel est actif sans ouvrir l’app à chaque fois.',
    sections: [
      { title: 'Pourquoi les widgets VPN sont utiles', body: 'Le Wi‑Fi public et la connexion automatique ne servent que si vous remarquez quand le VPN n’a pas démarré. Les widgets affichent l’état à côté de vos autres vignettes — l’état d’abord, pas un mini-tableau de bord marketing.' },
      { title: 'Associer widgets et connexion automatique', body: 'Réglez la connexion automatique sur Wi‑Fi uniquement, 4G uniquement ou Toujours dans les Réglages, puis utilisez les widgets pour confirmer le tunnel après avoir rejoint un réseau. Le choix du protocole reste dans les Réglages ou dans Smart Connect.' },
    ],
    bullets: ['État sur l’écran d’accueil sans ouvrir l’app', 'Compatible avec vos habitudes de connexion automatique', 'App iOS native sur l’App Store', 'Gratuit à essayer — Premium facultatif'],
    cta: CTA,
    faq: [
      { q: 'Quelles versions d’iOS prennent en charge les widgets FollowNet ?', a: 'La prise en charge suit les exigences de la version actuelle sur l’App Store — gardez FollowNet et iOS à jour.' },
      { q: 'Puis-je me connecter depuis le widget seul ?', a: 'Les widgets privilégient l’état et un accès rapide à l’app. Les commandes complètes restent dans FollowNet et dans les invites VPN du système.' },
      { q: 'Les widgets consomment-ils plus de batterie ?', a: 'Les widgets sont des vignettes d’état légères ; la consommation du VPN vient du tunnel actif, pas de la vignette.' },
    ],
  },
  'how-to-setup-vpn-iphone': {
    h1: 'Configurer un VPN sur iPhone avec FollowNet',
    lead:
      'Installez FollowNet depuis l’App Store, connectez-vous avec un code e-mail, autorisez une fois la configuration VPN et connectez-vous en un geste — trafic hebdomadaire Free inclus, Premium quand il vous faut de l’illimité.',
    sections: [
      {
        title: 'Configuration étape par étape',
        body:
          '1) Téléchargez FollowNet sur l’App Store. 2) Connectez-vous avec le code de vérification reçu par e-mail. 3) Approuvez l’invite de configuration VPN d’iOS. 4) Touchez Se connecter ou activez Smart Connect. 5) Si vous le souhaitez, réglez la connexion automatique, les profils DNS et un widget sur l’écran d’accueil.',
      },
      {
        title: 'Ce que signifie l’autorisation VPN d’iOS',
        body:
          'Apple exige une autorisation explicite pour les apps VPN Network Extension. Vous ajoutez une configuration VPN système gérée par FollowNet — pas un profil quelconque installé à part. Si vous désinstallez l’app, vous pouvez la supprimer dans Réglages iOS → VPN.',
      },
      {
        title: 'Conseils pour la première utilisation',
        body:
          'Testez sur le Wi‑Fi de la maison avant de voyager. Lancez le Speed Test avec et sans VPN. Choisissez un emplacement proche parmi ceux listés dans l’app. Si WireGuard échoue sur un réseau restrictif, laissez Smart Connect activé ou essayez AmneziaWG, IKEv2 ou Hysteria2 dans Réglages → Protocole.',
      },
      {
        title: 'Réglages recommandés après la connexion',
        body:
          'Pour les cafés et les hôtels, réglez la connexion automatique sur Wi‑Fi uniquement. Gardez Smart Connect activé en voyage. Ajoutez un widget pour vérifier l’état. Ne changez le DNS que si vous voulez un résolveur précis — il ne remplace pas le chiffrement VPN.',
      },
      {
        title: 'Free hebdomadaire ou Premium après l’installation',
        body:
          'Free fonctionne tout de suite, sans carte bancaire, et inclut un trafic hebdomadaire pour évaluer. Quand le quota ne suffit plus, passez à Premium sur l’App Store pour un trafic illimité et les emplacements Premium de cette offre. Aucune offre ne garantit le déblocage du streaming.',
      },
    ],
    bullets: [
      'Installation depuis l’App Store — aucun profil de configuration à installer à part',
      'Connexion par e-mail sans mot de passe',
      'Autorisez Network Extension une fois, puis connectez-vous',
      'Smart Connect, connexion automatique, DNS, Speed Test, widgets',
      'Limite hebdomadaire Free pour évaluer avant Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Faut-il une carte bancaire pour la configuration ?', a: 'Non. FollowNet Free fonctionne sans carte. Premium est facultatif via l’App Store.' },
      { q: 'Pourquoi iOS demande-t-il d’ajouter une configuration VPN ?', a: 'Apple exige une autorisation explicite pour les apps VPN Network Extension. C’est normal pour les VPN de l’App Store.' },
      { q: 'Puis-je utiliser le même compte sur iPad et dans Chrome ?', a: 'Oui. Connectez-vous avec le même e-mail sur l’iPad et dans l’extension Chrome.' },
      { q: 'La configuration a échoué ou le VPN ne se connecte pas — que faire ?', a: 'Vérifiez que la configuration VPN est autorisée, essayez Smart Connect, changez de protocole ou d’emplacement dans l’app et retestez sur un autre réseau si un portail captif est en jeu.' },
    ],
  },
  'vpn-for-gaming-iphone': {
    h1: 'VPN pour jouer sur iPhone — latence, protocoles et quand s’en passer',
    lead:
      'Utilisez FollowNet sur iPhone pour jouer chiffré sur des réseaux non fiables — et mesurez la latence avec le Speed Test pour savoir si WireGuard ou un autre protocole en vaut la peine.',
    sections: [
      { title: 'Quand un VPN pour le jeu est utile', body: 'Le Wi‑Fi public, les SIM de voyage et les sessions sensibles à la vie privée sont de bonnes raisons de faire passer le trafic du jeu dans un tunnel. WireGuard est généralement le premier essai pour sa faible surcharge ; IKEv2 aide quand vous basculez entre 4G et Wi‑Fi en pleine partie.' },
      { title: 'Quand désactiver le VPN', body: 'Si le Speed Test montre un fort bond de latence vers un serveur lointain, le jeu peut être moins agréable avec le VPN. Choisissez une sortie plus proche, essayez Smart Connect ou déconnectez-vous sur un réseau domestique de confiance. FollowNet n’invente pas un meilleur itinéraire que votre connexion de base.' },
    ],
    bullets: ['WireGuard d’abord pour une faible surcharge', 'Smart Connect quand les réseaux filtrent le VPN', 'Speed Test pour vérifier la latence réelle', 'Le même modèle Free et Premium qu’au quotidien'],
    cta: CTA,
    faq: [
      { q: 'FollowNet réduit-il le ping ?', a: 'Parfois une meilleure sortie aide ; souvent le VPN ajoute de la surcharge. Mesurez avec le Speed Test plutôt que de supposer.' },
      { q: 'AmneziaWG convient-il aux jeux ?', a: 'Utilisez-le quand WireGuard classique est bloqué. Le camouflage peut échanger un peu de performance contre l’accessibilité.' },
      { q: 'Puis-je jouer avec Free ?', a: 'Oui, dans la limite hebdomadaire. Pour jouer en compétition toute la journée, il faut généralement Premium.' },
    ],
  },
};
