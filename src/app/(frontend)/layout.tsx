import localFont from 'next/font/local'
import React from 'react'
import './globals.css'

const mona = localFont({
  src: '@/fonts/MonaSansVF-Regular.woff2',
  variable: '--font-mona',
})

const hubot = localFont({
  src: '@/fonts/HubotSansVF-Regular.ttf',
  variable: '--font-hubot',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hubot.variable} ${mona.variable}`}>
      <body>{children}</body>
    </html>
  )
}
