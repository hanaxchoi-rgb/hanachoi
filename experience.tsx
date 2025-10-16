import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Rocket, ShoppingBag, GraduationCap } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    title: "Marketing Intern",
    company: "Panjaya (AI-driven localization)",
    location: "Remote",
    period: "Jan 2025 – Sep 2025",
    description: [
      "Led multi-platform campaigns; produced/refined video adaptations and editorial pieces across education, sports, and entertainment",
      "Analyzed engagement data to grow reach (~15K impressions; 6K+ viewers in Q1)",
      "Standardized lightweight reporting for faster iteration",
    ],
    color: "primary",
  },
  {
    icon: Rocket,
    title: "Recovery & Structures Member",
    company: "Space Enterprise at Berkeley",
    location: "Berkeley, CA",
    period: "Sep 2024 – Jun 2025",
    description: [
      "Contributed to recovery and structural systems for student rocketry",
      "Supported test planning and data logging",
      "Team recognitions: Northrop Grumman Best Rocket Craftsmanship, NASA SLI Best Looking Rocket, NASA SLI STEM Engagement Award",
    ],
    color: "secondary",
  },
  {
    icon: ShoppingBag,
    title: "Sales Associate (Part-Time)",
    company: "Steve Madden",
    location: "Los Angeles, CA",
    period: "May 2025 – Aug 2025",
    description: ["Supported retail operations and customer engagement in a high-volume environment"],
    color: "accent",
  },
  {
    icon: GraduationCap,
    title: "Tae Kwon Do Instructor",
    company: "Double Dragon TKD",
    location: "Los Angeles, CA",
    period: "Mar 2016 – Jun 2019",
    description: ["Taught white–purple belt classes; emphasized discipline, confidence, and teamwork"],
    color: "primary",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Experience</h2>
            <p className="text-lg text-muted-foreground text-pretty">Professional experience and leadership roles</p>
          </div>

          <div className="grid gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-${exp.color}/10 flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`h-6 w-6 text-${exp.color}`} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-base font-medium text-muted-foreground">{exp.company}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline">{exp.location}</Badge>
                          <Badge variant="outline">{exp.period}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
