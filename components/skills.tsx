"use client"

import { useEffect, useRef, useState } from "react"
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPostman,
} from "react-icons/si"
import { FaPeopleCarry, FaCloud, FaServer, FaLaptopCode, FaDatabase } from "react-icons/fa"

type Skill = {
  name: string
  icon?: React.ReactNode
}

type Category = {
  title: string
  icon: React.ReactNode
  color: string
  skills: Skill[]
}


const skillCategories: Category[] = [
  {
    title: "Languages",
    icon: <FaLaptopCode size={30} />,
    color: "from-cyan-500/30 to-blue-500/10",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Java"},
    ],
  },
  {
    title: "Frontend",
    icon: <SiReact size={28} />,
    color: "from-indigo-500/30 to-purple-500/10",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer size={26} />,
    color: "from-amber-400/30 to-orange-500/10",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase size={26} />,
    color: "from-green-500/30 to-emerald-500/10",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: <FaCloud size={28} />,
    color: "from-sky-500/30 to-indigo-500/10",
    skills: [
      { name: "AWS", icon: <SiAmazon /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Postman", icon: <SiPostman/>}
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaPeopleCarry size={28} />,
    color: "from-rose-500/30 to-pink-500/10",
    skills: [
      { name: "Problem Solving" },
      { name: "Teamwork" },
      { name: "Adaptability" },
      { name: "Leadership" },
    ],
  },
]


export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-accent/10 bg-gradient-to-br ${cat.color} backdrop-blur-md p-8 transition-all duration-700 hover:scale-[1.04] hover:shadow-[0_0_25px_-5px_var(--accent)] group`}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${i * 0.1}s both` : "none",
              }}
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-accent/10 rounded-lg border border-accent/20 text-sm font-medium text-foreground/90 transition-all hover:scale-105 hover:bg-accent/15 hover:text-accent"
                    style={{
                      animation: isVisible
                        ? `fadeInUp 0.4s ease-out ${idx * 0.05}s both`
                        : "none",
                    }}
                  >
                    {/* render icon only if provided */}
                    {skill.icon ? <span className="text-accent">{skill.icon}</span> : null}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
