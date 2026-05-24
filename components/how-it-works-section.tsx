import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardList, Calendar, GraduationCap } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Planning",
    description: "Pick a course and create your learning goal. We'll help you choose the right path for your needs.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Scheduling",
    description: "Share your availability and we'll match you with the perfect teacher and schedule.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Studying",
    description: "Start your online classes and begin your journey towards Islamic knowledge and excellence.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Getting started with Noor Academy is simple. Follow these three easy steps to begin your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-border relative overflow-visible">
              <div className="absolute -top-4 left-6 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                Step {step.number}
              </div>
              <CardContent className="p-6 pt-8">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-card-foreground mb-4">IT REALLY IS THAT SIMPLE!</p>
          <Button size="lg">Start Learning Today</Button>
        </div>
      </div>
    </section>
  )
}
