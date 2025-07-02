import { PlayerCard } from './PlayerCard'
import type { Player } from '@/payload-types'

type RosterProps = {
  players: Player[]
}

export const Roster = ({ players }: RosterProps) => {
  return (
    // Roster Component: Displays a grid of player cards.
    <section id="roster" className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gold mb-12 font-display uppercase">
        Team Roster
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  )
}
