import type { DeepGuides } from './seo-landing.deep';

const CTA = 'Descargar en App Store';

export const DEEP: DeepGuides = {
  'what-is-a-vpn': {
    h1: '¿Qué es una VPN? Explicación sencilla para usuarios de iPhone',
    lead:
      'Una VPN (red privada virtual) cifra la conexión entre tu dispositivo y un servidor VPN, de modo que la Wi‑Fi a la que estás conectado y tu proveedor de internet ven mucho menos de lo que haces. Aquí verás cómo funciona, qué protege, qué no, y cómo lo hace FollowNet en el iPhone.',
    sections: [
      {
        title: 'La respuesta corta',
        body:
          'Normalmente cada app de tu iPhone se conecta a internet directamente a través de la red en la que estás: el hotspot de una cafetería, el router de un hotel, tu operador móvil. Quien gestiona esa red ve a qué servidores te conectas y, si el tráfico no está cifrado, lo que envías. Una VPN mete todo ese tráfico en un túnel cifrado hasta un servidor que tú eliges. La red local solo ve datos cifrados hacia un servidor; las webs ven la IP del servidor VPN en lugar de la tuya.',
      },
      {
        title: 'Qué protege realmente una VPN',
        body:
          'Una VPN protege el tramo entre tu dispositivo y el servidor VPN. Eso importa sobre todo en redes que no controlas: Wi‑Fi pública en cafeterías, aeropuertos y hoteles, redes de invitados en oficinas y SIM de viaje. El dueño de la red no ve qué webs y apps usas, se evita el fisgoneo en hotspots compartidos y le cuesta más a la red ralentizar o bloquear servicios concretos inspeccionando tu tráfico.',
      },
      {
        title: 'Lo que una VPN no hace',
        body:
          'Una VPN no es un antivirus ni te hace anónimo. Si inicias sesión en Google, Instagram o tu banco, esos servicios siguen sabiendo que eres tú. No detiene enlaces de phishing, páginas de inicio de sesión falsas ni el malware que instales tú mismo. Las cookies, las cuentas y los datos de pago pueden seguir identificándote. Desconfía de las VPN que prometen «anonimato total» o «invisibilidad de grado militar»: es marketing, no funciones.',
      },
      {
        title: 'Cómo funciona una VPN en el iPhone',
        body:
          'iOS incluye un sistema para apps VPN llamado Network Extension. Cuando instalas una VPN desde App Store y tocas Conectar, iOS pide una vez permiso para añadir una configuración VPN. Después, la app crea el túnel e iOS envía por él el tráfico del dispositivo: Safari, mensajería, correo, cualquier app. Mientras esté activa verás el icono VPN en la barra de estado. FollowNet se basa en este sistema y no en un perfil de configuración descargado.',
        image: 'connect',
        imageCaption: 'FollowNet conectado: el temporizador corre y el protocolo activo aparece bajo el estado.',
      },
      {
        title: 'Protocolos: el «idioma» del túnel',
        body:
          'Un protocolo VPN define cómo se construye el túnel cifrado. WireGuard es moderno y rápido; IKEv2 se reconecta con suavidad al pasar de Wi‑Fi a LTE; AmneziaWG, Hysteria2 y VLESS Reality ayudan en redes que ralentizan o bloquean el tráfico VPN normal. No necesitas aprenderlos el primer día: Smart Connect de FollowNet elige un protocolo para tu red y cambia a otro si falla.',
        image: 'protocol',
        imageCaption: 'Ajustes → Protocolo VPN: déjalo en Smart o elige tú el protocolo.',
      },
      {
        title: '¿La necesitas?',
        body:
          'Si usas a menudo Wi‑Fi pública o de invitados, viajas, trabajas desde cafeterías o estás en una red con filtros, una VPN es una herramienta sensata para el día a día. En casa, en tu propia red, el beneficio es sobre todo privacidad frente a tu proveedor. La mejor forma de decidir es probarla en las redes que usas de verdad: FollowNet Free incluye tráfico semanal sin tarjeta.',
      },
    ],
    steps: {
      title: 'Prueba una VPN en el iPhone en cinco pasos',
      items: [
        'Instala FollowNet desde App Store.',
        'Inicia sesión con el código que llega a tu correo, sin crear contraseña.',
        'Toca Conectar y permite la configuración VPN cuando iOS lo pida (solo la primera vez).',
        'Deja el protocolo en Smart y comprueba el icono VPN en la barra de estado.',
        'Abre algunas webs y apps y luego ejecuta Speed Test para ver tu velocidad real.',
      ],
    },
    table: {
      title: 'Sin VPN y con VPN',
      head: ['', 'Sin VPN', 'Con VPN'],
      rows: [
        ['Qué ve el dueño de la Wi‑Fi', 'A qué servidores y webs te conectas', 'Tráfico cifrado hacia un servidor VPN'],
        ['Qué ven las webs', 'Tu IP real', 'La IP del servidor VPN'],
        ['Protección en Wi‑Fi pública', 'Depende del HTTPS de cada web', 'Todo el tramo hasta el servidor VPN cifrado'],
        ['Inicios de sesión, cookies, cuentas', 'Te identifican', 'Te siguen identificando'],
        ['Phishing y malware', 'No bloqueados', 'La VPN por sí sola no los bloquea'],
      ],
    },
    bullets: [
      'Una VPN cifra el tramo entre tu dispositivo y el servidor VPN',
      'Más útil en Wi‑Fi pública, de viaje y en redes con filtros',
      'No es antivirus ni anonimato: las cuentas te siguen identificando',
      'En el iPhone, las VPN de App Store usan Network Extension de Apple',
      'FollowNet Free permite probarla con tráfico semanal, sin tarjeta',
    ],
    cta: CTA,
    faq: [
      { q: '¿Es legal usar una VPN?', a: 'En la mayoría de países sí, pero las normas varían. Tú eres responsable de cumplir las leyes locales y las condiciones de los servicios que uses.' },
      { q: '¿Una VPN ralentiza el iPhone?', a: 'El cifrado y el desvío hasta el servidor añaden algo de latencia. Un servidor cercano y un protocolo moderno como WireGuard suelen mantener la diferencia pequeña; Speed Test muestra las cifras reales.' },
      { q: '¿Una VPN gasta mucha batería?', a: 'Un poco. Mantener un túnel abierto consume energía, sobre todo con mala cobertura móvil. Los protocolos modernos son eficientes y en el uso diario casi no se nota.' },
      { q: '¿Es segura una VPN gratis?', a: 'Depende del proveedor. Lee la política de privacidad y averigua cómo se financia el plan gratuito. FollowNet Free es una VPN real con límite semanal y Política de privacidad publicada.' },
    ],
  },

  'how-vpn-works': {
    h1: 'Cómo funciona una VPN en el iPhone: túnel, protocolos, servidores y DNS',
    lead:
      'Una VPN parece un simple interruptor, pero detrás trabajan cuatro piezas: un túnel cifrado, el protocolo que lo construye, el servidor por el que sale tu tráfico y el resolvedor DNS que traduce nombres en direcciones. Las repasamos una a una con FollowNet en el iPhone como ejemplo.',
    sections: [
      {
        title: '1. El túnel',
        body:
          'Cuando tocas Conectar, FollowNet pide a iOS que inicie una Network Extension. Esta abre una conexión cifrada con un servidor VPN e iOS envía por ella el tráfico del dispositivo. Cada paquete se cifra en el iPhone, viaja al servidor, allí se descifra y sigue hasta su destino. Las respuestas vuelven por el mismo camino. Para la red de la cafetería o del hotel, todo parece un único flujo cifrado hacia una dirección.',
      },
      {
        title: '2. El protocolo',
        body:
          'El protocolo decide cómo se negocia el túnel y cómo se empaquetan los datos. WireGuard es ligero y rápido en redes tranquilas. IKEv2 retoma bien el túnel al pasar de Wi‑Fi a LTE. AmneziaWG mantiene el núcleo de WireGuard pero cambia cómo se ve el tráfico; Hysteria2 funciona sobre QUIC y aguanta pérdidas de paquetes; VLESS Reality disfraza la conexión de HTTPS normal. Smart Connect elige por ti.',
        image: 'protocol',
        imageCaption: 'Protocolos de FollowNet. Smart elige uno y cambia automáticamente si hace falta.',
      },
      {
        title: '3. El servidor (punto de salida)',
        body:
          'En el servidor tu tráfico sale del túnel hacia internet. Las webs ven la IP de ese servidor y su ubicación aproximada. Un servidor más cercano suele implicar menos latencia; otro país cambia qué versión regional de algunos servicios ves. En FollowNet la lista de servidores muestra el ping de cada ubicación y «Ubicación óptima» elige una rápida automáticamente.',
        image: 'servers',
        imageCaption: 'La lista de servidores con ping, ubicaciones Free y Premium y favoritos.',
      },
      {
        title: '4. DNS',
        body:
          'Antes de abrir una web, el iPhone tiene que traducir el nombre (example.com) a una dirección IP. Eso es DNS. Mientras FollowNet está conectado, eliges quién responde: el resolvedor predeterminado o ajustes como Cloudflare, Google, Quad9 o AdGuard (que además bloquea dominios de anuncios y rastreadores). El DNS es independiente del cifrado: decide quién traduce los nombres, no si el túnel está cifrado.',
        image: 'dns',
        imageCaption: 'Ajustes → DNS: elige un resolvedor para privacidad, velocidad o filtrado.',
      },
      {
        title: 'Cómo encaja todo: Smart Connect y perfiles',
        body:
          'Smart Connect se ocupa del protocolo: empieza por la opción con más probabilidades de funcionar en tu red y sube por una escalera de alternativas si la conexión falla o el tráfico no pasa. Los perfiles de red reúnen protocolo, DNS, conexión automática y modo de servidor en un toque: por ejemplo Public Wi‑Fi (WireGuard, Quad9, solo Wi‑Fi, servidor más rápido) o Travel (IKEv2, Cloudflare, siempre).',
      },
      {
        title: 'Dónde termina la protección',
        body:
          'El cifrado termina en el servidor VPN. A partir de ahí tu tráfico viaja como cualquier otro, así que el HTTPS de las propias webs sigue importando. La VPN tampoco funciona antes de completar la página de acceso de la Wi‑Fi de un hotel o aeropuerto: esos portales cautivos necesitan primero una conexión directa. Y en un ordenador, la extensión de FollowNet para Chrome es un proxy del navegador: protege las pestañas de Chrome, no todas las apps.',
      },
    ],
    steps: {
      title: 'Comprueba cada capa tú mismo',
      items: [
        'Conéctate con el protocolo en Smart y fíjate en qué protocolo indica FollowNet.',
        'Abre Speed Test y mide latencia, descarga y subida en el servidor actual.',
        'Cambia a un servidor de otro país y repite: la latencia depende de la distancia.',
        'Cambia el DNS a Quad9 o AdGuard en Ajustes y recarga algunas webs.',
        'Prueba el perfil Public Wi‑Fi o Travel para fijar todas las capas a la vez.',
      ],
    },
    table: {
      title: 'Las cuatro capas de un vistazo',
      head: ['Capa', 'Qué decide', 'Dónde cambiarla en FollowNet'],
      rows: [
        ['Túnel', 'El tráfico va cifrado entre iPhone y servidor', 'Botón Conectar'],
        ['Protocolo', 'Cómo se construye el túnel y cómo se ve en la red', 'Ajustes → Protocolo VPN'],
        ['Servidor', 'Por dónde sale el tráfico y qué IP ven las webs', 'Lista de servidores / Ubicación óptima'],
        ['DNS', 'Quién traduce los nombres de las webs', 'Ajustes → DNS'],
      ],
    },
    bullets: [
      'Túnel, protocolo, servidor y DNS son capas distintas',
      'Smart Connect elige el protocolo y cambia automáticamente',
      'El servidor determina la latencia y la IP que ven las webs',
      'Los ajustes de DNS cambian el resolvedor, no el cifrado',
      'Los perfiles de red fijan todas las capas en un toque',
    ],
    cta: CTA,
    faq: [
      { q: '¿Mi proveedor ve que uso una VPN?', a: 'Normalmente ve que estás conectado a un servidor VPN, pero no lo que va dentro del túnel. Protocolos como VLESS Reality hacen que la conexión se parezca más a HTTPS normal.' },
      { q: '¿La VPN cifra el tráfico que ya es HTTPS?', a: 'Sí, añade una segunda capa. HTTPS protege el contenido; la VPN además oculta a la red local a qué webs te conectas.' },
      { q: '¿Por qué algunas apps se comportan distinto con VPN?', a: 'Algunos servicios ajustan contenidos o controles de seguridad según la IP y el país del servidor. Suele ayudar un servidor más cercano.' },
      { q: '¿Todo el tráfico del iPhone pasa por el túnel?', a: 'Mientras la VPN está conectada, iOS envía por ella el tráfico del dispositivo. Algunos servicios del sistema y el tráfico de red local siguen reglas propias de Apple.' },
    ],
  },

  'do-i-need-a-vpn': {
    h1: '¿Necesito una VPN en el iPhone? Una lista de comprobación honesta',
    lead:
      'No necesitas una VPN para todo, pero en varias situaciones habituales es la protección más sencilla que puedes añadir. Esta lista te ayuda a decidir según cómo usas de verdad el teléfono, sin alarmismo.',
    sections: [
      {
        title: 'Cuándo una VPN ayuda claramente',
        body:
          'El caso clásico es la Wi‑Fi pública y de invitados: cafeterías, aeropuertos, hoteles, coworkings y redes de congresos se comparten con desconocidos y las gestiona gente que no conoces. Una VPN cifra todo entre tu iPhone y el servidor VPN, así que el hotspot no ve qué servicios usas. También ayuda con SIM de viaje y en redes que ralentizan o filtran ciertos servicios.',
      },
      {
        title: 'Cuándo ayuda un poco',
        body:
          'En casa, con tu propio router, una VPN aporta sobre todo privacidad frente a tu proveedor, que de otro modo ve los dominios que visitas. Si compartes la red con invitados o compañeros de piso, es otra razón. Quien trabaja en remoto y cambia de red varias veces al día gana con un canal cifrado constante.',
      },
      {
        title: 'Cuándo una VPN no resuelve el problema',
        body:
          'Una VPN no frena correos de phishing, webs fraudulentas, contraseñas débiles ni malware. No te hace anónimo ante servicios en los que has iniciado sesión. No garantiza el acceso a cualquier catálogo de streaming y no sustituye a la VPN corporativa si tu empresa la exige. Si eso es lo que te preocupa, empieza por actualizaciones, un gestor de contraseñas y la verificación en dos pasos.',
      },
      {
        title: 'Una forma sencilla de decidir',
        body:
          'Piensa en la última semana. Si te conectaste al menos una vez a una red que no controlas, conviene tener una VPN preparada. Configúrala para no tener que acordarte: la conexión automática de FollowNet puede activar la VPN cada vez que te unes a una Wi‑Fi sin tocar los datos móviles, o siempre, en cualquier red.',
        image: 'autoconnect',
        imageCaption: 'Conexión automática: desactivada, solo Wi‑Fi, solo LTE o siempre.',
      },
      {
        title: '¿Gratis o de pago?',
        body:
          'Prueba antes de pagar. FollowNet Free es una VPN real con tráfico semanal, los mismos protocolos y Smart Connect, sin tarjeta. Premium elimina el límite semanal, abre ubicaciones Premium y cubre hasta cinco dispositivos. Si Free te basta para cafeterías y viajes, quizá nunca necesites más.',
      },
    ],
    steps: {
      title: 'Configura una VPN en la que no tengas que pensar',
      items: [
        'Instala FollowNet e inicia sesión con un código por correo.',
        'Conéctate una vez y permite la configuración VPN de iOS.',
        'Abre Ajustes → Conexión automática y elige «Solo Wi‑Fi» (o «Siempre»).',
        'Deja el protocolo en Smart para que las redes difíciles se gestionen solas.',
        'Al cabo de una semana mira Estadísticas para ver cuánto tráfico usas de verdad.',
      ],
    },
    table: {
      title: 'Tu situación y si una VPN ayuda',
      head: ['Situación', '¿Ayuda una VPN?', 'Por qué'],
      rows: [
        ['Wi‑Fi de cafetería, aeropuerto u hotel', 'Sí, claramente', 'Red compartida gestionada por desconocidos'],
        ['SIM de viaje o roaming', 'Sí', 'Red desconocida, a veces filtrada'],
        ['Tu Wi‑Fi de casa', 'Algo', 'Privacidad frente al proveedor'],
        ['Enlaces de phishing o fraude', 'No', 'Hace falta precaución y herramientas de seguridad, no un túnel'],
        ['Tu empresa exige su VPN', 'Usa la suya', 'La política de la empresa manda'],
      ],
    },
    bullets: [
      'Más valiosa en Wi‑Fi ajena y en viajes',
      'En casa añade privacidad frente al proveedor',
      'No sustituye actualizaciones, contraseñas ni la prudencia con los enlaces',
      'La conexión automática hace la protección automática en Wi‑Fi',
      'El tráfico semanal de Free te deja decidir antes de pagar',
    ],
    cta: CTA,
    faq: [
      { q: '¿Necesito VPN con datos móviles?', a: 'Las redes móviles suelen ser más seguras que la Wi‑Fi abierta. Con LTE, la VPN aporta sobre todo privacidad frente al operador y ayuda en roaming o redes filtradas.' },
      { q: '¿Debo dejar la VPN siempre activa?', a: 'Puedes. «Siempre» la mantiene en todas partes; «Solo Wi‑Fi» es un buen equilibrio si te preocupan sobre todo los hotspots.' },
      { q: '¿iCloud Private Relay sustituye a una VPN?', a: 'Private Relay cubre Safari y parte del tráfico. Una VPN cubre todas las apps del dispositivo y te deja elegir el país del servidor.' },
      { q: '¿Protegerá la VPN la app de mi banco?', a: 'Cifra el tramo en redes poco fiables, lo cual es útil. La seguridad de la banca sigue dependiendo de la app del banco, HTTPS y la seguridad de tu dispositivo.' },
    ],
  },

  'vpn-for-beginners': {
    h1: 'VPN para principiantes: configura FollowNet en el iPhone en cinco minutos',
    lead:
      '¿Nunca has usado una VPN? No necesitas entender de protocolos para estar protegido. Esta guía para principiantes cubre la instalación, el único aviso de iOS que verás, qué significa la pantalla principal y los tres ajustes que conviene conocer.',
    sections: [
      {
        title: 'Lo que necesitas',
        body:
          'Un iPhone o iPad con una versión reciente de iOS, una dirección de correo y unos cinco minutos. FollowNet Free no pide tarjeta. Inicias sesión con un código de un solo uso que llega a tu correo, así que no hay contraseña que inventar ni olvidar.',
      },
      {
        title: 'El aviso de permiso de iOS',
        body:
          'La primera vez que tocas Conectar, iOS muestra un mensaje de que FollowNet quiere añadir una configuración VPN. Es normal en cualquier VPN de App Store: así permite Apple que una app cree un túnel de todo el sistema. Toca «Permitir» y confirma con Face ID o el código. Solo se hace una vez; después conectas con un toque.',
      },
      {
        title: 'Cómo leer la pantalla principal',
        body:
          'Cuando el botón grande se pone verde y arranca el temporizador, estás conectado. Bajo el temporizador FollowNet muestra el protocolo en uso y abajo la ubicación actual con su ping. El icono VPN en la barra de estado confirma que el túnel está activo. Para desconectar, vuelve a tocar el botón.',
        image: 'connect',
        imageCaption: 'Conectado: temporizador, protocolo y ubicación actual de un vistazo.',
      },
      {
        title: 'Tres ajustes que conviene conocer',
        body:
          'Protocolo: déjalo en Smart; FollowNet elige lo que funciona en cada red. Conexión automática: elige «Solo Wi‑Fi» para que la VPN se active en cada hotspot. Ubicación: «Ubicación óptima» para velocidad o un país de la lista. Todo lo demás —DNS, perfiles de red, Atajos— puede esperar hasta que te pique la curiosidad.',
        image: 'settings',
        imageCaption: 'Ajustes: protocolo, DNS, conexión automática, perfiles de red y otros dispositivos.',
      },
      {
        title: 'Si algo no funciona',
        body:
          'La mayoría de problemas tienen causas simples. En la Wi‑Fi de un hotel o aeropuerto, completa primero la página de acceso en Safari y luego conecta. Si la conexión se queda colgada, deja Smart o prueba otra ubicación. En el plan Free, comprueba en Estadísticas que te queda tráfico semanal. Reiniciar la Wi‑Fi soluciona muchos fallos puntuales.',
      },
      {
        title: 'En otros dispositivos',
        body:
          'La misma cuenta funciona en el iPad y en la extensión de FollowNet para Chrome en el ordenador. En un dispositivo nuevo, inicia sesión con el mismo correo o escanea un código QR desde Ajustes → Otros dispositivos en tu teléfono. La extensión de Chrome solo protege las pestañas del navegador; las apps de iPhone y iPad protegen todo el dispositivo.',
      },
    ],
    steps: {
      title: 'Tu primera conexión paso a paso',
      items: [
        'Descarga FollowNet desde App Store y ábrela.',
        'Escribe tu correo y el código que recibas.',
        'Toca el botón grande Conectar.',
        'Toca «Permitir» en el aviso de iOS y confirma con Face ID o el código.',
        'Espera a que arranque el temporizador y aparezca el icono VPN en la barra de estado.',
        'Opcional: Ajustes → Conexión automática → Solo Wi‑Fi.',
      ],
    },
    bullets: [
      'Sin tarjeta ni contraseña: inicio de sesión con código por correo',
      'Permite el aviso de iOS una vez y conecta con un toque',
      'Deja el protocolo en Smart: no hace falta decidir nada técnico',
      '«Solo Wi‑Fi» te protege automáticamente en los hotspots',
      'La misma cuenta funciona en iPad y en Chrome',
    ],
    cta: CTA,
    faq: [
      { q: '¿Es seguro permitir la configuración VPN?', a: 'Sí, en una VPN de App Store es el mecanismo estándar de Apple. Puedes eliminarla cuando quieras en Ajustes de iOS → VPN o borrando la app.' },
      { q: '¿Tengo que cambiar ajustes técnicos?', a: 'No. Los valores predeterminados —protocolo Smart y Ubicación óptima— sirven a la mayoría. La conexión automática es lo único que suele compensar cambiar.' },
      { q: '¿Cómo sé que la VPN está activa?', a: 'El botón de FollowNet está verde con el temporizador en marcha y aparece el icono VPN en la barra de estado del iPhone.' },
      { q: '¿Qué pasa cuando se acaba el tráfico Free?', a: 'Las nuevas conexiones se pausan hasta que se renueva el límite semanal, o puedes pasarte a Premium con tráfico ilimitado.' },
    ],
  },

  'free-vpn-vs-paid': {
    h1: 'VPN gratis o de pago: lo que obtienes (y lo que das) de verdad',
    lead:
      'Las VPN «gratis» van desde planes honestos con límite hasta apps que venden tus datos. Las de pago tampoco son automáticamente mejores. Aquí ves en qué se diferencian de verdad, qué comprobar antes de confiar en una u otra y cómo se comparan Free y Premium en FollowNet.',
    sections: [
      {
        title: 'Cómo se financian las VPN gratis',
        body:
          'Los servidores cuestan dinero, así que toda VPN gratis se financia de algún modo. Los modelos honestos son un plan gratuito limitado que invita a mejorar o la publicidad dentro de la app. Los problemáticos venden datos de navegación, inyectan anuncios en el tráfico o incluyen SDK de rastreo. La política de privacidad y la etiqueta de privacidad de App Store suelen indicarte con cuál estás tratando.',
      },
      {
        title: 'Límites típicos de los planes gratuitos',
        body:
          'Espera un límite de datos (diario, semanal o mensual), menos ubicaciones, servidores más lentos o saturados, anuncios o un tiempo máximo por sesión. Nada de eso es un problema en sí; lo es cuando está oculto. Un buen plan gratuito muestra su límite claramente para que veas cuándo te acercas.',
      },
      {
        title: 'FollowNet Free en la práctica',
        body:
          'FollowNet Free es la misma app con los mismos protocolos, Smart Connect, ajustes de DNS y conexión automática. La diferencia es un límite de tráfico semanal y el conjunto de ubicaciones Free. La pantalla Estadísticas muestra cuánto has usado y cuánto te queda esta semana; el límite se renueva cada semana, no cada día.',
        image: 'stats',
        imageCaption: 'Estadísticas: sesiones, tiempo, datos usados y límite semanal.',
      },
      {
        title: 'Lo que añade Premium',
        body:
          'Premium elimina el límite semanal, desbloquea ubicaciones Premium, permite usar una suscripción en hasta cinco dispositivos y quita los anuncios. Se compra en App Store como suscripción mensual o anual; la anual incluye una breve prueba gratuita que aparece en la ventana de pago de Apple. El cifrado es el mismo en ambos planes: pagas capacidad y opciones, no «más seguridad».',
        image: 'premium',
        imageCaption: 'Premium: tráfico ilimitado, todos los servidores Premium, Smart Connect y hasta cinco dispositivos.',
      },
      {
        title: 'Señales de alarma en cualquier VPN',
        body:
          'Ten cuidado con apps sin empresa ni política de privacidad claras, que prometen «100 % de anonimato», muestran cuentas atrás falsas o dicen tener miles de servidores en todos los países. Revisa también cómo se cancela: las suscripciones compradas en App Store se gestionan y cancelan en cualquier momento desde los ajustes de tu Apple ID.',
      },
    ],
    table: {
      title: 'FollowNet Free y Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Tráfico', 'Límite semanal visible en la app', 'Ilimitado'],
        ['Ubicaciones', 'Ubicaciones Free', 'Free + Premium'],
        ['Protocolos y Smart Connect', 'Incluidos', 'Incluidos'],
        ['DNS, conexión automática, Speed Test', 'Incluidos', 'Incluidos'],
        ['Dispositivos', 'Tus dispositivos dentro del límite Free', 'Hasta 5 dispositivos'],
        ['Anuncios', 'Pueden aparecer en algunas regiones', 'Sin anuncios'],
      ],
    },
    steps: {
      title: 'Cómo decidir en una semana',
      items: [
        'Usa FollowNet Free en las redes que usas de verdad: cafetería, oficina, viajes.',
        'Al final de la semana revisa Estadísticas.',
        'Si no superaste el límite y las ubicaciones Free te sirvieron, quédate en Free.',
        'Si llegaste al límite o necesitas una ubicación Premium concreta, plantéate Premium.',
        'Si dudas, empieza con el plan mensual y pásate al anual más adelante.',
      ],
    },
    bullets: [
      'Toda VPN gratis se financia de algún modo: comprueba cómo',
      'Un buen plan gratuito muestra sus límites abiertamente',
      'FollowNet Free: mismos protocolos, límite de tráfico semanal',
      'Premium: ilimitado, más ubicaciones, hasta cinco dispositivos',
      'El cifrado no depende del plan',
    ],
    cta: CTA,
    faq: [
      { q: '¿FollowNet Free es realmente gratis?', a: 'Sí. No hace falta tarjeta. Tienes un límite de tráfico semanal; Premium es opcional.' },
      { q: '¿Una VPN de pago es más segura que una gratis?', a: 'No automáticamente. La seguridad depende de los protocolos y de las prácticas del proveedor. En FollowNet ambos planes usan el mismo cifrado.' },
      { q: '¿Puedo cancelar Premium cuando quiera?', a: 'Sí. Las suscripciones se gestionan desde tu Apple ID; cancela antes de la renovación y conservas el acceso hasta el final del periodo pagado.' },
      { q: '¿Una suscripción Premium cubre mi iPad?', a: 'Sí, Premium cubre hasta cinco dispositivos con la misma cuenta, incluida la extensión de Chrome.' },
    ],
  },

  'vpn-vs-proxy': {
    h1: 'VPN o proxy: ¿en qué se diferencian y cuál necesitas?',
    lead:
      'Tanto una VPN como un proxy envían tu tráfico a través de otro servidor, por eso se confunden a menudo. La diferencia real es el alcance: una VPN cubre todo el dispositivo; un proxy, normalmente una sola app, casi siempre el navegador. Aquí ves cuándo conviene cada uno, con la app de FollowNet para iPhone y su extensión para Chrome como ejemplos.',
    sections: [
      {
        title: 'Qué hace un proxy',
        body:
          'Un proxy es un servidor que reenvía las peticiones de una aplicación. Lo configuras en esa app —casi siempre el navegador— y solo su tráfico pasa por él. Muchos proxies no cifran nada por sí mismos; los seguros usan conexiones cifradas, pero el alcance sigue limitado a la app configurada.',
      },
      {
        title: 'Qué hace una VPN',
        body:
          'Una VPN crea un túnel cifrado a nivel de sistema. En el iPhone, FollowNet usa Network Extension de Apple, así que Safari, mensajería, correo, juegos y servicios del sistema pasan por el túnel mientras está activo. No configuras cada app por separado, y también quedan cubiertas las apps que ignoran los ajustes de proxy.',
      },
      {
        title: 'FollowNet usa ambos, en dispositivos distintos',
        body:
          'En iPhone e iPad, FollowNet es una VPN completa para todo el dispositivo. En el ordenador, la extensión de FollowNet para Chrome funciona como proxy del navegador: protege las pestañas de Chrome con la misma cuenta y añade un Kill Switch del navegador opcional, listas de anuncios y rastreadores y enrutamiento por web. No cubre Slack, Zoom ni otras apps de escritorio.',
      },
      {
        title: 'Cuándo basta un proxy',
        body:
          'Si solo necesitas proteger la navegación en un portátil —por ejemplo en una cafetería o una oficina compartida—, un proxy del navegador es ligero, se activa rápido y no toca el resto del sistema. Con el enrutamiento por web puedes enviar por él solo algunas webs y dejar las demás en directo.',
      },
      {
        title: 'Cuándo quieres una VPN',
        body:
          'En cuanto importan apps fuera del navegador —mensajería, correo, banca, juegos, llamadas—, necesitas una VPN de sistema. En el teléfono casi siempre es así, por eso FollowNet en iOS es una VPN y no un proxy.',
      },
    ],
    table: {
      title: 'VPN y proxy, lado a lado',
      head: ['', 'VPN (FollowNet iOS)', 'Proxy (FollowNet Chrome)'],
      rows: [
        ['Alcance', 'Todas las apps del dispositivo', 'Solo pestañas del navegador'],
        ['Configuración', 'Un permiso de iOS y luego un toque', 'Instalar la extensión e iniciar sesión'],
        ['Cifrado', 'Todo el túnel hasta el servidor VPN', 'Tráfico del navegador hasta el proxy'],
        ['Kill Switch', 'Reglas de conexión automática de iOS', 'Kill Switch del navegador'],
        ['Ideal para', 'Teléfonos, protección de todas las apps', 'Navegar con portátil en lugares públicos'],
      ],
    },
    steps: {
      title: 'Cómo elegir en la práctica',
      items: [
        'En iPhone o iPad: instala la app FollowNet; cubre todas las apps.',
        'En un portátil donde solo navegas: añade la extensión de FollowNet para Chrome.',
        'Inicia sesión en ambos con el mismo correo: cuenta y plan son compartidos.',
        'Usa el enrutamiento por web en Chrome si solo algunas webs deben ir por el proxy.',
      ],
    },
    bullets: [
      'Proxy: una app (normalmente el navegador); VPN: todo el dispositivo',
      'FollowNet en iPhone es una VPN de sistema con Network Extension',
      'FollowNet para Chrome es un proxy del navegador con Kill Switch y enrutamiento',
      'Una cuenta y un plan para ambos',
      'Mensajería, llamadas y banca necesitan VPN, no un proxy de navegador',
    ],
    cta: CTA,
    faq: [
      { q: '¿Un proxy es menos seguro que una VPN?', a: 'No necesariamente para el tráfico que cubre, pero cubre menos. Todo lo que queda fuera de la app configurada va sin protección.' },
      { q: '¿Hay app VPN de FollowNet para Mac o Windows?', a: 'Hoy FollowNet se centra en iPhone/iPad y en la extensión de Chrome para navegar en el ordenador.' },
      { q: '¿Puedo usar la app del iPhone y la extensión de Chrome a la vez?', a: 'Sí, con la misma cuenta. Premium cubre hasta cinco dispositivos.' },
      { q: '¿La extensión de Chrome oculta mi IP a las webs?', a: 'Para las webs abiertas en Chrome a través del proxy, las webs ven la dirección del servidor proxy.' },
    ],
  },

  'what-is-dns-leak': {
    h1: '¿Qué es una fuga de DNS y cómo elegir DNS con VPN en el iPhone?',
    lead:
      'Cada vez que abres una web, tu dispositivo pregunta primero a un servidor DNS su dirección. Si esas consultas se saltan la VPN, la red sigue viendo qué webs visitas: eso es una fuga de DNS. Aquí ves qué significa en la práctica y cómo encajan los ajustes de DNS de FollowNet.',
    sections: [
      {
        title: 'El DNS en un párrafo',
        body:
          'El DNS es la guía telefónica de internet. Tu iPhone pregunta a un resolvedor «¿cuál es la dirección de example.com?» antes de conectarse. Por tanto, el resolvedor conoce cada dominio que buscas. Sin VPN suele ser el de tu proveedor o el de la red Wi‑Fi, y las consultas viajan a menudo sin cifrar.',
      },
      {
        title: 'Qué es una fuga de DNS',
        body:
          'Hay fuga cuando el túnel protege tu tráfico pero las consultas de nombres siguen yendo al resolvedor de la red local fuera del túnel. El contenido sigue cifrado, pero la red ve la lista de dominios que visitas. Suele deberse a apps mal configuradas, perfiles de configuración instalados a mano o casos límite del sistema.',
      },
      {
        title: 'Cómo gestiona FollowNet el DNS',
        body:
          'Mientras FollowNet está conectado, eliges el resolvedor en Ajustes → DNS. «Predeterminado» usa el resolvedor recomendado para máxima compatibilidad. Cloudflare es rápido y orientado a la privacidad, Google está muy extendido, Quad9 bloquea dominios maliciosos conocidos, AdGuard bloquea anuncios, rastreadores y phishing, y AdGuard Family añade filtrado de contenido para adultos.',
        image: 'dns',
        imageCaption: 'Ajustes de DNS en FollowNet: Predeterminado, Cloudflare, Google, AdGuard, AdGuard Family y Quad9.',
      },
      {
        title: 'Cómo elegir el resolvedor',
        body:
          'Para la mayoría, Predeterminado o Cloudflare es el punto de partida correcto. Elige Quad9 si quieres protección extra frente a webs maliciosas, AdGuard si quieres menos anuncios en apps y navegador, AdGuard Family para dispositivos infantiles. Si tras el cambio deja de funcionar la web del banco o la intranet de la empresa, vuelve a Predeterminado: los resolvedores con filtro a veces bloquean dominios legítimos.',
      },
      {
        title: 'El DNS no es cifrado',
        body:
          'Cambiar el DNS cambia quién responde las consultas; no cifra tu tráfico. Eso lo hace el túnel VPN. Combinados te dan ambas cosas: tráfico cifrado y un resolvedor elegido por ti. Los perfiles de red ajustan los dos a la vez: Public Wi‑Fi usa Quad9 y Travel usa Cloudflare.',
      },
      {
        title: 'Cómo comprobar si hay fugas',
        body:
          'Conecta FollowNet, abre en Safari una web de test de fugas de DNS y ejecuta la prueba ampliada. Los resolvedores que aparezcan deberían pertenecer al ajuste elegido o al proveedor VPN, no a tu proveedor de casa ni al hotel. Repite al cambiar de red. Mantén iOS actualizado y no instales perfiles VPN cualesquiera descargados de internet.',
      },
    ],
    steps: {
      title: 'Configurar el DNS en FollowNet',
      items: [
        'Conecta FollowNet.',
        'Abre Ajustes → DNS.',
        'Elige un ajuste, por ejemplo Cloudflare o Quad9.',
        'Recarga algunas webs y ejecuta un test de fugas de DNS en Safari.',
        'Si algo falla, vuelve a Predeterminado.',
      ],
    },
    table: {
      title: 'Qué ajuste de DNS para cada objetivo',
      head: ['Ajuste', 'Ideal para', 'Nota'],
      rows: [
        ['Predeterminado', 'Máxima compatibilidad', 'Punto de partida recomendado'],
        ['Cloudflare', 'Velocidad y privacidad', 'Usado por el perfil Travel'],
        ['Google', 'Fiabilidad', 'Muy extendido'],
        ['Quad9', 'Bloquear dominios maliciosos', 'Usado por Public Wi‑Fi y Restricted'],
        ['AdGuard', 'Menos anuncios y rastreadores', 'Puede bloquear dominios legítimos'],
        ['AdGuard Family', 'Dispositivos infantiles', 'Añade filtro de contenido adulto'],
      ],
    },
    bullets: [
      'Una fuga de DNS revela los dominios visitados aunque el tráfico vaya cifrado',
      'FollowNet te deja elegir el resolvedor con la VPN conectada',
      'Quad9 y AdGuard añaden seguridad o filtro de anuncios',
      'Elegir DNS no sustituye el cifrado de la VPN',
      'Comprueba con un test de fugas de DNS tras cambiar ajustes',
    ],
    cta: CTA,
    faq: [
      { q: '¿Qué DNS es el más privado?', a: 'Depende de la política del proveedor. Cloudflare y Quad9 publican sus compromisos de privacidad; léelos y elige en quién confías.' },
      { q: '¿AdGuard DNS sustituye a un bloqueador de anuncios?', a: 'Bloquea muchos dominios de anuncios y rastreo en todas las apps, pero no puede quitar anuncios servidos desde el mismo dominio que el contenido.' },
      { q: '¿Por qué una web dejó de funcionar tras cambiar el DNS?', a: 'Los resolvedores con filtro a veces bloquean un dominio que la web necesita. Vuelve a Predeterminado y debería cargar.' },
      { q: '¿Tengo que cambiar el DNS?', a: 'No. Predeterminado funciona bien. Los ajustes de DNS son un extra opcional para filtrar o por preferencia.' },
    ],
  },

  'vpn-hotel-wifi': {
    h1: 'Usar una VPN en la Wi‑Fi del hotel con tu iPhone',
    lead:
      'La Wi‑Fi del hotel es compartida, a menudo antigua y casi siempre está detrás de una página de acceso. Eso la convierte en uno de los mejores sitios para usar una VPN, y en uno de los más frustrantes si conectas en el orden equivocado. Esta es la rutina que funciona.',
    sections: [
      {
        title: 'Por qué las redes de hotel merecen una VPN',
        body:
          'Todos los huéspedes comparten la misma red, el equipo rara vez se actualiza y no sabes quién la gestiona. Algunos hoteles también registran el tráfico o insertan páginas propias. Una VPN cifra todo entre tu iPhone y el servidor VPN, así que ni otros huéspedes ni el operador ven qué servicios usas.',
      },
      {
        title: 'Primero la página de acceso, después la VPN',
        body:
          'La mayoría de hoteles usan un portal cautivo: la página donde introduces el número de habitación o aceptas condiciones. Necesita una conexión directa. Si la VPN ya está activa, la página puede no cargar y el túnel no llegar a internet. Únete a la Wi‑Fi, completa el portal en Safari, comprueba que abre una web normal y luego conecta FollowNet.',
      },
      {
        title: 'Elige los ajustes adecuados',
        body:
          'En redes de hotel tranquilas, el perfil Public Wi‑Fi es ideal: WireGuard para velocidad, DNS Quad9 y conexión automática en Wi‑Fi. Algunos hoteles ralentizan o bloquean el tráfico VPN; en ese caso cambia al perfil Restricted, que mantiene Smart Connect activo y le permite pasar a AmneziaWG, Hysteria2 o VLESS Reality.',
        image: 'autoconnect',
        imageCaption: '«Solo Wi‑Fi» activa la VPN automáticamente en cada hotspot.',
      },
      {
        title: 'Comprueba la velocidad con honestidad',
        body:
          'Por la noche, cuando todo el mundo ve vídeos, la conexión del hotel suele ir lenta. Ejecuta Speed Test sin y con VPN en la misma red. Si la diferencia es grande, elige un servidor más cercano o deja que decida «Ubicación óptima». La VPN no puede añadir ancho de banda que el hotel no tiene.',
        image: 'speedtest',
        imageCaption: 'Speed Test muestra descarga, subida, latencia, jitter y pérdida de paquetes.',
      },
      {
        title: 'Guarda lo que funciona',
        body:
          'Las cadenas hoteleras suelen usar la misma instalación de red en todos sus hoteles. Cuando encuentres una combinación que funcione —protocolo, DNS y servidor—, guárdala como perfil de red propio con el nombre de la cadena. La próxima vez bastará un toque.',
      },
      {
        title: 'Si la conexión se corta una y otra vez',
        body:
          'Algunos portales cierran la sesión cada pocas horas o cada día. Si la VPN deja de pasar tráfico de repente, desconéctala, abre Safari para ver si ha vuelto la página de acceso, inicia sesión de nuevo y reconecta. Es la política del hotel, no un fallo de la VPN.',
      },
    ],
    steps: {
      title: 'Rutina en la Wi‑Fi del hotel',
      items: [
        'Únete a la Wi‑Fi del hotel y completa la página de acceso en Safari.',
        'Abre cualquier web normal para confirmar que hay internet.',
        'Conecta FollowNet con el perfil Public Wi‑Fi o Smart.',
        'Si no conecta o las páginas se cuelgan, cambia al perfil Restricted.',
        'Ejecuta Speed Test y elige un servidor más cercano si hace falta.',
        'Guarda la configuración que funcione como perfil propio para esa cadena.',
      ],
    },
    bullets: [
      'Las redes compartidas de hotel son el caso típico para una VPN',
      'Completa siempre la página de acceso antes de conectar',
      'Public Wi‑Fi para redes tranquilas, Restricted para las difíciles',
      'Speed Test revela si el cuello de botella es el hotel o el servidor',
      'Guarda un perfil que funcione para cada cadena hotelera',
    ],
    cta: CTA,
    faq: [
      { q: '¿Por qué no abre la página de acceso del hotel con la VPN activa?', a: 'El portal necesita una conexión directa. Desconecta, completa el acceso y vuelve a conectar.' },
      { q: '¿Es segura la Wi‑Fi del hotel con contraseña?', a: 'Una contraseña compartida protege de los de fuera, no de otros huéspedes ni del operador. La VPN añade esa capa que falta.' },
      { q: '¿Una VPN arregla una Wi‑Fi de hotel lenta?', a: 'No. Puede ayudar si el hotel ralentiza servicios concretos, pero no puede añadir ancho de banda.' },
      { q: '¿Basta Free para una estancia en hotel?', a: 'Para navegar, mensajería y correo, normalmente sí. El streaming nocturno puede agotar rápido el límite semanal; Premium es ilimitado.' },
    ],
  },

  'vpn-airport-wifi': {
    h1: 'Wi‑Fi del aeropuerto y VPN: privacidad mientras viajas',
    lead:
      'La Wi‑Fi del aeropuerto es gratis, está saturada y llena de redes con nombres parecidos. Una VPN mantiene cifrado tu tráfico mientras esperas el vuelo. Así te conectas con seguridad, esto es lo que puedes esperar de la velocidad y así se estira un límite Free.',
    sections: [
      {
        title: 'Riesgos propios de los aeropuertos',
        body:
          'Miles de personas comparten los mismos hotspots y es fácil crear una red falsa con un nombre que parezca oficial. Antes de conectarte, comprueba el nombre oficial de la red en los carteles del aeropuerto. Una vez conectado, la VPN cifra tu tráfico para que ni la red ni otros pasajeros vean lo que haces.',
      },
      {
        title: 'Conecta en el orden correcto',
        body:
          'Las redes de aeropuerto casi siempre tienen página de acceso. Únete a la red, complétala (a veces piden un correo o muestran un anuncio), comprueba que carga una web normal y solo entonces toca Conectar en FollowNet. Con «Solo Wi‑Fi», la VPN se activará sola tras el portal.',
      },
      {
        title: 'Cuenta con la saturación',
        body:
          'En horas punta la Wi‑Fi del aeropuerto puede ir muy lenta. Elige un servidor cercano o «Ubicación óptima» y ejecuta Speed Test antes de una descarga grande. Si la Wi‑Fi es inservible, pasa a datos móviles: FollowNet también funciona en LTE y «Siempre» lo mantiene activo en ambas.',
        image: 'servers',
        imageCaption: 'Elige una ubicación cercana o deja que decida «Ubicación óptima».',
      },
      {
        title: 'Cómo estirar el límite Free',
        body:
          'El streaming de vídeo es lo que más gasta el límite semanal. Descarga películas y música en casa antes de viajar, usa la VPN para mensajería, correo, banca y navegación en la puerta de embarque y evita tests de velocidad innecesarios. El tráfico restante aparece en Estadísticas; si viajas a menudo, Premium elimina el límite.',
        image: 'stats',
        imageCaption: 'Estadísticas muestra cuánto queda del límite semanal.',
      },
      {
        title: 'Roaming y llegada',
        body:
          'Al aterrizar puedes estar con una SIM extranjera o en roaming. Mantén Smart Connect activado: algunas redes en el extranjero tratan el tráfico VPN de otra forma y Smart Connect pasa a un protocolo que funcione. El perfil Travel usa IKEv2, que lleva bien el cambio entre la Wi‑Fi del aeropuerto y la red móvil.',
      },
    ],
    steps: {
      title: 'Antes de viajar y en el aeropuerto',
      items: [
        'En casa: instala FollowNet, inicia sesión y descarga contenido sin conexión.',
        'Activa «Solo Wi‑Fi» o aplica el perfil Travel.',
        'En el aeropuerto, comprueba el nombre oficial de la Wi‑Fi en los carteles.',
        'Únete a ella y completa la página de acceso.',
        'Deja que FollowNet se conecte y navega, escribe y trabaja con normalidad.',
      ],
    },
    bullets: [
      'Comprueba el nombre oficial de la red: existen hotspots falsos',
      'Primero la página de acceso, luego la VPN',
      'Elige un servidor cercano: los aeropuertos están saturados',
      'Descarga vídeos antes para ahorrar tráfico Free',
      'El perfil Travel y Smart Connect ayudan en redes extranjeras',
    ],
    cta: CTA,
    faq: [
      { q: '¿Es peligrosa la Wi‑Fi del aeropuerto?', a: 'Se comparte con muchos desconocidos y es fácil de imitar. Usar la red oficial más una VPN elimina la mayor parte del riesgo en el uso diario.' },
      { q: '¿Wi‑Fi del aeropuerto o datos móviles?', a: 'Los datos móviles suelen ser más seguros y a veces más rápidos. Si usas la Wi‑Fi, mantén la VPN activa.' },
      { q: '¿Por qué la VPN va lenta en el aeropuerto?', a: 'Normalmente está saturada la propia Wi‑Fi. Ayuda un servidor cercano; la VPN no puede añadir ancho de banda.' },
      { q: '¿FollowNet funciona en el extranjero?', a: 'Sí, dentro de las leyes locales. Smart Connect se adapta a distintas condiciones de red.' },
    ],
  },

  'vpn-for-remote-work': {
    h1: 'VPN para teletrabajo: protege tu iPhone en cafeterías, coworkings y de viaje',
    lead:
      'Teletrabajar significa correo, documentos y llamadas a través de redes que no controlas. Una VPN personal mantiene ese tráfico cifrado. Aquí tienes una configuración práctica para quien trabaja en remoto, y en qué casos mandan las normas de tu empresa.',
    sections: [
      {
        title: 'Por qué el teletrabajo necesita cifrado',
        body:
          'Tu día puede empezar en la Wi‑Fi de casa, seguir en una cafetería y terminar en un coworking o en el tren. Cada red la gestiona otra persona. Una VPN cifra el tramo para correo, chat, documentos en la nube y videollamadas, de modo que el operador de la red no ve qué servicios usas ni puede manipular el tráfico sin cifrar.',
      },
      {
        title: 'VPN personal y VPN corporativa',
        body:
          'Si tu empresa ofrece su propia VPN para acceder a sistemas internos, úsala: manda la política de la empresa y FollowNet no la sustituye. FollowNet es una VPN personal: protege tu dispositivo en redes públicas y es ideal para autónomos, colaboradores externos y cualquiera sin VPN corporativa.',
      },
      {
        title: 'Configuración recomendada',
        body:
          'Pon la conexión automática en «Solo Wi‑Fi» para que la VPN arranque en cada hotspot. Deja el protocolo en Smart para que sea fiable en redes distintas. Para llamadas importantes, elige un servidor cercano a ti o a tus interlocutores: en vídeo importa más la latencia que la velocidad de descarga.',
        image: 'autoconnect',
        imageCaption: '«Solo Wi‑Fi» te protege automáticamente en cada cafetería.',
      },
      {
        title: 'Comprueba la calidad antes de que importe',
        body:
          'Ejecuta Speed Test diez minutos antes de una reunión. Fíjate en la latencia y el jitter, no solo en la descarga: un jitter alto entrecorta el audio incluso con una conexión rápida. Si el resultado es malo, prueba otro servidor cercano o haz la llamada con datos móviles.',
        image: 'speedtest',
        imageCaption: 'En videollamadas, el jitter y la pérdida de paquetes son lo que más importa.',
      },
      {
        title: 'Teléfono y portátil con una cuenta',
        body:
          'Usa FollowNet en el iPhone para todas las apps y la extensión de FollowNet para Chrome en el portátil para el trabajo en el navegador: webmail, Google Docs, Notion, CRM. Una suscripción Premium cubre hasta cinco dispositivos. Recuerda que la extensión de Chrome solo protege las pestañas de Chrome, no apps de escritorio como Slack o Zoom.',
      },
      {
        title: 'Cuando Free no basta',
        body:
          'Las videollamadas diarias y las subidas de archivos grandes consumen mucho tráfico. Si teletrabajas a diario, el tráfico ilimitado de Premium es la opción práctica; Free va bien para sesiones ocasionales en cafeterías.',
      },
    ],
    steps: {
      title: 'Lista para el teletrabajo',
      items: [
        'Instala FollowNet en el iPhone e inicia sesión.',
        'Ajustes → Conexión automática → Solo Wi‑Fi.',
        'Añade la extensión de FollowNet para Chrome en el portátil con el mismo correo.',
        'Antes de las llamadas, ejecuta Speed Test y elige un servidor cercano si el jitter es alto.',
        'Para sistemas internos, sigue la política VPN de tu empresa.',
      ],
    },
    bullets: [
      'Cifra correo, chat, documentos y llamadas en redes públicas',
      'Usa la VPN de la empresa cuando su política lo exija',
      '«Solo Wi‑Fi» evita tener que acordarse',
      'Vigila latencia y jitter antes de llamadas importantes',
      'Una cuenta para iPhone y Chrome; Premium cubre cinco dispositivos',
    ],
    cta: CTA,
    faq: [
      { q: '¿Puedo usar FollowNet junto con la VPN de mi empresa?', a: 'iOS mantiene una VPN a la vez. Usa la corporativa cuando necesites sistemas internos y FollowNet el resto del tiempo.' },
      { q: '¿Una VPN empeora las videollamadas?', a: 'Añade algo de latencia. Un servidor cercano la reduce al mínimo; Speed Test muestra el efecto real.' },
      { q: '¿FollowNet protege Slack o Zoom en mi portátil?', a: 'La extensión de Chrome solo cubre pestañas del navegador. En el iPhone, la app protege todas las apps, incluidas Slack y Zoom.' },
      { q: '¿FollowNet ve mis datos de trabajo?', a: 'El tráfico dentro de HTTPS sigue cifrado de extremo a extremo. Lo que procesa FollowNet se describe en la Política de privacidad.' },
    ],
  },

  'wireguard-vs-ikev2': {
    h1: 'WireGuard o IKEv2 en el iPhone: ¿qué protocolo VPN usar?',
    lead:
      'WireGuard e IKEv2 son los dos protocolos VPN más comunes en iOS y FollowNet admite ambos. En la práctica son igual de seguros; la diferencia está en la velocidad, el comportamiento al cambiar de red y lo fácil que les resulta a las redes reconocerlos.',
    sections: [
      {
        title: 'WireGuard en resumen',
        body:
          'WireGuard es un protocolo moderno con un código pequeño y auditable y criptografía actual. Conecta rápido, tiene poca sobrecarga y suele ser la opción más rápida en redes estables de casa y oficina. Como su tráfico tiene un patrón reconocible, algunas redes lo ralentizan o bloquean.',
      },
      {
        title: 'IKEv2 en resumen',
        body:
          'IKEv2 es un estándar consolidado con soporte nativo en iOS. Su punto fuerte es la movilidad: cuando pasas de Wi‑Fi a LTE o atraviesas zonas con mala cobertura, retoma el túnel con suavidad. Es algo más pesado que WireGuard y también puede bloquearse en redes restrictivas.',
      },
      {
        title: 'Velocidad',
        body:
          'En una red tranquila, WireGuard suele ser algo más rápido y con menos latencia. La diferencia suele ser pequeña frente al efecto de la distancia al servidor. Mídelo tú: conéctate al mismo servidor con cada protocolo y ejecuta Speed Test dos veces.',
        image: 'speedtest',
        imageCaption: 'Compara protocolos en el mismo servidor con Speed Test.',
      },
      {
        title: 'Cambio de red',
        body:
          'Si vas y vienes al trabajo, viajas o te mueves mucho, el comportamiento de reconexión de IKEv2 se nota: menos parones cuando el teléfono cambia de red. Por eso el perfil Travel de FollowNet usa IKEv2 por defecto.',
      },
      {
        title: 'Cuando ninguno funciona',
        body:
          'Algunas redes interfieren con ambos. Entonces usa Smart Connect: pasa a AmneziaWG (una variante de WireGuard con patrón de tráfico alterado), Hysteria2 (sobre QUIC, bueno con pérdidas de paquetes) o VLESS Reality (parece HTTPS normal). El perfil Restricted mantiene esa escalera activa por defecto.',
        image: 'protocol',
        imageCaption: 'Elige WireGuard o IKEv2 manualmente o deja Smart.',
      },
    ],
    table: {
      title: 'WireGuard e IKEv2',
      head: ['', 'WireGuard', 'IKEv2'],
      rows: [
        ['Velocidad en redes estables', 'Normalmente el más rápido', 'Rápido, algo más de sobrecarga'],
        ['Cambio Wi‑Fi ↔ LTE', 'Bueno', 'Excelente, se retoma con suavidad'],
        ['Tiempo de conexión', 'Muy rápido', 'Rápido'],
        ['Bloqueo en redes restrictivas', 'A veces', 'A veces'],
        ['Perfil de FollowNet', 'Public Wi‑Fi', 'Travel'],
      ],
    },
    steps: {
      title: 'Elige el tuyo en dos minutos',
      items: [
        'Conéctate a un servidor cercano con WireGuard y ejecuta Speed Test.',
        'Cambia a IKEv2 en el mismo servidor y repite Speed Test.',
        'Si sueles estar en el mismo sitio, quédate con el más rápido.',
        'Si te mueves mucho, prefiere IKEv2 o el perfil Travel.',
        'Si ninguno conecta, vuelve a Smart y deja que cambie solo.',
      ],
    },
    bullets: [
      'Ambos son seguros; la diferencia es velocidad y movilidad',
      'WireGuard: el más rápido en redes estables',
      'IKEv2: el mejor al cambiar entre Wi‑Fi y LTE',
      'Smart Connect pasa a AmneziaWG, Hysteria2 o VLESS Reality',
      'Mide en tu propia red con Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: '¿Cuál es más seguro?', a: 'Ambos usan criptografía moderna y robusta si están bien implementados. Elige por velocidad y movilidad, no por seguridad.' },
      { q: '¿Cuál gasta menos batería?', a: 'WireGuard suele ser algo más ligero, pero en el uso diario la diferencia es pequeña.' },
      { q: '¿Puedo dejar que FollowNet elija?', a: 'Sí. Smart Connect elige el protocolo para cada red y cambia si uno falla.' },
      { q: '¿Están ambos disponibles en Free?', a: 'La disponibilidad sigue a tu plan en la app; los protocolos principales están en Free dentro del límite semanal.' },
    ],
  },

  'what-is-kill-switch-vpn': {
    h1: '¿Qué es el kill switch de una VPN y cómo funciona en iPhone y Chrome?',
    lead:
      'Un kill switch es una red de seguridad: si la conexión VPN se cae, impide que el tráfico salga sin protección. Cómo funciona depende de la plataforma. Aquí ves qué significa en el iPhone y en la extensión de FollowNet para Chrome, y cómo configurarlo para que una caída no te exponga.',
    sections: [
      {
        title: 'El problema que resuelve',
        body:
          'Las conexiones VPN pueden caerse: poca cobertura, cambio de red, reinicio del servidor. Durante unos segundos las apps podrían enviar tráfico fuera del túnel por la red local. En un hotspot en el que no confías, eso es justo lo que querías evitar. Un kill switch bloquea el tráfico hasta que vuelve el túnel.',
      },
      {
        title: 'En el ordenador: el Kill Switch de Chrome',
        body:
          'La extensión de FollowNet para Chrome incluye un Kill Switch del navegador. Si está activado, Chrome deja de cargar páginas cuando falla la conexión del proxy, en lugar de pasar en silencio a una conexión directa. Se limita a Chrome: otros navegadores y apps de escritorio no se ven afectados.',
      },
      {
        title: 'En el iPhone: cómo lo gestiona iOS',
        body:
          'iOS gestiona los túneles VPN a nivel de sistema mediante Network Extension. FollowNet se apoya en ese comportamiento del sistema y en las reglas de conexión automática para recuperar el túnel rápido: con «Siempre», la VPN se reinicia sola en cualquier red. No prometemos un interruptor mágico que garantice cero paquetes en cada caso límite de iOS; ninguna VPN de iOS honesta puede hacerlo.',
        image: 'autoconnect',
        imageCaption: '«Siempre» reinicia la VPN en cualquier red.',
      },
      {
        title: 'Ajustes que reducen fugas en el iPhone',
        body:
          'Usa «Siempre» en redes poco fiables. Deja el protocolo en Smart para que un protocolo que falla se sustituya en lugar de dejarte sin protección. En redes difíciles aplica el perfil Restricted, que combina Smart Connect con «Siempre» y el servidor más rápido. Añade un widget a la pantalla de inicio para ver de un vistazo si estás protegido.',
      },
      {
        title: 'Lo que un kill switch no puede hacer',
        body:
          'No evita las fugas que provocas tú: iniciar sesión en cuentas, compartir ubicación o instalar apps de rastreo. Tampoco te mantiene conectado en una red rota; solo impide que el tráfico salga sin protección mientras la VPN se reconecta.',
      },
    ],
    table: {
      title: 'Comportamiento del kill switch por plataforma',
      head: ['', 'FollowNet iOS', 'FollowNet Chrome'],
      rows: [
        ['Alcance', 'Todo el dispositivo mientras está conectado', 'Pestañas de Chrome'],
        ['Mecanismo', 'Network Extension de iOS + conexión automática', 'Ajuste Kill Switch del navegador'],
        ['Si se cae la conexión', 'La conexión automática restablece el túnel', 'Chrome deja de cargar páginas'],
        ['Ajuste recomendado', '«Siempre» o perfil Restricted', 'Kill Switch activado'],
      ],
    },
    steps: {
      title: 'Activa las protecciones',
      items: [
        'iPhone: Ajustes → Conexión automática → Siempre.',
        'iPhone: deja el protocolo en Smart o aplica el perfil Restricted.',
        'Chrome: abre los ajustes de la extensión FollowNet y activa Kill Switch.',
        'Añade el widget de FollowNet a la pantalla de inicio para ver el estado.',
      ],
    },
    bullets: [
      'Un kill switch bloquea el tráfico cuando la VPN se cae',
      'Extensión de Chrome: Kill Switch explícito del navegador',
      'iPhone: Network Extension de iOS más «Siempre»',
      'Smart Connect sustituye automáticamente un protocolo que falla',
      'Ningún kill switch protege de tus propios inicios de sesión y apps',
    ],
    cta: CTA,
    faq: [
      { q: '¿FollowNet tiene kill switch en el iPhone?', a: 'FollowNet usa la gestión de VPN del sistema iOS con conexión automática para restaurar el túnel; el interruptor Kill Switch explícito está en la extensión de Chrome.' },
      { q: '¿Un kill switch me deja sin internet?', a: 'Solo mientras la VPN se reconecta. Si la red en sí está caída, estarás sin conexión de todos modos.' },
      { q: '¿Debo usar siempre un kill switch?', a: 'En redes poco fiables, sí. En casa es opcional.' },
      { q: '¿El Kill Switch de Chrome afecta a otros navegadores?', a: 'No, solo a Chrome con la extensión FollowNet.' },
    ],
  },

  'vpn-not-connecting-iphone': {
    h1: '¿La VPN no conecta en el iPhone? Solución paso a paso',
    lead:
      'Cuando una VPN se niega a conectar, la causa casi siempre es una de cinco: el permiso de iOS, una página de acceso de la Wi‑Fi, el límite de tráfico, una red que bloquea el protocolo o un fallo temporal. Recorre la lista en orden: la mayoría de problemas se resuelven en los tres primeros pasos.',
    sections: [
      {
        title: '1. Comprueba el permiso VPN de iOS',
        body:
          'Si tocaste «No permitir» en el aviso de iOS, o se eliminó la configuración VPN, FollowNet no puede iniciar el túnel. Abre FollowNet y vuelve a tocar Conectar: iOS preguntará otra vez. También puedes mirar en Ajustes de iOS → VPN si está la configuración de FollowNet.',
      },
      {
        title: '2. Completa la página de acceso de la Wi‑Fi',
        body:
          'Hoteles, aeropuertos, trenes y algunas cafeterías exigen iniciar sesión en un portal cautivo antes de que funcione internet. Desconecta la VPN, abre Safari, completa la página, comprueba que carga una web normal y vuelve a conectar.',
      },
      {
        title: '3. Revisa tu límite de tráfico',
        body:
          'En el plan Free, las nuevas conexiones se pausan cuando se agota el límite semanal. Abre Estadísticas para ver lo que queda. Espera a la renovación semanal o pásate a Premium con tráfico ilimitado.',
        image: 'stats',
        imageCaption: 'Estadísticas muestra el límite semanal y el consumo.',
      },
      {
        title: '4. Deja la red en manos de Smart Connect',
        body:
          'Algunas redes bloquean o ralentizan protocolos concretos. Pon el protocolo en Smart para que FollowNet cambie automáticamente. Si sigue fallando, aplica el perfil Restricted o prueba manualmente AmneziaWG, Hysteria2 o VLESS Reality. Prueba también otro servidor: una ubicación puede estar saturada o no disponible temporalmente.',
        image: 'protocol',
        imageCaption: 'Ajustes → Protocolo VPN: Smart es la opción más resistente.',
      },
      {
        title: '5. Descarta un fallo puntual',
        body:
          'Activa y desactiva el modo avión, olvida y vuelve a unirte a la Wi‑Fi o pasa a datos móviles para ver si el problema es la red. Asegúrate de que FollowNet e iOS están actualizados. Como último recurso, elimina la configuración VPN en Ajustes de iOS → VPN y vuelve a conectar en FollowNet para recrearla.',
      },
      {
        title: 'Conectado pero no carga nada',
        body:
          'Si FollowNet muestra Conectado pero las páginas no abren, lo más probable es que la red interfiera con el protocolo. Cambia de protocolo o de servidor y ejecuta Speed Test para confirmar que pasa tráfico. FollowNet comprueba el tráfico real antes de dar una sesión por buena, pero las redes pueden cambiar a mitad de sesión.',
      },
    ],
    steps: {
      title: 'Lista rápida de solución',
      items: [
        'Toca Conectar y permite la configuración VPN si iOS lo pide.',
        'Desconecta, completa la página de acceso de la Wi‑Fi en Safari y reconecta.',
        'Revisa el tráfico semanal restante en Estadísticas (plan Free).',
        'Pon el protocolo en Smart o aplica el perfil Restricted.',
        'Elige otro servidor.',
        'Activa el modo avión o pasa a datos móviles para probar la red.',
        'Actualiza FollowNet e iOS; recrea la configuración VPN si hace falta.',
      ],
    },
    table: {
      title: 'Síntoma y causa probable',
      head: ['Síntoma', 'Causa probable', 'Solución'],
      rows: [
        ['Conectar no hace nada', 'Falta el permiso VPN', 'Permitir el aviso de iOS'],
        ['Funciona en LTE, no en Wi‑Fi', 'Portal cautivo o protocolo bloqueado', 'Completar acceso; usar Smart o Restricted'],
        ['Dejó de funcionar a mitad de semana', 'Límite Free agotado', 'Esperar la renovación o mejorar el plan'],
        ['Conectado pero sin páginas', 'Interferencia con el protocolo', 'Cambiar protocolo o servidor'],
        ['Falla en todas partes', 'Fallo temporal', 'Modo avión, actualizar, recrear configuración'],
      ],
    },
    bullets: [
      'Casi siempre: permiso, página de acceso o límite de tráfico',
      'Smart Connect y el perfil Restricted gestionan redes difíciles',
      'Prueba otro servidor antes de pensar que la app falla',
      'Probar con datos móviles separa problemas de red y de app',
      'Recrear la configuración VPN arregla fallos raros de iOS',
    ],
    cta: CTA,
    faq: [
      { q: '¿Por qué la VPN funciona en LTE pero no en Wi‑Fi?', a: 'Probablemente la Wi‑Fi necesita iniciar sesión o bloquea el protocolo. Completa el acceso y usa Smart Connect.' },
      { q: 'Toqué «No permitir» sin querer. ¿Y ahora?', a: 'Vuelve a tocar Conectar en FollowNet; iOS mostrará el aviso de nuevo.' },
      { q: '¿Sirve reinstalar la app?', a: 'Rara vez hace falta. Recrear la configuración VPN desde Ajustes de iOS → VPN suele lograr lo mismo.' },
      { q: '¿A quién escribo si nada funciona?', a: 'A support@follow-net.com indicando tipo de red, protocolo y la hora en que ocurrió.' },
    ],
  },

  'vpn-slow-iphone': {
    h1: '¿VPN lenta en el iPhone? Cómo encontrar la causa y acelerarla',
    lead:
      'Algo de lentitud con VPN es normal; mucha no. La clave es medir antes de cambiar nada. Esta guía muestra cómo saber si el cuello de botella es la red, el servidor o el protocolo, y qué hacer en cada caso.',
    sections: [
      {
        title: 'Primero, mide',
        body:
          'Desconecta la VPN y haz un test de velocidad para tener tu referencia. Luego conecta FollowNet y ejecuta su Speed Test integrado en la misma red. Compara descarga, subida, latencia y jitter. Si la referencia ya es lenta, el problema es la red, no la VPN.',
        image: 'speedtest',
        imageCaption: 'Speed Test de FollowNet: descarga, subida, latencia, jitter y pérdida.',
      },
      {
        title: 'La distancia al servidor es lo que más pesa',
        body:
          'Cada mil kilómetros de más añaden latencia. Un servidor en otro continente puede convertir una conexión rápida en una lenta. Usa «Ubicación óptima» o elige el servidor más cercano con menor ping de la lista. Elige servidores lejanos solo cuando necesites esa región.',
        image: 'servers',
        imageCaption: 'El ping de cada ubicación te ayuda a elegir un servidor cercano y rápido.',
      },
      {
        title: 'Prueba otro protocolo',
        body:
          'En redes estables WireGuard suele ser el más rápido. Si la red ralentiza el tráfico VPN, WireGuard puede arrastrarse mientras AmneziaWG, Hysteria2 o VLESS Reality rinden mejor. Smart Connect lo hace automáticamente; para comparar a mano, cambia el protocolo en Ajustes y vuelve a medir en el mismo servidor.',
      },
      {
        title: 'Horas punta y redes saturadas',
        body:
          'Por la noche en hoteles, trenes y aeropuertos se comparte el ancho de banda. Una cobertura móvil débil también limita la velocidad con o sin VPN. Si el test muestra mucha pérdida de paquetes, el problema es la señal: acércate al router o a una ventana, o cambia entre Wi‑Fi y LTE.',
      },
      {
        title: 'Llamadas y juegos: mira el jitter',
        body:
          'En videollamadas y juegos online importan más la latencia y el jitter que la descarga. Una conexión de 200 Mbps con jitter alto seguirá dando tirones. Elige el servidor más cercano y WireGuard en redes estables.',
      },
      {
        title: 'Cuando la respuesta es apagar la VPN',
        body:
          'Con LTE débil o en una red de casa de confianza, a veces lo más rápido es no usar VPN. Es física: el cifrado y el desvío por un servidor siempre cuestan algo. «Solo Wi‑Fi» te da protección en hotspots sin afectar a los datos móviles.',
      },
    ],
    steps: {
      title: 'Diagnóstico de velocidad en orden',
      items: [
        'Haz un test de velocidad sin VPN como referencia.',
        'Conecta y ejecuta Speed Test de FollowNet en la misma red.',
        'Cambia a «Ubicación óptima» o al servidor más cercano con ping bajo.',
        'Compara WireGuard con Smart Connect en el mismo servidor.',
        'Si hay mucha pérdida, mejora la señal o cambia entre Wi‑Fi y LTE.',
        'Si la red está saturada, vuelve a medir en un momento más tranquilo.',
      ],
    },
    table: {
      title: 'Qué te dicen los números',
      head: ['Resultado', 'Significado', 'Acción'],
      rows: [
        ['Ya es lento sin VPN', 'El cuello de botella es la red', 'Cambiar de red o esperar'],
        ['Latencia alta solo con VPN', 'Servidor demasiado lejos', 'Elegir un servidor más cercano'],
        ['La descarga cae mucho con VPN', 'Protocolo ralentizado', 'Probar Smart u otro protocolo'],
        ['Jitter o pérdida altos', 'Señal inestable', 'Mejorar la señal, cambiar Wi‑Fi/LTE'],
      ],
    },
    bullets: [
      'Compara siempre con una referencia sin VPN',
      'La distancia al servidor es el factor principal',
      'En redes ralentizadas rinden mejor AmneziaWG, Hysteria2 o VLESS Reality',
      'Para llamadas y juegos el jitter importa más que los Mbps',
      'Algo de sobrecarga es normal e inevitable',
    ],
    cta: CTA,
    faq: [
      { q: '¿Cuánto más lenta debería ser una VPN?', a: 'Con un servidor cercano, a menudo solo un poco. Los servidores lejanos y las redes saturadas aumentan la diferencia.' },
      { q: '¿Premium es más rápido que Free?', a: 'El cifrado es el mismo. Premium da acceso a más ubicaciones, lo que puede significar un servidor más cercano o menos cargado.' },
      { q: '¿Speed Test gasta mi tráfico?', a: 'Sí, descarga y sube datos. En Free, evita ejecutarlo una y otra vez.' },
      { q: '¿Por qué la VPN va rápida en casa y lenta en la cafetería?', a: 'La red de la cafetería es más lenta o ralentiza el tráfico VPN. Prueba Smart Connect y un servidor cercano.' },
    ],
  },

  'captive-portal-vpn-iphone': {
    h1: 'Portales cautivos y VPN en el iPhone: Wi‑Fi de hotel, aeropuerto y tren',
    lead:
      'Un portal cautivo es la página de acceso que algunas Wi‑Fi muestran antes de dejarte navegar. Es el motivo más común por el que una VPN «no funciona» en una Wi‑Fi pública. Aquí ves por qué y el sencillo orden de pasos que evita el problema.',
    sections: [
      {
        title: 'Qué es un portal cautivo',
        body:
          'Hoteles, aeropuertos, trenes, cafeterías y recintos de congresos suelen interceptar tu primera petición web y mostrar una página: número de habitación, aceptar condiciones, ver un anuncio o escribir un correo. Hasta que la completas, la red bloquea el acceso normal a internet. iOS suele detectarlo y abre automáticamente una pequeña ventana de acceso.',
      },
      {
        title: 'Por qué choca con la VPN',
        body:
          'Una VPN quiere enviarlo todo por un túnel cifrado hasta su servidor. Pero antes de completar el portal, la red bloquea esa conexión. El resultado parece una VPN que no conecta, o que conecta pero no carga nada. No hay nada roto: la red simplemente aún no te ha dejado pasar.',
      },
      {
        title: 'El orden correcto',
        body:
          'Únete a la red con la VPN desactivada, completa el portal en la ventana de iOS o en Safari, comprueba que carga una web normal y solo entonces conecta FollowNet. Si usas la conexión automática en Wi‑Fi, iniciará la VPN cuando la red sea utilizable.',
        image: 'autoconnect',
        imageCaption: 'La conexión automática inicia la VPN en Wi‑Fi cuando la red ya es utilizable.',
      },
      {
        title: 'Cuando el portal no aparece',
        body:
          'A veces iOS no abre la ventana de acceso. Abre Safari y entra en una dirección http sencilla (por ejemplo neverssl.com): la red te redirigirá al portal. Si ya tenías la VPN en marcha, desconéctala antes.',
      },
      {
        title: 'Portales que cierran la sesión',
        body:
          'Muchas redes piden volver a iniciar sesión al cabo de unas horas o cada día. Si en el hotel la VPN deja de pasar tráfico de repente, mira si ha vuelto el portal. Inicia sesión de nuevo y reconecta. Es la política de la red, no un fallo de la VPN.',
      },
      {
        title: 'Ahorra tiempo en redes que repites',
        body:
          'Para un hotel o un operador de trenes que usas a menudo, guarda un perfil de red propio con el protocolo, el DNS y el servidor que funcionan allí. Tras el portal, aplícalo con un toque.',
      },
    ],
    steps: {
      title: 'Rutina con portal cautivo',
      items: [
        'Asegúrate de que FollowNet está desconectado.',
        'Únete a la red Wi‑Fi.',
        'Completa la página de acceso (ventana de iOS o Safari).',
        'Abre cualquier web normal para confirmar el acceso.',
        'Conecta FollowNet o deja que lo haga la conexión automática.',
        'Si más tarde se corta el tráfico, comprueba si el portal pide un nuevo acceso.',
      ],
    },
    bullets: [
      'El portal debe completarse antes de conectar la VPN',
      'Conecta la VPN solo cuando cargue una web normal',
      'neverssl.com ayuda a que aparezca un portal oculto',
      'Algunas redes exigen iniciar sesión cada día',
      'Guarda un perfil para las redes que usas a menudo',
    ],
    cta: CTA,
    faq: [
      { q: '¿Por qué no aparece la página de acceso?', a: 'La VPN o una conexión guardada pueden bloquearla. Desconecta la VPN y abre una web http sencilla en Safari.' },
      { q: '¿Es segura la propia página del portal?', a: 'Viaja antes de que la VPN esté activa, así que no introduzcas nada sensible aparte de lo que pide la red.' },
      { q: '¿FollowNet puede conectarse solo tras el portal?', a: 'Sí, con «Solo Wi‑Fi» o «Siempre» se inicia en cuanto la red deja pasar tráfico.' },
      { q: 'Ayer la VPN funcionaba en este hotel, ¿por qué hoy no?', a: 'Probablemente caducó el acceso al portal. Vuelve a iniciar sesión y reconecta.' },
    ],
  },

  'vless-reality-ios': {
    h1: 'VLESS Reality en el iPhone: qué es y cuándo lo usa FollowNet',
    lead:
      'VLESS Reality es un transporte VPN más reciente diseñado para parecerse al tráfico web cifrado normal. FollowNet lo incluye junto a WireGuard, IKEv2, AmneziaWG e Hysteria2. Esta guía explica qué hace distinto, cuándo ayuda y por qué no siempre es la opción más rápida.',
    sections: [
      {
        title: 'Qué es VLESS Reality',
        body:
          'VLESS es un protocolo de transporte ligero; Reality es una técnica que hace que la conexión se parezca a una sesión TLS (HTTPS) normal con una web real. Para una red que analiza patrones de tráfico, la conexión se parece más a la navegación habitual que a un túnel VPN típico.',
      },
      {
        title: 'Por qué existe',
        body:
          'Algunas redes reconocen y ralentizan protocolos VPN clásicos como WireGuard o IKEv2, a veces incluso los modificados. En esas condiciones un túnel puede mostrar «Conectado» y aun así dejar pasar poco o ningún tráfico. Un transporte que se confunde con el tráfico web habitual ofrece otro camino cuando los habituales se atascan.',
      },
      {
        title: 'Cómo lo usa FollowNet',
        body:
          'Con el protocolo en Smart, FollowNet usa el contexto de red y las alternativas para decidir cuándo merece la pena probar VLESS Reality. También puedes elegirlo manualmente en Ajustes → Protocolo VPN o aplicar el perfil Restricted, que mantiene activa toda la escalera de Smart Connect. FollowNet verifica que pasa tráfico real antes de dar la sesión por buena.',
        image: 'protocol',
        imageCaption: 'Ajustes → Protocolo VPN: Smart puede usar VLESS Reality cuando hace falta.',
      },
      {
        title: 'Cuándo no usarlo',
        body:
          'En una red doméstica tranquila VLESS Reality rara vez es lo más rápido: en velocidad y latencia suele ganar WireGuard. Usa VLESS Reality cuando otros protocolos fallen o vayan mal, no como opción por defecto en todas partes. Su disponibilidad también depende de los servidores que lo admitan en tu plan.',
      },
      {
        title: 'Comprueba que ayuda de verdad',
        body:
          'Tras cambiar, carga algunas páginas reales y ejecuta Speed Test en lugar de fiarte solo del color del estado. Compara con Smart y WireGuard en el mismo servidor. Si en una red concreta VLESS Reality es claramente mejor, guárdalo en un perfil de red propio para ese lugar.',
        image: 'speedtest',
        imageCaption: 'Confirma con Speed Test que el tráfico pasa de verdad.',
      },
    ],
    table: {
      title: 'Dónde encaja VLESS Reality',
      head: ['Protocolo', 'Punto fuerte', 'Mejor uso'],
      rows: [
        ['WireGuard', 'Velocidad, baja latencia', 'Redes estables de casa y oficina'],
        ['IKEv2', 'Reconexión suave', 'Cambios entre Wi‑Fi y LTE'],
        ['AmneziaWG', 'WireGuard con patrón alterado', 'Redes que ralentizan WireGuard'],
        ['Hysteria2', 'Aguanta la pérdida de paquetes', 'Enlaces con pérdidas o saturados'],
        ['VLESS Reality', 'Se parece a HTTPS normal', 'Cuando otros protocolos se atascan'],
      ],
    },
    steps: {
      title: 'Cómo usar VLESS Reality',
      items: [
        'Deja el protocolo en Smart y que FollowNet decida, o',
        'aplica el perfil de red Restricted en redes difíciles, o',
        'elige VLESS Reality manualmente en Ajustes → Protocolo VPN.',
        'Carga páginas reales y ejecuta Speed Test para confirmar que ayuda.',
        'Guarda un perfil propio para las redes donde funcione mejor.',
      ],
    },
    bullets: [
      'Diseñado para parecerse al tráfico web cifrado normal',
      'Útil cuando los protocolos clásicos se ralentizan o atascan',
      'Smart Connect y el perfil Restricted pueden usarlo automáticamente',
      'No es el más rápido en redes tranquilas: suele ganar WireGuard',
      'Confírmalo siempre con páginas reales y Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: '¿VLESS Reality es más seguro que WireGuard?', a: 'Ambos cifran tu tráfico. VLESS Reality se diferencia en cómo se ve la conexión en la red, no en ser «más seguro».' },
      { q: '¿Debo usarlo siempre?', a: 'No. Usa Smart y deja que VLESS Reality entre cuando otros protocolos tengan problemas.' },
      { q: '¿VLESS Reality está en Free?', a: 'Depende de los servidores y de tu plan, como se muestra en la app.' },
      { q: '¿Garantiza el acceso en cualquier sitio?', a: 'Ningún protocolo puede. Mejora las probabilidades en redes difíciles y debe usarse de acuerdo con las leyes locales.' },
    ],
  },

  'vpn-free-weekly-limit': {
    h1: 'Tráfico semanal de FollowNet Free: cómo funciona el límite',
    lead:
      'FollowNet Free es una VPN completa con un único límite honesto: un tráfico semanal que se muestra en la app. Aquí ves qué cuenta, cuándo se renueva, cómo hacer que dure y qué pasa cuando llegas al tope.',
    sections: [
      {
        title: 'Semanal, no diario',
        body:
          'El tráfico Free se cuenta por semana, lo que encaja mejor con la vida real que un tope diario: un día de viaje puede gastar más y uno tranquilo, menos. El límite actual y lo que has usado aparecen en la app. Las cifras exactas pueden cambiar con la configuración del plan, así que manda siempre el contador de la app.',
        image: 'stats',
        imageCaption: 'Estadísticas: datos usados esta semana y límite semanal.',
      },
      {
        title: 'Qué cuenta',
        body:
          'Cuenta todo el tráfico que pasa por el túnel VPN: navegación, vídeo, música, actualizaciones de apps, copias en la nube y el Speed Test integrado. El tráfico con la VPN apagada no cuenta. Las comprobaciones de conexión de Smart Connect son mínimas pero reales.',
      },
      {
        title: 'Cómo hacer que dure',
        body:
          'El vídeo es lo que más consume, así que descarga películas y series en una red de confianza antes de viajar. Usa «Solo Wi‑Fi» para que la VPN funcione en los hotspots, donde más importa, pero no con datos móviles en casa. Pausa la subida de Fotos de iCloud y las actualizaciones grandes con la VPN activa, y ejecuta Speed Test solo cuando lo necesites.',
        image: 'autoconnect',
        imageCaption: '«Solo Wi‑Fi» concentra el tráfico Free en los hotspots públicos.',
      },
      {
        title: 'Qué incluye Free',
        body:
          'Free no es una demo recortada. Tienes los mismos protocolos, Smart Connect, ajustes de DNS, perfiles de red, conexión automática, widgets y Speed Test que en Premium, además de las ubicaciones Free. El contador semanal es la diferencia principal.',
      },
      {
        title: 'Cuando llegas al límite',
        body:
          'Las nuevas conexiones se pausan hasta la renovación semanal, y los widgets muestran que se ha agotado el tráfico en lugar de un engañoso «Conectado». Puedes esperar la renovación o pasarte a Premium: tráfico ilimitado, más ubicaciones y hasta cinco dispositivos.',
      },
    ],
    table: {
      title: 'Qué consume más tráfico',
      head: ['Actividad', 'Consumo', 'Consejo'],
      rows: [
        ['Vídeo en HD', 'Muy alto', 'Descargar con antelación'],
        ['Videollamadas', 'Alto', 'Solo audio cuando sea posible'],
        ['Actualizaciones y copias', 'Alto, a ráfagas', 'Hacerlas en Wi‑Fi de confianza sin VPN'],
        ['Música en streaming', 'Moderado', 'Descargar listas'],
        ['Navegación, correo, mensajería', 'Bajo', 'Ideal para Free'],
      ],
    },
    steps: {
      title: 'Controla tu tráfico',
      items: [
        'Abre Estadísticas para ver el tráfico usado y el restante.',
        'Activa «Solo Wi‑Fi».',
        'Descarga vídeos y archivos grandes antes de viajar.',
        'Evita repetir Speed Test.',
        'Pásate a Premium si llegas al límite con frecuencia.',
      ],
    },
    bullets: [
      'Un límite semanal, visible en la app',
      'Cuenta todo el tráfico del túnel, incluido Speed Test',
      'Las mismas funciones que Premium salvo el contador y las ubicaciones',
      'El vídeo consume más; navegar y chatear, muy poco',
      'Premium elimina el límite y añade ubicaciones y dispositivos',
    ],
    cta: CTA,
    faq: [
      { q: '¿Cuánto tráfico incluye Free?', a: 'El límite semanal actual aparece en la app. Puede cambiar con la configuración del plan, así que consulta Estadísticas.' },
      { q: '¿Cuándo se renueva?', a: 'Cada semana. La app muestra tu consumo de la semana en curso.' },
      { q: '¿Cuenta el tráfico sin VPN?', a: 'No. Solo cuenta el tráfico que pasa por el túnel de FollowNet.' },
      { q: '¿Puedo añadir tráfico sin suscribirme?', a: 'La forma de quitar el límite es Premium, mensual o anual.' },
    ],
  },

  'vpn-premium-unlimited': {
    h1: 'FollowNet Premium: tráfico ilimitado, más ubicaciones y cinco dispositivos',
    lead:
      'Premium es para quien usa una VPN cada día. Elimina el límite semanal de Free, desbloquea ubicaciones Premium, cubre hasta cinco dispositivos y quita los anuncios. Aquí ves exactamente qué cambia, qué se mantiene y cómo funciona el pago.',
    sections: [
      {
        title: 'Qué añade Premium',
        body:
          'Tráfico ilimitado sin tope semanal, acceso a todas las ubicaciones Premium, una suscripción para hasta cinco dispositivos —iPhone, iPad y la extensión de Chrome— y sin anuncios. Todo lo que ya conoces de Free sigue exactamente igual.',
        image: 'premium',
        imageCaption: 'Premium: tráfico ilimitado, todos los servidores Premium, Smart Connect y hasta cinco dispositivos.',
      },
      {
        title: 'Lo que no cambia',
        body:
          'El cifrado, los protocolos y Smart Connect son idénticos en Free y Premium. Premium trata de capacidad y opciones, no de «más seguridad». Si alguien te dice que un plan de pago usa «doble cifrado militar», es marketing.',
      },
      {
        title: 'Planes y pago',
        body:
          'Premium se vende en App Store como suscripción mensual o anual; la anual sale más barata por mes e incluye una breve prueba gratuita que aparece en la ventana de pago de Apple. Apple gestiona el cobro, y puedes administrar o cancelar la suscripción en cualquier momento desde los ajustes de tu Apple ID.',
      },
      {
        title: 'Premium en varios dispositivos',
        body:
          'Inicia sesión con el mismo correo en el iPad y en la extensión de Chrome, o vincula un dispositivo escaneando un código QR desde Ajustes → Otros dispositivos. Hasta cinco dispositivos comparten una suscripción. En un iPhone nuevo, usa «Restaurar compras» para reactivar Premium.',
        image: 'settings',
        imageCaption: 'Ajustes → Otros dispositivos: vincula otro teléfono o Chrome con un código QR.',
      },
      {
        title: 'Quién debería mejorar',
        body:
          'Mejora si llegas a menudo al límite semanal, ves vídeos fuera de casa, teletrabajas por Wi‑Fi pública, necesitas una ubicación Premium concreta o quieres un plan para los dispositivos de toda la familia. Si Free te basta para sesiones ocasionales en cafeterías, no hace falta pagar.',
      },
      {
        title: 'Lo que Premium no puede prometer',
        body:
          'Ninguna VPN puede garantizar el acceso a todos los catálogos de streaming ni saltarse las leyes locales. Premium te da más capacidad y ubicaciones; cómo se comporten servicios concretos depende de ellos.',
      },
    ],
    table: {
      title: 'Free y Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Tráfico', 'Límite semanal', 'Ilimitado'],
        ['Ubicaciones', 'Ubicaciones Free', 'Free + Premium'],
        ['Dispositivos', 'Dentro del límite Free', 'Hasta 5 con una suscripción'],
        ['Protocolos, Smart Connect, DNS', 'Incluidos', 'Incluidos'],
        ['Anuncios', 'Pueden aparecer en algunas regiones', 'Ninguno'],
        ['Pago', '—', 'Mensual o anual en App Store'],
      ],
    },
    steps: {
      title: 'Mejorar el plan y cambiar de dispositivo',
      items: [
        'En la app FollowNet para iOS, abre la pantalla Premium.',
        'Elige mensual o anual y confirma con tu Apple ID.',
        'Inicia sesión en el iPad o en Chrome con el mismo correo o escanea el código QR.',
        'En un iPhone nuevo, toca «Restaurar compras».',
        'Gestiona o cancela cuando quieras en las suscripciones de tu Apple ID.',
      ],
    },
    bullets: [
      'Tráfico ilimitado y todas las ubicaciones Premium',
      'Hasta cinco dispositivos con una suscripción',
      'Sin anuncios',
      'El mismo cifrado y protocolos que Free',
      'Pago y cancelación a través de App Store',
    ],
    cta: CTA,
    faq: [
      { q: '¿Puedo probar Premium antes de pagar?', a: 'El plan anual incluye una breve prueba gratuita, que aparece en la ventana de pago de Apple antes de confirmar.' },
      { q: '¿Cómo cancelo?', a: 'En Ajustes de iOS → tu nombre → Suscripciones. Mantienes Premium hasta el final del periodo pagado.' },
      { q: '¿Premium funciona en la extensión de Chrome?', a: 'Sí, inicia sesión con la misma cuenta. Chrome cuenta como uno de los cinco dispositivos.' },
      { q: '¿Premium hará mi VPN más rápida?', a: 'El cifrado es el mismo, pero más ubicaciones pueden significar un servidor más cercano o menos cargado.' },
    ],
  },

  'vpn-battery-iphone': {
    h1: 'VPN y batería del iPhone: qué gasta energía de verdad y cómo ahorrarla',
    lead:
      'Una VPN consume algo de batería, pero normalmente mucho menos de lo que se cree. El gasto real viene de la radio, la señal débil y las redes que cortan el túnel una y otra vez. Esta guía explica cómo medir el impacto en tu iPhone y configurar FollowNet para que la protección cueste la menor energía posible.',
    sections: [
      {
        title: 'Adónde va realmente la energía',
        body:
          'El cifrado es barato en los chips actuales del iPhone. Lo que consume es mantener activa la radio Wi‑Fi o móvil, rehacer el túnel tras cortes y reintentar en redes con pérdidas. Una sesión WireGuard estable en una buena Wi‑Fi doméstica apenas aparece en las estadísticas de batería; el mismo teléfono con LTE débil en un tren se descarga antes, con o sin VPN.',
      },
      {
        title: 'Revisa los ajustes de batería antes de culpar a la VPN',
        body:
          'Abre Ajustes → Batería y compara las últimas 24 horas y 10 días. iOS suele atribuir el uso de la VPN al sistema o a la app que generó el tráfico. Compara un día con VPN y otro parecido sin ella, en los mismos trayectos. Un día raro con mala cobertura dice más de la red que del túnel.',
      },
      {
        title: 'Conexión automática: protege hotspots, no cada minuto',
        body:
          'Si necesitas protección sobre todo en cafeterías, hoteles y aeropuertos, pon la Conexión automática en «Solo Wi‑Fi». La VPN se activará en redes no fiables y quedará apagada con datos móviles, donde la radio ya es el mayor consumidor. Deja «Siempre» para cuando de verdad necesites el túnel en todas partes.',
        image: 'autoconnect',
        imageCaption: 'Conexión automática en FollowNet: «Solo Wi‑Fi» o «Siempre».',
      },
      {
        title: 'Elige el protocolo según la red',
        body:
          'En redes tranquilas WireGuard es la opción más ligera: negociaciones cortas, poca sobrecarga y recuperación rápida tras el reposo. En redes que interfieren con el tráfico VPN, un túnel que se reconecta sin parar gasta mucha más energía que un protocolo algo más pesado que se mantiene estable. Smart Connect elige una opción que funcione en la red actual para que el teléfono no queme batería en reintentos infinitos.',
        image: 'protocol',
        imageCaption: 'Ajustes de protocolo: Smart, WireGuard, IKEv2, AmneziaWG y otros.',
      },
      {
        title: 'La distancia y la señal pesan más que el cifrado',
        body:
          'Con un servidor lejano la misma descarga tarda más y la radio permanece activa más tiempo. Usa «Ubicación óptima» o el servidor más cercano con ping bajo. Con señal móvil débil cada paquete cuesta más energía; si estás en una red de confianza con mala cobertura, desconectar la VPN es un compromiso razonable.',
      },
      {
        title: 'Modo de bajo consumo y reglas en segundo plano',
        body:
          'El modo de bajo consumo limita la actividad en segundo plano, pero iOS mantiene activo el túnel VPN. Si necesitas estirar el último 10–20 %, desconecta en redes de confianza y vuelve a conectar en Wi‑Fi público. FollowNet no mantiene tareas extra en segundo plano para inflar estadísticas.',
      },
    ],
    steps: {
      title: 'Configuración que cuida la batería en cinco minutos',
      items: [
        'Mira Ajustes → Batería para conocer tu punto de partida real.',
        'Pon la Conexión automática en «Solo Wi‑Fi» si buscas sobre todo proteger hotspots.',
        'Deja el protocolo en Smart o fija WireGuard en la Wi‑Fi de casa.',
        'Usa «Ubicación óptima» o el servidor más cercano con ping bajo.',
        'Con señal débil en redes de confianza, desconecta en lugar de pelear con la radio.',
      ],
    },
    table: {
      title: 'Escenarios típicos y su coste de batería',
      head: ['Escenario', 'Impacto en batería', 'Qué hacer'],
      rows: [
        ['Wi‑Fi de casa, WireGuard, servidor cercano', 'Mínimo', 'Dejarlo así'],
        ['Wi‑Fi de cafetería con «Solo Wi‑Fi»', 'Bajo', 'Opción recomendada'],
        ['«Siempre» con LTE débil', 'Notable', '«Solo Wi‑Fi» o desconectar en redes de confianza'],
        ['Red que corta el túnel una y otra vez', 'Alto', 'Smart Connect u otro protocolo'],
      ],
    },
    bullets: [
      'El cifrado es barato; la radio y la señal débil son caras',
      '«Solo Wi‑Fi» protege hotspots sin gastar en datos móviles',
      'WireGuard es el protocolo más ligero en redes estables',
      'Los bucles de reconexión cuestan más que cualquier elección de protocolo',
      'Compara la batería durante varios días parecidos',
    ],
    cta: CTA,
    faq: [
      { q: '¿La VPN agota la batería del iPhone?', a: 'Un poco. En Wi‑Fi estable con un servidor cercano la diferencia suele ser pequeña; la señal débil y las reconexiones constantes la aumentan.' },
      { q: '¿Qué protocolo gasta menos batería?', a: 'En redes estables, WireGuard. En redes que interfieren con las VPN, el más eficiente es el que se mantiene conectado, que es lo que busca Smart Connect.' },
      { q: '¿Debo tener la VPN siempre activa?', a: 'Solo si la necesitas en todas partes. Para cafeterías y hoteles, «Solo Wi‑Fi» es un buen equilibrio.' },
      { q: '¿Funciona la VPN en modo de bajo consumo?', a: 'Sí. iOS mantiene el túnel; el modo de bajo consumo solo limita otra actividad en segundo plano.' },
    ],
  },

  'vpn-iphone-shortcuts': {
    h1: 'VPN en Atajos de Apple: conecta FollowNet con un toque, Siri o una automatización',
    lead:
      'FollowNet funciona con la app Atajos: puedes conectar, desconectar o aplicar un perfil de red sin abrir la app. Esta guía muestra atajos prácticos para el trabajo, los viajes y la noche, y cómo encajan con la Conexión automática.',
    sections: [
      {
        title: 'Qué puede hacer FollowNet en Atajos',
        body:
          'La app añade tres acciones: Conectar, Desconectar y Aplicar perfil. Aplicar perfil cambia a uno de los preajustes —Smart, Public Wi‑Fi, Travel, Restricted— o a un perfil que hayas creado tú. Las acciones se ejecutan desde la app Atajos, un icono en la pantalla de inicio, Siri, el botón de Acción de los iPhone recientes o una automatización personal.',
      },
      {
        title: 'Atajos frente a Conexión automática',
        body:
          'La Conexión automática sigue reglas de red, por ejemplo activarse en Wi‑Fi no fiables. Los atajos son acciones deliberadas o automatizaciones según hora, lugar o modo de concentración. Se complementan: la Conexión automática cubre los hotspots por sí sola y un atajo resuelve lo que las reglas no pueden adivinar, como empezar a trabajar o llegar al aeropuerto.',
        image: 'autoconnect',
        imageCaption: 'La Conexión automática gestiona las redes; los Atajos, todo lo demás.',
      },
      {
        title: 'Receta: concentración «Trabajo»',
        body:
          'Crea una automatización personal: cuando se active la concentración «Trabajo», Aplicar perfil → tu perfil de trabajo y luego Conectar. Cuando termine, Desconectar. Así el túnel sigue tu agenda sin un solo toque.',
      },
      {
        title: 'Receta: llegada al aeropuerto o al hotel',
        body:
          'Usa una automatización por ubicación para la terminal o la dirección del hotel: Aplicar perfil → Travel y luego Conectar. El perfil Travel está pensado para redes públicas inestables y portales de acceso, así que no tienes que recordar ajustes con la maleta en la mano.',
      },
      {
        title: 'Receta: botón de Acción y Siri',
        body:
          'Asigna un atajo «Conectar FollowNet» al botón de Acción o pide a Siri que lo ejecute por su nombre. Es la forma más rápida de activar la VPN antes de abrir una app sensible en Wi‑Fi público.',
      },
      {
        title: 'Permisos y límites',
        body:
          'La primera vez que se ejecuta un atajo, iOS puede pedir permiso: apruébalo una vez. Los atajos no pueden saltarse una configuración VPN que eliminaste o denegaste en Ajustes. En Free, si se agotó el tráfico semanal, Conectar no iniciará el túnel hasta que se reinicie la semana o pases a Premium.',
      },
    ],
    steps: {
      title: 'Crea tu primer atajo de VPN',
      items: [
        'Abre la app Atajos y toca +.',
        'Busca FollowNet y añade Aplicar perfil y después Conectar.',
        'Pon un nombre al atajo, por ejemplo «Wi‑Fi seguro».',
        'Ejecútalo una vez y aprueba el permiso.',
        'Opcional: añádelo a la pantalla de inicio, al botón de Acción o a una automatización.',
      ],
    },
    table: {
      title: 'Ideas listas para usar',
      head: ['Disparador', 'Acciones', 'Por qué'],
      rows: [
        ['Concentración «Trabajo» activa', 'Aplicar perfil → Conectar', 'El túnel sigue tu agenda'],
        ['Llegada al aeropuerto', 'Aplicar Travel → Conectar', 'Listo para Wi‑Fi público'],
        ['Botón de Acción', 'Conectar', 'Una pulsación antes de una app sensible'],
        ['Concentración «Sueño»', 'Desconectar', 'Sin túnel cuando no hace falta'],
      ],
    },
    bullets: [
      'Tres acciones: Conectar, Desconectar y Aplicar perfil',
      'Funciona con Siri, el botón de Acción y automatizaciones',
      'Complementa la Conexión automática, no la sustituye',
      'Perfiles: Smart, Public Wi‑Fi, Travel, Restricted y los tuyos',
      'El límite semanal de Free sigue aplicándose',
    ],
    cta: CTA,
    faq: [
      { q: '¿Puedo activar la VPN con Siri?', a: 'Sí. Crea un atajo con la acción Conectar de FollowNet y ejecútalo por su nombre con Siri.' },
      { q: '¿Hay que abrir la app para que funcione?', a: 'No. Las acciones se ejecutan en segundo plano; basta con tener la app instalada y la configuración VPN permitida.' },
      { q: '¿Un atajo puede elegir servidor?', a: 'Los atajos aplican perfiles y conectan. Elige el servidor o «Ubicación óptima» en la app; el atajo usará esa elección.' },
      { q: '¿Las automatizaciones se ejecutan sin confirmación?', a: 'En la mayoría de disparadores iOS permite desactivar «Preguntar antes de ejecutar». Algunos disparadores de ubicación pueden mostrar igualmente una notificación.' },
    ],
  },

  'vpn-for-students': {
    h1: 'VPN para estudiantes en iPhone: Wi‑Fi del campus, residencias y un plan económico',
    lead:
      'Los estudiantes pasan la mayor parte del día en redes compartidas: Wi‑Fi del campus, residencias, bibliotecas y cafeterías. Una VPN cifra ese tráfico de camino al servidor. Esta guía explica cuándo merece la pena, cómo empezar con Free y cómo respetar las normas de tu centro.',
    sections: [
      {
        title: 'Por qué las redes compartidas son el principal riesgo',
        body:
          'Las redes del campus y de las residencias conectan cientos de dispositivos desconocidos. La mayor parte del tráfico ya va por HTTPS, pero una VPN añade otra capa: la red local solo ve una conexión cifrada con el servidor VPN, no qué servicios usas. Esto importa sobre todo en hotspots abiertos de bibliotecas y cafeterías sin contraseña.',
      },
      {
        title: 'Empieza con Free',
        body:
          'FollowNet Free incluye una cantidad semanal de tráfico, suficiente para mensajería, correo, banca y navegación ocasional en Wi‑Fi público. El contador de la app muestra cuánto queda y cuándo se reinicia la semana. Para clases en vídeo, descargas grandes y streaming, usa redes de confianza o plantéate Premium.',
        image: 'stats',
        imageCaption: 'La app muestra el tráfico semanal y cuándo se reinicia.',
      },
      {
        title: 'Cuando la Wi‑Fi del campus interfiere con la VPN',
        body:
          'Algunas redes institucionales filtran protocolos VPN. Deja el protocolo en Smart: Smart Connect prueba distintos protocolos y se queda con el que realmente pasa tráfico. Si la red sigue bloqueando el túnel, respétalo: es la política del propietario de la red, y los datos móviles siguen siendo una opción.',
        image: 'protocol',
        imageCaption: 'Smart Connect elige un protocolo que funciona en la red actual.',
      },
      {
        title: 'Comparte Premium con cabeza',
        body:
          'Una cuenta Premium funciona en hasta cinco dispositivos, incluidos iPhone, iPad y la extensión de Chrome. A veces los compañeros de piso comparten un plan, pero los dispositivos de una cuenta la usan en común: compártela solo con personas de confianza y elimina los dispositivos que ya no uses.',
        image: 'premium',
        imageCaption: 'Premium: más ubicaciones y hasta cinco dispositivos por cuenta.',
      },
      {
        title: 'Las normas siguen vigentes',
        body:
          'Una VPN no cambia la política de uso aceptable de tu centro. No la uses para acceder a sistemas a los que no tienes permiso, ni nunca durante exámenes donde esté prohibida. Una VPN protege tu conexión; no es una herramienta para saltarse normas académicas.',
      },
      {
        title: 'Antes de volver a casa o de un intercambio',
        body:
          'Instala y prueba FollowNet antes de salir. En el extranjero, la Wi‑Fi de hoteles y albergues es el lugar típico donde ayudan el perfil Travel y «Solo Wi‑Fi». Asegúrate de saber cambiar de protocolo si una red se comporta de forma extraña.',
      },
    ],
    steps: {
      title: 'Configuración para estudiantes',
      items: [
        'Instala FollowNet e inicia sesión con el código del correo.',
        'Activa la Conexión automática en «Solo Wi‑Fi» para el campus y las cafeterías.',
        'Deja el protocolo en Smart.',
        'Vigila el contador semanal si usas Free.',
        'Lee una vez la política de red de tu centro.',
      ],
    },
    table: {
      title: 'Dónde ayuda una VPN en el campus',
      head: ['Lugar', 'Riesgo', 'Recomendación'],
      rows: [
        ['Wi‑Fi abierta de biblioteca o cafetería', 'Alto', 'Conectar siempre'],
        ['Red de la residencia', 'Medio', '«Solo Wi‑Fi»'],
        ['Wi‑Fi del campus con inicio de sesión', 'Medio', 'Conectar tras iniciar sesión'],
        ['Datos móviles', 'Bajo', 'Opcional'],
      ],
    },
    bullets: [
      'Las redes compartidas son la principal razón para usar VPN en el campus',
      'El tráfico semanal de Free cubre mensajería y navegación',
      'Smart Connect se adapta a redes que interfieren con las VPN',
      'Premium cubre hasta cinco dispositivos por cuenta',
      'Las normas de red del centro siguen aplicándose',
    ],
    cta: CTA,
    faq: [
      { q: '¿Basta Free para un estudiante?', a: 'Para mensajería, correo y navegación en Wi‑Fi público, normalmente sí. El vídeo y las descargas grandes agotan rápido el límite semanal.' },
      { q: '¿Se puede usar una VPN en el campus?', a: 'Usar una VPN suele ser legal, pero el propietario de la red fija sus normas. Sigue la política de tu centro.' },
      { q: '¿Puedo compartir Premium con mis compañeros de piso?', a: 'Una cuenta funciona en hasta cinco dispositivos. Compártela solo con personas de confianza: es la misma cuenta.' },
      { q: '¿Por qué la VPN no conecta en la Wi‑Fi del campus?', a: 'Algunas redes filtran protocolos VPN. Prueba Smart Connect; si sigue bloqueada, es la política de la red.' },
    ],
  },

  'vpn-for-banking-apps': {
    h1: 'VPN para apps bancarias en iPhone: Wi‑Fi público más seguro, no un sustituto de la seguridad del banco',
    lead:
      'Abrir la app del banco en la Wi‑Fi de una cafetería o un hotel es justo la situación en la que una VPN ayuda: cifra el camino entre tu iPhone y el servidor VPN. Pero no sustituye a Face ID, los códigos de un solo uso ni los sistemas antifraude del banco. Así se usan juntos sin provocar verificaciones extra.',
    sections: [
      {
        title: 'Qué aporta una VPN a la banca',
        body:
          'Las apps bancarias ya usan HTTPS y verificación de certificados. Una VPN añade protección a nivel de red: en Wi‑Fi público, el dueño del hotspot y otros usuarios solo ven un túnel cifrado, no qué banco o servicio visitas. También reduce el riesgo de hotspots falsos que imitan el nombre de la red de una cafetería.',
      },
      {
        title: 'Lo que una VPN no puede hacer',
        body:
          'Una VPN no protege contra enlaces de phishing, llamadas falsas «del banco» ni personas que conocen tu código de un solo uso. No compartas nunca los códigos ni instales apps a petición de quien te llama. Las funciones de seguridad del banco y tu prudencia siguen siendo la defensa principal.',
      },
      {
        title: 'Por qué el banco puede pedir una verificación extra',
        body:
          'Los bancos vigilan los inicios de sesión inusuales. Un acceso desde un país o centro de datos desconocido puede activar un código SMS o un bloqueo temporal. Elige un servidor en tu propio país o la ubicación más cercana: parece un uso normal y mantiene baja la latencia.',
        image: 'servers',
        imageCaption: 'Un servidor cercano hace que el acceso al banco parezca habitual.',
      },
      {
        title: 'Si la app del banco no funciona con la VPN',
        body:
          'Algunos bancos restringen las conexiones VPN en sus apps. En ese caso sigue la política del banco: desconecta FollowNet, pasa de la Wi‑Fi pública a los datos móviles y completa la operación. No ayudamos a saltarse los controles de seguridad de los bancos.',
      },
      {
        title: 'Rutina segura en Wi‑Fi público',
        body:
          'Activa la Conexión automática en «Solo Wi‑Fi» para que el túnel ya esté listo al unirte a un hotspot. Espera a ver «Conectado», abre la app del banco y desbloquéala con Face ID. Evita confirmar pagos grandes en redes desconocidas si tienes datos móviles.',
        image: 'connect',
        imageCaption: 'Espera a «Conectado» antes de abrir la app del banco.',
      },
    ],
    steps: {
      title: 'Banca en Wi‑Fi público paso a paso',
      items: [
        'Activa en FollowNet la Conexión automática «Solo Wi‑Fi».',
        'Elige «Ubicación óptima» o un servidor en tu país.',
        'Únete a la Wi‑Fi y espera a «Conectado».',
        'Abre la app del banco y desbloquéala con Face ID.',
        'Si el banco bloquea la VPN, desconéctala y usa datos móviles.',
      ],
    },
    table: {
      title: 'Quién protege de qué',
      head: ['Amenaza', 'VPN', 'Banco / tú'],
      rows: [
        ['Espionaje en Wi‑Fi público', 'Cifra el túnel', '—'],
        ['Hotspot falso', 'Reduce el riesgo', 'Comprueba el nombre de la red'],
        ['Enlace o llamada de phishing', 'No', 'Nunca compartas códigos'],
        ['Contraseña robada', 'No', 'Face ID, 2FA, alertas del banco'],
      ],
    },
    bullets: [
      'Una VPN protege el camino de red en Wi‑Fi público',
      'Un servidor en tu país evita verificaciones extra',
      'Face ID y los códigos de un solo uso siguen siendo esenciales',
      'Si el banco restringe las VPN, sigue su política',
      'Mejor datos móviles para pagos grandes en redes desconocidas',
    ],
    cta: CTA,
    faq: [
      { q: '¿Es seguro usar la app del banco con VPN?', a: 'Sí, una VPN fiable añade protección en redes públicas. Elige un servidor en tu país para evitar verificaciones extra.' },
      { q: '¿Por qué mi banco bloqueó el acceso?', a: 'Una ubicación desconocida puede parecer sospechosa. Usa un servidor cercano o desconecta la VPN y accede con datos móviles.' },
      { q: '¿Una VPN protege contra el phishing?', a: 'No. El phishing engaña a la persona, no a la red. No compartas nunca códigos de un solo uso.' },
      { q: '¿Necesito VPN para la banca en casa?', a: 'En tu propia Wi‑Fi protegida es opcional. Importa sobre todo en redes públicas y compartidas.' },
    ],
  },

  'vpn-split-tunneling-ios': {
    h1: 'Túnel dividido en iPhone: qué permite iOS y qué usar en su lugar',
    lead:
      'El túnel dividido (split tunneling) consiste en enviar solo parte del tráfico por la VPN y el resto directamente. En Windows y Android muchas apps permiten excluir aplicaciones concretas. En iPhone, las apps VPN para particulares funcionan de otra manera. Esta guía explica con honestidad los límites de Apple y qué herramientas de FollowNet resuelven las mismas tareas.',
    sections: [
      {
        title: 'Cómo funciona una VPN en iOS',
        body:
          'En iPhone, una VPN para particulares crea un túnel del sistema: mientras está conectada, las apps envían por lo general su tráfico a través de él. La VPN por app existe en iOS, pero está pensada para dispositivos de empresa gestionados por MDM, no para apps del App Store en teléfonos personales. Por eso las apps VPN honestas para iOS no ofrecen una lista de «excluir esta app».',
      },
      {
        title: 'Por qué no prometemos túnel dividido por app',
        body:
          'Algunas apps anuncian túnel dividido en iPhone, pero en la práctica se limita a dispositivos gestionados o solo afecta a ciertos rangos de direcciones. Preferimos describir lo que ocurre de verdad antes que mostrar un interruptor que no hace lo que dice.',
      },
      {
        title: 'Perfiles de red en lugar de exclusiones',
        body:
          'La mayoría de casos de túnel dividido son en realidad «VPN en unos sitios y no en otros». Eso lo cubren los perfiles de red y la Conexión automática: «Solo Wi‑Fi» protege los hotspots públicos mientras los datos móviles van directos, y preajustes como Public Wi‑Fi y Travel ajustan el comportamiento a cada situación.',
        image: 'autoconnect',
        imageCaption: '«Solo Wi‑Fi»: VPN en hotspots, directo con datos móviles.',
      },
      {
        title: 'Ajustes de DNS para un control más fino',
        body:
          'A veces el objetivo no es enrutar distinto, sino cambiar la resolución de nombres, por ejemplo para bloquear anuncios o rastreadores. Los preajustes de DNS de FollowNet —por ejemplo AdGuard para filtrar— lo hacen dentro del túnel sin otra app.',
        image: 'dns',
        imageCaption: 'Los preajustes de DNS cambian la resolución de nombres dentro del túnel.',
      },
      {
        title: 'En el ordenador: solo el navegador',
        body:
          'Si en un Mac o PC solo necesitas proteger la navegación, la extensión de FollowNet para Chrome enruta el tráfico del navegador mientras las demás apps del ordenador van directas. Es el equivalente práctico más cercano al túnel dividido y usa la misma cuenta.',
      },
      {
        title: 'Cuando una app no funciona con la VPN',
        body:
          'Si una app concreta —un banco, un servicio local o un hub domótico de tu red— no funciona con la conexión activa, lo más sencillo es desconectar para esa tarea o elegir un servidor en tu país. Los Atajos lo agilizan: un toque para desconectar y otro para volver a conectar.',
      },
    ],
    steps: {
      title: 'Resultados de túnel dividido en iPhone',
      items: [
        'Decide dónde necesitas de verdad la VPN: hotspots, viajes o en todas partes.',
        'Pon la Conexión automática en «Solo Wi‑Fi» si los datos móviles pueden ir directos.',
        'Elige un perfil de red para la situación.',
        'Usa un servidor en tu país para apps que no toleran ubicaciones extranjeras.',
        'Añade atajos de Conectar y Desconectar para excepciones rápidas.',
      ],
    },
    table: {
      title: 'Tarea y herramienta adecuada',
      head: ['Tarea', 'Túnel dividido por app', 'Herramienta de FollowNet'],
      rows: [
        ['VPN solo en Wi‑Fi público', 'No hace falta', '«Solo Wi‑Fi»'],
        ['Proteger solo el navegador en el ordenador', 'No hace falta', 'Extensión de Chrome'],
        ['Una app rechaza ubicaciones ajenas', 'No en iOS', 'Servidor en tu país'],
        ['Excepción rápida para una tarea', 'No en iOS', 'Atajo Desconectar'],
      ],
    },
    bullets: [
      'Las VPN para particulares en iOS funcionan como túnel del sistema',
      'La VPN por app en iPhone es para dispositivos gestionados por MDM',
      '«Solo Wi‑Fi» cubre la mayoría de necesidades de túnel dividido',
      'La extensión de Chrome enruta solo el navegador en el ordenador',
      'Los Atajos facilitan las excepciones rápidas',
    ],
    cta: CTA,
    faq: [
      { q: '¿FollowNet admite túnel dividido en iPhone?', a: 'No por app: iOS lo reserva a dispositivos gestionados. Las reglas de Conexión automática, los perfiles y los atajos resuelven casi todas las mismas tareas.' },
      { q: '¿Puedo excluir la app de mi banco de la VPN?', a: 'No de forma individual. Usa un servidor en tu país o desconecta un momento con un atajo.' },
      { q: '¿Hay túnel dividido en el ordenador?', a: 'La extensión de Chrome enruta solo el navegador; las demás apps van directas.' },
      { q: '¿Por qué algunas VPN para iPhone anuncian túnel dividido?', a: 'Suele limitarse a rangos de IP o a dispositivos gestionados. Comprueba qué se excluye exactamente antes de confiar en ello.' },
    ],
  },
};
