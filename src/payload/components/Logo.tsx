import React from 'react'

const Logo: React.FC = () => {
  // The font variables are inherited from the root layout, so we can use Tailwind classes directly.
  return <h2 className="font-display font-bold">Hockey CMS</h2>
}

export default Logo
