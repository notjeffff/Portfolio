import { heroData } from "@/data/portfolio"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full border-t border-white/5 bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-muted-foreground">
            Designed and Developed by {heroData.name}
          </p>
        </div>
        
        <div className="flex items-center gap-6" role="navigation" aria-label="Social links">
          <a 
            href={heroData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a 
            href={heroData.links.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a 
            href={heroData.links.contact} 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email Contact"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {currentYear}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
