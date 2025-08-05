"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal, Project } from "@/components/ProjectModal";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<string>("All");

  const projectTypes = ["All", "Full Stack Development", "UI/UX Design"];

  const filteredProjects =
    filterType === "All"
      ? projects
      : projects.filter((project) => project.type === filterType);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="pt-40 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my work in full-stack development, and UI/UX Design.
          </p>
        </section>

        {/* Filter Menu */}
        <section className="max-w-3xl mx-auto mb-16 flex justify-center items-center gap-4 flex-wrap">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300
                         text-white px-6 py-3 rounded-lg
                         shadow-[0_0_20px_rgba(255,180,100,0.7)]
                         transition-transform transform hover:scale-[1.05]
                         font-semibold select-none
                         ${filterType === type ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
            >
              {type}
            </button>
          ))}
        </section>
      </div>

      {/* Projects Grid */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
