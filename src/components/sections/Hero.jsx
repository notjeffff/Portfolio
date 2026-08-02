import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/common/SectionContainer"
import { FileText, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { heroData } from "@/data/portfolio"
import { containerVariants, itemVariants } from "@/lib/animations"

export function Hero() {
  return (
    <SectionContainer id="hero" className="min-h-screen flex flex-col justify-center relative pt-32 pb-16 overflow-hidden">
      {/* Background Abstract Geometry */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 blur-3xl pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -90, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] w-[50vw] h-[30vw] max-w-[700px] max-h-[500px] bg-blue-900/30 rounded-[100%] mix-blend-screen"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl font-medium text-primary mb-2">
              {heroData.subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
              {heroData.name}
            </h1>
            <p className="text-lg md:text-xl font-medium text-muted-foreground/80 mb-2 tracking-wide">
              {heroData.tags.join(" • ")}
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
            <Button size="lg" className="rounded-full px-6 h-12 text-base group" asChild>
              <a href={heroData.links.resume} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-1" />
                Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 h-12 text-base bg-transparent border-white/10 hover:bg-white/5 group" asChild>
              <a href={heroData.links.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 h-12 text-base bg-transparent border-white/10 hover:bg-white/5 group" asChild>
              <a href={heroData.links.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 h-12 text-base bg-transparent border-white/10 hover:bg-white/5 group" asChild>
              <a href={heroData.links.contact}>
                <Mail className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
                Contact
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Abstract Geometric Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex justify-center items-center h-full min-h-[400px]"
          aria-hidden="true"
        >
          {/* Layered Glass Plates */}
          <motion.div 
            animate={{ y: ["-10px", "10px"] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute z-20 w-[60%] aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl rotate-12 flex items-center justify-center overflow-hidden"
          >
             <div className="w-1/2 h-1/2 rounded-full border-[20px] border-primary/20 blur-[2px]" />
          </motion.div>
          
          <motion.div 
            animate={{ y: ["15px", "-15px"], rotate: -12 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute z-10 w-[70%] aspect-square bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full shadow-2xl -translate-x-12 translate-y-12"
          />

          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: 45 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-0 w-[50%] aspect-square bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-md translate-x-16 -translate-y-16"
          />
        </motion.div>
      </div>
    </SectionContainer>
  )
}
