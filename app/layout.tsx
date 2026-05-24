import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Lora,
  Source_Serif_4,
} from "next/font/google"

// Fonts
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: "Rattel Ayah Academy | Online Quran & Arabic Classes",
  description:
    "Learn Quran, Tajweed, Arabic Language & Islamic Studies with certified native Arabic teachers. Flexible online classes for all ages.",
  keywords:
    "Quran classes, Tajweed, Arabic language, Islamic studies, Hifz, online learning, Muslim education",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          ${playfair.variable}
          ${lora.variable}
          ${sourceSerif.variable}
          antialiased
        `}
      >
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
