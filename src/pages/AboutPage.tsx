import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profilePhoto.png";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  About <span className="text-gradient">Me</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a multifaceted full-stack engineer with a passion for building
                  scalable, user-focused web and mobile applications. I work at the
                  intersection of front-end development, UI/UX design, and web
                  engineering, crafting seamless, high-impact digital experiences.
                </p>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether designing intuitive interfaces or developing full-stack
                solutions, I aim to create technology that feels as good as it
                functions. Always curious, I embrace new tools and challenges to
                push the boundaries of what's possible.
              </p>
            </div>

            <div className="animate-fade-up [animation-delay:200ms]">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack (left) + What I Do (right) */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Tech Stack on Left */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Next.js",
                  "GraphQL",
                  "Docker",
                  "Kubernetes",
                  "Tailwind CSS",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="btn-skill">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* What I Do on Right */}
            <div className="text-center md:text-center">
              <h2 className="text-3xl font-bold mb-8">What I Do</h2>
              <ul className="space-y-4 text-lg font-semibold text-muted-foreground">
                <li>Frontend Development</li>
                <li>Full Stack Engineering</li>
                <li>UI/UX Design</li>
                <li>Web Engineer / Dev</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
