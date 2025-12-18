import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS } from "../constants";
import { ProjectData } from "../types";
import ScreenBackground from "../components/ScreenBackground";
import SectionHeader from "../components/SectionHeader";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  return (
    <section
      id="projects"
      className="section min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <ScreenBackground />

      <div className="container-custom relative z-10 w-full py-16 md:py-24">
        <SectionHeader
          label="PORTFÓLIO"
          title={
            <>
              Projetos em <span className="gradient-text">Destaque</span>
            </>
          }
          description="Uma seleção de projetos que demonstram minha paixão por criar soluções inovadoras e funcionais."
          align="center"
        />

        {/* Projects Grid */}
        <div className="mt-12 relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fadeUp">
              {PROJECTS.map((project) => (
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
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
