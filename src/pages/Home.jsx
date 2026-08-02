import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Research } from "@/components/sections/Research"
import { CurrentlyWorkingOn } from "@/components/sections/CurrentlyWorkingOn"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"

export function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <Projects />
      <Research />
      <CurrentlyWorkingOn />
      <Skills />
      <Education />
      <About />
      <Contact />
    </main>
  )
}
