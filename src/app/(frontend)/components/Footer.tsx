import type { Team } from '@/payload-types'

type FooterProps = {
  team: Team
}

export const Footer = ({ team }: FooterProps) => {
  return (
    <footer className="bg-sailor-100 mt-16 py-8">
      <div className="container mx-auto text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} {team.name}. All Rights Reserved.
        </p>
        <p className="text-sm mt-2">Powered by Payload CMS & Next.js</p>
      </div>
    </footer>
  )
}
