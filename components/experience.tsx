"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "SOSUV CONSULTING PVT. LTD. (Client: London Stock Exchange Group)",
    location: "Bengaluru, India",
    period: "April 2025 – Present",
    description: [
      <>
        Built end-to-end buyer-seller flow for <strong>Telescope</strong> marketplace app enabling product listing, sample requests, and bulk ordering
      </>,
      "Deployed app on Google Play Store with backend infrastructure hosted on AWS",
      <>
      "Implemented log upload and dynamic session routing features for <strong>Fix Configurator</strong> financial messaging application"
      </>,
      "Designed backend logic for sender-receiver sessions and integrated AWS Load Balancer for scalability",
    ],
    tech: ["React Native", "Redux", "Node.js", "Express.js", "MongoDB", "Redis", "AWS", "Java", "Spring Boot"],
  },
  {
    title: "Software Engineer",
    company: "NAPIER HEALTHCARE PVT. LTD.",
    location: "Hyderabad, India",
    period: "July 2023 - March 2025",
    description: [
      "Developed and maintained ILTC software with Java, Spring Boot, React, and MS SQL",
      "Designed and implemented 100+ application screens focusing on audit modules and scalable microservices architecture",
      "Improved system performance through optimized database queries and resolved critical bugs",
      "Contributed to 25% increase in customer engagement through responsive UI and performance optimization",
    ],
    tech: ["React", "Java", "Spring Boot", "MS SQL", "AWS", "Mockito", "Microservices"],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Professional Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-13px] top-0 w-6 h-6 bg-accent rounded-full border-4 border-background" />

                <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-accent mb-2">{exp.title}</h3>
                      <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-4 sm:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
