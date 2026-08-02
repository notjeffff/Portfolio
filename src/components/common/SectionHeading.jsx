import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { containerVariants, itemVariants } from "@/lib/animations"

export function SectionHeading({ badgeText, title, description, className, align = "left" }) {
  return (
    <motion.div 
      className={cn(
        "flex flex-col gap-4 mb-12",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {badgeText && (
        <motion.div variants={itemVariants}>
          <Badge variant="outline" className="px-3 py-1 bg-secondary/50 border-white/10 text-primary">
            {badgeText}
          </Badge>
        </motion.div>
      )}
      <motion.h2 
        variants={itemVariants}
        className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          variants={itemVariants}
          className="text-muted-foreground text-lg max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
