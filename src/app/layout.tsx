import React from 'react'
import localFont from 'next/font/local'
import './globals.css'

// Define fonts directly in the root layout
export const mona = localFont({
  src: '../fonts/MonaSansVF-Regular.woff2', // Correct relative path
  variable: '--font-mona',
})
export const hubot = localFont({
  src: '../fonts/HubotSansVF-Regular.ttf', // Correct relative path
  variable: '--font-hubot',
})

export const metadata = {
  title: 'Payload App',
  description: 'A Payload app with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hubot.variable} ${mona.variable}`}>
      <body className="frontend-scope">{children}</body>
    </html>
  )
}
