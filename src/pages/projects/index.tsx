"use client";

import { useState } from "react";
import { ProjectModal, Project } from "@/components/ProjectModal";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<string>("All");

  const projects: Project[] = [
    {
      id: "2",
      title: "My Wellness Tracker",
      description: "A comprehensive wellness tracking app with intuitive data visualization and progress analytics.",
      fullDescription: "Led the end-to-end product design and full-stack development of a fitness tracking application that enables users to log workouts, track nutrition, and monitor progress through interactive visualizations. Conducted user research to identify key pain points in fitness tracking, designed intuitive dashboards for workout logging (sets, reps, supersets) and nutrition tracking (calories, macros, water intake), and implemented responsive data visualization charts. Managed the complete development lifecycle using React, Node.js, and Supabase to deliver a seamless user experience that helps users maintain long-term fitness goals.",
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
      description: "A collaborative travel planning platform with real-time features and PWA capabilities.",
      fullDescription: "Designed and developed a comprehensive travel planning web application that enables users to organize trips, document experiences with photos and notes, share journeys with friends, and manage budgets collaboratively. Conducted user research to understand travel planning pain points and designed an intuitive interface supporting both light and dark modes. Implemented real-time collaboration features and Progressive Web App (PWA) functionality for offline support. Managed the complete project lifecycle from concept to deployment, utilizing Firebase for real-time data synchronization and React with Tailwind CSS for a responsive, engaging user interface.",
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
      description: "Admin dashboard for managing orders and customer relationships in a pizza business.",
      fullDescription: "Designed and developed an administrative dashboard for a pizza ordering system, focusing on workflow efficiency and data management. Created user flows and wireframes for order management, customer relationship management, and inventory tracking. Implemented a responsive interface using Bootstrap that allows administrators to view, edit, and delete customer information and orders seamlessly. Applied UX principles to streamline complex administrative tasks and reduce operational friction for business users.",
      image: project3,
      technologies: ["Node.js", "Express.js", "Bootstrap"],
      videoUrl: "https://youtu.be/j1uJ346GPJ0",
      githubUrl: "https://github.com/kristashia/pizza-ordering-system",
      type: "Full Stack Development",
    },
    {
      id: "6",
      title: "My Creative Portfolio",
      description: "A responsive portfolio platform showcasing design and development expertise.",
      fullDescription: "Designed and developed a responsive portfolio website to showcase my creative design and full-stack development capabilities. Conducted extensive user research to create an optimal information architecture and user flow for potential employers and clients. Implemented interactive UI elements, smooth animations using Framer Motion, and a comprehensive design system supporting both light and dark modes. Managed the complete design-to-development pipeline, ensuring pixel-perfect implementation and optimal performance across all devices while maintaining accessibility standards.",
      image: project4,
      technologies: ["Node.js", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://kristashia.com",
      githubUrl: "https://github.com/kristashia/portfolio",
      type: "Full Stack Development",
    },
    {
      id: "4",
      title: "AR ABA Therapy for Children with Autism",
      description: "Augmented reality solution enhancing behavioral therapy through immersive experiences.",
      fullDescription: "Led UX research and design for an innovative augmented reality application aimed at enhancing Applied Behavior Analysis (ABA) therapy for children with Autism Spectrum Disorder (ASD). Conducted extensive user research including stakeholder interviews with clinicians, therapists, and caregivers to identify key challenges in traditional therapy methods. Designed intuitive AR interfaces and interactive experiences that maintain therapeutic integrity while increasing engagement for children. Created detailed wireframes, user flows, and high-fidelity prototypes in Figma, focusing on accessibility and ease of use for both therapists and children. Collaborated with clinical teams to ensure the design met medical standards and effectively supported skill development goals.",
      image: project5,
      videoUrl: "https://youtu.be/EhUuc1l8EU4",
      technologies: ["Figma", "User Research", "Prototyping", "Accessibility Design"],
      type: "UI/UX Design",
    },          
    {
      id: "5",
      title: "Mood Journal",
      description: "Emotion tracking application with multimedia journaling capabilities.",
      fullDescription: "Designed a comprehensive mood tracking and journaling application focused on emotional well-being and self-reflection. Conducted user research to understand journaling habits and emotional tracking needs, resulting in an intuitive interface for daily mood logging. Created user flows and wireframes for multimedia journal entries including photo attachments, mood emoji selection, and voice recording capabilities. Developed high-fidelity prototypes in Figma and conducted usability testing to refine interaction flows and enhance emotional engagement. Focused on creating a clean, friendly user experience that encourages consistent daily use while maintaining privacy and data security.",
      image: project6,
      technologies: ["Figma", "User Research", "Usability Testing", "Interaction Design"],
      type: "UI/UX Design",
    },
  ];

  const projectTypes = ["All", "Full Stack Development", "UI/UX Design"];

  const filteredProjects = filterType === "All" 
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
            Explore my work in full-stack development and UI/UX design. From user research and prototyping to full implementation and project leadership.
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

      {/* Projects Grid - Square Neon Cards */}
      <section>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Square Neon Card */}
              <div 
                className="card-hover w-full h-[480px] mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,180,100,0.3)] group"
                onClick={() => handleProjectClick(project)}
              >
                {/* Image Section - Square */}
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full text-sm font-semibold shadow-lg">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 h-[232px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gradient transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg text-xs font-medium shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Area */}
                  <div className="flex justify-between items-center">
                    <span className="text-pink-500 font-semibold text-sm hover:text-pink-600 transition-colors group-hover:translate-x-1 transform duration-300">
                      View Details →
                    </span>
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex gap-1">
                        {project.liveUrl && (
                          <span className="px-2 py-1 bg-green-500 text-white rounded text-xs">
                            Live
                          </span>
                        )}
                        {project.githubUrl && (
                          <span className="px-2 py-1 bg-gray-500 text-white rounded text-xs">
                            Code
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Neon Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-3 text-center py-12">
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