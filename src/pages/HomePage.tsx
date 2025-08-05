"use client";

import { CloudDrizzle, Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HomePage() {
  const skills = [
    {
      icon: Code,
      title: "Front End Engineering",
      description: "Building responsive and interactive user interfaces",
    },
    {
      icon: CloudDrizzle,
      title: "Full Stack Dev",
      description: "Developing scalable web applications end-to-end with modern technologies",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences",
    },
    {
      icon: Zap,
      title: "Product Design",
      description: "Crafting thoughtful product solutions that solve real problems",
    },
  ];

  const techStack = [
    "JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "C", "Ruby",
    "SQL", "HTML/CSS", "JSON", "React", "Next.js", "React Native", "Node.js",
    "Express", "Sequelize", "Bootstrap", "Ruby on Rails", "Unity (2D/3D)",
    "Tailwind CSS", "Jest", "PyTest", "JUnit","PostgreSQL","AWS",
    "Azure", "Vercel", "Netlify", "Firebase", "CI/CD with GitHub Actions",
    "Git", "GitHub","Docker", "Jira", "Postman", "Power BI", "Power Automate", "Figma",
    "Adobe Creative Suite", "InVision", "Axure RP", "Marvel", "Sketch"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={"/assets/hero-background.jpg"}
            alt="Hero background"
            className="w-full h-full object-cover opacity-0"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Headline with typing + fade-in */}
            <motion.h1
              className="font-bold text-[3.5rem] md:text-7xl mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <TypeAnimation
                sequence={[
                  "Hi, I'm Kristashia",
                  2000,
                  "",
                  500,
                  "Welcome to my portfolio!",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </motion.h1>

          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating end-to-end digital solutions that combine
              beautiful design with robust functionality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover w-[18rem] mx-auto">
                  <CardContent className="p-6 text-center">
                    <div className="w-19 h-16 bg-gradient-to-tr from-pink-300 via-pink-400 to-yellow-300 rounded-l flex items-center justify-center mx-auto mb-7 shadow-lg">
                      <skill.icon className="h-8 w-8 text-white drop-shadow-md" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="inline-flex items-center px-4 py-2 rounded-full 
                  bg-gradient-to-r from-pink-300 via-pink-400 to-yellow-300 
                  text-white font-semibold text-sm cursor-default select-none
                  shadow-[0_0_12px_rgba(255,192,203,0.8)]
                  animate-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
