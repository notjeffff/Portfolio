import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Award, Brain, Cpu, Database, Server, Sparkles } from "lucide-react"
import { aboutData } from "@/data/portfolio"
import { containerVariants, itemVariants } from "@/lib/animations"

export function About() {
  const interests = [
    { name: "Artificial Intelligence", icon: <Brain size={20} className="text-primary" /> },
    { name: "Machine Learning", icon: <Cpu size={20} className="text-primary" /> },
    { name: "Computer Vision", icon: <Sparkles size={20} className="text-primary" /> },
    { name: "Backend Development", icon: <Server size={20} className="text-primary" /> },
    { name: "Data Science", icon: <Database size={20} className="text-primary" /> },
  ]

  return (
    <SectionContainer id="about" className="relative">
      <SectionHeading 
        badgeText="About Me"
        title="Background & Interests"
        description="A brief overview of my education and core technical focus areas."
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Education Column */}
        <motion.div variants={itemVariants} className="flex flex-col h-full">
          <Card className="bg-card/50 border-white/5 backdrop-blur-sm h-full hover:bg-card/80 transition-colors">
            <CardContent className="p-8 lg:p-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary" aria-hidden="true">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Education</h3>
              </div>
              
              <div className="flex gap-4">
                <div className="w-px bg-white/10 ml-2 relative">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                </div>
                <div className="pb-2">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {aboutData.education.degree}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {aboutData.education.institution}
                    </span>
                    <span className="flex items-center gap-2 text-primary">
                      <Award size={16} />
                      CGPA: {aboutData.education.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interests Column */}
        <motion.div variants={itemVariants} className="flex flex-col h-full">
          <Card className="bg-card/50 border-white/5 backdrop-blur-sm h-full hover:bg-card/80 transition-colors">
            <CardContent className="p-8 lg:p-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                Core Interests
              </h3>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {aboutData.interestsParagraph}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto">
                {interests.map((interest, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5"
                  >
                    <span aria-hidden="true">{interest.icon}</span>
                    <span className="text-sm font-medium text-foreground/90">
                      {interest.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

      </motion.div>
    </SectionContainer>
  )
}
