import { PlayerCard } from './PlayerCard'
import type { Player } from '@/payload-types'

// Type for the raw API response
type ApiStat = {
  player_name: string
  goals: number
  assists: number
  points: number
}

type RosterProps = {
  players: Player[]
  stats: ApiStat[]
}

export const Roster = ({ players, stats }: RosterProps) => {
  // Create a map for quick stat lookups, normalizing the name
  const statsMap = new Map<string, Omit<ApiStat, 'player_name'>>()
  stats.forEach((stat) => {
    statsMap.set(stat.player_name.toLowerCase(), {
      goals: stat.goals,
      assists: stat.assists,
      points: stat.points,
    })
  })

  return (
    <section id="roster" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-4xl font-bold font-display text-center mb-10">
        <span className="text-gold">Team</span> Roster
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {players.map((player) => {
          const playerStats = statsMap.get(player.name.toLowerCase())
          return <PlayerCard key={player.id} player={player} stats={playerStats} />
        })}
      </div>
    </section>
  )
}
