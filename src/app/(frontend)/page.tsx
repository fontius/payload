import React from 'react'

export default function HomePage() {
  return (
    <main className="container mx-auto p-8 md:p-12">
      <div className="space-y-12">
        {/* --- Header Section --- */}
        <div className="text-center space-y-4">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-gold">
            Welcome to the Hockey Team
          </h1>
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto">
            This page demonstrates the custom fonts, colors, and base styles configured in Tailwind
            CSS. The 'Hubot Sans' font is used for headings, and 'Mona Sans' for body text.
          </p>
        </div>

        {/* --- UI Components Showcase --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Example */}
          <div className="bg-sailor/50 border border-gold/20 rounded-lg p-6 space-y-4 text-center md:text-left">
            <h2 className="font-display text-gold">Styled Card Component</h2>
            <p className="font-sans">
              This card uses our custom `sailor` background color with some opacity and a `gold`
              border. The text inside follows the global styles.
            </p>
            <a
              href="/admin"
              className="inline-block bg-gold text-sailor font-bold font-display py-2 px-5 rounded-md hover:bg-gold-100 transition-all duration-300 mt-2"
            >
              Go to Admin
            </a>
          </div>

          {/* Font & Color Showcase */}
          <div className="bg-sailor/50 border border-gold/20 rounded-lg p-6 space-y-4">
            <h3 className="font-display">Font & Color Test</h3>
            <p className="font-sans text-base">This is the standard paragraph font (Mona Sans).</p>
            <p className="font-display text-lg text-gold">
              This is the display font (Hubot Sans) applied to a paragraph.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
