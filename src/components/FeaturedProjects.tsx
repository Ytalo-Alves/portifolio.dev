import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaStore,
  FaTruck,
} from "react-icons/fa";
import { PROJECTS } from "../constants";
import SectionHeader from "./SectionHeader";

const projectIcons = {
  "pdv-sales-management": FaStore,
  "delivery-scheduling-system": FaTruck,
};

type FeaturedProjectsProps = {
  className?: string;
};

export default function FeaturedProjects({ className = "" }: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      className={`page-section relative overflow-hidden ${className}`}
    >
      <div className="container-custom relative z-10 w-full max-w-6xl">
        <SectionHeader
          label="PORTFÓLIO"
          title={
            <>
              Projetos em <span className="gradient-text">Destaque</span>
            </>
          }
          description="Aplicações reais desenvolvidas com foco em soluções web, gestão operacional e experiência do usuário."
          align="center"
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {PROJECTS.map((project) => {
            const Icon =
              projectIcons[project.id as keyof typeof projectIcons] || FaArrowRight;

            return (
              <motion.article
                key={project.id}
                className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-zinc-950/40 p-6 shadow-bento backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-glow md:p-7"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45 },
                  },
                }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-tertiary">
                    projeto real
                  </span>
                </div>

                <div className="mt-7 flex flex-1 flex-col">
                  <h3 className="font-title text-2xl font-bold leading-tight text-white md:text-[1.7rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-cyan-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex min-h-[2.85rem] w-fit items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99]"
                    >
                      Ver projeto
                      <FaExternalLinkAlt className="ml-2 h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
