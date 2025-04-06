import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Header } from '@/components/header'
import './globals.css'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'FFraid.tips - guides for raids in FFXIV',
  description:
    'Guides, tips and tricks for raids, trials and alliance raids in a popular MMORPG Final Fantasy XIV. Multiple different strategies are offered, including standard raidplan and hector.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
