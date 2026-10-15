import { Exam } from '@/types/quiz';

export const enccejaExam: Exam = {
  id: 'encceja-certificacao-nacional',
  slug: 'encceja',
  title: 'ENCCEJA - Exame Nacional para Certificação de Jovens e Adultos',
  subtitle: 'Certificação Oficial do Ensino Fundamental e Ensino Médio',
  category: 'encceja',
  level: 'Certificações',
  questionCount: 20,
  recommendedMinutes: 50,
  banca: 'INEP / Ministério da Educação',
  badge: 'Diploma Oficial MEC',
  description: 'Simulado completo padrão ENCCEJA com questões práticas de aplicação no cotidiano, trabalho e cidadania. Obtenha seu certificado oficial de conclusão do Ensino Médio ou Fundamental.',
  tags: ['ENCCEJA', 'INEP', 'Certificação', 'Ensino Médio', 'EJA', 'Cidadania'],
  questions: [
    {
      id: 'enc-q1',
      number: 1,
      subject: 'Língua Portuguesa',
      topic: 'Leitura de Contratos e Direitos do Consumidor',
      contextText: '“O consumidor tem o prazo improrrogável de até 7 dias corridos, a contar do ato de recebimento do produto, para exercer o direito de arrependimento em compras realizadas pela internet ou telefone.” (Código de Defesa do Consumidor)',
      statement: 'De acordo com o texto legal, um cidadão que comprou um celular pela internet e se arrependeu:',
      options: [
        { id: 'A', text: 'Não pode devolver o produto em nenhuma hipótese após abrir a caixa.' },
        { id: 'B', text: 'Pode desistir da compra em até 7 dias e receber a devolução integral dos valores pagos.' },
        { id: 'C', text: 'Deve pagar uma multa de 50% para a loja se devolver o aparelho.' },
        { id: 'D', text: 'Só pode trocar se o produto apresentar defeito irreparável de fabricação.' }
      ],
      correctOption: 'B',
      explanation: 'O Artigo 49 do CDC garante o "direito de arrependimento" no prazo de 7 dias para compras fora do estabelecimento comercial (internet, telefone ou catálogo), com devolução total do dinheiro sem necessidade de justificativa.',
      teacherTip: 'O ENCCEJA valoriza competências para a vida cidadã e relações cotidianas de trabalho e consumo.',
      trapAlert: 'O direito de arrependimento de 7 dias não exige defeito no produto.'
    },
    {
      id: 'enc-q2',
      number: 2,
      subject: 'Matemática',
      topic: 'Cálculo de Consumo de Energia Elétrica',
      contextText: 'Um aquecedor elétrico com potência de 1.500 W (1,5 kW) fica ligado 2 horas por dia durante 30 dias no mês. O custo do kWh cobrado pela concessionária de energia é de R$ 0,80.',
      statement: 'Qual é o valor mensal em reais acrescentado à conta de luz pelo uso desse aquecedor?',
      options: [
        { id: 'A', text: 'R$ 48,00' },
        { id: 'B', text: 'R$ 72,00' },
        { id: 'C', text: 'R$ 90,00' },
        { id: 'D', text: 'R$ 120,00' }
      ],
      correctOption: 'B',
      explanation: 'Tempo total no mês: 2 h/dia × 30 dias = 60 horas. Consumo em kWh: Energia = Potência × Tempo = 1,5 kW × 60 h = 90 kWh. Custo em reais: 90 kWh × R$ 0,80 = R$ 72,00.',
      teacherTip: 'Energia (kWh) = Potência em kW × tempo em horas.',
      trapAlert: 'Converta Watts para kiloWatts dividindo por 1.000: 1.500 W = 1,5 kW.'
    },
    {
      id: 'enc-q3',
      number: 3,
      subject: 'Ciências da Natureza',
      topic: 'Saneamento Básico e Saúde Pública',
      contextText: 'A proliferação de doenças de veiculação hídrica, como leptospirose, cólera e hepatite A, está diretamente associada à falta de redes de coleta de esgoto e enchentes urbanas.',
      statement: 'A medida sanitária pública mais eficaz para interromper o ciclo dessas infecções é:',
      options: [
        { id: 'A', text: 'A ampliação de estações de tratamento de esgoto e fornecimento universal de água potável encanada.' },
        { id: 'B', text: 'O uso diário de repelentes corporais pelos moradores.' },
        { id: 'C', text: 'A proibição de saídas noturnas em bairros com córregos.' },
        { id: 'D', text: 'A pintura em cal das paredes externas das residências.' }
      ],
      correctOption: 'A',
      explanation: 'O saneamento básico (coleta e tratamento de esgoto, drenagem pluvial e distribuição de água tratada) é a barreira sanitária primária que impede a contaminação fecal e de urina de ratos na água consumida.',
      teacherTip: 'A cada R$ 1,00 investido em saneamento básico, economizam-se cerca de R$ 4,00 no sistema de saúde pública.',
      trapAlert: 'Repelente protege contra mosquitos (dengue), não contra doenças de transmissão hídrica por esgoto.'
    },
    {
      id: 'enc-q4',
      number: 4,
      subject: 'Ciências Humanas',
      topic: 'Direitos Trabalhistas / Carteira de Trabalho e Previdência',
      statement: 'No Brasil, o registro formal na Carteira de Trabalho e Previdência Social (CTPS) assegura ao trabalhador benefícios previdenciários e trabalhistas garantidos por lei, tais como:',
      options: [
        { id: 'A', text: '13º salário, férias remuneradas com acréscimo de 1/3 e recolhimento do FGTS.' },
        { id: 'B', text: 'Isenção perpétua de qualquer imposto de renda.' },
        { id: 'C', text: 'Salário dobrado em meses com feriados nacionais.' },
        { id: 'D', text: 'Garantia de que a empresa nunca poderá demiti-lo sob nenhuma condição.' }
      ],
      correctOption: 'A',
      explanation: 'A Consolidação das Leis do Trabalho (CLT) garante 13º salário, férias com adicional de 1/3, FGTS, repouso semanal remunerado e seguro-desemprego em caso de demissão sem justa causa.',
      teacherTip: 'Tema recorrente no Encceja: cidadania, direitos trabalhistas e proteção social.',
      trapAlert: 'O trabalhador pode ser demitido sem justa causa mediante pagamento de aviso prévio e multa de 40% do FGTS.'
    },
    {
      id: 'enc-q5',
      number: 5,
      subject: 'Matemática',
      topic: 'Porcentagem / Juros e Parcelamento',
      contextText: 'Uma televisão custa R$ 1.800,00 à vista. A loja oferece a opção de parcelamento em 10 vezes iguais de R$ 210,00.',
      statement: 'A quantia paga a mais de juros pelo cliente que opta pelo parcelamento é de:',
      options: [
        { id: 'A', text: 'R$ 200,00' },
        { id: 'B', text: 'R$ 300,00' },
        { id: 'C', text: 'R$ 400,00' },
        { id: 'D', text: 'R$ 500,00' }
      ],
      correctOption: 'B',
      explanation: 'Valor total a prazo: 10 parcelas × R$ 210,00 = R$ 2.100,00. Juros pagos a mais: R$ 2.100,00 - R$ 1.800,00 = R$ 300,00.',
      teacherTip: 'Sempre compare o total a prazo com o valor à vista para enxergar o custo real do parcelamento.',
      trapAlert: 'Não calcule porcentagem quando a pergunta pede o valor em reais (R$).'
    },
    {
      id: 'enc-q6',
      number: 6,
      subject: 'Língua Portuguesa',
      topic: 'Gênero Textual / Bula de Medicamento',
      contextText: '“Modo de usar: Tomar 1 comprimido por via oral a cada 8 horas, preferencialmente após as refeições. Não ultrapassar a dose máxima diária de 3 comprimidos.”',
      statement: 'O texto instrucional da bula tem como função comunicativa primordial:',
      options: [
        { id: 'A', text: 'Convencer o paciente a comprar outros produtos do laboratório farmacêutico.' },
        { id: 'B', text: 'Orientar com clareza o uso seguro, a posologia e os limites adequados do medicamento.' },
        { id: 'C', text: 'Narrar uma história ficcional sobre a descoberta da fórmula química.' },
        { id: 'D', text: 'Criticar as políticas governamentais de tabelamento de preços de remédios.' }
      ],
      correctOption: 'B',
      explanation: 'Bulas são textos prescritivos/injuntivos que visam instruir o paciente sobre a administração correta, evitando superdosagem e efeitos adversos graves.',
      teacherTip: 'Textos instrucionais (bulas, manuais de montagem, receitas) utilizam verbos no imperativo ou infinitivo.',
      trapAlert: 'A bula é informativa e de segurança médica, sem caráter comercial ou publicitário.'
    },
    {
      id: 'enc-q7',
      number: 7,
      subject: 'Ciências da Natureza',
      topic: 'Nutrição e Rotulagem de Alimentos / Calorias e Sódio',
      contextText: 'Na tabela nutricional de um pacote de salgadinho ultraprocessado, uma porção de 50g contém 600 mg de sódio, o que representa 30% da recomendação máxima diária para um adulto saudável.',
      statement: 'O consumo excessivo e continuado de alimentos com alto teor de sódio é um dos principais fatores de risco para o desenvolvimento de:',
      options: [
        { id: 'A', text: 'Hipertensão arterial (pressão alta) e doenças cardiovasculares.' },
        { id: 'B', text: 'Miopia infantil congênita.' },
        { id: 'C', text: 'Anemia ferropriva aguda.' },
        { id: 'D', text: 'Escorbuto por deficiência de vitamina C.' }
      ],
      correctOption: 'A',
      explanation: 'O sódio em excesso retém água no leito vascular, elevando a volemia sanguínea e aumentando a pressão nas paredes das artérias, sobrecarregando o coração e os rins.',
      teacherTip: 'A OMS recomenda consumo máximo diário de 2.000 mg (2 g) de sódio (cerca de 5 g de sal de cozinha).',
      trapAlert: 'Anemia é falta de ferro; escorbuto é falta de vitamina C.'
    },
    {
      id: 'enc-q8',
      number: 8,
      subject: 'Matemática',
      topic: 'Medidas de Tempo e Conversão de Horas',
      statement: 'Uma linha de ônibus interestadual inicia sua viagem às 08h45 e chega ao destino às 13h15 do mesmo dia. A duração total dessa viagem foi de:',
      options: [
        { id: 'A', text: '4 horas e 15 minutos' },
        { id: 'B', text: '4 horas e 30 minutos' },
        { id: 'C', text: '4 horas e 45 minutos' },
        { id: 'D', text: '5 horas cravadas' }
      ],
      correctOption: 'B',
      explanation: 'Das 08h45 até as 09h00 são 15 minutos. Das 09h00 até as 13h00 são 4 horas. Das 13h00 até as 13h15 são mais 15 minutos. Duração total: 4 horas + 15 min + 15 min = 4 horas e 30 minutos.',
      teacherTip: 'Complete a hora cheia mais próxima (09h00) para facilitar o cálculo mental.',
      trapAlert: 'Subtrair direto 13,15 - 8,45 pode induzir ao erro, porque 1 hora tem 60 minutos e não 100!'
    },
    {
      id: 'enc-q9',
      number: 9,
      subject: 'Ciências Humanas',
      topic: 'Meio Ambiente e Reciclagem',
      statement: 'A coleta seletiva e a reciclagem de materiais descartados no lixo doméstico (vidro, papel, plástico e metal) proporcionam como benefício ambiental direto:',
      options: [
        { id: 'A', text: 'A ampliação imediata da vida útil de aterros sanitários e a redução na extração de matérias-primas virgens da natureza.' },
        { id: 'B', text: 'O encerramento automático do ciclo da água no planeta.' },
        { id: 'C', text: 'A dispensa do tratamento da água em mananciais urbanos.' },
        { id: 'D', text: 'O fim da necessidade de reflorestamento em áreas agrícolas.' }
      ],
      correctOption: 'A',
      explanation: 'Reciclar diminui o volume de rejeitos enviados a aterros, evita que plásticos e metais saturem o solo e poupa energia e recursos naturais (como bauxita para alumínio e petróleo para plásticos).',
      teacherTip: 'Os 3 Rs da sustentabilidade: Reduzir, Reutilizar e Reciclar.',
      trapAlert: 'Reciclar é fundamental, mas reduzir o consumo de descartáveis é o passo mais nobre.'
    },
    {
      id: 'enc-q10',
      number: 10,
      subject: 'Língua Portuguesa',
      topic: 'Adequação Linguística / Registro Formal versus Informal',
      contextText: '“E aí, mano, beleza? Passa lá na minha goma pra gente bater um rango e trocar uma ideia!”',
      statement: 'O registro de linguagem empregado no texto caracteriza-se por ser:',
      options: [
        { id: 'A', text: 'Norma culta formal adequada para uma ata de audiência judicial.' },
        { id: 'B', text: 'Linguagem coloquial e informal, rica em gírias urbanas e adequada para conversas descontraídas entre amigos próximos.' },
        { id: 'C', text: 'Linguagem técnica científica da área médica.' },
        { id: 'D', text: 'Linguagem arcaica do português quinhentista colonial.' }
      ],
      correctOption: 'B',
      explanation: 'Gírias como "mano", "goma", "bater um rango" e "trocar uma ideia" são marcas de oralidade informal, naturais entre amigos íntimos mas inadequadas em contextos corporativos ou acadêmicos.',
      teacherTip: 'No Encceja, a gramática é avaliada sob o conceito de ADEQUAÇÃO à situação de comunicação.',
      trapAlert: 'Gíria não é "errada"; ela é adequada ou inadequada conforme o interlocutor e o local.'
    },
    {
      id: 'enc-q11',
      number: 11,
      subject: 'Matemática',
      topic: 'Cálculo de Área de Piso e Reforma',
      contextText: 'Dona Maria quer colocar piso cerâmico na cozinha de sua casa, que tem formato retangular de 4 metros de comprimento por 3 metros de largura.',
      statement: 'Quantos metros quadrados de piso ela precisará comprar no mínimo para cobrir todo o chão da cozinha?',
      options: [
        { id: 'A', text: '7 m²' },
        { id: 'B', text: '12 m²' },
        { id: 'C', text: '14 m²' },
        { id: 'D', text: '24 m²' }
      ],
      correctOption: 'B',
      explanation: 'Área do retângulo = comprimento × largura: 4 m × 3 m = 12 m².',
      teacherTip: 'Área = multiplicar lado por lado. Perímetro = somar o contorno.',
      trapAlert: '7 m² seria somar 4 + 3; 14 m² seria o perímetro do cômodo.'
    },
    {
      id: 'enc-q12',
      number: 12,
      subject: 'Ciências da Natureza',
      topic: 'Dengue e Prevenção Domiciliar',
      statement: 'Para evitar a proliferação do mosquito da dengue (Aedes aegypti) nas residências, o cuidado mais importante que todo morador deve tomar é:',
      options: [
        { id: 'A', text: 'Manter caixas d\'água bem fechadas e eliminar qualquer recipiente com água parada e limpa em quintais.' },
        { id: 'B', text: 'Deixar torneiras sempre pingando nos tanques.' },
        { id: 'C', text: 'Lavar os quintais com óleo de cozinha usado.' },
        { id: 'D', text: 'Manter pratos de vasos de plantas sempre cheios de água sem areia.' }
      ],
      correctOption: 'A',
      explanation: 'O mosquito fêmea deposita seus ovos na parede de recipientes com água limpa e parada (pneus, garrafas, pratos de plantas, calhas e caixas d\'água destampadas).',
      teacherTip: 'Colocar areia nos pratos de plantas até a borda evita o acúmulo de lâmina d\'água.',
      trapAlert: 'Água parada é o criadouro perfeito para a larva do mosquito.'
    },
    {
      id: 'enc-q13',
      number: 13,
      subject: 'Ciências Humanas',
      topic: 'Organização Municipal / Funções de Prefeito e Vereador',
      statement: 'Na esfera municipal, o chefe do Poder Executivo responsável por administrar os serviços públicos da cidade (creches, postos de saúde, asfalto e coleta de lixo) é o:',
      options: [
        { id: 'A', text: 'Prefeito Municipal' },
        { id: 'B', text: 'Vereador' },
        { id: 'C', text: 'Deputado Federal' },
        { id: 'D', text: 'Governador' }
      ],
      correctOption: 'A',
      explanation: 'O Prefeito é o chefe do Poder Executivo no município. Os Vereadores compõem a Câmara Municipal (Poder Legislativo), com a função de criar leis e fiscalizar os atos do prefeito.',
      teacherTip: 'Executivo Municipal = Prefeito. Legislativo Municipal = Vereador.',
      trapAlert: 'Vereador não executa obras nem contrata médicos; vereador cria leis e fiscaliza o prefeito.'
    },
    {
      id: 'enc-q14',
      number: 14,
      subject: 'Matemática',
      topic: 'Média de Notas e Aprovação',
      contextText: 'Para obter aprovação em um curso técnico, o estudante precisa atingir média igual ou superior a 6,0. Jorge tirou 5,0 na primeira prova e 8,0 na segunda prova.',
      statement: 'A média obtida por Jorge e sua situação final no curso foram:',
      options: [
        { id: 'A', text: 'Média 6,0 - Aprovado' },
        { id: 'B', text: 'Média 6,5 - Aprovado' },
        { id: 'C', text: 'Média 5,5 - Reprovado' },
        { id: 'D', text: 'Média 7,0 - Aprovado' }
      ],
      correctOption: 'B',
      explanation: 'Média = (5,0 + 8,0) / 2 = 13,0 / 2 = 6,5. Como 6,5 é estritamente maior que 6,0, Jorge foi devidamente aprovado.',
      teacherTip: 'Soma as notas e divide pela quantidade de avaliações.',
      trapAlert: '13 dividido por 2 dá 6,5 (não 6,0).'
    },
    {
      id: 'enc-q15',
      number: 15,
      subject: 'Língua Portuguesa',
      topic: 'Interpretação de Gráficos e Tabelas de Preços',
      contextText: 'Uma feira livre anuncia os seguintes preços: Tomate: R$ 6,00/kg; Batata: R$ 4,00/kg; Cebola: R$ 5,00/kg.',
      statement: 'Uma cliente que comprou 2 kg de tomate, 3 kg de batata e 1 kg de cebola pagou no total:',
      options: [
        { id: 'A', text: 'R$ 25,00' },
        { id: 'B', text: 'R$ 29,00' },
        { id: 'C', text: 'R$ 31,00' },
        { id: 'D', text: 'R$ 35,00' }
      ],
      correctOption: 'B',
      explanation: 'Tomate: 2 × 6,00 = R$ 12,00. Batata: 3 × 4,00 = R$ 12,00. Cebola: 1 × 5,00 = R$ 5,00. Total gasto: 12 + 12 + 5 = R$ 29,00.',
      teacherTip: 'Multiplique o preço unitário pela quantidade de quilos antes de somar tudo.',
      trapAlert: 'Some com atenção: 12 + 12 = 24; 24 + 5 = 29.'
    },
    {
      id: 'enc-q16',
      number: 16,
      subject: 'Ciências da Natureza',
      topic: 'Mudanças de Estado Físico da Água',
      statement: 'Quando colocamos roupas molhadas no varal sob sol e vento, a água contida no tecido passa gradualmente do estado líquido para o gasoso por meio do processo de:',
      options: [
        { id: 'A', text: 'Condensação' },
        { id: 'B', text: 'Solidificação' },
        { id: 'C', text: 'Evaporação' },
        { id: 'D', text: 'Fusão' }
      ],
      correctOption: 'C',
      explanation: 'A evaporação é a vaporização lenta e espontânea que ocorre na superfície do líquido a qualquer temperatura, secando as roupas.',
      teacherTip: 'Vaporização pode ser: Evaporação (lenta, no varal), Ebulição (rápida e turbulenta, panela fervendo) ou Calefação (instantânea, água caindo em chapa quente).',
      trapAlert: 'Condensação é o processo inverso (vapor virando líquido, como gotas na tampa da panela).'
    },
    {
      id: 'enc-q17',
      number: 17,
      subject: 'Ciências Humanas',
      topic: 'Voto e Cidadania na Democracia',
      statement: 'No Brasil atual, de acordo com a Constituição de 1988, o alistamento eleitoral e o voto são facultativos para:',
      options: [
        { id: 'A', text: 'Jovens de 16 e 17 anos, idosos com mais de 70 anos e analfabetos.' },
        { id: 'B', text: 'Apenas os servidores públicos federais.' },
        { id: 'C', text: 'Todos os cidadãos com idade entre 18 e 65 anos.' },
        { id: 'D', text: 'Apenas militares da ativa.' }
      ],
      correctOption: 'A',
      explanation: 'O voto é obrigatório para os brasileiros maiores de 18 e menores de 70 anos. O voto é facultativo para os analfabetos, para os maiores de 70 anos e para os jovens de 16 e 17 anos.',
      teacherTip: 'CF/88 Art. 14: facultativo para 16-17 anos, +70 anos e analfabetos.',
      trapAlert: 'Aos 18 anos completos o voto torna-se estritamente obrigatório.'
    },
    {
      id: 'enc-q18',
      number: 18,
      subject: 'Matemática',
      topic: 'Razão e Combustível (Rendimento Veicular)',
      contextText: 'Um carro popular faz 14 quilômetros com 1 litro de gasolina na rodovia.',
      statement: 'Quantos litros de gasolina serão necessários para realizar uma viagem de 420 quilômetros por essa mesma estrada?',
      options: [
        { id: 'A', text: '25 litros' },
        { id: 'B', text: '30 litros' },
        { id: 'C', text: '35 litros' },
        { id: 'D', text: '40 litros' }
      ],
      correctOption: 'B',
      explanation: 'Consumo = Distância / Rendimento: 420 km / 14 km/L = 30 litros.',
      teacherTip: '42 dividido por 14 dá 3 exatos. Adicionando o zero: 30 litros.',
      trapAlert: 'Divida a distância total pelo rendimento por litro.'
    },
    {
      id: 'enc-q19',
      number: 19,
      subject: 'Língua Portuguesa',
      topic: 'Campanha de Conscientização no Trânsito',
      contextText: '“Se beber, não dirija. A vida é o seu bem mais precioso. Use o cinto de segurança e preserve quem você ama.”',
      statement: 'A intenção primordial da mensagem do anúncio institucional é:',
      options: [
        { id: 'A', text: 'Divulgar marcas de bebidas alcoólicas artesanais.' },
        { id: 'B', text: 'Conscientizar motoristas sobre a responsabilidade e prudência para prevenir acidentes fatais no trânsito.' },
        { id: 'C', text: 'Promover a venda de veículos automotores blindados.' },
        { id: 'D', text: 'Criticar os serviços de táxi e transporte por aplicativo.' }
      ],
      correctOption: 'B',
      explanation: 'Campanhas de trânsito buscam educar a sociedade e reduzir a violência viária associada à embriaguez ao volante e negligência com equipamentos de segurança.',
      teacherTip: 'Textos de utilidade pública focam no bem-estar coletivo e na preservação da vida.',
      trapAlert: 'O texto tem propósito educativo e social, não comercial.'
    },
    {
      id: 'enc-q20',
      number: 20,
      subject: 'Matemática',
      topic: 'Orçamento Doméstico e Salário Líquido',
      contextText: 'Um trabalhador recebe um salário bruto de R$ 2.400,00 por mês. Em seu holerite constam descontos de R$ 190,00 de INSS e R$ 144,00 de vale-transporte.',
      statement: 'O salário líquido recebido em conta bancária por esse trabalhador é de:',
      options: [
        { id: 'A', text: 'R$ 2.066,00' },
        { id: 'B', text: 'R$ 2.110,00' },
        { id: 'C', text: 'R$ 2.166,00' },
        { id: 'D', text: 'R$ 2.210,00' }
      ],
      correctOption: 'A',
      explanation: 'Total dos descontos: 190 + 144 = R$ 334,00. Salário Líquido = Salário Bruto - Descontos = 2.400,00 - 334,00 = R$ 2.066,00.',
      teacherTip: 'Salário Bruto = sem descontos. Salário Líquido = o que realmente cai na conta após deduções legais.',
      trapAlert: 'Some todos os descontos primeiro (190 + 144 = 334) antes de subtrair do bruto.'
    }
  ]
};
