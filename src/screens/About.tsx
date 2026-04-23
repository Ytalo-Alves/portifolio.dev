import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaClipboardList,
  FaCogs,
  FaExchangeAlt,
  FaGraduationCap,
  FaLayerGroup,
  FaNetworkWired,
  FaRoute,
  FaWarehouse,
} from "react-icons/fa";
import { PERSONAL_INFO } from "../constants";
import SectionHeader from "../components/SectionHeader";

const highlights = [
  "Levantamento de requisitos e mapeamento de processos",
  "Implantação de WMS/ERP, configuração e testes funcionais",
  "Treinamento de usuários, documentação e suporte ao go-live",
  "Visão prática de operação, liderança e melhoria contínua",
];

const timeline = [
  {
    title: "Base operacional",
    role: "Liderança em logística",
    description:
      "Atuação como líder de setor, supervisor de operações e coordenador logístico, com vivência direta em rotinas, equipes, indicadores e gargalos reais.",
    icon: FaWarehouse,
  },
  {
    title: "Ponte entre áreas",
    role: "Processos e sistemas",
    description:
      "Tradução das necessidades da operação em requisitos claros, fluxos mapeados e critérios funcionais para implantações mais consistentes.",
    icon: FaExchangeAlt,
  },
  {
    title: "Especialização atual",
    role: "Análise de sistemas e WMS",
    description:
      "Configuração, testes, treinamento, documentação e acompanhamento de go-live com foco em aderência ao negócio e estabilidade operacional.",
    icon: FaCogs,
  },
];

const skillGroups = [
  {
    title: "Sistemas & Tecnologia",
    icon: FaNetworkWired,
    skills: [
      "WMS",
      "ERP",
      "Configuração de sistemas",
      "Testes funcionais",
      "Documentação técnica",
      "Suporte a go-live",
    ],
  },
  {
    title: "Operações & Logística",
    icon: FaWarehouse,
    skills: [
      "Supply Chain",
      "Rotinas logísticas",
      "Gestão operacional",
      "Controle de processos",
      "Treinamento de usuários",
      "Indicadores",
    ],
  },
  {
    title: "Processos & Estratégia",
    icon: FaRoute,
    skills: [
      "Requisitos",
      "Mapeamento de processos",
      "Melhoria contínua",
      "Resolução de problemas",
      "Visão de negócio",
      "Comunicação entre áreas",
    ],
  },
];

const differentiators = [
  {
    title: "Negócio + tecnologia",
    description:
      "Conecto regras operacionais, necessidades do usuário e configuração de sistemas sem perder o foco no resultado.",
  },
  {
    title: "Otimização de processos",
    description:
      "Analiso fluxos, identifico pontos de atrito e proponho melhorias aplicáveis ao dia a dia da operação.",
  },
  {
    title: "Experiência em liderança",
    description:
      "Trago repertório de coordenação, supervisão e condução de equipes em ambientes logísticos.",
  },
  {
    title: "Vivência real de operação",
    description:
      "Entendo o impacto de cada decisão técnica no chão da operação, no usuário final e no go-live.",
  },
];

function SurfaceCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-bento backdrop-blur-xl transition-colors duration-300 hover:border-accent/25 md:p-7",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function LabelBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
      {children}
    </span>
  );
}

function BlockTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-title text-2xl font-bold leading-tight text-white md:text-3xl">
        {title}
      </h3>
    </div>
  );
}

export default function About() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section id="about" className="page-section relative overflow-hidden">
      <div className="container-custom relative z-10 w-full max-w-6xl">
        <SectionHeader
          label="SOBRE MIM"
          title={
            <>
              Perfil <span className="gradient-text">híbrido</span>
            </>
          }
          description="Tecnologia, processos e logística conectados para transformar operações em sistemas mais claros, aderentes e eficientes."
          align="center"
        />

        <motion.div
          className="mt-12 space-y-8 md:space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent p-6 shadow-bento backdrop-blur-xl md:p-8 lg:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
                <div>
                  <LabelBadge>Tech + Logistics</LabelBadge>

                  <h1 className="mt-5 max-w-4xl font-title text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {PERSONAL_INFO.name}
                    <span className="mt-3 block text-xl font-semibold leading-snug text-cyan-200 sm:text-2xl lg:text-3xl">
                      Analista de Sistemas / Especialista em Implantação WMS
                    </span>
                  </h1>

                  <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
                    Atuo na conexão entre operação e tecnologia, conduzindo
                    requisitos, processos, configurações, testes e suporte a
                    implantações de sistemas. Minha base em logística ajuda a
                    criar soluções que funcionam no fluxo real do negócio.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/projects"
                      className="group inline-flex min-h-[2.75rem] items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99]"
                    >
                      Ver projetos
                      <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      to="/contacts"
                      className="inline-flex min-h-[2.75rem] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05]"
                    >
                      Falar comigo
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    ["Perfil", "Tecnologia + logística"],
                    ["Formação", "Análise de Sistemas"],
                    ["Base", "Supply Chain & Logistics"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-zinc-950/35 p-4"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-snug text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <SurfaceCard className="h-full">
                <BlockTitle eyebrow="perfil" title="Da operação ao sistema" />
                <p className="mt-5 text-base leading-relaxed text-text-secondary">
                  Minha trajetória começa na logística, em posições de liderança
                  e acompanhamento operacional. Hoje, uso esse repertório para
                  aproximar áreas de negócio e tecnologia, reduzindo ruídos
                  entre o que a operação precisa e o que o sistema entrega.
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  O resultado é uma atuação orientada a clareza: entender o
                  processo, organizar requisitos, validar cenários e apoiar a
                  implantação com foco no usuário final.
                </p>
              </SurfaceCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SurfaceCard className="h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/15 text-accent-glow">
                    <FaClipboardList />
                  </div>
                  <BlockTitle eyebrow="atuacao" title="Principais entregas" />
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-relaxed text-text-secondary"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                        <FaCheck className="h-2.5 w-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SurfaceCard>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SurfaceCard>
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <BlockTitle
                  eyebrow="trajetoria"
                  title="Evolução profissional"
                />
                <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
                  Uma progressão construída no ambiente operacional e aplicada
                  hoje em projetos de implantação, suporte e melhoria de
                  sistemas.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {timeline.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <article
                      key={step.title}
                      className="relative rounded-2xl border border-white/10 bg-zinc-950/30 p-5"
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs text-text-tertiary">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                        {step.title}
                      </p>
                      <h4 className="mt-2 text-lg font-bold text-white">
                        {step.role}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </SurfaceCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SurfaceCard>
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <BlockTitle
                  eyebrow="competencias"
                  title="Conhecimento técnico, operacional e estratégico"
                />
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-text-secondary">
                  <FaGraduationCap className="h-4 w-4 text-indigo-300" />
                  Sistemas + Supply Chain
                </div>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {skillGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <article
                      key={group.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h4 className="font-title text-lg font-bold text-white">
                          {group.title}
                        </h4>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-cyan-400/30 hover:text-cyan-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </SurfaceCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SurfaceCard>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-200">
                  <FaLayerGroup />
                </div>
                <BlockTitle eyebrow="diferenciais" title="Onde gero valor" />
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {differentiators.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-zinc-950/30 p-5 transition-colors hover:border-amber-200/25"
                  >
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </SurfaceCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
