import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, BookOpen, Clock, Activity } from "lucide-react"
import { publishedResearch, ongoingResearch } from "@/data/research"
import { containerVariants, itemVariants } from "@/lib/animations"
import { cn } from "@/lib/utils"

export function Research() {
  return (
    <SectionContainer id="research" className="relative">
      <SectionHeading 
        badgeText="Research"
        title="Publications & Research"
        description="Exploring applied Artificial Intelligence, Computer Vision, and Machine Learning through research and real-world systems."
      />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
        {/* Vertical Timeline (Hidden on mobile, visible on desktop) */}
        <div className="hidden lg:flex flex-col items-center w-12 shrink-0 py-8 relative">
          <div className="absolute top-10 bottom-10 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center gap-[400px]">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-10 h-10 rounded-full bg-background border border-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <BookOpen className="w-4 h-4 text-primary" />
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-10 h-10 rounded-full bg-background border border-muted-foreground/30 flex items-center justify-center"
            >
              <Activity className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>
        </div>

        {/* Content Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 flex flex-col gap-16"
        >
          {/* Published Research */}
          <div className="relative">
            <div className="lg:hidden absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
            
            {publishedResearch.map((paper, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-8 lg:pl-0">
                {/* Mobile Timeline Node */}
                <div className="lg:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  Published Research
                </h3>
                
                <Card className="bg-card/50 border-white/5 backdrop-blur-sm overflow-hidden hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
                  <CardContent className="p-8 lg:p-10 flex flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary animate-pulse">
                          {paper.status}
                        </Badge>
                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          {paper.publication}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                      {paper.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                      {paper.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 border-white/10 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      {paper.links.publication && (
                        <Button variant="default" className="rounded-full px-6 h-12 group/btn">
                          <ExternalLink className="mr-2 w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" /> 
                          View Publication
                        </Button>
                      )}
                      {paper.links.abstract && (
                        <Button variant="outline" className="bg-transparent border-white/10 hover:bg-white/5 rounded-full px-6 h-12">
                          <FileText className="mr-2 w-4 h-4" /> View Abstract
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Ongoing Research */}
          <div className="relative">
            <div className="lg:hidden absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-muted-foreground/20 to-transparent" />
            
            <motion.div variants={itemVariants} className="relative pl-8 lg:pl-0">
              {/* Mobile Timeline Node */}
              <div className="lg:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-muted-foreground/50" />
              
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                Ongoing Research
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ongoingResearch.map((research, index) => (
                  <Card key={index} className="bg-card/30 border-white/5 backdrop-blur-sm h-full flex flex-col hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <Badge variant="outline" className="bg-white/5 border-white/10 text-muted-foreground flex w-fit items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {research.status}
                        </Badge>
                      </div>

                      <h5 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                        {research.title}
                      </h5>
                      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                        {research.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {research.tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </SectionContainer>
  )
}
