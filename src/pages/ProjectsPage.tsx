import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal, Project } from "@/components/ProjectModal";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<string>("All");

  const projects: Project[] = [
    // Web Apps
    {
      id: "1",
      title: "My Wellness Tracker",
      description:
        "A wellness tracking app to log workouts with sets, reps, and supersets, track session times, water intake, calories in/out, weight, protein and macro goals and much more.",
      fullDescription:
        "My Wellness Tracker is a comprehensive app that helps users log workouts including sets, reps, and supersets. It tracks session times, water intake, calories consumed and burned, weight, protein intake, and macro goals. The app aims to provide detailed insights and progress tracking to support wellness journeys.",
      image: project1,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      liveUrl: "https://wellness-tracker-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/wellness-tracker",
      challenges: [
        "Designed an intuitive UI for complex workout logging",
        "Implemented tracking for multiple health metrics",
        "Ensured data persistence and syncing across devices",
      ],
      role: "Full-Stack Developer - Led the entire project from design to deployment",
      type: "Web App",
    },
    {
      id: "2",
      title: "TripMate",
      description:
        "Travel web app that helps you plan upcoming trips, journal your experience, upload photos, share with friends, and budget.",
      fullDescription:
        "TripMate is a travel planning and journaling app that allows users to organize their upcoming trips, document experiences with photos and notes, share journeys with friends, and manage budgets effectively. It supports collaborative trip planning and provides easy sharing options.",
      image: project2,
      technologies: ["Vue.js", "Firebase", "PWA", "Vuetify"],
      liveUrl: "https://tripmate-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/tripmate",
      challenges: [
        "Built offline-first capabilities with PWA",
        "Implemented real-time collaboration and sharing",
        "Designed seamless photo uploads and journaling interface",
      ],
      role: "Frontend Developer & UX Designer - Developed frontend and user experience",
      type: "Web App",
    },
    {
      id: "3",
      title: "Pizza Ordering System",
      description:
        "An online pizza ordering system with menu customization, cart, and payment integration.",
      fullDescription:
        "This Pizza Ordering System enables users to browse customizable pizzas, add toppings, manage their cart, and complete orders with secure payment processing. The app also includes an admin dashboard to manage orders and update menu items.",
      image: project3,
      technologies: [
        "Next.js",
        "Stripe",
        "React Context",
        "Tailwind CSS",
        "Node.js",
      ],
      liveUrl: "https://pizza-ordering-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/pizza-ordering-system",
      challenges: [
        "Created dynamic pizza customization options",
        "Integrated Stripe for payment processing",
        "Built real-time order tracking for customers and admins",
      ],
      role: "Full-Stack Developer - Responsible for both frontend and backend development",
      type: "Web App",
    },

    // Mobile Apps (placeholders)
    {
      id: "4",
      title: "Fitness Buddy (Mobile)",
      description:
        "Placeholder mobile app for fitness tracking with workout plans and progress visualization.",
      fullDescription:
        "This mobile app placeholder represents a fitness tracking solution with features like workout plans and progress charts. Built using React Native (or Flutter), it focuses on mobile-friendly UX.",
      image: project1,
      technologies: ["React Native", "Redux", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "Mobile Developer",
      type: "Mobile App",
    },
    {
      id: "5",
      title: "Travel Journal (Mobile)",
      description:
        "Placeholder mobile app for journaling and photo sharing during travel adventures.",
      fullDescription:
        "A travel journal mobile app placeholder that lets users capture and share trip moments on the go.",
      image: project2,
      technologies: ["Flutter", "Firebase", "Cloud Storage"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "Mobile Developer",
      type: "Mobile App",
    },
    {
      id: "6",
      title: "Recipe Finder (Mobile)",
      description:
        "Placeholder mobile app to find and save recipes with grocery list integration.",
      fullDescription:
        "A placeholder mobile app for recipe searching, saving favorites, and managing grocery lists.",
      image: project3,
      technologies: ["Swift", "Core Data", "Alamofire"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "Mobile Developer",
      type: "Mobile App",
    },

    // UI/UX Design (placeholders)
    {
      id: "7",
      title: "E-Commerce Redesign",
      description:
        "Placeholder UI/UX project focused on redesigning an e-commerce platform for better user engagement.",
      fullDescription:
        "Redesigned UI/UX of an e-commerce platform to improve navigation, checkout flow, and overall user satisfaction.",
      image: project1,
      technologies: ["Figma", "Adobe XD", "User Research"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "UI/UX Designer",
      type: "UI/UX Design",
    },
    {
      id: "8",
      title: "Mobile Banking App Concept",
      description:
        "Placeholder project for a mobile banking app focusing on ease of use and security features.",
      fullDescription:
        "Designed concept screens and user flows for a secure and user-friendly mobile banking experience.",
      image: project2,
      technologies: ["Sketch", "InVision", "User Testing"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "UI/UX Designer",
      type: "UI/UX Design",
    },
    {
      id: "9",
      title: "Healthcare Dashboard",
      description:
        "Placeholder UI/UX project for a dashboard to track patient data and analytics.",
      fullDescription:
        "Created wireframes and prototypes for a healthcare analytics dashboard aimed at medical professionals.",
      image: project3,
      technologies: ["Figma", "Axure", "Usability Testing"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "UI/UX Designer",
      type: "UI/UX Design",
    },

    // Game Development (placeholders)
    {
      id: "10",
      title: "2D Platformer Game",
      description:
        "Placeholder 2D platformer game built with Unity showcasing basic mechanics and levels.",
      fullDescription:
        "Developed basic gameplay mechanics, character controls, and level design for a 2D platformer using Unity.",
      image: project1,
      technologies: ["Unity", "C#"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "Game Developer",
      type: "Game Development",
    },
    {
      id: "11",
      title: "Puzzle Game",
      description:
        "Placeholder puzzle game focusing on logic challenges and progression.",
      fullDescription:
        "Designed and developed a puzzle game with multiple levels and increasing difficulty using Godot engine.",
      image: project2,
      technologies: ["Godot", "GDScript"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "Game Developer",
      type: "Game Development",
    },
    {
      id: "12",
      title: "VR Exploration Experience",
      description:
        "Placeholder VR project providing immersive exploration environments.",
      fullDescription:
        "Created a virtual reality exploration experience with interactive environments using Unreal Engine.",
      image: project3,
      technologies: ["Unreal Engine", "Blueprints", "C++"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [],
      role: "Game Developer",
      type: "Game Development",
    },
  ];

  const projectTypes = [
    "All",
    "Web App",
    "Mobile App",
    "UI/UX Design",
    "Game Development",
  ];

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
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack
            development, mobile app development, UI/UX design, and game deveolpment. Each project
            represents a unique challenge and learning experience.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filterType === type
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div key={project.id} style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found for this category.
              </p>
            </div>
          )}
        </section>

        {/* Stats Section */}
        <section className="mt-20 bg-surface rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-up [animation-delay:100ms]">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-up [animation-delay:200ms]">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="animate-fade-up [animation-delay:300ms]">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
