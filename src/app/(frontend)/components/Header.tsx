import Image from 'next/image'
import Link from 'next/link'
import type { Team } from '@/payload-types'

type HeaderProps = {
  team: Team
}

export const Header = ({ team }: HeaderProps) => {
  const logo = typeof team.logo === 'object' ? team.logo : null

  return (
    <header className="bg-sailor-100/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4">
            {logo && logo.url && (
              <Image src={logo.url} alt={logo.alt} width={50} height={50} className="h-12 w-12" />
            )}
            <span className="font-display text-2xl font-bold text-gold uppercase tracking-wider">
              {team.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#roster"
              className="text-white hover:text-gold transition-colors font-semibold"
            >
              Roster
            </Link>
            <a href="#" className="text-white hover:text-gold transition-colors font-semibold">
              Schedule
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors font-semibold">
              Stats
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors font-semibold">
              News
            </a>
          </div>
          {/* Mobile menu button could be added here */}
        </div>
      </nav>
    </header>
  )
}
