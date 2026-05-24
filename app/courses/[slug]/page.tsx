import Header from "@/components/header"
import Footer from "@/components/footer"
import { getCourseBySlug, courses } from "@/lib/course-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Clock, Users, BookOpen, Award, Calendar, PlayCircle, Star } from "lucide-react"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Course Hero */}
      <section className="relative py-16 lg:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                >
                  {course.level}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                >
                  {course.type}
                </Badge>
              </div>
              <p className="text-primary-foreground/80 text-lg font-serif mb-2">{course.arabicTitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                {course.title}
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-8">{course.longDescription}</p>
              <div className="flex flex-wrap gap-6 text-primary-foreground/80 mb-8">
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {course.sessionsPerWeek} sessions/week
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current" />
                  4.9 (200+ reviews)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                  <a href="https://www.paypal.me/AdhamAbdo898" target="_blank" rel="noopener noreferrer">
                    Enroll Now - ${course.price}/mo
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/201119690838" target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Book Free Trial
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform">
                    <PlayCircle className="h-10 w-10 text-primary ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start mb-8 bg-secondary">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">What You'll Learn</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Course Description</h2>
                    <p className="text-muted-foreground leading-relaxed">{course.longDescription}</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Our experienced instructors use proven teaching methodologies that have helped thousands of
                      students achieve their Islamic education goals. Whether you're a complete beginner or looking to
                      advance your existing knowledge, this course is designed to meet you where you are.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Course Curriculum</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((section, index) => (
                      <AccordionItem key={index} value={`section-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                              {index + 1}
                            </span>
                            <span className="font-semibold">{section.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="pl-11 space-y-2">
                            {section.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                                <BookOpen className="h-4 w-4 text-primary" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="instructor" className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Meet Your Instructor</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <img
                          src={course.instructor.image || "/placeholder.svg"}
                          alt={course.instructor.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-card-foreground">{course.instructor.name}</h3>
                          <p className="text-primary mb-4">{course.instructor.title}</p>
                          <p className="text-muted-foreground">
                            With over 15 years of teaching experience and certification from prestigious Islamic
                            institutions, our instructor brings a wealth of knowledge and a passion for helping students
                            grow in their Islamic education journey.
                          </p>
                          <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              500+ Students
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              4.9 Rating
                            </span>
                            <span className="flex items-center gap-1">
                              <Award className="h-4 w-4" />
                              Al-Azhar Certified
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Student Reviews</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <Card key={review}>
                        <CardContent className="p-6">
                          <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                          <p className="text-center text-muted-foreground text-sm mb-4">
                            "This course has transformed my Quran recitation. The teacher is patient, knowledgeable, and
                            truly cares about each student's progress. Highly recommend!"
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                              S
                            </div>
                            <div>
                              <p className="font-medium text-card-foreground">Sarah M.</p>
                              <p className="text-sm text-muted-foreground">Student for 6 months</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar - Updated with PayPal payment options */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-primary/20">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="text-primary">Pricing & Enrollment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {/* Monthly option */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold text-primary">${course.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-center text-muted-foreground text-sm mb-4">Monthly subscription</p>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 font-semibold" asChild>
                      <a href="https://www.paypal.me/AdhamAbdo898" target="_blank" rel="noopener noreferrer">
                        Pay with PayPal
                      </a>
                    </Button>
                  </div>

                  {/* Hourly rate option */}
                  <div className="p-4 bg-background rounded-lg border border-primary/20">
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-3xl font-bold text-primary">$25</span>
                      <span className="text-muted-foreground">/hour</span>
                    </div>
                    <p className="text-center text-muted-foreground text-sm mb-4">Pay per session</p>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent"
                      asChild
                    >
                      <a href="https://www.paypal.me/AdhamAbdo898" target="_blank" rel="noopener noreferrer">
                        Book Hourly Class
                      </a>
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm border-t border-primary/10 pt-6">
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Full course access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{course.sessionsPerWeek} live sessions per week</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Course materials included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Certificate upon completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">24/7 support</span>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                    <p className="text-center text-xs text-muted-foreground">30-day money-back guarantee</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
