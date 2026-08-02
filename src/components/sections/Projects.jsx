import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Image as ImageIcon, CheckCircle2 } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { featuredProjects, otherProjects } from "@/data/projects"
import { containerVariants, itemVariants } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { SpotHoleMockup } from "@/components/mockups/SpotHoleMockup"
import { WomensHealthMockup } from "@/components/mockups/WomensHealthMockup"
import { TurfArenaMockup } from "@/components/mockups/TurfArenaMockup"

export function Projects() {
  return (
    <SectionContainer id="projects" className="relative bg-secondary/20">
      <SectionHeading 
        badgeText="Portfolio"
        title="Featured Projects"
        description="A selection of my best engineering work, focusing on AI, machine learning, and full stack solutions."
      />

      {/* Featured Projects List */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12 lg:gap-24 mb-32"
      >
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card/50 border-white/5 backdrop-blur-sm overflow-hidden hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
                <div className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-0",
                  isReversed ? "lg:flex-row-reverse" : ""
                )}>
                  {/* Project Visual */}
                  <div className={cn(
                    "lg:col-span-6 relative flex flex-col items-center justify-center p-2 sm:p-6 lg:p-10",
                    isReversed ? "lg:order-2" : "lg:order-1"
                  )}>
                    {/* Glowing ambient background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Floating Mockup Container with 3D tilt effect */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl border border-white/10 overflow-hidden ring-1 ring-white/5"
                    >
                      {/* Browser-like subtle top bar for extra realism */}
                      <div className="w-full h-6 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center px-3 gap-1.5 absolute top-0 left-0 z-50">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      
                      <div className="pt-6 w-full h-full bg-zinc-950">
                        {project.title === "SpotHole AI" && <SpotHoleMockup />}
                        {project.title === "Women's Health Analytics" && <WomensHealthMockup />}
                        {project.title === "TurfArena" && <TurfArenaMockup />}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className={cn(
                    "p-8 lg:p-12 lg:col-span-6 flex flex-col justify-center",
                    isReversed ? "lg:order-1" : "lg:order-2"
                  )}>
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {project.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 border-white/10 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                      {project.githubUrl && (
                        <Button variant="outline" className="bg-transparent border-white/10 hover:bg-white/5 rounded-full px-6 h-12">
                          <GithubIcon className="mr-2 w-4 h-4" /> Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" className="bg-transparent border-white/10 hover:bg-white/5 rounded-full px-6 h-12">
                          <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                        </Button>
                      )}
                      {project.learnMoreUrl && (
                        <Button variant="default" className="rounded-full px-6 h-12 group/btn">
                          Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <SectionHeading 
        title="Other Projects"
        description="Smaller projects, hackathons, and experimental concepts."
      />

      {/* Other Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {otherProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <Card className="bg-card/30 border-white/5 backdrop-blur-sm h-full flex flex-col hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group">
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`View ${project.title} on GitHub`}>
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`View live demo of ${project.title}`}>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
