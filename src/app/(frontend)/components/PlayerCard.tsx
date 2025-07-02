import Image from 'next/image'
import type { Player } from '@/payload-types'

// Define a type for the stats we expect from the external API
type PlayerStats = {
  goals: number
  assists: number
  points: number
}

type PlayerCardProps = {
  player: Player
  stats?: PlayerStats
}

const StatItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className="text-center">
    <p className="text-sm text-gray-400">{label}</p>
    <p className="font-display text-2xl font-bold text-gold">{value}</p>
  </div>
)

export const PlayerCard = ({ player, stats }: PlayerCardProps) => {
  const photo = typeof player.photo === 'object' ? player.photo : null

  return (
    <div className="bg-sailor-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out group">
      <div className="relative h-64 bg-sailor-200">
        {photo && photo.url ? (
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            className="group-hover:opacity-90 transition-opacity"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-500">No Photo</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-sailor/80 text-white rounded-full h-12 w-12 flex items-center justify-center font-display text-2xl border-2 border-gold">
          {player.jerseyNumber}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold font-display truncate" title={player.name}>
          {player.name}
        </h3>
        <p className="text-gray-300 font-semibold">{player.position}</p>

        {stats && (
          <div className="mt-4 pt-4 border-t border-sailor-300/50 grid grid-cols-3 gap-2">
            <StatItem label="G" value={stats.goals} />
            <StatItem label="A" value={stats.assists} />
            <StatItem label="P" value={stats.points} />
          </div>
        )}
      </div>
    </div>
  )
}
