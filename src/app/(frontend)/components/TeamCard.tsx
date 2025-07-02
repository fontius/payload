import Image from 'next/image'
import type { Team } from '@/payload-types'

type TeamCardProps = {
  team: Team
}

export const TeamCard = ({ team }: TeamCardProps) => {
  const logo = typeof team.logo === 'object' ? team.logo : null

  return (
    <div className="bg-sailor-100/50 ring-1 ring-sailor-300/20 rounded-lg p-8 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
        {/* Logo Section */}
        {logo?.url && (
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
            <Image
              src={logo.url}
              alt={logo.alt ?? `${team.name} Logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
        {/* Text Content Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-display font-black text-gold uppercase tracking-wider">
            {team.city} {team.name}
          </h1>
          <p className="text-sailor-400 max-w-xl">
            This is a team card. The logo and name are fetched from a single document in the{' '}
            <span className="font-bold text-gold">Teams</span> collection in the Payload CMS.
          </p>
        </div>
      </div>
    </div>
  )
}
