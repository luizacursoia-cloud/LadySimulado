import { Exam } from '@/types/quiz';

export const sarespExam: Exam = {
  id: 'saresp-ensino-sp',
  slug: 'saresp',
  title: 'SARESP - Sistema de Avaliação Escolar de São Paulo',
  subtitle: 'Diagnóstico de Habilidades em Língua Portuguesa e Matemática',
  category: 'saresp',
  level: 'Ensino Fundamental',
  questionCount: 20,
  recommendedMinutes: 50,
  banca: 'Secretaria da Educação do Estado de SP (SEDUC-SP)',
  badge: 'Avaliação Estadual SP',
  description: 'Simulado completo com foco nos descritores da Matriz de Referência do SARESP (Língua Portuguesa e Matemática). Ideal para estudantes do 9º ano do Ensino Fundamental e Ensino Médio.',
  tags: ['SARESP', 'Seduc-SP', 'Descritores', 'Ensino Fundamental', 'Matemática', 'Língua Portuguesa'],
  questions: [
    {
      id: 'saresp-q1',
      number: 1,
      subject: 'Língua Portuguesa',
      topic: 'Identificação da Tese e Ideia Central',
      contextText: '“O consumo consciente não significa apenas comprar produtos ecológicos, mas sim rever a real necessidade de cada aquisição diária, combatendo o desperdício de água, energia e alimentos.”',
      statement: 'O objetivo principal do texto é defender que o consumo consciente:',
      options: [
        { id: 'A', text: 'Restringe-se exclusivamente à compra de artigos etiquetados como verdes.' },
        { id: 'B', text: 'Envolve uma mudança profunda de hábitos e reflexão sobre necessidades reais.' },
        { id: 'C', text: 'Deve ser praticado apenas por grandes indústrias poluidoras.' },
        { id: 'D', text: 'Elimina totalmente a necessidade de consumo de alimentos frescos.' }
      ],
      correctOption: 'B',
      explanation: 'O texto enfatiza que o consumo consciente vai além do rótulo ecológico, exigindo revisão de necessidades diárias e combate ao desperdício generalizado.',
      teacherTip: 'Descritor D7 do SARESP: Identificar a tese ou tema principal de um texto informativo.',
      trapAlert: 'A alternativa A contradiz frontalmente o trecho “não significa apenas comprar produtos ecológicos”.'
    },
    {
      id: 'saresp-q2',
      number: 2,
      subject: 'Matemática',
      topic: 'Operações com Frações e Porcentagem',
      contextText: 'Em uma turma de 40 alunos da rede estadual, 3/5 dos estudantes participam de atividades esportivas no contraturno escolar.',
      statement: 'Quantos alunos dessa turma praticam esportes no contraturno?',
      options: [
        { id: 'A', text: '18 alunos' },
        { id: 'B', text: '20 alunos' },
        { id: 'C', text: '24 alunos' },
        { id: 'D', text: '30 alunos' }
      ],
      correctOption: 'C',
      explanation: 'Para calcular 3/5 de 40: divide-se 40 pelo denominador 5 (40 / 5 = 8) e multiplica-se pelo numerador 3 (8 × 3 = 24). Portanto, 24 alunos.',
      teacherTip: 'Macete rápido: 3/5 equivale a 60%. 60% de 40 = 0,6 × 40 = 24.',
      trapAlert: 'Dividir apenas 40 por 5 dá 8, não se esqueça de multiplicar pelo numerador!'
    },
    {
      id: 'saresp-q3',
      number: 3,
      subject: 'Matemática',
      topic: 'Perímetro e Área de Figuras Planas',
      contextText: 'A quadra poliesportiva de uma escola pública tem formato retangular com 25 metros de comprimento e 15 metros de largura.',
      statement: 'O perímetro e a área dessa quadra são, respectivamente:',
      options: [
        { id: 'A', text: '40 m e 375 m²' },
        { id: 'B', text: '80 m e 375 m²' },
        { id: 'C', text: '80 m e 750 m²' },
        { id: 'D', text: '50 m e 300 m²' }
      ],
      correctOption: 'B',
      explanation: 'Perímetro é a soma dos 4 lados: 25 + 15 + 25 + 15 = 80 m. Área do retângulo é comprimento × largura: 25 × 15 = 375 m².',
      teacherTip: 'Perímetro = contorno (soma de todos os lados). Área = espaço interno preenchido.',
      trapAlert: 'Somar apenas 25 + 15 = 40 é o semiperímetro, não o perímetro total.'
    },
    {
      id: 'saresp-q4',
      number: 4,
      subject: 'Língua Portuguesa',
      topic: 'Sentido Figurado / Conotação',
      contextText: '“O menino tinha um coração de ouro e não guardava mágoa de ninguém.”',
      statement: 'A expressão “coração de ouro” foi empregada em sentido conotativo (figurado) para indicar que o menino era:',
      options: [
        { id: 'A', text: 'Portador de uma prótese metálica rara no peito.' },
        { id: 'B', text: 'Extremamente generoso, nobre e bondoso.' },
        { id: 'C', text: 'Muito rico financeiramente por herança de família.' },
        { id: 'D', text: 'Indiferente aos sentimentos das pessoas ao seu redor.' }
      ],
      correctOption: 'B',
      explanation: 'No sentido figurado, associar o coração ao ouro ressalta a preciosidade das qualidades morais da pessoa: pureza, generosidade e bondade.',
      teacherTip: 'Descritor D18 do SARESP: Identificar o efeito de sentido decorrente do uso da conotação.',
      trapAlert: 'O sentido literal (ouro como metal precioso) não se aplica aqui.'
    },
    {
      id: 'saresp-q5',
      number: 5,
      subject: 'Matemática',
      topic: 'Equação de 1º Grau Simples',
      statement: 'A solução da equação 4x - 18 = 2x + 14 no conjunto dos números reais é:',
      options: [
        { id: 'A', text: 'x = 8' },
        { id: 'B', text: 'x = 12' },
        { id: 'C', text: 'x = 16' },
        { id: 'D', text: 'x = 20' }
      ],
      correctOption: 'C',
      explanation: '4x - 2x = 14 + 18 ⇒ 2x = 32 ⇒ x = 32 / 2 ⇒ x = 16.',
      teacherTip: 'Isole os termos com x à esquerda e os números à direita, invertendo os sinais das operações.',
      trapAlert: 'Ao passar -18 para o outro lado, o sinal vira positivo (+18).'
    },
    {
      id: 'saresp-q6',
      number: 6,
      subject: 'Língua Portuguesa',
      topic: 'Gênero Textual / Crônica e Notícia',
      contextText: '“A Prefeitura de Ribeirão Preto iniciou nesta segunda-feira a campanha de vacinação contra a gripe em 35 postos de saúde. Devem vacinar-se prioritariamente idosos e crianças de até 5 anos.”',
      statement: 'O texto acima pertence ao gênero textual:',
      options: [
        { id: 'A', text: 'Notícia, com foco na informação objetiva e de utilidade pública.' },
        { id: 'B', text: 'Poema lírico, focado em rimas e ritmo emotivo.' },
        { id: 'C', text: 'Fábula infantil, protagonizada por animais falantes com moral da história.' },
        { id: 'D', text: 'Carta de amor, com declarações íntimas em primeira pessoa.' }
      ],
      correctOption: 'A',
      explanation: 'Trata-se de uma notícia jornalística informativa que responde às perguntas básicas: Quem? O quê? Onde? Quando? Para quem?',
      teacherTip: 'Descritor D9 do SARESP: Diferenciar as partes principais das secundárias e reconhecer gêneros textuais.',
      trapAlert: 'A linguagem é direta, impessoal e sem marcas de subjetividade ficcional.'
    },
    {
      id: 'saresp-q7',
      number: 7,
      subject: 'Matemática',
      topic: 'Leitura de Gráficos de Colunas',
      contextText: 'Um gráfico mostra o número de livros lidos por mês na biblioteca: Março (120 livros), Abril (180 livros), Maio (240 livros) e Junho (200 livros).',
      statement: 'O aumento no número de empréstimos verificado entre março e maio foi de:',
      options: [
        { id: 'A', text: '60 livros' },
        { id: 'B', text: '100 livros' },
        { id: 'C', text: '120 livros' },
        { id: 'D', text: '140 livros' }
      ],
      correctOption: 'C',
      explanation: 'Em março foram lidos 120 e em maio 240. A diferença é 240 - 120 = 120 livros (ou seja, exatamente o dobro).',
      teacherTip: 'Descritor D36: Resolver problemas com dados apresentados em tabelas ou gráficos.',
      trapAlert: 'Atenção aos meses pedidos: Março (120) e Maio (240), não compare com Junho.'
    },
    {
      id: 'saresp-q8',
      number: 8,
      subject: 'Língua Portuguesa',
      topic: 'Pronomes e Coesão Referencial',
      contextText: '“Mariana comprou um novo microscópio para as aulas de Ciências. Ela guardou-o cuidadosamente no armário do laboratório.”',
      statement: 'No texto, o pronome “o” ligado ao verbo refere-se a:',
      options: [
        { id: 'A', text: 'Mariana' },
        { id: 'B', text: 'Microscópio' },
        { id: 'C', text: 'Aulas' },
        { id: 'D', text: 'Laboratório' }
      ],
      correctOption: 'B',
      explanation: 'O pronome oblíquo "o" substitui o objeto direto "microscópio" para evitar repetição desnecessária na frase.',
      teacherTip: 'Descritor D2: Identificar a relação de coesão referencial por substituição pronominal.',
      trapAlert: 'Mariana é substituída por "Ela"; o microscópio é substituído por "-o".'
    },
    {
      id: 'saresp-q9',
      number: 9,
      subject: 'Matemática',
      topic: 'Teorema de Pitágoras',
      contextText: 'Um pedreiro precisa apoiar uma escada de 5 metros de comprimento em um muro vertical. A base da escada dista 3 metros da base do muro.',
      statement: 'A que altura do solo a escada encosta no muro?',
      options: [
        { id: 'A', text: '3,5 metros' },
        { id: 'B', text: '4,0 metros' },
        { id: 'C', text: '4,5 metros' },
        { id: 'D', text: '4,8 metros' }
      ],
      correctOption: 'B',
      explanation: 'Pelo Teorema de Pitágoras: a² = b² + c² ⇒ 5² = 3² + h² ⇒ 25 = 9 + h² ⇒ h² = 25 - 9 = 16 ⇒ h = √16 = 4 metros.',
      teacherTip: 'Triângulo retângulo pitagórico fundamental (3, 4, 5). Aparece constantemente no SARESP!',
      trapAlert: 'A escada é a hipotenusa (o maior lado), não some os dois valores.'
    },
    {
      id: 'saresp-q10',
      number: 10,
      subject: 'Língua Portuguesa',
      topic: 'Pontuação e Expressividade',
      contextText: '“— Não acredito! Você conseguiu a medalha de ouro?!”',
      statement: 'A combinação do ponto de interrogação com o de exclamação (?!) expressa:',
      options: [
        { id: 'A', text: 'Total indiferença e tédio diante do fato.' },
        { id: 'B', text: 'Sentimento simultâneo de surpresa espantada e questionamento eufórico.' },
        { id: 'C', text: 'Certeza tranquila de que o resultado já era previsto.' },
        { id: 'D', text: 'Reprovação moral contra a vitória do atleta.' }
      ],
      correctOption: 'B',
      explanation: 'O ponto de exclamação denota espanto/admiração e a interrogação formula a pergunta, combinando perplexidade positiva com surpresa.',
      teacherTip: 'Descritor D17: Reconhecer o efeito de sentido decorrente da pontuação.',
      trapAlert: 'Pontuação dupla expressa intensidade emocional, não neutralidade.'
    },
    {
      id: 'saresp-q11',
      number: 11,
      subject: 'Matemática',
      topic: 'Regra de Três Simples Direta',
      contextText: 'Uma impressora da secretaria escolar imprime 90 páginas de provas em 3 minutos.',
      statement: 'Mantendo o mesmo ritmo, quantas páginas ela imprimirá em 10 minutos?',
      options: [
        { id: 'A', text: '250 páginas' },
        { id: 'B', text: '270 páginas' },
        { id: 'C', text: '300 páginas' },
        { id: 'D', text: '360 páginas' }
      ],
      correctOption: 'C',
      explanation: 'Em 1 minuto a máquina imprime: 90 / 3 = 30 páginas/min. Em 10 minutos: 30 × 10 = 300 páginas.',
      teacherTip: 'Grandeza diretamente proporcional: mais tempo de impressão significa mais páginas impressas.',
      trapAlert: '90 × 3 = 270 seria multiplicação indevida; ache a taxa por minuto primeiro.'
    },
    {
      id: 'saresp-q12',
      number: 12,
      subject: 'Língua Portuguesa',
      topic: 'Sinônimos e Vocabulário Contextual',
      contextText: '“O pesquisador apresentou um método inovador e eficaz para o tratamento de efluentes sanitários.”',
      statement: 'A palavra “eficaz” pode ser substituída no texto, sem alteração de sentido, por:',
      options: [
        { id: 'A', text: 'Eficiente / bem-sucedido' },
        { id: 'B', text: 'Demorado / inoperante' },
        { id: 'C', text: 'Dispendioso / caro' },
        { id: 'D', text: 'Ruidoso / poluente' }
      ],
      correctOption: 'A',
      explanation: 'Eficaz significa aquilo que produz o efeito desejado, que funciona com sucesso e precisão.',
      teacherTip: 'Descritor D3: Inferir o sentido de uma palavra ou expressão com base no contexto.',
      trapAlert: 'Cuidado com antônimos disfarçados em provas da Seduc.'
    },
    {
      id: 'saresp-q13',
      number: 13,
      subject: 'Matemática',
      topic: 'Números Decimais e Sistema Monetário',
      contextText: 'Lucas foi à padaria com uma nota de R$ 50,00. Comprou 2 litros de leite a R$ 4,50 cada, 1 pacote de pão a R$ 8,20 e 300g de queijo por R$ 12,80.',
      statement: 'O valor que Lucas recebeu de troco foi:',
      options: [
        { id: 'A', text: 'R$ 20,00' },
        { id: 'B', text: 'R$ 25,50' },
        { id: 'C', text: 'R$ 30,00' },
        { id: 'D', text: 'R$ 32,50' }
      ],
      correctOption: 'A',
      explanation: 'Total gasto: 2 × 4,50 = 9,00; + 8,20 + 12,80 = 9,00 + 21,00 = R$ 30,00 gastos no total. Troco: 50,00 - 30,00 = R$ 20,00.',
      teacherTip: 'Some primeiro os decimais complementares: 8,20 + 12,80 = 21,00 exatos.',
      trapAlert: 'Não esqueça que foram 2 litros de leite (2 × 4,50 = 9,00).'
    },
    {
      id: 'saresp-q14',
      number: 14,
      subject: 'Língua Portuguesa',
      topic: 'Fato versus Opinião',
      contextText: 'I. A cidade de Santos fica localizada no litoral do estado de São Paulo.\nII. O clima litorâneo é o mais agradável e relaxante do mundo.',
      statement: 'Analisando os períodos I e II, é correto afirmar que:',
      options: [
        { id: 'A', text: 'Ambos são fatos verificáveis geograficamente.' },
        { id: 'B', text: 'O período I expressa um fato objetivo e o período II expressa uma opinião subjetiva.' },
        { id: 'C', text: 'Ambos são opiniões pessoais sem comprovação científica.' },
        { id: 'D', text: 'O período I é uma opinião e o período II é uma lei física comprovada.' }
      ],
      correctOption: 'B',
      explanation: 'A localização de Santos é um fato geográfico objetivo incontestável. Dizer que o clima de lá é "o mais agradável do mundo" reflete gosto pessoal e juízo de valor (opinião).',
      teacherTip: 'Descritor D14: Distinguir um fato da opinião relativa a esse fato.',
      trapAlert: 'Adjetivos superlativos ("o melhor", "o mais belo") indicam julgamento de valor/opinião.'
    },
    {
      id: 'saresp-q15',
      number: 15,
      subject: 'Matemática',
      topic: 'Ângulos e Triângulos',
      statement: 'Dois ângulos internos de um triângulo medem 65° e 45°. A medida do terceiro ângulo interno é:',
      options: [
        { id: 'A', text: '60°' },
        { id: 'B', text: '70°' },
        { id: 'C', text: '80°' },
        { id: 'D', text: '90°' }
      ],
      correctOption: 'B',
      explanation: 'A soma dos ângulos internos de qualquer triângulo plano é sempre igual a 180°. 65° + 45° = 110°. Terceiro ângulo: 180° - 110° = 70°.',
      teacherTip: 'Teorema angular de Tales: Ângulo A + Ângulo B + Ângulo C = 180°.',
      trapAlert: '180° - 110° = 70° (e não 80°).'
    },
    {
      id: 'saresp-q16',
      number: 16,
      subject: 'Língua Portuguesa',
      topic: 'Efeito de Humor e Ironia',
      contextText: 'No anúncio bem-humorado de um chaveiro: “Se você esquecer as chaves dentro de casa, não tente entrar pela janela... me chame antes que o vizinho chame a polícia!”',
      statement: 'O humor do texto constrói-se a partir:',
      options: [
        { id: 'A', text: 'Da descrição técnica detalhada das trancas residenciais.' },
        { id: 'B', text: 'Da situação cômica de o proprietário ser confundido com um invasor pelo vizinho.' },
        { id: 'C', text: 'Do ataque grosseiro à segurança pública estadual.' },
        { id: 'D', text: 'Do uso de termos arcaicos do latim jurídico.' }
      ],
      correctOption: 'B',
      explanation: 'A comicidade reside na quebra de expectativa: o cliente que tenta pular a própria janela para recuperar as chaves acaba correndo o risco de ser preso por suspeita de furto.',
      teacherTip: 'Descritor D16: Identificar efeitos de ironia ou humor em textos variados.',
      trapAlert: 'O texto não é técnico, baseia-se na empatia com o constrangimento cômico do cotidiano.'
    },
    {
      id: 'saresp-q17',
      number: 17,
      subject: 'Matemática',
      topic: 'Média Aritmética Simples',
      contextText: 'As notas de Bruna em quatro avaliações bimestrais de História foram: 7,5; 8,0; 6,5 e 10,0.',
      statement: 'A média aritmética final de Bruna nessa disciplina foi:',
      options: [
        { id: 'A', text: '7,5' },
        { id: 'B', text: '8,0' },
        { id: 'C', text: '8,5' },
        { id: 'D', text: '9,0' }
      ],
      correctOption: 'B',
      explanation: 'Soma das notas: 7,5 + 8,0 + 6,5 + 10,0 = 32,0. Dividindo por 4 bimestres: 32 / 4 = 8,0.',
      teacherTip: 'Agrupe: 7,5 + 6,5 = 14; 14 + 8 = 22; 22 + 10 = 32. Dividido por 4 = 8.',
      trapAlert: 'Atenção para não somar errado os números com vírgula.'
    },
    {
      id: 'saresp-q18',
      number: 18,
      subject: 'Língua Portuguesa',
      topic: 'Ortografia e Uso dos Porquês',
      statement: 'Assinale a alternativa que preenche corretamente a lacuna na frase: “Não compareci à aula ontem ________ estava chovendo torrencialmente.”',
      options: [
        { id: 'A', text: 'porque (junto e sem acento)' },
        { id: 'B', text: 'por que (separado e sem acento)' },
        { id: 'C', text: 'por quê (separado e com acento)' },
        { id: 'D', text: 'porquê (junto e com acento)' }
      ],
      correctOption: 'A',
      explanation: 'Usa-se "porque" (junto e sem acento) em respostas e orações explicativas/causais, equivalendo a "pois" ou "já que".',
      teacherTip: 'Porque = resposta/motivo; Por que = pergunta direta/indireta; Por quê = fim de frase; O porquê = substantivo com artigo.',
      trapAlert: 'Aqui é uma justificativa, portanto "porque" junto e sem acento.'
    },
    {
      id: 'saresp-q19',
      number: 19,
      subject: 'Matemática',
      topic: 'Conversão de Unidades de Medida',
      statement: 'Uma garrafa térmica contém 2,5 litros de suco de maracujá. Quantos copos de 250 mL é possível encher completamente com esse volume?',
      options: [
        { id: 'A', text: '5 copos' },
        { id: 'B', text: '8 copos' },
        { id: 'C', text: '10 copos' },
        { id: 'D', text: '12 copos' }
      ],
      correctOption: 'C',
      explanation: '1 litro = 1.000 mL. Portanto, 2,5 litros = 2.500 mL. Dividindo pela capacidade de cada copo: 2.500 / 250 = 10 copos.',
      teacherTip: 'Descritor D11: Resolver problemas envolvendo medidas de capacidade e suas conversões usuais.',
      trapAlert: 'Converta sempre as duas grandezas para a mesma unidade antes de dividir.'
    },
    {
      id: 'saresp-q20',
      number: 20,
      subject: 'Matemática',
      topic: 'Porcentagem Comercial',
      contextText: 'Uma mochila escolar que custava R$ 120,00 foi vendida na promoção de volta às aulas com um desconto de 15%.',
      statement: 'Qual foi o valor pago pela mochila após o desconto?',
      options: [
        { id: 'A', text: 'R$ 98,00' },
        { id: 'B', text: 'R$ 102,00' },
        { id: 'C', text: 'R$ 105,00' },
        { id: 'D', text: 'R$ 108,00' }
      ],
      correctOption: 'B',
      explanation: '10% de 120 = 12. 5% de 120 = 6. Logo 15% de desconto = 12 + 6 = R$ 18,00 de desconto. Valor final: 120 - 18 = R$ 102,00.',
      teacherTip: 'Calcular 10% e metade (5%) na cabeça economiza um tempo valioso na prova.',
      trapAlert: 'R$ 18,00 é o valor do desconto; a questão pediu o valor FINAL pago.'
    }
  ]
};
