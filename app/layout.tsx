// app/layout.tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './global.css'

export const metadata: Metadata = {
  title: 'Portfolio - Audyari Wiyono',
  description: 'Personal portfolio showcasing web development projects and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}