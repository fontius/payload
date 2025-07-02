import Image from 'next/image'
import type { Player } from '@/payload-types'

type PlayerCardProps = {
  player: Player
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  const photo = typeof player.photo === 'object' ? player.photo : null

  return (
    /*
      Player Card Component: A self-contained block for a single player.
      - The card uses flex-col to stack the image and info.
      - The player image is now framed within the card for a cleaner look.
    */
    <div className="bg-sailor-100 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-gold/20">
      {/* Framed Image Container */}
      <div className="p-4">
        <div className="relative h-64 w-full overflow-hidden rounded-md bg-sailor">
          {photo?.url ? (
            <Image
              src={photo.url}
              alt={photo.alt ?? `${player.name}'s photo`}
              fill
              className="object-cover object-top" // Use Tailwind classes for object-fit
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gold text-5xl font-bold">
              ?
            </div>
          )}
        </div>
      </div>

      {/* Player Info */}
      <div className="p-4 pt-0 text-white text-center flex-grow flex flex-col justify-center">
        <h3 className="text-xl font-bold font-display uppercase">{player.name}</h3>
        <p className="text-gold text-lg">
          #{player.jerseyNumber} | {player.position}
        </p>
      </div>
    </div>
  )
}
