import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Calendar, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FreeTrialSuccessPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Free Trial Scheduled!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for registering for a free trial class at Noor Academy. We're excited to have you!
            </p>

            <Card className="mb-8 text-left">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4 text-center">What to Expect</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Check Your Email</h3>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a confirmation email shortly with all the details.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">WhatsApp Message</h3>
                      <p className="text-sm text-muted-foreground">
                        Our coordinator will reach out via WhatsApp within 2 hours to confirm your schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Class Confirmation</h3>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a Zoom/Google Meet link for your trial class at the confirmed time.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">30-Minute Session</h3>
                      <p className="text-sm text-muted-foreground">
                        Your free trial will include an assessment and a sample lesson tailored to your level.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-secondary rounded-lg mb-8">
              <h3 className="font-semibold mb-2">Prepare for Your Class</h3>
              <ul className="text-sm text-muted-foreground space-y-1 text-left max-w-md mx-auto">
                <li>• Ensure a stable internet connection</li>
                <li>• Find a quiet place for your session</li>
                <li>• Have a notebook ready for notes</li>
                <li>• Test your microphone and camera beforehand</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Explore All Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Questions? Contact us at{" "}
              <a href="mailto:support@nooracademy.com" className="text-primary hover:underline">
                support@nooracademy.com
              </a>{" "}
              or WhatsApp: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
