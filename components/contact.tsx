"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { Eye, Download } from "lucide-react"
export default function Contact() {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Let's Connect</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:pranjaldas503@gmail.com"
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <Mail className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">pranjaldas503@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919101386874"
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <Phone
                  className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">+91-9101386874</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <a
                href="https://linkedin.com/in/pranjal-das-nits"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <Linkedin
                  className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">pranjal-das-nits</p>
                </div>
              </a>

              <a
                href="https://github.com/PranjalGit503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <Github
                  className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">PranjalGit503</p>
                </div>
              </a>

              <div className="flex items-center justify-between p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors duration-300">
      {/* Left Section */}
      <div className="flex items-start gap-4">
        <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
        <div>
          <h3 className="font-semibold text-foreground mb-1">Resume</h3>
          <p className="text-muted-foreground">Available for view or download</p>
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-3">
        {/* View PDF */}
        <a
          href="/Resume_Pranjal_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition"
          title="View Resume"
        >
          <Eye className="flex-shrink-0" size={20} />
        </a>

        {/* Download PDF */}
        <a
          href="/Resume_Pranjal_2025.pdf"
          download
          className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition"
          title="Download Resume"
        >
          <Download className="flex-shrink-0" size={20} />
        </a>
      </div>
    </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="mailto:pranjaldas503@gmail.com"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
