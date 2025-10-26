"use client"

import { Github, Linkedin, Mail, ChevronRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-gradient-to-b from-background via-muted/50 to-background border-t border-border py-14 px-6 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-15 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">
              Pranjal Das
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate Full-Stack Engineer focused on building elegant, scalable, and high-performance web solutions using modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div >
            <h4 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300"
                  >
                    <span className="h-4 w-1 bg-accent rounded-full group-hover:w-2 transition-all" aria-hidden />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div >
            <h4 className="font-semibold text-foreground mb-4 text-lg">Follow Me</h4>
            <div className="flex gap-4">
              {[
                {
                  href: "https://github.com/PranjalGit503",
                  icon: <Github size={20} />,
                },
                {
                  href: "https://linkedin.com/in/pranjal-das-nits",
                  icon: <Linkedin size={20} />,
                },
                {
                  href: "mailto:pranjaldas503@gmail.com",
                  icon: <Mail size={20} />,
                },
                ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${social.href}`}
                  className="p-3 rounded-xl bg-muted hover:bg-accent/10 text-accent shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Pranjal Das. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
