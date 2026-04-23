import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  FaChartLine,
  FaCheck,
  FaClipboardList,
  FaCogs,
  FaRoute,
  FaWarehouse,
} from "react-icons/fa";
import CardServices from "../components/CardServices";
import { SERVICES } from "../constants";
import SectionHeader from "../components/SectionHeader";

const iconMapping: Record<string, ReactNode> = {
  implementation: <FaCogs size={24} />,
  processes: <FaRoute size={24} />,
  optimization: <FaChartLine size={24} />,
};

const deliveryFlow = [
  {
    title: "Diagnóstico",
    description: "Entendimento da operação, dores, rotinas e sistemas atuais.",
  },
  {
    title: "Estruturação",
    description: "Mapeamento de processos, requisitos e critérios de aceite.",
  },
  {
    title: "Validação",
    description: "Configuração, testes funcionais e alinhamento com usuários.",
  },
  {
    title: "Adoção",
    description: "Treinamento, documentação, go-live e acompanhamento inicial.",
  },
];

const supportAreas = [
  "Operação logística",
  "Usuários-chave",
  "Times técnicos",
  "Gestão e liderança",
];

export default function Services() {
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
    <section id="services" className="page-section relative overflow-hidden">
      <div className="container-custom relative z-10 w-full max-w-6xl">
        <SectionHeader
          label="SERVIÇOS"
          title={
            <>
              Apoio para <span className="gradient-text">sistemas reais</span>
            </>
          }
          description="Serviços voltados a implantação, processos e melhoria operacional, sempre conectando necessidade de negócio, tecnologia e usuário final."
          align="center"
        />

        <motion.div
          className="mt-12 space-y-8 md:space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent p-6 shadow-bento backdrop-blur-xl md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                <FaWarehouse />
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
                foco de atuação
              </p>
              <h3 className="mt-2 font-title text-2xl font-bold leading-tight text-white md:text-3xl">
                Menos ruído entre operação e tecnologia.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                O objetivo é fazer o sistema refletir o processo real. Para isso,
                combino visão operacional, levantamento funcional,
                documentação clara e acompanhamento próximo da implantação.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {supportAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1.5 text-xs text-text-secondary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {deliveryFlow.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-bento backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-text-tertiary">
                      0{index + 1}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                      <FaCheck className="h-3 w-3" />
                    </span>
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
                  frentes
                </p>
                <h3 className="mt-2 font-title text-2xl font-bold text-white md:text-3xl">
                  Como posso contribuir
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
                Três frentes modulares para apoiar desde a definição do processo
                até a estabilização após o go-live.
              </p>
            </div>

            <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.02] p-4 shadow-bento backdrop-blur-xl md:p-6">
              <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                variants={containerVariants}
              >
                {SERVICES.map((service) => (
                  <motion.div
                    key={service.id}
                    className="h-full"
                    variants={itemVariants}
                  >
                    <CardServices
                      title={service.title}
                      description={service.description}
                      icon={iconMapping[service.id] || <FaClipboardList size={24} />}
                      features={service.features}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-bento backdrop-blur-xl md:grid-cols-3"
          >
            {[
              ["Clareza", "Requisitos compreensíveis para negócio e tecnologia."],
              ["Aderência", "Configuração e testes conectados ao fluxo real."],
              ["Adoção", "Treinamento e suporte para reduzir atrito no uso."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl bg-zinc-950/30 p-5">
                <h4 className="text-base font-bold text-white">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
