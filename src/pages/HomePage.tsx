"use client";

import { CloudDrizzle, Code, Palette, User, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const skills = [
  {
    icon: User,
    title: "UX Research & Strategy",
    description: "Conducting user research and translating insights into actionable product strategy",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces from wireframes to high-fidelity prototypes",
  },
  {
    icon: Zap,
    title: "Product Management",
    description: "Leading cross-functional teams from concept to launch using Agile methodologies",
  },
  {
    icon: Code,
    title: "Technical Prototyping",
    description: "Building functional prototypes and collaborating seamlessly with engineering teams",
  }
];

const techCategories = {
  "Design & Prototyping": [
    "Figma", "Sketch", "InVision", "Axure RP", "Marvel", "Adobe Creative Suite", "Miro"
  ],

 "Languages & Frameworks": [
    "JavaScript", "TypeScript", "React", "HTML5", "CSS3", "Tailwind CSS",
    "Next.js", "Node.js", "Express", "Python", "Go", "Vue.js", "Angular", 
    "Java", "C#", "C++", "C", "Ruby", "Ruby on Rails", "Flutter", "React Native", "Bootstrap", "Sequelize"
  ],
  "Databases & APIs": [
    "PostgreSQL", "MySQL", "MongoDB", "NoSQL", "GraphQL", "RESTful APIs", "SQL"
  ],
  "Testing": [
    "Jest", "PyTest", "JUnit"
  ],
  "DevOps & Tools": [
    "Git", "GitHub", "Docker", "Kubernetes", "CI/CD",
    "AWS", "Azure", "Firebase", "Supabase", "Terraform", "Vercel", "Netlify",
    "Jira", "Postman", "Power BI", "Power Automate"
  ],
  
  "AI Dev Tools": [
    "LangChain", "Claude", "OpenAI", "GitHub Copilot", "Cursor", "Windsurf"
  ]
};

function TechStackSection() {
  const sortedCategories = Object.entries(techCategories).sort(
    ([, techsA], [, techsB]) => techsA.length - techsB.length
  );

  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold mb-10 text-center">Tech Stack</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {sortedCategories.map(([category, techs], i) => (
            <motion.div
              key={category}
              className="card-hover flex flex-col border border-gray-300 rounded-md px-6 py-5 w-full min-h-[200px] max-h-[300px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center overflow-y-auto pr-1">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 border border-gray-300 rounded cursor-default select-none whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
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
            I bridge user experience design and technical execution—transforming complex problems 
            into intuitive interfaces and leading cross-functional teams to bring them to life.
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
               <Card className="card-hover w-[18rem] mx-auto h-full">
  <CardContent className="p-6 text-center flex flex-col h-[280px]"> {/* Fixed height */}
    <div className="w-19 h-16 bg-gradient-to-tr from-pink-300 via-pink-400 to-yellow-300 rounded-l flex items-center justify-center mx-auto mb-7 shadow-lg">
      <skill.icon className="h-8 w-8 text-white drop-shadow-md" />
    </div>
    <div className="flex-grow flex flex-col justify-between"> {/* This ensures content spacing */}
      <div>
        <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
        <p className="text-muted-foreground">{skill.description}</p>
      </div>
    </div>
  </CardContent>
</Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection />
    </div>
  );
}
