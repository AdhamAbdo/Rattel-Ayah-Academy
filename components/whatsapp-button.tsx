"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="https://wa.me/201119690838"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 w-14 h-14 bg-[#A4455A] hover:bg-[#8B3748] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 bg-primary ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
