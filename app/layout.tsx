import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aegis - AI Verification Layer for Flare Network',
  description: 'Transform the Flare Data Connector into a programmable, high-integrity data pipeline with AI-powered verification and enrichment.',
  keywords: 'Flare Network, AI, Data Verification, Blockchain, Oracle, Smart Contracts',
  authors: [{ name: 'Aegis Team' }],
  openGraph: {
    title: 'Aegis - AI Verification Layer for Flare Network',
    description: 'Transform the Flare Data Connector into a programmable, high-integrity data pipeline with AI-powered verification and enrichment.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
