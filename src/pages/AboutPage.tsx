import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profilePhoto.png";

export default function AboutPage() {

  const funFacts = [
    "I love to bake 🍰",
    "The beach is my happy place 🏖️",
    "I'm addicted to HayDay🌾",
    "I have never broken a bone",
  ];

  return (
    <div className="pt-40 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Hero / About Me */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold">
                About{" "}
                <span
                  className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-glow"
                >
                  Me
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
              My journey into tech started where many do: creating things for fun. 
              I began by designing flyers, which led me down the rabbit hole of coding. 
              There, I made a powerful discovery, I didn't have to choose between design 
              and development. I was captivated by both. This dual passion defines my approach today. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              As a Product Designer, I focus on the user: understanding their needs, crafting intuitive 
              flows, and designing interfaces that feel seamless. My experience in Project Management ensures 
              these designs are strategically guided to launch, working effectively with cross-functional teams to 
              turn vision into reality. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              My secret weapon? Hands-on experience in Full-Stack Development. 
              It allows me to design with technical feasibility in mind, create realistic prototypes, and 
              collaborate seamlessly with engineers to build higher-fidelity products, faster.
              </p>
            </div>

            <div className="animate-fade-up [animation-delay:200ms] flex justify-center">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-72 h-72 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent my-16"></div>

        {/* Stats Section */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-up [animation-delay:100ms]">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-up [animation-delay:200ms]">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent my-16"></div>

      
        {/* Fun Facts */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Fun Facts</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {funFacts.map((fact, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300 
                           text-white px-6 py-5 rounded-lg 
                           shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.03]"
              >
                {fact}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
