import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaArrowRight } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiNextdotjs, SiPrisma } from "react-icons/si";
import { PERSONAL_INFO } from "../constants";
import ScreenBackground from "../components/ScreenBackground";

export default function Home() {
  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
  ];

  return (
    <section
      id="home"
      className="section min-h-screen relative overflow-hidden"
    >
      <ScreenBackground gridOpacityClassName="opacity-[0.16]" />

      {/* Main Content - Split Layout */}
      <div className="container-custom relative z-10 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div className="text-center lg:text-left animate-fadeIn">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 w-fit mx-auto lg:mx-0">
              <span className="h-2 w-2 rounded-full bg-accent shadow-glow animate-pulse-slow" />
              <span className="text-text-secondary font-mono text-xs tracking-[0.3em] uppercase">
                Disponível para projetos
              </span>
            </div>

            <h1 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-title font-bold leading-[1.05]">
              Olá, eu sou{" "}
              <span className="gradient-text-animated">
                {PERSONAL_INFO.name.split(" ")[0]}
              </span>
            </h1>

            <p className="mt-4 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.title} • Interfaces modernas • Sistemas completos
            </p>

            <p className="mt-6 text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects" className="group inline-flex">
                <span className="relative block rounded-2xl p-[1px] bg-gradient-to-r from-accent/70 via-blue-500/30 to-transparent">
                  <span className="flex items-center gap-2 rounded-2xl bg-primary-light/60 px-8 py-4 font-semibold text-white transition-all duration-300 group-hover:bg-primary-light/70 group-hover:shadow-glow">
                    Ver projetos
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>
              </a>

              <a href="#contacts" className="group inline-flex">
                <span className="relative block rounded-2xl p-[1px] bg-gradient-to-r from-white/15 via-accent/20 to-transparent">
                  <span className="flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-accent/30">
                    Entrar em contato
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="animate-scaleIn w-full max-w-xl mx-auto lg:mx-0">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
              <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                <div className="relative p-8 md:p-12">
                  <div className="flex items-center gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute inset-[-12px] rounded-full bg-accent/20 blur-2xl" />
                      <div className="relative h-24 w-24 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
                        <img
                          src={PERSONAL_INFO.profileImage}
                          alt={PERSONAL_INFO.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="text-white font-bold text-xl truncate">
                        {PERSONAL_INFO.name}
                      </div>
                      <div className="text-text-secondary text-sm md:text-base truncate">
                        {PERSONAL_INFO.title}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-2xl px-3 py-2 bg-white/[0.03] border border-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        <span className="text-xs text-text-secondary font-mono tracking-wider">
                          Respondo rápido no WhatsApp
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-[0.3em] text-text-tertiary">
                        TECNOLOGIAS
                      </span>
                      <span className="text-xs font-mono tracking-[0.3em] text-text-tertiary">
                        3+ ANOS
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-3">
                      {techStack.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="group relative flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 transition-colors h-12 w-full"
                            title={tech.name}
                          >
                            <Icon size={24} style={{ color: tech.color }} />
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 text-sm text-text-secondary leading-relaxed">
                      Produto, performance e design system — do protótipo ao deploy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
