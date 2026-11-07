/**
 * Configuração Institucional Centralizada do Portfólio
 * 
 * Todas as informações institucionais da criadora e do ateliê estão reunidas aqui.
 * Para atualizar nome, biografia, e-mail, redes ou contatos, edite apenas este arquivo.
 */

export interface SiteConfig {
  name: string;
  signature: string;
  eyebrow: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  atelierLocation: string;
  atelierAddress: string;
  workingHours: string;
  email: string;
  instagram: string;
  whatsapp: string;
  heroImage: string;
  aboutImage: string;
  stats: {
    value: string;
    label: string;
  }[];
  pillars: {
    title: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Larissa Bonfante",
  signature: "Larissa Bonfante",
  eyebrow: "Portfólio de Moda · Direção Criativa",
  tagline: "Direção criativa e narrativas visuais para a moda. Cada projeto nasce como uma criação artística — com conceito próprio, identidade e um editorial que respira elegância atemporal.",
  shortBio: "Diretora criativa e pesquisadora visual com base em Arapongas · PR. Desenvolve imagens, editoriais e posicionamento estético para ateliês de alta-costura e marcas autorais em preto e branco.",
  fullBio: [
    "Sou Larissa Bonfante, diretora criativa de moda com base em Arapongas · PR. Construo imagens que tratam cada coleção, editorial ou campanha de marca como uma obra com conceito, identidade e narrativa próprios.",
    "Meu trabalho une a elegância táctil de uma publicação de luxo impressa à fluidez da experiência contemporânea — com espaço, contraste e intenção em cada escolha de corte, tecido e silhueta.",
    "Ao longo de 8 anos de ateliê autoral, desenvolvi uma linguagem reconhecível fundamentada na fotografia monocromática, no rigor da alfaiataria e no diálogo íntimo com a luz natural e a arquitetura."
  ],
  atelierLocation: "Arapongas · Paraná",
  atelierAddress: "Arapongas · Paraná · Brasil",
  workingHours: "Segunda a sexta, 9h às 18h",
  email: "atelier@larissabonfante.com",
  instagram: "@larissabonfante",
  whatsapp: "+55 (11) 98765-4321",
  heroImage: "/src/assets/images/hero_larissa_editorial_1793965716239.jpg",
  aboutImage: "/src/assets/images/about_atelier_studio_1793965716942.jpg",
  stats: [
    { value: "12+", label: "Coleções dirigidas" },
    { value: "40", label: "Editoriais publicados" },
    { value: "8", label: "Anos de ateliê autoral" }
  ],
  pillars: [
    {
      title: "Composição editorial de alta-costura",
      description: "Equilíbrio arquitetônico entre tecidos nobres, caimento e luz direcional."
    },
    {
      title: "Olhar contemporâneo e atemporal",
      description: "Visões que transcendem sazonalidades passageiras e criam valor duradouro."
    },
    {
      title: "Narrativa visual própria por projeto",
      description: "Cada ensaio é concebido como um manifesto estético com identidade singular."
    },
    {
      title: "Sofisticação em preto e branco",
      description: "Foco deliberado na textura, silhueta e atmosfera sem ruído cromático."
    }
  ]
};
