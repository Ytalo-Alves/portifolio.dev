import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaArrowRight, FaCode } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiNextdotjs, SiPrisma } from "react-icons/si";
import { PERSONAL_INFO } from "../constants";

const chips = ["TypeScript", "React", "Node.js", "APIs & deploy"];

export default function Home() {
  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#5ac8fa" },
    { name: "Node.js", icon: FaNodeJs, color: "#3dcd58" },
    { name: "Next.js", icon: SiNextdotjs, color: "#e2e8f0" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#7c9ef1" },
    { name: "Prisma", icon: SiPrisma, color: "#a5b4fc" },
    { name: "Docker", icon: FaDocker, color: "#3b8fe8" },
    { name: "Git", icon: FaGitAlt, color: "#f87171" },
  ];

  return (
    <section
      id="home"
      className="page-section relative flex min-h-[min(100dvh,58rem)] flex-col justify-center overflow-hidden"
    >
      {/* Decoração local — luz suave por trás do hero */}
      <div
        className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px] md:-left-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 right-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px] md:right-12"
        aria-hidden
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Coluna texto */}
          <motion.div
            className="text-center lg:col-span-6 lg:pr-4 lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-gradient-to-r from-zinc-900/90 to-zinc-900/40 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">
                fullstack · produto & engenharia
              </span>
            </div>

            <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[2.85rem] font-title text-zinc-50">
              Olá, eu sou{" "}
              <span className="gradient-text-animated">
                {PERSONAL_INFO.name.split(" ")[0]}
              </span>
            </h1>

            <p className="mt-4 text-lg text-zinc-300 sm:text-xl max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.title}
            </p>
            <p className="mt-1 text-base text-zinc-500 max-w-2xl mx-auto lg:mx-0 sm:text-lg">
              Interfaces claras, APIs consistentes, deploy com confiança.
            </p>

            <p className="mt-6 max-w-prose text-[0.98rem] leading-[1.75] text-zinc-400 mx-auto text-pretty sm:text-base lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-400"
                >
                  <span className="h-1 w-1 rounded-full bg-cyan-400/80" />
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <Link
                to="/projects"
                className="group relative inline-flex min-h-[2.9rem] items-center overflow-hidden rounded-2xl px-8 text-[0.95rem] font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative flex items-center gap-2.5">
                  Ver projetos
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                to="/contacts"
                className="group inline-flex min-h-[2.9rem] items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/40 px-8 text-[0.95rem] font-semibold text-zinc-100 backdrop-blur-sm transition-all hover:border-cyan-500/25 hover:bg-zinc-800/50"
              >
                Entrar em contato
              </Link>
            </div>
          </motion.div>

          {/* Bento / painel */}
          <motion.div
            className="lg:col-span-6 w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div
                className="absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-cyan-500/35 via-indigo-500/30 to-fuchsia-500/25 opacity-90 blur-sm"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-zinc-950/80 shadow-bento backdrop-blur-2xl">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />
                <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative p-1 sm:p-1.5">
                  {/* Header do painel */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2.5 text-xs text-zinc-500">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                        <FaCode className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-mono tracking-wide">stack · experiência</span>
                    </div>
                    <span className="rounded-md bg-zinc-800/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-400/90">
                      3+ anos
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-3">
                    <div className="col-span-2 rounded-xl border border-white/[0.05] bg-zinc-900/50 p-4 sm:p-5">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                        Tecnologias
                      </p>
                      <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-2.5">
                        {techStack.map((tech) => {
                          const Icon = tech.icon;
                          return (
                            <div
                              key={tech.name}
                              title={tech.name}
                              className="group flex h-12 items-center justify-center rounded-xl border border-white/[0.06] bg-zinc-950/60 transition-all hover:border-cyan-500/30 hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.25)] sm:h-14"
                            >
                              <Icon
                                size={24}
                                className="opacity-90 transition-transform group-hover:scale-110 sm:h-7 sm:w-7"
                                style={{ color: tech.color }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                        Do protótipo ao deploy: performance, acessibilidade e código pronto
                        para evoluir.
                      </p>
                    </div>

                    <div className="flex min-h-[7.5rem] flex-col justify-between rounded-xl border border-indigo-500/15 bg-gradient-to-br from-indigo-500/15 via-zinc-900/40 to-transparent p-4 sm:min-h-[8rem] sm:p-4">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-300/80">
                        entrega
                      </p>
                      <p className="text-base font-title font-bold leading-snug text-zinc-100 sm:text-lg">
                        Ideias em produção, não só em mockup
                      </p>
                    </div>

                    <Link
                      to="/services"
                      className="group flex min-h-[7.5rem] flex-col justify-between rounded-xl border border-white/[0.06] bg-zinc-900/35 p-4 transition-all hover:border-cyan-500/20 hover:bg-zinc-800/40 sm:min-h-[8rem] sm:p-4"
                    >
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                        serviços
                      </p>
                      <p className="text-sm font-semibold text-zinc-100 group-hover:text-cyan-300">
                        Front, back e DevOps
                      </p>
                      <span className="flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-zinc-300">
                        Ver como posso ajudar
                        <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
