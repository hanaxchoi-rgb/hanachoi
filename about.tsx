import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Users, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              I'm a sophomore at UC Berkeley pursuing a dual degree in Physics and Statistics, with a passion for
              aerospace engineering and data-driven problem solving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">University of California, Berkeley</p>
                  <p>B.A. Physics & Statistics</p>
                  <p>Expected Graduation: 2028</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Career Goals</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  Aspiring to work in the aerospace industry, applying physics and statistical analysis to advance space
                  exploration and rocket technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Activities</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Space Enterprise at Berkeley</li>
                  <li>• Recovery & Structures Team</li>
                  <li>• Korean American Student Association</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">Beyond the Lab</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p className="font-medium text-foreground">🏎️ Formula One Enthusiast</p>
                  <p className="text-muted-foreground text-pretty">
                    Avid F1 fan since 2019. Attended the Canadian Grand Prix in Montreal this summer—nothing beats the
                    sound of those engines live!
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">🎨 Creative Projects</p>
                  <p className="text-muted-foreground text-pretty">
                    Love anything crafty—from DIY projects to hands-on builds. There's something satisfying about
                    creating with your hands.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">🍜 Culinary Explorer</p>
                  <p className="text-muted-foreground text-pretty">
                    Always on the hunt for new flavors, especially at Korean cafes. Good food is one of life's greatest
                    joys!
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">✈️ Travel & Languages</p>
                  <p className="text-muted-foreground text-pretty">
                    Passionate about exploring new places and cultures. Aspiring polyglot—because the world is too
                    interesting to experience in just one language.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
