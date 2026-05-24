import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { courses } from "@/lib/course-data"

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Explore Our Courses</h2>
          <p className="text-lg text-muted-foreground">
            From Quran memorization to Islamic studies, we offer comprehensive courses designed for students of all ages
            and levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 6).map((course) => (
            <Card key={course.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {course.level}
                  </Badge>
                  <Badge className="bg-primary/90 text-primary-foreground">{course.type}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <Link href={`/courses/${course.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
