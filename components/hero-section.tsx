import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-primary text-background">Quranic Excellence & Arabic Mastery</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Learn <span className="text-primary">Quran & Arabic</span> from Expert Teachers
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Master Quran recitation, Tajweed, Arabic language, and Islamic studies with certified native Arabic
              teachers from Al-Azhar University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="#courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <a href="https://wa.me/201119690838" target="_blank" rel="noopener noreferrer">
                  Contact Us on WhatsApp
                </a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Al-Azhar Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">1000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">12+ Courses</span>
              </div>
            </div>
          </div>

          {/* Hero image - Changed to children reading Quran */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-2-MFPaCW2DP5X5Qcn7ieZdDQ71dYidA9.png"
                alt="Children learning Quran together"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
