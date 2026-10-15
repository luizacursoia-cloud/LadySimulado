import { Exam } from '@/types/quiz';

export const enemExam: Exam = {
  id: 'enem-2024-completo',
  slug: 'enem',
  title: 'ENEM - Simulado Oficial Modelo TRI',
  subtitle: 'Linguagens, Humanas, Ciências da Natureza e Matemática',
  category: 'enem',
  level: 'Ensino Médio',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'INEP / MEC',
  badge: 'Metodologia TRI',
  highlight: true,
  description: 'Simulado completo padrão ENEM com Teoria de Resposta ao Item (TRI). Questões contextualizadas de todas as 4 áreas do conhecimento com gabarito comentado passo a passo.',
  tags: ['ENEM', 'TRI', 'Linguagens', 'Matemática', 'Ciências da Natureza', 'Humanas'],
  questions: [
    {
      id: 'enem-q1',
      number: 1,
      subject: 'Ciências Humanas',
      topic: 'Filosofia Moderna',
      difficulty: 'Média',
      contextText: '“A dúvida metódica apresentada por René Descartes estabelece um critério de certeza fundamental para o pensamento ocidental moderno. Ao colocar em suspenso todas as crenças sensoriais, ele busca um fundamento inabalável para a ciência.”',
      statement: 'No contexto do pensamento cartesiano, a estratégia de duvidar sistematicamente de tudo tem como objetivo primordial:',
      options: [
        { id: 'A', text: 'Estabelecer o ceticismo definitivo como a única postura epistemológica viável.' },
        { id: 'B', text: 'Fundamentar um ponto de partida indubitável a partir do qual reconstruir o conhecimento verdadeiro.' },
        { id: 'C', text: 'Rejeitar a razão humana em favor da fé dogmática e da autoridade eclesiástica.' },
        { id: 'D', text: 'Demonstrar que as sensações empíricas são o critério mais fidedigno da verdade objetiva.' },
        { id: 'E', text: 'Comprovar a relatividade absoluta de todas as leis naturais e morais.' }
      ],
      correctOption: 'B',
      explanation: 'Descartes utiliza a dúvida metódica não como um fim (como fariam os céticos radicais), mas como ferramenta heurística para encontrar uma verdade evidente e irrefutável: o "cogito" (Penso, logo existo), que servirá de alicerce para reconstruir a ciência.',
      teacherTip: 'Diferencie sempre o ceticismo pirrônico (dúvida como fim) do método cartesiano (dúvida hiperbólica como meio para atingir a certeza).',
      trapAlert: 'A alternativa A confunde dúvida metódica temporária com ceticismo niilista/definitivo.'
    },
    {
      id: 'enem-q2',
      number: 2,
      subject: 'Linguagens e Códigos',
      topic: 'Funções da Linguagem',
      contextText: '“Fique atento aos sintomas da dengue! Elimine a água parada dos pratos de plantas e calhas. Projeta a sua família agora mesmo ligando para o Disque-Saúde.”',
      statement: 'O texto publicitário institucional emprega predominantemente a função de linguagem classificada como:',
      options: [
        { id: 'A', text: 'Metalinguística, pois explica o próprio código linguístico utilizado.' },
        { id: 'B', text: 'Fática, pois apenas testa o canal de comunicação entre os interlocutores.' },
        { id: 'C', text: 'Conativa ou apelativa, caracterizada pelo uso de verbos no imperativo para persuadir o leitor.' },
        { id: 'D', text: 'Emotiva, expressando predominantemente as emoções particulares do emissor.' },
        { id: 'E', text: 'Poética, focando na sonoridade e na estrutura formal dos versos.' }
      ],
      correctOption: 'C',
      explanation: 'A função conativa (ou apelativa) tem como foco o receptor. O uso de verbos no imperativo (“Fique”, “Elimine”, “Proteja”) e o apelo direto buscam influenciar o comportamento do público-alvo.',
      teacherTip: 'Campanhas de conscientização e propagandas quase sempre priorizam a função conativa/apelativa aliada à função referencial.',
      trapAlert: 'Não confunda com a função referencial, embora haja informação, o objetivo mestre do texto é a ordem/apelo de ação preventiva.'
    },
    {
      id: 'enem-q3',
      number: 3,
      subject: 'Matemática',
      topic: 'Razão, Proporção e Escala',
      contextText: 'Um mapa turístico confeccionado na escala 1 : 50.000 mostra uma trilha ecológica cujo comprimento gráfico no papel é de 14 cm.',
      statement: 'Qual é o comprimento real dessa trilha ecológica na natureza, em quilômetros?',
      options: [
        { id: 'A', text: '0,7 km' },
        { id: 'B', text: '7,0 km' },
        { id: 'C', text: '70 km' },
        { id: 'D', text: '700 km' },
        { id: 'E', text: '3,5 km' }
      ],
      correctOption: 'B',
      explanation: 'Na escala 1 : 50.000, cada 1 cm no mapa corresponde a 50.000 cm reais. Multiplicando: 14 cm × 50.000 = 700.000 cm. Como 1 m = 100 cm, temos 7.000 m. Como 1 km = 1.000 m, 7.000 m = 7 km.',
      teacherTip: 'Macete para transformar de cm para km: basta cortar 5 zeros (ou deslocar a vírgula 5 casas para a esquerda). 700.000 cm -> 7 km.',
      trapAlert: 'Cuidado com a conversão de unidades no ENEM: cm -> m -> km.'
    },
    {
      id: 'enem-q4',
      number: 4,
      subject: 'Ciências da Natureza',
      topic: 'Genética Mendeliana',
      contextText: 'Em cobaias, a pelagem preta é condicionada por um alelo dominante B e a pelagem marrom pelo alelo recessivo b. O cruzamento entre dois indivíduos heterozigotos (Bb × Bb) gerou uma ninhada numerosa.',
      statement: 'A probabilidade esperada de nascer um filhote com pelagem marrom é de:',
      options: [
        { id: 'A', text: '0%' },
        { id: 'B', text: '25%' },
        { id: 'C', text: '50%' },
        { id: 'D', text: '75%' },
        { id: 'E', text: '100%' }
      ],
      correctOption: 'B',
      explanation: 'No cruzamento de dois heterozigotos (Bb × Bb), a proporção genotípica é 1 BB : 2 Bb : 1 bb. A pelagem marrom é expressa unicamente pelo homozigoto recessivo (bb), ou seja, 1 chance em 4 = 1/4 = 25%.',
      teacherTip: 'Lembre-se da clássica proporção fenotípica mendeliana para monoibridismo com dominância completa: 3 dominantes (75%) para 1 recessivo (25%).',
      trapAlert: '75% seria para a pelagem preta (dominante), preste atenção à cor pedida no comando final.'
    },
    {
      id: 'enem-q5',
      number: 5,
      subject: 'Ciências da Natureza',
      topic: 'Eletrodinâmica / Circuitos',
      contextText: 'Um chuveiro elétrico opera sob uma diferença de potencial de 220 V e dissipa uma potência elétrica de 4.400 W na posição "Inverno".',
      statement: 'A intensidade da corrente elétrica que percorre o resistor do chuveiro e o valor de sua resistência ôhmica são, respectivamente:',
      options: [
        { id: 'A', text: '10 A e 22 Ω' },
        { id: 'B', text: '20 A e 11 Ω' },
        { id: 'C', text: '20 A e 22 Ω' },
        { id: 'D', text: '40 A e 5,5 Ω' },
        { id: 'E', text: '15 A e 33 Ω' }
      ],
      correctOption: 'B',
      explanation: 'Pela fórmula da potência elétrica: P = U × i ⇒ 4400 = 220 × i ⇒ i = 4400 / 220 = 20 A. Pela 1ª Lei de Ohm: U = R × i ⇒ 220 = R × 20 ⇒ R = 220 / 20 = 11 Ω.',
      teacherTip: 'As fórmulas P = U · i e P = U² / R são as mais cobradas da física no ENEM em questões de consumo elétrico residencial.',
      trapAlert: 'Atenção aos números fáceis: dividir 4400 por 220 dá exatamente 20 A.'
    },
    {
      id: 'enem-q6',
      number: 6,
      subject: 'Ciências Humanas',
      topic: 'Sociologia do Trabalho',
      contextText: 'A modernidade tardia e a revolução digital transformaram as relações laborais, introduzindo a gestão algorítmica e o modelo de remuneração por tarefa via plataformas digitais.',
      statement: 'Esse fenômeno contemporâneo, frequentemente denominado "uberização", tem como uma de suas principais consequências sociais:',
      options: [
        { id: 'A', text: 'A ampliação imediata das garantias previdenciárias e licenças remuneradas aos prestadores de serviços.' },
        { id: 'B', text: 'A transferência dos custos operacionais e dos riscos da atividade econômica para o próprio trabalhador autônomo.' },
        { id: 'C', text: 'O fim definitivo de qualquer subordinação técnica ou controle sobre a rotina produtiva.' },
        { id: 'D', text: 'A equiparação salarial automática entre trabalhadores de diferentes setores econômicos.' },
        { id: 'E', text: 'A estatização compulsória dos meios de distribuição tecnológica em escala global.' }
      ],
      correctOption: 'B',
      explanation: 'A uberização flexibiliza os vínculos trabalhistas formais, transferindo custos de infraestrutura (veículo, combustível, manutenção, celular) e riscos de acidentes e oscilações de demanda diretamente para a conta do trabalhador.',
      teacherTip: 'Conceito frequente na sociologia do ENEM: flexibilização das relações de trabalho e precariado.',
      trapAlert: 'Embora o trabalhador tenha flexibilidade de horário, o algoritmo mantém forte controle das tarefas e métricas.'
    },
    {
      id: 'enem-q7',
      number: 7,
      subject: 'Linguagens e Códigos',
      topic: 'Modernismo Brasileiro',
      contextText: '“Oswald de Andrade proclamava no Manifesto Antropófago: ‘Só me interessa o que não é meu. Lei do homem. Lei do antropófago’.”',
      statement: 'A metáfora antropofágica concebida pelo modernismo paulista de 1928 defendia:',
      options: [
        { id: 'A', text: 'A rejeição xenófoba completa de qualquer influência cultural estrangeira no Brasil.' },
        { id: 'B', text: 'A assimilação crítica da cultura europeia aliada à sua recriação a partir de elementos da identidade nacional.' },
        { id: 'C', text: 'A cópia servil dos cânones acadêmicos parnasianos franceses.' },
        { id: 'D', text: 'O isolamento da literatura brasileira em relação aos movimentos vanguardistas mundiais.' },
        { id: 'E', text: 'O resgate ingênuo e romântico do indígena como um herói medieval cavaleiresco.' }
      ],
      correctOption: 'B',
      explanation: 'A Antropofagia oswaldiana propõe deglutir a cultura externa dominante (europeia/americana), digeri-la e combiná-la com as raízes brasileiras (indígenas, africanas, populares) para gerar uma arte autêntica e original.',
      teacherTip: 'Não confunda a Antropofagia de Oswald com o nacionalismo ufanista do Verde-Amarelismo.',
      trapAlert: 'Oswald não rejeitava o estrangeiro: ele pregava “comer” o que vem de fora e reinventar.'
    },
    {
      id: 'enem-q8',
      number: 8,
      subject: 'Matemática',
      topic: 'Estatística / Média e Mediana',
      contextText: 'As notas de um estudante em cinco simulados preparatórios foram: 640, 720, 680, 800 e 680.',
      statement: 'A mediana e a moda dessa distribuição de notas são, respectivamente:',
      options: [
        { id: 'A', text: '680 e 680' },
        { id: 'B', text: '704 e 680' },
        { id: 'C', text: '680 e 720' },
        { id: 'D', text: '720 e 680' },
        { id: 'E', text: '700 e 800' }
      ],
      correctOption: 'A',
      explanation: 'Organizando em ordem crescente (Rol): 640, 680, 680, 720, 800. O elemento central (mediana) é o terceiro valor: 680. O valor que mais se repete (moda) é 680.',
      teacherTip: 'Para achar a mediana, NUNCA se esqueça de ordenar os dados antes de pegar o valor do meio!',
      trapAlert: 'A média seria (640+720+680+800+680)/5 = 3520/5 = 704. A questão pediu MEDIANA e MODA.'
    },
    {
      id: 'enem-q9',
      number: 9,
      subject: 'Ciências da Natureza',
      topic: 'Química Orgânica / Funções',
      contextText: 'O ácido acetilsalicílico (AAS), conhecido popularmente como aspirina, possui em sua estrutura química os grupos funcionais carboxila (-COOH) e éster (-COO-).',
      statement: 'A presença do grupo carboxila confere a essa molécula caráter:',
      options: [
        { id: 'A', text: 'Fortemente alcalino, capaz de neutralizar soluções concentradas de hidróxido de sódio.' },
        { id: 'B', text: 'Ácido, podendo doar prótons (H⁺) em meio aquoso.' },
        { id: 'C', text: 'Inerte, tornando a substância insolúvel e não reativa em meios polares.' },
        { id: 'D', text: 'Básico, devido à presença de pares eletrônicos em átomos de nitrogênio inexistentes.' },
        { id: 'E', text: 'Apolar exclusivo, impedindo qualquer interação com solventes oxigenados.' }
      ],
      correctOption: 'B',
      explanation: 'Ácidos carboxílicos contêm o grupo -COOH e liberam íons hidrogênio (H⁺) em solução aquosa por ionização, conferindo caráter ácido com pH inferior a 7.',
      teacherTip: 'No ENEM: carboxila (-COOH) e fenol (anel aromático ligado a -OH) têm caráter ácido; aminas (-NH2) têm caráter básico.',
      trapAlert: 'Atenção aos nomes das funções oxigenadas e nitrogenadas.'
    },
    {
      id: 'enem-q10',
      number: 10,
      subject: 'Ciências Humanas',
      topic: 'Geografia Urbana',
      contextText: 'O crescimento desordenado das metrópoles brasileiras provocou a expansão de loteamentos periféricos desprovidos de saneamento básico, transporte público e equipamentos de saúde.',
      statement: 'O processo socioespacial pelo qual populações de menor renda são empurradas para as margens territoriais das cidades em virtude da especulação imobiliária é denominado:',
      options: [
        { id: 'A', text: 'Gentríficação horizontal' },
        { id: 'B', text: 'Segregação socioespacial' },
        { id: 'C', text: 'Conurbação simétrica' },
        { id: 'D', text: 'Desmetropolização industrial' },
        { id: 'E', text: 'Megalopolização dispersa' }
      ],
      correctOption: 'B',
      explanation: 'A segregação socioespacial é a divisão do espaço urbano refletindo as desigualdades de renda: bairros centrais providos de infraestrutura valorizada vs. periferias precarizadas.',
      teacherTip: 'Gentrificação é o processo inverso no espaço: quando uma área degradada é reformada e encarece, expulsando os moradores pobres originais.',
      trapAlert: 'Conurbação é o encontro físico de duas ou mais cidades vizinhas, não a segregação interna.'
    },
    {
      id: 'enem-q11',
      number: 11,
      subject: 'Ciências da Natureza',
      topic: 'Ecologia / Ciclos Biogeoquímicos',
      contextText: 'O uso excessivo de fertilizantes agrícolas à base de compostos nitrogenados e fosfatados lixiviados para rios e lagos causa proliferação descontrolada de algas na superfície aquática.',
      statement: 'O fenômeno ecológico descrito e a consequência direta para a fauna aquática de peixes são, respectivamente:',
      options: [
        { id: 'A', text: 'Bioacumulação e aumento imediato da oxigenação da água.' },
        { id: 'B', text: 'Eutrofização e mortandade por hipóxia (anóxia) decorrente do consumo de oxigênio por decompositores.' },
        { id: 'C', text: 'Magnificação trófica e aumento da fotossíntese nas profundezas.' },
        { id: 'D', text: 'Inversão térmica aquática e acidificação atmosférica.' },
        { id: 'E', text: 'Salinização e proliferação de esponjas de água doce.' }
      ],
      correctOption: 'B',
      explanation: 'A eutrofização ocorre quando nutrientes em excesso geram um “bloom” de algas. A luz deixa de penetrar, plantas submersas morrem e bactérias decompositoras aeróbias proliferam, esgotando o O2 dissolvido e asfixiando os peixes.',
      teacherTip: 'Eutrofização é questão garantida em Ciências da Natureza no ENEM.',
      trapAlert: 'As algas superficiais até fazem fotossíntese no topo, mas a morte e decomposição no fundo consome todo o oxigênio.'
    },
    {
      id: 'enem-q12',
      number: 12,
      subject: 'Matemática',
      topic: 'Geometria Espacial / Volume de Cilindro',
      contextText: 'Um reservatório de água possui formato de cilindro circular reto com raio da base medindo 2 metros e altura de 5 metros. Adote π = 3,14.',
      statement: 'A capacidade máxima desse reservatório, em litros, é de:',
      options: [
        { id: 'A', text: '31.400 litros' },
        { id: 'B', text: '62.800 litros' },
        { id: 'C', text: '12.560 litros' },
        { id: 'D', text: '6.280 litros' },
        { id: 'E', text: '125.600 litros' }
      ],
      correctOption: 'B',
      explanation: 'Volume do cilindro = π × r² × h = 3,14 × (2)² × 5 = 3,14 × 4 × 5 = 3,14 × 20 = 62,8 m³. Como 1 m³ = 1.000 litros: 62,8 × 1.000 = 62.800 litros.',
      teacherTip: 'Lembre-se sempre: 1 metro cúbico = 1.000 litros; 1 litro = 1 decímetro cúbico.',
      trapAlert: 'Não esqueça de elevar o raio ao quadrado antes de multiplicar pela altura!'
    },
    {
      id: 'enem-q13',
      number: 13,
      subject: 'Ciências Humanas',
      topic: 'História do Brasil / Era Vargas',
      contextText: 'A criação da Consolidação das Leis do Trabalho (CLT) em 1943 e a criação da Companhia Siderúrgica Nacional (CSN) marcaram a atuação do governo Getúlio Vargas.',
      statement: 'Essas iniciativas articulavam duas dimensões centrais do projeto varguista, que eram:',
      options: [
        { id: 'A', text: 'O liberalismo econômico irrestrito e a descentralização federativa das províncias.' },
        { id: 'B', text: 'O corporativismo sindical sob controle estatal e a industrialização nacionalista de base.' },
        { id: 'C', text: 'A privatização acelerada de estatais e a desregulamentação das jornadas laborais.' },
        { id: 'D', text: 'A aliança incondicional com as oligarquias agrárias cafeeiras paulistas derrotadas em 1932.' },
        { id: 'E', text: 'O estímulo à criação de sindicatos anarquistas livres de qualquer fiscalização ministerial.' }
      ],
      correctOption: 'B',
      explanation: 'O Estado varguista caracterizou-se pelo nacional-desenvolvimentismo (indústria pesada de base como siderurgia e petróleo) associado ao corporativismo (concessão de direitos trabalhistas tutelados pelo Ministério do Trabalho para conter conflitos sindicais).',
      teacherTip: 'Vargas concedeu direitos reais (férias, salário mínimo), mas atrelou os sindicatos ao Estado (“peleguismo”).',
      trapAlert: 'Vargas não era liberal: seu modelo era intervencionista e regulador.'
    },
    {
      id: 'enem-q14',
      number: 14,
      subject: 'Linguagens e Códigos',
      topic: 'Variação Linguística',
      contextText: '“A linguagem oral de certas regiões do sertão e do interior preserva marcas arcaicas e concordâncias singulares que cumprem com perfeição a eficácia comunicativa de seus falantes.”',
      statement: 'Sob a perspectiva da sociolinguística contemporânea adotada no ENEM, o preconceito linguístico deve ser combatido porque:',
      options: [
        { id: 'A', text: 'As variantes populares são erradas gramaticalmente, mas devem ser toleradas por caridade.' },
        { id: 'B', text: 'Todas as variedades linguísticas possuem coerência e sistematicidade interna, devendo o padrão culto ser encarado como variante de prestígio e não como única forma legítima.' },
        { id: 'C', text: 'A norma culta deve ser abolida das escolas em definitivo.' },
        { id: 'D', text: 'Apenas a linguagem falada nas capitais do Sudeste obedece a regras de lógica formal.' },
        { id: 'E', text: 'Não existe diferença prática entre registros formais e informais em entrevistas de emprego.' }
      ],
      correctOption: 'B',
      explanation: 'A linguística moderna ensina a adequação e não o "certo vs. errado absoluto". As diferentes variantes possuem regras e lógica própria; o preconceito contra variantes populares é reflexo de desigualdades sociais.',
      teacherTip: 'O ENEM sempre valoriza o respeito à diversidade linguística e o conceito de adequação contextual.',
      trapAlert: 'A norma padrão ainda é necessária para contextos formais, mas não é a única língua correta existente.'
    },
    {
      id: 'enem-q15',
      number: 15,
      subject: 'Matemática',
      topic: 'Função Exponencial / Juros Compostos',
      contextText: 'Uma aplicação financeira rende juros compostos de 10% ao ano sobre o montante acumulado. Um investidor aplicou um capital inicial de R$ 5.000,00.',
      statement: 'O montante final acumulado após 2 anos será de:',
      options: [
        { id: 'A', text: 'R$ 5.500,00' },
        { id: 'B', text: 'R$ 6.000,00' },
        { id: 'C', text: 'R$ 6.050,00' },
        { id: 'D', text: 'R$ 6.100,00' },
        { id: 'E', text: 'R$ 6.250,00' }
      ],
      correctOption: 'C',
      explanation: 'Fórmula de juros compostos: M = C × (1 + i)^t. M = 5000 × (1 + 0,10)² = 5000 × (1,1)² = 5000 × 1,21 = R$ 6.050,00.',
      teacherTip: 'Ano 1: 5000 + 500 = 5500. Ano 2: 5500 + 550 = 6050. Juros sobre juros!',
      trapAlert: 'R$ 6.000,00 seria no regime de juros simples (500 + 500). Nos compostos, rende R$ 50 a mais.'
    },
    {
      id: 'enem-q16',
      number: 16,
      subject: 'Ciências da Natureza',
      topic: 'Física Ondulatória / Efeito Doppler',
      contextText: 'Uma pessoa parada na calçada escuta a sirene de uma ambulância que se aproxima em alta velocidade e, em seguida, se afasta.',
      statement: 'Durante a aproximação, em relação ao som emitido na fonte, a frequência percebida pelo pedestre e o comprimento de onda aparente são, respectivamente:',
      options: [
        { id: 'A', text: 'Mais alta (som mais agudo) e menor comprimento de onda.' },
        { id: 'B', text: 'Mais baixa (som mais grave) e maior comprimento de onda.' },
        { id: 'C', text: 'Inalterada e velocidade de propagação dobrada.' },
        { id: 'D', text: 'Mais baixa e menor frequência.' },
        { id: 'E', text: 'Mais alta com aumento da velocidade do som no ar.' }
      ],
      correctOption: 'A',
      explanation: 'No Efeito Doppler acústico com a fonte em aproximação, as frentes de onda são comprimidas na direção do movimento (menor comprimento de onda aparente), resultando em maior frequência percebida (som mais agudo).',
      teacherTip: 'A velocidade do som no ar permanece constante (depende apenas do meio); o que muda é frequência e comprimento de onda aparentes.',
      trapAlert: 'A velocidade do som NÃO varia pelo movimento da ambulância.'
    },
    {
      id: 'enem-q17',
      number: 17,
      subject: 'Ciências Humanas',
      topic: 'Constituição de 1988 e Cidadania',
      contextText: 'A Constituição Federal de 1988, apelidada de "Constituição Cidadã" por Ulysses Guimarães, representou a redemocratização do país após 21 anos de ditadura militar.',
      statement: 'Um dos maiores avanços sociais consagrados no texto constitucional de 1988 foi:',
      options: [
        { id: 'A', text: 'A criação da censura prévia institucional a veículos jornalísticos.' },
        { id: 'B', text: 'A instituição do Sistema Único de Saúde (SUS), universal e gratuito como dever do Estado.' },
        { id: 'C', text: 'A extinção do direito de voto aos cidadãos analfabetos.' },
        { id: 'D', text: 'A centralização do poder judiciário nas mãos do poder executivo.' },
        { id: 'E', text: 'A proibição definitiva do direito de greve a qualquer categoria profissional.' }
      ],
      correctOption: 'B',
      explanation: 'O Artigo 196 da CF/88 declarou: "A saúde é direito de todos e dever do Estado", garantindo a criação do SUS. Além disso, a CF/88 garantiu o voto aos analfabetos e proibiu a censura.',
      teacherTip: 'O SUS é frequentemente abordado no ENEM tanto em temas de Redação quanto nas questões de Humanas e Biologia.',
      trapAlert: 'O voto do analfabeto passou a ser facultativo em 1988, e não proibido.'
    },
    {
      id: 'enem-q18',
      number: 18,
      subject: 'Ciências da Natureza',
      topic: 'Termodinâmica e Energia Sustentável',
      contextText: 'Painéis solares fotovoltaicos convertem diretamente a radiação eletromagnética solar em energia elétrica, enquanto coletores solares térmicos utilizam essa radiação para aquecimento de fluidos.',
      statement: 'A vantagem ambiental primária da geração de energia fotovoltaica em relação às termelétricas a carvão consiste em:',
      options: [
        { id: 'A', text: 'A não emissão direta de gases de efeito estufa (como CO₂) durante sua operação diária.' },
        { id: 'B', text: 'A independência total de qualquer radiação solar durante a noite.' },
        { id: 'C', text: 'O custo nulo de manutenção e reciclagem de módulos de silício.' },
        { id: 'D', text: 'A ausência de necessidade de inversores de corrente contínua para alternada.' },
        { id: 'E', text: 'A queima limpa de biomassa associada aos semicondutores.' }
      ],
      correctOption: 'A',
      explanation: 'A energia solar fotovoltaica é limpa em sua fase de operação, não dependendo da combustão de combustíveis fósseis e sem emitir dióxido de carbono ou particulados poluentes para a atmosfera.',
      teacherTip: 'Matriz energética limpa vs. renovável é tema carimbado no ENEM.',
      trapAlert: 'Painéis não geram energia à noite, portanto a alternativa B é incorreta.'
    },
    {
      id: 'enem-q19',
      number: 19,
      subject: 'Matemática',
      topic: 'Análise Combinatória',
      contextText: 'Uma comissão científica multidisciplinar deve ser formada escolhendo 3 biólogos dentre 5 disponíveis e 2 químicos dentre 4 disponíveis.',
      statement: 'De quantas maneiras distintas essa comissão pode ser estruturada?',
      options: [
        { id: 'A', text: '20' },
        { id: 'B', text: '60' },
        { id: 'C', text: '120' },
        { id: 'D', text: '24' },
        { id: 'E', text: '30' }
      ],
      correctOption: 'B',
      explanation: 'Para os biólogos: C(5, 3) = 5! / (3! × 2!) = (5 × 4) / 2 = 10 maneiras. Para os químicos: C(4, 2) = 4! / (2! × 2!) = (4 × 3) / 2 = 6 maneiras. Pelo princípio multiplicativo: 10 × 6 = 60 maneiras.',
      teacherTip: 'Como a ordem da escolha dos membros da comissão não altera a equipe, usamos Combinação Simples e não Arranjo.',
      trapAlert: 'Multiplique as combinações de cada grupo; não some.'
    },
    {
      id: 'enem-q20',
      number: 20,
      subject: 'Linguagens e Códigos',
      topic: 'Intertextualidade e Ironia',
      contextText: '“E agora, José? / A festa acabou, / a luz apagou, / o povo sumiu, / a noite esfriou...” (Carlos Drummond de Andrade)',
      statement: 'O célebre poema drummondiano expressa a condição do homem moderno diante do sentimento de:',
      options: [
        { id: 'A', text: 'Triunfo tecnológico e realização plena de todos os desejos materiais.' },
        { id: 'B', text: 'Desamparo, solidão existencial e impasse diante de um mundo fragmentado e desiludido.' },
        { id: 'C', text: 'Comemoração efusiva da boemia carioca dos anos dourados.' },
        { id: 'D', text: 'Confiança inabalável nas instituições políticas contemporâneas.' },
        { id: 'E', text: 'Exaltação da vida campestre em oposição à vida cosmopolita.' }
      ],
      correctOption: 'B',
      explanation: 'O poema "José" retrata a perplexidade, o beco sem saída e o vazio do indivíduo perante o desencantamento do mundo e a crise de sentido da civilização ocidental.',
      teacherTip: 'Drummond e a geração de 30 do Modernismo enfatizam o pessimismo lúcido, a reflexão social e o questionamento existencial.',
      trapAlert: 'O poema é melancólico e reflexivo, longe de qualquer tom de festa ou celebração.'
    }
  ]
};
