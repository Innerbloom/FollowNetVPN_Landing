import type { LandingContent } from './seo-landing.content';
import type { CoreLandingSlug } from './seo-landing.slugs';

const CTA = 'Baixar na App Store';

export const PT: Record<CoreLandingSlug, LandingContent> = {
  'vpn-for-iphone': {
    h1: 'VPN para iPhone — rápida, privada e fácil de usar',
    lead:
      'O FollowNet é uma VPN para iOS feita para iPhone e iPad: conexão com um toque, WireGuard e IKEv2, Smart Connect para redes restritivas e um plano gratuito sem cartão de crédito.',
    sections: [
      {
        title: 'Por que usar VPN no iPhone?',
        body:
          'Wi‑Fi público, hotspots em viagens e algumas operadoras deixam seu tráfego exposto a espionagem ou limitação de velocidade. Uma VPN criptografa a conexão e ajuda a manter privados a navegação, as mensagens e o streaming no iOS.',
      },
      {
        title: 'Feito para iOS, não um clone genérico',
        body:
          'O FollowNet usa as APIs nativas de VPN do iOS (Network Extension) e reúne Atalhos, conexão automática, DNS personalizado e os locais listados hoje no app em uma interface pensada para o iPhone.',
      },
    ],
    bullets: [
      'Plano Free com tráfego semanal — teste antes de assinar',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2 e VLESS Reality (o Smart Connect escolhe quando preciso)',
      'O tratamento de dados está explicado na nossa Política de Privacidade',
      'Premium: dados ilimitados e os locais incluídos no plano atual',
    ],
    cta: CTA,
    faq: [
      { q: 'O FollowNet é uma VPN grátis para iPhone?', a: 'Sim. O FollowNet oferece um plano gratuito com tráfego semanal. O Premium remove o limite e libera os locais que o app mostra para esse plano.' },
      { q: 'O FollowNet funciona no iPad?', a: 'Sim. O mesmo app de iOS funciona no iPhone e no iPad.' },
      { q: 'Qual protocolo VPN usar no iOS?', a: 'O WireGuard é rápido e moderno. O IKEv2 é estável em redes móveis. O Smart Connect escolhe automaticamente o melhor protocolo para sua rede.' },
    ],
  },
  'wireguard-vpn-ios': {
    h1: 'VPN WireGuard para iOS — rápida e moderna',
    lead:
      'O FollowNet traz WireGuard nativo no iPhone e no iPad, além de AmneziaWG e outros protocolos quando as redes bloqueiam VPNs comuns. O Smart Connect pode trocar por você para você continuar conectado sem adivinhar.',
    sections: [
      {
        title: 'Por que WireGuard no iOS?',
        body:
          'O WireGuard é leve, usa criptografia moderna e costuma ter latência menor que protocolos VPN mais antigos. No iPhone e no iPad é uma ótima escolha padrão para navegar, conversar, fazer chamadas de vídeo e muitas sessões de streaming ou jogos em redes tranquilas.',
      },
      {
        title: 'Como ativar o WireGuard no FollowNet',
        body:
          'Abra Ajustes → Protocolo e escolha WireGuard, ou deixe o Smart Connect ligado para o FollowNet escolher quando fizer sentido. Depois de conectar, confira o protocolo ativo no app e rode o Speed Test no mesmo Wi‑Fi ou 4G para comparar números reais.',
      },
      {
        title: 'Quando o WireGuard é bloqueado ou limitado',
        body:
          'Alguns provedores, hotéis e chips de viagem detectam ou desaceleram o WireGuard. Dependendo do plano e da rede, o FollowNet pode recorrer a AmneziaWG, Hysteria2, VLESS Reality ou IKEv2 — manualmente ou pelo Smart Connect (e pelo perfil Restricted, se você quiser essa escada como padrão).',
      },
      {
        title: 'WireGuard x outros protocolos do FollowNet',
        body:
          'Em redes abertas o WireGuard costuma ser o mais rápido. O IKEv2 pode reconectar com mais suavidade ao trocar de antena. AmneziaWG e Hysteria2 ajudam quando a rede atrapalha túneis clássicos. Nenhum protocolo vence em todo lugar — meça no seu caminho.',
      },
      {
        title: 'Free semanal ou Premium',
        body:
          'O WireGuard está disponível dentro do tráfego semanal do Free para você avaliar velocidade e estabilidade. O Premium remove o limite e libera os locais do plano Premium atual mostrados no app. Não inventamos número de servidores aqui.',
      },
    ],
    bullets: [
      'WireGuard nativo pela Network Extension do iOS',
      'WireGuard manual ou escolha automática com o Smart Connect',
      'Alternativas quando preciso: IKEv2, AmneziaWG, Hysteria2',
      'Locais listados no app — sem exageros nesta página',
      'Funciona no tráfego semanal do Free; Premium para uso ilimitado',
    ],
    cta: 'Baixe o FollowNet na App Store',
    faq: [
      { q: 'O WireGuard é seguro no iPhone?', a: 'O WireGuard tem um design criptográfico moderno. O FollowNet o executa pelo framework Network Extension da Apple, como outras VPNs da App Store.' },
      { q: 'Posso forçar só o WireGuard?', a: 'Sim. Abra Ajustes → Protocolo e escolha WireGuard. Use o Smart Connect quando preferir a escolha automática.' },
      { q: 'E se o WireGuard não conectar?', a: 'Tente o Smart Connect, mude para AmneziaWG, IKEv2 ou Hysteria2, escolha outro local do app e teste de novo com o Speed Test.' },
      { q: 'O FollowNet tem split tunneling no iOS?', a: 'Com a VPN conectada, o iOS envia o tráfego do aparelho pelo túnel. O split tunneling por app é limitado pela plataforma da Apple; o FollowNet segue as regras de VPN do sistema.' },
    ],
  },
  'free-vpn-iphone': {
    h1: 'VPN grátis para iPhone — teste o FollowNet com tráfego semanal',
    lead:
      'Procurando uma VPN grátis no iPhone sem cartão de crédito? O FollowNet Free inclui tráfego semanal, protocolos modernos, Smart Connect e tudo o que você precisa para avaliar o serviço antes do Premium.',
    sections: [
      {
        title: 'O que vem no Free',
        body:
          'Com o FollowNet Free você conecta iPhone e iPad dentro de um limite semanal de tráfego. Dá para testar os protocolos do seu plano, escolher entre os locais Free listados no app, usar o Smart Connect e experimentar a conexão automática, os perfis de DNS e o Speed Test quando disponíveis.',
      },
      {
        title: 'Como funciona o limite semanal',
        body:
          'O Free tem um teto por semana, não é «ilimitado para sempre». Use o tráfego para testar as redes Wi‑Fi e móveis que importam para você. Quando acabar, espere o próximo período ou passe para o Premium para tráfego ilimitado, conforme as condições atuais da App Store.',
      },
      {
        title: 'Free x Premium — comparação honesta',
        body:
          'O Free serve para avaliar: tráfego semanal e os servidores Free mostrados no app. O Premium remove o limite e libera os locais Premium do plano atual. Premium não é «criptografia mais forte» — é capacidade, locais e conveniência. Os detalhes exatos do plano estão no app.',
      },
      {
        title: 'Como começar sem cartão',
        body:
          'Baixe o FollowNet na App Store, entre com um código enviado por e-mail, aprove uma vez a configuração de VPN do iOS e toque em Conectar. O Free não exige cartão de crédito. Leia a Política de Privacidade antes de usar o app em sessões sensíveis.',
      },
      {
        title: 'Quando o Free basta — e quando não',
        body:
          'O Free funciona bem para sessões curtas em Wi‑Fi público, paradas de viagem e comparação de protocolos. Streaming em HD por horas, uso móvel o dia todo ou downloads pesados costumam exigir Premium por causa do limite semanal. Nenhum plano garante desbloqueio de catálogos de streaming.',
      },
    ],
    bullets: [
      'Sem cartão de crédito para o Free',
      'Tráfego semanal — suficiente para avaliar, não ilimitado',
      'Protocolos e locais Free aparecem no app',
      'Smart Connect, conexão automática, DNS e Speed Test quando disponíveis',
      'Upgrade no app pela App Store quando você precisar de ilimitado',
    ],
    cta: CTA,
    faq: [
      { q: 'O FollowNet é mesmo grátis no iPhone?', a: 'Sim. O Free inclui tráfego semanal para avaliação. O Premium é opcional e remove o limite conforme as condições atuais do plano no app.' },
      { q: 'O limite do Free é diário ou semanal?', a: 'Semanal. Veja no app o volume atual e quando ele renova — não conte com recarga diária.' },
      { q: 'A versão grátis tem anúncios?', a: 'O FollowNet Free exibe anúncios em algumas regiões; o Premium não tem anúncios.' },
      { q: 'Posso usar o Free em Wi‑Fi público?', a: 'Sim. O Free também criptografa o tráfego dentro do limite semanal — útil em cafés, aeroportos e hotéis.' },
    ],
  },
  'vpn-for-ipad': {
    h1: 'VPN para iPad — o mesmo app FollowNet, otimizado para iOS',
    lead:
      'O FollowNet está disponível para iPhone e iPad como app de iOS, com os protocolos e recursos de conta da versão atual da App Store.',
    sections: [
      { title: 'Por que usar VPN no iPad?', body: 'O iPad costuma usar o mesmo Wi‑Fi público que o celular: viagens, coworking e redes de visitantes. Uma VPN ajuda a proteger o Safari, os apps e os downloads na rede móvel e no Wi‑Fi.' },
      { title: 'Usando o FollowNet no iPad', body: 'Configure a VPN pela mesma permissão do iOS e depois escolha o protocolo, a conexão automática e as opções de DNS disponíveis na versão atual.' },
    ],
    bullets: ['App universal de iOS — iPhone e iPad', 'VPN nativa via Network Extension', 'Smart Connect para redes restritivas', 'Plano Free e Premium pela App Store'],
    cta: CTA,
    faq: [
      { q: 'Preciso de um app separado para iPad?', a: 'Não. Baixe o FollowNet uma vez na App Store; ele roda no iPhone e no iPad.' },
      { q: 'A VPN funciona com o teclado do iPad e o Stage Manager?', a: 'Sim. A VPN funciona no nível do sistema e não interfere na multitarefa.' },
      { q: 'Posso usar servidores diferentes no iPad e no iPhone?', a: 'Sua conta funciona em qualquer aparelho conectado; escolha o servidor em cada aparelho.' },
    ],
  },
  'ikev2-vpn-ios': {
    h1: 'VPN IKEv2 para iOS — estável em redes móveis',
    lead:
      'O IKEv2 é um protocolo VPN consagrado para iPhone e iPad: reconecta rápido quando você troca entre Wi‑Fi e dados móveis. O FollowNet suporta IKEv2 junto com WireGuard, AmneziaWG e Smart Connect.',
    sections: [
      { title: 'Quando escolher IKEv2 no iOS', body: 'O IKEv2 lida bem com mudanças de rede — no trajeto, no elevador, ao alternar entre 4G e Wi‑Fi. É uma boa escolha quando sua operadora limita ou bloqueia o WireGuard.' },
      { title: 'IKEv2 no FollowNet', body: 'Escolha IKEv2 manualmente em Ajustes → Protocolo ou use o Smart Connect. O app mostra quais combinações de protocolo e servidor estão disponíveis no momento.' },
    ],
    bullets: ['Reconexões estáveis ao trocar de antena', 'Disponível no Free e no Premium', 'Funciona com conexão automática e DNS personalizado', 'O Smart Connect pode escolher IKEv2 automaticamente'],
    cta: CTA,
    faq: [
      { q: 'O IKEv2 é seguro no iPhone?', a: 'Bem configurado, o IKEv2 usa criptografia forte. O FollowNet o implementa dentro do framework de VPN da Apple.' },
      { q: 'IKEv2 ou WireGuard no iOS?', a: 'O WireGuard costuma ser mais rápido; o IKEv2 pode ser mais estável em algumas redes móveis. O Smart Connect testa os dois.' },
      { q: 'Como ativo o IKEv2?', a: 'Ajustes → Protocolo → IKEv2, ou ative o Smart Connect para a escolha automática.' },
    ],
  },
  'vpn-for-wifi': {
    h1: 'VPN para Wi‑Fi público no iPhone — fique criptografado',
    lead:
      'Cafés, aeroportos, hotéis e redes de visitantes são práticos, mas arriscados. O FollowNet criptografa o tráfego do iPhone e do iPad até o servidor VPN em redes Wi‑Fi em que você não confia totalmente — no tráfego semanal do Free ou ilimitado com o Premium.',
    sections: [
      {
        title: 'Riscos em Wi‑Fi aberto e de visitantes',
        body:
          'Hotspots compartilhados podem expor tráfego sem criptografia a outras pessoas na mesma rede. Até um Wi‑Fi de visitantes com senha pode ser operado por terceiros pouco confiáveis. A VPN adiciona criptografia entre o seu aparelho e o servidor VPN; sozinha, ela não torna «seguro» um hotspot malicioso nem impede phishing.',
      },
      {
        title: 'Configuração recomendada para Wi‑Fi público',
        body:
          'Entre na rede, conclua primeiro o login do portal cativo e depois conecte o FollowNet. Em redes desconhecidas, prefira o Smart Connect. Ative a conexão automática «Só Wi‑Fi» se quiser que o túnel ligue assim que você sair das redes de casa em que já confia.',
      },
      {
        title: 'Conexão automática e hábitos do dia a dia',
        body:
          'Os modos de conexão automática (Só Wi‑Fi, Só 4G, Sempre ou Desligada) definem quando a VPN liga. Combine com um widget na Tela de Início para confirmar que o túnel está ativo quando você se senta com o café — o status primeiro, não um painel de marketing.',
      },
      {
        title: 'Velocidade e portais cativos',
        body:
          'Um pouco de overhead é normal na internet de hotel. Use o Speed Test e um local mais próximo listado no app. Se o WireGuard falhar depois do portal, tente o Smart Connect ou AmneziaWG/Hysteria2. A VPN não cria banda que o hotspot não tem.',
      },
      {
        title: 'Free semanal ou Premium no Wi‑Fi',
        body:
          'O Free criptografa sessões em Wi‑Fi público dentro do tráfego semanal — o suficiente para dias de viagem e trabalho em cafés. Streaming o dia inteiro ou uploads grandes no Wi‑Fi do hotel costumam pedir Premium. Os locais de cada plano estão no app.',
      },
    ],
    bullets: [
      'Criptografe o tráfego no Wi‑Fi de cafés, aeroportos, hotéis e visitantes',
      'Conclua o portal cativo e depois conecte a VPN',
      'Conexão automática no Wi‑Fi para não esquecer',
      'Smart Connect para hotspots filtrados ou problemáticos',
      'Tráfego semanal Free ou Premium para sessões ilimitadas',
    ],
    cta: CTA,
    faq: [
      { q: 'Preciso de VPN no Wi‑Fi de casa?', a: 'Redes domésticas costumam ser mais seguras. Use VPN se quiser mais privacidade em relação ao provedor ou se divide a rede com visitantes.' },
      { q: 'A VPN deixa o Wi‑Fi do hotel mais lento?', a: 'Um pouco de overhead é normal. Use o Speed Test e tente um servidor mais próximo listado no app para melhorar o resultado.' },
      { q: 'O FollowNet funciona nas páginas de login de portais cativos?', a: 'Normalmente conecte a VPN depois de concluir o portal e mantenha o túnel ligado pelo resto da sessão.' },
      { q: 'O Free basta para Wi‑Fi público?', a: 'Sim para sessões curtas e médias dentro do tráfego semanal Free. Uso pesado o dia todo costuma exigir Premium.' },
    ],
  },
  'smart-connect-vpn': {
    h1: 'VPN com Smart Connect — protocolo automático para iOS',
    lead:
      'O Smart Connect é o modo adaptativo do FollowNet: usa o contexto da rede quando disponível e escolhe entre WireGuard, IKEv2, AmneziaWG, Hysteria2 e VLESS Reality — com alternativas e checagem de saída para você perder menos tempo testando na mão.',
    sections: [
      {
        title: 'Como o Smart Connect funciona',
        body:
          'Com o protocolo em Smart, o FollowNet considera as dicas de região e provedor enviadas pelo servidor quando existem, escolhe um túnel inicial e pode subir uma escada de recuperação (muitas vezes Hysteria2 → VLESS Reality → AmneziaWG → WireGuard → IKEv2, pulando o que seus servidores não oferecem). Depois que você está online, o app mostra o que está ativo. Dá para mudar a qualquer momento em Ajustes → Protocolo.',
      },
      {
        title: 'Por que o VLESS Reality está na cadeia',
        body:
          'Algumas operadoras identificam ou travam o WireGuard clássico — e até o AmneziaWG. O VLESS com camuflagem tipo REALITY é outro caminho quando um túnel aparece como conectado mas não passa tráfego real. O FollowNet verifica a saída antes de considerar a sessão saudável.',
      },
      {
        title: 'Quando deixar o Smart Connect ligado',
        body:
          'Viajantes, provedores restritivos, internet de hotel e chips de viagem são os casos principais. Prefira o perfil Restricted quando quiser Smart Connect com conexão automática «Sempre» e o servidor mais rápido sem ficar cuidando de cada protocolo.',
      },
      {
        title: 'Quando escolher o protocolo manualmente',
        body:
          'Se o WireGuard já é rápido em casa, fixe-o. Use o modo manual para comparar no Speed Test. Volte ao Smart Connect (ou Restricted) em redes desconhecidas de cafés, aeroportos ou chips estrangeiros.',
      },
      {
        title: 'Smart Connect, conexão automática e perfis',
        body:
          'A conexão automática decide quando a VPN liga (Wi‑Fi, 4G, Sempre). O Smart Connect decide qual protocolo tentar depois. Os perfis de rede juntam os dois com DNS e modo de servidor — Public Wi‑Fi fixa WireGuard, Travel fixa IKEv2 e Restricted mantém o Smart Connect no máximo.',
      },
      {
        title: 'Limites e Free semanal x Premium',
        body:
          'O Smart Connect traz conveniência; não garante conexão em toda rede nem passa por um portal cativo que você pulou. O Free inclui o Smart Connect dentro do tráfego semanal. O Premium remove o limite e libera os locais Premium mostrados para esse plano no app.',
      },
    ],
    bullets: [
      'Protocolo automático entre WireGuard, IKEv2, AmneziaWG, Hysteria2 e VLESS Reality',
      'Escada de alternativas com checagem de saída — não só um status verde',
      'Combina com conexão automática e perfis de rede (incluindo Restricted)',
      'Protocolo e servidor ativos visíveis depois de conectar',
      'Disponível no tráfego semanal Free e no Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Como ligo o Smart Connect?', a: 'Ajustes → Protocolo → Smart (o nome pode variar conforme a versão). Ou aplique o perfil Restricted.' },
      { q: 'Dá para ver qual protocolo o Smart Connect escolheu?', a: 'Sim. O app mostra o protocolo e o servidor ativos depois da conexão.' },
      { q: 'O Smart Connect usa VLESS Reality?', a: 'Sim, quando esse protocolo está disponível para a sua sessão e o contexto da rede ou as alternativas pedem. Você também pode fixar o VLESS manualmente.' },
      { q: 'O Smart Connect garante acesso em qualquer lugar?', a: 'Não. Ele melhora as chances em redes difíceis, mas não supera leis locais, bloqueios totais ou hotspots com defeito.' },
    ],
  },
  'network-profiles-ios': {
    h1: 'Perfis de rede no iOS — Smart, Public Wi‑Fi, Travel, Restricted',
    lead:
      'Um perfil do FollowNet junta protocolo, DNS, conexão automática e modo de servidor para o café e o Wi‑Fi de casa não dividirem os mesmos padrões. Os perfis prontos são exatamente os que vêm no app.',
    sections: [
      {
        title: 'O que um perfil guarda',
        body:
          'Ajustes → Perfis de rede ajusta quatro opções de uma vez: protocolo preferido (ou Smart), DNS predefinido, modo de conexão automática e modo de servidor (Mais rápido / Último usado / Específico). Aplique um perfil em vez de reajustar quatro menus a cada troca de rede.',
      },
      {
        title: 'Smart (padrão)',
        body:
          'Protocolo: Smart · DNS: Sistema/Padrão · Conexão automática: Desligada · Servidor: Último usado. O ponto de partida do dia a dia quando o FollowNet deve escolher o túnel e voltar à última cidade.',
      },
      {
        title: 'Public Wi‑Fi',
        body:
          'Protocolo: WireGuard · DNS: Quad9 · Conexão automática: Só Wi‑Fi · Servidor: Mais rápido. Depois do portal cativo, criptografe em hotspots compartilhados com baixa latência e um resolvedor focado em privacidade.',
      },
      {
        title: 'Travel',
        body:
          'Protocolo: IKEv2 · DNS: Cloudflare · Conexão automática: Sempre · Servidor: Mais rápido. Ajustado para roaming e trocas entre 4G e Wi‑Fi de hotel — confiabilidade sem surpresas em vez de protocolos da moda.',
      },
      {
        title: 'Restricted e perfis próprios',
        body:
          'O Restricted mantém o protocolo em Smart, DNS Quad9, conexão automática Sempre e servidor Mais rápido — para redes com inspeção profunda de pacotes em que você quer a escada completa do Smart Connect (Hysteria2 / VLESS Reality / AmneziaWG / WireGuard / IKEv2). Crie um perfil próprio quando um hotel só funciona com protocolo fixo, DNS e uma cidade específica.',
      },
    ],
    bullets: [
      'Quatro perfis prontos com protocolo / DNS / conexão automática / modo de servidor definidos',
      'Restricted = Smart + Sempre + Mais rápido para redes hostis',
      'Perfis próprios para receitas de hotel ou escritório já testadas',
      'As mesmas ferramentas no Free semanal e no Premium',
      'Funciona com o atalho «Aplicar perfil» da Apple',
    ],
    cta: CTA,
    faq: [
      { q: 'Onde encontro os perfis de rede?', a: 'No app FollowNet para iOS: Ajustes → Perfis de rede (e no menu de perfis da tela principal).' },
      { q: 'O Restricted usa VLESS?', a: 'O Restricted deixa o protocolo em Smart, então o Smart Connect pode subir até o VLESS Reality quando esse caminho está disponível — ele não fixa um único protocolo.' },
      { q: 'Os perfis são só do Premium?', a: 'Os perfis prontos estão disponíveis no Free dentro do tráfego semanal. O Premium acrescenta principalmente capacidade e um mapa de servidores maior.' },
      { q: 'Qual a diferença para usar só o Smart Connect?', a: 'O Smart Connect escolhe o protocolo. Um perfil também define DNS, conexão automática e modo de servidor com um toque.' },
    ],
  },
  'amneziawg-vpn-ios': {
    h1: 'VPN AmneziaWG no iOS — WireGuard aprimorado para redes instáveis',
    lead:
      'O AmneziaWG é um protocolo baseado no WireGuard e aprimorado para redes instáveis ou congestionadas. O FollowNet inclui o AmneziaWG no iOS e pode ativá-lo automaticamente pelo Smart Connect.',
    sections: [
      { title: 'Por que um protocolo extra ajuda', body: 'Algumas operadoras e redes Wi‑Fi de hotéis ou públicas lidam mal com o tráfego VPN comum — a conexão cai ou fica lenta. O AmneziaWG mantém o núcleo do WireGuard e acrescenta ajustes de conexão que podem ficar mais estáveis nessas redes.' },
      { title: 'Usando o AmneziaWG no FollowNet', body: 'Ative o Smart Connect para a troca automática ou escolha AmneziaWG manualmente em Ajustes → Protocolo. O desempenho pode ser diferente do WireGuard puro; o Speed Test ajuda a comparar.' },
    ],
    bullets: ['Protocolo baseado no WireGuard para redes instáveis', 'Disponível pelo Smart Connect ou na escolha manual', 'A disponibilidade de servidores aparece no app', 'Network Extension nativa do iOS'],
    cta: CTA,
    faq: [
      { q: 'O AmneziaWG é o mesmo que o WireGuard?', a: 'É baseado no WireGuard, com ajustes de conexão extras para redes em que o WireGuard comum fica instável.' },
      { q: 'Quando devo usar o AmneziaWG?', a: 'Quando o WireGuard está instável ou lento na sua rede — por exemplo, com alguns chips de viagem ou Wi‑Fi público lotado.' },
      { q: 'O AmneziaWG está no plano gratuito?', a: 'A disponibilidade de protocolos depende do seu plano; veja no app os limites atuais do Free e do Premium.' },
    ],
  },
  'no-logs-vpn': {
    h1: 'Privacidade de VPN no iPhone — além dos slogans «no-logs»',
    lead:
      'O FollowNet busca minimizar a coleta de dados. Nossa Política de Privacidade explica exatamente o que é processado para acesso à conta, funcionamento da VPN, suporte e análise — e não um slogan absoluto de «zero logs».',
    sections: [
      {
        title: 'O que promessas de privacidade significam na prática',
        body:
          'Uma VPN com conta não funciona com literalmente zero dados: login por e-mail e status da assinatura exigem metadados do serviço. Slogans absolutos de «no-logs» escondem essa realidade. A Política de Privacidade publicada define como o FollowNet trata e guarda os dados hoje.',
      },
      {
        title: 'O que ler antes de conectar',
        body:
          'Nossa Política de Privacidade cobre categorias de dados, finalidades, retenção, direitos da LGPD/GDPR e CCPA, uso do Firebase Analytics, tratamento de DNS e chamados de suporte. Confie nesse documento, não em resumos de landing page — inclusive este.',
      },
      {
        title: 'Conta, cobrança e Apple',
        body:
          'O FollowNet usa login com código por e-mail. O Premium é cobrado pela App Store da Apple. A Apple processa os pagamentos da assinatura; o túnel VPN roda no sandbox da Network Extension do iOS. Não alegamos auditorias «no-logs» de terceiros que não publicamos aqui.',
      },
      {
        title: 'Hábitos práticos de privacidade no iPhone',
        body:
          'Mantenha o iOS atualizado, use um código forte ou Face ID, ative a conexão automática em Wi‑Fi público e revise os perfis de DNS se quiser um resolvedor específico. A VPN criptografa o tráfego até o servidor VPN; ela não substitui a atenção ao phishing nem os cuidados com o aparelho.',
      },
      {
        title: 'Free semanal, Premium e transparência',
        body:
          'A mesma Política de Privacidade vale para o Free e o Premium. O Free inclui tráfego semanal para avaliação; o Premium remove o limite. Limites do plano e locais aparecem no app — não como números de marketing inventados nesta página.',
      },
    ],
    bullets: [
      'Política de Privacidade em follow-net.com/privacy — a fonte oficial',
      'Login com código por e-mail; sem promessas de «zero dados»',
      'Categorias de dados e retenção descritas na política',
      'Cobrança do Premium feita pela Apple',
      'A mesma transparência no Free semanal e no Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'O que o FollowNet processa?', a: 'Veja a Política de Privacidade atual para as categorias de dados, finalidades e prazos de retenção exatos.' },
      { q: 'Onde fica a política de privacidade?', a: 'Em https://follow-net.com/privacy — com link no app e na página da App Store.' },
      { q: 'Vocês alegam uma auditoria formal no-logs?', a: 'Não confie em slogans de auditoria nesta página. O que processamos hoje está na Política de Privacidade publicada.' },
      { q: 'A Apple vê o meu uso da VPN?', a: 'A Apple processa as assinaturas da App Store; o túnel VPN roda no sandbox da Network Extension do iOS. Os detalhes relevantes para a privacidade estão na nossa Política de Privacidade.' },
    ],
  },
  'best-vpn-iphone': {
    h1: 'Melhor VPN para iPhone — o que avaliar em 2026',
    lead:
      'A melhor VPN de iPhone para você é nativa do iOS, transparente sobre privacidade, rápida nas suas redes e honesta sobre Free e pago. Aqui vai uma checklist prática e como o FollowNet se encaixa — sem afirmar ser o número 1 para todo mundo.',
    sections: [
      {
        title: 'Checklist para apps de VPN no iPhone',
        body:
          'Prefira apps da App Store, VPN de verdade via Network Extension (não uma «VPN» só de navegador), Política de Privacidade clara, protocolos modernos (WireGuard/IKEv2 e opções para redes filtradas), conexão automática e um suporte que responda. Evite apps sem empresa ou política verificáveis.',
      },
      {
        title: 'Como o FollowNet se sai nessa checklist',
        body:
          'O FollowNet é um app nativo de iOS com WireGuard, IKEv2, AmneziaWG, Hysteria2, Smart Connect, conexão automática, DNS personalizado, Speed Test, widgets e Atalhos. O Free inclui tráfego semanal; o Premium é opcional pela Apple. Os locais dos servidores estão listados no app.',
      },
      {
        title: 'Teste antes de assinar',
        body:
          'Instale o Free, aprove a configuração de VPN, rode o Speed Test com e sem VPN no Wi‑Fi de casa e na rede móvel e depois teste uma rede de café com o Smart Connect. Se velocidade e estabilidade agradarem, o Premium remove o limite semanal do Free.',
      },
      {
        title: 'O que «a melhor» não deveria significar',
        body:
          'Desconfie de desbloqueio garantido de streaming, «servidores em todos os países», slogans absolutos de no-logs sem política e números de servidores falsos. O FollowNet não promete nada disso. A disponibilidade depende da sua rede e das regras locais.',
      },
      {
        title: 'Decidindo entre Free semanal e Premium',
        body:
          'Escolha o Free se você precisa de proteção ocasional em Wi‑Fi público e quer avaliar. Escolha o Premium para tráfego ilimitado e os locais Premium do seu plano. A qualidade da criptografia não é paga — capacidade e locais, sim.',
      },
    ],
    bullets: [
      'Network Extension nativa da App Store — não um perfil instalado por fora',
      'WireGuard + IKEv2 + Smart Connect + AmneziaWG + Hysteria2',
      'Conexão automática, DNS, Speed Test e widgets para o dia a dia',
      'Tráfego semanal Free para avaliar — Premium opcional',
      'Política de Privacidade acima de slogans',
    ],
    cta: CTA,
    faq: [
      { q: 'O FollowNet é a melhor VPN para todo mundo?', a: 'Nenhuma VPN serve para todos. O FollowNet foca em iOS, protocolos modernos e Smart Connect — teste o tráfego semanal Free para ver se velocidade e servidores funcionam para você.' },
      { q: 'Por que priorizar o iOS?', a: 'O FollowNet prioriza uma experiência caprichada no iPhone e no iPad, com uma extensão do Chrome para o computador, em vez de se espalhar por todas as plataformas.' },
      { q: 'Como comparo velocidades?', a: 'Use o Speed Test integrado com e sem VPN nas suas redes Wi‑Fi e móveis de costume.' },
      { q: 'Ela desbloqueia todos os catálogos de streaming?', a: 'Não. O FollowNet criptografa sua conexão e oferece as saídas regionais listadas no app; os catálogos ainda podem restringir usuários de VPN.' },
    ],
  },
  'auto-connect-vpn-ios': {
    h1: 'VPN com conexão automática no iOS — conecta quando a rede muda',
    lead:
      'A conexão automática do FollowNet liga a VPN sozinha no Wi‑Fi, nos dados móveis ou em qualquer rede — assim você não precisa tocar em Conectar toda vez que entra em um hotspot ou passa do Wi‑Fi para o 4G.',
    sections: [
      { title: 'Por que conexão automática no iPhone?', body: 'Wi‑Fi público e redes de viagem são exatamente quando mais se precisa de VPN — e quando mais se esquece de ligá-la. A conexão automática observa a sua rede e inicia o FollowNet quando a regra escolhida é atendida.' },
      { title: 'Modos de conexão automática no FollowNet', body: 'Escolha Desligada, Só Wi‑Fi, Só 4G ou Sempre em Ajustes → Conexão automática. Combine com o Smart Connect para que, ao ligar a VPN, sejam escolhidos o melhor protocolo e servidor.' },
    ],
    bullets: ['Só Wi‑Fi, Só 4G ou Sempre', 'Funciona com WireGuard, IKEv2 e Smart Connect', 'Disponível no Free e no Premium', 'Configure em Ajustes → Conexão automática'],
    cta: CTA,
    faq: [
      { q: 'Como ativo a conexão automática?', a: 'Abra o FollowNet → Ajustes → Conexão automática e escolha Só Wi‑Fi, Só 4G, Sempre ou Desligada.' },
      { q: 'Ela liga no Wi‑Fi de casa?', a: 'Só se você escolher Só Wi‑Fi ou Sempre. Muita gente usa Só Wi‑Fi para cafés e hotéis.' },
      { q: 'É o mesmo que o Smart Connect?', a: 'Não. A conexão automática decide quando ligar a VPN; o Smart Connect escolhe protocolo e servidor depois.' },
    ],
  },
  'dns-vpn-ios': {
    h1: 'VPN com DNS personalizado no iPhone — Quad9, Cloudflare e mais',
    lead:
      'O FollowNet permite escolher perfis de DNS no iOS: manter o DNS do sistema ou trocar para Quad9, Cloudflare, AdGuard e outros enquanto o túnel VPN está ativo.',
    sections: [
      { title: 'Por que o DNS importa com VPN', body: 'O DNS traduz nomes de domínio em endereços IP. Além da criptografia da VPN, algumas pessoas querem um resolvedor que bloqueie malware (Quad9), um DNS público rápido (Cloudflare) ou um DNS que bloqueie anúncios (AdGuard).' },
      { title: 'Perfis de DNS no FollowNet', body: 'Escolha um DNS predefinido nos Ajustes sem sair do app. Dependendo da configuração, as consultas DNS podem passar pelo túnel VPN — veja a Política de Privacidade para os detalhes do tratamento.' },
    ],
    bullets: ['Vários DNS predefinidos incluídos', 'Funciona junto com WireGuard e IKEv2', 'Útil para objetivos de privacidade e filtragem', 'Sem precisar de outro app de DNS'],
    cta: CTA,
    faq: [
      { q: 'Qual DNS devo usar?', a: 'Quad9 para foco em segurança, Cloudflare pela velocidade, AdGuard DNS para bloquear anúncios — ou o padrão do sistema.' },
      { q: 'O DNS personalizado substitui a criptografia da VPN?', a: 'Não. O DNS muda o resolvedor; a VPN continua criptografando o tráfego até o servidor VPN.' },
      { q: 'Posso usar perfis de DNS no Free?', a: 'Os ajustes de DNS ficam disponíveis conforme o seu plano atual no app.' },
    ],
  },
  'vpn-for-travel': {
    h1: 'VPN para viagens no iPhone — roaming, hotéis e aeroportos',
    lead:
      'Viajar significa Wi‑Fi desconhecido, chips estrangeiros e às vezes redes filtradas. O FollowNet mantém o mesmo uso no iOS enquanto o Smart Connect ajuda a escolher um protocolo para a rede atual.',
    sections: [
      { title: 'Situações de viagem', body: 'O Wi‑Fi da sala VIP do aeroporto, os portais cativos de hotel e os chips pré-pagos locais se comportam de jeitos diferentes. A VPN ajuda na privacidade; o Smart Connect ajuda na conexão quando os protocolos são restritos no exterior.' },
      { title: 'Dicas para quem viaja', body: 'Baixe o FollowNet antes de sair, entre com seu e-mail, rode o Speed Test no Wi‑Fi e na rede móvel e ative a conexão automática em redes não confiáveis. Os locais incluídos no seu plano aparecem no app.' },
    ],
    bullets: ['Vários locais listados no app', 'Smart Connect para redes desconhecidas', 'Conexão automática no Wi‑Fi de hotéis e aeroportos', 'Instale e teste antes da viagem'],
    cta: CTA,
    faq: [
      { q: 'A VPN funciona em todos os países?', a: 'Depende das leis e políticas de rede locais. Cada usuário é responsável por cumprir a legislação local.' },
      { q: 'Conecto antes ou depois do login no Wi‑Fi do hotel?', a: 'Normalmente depois do portal cativo; em seguida, ligue a VPN para o resto da sessão.' },
      { q: 'O roaming fica mais caro com VPN?', a: 'A VPN acrescenta um pouco de tráfego; as tarifas de roaming dependem da sua operadora, não do FollowNet.' },
    ],
  },
  'vpn-speed-test-ios': {
    h1: 'Speed Test de VPN para iPhone — meça antes de decidir',
    lead:
      'O FollowNet inclui um Speed Test para comparar no iOS a velocidade de download e a latência com a VPN ligada ou desligada, e entre locais — antes de passar para o Premium.',
    sections: [
      { title: 'Por que testar a velocidade da VPN no iOS', body: 'A velocidade depende da sua rede base, da distância até o servidor e do protocolo. Testar no seu Wi‑Fi e 4G reais ajuda a ter expectativas realistas — principalmente para streaming e chamadas de vídeo no iPad.' },
      { title: 'Como usar o Speed Test no FollowNet', body: 'Abra o Speed Test no app, meça primeiro sem VPN, depois conecte e teste de novo. Se os resultados variarem na sua operadora, compare o Smart Connect com WireGuard ou IKEv2 manual.' },
    ],
    bullets: ['Integrado ao FollowNet — sem apps de terceiros', 'Compare servidores e protocolos', 'Útil no Free e no Premium', 'Funciona no iPhone e no iPad'],
    cta: CTA,
    faq: [
      { q: 'A VPN sempre será mais lenta?', a: 'Algum overhead é normal por causa da criptografia e da distância. Um servidor próximo costuma diminuir a diferença.' },
      { q: 'Qual protocolo é o mais rápido?', a: 'Muitas vezes o WireGuard em boas redes; mas varia, então meça no seu local com o Speed Test.' },
      { q: 'O Speed Test consome meu tráfego?', a: 'Sim. Os testes consomem dados como qualquer download — lembre disso no limite semanal gratuito.' },
    ],
  },
  'secure-vpn-iphone': {
    h1: 'VPN segura para iPhone — criptografia, conexão automática e DNS',
    lead:
      'Segurança no iOS é mais do que um cadeado. O FollowNet combina criptografia WireGuard ou IKEv2, conexão automática opcional, DNS personalizado e uma Política de Privacidade publicada.',
    sections: [
      { title: 'Camadas de proteção', body: 'A VPN criptografa o tráfego até o servidor VPN. A conexão automática liga a VPN no Wi‑Fi público ou na rede móvel sem você tocar em nada. Os perfis de DNS podem acrescentar resolvedores com bloqueio ou focados em privacidade. Juntos, deixam o uso diário do iPhone mais robusto em redes não confiáveis.' },
      { title: 'Boas práticas de segurança', body: 'Mantenha o iOS atualizado, use um código forte ou Face ID, ative a conexão automática em Wi‑Fi público e leia a Política de Privacidade do FollowNet. Premium não significa «mais criptografia» — ele libera capacidade e servidores.' },
    ],
    bullets: ['Protocolos modernos: WireGuard, IKEv2, AmneziaWG', 'Conexão automática no Wi‑Fi ou 4G', 'DNS predefinidos personalizados', 'Revisão da App Store e extensão VPN isolada'],
    cta: CTA,
    faq: [
      { q: 'O FollowNet é seguro para usar o banco no iPhone?', a: 'A VPN acrescenta criptografia de transporte, mas use os apps oficiais do banco e sites HTTPS. O FollowNet não substitui os cuidados de segurança do aparelho.' },
      { q: 'VPN segura significa «nível militar»?', a: 'Termos de marketing variam. O FollowNet usa protocolos VPN modernos e padronizados — veja nossa documentação e a Política de Privacidade para os detalhes.' },
      { q: 'A VPN protege contra phishing?', a: 'Não. A VPN criptografa o tráfego; ela não bloqueia links maliciosos nem páginas de login falsas.' },
    ],
  },
  'hysteria2-vpn-ios': {
    h1: 'VPN Hysteria2 no iOS — outro caminho quando a rede trava os túneis',
    lead:
      'O FollowNet inclui o Hysteria2 no iPhone e no iPad junto com WireGuard, IKEv2 e AmneziaWG. Use manualmente ou deixe o Smart Connect escolher o protocolo quando sua rede perde pacotes ou é hostil ao tráfego VPN clássico.',
    sections: [
      { title: 'Quando o Hysteria2 ajuda no iOS', body: 'Algumas conexões de hotel, chips de viagem e operadoras com filtros degradam o WireGuard ou travam o estabelecimento da conexão. O Hysteria2 é um caminho alternativo prático dentro da pilha VPN do FollowNet — não é uma rede de mistura nem garante acesso em todo lugar.' },
      { title: 'Como ativar o Hysteria2', body: 'Abra Ajustes → Protocolo e escolha Hysteria2, ou deixe o Smart Connect ligado para a escolha automática. Depois de trocar, rode o Speed Test no mesmo Wi‑Fi ou 4G para comparar números reais em vez de adivinhar.' },
    ],
    bullets: ['Hysteria2 junto com WireGuard, IKEv2 e AmneziaWG', 'O Smart Connect pode escolhê-lo em redes difíceis', 'Escolha manual sempre disponível', 'Funciona com o limite semanal Free e o Premium'],
    cta: CTA,
    faq: [
      { q: 'O Hysteria2 é melhor que o WireGuard?', a: 'Nem sempre. Em redes tranquilas o WireGuard costuma ser o mais rápido; o Hysteria2 ajuda quando esses caminhos falham. Meça com o Speed Test.' },
      { q: 'O Smart Connect inclui o Hysteria2?', a: 'O Smart Connect avalia as condições da rede e pode escolher entre os protocolos suportados pelo FollowNet, incluindo o Hysteria2 quando faz sentido.' },
      { q: 'O Hysteria2 está no Free?', a: 'Os protocolos disponíveis seguem o seu plano no app. O Free usa o mesmo conjunto de protocolos modernos dentro do limite semanal.' },
    ],
  },
  'vpn-chrome-extension': {
    h1: 'Extensão VPN FollowNet para Chrome — navegação no computador, mesma conta',
    lead:
      'Precisa do FollowNet fora do iPhone? A extensão do Chrome cobre o tráfego do navegador no Chrome do computador, com a mesma conta e limites honestos de Free e Premium — enquanto o app de iOS continua sendo a VPN de sistema do aparelho inteiro.',
    sections: [
      {
        title: 'Para que serve a extensão',
        body:
          'A extensão do Chrome protege a navegação no Chrome (ou em navegadores Chromium compatíveis) no computador. Entre com seu código de e-mail do FollowNet, escolha um local do seu plano e mantenha o popup simples. É um proxy do navegador — não uma VPN de sistema completa para todos os apps do macOS ou Windows.',
      },
      {
        title: 'O que ela não cobre',
        body:
          'O tráfego fora do navegador compatível — apps de desktop, outros navegadores, atualizações do sistema — não é protegido pela extensão. Para cobrir o celular ou tablet inteiro, use o app FollowNet para iOS com Network Extension.',
      },
      {
        title: 'Como ela complementa o iPhone',
        body:
          'Use o app de iOS para conexão automática, widgets, rede móvel, perfis de rede e VPN para todos os apps. Use o Chrome quando estiver no computador. Uma conta une os dois; o tráfego semanal Free, o Premium e as vagas de aparelhos acompanham a conta.',
      },
      {
        title: 'Kill Switch, listas de anúncios e roteamento',
        body:
          'O Kill Switch tenta impedir que o Chrome vaze tráfego se o proxy cair (só no navegador, não no sistema todo). Listas opcionais no estilo EasyList / AdGuard reduzem anúncios e rastreadores. O roteamento por site pode mandar alguns domínios pelo proxy enquanto as outras abas seguem direto — sempre só no Chrome.',
      },
      {
        title: 'Configuração em poucos passos',
        body:
          'Instale a extensão FollowNet pela Chrome Web Store, entre com o mesmo código de e-mail do iOS, escolha um servidor entre os locais do seu plano e conecte. Se algo falhar, confirme que você está logado e que ainda há tráfego semanal Free.',
      },
      {
        title: 'Free semanal ou Premium',
        body:
          'O Free inclui um limite de tráfego semanal para você avaliar a navegação no computador antes de pagar. O Premium remove o limite conforme a sua assinatura. Nenhum plano transforma a extensão em uma VPN de sistema para o computador.',
      },
    ],
    bullets: [
      'A mesma conta FollowNet do iOS',
      'Proxy do navegador + Kill Switch — não uma VPN para o computador inteiro',
      'Bloqueio de anúncios opcional no estilo EasyList / AdGuard',
      'Tráfego semanal Free para avaliação',
      'Premium opcional para tráfego ilimitado nas condições atuais',
    ],
    cta: 'Instalar a extensão do Chrome',
    faq: [
      { q: 'A extensão do Chrome substitui o app do iPhone?', a: 'Não. A VPN do iOS cobre o celular inteiro; o Chrome cobre o tráfego do navegador no computador.' },
      { q: 'Posso usar o Free no Chrome?', a: 'Sim. O Free inclui tráfego semanal para avaliação; o Premium remove o limite conforme a sua assinatura.' },
      { q: 'A extensão protege Slack, Zoom ou outros apps de desktop?', a: 'Não. Ela cobre só o tráfego do navegador compatível. Para todos os apps, use uma VPN de sistema — no celular, é o app FollowNet para iOS.' },
      { q: 'Existe app de VPN para macOS?', a: 'Hoje o FollowNet prioriza o iOS e a extensão do Chrome em vez de esperar por um cliente completo para macOS.' },
    ],
  },
  'vpn-widgets-ios': {
    h1: 'Widgets de VPN para iOS — o status do FollowNet na Tela de Início',
    lead:
      'Os widgets do FollowNet mostram o status da conexão de relance no iPhone e no iPad, para você saber se o túnel está ativo sem abrir o app toda vez.',
    sections: [
      { title: 'Por que widgets de VPN ajudam', body: 'Wi‑Fi público e conexão automática só funcionam se você perceber quando a VPN não ligou. Os widgets mostram o status ao lado dos seus outros blocos — o status primeiro, não um mini painel de métricas de marketing.' },
      { title: 'Combine widgets com a conexão automática', body: 'Configure a conexão automática como Só Wi‑Fi, Só 4G ou Sempre nos Ajustes e use os widgets para confirmar o túnel depois de entrar em uma rede. A escolha do protocolo continua nos Ajustes ou no Smart Connect.' },
    ],
    bullets: ['Status na Tela de Início sem abrir o app', 'Combina com os hábitos de conexão automática', 'App nativo de iOS na App Store', 'Grátis para testar — Premium opcional'],
    cta: CTA,
    faq: [
      { q: 'Quais versões do iOS suportam os widgets do FollowNet?', a: 'O suporte a widgets segue os requisitos da versão atual na App Store — mantenha o FollowNet e o iOS atualizados.' },
      { q: 'Posso conectar só pelo widget?', a: 'Os widgets priorizam o status e um atalho rápido para o app. Os controles completos ficam no FollowNet e nos avisos de VPN do sistema.' },
      { q: 'Os widgets gastam bateria extra?', a: 'Widgets são blocos de status leves; o consumo de bateria da VPN vem do túnel ativo, não do bloco.' },
    ],
  },
  'how-to-setup-vpn-iphone': {
    h1: 'Como configurar uma VPN no iPhone com o FollowNet',
    lead:
      'Instale o FollowNet pela App Store, entre com um código por e-mail, permita uma vez a configuração de VPN e conecte com um toque — tráfego semanal Free incluso e Premium quando você precisar de ilimitado.',
    sections: [
      {
        title: 'Configuração passo a passo',
        body:
          '1) Baixe o FollowNet na App Store. 2) Entre com o código de verificação do e-mail. 3) Aprove o aviso de configuração de VPN do iOS. 4) Toque em Conectar ou ative o Smart Connect. 5) Se quiser, configure a conexão automática, os perfis de DNS e um widget na Tela de Início.',
      },
      {
        title: 'O que significa a permissão de VPN do iOS',
        body:
          'A Apple exige permissão explícita para apps de VPN com Network Extension. Você está adicionando uma configuração de VPN do sistema gerenciada pelo FollowNet — não instalando um perfil qualquer por fora. Se desinstalar o app, dá para removê-la em Ajustes do iOS → VPN.',
      },
      {
        title: 'Dicas para o primeiro uso',
        body:
          'Teste no Wi‑Fi de casa antes de viajar. Rode o Speed Test com e sem VPN. Escolha um local próximo entre os listados no app. Se o WireGuard falhar em uma rede restritiva, deixe o Smart Connect ligado ou tente AmneziaWG, IKEv2 ou Hysteria2 em Ajustes → Protocolo.',
      },
      {
        title: 'Ajustes recomendados depois de conectar',
        body:
          'Para cafés e hotéis, deixe a conexão automática em Só Wi‑Fi. Mantenha o Smart Connect ligado em viagens. Adicione um widget para conferir o status. Mude o DNS só se quiser um resolvedor específico — ele não substitui a criptografia da VPN.',
      },
      {
        title: 'Free semanal ou Premium depois da configuração',
        body:
          'O Free funciona na hora, sem cartão de crédito, e inclui tráfego semanal para avaliação. Quando o limite não der mais conta, passe para o Premium na App Store para tráfego ilimitado e os locais Premium desse plano. Nenhum plano garante desbloqueio de streaming.',
      },
    ],
    bullets: [
      'Instalação pela App Store — sem perfis de configuração por fora',
      'Login por e-mail sem senha',
      'Aprove a Network Extension uma vez e conecte',
      'Smart Connect, conexão automática, DNS, Speed Test, widgets',
      'Limite semanal Free para avaliar antes do Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Preciso de cartão de crédito para configurar?', a: 'Não. O FollowNet Free funciona sem cartão. O Premium é opcional pela App Store.' },
      { q: 'Por que o iOS pede para adicionar uma configuração de VPN?', a: 'A Apple exige permissão explícita para apps de VPN com Network Extension. Isso é normal em VPNs da App Store.' },
      { q: 'Posso usar a mesma conta no iPad e no Chrome?', a: 'Sim. Entre com o mesmo e-mail no iPad e na extensão do Chrome.' },
      { q: 'A configuração falhou ou a VPN não conecta — e agora?', a: 'Confirme que a configuração de VPN está permitida, tente o Smart Connect, troque de protocolo ou de local no app e teste em outra rede se houver um portal cativo.' },
    ],
  },
  'vpn-for-gaming-iphone': {
    h1: 'VPN para jogos no iPhone — latência, protocolos e quando dispensar',
    lead:
      'Use o FollowNet no iPhone quando quiser jogar com criptografia em redes não confiáveis — e meça a latência com o Speed Test para saber se o WireGuard ou outro protocolo vale a pena.',
    sections: [
      { title: 'Quando uma VPN para jogos ajuda', body: 'Wi‑Fi público, chips de viagem e sessões sensíveis à privacidade são bons motivos para passar o tráfego do jogo por um túnel. O WireGuard costuma ser a primeira tentativa pelo overhead baixo; o IKEv2 ajuda quando você alterna entre 4G e Wi‑Fi no meio da partida.' },
      { title: 'Quando desligar a VPN', body: 'Se o Speed Test mostrar um grande salto de latência até um servidor distante, jogar com VPN pode ficar pior. Escolha uma saída mais próxima, tente o Smart Connect ou desconecte em redes de casa confiáveis. O FollowNet não inventa uma rota melhor que a sua conexão de base.' },
    ],
    bullets: ['WireGuard primeiro pelo overhead baixo', 'Smart Connect quando as redes filtram VPN', 'Speed Test para checar a latência real', 'O mesmo modelo Free e Premium do uso diário'],
    cta: CTA,
    faq: [
      { q: 'O FollowNet reduz o ping?', a: 'Às vezes uma saída melhor ajuda; muitas vezes a VPN acrescenta overhead. Meça com o Speed Test em vez de supor.' },
      { q: 'O AmneziaWG é bom para jogos?', a: 'Use quando o WireGuard comum estiver bloqueado. A camuflagem pode trocar um pouco de desempenho por alcance.' },
      { q: 'Dá para jogar com o Free?', a: 'Sim, dentro do limite semanal. Para jogar competitivo o dia todo, geralmente é preciso Premium.' },
    ],
  },
};
