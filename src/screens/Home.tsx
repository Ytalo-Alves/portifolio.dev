import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaClipboardList,
  FaCogs,
  FaRoute,
  FaWarehouse,
} from "react-icons/fa";
import { PERSONAL_INFO } from "../constants";

const focusAreas = [
  "Implantação WMS/ERP",
  "Requisitos e processos",
  "Testes funcionais",
  "Go-live e treinamento",
];

const impactCards = [
  {
    label: "Origem",
    title: "Logística real",
    description: "Vivência em coordenação, supervisão e liderança operacional.",
    icon: FaWarehouse,
  },
  {
    label: "Atuação",
    title: "Sistemas",
    description: "Configuração, validação e documentação de soluções WMS/ERP.",
    icon: FaCogs,
  },
  {
    label: "Método",
    title: "Processos claros",
    description: "Requisitos bem definidos para reduzir ruído entre áreas.",
    icon: FaRoute,
  },
];

const workflow = [
  "Entender a operação",
  "Mapear requisitos",
  "Validar cenários",
  "Apoiar o go-live",
];

export default function Home() {
  return (
    <section
      id="home"
      className="page-section relative flex min-h-[min(100dvh,58rem)] flex-col justify-center overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-glow" />
              Tech + Logistics
            </div>

            <h1 className="mt-6 font-title text-[2.2rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Sistemas que conversam com a{" "}
              <span className="gradient-text">operação real</span>.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-zinc-200 sm:text-xl lg:mx-0">
              {PERSONAL_INFO.name} · {PERSONAL_INFO.title}
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg lg:mx-0">
              {PERSONAL_INFO.bio} Minha experiência em logística me permite
              traduzir a rotina operacional em requisitos, fluxos, testes e
              implantações mais consistentes.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-text-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                to="/about"
                className="group inline-flex min-h-[2.9rem] items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-7 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                Conhecer trajetória
                <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contacts"
                className="inline-flex min-h-[2.9rem] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold text-white transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                Falar comigo
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent p-5 shadow-bento backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
                    posicionamento
                  </p>
                  <h2 className="mt-2 font-title text-2xl font-bold text-white">
                    Operação + sistemas
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/15 text-accent-glow">
                  <FaClipboardList />
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {impactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-zinc-950/35 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
                        {card.label}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {card.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-text-tertiary">
                  Como eu conduzo
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {workflow.map((step) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                        <FaCheck className="h-3 w-3" />
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
