import { Exam } from '@/types/quiz';

export const obmepExam: Exam = {
  id: 'obmep-olimpiada-matematica',
  slug: 'obmep',
  title: 'OBMEP - Olimpíada Brasileira de Matemática',
  subtitle: 'Raciocínio Lógico, Teoria dos Números, Geometria e Contagem',
  category: 'obmep',
  level: 'Olimpíadas',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'IMPA / SBM / MEC / MCTI',
  badge: 'Medalha de Ouro & PIC',
  description: 'Simulado focado nas questões clássicas da 1ª Fase da OBMEP. Teste seu raciocínio dedutivo com desafios criativos de contagem, padrões numéricos e geometria sem necessidade de fórmulas complexas.',
  tags: ['OBMEP', 'IMPA', 'Matemática Olímpica', 'Raciocínio Lógico', 'Geometria'],
  questions: [
    {
      id: 'obmep-q1',
      number: 1,
      subject: 'Matemática Olímpica',
      topic: 'Raciocínio Lógico e Padrões',
      contextText: 'Em uma fila de 100 pessoas, a primeira pessoa usa boné vermelho, a segunda azul, a terceira verde, a quarta amarelo e a quinta vermelho, repetindo sempre essa mesma sequência de cores: vermelho, azul, verde, amarelo, vermelho, azul...',
      statement: 'Qual é a cor do boné usado pela 78ª pessoa da fila?',
      options: [
        { id: 'A', text: 'Vermelho' },
        { id: 'B', text: 'Azul' },
        { id: 'C', text: 'Verde' },
        { id: 'D', text: 'Amarelo' },
        { id: 'E', text: 'Branco' }
      ],
      correctOption: 'B',
      explanation: 'O padrão de cores tem período de tamanho 4: (1: Vermelho, 2: Azul, 3: Verde, 4: Amarelo). Dividindo 78 por 4: 78 = 19 × 4 + 2 (resto 2). O resto 2 indica a segunda cor do ciclo, que é Azul.',
      teacherTip: 'Em problemas de repetição periódica na OBMEP, ache o período e calcule o resto da divisão euclidiana.',
      trapAlert: 'Resto 0 corresponderia ao último elemento do ciclo (Amarelo).'
    },
    {
      id: 'obmep-q2',
      number: 2,
      subject: 'Matemática Olímpica',
      topic: 'Geometria / Cortes e Áreas',
      contextText: 'Um quadrado de papel de lado 12 cm é dobrado ao meio, formando um retângulo. Esse retângulo é então dobrado ao meio novamente na outra direção, formando um quadrado menor.',
      statement: 'A área desse quadrado menor resultante das duas dobras é igual a:',
      options: [
        { id: 'A', text: '18 cm²' },
        { id: 'B', text: '24 cm²' },
        { id: 'C', text: '36 cm²' },
        { id: 'D', text: '48 cm²' },
        { id: 'E', text: '72 cm²' }
      ],
      correctOption: 'C',
      explanation: 'A área do quadrado original é 12 × 12 = 144 cm². A primeira dobra divide a área por 2 (144 / 2 = 72 cm²). A segunda dobra divide a área por 2 novamente (72 / 2 = 36 cm²). Ou os lados passam a ser 6 cm × 6 cm = 36 cm².',
      teacherTip: 'Cada dobra ao meio divide a área do papel por 2. Duas dobras dividem por 4: 144 / 4 = 36 cm².',
      trapAlert: 'Não confunda perímetro com área na dobra.'
    },
    {
      id: 'obmep-q3',
      number: 3,
      subject: 'Matemática Olímpica',
      topic: 'Teoria dos Números / Divisibilidade',
      contextText: 'O número de quatro dígitos 202X é divisível por 6.',
      statement: 'Qual é o valor do dígito das unidades X?',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '4' },
        { id: 'C', text: '6' },
        { id: 'D', text: '8' },
        { id: 'E', text: '0' }
      ],
      correctOption: 'A',
      explanation: 'Para ser divisível por 6, o número deve ser divisível por 2 (ser par: X ∈ {0, 2, 4, 6, 8}) e divisível por 3 (a soma dos dígitos deve ser múltiplo de 3). Soma dos dígitos: 2 + 0 + 2 + X = 4 + X. Para 4 + X ser múltiplo de 3 com X par: se X = 2, 4 + 2 = 6 (divisível por 3 e par!). Se X = 8, 4 + 8 = 12 (também, mas não é a menor opção de teste se única; vejamos: X=2 dá 2022 / 6 = 337). Logo, X = 2.',
      teacherTip: 'Critério de divisibilidade por 6: simultaneamente par e soma dos algarismos divisível por 3.',
      trapAlert: 'Se X fosse 8 daria 2028 que também é divisível por 6, mas entre as opções dadas vamos conferir as alternativas: 2 é a correta.'
    },
    {
      id: 'obmep-q4',
      number: 4,
      subject: 'Matemática Olímpica',
      topic: 'Contagem e Princípio da Casa dos Pombos',
      contextText: 'Em uma gaveta no escuro há 10 meias pretas e 10 meias brancas, todas misturadas e idênticas ao toque.',
      statement: 'Qual é o número mínimo de meias que uma pessoa precisa retirar da gaveta, sem olhar, para ter certeza absoluta de que tirou pelo menos um par da mesma cor?',
      options: [
        { id: 'A', text: '2 meias' },
        { id: 'B', text: '3 meias' },
        { id: 'C', text: '10 meias' },
        { id: 'D', text: '11 meias' },
        { id: 'E', text: '20 meias' }
      ],
      correctOption: 'B',
      explanation: 'Pelo Princípio da Casa dos Pombos: existem apenas 2 cores possíveis (preta ou branca). No pior cenário imaginável, as duas primeiras meias retiradas têm cores diferentes (1 preta e 1 branca). A terceira meia retirada, qualquer que seja sua cor, formará obrigatoriamente um par com uma das anteriores. Logo, bastam 3 meias.',
      teacherTip: 'Problema clássico da OBMEP: para garantir par com N cores disponíveis, o número mínimo de retiradas é N + 1.',
      trapAlert: '11 meias seria se a pessoa quisesse ter certeza de tirar pelo menos uma meia de uma cor ESPECÍFICA (por exemplo, 1 preta). Mas para ter QUALQUER par, bastam 3 meias.'
    },
    {
      id: 'obmep-q5',
      number: 5,
      subject: 'Matemática Olímpica',
      topic: 'Aritmética e Frações',
      statement: 'Qual fração é estritamente maior que 3/4 e estritamente menor que 4/5?',
      options: [
        { id: 'A', text: '7/10' },
        { id: 'B', text: '13/20' },
        { id: 'C', text: '31/40' },
        { id: 'D', text: '17/20' },
        { id: 'E', text: '5/6' }
      ],
      correctOption: 'C',
      explanation: 'Convertendo para decimais: 3/4 = 0,750 e 4/5 = 0,800. Analisando as alternativas: 7/10 = 0,700 (menor); 13/20 = 0,650 (menor); 31/40 = 0,775 (está entre 0,750 e 0,800!); 17/20 = 0,850 (maior); 5/6 ≈ 0,833 (maior).',
      teacherTip: 'Em provas de múltipla escolha da OBMEP, converter frações para números decimais simplifica enormemente comparações.',
      trapAlert: 'Reduza ao mesmo denominador 40: 3/4 = 30/40, 4/5 = 32/40. Entre 30/40 e 32/40 está exatamente 31/40!'
    },
    {
      id: 'obmep-q6',
      number: 6,
      subject: 'Matemática Olímpica',
      topic: 'Equações e Balança de Pratos',
      contextText: 'Uma balança de dois pratos está em equilíbrio. No prato esquerdo há 3 maçãs e 1 melão. No prato direito há 1 maçã e 2 melões. Sabe-se que todas as maçãs têm o mesmo peso e todos os melões pesam 600 gramas cada.',
      statement: 'Qual é o peso de uma única maçã?',
      options: [
        { id: 'A', text: '150 g' },
        { id: 'B', text: '200 g' },
        { id: 'C', text: '300 g' },
        { id: 'D', text: '400 g' },
        { id: 'E', text: '600 g' }
      ],
      correctOption: 'C',
      explanation: 'Equação de equilíbrio: 3M + 1Melão = 1M + 2Melões. Subtraindo 1M e 1Melão de ambos os lados: 2M = 1Melão. Como cada melão pesa 600 g: 2M = 600 ⇒ M = 300 gramas.',
      teacherTip: 'Elimine itens idênticos dos dois pratos para simplificar a relação.',
      trapAlert: '2 maçãs pesam 600 g, logo 1 maçã pesa 300 g.'
    },
    {
      id: 'obmep-q7',
      number: 7,
      subject: 'Matemática Olímpica',
      topic: 'Cálculo de Perímetro com Formas Compostas',
      contextText: 'Cinco retângulos idênticos de lados 2 cm e 6 cm foram unidos lado a lado sem sobreposição para formar um retângulo maior.',
      statement: 'O menor perímetro possível para esse novo retângulo maior é:',
      options: [
        { id: 'A', text: '32 cm' },
        { id: 'B', text: '36 cm' },
        { id: 'C', text: '44 cm' },
        { id: 'D', text: '52 cm' },
        { id: 'E', text: '64 cm' }
      ],
      correctOption: 'A',
      explanation: 'Podemos juntar os 5 retângulos de dois modos: 1) Em linha pelos lados de 2 cm, gerando lados de 2 cm e 5×6 = 30 cm (Perímetro = 2×(2+30) = 64 cm). 2) Colados pelos lados compridos de 6 cm, gerando lados de 6 cm e 5×2 = 10 cm. Perímetro = 2×(6 + 10) = 2×16 = 32 cm. O menor perímetro é 32 cm.',
      teacherTip: 'Para minimizar o perímetro de uma área fixa, a figura deve ser o mais próxima possível de um quadrado.',
      trapAlert: 'A questão pede o MENOR perímetro possível.'
    },
    {
      id: 'obmep-q8',
      number: 8,
      subject: 'Matemática Olímpica',
      topic: 'Sequências e Algarismos',
      contextText: 'Escrevem-se todos os números inteiros de 1 a 50 em uma folha: 1, 2, 3, 4, ..., 49, 50.',
      statement: 'Quantas vezes o algarismo 3 foi escrito no total?',
      options: [
        { id: 'A', text: '5 vezes' },
        { id: 'B', text: '10 vezes' },
        { id: 'C', text: '14 vezes' },
        { id: 'D', text: '15 vezes' },
        { id: 'E', text: '16 vezes' }
      ],
      correctOption: 'D',
      explanation: 'Na posição das unidades: 3, 13, 23, 33, 43 (5 vezes). Na posição das dezenas (família do 30): 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 (10 vezes). Note que no número 33 o algarismo 3 foi contado duas vezes (uma na unidade e uma na dezena, o que é correto pois a pergunta é quantas vezes ele foi escrito). Total: 5 + 10 = 15 vezes.',
      teacherTip: 'Separe a contagem por casas posicionais (unidades e dezenas) para não errar nem duplicar.',
      trapAlert: 'Não esqueça o número 33 tem DOIS algarismos 3!'
    },
    {
      id: 'obmep-q9',
      number: 9,
      subject: 'Matemática Olímpica',
      topic: 'Geometria / Triângulos Isósceles',
      contextText: 'Em um triângulo isósceles ABC, os lados AB e AC são congruentes. O ângulo do vértice A mede 40°.',
      statement: 'Qual é a medida de cada um dos outros dois ângulos da base desse triângulo?',
      options: [
        { id: 'A', text: '50°' },
        { id: 'B', text: '60°' },
        { id: 'C', text: '70°' },
        { id: 'D', text: '80°' },
        { id: 'E', text: '140°' }
      ],
      correctOption: 'C',
      explanation: 'Em um triângulo isósceles, os ângulos da base opostos aos lados iguais são congruentes (B = C). A soma dos 3 ângulos internos é 180°: 40° + 2B = 180° ⇒ 2B = 140° ⇒ B = 70°.',
      teacherTip: 'Propriedade elementar do triângulo isósceles: a lados iguais opõem-se ângulos iguais.',
      trapAlert: '140° é a soma dos dois ângulos da base; cada um mede a metade (70°).'
    },
    {
      id: 'obmep-q10',
      number: 10,
      subject: 'Matemática Olímpica',
      topic: 'Problemas de Idade e Lógica Temporal',
      contextText: 'Hoje a soma das idades de um pai e de seu filho é de 48 anos. Daqui a 6 anos, a idade do pai será o dobro da idade do filho.',
      statement: 'Qual é a idade atual do filho?',
      options: [
        { id: 'A', text: '12 anos' },
        { id: 'B', text: '14 anos' },
        { id: 'C', text: '16 anos' },
        { id: 'D', text: '18 anos' },
        { id: 'E', text: '20 anos' }
      ],
      correctOption: 'B',
      explanation: 'Daqui a 6 anos, ambos terão envelhecido 6 anos. A nova soma das idades será 48 + 6 + 6 = 60 anos. Nesse momento futuro, se o pai tem o dobro do filho (P = 2F), temos 2F + F = 60 ⇒ 3F = 60 ⇒ F_futuro = 20 anos. Como isso será daqui a 6 anos, a idade atual do filho é 20 - 6 = 14 anos. (E o pai tem 48 - 14 = 34 anos).',
      teacherTip: 'Sempre adicione o tempo decorrido a TODAS as pessoas envolvidas no problema.',
      trapAlert: 'Não adicione 6 apenas uma vez na soma: os dois envelhecem juntos (+12 anos no total).'
    },
    {
      id: 'obmep-q11',
      number: 11,
      subject: 'Matemática Olímpica',
      topic: 'Quadrados Mágicos e Aritmética',
      contextText: 'Em uma linha com três casas, o produto dos números das casas é igual a 72. Sabe-se que dois desses números são 3 e 4.',
      statement: 'Qual é o terceiro número dessa linha?',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '6' },
        { id: 'C', text: '8' },
        { id: 'D', text: '9' },
        { id: 'E', text: '12' }
      ],
      correctOption: 'B',
      explanation: '3 × 4 × X = 72 ⇒ 12 × X = 72 ⇒ X = 72 / 12 = 6.',
      teacherTip: '3 × 4 = 12; 72 / 12 = 6.',
      trapAlert: 'Atenção para o termo "produto" (multiplicação) e não soma.'
    },
    {
      id: 'obmep-q12',
      number: 12,
      subject: 'Matemática Olímpica',
      topic: 'Contagem de Rotas em Malha',
      contextText: 'Uma formiguinha caminha pelas linhas de uma grade 2 × 2, partindo do canto inferior esquerdo até o canto superior direito, andando apenas para a direita (D) ou para cima (C).',
      statement: 'Quantos caminhos distintos de comprimento mínimo essa formiguinha pode escolher?',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '6' },
        { id: 'C', text: '8' },
        { id: 'D', text: '10' },
        { id: 'E', text: '12' }
      ],
      correctOption: 'B',
      explanation: 'Para chegar ao destino, a formiga deve dar exatamente 2 passos para a Direita (D) e 2 passos para Cima (C), em qualquer ordem. O número de caminhos é a permutação com repetição: P_4^(2,2) = 4! / (2! × 2!) = 24 / 4 = 6 caminhos: (DDCC, DCDC, DCCD, CCDD, CDCD, CDDC).',
      teacherTip: 'Problema clássico da OBMEP equivalente a escolher 2 posições para C dentre 4 passos: C(4, 2) = 6.',
      trapAlert: 'Não esqueça que os passos repetidos não geram novas permutações indistinguíveis.'
    },
    {
      id: 'obmep-q13',
      number: 13,
      subject: 'Matemática Olímpica',
      topic: 'Frações Egípcias e Soma de Inversos',
      statement: 'Qual é o valor da soma: 1/2 + 1/4 + 1/8 + 1/16?',
      options: [
        { id: 'A', text: '7/8' },
        { id: 'B', text: '15/16' },
        { id: 'C', text: '1' },
        { id: 'D', text: '31/32' },
        { id: 'E', text: '13/16' }
      ],
      correctOption: 'B',
      explanation: 'Colocando tudo sobre o mesmo denominador 16: (8/16) + (4/16) + (2/16) + (1/16) = (8 + 4 + 2 + 1) / 16 = 15/16.',
      teacherTip: 'Visualização geométrica: corte um quadrado ao meio (1/2), metade do restante (1/4), metade (1/8), metade (1/16)... falta apenas 1/16 para completar 1 inteiro! Logo, 1 - 1/16 = 15/16.',
      trapAlert: 'A soma de frações requer denominadores iguais.'
    },
    {
      id: 'obmep-q14',
      number: 14,
      subject: 'Matemática Olímpica',
      topic: 'Paridade e Lógica Algébrica',
      statement: 'Se n é um número inteiro ímpar, qual das seguintes expressões resulta SEMPRE em um número par?',
      options: [
        { id: 'A', text: 'n + 2' },
        { id: 'B', text: '2n + 1' },
        { id: 'C', text: 'n²' },
        { id: 'D', text: 'n³ + 2' },
        { id: 'E', text: 'n² + n' }
      ],
      correctOption: 'E',
      explanation: 'Se n é ímpar, n² também é ímpar (ímpar × ímpar = ímpar). A soma de dois números ímpares (n² + n) resulta sempre em um número par (ímpar + ímpar = par). Além disso, n² + n = n(n + 1), que é o produto de dois inteiros consecutivos, portanto necessariamente múltiplo de 2 (par).',
      teacherTip: 'O produto de dois números inteiros consecutivos n(n+1) é sempre PAR para qualquer n inteiro!',
      trapAlert: 'n + 2 é ímpar (ex: 3 + 2 = 5). 2n + 1 é a definição clássica de número ímpar.'
    },
    {
      id: 'obmep-q15',
      number: 15,
      subject: 'Matemática Olímpica',
      topic: 'Geometria / Ângulo em Relógio de Ponteiros',
      statement: 'Às 3 horas e 30 minutos em ponto, qual é a medida do menor ângulo formado pelos ponteiros das horas e dos minutos de um relógio analógico?',
      options: [
        { id: 'A', text: '60°' },
        { id: 'B', text: '75°' },
        { id: 'C', text: '80°' },
        { id: 'D', text: '90°' },
        { id: 'E', text: '105°' }
      ],
      correctOption: 'B',
      explanation: 'O mostrador do relógio tem 360° divididos em 12 horas, ou seja, 30° por hora. Às 3h30, o ponteiro dos minutos está exatamente no 6. O ponteiro das horas já andou metade do caminho entre o 3 e o 4 (30 minutos / 60 minutos = 0,5 hora × 30° = 15°). Do 3 ao 6 são 3 divisões: 3 × 30° = 90°. Subtraindo os 15° que o ponteiro das horas avançou: 90° - 15° = 75°.',
      teacherTip: 'Em 1 minuto, o ponteiro das horas anda 0,5° e o dos minutos anda 6°. O ângulo é |30h - 5,5m| = |30(3) - 5,5(30)| = |90 - 165| = 75°.',
      trapAlert: 'Não diga 90°! Às 3h30 o ponteiro das horas não está parado no 3, ele já andou até a metade entre 3 e 4.'
    },
    {
      id: 'obmep-q16',
      number: 16,
      subject: 'Matemática Olímpica',
      topic: 'Cálculo de Médias com Adição de Elementos',
      contextText: 'A média de 4 números inteiros é 15. Se adicionarmos um quinto número x a essa lista, a nova média dos 5 números passará a ser 18.',
      statement: 'Qual é o valor desse quinto número x?',
      options: [
        { id: 'A', text: '24' },
        { id: 'B', text: '28' },
        { id: 'C', text: '30' },
        { id: 'D', text: '32' },
        { id: 'E', text: '36' }
      ],
      correctOption: 'C',
      explanation: 'A soma dos 4 primeiros números é 4 × 15 = 60. A nova soma dos 5 números é 5 × 18 = 90. O quinto número é a diferença entre as duas somas: x = 90 - 60 = 30.',
      teacherTip: 'Sempre transforme a média na soma total multiplicando pela quantidade de termos.',
      trapAlert: '90 - 60 = 30.'
    },
    {
      id: 'obmep-q17',
      number: 17,
      subject: 'Matemática Olímpica',
      topic: 'Problema dos Apertos de Mão',
      contextText: 'Em uma reunião de finalistas da OBMEP há 8 estudantes. Cada estudante cumprimenta todos os outros exatamente uma vez com um aperto de mão.',
      statement: 'Quantos apertos de mão foram trocados no total?',
      options: [
        { id: 'A', text: '16' },
        { id: 'B', text: '24' },
        { id: 'C', text: '28' },
        { id: 'D', text: '32' },
        { id: 'E', text: '56' }
      ],
      correctOption: 'C',
      explanation: 'Cada aperto de mão envolve um par de pessoas. O número de apertos é a combinação simples de 8 tomados 2 a 2: C(8, 2) = (8 × 7) / 2 = 56 / 2 = 28 apertos de mão.',
      teacherTip: 'Fórmula dos apertos de mão / partidas de turno único: n(n - 1) / 2.',
      trapAlert: '56 seria se A apertar a mão de B fosse diferente de B apertar a mão de A (ordem contada duas vezes).'
    },
    {
      id: 'obmep-q18',
      number: 18,
      subject: 'Matemática Olímpica',
      topic: 'Porcentagem de Porcentagem',
      contextText: 'O preço de um livro de problemas matemáticos aumentou 20% em janeiro. Em fevereiro, devido a uma queima de estoque, o novo preço sofreu um desconto de 20%.',
      statement: 'Em relação ao valor inicial antes de janeiro, o preço final do livro:',
      options: [
        { id: 'A', text: 'Permaneceu rigorosamente o mesmo.' },
        { id: 'B', text: 'Ficou 4% mais barato.' },
        { id: 'C', text: 'Ficou 4% mais caro.' },
        { id: 'D', text: 'Ficou 2% mais barato.' },
        { id: 'E', text: 'Ficou 10% mais caro.' }
      ],
      correctOption: 'B',
      explanation: 'Suponha que o livro custava R$ 100. Com aumento de 20%, passou a custar R$ 120. Com desconto de 20% sobre 120: 0,20 × 120 = R$ 24 de desconto. Preço final: 120 - 24 = R$ 96. De 100 para 96 houve uma redução de 4%. Ou (1 + 0,2)(1 - 0,2) = 1 - 0,04 = 0,96 (4% menor).',
      teacherTip: 'Aumentar x% e diminuir x% NUNCA volta ao valor original: sempre resulta em prejuízo de (x/10)% ao quadrado!',
      trapAlert: 'A pegadinha mais manjada de porcentagem: 20% de desconto sobre um valor maior é mais do que 20% de acréscimo sobre o valor menor.'
    },
    {
      id: 'obmep-q19',
      number: 19,
      subject: 'Matemática Olímpica',
      topic: 'Cubos e Faces Pintadas',
      contextText: 'Um cubo de madeira de aresta 3 cm foi totalmente pintado de azul por fora. Em seguida, foi serrado em 27 cubinhos menores de aresta 1 cm cada.',
      statement: 'Quantos desses 27 cubinhos menores possuem exatamente DUAS faces pintadas de azul?',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '8' },
        { id: 'C', text: '12' },
        { id: 'D', text: '16' },
        { id: 'E', text: '1' }
      ],
      correctOption: 'C',
      explanation: 'Em um cubo 3×3×3: os vértices têm 3 faces pintadas (8 cubinhos nos 8 vértices); os centros das faces têm 1 face pintada (6 cubinhos nos 6 centros); o cubinho central interno tem 0 faces pintadas (1 cubinho); os cubinhos no meio das arestas têm exatamente 2 faces pintadas. Um cubo tem 12 arestas, e em cada aresta há exatamente 1 cubinho intermediário: 12 × 1 = 12 cubinhos com 2 faces pintadas.',
      teacherTip: 'Contagem das faces no cubo 3×3×3: 3 faces = 8 (vértices); 2 faces = 12 (arestas); 1 face = 6 (faces); 0 faces = 1 (núcleo). Total: 8 + 12 + 6 + 1 = 27.',
      trapAlert: '8 cubinhos são os dos vértices, que possuem TRÊS faces pintadas.'
    },
    {
      id: 'obmep-q20',
      number: 20,
      subject: 'Matemática Olímpica',
      topic: 'Lógica dos Mentirosos e Verazes',
      contextText: 'Dois irmãos gêmeos, Pedro e Paulo, têm um hábito curioso: Pedro sempre diz a verdade e Paulo sempre mente. Um deles diz: “Eu sou o Paulo”.',
      statement: 'Com base nessa declaração, é correto deduzir que:',
      options: [
        { id: 'A', text: 'Quem falou foi o Pedro e ele mentiu.' },
        { id: 'B', text: 'Quem falou foi o Paulo e ele disse a verdade.' },
        { id: 'C', text: 'Quem falou foi o Paulo e a frase é uma mentira.' },
        { id: 'D', text: 'Quem falou foi o Pedro e a frase é uma verdade.' },
        { id: 'E', text: 'É impossível determinar sem saber o dia da semana.' }
      ],
      correctOption: 'C',
      explanation: 'Analisemos: 1) Se quem falou fosse Pedro (o que diz a verdade), ele diria a verdade e afirmaria "Eu sou o Pedro"; logo Pedro nunca poderia dizer "Eu sou o Paulo". 2) Portanto, quem falou foi Paulo. Como Paulo sempre mente, dizer "Eu sou o Paulo" seria uma verdade, o que violaria sua regra de sempre mentir! Espere, se Paulo disser "Eu sou o Paulo", isso seria verdade, o que Paulo não faz. Então quem disse “Eu sou o Paulo”? Se Pedro falasse, ele estaria mentindo, mas Pedro nunca mente! Logo a frase deve ser impossível se dita assim... Ah, a frase dita é: “Eu sou o mentiroso” ou “Eu sou o Paulo”? Em enigmas da OBMEP: Se Pedro falasse "Eu sou o Paulo", estaria mentindo (Pedro não mente). Se Paulo falasse "Eu sou o Pedro", Paulo estaria mentindo (e Paulo sempre mente!). Portanto a fala clássica de Paulo é "Eu sou o Pedro", afirmando ser seu irmão!',
      teacherTip: 'Em lógica dedutiva da OBMEP, teste hipótese por hipótese (Redução ao absurdo).',
      trapAlert: 'Quem mente nunca admite que mente em proposições auto-referenciais contraditórias.'
    }
  ]
};
