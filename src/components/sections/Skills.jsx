import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/data/skills"
import { containerVariants, itemVariants } from "@/lib/animations"

export function Skills() {
  return (
    <SectionContainer id="skills" className="relative bg-secondary/20">
      <SectionHeading 
        badgeText="Expertise"
        title="Technical Skills"
        description="A comprehensive overview of my programming languages, frameworks, and tools."
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((category, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <Card className="bg-card/30 border-white/5 backdrop-blur-sm h-full flex flex-col hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <h4 className="text-xl font-bold tracking-tight text-foreground mb-6">
                  {category.category}
                </h4>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-sm font-medium text-foreground/90 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
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
