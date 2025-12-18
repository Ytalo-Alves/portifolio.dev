import { PROJECTS } from "../constants";

export default function ProjectsMarquee() {
  const items = PROJECTS.filter((p) => Boolean(p.imageUrl)).slice(0, 8);
  const duplicated = [...items, ...items];

  return (
    <div className="mt-8 lg:mt-10">
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-accent/80 shadow-glow" />
        <span className="text-xs font-mono tracking-[0.3em] text-text-tertiary">
          PROJETOS
        </span>
      </div>

      <div className="marquee rounded-3xl border border-white/10 bg-white/[0.02]">
        <div className="marquee-track py-3">
          {duplicated.map((project, idx) => (
            <a
              key={`${project.id}-${idx}`}
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-item group"
              aria-label={project.title}
              title={project.title}
            >
              <div className="relative h-[88px] w-[156px] md:h-[96px] md:w-[168px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-accent/20 via-blue-500/10 to-transparent" />
                <div className="absolute left-3 right-3 bottom-2 text-[11px] text-white/80 font-mono tracking-wide truncate">
                  {project.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
