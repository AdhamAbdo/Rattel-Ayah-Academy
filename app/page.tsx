import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CoursesSection from "@/components/courses-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import TeachersSection from "@/components/teachers-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <TeachersSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
