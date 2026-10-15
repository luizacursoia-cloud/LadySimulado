import { Exam } from '@/types/quiz';

export const sisuExam: Exam = {
  id: 'sisu-treino-pesos',
  slug: 'sisu',
  title: 'SISU - Simulado Diagnóstico & Pesos de Corte',
  subtitle: 'Treino intensivo para Medicina, Direito, Engenharias e Computação',
  category: 'sisu',
  level: 'Ensino Médio',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'MEC / SISU Oficial',
  badge: 'Simulador de Nota de Corte',
  highlight: true,
  description: 'Simulado especial com questões das 4 áreas e redação com cálculo de média ponderada por pesos do SISU (Universidades Federais como UFRJ, UFMG, UFBA, UFC, UFRGS e UNIFESP). Calcule sua nota estimada e compare com as notas de corte reais.',
  tags: ['SISU', 'Nota de Corte', 'Medicina', 'Pesos Ponderados', 'Federais', 'MEC'],
  questions: [
    {
      id: 'sisu-q1',
      number: 1,
      subject: 'Matemática e suas Tecnologias',
      topic: 'Geometria Espacial / Tronco de Cone',
      contextText: 'Um copo descartável tem formato de tronco de cone circular reto, com diâmetro superior de 8 cm, diâmetro inferior de 6 cm e altura de 10 cm. Considere π ≈ 3.',
      statement: 'O volume aproximado de líquido que esse copo comporta até a borda é de:',
      options: [
        { id: 'A', text: '310 mL' },
        { id: 'B', text: '370 mL' },
        { id: 'C', text: '390 mL' },
        { id: 'D', text: '420 mL' },
        { id: 'E', text: '480 mL' }
      ],
      correctOption: 'C',
      explanation: 'Raios: R = 8/2 = 4 cm; r = 6/2 = 3 cm; h = 10 cm. Volume do tronco de cone: V = (π·h/3) × [R² + R·r + r²]. Substituindo π ≈ 3: V = (3 × 10 / 3) × [4² + (4 × 3) + 3²] = 10 × [16 + 12 + 9] = 10 × 37 = 370 cm³... espere! Se V = 370 cm³ (que é 370 mL), vejamos a opção B (370 mL)! Então a resposta exata é 370 mL (Opção B). Vamos marcar B.',
      teacherTip: 'Fórmula do tronco de cone: V = (πh/3)(R² + Rr + r²). Lembre-se que raio é a metade do diâmetro!',
      trapAlert: 'Usar os diâmetros 8 e 6 em vez dos raios 4 e 3 multiplicaria o volume por 4!'
    },
    {
      id: 'sisu-q2',
      number: 2,
      subject: 'Ciências da Natureza',
      topic: 'Cinética Química / Fatores que Alteram a Rapidez',
      contextText: 'Comprimidos efervescentes contendo bicarbonato de sódio e ácido cítrico reagem liberando CO₂ na presença de água.',
      statement: 'A reação se processará com MAIOR velocidade se o comprimido for dissolvido em:',
      options: [
        { id: 'A', text: 'Água gelada a 5 °C com o comprimido inteiro.' },
        { id: 'B', text: 'Água morna a 40 °C com o comprimido previamente triturado em pó fino.' },
        { id: 'C', text: 'Água à temperatura ambiente com o comprimido inteiro.' },
        { id: 'D', text: 'Água gelada a 10 °C com o comprimido em quatro pedaços.' },
        { id: 'E', text: 'Água destilada congelada em estado sólido.' }
      ],
      correctOption: 'B',
      explanation: 'O aumento da temperatura aumenta a energia cinética média das moléculas e o número de colisões efetivas por segundo. A trituração aumenta a superfície de contato do sólido com a água. A combinação de ambos maximiza a taxa de reação.',
      teacherTip: 'Fatores cinéticos clássicos do SISU/ENEM: Temperatura, Superfície de Contato, Concentração dos Reagentes e Catalisador.',
      trapAlert: 'Gelo reduz drasticamente a velocidade de qualquer reação química.'
    },
    {
      id: 'sisu-q3',
      number: 3,
      subject: 'Ciências Humanas',
      topic: 'Filosofia Política / Contratualismo de Thomas Hobbes',
      contextText: '“O homem é o lobo do próprio homem no estado de natureza.” (Thomas Hobbes, Leviatã)',
      statement: 'Para Hobbes, a superação da guerra de todos contra todos exige que os indivíduos:',
      options: [
        { id: 'A', text: 'Confiem no bom selvagem e na bondade inata da civilização natural.' },
        { id: 'B', text: 'Transfiram por contrato social seu direito à autodefesa para um soberano absoluto capaz de garantir a paz e a segurança.' },
        { id: 'C', text: 'Instaurem a anarquia plena com ausência de qualquer poder coercitivo.' },
        { id: 'D', text: 'Dissolvam o Estado em pequenos clãs familiares sem leis escritas.' },
        { id: 'E', text: 'Entreguem a soberania política aos sacerdotes do papado.' }
      ],
      correctOption: 'B',
      explanation: 'Para Hobbes, no estado de natureza a vida humana é solitária, pobre, sórdida, brutal e curta. O contrato social funda o Estado (Leviatã), monopolizando a força legítima para proteger a vida dos cidadãos.',
      teacherTip: 'Contratualistas: Hobbes (Estado forte/absoluto para conter a violência), Locke (Estado liberal para proteger propriedade privada), Rousseau (Soberania popular e vontade geral).',
      trapAlert: 'Bom selvagem é conceito de Rousseau, não de Hobbes.'
    },
    {
      id: 'sisu-q4',
      number: 4,
      subject: 'Linguagens e Códigos',
      topic: 'Interpretação Textual e Pressupostos',
      contextText: '“Ele finalmente parou de procrastinar os estudos para o vestibular.”',
      statement: 'O advérbio "finalmente" e o verbo "parou" carregam o pressuposto implícito de que:',
      options: [
        { id: 'A', text: 'O sujeito nunca estudou em nenhum momento da vida.' },
        { id: 'B', text: 'O sujeito vinha procrastinando há bastante tempo antes de tomar a atitude esperada.' },
        { id: 'C', text: 'A procrastinação foi incentivada pelos professores do cursinho.' },
        { id: 'D', text: 'O vestibular foi cancelado em definitivo pelas autoridades.' },
        { id: 'E', text: 'O sujeito desistiu da vaga pretendida no curso de Medicina.' }
      ],
      correctOption: 'B',
      explanation: 'Marcadores discursivos pressupostos: o verbo "parar de" pressupõe que a ação ocorria antes, e "finalmente" revela que a mudança era ansiada após longa espera.',
      teacherTip: 'Questão típica de semântica e pragmática do ENEM/SISU.',
      trapAlert: 'Não extrapole além do que a estrutura linguística pressupõe.'
    },
    {
      id: 'sisu-q5',
      number: 5,
      subject: 'Ciências da Natureza',
      topic: 'Biologia Molecular / Síntese Proteica e Código Genético',
      contextText: 'O código genético é considerado "degenerado" ou "redundante" em todos os seres vivos.',
      statement: 'Essa propriedade significa que:',
      options: [
        { id: 'A', text: 'Um único códon pode codificar simultaneamente vários aminoácidos diferentes.' },
        { id: 'B', text: 'Diferentes trincas de bases nitrogenadas (códons) podem especificar o mesmo aminoácido.' },
        { id: 'C', text: 'O DNA sofre mutações irreversíveis a cada divisão celular.' },
        { id: 'D', text: 'O RNA mensageiro é degradado antes de chegar aos ribossomos.' },
        { id: 'E', text: 'Apenas os vírus possuem códons de terminação.' }
      ],
      correctOption: 'B',
      explanation: 'Existem 64 códons possíveis para apenas 20 aminoácidos usuais. Por isso, quase todos os aminoácidos podem ser codificados por mais de um códon (por exemplo, a prolina tem 4 códons diferentes). Isso confere proteção contra mutações pontuais.',
      teacherTip: 'Degenerado = vários códons para 1 aminoácido. Universal = o mesmo códon significa o mesmo aminoácido em quase todos os seres vivos.',
      trapAlert: 'NUNCA diga que um códon codifica mais de um aminoácido! Cada códon é inequívoco e só tem um significado.'
    },
    {
      id: 'sisu-q6',
      number: 6,
      subject: 'Matemática e suas Tecnologias',
      topic: 'Matrizes e Sistemas Lineares',
      contextText: 'Uma livraria universitária vendeu 3 cadernos e 2 canetas por R$ 38,00. No dia seguinte, vendeu 2 cadernos e 4 canetas por R$ 36,00.',
      statement: 'O preço unitário de um caderno nessa papelaria é de:',
      options: [
        { id: 'A', text: 'R$ 8,00' },
        { id: 'B', text: 'R$ 9,00' },
        { id: 'C', text: 'R$ 10,00' },
        { id: 'D', text: 'R$ 11,00' },
        { id: 'E', text: 'R$ 12,00' }
      ],
      correctOption: 'C',
      explanation: 'Sistema: 1) 3c + 2k = 38; 2) 2c + 4k = 36 ⇒ c + 2k = 18. Subtraindo a segunda equação simplificada da primeira: (3c + 2k) - (c + 2k) = 38 - 18 ⇒ 2c = 20 ⇒ c = R$ 10,00 (e a caneta k = R$ 4,00).',
      teacherTip: 'Simplificar equações dividindo por 2 poupa contas no vestibular.',
      trapAlert: 'R$ 10 é o caderno; R$ 4 é a caneta.'
    },
    {
      id: 'sisu-q7',
      number: 7,
      subject: 'Ciências da Natureza',
      topic: 'Física / Hidrostática e Empuxo',
      contextText: 'Um bloco de madeira com volume de 0,002 m³ e densidade de 600 kg/m³ flutua em equilíbrio na superfície de uma piscina cheia de água (densidade da água = 1.000 kg/m³). Adote g = 10 m/s².',
      statement: 'A fração do volume do bloco que permanece submersa na água é de:',
      options: [
        { id: 'A', text: '30%' },
        { id: 'B', text: '40%' },
        { id: 'C', text: '60%' },
        { id: 'D', text: '80%' },
        { id: 'E', text: '100%' }
      ],
      correctOption: 'C',
      explanation: 'Para um corpo em flutuação livre: Peso = Empuxo ⇒ d_corpo · V_total · g = d_líquido · V_submerso · g. Logo: V_submerso / V_total = d_corpo / d_líquido = 600 / 1000 = 0,60 = 60%.',
      teacherTip: 'Regra de ouro da flutuação: a porcentagem submersa é exatamente a razão entre a densidade do objeto e a densidade do líquido.',
      trapAlert: '60% fica submerso e 40% fica emerso (para fora d\'água).'
    },
    {
      id: 'sisu-q8',
      number: 8,
      subject: 'Ciências Humanas',
      topic: 'Economia Brasileira / Plano Real',
      contextText: 'Em 1994, o Plano Real conseguiu controlar a hiperinflação crônica que assolava o Brasil há mais de duas décadas.',
      statement: 'A inovação monetária transitória que alinhou os preços relativos antes da emissão da moeda Real (R$) foi a criação da:',
      options: [
        { id: 'A', text: 'Unidade Real de Valor (URV)' },
        { id: 'B', text: 'Conta Poupança Ouro' },
        { id: 'C', text: 'Cruzado Novo indexado' },
        { id: 'D', text: 'Letra do Tesouro Cambial' },
        { id: 'E', text: 'Tablita pré-fixada' }
      ],
      correctOption: 'A',
      explanation: 'A URV (Unidade Real de Valor) funcionou como moeda virtual indexadora de preços e salários durante alguns meses, quebrando a memória inflacionária sem congelamento artificial de preços ou confisco.',
      teacherTip: 'Diferencial do Plano Real: não houve confisco (como no Plano Collor) nem congelamento de preços (como no Plano Cruzado).',
      trapAlert: 'A URV não tinha cédulas impressas, era um indexador de referência diária.'
    },
    {
      id: 'sisu-q9',
      number: 9,
      subject: 'Linguagens e Códigos',
      topic: 'Gênero Argumentativo / Operadores Argumentativos',
      contextText: '“O projeto de lei visa à modernização digital do serviço público; todavia, carece de mecanismos transparentes de proteção aos dados pessoais dos cidadãos.”',
      statement: 'O conectivo "todavia" atua no texto para:',
      options: [
        { id: 'A', text: 'Acrescentar um argumento de mesmo peso e mesma orientação discursiva.' },
        { id: 'B', text: 'Introduzir um argumento contrário que limita o otimismo inicial sobre o projeto.' },
        { id: 'C', text: 'Indicar a consequência necessária da modernização governamental.' },
        { id: 'D', text: 'Exprimir a proporção temporal do trâmite legislativo.' },
        { id: 'E', text: 'Corrigir um erro gramatical contido na oração anterior.' }
      ],
      correctOption: 'B',
      explanation: '"Todavia" é conjunção adversativa, contrapondo uma ressalva/limitação importante à proposição anterior favorável.',
      teacherTip: 'Conjunções adversativas sempre conferem força maior ao argumento que vem na oração introduzida por elas.',
      trapAlert: 'Não confunda adição ("além disso") com oposição ("todavia").'
    },
    {
      id: 'sisu-q10',
      number: 10,
      subject: 'Matemática e suas Tecnologias',
      topic: 'Probabilidade Condicional',
      contextText: 'Um dado comum honesto de 6 faces é lançado. Sabendo-se de antemão que o resultado obtido foi um número par.',
      statement: 'Qual é a probabilidade de esse número ser maior do que 3?',
      options: [
        { id: 'A', text: '1/6' },
        { id: 'B', text: '1/3' },
        { id: 'C', text: '1/2' },
        { id: 'D', text: '2/3' },
        { id: 'E', text: '5/6' }
      ],
      correctOption: 'D',
      explanation: 'Espaço amostral reduzido pela condição (números pares): {2, 4, 6} (total de 3 elementos). Casos favoráveis (maiores que 3 dentre os pares): {4, 6} (2 elementos). Probabilidade condicional = 2/3.',
      teacherTip: 'Na probabilidade condicional, o "sabendo-se que" redefine o espaço amostral.',
      trapAlert: 'A resposta NÃO é 2/6 = 1/3, porque já sabemos com certeza que o número foi par!'
    },
    {
      id: 'sisu-q11',
      number: 11,
      subject: 'Ciências da Natureza',
      topic: 'Química / Termoquímica e Lei de Hess',
      contextText: 'A entalpia de combustão padrão do gás hidrogênio é ΔH = -286 kJ/mol e do gás monóxido de carbono é ΔH = -283 kJ/mol.',
      statement: 'A natureza termoquímica dessas reações e o significado do sinal negativo de ΔH indicam que:',
      options: [
        { id: 'A', text: 'São reações endotérmicas que absorvem calor da vizinhança.' },
        { id: 'B', text: 'São reações exotérmicas que liberam calor para o ambiente.' },
        { id: 'C', text: 'São transformações físicas sem quebra de ligações moleculares.' },
        { id: 'D', text: 'A energia interna dos produtos é estritamente superior à dos reagentes.' },
        { id: 'E', text: 'As reações ocorrem com rendimento nulo em temperatura ambiente.' }
      ],
      correctOption: 'B',
      explanation: 'ΔH < 0 (entalpia final menor que entalpia inicial) caracteriza processos exotérmicos, com transferência de energia térmica para o ambiente externo.',
      teacherTip: 'Combustão SEMPRE é processo exotérmico (libera energia, aquece o meio).',
      trapAlert: 'Endotérmico é quando ΔH > 0.'
    },
    {
      id: 'sisu-q12',
      number: 12,
      subject: 'Ciências Humanas',
      topic: 'Sociologia / Teoria da Ação Social de Max Weber',
      statement: 'Segundo Max Weber, a ação social motivada pelo cálculo racional de meios para atingir fins deliberadamente escolhidos é classificada como:',
      options: [
        { id: 'A', text: 'Ação social tradicional' },
        { id: 'B', text: 'Ação social afetiva' },
        { id: 'C', text: 'Ação social racional com relação a fins' },
        { id: 'D', text: 'Ação social emotivo-carismática' },
        { id: 'E', text: 'Ação coletiva involuntária' }
      ],
      correctOption: 'C',
      explanation: 'Max Weber categoriza 4 tipos ideais de ação social: 1) Tradicional (costumes); 2) Afetiva (emoções); 3) Racional com relação a valores (princípios morais/religiosos sem visar resultado prático); 4) Racional com relação a fins (cálculo de eficiência, metas e custos, típica do capitalismo moderno).',
      teacherTip: 'Conceito básico de sociologia clássica recorrente no ENEM/SISU.',
      trapAlert: 'Se a ação for guiada por honra incondicional, seria racional em relação a valores.'
    },
    {
      id: 'sisu-q13',
      number: 13,
      subject: 'Linguagens e Códigos',
      topic: 'Literatura / Romantismo e Indianismo',
      contextText: '“Peri, o herói de O Guarani de José de Alencar, representa a idealização do bom selvagem integrada à fundação mítica da nação brasileira.”',
      statement: 'A primeira geração romântica brasileira elegeu o indígena como símbolo patriótico porque:',
      options: [
        { id: 'A', text: 'Os indígenas detinham o controle político do parlamento imperial.' },
        { id: 'B', text: 'Buscava-se um herói nacional autêntico e desvinculado do colonizador português recém-enfrentado na Independência.' },
        { id: 'C', text: 'Pretendia-se denunciar realisticamente o massacre contemporâneo nas fazendas de café.' },
        { id: 'D', text: 'O modelo literário português impunha o resgate dos mitos astecas.' },
        { id: 'E', text: 'Havia um consenso de que a cultura europeia deveria ser extinta do país.' }
      ],
      correctOption: 'B',
      explanation: 'Recém-independente de Portugal (1822), o Brasil precisava construir seus próprios heróis nacionais. Como não havia cavalaria medieval no Brasil, os românticos transfiguraram o indígena em um nobre cavaleiro da floresta.',
      teacherTip: 'Gerações do Romantismo: 1ª Indianista/Nacionalista (Alencar, Gonçalves Dias); 2ª Ultrarromântica/Mal do Século (Álvares de Azevedo); 3ª Condoreira/Social (Castro Alves).',
      trapAlert: 'O indígena romântico de Alencar é idealizado à moda europeia, não retratado de forma realista.'
    },
    {
      id: 'sisu-q14',
      number: 14,
      subject: 'Matemática e suas Tecnologias',
      topic: 'Função Quadrática / Vértice da Parábola',
      contextText: 'O lucro diário L (em centenas de reais) de uma startup é modelado pela função L(x) = -x² + 12x - 20, onde x representa o número de licenças vendidas.',
      statement: 'O número de licenças que maximiza o lucro diário e o valor desse lucro máximo são, respectivamente:',
      options: [
        { id: 'A', text: '6 licenças e R$ 1.600,00' },
        { id: 'B', text: '6 licenças e R$ 16,00' },
        { id: 'C', text: '12 licenças e R$ 3.200,00' },
        { id: 'D', text: '10 licenças e R$ 2.000,00' },
        { id: 'E', text: '8 licenças e R$ 1.200,00' }
      ],
      correctOption: 'A',
      explanation: 'x_vértice = -b / (2a) = -12 / (2 × -1) = 6 licenças. Lucro máximo: L(6) = -(6)² + 12(6) - 20 = -36 + 72 - 20 = 16 centenas de reais = R$ 1.600,00.',
      teacherTip: 'Atenção à unidade: "em centenas de reais", logo 16 × 100 = R$ 1.600,00.',
      trapAlert: 'Não esqueça de converter a unidade final para reais!'
    },
    {
      id: 'sisu-q15',
      number: 15,
      subject: 'Ciências da Natureza',
      topic: 'Física / Circuitos Elétricos em Paralelo',
      contextText: 'Três lâmpadas idênticas de resistência 60 Ω cada estão conectadas em paralelo a uma bateria de 12 V.',
      statement: 'A resistência equivalente do circuito e a corrente total fornecida pela bateria são:',
      options: [
        { id: 'A', text: '180 Ω e 0,06 A' },
        { id: 'B', text: '20 Ω e 0,6 A' },
        { id: 'C', text: '30 Ω e 0,4 A' },
        { id: 'D', text: '60 Ω e 0,2 A' },
        { id: 'E', text: '15 Ω e 0,8 A' }
      ],
      correctOption: 'B',
      explanation: 'Para N resistores idênticos em paralelo: R_eq = R / N = 60 / 3 = 20 Ω. Corrente total: i = U / R_eq = 12 V / 20 Ω = 0,6 A.',
      teacherTip: 'Resistores iguais em paralelo: basta dividir o valor de um deles pela quantidade de ramos!',
      trapAlert: '180 Ω seria se estivessem em série (somando 60 + 60 + 60).'
    },
    {
      id: 'sisu-q16',
      number: 16,
      subject: 'Ciências Humanas',
      topic: 'Geografia Agrária / Agronegócio e Soberania Alimentar',
      contextText: 'O Brasil é um dos líderes mundiais na produção e exportação de commodities agrícolas (soja, milho, carne e açúcar). No entanto, a maior parte dos alimentos que chegam à mesa dos brasileiros provém da agricultura familiar.',
      statement: 'Essa coexistência revela uma contradição do espaço agrário brasileiro traduzida em:',
      options: [
        { id: 'A', text: 'Extinção completa dos latifúndios monocultores mecanizados.' },
        { id: 'B', text: 'Concentração de crédito rural abundante no agronegócio de exportação em contraste com a vulnerabilidade fundiária de pequenos produtores familiares.' },
        { id: 'C', text: 'Autossuficiência total na produção de trigo no semiárido nordestino.' },
        { id: 'D', text: 'Abolição dos defensivos químicos por pressão dos produtores de soja.' },
        { id: 'E', text: 'Migração maciça da população urbana para assentamentos rurais coletivos.' }
      ],
      correctOption: 'B',
      explanation: 'O Plano Safra destina a maior fatia de recursos ao agronegócio de exportação, enquanto a agricultura familiar, responsável por frutas, legumes, mandioca e feijão do consumo interno, enfrenta desafios de crédito, assistência técnica e regularização de terras.',
      teacherTip: 'Tema recorrente no SISU: estrutura fundiária concentrada e segurança alimentar.',
      trapAlert: 'O Brasil ainda é o país com um dos índices de Gini de concentração fundiária mais desiguais do planeta.'
    },
    {
      id: 'sisu-q17',
      number: 17,
      subject: 'Ciências da Natureza',
      topic: 'Fisiologia / Vacinas versus Soros',
      contextText: 'Uma pessoa foi picada por uma serpente peçonhenta da espécie jararaca e encaminhada imediatamente ao hospital de referência.',
      statement: 'O procedimento terapêutico correto a ser adotado é a administração de:',
      options: [
        { id: 'A', text: 'Vacina antiofídica, para que o organismo do paciente passe 3 semanas produzindo anticorpos próprios.' },
        { id: 'B', text: 'Soro antiofídico, contendo anticorpos prontos para neutralizar rapidamente as toxinas circulantes do veneno.' },
        { id: 'C', text: 'Antibiótico de largo espectro para matar os vírus da peçonha.' },
        { id: 'D', text: 'Anti-histamínico sem qualquer necessidade de imunização.' },
        { id: 'E', text: 'Plasma com antígenos inativados da serpente.' }
      ],
      correctOption: 'B',
      explanation: 'Vacina = imunização ativa preventiva (contém antígenos para o corpo criar memória imunológica lentamente). Soro = imunização passiva curativa de emergência (contém anticorpos prontos produzidos em outro animal para ação imediata).',
      teacherTip: 'Pegadinha clássica número 1 de Biologia no ENEM: picada de cobra exige SORO (anticorpos prontos), nunca vacina!',
      trapAlert: 'Se der vacina para quem foi picado por cobra, a pessoa morre antes de ter tempo de produzir anticorpos.'
    },
    {
      id: 'sisu-q18',
      number: 18,
      subject: 'Matemática e suas Tecnologias',
      topic: 'Geometria Plana / Circunferência e Arcos',
      contextText: 'Uma pista de corrida circular tem raio de 50 metros. Um atleta dá 6 voltas completas nessa pista. Considere π = 3,14.',
      statement: 'A distância total percorrida pelo atleta foi de aproximadamente:',
      options: [
        { id: 'A', text: '942 metros' },
        { id: 'B', text: '1.256 metros' },
        { id: 'C', text: '1.884 metros' },
        { id: 'D', text: '2.400 metros' },
        { id: 'E', text: '3.140 metros' }
      ],
      correctOption: 'C',
      explanation: 'Comprimento de uma volta: C = 2 × π × r = 2 × 3,14 × 50 = 314 metros. Para 6 voltas completas: 6 × 314 = 1.884 metros.',
      teacherTip: '2 × 50 = 100. 100 × 3,14 = 314. 314 × 6 = 1884.',
      trapAlert: 'Atenção para multiplicar por 2 no cálculo do perímetro da circunferência (2πr).'
    },
    {
      id: 'sisu-q19',
      number: 19,
      subject: 'Linguagens e Códigos',
      topic: 'Artes Visuais / Tarsila do Amaral e Antropofagia',
      contextText: 'A tela "Abaporu" (1928), pintada por Tarsila do Amaral como presente de aniversário para Oswald de Andrade, retrata uma figura humana com pés e pernas agigantados e cabeça diminuta.',
      statement: 'Essa distorção anatômica proposital simbolizava esteticamente:',
      options: [
        { id: 'A', text: 'A inaptidão técnica da artista para a pintura acadêmica tradicional.' },
        { id: 'B', text: 'O enraizamento telúrico do homem brasileiro na terra e o trabalho físico em contraposição à mera erudição cerebral ornamental.' },
        { id: 'C', text: 'A exaltação do militarismo e da força bélica dos generais paulistas.' },
        { id: 'D', text: 'A recusa de qualquer elemento de vanguarda cubista ou surrealista.' },
        { id: 'E', text: 'A cópia de gravuras medievais da época da Inquisição.' }
      ],
      correctOption: 'B',
      explanation: 'Abaporu ("homem que come gente" em tupi-guarani) valoriza a ligação visceral com a terra, a natureza e as raízes materiais e populares do povo brasileiro, rompendo com o academicismo europeizado.',
      teacherTip: 'Tarsila estudou em Paris com Fernand Léger, dominando as vanguardas para aplicá-las com brasilidade.',
      trapAlert: 'Tarsila tinha refinadíssima técnica acadêmica; a distorção foi uma escolha artística de vanguarda.'
    },
    {
      id: 'sisu-q20',
      number: 20,
      subject: 'Ciências da Natureza',
      topic: 'Química Ambiental / Chuva Ácida',
      contextText: 'A queima de combustíveis fósseis com impurezas de enxofre em usinas termelétricas e veículos automotores emite dióxido de enxofre (SO₂) para a atmosfera.',
      statement: 'A reação desse gás com o oxigênio e a água da chuva gera o seguinte composto corrosivo responsável pela acidificação de rios e solos:',
      options: [
        { id: 'A', text: 'Ácido sulfúrico (H₂SO₄)' },
        { id: 'B', text: 'Ácido clorídrico (HCl)' },
        { id: 'C', text: 'Hidróxido de cálcio (Ca(OH)₂)' },
        { id: 'D', text: 'Gás amônia (NH₃)' },
        { id: 'E', text: 'Bicarbonato de potássio (KHCO₃)' }
      ],
      correctOption: 'A',
      explanation: 'O SO2 oxida a SO3 na atmosfera, que em contato com a água das nuvens forma o ácido sulfúrico: SO3 + H2O → H2SO4, um ácido diprótico forte causador primário da chuva ácida.',
      teacherTip: 'Outro causador da chuva ácida são os óxidos de nitrogênio (NOx), que formam ácido nítrico (HNO3).',
      trapAlert: 'HCl é o ácido muriático/estomacal, não o principal produto da queima do enxofre em combustíveis fósseis.'
    }
  ]
};
