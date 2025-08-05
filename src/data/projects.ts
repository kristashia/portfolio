import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";
import project8 from "@/assets/project8.jpg";

import type { Project } from "@/components/ProjectModal";

export const projects: Project[] = [
    {
      id: "2",
      title: "My Wellness Tracker",
      description:
        "A wellness tracking app to log workouts, meals, and progress toward fitness goals.",
      fullDescription:
        "My Wellness Tracker helps users log workouts including sets, reps, and supersets, track nutrition, calories, water intake, macros, and weight. Provides charts and progress visualization for long-term fitness goals.",
      image: project2,
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
        "TripMate allows users to organize trips, document experiences with photos and notes, share journeys with friends, and manage budgets. Features real-time collaboration and offline support with PWA.",
      image: project1,
      technologies: ["Firebase", "JSON", "React", "HTML", "Tailwind CSS", "Node.js"],
      liveUrl: "https://tripmate-demo.vercel.app",
      githubUrl: "https://github.com/kristashia/travel-app",
      type: "Full Stack Development"
    },
    {
      id: "6",
      title: "Pizza Ordering System",
      description: "An online pizza ordering app with menu customization and payments.",
      fullDescription:
        "A pizza ordering system where users customize pizzas, manage their cart, and checkout securely with Stripe. Includes admin features for managing menu items and tracking orders in real-time.",
      image: project3,
      technologies: ["Node.js", "Express.js", "React", "Bootstrap"],
      githubUrl: "https://github.com/kristashia/pizza-ordering-system",
      type: "Full Stack Development",
    },
    {
      id: "4",
      title: "My Creative Portfolio",
      description: "A portfolio website showcasing my creative design and coding work.",
      fullDescription:
        "This portfolio website highlights my projects, design skills, and development expertise. Features interactive UI, animations, and responsive design to provide a polished professional presence.",
      image: project4,
      technologies: ["Node.js", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://kristashia.com",
      githubUrl: "https://github.com/kristashia/portfolio",
      type: "Full Stack Development",
    },
    {
      id: "5",
      title: "Evaluating Applied Behavior Analysis Intervention Using Augmented Reality for Children with Autism Spectrum Disorder (ASD)",
      description: "Enhancing ABA therapy with augmented reality for children with autism.",
      fullDescription:
        "This project focuses on developing and validating an augmented reality (AR) application designed to enhance the effectiveness of Applied Behavior Analysis (ABA) therapy for children with Autism Spectrum Disorder (ASD). The tool leverages AR to create interactive and engaging experiences that support skill development and therapy delivery, with the goal of improving therapeutic outcomes and accessibility.",
      image: project5,
      technologies: ["Figma"],
      type: "UI/UX Design",
    },
    {
      id: "3",
      title: "Mood Journal",
      description: "A journaling app where users create journal entries, log moods, add emojis, and upload photos.",
      fullDescription:
        "Mood Journal helps users record their thoughts and feelings daily. Users can attach photos, select mood emojis,and upload voice recordings.",
      image: project6,
      technologies: ["Figma"],
      type: "UI/UX Design",
    },
    
  ];
