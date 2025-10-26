"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Code2, Users, Lightbulb } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 blur-3xl rounded-full opacity-30" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-primary/10 blur-2xl rounded-full opacity-30" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent/30 transform group-hover:scale-105 transition-all duration-500">
              <Image
                src="/Pranjal_photo.png"
                alt="Pranjal Das"
                fill
                className="object-cover rounded-full"
                priority
                quality={95}
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center animate-pulse">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/10 blur-3xl" />
            </div>
          </div>

          {/* Text + Highlights */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I’m a passionate <span className="text-accent font-semibold">Full-Stack Software Engineer</span> with 2+ years of professional experience crafting scalable and user-centric web and mobile applications. 
              Currently working at <span className="font-semibold text-foreground">SOSUV Consulting</span>, I specialize in building impactful, end-to-end digital products.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey began at <span className="font-semibold text-foreground">NIT Silchar</span>, where I developed a deep understanding of data structures, algorithms, and system design. 
              Since then, I’ve worked across domains — from e-commerce and fintech to microservices architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I love combining <span className="text-accent font-semibold">clean code</span> with beautiful design, 
              aiming to deliver software that’s both elegant and performant.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Problem Solver",
              desc: "Proficient in Data Structures, Algorithms, and System Design, with practical experience in performance optimization and a proven track record in hackathons.",
              icon: <Lightbulb className="w-8 h-8 text-accent" />,
            },
            {
              title: "Full-Stack Developer",
              desc: "Full Stack Developer experienced in building scalable applications using React, React Native, Java, SpringBoot, and robust databases, with cloud deployment on AWS.",
              icon: <Code2 className="w-8 h-8 text-accent" />,
            },
            {
              title: "Collaborative Engineer",
              desc: "Thrives in teamwork and agile environments, fostering a culture of creativity and delivery.",
              icon: <Users className="w-8 h-8 text-accent" />,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-8 bg-card/60 backdrop-blur-md rounded-2xl border border-border hover:border-accent/50 hover:shadow-[0_0_25px_-5px_var(--accent)] transition-all duration-500 transform hover:-translate-y-2 group"
              style={{
                animation: isVisible ? `fadeInUp 0.7s ease-out ${idx * 0.15}s both` : "none",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-all">{card.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
              </div>
              <p className="text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
