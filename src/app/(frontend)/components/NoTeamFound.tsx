import Link from 'next/link'
import React from 'react'

export const NoTeamFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-sailor">
    <div className="text-center p-8">
      <h1 className="text-2xl text-gold font-bold">No Team Found in CMS</h1>
      <p className="text-white mt-2">
        Please log in to the{' '}
        <Link href="/admin" className="underline hover:text-gold transition-colors">
          Payload Admin Panel
        </Link>{' '}
        and create a team to see the homepage.
      </p>
    </div>
  </div>
)
