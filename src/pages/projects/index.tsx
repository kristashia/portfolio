"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal, Project } from "@/components/ProjectModal";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";
import project8 from "@/assets/project8.jpg";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<string>("All");

  const projects: Project[] = [
    {
      id: "2",
      title: "My Wellness Tracker",
      description:
        "A wellness tracking app to log workouts, meals, and progress toward fitness goals.",
      fullDescription:
        "My Wellness Tracker helps users log workouts including sets, reps, and supersets, track nutrition, calories, water intake, macros, and weight. Provides charts and progress visualization for long-term fitness goals.",
      image: project2,
      videoUrl: "https://youtu.be/H-oh7_ZOZmM",
      technologies: ["React", "Node.js", "JSON", "Supabase", "Express.js", "Tailwind CSS"],
      liveUrl: "https://wellness-tracker-demo.vercel.app",
      githubUrl: "https://github.com/kristashia/wellness-app",
      type: "Full Stack Development",
    },
    {
      id: "1",
      title: "TripMate",
      description:
        "A travel planning web app to organize trips, share experiences, and manage budgets.",
      fullDescription:
        "TripMate allows users to organize trips, document experiences with photos and notes, share journeys with friends, and manage budgets. Features real-time collaboration and offline support with PWA. Available in both light and dark modes.",
      image: project1,
      videoUrl: "https://youtu.be/YHcQ5VNT93o",
      technologies: ["Firebase", "JSON", "React", "HTML", "Tailwind CSS", "Node.js"],
      liveUrl: "https://tripmate-jade.vercel.app/",
      githubUrl: "https://github.com/kristashia/travel-app",
      type: "Full Stack Development"
    },
    {
      id: "3",
      title: "Pizza Ordering System",
      description: "Admin's view for an online pizza ordering app.",
      fullDescription:
        "A pizza ordering system from admin's point of view. Admin can view, edit and delete customers and orders.",
      image: project3,
      technologies: ["Node.js", "Express.js", "Bootstrap"],
      videoUrl: "https://youtu.be/j1uJ346GPJ0",
      githubUrl: "https://github.com/kristashia/pizza-ordering-system",
      type: "Full Stack Development",
    },
    {
      id: "6",
      title: "My Creative Portfolio",
      description: "A portfolio website showcasing my creative design and coding work.",
      fullDescription:
        "This portfolio website is the one you are on right now. It highlights my projects, design skills, and development expertise. Features interactive UI, animations, and responsive design to provide a polished professional presence. Avalable in both light and dark modes.",
      image: project4,
      technologies: ["Node.js", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://kristashia.com",
      githubUrl: "https://github.com/kristashia/portfolio",
      type: "Full Stack Development",
    },
        {
            id: "4",
            title:
              "Evaluating Applied Behavior Analysis Intervention Using Augmented Reality for Children with Autism Spectrum Disorder (ASD)",
            description:
              "Enhancing ABA therapy with augmented reality for children with autism.",
            fullDescription:
              "This project focuses on developing and validating an augmented reality (AR) application designed to enhance the effectiveness of Applied Behavior Analysis (ABA) therapy for children with Autism Spectrum Disorder (ASD). The tool leverages AR to create interactive and engaging experiences that support skill development and therapy delivery, with the goal of improving therapeutic outcomes and accessibility.",
            image: project5,
            videoUrl: "https://youtu.be/EhUuc1l8EU4",
            technologies: ["Figma"],
            type: "UI/UX Design",
          },          
    {
      id: "5",
      title: "Mood Journal",
      description: "A journaling app where users create journal entries, log moods, add emojis, and upload photos.",
      fullDescription:
        "Mood Journal helps users record their thoughts and feelings daily. Users can attach photos, select mood emojis,and upload voice recordings.",
      image: project6,
      technologies: ["Figma"],
      type: "UI/UX Design",
    },
  ];

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
            Explore my work in full-stack development and UI/UX design.
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
              <p className="text-muted-foreground">
                No projects found for this category.
              </p>
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
