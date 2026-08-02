import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { education } from "@/data/education"
import { containerVariants, itemVariants } from "@/lib/animations"

export function Education() {
  return (
    <SectionContainer id="education" className="relative bg-secondary/20">
      <SectionHeading 
        badgeText="Academic"
        title="Education"
        description="My academic background and degree progress."
        align="center"
      />

      <div className="relative max-w-3xl mx-auto mt-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <Card className="bg-card/50 border-white/5 backdrop-blur-sm w-full hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
                <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="text-lg text-muted-foreground font-medium mb-1">
                      {edu.degree} in {edu.major}
                    </p>
                    <p className="text-sm text-muted-foreground/60 mb-4">
                      Expected Graduation: {edu.expectedGraduation}
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold">
                      <Award className="w-5 h-5" />
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}
