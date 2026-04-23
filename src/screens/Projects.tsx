import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
} from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS } from "../constants";
import { ProjectData } from "../types";
import SectionHeader from "../components/SectionHeader";

const projectSignals = [
  "Interfaces responsivas",
  "Fluxos claros",
  "Dados e integrações",
  "Experiência do usuário",
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const featuredProject = PROJECTS[0];
  const remainingProjects = PROJECTS.slice(1);

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
    <section id="projects" className="page-section relative overflow-hidden">
      <div className="container-custom relative z-10 w-full max-w-6xl">
        <SectionHeader
          label="PORTFÓLIO"
          title={
            <>
              Projetos com <span className="gradient-text">raciocínio</span>
            </>
          }
          description="Uma seleção de interfaces, aplicações e experimentos que demonstram organização de fluxo, clareza visual e construção com tecnologias web modernas."
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
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent shadow-bento backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredProject)}
                  className="group block w-full text-left"
                >
                  <div className="relative h-64 overflow-hidden sm:h-80">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                    <img
                      src={featuredProject.imageUrl}
                      alt={featuredProject.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
                      destaque
                    </div>
                  </div>

                  <div className="relative z-20 p-6 md:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-title text-2xl font-bold text-white md:text-3xl">
                          {featuredProject.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
                          {featuredProject.description}
                        </p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:border-cyan-400/30">
                        Ver detalhes
                        <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {featuredProject.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-cyan-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </article>

              <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-bento backdrop-blur-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-200">
                    <FaLayerGroup />
                  </div>
                  <h3 className="mt-5 font-title text-2xl font-bold text-white">
                    Critérios de curadoria
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    Os projetos valorizam organização de informação,
                    responsividade e clareza de jornada, competências úteis para
                    sistemas usados por pessoas e operações reais.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-bento backdrop-blur-xl">
                  <p className="font-mono text-xs uppercase tracking-[0.26em] text-text-tertiary">
                    pontos avaliados
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {projectSignals.map((signal) => (
                      <span
                        key={signal}
                        className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1.5 text-xs text-text-secondary"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
                  galeria
                </p>
                <h3 className="mt-2 font-title text-2xl font-bold text-white md:text-3xl">
                  Outras entregas
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
                Cada card abre um modal com tecnologias, descrição e principais
                funcionalidades.
              </p>
            </div>

            <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.02] p-4 shadow-bento backdrop-blur-xl md:p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {remainingProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.imageUrl}
                    techs={project.techs}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-bento backdrop-blur-xl sm:grid-cols-3"
          >
            {[
              ["Tecnologias", "React, TypeScript, APIs e UI moderna"],
              ["Entrega", "Protótipos navegáveis e aplicações funcionais"],
              ["Repositórios", "Código versionado e organizado no GitHub"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-zinc-950/30 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
                  {value}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 sm:col-span-3">
              <a
                href="https://github.com/Ytalo-Alves"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[2.75rem] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white transition-colors hover:border-accent/30 hover:bg-white/[0.05]"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
              {featuredProject.liveUrl && (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[2.75rem] items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  <FaExternalLinkAlt className="mr-2 h-3.5 w-3.5" />
                  Ver demo em destaque
                </a>
              )}
              <span className="inline-flex min-h-[2.75rem] items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/35 px-5 text-sm text-text-secondary">
                <FaCode className="mr-2 h-4 w-4 text-cyan-200" />
                {PROJECTS.length} projetos listados
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
