import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

import { Playfair_Display, Lora, Tajweel, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const tajweel = Tajweel({ subsets: ["arabic"], variable: "--font-tajweel" })

export const metadata: Metadata = {
  title: "Rattel Ayah Academy | Online Quran & Arabic Classes",
  description:
    "Learn Quran, Tajweed, Arabic Language & Islamic Studies with certified native Arabic teachers. Flexible online classes for all ages.",
  keywords: "Quran classes, Tajweed, Arabic language, Islamic studies, Hifz, online learning, Muslim education",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${playfair.variable} ${lora.variable} ${tajweel.variable} font-serif antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
