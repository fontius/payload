import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import type { Player, Team } from '@/payload-types'
import { NoTeamFound } from './components/NoTeamFound'
import { TeamCard } from './components/TeamCard'
import { PlayerGrid } from './components/PlayerGrid'

export default async function HomePage() {
  try {
    const payload = await getPayload({ config: configPromise })

    // 1. Fetch the team data from the CMS
    const teamsResult = await payload.find({
      collection: 'teams',
      limit: 1,
      depth: 1, // To populate the logo
    })

    const team = teamsResult.docs[0] as Team | undefined

    if (!team) {
      return <NoTeamFound />
    }

    // 2. Fetch players for that team from the CMS
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

    return (
      <div className="bg-sailor text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center gap-16">
            {/* Team Card Section */}
            <TeamCard team={team} />

            {/* Player Grid Section */}
            <PlayerGrid players={players} />
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading homepage data:', error)
    // A more user-friendly error page could be rendered here
    return (
      <div className="min-h-screen flex items-center justify-center bg-sailor">
        <div className="text-center p-8">
          <h1 className="text-2xl text-gold font-bold">Something Went Wrong</h1>
          <p className="text-white mt-2">We couldnt load the team data. Please try again later.</p>
        </div>
      </div>
    )
  }
}
