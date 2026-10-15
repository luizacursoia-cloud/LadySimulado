import { Exam } from '@/types/quiz';

export const concursosExam: Exam = {
  id: 'concursos-publicos-geral',
  slug: 'concursos',
  title: 'Concursos Públicos - Níveis Médio & Fundamental',
  subtitle: 'Língua Portuguesa, Raciocínio Lógico, Noções de Direito e Informática',
  category: 'concursos',
  level: 'Concursos Públicos',
  questionCount: 20,
  recommendedMinutes: 60,
  banca: 'Bancas Cebraspe, FGV, FCC & VUNESP',
  badge: 'Carreiras Públicas',
  highlight: true,
  description: 'Simulado geral para concursos federais, estaduais e municipais (INSS, Caixa, Banco do Brasil, Tribunais e Polícias). Conteúdo essencial das disciplinas mais cobradas com gabarito fundamentado na lei e na jurisprudência.',
  tags: ['Concursos', 'Direito Constitucional', 'Direito Administrativo', 'RLM', 'Português', 'Informática'],
  questions: [
    {
      id: 'conc-q1',
      number: 1,
      subject: 'Direito Administrativo',
      topic: 'Princípios da Administração Pública (LIMPE)',
      statement: 'O artigo 37, caput, da Constituição Federal de 1988 estabelece os princípios expressos da Administração Pública direta e indireta. O mnemônico "LIMPE" sintetiza esses princípios, que são:',
      options: [
        { id: 'A', text: 'Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.' },
        { id: 'B', text: 'Lealdade, Isonomia, Motivação, Proporcionalidade e Eficácia.' },
        { id: 'C', text: 'Legalidade, Interesse público, Modicidade, Participação e Exatidão.' },
        { id: 'D', text: 'Liberdade, Igualdade, Mérito, Pontualidade e Economia.' },
        { id: 'E', text: 'Licitude, Imparcialidade, Moderação, Prudência e Ética.' }
      ],
      correctOption: 'A',
      explanation: 'CF/88, Art. 37: "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência." O princípio da Eficiência foi acrescentado pela Emenda Constitucional nº 19/1998.',
      teacherTip: 'Mnemônico sagrado para qualquer concurseiro: L-I-M-P-E.',
      trapAlert: 'Eficácia não é princípio expresso da CF/88; o termo constitucional correto é EFICIÊNCIA.'
    },
    {
      id: 'conc-q2',
      number: 2,
      subject: 'Direito Constitucional',
      topic: 'Direitos e Garantias Fundamentais (Art. 5º)',
      statement: 'Em conformidade com a Constituição Federal de 1988, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:',
      options: [
        { id: 'A', text: 'Por determinação judicial, a qualquer hora do dia ou da noite.' },
        { id: 'B', text: 'Em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.' },
        { id: 'C', text: 'Apenas com autorização formal do síndico do condomínio.' },
        { id: 'D', text: 'Durante a noite, se houver fundada suspeita de contravenção penal.' },
        { id: 'E', text: 'Mediante intimação policial prévia sem ordem judicial.' }
      ],
      correctOption: 'B',
      explanation: 'CF/88, Art. 5º, XI: "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial".',
      teacherTip: 'Atenção para o detalhe: mandado judicial só pode ser cumprido DURANTE O DIA!',
      trapAlert: 'A alternativa A mente ao dizer "a qualquer hora"; ordem judicial à noite é inconstitucional (salvo socorro/desastre/flagrante).'
    },
    {
      id: 'conc-q3',
      number: 3,
      subject: 'Língua Portuguesa',
      topic: 'Concordância com Voz Passiva Sintética',
      statement: 'Assinale a alternativa que apresenta a oração redigida de acordo com a norma-padrão de concordância verbal:',
      options: [
        { id: 'A', text: 'Aluga-se apartamentos mobiliados na região central.' },
        { id: 'B', text: 'Alugam-se apartamentos mobiliados na região central.' },
        { id: 'C', text: 'Vendem-se terrenos se houver compradores.' },
        { id: 'D', text: 'Precisa-se de digitadores experientes.' },
        { id: 'E', text: 'B e D estão ambas corretas.' }
      ],
      correctOption: 'E',
      explanation: 'Em "Alugam-se apartamentos", temos voz passiva sintética (o pronome "se" é partícula apassivadora), onde "apartamentos mobiliados" é sujeito paciente plural, exigindo verbo no plural. Em "Precisa-se de digitadores", o "se" é índice de indeterminação do sujeito (verbo transitivo indireto com preposição "de"), devendo o verbo ficar obrigatoriamente no singular (3ª pessoa). Portanto, ambas estão impecáveis!',
      teacherTip: 'Com partícula apassivadora (VTD + se), o verbo concorda com o sujeito. Com índice de indeterminação (VTI + se), verbo sempre no singular!',
      trapAlert: 'Aluga-se casas está ERRADO; o correto é "Alugam-se casas".'
    },
    {
      id: 'conc-q4',
      number: 4,
      subject: 'Raciocínio Lógico Matemático',
      topic: 'Equivalência Lógica da Condicional (Se P, então Q)',
      statement: 'A proposição condicional "Se o candidato estuda com método, então ele é aprovado no concurso" é logicamente equivalente à contrapositiva:',
      options: [
        { id: 'A', text: 'Se o candidato não estuda com método, então ele não é aprovado.' },
        { id: 'B', text: 'Se o candidato é aprovado no concurso, então ele estudou com método.' },
        { id: 'C', text: 'Se o candidato não é aprovado no concurso, então ele não estudou com método.' },
        { id: 'D', text: 'O candidato estuda com método e não é aprovado no concurso.' },
        { id: 'E', text: 'Ou o candidato estuda com método, ou ele é aprovado no concurso.' }
      ],
      correctOption: 'C',
      explanation: 'A equivalência lógica da condicional P → Q por contraposição é ~Q → ~P: inverte-se a ordem e negam-se ambas as proposições ("Se não Q, então não P"). Logo: "Se o candidato NÃO é aprovado, então ele NÃO estudou com método".',
      teacherTip: 'Regra de ouro das bancas Cespe e FGV: (P → Q) ≡ (~Q → ~P) ≡ (~P ou Q).',
      trapAlert: 'Negar simplesmente as duas partes sem inverter a ordem (opção A) é uma falácia lógica chamada negação do antecedente.'
    },
    {
      id: 'conc-q5',
      number: 5,
      subject: 'Noções de Informática',
      topic: 'Segurança da Informação / Malwares',
      statement: 'O tipo de software malicioso que sequestra os arquivos do computador de uma vítima criptografando-os e exigindo o pagamento de um resgate (geralmente em criptomoedas) para fornecer a chave de descriptografia é denominado:',
      options: [
        { id: 'A', text: 'Spyware' },
        { id: 'B', text: 'Adware' },
        { id: 'C', text: 'Ransomware' },
        { id: 'D', text: 'Keylogger' },
        { id: 'E', text: 'Phishing' }
      ],
      correctOption: 'C',
      explanation: 'Ransomware (de "ransom" = resgate) é o malware extorsivo que cifra os discos e arquivos da vítima impedindo o acesso aos dados até que se pague o resgate exigido pelos cibercriminosos.',
      teacherTip: 'Keylogger captura teclas digitadas; Spyware espiona silenciosamente; Phishing é a isca por e-mail falso; Ransomware é o sequestrador de dados.',
      trapAlert: 'Muito cobrado em concursos bancários (Caixa, BB) e policiais.'
    },
    {
      id: 'conc-q6',
      number: 6,
      subject: 'Direito Constitucional',
      topic: 'Remédios Constitucionais (Habeas Corpus, Mandado de Segurança)',
      statement: 'Para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública, a Constituição prevê a concessão de:',
      options: [
        { id: 'A', text: 'Mandado de Segurança' },
        { id: 'B', text: 'Ação Popular' },
        { id: 'C', text: 'Mandado de Injunção' },
        { id: 'D', text: 'Ação Declaratória de Constitucionalidade' },
        { id: 'E', text: 'Recurso Extraordinário vinculante' }
      ],
      correctOption: 'A',
      explanation: 'CF/88, Art. 5º, LXIX: "conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público".',
      teacherTip: 'Habeas Corpus = liberdade de locomoção. Habeas Data = acesso/retificação de informações pessoais. Mandado de Injunção = falta de norma regulamentadora que inviabiliza direito. Mandado de Segurança = resíduo para direito líquido e certo.',
      trapAlert: 'Ação Popular é para anular ato lesivo ao patrimônio público, ajuizada por qualquer cidadão.'
    },
    {
      id: 'conc-q7',
      number: 7,
      subject: 'Direito Administrativo',
      topic: 'Atos Administrativos / Atributos do Ato',
      statement: 'O atributo do ato administrativo que permite à Administração Pública impor obrigações unilaterais a terceiros, independentemente de sua concordância prévia, é denominado:',
      options: [
        { id: 'A', text: 'Imperatividade' },
        { id: 'B', text: 'Presunção de legitimidade' },
        { id: 'C', text: 'Autoexecutoriedade' },
        { id: 'D', text: 'Tipicidade' },
        { id: 'E', text: 'Especialidade' }
      ],
      correctOption: 'A',
      explanation: 'A imperatividade (ou coercibilidade) confere ao ato administrativo o poder de vincular unilateralmente os administrados ao cumprimento de deveres e abstenções, como multas de trânsito e ordens sanitárias.',
      teacherTip: 'Atributos clássicos (PATI): Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade.',
      trapAlert: 'Autoexecutoriedade é executar o ato materialmente sem autorização judicial prévia (ex: rebocar carro estacionado em local proibido).'
    },
    {
      id: 'conc-q8',
      number: 8,
      subject: 'Língua Portuguesa',
      topic: 'Ortografia Oficial e Acentuação',
      statement: 'Assinale a alternativa em que todas as palavras estão acentuadas graficamente pela mesma regra:',
      options: [
        { id: 'A', text: 'café, cipó, maracujá, jacaré' },
        { id: 'B', text: 'lâmpada, saída, órgão, fósforo' },
        { id: 'C', text: 'história, saúde, táxi, país' },
        { id: 'D', text: 'pó, você, público, até' },
        { id: 'E', text: 'juiz, raiz, item, hifen' }
      ],
      correctOption: 'A',
      explanation: 'Todas as palavras da opção A são oxítonas terminadas em -a, -e, -o (seguidas ou não de s): ca-FÉ, ci-PÓ, ma-ra-cu-JÁ, ja-ca-RÉ.',
      teacherTip: 'Regra das oxítonas: acentuam-se as terminadas em A, E, O (s), EM, ENS.',
      trapAlert: 'Na opção B, lâmpada é proparoxítona e saída é hiato; regras distintas!'
    },
    {
      id: 'conc-q9',
      number: 9,
      subject: 'Raciocínio Lógico Matemático',
      topic: 'Negação de Proposições Universais (Todo / Algum)',
      statement: 'A negação lógica da afirmação "Todos os servidores públicos desta repartição são dedicados" é:',
      options: [
        { id: 'A', text: 'Nenhum servidor público desta repartição é dedicado.' },
        { id: 'B', text: 'Pelo menos um servidor público desta repartição não é dedicado.' },
        { id: 'C', text: 'Todos os servidores públicos desta repartição são desatentos.' },
        { id: 'D', text: 'Alguns servidores públicos desta repartição são dedicados.' },
        { id: 'E', text: 'Apenas os chefes são dedicados.' }
      ],
      correctOption: 'B',
      explanation: 'Para negar o quantificador universal afirmativo "TODO A é B", basta encontrar um contraexemplo: "Existe algum A que NÃO é B", "Pelo menos um A não é B" ou "Nem todo A é B".',
      teacherTip: 'A maior pegadinha de RLM em concursos: a negação de TODO NÃO É NENHUM!',
      trapAlert: 'NUNCA marque "Nenhum" como negação de "Todo".'
    },
    {
      id: 'conc-q10',
      number: 10,
      subject: 'Noções de Informática',
      topic: 'Redes e Protocolos / TCP/IP e HTTP/HTTPS',
      statement: 'Ao navegar na internet, a presença do protocolo HTTPS e do ícone de um cadeado fechado na barra de endereços do navegador web indica que:',
      options: [
        { id: 'A', text: 'O computador do usuário está imune a qualquer ataque hacker ou vírus.' },
        { id: 'B', text: 'A comunicação entre o cliente e o servidor web é criptografada utilizando o protocolo SSL/TLS, garantindo sigilo e integridade no tráfego dos dados.' },
        { id: 'C', text: 'O site é obrigatoriamente de propriedade de um órgão público oficial federal.' },
        { id: 'D', text: 'A velocidade da conexão de banda larga foi duplicada pelo provedor.' },
        { id: 'E', text: 'Os downloads realizados naquele site dispensam checagem por antivírus.' }
      ],
      correctOption: 'B',
      explanation: 'HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia (TLS/SSL) ao tráfego HTTP comum, impedindo que terceiros na rede interceptem senhas ou dados bancários.',
      teacherTip: 'HTTPS utiliza a porta padrão 443; HTTP comum utiliza a porta padrão 80.',
      trapAlert: 'Cadeado verde/fechado NÃO garante que o dono do site é honesto (golpistas também podem usar HTTPS); garante apenas que o canal de transmissão é cifrado.'
    },
    {
      id: 'conc-q11',
      number: 11,
      subject: 'Direito Administrativo',
      topic: 'Regime Jurídico dos Servidores (Lei nº 8.112/90)',
      statement: 'De acordo com a Lei Federal nº 8.112/1990, são formas de provimento de cargo público, EXCETO:',
      options: [
        { id: 'A', text: 'Nomeação' },
        { id: 'B', text: 'Promoção' },
        { id: 'C', text: 'Readaptação' },
        { id: 'D', text: 'Reintegração' },
        { id: 'E', text: 'Exoneração' }
      ],
      correctOption: 'E',
      explanation: 'Exoneração é forma de VACÂNCIA (desocupação do cargo), e não de provimento (ocupação do cargo). Provimento é: Nomeação, Promoção, Readaptação, Reversão, Aproveitamento, Reintegração e Recondução.',
      teacherTip: 'Mnemônico do Provimento: PANRRRR (Promoção, Aproveitamento, Nomeação, Readaptação, Reversão, Reintegração, Recondução).',
      trapAlert: 'Exoneração NÃO é punição (demissão é a penalidade); e ambas são vacâncias.'
    },
    {
      id: 'conc-q12',
      number: 12,
      subject: 'Direito Constitucional',
      topic: 'Organização dos Poderes / Poder Legislativo',
      statement: 'O Congresso Nacional é bicameral, compondo-se da Câmara dos Deputados e do Senado Federal. A representação política no Senado Federal obedece ao seguinte critério:',
      options: [
        { id: 'A', text: 'Proporcional ao número de habitantes de cada unidade da federação.' },
        { id: 'B', text: 'Três senadores para cada Estado e para o Distrito Federal, eleitos segundo o princípio majoritário para mandato de 8 anos.' },
        { id: 'C', text: 'Dois senadores por Estado, com mandato de 4 anos coincidente com o do Presidente.' },
        { id: 'D', text: 'Quatro senadores para os Estados do Sudeste e dois para os demais.' },
        { id: 'E', text: 'Eleição proporcional uninominal a cada dois anos.' }
      ],
      correctOption: 'B',
      explanation: 'CF/88, Art. 46: "O Senado Federal compõe-se de representantes dos Estados e do Distrito Federal, eleitos segundo o princípio majoritário. § 1º Cada Estado e o Distrito Federal elegerão três Senadores, com mandato de oito anos." A representação é paritária para manter o pacto federativo.',
      teacherTip: 'Câmara dos Deputados = representa o POVO (proporcional à população, mínimo 8 e máximo 70). Senado = representa os ESTADOS (fixo em 3 por Estado e DF = 81 senadores).',
      trapAlert: 'O mandato de senador é de 8 anos (e não 4).'
    },
    {
      id: 'conc-q13',
      number: 13,
      subject: 'Língua Portuguesa',
      topic: 'Pontuação / Emprego da Vírgula',
      statement: 'Assinale a frase em que o emprego da vírgula é OBRIGATÓRIO por separar um adjunto adverbial deslocado para o início da oração:',
      options: [
        { id: 'A', text: 'Durante a tempestade de ontem à noite, todos os semáforos da avenida pararam de funcionar.' },
        { id: 'B', text: 'O candidato comprou caneta preta, lápis, borracha e régua.' },
        { id: 'C', text: 'Maria, venha assinar o termo de posse imediatamente!' },
        { id: 'D', text: 'O diretor que é muito competente foi promovido pelo governador.' },
        { id: 'E', text: 'Ele disse que viria mas não compareceu.' }
      ],
      correctOption: 'A',
      explanation: 'Em "Durante a tempestade de ontem à noite,", temos um adjunto adverbial de tempo de grande extensão deslocado para o início da frase, situação em que a vírgula é de uso obrigatório segundo as regras de pontuação padrão.',
      teacherTip: 'Na opção C, a vírgula isola VOCATIVO. Na A, isola ADJUNTO ADVERBIAL deslocado.',
      trapAlert: 'Nunca separe sujeito do predicado com vírgula.'
    },
    {
      id: 'conc-q14',
      number: 14,
      subject: 'Raciocínio Lógico Matemático',
      topic: 'Conjuntos e Diagramas de Venn',
      contextText: 'Em um órgão público com 100 servidores, 60 falam inglês, 40 falam espanhol e 15 falam ambos os idiomas.',
      statement: 'Quantos servidores desse órgão não falam nenhum desses dois idiomas estrangeiros?',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '10' },
        { id: 'C', text: '15' },
        { id: 'D', text: '20' },
        { id: 'E', text: '25' }
      ],
      correctOption: 'C',
      explanation: 'União dos conjuntos: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 60 + 40 - 15 = 100 - 15 = 85 servidores falam pelo menos um dos idiomas. Total de servidores = 100. Aqueles que não falam nenhum = 100 - 85 = 15 servidores.',
      teacherTip: 'Apenas Inglês = 60 - 15 = 45; Apenas Espanhol = 40 - 15 = 25; Ambos = 15. Soma: 45 + 25 + 15 = 85. 100 - 85 = 15.',
      trapAlert: 'Subtraia a interseção antes de somar, senão você conta as 15 pessoas duas vezes!'
    },
    {
      id: 'conc-q15',
      number: 15,
      subject: 'Noções de Informática',
      topic: 'Planilhas Eletrônicas / Microsoft Excel e Calc',
      contextText: 'Em uma planilha do Excel, as células A1, A2 e A3 contêm os valores 10, 20 e 30, respectivamente.',
      statement: 'A fórmula =MÉDIA(A1:A3) + SOMA(A1;A2) inserida na célula A4 retornará o valor:',
      options: [
        { id: 'A', text: '50' },
        { id: 'B', text: '60' },
        { id: 'C', text: '70' },
        { id: 'D', text: '80' },
        { id: 'E', text: '90' }
      ],
      correctOption: 'A',
      explanation: '=MÉDIA(A1:A3) calcula a média dos valores de A1 até A3: (10 + 20 + 30) / 3 = 60 / 3 = 20. =SOMA(A1;A2) usa ponto e vírgula, somando apenas A1 e A2: 10 + 20 = 30. Somando os dois resultados: 20 + 30 = 50.',
      teacherTip: 'Dois pontos (:) significa "ATÉ" (intervalo contínuo). Ponto e vírgula (;) significa "E" (argumentos pontuais isolados).',
      trapAlert: 'Atenção para a diferença crucial entre dois pontos e ponto e vírgula no Excel!'
    },
    {
      id: 'conc-q16',
      number: 16,
      subject: 'Ética no Serviço Público',
      topic: 'Decreto Federal nº 1.171/1994 / Código de Ética',
      statement: 'Nos termos do Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto nº 1.171/94), a pena disciplinar aplicável pela Comissão de Ética é unicamente a:',
      options: [
        { id: 'A', text: 'Censura ética' },
        { id: 'B', text: 'Demissão a bem do serviço público' },
        { id: 'C', text: 'Suspensão de 30 dias com perda de vencimentos' },
        { id: 'D', text: 'Multa de até três salários mínimos' },
        { id: 'E', text: 'Cassação de aposentadoria imediata' }
      ],
      correctOption: 'A',
      explanation: 'Decreto nº 1.171/94, Capítulo II, Seção II, art. 22: "A pena aplicável ao servidor público pela Comissão de Ética é a de censura e sua fundamentação constará do respectivo parecer". A Comissão de Ética não aplica demissão ou suspensão (que cabem a comissões de PAD e autoridade julgadora).',
      teacherTip: 'Questão favoritíssima de concursos federais: Comissão de Ética SÓ aplica CENSURA.',
      trapAlert: 'Demissão e suspensão são penas disciplinares da Lei 8.112/90, não da Comissão de Ética do Decreto 1.171.'
    },
    {
      id: 'conc-q17',
      number: 17,
      subject: 'Direito Administrativo',
      topic: 'Poderes Administrativos / Poder de Polícia',
      statement: 'O Poder de Polícia da Administração Pública faculta ao Estado limitar ou disciplinar o exercício de direitos e liberdades individuais em prol do interesse coletivo. São atributos típicos do poder de polícia:',
      options: [
        { id: 'A', text: 'Discricionariedade, autoexecutoriedade e coercibilidade.' },
        { id: 'B', text: 'Contratualidade, presunção de culpa e sigilo bancário.' },
        { id: 'C', text: 'Hierarquia, subordinação estrita e gratuidade compulsória.' },
        { id: 'D', text: 'Alienabilidade e prescrição quinquenal absoluta.' },
        { id: 'E', text: 'Imunidade tributária e descentralização territorial.' }
      ],
      correctOption: 'A',
      explanation: 'O poder de polícia administrativa possui como atributos tradicionais: a discricionariedade (margem de escolha na lei), a autoexecutoriedade (aplicar a medida diretamente sem aval judicial prévio, como fechar restaurante insalubre) e a coercibilidade (imposição forçada).',
      teacherTip: 'Mnemônico dos atributos do poder de polícia: D-A-C (Discricionariedade, Autoexecutoriedade, Coercibilidade).',
      trapAlert: 'Nem todo ato de polícia é autoexecutório (a cobrança de multa de trânsito não pode ser executada sem processo judicial de execução fiscal se o infrator não pagar).'
    },
    {
      id: 'conc-q18',
      number: 18,
      subject: 'Língua Portuguesa',
      topic: 'Vozes Verbais / Conversão da Ativa para Passiva Analítica',
      contextText: 'O auditor fiscal lavrou o auto de infração tributária ontem.',
      statement: 'A transposição dessa frase para a voz passiva analítica resulta em:',
      options: [
        { id: 'A', text: 'O auto de infração tributária foi lavrado pelo auditor fiscal ontem.' },
        { id: 'B', text: 'O auto de infração tributária havia sido lavrado pelo auditor fiscal.' },
        { id: 'C', text: 'Lavrou-se o auto de infração tributária ontem.' },
        { id: 'D', text: 'O auto de infração tributária será lavrado pelo auditor fiscal.' },
        { id: 'E', text: 'O auditor fiscal tinha lavrado o auto de infração tributária ontem.' }
      ],
      correctOption: 'A',
      explanation: 'O verbo na ativa ("lavrou") está no pretérito perfeito do indicativo. Na conversão para a voz passiva analítica, o verbo auxiliar "ser" assume o mesmo tempo verbal ("foi") acompanhado do particípio ("lavrado") + agente da passiva ("pelo auditor fiscal").',
      teacherTip: 'Mantenha rigorosamente o tempo verbal do verbo original: se era pretérito perfeito ("lavrou"), o verbo ser vai para o pretérito perfeito ("foi lavrado").',
      trapAlert: 'A opção C é voz passiva sintética, mas a questão pediu expressamente passiva analítica (com verbo auxiliar ser + particípio).'
    },
    {
      id: 'conc-q19',
      number: 19,
      subject: 'Raciocínio Lógico Matemático',
      topic: 'Regra de Três Composta',
      contextText: 'Se 6 técnicos arquivistas digitalizam 300 processos em 5 dias de trabalho.',
      statement: 'Quantos dias 4 técnicos arquivistas, com a mesma produtividade, levarão para digitalizar 400 processos?',
      options: [
        { id: 'A', text: '8 dias' },
        { id: 'B', text: '10 dias' },
        { id: 'C', text: '12 dias' },
        { id: 'D', text: '14 dias' },
        { id: 'E', text: '15 dias' }
      ],
      correctOption: 'B',
      explanation: 'Grandezas: Técnicos, Processos, Dias (incógnita). Fixando a coluna Dias: 1) Mais técnicos exigem MENOS dias (inversamente proporcional: inverte 6/4 para 4/6). 2) Mais processos exigem MAIS dias (diretamente proporcional: mantém 300/400). Equação: 5 / x = (4 / 6) × (300 / 400) ⇒ 5 / x = (2 / 3) × (3 / 4) = 6 / 12 = 1 / 2 ⇒ 5 / x = 1 / 2 ⇒ x = 10 dias.',
      teacherTip: 'Método do produto: (Técnicos × Dias) / Processos = constante. (6 × 5) / 300 = (4 × x) / 400 ⇒ 30 / 300 = 4x / 400 ⇒ 1/10 = 4x / 400 ⇒ 4x = 40 ⇒ x = 10 dias. Muito mais rápido!',
      trapAlert: 'Cuidado para não esquecer de inverter grandezas inversamente proporcionais.'
    },
    {
      id: 'conc-q20',
      number: 20,
      subject: 'Direito Constitucional',
      topic: 'Nacionalidade e Cargos Privativos de Brasileiro Nato',
      statement: 'De acordo com o artigo 12, § 3º, da Constituição Federal de 1988, são cargos privativos de brasileiro nato, entre outros:',
      options: [
        { id: 'A', text: 'Presidente e Vice-Presidente da República, Presidente da Câmara dos Deputados e Presidente do Senado Federal.' },
        { id: 'B', text: 'Ministro da Saúde e Governador de Estado.' },
        { id: 'C', text: 'Prefeito Municipal e Juiz do Trabalho.' },
        { id: 'D', text: 'Auditor Fiscal da Receita Federal e Delegado de Polícia Civil.' },
        { id: 'E', text: 'Senador da República e Deputado Federal em geral.' }
      ],
      correctOption: 'A',
      explanation: 'CF/88, Art. 12, § 3º: São privativos de brasileiro nato: Presidente e Vice da República; Presidente da Câmara; Presidente do Senado; Ministros do STF; carreira diplomática; oficial das Forças Armadas; e Ministro de Estado da Defesa. (Mnemônico MP3.COM).',
      teacherTip: 'Mnemônico campeão de concursos: MP3.COM (Ministro do STF, Presidente/Vice, Pres. Câmara, Pres. Senado, Carreira diplomática, Oficial Forças Armadas, Ministro da Defesa).',
      trapAlert: 'Qualquer brasileiro naturalizado pode ser deputado ou senador comum, mas NUNCA pode ser PRESIDENTE da Câmara ou do Senado (pois estão na linha sucessória presidencial).'
    }
  ]
};
