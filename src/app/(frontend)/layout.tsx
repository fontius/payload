import React from 'react'

// Optional but good practice: update metadata for frontend pages
export const metadata = {
  title: 'Hockey CMS Website',
  description: 'The official website for our team.',
}

// This layout is now nested within the root layout at /src/app/layout.tsx.
// It can be used for layouts specific to the (frontend) group.
// Since the root layout now handles fonts and global CSS, this can be simplified.
export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return children
}
