import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import type { Player, Team } from '@/payload-types'

// Import components
import Image from 'next/image'
import Link from 'next/link'
import { Header } from './components/Header'
import { Roster } from './components/Roster'

// Type for the external API response
type ApiStat = {
  player_name: string
  goals: number
  assists: number
  points: number
}

// Data fetching function for stats
async function getPlayerStats(): Promise<ApiStat[]> {
  try {
    const res = await fetch('https://pwhl-data-api.verout.workers.dev/skaters/summary', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })
    if (!res.ok) {
      console.error('Failed to fetch stats:', res.statusText)
      return []
    }
    const data = await res.json()
    // The API wraps the data in a "data" property
    return data.data || []
  } catch (error) {
    console.error('Error fetching player stats:', error)
    return []
  }
}

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  // 1. Fetch the team data
  const teamsResult = await payload.find({
    collection: 'teams',
    limit: 1,
    depth: 1, // To populate the logo
  })

  const team = teamsResult.docs[0] as Team | undefined
  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sailor">
        <div className="text-center p-8">
          <h1 className="text-2xl text-gold">No Team Found in CMS</h1>
          <p className="text-white mt-2">
            Please log in to the{' '}
            <Link href="/admin" className="underline">
              Payload Admin Panel
            </Link>{' '}
            and create a team to see the homepage.
          </p>
        </div>
      </div>
    )
  }

  // 2. Fetch players for that team
  const playersResult = await payload.find({
    collection: 'players',
    where: {
      team: {
        equals: team.id,
      },
    },
    depth: 1, // To populate the photo
    limit: 100,
  })
  const players = playersResult.docs as Player[]

  // 3. Fetch external player stats
  const stats = await getPlayerStats()

  const logo = typeof team.logo === 'object' ? team.logo : null

  return (
    <div className="bg-sailor">
      <Header team={team} />
      <main>
        {/* Hero Banner Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center bg-sailor-100 overflow-hidden">
          {logo && logo.url && (
            <Image
              src={logo.url}
              alt="Team background"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-10 absolute inset-0"
              priority
            />
          )}
          <div className="relative z-10 p-4">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
              Welcome to the home of the
            </h1>
            <p
              className="text-5xl sm:text-6xl md:text-8xl font-display font-black text-gold mt-2 uppercase"
              style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8)' }}
            >
              {team.name}
            </p>
          </div>
        </section>

        {/* Roster Section */}
        <Roster players={players} stats={stats} />

        {/* Other sections like Schedule or News can be added here */}
      </main>
      <footer className="bg-sailor-100 mt-16 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {team.name}. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">Powered by Payload CMS & Next.js</p>
        </div>
      </footer>
    </div>
  )
}
