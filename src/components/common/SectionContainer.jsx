import { cn } from "@/lib/utils"

export function SectionContainer({ children, className, id }) {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32",
        className
      )}
    >
      {children}
    </section>
  )
}
