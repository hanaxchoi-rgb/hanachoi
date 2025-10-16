import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, FileText, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Let's Connect</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Interested in aerospace, rocketry, or data science? Let's talk!
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:hanaxchoi@berkeley.edu" className="hover:text-primary transition-colors">
                        hanaxchoi@berkeley.edu
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Berkeley, CA</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Links</h3>

                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="justify-start bg-transparent" asChild>
                      <a href="https://www.linkedin.com/in/hanaelizabethchoi" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn Profile
                      </a>
                    </Button>

                    <Button variant="outline" className="justify-start bg-transparent" asChild>
                      <a href="#resume" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  Open to internship opportunities in aerospace, physics research, and data science
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Hana Elizabeth Choi. Built with Next.js and deployed on Vercel.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
