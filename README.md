# Portfólio — Ytalo Alves

Aplicação web do meu portfólio profissional, com visual futurista/minimalista, páginas de projetos/serviços e contato via WhatsApp.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- React Router

## Funcionalidades

- Navegação por rotas (`/`, `/about`, `/projects`, `/services`, `/contacts`)
- Cards/sections com “glass + neon border” e animações suaves
- Contato por WhatsApp com mensagem formatada automaticamente
- Galeria de projetos com modal de detalhes

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Onde editar conteúdo

- Informações pessoais, links, serviços e projetos: `src/constants/index.ts`
- Páginas (telas): `src/screens/`
- Componentes reutilizáveis: `src/components/`

## Deploy

Funciona bem em plataformas como Vercel/Netlify (build padrão: `npm run build`, saída: `dist/`).
