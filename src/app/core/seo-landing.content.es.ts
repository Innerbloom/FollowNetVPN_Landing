import type { LandingContent } from './seo-landing.content';
import type { CoreLandingSlug } from './seo-landing.slugs';

const CTA = 'Descargar en App Store';

export const ES: Record<CoreLandingSlug, LandingContent> = {
  'vpn-for-iphone': {
    h1: 'VPN para iPhone — rápida, privada y fácil de usar',
    lead:
      'FollowNet es una VPN para iOS pensada para iPhone y iPad: conexión con un toque, WireGuard e IKEv2, Smart Connect para redes restrictivas y un plan gratuito sin tarjeta de crédito.',
    sections: [
      {
        title: '¿Por qué usar una VPN en el iPhone?',
        body:
          'El Wi‑Fi público, los hotspots de viaje y algunos operadores móviles exponen tu tráfico a espionaje o limitaciones de velocidad. Una VPN cifra la conexión y ayuda a mantener privados la navegación, la mensajería y el streaming en iOS.',
      },
      {
        title: 'Hecha para iOS, no un clon genérico',
        body:
          'FollowNet usa las API nativas de VPN de iOS (Network Extension) y reúne Atajos, conexión automática, DNS personalizado y las ubicaciones listadas actualmente en la app en una interfaz pensada para el iPhone.',
      },
    ],
    bullets: [
      'Plan Free con tráfico semanal — prueba antes de suscribirte',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2 y VLESS Reality (Smart Connect elige cuando hace falta)',
      'El tratamiento de datos se explica en nuestra Política de privacidad',
      'Premium: datos ilimitados y las ubicaciones incluidas en el plan actual',
    ],
    cta: CTA,
    faq: [
      { q: '¿FollowNet es una VPN gratis para iPhone?', a: 'Sí. FollowNet ofrece un plan gratuito con tráfico semanal. Premium elimina el límite y da acceso a las ubicaciones que la app muestra para ese plan.' },
      { q: '¿FollowNet funciona en iPad?', a: 'Sí. La misma app de iOS funciona en iPhone y iPad.' },
      { q: '¿Qué protocolo VPN conviene usar en iOS?', a: 'WireGuard es rápido y moderno. IKEv2 es estable en redes móviles. Smart Connect elige automáticamente el mejor protocolo para tu red.' },
    ],
  },
  'wireguard-vpn-ios': {
    h1: 'VPN WireGuard para iOS — rápida y moderna',
    lead:
      'FollowNet incluye WireGuard nativo en iPhone y iPad, además de AmneziaWG y otros protocolos cuando las redes bloquean las VPN estándar. Smart Connect puede cambiar por ti para que sigas conectado sin adivinar.',
    sections: [
      {
        title: '¿Por qué WireGuard en iOS?',
        body:
          'WireGuard es ligero, usa criptografía moderna y suele ofrecer menos latencia que los protocolos VPN más antiguos. En iPhone y iPad es una opción predeterminada sólida para navegar, chatear, hacer videollamadas y muchas sesiones de streaming o juego en redes tranquilas.',
      },
      {
        title: 'Cómo activar WireGuard en FollowNet',
        body:
          'Abre Ajustes → Protocolo y elige WireGuard, o deja Smart Connect activado para que FollowNet lo elija cuando encaje. Tras conectar, comprueba el protocolo activo en la app y ejecuta el Speed Test en el mismo Wi‑Fi o LTE para comparar cifras reales.',
      },
      {
        title: 'Cuando WireGuard está bloqueado o limitado',
        body:
          'Algunos proveedores, hoteles y SIM de viaje detectan o ralentizan WireGuard. Según tu plan y tu red, FollowNet puede recurrir a AmneziaWG, Hysteria2, VLESS Reality o IKEv2 — manualmente o mediante Smart Connect (y con el perfil Restricted si quieres esa escalera por defecto).',
      },
      {
        title: 'WireGuard frente a otros protocolos de FollowNet',
        body:
          'WireGuard suele ser el más rápido en redes abiertas. IKEv2 puede reconectar con más suavidad al cambiar de antena. AmneziaWG e Hysteria2 ayudan cuando la red frena los túneles clásicos. Ningún protocolo gana en todas partes: mide en tu propia ruta.',
      },
      {
        title: 'Free semanal o Premium',
        body:
          'WireGuard está disponible dentro del tráfico semanal de Free para que evalúes velocidad y fiabilidad. Premium elimina el límite y desbloquea las ubicaciones del plan Premium actual que aparecen en la app. Aquí no inventamos cifras de servidores.',
      },
    ],
    bullets: [
      'WireGuard nativo mediante Network Extension de iOS',
      'WireGuard manual o selección automática con Smart Connect',
      'Alternativas cuando hace falta: IKEv2, AmneziaWG, Hysteria2',
      'Ubicaciones listadas en la app — sin inflarlas en esta página',
      'Funciona con el tráfico semanal de Free; Premium para uso ilimitado',
    ],
    cta: 'Consigue FollowNet en App Store',
    faq: [
      { q: '¿WireGuard es seguro en el iPhone?', a: 'WireGuard tiene un diseño criptográfico moderno. FollowNet lo ejecuta mediante el framework Network Extension de Apple, como otras VPN de App Store.' },
      { q: '¿Puedo forzar solo WireGuard?', a: 'Sí. Abre Ajustes → Protocolo y elige WireGuard. Usa Smart Connect cuando prefieras la selección automática.' },
      { q: '¿Qué hago si WireGuard no conecta?', a: 'Prueba Smart Connect, cambia a AmneziaWG, IKEv2 o Hysteria2, elige otra ubicación de la app y vuelve a medir con el Speed Test.' },
      { q: '¿FollowNet admite túnel dividido en iOS?', a: 'Con la VPN conectada, iOS envía el tráfico del dispositivo por el túnel. El túnel dividido por app está limitado por la plataforma de Apple; FollowNet sigue las reglas de VPN del sistema.' },
    ],
  },
  'free-vpn-iphone': {
    h1: 'VPN gratis para iPhone — prueba FollowNet con tráfico semanal',
    lead:
      '¿Buscas una VPN gratis para iPhone sin tarjeta de crédito? FollowNet Free incluye tráfico semanal, protocolos modernos, Smart Connect y lo necesario para evaluar el servicio antes de Premium.',
    sections: [
      {
        title: 'Qué incluye Free',
        body:
          'FollowNet Free te permite conectar iPhone y iPad dentro de un límite de tráfico semanal. Puedes probar los protocolos de tu plan, elegir entre las ubicaciones Free listadas en la app, usar Smart Connect y probar la conexión automática, los perfiles DNS y el Speed Test cuando estén disponibles.',
      },
      {
        title: 'Cómo funciona el límite semanal',
        body:
          'Free tiene un tope por semana, no es «ilimitado para siempre». Usa ese tráfico para probar las redes Wi‑Fi y móviles que te importan. Cuando se agota, espera al siguiente periodo o pasa a Premium para tráfico ilimitado según las condiciones actuales de App Store.',
      },
      {
        title: 'Free frente a Premium, sin rodeos',
        body:
          'Free sirve para evaluar: tráfico semanal y los servidores Free que muestra la app. Premium elimina el límite y desbloquea las ubicaciones Premium del plan actual. Premium no es «cifrado más fuerte»: es capacidad, ubicaciones y comodidad. Los detalles exactos están en la app.',
      },
      {
        title: 'Cómo empezar sin tarjeta',
        body:
          'Descarga FollowNet en App Store, inicia sesión con un código por email, aprueba una vez la configuración VPN de iOS y toca Conectar. Free no requiere tarjeta. Lee la Política de privacidad antes de usar la app en sesiones sensibles.',
      },
      {
        title: 'Cuándo basta Free y cuándo no',
        body:
          'Free funciona bien para sesiones cortas en Wi‑Fi público, check-ins de viaje y comparar protocolos. El streaming HD largo, el uso móvil todo el día o las descargas grandes suelen necesitar Premium por el límite semanal. Ningún plan garantiza desbloquear catálogos de streaming.',
      },
    ],
    bullets: [
      'Free no requiere tarjeta de crédito',
      'Tráfico semanal — suficiente para evaluar, no ilimitado',
      'Los protocolos y ubicaciones Free se muestran en la app',
      'Smart Connect, conexión automática, DNS y Speed Test cuando están disponibles',
      'Mejora desde la app vía App Store cuando necesites ilimitado',
    ],
    cta: CTA,
    faq: [
      { q: '¿FollowNet es realmente gratis en iPhone?', a: 'Sí. Free incluye tráfico semanal para evaluar. Premium es opcional y elimina el límite según las condiciones actuales del plan en la app.' },
      { q: '¿El límite de Free es diario o semanal?', a: 'Semanal. Consulta en la app el volumen actual y cuándo se renueva; no cuentes con una recarga diaria.' },
      { q: '¿Hay anuncios en la versión gratuita?', a: 'FollowNet Free incluye anuncios en algunas regiones; Premium no tiene anuncios.' },
      { q: '¿Puedo usar Free en Wi‑Fi público?', a: 'Sí. Free también cifra el tráfico dentro del límite semanal — útil en cafeterías, aeropuertos y hoteles.' },
    ],
  },
  'vpn-for-ipad': {
    h1: 'VPN para iPad — la misma app FollowNet, optimizada para iOS',
    lead:
      'FollowNet está disponible para iPhone y iPad como app de iOS, con los protocolos y funciones de cuenta de la versión actual de App Store.',
    sections: [
      { title: '¿Por qué usar VPN en el iPad?', body: 'El iPad suele usarse en el mismo Wi‑Fi público que el teléfono: viajes, coworking y redes de invitados. Una VPN ayuda a proteger Safari, las apps y las descargas en datos móviles y en Wi‑Fi.' },
      { title: 'Usar FollowNet en el iPad', body: 'Configura la VPN con el mismo permiso de iOS y luego elige el protocolo, la conexión automática y las opciones de DNS disponibles en la versión actual.' },
    ],
    bullets: ['App universal de iOS — iPhone y iPad', 'VPN nativa con Network Extension', 'Smart Connect para redes restrictivas', 'Plan Free y Premium a través de App Store'],
    cta: CTA,
    faq: [
      { q: '¿Necesito una app aparte para iPad?', a: 'No. Descarga FollowNet una vez en App Store; funciona en iPhone y iPad.' },
      { q: '¿La VPN funciona con el teclado del iPad y Stage Manager?', a: 'Sí. La VPN funciona a nivel de sistema y no interfiere con la multitarea.' },
      { q: '¿Puedo usar servidores distintos en iPad y iPhone?', a: 'Tu cuenta funciona en cualquier dispositivo con sesión iniciada; elige el servidor en cada dispositivo.' },
    ],
  },
  'ikev2-vpn-ios': {
    h1: 'VPN IKEv2 para iOS — estable en redes móviles',
    lead:
      'IKEv2 es un protocolo VPN probado para iPhone y iPad: reconecta rápido al pasar de Wi‑Fi a datos móviles. FollowNet admite IKEv2 junto a WireGuard, AmneziaWG y Smart Connect.',
    sections: [
      { title: 'Cuándo elegir IKEv2 en iOS', body: 'IKEv2 gestiona bien los cambios de red: trayectos, ascensores y saltos entre LTE y Wi‑Fi. Es una buena opción cuando tu operador limita o bloquea WireGuard.' },
      { title: 'IKEv2 en FollowNet', body: 'Elige IKEv2 manualmente en Ajustes → Protocolo o usa Smart Connect. La app muestra qué combinaciones de protocolo y servidor están disponibles ahora.' },
    ],
    bullets: ['Reconexiones estables al cambiar de antena', 'Disponible en Free y Premium', 'Funciona con conexión automática y DNS personalizado', 'Smart Connect puede elegir IKEv2 automáticamente'],
    cta: CTA,
    faq: [
      { q: '¿IKEv2 es seguro en el iPhone?', a: 'Bien configurado, IKEv2 usa un cifrado fuerte. FollowNet lo implementa dentro del framework VPN de Apple.' },
      { q: '¿IKEv2 o WireGuard en iOS?', a: 'WireGuard suele ser más rápido; IKEv2 puede ser más estable en algunas redes móviles. Smart Connect prueba ambos.' },
      { q: '¿Cómo activo IKEv2?', a: 'Ajustes → Protocolo → IKEv2, o activa Smart Connect para la selección automática.' },
    ],
  },
  'vpn-for-wifi': {
    h1: 'VPN para Wi‑Fi público en iPhone — mantente cifrado',
    lead:
      'Cafeterías, aeropuertos, hoteles y redes de invitados son cómodos pero arriesgados. FollowNet cifra el tráfico de iPhone y iPad hasta el servidor VPN en redes Wi‑Fi en las que no confías del todo — dentro del tráfico semanal de Free o ilimitado con Premium.',
    sections: [
      {
        title: 'Riesgos en redes Wi‑Fi abiertas y de invitados',
        body:
          'Los hotspots compartidos pueden exponer el tráfico sin cifrar a otros usuarios de la misma red. Incluso el Wi‑Fi de invitados con contraseña puede estar gestionado por terceros poco fiables. Una VPN añade cifrado entre tu dispositivo y el servidor VPN; por sí sola no vuelve «seguro» un hotspot malicioso ni frena el phishing.',
      },
      {
        title: 'Configuración recomendada para Wi‑Fi público',
        body:
          'Conéctate a la red, completa primero el inicio de sesión del portal cautivo y después conecta FollowNet. En redes desconocidas, mejor Smart Connect. Activa la conexión automática «Solo Wi‑Fi» si quieres que el túnel arranque al salir de las redes de casa en las que ya confías.',
      },
      {
        title: 'Conexión automática y hábitos diarios',
        body:
          'Los modos de conexión automática (Solo Wi‑Fi, Solo LTE, Siempre o Desactivada) deciden cuándo arranca la VPN. Combínalos con un widget en la pantalla de inicio para confirmar que el túnel está activo al sentarte con el café — primero el estado, no un panel de marketing.',
      },
      {
        title: 'Velocidad y portales cautivos',
        body:
          'Algo de sobrecarga es normal en las conexiones de hotel. Usa el Speed Test y una ubicación más cercana de la app. Si WireGuard falla tras el portal, prueba Smart Connect o AmneziaWG/Hysteria2. Una VPN no puede inventar el ancho de banda que el hotspot no tiene.',
      },
      {
        title: 'Free semanal o Premium en Wi‑Fi',
        body:
          'Free cifra las sesiones en Wi‑Fi público dentro del tráfico semanal — suficiente para días de viaje y trabajo en cafeterías. El streaming todo el día o las subidas grandes en el Wi‑Fi del hotel suelen necesitar Premium. Las ubicaciones de cada plan están en la app.',
      },
    ],
    bullets: [
      'Cifra el tráfico en Wi‑Fi de cafeterías, aeropuertos, hoteles e invitados',
      'Completa el portal cautivo y luego conecta la VPN',
      'Conexión automática en Wi‑Fi para no olvidarte',
      'Smart Connect para hotspots filtrados o complicados',
      'Tráfico semanal Free o Premium para sesiones ilimitadas',
    ],
    cta: CTA,
    faq: [
      { q: '¿Necesito VPN en el Wi‑Fi de casa?', a: 'Las redes domésticas suelen ser más seguras. Usa VPN si quieres más privacidad frente a tu proveedor o compartes la red con invitados.' },
      { q: '¿La VPN ralentiza el Wi‑Fi del hotel?', a: 'Algo de sobrecarga es normal. Usa el Speed Test y prueba un servidor más cercano de la app para mejorar los resultados.' },
      { q: '¿FollowNet funciona en las páginas de inicio de sesión de portales cautivos?', a: 'Normalmente conecta la VPN después de completar el portal y mantén el túnel activo el resto de la sesión.' },
      { q: '¿Basta Free para Wi‑Fi público?', a: 'Sí para sesiones cortas y medias dentro del tráfico semanal Free. El uso intensivo todo el día suele necesitar Premium.' },
    ],
  },
  'smart-connect-vpn': {
    h1: 'VPN con Smart Connect — protocolo automático para iOS',
    lead:
      'Smart Connect es el modo adaptativo de FollowNet: usa el contexto de la red cuando está disponible y elige entre WireGuard, IKEv2, AmneziaWG, Hysteria2 y VLESS Reality — con alternativas y comprobaciones de salida para que pierdas menos tiempo probando a mano.',
    sections: [
      {
        title: 'Cómo funciona Smart Connect',
        body:
          'Con el protocolo en Smart, FollowNet tiene en cuenta las pistas de región y proveedor del servidor cuando las hay, elige un túnel inicial y puede recorrer una escalera de recuperación (a menudo Hysteria2 → VLESS Reality → AmneziaWG → WireGuard → IKEv2, saltando lo que tus servidores no ofrecen). Una vez en línea, la app muestra lo que está activo. Puedes cambiarlo cuando quieras en Ajustes → Protocolo.',
      },
      {
        title: 'Por qué VLESS Reality está en la cadena',
        body:
          'Algunos operadores identifican o frenan WireGuard clásico — e incluso AmneziaWG. VLESS con camuflaje tipo REALITY es otra vía cuando un túnel aparece como conectado pero no deja pasar tráfico real. FollowNet verifica la salida antes de dar la sesión por buena.',
      },
      {
        title: 'Cuándo dejar Smart Connect activado',
        body:
          'Viajeros, proveedores restrictivos, conexiones de hotel y SIM de viaje son los casos principales. Usa el perfil Restricted cuando quieras Smart Connect con conexión automática «Siempre» y el servidor más rápido sin vigilar cada protocolo.',
      },
      {
        title: 'Cuándo elegir un protocolo a mano',
        body:
          'Si WireGuard ya va rápido en casa, fíjalo. Usa el modo manual para comparar con el Speed Test. Vuelve a Smart Connect (o Restricted) en redes desconocidas de cafeterías, aeropuertos o SIM extranjeras.',
      },
      {
        title: 'Smart Connect, conexión automática y perfiles',
        body:
          'La conexión automática decide cuándo arranca la VPN (Wi‑Fi, LTE, Siempre). Smart Connect decide qué protocolo probar después. Los perfiles de red combinan ambos más DNS y modo de servidor: Public Wi‑Fi fija WireGuard, Travel fija IKEv2 y Restricted mantiene Smart Connect al máximo.',
      },
      {
        title: 'Límites y Free semanal frente a Premium',
        body:
          'Smart Connect aporta comodidad; no garantiza conexión en todas las redes ni salta un portal cautivo que no completaste. Free incluye Smart Connect dentro del tráfico semanal. Premium elimina el límite y desbloquea las ubicaciones Premium que la app muestra para ese plan.',
      },
    ],
    bullets: [
      'Protocolo automático entre WireGuard, IKEv2, AmneziaWG, Hysteria2 y VLESS Reality',
      'Escalera de alternativas con comprobación de salida — no solo un estado verde',
      'Se combina con conexión automática y perfiles de red (incluido Restricted)',
      'Protocolo y servidor activos visibles tras conectar',
      'Disponible con el tráfico semanal Free y en Premium',
    ],
    cta: CTA,
    faq: [
      { q: '¿Cómo activo Smart Connect?', a: 'Ajustes → Protocolo → Smart (el nombre puede variar según la versión). O aplica el perfil Restricted.' },
      { q: '¿Puedo ver qué protocolo eligió Smart Connect?', a: 'Sí. La app muestra el protocolo y el servidor activos tras conectar.' },
      { q: '¿Smart Connect usa VLESS Reality?', a: 'Sí, cuando ese protocolo está disponible para tu sesión y el contexto de red o las alternativas lo aconsejan. También puedes fijar VLESS manualmente.' },
      { q: '¿Smart Connect garantiza acceso en todas partes?', a: 'No. Mejora las probabilidades en redes difíciles, pero no anula leyes locales, bloqueos totales ni hotspots averiados.' },
    ],
  },
  'network-profiles-ios': {
    h1: 'Perfiles de red en iOS — Smart, Public Wi‑Fi, Travel, Restricted',
    lead:
      'Un perfil de FollowNet reúne protocolo, DNS, conexión automática y modo de servidor para que la cafetería y el Wi‑Fi de casa no compartan los mismos ajustes. Los perfiles incluidos coinciden con lo que trae la app.',
    sections: [
      {
        title: 'Qué guarda un perfil',
        body:
          'Ajustes → Perfiles de red cambia cuatro opciones a la vez: protocolo preferido (o Smart), DNS predefinido, modo de conexión automática y modo de servidor (Más rápido / Último usado / Específico). Aplica un perfil en lugar de reajustar cuatro menús cada vez que cambia la red.',
      },
      {
        title: 'Smart (predeterminado)',
        body:
          'Protocolo: Smart · DNS: Sistema/Predeterminado · Conexión automática: Desactivada · Servidor: Último usado. El punto de partida diario cuando quieres que FollowNet elija el túnel y vuelva a la última ciudad.',
      },
      {
        title: 'Public Wi‑Fi',
        body:
          'Protocolo: WireGuard · DNS: Quad9 · Conexión automática: Solo Wi‑Fi · Servidor: Más rápido. Tras el portal cautivo, cifra en hotspots compartidos con baja latencia y un resolvedor orientado a la privacidad.',
      },
      {
        title: 'Travel',
        body:
          'Protocolo: IKEv2 · DNS: Cloudflare · Conexión automática: Siempre · Servidor: Más rápido. Ajustado para roaming y saltos entre LTE y Wi‑Fi de hotel — fiabilidad aburrida antes que protocolos de moda.',
      },
      {
        title: 'Restricted y perfiles propios',
        body:
          'Restricted deja el protocolo en Smart, DNS Quad9, conexión automática Siempre y servidor Más rápido — para redes con inspección profunda de paquetes donde quieres toda la escalera de Smart Connect (Hysteria2 / VLESS Reality / AmneziaWG / WireGuard / IKEv2). Crea un perfil propio cuando un hotel solo funciona con protocolo fijo, DNS y una ciudad concreta.',
      },
    ],
    bullets: [
      'Cuatro perfiles incluidos con protocolo / DNS / conexión automática / modo de servidor exactos',
      'Restricted = Smart + Siempre + Más rápido para redes hostiles',
      'Perfiles propios para recetas de hotel u oficina ya probadas',
      'Las mismas herramientas en Free semanal y en Premium',
      'Compatible con el atajo «Aplicar perfil» de Apple',
    ],
    cta: CTA,
    faq: [
      { q: '¿Dónde encuentro los perfiles de red?', a: 'En la app FollowNet para iOS: Ajustes → Perfiles de red (y en el menú de perfiles de la pantalla principal).' },
      { q: '¿Restricted usa VLESS?', a: 'Restricted deja el protocolo en Smart, así que Smart Connect puede subir hasta VLESS Reality cuando esa vía está disponible; no fija un único protocolo.' },
      { q: '¿Los perfiles son solo para Premium?', a: 'Los perfiles incluidos están disponibles en Free dentro del tráfico semanal. Premium añade sobre todo capacidad y un mapa de servidores más amplio.' },
      { q: '¿En qué se diferencia de usar solo Smart Connect?', a: 'Smart Connect elige el protocolo. Un perfil además ajusta DNS, conexión automática y modo de servidor con un toque.' },
    ],
  },
  'amneziawg-vpn-ios': {
    h1: 'VPN AmneziaWG para iOS — WireGuard mejorado para redes inestables',
    lead:
      'AmneziaWG es un protocolo basado en WireGuard y mejorado para redes inestables o saturadas. FollowNet incluye AmneziaWG en iOS y puede activarlo automáticamente con Smart Connect.',
    sections: [
      { title: 'Por qué ayuda un protocolo adicional', body: 'Algunos operadores móviles y redes Wi‑Fi de hotel o públicas gestionan mal el tráfico VPN estándar: las conexiones se cortan o se ralentizan. AmneziaWG mantiene el núcleo de WireGuard y añade ajustes de conexión que pueden ser más estables en esas redes.' },
      { title: 'Usar AmneziaWG en FollowNet', body: 'Activa Smart Connect para el cambio automático o elige AmneziaWG manualmente en Ajustes → Protocolo. El rendimiento puede diferir del de WireGuard puro; el Speed Test ayuda a comparar.' },
    ],
    bullets: ['Protocolo basado en WireGuard para redes inestables', 'Disponible con Smart Connect o selección manual', 'La disponibilidad de servidores se muestra en la app', 'Network Extension nativa de iOS'],
    cta: CTA,
    faq: [
      { q: '¿AmneziaWG es lo mismo que WireGuard?', a: 'Está basado en WireGuard con ajustes de conexión extra para redes donde WireGuard estándar es inestable.' },
      { q: '¿Cuándo debo usar AmneziaWG?', a: 'Cuando WireGuard es inestable o lento en tu red, por ejemplo con algunas SIM de viaje o Wi‑Fi público saturado.' },
      { q: '¿AmneziaWG está en el plan gratuito?', a: 'La disponibilidad de protocolos depende de tu plan; consulta en la app los límites actuales de Free y Premium.' },
    ],
  },
  'no-logs-vpn': {
    h1: 'Privacidad VPN en iPhone — más allá de los eslóganes «no-logs»',
    lead:
      'FollowNet busca minimizar la recogida de datos. Nuestra Política de privacidad explica exactamente qué se trata para el acceso a la cuenta, el funcionamiento de la VPN, el soporte y la analítica — no una frase de marketing de «cero registros».',
    sections: [
      {
        title: 'Qué significan en la práctica las promesas de privacidad',
        body:
          'Una VPN con cuenta no puede funcionar con literalmente cero datos: el inicio de sesión por email y el estado de la suscripción requieren metadatos del servicio. Los eslóganes absolutos de «no-logs» ocultan esa realidad. La Política de privacidad publicada define cómo trata FollowNet los datos hoy y cuánto tiempo los conserva.',
      },
      {
        title: 'Qué leer antes de conectarte',
        body:
          'Nuestra Política de privacidad cubre categorías de datos, finalidades, conservación, derechos RGPD y CCPA, el uso de Firebase Analytics, el tratamiento del DNS y los tickets de soporte. Confía en ese documento antes que en cualquier resumen de una página de aterrizaje, incluida esta.',
      },
      {
        title: 'Cuenta, facturación y Apple',
        body:
          'FollowNet usa inicio de sesión con código por email. Premium se cobra a través de App Store de Apple. Apple gestiona los pagos de la suscripción; el túnel VPN funciona en el entorno aislado de Network Extension de iOS. No afirmamos auditorías «no-logs» de terceros que no hayamos publicado aquí.',
      },
      {
        title: 'Hábitos prácticos de privacidad en el iPhone',
        body:
          'Mantén iOS actualizado, usa un código fuerte o Face ID, activa la conexión automática en Wi‑Fi público y revisa los perfiles DNS si quieres un resolvedor concreto. La VPN cifra el tráfico hasta el servidor VPN; no sustituye la atención al phishing ni el cuidado del dispositivo.',
      },
      {
        title: 'Free semanal, Premium y transparencia',
        body:
          'La misma Política de privacidad se aplica en Free y en Premium. Free incluye tráfico semanal para evaluar; Premium elimina el límite. Los límites del plan y las ubicaciones aparecen en la app, no como cifras de marketing inventadas en esta página.',
      },
    ],
    bullets: [
      'Política de privacidad en follow-net.com/privacy — la fuente de referencia',
      'Inicio de sesión por código de email; sin promesas de «cero datos»',
      'Categorías de datos y conservación descritas en la política',
      'Facturación Premium gestionada por Apple',
      'La misma transparencia en Free semanal y en Premium',
    ],
    cta: CTA,
    faq: [
      { q: '¿Qué datos trata FollowNet?', a: 'Consulta la Política de privacidad vigente para ver las categorías de datos, finalidades y plazos de conservación exactos.' },
      { q: '¿Dónde está la política de privacidad?', a: 'En https://follow-net.com/privacy, enlazada en la app y en la ficha de App Store.' },
      { q: '¿Afirmáis tener una auditoría formal no-logs?', a: 'No te fíes de eslóganes de auditoría en esta página. Lo que tratamos hoy está en la Política de privacidad publicada.' },
      { q: '¿Apple ve mi uso de la VPN?', a: 'Apple gestiona las suscripciones de App Store; el túnel VPN funciona en el entorno aislado de Network Extension de iOS. Los detalles relevantes para la privacidad están en nuestra Política de privacidad.' },
    ],
  },
  'best-vpn-iphone': {
    h1: 'La mejor VPN para iPhone — qué buscar en 2026',
    lead:
      'La mejor VPN de iPhone para ti es nativa de iOS, transparente con la privacidad, rápida en tus redes y honesta sobre Free y pago. Aquí tienes una lista práctica y cómo encaja FollowNet — sin pretender ser el número 1 para todo el mundo.',
    sections: [
      {
        title: 'Lista de comprobación para apps VPN de iPhone',
        body:
          'Prefiere apps de App Store, una VPN real con Network Extension (no una «VPN» solo de navegador), una Política de privacidad clara, protocolos modernos (WireGuard/IKEv2 y opciones para redes filtradas), conexión automática y un soporte al que puedas llegar. Evita apps sin empresa o política verificables.',
      },
      {
        title: 'Cómo encaja FollowNet en esa lista',
        body:
          'FollowNet es una app nativa de iOS con WireGuard, IKEv2, AmneziaWG, Hysteria2, Smart Connect, conexión automática, DNS personalizado, Speed Test, widgets y Atajos. Free incluye tráfico semanal; Premium es opcional a través de Apple. Las ubicaciones de servidores están en la app.',
      },
      {
        title: 'Prueba antes de suscribirte',
        body:
          'Instala Free, aprueba la configuración VPN, ejecuta el Speed Test con y sin VPN en tu Wi‑Fi de casa y en datos móviles, y luego prueba una red de cafetería con Smart Connect. Si la velocidad y la fiabilidad te convencen, Premium elimina el límite semanal de Free.',
      },
      {
        title: 'Lo que «la mejor» no debería significar',
        body:
          'Desconfía de desbloqueos de streaming garantizados, «servidores en todos los países», eslóganes absolutos de no-logs sin política y cifras de servidores falsas. FollowNet no promete nada de eso. La disponibilidad depende de tu red y de las normas locales.',
      },
      {
        title: 'Decidir entre Free semanal y Premium',
        body:
          'Elige Free si necesitas protección ocasional en Wi‑Fi público y quieres evaluar. Elige Premium para tráfico ilimitado y las ubicaciones Premium de tu plan. La calidad del cifrado no es de pago; la capacidad y las ubicaciones sí.',
      },
    ],
    bullets: [
      'Network Extension nativa de App Store — no un perfil instalado aparte',
      'WireGuard + IKEv2 + Smart Connect + AmneziaWG + Hysteria2',
      'Conexión automática, DNS, Speed Test y widgets para el día a día',
      'Tráfico semanal Free para evaluar — Premium opcional',
      'La Política de privacidad por encima de los eslóganes',
    ],
    cta: CTA,
    faq: [
      { q: '¿FollowNet es la mejor VPN para todos?', a: 'Ninguna VPN sirve a todo el mundo. FollowNet se centra en iOS, protocolos modernos y Smart Connect — prueba el tráfico semanal Free para ver si la velocidad y los servidores te sirven.' },
      { q: '¿Por qué priorizar iOS?', a: 'FollowNet prioriza una experiencia cuidada en iPhone e iPad, con una extensión de Chrome para el escritorio, en lugar de repartirse por todas las plataformas.' },
      { q: '¿Cómo comparo velocidades?', a: 'Usa el Speed Test integrado con y sin VPN en tus redes Wi‑Fi y móviles habituales.' },
      { q: '¿Desbloquea todos los catálogos de streaming?', a: 'No. FollowNet cifra tu conexión y ofrece las salidas regionales listadas en la app; los catálogos pueden seguir restringiendo a usuarios de VPN.' },
    ],
  },
  'auto-connect-vpn-ios': {
    h1: 'VPN con conexión automática en iOS — conecta cuando cambia la red',
    lead:
      'La conexión automática de FollowNet inicia la VPN sola en Wi‑Fi, datos móviles o cualquier red, para que no tengas que tocar Conectar cada vez que entras en un hotspot o pasas de Wi‑Fi a LTE.',
    sections: [
      { title: '¿Por qué la conexión automática en el iPhone?', body: 'El Wi‑Fi público y las redes de viaje son justo donde más se necesita la VPN — y donde más se olvida activarla. La conexión automática vigila tu red e inicia FollowNet cuando se cumple la regla que elegiste.' },
      { title: 'Modos de conexión automática en FollowNet', body: 'Elige Desactivada, Solo Wi‑Fi, Solo LTE o Siempre en Ajustes → Conexión automática. Combínala con Smart Connect para que, al arrancar la VPN, se elijan el mejor protocolo y servidor.' },
    ],
    bullets: ['Solo Wi‑Fi, Solo LTE o Siempre', 'Funciona con WireGuard, IKEv2 y Smart Connect', 'Disponible en Free y Premium', 'Se configura en Ajustes → Conexión automática'],
    cta: CTA,
    faq: [
      { q: '¿Cómo activo la conexión automática?', a: 'Abre FollowNet → Ajustes → Conexión automática y elige Solo Wi‑Fi, Solo LTE, Siempre o Desactivada.' },
      { q: '¿Se activará en el Wi‑Fi de casa?', a: 'Solo si eliges Solo Wi‑Fi o Siempre. Muchos usuarios eligen Solo Wi‑Fi para cafeterías y hoteles.' },
      { q: '¿Es lo mismo que Smart Connect?', a: 'No. La conexión automática decide cuándo iniciar la VPN; Smart Connect elige protocolo y servidor después.' },
    ],
  },
  'dns-vpn-ios': {
    h1: 'VPN con DNS personalizado para iPhone — Quad9, Cloudflare y más',
    lead:
      'FollowNet te permite elegir perfiles DNS en iOS: mantener el DNS del sistema o cambiar a Quad9, Cloudflare, AdGuard y otros mientras el túnel VPN está activo.',
    sections: [
      { title: 'Por qué importa el DNS con VPN', body: 'El DNS traduce nombres de dominio en direcciones IP. Algunos usuarios quieren, además del cifrado VPN, un resolvedor que bloquee malware (Quad9), un DNS público rápido (Cloudflare) o un DNS con bloqueo de anuncios (AdGuard).' },
      { title: 'Perfiles DNS en FollowNet', body: 'Elige un DNS predefinido en Ajustes sin salir de la app. Según la configuración, las consultas DNS pueden pasar por el túnel VPN; consulta la Política de privacidad para los detalles del tratamiento.' },
    ],
    bullets: ['Varios DNS predefinidos incluidos', 'Funciona junto a WireGuard e IKEv2', 'Útil para objetivos de privacidad y filtrado', 'Sin necesidad de otra app de DNS'],
    cta: CTA,
    faq: [
      { q: '¿Qué DNS debería usar?', a: 'Quad9 si te importa la seguridad, Cloudflare por velocidad, AdGuard DNS para bloquear anuncios — o el predeterminado del sistema.' },
      { q: '¿El DNS personalizado sustituye al cifrado VPN?', a: 'No. El DNS cambia el resolvedor; la VPN sigue cifrando el tráfico hasta el servidor VPN.' },
      { q: '¿Puedo usar perfiles DNS en Free?', a: 'Los ajustes de DNS están disponibles según tu plan actual en la app.' },
    ],
  },
  'vpn-for-travel': {
    h1: 'VPN para viajar con iPhone — roaming, hoteles y aeropuertos',
    lead:
      'Viajar significa Wi‑Fi desconocido, SIM extranjeras y, a veces, redes filtradas. FollowNet mantiene el mismo flujo en iOS mientras Smart Connect ayuda a elegir un protocolo para la red actual.',
    sections: [
      { title: 'Escenarios de viaje', body: 'El Wi‑Fi de la sala VIP del aeropuerto, los portales cautivos de hotel y las SIM prepago locales se comportan de forma distinta. La VPN ayuda a la privacidad; Smart Connect ayuda a la conectividad cuando los protocolos están restringidos en el extranjero.' },
      { title: 'Consejos para viajeros', body: 'Descarga FollowNet antes de salir, inicia sesión con tu email, ejecuta el Speed Test en Wi‑Fi y en datos móviles y activa la conexión automática en redes no fiables. Consulta en la app las ubicaciones incluidas en tu plan.' },
    ],
    bullets: ['Varias ubicaciones listadas en la app', 'Smart Connect para redes desconocidas', 'Conexión automática en Wi‑Fi de hoteles y aeropuertos', 'Instala y prueba antes del viaje'],
    cta: CTA,
    faq: [
      { q: '¿La VPN funcionará en todos los países?', a: 'Depende de las leyes y políticas de red locales. Cada usuario es responsable de cumplir la normativa local.' },
      { q: '¿Conecto antes o después de iniciar sesión en el Wi‑Fi del hotel?', a: 'Normalmente después del portal cautivo; luego activa la VPN para el resto de la sesión.' },
      { q: '¿El roaming cuesta más con VPN?', a: 'La VPN añade algo de tráfico; los cargos de roaming dependen de tu operador, no de FollowNet.' },
    ],
  },
  'vpn-speed-test-ios': {
    h1: 'Speed Test de VPN para iPhone — mide antes de decidir',
    lead:
      'FollowNet incluye un Speed Test para comparar en iOS la velocidad de descarga y la latencia con la VPN activada o no, y entre ubicaciones — antes de pasarte a Premium.',
    sections: [
      { title: 'Por qué medir la velocidad de la VPN en iOS', body: 'La velocidad depende de tu red base, la distancia al servidor y el protocolo. Medir en tu Wi‑Fi y LTE reales ayuda a tener expectativas realistas, sobre todo para streaming y videollamadas en iPad.' },
      { title: 'Cómo usar el Speed Test en FollowNet', body: 'Abre el Speed Test en la app, mide primero sin VPN, conecta y vuelve a medir. Si los resultados cambian con tu operador, compara Smart Connect con WireGuard o IKEv2 manual.' },
    ],
    bullets: ['Integrado en FollowNet — sin apps de terceros', 'Compara servidores y protocolos', 'Útil en Free y en Premium', 'Funciona en iPhone y iPad'],
    cta: CTA,
    faq: [
      { q: '¿La VPN siempre será más lenta?', a: 'Algo de sobrecarga es normal por el cifrado y la distancia al servidor. Un servidor cercano suele reducir la diferencia.' },
      { q: '¿Qué protocolo es el más rápido?', a: 'A menudo WireGuard en buenas redes; pero varía, así que mide en tu zona con el Speed Test.' },
      { q: '¿El Speed Test consume mi tráfico?', a: 'Sí. Las pruebas consumen datos como cualquier descarga; tenlo en cuenta con el límite semanal gratuito.' },
    ],
  },
  'secure-vpn-iphone': {
    h1: 'VPN segura para iPhone — cifrado, conexión automática y DNS',
    lead:
      'La seguridad en iOS es más que un candado. FollowNet combina cifrado WireGuard o IKEv2, conexión automática opcional, DNS personalizado y una Política de privacidad publicada.',
    sections: [
      { title: 'Capas de protección', body: 'La VPN cifra el tráfico hasta el servidor VPN. La conexión automática inicia la VPN en Wi‑Fi público o datos móviles sin tocar nada. Los perfiles DNS pueden añadir resolvedores con bloqueo o centrados en la privacidad. Juntos refuerzan el uso diario del iPhone en redes no fiables.' },
      { title: 'Buenas prácticas de seguridad', body: 'Mantén iOS actualizado, usa un código fuerte o Face ID, activa la conexión automática en Wi‑Fi público y revisa la Política de privacidad de FollowNet. Premium no significa «más cifrado»: desbloquea capacidad y servidores.' },
    ],
    bullets: ['Protocolos modernos: WireGuard, IKEv2, AmneziaWG', 'Conexión automática en Wi‑Fi o LTE', 'DNS predefinidos personalizados', 'Revisión de App Store y extensión VPN aislada'],
    cta: CTA,
    faq: [
      { q: '¿FollowNet es seguro para la banca en iPhone?', a: 'La VPN añade cifrado de transporte, pero usa las apps oficiales del banco y sitios HTTPS. FollowNet no sustituye la higiene de seguridad del dispositivo.' },
      { q: '¿VPN segura significa «grado militar»?', a: 'Los términos de marketing varían. FollowNet usa protocolos VPN modernos estándar; consulta nuestra documentación y la Política de privacidad para los detalles.' },
      { q: '¿La VPN protege contra el phishing?', a: 'No. La VPN cifra el tráfico; no bloquea enlaces maliciosos ni páginas de inicio de sesión falsas.' },
    ],
  },
  'hysteria2-vpn-ios': {
    h1: 'VPN Hysteria2 para iOS — otra vía cuando la red frena los túneles',
    lead:
      'FollowNet incluye Hysteria2 en iPhone y iPad junto a WireGuard, IKEv2 y AmneziaWG. Úsalo manualmente o deja que Smart Connect elija protocolo cuando tu red pierde paquetes o es hostil al tráfico VPN clásico.',
    sections: [
      { title: 'Cuándo ayuda Hysteria2 en iOS', body: 'Algunas conexiones de hotel, SIM de viaje y operadores con filtros degradan WireGuard o bloquean el establecimiento de la conexión. Hysteria2 es una vía alternativa práctica dentro del stack VPN de FollowNet — no es una red mixta ni garantiza acceso en todas partes.' },
      { title: 'Cómo activar Hysteria2', body: 'Abre Ajustes → Protocolo y elige Hysteria2, o deja Smart Connect activado para la selección automática. Tras cambiar, ejecuta el Speed Test en el mismo Wi‑Fi o LTE para comparar cifras reales en lugar de suponer.' },
    ],
    bullets: ['Hysteria2 junto a WireGuard, IKEv2 y AmneziaWG', 'Smart Connect puede elegirlo en redes difíciles', 'Selección manual siempre disponible', 'Funciona con el límite semanal Free y Premium'],
    cta: CTA,
    faq: [
      { q: '¿Hysteria2 es mejor que WireGuard?', a: 'No siempre. En redes tranquilas WireGuard suele ser el más rápido; Hysteria2 ayuda cuando esas vías fallan. Mide con el Speed Test.' },
      { q: '¿Smart Connect incluye Hysteria2?', a: 'Smart Connect evalúa las condiciones de la red y puede elegir entre los protocolos que admite FollowNet, incluido Hysteria2 cuando encaja.' },
      { q: '¿Hysteria2 está en Free?', a: 'Los protocolos disponibles dependen de tu plan en la app. Free usa el mismo conjunto de protocolos modernos dentro del límite semanal.' },
    ],
  },
  'vpn-chrome-extension': {
    h1: 'Extensión VPN de FollowNet para Chrome — navegación en escritorio, la misma cuenta',
    lead:
      '¿Necesitas FollowNet fuera del iPhone? La extensión de Chrome cubre el tráfico del navegador en Chrome de escritorio con la misma cuenta y límites honestos de Free y Premium, mientras la app de iOS sigue siendo la VPN de todo el dispositivo.',
    sections: [
      {
        title: 'Para qué sirve la extensión',
        body:
          'La extensión de Chrome protege la navegación en Chrome (o navegadores Chromium compatibles) en un ordenador. Inicia sesión con tu código de email de FollowNet, elige una ubicación de tu plan y mantén el popup ligero. Es un proxy del navegador, no una VPN de sistema completa para todas las apps de macOS o Windows.',
      },
      {
        title: 'Lo que no cubre',
        body:
          'El tráfico fuera del navegador compatible — apps de escritorio, otros navegadores, actualizaciones del sistema — no lo protege la extensión. Para cubrir todo el teléfono o tablet, usa la app FollowNet para iOS con Network Extension.',
      },
      {
        title: 'Cómo se complementa con el iPhone',
        body:
          'Usa la app de iOS para la conexión automática, los widgets, los datos móviles, los perfiles de red y la VPN para todas las apps. Usa Chrome cuando trabajes en el ordenador. Una sola cuenta une ambos; el tráfico semanal Free, Premium y las plazas de dispositivos van con la cuenta.',
      },
      {
        title: 'Kill Switch, listas de anuncios y enrutamiento',
        body:
          'El Kill Switch intenta evitar que Chrome filtre tráfico si cae el proxy (solo en el navegador, no en todo el sistema). Las listas opcionales tipo EasyList / AdGuard reducen anuncios y rastreadores. El enrutamiento por sitio puede enviar ciertos dominios por el proxy mientras otras pestañas van directas — siempre solo en Chrome.',
      },
      {
        title: 'Configuración en pocos pasos',
        body:
          'Instala la extensión FollowNet desde Chrome Web Store, inicia sesión con el mismo código de email que en iOS, elige un servidor entre las ubicaciones de tu plan y conecta. Si algo falla, confirma que has iniciado sesión y que te queda tráfico semanal Free.',
      },
      {
        title: 'Free semanal o Premium',
        body:
          'Free incluye un límite de tráfico semanal para que evalúes la navegación en escritorio antes de pagar. Premium elimina el límite según tu suscripción. Ningún plan convierte la extensión en una VPN de sistema de escritorio.',
      },
    ],
    bullets: [
      'La misma cuenta de FollowNet que en iOS',
      'Proxy del navegador + Kill Switch — no una VPN de todo el escritorio',
      'Bloqueo de anuncios opcional tipo EasyList / AdGuard',
      'Tráfico semanal Free para evaluar',
      'Premium opcional para tráfico ilimitado con las condiciones actuales',
    ],
    cta: 'Instalar la extensión de Chrome',
    faq: [
      { q: '¿La extensión de Chrome sustituye a la app de iPhone?', a: 'No. La VPN de iOS cubre todo el teléfono; Chrome cubre el tráfico del navegador en el escritorio.' },
      { q: '¿Puedo usar Free en Chrome?', a: 'Sí. Free incluye tráfico semanal para evaluar; Premium elimina el límite según tu suscripción.' },
      { q: '¿La extensión protege Slack, Zoom u otras apps de escritorio?', a: 'No. Solo cubre el tráfico del navegador compatible. Si necesitas todas las apps, usa una VPN de sistema — en el teléfono, la app FollowNet para iOS.' },
      { q: '¿Hay app VPN para macOS?', a: 'Hoy FollowNet prioriza iOS y la extensión de Chrome en lugar de esperar a un cliente completo para macOS.' },
    ],
  },
  'vpn-widgets-ios': {
    h1: 'Widgets VPN para iOS — el estado de FollowNet en tu pantalla de inicio',
    lead:
      'Los widgets de FollowNet muestran el estado de la conexión de un vistazo en iPhone y iPad, para que sepas si el túnel está activo sin abrir la app cada vez.',
    sections: [
      { title: 'Por qué ayudan los widgets VPN', body: 'El Wi‑Fi público y la conexión automática solo sirven si notas cuándo la VPN no arrancó. Los widgets muestran el estado junto a tus otros mosaicos — primero el estado, no un mini panel de métricas de marketing.' },
      { title: 'Combina widgets con la conexión automática', body: 'Configura la conexión automática en Solo Wi‑Fi, Solo LTE o Siempre en Ajustes y usa los widgets para confirmar el túnel tras entrar en una red. La elección de protocolo sigue en Ajustes o en Smart Connect.' },
    ],
    bullets: ['Estado en la pantalla de inicio sin abrir la app', 'Encaja con los hábitos de conexión automática', 'App nativa de iOS en App Store', 'Gratis para probar — Premium opcional'],
    cta: CTA,
    faq: [
      { q: '¿Qué versiones de iOS admiten los widgets de FollowNet?', a: 'El soporte de widgets sigue los requisitos de la versión actual en App Store; mantén FollowNet e iOS actualizados.' },
      { q: '¿Puedo conectar solo desde el widget?', a: 'Los widgets priorizan el estado y un acceso rápido a la app. Los controles completos están en FollowNet y en los avisos VPN del sistema.' },
      { q: '¿Los widgets gastan batería extra?', a: 'Los widgets son superficies de estado ligeras; el consumo de batería de la VPN viene del túnel activo, no del mosaico.' },
    ],
  },
  'how-to-setup-vpn-iphone': {
    h1: 'Cómo configurar una VPN en iPhone con FollowNet',
    lead:
      'Instala FollowNet desde App Store, inicia sesión con un código por email, permite una vez la configuración VPN y conecta con un toque — tráfico semanal Free incluido y Premium cuando necesites ilimitado.',
    sections: [
      {
        title: 'Configuración paso a paso',
        body:
          '1) Descarga FollowNet desde App Store. 2) Inicia sesión con el código de verificación del email. 3) Aprueba el aviso de configuración VPN de iOS. 4) Toca Conectar o activa Smart Connect. 5) Si quieres, configura la conexión automática, los perfiles DNS y un widget en la pantalla de inicio.',
      },
      {
        title: 'Qué significa el permiso VPN de iOS',
        body:
          'Apple exige un permiso explícito para las apps VPN con Network Extension. Estás añadiendo una configuración VPN de sistema gestionada por FollowNet, no instalando un perfil cualquiera. Si desinstalas la app, puedes eliminarla en Ajustes de iOS → VPN.',
      },
      {
        title: 'Consejos para el primer uso',
        body:
          'Prueba en el Wi‑Fi de casa antes de viajar. Ejecuta el Speed Test con y sin VPN. Elige una ubicación cercana de las que aparecen en la app. Si WireGuard falla en una red restrictiva, deja Smart Connect activado o prueba AmneziaWG, IKEv2 o Hysteria2 en Ajustes → Protocolo.',
      },
      {
        title: 'Ajustes recomendados tras conectar',
        body:
          'Para cafeterías y hoteles, pon la conexión automática en Solo Wi‑Fi. Mantén Smart Connect activado cuando viajes. Añade un widget para confirmar el estado. Cambia el DNS solo si quieres un resolvedor concreto; no sustituye el cifrado VPN.',
      },
      {
        title: 'Free semanal o Premium tras la configuración',
        body:
          'Free funciona al momento sin tarjeta e incluye tráfico semanal para evaluar. Cuando se te quede corto, pasa a Premium en App Store para tráfico ilimitado y las ubicaciones Premium de ese plan. Ningún plan garantiza desbloquear streaming.',
      },
    ],
    bullets: [
      'Instalación desde App Store — sin perfiles de configuración aparte',
      'Inicio de sesión por email sin contraseña',
      'Aprueba Network Extension una vez y conecta',
      'Smart Connect, conexión automática, DNS, Speed Test, widgets',
      'Límite semanal Free para evaluar antes de Premium',
    ],
    cta: CTA,
    faq: [
      { q: '¿Necesito tarjeta de crédito para configurarla?', a: 'No. FollowNet Free funciona sin tarjeta. Premium es opcional a través de App Store.' },
      { q: '¿Por qué iOS pide añadir una configuración VPN?', a: 'Apple exige permiso explícito para las apps VPN con Network Extension. Es lo normal en las VPN de App Store.' },
      { q: '¿Puedo usar la misma cuenta en iPad y Chrome?', a: 'Sí. Inicia sesión con el mismo email en el iPad y en la extensión de Chrome.' },
      { q: 'La configuración falló o la VPN no conecta, ¿y ahora?', a: 'Confirma que la configuración VPN está permitida, prueba Smart Connect, cambia de protocolo o de ubicación en la app y vuelve a probar en otra red si hay un portal cautivo.' },
    ],
  },
  'vpn-for-gaming-iphone': {
    h1: 'VPN para jugar en iPhone — latencia, protocolos y cuándo prescindir de ella',
    lead:
      'Usa FollowNet en el iPhone cuando quieras jugar cifrado en redes no fiables, y mide la latencia con el Speed Test para saber si WireGuard u otro protocolo compensa.',
    sections: [
      { title: 'Cuándo ayuda una VPN para juegos', body: 'El Wi‑Fi público, las SIM de viaje y las sesiones sensibles a la privacidad son buenos motivos para tunelizar el tráfico del juego. WireGuard suele ser la primera opción por su baja sobrecarga; IKEv2 ayuda cuando saltas entre LTE y Wi‑Fi en plena partida.' },
      { title: 'Cuándo desactivar la VPN', body: 'Si el Speed Test muestra un gran salto de latencia hacia un servidor lejano, jugar con VPN puede ir peor. Elige una salida más cercana, prueba Smart Connect o desconecta en redes de casa de confianza. FollowNet no inventa una ruta mejor que tu conexión de base.' },
    ],
    bullets: ['WireGuard primero por su baja sobrecarga', 'Smart Connect cuando las redes filtran la VPN', 'Speed Test para comprobar la latencia real', 'El mismo modelo Free y Premium que en el uso diario'],
    cta: CTA,
    faq: [
      { q: '¿FollowNet reduce el ping?', a: 'A veces una salida mejor ayuda; a menudo la VPN añade sobrecarga. Mide con el Speed Test en lugar de suponer.' },
      { q: '¿AmneziaWG sirve para juegos?', a: 'Úsalo cuando WireGuard normal esté bloqueado. El camuflaje puede cambiar algo de rendimiento por accesibilidad.' },
      { q: '¿Puedo jugar con Free?', a: 'Sí, dentro del límite semanal. Para jugar en competitivo todo el día suele hacer falta Premium.' },
    ],
  },
};
