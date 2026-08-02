import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navLinks, heroData } from "@/data/portfolio"
import { useScrollSpy } from "@/hooks/useScrollSpy"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const sectionIds = navLinks.map(link => link.href.substring(1))
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-4 bg-background/70 backdrop-blur-md border-b border-white/5 shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          aria-label="Home"
          className="text-xl font-bold tracking-tighter text-foreground"
        >
          Jeff<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
