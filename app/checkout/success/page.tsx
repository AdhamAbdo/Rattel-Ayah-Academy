"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getCourseBySlug } from "@/lib/course-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Calendar, Mail, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

function SuccessContent() {
  const searchParams = useSearchParams()
  const courseSlug = searchParams.get("course") || ""
  const course = getCourseBySlug(courseSlug)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Progress Steps */}
      <section className="py-6 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline text-muted-foreground">Select Options</span>
            </div>
            <div className="w-12 md:w-24 h-0.5 bg-primary" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline text-muted-foreground">Checkout</span>
            </div>
            <div className="w-12 md:w-24 h-0.5 bg-primary" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline font-medium text-foreground">Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Enrollment Successful!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to Noor Academy! Your enrollment in{" "}
              <span className="font-semibold text-foreground">{course?.title || "your course"}</span> has been
              confirmed.
            </p>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">What Happens Next?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Check Your Email</h3>
                      <p className="text-sm text-muted-foreground">
                        We've sent a confirmation email with your receipt and login credentials.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Schedule Your First Class</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team will contact you within 24 hours to schedule your first session.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Access Your Dashboard</h3>
                      <p className="text-sm text-muted-foreground">
                        Log in to your student dashboard to access course materials and track your progress.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">Explore More Courses</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:support@nooracademy.com" className="text-primary hover:underline">
                support@nooracademy.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  )
}
