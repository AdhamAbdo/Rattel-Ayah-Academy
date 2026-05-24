"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { courses } from "@/lib/course-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle2,
  Clock,
  Calendar,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Star,
  Gift,
  ArrowRight,
} from "lucide-react"

const ageGroups = [
  { id: "child", label: "Child (5-12 years)", description: "Fun and engaging lessons designed for young learners" },
  { id: "teen", label: "Teen (13-17 years)", description: "Age-appropriate content with relatable examples" },
  { id: "adult", label: "Adult (18+ years)", description: "Comprehensive learning at your own pace" },
]

const timeSlots = [
  { id: "morning", label: "Morning (8 AM - 12 PM)" },
  { id: "afternoon", label: "Afternoon (1 PM - 5 PM)" },
  { id: "evening", label: "Evening (6 PM - 10 PM)" },
  { id: "flexible", label: "Flexible (Any time)" },
]

export default function FreeTrialPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    ageGroup: "adult",
    timeSlot: "flexible",
    experience: "",
    goals: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/free-trial/success")
  }

  const canProceed = () => {
    if (step === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone
    }
    if (step === 2) {
      return formData.course && formData.ageGroup && formData.timeSlot
    }
    return true
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-medium">No Credit Card Required</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Start Your Free Trial Class
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Experience a complimentary 30-minute session with our expert teachers. Discover why thousands of students
            trust Noor Academy for their Islamic education.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">30-Min Session</span>
              <span className="text-sm text-muted-foreground">Free evaluation</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">1-on-1 Class</span>
              <span className="text-sm text-muted-foreground">Personal attention</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Expert Teachers</span>
              <span className="text-sm text-muted-foreground">Certified scholars</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Flexible Times</span>
              <span className="text-sm text-muted-foreground">Your schedule</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Progress Sidebar */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl font-bold mb-6">Registration Steps</h2>
                  <div className="space-y-4">
                    <div
                      className={`flex items-start gap-4 p-4 rounded-lg ${step >= 1 ? "bg-primary/5 border border-primary/20" : "bg-secondary"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                      >
                        {step > 1 ? <CheckCircle2 className="h-4 w-4" /> : "1"}
                      </div>
                      <div>
                        <h3 className={`font-medium ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>
                          Personal Information
                        </h3>
                        <p className="text-sm text-muted-foreground">Your contact details</p>
                      </div>
                    </div>
                    <div
                      className={`flex items-start gap-4 p-4 rounded-lg ${step >= 2 ? "bg-primary/5 border border-primary/20" : "bg-secondary"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                      >
                        {step > 2 ? <CheckCircle2 className="h-4 w-4" /> : "2"}
                      </div>
                      <div>
                        <h3 className={`font-medium ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>
                          Course Selection
                        </h3>
                        <p className="text-sm text-muted-foreground">Choose your course and schedule</p>
                      </div>
                    </div>
                    <div
                      className={`flex items-start gap-4 p-4 rounded-lg ${step >= 3 ? "bg-primary/5 border border-primary/20" : "bg-secondary"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                      >
                        3
                      </div>
                      <div>
                        <h3 className={`font-medium ${step >= 3 ? "text-foreground" : "text-muted-foreground"}`}>
                          Learning Goals
                        </h3>
                        <p className="text-sm text-muted-foreground">Tell us about your goals</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <Card className="mt-8">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 italic">
                        "The free trial class exceeded my expectations. The teacher was patient and knowledgeable.
                        Enrolled the same day!"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          A
                        </div>
                        <div>
                          <p className="font-medium text-sm">Ahmed K.</p>
                          <p className="text-xs text-muted-foreground">Hifz Student</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Please provide your contact details so we can reach you</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            required
                          />
                          <p className="text-xs text-muted-foreground">
                            Include country code for WhatsApp communication
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 2: Course Selection */}
                  {step === 2 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Selection</CardTitle>
                        <CardDescription>
                          Choose the course you'd like to try and your preferred schedule
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <Label>Select Course *</Label>
                          <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a course to try" />
                            </SelectTrigger>
                            <SelectContent>
                              {courses.map((course) => (
                                <SelectItem key={course.id} value={course.slug}>
                                  <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                                    {course.title}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Age Group *</Label>
                          <RadioGroup
                            value={formData.ageGroup}
                            onValueChange={(value) => handleInputChange("ageGroup", value)}
                            className="space-y-3"
                          >
                            {ageGroups.map((group) => (
                              <div key={group.id}>
                                <RadioGroupItem value={group.id} id={group.id} className="peer sr-only" />
                                <Label
                                  htmlFor={group.id}
                                  className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                                >
                                  <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5" />
                                  <div>
                                    <span className="font-medium block">{group.label}</span>
                                    <span className="text-sm text-muted-foreground">{group.description}</span>
                                  </div>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-3">
                          <Label>Preferred Time Slot *</Label>
                          <RadioGroup
                            value={formData.timeSlot}
                            onValueChange={(value) => handleInputChange("timeSlot", value)}
                            className="grid sm:grid-cols-2 gap-3"
                          >
                            {timeSlots.map((slot) => (
                              <div key={slot.id}>
                                <RadioGroupItem value={slot.id} id={slot.id} className="peer sr-only" />
                                <Label
                                  htmlFor={slot.id}
                                  className="flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                                >
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{slot.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 3: Learning Goals */}
                  {step === 3 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Learning Goals</CardTitle>
                        <CardDescription>
                          Help us understand your background and goals so we can prepare a personalized trial class
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="experience">Current Experience Level</Label>
                          <Select
                            value={formData.experience}
                            onValueChange={(value) => handleInputChange("experience", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">Complete Beginner - No prior experience</SelectItem>
                              <SelectItem value="basic">Basic - Can read Arabic alphabet</SelectItem>
                              <SelectItem value="intermediate">
                                Intermediate - Can read Quran with some difficulty
                              </SelectItem>
                              <SelectItem value="advanced">
                                Advanced - Can read fluently, seeking improvement
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="goals">Your Learning Goals (Optional)</Label>
                          <Textarea
                            id="goals"
                            value={formData.goals}
                            onChange={(e) => handleInputChange("goals", e.target.value)}
                            placeholder="Tell us what you hope to achieve... (e.g., memorize Juz Amma, improve Tajweed, learn Arabic for Quran understanding)"
                            rows={4}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                        Back
                      </Button>
                    ) : (
                      <div />
                    )}
                    {step < 3 ? (
                      <Button type="button" onClick={() => setStep(step + 1)} disabled={!canProceed()}>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Scheduling..." : "Schedule Free Trial"}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
