import { Exam } from '@/types/quiz';

export const fuvestExam: Exam = {
  id: 'fuvest-usp-fase1',
  slug: 'fuvest',
  title: 'FUVEST - 1ª Fase (Vestibular USP)',
  subtitle: 'Prova Geral de Conhecimentos Interdisciplinares da Universidade de São Paulo',
  category: 'fuvest',
  level: 'Grandes Vestibulares',
  questionCount: 20,
  recommendedMinutes: 75,
  banca: 'Fundação Universitária para o Vestibular (FUVEST)',
  badge: '1ª Fase USP',
  highlight: true,
  description: 'Simulado de alto rendimento no padrão FUVEST 1ª Fase. Questões interdisciplinares e analíticas cobrindo Literatura obrigatória da USP, Humanidades, Exatas e Biológicas com gabarito comentado aprofundado.',
  tags: ['FUVEST', 'USP', '1ª Fase', 'Literatura USP', 'Medicina', 'Engenharia'],
  questions: [
    {
      id: 'fuv-q1',
      number: 1,
      subject: 'Literatura Brasileira',
      topic: 'Machado de Assis / Memórias Póstumas de Brás Cubas',
      contextText: '“Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.” (Brás Cubas, no capítulo das Negativas)',
      statement: 'O célebre desfecho de Memórias Póstumas de Brás Cubas sintetiza a visão do narrador defunto-autor ao:',
      options: [
        { id: 'A', text: 'Lamentar desesperadamente a extinção prematura da linhagem nobre de sua família patriarcal.' },
        { id: 'B', text: 'Celebrar, com amarga e irônica vitória, o fato de não ter perpetuado a dor e a futilidade da existência humana.' },
        { id: 'C', text: 'Expressar a conversão piedosa ao cristianismo no leito de morte perante Virgília.' },
        { id: 'D', text: 'Denunciar o sistema escravocrata do Império com panfletarismo partidário direto.' },
        { id: 'E', text: 'Condenar as teorias filosóficas de Quincas Borba sobre o Humanitismo.' }
      ],
      correctOption: 'B',
      explanation: 'Brás Cubas faz o balanço de sua vida fútil, parasitária e inconclusa. Ao constatar que não teve filhos, ele considera isso um saldo positivo ("um pequeno saldo"): não perpetuou a miséria ontológica do ser humano. O tom machadiano é marcado pela ironia e pelo pessimismo lúcido.',
      teacherTip: 'Obra fundamental da lista obrigatória da Fuvest. Note o narrador em 1ª pessoa que, por estar morto, não precisa mais bajular as convenções sociais da elite carioca.',
      trapAlert: 'Machado de Assis não é panfletário; sua crítica à elite do Segundo Reinado se dá pela ironia oblíqua e desmascaramento psicológico.'
    },
    {
      id: 'fuv-q2',
      number: 2,
      subject: 'Física',
      topic: 'Mecânica / Gravitação Universal',
      contextText: 'Dois corpos esféricos homogêneos de massas M e m estão separados por uma distância r entre seus centros de massa no vácuo, atraindo-se com força gravitacional de intensidade F.',
      statement: 'Se a distância entre os centros desses dois corpos for duplicada (2r), a nova intensidade da força gravitacional entre eles será de:',
      options: [
        { id: 'A', text: '2F' },
        { id: 'B', text: 'F / 2' },
        { id: 'C', text: 'F / 4' },
        { id: 'D', text: '4F' },
        { id: 'E', text: 'F / 8' }
      ],
      correctOption: 'C',
      explanation: 'Pela Lei da Gravitação Universal de Newton: F = G·(M·m)/r². A força é inversamente proporcional ao quadrado da distância. Dobrando a distância (2r), o denominador passa a ser (2r)² = 4r², logo a nova força se reduz à quarta parte: F\' = F / 4.',
      teacherTip: 'A lei do inverso do quadrado da distância vale para força gravitacional e para a força eletrostática de Coulomb.',
      trapAlert: 'Não divida apenas por 2! Lembre-se do expoente quadrático da distância.'
    },
    {
      id: 'fuv-q3',
      number: 3,
      subject: 'História Geral',
      topic: 'Revolução Francesa / Cidadania e Iluminismo',
      contextText: 'A Declaração dos Direitos do Homem e do Cidadão, aprovada pela Assembleia Nacional Constituinte francesa em 1789, proclamava a igualdade jurídica de todos perante a lei.',
      statement: 'Contudo, no plano das relações de gênero e representação política na própria Revolução, observou-se que:',
      options: [
        { id: 'A', text: 'As mulheres conquistaram o sufrágio universal imediato sob o governo dos girondinos.' },
        { id: 'B', text: 'Figuras como Olympe de Gouges foram guilhotinadas ao reivindicarem a Declaração dos Direitos da Mulher e da Cidadã, revelando os limites burgueses da igualdade iluminista.' },
        { id: 'C', text: 'A monarquia parlamentar francesa extinguiu todas as ordens clericais com apoio irrestrito da Igreja Católica.' },
        { id: 'D', text: 'A escravidão nas colônias antilhanas francesas (como o Haiti) nunca foi contestada pelos jacobinos.' },
        { id: 'E', text: 'O campesinato francês boicotou qualquer reivindicação de reforma agrária durante o Grande Medo.' }
      ],
      correctOption: 'B',
      explanation: 'A Revolução Francesa universalizou os direitos no discurso, mas na prática manteve a exclusão das mulheres dos cargos públicos e do voto. Olympe de Gouges redigiu a Declaração dos Direitos da Mulher em 1791 e foi executada pelos jacobinos em 1793.',
      teacherTip: 'A FUVEST valoriza questões que mostram as contradições históricas e a luta de minorias sociais nos grandes eventos da modernidade.',
      trapAlert: 'Olympe de Gouges não foi uma nobre monarquista qualquer, mas pioneira feminista dos direitos civis.'
    },
    {
      id: 'fuv-q4',
      number: 4,
      subject: 'Biologia',
      topic: 'Bioquímica / Fotossíntese e Cloroplastos',
      contextText: 'Durante a fase fotoquímica (reações de claro) da fotossíntese nos tilacoides das plantas, ocorre a quebra da molécula de água sob a ação da luz (fotólise da água).',
      statement: 'O gás oxigênio (O₂) liberado pelas plantas para a atmosfera tem origem primária na:',
      options: [
        { id: 'A', text: 'Fixação do gás carbônico (CO₂) no ciclo de Calvin.' },
        { id: 'B', text: 'Fotólise da água (H₂O), atuando esta como doadora de elétrons para a cadeia transportadora.' },
        { id: 'C', text: 'Degradação oxidativa da glicose nas mitocôndrias.' },
        { id: 'D', text: 'Fermentação lática nos vacúolos das células da raiz.' },
        { id: 'E', text: 'Combinação de íons nitrato no retículo endoplasmático rugoso.' }
      ],
      correctOption: 'B',
      explanation: 'O experimento clássico de Ruben e Kamen comprovou com isótopos pesados (¹⁸O) que todo o oxigênio gasoso liberado na fotossíntese provém exclusivamente da água quebrada pela luz, e não do dióxido de carbono.',
      teacherTip: 'Pegadinha clássica dos vestibulares: o O2 vem da ÁGUA (H2O), enquanto os carbonos e oxigênios da glicose vêm do CO2.',
      trapAlert: 'Muitos vestibulandos marcam CO2 por achar que a planta "troca CO2 por O2", mas o O2 sai da quebra da água.'
    },
    {
      id: 'fuv-q5',
      number: 5,
      subject: 'Matemática',
      topic: 'Polinômios e Raízes Complexas',
      contextText: 'Considere a equação algébrica P(x) = x³ - 3x² + 4x - 12 = 0, de coeficientes reais. Sabe-se que x = 2i é uma de suas raízes imaginárias.',
      statement: 'As outras duas raízes desse polinômio no corpo dos números complexos são:',
      options: [
        { id: 'A', text: '-2i e 3' },
        { id: 'B', text: '2i e -3' },
        { id: 'C', text: '-2i e -3' },
        { id: 'D', text: '-i e 4' },
        { id: 'E', text: 'i e 6' }
      ],
      correctOption: 'A',
      explanation: 'Como os coeficientes são reais, se o número complexo z = 2i é raiz, seu conjugado z* = -2i também obrigatoriamente é raiz. Pelas relações de Girard, o produto das 3 raízes é -d/a = -(-12)/1 = 12. Temos (2i)·(-2i)·r3 = 12 ⇒ (-4i²)·r3 = 12 ⇒ 4·r3 = 12 ⇒ r3 = 3. Portanto, raízes: 2i, -2i e 3.',
      teacherTip: 'Teorema das Raízes Complexas Conjugadas: se a + bi é raiz de polinômio real, a - bi também é.',
      trapAlert: 'i² = -1, logo -4i² = +4.'
    },
    {
      id: 'fuv-q6',
      number: 6,
      subject: 'Química',
      topic: 'Equilíbrio Químico / Princípio de Le Chatelier',
      contextText: 'O processo Haber-Bosch para síntese da amônia é exotérmico e regido pelo equilíbrio gasoso: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)   ΔH < 0.',
      statement: 'Para deslocar o equilíbrio no sentido de favorecer a produção de amônia (NH₃), deve-se:',
      options: [
        { id: 'A', text: 'Aumentar a temperatura e diminuir a pressão do reator.' },
        { id: 'B', text: 'Diminuir a temperatura e aumentar a pressão do reator.' },
        { id: 'C', text: 'Adicionar um catalisador sólido que consuma a amônia.' },
        { id: 'D', text: 'Remover continuamente o gás nitrogênio N₂ da câmara.' },
        { id: 'E', text: 'Aumentar o volume do recipiente mantendo temperatura constante.' }
      ],
      correctOption: 'B',
      explanation: 'Sendo uma reação exotérmica (ΔH < 0), a diminuição da temperatura favorece o sentido direto (liberação de calor). Pelo lado dos gases: 1 mol N2 + 3 mols H2 = 4 mols nos reagentes geram 2 mols de NH3 nos produtos. O aumento de pressão desloca para o lado de menor volume gasoso (para a direita, produzindo mais amônia).',
      teacherTip: 'Equilíbrio de Haber-Bosch é uma das reações industriais mais cobradas pela banca FUVEST.',
      trapAlert: 'Catalisador apenas acelera o tempo para atingir o equilíbrio; não desloca a constante nem o rendimento!'
    },
    {
      id: 'fuv-q7',
      number: 7,
      subject: 'Geografia',
      topic: 'Geopolítica e Globalização',
      contextText: 'Nas últimas décadas, a fragmentação dos processos produtivos industriais deu origem às cadeias globais de valor, com o design concebido em sedes nos países centrais e a manufatura dispersa no Sudeste Asiático.',
      statement: 'Contudo, crises recentes (como a pandemia e disputas comerciais hegemônicas) suscitaram movimentos de:',
      options: [
        { id: 'A', text: 'Autossuficiência tribal pré-capitalista nas potências ocidentais.' },
        { id: 'B', text: 'Nearshoring e friendshoring, buscando relocalizar fábricas estratégicas (como semicondutores) para regiões geograficamente próximas ou aliadas políticas.' },
        { id: 'C', text: 'Abolição compulsória de qualquer tarifa alfandegária entre os membros do BRICS.' },
        { id: 'D', text: 'Extinção completa das patentes intelectuais no âmbito da Organização Mundial do Comércio.' },
        { id: 'E', text: 'Desativação total do transporte marítimo de contêineres intercontinentais.' }
      ],
      correctOption: 'B',
      explanation: 'O nearshoring (aproximação da produção) e o friendshoring (parceria entre países aliados) visam mitigar a vulnerabilidade logística das empresas e estados diante da dependência de fornecedores distantes.',
      teacherTip: 'A FUVEST cobra atualidades geopolíticas sob lentes conceituais sólidas da geografia econômica.',
      trapAlert: 'A globalização não acabou, mas está sendo reconfigurada por tensões de segurança e soberania tecnológica.'
    },
    {
      id: 'fuv-q8',
      number: 8,
      subject: 'Literatura Brasileira',
      topic: 'Guimarães Rosa / Sagarana',
      contextText: '“A hora e vez de Augusto Matraga” encerra a coletânea Sagarana narrando a trajetória de Nhô Augusto, homem violento que, após ser espancado e quase morto, passa por um processo de penitência e redenção.',
      statement: 'O clímax do conto consagra a seguinte dimensão existencial da personagem:',
      options: [
        { id: 'A', text: 'A fuga covarde diante do bando de jagunços de Major Dionísio.' },
        { id: 'B', text: 'A conciliação entre a violência sertaneja e a busca espiritual pela salvação da alma no instante decisivo do confronto com Tião Trepadeira.' },
        { id: 'C', text: 'O enriquecimento material desmedido por meio da usura e do comércio de gado.' },
        { id: 'D', text: 'A renúncia definitiva à linguagem regionalista em favor do formalismo acadêmico.' },
        { id: 'E', text: 'A submissão pacífica à humilhação física sem qualquer resistência moral.' }
      ],
      correctOption: 'B',
      explanation: 'Matraga compreende que sua salvação não residia na passividade ascética em sua cabana, mas em cumprir sua "hora e vez": morrer combatendo a injustiça de Tião Medeiro/Trepadeira para salvar uma família indefesa, redimindo seu passado por um ato supremo de sacrifício.',
      teacherTip: 'Conceito rosiano: o sertão é o mundo ("o sertão está em toda parte"), e a travessia humana é marcada pela tensão constante entre bem, mal e destino.',
      trapAlert: 'Matraga não volta à criminalidade vil, sua violência final é sacrifical e heróica.'
    },
    {
      id: 'fuv-q9',
      number: 9,
      subject: 'Matemática',
      topic: 'Geometria Analítica / Equação da Reta',
      statement: 'A equação da reta perpendicular à reta r: 2x - 3y + 6 = 0 que passa pelo ponto P(1, 4) é dada por:',
      options: [
        { id: 'A', text: '3x + 2y - 11 = 0' },
        { id: 'B', text: '2x + 3y - 14 = 0' },
        { id: 'C', text: '3x - 2y + 5 = 0' },
        { id: 'D', text: '2x - 3y + 10 = 0' },
        { id: 'E', text: '3x + 2y + 8 = 0' }
      ],
      correctOption: 'A',
      explanation: 'Isolando y na reta r: 3y = 2x + 6 ⇒ y = (2/3)x + 2. O coeficiente angular da reta r é m = 2/3. O coeficiente angular de uma reta perpendicular s é m_perp = -1/m = -3/2. Usando o ponto (1, 4): y - y0 = m(x - x0) ⇒ y - 4 = (-3/2)(x - 1) ⇒ 2(y - 4) = -3(x - 1) ⇒ 2y - 8 = -3x + 3 ⇒ 3x + 2y - 11 = 0.',
      teacherTip: 'Retas perpendiculares: m1 × m2 = -1 (o coeficiente angular é o inverso do oposto).',
      trapAlert: 'Cuidado ao multiplicar pelos denominadores para não trocar o sinal da constante independente.'
    },
    {
      id: 'fuv-q10',
      number: 10,
      subject: 'Física',
      topic: 'Termodinâmica / Máquina Térmica e Rendimento de Carnot',
      contextText: 'Uma máquina térmica ideal de Carnot opera entre uma fonte quente à temperatura de 500 K e uma fonte fria à temperatura de 300 K.',
      statement: 'O rendimento térmico máximo dessa máquina e a quantidade de calor rejeitada à fonte fria se ela recebe 1.000 J da fonte quente são, respectivamente:',
      options: [
        { id: 'A', text: '40% e 600 J' },
        { id: 'B', text: '60% e 400 J' },
        { id: 'C', text: '50% e 500 J' },
        { id: 'D', text: '20% e 800 J' },
        { id: 'E', text: '40% e 400 J' }
      ],
      correctOption: 'A',
      explanation: 'Rendimento de Carnot: η = 1 - (T_fria / T_quente) = 1 - (300 / 500) = 1 - 0,60 = 0,40 = 40%. Se o rendimento é 40%, o trabalho útil realizado é W = 0,40 × 1000 J = 400 J. O calor restante rejeitado à fonte fria é Q_frio = 1000 J - 400 J = 600 J.',
      teacherTip: 'As temperaturas em Carnot DEVEM estar sempre na escala absoluta Kelvin (K).',
      trapAlert: '600 J é o calor rejeitado à fonte fria; 400 J é o trabalho mecânico útil.'
    },
    {
      id: 'fuv-q11',
      number: 11,
      subject: 'Biologia',
      topic: 'Evolução / Seleção Natural e Especiação',
      contextText: 'Os tentilhões de Galápagos estudados por Charles Darwin apresentavam formatos e tamanhos de bico distintos em cada ilha do arquipélago, adaptados à disponibilidade local de sementes duras, insetos ou néctar.',
      statement: 'De acordo com a Teoria Sintética da Evolução (Neodarwinismo), esse processo resulta de:',
      options: [
        { id: 'A', text: 'Modificação voluntária do formato do bico pelas aves para atender às suas necessidades nutricionais imediatas.' },
        { id: 'B', text: 'Mutações e recombinações gênicas aleatórias submetidas à seleção natural diferencial exercida pelas pressões ecológicas de cada ilha.' },
        { id: 'C', text: 'Transmissão imediata de caracteres adquiridos pelo esforço muscular dos indivíduos adultos.' },
        { id: 'D', text: 'Geração espontânea de novas espécies a partir de matéria inanimada vulcânica.' },
        { id: 'E', text: 'Homogeneização genética provocada pela ausência de isolamento geográfico.' }
      ],
      correctOption: 'B',
      explanation: 'O Neodarwinismo integra a seleção natural darwiniana com a genética moderna: as mutações e o crossing-over geram variabilidade genética aleatória prévia; o meio seleciona os indivíduos portadores dos alelos mais vantajosos para aquele nicho.',
      teacherTip: 'A alternativa A descreve a visão teleológica e a C descreve o lamarckismo.',
      trapAlert: 'O indivíduo NÃO se adapta voluntariamente; a população é selecionada ao longo das gerações.'
    },
    {
      id: 'fuv-q12',
      number: 12,
      subject: 'História do Brasil',
      topic: 'Ciclo do Ouro e Sociedade Mineradora',
      contextText: 'Ao longo do século XVIII, a descoberta de jazidas de ouro e diamantes na região das Minas Gerais provocou uma profunda reconfiguração demográfica e econômica na colônia portuguesa.',
      statement: 'Em comparação com a sociedade açucareira do Nordeste colonial, a sociedade mineira caracterizou-se por:',
      options: [
        { id: 'A', text: 'Maior ruralização e ausência de núcleos urbanos densos.' },
        { id: 'B', text: 'Maior mobilidade social relativa, vida urbana intensa e florescimento do barroco/arraiais com presença de profissionais liberais e artesãos.' },
        { id: 'C', text: 'Total inexistência de escravizados de origem africana.' },
        { id: 'D', text: 'Extinção completa da cobrança de impostos pela Coroa portuguesa.' },
        { id: 'E', text: 'Fim do tráfico atlântico com destino ao porto do Rio de Janeiro.' }
      ],
      correctOption: 'B',
      explanation: 'A mineração gerou centros urbanos (Vila Rica, Mariana, Sabará), complexidade comercial, criação de um mercado interno de gado e alimentos com o Sul e Nordeste, e maior mobilidade (alforrias e classe média de tropeiros, ourives, militares e letrados).',
      teacherTip: 'A capital da colônia foi transferida de Salvador para o Rio de Janeiro em 1763 justamente para fiscalizar o escoamento do ouro das Minas.',
      trapAlert: 'A escravidão era intensíssima na mineração (uma das mais duras para a expectativa de vida).'
    },
    {
      id: 'fuv-q13',
      number: 13,
      subject: 'Química',
      topic: 'Eletroquímica / Potencial Padrão de Redução',
      contextText: 'Considere os potenciais padrão de redução a 25 °C:\nZn²⁺(aq) + 2 e⁻ → Zn(s)   E° = -0,76 V\nCu²⁺(aq) + 2 e⁻ → Cu(s)   E° = +0,34 V.',
      statement: 'Na pilha de Daniell formada por esses dois eletrodos operando em condições padrão, a diferença de potencial (d.d.p.) e o polo negativo (ânodo) são:',
      options: [
        { id: 'A', text: '+1,10 V e o eletrodo de zinco.' },
        { id: 'B', text: '+0,42 V e o eletrodo de cobre.' },
        { id: 'C', text: '+1,10 V e o eletrodo de cobre.' },
        { id: 'D', text: '-1,10 V e o eletrodo de zinco.' },
        { id: 'E', text: '+0,34 V e o sulfato de zinco.' }
      ],
      correctOption: 'A',
      explanation: 'O cobre tem maior potencial de redução (+0,34 V > -0,76 V), portanto se reduz no cátodo (polo positivo). O zinco oxida no ânodo (polo negativo). ΔE° = E°_maior - E°_menor = +0,34 - (-0,76) = +0,34 + 0,76 = +1,10 V.',
      teacherTip: 'Mnemônico infalível: CRAO (Cátodo Reduz, Ânodo Oxida). Na pilha galvânica espontânea, Ânodo é o polo Negativo.',
      trapAlert: 'Cuidado com os sinais ao fazer menos com menos virar mais.'
    },
    {
      id: 'fuv-q14',
      number: 14,
      subject: 'Língua Portuguesa',
      topic: 'Sintaxe / Período Composto e Orações Substantivas',
      statement: 'No período “É imperativo que os governantes priorizem os investimentos em saneamento básico”, a oração subordinada destacada exerce a função sintática de:',
      options: [
        { id: 'A', text: 'Objeto direto' },
        { id: 'B', text: 'Sujeito (subjetiva)' },
        { id: 'C', text: 'Complemento nominal' },
        { id: 'D', text: 'Aposto explicativo' },
        { id: 'E', text: 'Predicativo do sujeito' }
      ],
      correctOption: 'B',
      explanation: 'A oração principal "É imperativo" possui verbo de ligação (ser) + predicativo do sujeito (imperativo), mas carece de sujeito próprio. A oração subordinada "que os governantes priorizem..." funciona como o sujeito da oração principal: [Priorizar investimentos] é imperativo.',
      teacherTip: 'Estruturas como "É necessário que...", "É conveniente que...", "Convém que..." sempre introduzem orações subordinadas substantivas subjetivas.',
      trapAlert: 'Não marque objeto direto: verbos de ligação nunca têm objeto direto.'
    },
    {
      id: 'fuv-q15',
      number: 15,
      subject: 'Matemática',
      topic: 'Logaritmos e Propriedades Operatórias',
      statement: 'Sabendo que log 2 ≈ 0,301 e log 3 ≈ 0,477, o valor aproximado de log 18 é igual a:',
      options: [
        { id: 'A', text: '0,778' },
        { id: 'B', text: '1,255' },
        { id: 'C', text: '1,079' },
        { id: 'D', text: '0,954' },
        { id: 'E', text: '1,432' }
      ],
      correctOption: 'B',
      explanation: 'Fatorando 18: 18 = 2 × 9 = 2 × 3². Aplicando as propriedades operatórias: log(18) = log(2 × 3²) = log 2 + log(3²) = log 2 + 2·log 3 = 0,301 + 2(0,477) = 0,301 + 0,954 = 1,255.',
      teacherTip: 'Regra da "queda do expoente": log(a^b) = b · log(a).',
      trapAlert: 'Cuidado para não somar 0,301 com 0,477 apenas (isso daria log 6 = 0,778).'
    },
    {
      id: 'fuv-q16',
      number: 16,
      subject: 'Filosofia',
      topic: 'Aristóteles / Ética a Nicômaco',
      contextText: '“A virtude moral é uma justa medida (meio-termo) entre dois vícios, um por excesso e outro por falta.” (Aristóteles, Ética a Nicômaco)',
      statement: 'Segundo a doutrina aristotélica da justa medida, a virtude da coragem situa-se como ponto de equilíbrio prudente entre:',
      options: [
        { id: 'A', text: 'A avareza e a prodigalidade.' },
        { id: 'B', text: 'A covardia (falta) e a temeridade inconsequente (excesso).' },
        { id: 'C', text: 'A modéstia e a vanglória desmedida.' },
        { id: 'D', text: 'O ódio rancoroso e o amor incondicional.' },
        { id: 'E', text: 'A ignorância cega e a onisciência divina.' }
      ],
      correctOption: 'B',
      explanation: 'Para Aristóteles, quem tem medo de tudo e foge é covarde (falta de audácia); quem não tem medo de nada e se atira a perigos desproporcionais é temerário (excesso). A virtude da coragem é o equilíbrio ponderado pela razão (phrónesis).',
      teacherTip: 'A teoria do "justo meio" (mesotes) é o pilar da ética das virtudes de Aristóteles.',
      trapAlert: 'Avareza e prodigalidade referem-se à virtude da generosidade, não da coragem.'
    },
    {
      id: 'fuv-q17',
      number: 17,
      subject: 'Física',
      topic: 'Eletromagnetismo / Força Magnética de Lorentz',
      contextText: 'Uma partícula com carga elétrica positiva q é lançada com velocidade v perpendicularmente às linhas de indução de um campo magnético uniforme B.',
      statement: 'A trajetória descrita pela partícula e o trabalho realizado pela força magnética durante o movimento são, respectivamente:',
      options: [
        { id: 'A', text: 'Circular uniforme e nulo (W = 0).' },
        { id: 'B', text: 'Retilínea acelerada e positivo.' },
        { id: 'C', text: 'Parabólica e variável no tempo.' },
        { id: 'D', text: 'Circular retardada e negativo.' },
        { id: 'E', text: 'Elíptica com perda contínua de energia cinética.' }
      ],
      correctOption: 'A',
      explanation: 'Como a força magnética (F_mag = q·v·B·sen 90°) atua sempre perpendicularmente ao vetor velocidade a cada instante, ela atua exclusivamente como força centrípeta, alterando a direção sem alterar o módulo da velocidade (MCU). Sendo perpendicular ao deslocamento instantâneo, o trabalho da força magnética é rigorosamente ZERO.',
      teacherTip: 'Regra de ouro dos vestibulares: Força magnética sobre carga livre em campo constante NUNCA realiza trabalho mecânico e nunca altera a energia cinética!',
      trapAlert: 'A velocidade vetorial muda de direção, mas a velocidade escalar (módulo) permanece constante.'
    },
    {
      id: 'fuv-q18',
      number: 18,
      subject: 'Biologia',
      topic: 'Fisiologia Humana / Sistema Circulatório e Hematose',
      statement: 'No coração humano, o sangue venoso (pobre em O₂ e rico em CO₂) chega da circulação sistêmica e é bombeado em direção aos pulmões através de qual trajeto intracardíaco?',
      options: [
        { id: 'A', text: 'Átrio esquerdo → Ventrículo esquerdo → Artéria Aorta.' },
        { id: 'B', text: 'Átrio direito → Ventrículo direito → Artéria Pulmonar.' },
        { id: 'C', text: 'Veias pulmonares → Átrio direito → Ventrículo esquerdo.' },
        { id: 'D', text: 'Ventrículo esquerdo → Veia cava superior → Pulmões.' },
        { id: 'E', text: 'Átrio direito → Átrio esquerdo → Valva mitral.' }
      ],
      correctOption: 'B',
      explanation: 'O sangue venoso retorna ao coração pelas veias cavas no átrio direito, passa pela valva tricúspide para o ventrículo direito, e deste é ejetado pela artéria pulmonar até os pulmões para sofrer a hematose.',
      teacherTip: 'Lado direito do coração = sangue venoso (azul). Lado esquerdo do coração = sangue arterial oxigenado (vermelho). As duas metades nunca se comunicam após o nascimento.',
      trapAlert: 'Artérias pulmonares levam sangue venoso do coração aos pulmões (uma das poucas exceções de artéria com sangue desoxigenado).'
    },
    {
      id: 'fuv-q19',
      number: 19,
      subject: 'Geografia do Brasil',
      topic: 'Domínios Morfoclimáticos / Cerrado',
      contextText: 'O domínio do Cerrado é caracterizado por solos ácidos, profundos e ricos em alumínio (latossolos), com vegetação de troncos retorcidos, cascas grossas e raízes profundas.',
      statement: 'A expansão da fronteira agrícola moderna sobre o Cerrado brasileiro a partir da década de 1970 tornou-se tecnicamente viável graças a:',
      options: [
        { id: 'A', text: 'Drenagem de pântanos equatoriais inundados permanentemente.' },
        { id: 'B', text: 'Técnica de calagem (correção da acidez do solo com calcário) e desenvolvimento de cultivares transgênicas pela EMBRAPA.' },
        { id: 'C', text: 'Extinção completa do uso de fertilizantes nitrogenados e defensivos.' },
        { id: 'D', text: 'Substituição da soja pelo cultivo exclusivo de arroz irrigado por inundação contínua.' },
        { id: 'E', text: 'Abolição das queimadas e proibição do uso de colheitadeiras mecanizadas.' }
      ],
      correctOption: 'B',
      explanation: 'A calagem neutralizou a acidez e o alumínio tóxico dos solos do Cerrado. Somada à pesquisa agronômica da Embrapa e à mecanização nos relevos planos das chapadas, transformou a região no maior celeiro de grãos (soja, milho, algodão) do Brasil.',
      teacherTip: 'O Cerrado é considerado o berço das águas do Brasil e um hotspot mundial de biodiversidade.',
      trapAlert: 'O Cerrado não é pantanoso nem semiárido; possui estação seca bem definida no inverno e chuvosa no verão.'
    },
    {
      id: 'fuv-q20',
      number: 20,
      subject: 'Literatura Brasileira',
      topic: 'Poesia Concreta e Vanguardas',
      contextText: 'O movimento da Poesia Concreta brasileira, deflagrado em São Paulo nos anos 1950 pelos irmãos Haroldo e Augusto de Campos e Décio Pignatari, propunha a superação do verso tradicional.',
      statement: 'Uma das marcas estéticas centrais do Concretismo foi:',
      options: [
        { id: 'A', text: 'A valorização da espacialidade gráfica na página branca, integrando elementos verbais, visuais e sonoros (verbi-voco-visual).' },
        { id: 'B', text: 'O resgate do soneto decassílabo com rima rica parnasiana.' },
        { id: 'C', text: 'A narrativa épica em prosa camoniana exaltando a colonização portuguesa.' },
        { id: 'D', text: 'A proibição do uso de trocadilhos, aliterações ou fragmentações tipográficas.' },
        { id: 'E', text: 'A exaltação do sentimentalismo confessional e das dores de amores não correspondidos.' }
      ],
      correctOption: 'A',
      explanation: 'A Poesia Concreta explora a dimensão verbo-voco-visual: as palavras funcionam como formas visuais na página, sem linearidade sintática convencional, dialogando com o design e a sociedade industrial de massas.',
      teacherTip: 'Exemplo icônico: o poema "Beba Coca-Cola / Beba / Cola / Caco / Caco / Cola / Caco / Cloaca".',
      trapAlert: 'Os concretistas combatiam veementemente o lirismo sentimental tradicional e o parnasianismo.'
    }
  ]
};
