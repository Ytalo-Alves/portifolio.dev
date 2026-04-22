export const NAV_LINKS = [
  { name: "Início", path: "/", short: "home" },
  { name: "Sobre", path: "/about", short: "sobre" },
  { name: "Projetos", path: "/projects", short: "work" },
  { name: "Serviços", path: "/services", short: "stack" },
  { name: "Contato", path: "/contacts", short: "msg" },
] as const;

export type NavPath = (typeof NAV_LINKS)[number]["path"];
