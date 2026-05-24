import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Award, Headphones, Video, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Native Arabic Teachers",
    description: "All our teachers are native Arabic speakers with years of experience teaching students worldwide.",
  },
  {
    icon: Award,
    title: "Al-Azhar Certified",
    description:
      "Our instructors are graduates from Al-Azhar University, one of the most prestigious Islamic universities.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with flexible scheduling options that fit your busy lifestyle.",
  },
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Engage in real-time with our teachers through live video sessions with personalized feedback.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help with any questions or concerns.",
  },
  {
    icon: Shield,
    title: "Safe Learning Environment",
    description: "We provide a secure, family-friendly platform with male and female teachers available.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 text-balance">
            Why Choose Rattel Ayah Academy?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine traditional Islamic education with modern teaching methods to provide the best learning
            experience for students of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/30 transition-colors group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
