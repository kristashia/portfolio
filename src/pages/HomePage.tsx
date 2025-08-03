import { ArrowRight, Code, Palette, Zap, Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project1.jpg"; // Replace images as needed
import project2 from "@/assets/project2.jpg";

export default function HomePage() {
  const featuredProjects = [
    {
      title: "My Wellness Tracker",
      description:
        "A wellness tracking app to log workouts with sets, reps, and supersets, track session times, water intake, calories in/out, weight, protein and macro goals and much more.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "TripMate",
      description:
        "Travel web app that helps you plan upcoming trips, journal your experience, upload photos, share with friends, and budget.",
      image: project2,
      technologies: ["Vue.js", "Firebase", "PWA"],
    },
  ];

  const skills = [
    {
      icon: Code,
      title: "Front End Engineering",
      description: "Building responsive and interactive user interfaces",
    },
    {
      icon: Code,
      title: "Full Stack Dev",
      description: "Developing scalable web applications end-to-end",
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm{" "}
                <span className="text-gradient">Kristashia</span>{" "}
                <span className="inline-block animate-bounce-gentle">👋</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                A multifaceted engineer exploring the overlap of front-end, UI/UX,
                full-stack development, AI, and immersive tech like AR/VR.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
                <Link to="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Get In Touch Icons */}
              <div className="flex justify-center items-center">
  <a
    href="https://github.com/kristashia"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Github"
    className="btn-ghost p-3 rounded-lg hover:bg-primary hover:text-white transition mr-3 last:mr-0"
  >
    <Github className="h-6 w-6" />
  </a>

  <a
    href="mailto:your.email@kristashia.com"
    aria-label="Email"
    className="btn-ghost p-3 rounded-lg hover:bg-secondary hover:text-white transition mr-3 last:mr-0"
  >
    <Mail className="h-6 w-6" />
  </a>

  <a
    href="https://linkedin.com/in/krtistashia"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="btn-ghost p-3 rounded-lg hover:bg-accent hover:text-white transition"
  >
    <Linkedin className="h-6 w-6" />
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-60 animate-float">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
        </div>
        <div className="absolute top-40 right-16 opacity-40 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-6 h-6 bg-secondary rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-20 opacity-50 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-3 h-3 bg-accent rounded-full"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating end-to-end digital solutions that combine beautiful design with robust functionality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and passion for creating amazing digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="card-hover animate-fade-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="btn-skill">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
