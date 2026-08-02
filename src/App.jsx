import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Lenis from "lenis"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Home } from "@/pages/Home"
import { Resume } from "@/pages/Resume"

function App() {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
