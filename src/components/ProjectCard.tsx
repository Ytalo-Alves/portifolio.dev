import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  techs,
  githubUrl,
  liveUrl,
  onClick,
}: ProjectCardProps) => {
  return (
    <div className="group glass-card rounded-xl overflow-hidden relative hover:border-accent/30 transition-all duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden" onClick={onClick}>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* View Details Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-lg flex items-center gap-2 text-white font-medium">
            <FaEye />
            <span>Ver Detalhes</span>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 relative z-20">
        <h3
          className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 cursor-pointer"
          onClick={onClick}
        >
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techs.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
          {techs.length > 3 && (
            <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-text-secondary border border-white/10">
              +{techs.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
            >
              <FaGithub /> Código
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
