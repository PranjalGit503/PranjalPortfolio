"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "HRMS",
    description: "HR management system designed to streamline and automate core HR operations, from employee records to payroll.",
    highlights: [
      "Developed full-stack HRMS with 30+ modules, 42 REST APIs, and 50+ UI components using React/TypeScript/Next.js",
      "Built enterprise HR platform covering payroll, performance management, and analytics with role-based authentication",
      "Architected scalable system with 9 data entities, JWT security, responsive design, and Spring Boot integration",
    ],
    tech: ["React", "Java", "PostgreSql", "SpringBoot", "tailwindcss"],
    link: "#",
    github: "https://github.com/PranjalGit503",
    featured: true,
  },
  {
    title: "BECH-DE",
    description: "Commodity buying and selling website to facilitate commerce within the institute",
    highlights: [
      "Integrated WhatsApp chat plugin for real-time communication",
      "Implemented media uploads using Multer",
      "Enabled live update tracking with Socket.io",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    link: "#",
    github: "https://github.com/PranjalGit503/bechdenits",
    featured: true,
  },
  {
    title: "Study Corner",
    description: "Ed-tech platform for self-directed learning with customizable learning tracks",
    highlights: [
      "Won 2nd prize in Cuvette Codoctober Hackathon 2021 (1100+ teams)",
      "Implemented doubt forums and note-taking tools",
      "Created resource guides for enhanced learning experience",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    link: "#",
    github: "https://github.com/PranjalGit503/Hardcoders",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass glass-hover rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  animation: isVisible ? `slideInLeft 0.6s ease-out ${idx * 0.1}s both` : "none",
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="h-32 border-b border-accent/10 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300 relative flex items-center px-8 overflow-hidden"
                  style={{
                    background: `linear-gradient(90deg, var(--project-accent-from), var(--project-accent-to))`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, var(--project-accent-via), transparent)`,
                    }}
                  />
                  {project.featured && (
                    <span className="text-xs font-bold text-accent uppercase tracking-widest relative z-10">
                      {/* Featured Project */}
                    </span>
                  )}
                </div>

                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-accent font-bold">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-accent/10 text-foreground rounded-lg text-xs font-medium border border-accent/20 group-hover:border-accent/50 group-hover:bg-accent/15 transition-all duration-300"
                        style={{
                          animation: hoveredIndex === idx ? `scaleIn 0.3s ease-out ${techIdx * 0.05}s both` : "none",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-all duration-300 text-sm font-semibold hover:shadow-lg hover:shadow-accent/20"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-accent/30 text-foreground rounded-lg hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 text-sm font-semibold"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
