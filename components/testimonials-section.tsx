"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Thank you for an amazing teacher, we are so happy. May Allah bless you all. The teacher is fantastic and your academy is doing a great job. I will definitely recommend Noor Academy to others!",
    name: "Fatima",
    role: "Parent",
    image: "/muslim-woman-hijab-portrait.jpg",
  },
  {
    id: 2,
    quote:
      "My children and I started learning Quran and Arabic a few months ago. We are really impressed with the constant professionalism and efficiency. The teachers are extremely helpful and knowledgeable.",
    name: "Abdullah",
    role: "Father",
    image: "/muslim-man-portrait.png",
  },
  {
    id: 3,
    quote:
      "I've improved my Quran recitation and Tajweed skills tremendously. The professional teachers and support staff have played a pivotal role in my online learning journey. Highly recommend!",
    name: "Aisha",
    role: "Student",
    image: "/young-muslim-woman-student-portrait.jpg",
  },
  {
    id: 4,
    quote:
      "Kids are enjoying the classes and have begun to read better and confidently without memorization which was the main goal. Amazing staff and teachers - easy to access and affordable!",
    name: "Khadija",
    role: "Mother",
    image: "/muslim-woman-portrait-hijab.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Building a strong Muslim community, one student at a time. Hear from families who have experienced the Noor
            Academy difference.
          </p>
        </div>

        {/* Mobile: Single testimonial with navigation */}
        <div className="md:hidden">
          <Card className="border-border">
            <CardContent className="p-6">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-card-foreground mb-6 italic">"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-card-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop: Grid of testimonials */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-card-foreground mb-6 italic text-sm">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
