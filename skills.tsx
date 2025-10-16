import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Award } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Data Science",
    skills: [
      "Python",
      "MATLAB",
      "C/C++",
      "SQL",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Model Selection",
      "Cross-Validation",
    ],
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Aerospace & Engineering Tools",
    skills: ["OpenRocket", "RASAero II", "Fusion 360 CAD", "Test Planning", "Data Logging", "Composite Materials"],
    color: "secondary",
  },
  {
    icon: Database,
    title: "Collaboration & Tools",
    skills: ["Git", "Jupyter", "LaTeX", "Linux", "Technical Documentation"],
    color: "accent",
  },
  {
    icon: Award,
    title: "Certifications",
    skills: ["NAR Level 1 High-Powered Rocketry (Jun 2023)", "Pediatric First Aid/CPR/AED - AHA (Jan 2025–Jan 2027)"],
    color: "primary",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Skills & Certifications</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Technical expertise and professional qualifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 text-${category.color}`} />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
