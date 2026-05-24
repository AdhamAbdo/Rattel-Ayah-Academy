"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getCourseBySlug } from "@/lib/course-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Building, Wallet, Lock, Check, ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

const planMultipliers: Record<string, number> = {
  monthly: 1,
  quarterly: 3,
  annual: 12,
}

const planDiscounts: Record<string, number> = {
  monthly: 0,
  quarterly: 10,
  annual: 20,
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const courseSlug = searchParams.get("course") || ""
  const plan = searchParams.get("plan") || "monthly"
  const schedule = searchParams.get("schedule") || "evening"
  const classType = searchParams.get("type") || "1-on-1"

  const course = getCourseBySlug(courseSlug)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  if (!course) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button asChild>
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  const basePrice = classType === "1-on-1" ? course.price : course.price * 0.7
  const discount = planDiscounts[plan] / 100
  const monthlyPrice = Math.round(basePrice * (1 - discount))
  const totalPrice = monthlyPrice * planMultipliers[plan]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) return

    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push(`/checkout/success?course=${courseSlug}`)
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
                <Check className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline text-muted-foreground">Select Options</span>
            </div>
            <div className="w-12 md:w-24 h-0.5 bg-primary" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="hidden sm:inline font-medium text-foreground">Checkout</span>
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
            <Button variant="ghost" className="mb-6" asChild>
              <Link href={`/enrollment?course=${courseSlug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Options
              </Link>
            </Button>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter your last name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Method */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                        <div>
                          <RadioGroupItem value="card" id="card" className="peer sr-only" />
                          <Label
                            htmlFor="card"
                            className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                          >
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                            <span>Credit / Debit Card</span>
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                          <Label
                            htmlFor="bank"
                            className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                          >
                            <Building className="h-5 w-5 text-muted-foreground" />
                            <span>Bank Transfer</span>
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                          <Label
                            htmlFor="paypal"
                            className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 transition-colors"
                          >
                            <Wallet className="h-5 w-5 text-muted-foreground" />
                            <span>PayPal</span>
                          </Label>
                        </div>
                      </RadioGroup>

                      {paymentMethod === "card" && (
                        <div className="space-y-4 pt-4 border-t border-border">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="JOHN DOE" required />
                          </div>
                        </div>
                      )}

                      {paymentMethod === "bank" && (
                        <div className="p-4 bg-secondary rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            Bank transfer details will be sent to your email after you complete the order. Payment must
                            be completed within 48 hours to secure your enrollment.
                          </p>
                        </div>
                      )}

                      {paymentMethod === "paypal" && (
                        <div className="p-4 bg-secondary rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            You will be redirected to PayPal to complete your payment securely.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Terms */}
                  <Card className="mb-6">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="terms"
                          checked={agreedToTerms}
                          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                          . I understand that my subscription will auto-renew at the end of each billing period unless
                          canceled.
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Button type="submit" size="lg" className="w-full" disabled={!agreedToTerms || isProcessing}>
                    {isProcessing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Complete Payment - ${totalPrice}
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment powered by Stripe</span>
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-card-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">{course.level}</p>
                        <p className="text-sm text-muted-foreground capitalize">{classType} sessions</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Schedule</span>
                        <span className="capitalize">{schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Billing</span>
                        <span className="capitalize">{plan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Rate</span>
                        <span>${monthlyPrice}/mo</span>
                      </div>
                      {plan !== "monthly" && (
                        <div className="flex justify-between text-primary">
                          <span>Discount</span>
                          <span>{planDiscounts[plan]}% off</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold">Total Due Today</span>
                      <span className="text-2xl font-bold text-primary">${totalPrice}</span>
                    </div>

                    <div className="p-3 bg-secondary rounded-lg text-sm text-muted-foreground">
                      <p>
                        Your first class will be scheduled within 24-48 hours after enrollment. Our team will contact
                        you to confirm your preferred schedule.
                      </p>
                    </div>
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

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  )
}
