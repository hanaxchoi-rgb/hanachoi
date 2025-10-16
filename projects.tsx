import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Trophy, GraduationCap } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Projects</h2>
            <p className="text-lg text-muted-foreground text-pretty">Hands-on engineering and research projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg col-span-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-2xl">Minimal-Diameter High-Altitude Rocket</CardTitle>
                    <CardDescription>Personal Project • 2024 – Present</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden p-1">
                  <img
                    src="/rocket-launch.jpg"
                    alt="Minimal-diameter high-altitude rocket launching at 16,000 ft"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-pretty">
                      Designed, CAD-modeled, and scratch-built a composite rocket using OpenRocket/RASAero II for sizing
                      and dual-deploy avionics
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-pretty">Successfully flight-tested to 16,000 ft with full recovery</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-pretty">
                      Post-flight data analysis informed mass optimization and ejection-timing refinements
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge>OpenRocket</Badge>
                  <Badge>RASAero II</Badge>
                  <Badge>Fusion 360</Badge>
                  <Badge>Composite Materials</Badge>
                  <Badge>Avionics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Team Recognitions</CardTitle>
                    <CardDescription>Rocketry Competitions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary">🏆</span>
                    <span>Northrop Grumman Best Rocket Craftsmanship</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🏆</span>
                    <span>NASA SLI Best Looking Rocket</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🏆</span>
                    <span>NASA SLI STEM Engagement Award</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🏆</span>
                    <span>California Congressional Recognition</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🏆</span>
                    <span>Top 10 at TARC National Fly-Off</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>VEX IQ Assistant Coach</CardTitle>
                    <CardDescription>Bit Bot Builder Robotics • 2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">
                  Assisted coaching youth robotics team, reinforcing programming fundamentals and match strategy for
                  competitive robotics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
