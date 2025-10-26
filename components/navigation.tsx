"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // prevent hydration mismatch — only show theme icon after client mount
  useEffect(() => setMounted(true), [])


  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
          >
            PD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  activeSection === item.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Theme toggle (visible on all sizes) */}
          <div className="flex items-center ml-4">
            {/* compute effective theme with safe fallbacks to avoid blank icon */}
            {/**
             * effectiveTheme resolution order:
             * - while not mounted: 'light' (pre-hydration placeholder)
             * - if theme === 'system': use systemTheme (fallback to 'light')
             * - else use theme (fallback to 'light')
             */}
            {(() => {
              const effectiveTheme = mounted
                ? (theme === 'system' ? systemTheme ?? 'light' : theme ?? 'light')
                : 'light'

              return (
                <button
                  onClick={() => {
                    // cycle themes: light <-> dark
                    const current = effectiveTheme
                    const next = current === 'light' ? 'dark' : 'light'
                    setTheme(next)
                  }}
                  aria-label="Toggle theme"
                  title="Toggle theme (light / dark)"
                  className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  {effectiveTheme === 'light' && <Sun size={18} />}
                  {effectiveTheme === 'dark' && <Moon size={18} />}
                  {/* fallback */}
                  {!['light', 'dark'].includes(effectiveTheme) && <Sun size={18} />}
                </button>
              )
            })()}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
