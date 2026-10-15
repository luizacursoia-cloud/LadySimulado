import { Exam } from '@/types/quiz';

export const unicampExam: Exam = {
  id: 'unicamp-vestibular-fase1',
  slug: 'unicamp',
  title: 'UNICAMP - 1ª Fase (Vestibular Nacional Unicamp)',
  subtitle: 'Prova Geral com 72 Questões Multidisciplinares da COMVEST',
  category: 'unicamp',
  level: 'Grandes Vestibulares',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'Comissão Permanente para os Vestibulares (COMVEST)',
  badge: '1ª Fase UNICAMP',
  description: 'Simulado autêntico no estilo COMVEST com questões de 4 alternativas (A, B, C, D). Foco em textos reflexivos, leitura crítica de infográficos, interdisciplinaridade e obras literárias de autores lusófonos e indígenas.',
  tags: ['UNICAMP', 'COMVEST', 'Campinas', 'Leitura Crítica', 'Literatura', 'Interdisciplinar'],
  questions: [
    {
      id: 'uni-q1',
      number: 1,
      subject: 'Literatura / Leituras Obrigatórias',
      topic: 'Ailton Krenak / Ideias para Adiar o Fim do Mundo',
      contextText: '“A humanidade que se pretende dominante se desconectou do organismo vivo que é a Terra. Transformaram a natureza em recurso para consumo insaciável.” (Ailton Krenak)',
      statement: 'Na obra do pensador indígena Ailton Krenak, o ato de “adiar o fim do mundo” propõe:',
      options: [
        { id: 'A', text: 'Acelerar a exploração mineral para garantir reservas econômicas aos povos originários.' },
        { id: 'B', text: 'Manter a capacidade de contar histórias, cantar, dançar e nutrir a cosmologia dos povos da floresta como resistência à monocultura ocidental predatória.' },
        { id: 'C', text: 'Confinar todas as populações tradicionais em metrópoles tecnologicamente autossuficientes.' },
        { id: 'D', text: 'Acreditar que o colapso ambiental é um mito inventado por ONGs internacionais.' }
      ],
      correctOption: 'B',
      explanation: 'Para Krenak, "adiar o fim do mundo" é alargar os horizontes existenciais, valorizando saberes e poéticas que não tratam a Terra como mercadoria, resistindo à padronização destrutiva do antropoceno.',
      teacherTip: 'Krenak é leitura obrigatória da Unicamp e costuma aparecer em questões de Literatura, Filosofia e Redação.',
      trapAlert: 'Krenak não defende saídas tecnocráticas ocidentais; ele questiona a própria ideia eurocêntrica de "humanidade".'
    },
    {
      id: 'uni-q2',
      number: 2,
      subject: 'Biologia',
      topic: 'Imunologia / Anticorpos Monoclonais',
      contextText: 'Anticorpos monoclonais são moléculas produzidas em laboratório a partir de um único clone de linfócito B, projetadas para se ligar a um antígeno específico de células tumorais ou vírus.',
      statement: 'Uma das principais vantagens dos anticorpos monoclonais no tratamento do câncer em comparação à quimioterapia tradicional é:',
      options: [
        { id: 'A', text: 'A especificidade de alvo, destruindo células neoplásicas com menor dano aos tecidos saudáveis do paciente.' },
        { id: 'B', text: 'A eliminação completa da necessidade de sistema imunológico no organismo receptor.' },
        { id: 'C', text: 'A ausência de proteínas em sua estrutura química.' },
        { id: 'D', text: 'A capacidade de alterar o DNA de todas as células do corpo simultaneamente.' }
      ],
      correctOption: 'A',
      explanation: 'Diferente dos quimioterápicos citotóxicos convencionais (que atacam qualquer célula em rápida divisão, inclusive cabelos e mucosa gástrica), as terapias-alvo com anticorpos monoclonais reconhecem marcadores de superfície exclusivos da célula maligna.',
      teacherTip: 'Biotecnologia e imunoterapia são temas com grande presença nas provas de Biológicas da Comvest.',
      trapAlert: 'Anticorpos são proteínas (imunoglobulinas), portanto a opção C é falsa.'
    },
    {
      id: 'uni-q3',
      number: 3,
      subject: 'Física',
      topic: 'Termologia / Dilatação Térmica',
      contextText: 'Uma barra metálica de alumínio de comprimento inicial L₀ = 2,00 m a 20 °C é aquecida até 70 °C. O coeficiente de dilatação linear do alumínio é α = 22 × 10⁻⁶ °C⁻¹.',
      statement: 'A variação de comprimento (ΔL) sofrida pela barra metálica após o aquecimento é de:',
      options: [
        { id: 'A', text: '1,1 mm' },
        { id: 'B', text: '2,2 mm' },
        { id: 'C', text: '4,4 mm' },
        { id: 'D', text: '8,8 mm' }
      ],
      correctOption: 'B',
      explanation: 'ΔT = 70 - 20 = 50 °C. Dilatação linear: ΔL = L₀ × α × ΔT = 2,0 m × (22 × 10⁻⁶ °C⁻¹) × 50 °C = 100 × 22 × 10⁻⁶ = 2200 × 10⁻⁶ m = 2,2 × 10⁻³ m = 2,2 mm.',
      teacherTip: '2 × 50 = 100. 100 × 22 = 2200. Multiplicar por 10⁻⁶ dá 0,0022 m = 2,2 mm.',
      trapAlert: 'Atenção para a conversão de metros para milímetros (1 m = 1000 mm).'
    },
    {
      id: 'uni-q4',
      number: 4,
      subject: 'Matemática',
      topic: 'Geometria / Relações Métricas e Semelhança',
      contextText: 'Em um triângulo retângulo ABC, a altura relativa à hipotenusa mede 6 cm e divide a hipotenusa em duas projeções ortogonais m e n. Sabe-se que m = 4 cm.',
      statement: 'O comprimento da outra projeção n e o comprimento total da hipotenusa são:',
      options: [
        { id: 'A', text: 'n = 9 cm e hipotenusa = 13 cm' },
        { id: 'B', text: 'n = 8 cm e hipotenusa = 12 cm' },
        { id: 'C', text: 'n = 6 cm e hipotenusa = 10 cm' },
        { id: 'D', text: 'n = 12 cm e hipotenusa = 16 cm' }
      ],
      correctOption: 'A',
      explanation: 'Pela relação métrica do triângulo retângulo: h² = m × n ⇒ 6² = 4 × n ⇒ 36 = 4n ⇒ n = 9 cm. A hipotenusa total é a soma das duas projeções: a = m + n = 4 + 9 = 13 cm.',
      teacherTip: 'Relações métricas do triângulo retângulo: h² = m·n; b² = a·m; c² = a·n; a·h = b·c.',
      trapAlert: 'Não confunda a projeção n com a hipotenusa inteira.'
    },
    {
      id: 'uni-q5',
      number: 5,
      subject: 'História',
      topic: 'Ditadura Militar Brasileira / Censura e Resistência Cultural',
      contextText: 'O Ato Institucional nº 5 (AI-5), decretado pelo general Costa e Silva em dezembro de 1968, inaugurou a fase mais repressiva da Ditadura Militar no Brasil.',
      statement: 'Entre as medidas draconianas impostas pelo AI-5 figuravam:',
      options: [
        { id: 'A', text: 'A convocação imediata de eleições diretas com voto popular para a presidência da República.' },
        { id: 'B', text: 'O fechamento do Congresso Nacional, a suspensão do habeas corpus para crimes políticos e a institucionalização da censura prévia aos meios de comunicação e à arte.' },
        { id: 'C', text: 'A anistia ampla e irrestrita a todos os exilados políticos no exterior.' },
        { id: 'D', text: 'A fundação do Partido dos Trabalhadores com aval das Forças Armadas.' }
      ],
      correctOption: 'B',
      explanation: 'O AI-5 concedeu poderes extraordinários ao presidente: intervir em estados, fechar o parlamento, cassar mandatos e suspender garantias constitucionais como o habeas corpus, abrindo caminho para a tortura sistemática.',
      teacherTip: 'O AI-5 vigorou até o final de 1978 e é um dos marcos mais exigidos em História do Brasil na Unicamp.',
      trapAlert: 'A Lei da Anistia só viria mais de 10 anos depois, em 1979.'
    },
    {
      id: 'uni-q6',
      number: 6,
      subject: 'Química',
      topic: 'Estequiometria de Gases / Hipótese de Avogadro',
      statement: 'Nas Condições Normais de Temperatura e Pressão (CNTP: 0 °C e 1 atm), 1 mol de qualquer gás ideal ocupa o volume molar de 22,4 litros. O volume ocupado por 64 g de gás oxigênio (O₂, massa molar = 32 g/mol) nas CNTP é:',
      options: [
        { id: 'A', text: '11,2 L' },
        { id: 'B', text: '22,4 L' },
        { id: 'C', text: '44,8 L' },
        { id: 'D', text: '89,6 L' }
      ],
      correctOption: 'C',
      explanation: 'Número de mols n = m / M = 64 g / (32 g/mol) = 2 mols de O₂. Como cada mol ocupa 22,4 L nas CNTP: 2 × 22,4 L = 44,8 Litros.',
      teacherTip: 'Se 1 mol tem 22,4 L, 2 mols têm o dobro: 44,8 L.',
      trapAlert: 'Atenção que o gás oxigênio é diatômico (O₂), portanto sua massa molar é 32 g/mol e não 16.'
    },
    {
      id: 'uni-q7',
      number: 7,
      subject: 'Língua Portuguesa',
      topic: 'Interpretação de Tiras / Crítica Social',
      contextText: 'Em uma tirinha satírica de humor, um pai mostra uma floresta derrubada ao filho e diz: “Veja, filho! O progresso chegou até nós!”',
      statement: 'O efeito irônico da fala do pai decorre:',
      options: [
        { id: 'A', text: 'Da valorização sincera da derrubada florestal como triunfo civilizatório.' },
        { id: 'B', text: 'Da contradição entre denominar de "progresso" a devastação ambiental irreversível.' },
        { id: 'C', text: 'Da incapacidade da criança de entender termos da silvicultura moderna.' },
        { id: 'D', text: 'Do elogio implícito à preservação dos mananciais hídricos.' }
      ],
      correctOption: 'B',
      explanation: 'A ironia reside no contraste irrefutável entre o vocábulo de conotação positiva ("progresso") e a realidade visual desoladora da destruição dos recursos naturais.',
      teacherTip: 'A Unicamp adora charges, cartuns e tiras críticas em Linguagens.',
      trapAlert: 'A intenção do autor é crítica, não literal.'
    },
    {
      id: 'uni-q8',
      number: 8,
      subject: 'Geografia',
      topic: 'Biomas Brasileiros / Mata Atlântica e Hotspots',
      contextText: 'A Mata Atlântica cobria originalmente mais de 1,3 milhão de km² ao longo da costa brasileira. Hoje, restam cerca de 12% de sua cobertura vegetal original em fragmentos isolados.',
      statement: 'Por abrigar altíssima biodiversidade e expressivo número de espécies endêmicas sob grave risco de extinção, a Mata Atlântica é classificada pela ecologia global como um:',
      options: [
        { id: 'A', text: 'Deserto antrópico estéril' },
        { id: 'B', text: 'Hotspot de biodiversidade' },
        { id: 'C', text: 'Ecotilóide homogêneo' },
        { id: 'D', text: 'Taiga boreal secundária' }
      ],
      correctOption: 'B',
      explanation: 'Hotspot de biodiversidade (conceito de Norman Myers) é uma ecorregião com pelo menos 1.500 espécies de plantas vasculares endêmicas que já perdeu mais de 70% de sua vegetação primária. No Brasil, a Mata Atlântica e o Cerrado são hotspots mundiais.',
      teacherTip: 'Termo ecológico crucial para o vestibular da Unicamp e Fuvest.',
      trapAlert: 'Endêmico significa que só existe naturalmente naquele local e em nenhum outro lugar da Terra.'
    },
    {
      id: 'uni-q9',
      number: 9,
      subject: 'Matemática',
      topic: 'Progressão Aritmética (PA)',
      contextText: 'Um ciclista treina para uma maratona percorrendo 15 km no primeiro dia, 19 km no segundo dia, 23 km no terceiro dia, aumentando sempre a distância em progressão aritmética de razão r = 4 km.',
      statement: 'A distância percorrida por esse atleta no 20º dia de treino foi de:',
      options: [
        { id: 'A', text: '79 km' },
        { id: 'B', text: '87 km' },
        { id: 'C', text: '91 km' },
        { id: 'D', text: '95 km' }
      ],
      correctOption: 'C',
      explanation: 'Termo geral da PA: a_n = a₁ + (n - 1)·r. Para n = 20: a₂₀ = 15 + (20 - 1) × 4 = 15 + 19 × 4 = 15 + 76 = 91 km.',
      teacherTip: '19 × 4 = 76. 76 + 15 = 91.',
      trapAlert: 'Cuidado para não usar 20 em vez de (20 - 1) = 19.'
    },
    {
      id: 'uni-q10',
      number: 10,
      subject: 'Biologia',
      topic: 'Doenças Infecciosas / Arboviroses e Vetores',
      statement: 'Dengue, Zika, Chikungunya e Febre Amarela urbana são doenças causadas por vírus e transmitidas aos seres humanos pela picada de fêmeas do mosquito:',
      options: [
        { id: 'A', text: 'Anopheles darlingi (mosquito-prego)' },
        { id: 'B', text: 'Aedes aegypti' },
        { id: 'C', text: 'Culex quinquefasciatus (pernilongo comum)' },
        { id: 'D', text: 'Lutzomyia longipalpis (mosquito-palha)' }
      ],
      correctOption: 'B',
      explanation: 'O Aedes aegypti é o vetor biológico de todas essas arboviroses. O Anopheles transmite a malária (protozoário), e o mosquito-palha transmite a leishmaniose (protozoário).',
      teacherTip: 'Apenas as fêmeas picam porque precisam do sangue para a maturação de seus ovos.',
      trapAlert: 'O pernilongo comum (Culex) faz zumbido à noite, enquanto o Aedes tem hábitos diurnos e listras brancas nas patas.'
    },
    {
      id: 'uni-q11',
      number: 11,
      subject: 'Física',
      topic: 'Ondulatória / Relação Fundamental V = λ × f',
      contextText: 'Uma estação de rádio FM de Campinas transmite seu sinal na frequência de 100 MHz (100 × 10⁶ Hz). A velocidade de propagação das ondas eletromagnéticas no ar é de c = 3,0 × 10⁸ m/s.',
      statement: 'O comprimento de onda (λ) dessas ondas de rádio no ar é de:',
      options: [
        { id: 'A', text: '0,3 m' },
        { id: 'B', text: '3,0 m' },
        { id: 'C', text: '30 m' },
        { id: 'D', text: '300 m' }
      ],
      correctOption: 'B',
      explanation: 'Pela equação fundamental da ondulatória: v = λ × f ⇒ λ = v / f = (3,0 × 10⁸ m/s) / (1,0 × 10⁸ Hz) = 3,0 metros.',
      teacherTip: '100 MHz = 100 × 10⁶ Hz = 1,0 × 10⁸ Hz. Cortando as potências de 10: 3 / 1 = 3 m.',
      trapAlert: 'Não esqueça o prefixo Mega (M = 10⁶).'
    },
    {
      id: 'uni-q12',
      number: 12,
      subject: 'História',
      topic: 'Antiguidade Clássica / Democracia Ateniense',
      statement: 'Na Atenas clássica do século V a.C. (século de Péricles), a democracia distinguia-se pela participação direta dos cidadãos na Eclésia (assembleia). No entanto, o corpo de cidadãos era excludente porque:',
      options: [
        { id: 'A', text: 'Excluía mulheres, escravizados e estrangeiros (metecos), que compunham a grande maioria da população.' },
        { id: 'B', text: 'Permitia o voto apenas aos sacerdotes do templo de Delfos.' },
        { id: 'C', text: 'Submetia todas as decisões ao veto supremo do imperador persa.' },
        { id: 'D', text: 'Limitava a cidadania exclusivamente a guerreiros espartanos natos.' }
      ],
      correctOption: 'A',
      explanation: 'Para ser cidadão em Atenas era preciso ser homem, livre, maior de idade e filho de pai e mãe atenienses. Isso deixava de fora mulheres, estrangeiros e a numerosa mão de obra escrava (cerca de 85% a 90% da população).',
      teacherTip: 'A Unicamp sempre ressalta o contraste entre a democracia direta dos atenienses e sua base excludente e escravocrata.',
      trapAlert: 'A democracia ateniense era DIRETA (sem deputados), mas não era UNIVERSAL.'
    },
    {
      id: 'uni-q13',
      number: 13,
      subject: 'Química',
      topic: 'Polímeros e Sustentabilidade',
      statement: 'O polietileno tereftalato (PET), amplamente utilizado na fabricação de garrafas de refrigerante e fibras têxteis, é um polímero classificado como:',
      options: [
        { id: 'A', text: 'Termoplástico reciclável, podendo ser aquecido e remoldado sucessivas vezes.' },
        { id: 'B', text: 'Termorrígido insolúvel, que se decompõe sem fundir quando aquecido.' },
        { id: 'C', text: 'Polímero inorgânico de silício e flúor.' },
        { id: 'D', text: 'Carboidrato natural extraído da casca de árvores.' }
      ],
      correctOption: 'A',
      explanation: 'O PET é um poliéster termoplástico: as cadeias lineares se soltam quando aquecidas, permitindo fusão e remodelagem mecânica para reciclagem.',
      teacherTip: 'Termoplásticos = podem ser reciclados pelo calor (PET, PE, PP, PVC, PS). Termorrígidos (termofixos) = queimam se aquecidos, não fundem (baquelite, poliuretano).',
      trapAlert: 'A reciclabilidade do PET é mecânica e térmica graças à sua característica termoplástica.'
    },
    {
      id: 'uni-q14',
      number: 14,
      subject: 'Literatura / Leituras Obrigatórias',
      topic: 'Carolina Maria de Jesus / Quarto de Despejo',
      contextText: '“O Brasil precisa ser dirigido por uma pessoa que já passou fome. A fome também é professora.” (Carolina Maria de Jesus, Quarto de Despejo)',
      statement: 'O diário de Carolina Maria de Jesus, catadora de papel na favela do Canindé nos anos 1950, constitui um documento literário contundente porque:',
      options: [
        { id: 'A', text: 'Adota a linguagem parnasiana formal dos acadêmicos da época.' },
        { id: 'B', text: 'Dá voz autêntica e lírica à perspectiva de uma mulher negra e periférica, desnudando a chaga da fome e a desigualdade do projeto modernizador brasileiro.' },
        { id: 'C', text: 'Propõe a submissão conformada dos favelados aos políticos populistas.' },
        { id: 'D', text: 'Trata de temas exclusivamente fantásticos e sobrenaturais sem conexão com a realidade urbana.' }
      ],
      correctOption: 'B',
      explanation: 'Quarto de Despejo revolucionou a literatura brasileira ao trazer o olhar de quem vive a exclusão social a partir de dentro, aliando poeticidade a uma denúncia realista e cortante.',
      teacherTip: 'Autora fundamental nas listas de vestibulares contemporâneos da Unicamp e USP.',
      trapAlert: 'A força da obra está no testemunho em primeira pessoa e na recusa à romantização da miséria.'
    },
    {
      id: 'uni-q15',
      number: 15,
      subject: 'Matemática',
      topic: 'Função Logarítmica / Escala Richter',
      contextText: 'A magnitude M de um terremoto na escala Richter é calculada pela fórmula M = (2/3)·log(E / E₀), onde E é a energia liberada pelo sismo.',
      statement: 'Se um terremoto A teve magnitude 6 e um terremoto B teve magnitude 8, a energia liberada pelo terremoto B superou a do terremoto A por um fator de:',
      options: [
        { id: 'A', text: '2 vezes' },
        { id: 'B', text: '100 vezes' },
        { id: 'C', text: '1.000 vezes' },
        { id: 'D', text: '10.000 vezes' }
      ],
      correctOption: 'C',
      explanation: 'ΔM = 8 - 6 = 2. Da fórmula: ΔM = (2/3)·log(E_B / E_A) ⇒ 2 = (2/3)·log(razão) ⇒ log(razão) = 3 ⇒ razão = 10³ = 1.000 vezes.',
      teacherTip: 'A escala Richter mede energia com fator multiplicador exponencial: cada 2 graus na escala equivalem a 10³ = 1.000 vezes mais energia!',
      trapAlert: 'A escala Richter não é linear; aumentar 2 graus não significa aumentar 2 vezes.'
    },
    {
      id: 'uni-q16',
      number: 16,
      subject: 'Geografia',
      topic: 'Climatologia / Fenômeno El Niño e La Niña',
      statement: 'O fenômeno do El Niño consiste no aquecimento anômalo das águas superficiais do Oceano Pacífico Equatorial. No Brasil, seus impactos climáticos típicos provocam:',
      options: [
        { id: 'A', text: 'Secas severas no semiárido do Nordeste e chuvas volumosas acima da média na Região Sul.' },
        { id: 'B', text: 'Nevascas contínuas em toda a Região Sudeste durante o verão.' },
        { id: 'C', text: 'Inundações permanentes no sertão nordestino e seca extrema nos pampas gaúchos.' },
        { id: 'D', text: 'Resfriamento generalizado de todas as bacias hidrográficas amazônicas.' }
      ],
      correctOption: 'A',
      explanation: 'O El Niño altera a circulação atmosférica de Walker, intensificando as chuvas no Sul do Brasil e bloqueando frentes frias no Nordeste e norte da Amazônia, causando secas severas nessas últimas.',
      teacherTip: 'La Niña faz o efeito oposto: seca no Sul e mais chuvas no Nordeste e Norte.',
      trapAlert: 'Não inverta os efeitos regionais do El Niño.'
    },
    {
      id: 'uni-q17',
      number: 17,
      subject: 'Física',
      topic: 'Eletrostática / Campo e Potencial Elétrico',
      contextText: 'No interior de um condutor metálico oco em equilíbrio eletrostático (gaiola de Faraday):',
      statement: 'O campo elétrico interno e o potencial elétrico são, respectivamente:',
      options: [
        { id: 'A', text: 'Campo elétrico nulo (E = 0) e potencial elétrico constante e igual ao da superfície.' },
        { id: 'B', text: 'Campo elétrico máximo e potencial elétrico nulo.' },
        { id: 'C', text: 'Ambos crescem linearmente com a distância ao centro.' },
        { id: 'D', text: 'Infinitos em virtude do acúmulo de prótons livres.' }
      ],
      correctOption: 'A',
      explanation: 'Pelo teorema de Gauss e blindagem eletrostática (Gaiola de Faraday), as cargas livres repelem-se mutuamente distribuindo-se apenas na superfície externa. No interior, o campo elétrico resultante é rigorosamente zero (E = 0), o que torna o potencial elétrico constante em todo o volume interno.',
      teacherTip: 'É por isso que em tempestades de raios é seguro permanecer dentro de um carro com lataria de metal.',
      trapAlert: 'Campo elétrico é nulo, mas o POTENCIAL elétrico NÃO é necessariamente zero; ele é constante!'
    },
    {
      id: 'uni-q18',
      number: 18,
      subject: 'Biologia',
      topic: 'Ecologia / Sucessão Ecológica Primária e Secundária',
      contextText: 'Após a erupção de um vulcão na ilha de Krakatoa, a rocha estéril foi inicialmente colonizada por liquens e musgos (espécies pioneiras).',
      statement: 'Ao longo do tempo ecológico, à medida que a sucessão ecológica atinge o estágio clímax:',
      options: [
        { id: 'A', text: 'A biodiversidade e a biomassa total diminuem até zero.' },
        { id: 'B', text: 'A produtividade primária líquida (PPL) tende ao equilíbrio dinâmico, com aumento da complexidade das teias tróficas e da estabilidade do ecossistema.' },
        { id: 'C', text: 'As cadeias alimentares se tornam mais simples e vulneráveis a pragas.' },
        { id: 'D', text: 'As árvores de grande porte são substituídas por algas microscópicas.' }
      ],
      correctOption: 'B',
      explanation: 'No clímax ecológico, a biomassa atinge o máximo, as teias tróficas alcançam alta complexidade e a respiração total do ecossistema se iguala à fotossíntese bruta (PPL ≈ 0).',
      teacherTip: 'Espécies pioneiras (liquens) modificam o substrato mineral criando o primeiro solo para que plantas maiores possam se fixar.',
      trapAlert: 'A produtividade líquida no clímax tende a zero porque a comunidade consome quase tudo o que produz.'
    },
    {
      id: 'uni-q19',
      number: 19,
      subject: 'Química',
      topic: 'Radioatividade / Meia-Vida (Tempo de Meia-Vida)',
      contextText: 'O isótopo radioativo iodo-131, utilizado no tratamento de câncer de tireoide, possui tempo de meia-vida de 8 dias.',
      statement: 'Partindo-se de uma amostra inicial de 40 mg desse radioisótopo, a massa que ainda restará sem decair após 24 dias será de:',
      options: [
        { id: 'A', text: '2,5 mg' },
        { id: 'B', text: '5,0 mg' },
        { id: 'C', text: '10,0 mg' },
        { id: 'D', text: '20,0 mg' }
      ],
      correctOption: 'B',
      explanation: 'Em 24 dias passaram-se exatamente 3 meias-vidas (24 / 8 = 3 períodos). Início: 40 mg. 1ª meia-vida (8 dias): 20 mg. 2ª meia-vida (16 dias): 10 mg. 3ª meia-vida (24 dias): 5 mg.',
      teacherTip: 'Massa final = M_inicial / 2^n. n = 3 meias-vidas. 40 / 2³ = 40 / 8 = 5 mg.',
      trapAlert: 'Divida por 2 a cada ciclo, não subtraia valores fixos!'
    },
    {
      id: 'uni-q20',
      number: 20,
      subject: 'Língua Portuguesa',
      topic: 'Coesão Referencial / Anáfora e Catáfora',
      statement: 'Na frase “O segredo do sucesso nos exames vestibulares é este: constância e disciplina diária”, o pronome demonstrativo “este” foi empregado com valor:',
      options: [
        { id: 'A', text: 'Catafórico, antecipando uma informação que ainda será explicitada na sequência do texto.' },
        { id: 'B', text: 'Anafórico, retomando um elemento já mencionado anteriormente no parágrafo.' },
        { id: 'C', text: 'Dêitico espacial exclusivo, apontando para um objeto físico próximo do leitor.' },
        { id: 'D', text: 'Temporal arcaico, referindo-se ao século passado.' }
      ],
      correctOption: 'A',
      explanation: 'Catáfora é a figura de coesão em que o termo refere-se para a frente (antecipa o que vem depois dos dois-pontos: "constância e disciplina"). Usa-se "este / isto" para catáfora, e "esse / isso" para anáfora (o que já foi dito).',
      teacherTip: 'Dica do professor: EsTe (com T) aponta para o que vem a seguir. EsSe (com S) aponta para o que foi Supracitado (já dito).',
      trapAlert: 'Não confunda catáfora (olhar para frente) com anáfora (olhar para trás no texto).'
    }
  ]
};
