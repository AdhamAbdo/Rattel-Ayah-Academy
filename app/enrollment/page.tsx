"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getCourseBySlug, courses, type Course } from "@/lib/course-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Clock, Users, Calendar, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const scheduleOptions = [
  { id: "morning", label: "Morning", time: "8:00 AM - 12:00 PM", timezone: "Your local time" },
  { id: "afternoon", label: "Afternoon", time: "1:00 PM - 5:00 PM", timezone: "Your local time" },
  { id: "evening", label: "Evening", time: "6:00 PM - 10:00 PM", timezone: "Your local time" },
  { id: "weekend", label: "Weekend Only", time: "Sat & Sun", timezone: "Flexible timing" },
]

const planOptions = [
  {
    id: "monthly",
    name: "Monthly",
    discount: 0,
    description: "Pay as you go",
    badge: null,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    discount: 10,
    description: "Save 10% - Billed every 3 months",
    badge: "Popular",
  },
  {
    id: "annual",
    name: "Annual",
    discount: 20,
    description: "Save 20% - Billed yearly",
    badge: "Best Value",
  },
]

function EnrollmentContent() {
  const searchParams = useSearchParams()
  const courseSlug = searchParams.get("course")

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [selectedPlan, setSelectedPlan] = useState("quarterly")
  const [selectedSchedule, setSelectedSchedule] = useState("evening")
  const [classType, setClassType] = useState<"1-on-1" | "group">("1-on-1")

  useEffect(() => {
    if (courseSlug) {
      const course = getCourseBySlug(courseSlug)
      if (course) {
        setSelectedCourse(course)
        setClassType(course.type as "1-on-1" | "group")
      }
    }
  }, [courseSlug])

  const calculatePrice = () => {
    if (!selectedCourse) return 0
    const basePrice = classType === "1-on-1" ? selectedCourse.price : selectedCourse.price * 0.7
    const plan = planOptions.find((p) => p.id === selectedPlan)
    const discount = plan ? plan.discount / 100 : 0
    return Math.round(basePrice * (1 - discount))
  }

  const calculateTotal = () => {
    const monthlyPrice = calculatePrice()
    const plan = planOptions.find((p) => p.id === selectedPlan)
    if (plan?.id === "quarterly") return monthlyPrice * 3
    if (plan?.id === "annual") return monthlyPrice * 12
    return monthlyPrice
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Progress Steps */}
      <section className="py-6 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="hidden sm:inline font-medium text-foreground">Select Options</span>
            </div>
            <div className="w-12 md:w-24 h-0.5 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-border text-muted-foreground flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="hidden sm:inline text-muted-foreground">Checkout</span>
            </div>
            <div className="w-12 md:w-24 h-0.5 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-border text-muted-foreground flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="hidden sm:inline text-muted-foreground">Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Enrollment Options</h1>
            <p className="text-muted-foreground text-center mb-10">
              Customize your learning experience with the options below
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Options Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Course Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                        1
                      </span>
                      Select Course
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={selectedCourse?.slug || ""}
                      onValueChange={(value) => {
                        const course = getCourseBySlug(value)
                        if (course) {
                          setSelectedCourse(course)
                          setClassType(course.type as "1-on-1" | "group")
                        }
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.slug}>
                            {course.title} - ${course.price}/mo
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Class Type */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                        2
                      </span>
                      Class Type
                    </CardTitle>
                    <CardDescription>Choose between personalized 1-on-1 or group sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={classType}
                      onValueChange={(value) => setClassType(value as "1-on-1" | "group")}
                      className="grid sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <RadioGroupItem value="1-on-1" id="one-on-one" className="peer sr-only" />
                        <Label
                          htmlFor="one-on-one"
                          className="flex flex-col p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">1-on-1 Sessions</span>
                            <Badge variant="secondary">Premium</Badge>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Personalized attention from your dedicated instructor
                          </span>
                          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            Private sessions
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="group" id="group" className="peer sr-only" />
                        <Label
                          htmlFor="group"
                          className="flex flex-col p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">Group Sessions</span>
                            <Badge variant="outline">30% Off</Badge>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Learn alongside fellow students in small groups
                          </span>
                          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            3-5 students per class
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Schedule Preference */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                        3
                      </span>
                      Schedule Preference
                    </CardTitle>
                    <CardDescription>Select your preferred time slot for classes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedSchedule}
                      onValueChange={setSelectedSchedule}
                      className="grid sm:grid-cols-2 gap-4"
                    >
                      {scheduleOptions.map((option) => (
                        <div key={option.id}>
                          <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
                          <Label
                            htmlFor={option.id}
                            className="flex flex-col p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                          >
                            <span className="font-semibold mb-1">{option.label}</span>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {option.time}
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">{option.timezone}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Billing Plan */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                        4
                      </span>
                      Billing Plan
                    </CardTitle>
                    <CardDescription>Choose a plan that works best for you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-3">
                      {planOptions.map((plan) => (
                        <div key={plan.id}>
                          <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                          <Label
                            htmlFor={plan.id}
                            className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary-foreground hidden peer-data-[state=checked]:block" />
                              </div>
                              <div>
                                <span className="font-semibold">{plan.name}</span>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                              </div>
                            </div>
                            {plan.badge && (
                              <Badge className={plan.badge === "Best Value" ? "bg-accent text-accent-foreground" : ""}>
                                {plan.badge}
                              </Badge>
                            )}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Summary Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {selectedCourse ? (
                      <>
                        <div className="flex gap-4">
                          <img
                            src={selectedCourse.image || "/placeholder.svg"}
                            alt={selectedCourse.title}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-card-foreground">{selectedCourse.title}</h3>
                            <p className="text-sm text-muted-foreground">{selectedCourse.level}</p>
                            <p className="text-sm text-muted-foreground capitalize">{classType} sessions</p>
                          </div>
                        </div>

                        <div className="border-t border-border pt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Monthly Price</span>
                            <span>${calculatePrice()}/mo</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Billing Cycle</span>
                            <span className="capitalize">{selectedPlan}</span>
                          </div>
                          {selectedPlan !== "monthly" && (
                            <div className="flex justify-between text-sm text-primary">
                              <span className="flex items-center gap-1">
                                <Sparkles className="h-3 w-3" />
                                Savings
                              </span>
                              <span>{planOptions.find((p) => p.id === selectedPlan)?.discount}% off</span>
                            </div>
                          )}
                        </div>

                        <div className="border-t border-border pt-4">
                          <div className="flex justify-between items-baseline">
                            <span className="font-semibold">Total</span>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-primary">${calculateTotal()}</span>
                              <span className="text-sm text-muted-foreground block">
                                {selectedPlan === "monthly" && "/month"}
                                {selectedPlan === "quarterly" && "/3 months"}
                                {selectedPlan === "annual" && "/year"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Cancel anytime</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" />
                            <span>30-day money-back guarantee</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Free reschedule option</span>
                          </div>
                        </div>

                        <Button className="w-full" size="lg" asChild>
                          <Link
                            href={`/checkout?course=${selectedCourse.slug}&plan=${selectedPlan}&schedule=${selectedSchedule}&type=${classType}`}
                          >
                            Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Select a course to see pricing details</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function EnrollmentPage() {
  return (
    <Suspense fallback={null}>
      <EnrollmentContent />
    </Suspense>
  )
}
