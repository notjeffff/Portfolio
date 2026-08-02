export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const floatAnimation = {
  y: ["-10px", "10px"],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};
