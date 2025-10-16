"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Animated background effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(96, 165, 250, 0.15), transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-balance">
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Hana Elizabeth Choi
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance">Physics & Statistics @ UC Berkeley</p>

            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              Sophomore passionate about aerospace, rocketry, and data science. Building the future through physics,
              statistics, and hands-on engineering.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" onClick={scrollToAbout} className="group">
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-card border-4 border-background">
                <img src="/hana-choi-headshot.jpg" alt="Hana Elizabeth Choi" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
