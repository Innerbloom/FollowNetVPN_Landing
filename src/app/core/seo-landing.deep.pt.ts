import type { DeepGuides } from './seo-landing.deep';

const CTA = 'Baixar na App Store';

export const DEEP: DeepGuides = {
  'what-is-a-vpn': {
    h1: 'O que é uma VPN? Explicação simples para quem usa iPhone',
    lead:
      'Uma VPN (rede privada virtual) criptografa a conexão entre o seu aparelho e um servidor VPN, então o Wi‑Fi em que você está e o seu provedor de internet veem bem menos do que você faz. Aqui você entende como funciona, o que protege, o que não protege e como o FollowNet faz isso no iPhone.',
    sections: [
      {
        title: 'A resposta curta',
        body:
          'Normalmente cada app do iPhone fala com a internet diretamente pela rede em que você está: o hotspot do café, o roteador do hotel, a sua operadora. Quem administra essa rede vê a quais servidores você se conecta e, se o tráfego não for criptografado, o que você envia. A VPN coloca todo esse tráfego em um túnel criptografado até um servidor que você escolhe. A rede local só vê dados criptografados indo para um servidor; os sites veem o IP do servidor VPN, não o seu.',
      },
      {
        title: 'O que a VPN realmente protege',
        body:
          'A VPN protege o trecho entre o seu aparelho e o servidor VPN. Isso importa principalmente em redes que você não controla: Wi‑Fi público de cafés, aeroportos e hotéis, redes de visitantes em escritórios e chips de viagem. O dono da rede não vê quais sites e apps você usa, fica difícil bisbilhotar em hotspots compartilhados e é mais complicado para a rede desacelerar ou bloquear serviços inspecionando o seu tráfego.',
      },
      {
        title: 'O que a VPN não faz',
        body:
          'VPN não é antivírus e não deixa você anônimo. Se você entrou no Google, no Instagram ou no banco, esses serviços continuam sabendo que é você. Ela não impede links de phishing, páginas de login falsas nem malware que você mesmo instala. Cookies, contas e dados de pagamento ainda podem identificar você. Desconfie de VPNs que prometem «anonimato total» ou «invisibilidade de nível militar» — isso é marketing, não recurso.',
      },
      {
        title: 'Como a VPN funciona no iPhone',
        body:
          'O iOS tem um sistema próprio para apps de VPN chamado Network Extension. Quando você instala uma VPN da App Store e toca em Conectar, o iOS pede uma vez permissão para adicionar uma configuração de VPN. Depois disso, o app cria o túnel e o iOS manda por ele o tráfego do aparelho: Safari, mensageiros, e-mail, qualquer app. Enquanto estiver ativa, aparece o ícone VPN na barra de status. O FollowNet é construído sobre esse sistema, e não sobre um perfil de configuração baixado.',
        image: 'connect',
        imageCaption: 'FollowNet conectado: o cronômetro roda e o protocolo ativo aparece abaixo do status.',
      },
      {
        title: 'Protocolos: o «idioma» do túnel',
        body:
          'O protocolo de VPN define como o túnel criptografado é montado. O WireGuard é moderno e rápido; o IKEv2 reconecta suavemente ao trocar de Wi‑Fi para 4G; AmneziaWG, Hysteria2 e VLESS Reality ajudam em redes que desaceleram ou bloqueiam o tráfego VPN comum. Você não precisa aprender isso no primeiro dia: o Smart Connect do FollowNet escolhe um protocolo para a sua rede e troca por outro se falhar.',
        image: 'protocol',
        imageCaption: 'Ajustes → Protocolo VPN: deixe em Smart ou escolha você mesmo.',
      },
      {
        title: 'Você precisa de uma?',
        body:
          'Se você usa com frequência Wi‑Fi público ou de visitantes, viaja, trabalha em cafés ou está em uma rede com filtros, a VPN é uma ferramenta sensata para o dia a dia. Em casa, na sua própria rede, o ganho é principalmente privacidade em relação ao provedor. O jeito mais fácil de decidir é testar nas redes que você realmente usa: o FollowNet Free inclui tráfego semanal sem cartão de crédito.',
      },
    ],
    steps: {
      title: 'Teste uma VPN no iPhone em cinco passos',
      items: [
        'Instale o FollowNet pela App Store.',
        'Entre com o código enviado para o seu e-mail — sem criar senha.',
        'Toque em Conectar e permita a configuração de VPN quando o iOS pedir (só na primeira vez).',
        'Deixe o protocolo em Smart e confira o ícone VPN na barra de status.',
        'Abra alguns sites e apps e depois rode o Speed Test para ver a sua velocidade real.',
      ],
    },
    table: {
      title: 'Sem VPN e com VPN',
      head: ['', 'Sem VPN', 'Com VPN'],
      rows: [
        ['O que o dono do Wi‑Fi vê', 'Quais servidores e sites você acessa', 'Tráfego criptografado para um servidor VPN'],
        ['O que os sites veem', 'Seu IP real', 'O IP do servidor VPN'],
        ['Proteção no Wi‑Fi público', 'Depende do HTTPS de cada site', 'Todo o trecho até o servidor VPN criptografado'],
        ['Logins, cookies, contas', 'Identificam você', 'Continuam identificando você'],
        ['Phishing e malware', 'Não bloqueados', 'A VPN sozinha não bloqueia'],
      ],
    },
    bullets: [
      'A VPN criptografa o caminho do aparelho até o servidor VPN',
      'Mais útil em Wi‑Fi público, em viagens e em redes com filtros',
      'Não é antivírus nem anonimato — as contas ainda identificam você',
      'No iPhone, VPNs da App Store usam o Network Extension da Apple',
      'O FollowNet Free permite testar com tráfego semanal, sem cartão',
    ],
    cta: CTA,
    faq: [
      { q: 'Usar VPN é legal?', a: 'Na maioria dos países, sim, mas as regras variam. Você é responsável por cumprir as leis locais e os termos dos serviços que usa.' },
      { q: 'A VPN deixa o iPhone mais lento?', a: 'A criptografia e o desvio até o servidor acrescentam um pouco de latência. Um servidor próximo e um protocolo moderno como o WireGuard costumam manter a diferença pequena; o Speed Test mostra os números reais.' },
      { q: 'A VPN gasta muita bateria?', a: 'Um pouco. Manter um túnel aberto consome energia, principalmente com sinal fraco. Protocolos modernos são econômicos e no dia a dia quase não se nota.' },
      { q: 'VPN grátis é segura?', a: 'Depende do serviço. Leia a política de privacidade e veja como o plano gratuito é financiado. O FollowNet Free é uma VPN de verdade com limite semanal e Política de Privacidade publicada.' },
    ],
  },

  'how-vpn-works': {
    h1: 'Como a VPN funciona no iPhone: túnel, protocolos, servidores e DNS',
    lead:
      'A VPN parece um simples botão, mas por trás dele trabalham quatro coisas: um túnel criptografado, o protocolo que o monta, o servidor por onde o tráfego sai e o resolvedor DNS que transforma nomes em endereços. Vamos passar por cada uma usando o FollowNet no iPhone como exemplo.',
    sections: [
      {
        title: '1. O túnel',
        body:
          'Quando você toca em Conectar, o FollowNet pede ao iOS para iniciar uma Network Extension. Ela abre uma conexão criptografada com um servidor VPN, e o iOS manda por ela o tráfego do aparelho. Cada pacote é criptografado no iPhone, vai até o servidor, é descriptografado lá e segue para o destino. As respostas voltam pelo mesmo caminho. Para a rede do café ou do hotel, tudo parece um único fluxo criptografado para um endereço.',
      },
      {
        title: '2. O protocolo',
        body:
          'O protocolo define como o túnel é negociado e como os pacotes são empacotados. O WireGuard é leve e rápido em redes tranquilas. O IKEv2 retoma bem o túnel ao trocar de Wi‑Fi para 4G. O AmneziaWG mantém o núcleo do WireGuard, mas muda a aparência do tráfego; o Hysteria2 roda sobre QUIC e aguenta perda de pacotes; o VLESS Reality disfarça a conexão de HTTPS comum. O Smart Connect escolhe por você.',
        image: 'protocol',
        imageCaption: 'Protocolos do FollowNet. O Smart escolhe um e troca automaticamente.',
      },
      {
        title: '3. O servidor (ponto de saída)',
        body:
          'No servidor, o tráfego sai do túnel para a internet aberta. Os sites veem o IP desse servidor e a localização aproximada. Um servidor mais próximo costuma significar menos latência; outro país muda qual versão regional de alguns serviços você vê. No FollowNet, a lista de servidores mostra o ping de cada local, e «Local ideal» escolhe um rápido automaticamente.',
        image: 'servers',
        imageCaption: 'A lista de servidores com ping, locais Free e Premium e favoritos.',
      },
      {
        title: '4. DNS',
        body:
          'Antes de abrir um site, o iPhone precisa traduzir o nome (example.com) em um endereço IP. Isso é o DNS. Enquanto o FollowNet está conectado, você escolhe quem responde: o resolvedor padrão ou opções como Cloudflare, Google, Quad9 ou AdGuard (que também bloqueia domínios de anúncios e rastreadores). O DNS é separado da criptografia: ele decide quem traduz os nomes, não se o túnel é criptografado.',
        image: 'dns',
        imageCaption: 'Ajustes → DNS: escolha um resolvedor para privacidade, velocidade ou filtragem.',
      },
      {
        title: 'Como tudo se junta: Smart Connect e perfis',
        body:
          'O Smart Connect cuida do protocolo: começa pela opção com mais chance de funcionar na sua rede e sobe uma escada de alternativas se a conexão falhar ou o tráfego não passar. Os perfis de rede juntam protocolo, DNS, conexão automática e modo de servidor em um toque — por exemplo Public Wi‑Fi (WireGuard, Quad9, só Wi‑Fi, servidor mais rápido) ou Travel (IKEv2, Cloudflare, sempre).',
      },
      {
        title: 'Onde a proteção termina',
        body:
          'A criptografia termina no servidor VPN. Dali em diante o tráfego segue como qualquer outro, então o HTTPS dos próprios sites continua importando. A VPN também não funciona antes de você concluir a página de login do Wi‑Fi de hotel ou aeroporto — esses portais cativos precisam primeiro de uma conexão direta. E no computador, a extensão do FollowNet para Chrome é um proxy do navegador: protege as abas do Chrome, não todos os programas.',
      },
    ],
    steps: {
      title: 'Veja cada camada você mesmo',
      items: [
        'Conecte com o protocolo em Smart e veja qual protocolo o FollowNet mostra.',
        'Abra o Speed Test e meça latência, download e upload no servidor atual.',
        'Troque para um servidor em outro país e meça de novo — a latência depende da distância.',
        'Mude o DNS para Quad9 ou AdGuard em Ajustes e recarregue alguns sites.',
        'Teste o perfil Public Wi‑Fi ou Travel para ajustar todas as camadas de uma vez.',
      ],
    },
    table: {
      title: 'As quatro camadas num relance',
      head: ['Camada', 'O que decide', 'Onde mudar no FollowNet'],
      rows: [
        ['Túnel', 'O tráfego vai criptografado entre iPhone e servidor', 'Botão Conectar'],
        ['Protocolo', 'Como o túnel é montado e como aparece na rede', 'Ajustes → Protocolo VPN'],
        ['Servidor', 'Por onde o tráfego sai e qual IP os sites veem', 'Lista de servidores / Local ideal'],
        ['DNS', 'Quem traduz os nomes dos sites', 'Ajustes → DNS'],
      ],
    },
    bullets: [
      'Túnel, protocolo, servidor e DNS são camadas diferentes',
      'O Smart Connect escolhe o protocolo e troca automaticamente',
      'O servidor define a latência e o IP que os sites veem',
      'As opções de DNS mudam o resolvedor, não a criptografia',
      'Os perfis de rede ajustam todas as camadas em um toque',
    ],
    cta: CTA,
    faq: [
      { q: 'Meu provedor vê que eu uso VPN?', a: 'Normalmente ele vê que você está conectado a um servidor VPN, mas não o que vai dentro do túnel. Protocolos como o VLESS Reality fazem a conexão parecer mais com HTTPS comum.' },
      { q: 'A VPN criptografa o tráfego que já é HTTPS?', a: 'Sim, acrescenta uma segunda camada. O HTTPS protege o conteúdo; a VPN ainda esconde da rede local quais sites você acessa.' },
      { q: 'Por que alguns apps se comportam diferente com VPN?', a: 'Alguns serviços ajustam conteúdo ou verificações de segurança conforme o IP e o país do servidor. Um servidor mais próximo costuma ajudar.' },
      { q: 'Todo o tráfego do iPhone passa pelo túnel?', a: 'Enquanto a VPN está conectada, o iOS manda por ela o tráfego do aparelho. Alguns serviços do sistema e o tráfego da rede local seguem regras próprias da Apple.' },
    ],
  },

  'do-i-need-a-vpn': {
    h1: 'Preciso de VPN no iPhone? Uma checklist honesta',
    lead:
      'Você não precisa de VPN para tudo, mas em algumas situações comuns ela é a proteção mais simples que dá para acrescentar. Esta checklist ajuda a decidir com base em como você realmente usa o celular, sem alarmismo.',
    sections: [
      {
        title: 'Quando a VPN claramente ajuda',
        body:
          'O caso clássico é o Wi‑Fi público e de visitantes: cafés, aeroportos, hotéis, coworkings e redes de eventos são compartilhados com desconhecidos e administrados por gente que você não conhece. A VPN criptografa tudo entre o iPhone e o servidor VPN, então o hotspot não vê quais serviços você usa. Ela também ajuda com chips de viagem e em redes que desaceleram ou filtram certos serviços.',
      },
      {
        title: 'Quando ajuda um pouco',
        body:
          'Em casa, no seu próprio roteador, a VPN traz principalmente privacidade em relação ao provedor, que de outro modo vê os domínios que você visita. Se você divide a rede com visitantes ou colegas de casa, é mais um motivo. Quem trabalha remoto e troca de rede várias vezes por dia ganha com um canal criptografado constante.',
      },
      {
        title: 'Quando a VPN não resolve',
        body:
          'A VPN não impede e-mails de phishing, sites golpistas, senhas fracas nem malware. Ela não deixa você anônimo diante dos serviços em que está logado. Não garante acesso a qualquer catálogo de streaming e não substitui a VPN corporativa se a sua empresa exigir uma. Se é isso que preocupa você, comece pelas atualizações, um gerenciador de senhas e a verificação em duas etapas.',
      },
      {
        title: 'Um jeito simples de decidir',
        body:
          'Pense na última semana. Se você se conectou pelo menos uma vez a uma rede que não controla, vale ter uma VPN pronta. Configure para não precisar lembrar: a conexão automática do FollowNet pode ligar a VPN sempre que você entrar em um Wi‑Fi, sem mexer nos dados móveis — ou sempre, em qualquer rede.',
        image: 'autoconnect',
        imageCaption: 'Conexão automática: desligada, só Wi‑Fi, só 4G ou sempre.',
      },
      {
        title: 'Grátis ou paga?',
        body:
          'Teste antes de pagar. O FollowNet Free é uma VPN de verdade com tráfego semanal, os mesmos protocolos e o Smart Connect, sem cartão de crédito. O Premium remove o limite semanal, libera locais Premium e cobre até cinco aparelhos. Se o Free dá conta dos seus cafés e viagens, talvez você nunca precise de mais.',
      },
    ],
    steps: {
      title: 'Configure uma VPN em que você não precise pensar',
      items: [
        'Instale o FollowNet e entre com um código por e-mail.',
        'Conecte uma vez e permita a configuração de VPN do iOS.',
        'Abra Ajustes → Conexão automática e escolha «Só Wi‑Fi» (ou «Sempre»).',
        'Deixe o protocolo em Smart para que redes difíceis sejam tratadas sozinhas.',
        'Depois de uma semana, veja em Estatísticas quanto tráfego você realmente usa.',
      ],
    },
    table: {
      title: 'A sua situação e se a VPN ajuda',
      head: ['Situação', 'A VPN ajuda?', 'Por quê'],
      rows: [
        ['Wi‑Fi de café, aeroporto ou hotel', 'Sim, bastante', 'Rede compartilhada administrada por desconhecidos'],
        ['Chip de viagem ou roaming', 'Sim', 'Rede desconhecida, às vezes filtrada'],
        ['Seu Wi‑Fi de casa', 'Um pouco', 'Privacidade em relação ao provedor'],
        ['Links de phishing ou golpe', 'Não', 'Pedem cuidado e ferramentas de segurança, não um túnel'],
        ['A empresa exige a VPN dela', 'Use a dela', 'A política da empresa vem primeiro'],
      ],
    },
    bullets: [
      'Mais valiosa em Wi‑Fi alheio e em viagens',
      'Em casa traz privacidade em relação ao provedor',
      'Não substitui atualizações, senhas nem cuidado com links',
      'A conexão automática torna a proteção automática no Wi‑Fi',
      'O tráfego semanal do Free permite decidir antes de pagar',
    ],
    cta: CTA,
    faq: [
      { q: 'Preciso de VPN nos dados móveis?', a: 'Redes móveis costumam ser mais seguras que Wi‑Fi aberto. No 4G, a VPN traz principalmente privacidade em relação à operadora e ajuda em roaming e redes filtradas.' },
      { q: 'Devo deixar a VPN sempre ligada?', a: 'Pode. «Sempre» mantém a VPN ativa em todo lugar; «Só Wi‑Fi» é um bom equilíbrio se o que preocupa você são os hotspots.' },
      { q: 'O Retransmissão Privada do iCloud substitui uma VPN?', a: 'A Retransmissão Privada cobre o Safari e parte do tráfego. A VPN cobre todos os apps do aparelho e deixa você escolher o país do servidor.' },
      { q: 'A VPN protege o app do meu banco?', a: 'Ela criptografa o caminho em redes pouco confiáveis, o que é útil. A segurança do banco continua dependendo do app do banco, do HTTPS e da segurança do aparelho.' },
    ],
  },

  'vpn-for-beginners': {
    h1: 'VPN para iniciantes: configure o FollowNet no iPhone em cinco minutos',
    lead:
      'Nunca usou VPN? Não é preciso entender de protocolos para ficar protegido. Este guia para iniciantes cobre a instalação, o único aviso do iOS que você vai ver, o que a tela principal mostra e os três ajustes que vale conhecer.',
    sections: [
      {
        title: 'O que você precisa',
        body:
          'Um iPhone ou iPad com iOS recente, um endereço de e-mail e uns cinco minutos. O FollowNet Free não pede cartão de crédito. Você entra com um código de uso único enviado por e-mail, então não há senha para inventar nem esquecer.',
      },
      {
        title: 'O aviso de permissão do iOS',
        body:
          'Na primeira vez que você toca em Conectar, o iOS mostra uma mensagem dizendo que o FollowNet quer adicionar uma configuração de VPN. Isso é normal em qualquer VPN da App Store — é assim que a Apple permite que um app crie um túnel para todo o sistema. Toque em «Permitir» e confirme com Face ID ou código. Isso acontece uma vez só; depois, conectar é um toque.',
      },
      {
        title: 'Entendendo a tela principal',
        body:
          'Quando o botão grande fica verde e o cronômetro começa, você está conectado. Abaixo do cronômetro, o FollowNet mostra o protocolo em uso e, embaixo, o local atual com o ping. O ícone VPN na barra de status do iPhone confirma que o túnel está ativo. Para desconectar, toque no botão de novo.',
        image: 'connect',
        imageCaption: 'Conectado: cronômetro, protocolo e local atual num relance.',
      },
      {
        title: 'Três ajustes que vale conhecer',
        body:
          'Protocolo: deixe em Smart — o FollowNet escolhe o que funciona em cada rede. Conexão automática: escolha «Só Wi‑Fi» para a VPN ligar em todo hotspot. Local: «Local ideal» para velocidade, ou um país da lista. O resto — DNS, perfis de rede, Atalhos — pode esperar até bater a curiosidade.',
        image: 'settings',
        imageCaption: 'Ajustes: protocolo, DNS, conexão automática, perfis de rede e outros aparelhos.',
      },
      {
        title: 'Se algo não funcionar',
        body:
          'A maioria dos problemas tem causa simples. No Wi‑Fi de hotel ou aeroporto, conclua antes a página de login no Safari e depois conecte. Se a conexão travar, deixe Smart ou tente outro local. No plano Free, veja em Estatísticas se ainda há tráfego semanal. Desligar e ligar o Wi‑Fi resolve muitos problemas pontuais.',
      },
      {
        title: 'Em outros aparelhos',
        body:
          'A mesma conta funciona no iPad e na extensão do FollowNet para Chrome no computador. Em um aparelho novo, entre com o mesmo e-mail ou escaneie um QR code em Ajustes → Outros aparelhos no celular. A extensão do Chrome protege só as abas do navegador; os apps de iPhone e iPad protegem o aparelho inteiro.',
      },
    ],
    steps: {
      title: 'Sua primeira conexão, passo a passo',
      items: [
        'Baixe o FollowNet na App Store e abra o app.',
        'Digite o seu e-mail e o código que chegar.',
        'Toque no botão grande Conectar.',
        'Toque em «Permitir» no aviso do iOS e confirme com Face ID ou código.',
        'Espere o cronômetro começar e o ícone VPN aparecer na barra de status.',
        'Opcional: Ajustes → Conexão automática → Só Wi‑Fi.',
      ],
    },
    bullets: [
      'Sem cartão e sem senha: login com código por e-mail',
      'Permita o aviso do iOS uma vez e conecte com um toque',
      'Deixe o protocolo em Smart — nada técnico para decidir',
      '«Só Wi‑Fi» protege você automaticamente nos hotspots',
      'A mesma conta funciona no iPad e no Chrome',
    ],
    cta: CTA,
    faq: [
      { q: 'É seguro permitir a configuração de VPN?', a: 'Sim, para uma VPN da App Store esse é o mecanismo padrão da Apple. Você pode removê-la quando quiser em Ajustes do iOS → VPN ou apagando o app.' },
      { q: 'Preciso mudar ajustes técnicos?', a: 'Não. Os padrões — protocolo Smart e Local ideal — servem para a maioria. A conexão automática é a única coisa que costuma valer a pena mudar.' },
      { q: 'Como sei que a VPN está ligada?', a: 'O botão do FollowNet fica verde com o cronômetro rodando, e o ícone VPN aparece na barra de status do iPhone.' },
      { q: 'O que acontece quando o tráfego Free acaba?', a: 'Novas conexões ficam pausadas até o limite semanal renovar, ou você pode passar para o Premium com tráfego ilimitado.' },
    ],
  },

  'free-vpn-vs-paid': {
    h1: 'VPN grátis ou paga: o que você realmente ganha (e entrega)',
    lead:
      'VPNs «grátis» vão de planos honestos com limite a apps que vendem os seus dados. As pagas também não são automaticamente melhores. Veja o que de fato muda, o que conferir antes de confiar em qualquer uma e como se comparam o Free e o Premium do FollowNet.',
    sections: [
      {
        title: 'Como as VPNs grátis se pagam',
        body:
          'Servidores custam dinheiro, então toda VPN grátis é financiada de algum jeito. Modelos honestos são um plano gratuito limitado que incentiva o upgrade ou anúncios no app. Modelos problemáticos vendem dados de navegação, injetam anúncios no tráfego ou embutem SDKs de rastreamento. A política de privacidade e o rótulo de privacidade da App Store costumam mostrar com qual você está lidando.',
      },
      {
        title: 'Limites típicos dos planos grátis',
        body:
          'Espere um limite de dados (diário, semanal ou mensal), menos locais, servidores mais lentos ou lotados, anúncios ou tempo limitado por sessão. Nada disso é problema por si só; vira problema quando é escondido. Um bom plano grátis mostra o limite com clareza para você ver quando está chegando perto.',
      },
      {
        title: 'O FollowNet Free na prática',
        body:
          'O FollowNet Free é o mesmo app, com os mesmos protocolos, Smart Connect, opções de DNS e conexão automática. A diferença é um limite de tráfego semanal e o conjunto de locais Free. A tela Estatísticas mostra quanto você já usou e quanto resta na semana; o limite renova toda semana, não todo dia.',
        image: 'stats',
        imageCaption: 'Estatísticas: sessões, tempo, dados usados e limite semanal.',
      },
      {
        title: 'O que o Premium acrescenta',
        body:
          'O Premium remove o limite semanal, libera locais Premium, permite usar uma assinatura em até cinco aparelhos e tira os anúncios. Ele é comprado pela App Store como assinatura mensal ou anual; a anual inclui um curto teste grátis que aparece na janela de pagamento da Apple. A criptografia é a mesma nos dois planos — você paga por capacidade e opções, não por «mais segurança».',
        image: 'premium',
        imageCaption: 'Premium: tráfego ilimitado, todos os servidores Premium, Smart Connect e até cinco aparelhos.',
      },
      {
        title: 'Sinais de alerta em qualquer VPN',
        body:
          'Cuidado com apps sem empresa ou política de privacidade claras, que prometem «100% de anonimato», mostram contagens regressivas falsas ou dizem ter milhares de servidores em todos os países. Veja também como cancelar: assinaturas compradas pela App Store podem ser gerenciadas e canceladas a qualquer momento nos ajustes do seu ID Apple.',
      },
    ],
    table: {
      title: 'FollowNet Free e Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Tráfego', 'Limite semanal mostrado no app', 'Ilimitado'],
        ['Locais', 'Locais Free', 'Free + Premium'],
        ['Protocolos e Smart Connect', 'Incluídos', 'Incluídos'],
        ['DNS, conexão automática, Speed Test', 'Incluídos', 'Incluídos'],
        ['Aparelhos', 'Seus aparelhos dentro do limite Free', 'Até 5 aparelhos'],
        ['Anúncios', 'Podem aparecer em algumas regiões', 'Sem anúncios'],
      ],
    },
    steps: {
      title: 'Como decidir em uma semana',
      items: [
        'Use o FollowNet Free nas redes que você realmente usa: café, escritório, viagens.',
        'No fim da semana, olhe Estatísticas.',
        'Se ficou dentro do limite e os locais Free bastaram, continue no Free.',
        'Se bateu no limite ou precisa de um local Premium específico, considere o Premium.',
        'Na dúvida, comece pelo mensal e mude para o anual depois.',
      ],
    },
    bullets: [
      'Toda VPN grátis é financiada de algum jeito — descubra como',
      'Um bom plano grátis mostra seus limites abertamente',
      'FollowNet Free: mesmos protocolos, limite de tráfego semanal',
      'Premium: ilimitado, mais locais, até cinco aparelhos',
      'A criptografia não depende do plano',
    ],
    cta: CTA,
    faq: [
      { q: 'O FollowNet Free é mesmo grátis?', a: 'Sim. Não precisa de cartão. Você tem um limite de tráfego semanal; o Premium é opcional.' },
      { q: 'VPN paga é mais segura que grátis?', a: 'Não automaticamente. A segurança depende dos protocolos e das práticas do serviço. No FollowNet, os dois planos usam a mesma criptografia.' },
      { q: 'Posso cancelar o Premium quando quiser?', a: 'Sim. As assinaturas são gerenciadas pelo seu ID Apple; cancele antes da renovação e o acesso continua até o fim do período pago.' },
      { q: 'Uma assinatura Premium cobre meu iPad?', a: 'Sim, o Premium cobre até cinco aparelhos na mesma conta, incluindo a extensão do Chrome.' },
    ],
  },

  'vpn-vs-proxy': {
    h1: 'VPN ou proxy: qual a diferença e de qual você precisa?',
    lead:
      'Tanto a VPN quanto o proxy mandam o seu tráfego por outro servidor, por isso costumam ser confundidos. A diferença real é o alcance: a VPN cobre o aparelho inteiro; o proxy, normalmente um app só — quase sempre o navegador. Veja quando cada um faz sentido, com o app do FollowNet para iPhone e a extensão para Chrome como exemplos.',
    sections: [
      {
        title: 'O que um proxy faz',
        body:
          'Proxy é um servidor que repassa as requisições de um aplicativo. Você o configura nesse app — geralmente o navegador — e só o tráfego dele passa por ali. Muitos proxies não criptografam nada; os seguros usam conexões criptografadas, mas o alcance continua limitado ao app configurado.',
      },
      {
        title: 'O que uma VPN faz',
        body:
          'A VPN cria um túnel criptografado no nível do sistema. No iPhone, o FollowNet usa o Network Extension da Apple, então Safari, mensageiros, e-mail, jogos e serviços do sistema passam pelo túnel enquanto ele está ativo. Não é preciso configurar app por app, e mesmo os apps que ignoram ajustes de proxy ficam cobertos.',
      },
      {
        title: 'O FollowNet usa os dois — em aparelhos diferentes',
        body:
          'No iPhone e no iPad, o FollowNet é uma VPN completa para o aparelho inteiro. No computador, a extensão do FollowNet para Chrome funciona como proxy do navegador: protege as abas do Chrome com a mesma conta e traz um Kill Switch opcional para o navegador, listas de anúncios e rastreadores e roteamento por site. Ela não cobre Slack, Zoom nem outros apps de desktop.',
      },
      {
        title: 'Quando um proxy basta',
        body:
          'Se você só quer proteger a navegação no notebook — num café ou num escritório compartilhado —, um proxy do navegador é leve, liga rápido e não mexe no resto do sistema. Com o roteamento por site, dá para mandar só alguns sites por ele e deixar os outros direto.',
      },
      {
        title: 'Quando você quer uma VPN',
        body:
          'Assim que importam apps fora do navegador — mensageiros, e-mail, banco, jogos, chamadas —, você precisa de uma VPN de sistema. No celular isso é quase sempre o caso, e por isso o FollowNet no iOS é uma VPN, não um proxy.',
      },
    ],
    table: {
      title: 'VPN e proxy lado a lado',
      head: ['', 'VPN (FollowNet iOS)', 'Proxy (FollowNet Chrome)'],
      rows: [
        ['Alcance', 'Todos os apps do aparelho', 'Só as abas do navegador'],
        ['Configuração', 'Uma permissão do iOS e depois um toque', 'Instalar a extensão e entrar'],
        ['Criptografia', 'Todo o túnel até o servidor VPN', 'Tráfego do navegador até o proxy'],
        ['Kill Switch', 'Regras de conexão automática do iOS', 'Kill Switch do navegador'],
        ['Melhor para', 'Celulares, proteção de todos os apps', 'Navegar no notebook em lugares públicos'],
      ],
    },
    steps: {
      title: 'Como escolher na prática',
      items: [
        'No iPhone ou iPad: instale o app FollowNet — ele cobre todos os apps.',
        'No notebook em que você só navega: adicione a extensão do FollowNet para Chrome.',
        'Entre nos dois com o mesmo e-mail — conta e plano são compartilhados.',
        'Use o roteamento por site no Chrome se só alguns sites devem passar pelo proxy.',
      ],
    },
    bullets: [
      'Proxy: um app (geralmente o navegador); VPN: o aparelho inteiro',
      'O FollowNet no iPhone é uma VPN de sistema via Network Extension',
      'O FollowNet para Chrome é um proxy do navegador com Kill Switch e roteamento',
      'Uma conta e um plano para os dois',
      'Mensageiros, chamadas e banco precisam de VPN, não de proxy no navegador',
    ],
    cta: CTA,
    faq: [
      { q: 'Proxy é menos seguro que VPN?', a: 'Não necessariamente para o tráfego que cobre, mas cobre menos. Tudo fora do app configurado fica sem proteção.' },
      { q: 'Existe app de VPN do FollowNet para Mac ou Windows?', a: 'Hoje o FollowNet foca em iPhone/iPad e na extensão do Chrome para navegar no computador.' },
      { q: 'Posso usar o app do iPhone e a extensão do Chrome juntos?', a: 'Sim, com a mesma conta. O Premium cobre até cinco aparelhos.' },
      { q: 'A extensão do Chrome esconde meu IP dos sites?', a: 'Nos sites abertos no Chrome pelo proxy, os sites veem o endereço do servidor proxy.' },
    ],
  },

  'what-is-dns-leak': {
    h1: 'O que é vazamento de DNS e como escolher o DNS com VPN no iPhone',
    lead:
      'Toda vez que você abre um site, o aparelho primeiro pergunta o endereço a um servidor DNS. Se essas consultas passam por fora da VPN, a rede ainda vê quais sites você visita — isso é vazamento de DNS. Veja o que isso significa na prática e como as opções de DNS do FollowNet entram nessa história.',
    sections: [
      {
        title: 'DNS em um parágrafo',
        body:
          'O DNS é a lista telefônica da internet. O iPhone pergunta a um resolvedor «qual é o endereço de example.com?» antes de se conectar. Por isso o resolvedor fica sabendo de cada domínio que você procura. Sem VPN, ele costuma ser o do seu provedor ou da rede Wi‑Fi, e as consultas muitas vezes viajam sem criptografia.',
      },
      {
        title: 'O que é vazamento de DNS',
        body:
          'O vazamento acontece quando o túnel protege o tráfego, mas as consultas de nomes ainda vão para o resolvedor da rede local, por fora do túnel. O conteúdo continua criptografado, mas a rede vê a lista de domínios que você visita. As causas mais comuns são apps mal configurados, perfis de configuração instalados à mão ou casos-limite do sistema.',
      },
      {
        title: 'Como o FollowNet lida com o DNS',
        body:
          'Enquanto o FollowNet está conectado, você escolhe o resolvedor em Ajustes → DNS. «Padrão» usa o resolvedor recomendado para máxima compatibilidade. Cloudflare é rápido e focado em privacidade, Google é amplamente disponível, Quad9 bloqueia domínios maliciosos conhecidos, AdGuard bloqueia anúncios, rastreadores e phishing, e AdGuard Family acrescenta filtro de conteúdo adulto.',
        image: 'dns',
        imageCaption: 'Opções de DNS no FollowNet: Padrão, Cloudflare, Google, AdGuard, AdGuard Family e Quad9.',
      },
      {
        title: 'Como escolher o resolvedor',
        body:
          'Para a maioria, Padrão ou Cloudflare é o ponto de partida certo. Escolha Quad9 para proteção extra contra sites maliciosos, AdGuard para menos anúncios nos apps e no navegador, AdGuard Family para aparelhos de crianças. Se depois da troca o site do banco ou a intranet da empresa parar de funcionar, volte para Padrão — resolvedores com filtro às vezes bloqueiam domínios legítimos.',
      },
      {
        title: 'DNS não é criptografia',
        body:
          'Trocar o DNS muda quem responde às consultas; não criptografa o seu tráfego. Quem faz isso é o túnel da VPN. Juntos, eles dão as duas coisas: tráfego criptografado e um resolvedor escolhido por você. Os perfis de rede ajustam ambos de uma vez — o Public Wi‑Fi usa Quad9, o Travel usa Cloudflare.',
      },
      {
        title: 'Como testar vazamentos',
        body:
          'Conecte o FollowNet, abra no Safari um site de teste de vazamento de DNS e rode o teste estendido. Os resolvedores mostrados devem pertencer à opção escolhida ou ao serviço de VPN, não ao seu provedor de casa nem ao hotel. Repita ao trocar de rede. Mantenha o iOS atualizado e não instale perfis de VPN aleatórios da internet.',
      },
    ],
    steps: {
      title: 'Configurar o DNS no FollowNet',
      items: [
        'Conecte o FollowNet.',
        'Abra Ajustes → DNS.',
        'Escolha uma opção — por exemplo Cloudflare ou Quad9.',
        'Recarregue alguns sites e rode um teste de vazamento de DNS no Safari.',
        'Se algo quebrar, volte para Padrão.',
      ],
    },
    table: {
      title: 'Qual opção de DNS para cada objetivo',
      head: ['Opção', 'Melhor para', 'Observação'],
      rows: [
        ['Padrão', 'Máxima compatibilidade', 'Ponto de partida recomendado'],
        ['Cloudflare', 'Velocidade e privacidade', 'Usado no perfil Travel'],
        ['Google', 'Confiabilidade', 'Amplamente disponível'],
        ['Quad9', 'Bloquear domínios maliciosos', 'Usado nos perfis Public Wi‑Fi e Restricted'],
        ['AdGuard', 'Menos anúncios e rastreadores', 'Pode bloquear domínios legítimos'],
        ['AdGuard Family', 'Aparelhos de crianças', 'Acrescenta filtro de conteúdo adulto'],
      ],
    },
    bullets: [
      'Vazamento de DNS revela os domínios visitados mesmo com tráfego criptografado',
      'O FollowNet deixa você escolher o resolvedor com a VPN conectada',
      'Quad9 e AdGuard acrescentam segurança ou filtro de anúncios',
      'Escolher o DNS não substitui a criptografia da VPN',
      'Depois de mudar, teste em um site de vazamento de DNS',
    ],
    cta: CTA,
    faq: [
      { q: 'Qual DNS é o mais privado?', a: 'Depende da política do provedor. Cloudflare e Quad9 publicam seus compromissos de privacidade; leia e escolha em quem confia.' },
      { q: 'O AdGuard DNS substitui um bloqueador de anúncios?', a: 'Ele bloqueia muitos domínios de anúncios e rastreamento em todos os apps, mas não remove anúncios servidos pelo mesmo domínio do conteúdo.' },
      { q: 'Por que um site parou de funcionar depois de trocar o DNS?', a: 'Resolvedores com filtro às vezes bloqueiam um domínio de que o site precisa. Volte para Padrão e ele deve carregar.' },
      { q: 'Preciso trocar o DNS?', a: 'Não. O Padrão funciona bem. As opções de DNS são um extra para filtragem ou preferência.' },
    ],
  },

  'vpn-hotel-wifi': {
    h1: 'Usando VPN no Wi‑Fi do hotel com o iPhone',
    lead:
      'O Wi‑Fi do hotel é compartilhado, muitas vezes antigo e quase sempre fica atrás de uma página de login. Isso faz dele um dos melhores lugares para usar VPN — e um dos mais irritantes se você conectar na ordem errada. Esta é a rotina que funciona.',
    sections: [
      {
        title: 'Por que redes de hotel pedem VPN',
        body:
          'Todos os hóspedes dividem a mesma rede, o equipamento raramente é atualizado e você não sabe quem a administra. Alguns hotéis ainda registram o tráfego ou inserem páginas próprias. A VPN criptografa tudo entre o iPhone e o servidor VPN, então nem outros hóspedes nem o operador veem quais serviços você usa.',
      },
      {
        title: 'Primeiro a página de login, depois a VPN',
        body:
          'A maioria dos hotéis usa um portal cativo — a página onde você digita o número do quarto ou aceita os termos. Ela precisa de conexão direta. Se a VPN já estiver ligada, a página pode não carregar e o túnel não alcançar a internet. Entre no Wi‑Fi, conclua o portal no Safari, confira se um site comum abre e só então conecte o FollowNet.',
      },
      {
        title: 'Escolha os ajustes certos',
        body:
          'Em redes de hotel tranquilas, o perfil Public Wi‑Fi é ideal: WireGuard para velocidade, DNS Quad9 e conexão automática no Wi‑Fi. Alguns hotéis desaceleram ou bloqueiam tráfego VPN; aí mude para o perfil Restricted, que mantém o Smart Connect ativo e permite passar para AmneziaWG, Hysteria2 ou VLESS Reality.',
        image: 'autoconnect',
        imageCaption: '«Só Wi‑Fi» liga a VPN automaticamente em cada hotspot.',
      },
      {
        title: 'Confira a velocidade com honestidade',
        body:
          'À noite, quando todo mundo assiste a vídeos, a internet do hotel costuma ficar lenta. Rode o Speed Test sem e com VPN na mesma rede. Se a diferença for grande, escolha um servidor mais próximo ou deixe o «Local ideal» decidir. A VPN não cria banda que o hotel não tem.',
        image: 'speedtest',
        imageCaption: 'O Speed Test mostra download, upload, latência, jitter e perda de pacotes.',
      },
      {
        title: 'Salve o que funciona',
        body:
          'Redes hoteleiras costumam usar a mesma estrutura de rede em todos os hotéis. Quando encontrar uma combinação que funcione — protocolo, DNS e servidor —, salve como perfil de rede próprio com o nome da rede de hotéis. Da próxima vez, basta um toque.',
      },
      {
        title: 'Quando a conexão cai toda hora',
        body:
          'Alguns portais deslogam a cada poucas horas ou todo dia. Se a VPN de repente parar de passar tráfego, desconecte, abra o Safari para ver se a página de login voltou, entre de novo e reconecte. É a regra do hotel, não falha da VPN.',
      },
    ],
    steps: {
      title: 'Rotina no Wi‑Fi do hotel',
      items: [
        'Entre no Wi‑Fi do hotel e conclua a página de login no Safari.',
        'Abra qualquer site comum para confirmar que a internet funciona.',
        'Conecte o FollowNet com o perfil Public Wi‑Fi ou Smart.',
        'Se não conectar ou as páginas travarem, mude para o perfil Restricted.',
        'Rode o Speed Test e escolha um servidor mais próximo se precisar.',
        'Salve a configuração que funcionou como perfil próprio para essa rede de hotéis.',
      ],
    },
    bullets: [
      'Redes compartilhadas de hotel são o caso típico para VPN',
      'Sempre conclua a página de login antes de conectar',
      'Public Wi‑Fi para redes tranquilas, Restricted para as difíceis',
      'O Speed Test mostra se o gargalo é o hotel ou o servidor',
      'Salve um perfil que funcione para cada rede de hotéis',
    ],
    cta: CTA,
    faq: [
      { q: 'Por que a página de login do hotel não abre com a VPN ligada?', a: 'O portal precisa de conexão direta. Desconecte, conclua o login e reconecte.' },
      { q: 'Wi‑Fi de hotel com senha é seguro?', a: 'Uma senha compartilhada protege de quem está fora, não de outros hóspedes nem do operador. A VPN acrescenta essa camada que falta.' },
      { q: 'A VPN resolve um Wi‑Fi de hotel lento?', a: 'Não. Ela pode ajudar se o hotel desacelera serviços específicos, mas não acrescenta banda.' },
      { q: 'O Free basta para uma estadia em hotel?', a: 'Para navegar, mensagens e e-mail, normalmente sim. O streaming à noite pode gastar rápido o limite semanal; o Premium é ilimitado.' },
    ],
  },

  'vpn-airport-wifi': {
    h1: 'Wi‑Fi de aeroporto e VPN: privacidade durante a viagem',
    lead:
      'O Wi‑Fi do aeroporto é grátis, lotado e cheio de redes com nomes parecidos. A VPN mantém o seu tráfego criptografado enquanto você espera o voo. Veja como conectar com segurança, o que esperar da velocidade e como fazer um limite Free render.',
    sections: [
      {
        title: 'Riscos típicos de aeroporto',
        body:
          'Milhares de pessoas dividem os mesmos hotspots, e é fácil criar uma rede falsa com nome que parece oficial. Antes de conectar, confira o nome oficial da rede nas placas do aeroporto. Depois de conectado, a VPN criptografa o seu tráfego para que nem a rede nem outros passageiros vejam o que você faz.',
      },
      {
        title: 'Conecte na ordem certa',
        body:
          'As redes de aeroporto quase sempre têm página de login. Entre na rede, conclua a página (às vezes pede e-mail ou mostra um anúncio), confira se um site comum carrega e só então toque em Conectar no FollowNet. Com «Só Wi‑Fi», a VPN liga sozinha depois do portal.',
      },
      {
        title: 'Conte com a lotação',
        body:
          'Nos horários de pico, o Wi‑Fi do aeroporto pode ficar muito lento. Escolha um servidor próximo ou o «Local ideal» e rode o Speed Test antes de um download grande. Se o Wi‑Fi estiver inutilizável, passe para os dados móveis — o FollowNet também funciona no 4G, e «Sempre» o mantém ativo nos dois.',
        image: 'servers',
        imageCaption: 'Escolha um local próximo ou deixe o «Local ideal» decidir.',
      },
      {
        title: 'Como fazer o limite Free render',
        body:
          'Streaming de vídeo é o que mais gasta o limite semanal. Baixe filmes e músicas em casa antes de viajar, use a VPN para mensagens, e-mail, banco e navegação no portão de embarque e evite testes de velocidade desnecessários. O tráfego restante aparece em Estatísticas; se você viaja muito, o Premium remove o limite.',
        image: 'stats',
        imageCaption: 'Estatísticas mostra quanto resta do limite semanal.',
      },
      {
        title: 'Roaming e chegada',
        body:
          'Depois de pousar, você pode estar com um chip estrangeiro ou em roaming. Mantenha o Smart Connect ligado: algumas redes no exterior tratam o tráfego VPN de outro jeito, e o Smart Connect passa para um protocolo que funcione. O perfil Travel usa IKEv2, que lida bem com a troca entre o Wi‑Fi do aeroporto e a rede móvel.',
      },
    ],
    steps: {
      title: 'Antes de viajar e no aeroporto',
      items: [
        'Em casa: instale o FollowNet, entre e baixe conteúdo para ver offline.',
        'Ative «Só Wi‑Fi» ou aplique o perfil Travel.',
        'No aeroporto, confira o nome oficial do Wi‑Fi nas placas.',
        'Conecte-se a ele e conclua a página de login.',
        'Deixe o FollowNet conectar e navegue, converse e trabalhe normalmente.',
      ],
    },
    bullets: [
      'Confira o nome oficial da rede — hotspots falsos existem',
      'Primeiro a página de login, depois a VPN',
      'Escolha um servidor próximo — aeroportos ficam lotados',
      'Baixe vídeos antes para poupar tráfego Free',
      'O perfil Travel e o Smart Connect ajudam em redes estrangeiras',
    ],
    cta: CTA,
    faq: [
      { q: 'Wi‑Fi de aeroporto é perigoso?', a: 'É compartilhado com muitos desconhecidos e fácil de imitar. Usar a rede oficial com VPN elimina a maior parte do risco no uso diário.' },
      { q: 'Wi‑Fi do aeroporto ou dados móveis?', a: 'Dados móveis costumam ser mais seguros e às vezes mais rápidos. Se usar o Wi‑Fi, mantenha a VPN ligada.' },
      { q: 'Por que a VPN fica lenta no aeroporto?', a: 'Normalmente o próprio Wi‑Fi está lotado. Um servidor próximo ajuda; a VPN não acrescenta banda.' },
      { q: 'O FollowNet funciona no exterior?', a: 'Sim, dentro das leis locais. O Smart Connect se adapta a diferentes condições de rede.' },
    ],
  },

  'vpn-for-remote-work': {
    h1: 'VPN para trabalho remoto: proteja o iPhone no café, no coworking e na estrada',
    lead:
      'Trabalhar remoto significa e-mail, documentos e chamadas por redes que você não controla. Uma VPN pessoal mantém esse tráfego criptografado. Aqui está uma configuração prática para quem trabalha remoto — e onde as regras da empresa vêm primeiro.',
    sections: [
      {
        title: 'Por que o trabalho remoto precisa de criptografia',
        body:
          'O seu dia pode começar no Wi‑Fi de casa, continuar num café e terminar num coworking ou no trem. Cada rede é administrada por outra pessoa. A VPN criptografa o caminho do e-mail, do chat, dos documentos na nuvem e das videochamadas, então o operador da rede não vê quais serviços você usa nem consegue mexer no tráfego sem criptografia.',
      },
      {
        title: 'VPN pessoal e VPN corporativa',
        body:
          'Se a sua empresa oferece VPN própria para acessar sistemas internos, use-a — a política da empresa vem primeiro e o FollowNet não a substitui. O FollowNet é uma VPN pessoal: protege o seu aparelho em redes públicas e é ideal para freelancers, prestadores de serviço e quem não tem VPN corporativa.',
      },
      {
        title: 'Configuração recomendada',
        body:
          'Coloque a conexão automática em «Só Wi‑Fi» para a VPN ligar em todo hotspot. Deixe o protocolo em Smart para ter confiabilidade em redes diferentes. Para chamadas importantes, escolha um servidor perto de você ou de quem participa — em vídeo, a latência importa mais que a velocidade de download.',
        image: 'autoconnect',
        imageCaption: '«Só Wi‑Fi» protege você automaticamente em cada café.',
      },
      {
        title: 'Confira a qualidade antes que importe',
        body:
          'Rode o Speed Test dez minutos antes de uma reunião. Olhe a latência e o jitter, não só o download: jitter alto deixa o áudio picotado mesmo numa conexão rápida. Se o resultado estiver ruim, tente outro servidor próximo ou faça a chamada pelos dados móveis.',
        image: 'speedtest',
        imageCaption: 'Em videochamadas, jitter e perda de pacotes são o que mais pesa.',
      },
      {
        title: 'Celular e notebook com uma conta',
        body:
          'Use o FollowNet no iPhone para todos os apps e a extensão do FollowNet para Chrome no notebook para o trabalho no navegador — webmail, Google Docs, Notion, CRM. Uma assinatura Premium cobre até cinco aparelhos. Lembre que a extensão do Chrome protege só as abas do Chrome, não apps de desktop como Slack ou Zoom.',
      },
      {
        title: 'Quando o Free não basta',
        body:
          'Videochamadas diárias e uploads de arquivos grandes gastam muito tráfego. Se você trabalha remoto todo dia, o tráfego ilimitado do Premium é a escolha prática; o Free funciona bem para sessões ocasionais no café.',
      },
    ],
    steps: {
      title: 'Checklist do trabalho remoto',
      items: [
        'Instale o FollowNet no iPhone e entre.',
        'Ajustes → Conexão automática → Só Wi‑Fi.',
        'Adicione a extensão do FollowNet para Chrome no notebook com o mesmo e-mail.',
        'Antes das chamadas, rode o Speed Test e escolha um servidor próximo se o jitter estiver alto.',
        'Para sistemas internos, siga a política de VPN da empresa.',
      ],
    },
    bullets: [
      'Criptografa e-mail, chat, documentos e chamadas em redes públicas',
      'Use a VPN da empresa quando a política exigir',
      '«Só Wi‑Fi» evita ter que lembrar',
      'Observe latência e jitter antes de chamadas importantes',
      'Uma conta para iPhone e Chrome; o Premium cobre cinco aparelhos',
    ],
    cta: CTA,
    faq: [
      { q: 'Posso usar o FollowNet junto com a VPN da empresa?', a: 'O iOS mantém uma VPN por vez. Use a corporativa quando precisar dos sistemas internos e o FollowNet no resto do tempo.' },
      { q: 'A VPN piora as videochamadas?', a: 'Ela acrescenta um pouco de latência. Um servidor próximo reduz isso ao mínimo; o Speed Test mostra o efeito real.' },
      { q: 'O FollowNet protege Slack ou Zoom no notebook?', a: 'A extensão do Chrome cobre só as abas do navegador. No iPhone, o app protege todos os apps, inclusive Slack e Zoom.' },
      { q: 'O FollowNet vê meus dados de trabalho?', a: 'O tráfego em HTTPS continua criptografado de ponta a ponta. O que o FollowNet processa está descrito na Política de Privacidade.' },
    ],
  },

  'wireguard-vs-ikev2': {
    h1: 'WireGuard ou IKEv2 no iPhone: qual protocolo de VPN usar?',
    lead:
      'WireGuard e IKEv2 são os dois protocolos de VPN mais comuns no iOS, e o FollowNet suporta os dois. Na prática, são igualmente seguros; a diferença está na velocidade, no comportamento ao trocar de rede e em quão fácil as redes os reconhecem.',
    sections: [
      {
        title: 'WireGuard em resumo',
        body:
          'O WireGuard é um protocolo moderno, com código pequeno e auditável e criptografia atual. Conecta rápido, tem pouco overhead e costuma ser a opção mais rápida em redes estáveis de casa e do escritório. Como o tráfego dele tem um padrão reconhecível, algumas redes o desaceleram ou bloqueiam.',
      },
      {
        title: 'IKEv2 em resumo',
        body:
          'O IKEv2 é um padrão consolidado, com suporte nativo no iOS. O ponto forte é a mobilidade: quando você sai do Wi‑Fi para o 4G ou passa por áreas com sinal ruim, ele retoma o túnel com suavidade. É um pouco mais pesado que o WireGuard e também pode ser bloqueado em redes restritivas.',
      },
      {
        title: 'Velocidade',
        body:
          'Numa rede tranquila, o WireGuard costuma ser um pouco mais rápido e com menos latência. A diferença geralmente é pequena perto do efeito da distância até o servidor. Meça você mesmo: conecte ao mesmo servidor com cada protocolo e rode o Speed Test duas vezes.',
        image: 'speedtest',
        imageCaption: 'Compare protocolos no mesmo servidor com o Speed Test.',
      },
      {
        title: 'Troca de rede',
        body:
          'Se você faz trajetos diários, viaja ou se movimenta muito, o comportamento de reconexão do IKEv2 faz diferença — menos travadas quando o celular troca de rede. Por isso o perfil Travel do FollowNet usa IKEv2 por padrão.',
      },
      {
        title: 'Quando nenhum funciona',
        body:
          'Algumas redes atrapalham os dois. Nesse caso, use o Smart Connect: ele passa para AmneziaWG (uma variante do WireGuard com padrão de tráfego alterado), Hysteria2 (sobre QUIC, bom com perda de pacotes) ou VLESS Reality (parece HTTPS comum). O perfil Restricted mantém essa escada ligada por padrão.',
        image: 'protocol',
        imageCaption: 'Escolha WireGuard ou IKEv2 manualmente ou deixe o Smart.',
      },
    ],
    table: {
      title: 'WireGuard e IKEv2',
      head: ['', 'WireGuard', 'IKEv2'],
      rows: [
        ['Velocidade em redes estáveis', 'Geralmente o mais rápido', 'Rápido, um pouco mais de overhead'],
        ['Troca Wi‑Fi ↔ 4G', 'Boa', 'Excelente, retoma com suavidade'],
        ['Tempo de conexão', 'Muito rápido', 'Rápido'],
        ['Bloqueio em redes restritivas', 'Às vezes', 'Às vezes'],
        ['Perfil do FollowNet', 'Public Wi‑Fi', 'Travel'],
      ],
    },
    steps: {
      title: 'Escolha o seu em dois minutos',
      items: [
        'Conecte a um servidor próximo com WireGuard e rode o Speed Test.',
        'Troque para IKEv2 no mesmo servidor e rode o Speed Test de novo.',
        'Se você fica mais parado num lugar, mantenha o mais rápido.',
        'Se você se movimenta muito, prefira IKEv2 ou o perfil Travel.',
        'Se nenhum conectar, volte para Smart e deixe ele trocar sozinho.',
      ],
    },
    bullets: [
      'Os dois são seguros; a diferença é velocidade e mobilidade',
      'WireGuard: o mais rápido em redes estáveis',
      'IKEv2: o melhor ao alternar entre Wi‑Fi e 4G',
      'O Smart Connect passa para AmneziaWG, Hysteria2 ou VLESS Reality',
      'Meça na sua própria rede com o Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: 'Qual é mais seguro?', a: 'Os dois usam criptografia moderna e forte quando bem implementados. Escolha pela velocidade e mobilidade, não pela segurança.' },
      { q: 'Qual gasta menos bateria?', a: 'O WireGuard costuma ser um pouco mais leve, mas no dia a dia a diferença é pequena.' },
      { q: 'Posso deixar o FollowNet escolher?', a: 'Sim. O Smart Connect escolhe o protocolo para cada rede e troca se um falhar.' },
      { q: 'Os dois estão disponíveis no Free?', a: 'A disponibilidade segue o seu plano no app; os protocolos principais estão no Free dentro do limite semanal.' },
    ],
  },

  'what-is-kill-switch-vpn': {
    h1: 'O que é kill switch de VPN e como funciona no iPhone e no Chrome',
    lead:
      'O kill switch é uma rede de segurança: se a conexão da VPN cair, ele impede que o tráfego siga sem proteção. Como funciona depende da plataforma. Veja o que isso significa no iPhone e na extensão do FollowNet para Chrome, e como configurar tudo para que uma queda não exponha você.',
    sections: [
      {
        title: 'O problema que ele resolve',
        body:
          'Conexões de VPN podem cair — sinal fraco, troca de rede, reinício do servidor. Por alguns segundos, os apps podem mandar tráfego por fora do túnel pela rede local. Num hotspot em que você não confia, é exatamente isso que você queria evitar. O kill switch bloqueia o tráfego até o túnel voltar.',
      },
      {
        title: 'No computador: o Kill Switch do Chrome',
        body:
          'A extensão do FollowNet para Chrome tem um Kill Switch do navegador. Com ele ligado, o Chrome para de carregar páginas se a conexão com o proxy falhar, em vez de passar em silêncio para a conexão direta. Ele vale só para o Chrome: outros navegadores e apps de desktop não são afetados.',
      },
      {
        title: 'No iPhone: como o iOS cuida disso',
        body:
          'O iOS gerencia os túneis de VPN no nível do sistema pelo Network Extension. O FollowNet se apoia nesse comportamento do sistema e nas regras de conexão automática para trazer o túnel de volta rápido: com «Sempre», a VPN reinicia sozinha em qualquer rede. Não prometemos um botão mágico que garanta zero pacotes em cada caso-limite do iOS — nenhuma VPN honesta para iOS pode prometer isso.',
        image: 'autoconnect',
        imageCaption: '«Sempre» reinicia a VPN em qualquer rede.',
      },
      {
        title: 'Ajustes que reduzem vazamentos no iPhone',
        body:
          'Use «Sempre» em redes pouco confiáveis. Deixe o protocolo em Smart, para que um protocolo que falha seja trocado em vez de deixar você sem proteção. Em redes difíceis, aplique o perfil Restricted, que combina Smart Connect com «Sempre» e o servidor mais rápido. Adicione um widget na Tela de Início para ver num relance se você está protegido.',
      },
      {
        title: 'O que um kill switch não faz',
        body:
          'Ele não evita vazamentos causados por você — logins em contas, compartilhamento de localização, apps de rastreamento instalados. Também não mantém você online numa rede quebrada; só impede que o tráfego saia sem proteção enquanto a VPN reconecta.',
      },
    ],
    table: {
      title: 'Comportamento do kill switch por plataforma',
      head: ['', 'FollowNet iOS', 'FollowNet Chrome'],
      rows: [
        ['Alcance', 'O aparelho inteiro enquanto conectado', 'Abas do Chrome'],
        ['Mecanismo', 'Network Extension do iOS + conexão automática', 'Ajuste Kill Switch do navegador'],
        ['Se a conexão cair', 'A conexão automática restabelece o túnel', 'O Chrome para de carregar páginas'],
        ['Ajuste recomendado', '«Sempre» ou perfil Restricted', 'Kill Switch ligado'],
      ],
    },
    steps: {
      title: 'Ative as proteções',
      items: [
        'iPhone: Ajustes → Conexão automática → Sempre.',
        'iPhone: deixe o protocolo em Smart ou aplique o perfil Restricted.',
        'Chrome: abra os ajustes da extensão FollowNet e ligue o Kill Switch.',
        'Adicione o widget do FollowNet à Tela de Início para acompanhar o status.',
      ],
    },
    bullets: [
      'O kill switch bloqueia o tráfego quando a VPN cai',
      'Extensão do Chrome: Kill Switch próprio do navegador',
      'iPhone: Network Extension do iOS mais «Sempre»',
      'O Smart Connect troca automaticamente um protocolo que falha',
      'Nenhum kill switch protege contra seus próprios logins e apps',
    ],
    cta: CTA,
    faq: [
      { q: 'O FollowNet tem kill switch no iPhone?', a: 'O FollowNet usa o gerenciamento de VPN do iOS com conexão automática para restaurar o túnel; o botão Kill Switch explícito fica na extensão do Chrome.' },
      { q: 'O kill switch corta a internet toda?', a: 'Só enquanto a VPN reconecta. Se a própria rede caiu, você fica offline de qualquer jeito.' },
      { q: 'Devo usar kill switch sempre?', a: 'Em redes pouco confiáveis, sim. Em casa é opcional.' },
      { q: 'O Kill Switch do Chrome afeta outros navegadores?', a: 'Não, só o Chrome com a extensão FollowNet.' },
    ],
  },

  'vpn-not-connecting-iphone': {
    h1: 'VPN não conecta no iPhone? Solução passo a passo',
    lead:
      'Quando uma VPN não conecta, a causa quase sempre é uma destas cinco: a permissão do iOS, uma página de login do Wi‑Fi, o limite de tráfego, uma rede que bloqueia o protocolo ou uma falha temporária. Siga a lista na ordem — a maioria dos problemas se resolve nos três primeiros passos.',
    sections: [
      {
        title: '1. Confira a permissão de VPN do iOS',
        body:
          'Se você tocou em «Não Permitir» no aviso do iOS, ou se a configuração de VPN foi removida, o FollowNet não consegue iniciar o túnel. Abra o FollowNet e toque em Conectar de novo — o iOS vai perguntar outra vez. Você também pode ver em Ajustes do iOS → VPN se a configuração do FollowNet está lá.',
      },
      {
        title: '2. Conclua a página de login do Wi‑Fi',
        body:
          'Hotéis, aeroportos, trens e alguns cafés exigem login num portal cativo antes de a internet funcionar. Desconecte a VPN, abra o Safari, conclua a página, confira se um site comum carrega e conecte de novo.',
      },
      {
        title: '3. Confira o seu limite de tráfego',
        body:
          'No plano Free, novas conexões ficam pausadas quando o limite semanal acaba. Abra Estatísticas para ver quanto resta. Espere a renovação semanal ou passe para o Premium com tráfego ilimitado.',
        image: 'stats',
        imageCaption: 'Estatísticas mostra o limite semanal e o consumo.',
      },
      {
        title: '4. Deixe a rede com o Smart Connect',
        body:
          'Algumas redes bloqueiam ou desaceleram protocolos específicos. Coloque o protocolo em Smart para o FollowNet trocar automaticamente. Se ainda falhar, aplique o perfil Restricted ou tente manualmente AmneziaWG, Hysteria2 ou VLESS Reality. Teste também outro servidor — um local pode estar lotado ou temporariamente indisponível.',
        image: 'protocol',
        imageCaption: 'Ajustes → Protocolo VPN: Smart é a opção mais resistente.',
      },
      {
        title: '5. Descarte uma falha pontual',
        body:
          'Ligue e desligue o modo avião, esqueça e entre de novo no Wi‑Fi ou passe para os dados móveis para ver se o problema é a rede. Confira se o FollowNet e o iOS estão atualizados. Em último caso, remova a configuração de VPN em Ajustes do iOS → VPN e conecte de novo no FollowNet para recriá-la.',
      },
      {
        title: 'Conectado, mas nada carrega',
        body:
          'Se o FollowNet mostra Conectado mas as páginas não abrem, a rede provavelmente está atrapalhando o protocolo. Troque de protocolo ou de servidor e rode o Speed Test para confirmar que o tráfego passa. O FollowNet verifica o tráfego real antes de considerar a sessão saudável, mas a rede pode mudar no meio da sessão.',
      },
    ],
    steps: {
      title: 'Checklist rápida',
      items: [
        'Toque em Conectar e permita a configuração de VPN se o iOS pedir.',
        'Desconecte, conclua a página de login do Wi‑Fi no Safari e reconecte.',
        'Confira o tráfego semanal restante em Estatísticas (plano Free).',
        'Coloque o protocolo em Smart ou aplique o perfil Restricted.',
        'Escolha outro servidor.',
        'Ligue o modo avião ou passe para os dados móveis para testar a rede.',
        'Atualize o FollowNet e o iOS; recrie a configuração de VPN se precisar.',
      ],
    },
    table: {
      title: 'Sintoma e causa provável',
      head: ['Sintoma', 'Causa provável', 'Solução'],
      rows: [
        ['Conectar não faz nada', 'Falta a permissão de VPN', 'Permitir o aviso do iOS'],
        ['Funciona no 4G, não no Wi‑Fi', 'Portal cativo ou protocolo bloqueado', 'Fazer login; usar Smart ou Restricted'],
        ['Parou no meio da semana', 'Limite Free esgotado', 'Esperar a renovação ou fazer upgrade'],
        ['Conectado, mas sem páginas', 'Interferência no protocolo', 'Trocar protocolo ou servidor'],
        ['Falha em todo lugar', 'Falha temporária', 'Modo avião, atualizar, recriar a configuração'],
      ],
    },
    bullets: [
      'Quase sempre: permissão, página de login ou limite de tráfego',
      'Smart Connect e o perfil Restricted lidam com redes difíceis',
      'Teste outro servidor antes de achar que o app quebrou',
      'Testar nos dados móveis separa problema de rede de problema do app',
      'Recriar a configuração de VPN resolve falhas raras do iOS',
    ],
    cta: CTA,
    faq: [
      { q: 'Por que a VPN funciona no 4G e não no Wi‑Fi?', a: 'Provavelmente o Wi‑Fi pede login ou bloqueia o protocolo. Conclua o login e use o Smart Connect.' },
      { q: 'Toquei em «Não Permitir» sem querer. E agora?', a: 'Toque em Conectar no FollowNet de novo; o iOS vai mostrar o aviso outra vez.' },
      { q: 'Reinstalar o app ajuda?', a: 'Raramente é necessário. Recriar a configuração de VPN em Ajustes do iOS → VPN costuma resolver do mesmo jeito.' },
      { q: 'Com quem falo se nada resolver?', a: 'Escreva para support@follow-net.com informando o tipo de rede, o protocolo e o horário do problema.' },
    ],
  },

  'vpn-slow-iphone': {
    h1: 'VPN lenta no iPhone? Como achar a causa e acelerar',
    lead:
      'Ficar um pouco mais lento com VPN é normal; muito mais lento, não. O segredo é medir antes de mudar qualquer coisa. Este guia mostra como descobrir se o gargalo é a rede, o servidor ou o protocolo — e o que fazer em cada caso.',
    sections: [
      {
        title: 'Primeiro, meça',
        body:
          'Desconecte a VPN e faça um teste de velocidade como referência. Depois conecte o FollowNet e rode o Speed Test embutido na mesma rede. Compare download, upload, latência e jitter. Se a referência já é lenta, o problema é a rede, não a VPN.',
        image: 'speedtest',
        imageCaption: 'Speed Test do FollowNet: download, upload, latência, jitter e perda.',
      },
      {
        title: 'A distância do servidor é o que mais pesa',
        body:
          'Cada mil quilômetros a mais acrescentam latência. Um servidor em outro continente pode transformar uma conexão rápida numa lenta. Use o «Local ideal» ou escolha o servidor mais próximo com o menor ping da lista. Escolha servidores distantes só quando precisar daquela região.',
        image: 'servers',
        imageCaption: 'O ping de cada local ajuda a escolher um servidor próximo e rápido.',
      },
      {
        title: 'Tente outro protocolo',
        body:
          'Em redes estáveis, o WireGuard costuma ser o mais rápido. Se a rede desacelera tráfego VPN, o WireGuard pode se arrastar enquanto AmneziaWG, Hysteria2 ou VLESS Reality vão melhor. O Smart Connect faz isso sozinho; para comparar manualmente, troque o protocolo em Ajustes e meça de novo no mesmo servidor.',
      },
      {
        title: 'Horário de pico e redes lotadas',
        body:
          'À noite em hotéis, trens e aeroportos, a banda é dividida. Sinal de celular fraco também limita a velocidade, com ou sem VPN. Se o teste mostrar muita perda de pacotes, o problema é o sinal: chegue mais perto do roteador ou de uma janela, ou alterne entre Wi‑Fi e 4G.',
      },
      {
        title: 'Chamadas e jogos: olhe o jitter',
        body:
          'Em videochamadas e jogos online, latência e jitter importam mais que o download. Uma conexão de 200 Mbps com jitter alto ainda vai engasgar. Escolha o servidor mais próximo e o WireGuard em redes estáveis.',
      },
      {
        title: 'Quando desligar a VPN é a resposta',
        body:
          'Com 4G fraco ou numa rede de casa confiável, às vezes o mais rápido é ficar sem VPN. É física: a criptografia e o desvio por um servidor sempre custam algo. «Só Wi‑Fi» dá proteção nos hotspots sem mexer nos dados móveis.',
      },
    ],
    steps: {
      title: 'Diagnóstico de velocidade na ordem',
      items: [
        'Faça um teste de velocidade sem VPN como referência.',
        'Conecte e rode o Speed Test do FollowNet na mesma rede.',
        'Mude para o «Local ideal» ou o servidor mais próximo com ping baixo.',
        'Compare WireGuard e Smart Connect no mesmo servidor.',
        'Se a perda for alta, melhore o sinal ou alterne entre Wi‑Fi e 4G.',
        'Se a rede estiver lotada, meça de novo num horário mais calmo.',
      ],
    },
    table: {
      title: 'O que os números dizem',
      head: ['Resultado', 'Significado', 'O que fazer'],
      rows: [
        ['Já lento sem VPN', 'O gargalo é a rede', 'Trocar de rede ou esperar'],
        ['Latência alta só com VPN', 'Servidor longe demais', 'Escolher um servidor mais próximo'],
        ['Download cai muito com VPN', 'Protocolo desacelerado', 'Tentar Smart ou outro protocolo'],
        ['Jitter ou perda altos', 'Sinal instável', 'Melhorar o sinal, alternar Wi‑Fi/4G'],
      ],
    },
    bullets: [
      'Compare sempre com uma referência sem VPN',
      'A distância do servidor é o fator principal',
      'Redes que desaceleram VPN favorecem AmneziaWG, Hysteria2 ou VLESS Reality',
      'Em chamadas e jogos, o jitter importa mais que os Mbps',
      'Um pouco de overhead é normal e inevitável',
    ],
    cta: CTA,
    faq: [
      { q: 'Quanto mais lenta uma VPN deveria ser?', a: 'Com um servidor próximo, muitas vezes só um pouco. Servidores distantes e redes lotadas aumentam a diferença.' },
      { q: 'O Premium é mais rápido que o Free?', a: 'A criptografia é a mesma. O Premium dá acesso a mais locais, o que pode significar um servidor mais próximo ou menos lotado.' },
      { q: 'O Speed Test gasta meu tráfego?', a: 'Sim, ele baixa e envia dados. No Free, evite rodar várias vezes.' },
      { q: 'Por que a VPN é rápida em casa e lenta no café?', a: 'A rede do café é mais lenta ou desacelera o tráfego VPN. Tente o Smart Connect e um servidor próximo.' },
    ],
  },

  'captive-portal-vpn-iphone': {
    h1: 'Portais cativos e VPN no iPhone: Wi‑Fi de hotel, aeroporto e trem',
    lead:
      'Portal cativo é a página de login que alguns Wi‑Fi mostram antes de liberar a internet. É o motivo mais comum para uma VPN «não funcionar» em Wi‑Fi público. Veja por quê e a ordem simples de passos que evita o problema.',
    sections: [
      {
        title: 'O que é um portal cativo',
        body:
          'Hotéis, aeroportos, trens, cafés e centros de eventos costumam interceptar a sua primeira requisição na web e mostrar uma página: número do quarto, aceitar os termos, ver um anúncio ou informar o e-mail. Até você concluir, a rede bloqueia o acesso normal à internet. O iOS costuma perceber isso e abrir sozinho uma pequena janela de login.',
      },
      {
        title: 'Por que ele briga com a VPN',
        body:
          'A VPN quer mandar tudo por um túnel criptografado até o servidor dela. Mas antes de o portal ser concluído, a rede bloqueia exatamente essa conexão. O resultado parece uma VPN que não conecta, ou que conecta mas não carrega nada. Nada quebrou — a rede só ainda não deixou você passar.',
      },
      {
        title: 'A ordem certa',
        body:
          'Entre na rede com a VPN desligada, conclua o portal na janela do iOS ou no Safari, confira se um site comum carrega e só então conecte o FollowNet. Se você usa a conexão automática no Wi‑Fi, ela vai ligar a VPN assim que a rede estiver utilizável.',
        image: 'autoconnect',
        imageCaption: 'A conexão automática liga a VPN no Wi‑Fi assim que a rede fica utilizável.',
      },
      {
        title: 'Quando o portal não aparece',
        body:
          'Às vezes o iOS não abre a janela de login. Abra o Safari e acesse um endereço http simples (por exemplo neverssl.com) — a rede vai redirecionar você para o portal. Se a VPN já estava ligada, desligue antes.',
      },
      {
        title: 'Portais que deslogam',
        body:
          'Muitas redes pedem login de novo depois de algumas horas ou todo dia. Se no hotel a VPN de repente parar de passar tráfego, veja se o portal voltou. Entre de novo e reconecte. É a política da rede, não uma pane da VPN.',
      },
      {
        title: 'Ganhe tempo em redes que você repete',
        body:
          'Para um hotel ou uma empresa de trens que você usa com frequência, salve um perfil de rede próprio com o protocolo, o DNS e o servidor que funcionam ali. Depois do portal, aplique com um toque.',
      },
    ],
    steps: {
      title: 'Rotina com portal cativo',
      items: [
        'Confirme que o FollowNet está desconectado.',
        'Entre na rede Wi‑Fi.',
        'Conclua a página de login (janela do iOS ou Safari).',
        'Abra qualquer site comum para confirmar o acesso.',
        'Conecte o FollowNet ou deixe a conexão automática fazer isso.',
        'Se o tráfego parar depois, veja se o portal pede um novo login.',
      ],
    },
    bullets: [
      'O portal precisa ser concluído antes de conectar a VPN',
      'Conecte a VPN só quando um site comum carregar',
      'neverssl.com ajuda a fazer aparecer um portal escondido',
      'Algumas redes pedem login todo dia',
      'Salve um perfil para redes que você usa com frequência',
    ],
    cta: CTA,
    faq: [
      { q: 'Por que a página de login não aparece?', a: 'A VPN ou uma conexão salva pode estar bloqueando. Desligue a VPN e abra um site http simples no Safari.' },
      { q: 'A própria página do portal é segura?', a: 'Ela passa antes de a VPN ligar, então não digite nada sensível além do que a rede pede.' },
      { q: 'O FollowNet pode conectar sozinho depois do portal?', a: 'Sim, com «Só Wi‑Fi» ou «Sempre» ele inicia assim que a rede libera o tráfego.' },
      { q: 'Ontem a VPN funcionou neste hotel, por que hoje não?', a: 'Provavelmente o login do portal expirou. Entre de novo e reconecte.' },
    ],
  },

  'vless-reality-ios': {
    h1: 'VLESS Reality no iPhone: o que é e quando o FollowNet usa',
    lead:
      'O VLESS Reality é um transporte de VPN mais recente, feito para parecer tráfego web criptografado comum. O FollowNet o oferece ao lado de WireGuard, IKEv2, AmneziaWG e Hysteria2. Este guia explica o que ele faz de diferente, quando ajuda e por que nem sempre é a opção mais rápida.',
    sections: [
      {
        title: 'O que é o VLESS Reality',
        body:
          'VLESS é um protocolo de transporte leve; Reality é uma técnica que faz a conexão parecer uma sessão TLS (HTTPS) normal com um site real. Para uma rede que analisa padrões de tráfego, a conexão se parece mais com navegação comum do que com um túnel VPN típico.',
      },
      {
        title: 'Por que ele existe',
        body:
          'Algumas redes reconhecem e desaceleram protocolos VPN clássicos como WireGuard ou IKEv2 — às vezes até os modificados. Nessas condições, um túnel pode mostrar «Conectado» e ainda assim deixar passar pouco ou nenhum tráfego. Um transporte que se mistura ao tráfego web comum oferece outro caminho quando os habituais travam.',
      },
      {
        title: 'Como o FollowNet usa',
        body:
          'Com o protocolo em Smart, o FollowNet usa o contexto da rede e as alternativas para decidir quando vale tentar o VLESS Reality. Você também pode escolhê-lo manualmente em Ajustes → Protocolo VPN ou aplicar o perfil Restricted, que mantém ativa toda a escada do Smart Connect. O FollowNet verifica se há tráfego real passando antes de considerar a sessão saudável.',
        image: 'protocol',
        imageCaption: 'Ajustes → Protocolo VPN: o Smart pode usar o VLESS Reality quando necessário.',
      },
      {
        title: 'Quando não usar',
        body:
          'Numa rede de casa tranquila, o VLESS Reality raramente é o mais rápido — em velocidade e latência, o WireGuard costuma ganhar. Use o VLESS Reality quando outros protocolos falharem ou funcionarem mal, não como padrão em todo lugar. A disponibilidade também depende dos servidores que o suportam no seu plano.',
      },
      {
        title: 'Confira se ajuda de verdade',
        body:
          'Depois de trocar, carregue algumas páginas reais e rode o Speed Test em vez de confiar só na cor do status. Compare com Smart e WireGuard no mesmo servidor. Se numa rede específica o VLESS Reality for claramente melhor, salve-o num perfil de rede próprio para aquele lugar.',
        image: 'speedtest',
        imageCaption: 'Confirme com o Speed Test que o tráfego realmente passa.',
      },
    ],
    table: {
      title: 'Onde o VLESS Reality se encaixa',
      head: ['Protocolo', 'Ponto forte', 'Melhor uso'],
      rows: [
        ['WireGuard', 'Velocidade, baixa latência', 'Redes estáveis de casa e escritório'],
        ['IKEv2', 'Reconexão suave', 'Troca entre Wi‑Fi e 4G'],
        ['AmneziaWG', 'WireGuard com padrão alterado', 'Redes que desaceleram o WireGuard'],
        ['Hysteria2', 'Aguenta perda de pacotes', 'Conexões instáveis ou lotadas'],
        ['VLESS Reality', 'Parece HTTPS comum', 'Quando outros protocolos travam'],
      ],
    },
    steps: {
      title: 'Como usar o VLESS Reality',
      items: [
        'Deixe o protocolo em Smart e deixe o FollowNet decidir, ou',
        'aplique o perfil de rede Restricted em redes difíceis, ou',
        'escolha VLESS Reality manualmente em Ajustes → Protocolo VPN.',
        'Carregue páginas reais e rode o Speed Test para confirmar que ajuda.',
        'Salve um perfil próprio para as redes onde ele funciona melhor.',
      ],
    },
    bullets: [
      'Feito para parecer tráfego web criptografado comum',
      'Útil quando protocolos clássicos são desacelerados ou travam',
      'O Smart Connect e o perfil Restricted podem usá-lo automaticamente',
      'Não é o mais rápido em redes tranquilas — o WireGuard costuma ganhar',
      'Confirme sempre com páginas reais e o Speed Test',
    ],
    cta: CTA,
    faq: [
      { q: 'O VLESS Reality é mais seguro que o WireGuard?', a: 'Os dois criptografam o seu tráfego. O VLESS Reality muda a forma como a conexão aparece na rede, não é «mais seguro».' },
      { q: 'Devo usar sempre?', a: 'Não. Use o Smart e deixe o VLESS Reality entrar quando outros protocolos tiverem dificuldade.' },
      { q: 'O VLESS Reality está no Free?', a: 'Depende dos servidores e do seu plano, como mostrado no app.' },
      { q: 'Ele garante acesso em qualquer lugar?', a: 'Nenhum protocolo garante. Ele melhora as chances em redes difíceis e deve ser usado de acordo com as leis locais.' },
    ],
  },

  'vpn-free-weekly-limit': {
    h1: 'Tráfego semanal do FollowNet Free: como funciona o limite',
    lead:
      'O FollowNet Free é uma VPN completa com um único limite honesto: um tráfego semanal mostrado no app. Veja o que conta, quando renova, como fazer render e o que acontece quando você chega ao limite.',
    sections: [
      {
        title: 'Semanal, não diário',
        body:
          'O tráfego Free é contado por semana, o que combina melhor com a vida real do que um teto diário: um dia de viagem pode gastar mais, um dia tranquilo, menos. O limite atual e o quanto você usou aparecem no app. Os números exatos podem mudar com as configurações do plano, então o contador do app é sempre a referência.',
        image: 'stats',
        imageCaption: 'Estatísticas: dados usados na semana e limite semanal.',
      },
      {
        title: 'O que conta',
        body:
          'Conta todo o tráfego que passa pelo túnel da VPN: navegação, vídeo, música, atualizações de apps, backups na nuvem e o Speed Test embutido. O tráfego com a VPN desligada não conta. As verificações de conexão do Smart Connect são mínimas, mas reais.',
      },
      {
        title: 'Como fazer render',
        body:
          'Vídeo é o que mais consome, então baixe filmes e séries numa rede confiável antes de viajar. Use «Só Wi‑Fi» para a VPN rodar nos hotspots, onde ela mais importa, e não nos dados móveis em casa. Pause o envio de Fotos do iCloud e as atualizações grandes com a VPN ligada, e rode o Speed Test só quando precisar.',
        image: 'autoconnect',
        imageCaption: '«Só Wi‑Fi» concentra o tráfego Free nos hotspots públicos.',
      },
      {
        title: 'O que o Free inclui',
        body:
          'O Free não é uma demo capada. Você tem os mesmos protocolos, Smart Connect, opções de DNS, perfis de rede, conexão automática, widgets e Speed Test que o Premium, além dos locais Free. O contador semanal é a principal diferença.',
      },
      {
        title: 'Quando o limite acaba',
        body:
          'Novas conexões ficam pausadas até a renovação semanal, e os widgets mostram que o limite acabou em vez de um «Conectado» enganoso. Você pode esperar a renovação ou passar para o Premium: tráfego ilimitado, mais locais e até cinco aparelhos.',
      },
    ],
    table: {
      title: 'O que mais consome tráfego',
      head: ['Atividade', 'Consumo', 'Dica'],
      rows: [
        ['Vídeo em HD', 'Muito alto', 'Baixar com antecedência'],
        ['Videochamadas', 'Alto', 'Só áudio quando possível'],
        ['Atualizações e backups', 'Alto, em picos', 'Fazer em Wi‑Fi confiável sem VPN'],
        ['Música por streaming', 'Moderado', 'Baixar playlists'],
        ['Navegação, e-mail, mensagens', 'Baixo', 'Ideal para o Free'],
      ],
    },
    steps: {
      title: 'Acompanhe o seu limite',
      items: [
        'Abra Estatísticas para ver o tráfego usado e o restante.',
        'Ative «Só Wi‑Fi».',
        'Baixe vídeos e arquivos grandes antes de viajar.',
        'Evite rodar o Speed Test várias vezes.',
        'Passe para o Premium se bater no limite com frequência.',
      ],
    },
    bullets: [
      'Um limite semanal, mostrado no app',
      'Todo o tráfego do túnel conta, inclusive o Speed Test',
      'Os mesmos recursos do Premium, exceto contador e locais',
      'Vídeo consome mais; navegação e mensagens, muito pouco',
      'O Premium remove o limite e acrescenta locais e aparelhos',
    ],
    cta: CTA,
    faq: [
      { q: 'Quanto tráfego o Free inclui?', a: 'O limite semanal atual aparece no app. Ele pode mudar com as configurações do plano, então confira Estatísticas.' },
      { q: 'Quando o limite renova?', a: 'Toda semana. O app mostra o seu consumo da semana atual.' },
      { q: 'O tráfego sem VPN conta?', a: 'Não. Só conta o tráfego que passa pelo túnel do FollowNet.' },
      { q: 'Dá para comprar mais tráfego sem assinar?', a: 'O jeito de remover o limite é o Premium, mensal ou anual.' },
    ],
  },

  'vpn-premium-unlimited': {
    h1: 'FollowNet Premium: tráfego ilimitado, mais locais e cinco aparelhos',
    lead:
      'O Premium é para quem usa VPN todo dia. Ele remove o limite semanal do Free, libera locais Premium, cobre até cinco aparelhos e tira os anúncios. Veja exatamente o que muda, o que continua igual e como funciona a cobrança.',
    sections: [
      {
        title: 'O que o Premium acrescenta',
        body:
          'Tráfego ilimitado sem teto semanal, acesso a todos os locais Premium, uma assinatura para até cinco aparelhos — iPhone, iPad e a extensão do Chrome — e nenhum anúncio. Tudo o que você já conhece do Free continua exatamente igual.',
        image: 'premium',
        imageCaption: 'Premium: tráfego ilimitado, todos os servidores Premium, Smart Connect e até cinco aparelhos.',
      },
      {
        title: 'O que não muda',
        body:
          'Criptografia, protocolos e Smart Connect são idênticos no Free e no Premium. O Premium é sobre capacidade e opções, não sobre «mais segurança». Se alguém disser que um plano pago usa «criptografia militar dupla», é marketing.',
      },
      {
        title: 'Planos e cobrança',
        body:
          'O Premium é vendido pela App Store como assinatura mensal ou anual; a anual sai mais barata por mês e inclui um curto teste grátis mostrado na janela de pagamento da Apple. A Apple cuida do pagamento, e você pode gerenciar ou cancelar a assinatura quando quiser nos ajustes do seu ID Apple.',
      },
      {
        title: 'Premium em vários aparelhos',
        body:
          'Entre com o mesmo e-mail no iPad e na extensão do Chrome, ou vincule um aparelho escaneando um QR code em Ajustes → Outros aparelhos. Até cinco aparelhos dividem uma assinatura. Num iPhone novo, use «Restaurar compras» para reativar o Premium.',
        image: 'settings',
        imageCaption: 'Ajustes → Outros aparelhos: vincule outro celular ou o Chrome com um QR code.',
      },
      {
        title: 'Quem deveria fazer upgrade',
        body:
          'Faça upgrade se você bate com frequência no limite semanal, vê vídeos fora de casa, trabalha remoto em Wi‑Fi público, precisa de um local Premium específico ou quer um plano para os aparelhos da família toda. Se o Free dá conta das sessões ocasionais no café, não precisa pagar.',
      },
      {
        title: 'O que o Premium não pode prometer',
        body:
          'Nenhuma VPN pode garantir acesso a todos os catálogos de streaming nem passar por cima das leis locais. O Premium dá mais capacidade e locais; como cada serviço se comporta depende dele.',
      },
    ],
    table: {
      title: 'Free e Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Tráfego', 'Limite semanal', 'Ilimitado'],
        ['Locais', 'Locais Free', 'Free + Premium'],
        ['Aparelhos', 'Dentro do limite Free', 'Até 5 com uma assinatura'],
        ['Protocolos, Smart Connect, DNS', 'Incluídos', 'Incluídos'],
        ['Anúncios', 'Podem aparecer em algumas regiões', 'Nenhum'],
        ['Cobrança', '—', 'Mensal ou anual pela App Store'],
      ],
    },
    steps: {
      title: 'Upgrade e troca de aparelho',
      items: [
        'No app FollowNet para iOS, abra a tela Premium.',
        'Escolha mensal ou anual e confirme com o seu ID Apple.',
        'Entre no iPad ou no Chrome com o mesmo e-mail ou escaneie o QR code.',
        'Num iPhone novo, toque em «Restaurar compras».',
        'Gerencie ou cancele quando quiser nas assinaturas do seu ID Apple.',
      ],
    },
    bullets: [
      'Tráfego ilimitado e todos os locais Premium',
      'Até cinco aparelhos com uma assinatura',
      'Sem anúncios',
      'A mesma criptografia e os mesmos protocolos do Free',
      'Cobrança e cancelamento pela App Store',
    ],
    cta: CTA,
    faq: [
      { q: 'Posso testar o Premium antes de pagar?', a: 'O plano anual inclui um curto teste grátis, mostrado na janela de pagamento da Apple antes de confirmar.' },
      { q: 'Como cancelo?', a: 'Em Ajustes do iOS → seu nome → Assinaturas. O Premium continua até o fim do período pago.' },
      { q: 'O Premium funciona na extensão do Chrome?', a: 'Sim, entre com a mesma conta. O Chrome conta como um dos cinco aparelhos.' },
      { q: 'O Premium deixa a minha VPN mais rápida?', a: 'A criptografia é a mesma, mas mais locais podem significar um servidor mais próximo ou menos lotado.' },
    ],
  },

  'vpn-battery-iphone': {
    h1: 'VPN e bateria do iPhone — o que realmente gasta energia e como economizar',
    lead:
      'Uma VPN consome um pouco de bateria, mas geralmente bem menos do que se imagina. O gasto real vem do rádio, do sinal fraco e de redes que derrubam o túnel o tempo todo. Este guia mostra como medir o impacto no seu iPhone e configurar o FollowNet para que a proteção custe o mínimo de energia.',
    sections: [
      {
        title: 'Para onde a energia realmente vai',
        body:
          'A criptografia é barata nos chips atuais do iPhone. O que consome é manter o rádio Wi‑Fi ou celular ativo, refazer o túnel após quedas e repetir tentativas em redes com perda de pacotes. Uma sessão WireGuard estável em um bom Wi‑Fi doméstico quase não aparece nas estatísticas de bateria; o mesmo telefone com LTE fraco em um trem descarrega mais rápido, com ou sem VPN.',
      },
      {
        title: 'Confira os ajustes de bateria antes de culpar a VPN',
        body:
          'Abra Ajustes → Bateria e compare as últimas 24 horas e os últimos 10 dias. O iOS costuma atribuir o uso da VPN ao sistema ou ao app que gerou o tráfego. Compare um dia com VPN e um dia parecido sem ela, nos mesmos trajetos. Um dia atípico com sinal ruim diz mais sobre a rede do que sobre o túnel.',
      },
      {
        title: 'Conexão automática: proteja hotspots, não cada minuto',
        body:
          'Se você precisa de proteção principalmente em cafés, hotéis e aeroportos, deixe a Conexão automática em «Só Wi‑Fi». A VPN liga em redes não confiáveis e fica desligada nos dados móveis, onde o rádio já é o maior consumidor. Deixe «Sempre» para quando precisar mesmo do túnel em todo lugar.',
        image: 'autoconnect',
        imageCaption: 'Conexão automática no FollowNet: «Só Wi‑Fi» ou «Sempre».',
      },
      {
        title: 'Escolha o protocolo de acordo com a rede',
        body:
          'Em redes tranquilas, o WireGuard é a opção mais leve: handshakes curtos, pouca sobrecarga e recuperação rápida após o repouso. Em redes que interferem no tráfego VPN, um túnel que reconecta sem parar gasta muito mais energia do que um protocolo um pouco mais pesado que se mantém estável. O Smart Connect escolhe uma opção que funciona na rede atual para o telefone não queimar bateria em tentativas sem fim.',
        image: 'protocol',
        imageCaption: 'Ajustes de protocolo: Smart, WireGuard, IKEv2, AmneziaWG e outros.',
      },
      {
        title: 'Distância e sinal pesam mais que a criptografia',
        body:
          'Com um servidor distante, o mesmo download demora mais e o rádio fica ativo por mais tempo. Use «Local ideal» ou o servidor mais próximo com ping baixo. Com sinal celular fraco, cada pacote custa mais energia; em uma rede confiável com recepção ruim, desligar a VPN é um meio-termo razoável.',
      },
      {
        title: 'Modo Pouca Energia e regras em segundo plano',
        body:
          'O Modo Pouca Energia limita a atividade em segundo plano, mas o iOS mantém o túnel VPN ativo. Se precisar esticar os últimos 10–20 %, desconecte em redes confiáveis e reconecte no Wi‑Fi público. O FollowNet não mantém tarefas extras em segundo plano para inflar estatísticas.',
      },
    ],
    steps: {
      title: 'Configuração econômica em cinco minutos',
      items: [
        'Veja Ajustes → Bateria para conhecer seu ponto de partida real.',
        'Deixe a Conexão automática em «Só Wi‑Fi» se você protege principalmente hotspots.',
        'Mantenha o protocolo em Smart ou fixe o WireGuard no Wi‑Fi de casa.',
        'Use «Local ideal» ou o servidor mais próximo com ping baixo.',
        'Com sinal fraco em redes confiáveis, desconecte em vez de brigar com o rádio.',
      ],
    },
    table: {
      title: 'Cenários comuns e o custo de bateria',
      head: ['Cenário', 'Impacto na bateria', 'O que fazer'],
      rows: [
        ['Wi‑Fi de casa, WireGuard, servidor próximo', 'Mínimo', 'Deixar como está'],
        ['Wi‑Fi de café com «Só Wi‑Fi»', 'Baixo', 'Opção recomendada'],
        ['«Sempre» em LTE fraco', 'Perceptível', '«Só Wi‑Fi» ou desconectar em redes confiáveis'],
        ['Rede que derruba o túnel sem parar', 'Alto', 'Smart Connect ou outro protocolo'],
      ],
    },
    bullets: [
      'A criptografia é barata; o rádio e o sinal fraco são caros',
      '«Só Wi‑Fi» protege hotspots sem gastar nos dados móveis',
      'O WireGuard é o protocolo mais leve em redes estáveis',
      'Ciclos de reconexão custam mais que qualquer escolha de protocolo',
      'Compare a bateria ao longo de vários dias parecidos',
    ],
    cta: CTA,
    faq: [
      { q: 'A VPN acaba com a bateria do iPhone?', a: 'Um pouco. Em Wi‑Fi estável com servidor próximo a diferença costuma ser pequena; sinal fraco e reconexões constantes a aumentam.' },
      { q: 'Qual protocolo gasta menos bateria?', a: 'Em redes estáveis, o WireGuard. Em redes que atrapalham VPNs, o mais eficiente é o que se mantém conectado — é isso que o Smart Connect procura.' },
      { q: 'Devo deixar a VPN sempre ligada?', a: 'Só se você precisar dela em todo lugar. Para cafés e hotéis, «Só Wi‑Fi» é um bom equilíbrio.' },
      { q: 'A VPN funciona no Modo Pouca Energia?', a: 'Sim. O iOS mantém o túnel; o Modo Pouca Energia só limita outras atividades em segundo plano.' },
    ],
  },

  'vpn-iphone-shortcuts': {
    h1: 'VPN nos Atalhos da Apple — conecte o FollowNet com um toque, a Siri ou uma automação',
    lead:
      'O FollowNet funciona com o app Atalhos: você pode conectar, desconectar ou aplicar um perfil de rede sem abrir o app. Este guia mostra atalhos práticos para o trabalho, as viagens e a noite, e como eles se combinam com a Conexão automática.',
    sections: [
      {
        title: 'O que o FollowNet faz nos Atalhos',
        body:
          'O app adiciona três ações: Conectar, Desconectar e Aplicar perfil. Aplicar perfil muda para um dos predefinidos — Smart, Public Wi‑Fi, Travel, Restricted — ou para um perfil criado por você. As ações podem ser executadas pelo app Atalhos, por um ícone na Tela de Início, pela Siri, pelo botão de Ação dos iPhones mais novos ou por uma automação pessoal.',
      },
      {
        title: 'Atalhos ou Conexão automática?',
        body:
          'A Conexão automática segue regras de rede, por exemplo ligar em Wi‑Fi não confiável. Os atalhos são ações intencionais ou automações por horário, local ou modo de Foco. Eles se complementam: a Conexão automática cobre os hotspots sozinha, e um atalho resolve o que as regras não conseguem prever, como o início do expediente ou a chegada ao aeroporto.',
        image: 'autoconnect',
        imageCaption: 'A Conexão automática cuida das redes; os Atalhos, do resto.',
      },
      {
        title: 'Receita: Foco «Trabalho»',
        body:
          'Crie uma automação pessoal: quando o Foco «Trabalho» ativar, Aplicar perfil → seu perfil de trabalho e depois Conectar. Quando o Foco terminar, Desconectar. Assim o túnel segue sua agenda sem nenhum toque.',
      },
      {
        title: 'Receita: chegada ao aeroporto ou ao hotel',
        body:
          'Use uma automação por localização para o terminal ou o endereço do hotel: Aplicar perfil → Travel e depois Conectar. O perfil Travel é pensado para redes públicas instáveis e portais de login, então você não precisa lembrar de ajustes com a mala na mão.',
      },
      {
        title: 'Receita: botão de Ação e Siri',
        body:
          'Coloque um atalho «Conectar FollowNet» no botão de Ação ou peça para a Siri executá-lo pelo nome. É o jeito mais rápido de ligar a VPN antes de abrir um app sensível no Wi‑Fi público.',
      },
      {
        title: 'Permissões e limites',
        body:
          'Na primeira execução o iOS pode pedir permissão — aprove uma vez. Os atalhos não conseguem contornar uma configuração de VPN que você removeu ou negou nos Ajustes. No Free, se o tráfego semanal acabou, Conectar não inicia o túnel até a semana reiniciar ou você assinar o Premium.',
      },
    ],
    steps: {
      title: 'Crie seu primeiro atalho de VPN',
      items: [
        'Abra o app Atalhos e toque em +.',
        'Procure FollowNet e adicione Aplicar perfil e depois Conectar.',
        'Dê um nome ao atalho, por exemplo «Wi‑Fi seguro».',
        'Execute uma vez e aprove a permissão.',
        'Se quiser, adicione à Tela de Início, ao botão de Ação ou a uma automação.',
      ],
    },
    table: {
      title: 'Ideias prontas',
      head: ['Gatilho', 'Ações', 'Por quê'],
      rows: [
        ['Foco «Trabalho» ativado', 'Aplicar perfil → Conectar', 'O túnel segue sua agenda'],
        ['Chegada ao aeroporto', 'Aplicar Travel → Conectar', 'Pronto para Wi‑Fi público'],
        ['Botão de Ação', 'Conectar', 'Um toque antes de um app sensível'],
        ['Foco «Sono»', 'Desconectar', 'Sem túnel quando não é necessário'],
      ],
    },
    bullets: [
      'Três ações: Conectar, Desconectar e Aplicar perfil',
      'Funciona com a Siri, o botão de Ação e automações',
      'Complementa a Conexão automática, sem substituí-la',
      'Perfis: Smart, Public Wi‑Fi, Travel, Restricted e os seus',
      'O limite semanal do Free continua valendo',
    ],
    cta: CTA,
    faq: [
      { q: 'Posso ligar a VPN pela Siri?', a: 'Sim. Crie um atalho com a ação Conectar do FollowNet e execute-o pelo nome com a Siri.' },
      { q: 'Preciso abrir o app para funcionar?', a: 'Não. As ações rodam em segundo plano; basta o app estar instalado e a configuração de VPN permitida.' },
      { q: 'Um atalho pode escolher o servidor?', a: 'Os atalhos aplicam perfis e conectam. Escolha o servidor ou «Local ideal» no app; o atalho usa essa escolha.' },
      { q: 'As automações rodam sem confirmação?', a: 'Na maioria dos gatilhos o iOS permite desativar «Perguntar Antes de Executar». Alguns gatilhos de localização ainda podem mostrar uma notificação.' },
    ],
  },

  'vpn-for-students': {
    h1: 'VPN para estudantes no iPhone — Wi‑Fi do campus, moradia e um plano que cabe no bolso',
    lead:
      'Estudantes passam a maior parte do dia em redes compartilhadas: Wi‑Fi do campus, moradias, bibliotecas e cafés. Uma VPN criptografa esse tráfego até o servidor. Este guia mostra quando vale a pena, como começar com o Free e como respeitar as regras da sua instituição.',
    sections: [
      {
        title: 'Por que redes compartilhadas são o principal risco',
        body:
          'As redes do campus e das moradias conectam centenas de aparelhos desconhecidos. A maior parte do tráfego já usa HTTPS, mas a VPN acrescenta mais uma camada: a rede local vê apenas uma conexão criptografada com o servidor VPN, não quais serviços você usa. Isso importa principalmente em hotspots abertos de bibliotecas e cafés sem senha.',
      },
      {
        title: 'Comece com o Free',
        body:
          'O FollowNet Free inclui uma cota semanal de tráfego — suficiente para mensagens, e-mail, banco e navegação ocasional em Wi‑Fi público. O contador no app mostra quanto resta e quando a semana reinicia. Para aulas em vídeo, downloads grandes e streaming, use redes confiáveis ou considere o Premium.',
        image: 'stats',
        imageCaption: 'O app mostra o tráfego semanal e quando ele reinicia.',
      },
      {
        title: 'Quando o Wi‑Fi do campus atrapalha a VPN',
        body:
          'Algumas redes institucionais filtram protocolos VPN. Deixe o protocolo em Smart: o Smart Connect testa protocolos diferentes e mantém o que realmente passa tráfego. Se a rede continuar bloqueando o túnel, respeite — é a política do dono da rede, e os dados móveis continuam sendo uma opção.',
        image: 'protocol',
        imageCaption: 'O Smart Connect escolhe um protocolo que funciona na rede atual.',
      },
      {
        title: 'Compartilhe o Premium com cuidado',
        body:
          'Uma conta Premium funciona em até cinco aparelhos, incluindo iPhone, iPad e a extensão do Chrome. Colegas de quarto às vezes dividem um plano, mas os aparelhos de uma conta a usam em conjunto — compartilhe só com pessoas de confiança e remova aparelhos que você não usa mais.',
        image: 'premium',
        imageCaption: 'Premium: mais locais e até cinco aparelhos por conta.',
      },
      {
        title: 'As regras continuam valendo',
        body:
          'Uma VPN não muda a política de uso aceitável da sua instituição. Não a use para acessar sistemas aos quais você não tem permissão e nunca durante provas em que ela seja proibida. A VPN protege sua conexão; não é uma ferramenta para driblar regras acadêmicas.',
      },
      {
        title: 'Antes de voltar para casa ou de um intercâmbio',
        body:
          'Instale e teste o FollowNet antes de viajar. No exterior, o Wi‑Fi de hotéis e hostels é o lugar típico em que o perfil Travel e o «Só Wi‑Fi» ajudam. Garanta que você sabe trocar de protocolo se uma rede se comportar de forma estranha.',
      },
    ],
    steps: {
      title: 'Configuração para estudantes',
      items: [
        'Instale o FollowNet e entre com o código enviado por e-mail.',
        'Ative a Conexão automática em «Só Wi‑Fi» para o campus e os cafés.',
        'Deixe o protocolo em Smart.',
        'Acompanhe o contador semanal se estiver no Free.',
        'Leia uma vez a política de rede da sua instituição.',
      ],
    },
    table: {
      title: 'Onde a VPN ajuda no campus',
      head: ['Lugar', 'Risco', 'Recomendação'],
      rows: [
        ['Wi‑Fi aberto de biblioteca ou café', 'Alto', 'Conectar sempre'],
        ['Rede da moradia', 'Médio', '«Só Wi‑Fi»'],
        ['Wi‑Fi do campus com login', 'Médio', 'Conectar depois do login'],
        ['Dados móveis', 'Baixo', 'Opcional'],
      ],
    },
    bullets: [
      'Redes compartilhadas são o principal motivo para usar VPN no campus',
      'O tráfego semanal do Free cobre mensagens e navegação',
      'O Smart Connect lida com redes que atrapalham VPNs',
      'O Premium cobre até cinco aparelhos por conta',
      'As regras de rede da instituição continuam valendo',
    ],
    cta: CTA,
    faq: [
      { q: 'O Free basta para um estudante?', a: 'Para mensagens, e-mail e navegação em Wi‑Fi público, geralmente sim. Vídeos e downloads grandes consomem rápido a cota semanal.' },
      { q: 'Posso usar VPN no campus?', a: 'Usar VPN costuma ser legal, mas o dono da rede define as regras dela. Siga a política da sua instituição.' },
      { q: 'Posso dividir o Premium com colegas de quarto?', a: 'Uma conta funciona em até cinco aparelhos. Compartilhe só com pessoas de confiança — é a mesma conta.' },
      { q: 'Por que a VPN não conecta no Wi‑Fi do campus?', a: 'Algumas redes filtram protocolos VPN. Tente o Smart Connect; se continuar bloqueado, é a política da rede.' },
    ],
  },

  'vpn-for-banking-apps': {
    h1: 'VPN para apps de banco no iPhone — Wi‑Fi público mais seguro, não um substituto da segurança do banco',
    lead:
      'Abrir o app do banco no Wi‑Fi de um café ou hotel é exatamente a situação em que uma VPN ajuda: ela criptografa o caminho entre o iPhone e o servidor VPN. Mas não substitui o Face ID, os códigos de uso único nem o antifraude do próprio banco. Veja como usar tudo junto sem disparar verificações extras.',
    sections: [
      {
        title: 'O que a VPN acrescenta para o banco',
        body:
          'Apps de banco já usam HTTPS e verificação de certificados. A VPN acrescenta proteção no nível da rede: no Wi‑Fi público, o dono do hotspot e outros usuários veem só um túnel criptografado, não qual banco ou serviço você acessa. Ela também reduz o risco de hotspots falsos que imitam o nome da rede de um café.',
      },
      {
        title: 'O que a VPN não faz',
        body:
          'A VPN não protege contra links de phishing, ligações falsas «do banco» nem contra quem descobriu seu código de uso único. Nunca compartilhe códigos e nunca instale apps a pedido de quem liga. Os recursos de segurança do banco e a sua atenção continuam sendo a principal defesa.',
      },
      {
        title: 'Por que o banco pode pedir verificação extra',
        body:
          'Bancos monitoram logins incomuns. Um acesso de um país ou data center desconhecido pode gerar um código por SMS ou um bloqueio temporário. Escolha um servidor no seu próprio país ou o local mais próximo — parece uso normal e mantém a latência baixa.',
        image: 'servers',
        imageCaption: 'Um servidor próximo faz o login no banco parecer habitual.',
      },
      {
        title: 'Se o app do banco recusar a VPN',
        body:
          'Alguns bancos restringem conexões VPN nos seus apps. Nesse caso siga a política do banco: desconecte o FollowNet, troque o Wi‑Fi público pelos dados móveis e conclua a operação. Não ajudamos a contornar verificações de segurança de bancos.',
      },
      {
        title: 'Rotina segura no Wi‑Fi público',
        body:
          'Ative a Conexão automática em «Só Wi‑Fi» para o túnel já estar ativo quando você entrar em um hotspot. Espere o status «Conectado», abra o app do banco e desbloqueie com Face ID. Evite confirmar pagamentos grandes em redes desconhecidas se houver dados móveis disponíveis.',
        image: 'connect',
        imageCaption: 'Espere «Conectado» antes de abrir o app do banco.',
      },
    ],
    steps: {
      title: 'Banco no Wi‑Fi público passo a passo',
      items: [
        'Ative no FollowNet a Conexão automática «Só Wi‑Fi».',
        'Escolha «Local ideal» ou um servidor no seu país.',
        'Entre no Wi‑Fi e espere «Conectado».',
        'Abra o app do banco e desbloqueie com Face ID.',
        'Se o banco bloquear a VPN, desconecte e use os dados móveis.',
      ],
    },
    table: {
      title: 'Quem protege contra o quê',
      head: ['Ameaça', 'VPN', 'Banco / você'],
      rows: [
        ['Espionagem no Wi‑Fi público', 'Criptografa o túnel', '—'],
        ['Hotspot falso', 'Reduz o risco', 'Confira o nome da rede'],
        ['Link ou ligação de phishing', 'Não', 'Nunca compartilhe códigos'],
        ['Senha roubada', 'Não', 'Face ID, 2FA, alertas do banco'],
      ],
    },
    bullets: [
      'A VPN protege o caminho de rede no Wi‑Fi público',
      'Um servidor no seu país evita verificações extras',
      'Face ID e códigos de uso único continuam essenciais',
      'Se o banco restringir VPNs, siga a política dele',
      'Prefira dados móveis para pagamentos grandes em redes desconhecidas',
    ],
    cta: CTA,
    faq: [
      { q: 'É seguro usar o app do banco com VPN?', a: 'Sim, uma VPN confiável acrescenta proteção em redes públicas. Escolha um servidor no seu país para evitar verificações extras.' },
      { q: 'Por que meu banco bloqueou o login?', a: 'Um local desconhecido pode parecer suspeito. Use um servidor próximo ou desconecte a VPN e entre pelos dados móveis.' },
      { q: 'A VPN protege contra phishing?', a: 'Não. O phishing engana a pessoa, não a rede. Nunca compartilhe códigos de uso único.' },
      { q: 'Preciso de VPN para o banco em casa?', a: 'No seu próprio Wi‑Fi protegido é opcional. Ela importa mais em redes públicas e compartilhadas.' },
    ],
  },

  'vpn-split-tunneling-ios': {
    h1: 'Split tunneling no iPhone — o que o iOS permite e o que usar no lugar',
    lead:
      'Split tunneling é enviar só parte do tráfego pela VPN e o resto direto. No Windows e no Android, muitos apps permitem excluir aplicativos específicos. No iPhone, os apps de VPN para usuários comuns funcionam de outro jeito. Este guia explica com honestidade os limites da Apple e quais ferramentas do FollowNet resolvem as mesmas tarefas.',
    sections: [
      {
        title: 'Como a VPN funciona no iOS',
        body:
          'No iPhone, uma VPN para usuários comuns cria um túnel do sistema: enquanto está conectada, os apps em geral enviam o tráfego por ela. A VPN por app existe no iOS, mas foi feita para aparelhos corporativos gerenciados por MDM, não para apps da App Store em celulares pessoais. Por isso apps de VPN honestos para iOS não oferecem uma lista de «excluir este app».',
      },
      {
        title: 'Por que não prometemos split tunneling por app',
        body:
          'Alguns apps anunciam split tunneling no iPhone, mas na prática ele se limita a aparelhos gerenciados ou só afeta certas faixas de endereço. Preferimos descrever o que acontece de verdade a mostrar um botão que não faz o que promete.',
      },
      {
        title: 'Perfis de rede em vez de exclusões',
        body:
          'A maioria dos casos de split tunneling é, na verdade, «VPN em alguns lugares e não em outros». Os perfis de rede e a Conexão automática cobrem isso: «Só Wi‑Fi» protege hotspots públicos enquanto os dados móveis vão direto, e predefinidos como Public Wi‑Fi e Travel ajustam o comportamento a cada situação.',
        image: 'autoconnect',
        imageCaption: '«Só Wi‑Fi»: VPN nos hotspots, direto nos dados móveis.',
      },
      {
        title: 'Ajustes de DNS para um controle mais fino',
        body:
          'Às vezes o objetivo não é rotear diferente, mas mudar a resolução de nomes — por exemplo, bloquear anúncios ou rastreadores. Os predefinidos de DNS do FollowNet, como o AdGuard para filtragem, fazem isso dentro do túnel sem outro app.',
        image: 'dns',
        imageCaption: 'Os predefinidos de DNS mudam a resolução de nomes dentro do túnel.',
      },
      {
        title: 'No computador: só o navegador',
        body:
          'Se no Mac ou PC você só precisa proteger a navegação, a extensão do FollowNet para Chrome roteia o tráfego do navegador enquanto os outros apps do computador vão direto. É o equivalente prático mais próximo do split tunneling e usa a mesma conta.',
      },
      {
        title: 'Quando um app não funciona pela VPN',
        body:
          'Se um app específico — um banco, um serviço local, uma central de casa inteligente na sua rede — se recusa a funcionar com a conexão ativa, o mais simples é desconectar durante a tarefa ou escolher um servidor no seu país. Os Atalhos deixam isso rápido: um toque para desconectar, outro para reconectar.',
      },
    ],
    steps: {
      title: 'Resultado de split tunneling no iPhone',
      items: [
        'Decida onde a VPN é realmente necessária: hotspots, viagens ou em todo lugar.',
        'Deixe a Conexão automática em «Só Wi‑Fi» se os dados móveis podem ir direto.',
        'Escolha um perfil de rede para a situação.',
        'Para apps que não gostam de locais estrangeiros, use um servidor no seu país.',
        'Crie atalhos de Conectar e Desconectar para exceções rápidas.',
      ],
    },
    table: {
      title: 'Tarefa e ferramenta certa',
      head: ['Tarefa', 'Split tunneling por app', 'Ferramenta do FollowNet'],
      rows: [
        ['VPN só no Wi‑Fi público', 'Desnecessário', '«Só Wi‑Fi»'],
        ['Proteger só o navegador no computador', 'Desnecessário', 'Extensão do Chrome'],
        ['App rejeita local estrangeiro', 'Não no iOS', 'Servidor no seu país'],
        ['Exceção rápida para uma tarefa', 'Não no iOS', 'Atalho Desconectar'],
      ],
    },
    bullets: [
      'VPNs para usuários comuns no iOS funcionam como túnel do sistema',
      'A VPN por app no iPhone é para aparelhos gerenciados por MDM',
      '«Só Wi‑Fi» cobre a maioria das necessidades de split tunneling',
      'A extensão do Chrome roteia só o navegador no computador',
      'Os Atalhos facilitam exceções rápidas',
    ],
    cta: CTA,
    faq: [
      { q: 'O FollowNet tem split tunneling no iPhone?', a: 'Não por app — o iOS reserva isso para aparelhos gerenciados. Regras da Conexão automática, perfis e atalhos resolvem a maior parte das mesmas tarefas.' },
      { q: 'Posso excluir o app do meu banco da VPN?', a: 'Não individualmente. Use um servidor no seu país ou desconecte rapidamente com um atalho.' },
      { q: 'Existe split tunneling no computador?', a: 'A extensão do Chrome roteia só o navegador; os outros apps vão direto.' },
      { q: 'Por que algumas VPNs para iPhone anunciam split tunneling?', a: 'Geralmente ele se limita a faixas de IP ou a aparelhos gerenciados. Verifique o que exatamente é excluído antes de confiar nisso.' },
    ],
  },
};
