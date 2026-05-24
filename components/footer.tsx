import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const footerLinks = {
  courses: [
    { name: "Quran Memorization", href: "/courses/hifz" },
    { name: "Tajweed Course", href: "/courses/tajweed" },
    { name: "Arabic Language", href: "/courses/arabic" },
    { name: "Islamic Studies", href: "/courses/islamic-studies" },
    { name: "Tafseer Classes", href: "/courses/tafseer" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Teachers", href: "#teachers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "FAQs", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/rattelayah" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/rattelayah" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/rattelayah" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/rattelayah" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Rattel Ayah</span>
                <span className="text-xs text-primary-foreground/70">Islamic Education</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Cultivating young hearts into Islamic leaders through quality online education with native Arabic
              teachers.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Rattel Ayah Academy. All rights reserved.
            </p>
            <p className="text-primary-foreground/70 text-sm">Made with ❤️ for the Muslim Ummah</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
