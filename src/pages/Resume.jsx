import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function Resume() {
  const resumeUrl = "/resume/Jeff_Herbert_Resume.pdf"
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Jeff_Herbert_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden selection:bg-primary/30 selection:text-primary">
      {/* Fixed Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="shrink-0 h-20 border-b border-white/5 bg-background/80 backdrop-blur-xl flex items-center justify-between px-6 md:px-12 z-50"
      >
        <div className="flex items-center gap-4 md:gap-8">
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-white/5">
            <Link to="/" aria-label="Back to Portfolio">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground hidden sm:block">
            Jeff Herbert <span className="text-muted-foreground font-normal">| Resume</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="default" className="rounded-full px-6 group shadow-lg hover:shadow-primary/25 hover:bg-primary/90 transition-all" onClick={handleDownload}>
            <Download className="mr-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span className="font-semibold">Download Resume</span>
          </Button>
        </div>
      </motion.header>

      {/* Main Content Area - PDF Embedded */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 w-full h-full bg-secondary/20 p-4 md:p-8 overflow-hidden"
      >
        <div className="w-full h-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-card/50 backdrop-blur-sm relative">
          {/* Iframe for PDF rendering */}
          <iframe 
            src={resumeUrl} 
            title="Jeff Herbert Resume"
            className="w-full h-full absolute inset-0 rounded-xl"
            style={{ border: 'none' }}
          />
        </div>
      </motion.main>
    </div>
  )
}
