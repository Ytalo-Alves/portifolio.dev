import { Link } from "react-router-dom";
import { FaBolt, FaCode, FaGithub, FaLayerGroup, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO, SKILLS } from "../constants";
import ScreenBackground from "../components/ScreenBackground";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="section min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <ScreenBackground />

      <div className="container-custom relative z-10 w-full py-16 md:py-24">
        <SectionHeader
          label="SOBRE MIM"
          title={
            <>
              Minha <span className="gradient-text">Jornada</span>
            </>
          }
          description="Um resumo direto: como eu trabalho, o que eu entrego e com quais tecnologias."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Perfil / Resumo */}
          <div className="lg:col-span-5 animate-fadeIn">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
              <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute inset-[-12px] rounded-3xl bg-accent/20 blur-2xl" />
                      <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
                        <img
                          src={PERSONAL_INFO.profileImage}
                          alt={PERSONAL_INFO.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="text-white font-bold text-2xl truncate">
                        {PERSONAL_INFO.name}
                      </div>
                      <div className="text-text-secondary mt-1 truncate">
                        {PERSONAL_INFO.title}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-text-secondary">
                          Fullstack
                        </span>
                        <span className="px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-text-secondary">
                          React • Node
                        </span>
                        <span className="px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-text-secondary">
                          TypeScript
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-7 text-text-secondary leading-relaxed">
                    {PERSONAL_INFO.bio}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/projects" className="group inline-flex">
                      <span className="relative block rounded-2xl p-[1px] bg-gradient-to-r from-accent/70 via-blue-500/30 to-transparent">
                        <span className="flex items-center justify-center rounded-2xl bg-primary-light/60 px-5 py-3 font-semibold text-white transition-all duration-300 group-hover:bg-primary-light/70 group-hover:shadow-glow">
                          Ver projetos
                        </span>
                      </span>
                    </Link>
                    <Link to="/contacts" className="group inline-flex">
                      <span className="relative block rounded-2xl p-[1px] bg-gradient-to-r from-white/15 via-accent/20 to-transparent">
                        <span className="flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-3 font-semibold text-white transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-accent/30">
                          Falar comigo
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href="https://github.com/ytalo-alves"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label="GitHub"
                    >
                      <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                        <FaGithub
                          size={20}
                          className="text-white/90 group-hover:text-accent transition-colors"
                        />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ytalo-alves"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label="LinkedIn"
                    >
                      <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                        <FaLinkedin
                          size={20}
                          className="text-white/90 group-hover:text-blue-400 transition-colors"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Destaques */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn delay-100">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                    <FaBolt />
                  </div>
                  <h3 className="text-lg font-title font-bold text-white">
                    Pontos fortes
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                    Minimalismo com foco em UX e conversão.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                    Performance, acessibilidade e boas práticas.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                    Entrega consistente: do design ao deploy.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-300">
                    <FaLayerGroup />
                  </div>
                  <h3 className="text-lg font-title font-bold text-white">
                    O que eu entrego
                  </h3>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl bg-white/[0.02] border border-white/10 px-4 py-3 text-sm text-text-secondary">
                    Frontend moderno (React/Vite) com design system.
                  </div>
                  <div className="rounded-2xl bg-white/[0.02] border border-white/10 px-4 py-3 text-sm text-text-secondary">
                    APIs e integrações (Node) com foco em consistência.
                  </div>
                  <div className="rounded-2xl bg-white/[0.02] border border-white/10 px-4 py-3 text-sm text-text-secondary">
                    Pronto para produção: deploy e manutenção.
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-7 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-400/20 text-purple-300">
                      <FaCode />
                    </div>
                    <h3 className="text-lg font-title font-bold text-white">
                      Tecnologias
                    </h3>
                  </div>
                  <span className="text-xs font-mono tracking-[0.3em] text-text-tertiary">
                    STACK
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {SKILLS.map((skill) => (
                    <div
                      key={skill.id}
                      className="px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 transition-colors duration-300 flex items-center gap-2"
                      title={skill.name}
                    >
                      <img
                        src={skill.iconUrl}
                        alt={skill.name}
                        className="w-5 h-5"
                        loading="lazy"
                      />
                      <span className="text-sm text-text-secondary">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
