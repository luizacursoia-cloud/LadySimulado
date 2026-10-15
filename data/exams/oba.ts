import { Exam } from '@/types/quiz';

export const obaExam: Exam = {
  id: 'oba-olimpiada-astronomia',
  slug: 'oba',
  title: 'OBA - Olimpíada Brasileira de Astronomia e Astronáutica',
  subtitle: 'Sistema Solar, Fases da Lua, Astronáutica Brasileira e Astrofísica',
  category: 'oba',
  level: 'Olimpíadas',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'Sociedade Astronômica Brasileira (SAB) / AEB',
  badge: 'Medalha Nacional OBA',
  description: 'Simulado oficial da Olimpíada Brasileira de Astronomia e Astronáutica (Níveis 3 e 4). Questões fascinantes sobre mecânica celeste, constelações, exploração espacial e satélites do INPE com explicações completas.',
  tags: ['OBA', 'Astronomia', 'Astronáutica', 'Sistema Solar', 'INPE', 'AEB'],
  questions: [
    {
      id: 'oba-q1',
      number: 1,
      subject: 'Astronomia',
      topic: 'Sistema Solar / Planetas Rochosos e Gasosos',
      statement: 'No Sistema Solar, os quatro planetas mais próximos do Sol possuem superfície sólida e rochosa. Esses quatro planetas telúricos são, em ordem de distância a partir do Sol:',
      options: [
        { id: 'A', text: 'Mercúrio, Vênus, Terra e Marte.' },
        { id: 'B', text: 'Vênus, Terra, Marte e Júpiter.' },
        { id: 'C', text: 'Mercúrio, Terra, Marte e Saturno.' },
        { id: 'D', text: 'Marte, Júpiter, Saturno e Urano.' },
        { id: 'E', text: 'Terra, Vênus, Mercúrio e Netuno.' }
      ],
      correctOption: 'A',
      explanation: 'Os planetas interiores (telúricos ou rochosos) são Mercúrio, Vênus, Terra e Marte. Em seguida temos o Cinturão de Asteroides, e após ele os planetas gigantes gasosos (Júpiter e Saturno) e gigantes de gelo (Urano e Netuno).',
      teacherTip: 'Mnemônico famoso: Minha Vó Tem Muitas Joias, Só Usa Noite (Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno).',
      trapAlert: 'Plutão foi reclassificado em 2006 pela União Astronômica Internacional (IAU) como planeta anão.'
    },
    {
      id: 'oba-q2',
      number: 2,
      subject: 'Astronomia',
      topic: 'Fases da Lua e Eclipses',
      contextText: 'Durante um eclipse solar total, a Lua interpõe-se exatamente entre o Sol e a Terra, projetando sua sombra sobre a superfície terrestre.',
      statement: 'Para que ocorra um eclipse solar, a Lua deve encontrar-se obrigatoriamente na fase:',
      options: [
        { id: 'A', text: 'Lua Cheia' },
        { id: 'B', text: 'Lua Nova' },
        { id: 'C', text: 'Quarto Crescente' },
        { id: 'D', text: 'Quarto Minguante' },
        { id: 'E', text: 'Qualquer fase indistintamente' }
      ],
      correctOption: 'B',
      explanation: 'O eclipse solar só pode ocorrer quando a Lua está alinhada entre a Terra e o Sol (fase de Lua Nova). Já o eclipse lunar (quando a Terra faz sombra sobre a Lua) só ocorre na fase de Lua Cheia.',
      teacherTip: 'Eclipse Solar = Sol - Lua - Terra (Lua Nova). Eclipse Lunar = Sol - Terra - Lua (Lua Cheia).',
      trapAlert: 'Não confundir solar (Nova) com lunar (Cheia).'
    },
    {
      id: 'oba-q3',
      number: 3,
      subject: 'Astronomia',
      topic: 'Estações do Ano e Inclinação do Eixo Terrestre',
      statement: 'A causa primordial da existência das quatro estações do ano na Terra é:',
      options: [
        { id: 'A', text: 'A variação contínua da distância entre a Terra e o Sol ao longo da órbita elíptica.' },
        { id: 'B', text: 'A inclinação de aproximadamente 23,5° do eixo de rotação da Terra em relação ao plano de sua órbita (translação).' },
        { id: 'C', text: 'A velocidade variável da rotação da Terra ao redor do próprio eixo.' },
        { id: 'D', text: 'A passagem periódica de cometas próximos à atmosfera terrestre.' },
        { id: 'E', text: 'O aquecimento provocado pelas marés oceânicas geradas pela atração da Lua.' }
      ],
      correctOption: 'B',
      explanation: 'As estações do ano ocorrem devido à inclinação de ~23,5° do eixo da Terra combinada ao movimento de translação ao redor do Sol. Isso faz com que a incidência dos raios solares varie ao longo do ano em cada hemisfério.',
      teacherTip: 'A maior pegadinha da astronomia: as estações NÃO dependem da distância ao Sol! Quando é verão no hemisfério Sul (janeiro), a Terra está inclusive no periélio (ponto mais próximo do Sol).',
      trapAlert: 'A órbita da Terra é quase circular (excentricidade baixíssima de 0,017), a distância varia muito pouco.'
    },
    {
      id: 'oba-q4',
      number: 4,
      subject: 'Astronáutica',
      topic: 'Programa Espacial Brasileiro / INPE e AEB',
      statement: 'O primeiro satélite de coleta de dados totalmente projetado, construído e integrado no Brasil, lançado ao espaço em 1993 e que operou com sucesso por mais de 30 anos, foi o:',
      options: [
        { id: 'A', text: 'SCD-1 (Satélite de Coleta de Dados 1)' },
        { id: 'B', text: 'CBERS-4A' },
        { id: 'C', text: 'Amazônia-1' },
        { id: 'D', text: 'SGDC-1' },
        { id: 'E', text: 'Sputnik-1' }
      ],
      correctOption: 'A',
      explanation: 'O SCD-1 foi lançado em 9 de fevereiro de 1993 pelo foguete Pegasus norte-americano. Desenvolvido pelo INPE (Instituto Nacional de Pesquisas Espaciais), é um marco histórico da tecnologia espacial brasileira.',
      teacherTip: 'O SCD-1 tinha vida útil projetada de apenas 1 ano e funcionou incrivelmente por mais de três décadas!',
      trapAlert: 'O Amazônia-1 foi o primeiro satélite de sensoriamento remoto de grande porte com a Plataforma Multimissão (PMM), mas lançado bem depois (2021).'
    },
    {
      id: 'oba-q5',
      number: 5,
      subject: 'Astronomia',
      topic: 'Leis de Kepler / Mecânica Celeste',
      contextText: 'A Segunda Lei de Kepler (Lei das Áreas) afirma que a linha imaginária que liga o centro do Sol ao centro de um planeta varre áreas iguais em intervalos de tempo iguais.',
      statement: 'Como consequência dessa lei, a velocidade orbital de um planeta é:',
      options: [
        { id: 'A', text: 'Rigorosamente constante em todos os pontos da trajetória.' },
        { id: 'B', text: 'Máxima no periélio (ponto mais próximo do Sol) e mínima no afélio (ponto mais distante).' },
        { id: 'C', text: 'Mínima no periélio e máxima no afélio.' },
        { id: 'D', text: 'Nula quando o planeta cruza os equinócios.' },
        { id: 'E', text: 'Inversamente proporcional ao quadrado da sua massa.' }
      ],
      correctOption: 'B',
      explanation: 'Como o raio vetor é menor no periélio, para varrer a mesma área no mesmo tempo o planeta precisa percorrer um arco de órbita maior, logo sua velocidade é mais rápida (máxima) no periélio e mais lenta (mínima) no afélio.',
      teacherTip: 'Periélio = "Perto" do Sol = Mais Rápido. Afélio = "Afastado" do Sol = Mais Lento.',
      trapAlert: 'Cuidado para não inverter periélio com afélio.'
    },
    {
      id: 'oba-q6',
      number: 6,
      subject: 'Astronáutica',
      topic: 'Foguetes e Leis de Newton',
      statement: 'O princípio físico fundamental que explica a propulsão de um foguete espacial tanto dentro da atmosfera quanto no vácuo do espaço é:',
      options: [
        { id: 'A', text: 'O empuxo de Arquimedes exercido pelo ar atmosférico comprimido.' },
        { id: 'B', text: 'A Terceira Lei de Newton (Ação e Reação) e a conservação da quantidade de movimento.' },
        { id: 'C', text: 'A atração magnética gerada pelo vento solar.' },
        { id: 'D', text: 'A refração da luz solar nas tubeiras dos propulsores.' },
        { id: 'E', text: 'A diminuição progressiva da constante de gravitação universal.' }
      ],
      correctOption: 'B',
      explanation: 'Ao queimar propelente, a câmara do foguete ejeta gases a altíssimas velocidades para trás (ação). Como reação em sentido oposto, os gases exercem uma força de empuxo sobre o foguete impulsionando-o para a frente, conservando a quantidade de movimento do sistema.',
      teacherTip: 'O foguete não precisa de ar para "se apoiar": ele funciona perfeitamente (e até com maior eficiência) no vácuo absoluto!',
      trapAlert: 'Muitos acham erroneamente que o foguete precisa do ar para empurrar. Isso é falso; a reação decorre da massa dos gases expelidos.'
    },
    {
      id: 'oba-q7',
      number: 7,
      subject: 'Astronomia',
      topic: 'Estrelas e o Sol',
      statement: 'No núcleo do Sol e da maioria das estrelas da sequência principal, a energia colossal emitida na forma de luz e calor é gerada por meio do processo de:',
      options: [
        { id: 'A', text: 'Fissão nuclear de núcleos pesados de urânio e tório.' },
        { id: 'B', text: 'Fusão nuclear de núcleos de hidrogênio gerando núcleos de hélio.' },
        { id: 'C', text: 'Combustão química convencional de carvão mineral e oxigênio.' },
        { id: 'D', text: 'Decaimento alfa de isótopos de chumbo e mercúrio.' },
        { id: 'E', text: 'Aniquilação espontânea de matéria e antimatéria no manto estelar.' }
      ],
      correctOption: 'B',
      explanation: 'Nas estrelas ocorre a fusão nuclear (ciclo próton-próton): 4 prótons (hidrogênio) fundem-se para produzir 1 núcleo de hélio-4, convertendo o defeito de massa diretamente em energia pela célebre fórmula de Einstein E = mc².',
      teacherTip: 'Fissão = quebrar núcleo pesado (usinas nucleares na Terra). Fusão = juntar núcleos leves (o que o Sol faz).',
      trapAlert: 'O Sol não "queima" fogo químico; se fosse carvão, teria se apagado em poucos milhares de anos.'
    },
    {
      id: 'oba-q8',
      number: 8,
      subject: 'Astronáutica',
      topic: 'Astronautas Brasileiros no Espaço',
      statement: 'O primeiro astronauta brasileiro e lusófono a viajar para o espaço, em março de 2006 a bordo da missão russa Soyuz TMA-8 com destino à Estação Espacial Internacional (ISS), foi:',
      options: [
        { id: 'A', text: 'Marcos Pontes' },
        { id: 'B', text: 'Santos Dumont' },
        { id: 'C', text: 'César Lattes' },
        { id: 'D', text: 'Bartolomeu de Gusmão' },
        { id: 'E', text: 'Carlos Chagas' }
      ],
      correctOption: 'A',
      explanation: 'O engenheiro aeronáutico e tenente-coronel da FAB Marcos Pontes participou da Missão Centenário em 2006, celebrando os 100 anos do voo do 14-Bis de Santos Dumont.',
      teacherTip: 'Ele realizou na ISS oito experimentos científicos desenvolvidos por instituições de pesquisa brasileiras.',
      trapAlert: 'Santos Dumont foi o pioneiro da aviação, mas nunca esteve no espaço.'
    },
    {
      id: 'oba-q9',
      number: 9,
      subject: 'Astronomia',
      topic: 'Constelações e Reconhecimento do Céu Austral',
      statement: 'A constelação mais emblemática do céu do Hemisfério Sul, presente na bandeira nacional brasileira e utilizada tradicionalmente para localização do ponto cardeal Sul, é o:',
      options: [
        { id: 'A', text: 'Cruzeiro do Sul (Crux)' },
        { id: 'B', text: 'Órion (com as Três Marias)' },
        { id: 'C', text: 'Ursa Maior' },
        { id: 'D', text: 'Escorpião' },
        { id: 'E', text: 'Touro' }
      ],
      correctOption: 'A',
      explanation: 'O Cruzeiro do Sul (Crux) é a menor das 88 constelações modernas em área, mas uma das mais brilhantes. Prolongando-se seu braço maior 4,5 vezes para o pé da cruz e baixando uma linha vertical ao horizonte, encontra-se com precisão o ponto cardeal Sul.',
      teacherTip: 'A estrela "Intrometida" fica do lado direito e é mais fraca; a Estrela de Magalhães fica na ponta de baixo.',
      trapAlert: 'Ursa Maior e Ursa Menor são constelações típicas do Hemisfério Norte.'
    },
    {
      id: 'oba-q10',
      number: 10,
      subject: 'Astronáutica',
      topic: 'Centro de Lançamento de Alcântara (CLA)',
      statement: 'O Centro de Lançamento de Alcântara (CLA), localizado no estado do Maranhão, é considerado internacionalmente um dos sítios mais vantajosos do mundo para lançamento de foguetes e satélites porque:',
      options: [
        { id: 'A', text: 'Está localizado a 2°18\' ao sul da linha do Equador terrestre, aproveitando ao máximo a velocidade tangencial de rotação da Terra para economizar até 30% de combustível.' },
        { id: 'B', text: 'Possui as temperaturas mais frias do continente sul-americano.' },
        { id: 'C', text: 'Situa-se no topo de uma cordilheira com altitude superior a 4.000 metros.' },
        { id: 'D', text: 'Dispõe de poços de petróleo submarinos para abastecimento imediato das naves.' },
        { id: 'E', text: 'Encontra-se a menos de 100 km do Polo Sul geográfico.' }
      ],
      correctOption: 'A',
      explanation: 'A velocidade de rotação da Terra é máxima no Equador (~1.670 km/h). Lançar foguetes para o leste a partir de Alcântara adiciona esse "impulso" natural gratuito, permitindo cargas úteis maiores ou economia expressiva de propelente.',
      teacherTip: 'Tema certeiro na prova da OBA: a posição geográfica estratégica de Alcântara em relação à Linha do Equador.',
      trapAlert: 'Alcântara fica ao nível do mar no litoral do Maranhão, sem montanhas.'
    },
    {
      id: 'oba-q11',
      number: 11,
      subject: 'Astronomia',
      topic: 'Ano-Luz e Escalas Cósmicas',
      statement: 'O "ano-luz" é uma unidade frequentemente utilizada em astronomia. Essa grandeza mede:',
      options: [
        { id: 'A', text: 'Tempo cronológico decorrido desde a formação do Sol.' },
        { id: 'B', text: 'Distância percorrida pela luz no vácuo durante o intervalo de um ano terrestre (cerca de 9,5 trilhões de km).' },
        { id: 'C', text: 'Intensidade luminosa de uma lâmpada fluorescente padrão.' },
        { id: 'D', text: 'Massa total de gás presente em uma nebulosa planetária.' },
        { id: 'E', text: 'Pressão atmosférica no topo de nuvens estelares.' }
      ],
      correctOption: 'B',
      explanation: 'Apesar de conter a palavra "ano", o ano-luz é uma unidade de DISTÂNCIA (espaço): d = c × t = 300.000 km/s × 31.536.000 s ≈ 9,46 × 10¹² km (9,46 trilhões de quilômetros).',
      teacherTip: 'Pegadinha clássica em todas as provas da OBA e vestibulares: ano-luz mede DISTÂNCIA e não tempo!',
      trapAlert: 'Nunca marque "tempo" quando a questão perguntar sobre ano-luz.'
    },
    {
      id: 'oba-q12',
      number: 12,
      subject: 'Astronomia',
      topic: 'Planetas e Características Físicas',
      statement: 'Qual é o maior planeta do Sistema Solar, possuidor de uma gigantesca tempestade anticiclônica conhecida como "Grande Mancha Vermelha"?',
      options: [
        { id: 'A', text: 'Saturno' },
        { id: 'B', text: 'Netuno' },
        { id: 'C', text: 'Júpiter' },
        { id: 'D', text: 'Marte' },
        { id: 'E', text: 'Urano' }
      ],
      correctOption: 'C',
      explanation: 'Júpiter é o maior planeta do Sistema Solar, com volume capaz de abrigar mais de 1.300 Terras. A Grande Mancha Vermelha é um vórtice tempestuoso observado há séculos.',
      teacherTip: 'Saturno tem o mais espetacular sistema de anéis visíveis, mas Júpiter é o gigante em massa e tamanho.',
      trapAlert: 'Marte é o "Planeta Vermelho" pela cor do óxido de ferro no solo, mas a "Grande Mancha Vermelha" é em Júpiter!'
    },
    {
      id: 'oba-q13',
      number: 13,
      subject: 'Astronáutica',
      topic: 'Velocidade de Escape e Órbitas',
      statement: 'Para que uma sonda espacial escape definitivamente da atração gravitacional da superfície da Terra e viaje pelo espaço interplanetário, ela deve atingir uma velocidade mínima (velocidade de escape da Terra) de aproximadamente:',
      options: [
        { id: 'A', text: '1,2 km/s' },
        { id: 'B', text: '7,9 km/s' },
        { id: 'C', text: '11,2 km/s' },
        { id: 'D', text: '42,1 km/s' },
        { id: 'E', text: '300.000 km/s' }
      ],
      correctOption: 'C',
      explanation: 'A 1ª velocidade cósmica (para entrar em órbita circular baixa) é ~7,9 km/s. A 2ª velocidade cósmica (velocidade de escape da Terra) é v = √(2GM/R) ≈ 11,2 km/s (cerca de 40.320 km/h).',
      teacherTip: 'Diferença: 7,9 km/s é órbita (fica dando voltas na Terra); 11,2 km/s é escape (sai para o Sistema Solar).',
      trapAlert: '300.000 km/s é a velocidade da luz, nada a ver com propulsão de sondas químicas.'
    },
    {
      id: 'oba-q14',
      number: 14,
      subject: 'Astronomia',
      topic: 'Lua / Rotação Sincronizada',
      statement: 'Da Terra, observadores sempre enxergam a mesma face da Lua (o "lado visível"). Isso acontece porque:',
      options: [
        { id: 'A', text: 'A Lua não gira em torno do seu próprio eixo (rotação nula).' },
        { id: 'B', text: 'O período de rotação da Lua ao redor do próprio eixo é rigorosamente igual ao seu período de translação ao redor da Terra (cerca de 27,3 dias), fenômeno conhecido como acoplamento de maré.' },
        { id: 'C', text: 'O lado oculto da Lua não recebe luz solar em nenhuma época do mês.' },
        { id: 'D', text: 'A atmosfera da Terra bloqueia a luz proveniente do lado de trás da Lua.' },
        { id: 'E', text: 'A Lua é um corpo estático suspenso pelo campo magnético terrestre.' }
      ],
      correctOption: 'B',
      explanation: 'A rotação sincronizada decorre da desaceleração pelas forças de maré gravitacionais. Como o tempo de rotação e translação coincidem exatamente, a Lua nos mostra sempre a mesma hemiesfera.',
      teacherTip: 'O "lado oculto" NÃO é o "lado escuro": ele recebe tanta luz solar quanto o lado visível (por exemplo, na Lua Nova, o lado oculto está 100% iluminado pelo Sol).',
      trapAlert: 'A Lua GIRA sim ao redor do próprio eixo! Dizer que ela não gira é um erro comum.'
    },
    {
      id: 'oba-q15',
      number: 15,
      subject: 'Astronáutica',
      topic: 'Telescópios Espaciais / Hubble e James Webb',
      statement: 'Lançado no final de 2021, o Telescópio Espacial James Webb (JWST) possui um espelho primário de berílio folheado a ouro de 6,5 metros e foi projetado para observar o cosmos predominantemente na faixa de comprimento de onda:',
      options: [
        { id: 'A', text: 'Do infravermelho, permitindo enxergar as primeiras galáxias formadas após o Big Bang e através de nuvens de poeira cósmica.' },
        { id: 'B', text: 'Dos raios gama de altíssima frequência.' },
        { id: 'C', text: 'Das micro-ondas de baixa potência exclusivamente.' },
        { id: 'D', text: 'Do ultravioleta extremo com sensores analógicos.' },
        { id: 'E', text: 'De ondas de rádio kilométricas.' }
      ],
      correctOption: 'A',
      explanation: 'O James Webb foi otimizado para o infravermelho próximo e médio. A expansão do Universo desloca a luz das galáxias primitivas para o vermelho (redshift cosmologico), e o infravermelho atravessa as nuvens de poeira interestelar onde nascem estrelas e planetas.',
      teacherTip: 'Enquanto o Hubble opera no visível e ultravioleta, o James Webb opera no infravermelho e fica no ponto de Lagrange L2 a 1,5 milhão de km da Terra.',
      trapAlert: 'O espelho dourado do James Webb é feito especialmente para refletir o infravermelho com 98% de eficiência.'
    },
    {
      id: 'oba-q16',
      number: 16,
      subject: 'Astronomia',
      topic: 'Meteoros, Meteoritos e Asteroides',
      statement: 'O rastro luminoso brilhante popularmente chamado de "estrela cadente", observado cruzando rapidamente o céu noturno, corresponde a:',
      options: [
        { id: 'A', text: 'Uma estrela de verdade que se desprendeu de sua galáxia e caiu na Terra.' },
        { id: 'B', text: 'Um meteoro, fenômeno luminoso gerado pelo aquecimento e queima de um pequeno fragmento rochoso (meteoróide) pelo atrito com a atmosfera terrestre.' },
        { id: 'C', text: 'Um relâmpago globular gerado nas camadas superiores da estratosfera.' },
        { id: 'D', text: 'A reflexão da luz dos faróis de aviões comerciais em nuvens cirrus.' },
        { id: 'E', text: 'Um satélite artificial geoestacionário emitindo sinais de rádio.' }
      ],
      correctOption: 'B',
      explanation: 'No espaço é um meteoróide. Ao entrar na atmosfera e queimar brilhando, o rastro luminoso é o METEORO. Se a rocha resistir e atingir o chão, é o METEORITO.',
      teacherTip: 'Sequência terminológica da OBA: Meteoróide (no espaço) -> Meteoro (o brilho no céu) -> Meteorito (a pedra que cai no chão).',
      trapAlert: 'Estrelas reais estão a trilhões de quilômetros e nunca caem na Terra.'
    },
    {
      id: 'oba-q17',
      number: 17,
      subject: 'Astronáutica',
      topic: 'Estação Espacial Internacional (ISS)',
      statement: 'Na Estação Espacial Internacional (ISS), que orbita a Terra a cerca de 400 km de altitude, os astronautas flutuam livremente. Essa condição de "gravidade zero" aparente ocorre porque:',
      options: [
        { id: 'A', text: 'A gravidade da Terra a 400 km de altitude já se reduziu a exatamente zero.' },
        { id: 'B', text: 'A ISS e os astronautas estão em permanente estado de queda livre ao redor da curvatura da Terra (microgravidade).' },
        { id: 'C', text: 'A blindagem de chumbo da estação anula as ondas gravitacionais terrestres.' },
        { id: 'D', text: 'Motores propulsores iônicos mantêm a estação empurrada para cima 24 horas por dia.' },
        { id: 'E', text: 'O ar comprimido no interior dos módulos atua como um colchão pneumático antigravitacional.' }
      ],
      correctOption: 'B',
      explanation: 'A 400 km de altitude, a gravidade terrestre ainda é de cerca de 90% do valor na superfície (g ≈ 8,8 m/s²). A flutuação ocorre porque a estação está caindo continuamente em direção à Terra com velocidade horizontal tão alta (~27.600 km/h) que a Terra se curva embaixo dela.',
      teacherTip: 'Conceito clássico: estar em órbita é estar em perpétua queda livre sem atingir o solo.',
      trapAlert: 'NÃO existe "gravidade zero" lá em cima; existe estado de imponderabilidade ou microgravidade.'
    },
    {
      id: 'oba-q18',
      number: 18,
      subject: 'Astronomia',
      topic: 'Marés Oceânicas',
      statement: 'As marés vivas (ou de sizígia), caracterizadas pelas maiores variações entre preamar e baixa-mar nos oceanos, ocorrem quando:',
      options: [
        { id: 'A', text: 'O Sol e a Lua formam um ângulo de 90° em relação à Terra (quadratura).' },
        { id: 'B', text: 'O Sol, a Lua e a Terra estão alinhados em linha reta (nas fases de Lua Nova e Lua Cheia), somando as atrações gravitacionais.' },
        { id: 'C', text: 'A Lua está estritamente no apogeu (ponto mais distante da Terra).' },
        { id: 'D', text: 'Ocorre a inversão do campo magnético solar a cada 11 anos.' },
        { id: 'E', text: 'Ventos alísios sopram em direção aos polos glaciais.' }
      ],
      correctOption: 'B',
      explanation: 'Nas fases de Lua Nova e Cheia, o efeito gravitacional do Sol e da Lua sobre as massas de água se somam no mesmo eixo, gerando as marés mais amplas (marés de sizígia ou marés vivas).',
      teacherTip: 'Maré de Sizígia = Nova e Cheia (marés altas mais altas). Maré de Quadratura = Quarto Crescente e Minguante (marés mortas, menor amplitude).',
      trapAlert: 'O Sol também causa marés (embora a da Lua seja cerca de 2 vezes mais intensa por estar muito mais perto).'
    },
    {
      id: 'oba-q19',
      number: 19,
      subject: 'Astronomia',
      topic: 'Evolução Estelar / Buracos Negros e Supernovas',
      statement: 'Ao final de sua vida útil, uma estrela muito massiva (com mais de 10 a 20 massas solares) esgota seu combustível nuclear no núcleo de ferro e implode sob sua própria gravidade, explodindo em um evento cataclísmico denominado:',
      options: [
        { id: 'A', text: 'Anã Branca' },
        { id: 'B', text: 'Supernova, podendo deixar como remanescente uma estrela de nêutrons ou um buraco negro.' },
        { id: 'C', text: 'Nebulosa planetária com formação de gigante vermelha.' },
        { id: 'D', text: 'Cometa de longo período.' },
        { id: 'E', text: 'Aurora boreal interestelar.' }
      ],
      correctOption: 'B',
      explanation: 'Estrelas supermassivas colapsam gerando uma explosão de supernova. A matéria do núcleo é tão comprimida que elétrons e prótons fundem-se em nêutrons (estrela de nêutrons/pulsar) ou, se a massa remanescente for ainda maior, colapsa infinitamente em um buraco negro estelar.',
      teacherTip: 'Estrelas como o Sol (massa média) não explodem como supernova: viram gigantes vermelhas, ejetam nebulosa planetária e viram anãs brancas de carbono e oxigênio.',
      trapAlert: 'O Sol nunca se tornará um buraco negro, pois não tem massa suficiente.'
    },
    {
      id: 'oba-q20',
      number: 20,
      subject: 'Astronáutica',
      topic: 'Exploração Lunar / Programa Apollo e Artemis',
      statement: 'A primeira missão espacial tripulada a pousar seres humanos na superfície da Lua foi a Apollo 11 em julho de 1969. O primeiro ser humano a pisar em solo lunar e pronunciar a célebre frase "Este é um pequeno passo para o homem, um salto gigantesco para a humanidade" foi:',
      options: [
        { id: 'A', text: 'Yuri Gagarin' },
        { id: 'B', text: 'Neil Armstrong' },
        { id: 'C', text: 'Buzz Aldrin' },
        { id: 'D', text: 'Michael Collins' },
        { id: 'E', text: 'Alan Shepard' }
      ],
      correctOption: 'B',
      explanation: 'Neil Armstrong pisou no Mar da Tranquilidade da Lua em 20 de julho de 1969 como comandante da missão Apollo 11 da NASA, seguido minutos depois pelo piloto do módulo lunar Buzz Aldrin. Michael Collins permaneceu no módulo de comando em órbita lunar.',
      teacherTip: 'Yuri Gagarin foi o primeiro homem no espaço (1961, órbita terrestre a bordo da Vostok 1), mas não foi à Lua.',
      trapAlert: 'Michael Collins ficou em órbita; quem pisou no solo foram Armstrong e Aldrin.'
    }
  ]
};
