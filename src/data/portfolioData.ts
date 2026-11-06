export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Editorial' | 'Alta-costura' | 'Campanha' | 'Beleza';
  year: string;
  image: string;
  shortDescription: string;
  fullConcept: string;
  quote?: string;
  credits: {
    role: string;
    name: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  details: string;
  deliverables: string[];
  idealFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  year: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'silencio-urbano',
    number: '01',
    title: 'Silêncio Urbano',
    subtitle: 'Um estudo sobre a solidão contemporânea',
    category: 'Editorial',
    year: '2025',
    image: '/src/assets/images/project_silencio_urbano_1793965717263.jpg',
    shortDescription: 'Um estudo sobre a solidão contemporânea traduzido em silhuetas monocromáticas e luz natural.',
    fullConcept:
      'Desenvolvido entre as geometrias brutalistas de concreto armado e as sombras alongadas do fim de tarde, Silêncio Urbano investiga a relação entre o corpo humano e a arquitetura monumental. O guarda-roupa monocromático adota alfaiataria rigorosa e lãs pesadas para erguer um refúgio táctil no epicentro da metrópole.',
    quote: '“O silêncio não é ausência de ruído, mas a presença deliberada da forma.”',
    credits: [
      { role: 'Direção Criativa & Styling', name: 'Larissa Bonfante' },
      { role: 'Fotografia', name: 'Rafael Menezes' },
      { role: 'Modelo', name: 'Beatriz Sampaio' },
      { role: 'Beleza & Cabelo', name: 'André Farias' },
      { role: 'Produção Executiva', name: 'Ateliê Bonfante' },
    ],
    specifications: [
      { label: 'Paleta', value: 'Monocromático alto contraste (Preto carvão & Bege cru)' },
      { label: 'Câmera', value: 'Leica SL2 com lente Summicron-SL 35mm' },
      { label: 'Locação', value: 'São Paulo · Arquitetura Modernista' },
      { label: 'Veiculação', value: 'Revista L’Officiel Brasil & Exposição Galeria Pivô' },
    ],
    deliverables: [
      'Editorial impresso de 14 páginas',
      'Filme teaser em 16mm preto e branco',
      'Lookbook digital de alfaiataria de luxo',
      'Guia de identidade estética para a campanha de lançamento',
    ],
  },
  {
    id: 'tecido-e-sombra',
    number: '02',
    title: 'Tecido & Sombra',
    subtitle: 'Volumes esculturais e drapeados táteis',
    category: 'Alta-costura',
    year: '2025',
    image: '/src/assets/images/project_tecido_sombra_1793965717695.jpg',
    shortDescription: 'Volumes esculturais e drapeados que exploram o encontro entre o tecido e a luz direcional.',
    fullConcept:
      'Uma monografia fotográfica e editorial inspirada nas dobras da estatuária clássica reinterpretadas pelo modernismo brasileiro. Tecido & Sombra utiliza tafetá de seda pura, organza estruturada e crepes duplos sob feixes de luz pontual concentrada, onde cada prega se converte em escultura viva.',
    quote: '“A luz desenha o espaço; a sombra confere peso à alma do tecido.”',
    credits: [
      { role: 'Direção Criativa', name: 'Larissa Bonfante' },
      { role: 'Costura & Moulage', name: 'Atelier Vértice & Larissa Bonfante' },
      { role: 'Fotografia', name: 'Lucas Vasconcelos' },
      { role: 'Modelo', name: 'Valentina Rossi' },
      { role: 'Assistência de Arte', name: 'Mariana Duarte' },
    ],
    specifications: [
      { label: 'Materiais', value: 'Tafetá de seda, lã fria e organza dublada' },
      { label: 'Iluminação', value: 'Foco direcional teatral tipo Fresnel 2KW' },
      { label: 'Pós-produção', value: 'Gradação de prata e sépia sutil' },
      { label: 'Publicação', value: 'Livro de Arte Monográfico Edição Limitada' },
    ],
    deliverables: [
      'Monografia editorial de colecionador (capa dura em linho)',
      'Série de 8 ampliações fotográficas para leilão beneficente',
      'Diretrizes de caimento e moulage para a coleção de passarela',
    ],
  },
  {
    id: 'contraluz',
    number: '03',
    title: 'Contraluz',
    subtitle: 'Campanha construída na penumbra radiante',
    category: 'Campanha',
    year: '2024',
    image: '/src/assets/images/project_contraluz_1793965717495.jpg',
    shortDescription: 'Campanha de marca construída no contraste entre contraluz, pele e matéria bruta.',
    fullConcept:
      'Concebida para a coleção outonal da Casa Lumen, a campanha Contraluz substituiu cenários saturados por aberturas monumentais em arco com janelas voltadas para a noite urbana. O halo translúcido de tecidos finos revela a aura feminina sem excessos decorativos.',
    quote: '“Elegância não é ser notado à primeira vista; é permanecer indelével na memória.”',
    credits: [
      { role: 'Direção Criativa', name: 'Larissa Bonfante' },
      { role: 'Cliente', name: 'Casa Lumen' },
      { role: 'Fotografia de Campanha', name: 'Mariana Guimarães' },
      { role: 'Styling', name: 'Larissa Bonfante & Equipe' },
      { role: 'Cenografia', name: 'Estúdio Ocre' },
    ],
    specifications: [
      { label: 'Formato', value: 'Fotografia still 4:5 + Motion editorial vertical' },
      { label: 'Conceito', value: 'Nocturne Minimalist / Romance Gráfico' },
      { label: 'Alcance', value: 'Campanha nacional em flagship stores e mídia out-of-home' },
    ],
    deliverables: [
      'Campanha visual para 6 lojas-conceito no Brasil',
      'Lookbook digital e catálogo interativo para clientes VIP',
      '12 pílulas em vídeo para mídias digitais com sonoplastia de piano',
    ],
  },
  {
    id: 'assimetria',
    number: '04',
    title: 'Assimetria',
    subtitle: 'Cortes precisos para uma narrativa de força e delicadeza',
    category: 'Editorial',
    year: '2024',
    image: '/src/assets/images/project_assimetria_1793965731880.jpg',
    shortDescription: 'Composição assimétrica e cortes precisos para uma narrativa de força e delicadeza.',
    fullConcept:
      'Desafiando a simetria convencional, este ensaio trabalha com volumes assimétricos angulares, decotes pontiagudos e luvas operísticas em diálogo com escadarias de concreto. A harmonia é encontrada na tensão rítmica entre elementos opostos.',
    quote: '“O equilíbrio perfeito reside na assimetria calculada com rigor.”',
    credits: [
      { role: 'Direção Criativa & Concepção', name: 'Larissa Bonfante' },
      { role: 'Fotografia', name: 'Thiago Almeida' },
      { role: 'Modelo', name: 'Clara Meireles' },
      { role: 'Make-up minimal', name: 'Renata Lins' },
    ],
    specifications: [
      { label: 'Formato', value: 'Grande formato analógico 6x7' },
      { label: 'Filme', value: 'Ilford HP5 Plus 400 P&B' },
      { label: 'Época', value: 'Primavera / Verão 2024' },
    ],
    deliverables: [
      'Ensaio fotográfico para capa e recheio editorial',
      'Manual de composição visual e poses de modelo',
      'Série de cartazes serigrafados em papel algodão 300g',
    ],
  },
  {
    id: 'pele-neutra',
    number: '05',
    title: 'Pele Neutra',
    subtitle: 'A textura e a potência do gesto mínimo',
    category: 'Beleza',
    year: '2024',
    image: '/src/assets/images/project_pele_neutra_1793965732578.jpg',
    shortDescription: 'Beauty editorial sobre textura, naturalidade e a potência do gesto mínimo.',
    fullConcept:
      'Uma celebração da naturalidade crua e da introspecção. Pele Neutra retira camadas de artifícios cosméticos para evidenciar a verdade dos traços, a maciez do toque e a gola alta em cashmere. Uma declaração visual contra a artificialidade dos filtros contemporâneos.',
    quote: '“O despojamento é a expressão suprema do luxo autêntico.”',
    credits: [
      { role: 'Direção Criativa', name: 'Larissa Bonfante' },
      { role: 'Fotografia Macro', name: 'Juliana Pires' },
      { role: 'Modelo', name: 'Helena Carvalho' },
      { role: 'Dermatologia & Skin Care', name: 'Dra. Gabriela Fontes' },
    ],
    specifications: [
      { label: 'Lente', value: 'Macro 100mm f/2.8 L IS USM' },
      { label: 'Conceito', value: 'Raw Authenticity & Tactile Warmth' },
      { label: 'Finalização', value: 'Impressão piezoelétrica sem granulação digital' },
    ],
    deliverables: [
      'Série de 10 retratos de beleza minimalista',
      'Manifesto de marca sobre beleza limpa e duradoura',
      'Embalagens e cartelas de comunicação visual para linha de cuidados',
    ],
  },
  {
    id: 'rumor',
    number: '06',
    title: 'Rumor',
    subtitle: 'O instante transformado em forma e fluidez',
    category: 'Editorial',
    year: '2023',
    image: '/src/assets/images/project_rumor_1793965732946.jpg',
    shortDescription: 'Movimento capturado em frames lentos, transformando o instante em forma.',
    fullConcept:
      'Capturado com velocidade lenta de obturador, Rumor materializa o movimento do vento e a vertigem do giro em uma dança de luz. O vestido de seda ganha vida própria, pairando entre o estado líquido e o ar, como uma pintura a óleo em preto e branco.',
    quote: '“A imagem estática que respira é aquela que reteve o sopro do tempo.”',
    credits: [
      { role: 'Direção Criativa & Styling', name: 'Larissa Bonfante' },
      { role: 'Fotografia de Movimento', name: 'Carlos Eduardo Matos' },
      { role: 'Bailarina & Performer', name: 'Maya Lin' },
      { role: 'Figurino Autoral', name: 'Larissa Bonfante Studio' },
    ],
    specifications: [
      { label: 'Técnica', value: 'Longa exposição com obturador lento (1/15s)' },
      { label: 'Ambiente', value: 'Estúdio industrial despojado com luz de claraboia' },
      { label: 'Prêmio', value: 'Finalista Prêmio Ibero-Americano de Fotografia de Moda' },
    ],
    deliverables: [
      'Série coreográfica de 6 imagens em tríptico',
      'Instalação em vídeo looping para semana de moda de São Paulo',
      'Artigo ensaístico sobre a poética do movimento na vestimenta',
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'direcao-criativa',
    number: '01',
    title: 'Direção Criativa',
    shortDescription: 'Conceito, referências e direção de imagem para coleções, campanhas e editoriais.',
    details:
      'Desenvolvimento do mapa conceitual completo da marca ou coleção: moodboards, narrativa poética, diretrizes de casting, locação, iluminação e enquadramento.',
    deliverables: ['Dossiê Conceitual (Deck de 30+ páginas)', 'Moodboard de texturas e referências', 'Diretrizes para equipe fotográfica e de beleza', 'Supervisão presencial no set'],
    idealFor: 'Marcas de moda em reposicionamento ou lançamento de coleções autorais.',
  },
  {
    id: 'styling-editorial',
    number: '02',
    title: 'Styling Editorial',
    shortDescription: 'Seleção de peças, composição de looks e construção da narrativa visual de cada ensaio.',
    details:
      'Curadoria refinada de peças, acessórios e sapatos para transformar vestuário em discurso visual coerente, respeitando o DNA da marca e as proporções da silhueta.',
    deliverables: ['Mapeamento de looks por entrada de cena', 'Pesquisa de acervo e empréstimos institucionais', 'Ajustes finos no corpo da modelo no set', 'Lista completa de créditos para publicação'],
    idealFor: 'Revistas de moda, campanhas de marcas consagradas e ateliês de alta-costura.',
  },
  {
    id: 'producao-de-moda',
    number: '03',
    title: 'Produção de Moda',
    shortDescription: 'Coordenação de casting, locação, equipe e cronograma para produções completas.',
    details:
      'Gestão executiva impecável de todas as etapas do set: contratação de talentos, alvarás de locação, logística de transporte de acervo e alimentação.',
    deliverables: ['Casting scouting e negociação de contratos', 'Mapeamento técnico de locações exclusivas', 'Cronograma minuto a minuto da diária', 'Gerenciamento de orçamento de produção'],
    idealFor: 'Campanhas publicitárias de grande escala e ensaios fotográficos complexos.',
  },
  {
    id: 'consultoria-de-imagem',
    number: '04',
    title: 'Consultoria de Imagem',
    shortDescription: 'Orientação de identidade visual e posicionamento estético para marcas e pessoas.',
    details:
      'Refinamento do vocabulário imagético de personalidades públicas, executivos e estilistas que buscam um guarda-roupa atemporal, minimalista e assertivo.',
    deliverables: ['Diagnóstico de estilo pessoal e assinatura visual', 'Curadoria de cápsula atemporal de 25 peças', 'Guia de composições fotográficas para redes e imprensa', 'Sessão de compras personalizadas em alfaiates e marcas de nicho'],
    idealFor: 'Diretores criativos, galeristas, arquitetos e líderes que prezam pela elegância discreta.',
  },
  {
    id: 'desenvolvimento-colecao',
    number: '05',
    title: 'Desenvolvimento de Coleção',
    shortDescription: 'Pesquisa, paleta e desenvolvimento de linhas autorais do conceito à apresentação.',
    details:
      'Acompanhamento do estilista ou ateliê desde a pesquisa de tendências silenciosas até a seleção de cartela de tecidos, botões, aviamentos e silhuetas-chave.',
    deliverables: ['Painel semântico e cartela de matérias-primas nobres', 'Fichas técnicas conceituais de 15 a 30 modelos', 'Moulage e testes de caimento em ateliê', 'Alinhamento com oficina de costura e modelagem'],
    idealFor: 'Novas marcas emergentes ou marcas tradicionais que buscam injeção autoral contemporânea.',
  },
  {
    id: 'identidade-visual-marca',
    number: '06',
    title: 'Identidade Visual de Marca',
    shortDescription: 'Direção de linguagem visual, tipografia e fotografia para marcas de moda.',
    details:
      'Criação de manuais estéticos para e-commerce, lookbooks, convites de desfile e catálogos impressos, garantindo harmonia entre tipografia, fotografia e papelaria.',
    deliverables: ['Guia de estilo fotográfico (Brand Aesthetic Book)', 'Diretrizes tipográficas para catálogos e sites', 'Design de tags, caixas e sacolas em papel artesanal', 'Curadoria de feed e campanhas digitais'],
    idealFor: 'Marcas de luxo, joalherias autorais e marcas de vestuário sustentável de alto padrão.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Imersão',
    description:
      'Conversamos sobre a marca, o desejo e o público. Pesquisa aprofundada de referências artísticas, cinema, arquitetura e objetivos de mercado.',
    highlights: ['Briefing aprofundado com os criadores', 'Diagnóstico de posicionamento e referências', 'Mapeamento de códigos estéticos da marca'],
  },
  {
    number: '02',
    title: 'Conceito',
    description:
      'Definição do conceito central, paleta monocromática, moodboard tátil e direção estética que orienta todas as decisões subsequentes.',
    highlights: ['Apresentação de storyboard visual', 'Definição de cartela de texturas e iluminação', 'Validação das diretrizes com a equipe'],
  },
  {
    number: '03',
    title: 'Produção',
    description:
      'Direção no set de fotografia: condução da equipe, styling minucioso, casting afinado e supervisão de cada detalhe de luz e ângulo.',
    highlights: ['Direção de cena e poses naturais', 'Supervisão de caimento e composição', 'Monitoramento tethered em tempo real'],
  },
  {
    number: '04',
    title: 'Entrega',
    description:
      'Seleção final das imagens mestras, tratamento monocromático refinado e organização dos arquivos prontos para impressão e plataformas digitais.',
    highlights: ['Curadoria rigorosa de master prints', 'Tratamento de contraste e granulação analógica', 'Entrega em alta resolução e web otimizada'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      '“A Larissa entendeu a alma da coleção antes mesmo de eu terminar de explicar. O resultado foi um editorial que virou referência histórica para a nossa marca e atraiu compradores internacionais.”',
    author: 'Camila Andrade',
    role: 'Diretora de Marca & Fundadora',
    organization: 'Atelier Vértice',
    year: '2025',
  },
  {
    id: '2',
    quote:
      '“Precisão estética e sensibilidade raras. Cada imagem tinha intenção — composição, luz e silêncio trabalhando juntos. Trabalhar com a Larissa é testemunhar a moda tratada como arte pura.”',
    author: 'Rafael Menezes',
    role: 'Fotógrafo de Moda Internacional',
    organization: 'Estúdio Rafael Menezes',
    year: '2025',
  },
  {
    id: '3',
    quote:
      '“Trabalhar com a Larissa elevou o posicionamento da nossa campanha a um novo patamar de prestígio. Sofisticação em preto e branco do início ao fim, com rigor de entrega impecável.”',
    author: 'Helena Prado',
    role: 'Head de Marketing e Comunicação',
    organization: 'Casa Lumen',
    year: '2024',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o início de um projeto?',
    answer:
      'Começamos com uma conversa presencial ou virtual para compreender a marca, os objetivos e o contexto da coleção. A partir desse alinhamento, elaboro uma proposta com conceito inicial, etapas, cronograma e estimativa orçamentária detalhada.',
  },
  {
    id: 'faq-2',
    question: 'Você trabalha com projetos autorais e comerciais?',
    answer:
      'Sim. Atuo tanto em coleções e campanhas comerciais para marcas de moda quanto em editoriais autorais independentes, monografias para museus e ensaios de posicionamento visual para estilistas e artistas.',
  },
  {
    id: 'faq-3',
    question: 'Por que a identidade visual é predominantemente em preto e branco?',
    answer:
      'O contraste monocromático é uma escolha estética e conceitual: ele despoja a imagem de distrações passageiras e confere protagonismo absoluto à forma, ao corte, ao caimento do tecido e à interação poética entre luz e sombra.',
  },
  {
    id: 'faq-4',
    question: 'É possível contratar apenas a direção criativa ou etapas pontuais?',
    answer:
      'Sim. Posso atuar em etapas específicas — seja apenas na concepção de conceito e moodboard, no styling editorial no set, na curadoria de casting ou na consultoria de imagem estratégica.',
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo leva uma produção completa?',
    answer:
      'Depende da escala e do escopo. Um editorial autoral ou lookbook costuma levar entre duas e quatro semanas entre imersão e entrega final tratada. Campanhas publicitárias complexas ou desenvolvimento de coleção completa demandam de um a três meses.',
  },
];

export const STATS = [
  { value: '12+', label: 'Coleções dirigidas' },
  { value: '40', label: 'Editoriais publicados' },
  { value: '8', label: 'Anos de ateliê autoral' },
];
