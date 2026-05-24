"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"

const navigation = [
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Teachers", href: "#teachers" },
  { name: "Why Choose Rattel Ayah?", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#66995C] backdrop-blur-sm border-b border-[#4a6d43]">
      {/* Main header */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Rattel Ayah Academy"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-lg text-white leading-tight">Rattel Ayah</span>
              <span className="text-xs text-gray-100">Academy</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white hover:text-gray-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA buttons and Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button size="sm">Start Learning</Button>
          </div>

          {/* Language Switcher and Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button type="button" className="p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#4a6d43]">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="#contact">Contact</Link>
                </Button>
                <Button size="sm" className="flex-1">
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
