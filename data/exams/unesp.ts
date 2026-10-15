import { Exam } from '@/types/quiz';

export const unespExam: Exam = {
  id: 'unesp-vestibular-fase1',
  slug: 'unesp',
  title: 'UNESP - 1ª Fase (Vestibular Estadual Paulista)',
  subtitle: 'Prova de Conhecimentos Gerais da Universidade Estadual Paulista',
  category: 'unesp',
  level: 'Grandes Vestibulares',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'Fundação VUNESP',
  badge: '1ª Fase UNESP',
  description: 'Simulado completo com estilo inconfundível da Fundação VUNESP para a UNESP. Questões claras, diretas, contextualizadas em notícias e fatos científicos com gabarito comentado passo a passo.',
  tags: ['UNESP', 'VUNESP', 'Vestibular SP', 'Biológicas', 'Exatas', 'Humanidades'],
  questions: [
    {
      id: 'une-q1',
      number: 1,
      subject: 'Língua Portuguesa',
      topic: 'Regência Nominal e Crase',
      statement: 'Assinale a alternativa que preenche, correta e respectivamente, as lacunas da frase: “O pesquisador dedicou-se _____ pesquisa sobre doenças tropicais e permaneceu fiel _____ suas convicções científicas.”',
      options: [
        { id: 'A', text: 'à … a' },
        { id: 'B', text: 'a … às' },
        { id: 'C', text: 'à … às' },
        { id: 'D', text: 'a … a' },
        { id: 'E', text: 'àquela … a' }
      ],
      correctOption: 'C',
      explanation: 'Quem se dedica, dedica-se A alguma coisa (preposição a + artigo a = à pesquisa). Quem é fiel, é fiel A alguém ou a algo. Sendo "suas convicções" substantivo feminino plural, o uso da crase diante de pronome possessivo feminino é facultativo no singular, mas diante de "às suas" com artigo explícito ocorre: à ... às suas (ou a suas). A opção C combina ambas com precisão gramatical.',
      teacherTip: 'Antes de pronome possessivo feminino no singular (minha, sua, tua), a crase é facultativa. Diante de plural ("às suas"), indica preposição + artigo definido.',
      trapAlert: 'O verbo dedicar-se é regido pela preposição "a".'
    },
    {
      id: 'une-q2',
      number: 2,
      subject: 'Matemática',
      topic: 'Geometria Espacial / Esfera e Área da Superfície',
      contextText: 'Uma esfera metálica maciça tem raio R = 3 cm. Considere π ≈ 3,14.',
      statement: 'A área da superfície esférica externa e o volume dessa esfera são, respectivamente:',
      options: [
        { id: 'A', text: '113,04 cm² e 113,04 cm³' },
        { id: 'B', text: '37,68 cm² e 113,04 cm³' },
        { id: 'C', text: '113,04 cm² e 339,12 cm³' },
        { id: 'D', text: '56,52 cm² e 84,78 cm³' },
        { id: 'E', text: '28,26 cm² e 56,52 cm³' }
      ],
      correctOption: 'A',
      explanation: 'Área da superfície da esfera: A = 4·π·R² = 4 × 3,14 × 3² = 4 × 3,14 × 9 = 36 × 3,14 = 113,04 cm². Volume da esfera: V = (4/3)·π·R³ = (4/3) × 3,14 × 27 = 4 × 3,14 × 9 = 113,04 cm³. Curiosamente, para R = 3, os valores numéricos da área e do volume coincidem!',
      teacherTip: 'Fórmulas essenciais da esfera na Vunesp: Área = 4πR²; Volume = (4/3)πR³.',
      trapAlert: 'Não confunda a fórmula da área do círculo (πR²) com a da superfície da esfera (4πR²).'
    },
    {
      id: 'une-q3',
      number: 3,
      subject: 'Biologia',
      topic: 'Fisiologia Vegetal / Transpiração e Estômatos',
      statement: 'Nas folhas das plantas terrestres, a abertura e o fechamento dos estômatos são controlados principalmente pelo turgor das células-guarda. Em condições de seca severa e estresse hídrico, as plantas fecham os estômatos sob a ação direta do fitormônio:',
      options: [
        { id: 'A', text: 'Ácido abscísico (ABA)' },
        { id: 'B', text: 'Giberelina' },
        { id: 'C', text: 'Auxina (AIA)' },
        { id: 'D', text: 'Etileno' },
        { id: 'E', text: 'Citocinina' }
      ],
      correctOption: 'A',
      explanation: 'O ácido abscísico (ABA) é o hormônio vegetal de estresse hídrico: induz a saída rápida de íons potássio (K⁺) das células-guarda, tornando-as flácidas e provocando o fechamento do ostíolo para evitar desidratação.',
      teacherTip: 'Auxina = crescimento/alongamento; Etileno = amadurecimento de frutos e queda de folhas; Ácido Abscísico = fechamento estomático e dormência de sementes.',
      trapAlert: 'Giberelina quebra a dormência de sementes, exatamente o oposto do ácido abscísico.'
    },
    {
      id: 'une-q4',
      number: 4,
      subject: 'História',
      topic: 'Brasil República / Revolta da Vacina',
      contextText: 'Em novembro de 1904, a população do Rio de Janeiro sublevou-se contra a vacinação compulsória contra a varíola instituída pelo sanitarista Oswaldo Cruz no governo Rodrigues Alves.',
      statement: 'Além da recusa à obrigatoriedade da vacina, a eclosão da revolta foi alimentada por:',
      options: [
        { id: 'A', text: 'O descontentamento popular com a reforma urbana do prefeito Pereira Passos (“Bota-Abaixo”), que demoliu cortiços e expulsou os pobres para os morros sem moradia digna.' },
        { id: 'B', text: 'A exigência da reimplantação imediata da monarquia por parte dos operários fabris.' },
        { id: 'C', text: 'A adesão dos revoltosos à revolução bolchevique russa.' },
        { id: 'D', text: 'O apoio dos moradores à invasão do porto do Rio pela armada britânica.' },
        { id: 'E', text: 'A proibição do consumo de café em locais públicos da capital.' }
      ],
      correctOption: 'A',
      explanation: 'A reforma Pereira Passos inspirou-se na Paris de Haussmann, alargando avenidas e destruindo moradias populares sem indenização. A lei da vacinação obrigatória, com invasão de lares por agentes sanitários, foi o estopim de uma panela de pressão social acumulada.',
      teacherTip: 'A Revolta da Vacina é frequentemente usada pela Vunesp para discutir saúde pública, cidadania e tensões urbanas.',
      trapAlert: 'A revolta não era contra a ciência em si, mas contra o autoritarismo do Estado higienista.'
    },
    {
      id: 'une-q5',
      number: 5,
      subject: 'Física',
      topic: 'Calorimetria / Calor Sensível e Trocas de Calor',
      contextText: 'Em um calorímetro ideal, misturam-se 200 g de água a 20 °C com 300 g de água a 70 °C. Despreze perdas de calor para as paredes do recipiente e adote o calor específico da água c = 1,0 cal/(g·°C).',
      statement: 'A temperatura final de equilíbrio térmico da mistura é de:',
      options: [
        { id: 'A', text: '40 °C' },
        { id: 'B', text: '45 °C' },
        { id: 'C', text: '50 °C' },
        { id: 'D', text: '55 °C' },
        { id: 'E', text: '60 °C' }
      ],
      correctOption: 'C',
      explanation: 'Q_cedido + Q_recebido = 0 ⇒ m1·c·(T - T1) + m2·c·(T - T2) = 0. 200·(T - 20) + 300·(T - 70) = 0 ⇒ 200T - 4000 + 300T - 21000 = 0 ⇒ 500T = 25000 ⇒ T = 25000 / 500 = 50 °C.',
      teacherTip: 'Média ponderada das temperaturas: (200×20 + 300×70) / (200 + 300) = (4000 + 21000) / 500 = 25000 / 500 = 50 °C.',
      trapAlert: 'Não faça média simples (20 + 70)/2 = 45, pois as massas de água são diferentes (200 g e 300 g).'
    },
    {
      id: 'une-q6',
      number: 6,
      subject: 'Química',
      topic: 'Isomeria Espacial / Isomeria Geométrica Cis-Trans',
      statement: 'Para que um composto orgânico com ligação dupla entre carbonos apresente isomeria geométrica (cis-trans ou Z-E), é condição estritamente necessária que:',
      options: [
        { id: 'A', text: 'Cada carbono da dupla ligação esteja ligado a dois ligantes diferentes entre si.' },
        { id: 'B', text: 'A molécula possua pelo menos um átomo de oxigênio ou nitrogênio.' },
        { id: 'C', text: 'A cadeia carbônica seja obrigatoriamente saturada e ramificada.' },
        { id: 'D', text: 'O composto seja solúvel em água e tenha pH neutro.' },
        { id: 'E', text: 'Exista um anel aromático condensado com ressonância de elétrons.' }
      ],
      correctOption: 'A',
      explanation: 'A isomeria cis-trans em alcenos requer: 1) impedimento de rotação (ligação dupla C=C ou cadeia fechada); 2) em cada carbono sp², os dois substituintes devem ser diferentes entre si: R1 ≠ R2 e R3 ≠ R4.',
      teacherTip: 'Se um dos carbonos da dupla tiver dois ligantes idênticos (ex: dois hidrogênios como no propeno: CH2=CH-CH3), NÃO há isomeria geométrica.',
      trapAlert: 'Compostos com ligação tripla nunca têm isomeria geométrica (geometria linear 180°).'
    },
    {
      id: 'une-q7',
      number: 7,
      subject: 'Geografia',
      topic: 'Relevo Brasileiro / Classificação de Jurandyr Ross',
      contextText: 'A classificação do relevo brasileiro elaborada pelo geógrafo Jurandyr Ross (1989) baseou-se nos dados do Projeto Radambrasil e dividiu o território em 28 unidades.',
      statement: 'Nessa classificação, as três macroformas do relevo brasileiro são:',
      options: [
        { id: 'A', text: 'Planaltos, planícies e depressões.' },
        { id: 'B', text: 'Cordilheiras, vales e fiordes.' },
        { id: 'C', text: 'Montanhas jovens, planaltos e cânions.' },
        { id: 'D', text: 'Escarpas marítimas, bacias e restingas.' },
        { id: 'E', text: 'Falésias, atóis e dunas eólicas.' }
      ],
      correctOption: 'A',
      explanation: 'Jurandyr Ross introduziu as depressões relativas (áreas rebaixadas por longos processos erosivos nas bordas de bacias sedimentares) ao lado dos planaltos e planícies. No Brasil não existem dobramentos modernos (cadeias montanhosas jovens).',
      teacherTip: 'Lembre-se: o relevo brasileiro é muito antigo e desgastado por erosão; não temos vulcões ativos nem terremotos de grande magnitude.',
      trapAlert: 'O Brasil NÃO possui cordilheiras de dobramentos modernos como os Andes.'
    },
    {
      id: 'une-q8',
      number: 8,
      subject: 'Matemática',
      topic: 'Poliedros e Relação de Euler',
      contextText: 'Um poliedro convexo possui 12 faces pentagonais e 20 vértices.',
      statement: 'O número de arestas desse poliedro (conhecido na geometria como dodecaedro regular) é:',
      options: [
        { id: 'A', text: '24' },
        { id: 'B', text: '30' },
        { id: 'C', text: '32' },
        { id: 'D', text: '36' },
        { id: 'E', text: '40' }
      ],
      correctOption: 'B',
      explanation: 'Pela Relação de Euler para poliedros convexos: V - A + F = 2. Substituindo: 20 - A + 12 = 2 ⇒ 32 - A = 2 ⇒ A = 32 - 2 = 30 arestas. Ou pela contagem de lados: 12 faces pentagonais × 5 lados = 60 lados; como cada aresta é compartilhada por 2 faces: 60 / 2 = 30 arestas.',
      teacherTip: 'Mnemônico da Relação de Euler: "Vamos Fazer Amor a Dois" -> V + F = A + 2.',
      trapAlert: 'Divida por 2 a soma dos lados das faces para achar as arestas.'
    },
    {
      id: 'une-q9',
      number: 9,
      subject: 'Língua Portuguesa',
      topic: 'Colocação Pronominal / Próclise Obrigatória',
      statement: 'Assinale a alternativa que obedece estritamente às normas gramaticais de colocação pronominal:',
      options: [
        { id: 'A', text: 'Me disseram que o vestibular da Unesp será no próximo mês.' },
        { id: 'B', text: 'Nunca enganou-se a respeito de suas verdadeiras vocações.' },
        { id: 'C', text: 'Quem te informou sobre o cancelamento da inscrição?' },
        { id: 'D', text: 'Em tratando-se de estudos, todo esforço é recompensador.' },
        { id: 'E', text: 'Os alunos reuniram-se porque não avisaram-nos a tempo.' }
      ],
      correctOption: 'C',
      explanation: 'Em "Quem te informou?", o pronome interrogativo "Quem" é palavra atrativa que exige próclise obrigatória (pronome oblíquo antes do verbo). Na opção A, nunca se inicia frase com pronome oblíquo na norma culta ("Disseram-me"). Na B, "Nunca" exige próclise ("Nunca se enganou"). Na D, usa-se "Em se tratando". Na E, "não" atrai próclise ("não nos avisaram").',
      teacherTip: 'Palavras atrativas que exigem PRÓCLISE: negativas (não, nunca), pronomes relativos (que, quem), pronomes interrogativos e advérbios.',
      trapAlert: 'Iniciar oração com pronome oblíquo é marca de oralidade popular brasileira, mas vetada na norma culta padrão de concursos e vestibulares.'
    },
    {
      id: 'une-q10',
      number: 10,
      subject: 'Física',
      topic: 'Eletromagnetismo / Lei da Indução de Faraday-Lenz',
      contextText: 'Um ímã em barra é aproximado rapidamente com o polo Norte voltado para a face de uma espira metálica circular condutora fixa.',
      statement: 'De acordo com a Lei de Lenz, a corrente elétrica induzida que surge na espira terá sentido tal que criará na face voltada para o ímã:',
      options: [
        { id: 'A', text: 'Um polo Norte magnético, opondo-se à aproximação do ímã por repulsão.' },
        { id: 'B', text: 'Um polo Sul magnético, atraindo e acelerando o ímã em sua aproximação.' },
        { id: 'C', text: 'Nenhum campo magnético induzido.' },
        { id: 'D', text: 'Um campo elétrico estático que imobiliza os elétrons.' },
        { id: 'E', text: 'Um polo Norte e um polo Sul no mesmo ponto simultaneamente.' }
      ],
      correctOption: 'A',
      explanation: 'A Lei de Lenz estabelece que a corrente induzida sempre se opõe à variação do fluxo magnético que a originou (conservação da energia). Ao aproximar o polo Norte, a espira cria um polo Norte para repelir a aproximação.',
      teacherTip: 'A natureza resiste à mudança: se você aproxima, a espira repele; se você afasta, a espira atrai!',
      trapAlert: 'Se atraísse na aproximação, violaria o princípio de conservação de energia ao criar aceleração infinita sem gasto de trabalho.'
    },
    {
      id: 'une-q11',
      number: 11,
      subject: 'Biologia',
      topic: 'Evolução e Sistemática / Cordados e Mamíferos',
      statement: 'Ornitorrincos e équidnas são animais nativos da Oceania classificados como mamíferos monotremados. A característica reprodutiva que os distingue de todos os demais mamíferos (marsupiais e placentários) é:',
      options: [
        { id: 'A', text: 'A oviparidade, ou seja, põem ovos com casca calcária.' },
        { id: 'B', text: 'A ausência de pelos e glândulas mamárias.' },
        { id: 'C', text: 'A respiração exclusivamente cutânea.' },
        { id: 'D', text: 'A circulação sanguínea simples e aberta.' },
        { id: 'E', text: 'A reprodução assexuada por brotamento.' }
      ],
      correctOption: 'A',
      explanation: 'Os monotremados são os únicos mamíferos ovíparos (botam ovos semelhantes aos de répteis). Apesar de botarem ovos, possuem pelos e amamentam seus filhotes (o leite escorre pela pele, pois não têm mamilos verdadeiros).',
      teacherTip: 'Monotremados comprovam a transição evolutiva a partir dos répteis sinapsídeos ancestrais.',
      trapAlert: 'Eles produzem leite sim, portanto são autênticos mamíferos.'
    },
    {
      id: 'une-q12',
      number: 12,
      subject: 'Química',
      topic: 'Química Geral / Ligações Químicas e Pontos de Ebulição',
      contextText: 'Dentre as substâncias metano (CH₄), água (H₂O) e oxigênio gasoso (O₂), a água apresenta ponto de ebulição anormalmente elevado (100 °C à pressão de 1 atm).',
      statement: 'Essa alta temperatura de ebulição da água é explicada pela presença de:',
      options: [
        { id: 'A', text: 'Forças de dispersão de London muito fracas.' },
        { id: 'B', text: 'Ligações de hidrogênio intensas entre suas moléculas altamente polares.' },
        { id: 'C', text: 'Ligações iônicas covalentes intramoleculares quebradas durante a fervura.' },
        { id: 'D', text: 'Apolaridade de suas moléculas lineares simétricas.' },
        { id: 'E', text: 'Presença de pares iônicos metálicos livres em solução.' }
      ],
      correctOption: 'B',
      explanation: 'A geometria angular e a grande diferença de eletronegatividade entre oxigênio e hidrogênio geram dipolos permanentes fortes. As pontes/ligações de hidrogênio intermoleculares exigem grande quantidade de energia térmica para serem rompidas.',
      teacherTip: 'A fervura da água NÃO quebra a molécula de H2O; rompe apenas as forças intermoleculares (ligações de hidrogênio)!',
      trapAlert: 'Não diga que quebra ligação covalente: na fervura as moléculas apenas se afastam umas das outras.'
    },
    {
      id: 'une-q13',
      number: 13,
      subject: 'Filosofia',
      topic: 'Filosofia Medieval / Santo Agostinho e o Livre-Arbítrio',
      contextText: 'No tratado “Do Livre-Arbítrio”, Santo Agostinho de Hipona busca solucionar o chamado "problema do mal" conciliando a bondade de Deus com a existência de ações perversas no mundo.',
      statement: 'Para Santo Agostinho, a origem primária do mal moral reside:',
      options: [
        { id: 'A', text: 'Na vontade divina, que predestina deliberadamente os homens ao pecado.' },
        { id: 'B', text: 'No mau uso do livre-arbítrio pela vontade humana, que se afasta dos bens imutáveis superiores em busca dos bens materiais inferiores.' },
        { id: 'C', text: 'Na existência de um deus do mal com poderes iguais aos do Deus criador (maniqueísmo radical).' },
        { id: 'D', text: 'Na ignorância científica absoluta da civilização greco-romana.' },
        { id: 'E', text: 'Na estrutura econômica do modo de produção feudal.' }
      ],
      correctOption: 'B',
      explanation: 'Para Agostinho, o mal não tem substância ontológica (não foi criado por Deus); o mal é a privação do bem (privatio boni) provocada pela escolha errada da vontade humana dotada de livre-arbítrio.',
      teacherTip: 'Agostinho rompeu com o maniqueísmo (crença em dois deuses opostos) e defendeu o livre-arbítrio humano como fonte do mal moral.',
      trapAlert: 'Deus é sumamente bom; o pecado decorre da escolha livre do ser humano.'
    },
    {
      id: 'une-q14',
      number: 14,
      subject: 'Matemática',
      topic: 'Geometria Analítica / Circunferência',
      statement: 'A equação da circunferência com centro no ponto C(3, -2) e raio R = 5 é expressa por:',
      options: [
        { id: 'A', text: '(x - 3)² + (y + 2)² = 25' },
        { id: 'B', text: '(x + 3)² + (y - 2)² = 25' },
        { id: 'C', text: '(x - 3)² + (y + 2)² = 5' },
        { id: 'D', text: '(x + 3)² + (y + 2)² = 10' },
        { id: 'E', text: '(x - 3)² + (y - 2)² = 100' }
      ],
      correctOption: 'A',
      explanation: 'Equação reduzida da circunferência: (x - a)² + (y - b)² = R². Sendo o centro (a, b) = (3, -2) e R = 5: (x - 3)² + (y - (-2))² = 5² ⇒ (x - 3)² + (y + 2)² = 25.',
      teacherTip: 'Atenção aos sinais: o centro tem coordenadas invertidas na equação!',
      trapAlert: 'O lado direito é o RAIO AO QUADRADO (5² = 25), não 5.'
    },
    {
      id: 'une-q15',
      number: 15,
      subject: 'História',
      topic: 'Guerra Fria / Crise dos Mísseis em Cuba',
      contextText: 'Em outubro de 1962, o mundo esteve à beira de um confronto nuclear total durante a Crise dos Mísseis em Cuba envolvendo Estados Unidos e União Soviética.',
      statement: 'O desfecho pacífico da crise foi alcançado mediante o seguinte acordo diplomático entre Kennedy e Khrushchev:',
      options: [
        { id: 'A', text: 'A retirada dos mísseis soviéticos de Cuba em troca da garantia de que os EUA não invadiriam a ilha e da retirada secreta de mísseis norte-americanos instalados na Turquia.' },
        { id: 'B', text: 'A rendição incondicional de Fidel Castro e a devolução de Cuba à Espanha.' },
        { id: 'C', text: 'A detonação controlada de ogivas atômicas no Oceano Pacífico.' },
        { id: 'D', text: 'A adesão compulsória de Cuba à OTAN sob comando norte-americano.' },
        { id: 'E', text: 'A anexação definitiva de Berlim Ocidental pela Alemanha Oriental.' }
      ],
      correctOption: 'A',
      explanation: 'Os EUA impuseram um bloqueio naval (quarentena). O pacto secreto entre Kennedy e Khrushchev desarmou a crise: a URSS desmontou as bases nucleares em Cuba e os EUA comprometeram-se a não invadir Cuba e retiraram seus mísseis Júpiter da Turquia.',
      teacherTip: 'A Crise dos Mísseis levou à instalação do "telefone vermelho" ligando diretamente a Casa Branca ao Kremlin.',
      trapAlert: 'Cuba permaneceu comunista sob Fidel Castro após a crise.'
    },
    {
      id: 'une-q16',
      number: 16,
      subject: 'Biologia',
      topic: 'Parasitologia / Ciclo do Schistosoma mansoni (Esquistossomose)',
      statement: 'No ciclo biológico do parasita causador da esquistossomose mansônica (popular "barriga d\'água"), o hospedeiro intermediário que abriga as larvas cercárias em lagoas de água doce é um:',
      options: [
        { id: 'A', text: 'Caramujo aquático do gênero Biomphalaria' },
        { id: 'B', text: 'Mosquito do gênero Anopheles' },
        { id: 'C', text: 'Porco doméstico' },
        { id: 'D', text: 'Carrapato-estrela' },
        { id: 'E', text: 'Barbeiro do gênero Triatoma' }
      ],
      correctOption: 'A',
      explanation: 'Os ovos eliminados nas fezes humanas eclodem em miracídios, que penetram no caramujo Biomphalaria (hospedeiro intermediário). No caramujo reproduzem-se e libertam cercárias que nadam e penetram ativamente pela pele de banhistas.',
      teacherTip: 'Mnemônico da saúde pública: "Se nadou e coçou, é porque pegou!" (dermatite cercariana).',
      trapAlert: 'O homem é o hospedeiro definitivo; o caramujo é o hospedeiro intermediário.'
    },
    {
      id: 'une-q17',
      number: 17,
      subject: 'Física',
      topic: 'Dinâmica / Força de Atrito Estático e Dinâmico',
      contextText: 'Um bloco de 10 kg repousa sobre uma superfície horizontal áspera com coeficiente de atrito estático μ_e = 0,5 e dinâmico μ_d = 0,3. Adote g = 10 m/s².',
      statement: 'Se aplicarmos uma força horizontal de 40 N sobre esse bloco parado:',
      options: [
        { id: 'A', text: 'O bloco permanecerá parado em repouso e a força de atrito exercida pelo solo será de 40 N.' },
        { id: 'B', text: 'O bloco entrará em movimento acelerado com aceleração de 1 m/s².' },
        { id: 'C', text: 'A força de atrito será de 50 N empurrando o bloco para trás.' },
        { id: 'D', text: 'O bloco deslizará com velocidade constante e atrito nulo.' },
        { id: 'E', text: 'A força normal superará o peso do bloco.' }
      ],
      correctOption: 'A',
      explanation: 'Normal N = P = m·g = 10 × 10 = 100 N. Força de atrito estático MÁXIMA (destaque): Fat_max = μ_e × N = 0,5 × 100 = 50 N. Como a força aplicada (40 N) é menor que 50 N, o bloco NÃO se move! E pela 1ª Lei de Newton (repouso), a força de atrito estático equilibra exatamente a força aplicada: Fat = 40 N.',
      teacherTip: 'A maior pegadinha da mecânica clássica: o atrito estático não vale sempre o valor máximo (Fat_max); ele se ajusta à força aplicada até o limite do movimento!',
      trapAlert: 'Não diga que o atrito é 50 N; se fosse 50 N contra 40 N, o bloco se moveria para trás sozinho!'
    },
    {
      id: 'une-q18',
      number: 18,
      subject: 'Língua Portuguesa',
      topic: 'Semântica / Parônimos e Homônimos',
      statement: 'Assinale a alternativa que emprega corretamente o vocábulo destacado no sentido de "interromper o funcionamento ou suspender":',
      options: [
        { id: 'A', text: 'O presidente da mesa decidiu cassar o mandato do deputado infrator.' },
        { id: 'B', text: 'As atividades industriais foram cessadas durante o feriado nacional.' },
        { id: 'C', text: 'Eles foram caçar animais silvestres no parque ecológico.' },
        { id: 'D', text: 'O tribunal vai caçar os direitos políticos do réu.' },
        { id: 'E', text: 'A tempestade cessou os votos eleitorais do pleito.' }
      ],
      correctOption: 'B',
      explanation: 'Cessar (com c) significa parar, interromper, finalizar. Cassar (com ss) significa anular direitos ou mandatos políticos. Caçar (com ç) refere-se a perseguir animais.',
      teacherTip: 'Cassar direitos (com ss, de cassação). Cessar atividades (com c, de cessação). Caçar presas (com ç).',
      trapAlert: 'Confundir cassar com cessar é um clássico de questões da Vunesp.'
    },
    {
      id: 'une-q19',
      number: 19,
      subject: 'Química',
      topic: 'Química Geral / Separação de Misturas',
      statement: 'Para separar os componentes de uma mistura homogênea de água e cloreto de sódio dissolvido (água salgada), recuperando tanto a água pura líquida quanto o sal sólido, o método adequado é a:',
      options: [
        { id: 'A', text: 'Destilação simples' },
        { id: 'B', text: 'Filtração a vácuo' },
        { id: 'C', text: 'Decantação em funil de bromo' },
        { id: 'D', text: 'Centrifugação rápida' },
        { id: 'E', text: 'Flotação com espuma' }
      ],
      correctOption: 'A',
      explanation: 'A destilação simples é indicada para misturas homogêneas sólido-líquido com grande diferença de pontos de ebulição. A água ferve a 100 °C, seus vapores condensam no condensador e são recolhidos no erlenmeyer, restando o sal no balão.',
      teacherTip: 'Se quiséssemos recuperar APENAS o sal, a evaporação simples bastaria; para recuperar o líquido também, exige-se destilação!',
      trapAlert: 'Filtração e decantação servem apenas para misturas heterogêneas; o sal dissolvido passa direto pelo filtro.'
    },
    {
      id: 'une-q20',
      number: 20,
      subject: 'Geografia',
      topic: 'Demografia Brasileira / Transição Demográfica',
      contextText: 'Os dados do Censo Demográfico do IBGE revelam desaceleração no crescimento populacional, queda na taxa de fecundidade e aumento da proporção de idosos no Brasil.',
      statement: 'O impacto econômico e social direto dessa fase avançada da transição demográfica no país é:',
      options: [
        { id: 'A', text: 'O fechamento do bônus demográfico, exigindo reformas nas políticas previdenciárias e ampliação dos cuidados médicos de saúde geriátrica.' },
        { id: 'B', text: 'A multiplicação descontrolada da mortalidade infantil em capitais.' },
        { id: 'C', text: 'A necessidade compulsória de construir milhares de novas creches públicas para atender ao boom de nascimentos.' },
        { id: 'D', text: 'A redução total do contingente de aposentados no setor público.' },
        { id: 'E', text: 'O despovoamento irreversível de todos os municípios do litoral brasileiro.' }
      ],
      correctOption: 'A',
      explanation: 'A taxa de fecundidade no Brasil caiu para menos de 1,6 filho por mulher (abaixo do nível de reposição populacional de 2,1). A população brasileira está envelhecendo rapidamente, encerrando a janela de ouro do "bônus demográfico" e demandando atenção para previdência e saúde.',
      teacherTip: 'A pirâmide etária brasileira deixou de ter base larga triangular e adquiriu formato de barril/urna.',
      trapAlert: 'Não há boom de nascimentos no Brasil; as taxas de natalidade caem continuamente há décadas.'
    }
  ]
};
