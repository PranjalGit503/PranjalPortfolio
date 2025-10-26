"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap } from "lucide-react"

const education = [
  {
    school: "National Institute of Technology, Silchar",
    location: "Assam, India",
    degree: "Bachelor of Technology",
    field: "Electronics and Communication",
    period: "July 2019 - June 2023",
    gpa: "8.20",
    courses: [
      "Data Structures and Algorithms",
      "Object Oriented Programming (OOPS)",
      "Databases (DBMS)",
      "Operating Systems (OS)",
    ],
  },
]

const achievements = [
  {
    title: "First Runner Up - Cuvette Codoctober Hackathon",
    description: "2nd out of 1100+ teams participating from across India",
    date: "October 2021",
  },
  {
    title: "Core Member - Google Developer Student Club",
    description: "Developed Alumni Tracking System to connect students with institute alumni",
    date: "Oct 2020 - Nov 2022",
  },
   {
    title: "Technical Head - Oikyotaan & Razzmatazz",
    description: "Led event website development and event management activities",
    date: "April 2019 - April 2023",
  },
  {
    title: "Winner - ECS Hackathon",
    description: "Ranked first out of 50+ teams of NIT Silchar",
    date: "April 2021",
  }
]

export default function Education() {
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Education & Achievements</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-accent" size={28} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <h4 className="text-xl font-bold text-accent mb-2">{edu.degree}</h4>
                    <p className="text-lg font-semibold text-foreground mb-1">{edu.field}</p>
                    <p className="text-foreground font-semibold mb-4">{edu.school}</p>
                    <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Relevant Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Achievements & Roles</h3>
              <div className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 group cursor-default"
                  >
                    <div className="flex gap-4">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
