import { ProjectData, ServiceData, SocialLink, SkillData } from "../types";

// Personal Information
export const PERSONAL_INFO = {
  name: "Ytalo Alves",
  title: "Analista de Sistemas / Especialista em Implantação WMS",
  bio: "Conecto tecnologia, processos e logística para transformar necessidades operacionais em sistemas mais claros, aderentes e eficientes.",
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
    id: "pdv-sales-management",
    title: "Sistema PDV - Gestão de Vendas",
    description:
      "Sistema web de PDV para varejo alimentar, com autenticação individual de operadores, ambiente restrito e fluxo seguro para operação de frente de caixa.",
    detailedDescription:
      "Sistema web de PDV para varejo alimentar, com autenticação individual de operadores, ambiente restrito e fluxo seguro para operação de frente de caixa.",
    techs: ["React", "TypeScript", "PDV", "Autenticação", "Varejo"],
    features: [
      "Autenticação individual de operadores",
      "Ambiente restrito para operação",
      "Fluxo de frente de caixa",
      "Interface web responsiva",
    ],
    liveUrl: "https://pdv-frontend.netlify.app/login",
  },
  {
    id: "delivery-scheduling-system",
    title: "Sistema de Agendamento de Entregas",
    description:
      "Aplicação web para controle e agendamento de entregas, desenvolvida para melhorar a organização operacional, acompanhar demandas e otimizar processos logísticos.",
    detailedDescription:
      "Aplicação web para controle e agendamento de entregas, desenvolvida para melhorar a organização operacional, acompanhar demandas e otimizar processos logísticos.",
    techs: [
      "React",
      "TypeScript",
      "Logística",
      "Agendamento",
      "Gestão Operacional",
    ],
    features: [
      "Controle de agendamentos",
      "Acompanhamento de demandas",
      "Organização da operação logística",
      "Interface web responsiva",
    ],
    liveUrl: "https://delivery-scheduling-system.netlify.app/",
  },
];

export const SERVICES: ServiceData[] = [
  {
    id: "implementation",
    title: "Implantação WMS/ERP",
    description:
      "Apoio na implantação de sistemas com foco em aderência ao processo, estabilidade operacional e clareza para o usuário final.",
    iconUrl:
      "https://github.com/user-attachments/assets/b0f6d0b4-02f7-4190-ae54-55e1352147dd",
    features: [
      "Configuração de regras e parâmetros",
      "Testes funcionais e validação de cenários",
      "Treinamento de usuários-chave",
      "Suporte ao go-live e estabilização",
    ],
  },
  {
    id: "processes",
    title: "Processos & Requisitos",
    description:
      "Mapeamento de fluxos operacionais e tradução das necessidades do negócio em requisitos claros para times técnicos e áreas usuárias.",
    iconUrl:
      "https://github.com/user-attachments/assets/4860fe9a-5493-4a65-94b8-be2e7ce72e8c",
    features: [
      "Levantamento com áreas de negócio",
      "Mapeamento de processos logísticos",
      "Critérios de aceite e documentação",
      "Alinhamento entre operação e tecnologia",
    ],
  },
  {
    id: "optimization",
    title: "Otimização Operacional",
    description:
      "Análise de rotinas, gargalos e oportunidades de melhoria para tornar processos mais simples, rastreáveis e eficientes.",
    iconUrl:
      "https://github.com/user-attachments/assets/87606d46-f64c-4990-80ad-8647207449cc",
    features: [
      "Diagnóstico de fluxo operacional",
      "Padronização de rotinas e registros",
      "Indicadores para acompanhamento",
      "Melhoria contínua com visão prática",
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
  ...PROJECTS.map((project) => project.imageUrl).filter(
    (url): url is string => Boolean(url)
  ),
  ...SERVICES.map((service) => service.iconUrl),
  ...SOCIAL_LINKS.map((link) => link.iconUrl),
];
