import localFont from 'next/font/local'
import React from 'react'
import './globals.css'

// Load the fonts
const mona = localFont({
  src: '../fonts/MonaSansVF-Regular.woff2',
  variable: '--font-mona',
})

const hubot = localFont({
  src: '../fonts/HubotSansVF-Regular.ttf',
  variable: '--font-hubot',
})

export const metadata = {
  title: 'Payload App',
  description: 'A Payload app with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hubot.variable} ${mona.variable}`}>
      <body>{children}</body>
    </html>
  )
}
