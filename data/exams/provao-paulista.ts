import { Exam } from '@/types/quiz';

export const provaoPaulistaExam: Exam = {
  id: 'provao-paulista-oficial',
  slug: 'provao-paulista',
  title: 'Provão Paulista - Simulado Oficial (Vagas USP / UNESP / UNICAMP)',
  subtitle: 'Avaliação seriada com acesso direto ao ensino superior público paulista',
  category: 'provao-paulista',
  level: 'Ensino Médio',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'Fundação VUNESP / Seduc-SP',
  badge: 'Vagas Diretas USP/Unicamp',
  description: 'Simulado focado na matriz de habilidades da VUNESP para o Provão Paulista. Questões objetivas com resolução comentada para garantir sua pontuação de corte nas universidades públicas paulistas e FATECs.',
  tags: ['Provão Paulista', 'VUNESP', 'USP', 'UNICAMP', 'UNESP', 'FATEC'],
  questions: [
    {
      id: 'pp-q1',
      number: 1,
      subject: 'Língua Portuguesa',
      topic: 'Concordância Verbal e Nominal',
      statement: 'Assinale a alternativa em que a concordância verbal está em estrita conformidade com a norma-padrão da língua portuguesa:',
      options: [
        { id: 'A', text: 'Houveram muitos desentendimentos durante a reunião do conselho de classe.' },
        { id: 'B', text: 'Faziam anos que a escola não recebia novas remessas de livros didáticos.' },
        { id: 'C', text: 'Devem existir alternativas viáveis para a redução do descarte de resíduos plásticos.' },
        { id: 'D', text: 'Tratam-se de propostas inovadoras voltadas ao transporte público da capital.' },
        { id: 'E', text: 'Falta apenas dois minutos para o encerramento oficial do prazo das inscrições.' }
      ],
      correctOption: 'C',
      explanation: 'O verbo "existir" é pessoal e flexiona normalmente com o sujeito ("alternativas viáveis" está no plural). Na locução verbal "devem existir", o verbo auxiliar "dever" concorda no plural com o sujeito. Já "haver" (no sentido de existir) e "fazer" (indicando tempo decorrido) são impessoais e devem permanecer no singular.',
      teacherTip: 'Clássico da Vunesp: "haver" = existir (singular); "existir" = verbo normal (vai para o plural).',
      trapAlert: 'Em "Trata-se de", por haver preposição, "de propostas" é objeto indireto e o verbo fica no singular invariável.'
    },
    {
      id: 'pp-q2',
      number: 2,
      subject: 'Matemática',
      topic: 'Função de 1º Grau / Modelagem Linear',
      contextText: 'Uma cooperativa de reciclagem em Campinas paga R$ 50,00 fixos por dia aos colaboradores, acrescidos de R$ 0,80 por cada quilograma de alumínio recolhido.',
      statement: 'Se em determinado dia um colaborador recebeu R$ 138,00, a quantidade de alumínio recolhida por ele foi de:',
      options: [
        { id: 'A', text: '95 kg' },
        { id: 'B', text: '110 kg' },
        { id: 'C', text: '115 kg' },
        { id: 'D', text: '88 kg' },
        { id: 'E', text: '120 kg' }
      ],
      correctOption: 'B',
      explanation: 'Função do rendimento: V(x) = 50 + 0,80x. Igualando a 138: 138 = 50 + 0,80x ⇒ 0,80x = 138 - 50 = 88 ⇒ x = 88 / 0,80 = 110 kg.',
      teacherTip: 'Dividir por 0,8 é o mesmo que multiplicar por 10 e dividir por 8: 880 / 8 = 110.',
      trapAlert: 'Não esqueça de subtrair o valor fixo antes de dividir pela taxa variável.'
    },
    {
      id: 'pp-q3',
      number: 3,
      subject: 'História',
      topic: 'Complexo Cafeeiro Paulista e Ferrovias',
      contextText: 'A segunda metade do século XIX em São Paulo foi marcada pela introdução massiva da mão de obra imigrante e pela construção da malha ferroviária ligando o interior ao Porto de Santos.',
      statement: 'Esse processo teve como principal consequência estrutural para o estado de São Paulo:',
      options: [
        { id: 'A', text: 'A perda definitiva da hegemonia econômica do estado frente à pecuária do Nordeste.' },
        { id: 'B', text: 'A rápida acumulação de capitais que impulsionou o processo de urbanização e as primeiras indústrias paulistas.' },
        { id: 'C', text: 'O retrocesso nos modais de transporte e a manutenção do isolamento geográfico do Vale do Paraíba.' },
        { id: 'D', text: 'A imediata erradicação das disparidades sociais no campo paulista.' },
        { id: 'E', text: 'A transferência da capital estadual para a cidade de Santos.' }
      ],
      correctOption: 'B',
      explanation: 'Os lucros gerados pela cafeicultura no Oeste Paulista financiaram ferrovias (São Paulo Railway), bancos, eletrificação e forneceram o capital inicial que possibilitou a posterior industrialização de São Paulo.',
      teacherTip: 'Tema chave nas bancas paulistas (Vunesp, Fuvest, Unicamp): café como motor da infraestrutura moderna de SP.',
      trapAlert: 'A capital permaneceu na cidade de São Paulo, que virou o centro financeiro das transações cafeeiras.'
    },
    {
      id: 'pp-q4',
      number: 4,
      subject: 'Física',
      topic: 'Cinemática / Velocidade Média',
      contextText: 'Um trem expresso da CPTM percorre um trecho de 36 km entre duas estações da Região Metropolitana de São Paulo em exatos 30 minutos.',
      statement: 'A velocidade escalar média desenvolvida pela composição nesse trajeto é de:',
      options: [
        { id: 'A', text: '18 km/h' },
        { id: 'B', text: '54 km/h' },
        { id: 'C', text: '72 km/h' },
        { id: 'D', text: '90 km/h' },
        { id: 'E', text: '108 km/h' }
      ],
      correctOption: 'C',
      explanation: 'Tempo t = 30 minutos = 0,5 hora. Velocidade média Vm = ΔS / Δt = 36 km / 0,5 h = 72 km/h (o que equivale a 20 m/s).',
      teacherTip: 'Dividir por 0,5 equivale a dobrar o número! 36 × 2 = 72 km/h.',
      trapAlert: 'Não divida 36 por 30 diretamente; o tempo deve estar em horas para a velocidade sair em km/h.'
    },
    {
      id: 'pp-q5',
      number: 5,
      subject: 'Química',
      topic: 'Estequiometria Básica',
      contextText: 'A reação de combustão completa do gás metano (CH₄) é representada pela equação balanceada: CH₄ + 2 O₂ → CO₂ + 2 H₂O. (Massas molares: C = 12 g/mol, H = 1 g/mol, O = 16 g/mol).',
      statement: 'A combustão de 16 g de metano produzirá uma massa de dióxido de carbono (CO₂) igual a:',
      options: [
        { id: 'A', text: '22 g' },
        { id: 'B', text: '32 g' },
        { id: 'C', text: '44 g' },
        { id: 'D', text: '88 g' },
        { id: 'E', text: '18 g' }
      ],
      correctOption: 'C',
      explanation: 'Massa molar do CH₄ = 12 + 4(1) = 16 g/mol. Massa molar do CO₂ = 12 + 2(16) = 44 g/mol. Como a proporção na equação é de 1 mol de CH₄ para 1 mol de CO₂, 16 g de CH₄ formam exatamente 44 g de CO₂.',
      teacherTip: '1 mol de reagente consome e gera seus equivalentes em mols estequiométricos da reação balanceada.',
      trapAlert: 'Atenção para não somar a água na conta pedida (a pergunta exigiu apenas CO₂).'
    },
    {
      id: 'pp-q6',
      number: 6,
      subject: 'Geografia',
      topic: 'Industrialização e Macrometrópole Paulista',
      contextText: 'A Macrometrópole Paulista engloba a Grande São Paulo, a Baixada Santista, a Região Metropolitana de Campinas, o Vale do Paraíba e a Região de Sorocaba.',
      statement: 'Sobre esse território altamente articulado, é correto afirmar que:',
      options: [
        { id: 'A', text: 'Concentra o polo tecnológico aeroespacial em São José dos Campos e o complexo petroquímico e portuário em Santos e Cubatão.' },
        { id: 'B', text: 'Apresenta total ausência de rodovias duplicadas ligando os centros metropolitanos.' },
        { id: 'C', text: 'Baseia sua economia unicamente na exportação de cana-de-açúcar in natura sem refino.' },
        { id: 'D', text: 'Possui densidade demográfica inferior à média da região Norte do Brasil.' },
        { id: 'E', text: 'Foi desprovida de investimentos federais durante o Plano de Metas de JK.' }
      ],
      correctOption: 'A',
      explanation: 'A Macrometrópole Paulista abriga a mais complexa rede produtiva da América Latina: o polo aeroespacial/tecnológico do Vale do Paraíba (ITA/Embraer), a indústria naval/química e o Porto de Santos, além do polo de inovação de Campinas.',
      teacherTip: 'Conceito da Vunesp: São Paulo como entroncamento logístico rodoviário e tecnológico da América do Sul.',
      trapAlert: 'O Vale do Paraíba é o maior polo aeronáutico do país, jamais um espaço agrário atrasado.'
    },
    {
      id: 'pp-q7',
      number: 7,
      subject: 'Biologia',
      topic: 'Fisiologia Celular / Mitose e Meiose',
      statement: 'Diferentemente da mitose (que produz duas células-filhas geneticamente idênticas à célula-mãe), a meiose é responsável pela:',
      options: [
        { id: 'A', text: 'Regeneração contínua de tecidos lesados na pele.' },
        { id: 'B', text: 'Produção de gametas com metade do número de cromossomos da espécie e variabilidade genética via crossing-over.' },
        { id: 'C', text: 'Duplicação do número total de cromossomos nas células somáticas.' },
        { id: 'D', text: 'Formação de bactérias a partir de esporos bacterianos.' },
        { id: 'E', text: 'Fotossíntese nas células dos tecidos foliares das angiospermas.' }
      ],
      correctOption: 'B',
      explanation: 'A meiose é uma divisão reducional que forma quatro células haploides (n) a partir de uma diploide (2n), gerando gametas. O crossing-over (permutação gênica) na prófase I assegura alta variabilidade genética.',
      teacherTip: 'Mitose = Manutenção/Crescimento (2n -> 2n). Meiose = Gametas/Variabilidade (2n -> 4x n).',
      trapAlert: 'Células somáticas da pele dividem-se por mitose, não meiose.'
    },
    {
      id: 'pp-q8',
      number: 8,
      subject: 'Matemática',
      topic: 'Trigonometria no Triângulo Retângulo',
      contextText: 'Um topógrafo avista o topo de um edifício sob um ângulo de elevação de 30°. A distância horizontal entre o teodolito e a base do prédio é de 60 metros. Considere tg(30°) ≈ 0,58.',
      statement: 'Desconsiderando a altura do aparelho, a altura aproximada desse prédio é de:',
      options: [
        { id: 'A', text: '28,5 m' },
        { id: 'B', text: '34,8 m' },
        { id: 'C', text: '42,0 m' },
        { id: 'D', text: '51,9 m' },
        { id: 'E', text: '60,0 m' }
      ],
      correctOption: 'B',
      explanation: 'Tangente = Cateto Oposto / Cateto Adjacente. tg(30°) = h / 60 ⇒ h = 60 × 0,58 = 34,8 metros.',
      teacherTip: '60 × 0,58 = 6 × 5,8 = 34,8.',
      trapAlert: 'Não use seno ou cosseno quando a relação envolve os dois catetos (altura e distância ao solo).'
    },
    {
      id: 'pp-q9',
      number: 9,
      subject: 'Língua Portuguesa',
      topic: 'Crase e Regência Verbal',
      statement: 'O acento grave indicativo de crase está empregado corretamente em:',
      options: [
        { id: 'A', text: 'O jovem estudante estava disposto à colaborar com os colegas de turma.' },
        { id: 'B', text: 'O diretor comunicou a decisão às famílias dos formandos do ensino médio.' },
        { id: 'C', text: 'Entregamos o formulário de matrícula à uma secretária do colégio.' },
        { id: 'D', text: 'Todos os candidatos compareceram à pé no dia do exame.' },
        { id: 'E', text: 'O projeto foi encaminhado à qualquer repartição interessada.' }
      ],
      correctOption: 'B',
      explanation: 'Quem comunica, comunica algo (objeto direto) a alguém (objeto indireto: preposição "a"). Como "famílias" é substantivo feminino plural precedido de artigo "as", ocorre a crase: a + as = às famílias.',
      teacherTip: 'Nunca ocorre crase: antes de verbo ("colaborar"), antes de palavra masculina ("pé"), antes de artigo indefinido ("uma") ou antes de pronomes indefinidos ("qualquer").',
      trapAlert: 'A alternativa B é a única que une a preposição exigida pelo verbo com o artigo definido feminino.'
    },
    {
      id: 'pp-q10',
      number: 10,
      subject: 'Filosofia e Sociologia',
      topic: 'Iluminismo e Divisão dos Poderes',
      contextText: '“Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder.” (Montesquieu, O Espírito das Leis)',
      statement: 'A teoria da separação tripartite dos poderes formulada por Montesquieu tem como função essencial:',
      options: [
        { id: 'A', text: 'Garantir que o monarca exerça autoridade ilimitada sobre o parlamento.' },
        { id: 'B', text: 'Prevenir o absolutismo e proteger a liberdade dos cidadãos por meio de um sistema de freios e contrapesos.' },
        { id: 'C', text: 'Fundir o poder religioso com a administração tributária republicana.' },
        { id: 'D', text: 'Eliminar os tribunais de justiça em favor do voto direto para todas as sentenças criminais.' },
        { id: 'E', text: 'Instituir o exército como poder moderador absoluto sobre as leis civis.' }
      ],
      correctOption: 'B',
      explanation: 'Montesquieu formulou a divisão dos poderes (Executivo, Legislativo e Judiciário) autônomos e harmônicos entre si (sistema de checks and balances) para evitar a concentração tirânica e garantir os direitos individuais.',
      teacherTip: 'Fundamento republicano basilar adotado na Constituição brasileira (Art. 2º da CF/88).',
      trapAlert: 'Montesquieu opunha-se frontalmente ao absolutismo do Antigo Regime.'
    },
    {
      id: 'pp-q11',
      number: 11,
      subject: 'Física',
      topic: 'Trabalho e Energia Mecânica',
      contextText: 'Um bloco de massa 2 kg é abandonado a partir do repouso do topo de uma rampa perfeitamente lisa de altura h = 5 metros. Adote a aceleração da gravidade g = 10 m/s² e despreze o atrito.',
      statement: 'A velocidade do bloco ao atingir a base da rampa é de:',
      options: [
        { id: 'A', text: '5 m/s' },
        { id: 'B', text: '10 m/s' },
        { id: 'C', text: '15 m/s' },
        { id: 'D', text: '20 m/s' },
        { id: 'E', text: '25 m/s' }
      ],
      correctOption: 'B',
      explanation: 'Conservação da energia mecânica: Ep_inicial = Ec_final ⇒ m·g·h = (m·v²) / 2. A massa se cancela: v² = 2·g·h ⇒ v² = 2 × 10 × 5 = 100 ⇒ v = √100 = 10 m/s.',
      teacherTip: 'Fórmula clássica de queda livre ou rampa sem atrito: v = √(2gh). Não depende da massa!',
      trapAlert: 'A massa de 2 kg é dada para distrair, ela se cancela nos dois lados da equação.'
    },
    {
      id: 'pp-q12',
      number: 12,
      subject: 'Química',
      topic: 'Tabela Periódica / Propriedades Periódicas',
      statement: 'Ao percorrer uma mesma família (grupo vertical) da Tabela Periódica de cima para baixo, observa-se que o raio atômico:',
      options: [
        { id: 'A', text: 'Diminui, pois a eletronegatividade cresce exponencialmente.' },
        { id: 'B', text: 'Permanece rigorosamente inalterado em todos os elementos.' },
        { id: 'C', text: 'Aumenta, devido ao aumento progressivo do número de níveis ou camadas eletrônicas ocupadas.' },
        { id: 'D', text: 'Diminui, por causa da atração gravitacional entre os nêutrons nucleares.' },
        { id: 'E', text: 'Cresce apenas para os gases nobres e diminui para os metais alcalinos.' }
      ],
      correctOption: 'C',
      explanation: 'Descendo em uma coluna, cada novo período adiciona uma nova camada de elétrons ao redor do núcleo, afastando os elétrons de valência e aumentando o raio atômico.',
      teacherTip: 'Raio atômico cresce: para baixo (mais camadas) e para a esquerda (menor carga nuclear efetiva puxando a eletrosfera).',
      trapAlert: 'Não confunda raio atômico com eletronegatividade (que cresce para cima e para a direita).'
    },
    {
      id: 'pp-q13',
      number: 13,
      subject: 'Matemática',
      topic: 'Probabilidade Simples',
      contextText: 'Em uma urna há 12 bolas idênticas ao tato, das quais 5 são azuis, 4 são vermelhas e 3 são amarelas. Uma bola é sorteada aleatoriamente.',
      statement: 'A probabilidade de a bola sorteada NÃO ser vermelha é de:',
      options: [
        { id: 'A', text: '1/3' },
        { id: 'B', text: '1/4' },
        { id: 'C', text: '2/3' },
        { id: 'D', text: '3/4' },
        { id: 'E', text: '5/12' }
      ],
      correctOption: 'C',
      explanation: 'Total de bolas = 12. Bolas que NÃO são vermelhas = azuis + amarelas = 5 + 3 = 8. P = 8 / 12. Simplificando por 4, temos 2 / 3.',
      teacherTip: 'Ou pelo evento complementar: 1 - P(vermelha) = 1 - 4/12 = 1 - 1/3 = 2/3.',
      trapAlert: 'Atenção para o comando "NÃO ser vermelha". 4/12 = 1/3 é a chance de ser vermelha.'
    },
    {
      id: 'pp-q14',
      number: 14,
      subject: 'História',
      topic: 'Revolução Constitucionalista de 1932',
      contextText: 'O movimento armado de 1932 liderado pelas elites paulistas mobilizou a sociedade do estado em prol de uma nova constituição para o Brasil.',
      statement: 'Entre as motivações imediatas da Revolução de 1932 encontrava-se:',
      options: [
        { id: 'A', text: 'A exigência de reconstitucionalização do país e o descontentamento com os interventores nomeados por Vargas em São Paulo.' },
        { id: 'B', text: 'O apoio irrestrito dos paulistas à continuidade do governo provisório sem eleições.' },
        { id: 'C', text: 'A tentativa de restauração da monarquia parlamentarista de D. Pedro II.' },
        { id: 'D', text: 'A aliança militar entre o governo varguista e o Partido Democrático contra a imprensa livre.' },
        { id: 'E', text: 'A declaração de independência do estado de São Paulo em relação ao território nacional.' }
      ],
      correctOption: 'A',
      explanation: 'Após o golpe de 1930 que fechou o Congresso, Getúlio governava por decretos e nomeou o militar João Alberto como interventor de SP. A insatisfação paulista exigia eleições para uma Assembleia Constituinte e a autonomia estadual.',
      teacherTip: 'O feriado paulista de 9 de julho celebra a eclosão da Revolução Constitucionalista de 1932 (MMDC).',
      trapAlert: 'Embora derrotados militarmente, os paulistas alcançaram seu objetivo político: Vargas convocou a constituinte que redigiu a Carta de 1934.'
    },
    {
      id: 'pp-q15',
      number: 15,
      subject: 'Língua Portuguesa',
      topic: 'Figuras de Linguagem / Metáfora e Antítese',
      contextText: '“Tristeza não tem fim, / Felicidade sim...” (Vinicius de Moraes e Tom Jobim)',
      statement: 'O verso acima estrutura seu significado a partir da figura de linguagem denominada:',
      options: [
        { id: 'A', text: 'Hipérbole' },
        { id: 'B', text: 'Antítese' },
        { id: 'C', text: 'Pleonasmo' },
        { id: 'D', text: 'Metonímia' },
        { id: 'E', text: 'Eufemismo' }
      ],
      correctOption: 'B',
      explanation: 'A antítese é a aproximação de termos ou ideias de sentidos opostos no mesmo enunciado poético (tristeza vs. felicidade; não tem fim vs. tem fim).',
      teacherTip: 'Antítese = oposição lógica entre palavras opostas (dia/noite, quente/frio). Paradoxo = oposição absurda e inconciliável ("amor é fogo que arde sem se ver").',
      trapAlert: 'Não confunda antítese com paradoxo.'
    },
    {
      id: 'pp-q16',
      number: 16,
      subject: 'Biologia',
      topic: 'Ecologia / Cadeia Alimentar e Níveis Tróficos',
      contextText: 'Em um ecossistema aquático, o fitoplâncton é consumido pelo zooplâncton, que por sua vez serve de alimento para pequenos peixes carnívoros.',
      statement: 'Nessa cadeia trófica, o fitoplâncton e os pequenos peixes ocupam, respectivamente, as posições de:',
      options: [
        { id: 'A', text: 'Decompositor e consumidor primário.' },
        { id: 'B', text: 'Produtor e consumidor secundário.' },
        { id: 'C', text: 'Consumidor primário e consumidor terciário.' },
        { id: 'D', text: 'Produtor e consumidor terciário.' },
        { id: 'E', text: 'Consumidor secundário e decompositor terminal.' }
      ],
      correctOption: 'B',
      explanation: 'O fitoplâncton realiza fotossíntese (produtor, 1º nível trófico). O zooplâncton é o consumidor primário (herbívoro, 2º nível). Os peixes que comem o zooplâncton são consumidores secundários (3º nível trófico).',
      teacherTip: 'Diferencie "nível trófico" de "ordem do consumidor". Produtor = 1º nível; Consumidor Primário = 2º nível; Consumidor Secundário = 3º nível.',
      trapAlert: 'Fitoplâncton são algas unicelulares fotossintetizantes, portanto produtoras e nunca consumidoras.'
    },
    {
      id: 'pp-q17',
      number: 17,
      subject: 'Matemática',
      topic: 'Geometria Plana / Área de Trapézio',
      contextText: 'Um terreno tem a forma de um trapézio retângulo com base maior medindo 30 metros, base menor medindo 20 metros e altura de 12 metros.',
      statement: 'A área total desse terreno é igual a:',
      options: [
        { id: 'A', text: '240 m²' },
        { id: 'B', text: '300 m²' },
        { id: 'C', text: '360 m²' },
        { id: 'D', text: '400 m²' },
        { id: 'E', text: '600 m²' }
      ],
      correctOption: 'B',
      explanation: 'Área do trapézio: A = [(B + b) × h] / 2. A = [(30 + 20) × 12] / 2 = [50 × 12] / 2 = 600 / 2 = 300 m².',
      teacherTip: 'Ou faça 50 × 6 = 300 m².',
      trapAlert: 'Cuidado para não esquecer de dividir por 2!'
    },
    {
      id: 'pp-q18',
      number: 18,
      subject: 'Física',
      topic: 'Óptica Geométrica / Lentes Convergentes',
      statement: 'Para corrigir o defeito visual da hipermetropia (onde a imagem de objetos próximos se forma atrás da retina), recomenda-se o uso de óculos com lentes do tipo:',
      options: [
        { id: 'A', text: 'Divergentes, que afastam ainda mais o foco luminoso.' },
        { id: 'B', text: 'Convergentes, que adiantam a convergência dos raios de luz focalizando-os exatamente sobre a retina.' },
        { id: 'C', text: 'Cilíndricas puras, específicas apenas para o astigmatismo.' },
        { id: 'D', text: 'Planóides reflexivas sem desvio de raios.' },
        { id: 'E', text: 'Biconcavas dispersivas de alta refringência negativa.' }
      ],
      correctOption: 'B',
      explanation: 'Na hipermetropia, o olho é mais curto que o normal e o foco se forma atrás da retina. Lentes convergentes aumentam o poder de refração do sistema ocular, convergindo os raios sobre a retina.',
      teacherTip: 'Miopia -> Lente divergente (olho comprido, foco antes da retina). Hipermetropia -> Lente convergente (olho curto, foco atrás da retina).',
      trapAlert: 'Astigmatismo que usa lente cilíndrica; não confunda os três defeitos.'
    },
    {
      id: 'pp-q19',
      number: 19,
      subject: 'Química',
      topic: 'Soluções e Concentração Comum',
      contextText: 'Um técnico de laboratório dissolveu 25 gramas de cloreto de sódio (sal de cozinha) em água destilada suficiente para completar um volume total de 500 mL de solução.',
      statement: 'A concentração comum dessa solução salina, em g/L, é de:',
      options: [
        { id: 'A', text: '12,5 g/L' },
        { id: 'B', text: '25 g/L' },
        { id: 'C', text: '50 g/L' },
        { id: 'D', text: '75 g/L' },
        { id: 'E', text: '100 g/L' }
      ],
      correctOption: 'C',
      explanation: 'Concentração comum C = m / V. O volume em litros é 500 mL = 0,5 L. Logo: C = 25 g / 0,5 L = 50 g/L.',
      teacherTip: 'Dividir por 0,5 é dobrar: 25 × 2 = 50 g/L.',
      trapAlert: 'O volume deve ser convertido de mL para Litros dividindo por 1.000 antes da operação.'
    },
    {
      id: 'pp-q20',
      number: 20,
      subject: 'Língua Portuguesa',
      topic: 'Coesão Textual e Conjunções',
      statement: 'No período “O aluno dedicou-se arduamente aos estudos, contudo não alcançou a pontuação desejada”, o termo em destaque introduz uma oração com valor semântico de:',
      options: [
        { id: 'A', text: 'Causa' },
        { id: 'B', text: 'Oposição ou adversidade' },
        { id: 'C', text: 'Consequência' },
        { id: 'D', text: 'Finalidade' },
        { id: 'E', text: 'Condição' }
      ],
      correctOption: 'B',
      explanation: 'A conjunção coordenativa "contudo" (assim como "mas", "porém", "todavia", "entretanto", "no entanto") exprime contraste, oposição de ideias entre duas orações.',
      teacherTip: 'As conjunções adversativas são as campeãs de cobrança em provas da Vunesp.',
      trapAlert: 'Não confunda "contudo" (adversativa) com "porquanto" (explicativa/causal) ou "portanto" (conclusiva).'
    }
  ]
};
