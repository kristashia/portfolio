import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profilePhoto.png";

export default function AboutPage() {
  const journeySteps = [
    { year: "2021", event: "Began my college journey in Computer Science and started creating real-world projects" },
    { year: "2022", event: "Worked as a Digital Engagement and Design Associate, gaining hands-on experience in interactive development and user-focused design" },
    { year: "2023", event: "Worked as an Interactive Developer, gaining hands-on experience with modern web, and AR/VR technologies" },
    { year: "2024", event: "Sharpened backend development expertise, building full-stack projects and APIs" },
    { year: "2025", event: "Started the IBM Full-Stack Professional Certificate, advancing knowledge in scalable app development" },
  ];

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
                I am a passionate and multifaceted individual with years of experience 
                and a wealth of knowledge in technology. From my earliest days writing 
                code as a teenager to professional roles that challenged me to adapt 
                and innovate, I have cultivated a mindset of continuous learning and 
                improvement. I thrive at the intersection of development, design, and 
                strategy, where creativity meets engineering to craft experiences that 
                are both intuitive and impactful.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans full-stack development, UI/UX design, and product 
                engineering. I enjoy creating user-centered designs that are not only 
                functional but also feel seamless and engaging. With a keen eye for 
                detail and a drive to push boundaries, I approach every project as 
                an opportunity to solve problems in ways that make technology more 
                human-centered. Always building, always learning, always curious. I embrace new 
                challenges and tools to deliver meaningful results.
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
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
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

        {/* My Journey Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-16 text-center">My Journey</h2>
          <div
            className="relative max-w-4xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:-translate-x-1/2 
                       before:bg-gradient-to-b before:from-pink-300 via-orange-300 to-yellow-300"
          >
            {journeySteps.map(({ year, event }, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`mb-20 w-full flex justify-${isLeft ? "end" : "start"} items-center relative`}
                >
                  <div className="w-1/2 px-6">
                    {isLeft && (
                      <div className="text-right">
                        <time className="font-semibold text-lg bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                          {year}
                        </time>
                        <p className="text-muted-foreground mt-2">{event}</p>
                      </div>
                    )}
                  </div>

                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-tr from-pink-300 via-orange-300 to-yellow-300
                               rounded-full shadow-md animate-pulse-glow"
                  />

                  <div className="w-1/2 px-6">
                    {!isLeft && (
                      <div className="text-left">
                        <time className="font-semibold text-lg bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                          {year}
                        </time>
                        <p className="text-muted-foreground mt-2">{event}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent my-16"></div>

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
