"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Animated Gradient Shadow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-3xl animate-[floatShadow_10s_ease-in-out_infinite]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/15 via-transparent to-accent/10 blur-3xl animate-[floatShadow_12s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div
            className={`flex justify-center transition-all duration-1000 transform ${
              isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            <div className="profile-image relative w-64 h-64 md:w-110 md:h-110"> 
              <Image
              src="/Pranjal_photo.png"
              alt="Pranjal Das"
              fill
              className="object-cover rounded-full"
              priority
              quality={95}
            />

            </div>
          </div>

          {/* Text Section */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Pranjal Das
                </h1>
                <p className="text-xl sm:text-2xl text-accent font-semibold mt-2">
                  Full-Stack Software Engineer
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Building scalable applications with <strong>React</strong>, <strong>React Native</strong>, <strong>Java Spring Boot</strong>, and <strong>AWS</strong>. 
                Passionate about clean architecture, performance optimization, and delivering intuitive, high-quality user experiences.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="group px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-gradient-to-r hover:from-accent hover:to-accent/70 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/30"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-accent/30 text-foreground rounded-lg font-semibold hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 hover:shadow-md"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/PranjalGit503", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/pranjal-das-nits", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:pranjaldas503@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="p-3 border border-accent/20 rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground mt-20 animate-pulse-subtle">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border border-accent/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatImage {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes floatShadow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }
        @keyframes floatShadow_reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-20px);
          }
        }
      `}</style>
    </section>
  )
}