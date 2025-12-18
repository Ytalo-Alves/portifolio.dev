import { ProjectData, ServiceData, SocialLink, SkillData } from "../types";

// Personal Information
export const PERSONAL_INFO = {
  name: "Ytalo Alves",
  title: "Desenvolvedor Fullstack",
  bio: "Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.",
  profileImage: "http://github.com/Ytalo-Alves.png",
  flagImage:
    "https://github.com/user-attachments/assets/ef1e3965-c476-4cee-b569-2b38d0cdb37f",
  email: "ytaloalves09@gmail.com",
  whatsappNumber: "11944418282",
};

// Skills/Technologies
export const SKILLS: SkillData[] = [
  {
    id: "github",
    name: "GitHub",
    iconUrl:
      "https://github.com/user-attachments/assets/af3d17ac-0592-469d-890e-b1d8987d6e13",
  },
  {
    id: "html",
    name: "HTML",
    iconUrl:
      "https://github.com/user-attachments/assets/ed65a025-2308-4318-b0d7-feb8809bb6ab",
  },
  {
    id: "css",
    name: "CSS",
    iconUrl:
      "https://github.com/user-attachments/assets/92dffbb6-091d-4103-b200-aa8dd0bfebbe",
  },
  {
    id: "javascript",
    name: "JavaScript",
    iconUrl:
      "https://github.com/user-attachments/assets/3671f089-41f0-4d68-ac9e-7da171fb5ce7",
  },
  {
    id: "react",
    name: "React",
    iconUrl:
      "https://github.com/user-attachments/assets/7d4e89b6-e387-4e97-b645-9a42c0feadbb",
  },
  {
    id: "nodejs",
    name: "Node.js",
    iconUrl:
      "https://github.com/user-attachments/assets/b179ad38-b689-429a-9606-75fd58bad370",
  },
];

// Projects
export const PROJECTS: ProjectData[] = [
  {
    id: "ticket-ai",
    title: "Ticket AI",
    description:
      "Ticket AI para o evento AI para Devs, integrando com a API do GitHub",
    detailedDescription:
      "Sistema inteligente de geração de tickets personalizados para eventos de tecnologia. Utiliza a API do GitHub para buscar informações do perfil do usuário e criar tickets únicos com design moderno e informações personalizadas.",
    imageUrl:
      "https://github.com/user-attachments/assets/2a4ce9f7-2681-471c-a00c-4d98b8b8aefe",
    screenshots: [
      "https://github.com/user-attachments/assets/2a4ce9f7-2681-471c-a00c-4d98b8b8aefe",
    ],
    githubUrl: "https://github.com/Ytalo-Alves/TicketIA?tab=readme-ov-file",
    techs: ["React", "Node.js", "GitHub API", "TypeScript"],
    features: [
      "Integração com GitHub API",
      "Geração automática de tickets",
      "Design responsivo e moderno",
      "Download de tickets em alta resolução",
    ],
    liveUrl: "https://ticket-ai-demo.vercel.app",
  },
  {
    id: "goal-manager",
    title: "Gerenciador de Metas",
    description: "Aplicação Web para registro de metas com progresso semanal",
    detailedDescription:
      "Plataforma completa para gerenciamento de metas pessoais e profissionais. Permite criar, acompanhar e visualizar o progresso de suas metas com gráficos interativos e notificações de progresso semanal.",
    imageUrl:
      "https://github.com/user-attachments/assets/8b44c1c8-279a-4016-8328-39945bd18396",
    screenshots: [
      "https://github.com/user-attachments/assets/8b44c1c8-279a-4016-8328-39945bd18396",
    ],
    githubUrl: "https://github.com/Ytalo-Alves/web_in.orbit",
    techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    features: [
      "Dashboard interativo de metas",
      "Progresso semanal visualizado",
      "Sistema de notificações",
      "Interface intuitiva e responsiva",
    ],
  },
  {
    id: "travel-planner",
    title: "Planejador de Viagens",
    description:
      "Aplicação web para planejamento de viagens, com o gerenciamento de atividades",
    detailedDescription:
      "Ferramenta completa para organizar suas viagens de forma eficiente. Gerencie destinos, atividades, orçamento e compartilhe seus planos com amigos. Interface moderna e intuitiva para tornar o planejamento de viagens uma experiência agradável.",
    imageUrl:
      "https://github.com/user-attachments/assets/ea657e7f-ba0a-482c-ac92-6c6882a6d8c3",
    screenshots: [
      "https://github.com/user-attachments/assets/ea657e7f-ba0a-482c-ac92-6c6882a6d8c3",
    ],
    githubUrl: "https://github.com/Ytalo-Alves/web_planner",
    techs: ["React", "Vite", "Tailwind CSS", "React Router"],
    features: [
      "Planejamento de itinerários",
      "Gerenciamento de atividades",
      "Controle de orçamento",
      "Compartilhamento de viagens",
    ],
  },
  {
    id: "ecommerce-dashboard",
    title: "Dashboard E-commerce",
    description: "Painel administrativo completo para gestão de lojas virtuais",
    detailedDescription:
      "Dashboard moderno e completo para gerenciamento de e-commerce. Visualize métricas em tempo real, gerencie produtos, pedidos e clientes. Interface intuitiva com gráficos interativos e relatórios detalhados para tomada de decisões estratégicas.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    githubUrl: "https://github.com/Ytalo-Alves",
    techs: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    features: [
      "Métricas em tempo real",
      "Gestão de produtos e estoque",
      "Análise de vendas",
      "Relatórios personalizados",
    ],
  },
  {
    id: "task-manager",
    title: "Gerenciador de Tarefas",
    description: "Sistema Kanban para organização de projetos e tarefas",
    detailedDescription:
      "Aplicação de gerenciamento de tarefas estilo Kanban, perfeita para equipes ágeis. Organize projetos, atribua tarefas, defina prioridades e acompanhe o progresso em tempo real. Suporta colaboração em equipe com comentários e anexos.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    ],
    githubUrl: "https://github.com/Ytalo-Alves",
    techs: ["React", "TypeScript", "DnD Kit", "Zustand"],
    features: [
      "Quadros Kanban personalizáveis",
      "Drag and drop intuitivo",
      "Colaboração em tempo real",
      "Sistema de tags e filtros",
    ],
  },
  {
    id: "weather-app",
    title: "Previsão do Tempo",
    description: "App de clima com previsões detalhadas e mapas interativos",
    detailedDescription:
      "Aplicação de previsão do tempo com interface elegante e dados precisos. Visualize condições climáticas atuais, previsões horárias e semanais, mapas de radar e alertas meteorológicos. Suporta múltiplas localizações e unidades de medida.",
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    ],
    githubUrl: "https://github.com/Ytalo-Alves",
    techs: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    features: [
      "Previsões precisas e atualizadas",
      "Mapas interativos de radar",
      "Múltiplas localizações salvas",
      "Alertas meteorológicos",
    ],
  },
];

// Services
// Services
export const SERVICES: ServiceData[] = [
  {
    id: "frontend",
    title: "Desenvolvimento Frontend",
    description:
      "Criação de interfaces modernas, responsivas e altamente interativas. Foco na experiência do usuário (UX) e performance, utilizando as tecnologias mais recentes do mercado.",
    iconUrl:
      "https://github.com/user-attachments/assets/b0f6d0b4-02f7-4190-ae54-55e1352147dd",
    features: [
      "Single Page Applications (SPA)",
      "Design Responsivo & Mobile First",
      "Otimização de Performance (Web Vitals)",
      "Integração com APIs REST/GraphQL",
    ],
  },
  {
    id: "backend",
    title: "Desenvolvimento Backend",
    description:
      "Arquitetura de sistemas robustos e escaláveis. Desenvolvimento de APIs seguras e eficientes para suportar suas aplicações e regras de negócio.",
    iconUrl:
      "https://github.com/user-attachments/assets/4860fe9a-5493-4a65-94b8-be2e7ce72e8c",
    features: [
      "APIs RESTful & GraphQL",
      "Modelagem de Banco de Dados (SQL/NoSQL)",
      "Autenticação & Segurança",
      "Microserviços & Serverless",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infraestrutura",
    description:
      "Gerenciamento de infraestrutura e automação de processos. Garantia de alta disponibilidade, segurança e entrega contínua do seu software.",
    iconUrl:
      "https://github.com/user-attachments/assets/87606d46-f64c-4990-80ad-8647207449cc",
    features: [
      "CI/CD Pipelines",
      "Docker & Containerização",
      "Cloud Computing (AWS/Vercel)",
      "Monitoramento & Logs",
    ],
  },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ytalo-alves/",
    iconUrl:
      "https://github.com/user-attachments/assets/1f3d09d7-b9ba-41af-9d35-46a2782e36d1",
    color: "#3b82f6",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/alves_97_/",
    iconUrl:
      "https://github.com/user-attachments/assets/2125e777-6f76-4ecd-bc3b-b6d124127e9a",
    color: "#3b82f6",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Ytalo-Alves",
    iconUrl:
      "https://github.com/user-attachments/assets/be6e76c1-6f87-4290-9189-2c8099b8e130",
    color: "#3b82f6",
  },
  {
    id: "email",
    name: "E-mail",
    url: "mailto:ytaloalves09@gmail.com",
    iconUrl:
      "https://github.com/user-attachments/assets/1074fccc-3bc3-479d-8be5-02ec9e7710f9",
    color: "#3b82f6",
  },
];

// Images to preload
export const PRELOAD_IMAGES = [
  PERSONAL_INFO.profileImage,
  PERSONAL_INFO.flagImage,
  ...SKILLS.map((skill) => skill.iconUrl),
  ...PROJECTS.map((project) => project.imageUrl),
  ...SERVICES.map((service) => service.iconUrl),
  ...SOCIAL_LINKS.map((link) => link.iconUrl),
];
