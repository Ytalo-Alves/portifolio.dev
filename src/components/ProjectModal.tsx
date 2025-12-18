import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheck } from "react-icons/fa";
import { ProjectData } from "../types";

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Evita scroll do body quando o modal está aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-8 animate-fadeUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
          aria-label="Fechar modal"
        >
          <FaTimes
            className="text-white group-hover:text-accent transition-colors"
            size={20}
          />
        </button>

        {/* Project Image */}
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-mono rounded-lg bg-white/5 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-white">Sobre o Projeto</h3>
          <p className="text-text-secondary leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">
              Principais Funcionalidades
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-accent/20 transition-colors duration-300"
                >
                  <FaCheck
                    className="text-accent mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-xl transition-all duration-300 group"
            >
              <FaGithub className="group-hover:text-accent transition-colors" />
              <span>Ver Código</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-xl transition-all duration-300"
            >
              <FaExternalLinkAlt />
              <span>Ver Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
