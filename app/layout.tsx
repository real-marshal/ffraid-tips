import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Header } from '@/components/header'
import './globals.css'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'FFraid.tips',
  description:
    'Guides, tips and tricks for raids, trials and alliance raids from a popular MMORPG Final Fantasy XIV.',
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
