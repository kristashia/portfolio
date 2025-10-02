import { Download, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const resumeData = {
    name: "Kristashia Murray",
    title: "Product Designer & UX Strategist",
    contact: {
      email: "hello@kristashia.com",
      linkedin: "linkedin.com/in/kristashia",
      portfolio: "kristashia.com",
      github: "github.com/kristashia"
    },
    summary: "Product Designer and UX Strategist with 3+ years of experience designing intuitive, research-driven digital products across education, health tech, and nonprofit sectors. Skilled in end-to-end product development from user research and wireframing to prototyping and strategic project leadership. Technically fluent in front-end development with a background in Computer Science, enabling effective collaboration with engineering teams to ship feasible, high-fidelity experiences.",
    experience: [
      {
        title: "UX Designer & Researcher",
        company: "VESL Lab, University of Miami",
        location: "Miami, FL",
        dates: "January 2023 – May 2025",
        achievements: [
          "Led UX design and research for 5+ AR/VR clinical training simulations deployed at Bascom Palmer Eye Institute, improving medical training for 650+ users",
          "Conducted user research, clinical stakeholder interviews, and usability testing to optimize workflows and interface design",
          "Developed detailed wireframes, user flows, and interactive prototypes guiding AR/VR development",
          "Collaborated closely with Agile teams of engineers and clinicians, ensuring design met technical and regulatory standards",
          "Advocated for accessibility and clarity, translating complex medical procedures into intuitive AR/VR experiences"
        ]
      },
      {
        title: "Digital Student Engagement and Design Associate",
        company: "University of Miami, Intensive English Program",
        location: "Miami, FL",
        dates: "May 2022 – May 2025",
        achievements: [
          "Enhanced onboarding and communication workflows for 80+ international students per semester",
          "Designed 150+ digital assets for events and communications, driving a 77% increase in student engagement",
          "Managed social media, executing targeted campaigns that boosted followers by 65%",
          "Created weekly ESL-friendly newsletters, ensuring clear and accessible communication"
        ]
      },
      {
        title: "Lead Graphic Designer",
        company: "School of Education and Human Development, University of Miami",
        location: "Miami, FL",
        dates: "March 2022 – August 2022",
        achievements: [
          "Produced 25+ academic brochures, flyers, and visual assets, contributing to a 40% increase in prospective student inquiries",
          "Designed multi-page course guides used in graduate admissions and advising",
          "Collaborated with faculty and marketing to ensure brand alignment and clear messaging"
        ]
      },
      {
        title: "Freelance Graphic Designer and Business Strategy Consultant",
        company: "Ashia Digital Lab",
        location: "Remote",
        dates: "January 2020 – December 2021",
        achievements: [
          "Delivered graphic design and branding solutions to small businesses and startups, improving brand consistency and customer engagement",
          "Developed business strategies including market analysis, competitor research, and operational planning to support client growth objectives",
          "Managed project timelines, client communications, and deliverables, ensuring high satisfaction and repeat business",
          "Collaborated remotely with diverse clients, adapting to changing requirements and priorities to meet deadlines"
        ]
      }
    ],
    projects: [
      {
        name: "TripMate - Travel Planning Platform",
        description: "A travel planning web app to organize trips, document experiences with photos and notes, share journeys with friends, and manage budgets. Features real-time collaboration and offline support with PWA.",
        technologies: ["React", "Firebase", "Node.js", "Tailwind CSS", "Express.js"],
        achievements: ["Real-time collaboration", "PWA offline support", "Light/dark mode"]
      },
      {
        name: "My Wellness Tracker",
        description: "A fitness tracking app featuring workout, nutrition, and weight monitoring. Developed with interactive visualizations for user insights.",
        technologies: ["React", "Node.js", "Supabase", "Tailwind CSS", "REST APIs"],
        achievements: ["Data visualization", "Workout logging", "Nutrition tracking"]
      },
      {
        name: "Pizza Ordering System",
        description: "Admin dashboard for managing orders and customer relationships in a pizza business. Features order management, customer CRM, and inventory tracking.",
        technologies: ["Node.js", "Express.js", "Bootstrap", "MySQL", "REST APIs"],
        achievements: ["Admin dashboard", "Order management", "Customer CRM"]
      },
      {
        name: "AR ABA Therapy for Children with Autism",
        description: "Augmented reality application designed to enhance Applied Behavior Analysis therapy for children with Autism Spectrum Disorder.",
        technologies: ["Figma", "User Research", "Prototyping", "Accessibility Design", "AR/VR"],
        achievements: ["Clinical collaboration", "Accessibility focus", "Therapeutic design"]
      }
    ],
    education: [
      {
        degree: "Bachelor of Arts in Computer Science",
        minor: "Minor in Interactive Media",
        institution: "University of Miami",
        location: "Miami, FL"
      }
    ],
    skills: {
      "Design & Research": [
        "User Research",
        "UX Strategy",
        "Usability Testing",
        "User Flows",
        "Interaction Design",
        "Information Architecture",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Figma",
        "Adobe Creative Suite",
        "AR/VR Design"
      ],
      "Frontend Development": [
        "HTML/CSS",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "PWA",
        "REST APIs",
        "GraphQL"
      ],
      "Backend & DevOps": [
        "Node.js",
        "Express.js",
        "Python",
        "Java",
        "C#",
        "Firebase",
        "Supabase",
        "MySQL",
        "MongoDB",
        "Git/GitHub",
        "GitHub Actions",
        "Docker",
        "AWS",
        "CI/CD Pipelines"
      ],
      "Project Management": [
        "Agile Methodology",
        "Scrum",
        "Kanban",
        "Cross-functional Team Leadership",
        "Stakeholder Communication",
        "Project Planning",
        "Risk Management",
        "Technical Documentation"
      ]
    },
    awards: [
      {
        name: "Winner: Avatar Xperience Challenge 2023 Hackathon/Case Competition",
        description: "Awarded for vvibe an AI-driven social application design and strategy"
      },
      {
        name: "Best Extended Reality Project: World Computing Day Expo",
        description: "Recognized for Slit Lamp VR Simulation at University of Miami Interactive Expo"
      }
    ]
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header with Download Button */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Product Designer & UX Strategist specializing in user-centered design and digital product development
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:shadow-[0_0_20px_rgba(255,180,100,0.5)] transition-all duration-300"
          >
            <a href="/Kristashia_Murray_Resume.pdf" download="Kristashia_Murray_Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </Button>
        </section>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          
          {/* Header Section - Subtle Gradient */}
          <div className="bg-gradient-to-br from-pink-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 p-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
                <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">{resumeData.title}</h2>
              </div>
              <div className="mt-4 lg:mt-0 flex flex-wrap gap-4">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  {resumeData.contact.email}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href={`https://${resumeData.contact.linkedin}`} className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href={`https://${resumeData.contact.portfolio}`} className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Portfolio
              </a>
              <a href={`https://${resumeData.contact.github}`} className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="p-8 space-y-8">
            
            {/* Summary */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-pink-500 pb-2">
                Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {resumeData.summary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-pink-500 pb-2">
                Experience
              </h3>
              <div className="space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-pink-500 pl-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-pink-500 font-medium">
                          {exp.company} | {exp.location}
                        </p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mt-1 md:mt-0">
                        {exp.dates}
                      </p>
                    </div>
                    <ul className="space-y-2 mt-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-pink-500 pb-2">
                Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Grid */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-pink-500 pb-2">
                Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {category}
                    </h4>
                    <ul className="space-y-2">
                      {skills.map((skill, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Awards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <section>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-pink-500 pb-2">
                  Education
                </h3>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-pink-500 font-medium">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.minor}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                      {edu.location}
                    </p>
                  </div>
                ))}
              </section>

              {/* Awards */}
              <section>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-pink-500 pb-2">
                  Awards
                </h3>
                <div className="space-y-4">
                  {resumeData.awards.map((award, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {award.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {award.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>

        {/* Bottom Download CTA */}
        <section className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:shadow-[0_0_20px_rgba(255,180,100,0.5)] transition-all duration-300"
          >
            <a href="/Kristashia_Murray_Resume.pdf" download="Kristashia_Murray_Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </Button>
        </section>

      </div>
    </div>
  );
}