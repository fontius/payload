import React from 'react'
import type { CustomComponent } from 'payload'
import '../../app/globals.css'

const Logo: CustomComponent = () => {
  // The font variables are inherited from the root layout, so we can use Tailwind classes directly.
  return <h2 className="font-display font-bold">Hockey CMS</h2>
}

export default Logo
