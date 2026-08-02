import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"
import { currentWork } from "@/data/currentWork"
import { containerVariants, itemVariants } from "@/lib/animations"

export function CurrentlyWorkingOn() {
  return (
    <SectionContainer id="current-work" className="relative">
      <SectionHeading 
        badgeText="Active"
        title="Currently Working On"
        description="Ongoing projects and continuous improvements."
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {currentWork.map((work, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <Card className="bg-card/30 border-white/5 backdrop-blur-sm h-full flex flex-col hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group">
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary flex w-fit items-center gap-1.5 animate-pulse">
                    <Activity className="w-3 h-3" />
                    {work.status}
                  </Badge>
                </div>

                <h4 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                  {work.title}
                </h4>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
