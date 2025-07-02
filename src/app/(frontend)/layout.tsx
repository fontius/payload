import localFont from 'next/font/local'
import React from 'react'
import './styles.css'

const hubot = localFont({
  src: '../public/fonts/HubotSansVF-Regular.ttf',
  variable: '--font-hubot',
})

const mona = localFont({
  src: '../public/fonts/MonaSansVF-Regular.woff2',
  variable: '--font-mona',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${hubot.variable} ${mona.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
