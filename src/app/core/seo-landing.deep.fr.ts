import type { DeepGuides } from './seo-landing.deep';

const CTA = 'Télécharger dans l’App Store';

export const DEEP: DeepGuides = {
  'what-is-a-vpn': {
    h1: 'Qu’est-ce qu’un VPN ? Explication simple pour les utilisateurs d’iPhone',
    lead:
      'Un VPN (réseau privé virtuel) chiffre la connexion entre votre appareil et un serveur VPN : le Wi‑Fi auquel vous êtes connecté et votre fournisseur d’accès voient bien moins ce que vous faites. Voici comment cela fonctionne, ce que cela protège, ce que cela ne fait pas, et comment FollowNet s’y prend sur iPhone.',
    sections: [
      {
        title: 'La réponse courte',
        body:
          'Normalement, chaque app de votre iPhone parle directement à internet via le réseau auquel vous êtes connecté : hotspot de café, routeur d’hôtel, opérateur mobile. Celui qui gère ce réseau voit quels serveurs vous contactez et, pour le trafic non chiffré, ce que vous envoyez. Un VPN enveloppe tout ce trafic dans un tunnel chiffré vers un serveur de votre choix. Le réseau local ne voit que des données chiffrées vers un seul serveur ; les sites voient l’adresse IP du serveur VPN au lieu de la vôtre.',
      },
      {
        title: 'Ce qu’un VPN protège réellement',
        body:
          'Un VPN protège le trajet entre votre appareil et le serveur VPN. C’est surtout utile sur les réseaux que vous ne contrôlez pas : Wi‑Fi public des cafés, aéroports et hôtels, réseaux invités au bureau, cartes SIM de voyage. Le propriétaire du réseau ne voit pas quels sites et apps vous utilisez, l’espionnage sur un hotspot partagé devient difficile, et il est plus compliqué de ralentir ou bloquer certains services en inspectant votre trafic.',
      },
      {
        title: 'Ce qu’un VPN ne fait pas',
        body:
          'Un VPN n’est pas un antivirus et ne vous rend pas anonyme. Si vous êtes connecté à Google, Instagram ou votre banque, ces services savent toujours que c’est vous. Il n’arrête pas les liens d’hameçonnage, les fausses pages de connexion ni les logiciels malveillants que vous installez vous-même. Cookies, comptes et données de paiement peuvent toujours vous identifier. Méfiez-vous des VPN qui promettent un « anonymat total » ou une « invisibilité de niveau militaire » : c’est du marketing, pas une fonction.',
      },
      {
        title: 'Comment fonctionne un VPN sur iPhone',
        body:
          'iOS dispose d’un cadre intégré pour les apps VPN appelé Network Extension. Quand vous installez un VPN depuis l’App Store et touchez Se connecter, iOS demande une fois l’autorisation d’ajouter une configuration VPN. Ensuite, l’app crée le tunnel et iOS y fait passer le trafic de l’appareil : Safari, messageries, mail, toutes les apps. L’icône VPN apparaît dans la barre d’état tant qu’il est actif. FollowNet repose sur ce cadre, pas sur un profil de configuration téléchargé.',
        image: 'connect',
        imageCaption: 'FollowNet connecté : le minuteur tourne et le protocole actif s’affiche sous l’état.',
      },
      {
        title: 'Les protocoles : la « langue » du tunnel',
        body:
          'Un protocole VPN définit comment le tunnel chiffré est construit. WireGuard est moderne et rapide ; IKEv2 se reconnecte en douceur quand vous passez du Wi‑Fi à la 4G ; AmneziaWG, Hysteria2 et VLESS Reality aident sur les réseaux qui ralentissent ou bloquent le trafic VPN ordinaire. Inutile de les apprendre dès le premier jour : Smart Connect de FollowNet choisit un protocole adapté à votre réseau et bascule sur un autre en cas d’échec.',
        image: 'protocol',
        imageCaption: 'Réglages → Protocole VPN : laissez Smart ou choisissez vous-même.',
      },
      {
        title: 'En avez-vous besoin ?',
        body:
          'Si vous utilisez souvent un Wi‑Fi public ou invité, voyagez, travaillez dans des cafés ou êtes sur un réseau filtré, un VPN est un outil quotidien raisonnable. Chez vous, sur votre propre réseau, l’intérêt est surtout la confidentialité vis-à-vis de votre fournisseur. Le plus simple pour décider : l’essayer sur les réseaux que vous utilisez vraiment. FollowNet Free inclut un trafic hebdomadaire sans carte bancaire.',
      },
    ],
    steps: {
      title: 'Essayer un VPN sur iPhone en cinq étapes',
      items: [
        'Installez FollowNet depuis l’App Store.',
        'Connectez-vous avec le code reçu par e-mail, sans mot de passe à créer.',
        'Touchez Se connecter et autorisez la configuration VPN quand iOS le demande (la première fois seulement).',
        'Laissez le protocole sur Smart et vérifiez l’icône VPN dans la barre d’état.',
        'Ouvrez quelques sites et apps, puis lancez Speed Test pour voir votre vitesse réelle.',
      ],
    },
    table: {
      title: 'Sans VPN et avec VPN',
      head: ['', 'Sans VPN', 'Avec VPN'],
      rows: [
        ['Ce que voit le propriétaire du Wi‑Fi', 'Les serveurs et sites que vous contactez', 'Un trafic chiffré vers un seul serveur VPN'],
        ['Ce que voient les sites', 'Votre vraie adresse IP', 'L’adresse IP du serveur VPN'],
        ['Protection sur Wi‑Fi public', 'Dépend du HTTPS de chaque site', 'Tout le trajet jusqu’au serveur VPN chiffré'],
        ['Connexions, cookies, comptes', 'Vous identifient', 'Vous identifient toujours'],
        ['Hameçonnage et malware', 'Non bloqués', 'Non bloqués par le VPN lui-même'],
      ],
    },
    bullets: [
      'Un VPN chiffre le trajet de l’appareil au serveur VPN',
      'Surtout utile sur Wi‑Fi public, en voyage et sur réseaux filtrés',
      'Ni antivirus ni anonymat : vos comptes vous identifient toujours',
      'Sur iPhone, les VPN de l’App Store utilisent Network Extension d’Apple',
      'FollowNet Free permet de tester avec un trafic hebdomadaire, sans carte',
    ],
    cta: CTA,
    faq: [
      { q: 'Utiliser un VPN est-il légal ?', a: 'Dans la plupart des pays, oui, mais les règles varient. Vous êtes responsable du respect des lois locales et des conditions des services utilisés.' },
      { q: 'Un VPN ralentit-il mon iPhone ?', a: 'Le chiffrement et le détour par le serveur ajoutent un peu de latence. Un serveur proche et un protocole moderne comme WireGuard limitent l’écart ; Speed Test montre les vrais chiffres.' },
      { q: 'Un VPN vide-t-il la batterie ?', a: 'Un peu. Maintenir un tunnel ouvert consomme de l’énergie, surtout avec un signal mobile faible. Les protocoles modernes sont économes et on le remarque à peine au quotidien.' },
      { q: 'Un VPN gratuit est-il sûr ?', a: 'Cela dépend du fournisseur. Lisez la politique de confidentialité et vérifiez comment l’offre gratuite est financée. FollowNet Free est un vrai VPN avec quota hebdomadaire et Politique de confidentialité publiée.' },
    ],
  },

  'how-vpn-works': {
    h1: 'Comment fonctionne un VPN sur iPhone : tunnel, protocoles, serveurs et DNS',
    lead:
      'Un VPN ressemble à un simple interrupteur, mais quatre éléments travaillent derrière : un tunnel chiffré, le protocole qui le construit, le serveur par lequel votre trafic sort et le résolveur DNS qui traduit les noms en adresses. Nous les passons en revue avec FollowNet sur iPhone comme exemple.',
    sections: [
      {
        title: '1. Le tunnel',
        body:
          'Quand vous touchez Se connecter, FollowNet demande à iOS de lancer une Network Extension. Celle-ci ouvre une connexion chiffrée vers un serveur VPN, et iOS y envoie le trafic de l’appareil. Chaque paquet est chiffré sur l’iPhone, voyage jusqu’au serveur, y est déchiffré puis poursuit vers sa destination. Les réponses font le chemin inverse. Pour le réseau du café ou de l’hôtel, tout cela ressemble à un seul flux chiffré vers une adresse.',
      },
      {
        title: '2. Le protocole',
        body:
          'Le protocole décide comment le tunnel est négocié et comment les paquets sont emballés. WireGuard est léger et rapide sur les réseaux calmes. IKEv2 reprend bien le tunnel lors du passage du Wi‑Fi à la 4G. AmneziaWG garde le cœur de WireGuard mais change l’apparence du trafic ; Hysteria2 fonctionne sur QUIC et supporte les pertes de paquets ; VLESS Reality fait ressembler la connexion à du HTTPS ordinaire. Smart Connect choisit pour vous.',
        image: 'protocol',
        imageCaption: 'Protocoles de FollowNet. Smart en choisit un et bascule automatiquement.',
      },
      {
        title: '3. Le serveur (point de sortie)',
        body:
          'Au serveur, votre trafic quitte le tunnel et entre sur internet. Les sites voient l’adresse IP de ce serveur et sa localisation approximative. Un serveur plus proche signifie généralement moins de latence ; un autre pays change la version régionale de certains services. Dans FollowNet, la liste des serveurs affiche le ping de chaque emplacement, et « Emplacement optimal » en choisit un rapide automatiquement.',
        image: 'servers',
        imageCaption: 'La liste des serveurs avec ping, emplacements Free et Premium et favoris.',
      },
      {
        title: '4. Le DNS',
        body:
          'Avant d’ouvrir un site, l’iPhone doit traduire son nom (example.com) en adresse IP. C’est le DNS. Pendant que FollowNet est connecté, vous choisissez qui répond : le résolveur par défaut ou des préréglages comme Cloudflare, Google, Quad9 ou AdGuard (qui bloque aussi les domaines publicitaires et de pistage). Le DNS est indépendant du chiffrement : il décide qui traduit les noms, pas si le tunnel est chiffré.',
        image: 'dns',
        imageCaption: 'Réglages → DNS : choisissez un résolveur pour la confidentialité, la vitesse ou le filtrage.',
      },
      {
        title: 'L’ensemble : Smart Connect et profils',
        body:
          'Smart Connect gère la couche protocole : il commence par l’option la plus susceptible de fonctionner sur votre réseau et grimpe une échelle de repli si la connexion échoue ou si le trafic ne passe pas. Les profils réseau regroupent protocole, DNS, connexion automatique et mode serveur en un geste — par exemple Public Wi‑Fi (WireGuard, Quad9, Wi‑Fi uniquement, serveur le plus rapide) ou Travel (IKEv2, Cloudflare, toujours).',
      },
      {
        title: 'Où s’arrête la protection',
        body:
          'Le chiffrement s’arrête au serveur VPN. Ensuite, votre trafic circule comme n’importe quel trafic internet : le HTTPS des sites reste donc important. Le VPN ne fonctionne pas non plus avant que vous ayez terminé la page de connexion du Wi‑Fi d’un hôtel ou d’un aéroport : ces portails captifs exigent d’abord une connexion directe. Et sur ordinateur, l’extension Chrome de FollowNet est un proxy pour le navigateur : elle couvre les onglets Chrome, pas toutes les apps.',
      },
    ],
    steps: {
      title: 'Observer chaque couche vous-même',
      items: [
        'Connectez-vous avec le protocole sur Smart et notez le protocole indiqué par FollowNet.',
        'Ouvrez Speed Test et mesurez latence, débit descendant et montant sur le serveur actuel.',
        'Passez sur un serveur d’un autre pays et refaites le test : la latence dépend de la distance.',
        'Mettez le DNS sur Quad9 ou AdGuard dans Réglages et rechargez quelques sites.',
        'Essayez le profil Public Wi‑Fi ou Travel pour régler toutes les couches d’un coup.',
      ],
    },
    table: {
      title: 'Les quatre couches en un coup d’œil',
      head: ['Couche', 'Ce qu’elle décide', 'Où la modifier dans FollowNet'],
      rows: [
        ['Tunnel', 'Le trafic est chiffré entre iPhone et serveur', 'Bouton Se connecter'],
        ['Protocole', 'Comment le tunnel est construit et vu sur le réseau', 'Réglages → Protocole VPN'],
        ['Serveur', 'Où le trafic sort et quelle IP les sites voient', 'Liste des serveurs / Emplacement optimal'],
        ['DNS', 'Qui traduit les noms de sites en adresses', 'Réglages → DNS'],
      ],
    },
    bullets: [
      'Tunnel, protocole, serveur et DNS sont des couches distinctes',
      'Smart Connect choisit le protocole et bascule automatiquement',
      'Le serveur détermine la latence et l’IP que voient les sites',
      'Les préréglages DNS changent le résolveur, pas le chiffrement',
      'Les profils réseau règlent toutes les couches en un geste',
    ],
    cta: CTA,
    faq: [
      { q: 'Mon fournisseur voit-il que j’utilise un VPN ?', a: 'Il voit en général que vous êtes connecté à un serveur VPN, mais pas ce qui circule dans le tunnel. Des protocoles comme VLESS Reality rendent la connexion plus proche du HTTPS ordinaire.' },
      { q: 'Le VPN chiffre-t-il un trafic déjà en HTTPS ?', a: 'Oui, il ajoute une seconde couche. HTTPS protège le contenu ; le VPN masque en plus au réseau local les sites que vous contactez.' },
      { q: 'Pourquoi certaines apps se comportent-elles autrement avec un VPN ?', a: 'Certains services adaptent contenus ou contrôles de sécurité selon l’IP et le pays du serveur. Un serveur plus proche aide généralement.' },
      { q: 'Tout le trafic de l’iPhone passe-t-il par le tunnel ?', a: 'Tant que le VPN est connecté, iOS y envoie le trafic de l’appareil. Certains services système et le trafic du réseau local suivent les règles propres d’Apple.' },
    ],
  },

  'do-i-need-a-vpn': {
    h1: 'Ai-je besoin d’un VPN sur iPhone ? Une liste de contrôle honnête',
    lead:
      'Vous n’avez pas besoin d’un VPN pour tout, mais dans plusieurs situations courantes c’est la protection la plus simple à ajouter. Cette liste vous aide à décider selon votre usage réel du téléphone, sans discours alarmiste.',
    sections: [
      {
        title: 'Quand un VPN aide clairement',
        body:
          'Le cas classique est le Wi‑Fi public et invité : cafés, aéroports, hôtels, espaces de coworking et réseaux de conférences sont partagés avec des inconnus et gérés par des gens que vous ne connaissez pas. Un VPN chiffre tout entre votre iPhone et le serveur VPN : le hotspot ne voit pas quels services vous utilisez. Il aide aussi avec les SIM de voyage et sur les réseaux qui ralentissent ou filtrent certains services.',
      },
      {
        title: 'Quand il aide un peu',
        body:
          'Chez vous, sur votre propre routeur, un VPN apporte surtout de la confidentialité vis-à-vis de votre fournisseur, qui voit sinon les domaines que vous visitez. Si vous partagez le réseau avec des invités ou colocataires, c’est une raison de plus. Les télétravailleurs qui changent plusieurs fois de réseau dans la journée gagnent à garder un canal chiffré constant.',
      },
      {
        title: 'Quand un VPN ne règle pas le problème',
        body:
          'Un VPN n’arrête pas les e-mails d’hameçonnage, les sites frauduleux, les mots de passe faibles ni les logiciels malveillants. Il ne vous rend pas anonyme auprès des services où vous êtes connecté. Il ne garantit pas l’accès à tout catalogue de streaming et ne remplace pas le VPN d’entreprise si votre employeur l’exige. Si c’est ce qui vous inquiète, commencez par les mises à jour, un gestionnaire de mots de passe et l’authentification à deux facteurs.',
      },
      {
        title: 'Une façon simple de décider',
        body:
          'Pensez à la semaine écoulée. Si vous vous êtes connecté au moins une fois à un réseau que vous ne contrôlez pas, mieux vaut avoir un VPN prêt. Réglez-le pour ne pas avoir à y penser : la connexion automatique de FollowNet peut lancer le VPN dès que vous rejoignez un Wi‑Fi, sans toucher aux données mobiles — ou toujours, sur tous les réseaux.',
        image: 'autoconnect',
        imageCaption: 'Connexion automatique : désactivée, Wi‑Fi uniquement, 4G uniquement ou toujours.',
      },
      {
        title: 'Gratuit ou payant ?',
        body:
          'Essayez avant de payer. FollowNet Free est un vrai VPN avec un trafic hebdomadaire, les mêmes protocoles et Smart Connect, sans carte bancaire. Premium supprime la limite hebdomadaire, ouvre les emplacements Premium et couvre jusqu’à cinq appareils. Si Free suffit pour vos cafés et vos voyages, vous n’aurez peut-être jamais besoin de plus.',
      },
    ],
    steps: {
      title: 'Mettre en place un VPN auquel ne plus penser',
      items: [
        'Installez FollowNet et connectez-vous avec un code reçu par e-mail.',
        'Connectez-vous une fois et autorisez la configuration VPN d’iOS.',
        'Ouvrez Réglages → Connexion automatique et choisissez « Wi‑Fi uniquement » (ou « Toujours »).',
        'Laissez le protocole sur Smart pour que les réseaux difficiles soient gérés automatiquement.',
        'Au bout d’une semaine, consultez Statistiques pour voir votre consommation réelle.',
      ],
    },
    table: {
      title: 'Votre situation et l’intérêt d’un VPN',
      head: ['Situation', 'Un VPN aide ?', 'Pourquoi'],
      rows: [
        ['Wi‑Fi de café, d’aéroport ou d’hôtel', 'Oui, nettement', 'Réseau partagé géré par des inconnus'],
        ['SIM de voyage ou itinérance', 'Oui', 'Réseau inconnu, parfois filtré'],
        ['Votre Wi‑Fi à la maison', 'Un peu', 'Confidentialité vis-à-vis du fournisseur'],
        ['Liens d’hameçonnage ou d’arnaque', 'Non', 'Il faut de la prudence et des outils de sécurité, pas un tunnel'],
        ['Votre employeur impose son VPN', 'Utilisez le sien', 'La politique de l’entreprise prime'],
      ],
    },
    bullets: [
      'Surtout utile sur un Wi‑Fi qui n’est pas le vôtre et en voyage',
      'À la maison, plus de confidentialité vis-à-vis du fournisseur',
      'Ne remplace ni les mises à jour, ni les mots de passe, ni la prudence face aux liens',
      'La connexion automatique rend la protection automatique en Wi‑Fi',
      'Le trafic hebdomadaire Free permet de décider avant de payer',
    ],
    cta: CTA,
    faq: [
      { q: 'Faut-il un VPN en données mobiles ?', a: 'Les réseaux mobiles sont généralement plus sûrs qu’un Wi‑Fi ouvert. En 4G, le VPN apporte surtout de la confidentialité vis-à-vis de l’opérateur et aide en itinérance ou sur réseaux filtrés.' },
      { q: 'Faut-il laisser le VPN toujours actif ?', a: 'C’est possible. « Toujours » le garde actif partout ; « Wi‑Fi uniquement » est un bon compromis si ce sont surtout les hotspots qui vous préoccupent.' },
      { q: 'Relais privé iCloud remplace-t-il un VPN ?', a: 'Relais privé couvre Safari et une partie du trafic. Un VPN couvre toutes les apps de l’appareil et permet de choisir le pays du serveur.' },
      { q: 'Le VPN protège-t-il mon appli bancaire ?', a: 'Il chiffre le trajet sur les réseaux peu fiables, ce qui est utile. La sécurité bancaire dépend toujours de l’app de la banque, du HTTPS et de la sécurité de votre appareil.' },
    ],
  },

  'vpn-for-beginners': {
    h1: 'VPN pour débutants : configurer FollowNet sur iPhone en cinq minutes',
    lead:
      'Jamais utilisé de VPN ? Pas besoin de comprendre les protocoles pour être protégé. Ce guide pour débutants couvre l’installation, la seule demande d’iOS que vous verrez, ce que signifie l’écran principal et les trois réglages à connaître.',
    sections: [
      {
        title: 'Ce qu’il vous faut',
        body:
          'Un iPhone ou un iPad avec une version récente d’iOS, une adresse e-mail et environ cinq minutes. FollowNet Free ne demande pas de carte bancaire. Vous vous connectez avec un code à usage unique reçu par e-mail : aucun mot de passe à inventer ni à oublier.',
      },
      {
        title: 'La demande d’autorisation d’iOS',
        body:
          'La première fois que vous touchez Se connecter, iOS affiche un message indiquant que FollowNet souhaite ajouter une configuration VPN. C’est normal pour tout VPN de l’App Store : c’est ainsi qu’Apple permet à une app de créer un tunnel système. Touchez « Autoriser » et confirmez avec Face ID ou votre code. Cela ne se fait qu’une fois ; ensuite, un seul geste suffit pour se connecter.',
      },
      {
        title: 'Lire l’écran principal',
        body:
          'Quand le grand bouton devient vert et que le minuteur démarre, vous êtes connecté. Sous le minuteur, FollowNet affiche le protocole utilisé et, en bas, l’emplacement actuel avec son ping. L’icône VPN dans la barre d’état confirme que le tunnel est actif. Pour vous déconnecter, touchez à nouveau le bouton.',
        image: 'connect',
        imageCaption: 'Connecté : minuteur, protocole et emplacement actuel d’un coup d’œil.',
      },
      {
        title: 'Trois réglages à connaître',
        body:
          'Protocole : laissez Smart — FollowNet choisit ce qui marche sur chaque réseau. Connexion automatique : choisissez « Wi‑Fi uniquement » pour que le VPN démarre sur chaque hotspot. Emplacement : « Emplacement optimal » pour la vitesse, ou un pays de la liste. Le reste — DNS, profils réseau, Raccourcis — peut attendre que la curiosité vous prenne.',
        image: 'settings',
        imageCaption: 'Réglages : protocole, DNS, connexion automatique, profils réseau et autres appareils.',
      },
      {
        title: 'Si quelque chose ne marche pas',
        body:
          'La plupart des problèmes ont des causes simples. Sur le Wi‑Fi d’un hôtel ou d’un aéroport, terminez d’abord la page de connexion dans Safari, puis connectez-vous. Si la connexion reste bloquée, gardez Smart ou essayez un autre emplacement. Avec l’offre Free, vérifiez dans Statistiques qu’il vous reste du trafic hebdomadaire. Désactiver puis réactiver le Wi‑Fi règle beaucoup de bugs ponctuels.',
      },
      {
        title: 'Sur vos autres appareils',
        body:
          'Le même compte fonctionne sur l’iPad et dans l’extension FollowNet pour Chrome sur ordinateur. Sur un nouvel appareil, connectez-vous avec le même e-mail ou scannez un QR code depuis Réglages → Autres appareils sur votre téléphone. L’extension Chrome ne protège que les onglets du navigateur ; les apps iPhone et iPad protègent tout l’appareil.',
      },
    ],
    steps: {
      title: 'Votre première connexion pas à pas',
      items: [
        'Téléchargez FollowNet depuis l’App Store et ouvrez-la.',
        'Saisissez votre e-mail puis le code reçu.',
        'Touchez le grand bouton Se connecter.',
        'Touchez « Autoriser » dans la demande d’iOS et confirmez avec Face ID ou le code.',
        'Attendez que le minuteur démarre et que l’icône VPN apparaisse dans la barre d’état.',
        'Facultatif : Réglages → Connexion automatique → Wi‑Fi uniquement.',
      ],
    },
    bullets: [
      'Ni carte ni mot de passe : connexion par code e-mail',
      'Autorisez la demande d’iOS une fois, puis connectez-vous d’un geste',
      'Laissez le protocole sur Smart : aucun choix technique à faire',
      '« Wi‑Fi uniquement » vous protège automatiquement sur les hotspots',
      'Le même compte fonctionne sur iPad et dans Chrome',
    ],
    cta: CTA,
    faq: [
      { q: 'Est-il sûr d’autoriser la configuration VPN ?', a: 'Oui, pour un VPN de l’App Store c’est le mécanisme standard d’Apple. Vous pouvez la supprimer à tout moment dans Réglages iOS → VPN ou en supprimant l’app.' },
      { q: 'Dois-je modifier des réglages techniques ?', a: 'Non. Les valeurs par défaut — protocole Smart et Emplacement optimal — conviennent à la plupart. Seule la connexion automatique vaut la peine d’être changée par les débutants.' },
      { q: 'Comment savoir que le VPN est actif ?', a: 'Le bouton FollowNet est vert avec le minuteur en marche, et l’icône VPN apparaît dans la barre d’état de l’iPhone.' },
      { q: 'Que se passe-t-il quand le trafic Free est épuisé ?', a: 'Les nouvelles connexions sont suspendues jusqu’au renouvellement hebdomadaire, ou vous pouvez passer à Premium avec un trafic illimité.' },
    ],
  },

  'free-vpn-vs-paid': {
    h1: 'VPN gratuit ou payant : ce que vous obtenez vraiment (et ce que vous cédez)',
    lead:
      'Les VPN « gratuits » vont des offres honnêtes avec limite aux apps qui revendent vos données. Les offres payantes ne sont pas automatiquement meilleures non plus. Voici ce qui diffère vraiment, ce qu’il faut vérifier avant de faire confiance et comment se comparent Free et Premium chez FollowNet.',
    sections: [
      {
        title: 'Comment les VPN gratuits se financent',
        body:
          'Les serveurs coûtent de l’argent, donc tout VPN gratuit est financé d’une manière ou d’une autre. Les modèles honnêtes sont une offre gratuite limitée qui incite à passer au payant, ou la publicité dans l’app. Les modèles problématiques revendent les données de navigation, injectent de la publicité dans le trafic ou intègrent des SDK de pistage. La politique de confidentialité et l’étiquette de confidentialité de l’App Store indiquent généralement à quoi vous avez affaire.',
      },
      {
        title: 'Limites typiques des offres gratuites',
        body:
          'Attendez-vous à un quota de données (quotidien, hebdomadaire ou mensuel), moins d’emplacements, des serveurs plus lents ou plus chargés, de la publicité ou une durée de session limitée. Rien de tout cela n’est un problème en soi ; ça le devient quand c’est caché. Une bonne offre gratuite affiche clairement sa limite pour que vous voyiez quand vous en approchez.',
      },
      {
        title: 'FollowNet Free en pratique',
        body:
          'FollowNet Free, c’est la même app avec les mêmes protocoles, Smart Connect, préréglages DNS et connexion automatique. La différence : un quota de trafic hebdomadaire et l’ensemble des emplacements Free. L’écran Statistiques montre ce que vous avez consommé et ce qu’il reste cette semaine ; le quota se renouvelle chaque semaine, pas chaque jour.',
        image: 'stats',
        imageCaption: 'Statistiques : sessions, durée, données consommées et quota hebdomadaire.',
      },
      {
        title: 'Ce qu’apporte Premium',
        body:
          'Premium supprime la limite hebdomadaire, débloque les emplacements Premium, permet d’utiliser un abonnement sur jusqu’à cinq appareils et retire la publicité. Il s’achète sur l’App Store en abonnement mensuel ou annuel ; l’annuel comprend un court essai gratuit affiché dans la fenêtre de paiement d’Apple. Le chiffrement est identique sur les deux offres : vous payez la capacité et le choix, pas « plus de sécurité ».',
        image: 'premium',
        imageCaption: 'Premium : trafic illimité, tous les serveurs Premium, Smart Connect et jusqu’à cinq appareils.',
      },
      {
        title: 'Signaux d’alerte pour tout VPN',
        body:
          'Méfiez-vous des apps sans société ni politique de confidentialité claires, qui promettent « 100 % d’anonymat », affichent de faux comptes à rebours ou revendiquent des milliers de serveurs dans chaque pays. Vérifiez aussi la résiliation : un abonnement acheté sur l’App Store se gère et se résilie à tout moment dans les réglages de votre identifiant Apple.',
      },
    ],
    table: {
      title: 'FollowNet Free et Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Trafic', 'Quota hebdomadaire affiché dans l’app', 'Illimité'],
        ['Emplacements', 'Emplacements Free', 'Free + Premium'],
        ['Protocoles et Smart Connect', 'Inclus', 'Inclus'],
        ['DNS, connexion automatique, Speed Test', 'Inclus', 'Inclus'],
        ['Appareils', 'Vos appareils dans la limite du quota Free', 'Jusqu’à 5 appareils'],
        ['Publicité', 'Possible dans certaines régions', 'Aucune'],
      ],
    },
    steps: {
      title: 'Décider en une semaine',
      items: [
        'Utilisez FollowNet Free sur les réseaux que vous fréquentez vraiment : café, bureau, voyage.',
        'En fin de semaine, consultez Statistiques.',
        'Si vous êtes resté dans le quota et que les emplacements Free vous suffisent, restez sur Free.',
        'Si vous avez atteint la limite ou avez besoin d’un emplacement Premium précis, envisagez Premium.',
        'En cas de doute, commencez par le mensuel et passez à l’annuel plus tard.',
      ],
    },
    bullets: [
      'Tout VPN gratuit se finance d’une façon ou d’une autre — vérifiez laquelle',
      'Une bonne offre gratuite affiche ses limites ouvertement',
      'FollowNet Free : mêmes protocoles, quota hebdomadaire',
      'Premium : illimité, plus d’emplacements, jusqu’à cinq appareils',
      'Le chiffrement ne dépend pas de l’offre',
    ],
    cta: CTA,
    faq: [
      { q: 'FollowNet Free est-il vraiment gratuit ?', a: 'Oui. Aucune carte n’est requise. Vous disposez d’un quota hebdomadaire ; Premium est facultatif.' },
      { q: 'Un VPN payant est-il plus sûr qu’un gratuit ?', a: 'Pas automatiquement. La sécurité dépend des protocoles et des pratiques du fournisseur. Chez FollowNet, les deux offres utilisent le même chiffrement.' },
      { q: 'Puis-je résilier Premium à tout moment ?', a: 'Oui. Les abonnements se gèrent via votre identifiant Apple ; résiliez avant le renouvellement et vous gardez l’accès jusqu’à la fin de la période payée.' },
      { q: 'Un abonnement Premium couvre-t-il mon iPad ?', a: 'Oui, Premium couvre jusqu’à cinq appareils connectés au même compte, extension Chrome comprise.' },
    ],
  },

  'vpn-vs-proxy': {
    h1: 'VPN ou proxy : quelle différence et lequel vous faut-il ?',
    lead:
      'Un VPN et un proxy font tous deux passer votre trafic par un autre serveur, d’où la confusion fréquente. La vraie différence est la portée : un VPN couvre tout l’appareil, un proxy généralement une seule app, le plus souvent le navigateur. Voici quand choisir l’un ou l’autre, avec l’app FollowNet pour iPhone et son extension Chrome en exemple.',
    sections: [
      {
        title: 'Ce que fait un proxy',
        body:
          'Un proxy est un serveur qui relaie les requêtes d’une application. On le configure dans cette app — le plus souvent le navigateur — et seul son trafic passe par lui. Beaucoup de proxys ne chiffrent rien eux-mêmes ; les proxys sécurisés utilisent des connexions chiffrées, mais la portée reste limitée à l’app configurée.',
      },
      {
        title: 'Ce que fait un VPN',
        body:
          'Un VPN crée un tunnel chiffré au niveau du système. Sur iPhone, FollowNet utilise Network Extension d’Apple : Safari, messageries, mail, jeux et services système passent tous par le tunnel tant qu’il est actif. Pas besoin de configurer chaque app, et les apps qui ignorent les réglages de proxy sont couvertes aussi.',
      },
      {
        title: 'FollowNet utilise les deux, sur des appareils différents',
        body:
          'Sur iPhone et iPad, FollowNet est un VPN complet pour tout l’appareil. Sur ordinateur, l’extension FollowNet pour Chrome fonctionne comme proxy de navigateur : elle protège les onglets Chrome avec le même compte et ajoute un Kill Switch facultatif pour le navigateur, des listes anti-pub et anti-pistage et un routage par site. Elle ne couvre ni Slack, ni Zoom, ni les autres apps de bureau.',
      },
      {
        title: 'Quand un proxy suffit',
        body:
          'Si vous voulez seulement protéger la navigation sur un ordinateur portable — dans un café ou un bureau partagé —, un proxy de navigateur est léger, rapide à activer et ne touche pas au reste du système. Le routage par site permet de n’envoyer que certains sites par le proxy et de laisser les autres en direct.',
      },
      {
        title: 'Quand il vous faut un VPN',
        body:
          'Dès que des apps hors navigateur comptent — messageries, mail, banque, jeux, appels —, il vous faut un VPN système. Sur un téléphone, c’est presque toujours le cas : voilà pourquoi FollowNet sur iOS est un VPN et non un proxy.',
      },
    ],
    table: {
      title: 'VPN et proxy côte à côte',
      head: ['', 'VPN (FollowNet iOS)', 'Proxy (FollowNet Chrome)'],
      rows: [
        ['Portée', 'Toutes les apps de l’appareil', 'Onglets du navigateur seulement'],
        ['Mise en place', 'Une autorisation iOS, puis un geste', 'Installer l’extension, se connecter'],
        ['Chiffrement', 'Tout le tunnel jusqu’au serveur VPN', 'Trafic du navigateur jusqu’au proxy'],
        ['Kill Switch', 'Règles de connexion automatique d’iOS', 'Kill Switch du navigateur'],
        ['Idéal pour', 'Téléphones, protection de toutes les apps', 'Navigation sur portable en lieu public'],
      ],
    },
    steps: {
      title: 'Choisir en pratique',
      items: [
        'Sur iPhone ou iPad : installez l’app FollowNet, elle couvre toutes les apps.',
        'Sur un portable où vous ne faites que naviguer : ajoutez l’extension FollowNet pour Chrome.',
        'Connectez-vous aux deux avec le même e-mail : compte et offre sont partagés.',
        'Utilisez le routage par site dans Chrome si seuls certains sites doivent passer par le proxy.',
      ],
    },
    bullets: [
      'Proxy : une app (souvent le navigateur) ; VPN : tout l’appareil',
      'FollowNet sur iPhone est un VPN système via Network Extension',
      'FollowNet pour Chrome est un proxy de navigateur avec Kill Switch et routage',
      'Un compte et une offre pour les deux',
      'Messageries, appels et banque ont besoin d’un VPN, pas d’un proxy de navigateur',
    ],
    cta: CTA,
    faq: [
      { q: 'Un proxy est-il moins sûr qu’un VPN ?', a: 'Pas forcément pour le trafic qu’il couvre, mais il en couvre moins. Tout ce qui sort de l’app configurée reste sans protection.' },
      { q: 'Existe-t-il une app VPN FollowNet pour Mac ou Windows ?', a: 'Aujourd’hui, FollowNet se concentre sur iPhone/iPad et l’extension Chrome pour naviguer sur ordinateur.' },
      { q: 'Puis-je utiliser l’app iPhone et l’extension Chrome ensemble ?', a: 'Oui, avec le même compte. Premium couvre jusqu’à cinq appareils.' },
      { q: 'L’extension Chrome masque-t-elle mon IP aux sites ?', a: 'Pour les sites ouverts dans Chrome via le proxy, les sites voient l’adresse du serveur proxy.' },
    ],
  },

  'what-is-dns-leak': {
    h1: 'Qu’est-ce qu’une fuite DNS et comment choisir son DNS avec un VPN sur iPhone',
    lead:
      'Chaque fois que vous ouvrez un site, votre appareil demande d’abord son adresse à un serveur DNS. Si ces requêtes contournent le VPN, le réseau voit quand même les sites que vous visitez : c’est une fuite DNS. Voici ce que cela signifie concrètement et comment les préréglages DNS de FollowNet s’y intègrent.',
    sections: [
      {
        title: 'Le DNS en un paragraphe',
        body:
          'Le DNS est l’annuaire d’internet. Votre iPhone demande à un résolveur « quelle est l’adresse d’example.com ? » avant de se connecter. Le résolveur apprend donc chaque domaine que vous consultez. Sans VPN, c’est généralement celui de votre fournisseur ou du réseau Wi‑Fi, et les requêtes circulent souvent en clair.',
      },
      {
        title: 'Ce qu’est une fuite DNS',
        body:
          'Il y a fuite quand le tunnel protège votre trafic mais que les requêtes de noms partent quand même vers le résolveur du réseau local, hors du tunnel. Le contenu reste chiffré, mais le réseau voit la liste des domaines visités. En cause, le plus souvent : des apps mal configurées, des profils de configuration installés à la main ou des cas limites du système.',
      },
      {
        title: 'Comment FollowNet gère le DNS',
        body:
          'Pendant que FollowNet est connecté, vous choisissez le résolveur dans Réglages → DNS. « Par défaut » utilise le résolveur recommandé pour une compatibilité maximale. Cloudflare est rapide et axé confidentialité, Google largement disponible, Quad9 bloque les domaines malveillants connus, AdGuard bloque publicités, traqueurs et hameçonnage, et AdGuard Family ajoute un filtrage des contenus pour adultes.',
        image: 'dns',
        imageCaption: 'Préréglages DNS de FollowNet : Par défaut, Cloudflare, Google, AdGuard, AdGuard Family et Quad9.',
      },
      {
        title: 'Choisir son résolveur',
        body:
          'Pour la plupart, Par défaut ou Cloudflare est le bon départ. Prenez Quad9 pour une protection supplémentaire contre les sites malveillants, AdGuard pour moins de publicité dans les apps et le navigateur, AdGuard Family pour les appareils des enfants. Si le site de la banque ou l’intranet de l’entreprise ne marche plus après le changement, revenez à Par défaut : les résolveurs filtrants bloquent parfois des domaines légitimes.',
      },
      {
        title: 'Le DNS n’est pas du chiffrement',
        body:
          'Changer de DNS change qui répond aux requêtes ; cela ne chiffre pas votre trafic. C’est le tunnel VPN qui s’en charge. Ensemble, ils vous donnent les deux : un trafic chiffré et un résolveur de votre choix. Les profils réseau règlent les deux à la fois : Public Wi‑Fi utilise Quad9, Travel utilise Cloudflare.',
      },
      {
        title: 'Tester les fuites',
        body:
          'Connectez FollowNet, ouvrez dans Safari un site de test de fuite DNS et lancez le test étendu. Les résolveurs affichés doivent appartenir au préréglage choisi ou au fournisseur VPN, pas à votre fournisseur d’accès ni à l’hôtel. Recommencez après un changement de réseau. Gardez iOS à jour et n’installez pas de profils VPN trouvés au hasard sur le web.',
      },
    ],
    steps: {
      title: 'Régler le DNS dans FollowNet',
      items: [
        'Connectez FollowNet.',
        'Ouvrez Réglages → DNS.',
        'Choisissez un préréglage, par exemple Cloudflare ou Quad9.',
        'Rechargez quelques sites et lancez un test de fuite DNS dans Safari.',
        'Si quelque chose ne marche plus, revenez à Par défaut.',
      ],
    },
    table: {
      title: 'Quel préréglage DNS pour quel objectif',
      head: ['Préréglage', 'Idéal pour', 'Remarque'],
      rows: [
        ['Par défaut', 'Compatibilité maximale', 'Point de départ recommandé'],
        ['Cloudflare', 'Vitesse et confidentialité', 'Utilisé par le profil Travel'],
        ['Google', 'Fiabilité', 'Largement disponible'],
        ['Quad9', 'Bloquer les domaines malveillants', 'Utilisé par Public Wi‑Fi et Restricted'],
        ['AdGuard', 'Moins de pubs et de traqueurs', 'Peut bloquer des domaines légitimes'],
        ['AdGuard Family', 'Appareils des enfants', 'Ajoute un filtre de contenus adultes'],
      ],
    },
    bullets: [
      'Une fuite DNS révèle les domaines visités même si le trafic est chiffré',
      'FollowNet permet de choisir le résolveur pendant la connexion',
      'Quad9 et AdGuard ajoutent sécurité ou filtrage des pubs',
      'Le choix du DNS ne remplace pas le chiffrement du VPN',
      'Testez avec un site de fuite DNS après chaque changement',
    ],
    cta: CTA,
    faq: [
      { q: 'Quel DNS est le plus privé ?', a: 'Cela dépend de la politique du fournisseur. Cloudflare et Quad9 publient leurs engagements de confidentialité : lisez-les et choisissez à qui vous faites confiance.' },
      { q: 'AdGuard DNS peut-il remplacer un bloqueur de pubs ?', a: 'Il bloque de nombreux domaines publicitaires et de pistage dans toutes les apps, mais ne peut pas retirer les pubs servies depuis le même domaine que le contenu.' },
      { q: 'Pourquoi un site ne marche-t-il plus après le changement de DNS ?', a: 'Les résolveurs filtrants bloquent parfois un domaine dont le site a besoin. Revenez à Par défaut et il devrait se charger.' },
      { q: 'Dois-je forcément changer de DNS ?', a: 'Non. Par défaut fonctionne bien. Les préréglages DNS sont une option pour filtrer ou par préférence.' },
    ],
  },

  'vpn-hotel-wifi': {
    h1: 'Utiliser un VPN sur le Wi‑Fi de l’hôtel avec votre iPhone',
    lead:
      'Le Wi‑Fi d’hôtel est partagé, souvent vieillissant et presque toujours derrière une page de connexion. C’est donc l’un des meilleurs endroits pour utiliser un VPN — et l’un des plus agaçants si l’on se connecte dans le mauvais ordre. Voici la routine qui fonctionne.',
    sections: [
      {
        title: 'Pourquoi les réseaux d’hôtel méritent un VPN',
        body:
          'Tous les clients partagent le même réseau, le matériel est rarement mis à jour et vous ignorez qui le gère. Certains hôtels enregistrent aussi le trafic ou insèrent leurs propres pages. Un VPN chiffre tout entre votre iPhone et le serveur VPN : ni les autres clients ni l’exploitant ne voient quels services vous utilisez.',
      },
      {
        title: 'La page de connexion d’abord, le VPN ensuite',
        body:
          'La plupart des hôtels utilisent un portail captif : la page où vous saisissez votre numéro de chambre ou acceptez des conditions. Elle exige une connexion directe. Si le VPN tourne déjà, la page peut ne pas se charger et le tunnel ne pas atteindre internet. Rejoignez le Wi‑Fi, terminez le portail dans Safari, vérifiez qu’un site normal s’ouvre, puis connectez FollowNet.',
      },
      {
        title: 'Choisir les bons réglages',
        body:
          'Sur un réseau d’hôtel calme, le profil Public Wi‑Fi est idéal : WireGuard pour la vitesse, DNS Quad9 et connexion automatique en Wi‑Fi. Certains hôtels ralentissent ou bloquent le trafic VPN ; passez alors au profil Restricted, qui garde Smart Connect actif et lui permet de basculer vers AmneziaWG, Hysteria2 ou VLESS Reality.',
        image: 'autoconnect',
        imageCaption: '« Wi‑Fi uniquement » lance le VPN automatiquement sur chaque hotspot.',
      },
      {
        title: 'Vérifier honnêtement la vitesse',
        body:
          'Le soir, quand tout le monde regarde des vidéos, la connexion de l’hôtel est souvent lente. Lancez Speed Test sans puis avec VPN sur le même réseau. Si l’écart est important, choisissez un serveur plus proche ou laissez « Emplacement optimal » décider. Un VPN ne peut pas ajouter une bande passante que l’hôtel n’a pas.',
        image: 'speedtest',
        imageCaption: 'Speed Test affiche débit descendant et montant, latence, gigue et pertes de paquets.',
      },
      {
        title: 'Enregistrer ce qui marche',
        body:
          'Les chaînes hôtelières utilisent souvent la même installation réseau dans tous leurs établissements. Quand vous trouvez une combinaison qui fonctionne — protocole, DNS et serveur —, enregistrez-la comme profil réseau personnalisé au nom de la chaîne. La prochaine fois, un geste suffira.',
      },
      {
        title: 'Quand la connexion coupe sans arrêt',
        body:
          'Certains portails vous déconnectent toutes les quelques heures ou chaque jour. Si le VPN ne fait soudain plus passer de trafic, déconnectez-le, ouvrez Safari pour voir si la page de connexion est revenue, reconnectez-vous et relancez le VPN. C’est la règle de l’hôtel, pas une panne du VPN.',
      },
    ],
    steps: {
      title: 'Routine sur le Wi‑Fi de l’hôtel',
      items: [
        'Rejoignez le Wi‑Fi de l’hôtel et terminez la page de connexion dans Safari.',
        'Ouvrez un site normal pour vérifier qu’internet fonctionne.',
        'Connectez FollowNet avec le profil Public Wi‑Fi ou Smart.',
        'Si cela ne se connecte pas ou si les pages se bloquent, passez au profil Restricted.',
        'Lancez Speed Test et choisissez un serveur plus proche si besoin.',
        'Enregistrez la configuration qui marche comme profil pour cette chaîne.',
      ],
    },
    bullets: [
      'Les réseaux d’hôtel partagés sont le cas typique du VPN',
      'Terminez toujours la page de connexion avant de vous connecter',
      'Public Wi‑Fi pour les réseaux calmes, Restricted pour les difficiles',
      'Speed Test révèle si c’est l’hôtel ou le serveur qui bride',
      'Enregistrez un profil qui marche pour chaque chaîne hôtelière',
    ],
    cta: CTA,
    faq: [
      { q: 'Pourquoi la page de connexion de l’hôtel ne s’ouvre-t-elle pas avec le VPN ?', a: 'Le portail exige une connexion directe. Déconnectez, terminez la connexion, puis reconnectez.' },
      { q: 'Le Wi‑Fi d’hôtel avec mot de passe est-il sûr ?', a: 'Un mot de passe partagé protège des personnes extérieures, pas des autres clients ni de l’exploitant. Le VPN ajoute la couche manquante.' },
      { q: 'Un VPN accélère-t-il un Wi‑Fi d’hôtel lent ?', a: 'Non. Il peut aider si l’hôtel bride certains services, mais il ne peut pas ajouter de bande passante.' },
      { q: 'Free suffit-il pour un séjour à l’hôtel ?', a: 'Pour la navigation, les messageries et le mail, généralement oui. Le streaming du soir épuise vite le quota hebdomadaire ; Premium est illimité.' },
    ],
  },

  'vpn-airport-wifi': {
    h1: 'Wi‑Fi d’aéroport et VPN : rester privé en voyage',
    lead:
      'Le Wi‑Fi d’aéroport est gratuit, saturé et plein de réseaux aux noms trompeurs. Un VPN garde votre trafic chiffré pendant que vous attendez votre vol. Voici comment vous connecter en sécurité, à quoi vous attendre côté vitesse et comment faire durer un quota Free.',
    sections: [
      {
        title: 'Des risques propres aux aéroports',
        body:
          'Des milliers de personnes partagent les mêmes hotspots, et il est facile de créer un faux réseau au nom officiel. Avant de vous connecter, vérifiez le nom officiel du réseau sur les panneaux de l’aéroport. Une fois connecté, le VPN chiffre votre trafic : ni le réseau ni les autres voyageurs ne voient ce que vous faites.',
      },
      {
        title: 'Se connecter dans le bon ordre',
        body:
          'Les réseaux d’aéroport ont presque toujours une page de connexion. Rejoignez le réseau, terminez la page (parfois elle demande un e-mail ou affiche une pub), vérifiez qu’un site normal se charge, puis touchez Se connecter dans FollowNet. Avec « Wi‑Fi uniquement », le VPN démarrera tout seul après le portail.',
      },
      {
        title: 'Prévoir la saturation',
        body:
          'Aux heures de pointe, le Wi‑Fi d’aéroport peut être très lent. Choisissez un serveur proche ou « Emplacement optimal » et lancez Speed Test avant un gros téléchargement. Si le Wi‑Fi est inutilisable, passez aux données mobiles : FollowNet fonctionne aussi en 4G, et « Toujours » le garde actif sur les deux.',
        image: 'servers',
        imageCaption: 'Choisissez un emplacement proche ou laissez « Emplacement optimal » décider.',
      },
      {
        title: 'Faire durer le quota Free',
        body:
          'Le streaming vidéo épuise le quota hebdomadaire le plus vite. Téléchargez films et musique chez vous avant de partir, gardez le VPN pour les messageries, le mail, la banque et la navigation à la porte d’embarquement, et évitez les tests de vitesse inutiles. Le trafic restant s’affiche dans Statistiques ; si vous voyagez souvent, Premium supprime la limite.',
        image: 'stats',
        imageCaption: 'Statistiques indique ce qu’il reste du quota hebdomadaire.',
      },
      {
        title: 'Itinérance et arrivée',
        body:
          'À l’atterrissage, vous serez peut-être sur une SIM étrangère ou en itinérance. Gardez Smart Connect activé : certains réseaux à l’étranger traitent le trafic VPN différemment, et Smart Connect bascule vers un protocole qui fonctionne. Le profil Travel utilise IKEv2, qui supporte bien le passage entre le Wi‑Fi de l’aéroport et le réseau mobile.',
      },
    ],
    steps: {
      title: 'Avant le départ et à l’aéroport',
      items: [
        'À la maison : installez FollowNet, connectez-vous et téléchargez du contenu hors ligne.',
        'Réglez « Wi‑Fi uniquement » ou appliquez le profil Travel.',
        'À l’aéroport, vérifiez le nom officiel du Wi‑Fi sur les panneaux.',
        'Rejoignez-le et terminez la page de connexion.',
        'Laissez FollowNet se connecter, puis naviguez, écrivez et travaillez normalement.',
      ],
    },
    bullets: [
      'Vérifiez le nom officiel du réseau : les faux hotspots existent',
      'D’abord la page de connexion, ensuite le VPN',
      'Choisissez un serveur proche : les aéroports sont saturés',
      'Téléchargez les vidéos avant pour économiser le trafic Free',
      'Le profil Travel et Smart Connect aident sur les réseaux étrangers',
    ],
    cta: CTA,
    faq: [
      { q: 'Le Wi‑Fi d’aéroport est-il dangereux ?', a: 'Il est partagé avec beaucoup d’inconnus et facile à imiter. Utiliser le réseau officiel plus un VPN élimine l’essentiel du risque au quotidien.' },
      { q: 'Wi‑Fi de l’aéroport ou données mobiles ?', a: 'Les données mobiles sont généralement plus sûres et parfois plus rapides. Si vous utilisez le Wi‑Fi, gardez le VPN actif.' },
      { q: 'Pourquoi le VPN est-il lent à l’aéroport ?', a: 'C’est en général le Wi‑Fi lui-même qui est saturé. Un serveur proche aide ; le VPN ne peut pas ajouter de bande passante.' },
      { q: 'FollowNet fonctionne-t-il à l’étranger ?', a: 'Oui, dans le respect des lois locales. Smart Connect s’adapte aux différentes conditions réseau.' },
    ],
  },

  'vpn-for-remote-work': {
    h1: 'VPN pour le télétravail : protéger votre iPhone au café, en coworking et en déplacement',
    lead:
      'Télétravailler, c’est envoyer mails, documents et appels sur des réseaux que vous ne contrôlez pas. Un VPN personnel garde ce trafic chiffré. Voici une configuration pratique pour télétravailleurs — et les cas où les règles de votre employeur priment.',
    sections: [
      {
        title: 'Pourquoi le télétravail a besoin de chiffrement',
        body:
          'Votre journée commence peut-être sur le Wi‑Fi de la maison, continue dans un café et se termine en coworking ou dans le train. Chaque réseau est géré par quelqu’un d’autre. Un VPN chiffre le trajet du mail, du chat, des documents en ligne et des appels vidéo : l’exploitant du réseau ne voit pas quels services vous utilisez et ne peut pas manipuler le trafic non chiffré.',
      },
      {
        title: 'VPN personnel et VPN d’entreprise',
        body:
          'Si votre entreprise fournit son propre VPN pour accéder aux systèmes internes, utilisez-le : la politique de l’entreprise prime et FollowNet ne le remplace pas. FollowNet est un VPN personnel : il protège votre appareil sur les réseaux publics et convient parfaitement aux indépendants, prestataires et à tous ceux qui n’ont pas de VPN d’entreprise.',
      },
      {
        title: 'Configuration recommandée',
        body:
          'Réglez la connexion automatique sur « Wi‑Fi uniquement » pour que le VPN démarre sur chaque hotspot. Laissez le protocole sur Smart pour la fiabilité d’un réseau à l’autre. Pour les appels importants, choisissez un serveur proche de vous ou de vos interlocuteurs : en vidéo, la latence compte plus que le débit.',
        image: 'autoconnect',
        imageCaption: '« Wi‑Fi uniquement » vous protège automatiquement dans chaque café.',
      },
      {
        title: 'Vérifier la qualité avant que cela compte',
        body:
          'Lancez Speed Test dix minutes avant une réunion. Regardez la latence et la gigue, pas seulement le débit : une gigue élevée hache le son même sur une connexion rapide. Si le résultat est mauvais, essayez un autre serveur proche ou passez l’appel en données mobiles.',
        image: 'speedtest',
        imageCaption: 'Pour les appels vidéo, la gigue et les pertes de paquets comptent le plus.',
      },
      {
        title: 'Téléphone et portable avec un seul compte',
        body:
          'Utilisez FollowNet sur l’iPhone pour toutes les apps et l’extension FollowNet pour Chrome sur le portable pour le travail dans le navigateur : webmail, Google Docs, Notion, CRM. Un abonnement Premium couvre jusqu’à cinq appareils. N’oubliez pas que l’extension Chrome ne protège que les onglets Chrome, pas les apps de bureau comme Slack ou Zoom.',
      },
      {
        title: 'Quand Free ne suffit pas',
        body:
          'Les appels vidéo quotidiens et les envois de gros fichiers consomment beaucoup de trafic. Si vous télétravaillez tous les jours, le trafic illimité de Premium est le choix pratique ; Free convient bien aux sessions occasionnelles au café.',
      },
    ],
    steps: {
      title: 'Liste du télétravail',
      items: [
        'Installez FollowNet sur l’iPhone et connectez-vous.',
        'Réglages → Connexion automatique → Wi‑Fi uniquement.',
        'Ajoutez l’extension FollowNet pour Chrome sur le portable avec le même e-mail.',
        'Avant les appels, lancez Speed Test et choisissez un serveur proche si la gigue est élevée.',
        'Pour les systèmes internes, suivez la politique VPN de votre employeur.',
      ],
    },
    bullets: [
      'Chiffre mails, chats, documents et appels sur les réseaux publics',
      'Utilisez le VPN de l’entreprise quand sa politique l’exige',
      '« Wi‑Fi uniquement » évite d’avoir à y penser',
      'Surveillez latence et gigue avant les appels importants',
      'Un compte pour iPhone et Chrome ; Premium couvre cinq appareils',
    ],
    cta: CTA,
    faq: [
      { q: 'Puis-je utiliser FollowNet avec le VPN de mon entreprise ?', a: 'iOS fait tourner un VPN à la fois. Utilisez celui de l’entreprise pour les systèmes internes et FollowNet le reste du temps.' },
      { q: 'Un VPN dégrade-t-il les appels vidéo ?', a: 'Il ajoute un peu de latence. Un serveur proche la réduit au minimum ; Speed Test montre l’effet réel.' },
      { q: 'FollowNet protège-t-il Slack ou Zoom sur mon portable ?', a: 'L’extension Chrome ne couvre que les onglets du navigateur. Sur iPhone, l’app protège toutes les apps, y compris Slack et Zoom.' },
      { q: 'FollowNet voit-il mes données professionnelles ?', a: 'Le trafic en HTTPS reste chiffré de bout en bout. Ce que FollowNet traite est décrit dans la Politique de confidentialité.' },
    ],
  },

  'wireguard-vs-ikev2': {
    h1: 'WireGuard ou IKEv2 sur iPhone : quel protocole VPN choisir ?',
    lead:
      'WireGuard et IKEv2 sont les deux protocoles VPN les plus courants sur iOS, et FollowNet prend en charge les deux. En pratique, ils sont aussi sûrs l’un que l’autre ; la différence tient à la vitesse, au comportement lors des changements de réseau et à la facilité avec laquelle les réseaux les reconnaissent.',
    sections: [
      {
        title: 'WireGuard en bref',
        body:
          'WireGuard est un protocole moderne au code réduit et auditable, avec une cryptographie actuelle. Il se connecte vite, a peu de surcharge et est généralement l’option la plus rapide sur les réseaux stables de la maison et du bureau. Comme son trafic a une signature reconnaissable, certains réseaux le ralentissent ou le bloquent.',
      },
      {
        title: 'IKEv2 en bref',
        body:
          'IKEv2 est une norme établie, prise en charge nativement par iOS. Sa force est la mobilité : quand vous passez du Wi‑Fi à la 4G ou traversez des zones mal couvertes, il reprend le tunnel en douceur. Il est un peu plus lourd que WireGuard et peut aussi être bloqué sur les réseaux restrictifs.',
      },
      {
        title: 'Vitesse',
        body:
          'Sur un réseau calme, WireGuard est en général un peu plus rapide et avec moins de latence. L’écart est souvent faible comparé à l’effet de la distance au serveur. Mesurez vous-même : connectez-vous au même serveur avec chaque protocole et lancez Speed Test deux fois.',
        image: 'speedtest',
        imageCaption: 'Comparez les protocoles sur le même serveur avec Speed Test.',
      },
      {
        title: 'Changement de réseau',
        body:
          'Si vous faites des trajets, voyagez ou bougez beaucoup, le comportement de reconnexion d’IKEv2 se remarque : moins de blocages quand le téléphone change de réseau. C’est pourquoi le profil Travel de FollowNet utilise IKEv2 par défaut.',
      },
      {
        title: 'Quand aucun ne fonctionne',
        body:
          'Certains réseaux perturbent les deux. Utilisez alors Smart Connect : il bascule vers AmneziaWG (une variante de WireGuard à la signature modifiée), Hysteria2 (sur QUIC, bon en cas de pertes) ou VLESS Reality (ressemble à du HTTPS ordinaire). Le profil Restricted garde cette échelle active par défaut.',
        image: 'protocol',
        imageCaption: 'Choisissez WireGuard ou IKEv2 manuellement, ou laissez Smart.',
      },
    ],
    table: {
      title: 'WireGuard et IKEv2',
      head: ['', 'WireGuard', 'IKEv2'],
      rows: [
        ['Vitesse sur réseau stable', 'Généralement le plus rapide', 'Rapide, un peu plus de surcharge'],
        ['Passage Wi‑Fi ↔ 4G', 'Bon', 'Excellent, reprise en douceur'],
        ['Temps de connexion', 'Très rapide', 'Rapide'],
        ['Blocage sur réseaux restrictifs', 'Parfois', 'Parfois'],
        ['Profil FollowNet', 'Public Wi‑Fi', 'Travel'],
      ],
    },
    steps: {
      title: 'Trouver le vôtre en deux minutes',
      items: [
        'Connectez-vous à un serveur proche en WireGuard et lancez Speed Test.',
        'Passez à IKEv2 sur le même serveur et relancez Speed Test.',
        'Si vous restez surtout au même endroit, gardez le plus rapide.',
        'Si vous bougez beaucoup, préférez IKEv2 ou le profil Travel.',
        'Si aucun ne se connecte, revenez à Smart et laissez-le basculer.',
      ],
    },
    bullets: [
      'Les deux sont sûrs ; la différence tient à la vitesse et à la mobilité',
      'WireGuard : le plus rapide sur réseau stable',
      'IKEv2 : le meilleur pour passer du Wi‑Fi à la 4G',
      'Smart Connect bascule vers AmneziaWG, Hysteria2 ou VLESS Reality',
      'Mesurez sur votre propre réseau avec Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: 'Lequel est le plus sûr ?', a: 'Les deux utilisent une cryptographie moderne et robuste s’ils sont bien implémentés. Choisissez selon la vitesse et la mobilité, pas la sécurité.' },
      { q: 'Lequel consomme le moins de batterie ?', a: 'WireGuard est généralement un peu plus léger, mais l’écart est faible au quotidien.' },
      { q: 'Puis-je laisser FollowNet choisir ?', a: 'Oui. Smart Connect choisit le protocole pour chaque réseau et bascule si l’un échoue.' },
      { q: 'Les deux sont-ils disponibles en Free ?', a: 'La disponibilité suit votre offre dans l’app ; les protocoles principaux sont disponibles en Free dans la limite du quota hebdomadaire.' },
    ],
  },

  'what-is-kill-switch-vpn': {
    h1: 'Qu’est-ce qu’un kill switch VPN et comment fonctionne-t-il sur iPhone et dans Chrome ?',
    lead:
      'Un kill switch est un filet de sécurité : si la connexion VPN tombe, il empêche le trafic de circuler sans protection. Son fonctionnement dépend de la plateforme. Voici ce qu’il signifie sur iPhone et dans l’extension FollowNet pour Chrome, et comment tout régler pour qu’une coupure ne vous expose pas.',
    sections: [
      {
        title: 'Le problème qu’il résout',
        body:
          'Une connexion VPN peut tomber : signal faible, changement de réseau, redémarrage du serveur. Pendant quelques secondes, des apps peuvent alors envoyer du trafic hors du tunnel via le réseau local. Sur un hotspot peu fiable, c’est exactement ce que vous vouliez éviter. Un kill switch bloque le trafic jusqu’au retour du tunnel.',
      },
      {
        title: 'Sur ordinateur : le Kill Switch de Chrome',
        body:
          'L’extension FollowNet pour Chrome inclut un Kill Switch de navigateur. Activé, il fait que Chrome cesse de charger des pages si la connexion au proxy échoue, au lieu de basculer discrètement en connexion directe. Il se limite à Chrome : les autres navigateurs et apps de bureau ne sont pas concernés.',
      },
      {
        title: 'Sur iPhone : comment iOS s’en occupe',
        body:
          'iOS gère les tunnels VPN au niveau du système via Network Extension. FollowNet s’appuie sur ce comportement du système et sur les règles de connexion automatique pour rétablir vite le tunnel : avec « Toujours », le VPN redémarre automatiquement sur n’importe quel réseau. Nous ne promettons pas un interrupteur magique garantissant zéro paquet dans chaque cas limite d’iOS — aucun VPN iOS honnête ne le peut.',
        image: 'autoconnect',
        imageCaption: '« Toujours » redémarre le VPN sur n’importe quel réseau.',
      },
      {
        title: 'Réglages qui limitent les fuites sur iPhone',
        body:
          'Utilisez « Toujours » sur les réseaux peu fiables. Laissez le protocole sur Smart pour qu’un protocole défaillant soit remplacé au lieu de vous laisser sans protection. Sur les réseaux difficiles, appliquez le profil Restricted, qui combine Smart Connect, « Toujours » et le serveur le plus rapide. Ajoutez un widget sur l’écran d’accueil pour voir d’un coup d’œil si vous êtes protégé.',
      },
      {
        title: 'Ce qu’un kill switch ne peut pas faire',
        body:
          'Il n’empêche pas les fuites que vous provoquez vous-même : connexions à vos comptes, partage de position, apps de pistage installées. Il ne vous garde pas non plus en ligne sur un réseau en panne ; il empêche seulement le trafic de sortir sans protection pendant que le VPN se reconnecte.',
      },
    ],
    table: {
      title: 'Comportement du kill switch selon la plateforme',
      head: ['', 'FollowNet iOS', 'FollowNet Chrome'],
      rows: [
        ['Portée', 'Tout l’appareil tant qu’il est connecté', 'Onglets Chrome'],
        ['Mécanisme', 'Network Extension d’iOS + connexion automatique', 'Réglage Kill Switch du navigateur'],
        ['Si la connexion tombe', 'La connexion automatique rétablit le tunnel', 'Chrome cesse de charger les pages'],
        ['Réglage recommandé', '« Toujours » ou profil Restricted', 'Kill Switch activé'],
      ],
    },
    steps: {
      title: 'Activer les protections',
      items: [
        'iPhone : Réglages → Connexion automatique → Toujours.',
        'iPhone : laissez le protocole sur Smart ou appliquez le profil Restricted.',
        'Chrome : ouvrez les réglages de l’extension FollowNet et activez Kill Switch.',
        'Ajoutez le widget FollowNet à l’écran d’accueil pour suivre l’état.',
      ],
    },
    bullets: [
      'Un kill switch bloque le trafic quand le VPN tombe',
      'Extension Chrome : Kill Switch explicite pour le navigateur',
      'iPhone : Network Extension d’iOS et « Toujours »',
      'Smart Connect remplace automatiquement un protocole défaillant',
      'Aucun kill switch ne protège de vos propres connexions et apps',
    ],
    cta: CTA,
    faq: [
      { q: 'FollowNet a-t-il un kill switch sur iPhone ?', a: 'FollowNet s’appuie sur la gestion VPN du système iOS et la connexion automatique pour rétablir le tunnel ; l’interrupteur Kill Switch explicite se trouve dans l’extension Chrome.' },
      { q: 'Un kill switch coupe-t-il tout internet ?', a: 'Seulement pendant la reconnexion du VPN. Si le réseau lui-même est en panne, vous serez hors ligne de toute façon.' },
      { q: 'Faut-il toujours utiliser un kill switch ?', a: 'Sur les réseaux peu fiables, oui. À la maison, c’est facultatif.' },
      { q: 'Le Kill Switch de Chrome affecte-t-il d’autres navigateurs ?', a: 'Non, seulement Chrome avec l’extension FollowNet.' },
    ],
  },

  'vpn-not-connecting-iphone': {
    h1: 'Le VPN ne se connecte pas sur iPhone ? Solution pas à pas',
    lead:
      'Quand un VPN refuse de se connecter, la cause est presque toujours l’une de ces cinq : l’autorisation iOS, une page de connexion Wi‑Fi, la limite de trafic, un réseau qui bloque le protocole ou un bug passager. Suivez la liste dans l’ordre : la plupart des problèmes se règlent dès les trois premières étapes.',
    sections: [
      {
        title: '1. Vérifier l’autorisation VPN d’iOS',
        body:
          'Si vous avez touché « Refuser » dans la demande d’iOS, ou si la configuration VPN a été supprimée, FollowNet ne peut pas démarrer le tunnel. Ouvrez FollowNet et touchez de nouveau Se connecter : iOS redemandera. Vous pouvez aussi vérifier dans Réglages iOS → VPN que la configuration FollowNet est présente.',
      },
      {
        title: '2. Terminer la page de connexion Wi‑Fi',
        body:
          'Hôtels, aéroports, trains et certains cafés exigent une connexion sur un portail captif avant qu’internet fonctionne. Déconnectez le VPN, ouvrez Safari, terminez la page, vérifiez qu’un site normal se charge, puis reconnectez-vous.',
      },
      {
        title: '3. Vérifier votre quota',
        body:
          'Avec l’offre Free, les nouvelles connexions sont suspendues une fois le quota hebdomadaire épuisé. Ouvrez Statistiques pour voir ce qu’il reste. Attendez le renouvellement hebdomadaire ou passez à Premium pour un trafic illimité.',
        image: 'stats',
        imageCaption: 'Statistiques indique le quota hebdomadaire et la consommation.',
      },
      {
        title: '4. Confier le réseau à Smart Connect',
        body:
          'Certains réseaux bloquent ou ralentissent des protocoles précis. Réglez le protocole sur Smart pour que FollowNet bascule automatiquement. Si cela échoue encore, appliquez le profil Restricted ou essayez manuellement AmneziaWG, Hysteria2 ou VLESS Reality. Essayez aussi un autre serveur : un emplacement peut être saturé ou momentanément indisponible.',
        image: 'protocol',
        imageCaption: 'Réglages → Protocole VPN : Smart est le choix le plus robuste.',
      },
      {
        title: '5. Écarter un bug passager',
        body:
          'Activez puis désactivez le mode Avion, oubliez puis rejoignez le Wi‑Fi, ou passez en données mobiles pour savoir si le réseau est en cause. Vérifiez que FollowNet et iOS sont à jour. En dernier recours, supprimez la configuration VPN dans Réglages iOS → VPN et reconnectez-vous dans FollowNet pour la recréer.',
      },
      {
        title: 'Connecté, mais rien ne charge',
        body:
          'Si FollowNet affiche Connecté mais que les pages ne s’ouvrent pas, le réseau perturbe probablement le protocole. Changez de protocole ou de serveur et lancez Speed Test pour vérifier que le trafic passe. FollowNet contrôle le trafic réel avant de considérer une session comme saine, mais un réseau peut changer en cours de session.',
      },
    ],
    steps: {
      title: 'Liste de dépannage rapide',
      items: [
        'Touchez Se connecter et autorisez la configuration VPN si iOS le demande.',
        'Déconnectez, terminez la page de connexion Wi‑Fi dans Safari, reconnectez.',
        'Vérifiez le trafic hebdomadaire restant dans Statistiques (offre Free).',
        'Réglez le protocole sur Smart ou appliquez le profil Restricted.',
        'Choisissez un autre serveur.',
        'Activez le mode Avion ou passez en données mobiles pour tester le réseau.',
        'Mettez à jour FollowNet et iOS ; recréez la configuration VPN si besoin.',
      ],
    },
    table: {
      title: 'Symptôme et cause probable',
      head: ['Symptôme', 'Cause probable', 'Solution'],
      rows: [
        ['Se connecter ne fait rien', 'Autorisation VPN manquante', 'Autoriser la demande d’iOS'],
        ['Marche en 4G, pas en Wi‑Fi', 'Portail captif ou protocole bloqué', 'Se connecter au portail ; Smart ou Restricted'],
        ['A cessé de marcher en milieu de semaine', 'Quota Free épuisé', 'Attendre le renouvellement ou passer à Premium'],
        ['Connecté mais aucune page', 'Protocole perturbé', 'Changer de protocole ou de serveur'],
        ['Échoue partout', 'Bug passager', 'Mode Avion, mise à jour, recréer la configuration'],
      ],
    },
    bullets: [
      'Le plus souvent : autorisation, page de connexion ou quota',
      'Smart Connect et le profil Restricted gèrent les réseaux difficiles',
      'Essayez un autre serveur avant de croire l’app en panne',
      'Tester en données mobiles distingue problème de réseau et d’app',
      'Recréer la configuration VPN corrige les rares bugs d’iOS',
    ],
    cta: CTA,
    faq: [
      { q: 'Pourquoi le VPN marche-t-il en 4G mais pas en Wi‑Fi ?', a: 'Le Wi‑Fi demande sans doute une connexion ou bloque le protocole. Terminez la connexion et utilisez Smart Connect.' },
      { q: 'J’ai touché « Refuser » par erreur. Que faire ?', a: 'Touchez de nouveau Se connecter dans FollowNet ; iOS affichera la demande à nouveau.' },
      { q: 'Faut-il réinstaller l’app ?', a: 'C’est rarement nécessaire. Recréer la configuration VPN via Réglages iOS → VPN fait généralement la même chose.' },
      { q: 'Qui contacter si rien ne marche ?', a: 'Écrivez à support@follow-net.com en précisant le type de réseau, le protocole et l’heure du problème.' },
    ],
  },

  'vpn-slow-iphone': {
    h1: 'VPN lent sur iPhone ? Trouver la cause et accélérer',
    lead:
      'Un léger ralentissement avec un VPN est normal ; un fort ralentissement, non. L’astuce : mesurer avant de changer quoi que ce soit. Ce guide montre comment savoir si le goulot d’étranglement est le réseau, le serveur ou le protocole, et que faire dans chaque cas.',
    sections: [
      {
        title: 'Mesurer d’abord',
        body:
          'Déconnectez le VPN et faites un test de vitesse pour avoir une référence. Puis connectez FollowNet et lancez son Speed Test intégré sur le même réseau. Comparez débits descendant et montant, latence et gigue. Si la référence est déjà lente, c’est le réseau le problème, pas le VPN.',
        image: 'speedtest',
        imageCaption: 'Speed Test de FollowNet : débits, latence, gigue et pertes.',
      },
      {
        title: 'La distance au serveur compte le plus',
        body:
          'Chaque millier de kilomètres en plus ajoute de la latence. Un serveur sur un autre continent peut transformer une connexion rapide en connexion poussive. Utilisez « Emplacement optimal » ou choisissez le serveur le plus proche au ping le plus bas. Ne prenez un serveur lointain que si vous avez besoin de cette région précise.',
        image: 'servers',
        imageCaption: 'Le ping de chaque emplacement aide à choisir un serveur proche et rapide.',
      },
      {
        title: 'Essayer un autre protocole',
        body:
          'Sur les réseaux stables, WireGuard est généralement le plus rapide. Si le réseau bride le trafic VPN, WireGuard peut ramer alors qu’AmneziaWG, Hysteria2 ou VLESS Reality font mieux. Smart Connect le fait automatiquement ; pour comparer à la main, changez de protocole dans Réglages et refaites le test sur le même serveur.',
      },
      {
        title: 'Heures de pointe et réseaux saturés',
        body:
          'Le soir dans les hôtels, trains et aéroports, la bande passante est partagée. Un signal mobile faible limite aussi la vitesse, VPN ou pas. Si le test montre beaucoup de pertes de paquets, c’est la liaison radio : rapprochez-vous du routeur ou d’une fenêtre, ou passez du Wi‑Fi à la 4G et inversement.',
      },
      {
        title: 'Appels et jeux : surveillez la gigue',
        body:
          'Pour les appels vidéo et les jeux en ligne, la latence et la gigue comptent plus que le débit. Une connexion à 200 Mbit/s avec une forte gigue saccadera quand même. Choisissez le serveur le plus proche et WireGuard sur un réseau stable.',
      },
      {
        title: 'Quand couper le VPN est la réponse',
        body:
          'Avec une 4G faible ou sur un réseau domestique de confiance, l’option la plus rapide est parfois sans VPN. C’est de la physique : le chiffrement et le détour par un serveur ont toujours un coût. « Wi‑Fi uniquement » vous protège sur les hotspots sans toucher aux données mobiles.',
      },
    ],
    steps: {
      title: 'Diagnostic de vitesse dans l’ordre',
      items: [
        'Faites un test de vitesse sans VPN comme référence.',
        'Connectez-vous et lancez le Speed Test de FollowNet sur le même réseau.',
        'Passez sur « Emplacement optimal » ou le serveur le plus proche au ping bas.',
        'Comparez WireGuard et Smart Connect sur le même serveur.',
        'En cas de fortes pertes, améliorez le signal ou basculez entre Wi‑Fi et 4G.',
        'Si le réseau est saturé, refaites le test à un moment plus calme.',
      ],
    },
    table: {
      title: 'Ce que disent les chiffres',
      head: ['Résultat', 'Signification', 'Action'],
      rows: [
        ['Déjà lent sans VPN', 'Le réseau est le goulot', 'Changer de réseau ou attendre'],
        ['Latence élevée seulement avec VPN', 'Serveur trop éloigné', 'Choisir un serveur plus proche'],
        ['Débit qui chute fortement avec VPN', 'Protocole bridé', 'Essayer Smart ou un autre protocole'],
        ['Forte gigue ou pertes', 'Liaison radio instable', 'Améliorer le signal, alterner Wi‑Fi/4G'],
      ],
    },
    bullets: [
      'Comparez toujours à une référence sans VPN',
      'La distance au serveur est le facteur principal',
      'Les réseaux bridés favorisent AmneziaWG, Hysteria2 ou VLESS Reality',
      'Pour les appels et les jeux, la gigue compte plus que les Mbit/s',
      'Un peu de surcharge est normal et inévitable',
    ],
    cta: CTA,
    faq: [
      { q: 'De combien un VPN devrait-il ralentir ?', a: 'Avec un serveur proche, souvent de peu. Les serveurs lointains et les réseaux saturés creusent l’écart.' },
      { q: 'Premium est-il plus rapide que Free ?', a: 'Le chiffrement est identique. Premium donne accès à plus d’emplacements, donc potentiellement à un serveur plus proche ou moins chargé.' },
      { q: 'Speed Test consomme-t-il mon quota ?', a: 'Oui, il télécharge et envoie des données. En Free, évitez de le lancer à répétition.' },
      { q: 'Pourquoi le VPN est-il rapide chez moi et lent au café ?', a: 'Le réseau du café est plus lent ou bride le trafic VPN. Essayez Smart Connect et un serveur proche.' },
    ],
  },

  'captive-portal-vpn-iphone': {
    h1: 'Portails captifs et VPN sur iPhone : Wi‑Fi d’hôtel, d’aéroport et de train',
    lead:
      'Un portail captif est la page de connexion que certains Wi‑Fi affichent avant de vous laisser accéder à internet. C’est la raison la plus fréquente pour laquelle un VPN « ne marche pas » sur un Wi‑Fi public. Voici pourquoi, et l’ordre simple qui évite le problème.',
    sections: [
      {
        title: 'Qu’est-ce qu’un portail captif',
        body:
          'Hôtels, aéroports, trains, cafés et lieux de congrès interceptent souvent votre première requête web pour afficher une page : numéro de chambre, acceptation des conditions, publicité à regarder ou e-mail à saisir. Tant que vous ne l’avez pas terminée, le réseau bloque l’accès normal à internet. iOS le détecte généralement et ouvre automatiquement une petite fenêtre de connexion.',
      },
      {
        title: 'Pourquoi il entre en conflit avec le VPN',
        body:
          'Un VPN veut tout envoyer dans un tunnel chiffré vers son serveur. Mais tant que le portail n’est pas terminé, le réseau bloque justement cette connexion. Résultat : le VPN semble ne pas se connecter, ou se connecte sans rien charger. Rien n’est cassé : le réseau ne vous a simplement pas encore laissé passer.',
      },
      {
        title: 'Le bon ordre',
        body:
          'Rejoignez le réseau VPN coupé, terminez le portail dans la fenêtre iOS ou dans Safari, vérifiez qu’un site normal se charge, puis seulement connectez FollowNet. Avec la connexion automatique en Wi‑Fi, le VPN démarrera dès que le réseau sera utilisable.',
        image: 'autoconnect',
        imageCaption: 'La connexion automatique lance le VPN en Wi‑Fi dès que le réseau est utilisable.',
      },
      {
        title: 'Quand le portail n’apparaît pas',
        body:
          'Il arrive qu’iOS n’ouvre pas la fenêtre de connexion. Ouvrez Safari et allez sur une adresse http simple (par exemple neverssl.com) : le réseau vous redirigera vers le portail. Si le VPN tournait déjà, coupez-le d’abord.',
      },
      {
        title: 'Les portails qui vous déconnectent',
        body:
          'Beaucoup de réseaux demandent de se reconnecter au bout de quelques heures ou chaque jour. Si le VPN ne fait soudain plus passer de trafic à l’hôtel, vérifiez si le portail est revenu. Reconnectez-vous, puis relancez le VPN. C’est la politique du réseau, pas une panne du VPN.',
      },
      {
        title: 'Gagner du temps sur les réseaux habituels',
        body:
          'Pour un hôtel ou une compagnie ferroviaire que vous utilisez souvent, enregistrez un profil réseau personnalisé avec le protocole, le DNS et le serveur qui y fonctionnent. Après le portail, appliquez-le d’un geste.',
      },
    ],
    steps: {
      title: 'Routine avec portail captif',
      items: [
        'Vérifiez que FollowNet est déconnecté.',
        'Rejoignez le réseau Wi‑Fi.',
        'Terminez la page de connexion (fenêtre iOS ou Safari).',
        'Ouvrez un site normal pour confirmer l’accès.',
        'Connectez FollowNet ou laissez la connexion automatique le faire.',
        'Si le trafic s’arrête plus tard, vérifiez si le portail demande une nouvelle connexion.',
      ],
    },
    bullets: [
      'Le portail doit être terminé avant de connecter le VPN',
      'Connectez le VPN seulement quand un site normal se charge',
      'neverssl.com aide à faire apparaître un portail caché',
      'Certains réseaux exigent une reconnexion chaque jour',
      'Enregistrez un profil pour les réseaux fréquents',
    ],
    cta: CTA,
    faq: [
      { q: 'Pourquoi la page de connexion n’apparaît-elle pas ?', a: 'Le VPN ou une connexion mémorisée peut la bloquer. Coupez le VPN et ouvrez un site http simple dans Safari.' },
      { q: 'La page du portail elle-même est-elle sûre ?', a: 'Elle passe avant l’activation du VPN : n’y saisissez rien de sensible au-delà de ce que le réseau demande.' },
      { q: 'FollowNet peut-il se connecter seul après le portail ?', a: 'Oui, avec « Wi‑Fi uniquement » ou « Toujours », il démarre dès que le réseau laisse passer le trafic.' },
      { q: 'Hier le VPN marchait dans cet hôtel, pourquoi pas aujourd’hui ?', a: 'La connexion au portail a probablement expiré. Reconnectez-vous puis relancez le VPN.' },
    ],
  },

  'vless-reality-ios': {
    h1: 'VLESS Reality sur iPhone : ce que c’est et quand FollowNet l’utilise',
    lead:
      'VLESS Reality est un transport VPN plus récent, conçu pour ressembler à du trafic web chiffré ordinaire. FollowNet l’intègre aux côtés de WireGuard, IKEv2, AmneziaWG et Hysteria2. Ce guide explique ce qu’il fait de différent, quand il aide et pourquoi ce n’est pas toujours le choix le plus rapide.',
    sections: [
      {
        title: 'Qu’est-ce que VLESS Reality',
        body:
          'VLESS est un protocole de transport léger ; Reality est une technique qui fait ressembler la connexion à une session TLS (HTTPS) normale avec un vrai site. Pour un réseau qui analyse les signatures de trafic, la connexion ressemble davantage à de la navigation ordinaire qu’à un tunnel VPN classique.',
      },
      {
        title: 'Pourquoi il existe',
        body:
          'Certains réseaux reconnaissent et ralentissent les protocoles VPN classiques comme WireGuard ou IKEv2 — parfois même leurs variantes. Un tunnel peut alors afficher « Connecté » tout en laissant passer peu ou pas de trafic. Un transport qui se fond dans le trafic web ordinaire offre une autre voie quand les habituelles se bloquent.',
      },
      {
        title: 'Comment FollowNet l’utilise',
        body:
          'Avec le protocole sur Smart, FollowNet s’appuie sur le contexte réseau et les replis pour décider quand VLESS Reality vaut la peine. Vous pouvez aussi le choisir manuellement dans Réglages → Protocole VPN ou appliquer le profil Restricted, qui garde active toute l’échelle de Smart Connect. FollowNet vérifie que du vrai trafic passe avant de considérer la session comme saine.',
        image: 'protocol',
        imageCaption: 'Réglages → Protocole VPN : Smart peut utiliser VLESS Reality si nécessaire.',
      },
      {
        title: 'Quand ne pas l’utiliser',
        body:
          'Sur un réseau domestique calme, VLESS Reality est rarement le plus rapide : en débit et en latence, WireGuard l’emporte généralement. Utilisez VLESS Reality quand les autres protocoles échouent ou fonctionnent mal, pas comme réglage par défaut partout. Sa disponibilité dépend aussi des serveurs qui le prennent en charge pour votre offre.',
      },
      {
        title: 'Vérifier qu’il aide vraiment',
        body:
          'Après le changement, chargez quelques vraies pages et lancez Speed Test au lieu de vous fier à la seule couleur de l’état. Comparez avec Smart et WireGuard sur le même serveur. Si VLESS Reality est nettement meilleur sur un réseau donné, enregistrez-le dans un profil réseau personnalisé pour ce lieu.',
        image: 'speedtest',
        imageCaption: 'Confirmez avec Speed Test que le trafic passe vraiment.',
      },
    ],
    table: {
      title: 'La place de VLESS Reality',
      head: ['Protocole', 'Point fort', 'Usage idéal'],
      rows: [
        ['WireGuard', 'Vitesse, faible latence', 'Réseaux stables maison et bureau'],
        ['IKEv2', 'Reconnexion en douceur', 'Passages Wi‑Fi / 4G'],
        ['AmneziaWG', 'WireGuard à signature modifiée', 'Réseaux qui ralentissent WireGuard'],
        ['Hysteria2', 'Supporte les pertes de paquets', 'Liaisons instables ou saturées'],
        ['VLESS Reality', 'Ressemble à du HTTPS ordinaire', 'Quand les autres protocoles bloquent'],
      ],
    },
    steps: {
      title: 'Utiliser VLESS Reality',
      items: [
        'Laissez le protocole sur Smart et laissez FollowNet décider, ou',
        'appliquez le profil réseau Restricted sur les réseaux difficiles, ou',
        'choisissez VLESS Reality manuellement dans Réglages → Protocole VPN.',
        'Chargez de vraies pages et lancez Speed Test pour confirmer qu’il aide.',
        'Enregistrez un profil personnalisé pour les réseaux où il marche le mieux.',
      ],
    },
    bullets: [
      'Conçu pour ressembler à du trafic web chiffré ordinaire',
      'Utile quand les protocoles classiques sont ralentis ou bloqués',
      'Smart Connect et le profil Restricted peuvent l’utiliser automatiquement',
      'Pas le plus rapide sur réseau calme : WireGuard l’emporte en général',
      'Vérifiez toujours avec de vraies pages et Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: 'VLESS Reality est-il plus sûr que WireGuard ?', a: 'Les deux chiffrent votre trafic. VLESS Reality diffère par l’apparence de la connexion sur le réseau, pas par une sécurité « supérieure ».' },
      { q: 'Faut-il l’utiliser tout le temps ?', a: 'Non. Utilisez Smart et laissez VLESS Reality intervenir quand les autres protocoles peinent.' },
      { q: 'VLESS Reality est-il disponible en Free ?', a: 'Cela dépend des serveurs et de votre offre, comme indiqué dans l’app.' },
      { q: 'Garantit-il l’accès partout ?', a: 'Aucun protocole ne le peut. Il améliore les chances sur les réseaux difficiles et doit être utilisé dans le respect des lois locales.' },
    ],
  },

  'vpn-free-weekly-limit': {
    h1: 'Trafic hebdomadaire de FollowNet Free : comment fonctionne la limite',
    lead:
      'FollowNet Free est un VPN complet avec une seule limite honnête : un quota de trafic hebdomadaire affiché dans l’app. Voici ce qui compte, quand il se renouvelle, comment le faire durer et ce qui se passe quand vous l’atteignez.',
    sections: [
      {
        title: 'Hebdomadaire, pas quotidien',
        body:
          'Le trafic Free se compte à la semaine, ce qui colle mieux à la vie réelle qu’un plafond quotidien : une journée de voyage peut consommer plus, une journée calme moins. Le quota actuel et votre consommation s’affichent dans l’app. Les chiffres exacts peuvent évoluer avec les paramètres de l’offre : le compteur de l’app fait toujours foi.',
        image: 'stats',
        imageCaption: 'Statistiques : consommation de la semaine et quota hebdomadaire.',
      },
      {
        title: 'Ce qui compte',
        body:
          'Tout le trafic qui passe par le tunnel VPN compte : navigation, vidéo, musique, mises à jour d’apps, sauvegardes cloud et le Speed Test intégré. Le trafic VPN coupé ne compte pas. Les vérifications de connexion de Smart Connect sont minimes mais réelles.',
      },
      {
        title: 'Le faire durer',
        body:
          'La vidéo consomme le plus : téléchargez films et séries sur un réseau de confiance avant de voyager. Utilisez « Wi‑Fi uniquement » pour que le VPN tourne sur les hotspots, là où il compte le plus, mais pas en données mobiles chez vous. Mettez en pause l’envoi de Photos iCloud et les grosses mises à jour pendant que le VPN est actif, et ne lancez Speed Test qu’en cas de besoin.',
        image: 'autoconnect',
        imageCaption: '« Wi‑Fi uniquement » réserve le trafic Free aux hotspots publics.',
      },
      {
        title: 'Ce que comprend Free',
        body:
          'Free n’est pas une démo bridée. Vous avez les mêmes protocoles, Smart Connect, préréglages DNS, profils réseau, connexion automatique, widgets et Speed Test que Premium, plus les emplacements Free. Le compteur hebdomadaire est la principale différence.',
      },
      {
        title: 'Quand vous atteignez la limite',
        body:
          'Les nouvelles connexions sont suspendues jusqu’au renouvellement hebdomadaire, et les widgets indiquent que le quota est épuisé plutôt qu’un « Connecté » trompeur. Vous pouvez attendre le renouvellement ou passer à Premium : trafic illimité, plus d’emplacements et jusqu’à cinq appareils.',
      },
    ],
    table: {
      title: 'Ce qui consomme le plus',
      head: ['Activité', 'Consommation', 'Conseil'],
      rows: [
        ['Streaming vidéo HD', 'Très élevée', 'Télécharger à l’avance'],
        ['Appels vidéo', 'Élevée', 'Audio seul si possible'],
        ['Mises à jour et sauvegardes', 'Élevée, par à-coups', 'Les faire sur un Wi‑Fi de confiance sans VPN'],
        ['Streaming musical', 'Modérée', 'Télécharger les playlists'],
        ['Navigation, mail, messageries', 'Faible', 'Idéal pour Free'],
      ],
    },
    steps: {
      title: 'Suivre son quota',
      items: [
        'Ouvrez Statistiques pour voir le trafic consommé et restant.',
        'Réglez « Wi‑Fi uniquement ».',
        'Téléchargez vidéos et gros fichiers avant de voyager.',
        'Évitez les Speed Test à répétition.',
        'Passez à Premium si vous atteignez souvent la limite.',
      ],
    },
    bullets: [
      'Un quota hebdomadaire, affiché dans l’app',
      'Tout le trafic du tunnel compte, Speed Test compris',
      'Mêmes fonctions que Premium hors compteur et emplacements',
      'La vidéo consomme le plus ; navigation et messageries très peu',
      'Premium supprime la limite et ajoute emplacements et appareils',
    ],
    cta: CTA,
    faq: [
      { q: 'Combien de trafic comprend Free ?', a: 'Le quota hebdomadaire actuel s’affiche dans l’app. Il peut évoluer avec les paramètres de l’offre : consultez Statistiques.' },
      { q: 'Quand le quota se renouvelle-t-il ?', a: 'Chaque semaine. L’app affiche votre consommation de la semaine en cours.' },
      { q: 'Le trafic sans VPN compte-t-il ?', a: 'Non. Seul le trafic passant par le tunnel FollowNet compte.' },
      { q: 'Puis-je ajouter du trafic sans m’abonner ?', a: 'Pour lever la limite, il faut Premium, en mensuel ou en annuel.' },
    ],
  },

  'vpn-premium-unlimited': {
    h1: 'FollowNet Premium : trafic illimité, plus d’emplacements, cinq appareils',
    lead:
      'Premium s’adresse à ceux qui utilisent un VPN chaque jour. Il supprime la limite hebdomadaire de Free, débloque les emplacements Premium, couvre jusqu’à cinq appareils et retire la publicité. Voici précisément ce qui change, ce qui reste identique et comment fonctionne la facturation.',
    sections: [
      {
        title: 'Ce qu’apporte Premium',
        body:
          'Un trafic illimité sans plafond hebdomadaire, l’accès à tous les emplacements Premium, un abonnement pour jusqu’à cinq appareils — iPhone, iPad et extension Chrome — et aucune publicité. Tout ce que vous connaissez déjà de Free reste exactement pareil.',
        image: 'premium',
        imageCaption: 'Premium : trafic illimité, tous les serveurs Premium, Smart Connect et jusqu’à cinq appareils.',
      },
      {
        title: 'Ce qui ne change pas',
        body:
          'Le chiffrement, les protocoles et Smart Connect sont identiques en Free et en Premium. Premium porte sur la capacité et le choix, pas sur « plus de sécurité ». Si l’on vous dit qu’une offre payante utilise un « double chiffrement militaire », c’est du marketing.',
      },
      {
        title: 'Offres et facturation',
        body:
          'Premium se vend sur l’App Store en abonnement mensuel ou annuel ; l’annuel revient moins cher par mois et inclut un court essai gratuit affiché dans la fenêtre de paiement d’Apple. Apple gère le paiement, et vous pouvez gérer ou résilier l’abonnement à tout moment dans les réglages de votre identifiant Apple.',
      },
      {
        title: 'Premium sur plusieurs appareils',
        body:
          'Connectez-vous avec le même e-mail sur l’iPad et dans l’extension Chrome, ou associez un appareil en scannant un QR code depuis Réglages → Autres appareils. Jusqu’à cinq appareils partagent un abonnement. Sur un nouvel iPhone, utilisez « Restaurer les achats » pour réactiver Premium.',
        image: 'settings',
        imageCaption: 'Réglages → Autres appareils : associez un autre téléphone ou Chrome par QR code.',
      },
      {
        title: 'Qui devrait passer à Premium',
        body:
          'Passez à Premium si vous atteignez souvent la limite hebdomadaire, regardez des vidéos en déplacement, télétravaillez sur Wi‑Fi public, avez besoin d’un emplacement Premium précis ou voulez une offre pour les appareils de toute la famille. Si Free suffit pour vos sessions occasionnelles au café, inutile de payer.',
      },
      {
        title: 'Ce que Premium ne peut pas promettre',
        body:
          'Aucun VPN ne peut garantir l’accès à tous les catalogues de streaming ni contourner les lois locales. Premium vous donne plus de capacité et d’emplacements ; le comportement de chaque service dépend de lui.',
      },
    ],
    table: {
      title: 'Free et Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Trafic', 'Quota hebdomadaire', 'Illimité'],
        ['Emplacements', 'Emplacements Free', 'Free + Premium'],
        ['Appareils', 'Dans la limite du quota Free', 'Jusqu’à 5 avec un abonnement'],
        ['Protocoles, Smart Connect, DNS', 'Inclus', 'Inclus'],
        ['Publicité', 'Possible dans certaines régions', 'Aucune'],
        ['Facturation', '—', 'Mensuelle ou annuelle via l’App Store'],
      ],
    },
    steps: {
      title: 'Passer à Premium et changer d’appareil',
      items: [
        'Dans l’app FollowNet pour iOS, ouvrez l’écran Premium.',
        'Choisissez mensuel ou annuel et confirmez avec votre identifiant Apple.',
        'Connectez-vous sur l’iPad ou dans Chrome avec le même e-mail, ou scannez le QR code.',
        'Sur un nouvel iPhone, touchez « Restaurer les achats ».',
        'Gérez ou résiliez à tout moment dans les abonnements de votre identifiant Apple.',
      ],
    },
    bullets: [
      'Trafic illimité et tous les emplacements Premium',
      'Jusqu’à cinq appareils avec un abonnement',
      'Aucune publicité',
      'Même chiffrement et mêmes protocoles que Free',
      'Facturation et résiliation via l’App Store',
    ],
    cta: CTA,
    faq: [
      { q: 'Puis-je essayer Premium avant de payer ?', a: 'L’offre annuelle inclut un court essai gratuit, affiché dans la fenêtre de paiement d’Apple avant confirmation.' },
      { q: 'Comment résilier ?', a: 'Dans Réglages iOS → votre nom → Abonnements. Vous gardez Premium jusqu’à la fin de la période payée.' },
      { q: 'Premium fonctionne-t-il dans l’extension Chrome ?', a: 'Oui, connectez-vous avec le même compte. Chrome compte comme l’un des cinq appareils.' },
      { q: 'Premium rendra-t-il mon VPN plus rapide ?', a: 'Le chiffrement est identique, mais plus d’emplacements peut signifier un serveur plus proche ou moins chargé.' },
    ],
  },

  'vpn-battery-iphone': {
    h1: 'VPN et batterie de l’iPhone — ce qui consomme vraiment et comment économiser',
    lead:
      'Un VPN consomme un peu de batterie, mais généralement bien moins qu’on ne le pense. La vraie dépense vient de la radio, d’un signal faible et des réseaux qui coupent le tunnel en boucle. Ce guide montre comment mesurer l’impact sur votre iPhone et régler FollowNet pour que la protection coûte le moins d’énergie possible.',
    sections: [
      {
        title: 'Où part réellement l’énergie',
        body:
          'Le chiffrement ne coûte presque rien sur les puces récentes de l’iPhone. Ce qui consomme, c’est garder la radio Wi‑Fi ou cellulaire active, rétablir le tunnel après une coupure et réessayer sur des réseaux qui perdent des paquets. Une session WireGuard stable sur un bon Wi‑Fi domestique se voit à peine dans les statistiques de batterie ; le même téléphone sur une LTE faible dans un train se vide plus vite, avec ou sans VPN.',
      },
      {
        title: 'Vérifiez les réglages Batterie avant d’accuser le VPN',
        body:
          'Ouvrez Réglages → Batterie et comparez les dernières 24 heures et les 10 derniers jours. iOS attribue souvent l’usage du VPN au système ou à l’app qui a généré le trafic. Comparez une journée avec VPN et une journée similaire sans, sur les mêmes trajets. Une journée inhabituelle avec mauvaise réception en dit plus sur le réseau que sur le tunnel.',
      },
      {
        title: 'Connexion automatique : protéger les hotspots, pas chaque minute',
        body:
          'Si vous avez surtout besoin de protection dans les cafés, hôtels et aéroports, réglez la Connexion automatique sur « Wi‑Fi uniquement ». Le VPN s’active sur les réseaux non fiables et reste coupé en données mobiles, où la radio est déjà la principale consommatrice. Gardez « Toujours » pour les cas où vous avez vraiment besoin du tunnel partout.',
        image: 'autoconnect',
        imageCaption: 'Connexion automatique dans FollowNet : « Wi‑Fi uniquement » ou « Toujours ».',
      },
      {
        title: 'Choisir le protocole selon le réseau',
        body:
          'Sur un réseau calme, WireGuard est le choix le plus léger : poignées de main courtes, faible surcharge et reprise rapide après la veille. Sur les réseaux qui perturbent le trafic VPN, un tunnel qui se reconnecte sans cesse dépense bien plus d’énergie qu’un protocole un peu plus lourd qui tient. Smart Connect choisit une option qui fonctionne sur le réseau actuel pour que le téléphone ne brûle pas sa batterie en tentatives sans fin.',
        image: 'protocol',
        imageCaption: 'Réglages du protocole : Smart, WireGuard, IKEv2, AmneziaWG et d’autres.',
      },
      {
        title: 'La distance et le signal comptent plus que le chiffrement',
        body:
          'Avec un serveur lointain, le même téléchargement dure plus longtemps et la radio reste active plus longtemps. Utilisez « Emplacement optimal » ou le serveur le plus proche avec un ping faible. Avec un signal cellulaire faible, chaque paquet coûte plus d’énergie ; sur un réseau de confiance mal capté, couper le VPN est un compromis raisonnable.',
      },
      {
        title: 'Mode économie d’énergie et arrière-plan',
        body:
          'Le mode économie d’énergie limite l’activité en arrière-plan, mais iOS maintient un tunnel VPN actif. Pour tenir sur les derniers 10–20 %, déconnectez-vous sur les réseaux de confiance et reconnectez-vous sur le Wi‑Fi public. FollowNet ne maintient pas de tâches d’arrière-plan superflues pour gonfler des statistiques.',
      },
    ],
    steps: {
      title: 'Réglage économe en cinq minutes',
      items: [
        'Consultez Réglages → Batterie pour connaître votre point de départ réel.',
        'Réglez la Connexion automatique sur « Wi‑Fi uniquement » si vous protégez surtout des hotspots.',
        'Laissez le protocole sur Smart ou fixez WireGuard sur le Wi‑Fi de la maison.',
        'Utilisez « Emplacement optimal » ou le serveur le plus proche à ping faible.',
        'Avec un signal faible sur un réseau de confiance, déconnectez-vous plutôt que de lutter contre la radio.',
      ],
    },
    table: {
      title: 'Scénarios courants et coût en batterie',
      head: ['Scénario', 'Impact batterie', 'Que faire'],
      rows: [
        ['Wi‑Fi maison, WireGuard, serveur proche', 'Minimal', 'Ne rien changer'],
        ['Wi‑Fi de café avec « Wi‑Fi uniquement »', 'Faible', 'Réglage recommandé'],
        ['« Toujours » sur LTE faible', 'Sensible', '« Wi‑Fi uniquement » ou couper sur réseau de confiance'],
        ['Réseau qui coupe le tunnel en boucle', 'Élevé', 'Smart Connect ou autre protocole'],
      ],
    },
    bullets: [
      'Le chiffrement est bon marché ; la radio et le signal faible coûtent cher',
      '« Wi‑Fi uniquement » protège les hotspots sans toucher aux données mobiles',
      'WireGuard est le protocole le plus léger sur réseau stable',
      'Les boucles de reconnexion coûtent plus que tout choix de protocole',
      'Comparez la batterie sur plusieurs journées similaires',
    ],
    cta: CTA,
    faq: [
      { q: 'Un VPN vide-t-il la batterie de l’iPhone ?', a: 'Un peu. Sur un Wi‑Fi stable avec un serveur proche, l’écart est généralement faible ; un signal faible et des reconnexions constantes l’augmentent.' },
      { q: 'Quel protocole consomme le moins ?', a: 'Sur réseau stable, WireGuard. Sur les réseaux qui gênent les VPN, le plus économe est celui qui reste connecté — c’est ce que cherche Smart Connect.' },
      { q: 'Faut-il laisser le VPN toujours activé ?', a: 'Seulement si vous en avez besoin partout. Pour les cafés et hôtels, « Wi‑Fi uniquement » est un bon équilibre.' },
      { q: 'Le VPN fonctionne-t-il en mode économie d’énergie ?', a: 'Oui. iOS maintient le tunnel ; le mode économie d’énergie ne limite que les autres activités en arrière-plan.' },
    ],
  },

  'vpn-iphone-shortcuts': {
    h1: 'VPN dans les Raccourcis Apple — connecter FollowNet d’un geste, avec Siri ou une automatisation',
    lead:
      'FollowNet fonctionne avec l’app Raccourcis : vous pouvez vous connecter, vous déconnecter ou appliquer un profil réseau sans ouvrir l’app. Ce guide propose des raccourcis pratiques pour le travail, les voyages et le soir, et explique comment ils s’articulent avec la Connexion automatique.',
    sections: [
      {
        title: 'Ce que FollowNet sait faire dans Raccourcis',
        body:
          'L’app ajoute trois actions : Connecter, Déconnecter et Appliquer un profil. Appliquer un profil bascule vers un préréglage — Smart, Public Wi‑Fi, Travel, Restricted — ou vers un profil que vous avez créé. Les actions se lancent depuis l’app Raccourcis, une icône sur l’écran d’accueil, Siri, le bouton Action des iPhone récents ou une automatisation personnelle.',
      },
      {
        title: 'Raccourcis ou Connexion automatique ?',
        body:
          'La Connexion automatique suit des règles réseau, par exemple s’activer sur un Wi‑Fi non fiable. Les raccourcis sont des actions volontaires ou des automatisations selon l’heure, le lieu ou un mode de concentration. Les deux se complètent : la Connexion automatique couvre seule les hotspots, un raccourci gère ce que les règles ne devinent pas, comme le début de la journée de travail ou l’arrivée à l’aéroport.',
        image: 'autoconnect',
        imageCaption: 'La Connexion automatique gère les réseaux ; les Raccourcis, tout le reste.',
      },
      {
        title: 'Recette : concentration « Travail »',
        body:
          'Créez une automatisation personnelle : quand la concentration « Travail » s’active, Appliquer un profil → votre profil de travail, puis Connecter. Quand elle se termine, Déconnecter. Le tunnel suit votre agenda sans le moindre geste.',
      },
      {
        title: 'Recette : arrivée à l’aéroport ou à l’hôtel',
        body:
          'Utilisez une automatisation de lieu pour le terminal ou l’adresse de l’hôtel : Appliquer un profil → Travel, puis Connecter. Le profil Travel est pensé pour les réseaux publics instables et les portails de connexion, inutile de penser aux réglages la valise à la main.',
      },
      {
        title: 'Recette : bouton Action et Siri',
        body:
          'Placez un raccourci « Connecter FollowNet » sur le bouton Action ou demandez à Siri de l’exécuter par son nom. C’est le moyen le plus rapide d’activer le VPN avant d’ouvrir une app sensible sur un Wi‑Fi public.',
      },
      {
        title: 'Autorisations et limites',
        body:
          'À la première exécution, iOS peut demander une autorisation — validez-la une fois. Les raccourcis ne peuvent pas contourner une configuration VPN supprimée ou refusée dans Réglages. En Free, si le trafic hebdomadaire est épuisé, Connecter ne lancera pas le tunnel avant la remise à zéro de la semaine ou le passage à Premium.',
      },
    ],
    steps: {
      title: 'Créer votre premier raccourci VPN',
      items: [
        'Ouvrez l’app Raccourcis et touchez +.',
        'Cherchez FollowNet et ajoutez Appliquer un profil, puis Connecter.',
        'Nommez le raccourci, par exemple « Wi‑Fi sûr ».',
        'Lancez-le une fois et validez l’autorisation.',
        'En option, ajoutez-le à l’écran d’accueil, au bouton Action ou à une automatisation.',
      ],
    },
    table: {
      title: 'Idées prêtes à l’emploi',
      head: ['Déclencheur', 'Actions', 'Pourquoi'],
      rows: [
        ['Concentration « Travail » activée', 'Appliquer un profil → Connecter', 'Le tunnel suit votre agenda'],
        ['Arrivée à l’aéroport', 'Appliquer Travel → Connecter', 'Prêt pour le Wi‑Fi public'],
        ['Bouton Action', 'Connecter', 'Une pression avant une app sensible'],
        ['Concentration « Sommeil »', 'Déconnecter', 'Pas de tunnel quand il est inutile'],
      ],
    },
    bullets: [
      'Trois actions : Connecter, Déconnecter et Appliquer un profil',
      'Fonctionne avec Siri, le bouton Action et les automatisations',
      'Complète la Connexion automatique sans la remplacer',
      'Profils : Smart, Public Wi‑Fi, Travel, Restricted et les vôtres',
      'La limite hebdomadaire de Free s’applique toujours',
    ],
    cta: CTA,
    faq: [
      { q: 'Puis-je activer le VPN avec Siri ?', a: 'Oui. Créez un raccourci avec l’action Connecter de FollowNet et lancez-le par son nom avec Siri.' },
      { q: 'Faut-il ouvrir l’app pour que ça marche ?', a: 'Non. Les actions s’exécutent en arrière-plan ; il suffit que l’app soit installée et la configuration VPN autorisée.' },
      { q: 'Un raccourci peut-il choisir le serveur ?', a: 'Les raccourcis appliquent des profils et connectent. Choisissez le serveur ou « Emplacement optimal » dans l’app ; le raccourci utilise ce choix.' },
      { q: 'Les automatisations s’exécutent-elles sans confirmation ?', a: 'Pour la plupart des déclencheurs, iOS permet de désactiver « Demander avant d’exécuter ». Certains déclencheurs de lieu peuvent tout de même afficher une notification.' },
    ],
  },

  'vpn-for-students': {
    h1: 'VPN pour étudiants sur iPhone — Wi‑Fi du campus, résidences et petit budget',
    lead:
      'Les étudiants passent la majeure partie de la journée sur des réseaux partagés : Wi‑Fi du campus, résidences, bibliothèques et cafés. Un VPN chiffre ce trafic jusqu’au serveur. Ce guide explique quand cela vaut la peine, comment démarrer avec Free et comment respecter les règles de votre établissement.',
    sections: [
      {
        title: 'Pourquoi les réseaux partagés sont le principal risque',
        body:
          'Les réseaux du campus et des résidences relient des centaines d’appareils inconnus. La plupart du trafic passe déjà en HTTPS, mais un VPN ajoute une couche : le réseau local ne voit qu’une connexion chiffrée vers le serveur VPN, pas les services que vous utilisez. C’est surtout important sur les hotspots ouverts de bibliothèques et de cafés sans mot de passe.',
      },
      {
        title: 'Commencer avec Free',
        body:
          'FollowNet Free comprend un quota de trafic hebdomadaire — suffisant pour la messagerie, les e-mails, la banque et la navigation occasionnelle sur Wi‑Fi public. Le compteur de l’app indique ce qu’il reste et quand la semaine est remise à zéro. Pour les cours en vidéo, les gros téléchargements et le streaming, utilisez des réseaux de confiance ou envisagez Premium.',
        image: 'stats',
        imageCaption: 'L’app affiche le trafic hebdomadaire et la date de remise à zéro.',
      },
      {
        title: 'Quand le Wi‑Fi du campus gêne le VPN',
        body:
          'Certains réseaux d’établissement filtrent les protocoles VPN. Laissez le protocole sur Smart : Smart Connect essaie plusieurs protocoles et garde celui qui fait réellement passer le trafic. Si le réseau bloque quand même le tunnel, respectez-le — c’est la politique du propriétaire du réseau, et les données mobiles restent une option.',
        image: 'protocol',
        imageCaption: 'Smart Connect choisit un protocole qui fonctionne sur le réseau actuel.',
      },
      {
        title: 'Partager Premium avec discernement',
        body:
          'Un compte Premium fonctionne sur cinq appareils au maximum, dont iPhone, iPad et l’extension Chrome. Des colocataires partagent parfois un abonnement, mais les appareils d’un même compte l’utilisent en commun — partagez uniquement avec des personnes de confiance et retirez les appareils que vous n’utilisez plus.',
        image: 'premium',
        imageCaption: 'Premium : plus d’emplacements et jusqu’à cinq appareils par compte.',
      },
      {
        title: 'Les règles s’appliquent toujours',
        body:
          'Un VPN ne change rien à la charte d’utilisation de votre établissement. Ne l’utilisez pas pour accéder à des systèmes auxquels vous n’avez pas droit, et jamais pendant un examen où c’est interdit. Un VPN protège votre connexion ; ce n’est pas un outil pour contourner les règles académiques.',
      },
      {
        title: 'Avant de rentrer chez vous ou de partir en échange',
        body:
          'Installez et testez FollowNet avant le départ. À l’étranger, le Wi‑Fi des hôtels et auberges est l’endroit typique où le profil Travel et « Wi‑Fi uniquement » rendent service. Vérifiez que vous savez changer de protocole si un réseau se comporte bizarrement.',
      },
    ],
    steps: {
      title: 'Configuration étudiante',
      items: [
        'Installez FollowNet et connectez-vous avec le code reçu par e-mail.',
        'Activez la Connexion automatique « Wi‑Fi uniquement » pour le campus et les cafés.',
        'Laissez le protocole sur Smart.',
        'Surveillez le compteur hebdomadaire si vous êtes en Free.',
        'Lisez une fois la charte réseau de votre établissement.',
      ],
    },
    table: {
      title: 'Où un VPN aide sur le campus',
      head: ['Lieu', 'Risque', 'Recommandation'],
      rows: [
        ['Wi‑Fi ouvert de bibliothèque ou de café', 'Élevé', 'Toujours se connecter'],
        ['Réseau de la résidence', 'Moyen', '« Wi‑Fi uniquement »'],
        ['Wi‑Fi du campus avec identifiant', 'Moyen', 'Se connecter après l’identification'],
        ['Données mobiles', 'Faible', 'Facultatif'],
      ],
    },
    bullets: [
      'Les réseaux partagés sont la principale raison d’utiliser un VPN sur le campus',
      'Le trafic hebdomadaire de Free couvre messagerie et navigation',
      'Smart Connect s’adapte aux réseaux qui gênent les VPN',
      'Premium couvre jusqu’à cinq appareils par compte',
      'Les règles réseau de l’établissement s’appliquent toujours',
    ],
    cta: CTA,
    faq: [
      { q: 'Free suffit-il pour un étudiant ?', a: 'Pour la messagerie, les e-mails et la navigation sur Wi‑Fi public, généralement oui. La vidéo et les gros téléchargements épuisent vite le quota hebdomadaire.' },
      { q: 'Peut-on utiliser un VPN sur le campus ?', a: 'Utiliser un VPN est en général légal, mais le propriétaire du réseau fixe ses règles. Respectez la politique de votre établissement.' },
      { q: 'Puis-je partager Premium avec mes colocataires ?', a: 'Un compte fonctionne sur cinq appareils au maximum. Partagez uniquement avec des personnes de confiance : c’est le même compte.' },
      { q: 'Pourquoi le VPN ne se connecte-t-il pas sur le Wi‑Fi du campus ?', a: 'Certains réseaux filtrent les protocoles VPN. Essayez Smart Connect ; si c’est toujours bloqué, c’est la politique du réseau.' },
    ],
  },

  'vpn-for-banking-apps': {
    h1: 'VPN pour les apps bancaires sur iPhone — un Wi‑Fi public plus sûr, pas un substitut à la sécurité de la banque',
    lead:
      'Ouvrir l’app de sa banque sur le Wi‑Fi d’un café ou d’un hôtel est précisément la situation où un VPN aide : il chiffre le trajet entre votre iPhone et le serveur VPN. Mais il ne remplace ni Face ID, ni les codes à usage unique, ni l’antifraude de la banque. Voici comment les utiliser ensemble sans déclencher de vérifications supplémentaires.',
    sections: [
      {
        title: 'Ce qu’un VPN apporte pour la banque',
        body:
          'Les apps bancaires utilisent déjà HTTPS et la vérification des certificats. Un VPN ajoute une protection au niveau du réseau : sur un Wi‑Fi public, le propriétaire du hotspot et les autres utilisateurs ne voient qu’un tunnel chiffré, pas la banque ou le service que vous contactez. Il réduit aussi le risque de faux hotspots qui imitent le nom du réseau d’un café.',
      },
      {
        title: 'Ce qu’un VPN ne peut pas faire',
        body:
          'Un VPN ne protège pas contre les liens d’hameçonnage, les faux appels « de la banque » ni les personnes qui connaissent votre code à usage unique. Ne communiquez jamais vos codes et n’installez pas d’app à la demande d’un interlocuteur. Les protections de votre banque et votre vigilance restent la principale défense.',
      },
      {
        title: 'Pourquoi la banque peut demander une vérification',
        body:
          'Les banques surveillent les connexions inhabituelles. Une connexion depuis un pays ou un centre de données inconnu peut déclencher un code SMS ou un blocage temporaire. Choisissez un serveur dans votre propre pays ou l’emplacement le plus proche : cela ressemble à un usage normal et garde une latence faible.',
        image: 'servers',
        imageCaption: 'Un serveur proche rend la connexion bancaire familière.',
      },
      {
        title: 'Si l’app bancaire refuse le VPN',
        body:
          'Certaines banques restreignent les connexions VPN dans leurs apps. Suivez alors la politique de la banque : déconnectez FollowNet, passez du Wi‑Fi public aux données mobiles et terminez l’opération. Nous n’aidons pas à contourner les contrôles de sécurité des banques.',
      },
      {
        title: 'Une routine sûre sur Wi‑Fi public',
        body:
          'Activez la Connexion automatique « Wi‑Fi uniquement » pour que le tunnel soit déjà actif quand vous rejoignez un hotspot. Attendez « Connecté », ouvrez l’app bancaire et déverrouillez-la avec Face ID. Évitez de valider de gros paiements sur des réseaux inconnus si les données mobiles sont disponibles.',
        image: 'connect',
        imageCaption: 'Attendez « Connecté » avant d’ouvrir l’app de la banque.',
      },
    ],
    steps: {
      title: 'La banque sur Wi‑Fi public, étape par étape',
      items: [
        'Activez dans FollowNet la Connexion automatique « Wi‑Fi uniquement ».',
        'Choisissez « Emplacement optimal » ou un serveur dans votre pays.',
        'Rejoignez le Wi‑Fi et attendez « Connecté ».',
        'Ouvrez l’app bancaire et déverrouillez-la avec Face ID.',
        'Si la banque bloque le VPN, déconnectez-le et utilisez les données mobiles.',
      ],
    },
    table: {
      title: 'Qui protège contre quoi',
      head: ['Menace', 'VPN', 'Banque / vous'],
      rows: [
        ['Espionnage sur Wi‑Fi public', 'Chiffre le tunnel', '—'],
        ['Faux hotspot', 'Réduit le risque', 'Vérifier le nom du réseau'],
        ['Lien ou appel d’hameçonnage', 'Non', 'Ne jamais communiquer de code'],
        ['Mot de passe volé', 'Non', 'Face ID, 2FA, alertes de la banque'],
      ],
    },
    bullets: [
      'Un VPN protège le trajet réseau sur Wi‑Fi public',
      'Un serveur dans votre pays évite des vérifications supplémentaires',
      'Face ID et les codes à usage unique restent indispensables',
      'Si la banque restreint les VPN, suivez sa politique',
      'Préférez les données mobiles pour les gros paiements sur réseau inconnu',
    ],
    cta: CTA,
    faq: [
      { q: 'Est-il sûr d’utiliser sa banque avec un VPN ?', a: 'Oui, un VPN fiable ajoute une protection sur les réseaux publics. Choisissez un serveur dans votre pays pour éviter des vérifications supplémentaires.' },
      { q: 'Pourquoi ma banque a-t-elle bloqué la connexion ?', a: 'Un emplacement inhabituel peut sembler suspect. Utilisez un serveur proche ou déconnectez le VPN et connectez-vous en données mobiles.' },
      { q: 'Un VPN protège-t-il contre l’hameçonnage ?', a: 'Non. L’hameçonnage trompe la personne, pas le réseau. Ne communiquez jamais de code à usage unique.' },
      { q: 'Ai-je besoin d’un VPN pour la banque à la maison ?', a: 'Sur votre propre Wi‑Fi sécurisé, c’est facultatif. Il est surtout utile sur les réseaux publics et partagés.' },
    ],
  },

  'vpn-split-tunneling-ios': {
    h1: 'Split tunneling sur iPhone — ce qu’iOS permet et quoi utiliser à la place',
    lead:
      'Le split tunneling consiste à faire passer une partie seulement du trafic par le VPN, le reste allant en direct. Sous Windows et Android, beaucoup d’apps permettent d’exclure certaines applications. Sur iPhone, les apps VPN grand public fonctionnent autrement. Ce guide explique honnêtement les limites d’Apple et quels outils FollowNet répondent aux mêmes besoins.',
    sections: [
      {
        title: 'Comment fonctionne un VPN sur iOS',
        body:
          'Sur iPhone, un VPN grand public crée un tunnel système : tant qu’il est connecté, les apps y envoient en général leur trafic. Le VPN par app existe sous iOS, mais il est conçu pour les appareils d’entreprise gérés par MDM, pas pour les apps de l’App Store sur des téléphones personnels. C’est pourquoi les apps VPN honnêtes pour iOS ne proposent pas de liste « exclure cette app ».',
      },
      {
        title: 'Pourquoi nous ne promettons pas de split tunneling par app',
        body:
          'Certaines apps annoncent du split tunneling sur iPhone, mais en pratique il est limité aux appareils gérés ou ne concerne que certaines plages d’adresses. Nous préférons décrire ce qui se passe réellement plutôt qu’afficher un interrupteur qui ne fait pas ce qu’il annonce.',
      },
      {
        title: 'Des profils réseau plutôt que des exclusions',
        body:
          'La plupart des besoins de split tunneling reviennent à « VPN à certains endroits, pas à d’autres ». Les profils réseau et la Connexion automatique y répondent : « Wi‑Fi uniquement » protège les hotspots publics tandis que les données mobiles passent en direct, et des préréglages comme Public Wi‑Fi et Travel adaptent le comportement à chaque situation.',
        image: 'autoconnect',
        imageCaption: '« Wi‑Fi uniquement » : VPN sur les hotspots, direct en données mobiles.',
      },
      {
        title: 'Les réglages DNS pour un contrôle plus fin',
        body:
          'Parfois, le but n’est pas de router autrement mais de changer la résolution des noms — par exemple pour bloquer publicités ou traqueurs. Les préréglages DNS de FollowNet, comme AdGuard pour le filtrage, le font dans le tunnel sans app supplémentaire.',
        image: 'dns',
        imageCaption: 'Les préréglages DNS modifient la résolution des noms dans le tunnel.',
      },
      {
        title: 'Sur ordinateur : seulement le navigateur',
        body:
          'Si vous n’avez besoin de protéger que la navigation sur un Mac ou un PC, l’extension FollowNet pour Chrome fait passer le trafic du navigateur tandis que les autres apps de l’ordinateur restent en direct. C’est l’équivalent pratique le plus proche du split tunneling, avec le même compte.',
      },
      {
        title: 'Quand une app ne fonctionne pas via le VPN',
        body:
          'Si une app précise — une banque, un service local, une box domotique sur votre réseau — refuse de fonctionner pendant la connexion, le plus simple est de vous déconnecter le temps de la tâche ou de choisir un serveur dans votre pays. Les Raccourcis rendent cela rapide : un geste pour déconnecter, un autre pour reconnecter.',
      },
    ],
    steps: {
      title: 'Obtenir l’effet d’un split tunneling sur iPhone',
      items: [
        'Déterminez où le VPN est vraiment nécessaire : hotspots, voyages ou partout.',
        'Réglez la Connexion automatique sur « Wi‑Fi uniquement » si les données mobiles peuvent passer en direct.',
        'Choisissez un profil réseau adapté à la situation.',
        'Pour les apps qui n’aiment pas les emplacements étrangers, utilisez un serveur dans votre pays.',
        'Ajoutez des raccourcis Connecter / Déconnecter pour les exceptions rapides.',
      ],
    },
    table: {
      title: 'Besoin et bon outil',
      head: ['Besoin', 'Split tunneling par app', 'Outil FollowNet'],
      rows: [
        ['VPN seulement sur Wi‑Fi public', 'Inutile', '« Wi‑Fi uniquement »'],
        ['Protéger seulement le navigateur sur ordinateur', 'Inutile', 'Extension Chrome'],
        ['Une app refuse un emplacement étranger', 'Pas sous iOS', 'Serveur dans votre pays'],
        ['Exception rapide pour une tâche', 'Pas sous iOS', 'Raccourci Déconnecter'],
      ],
    },
    bullets: [
      'Les VPN grand public sous iOS fonctionnent comme un tunnel système',
      'Le VPN par app sur iPhone est réservé aux appareils gérés par MDM',
      '« Wi‑Fi uniquement » couvre la plupart des besoins de split tunneling',
      'L’extension Chrome ne fait passer que le navigateur sur ordinateur',
      'Les Raccourcis facilitent les exceptions rapides',
    ],
    cta: CTA,
    faq: [
      { q: 'FollowNet prend-il en charge le split tunneling sur iPhone ?', a: 'Pas par app — iOS le réserve aux appareils gérés. Les règles de Connexion automatique, les profils et les raccourcis couvrent la plupart des mêmes besoins.' },
      { q: 'Puis-je exclure l’app de ma banque du VPN ?', a: 'Pas individuellement. Utilisez un serveur dans votre pays ou déconnectez-vous brièvement avec un raccourci.' },
      { q: 'Existe-t-il du split tunneling sur ordinateur ?', a: 'L’extension Chrome ne fait passer que le navigateur ; les autres apps restent en direct.' },
      { q: 'Pourquoi certains VPN iPhone annoncent-ils du split tunneling ?', a: 'Il est généralement limité à des plages d’IP ou à des appareils gérés. Vérifiez ce qui est exactement exclu avant de vous y fier.' },
    ],
  },
};
