import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/SectionContainer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { heroData } from "@/data/portfolio"
import { containerVariants, itemVariants } from "@/lib/animations"

export function Contact() {
  return (
    <SectionContainer id="contact" className="relative pb-32">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
          <Mail className="w-8 h-8 text-primary" />
        </motion.div>
        
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
        >
          Let's Build Something Together
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl"
        >
          I'm currently looking for new opportunities in software engineering, applied AI, and full stack development. Whether you have a question or just want to say hi, my inbox is always open.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-10">
          <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            <a href={heroData.links.contact} className="text-lg font-medium">jeffherbert2106@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">+91 6380091486</span>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Button size="lg" className="rounded-full px-8 h-14 text-lg group" asChild>
            <a href={heroData.links.contact}>
              Get In Touch 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
