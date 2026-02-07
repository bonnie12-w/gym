import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Golden gym- Premium Gym & Fitness Training',
  description:
    'Transform your body and mind with Golden gym. Professional trainers, state-of-the-art facilities, and personalized fitness programs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>

        <Analytics />
      </body>
    </html>
  )
}
