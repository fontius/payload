import { PlayerCard } from './PlayerCard'
import type { Player } from '@/payload-types'

type PlayerGridProps = {
  players: Player[]
}

export const PlayerGrid = ({ players }: PlayerGridProps) => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gold mb-2 font-display uppercase">Team Roster</h2>
        <p className="text-sailor-400 max-w-2xl mx-auto">
          The player cards below are individual documents from the{' '}
          <span className="font-bold text-gold">Players</span> collection. Each player is linked to
          the Team via a <span className="font-mono text-sailor-300">relationship</span> field.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}
