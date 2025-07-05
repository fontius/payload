import React from 'react'

// Helper component for a color swatch
const ColorSwatch = ({ name, className }: { name: string; className: string }) => (
  <div>
    <div className={`h-24 rounded-lg shadow-md ${className}`}></div>
    <p className="mt-2 text-center font-mono text-sm text-gray-300">{name}</p>
  </div>
)

// ===================================
// Main Page Component
// ===================================
export default function HomePage() {
  return (
    <div className="bg-sailor text-white min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gold uppercase tracking-wider">
            Theme Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-2">
            A showcase of the default colors and fonts.
          </p>
        </div>

        <div className="space-y-16">
          {/* Colors Section */}
          <section>
            <h2 className="text-4xl font-display text-center mb-8">Colors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              {/* Sailor Palette */}
              <ColorSwatch name="sailor" className="bg-sailor border border-sailor-100" />
              <ColorSwatch name="sailor-100" className="bg-sailor-100" />
              <ColorSwatch name="sailor-200" className="bg-sailor-200" />
              <ColorSwatch name="sailor-300" className="bg-sailor-300" />
              <ColorSwatch name="sailor-400" className="bg-sailor-400" />
              {/* Gold Palette */}
              <ColorSwatch name="gold" className="bg-gold" />
              <ColorSwatch name="gold-100" className="bg-gold-100" />
              <ColorSwatch name="gold-200" className="bg-gold-200" />
              <ColorSwatch name="gold-300" className="bg-gold-300" />
              {/* Accent Palettes */}
              <ColorSwatch name="orange" className="bg-orange" />
              <ColorSwatch name="orange-100" className="bg-orange-100" />
              <ColorSwatch name="orange-200" className="bg-orange-200" />
              <ColorSwatch name="red" className="bg-red" />
              <ColorSwatch name="red-100" className="bg-red-100" />
              <ColorSwatch name="red-200" className="bg-red-200" />
            </div>
          </section>

          {/* Typography Section */}
          <section>
            <h2 className="text-4xl font-display text-center mb-8">Typography</h2>
            <div className="bg-sailor-100 p-8 rounded-lg space-y-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-gold-100 mb-2">
                  Display Font (font-display)
                </p>
                <h3 className="font-display text-4xl font-extrabold text-white">
                  The quick brown fox jumps over
                </h3>
                <p className="font-display text-2xl font-light">
                  The quick brown fox jumps over (Light)
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gold-100 mb-2">
                  Body Font (default)
                </p>
                <p className="text-lg text-gray-300">
                  The quick brown fox jumps over the lazy dog. This is the default body font, used
                  for paragraphs and other general text content. It is designed for readability.
                </p>
              </div>
              <div className="border-t border-sailor-200 pt-6 space-y-4">
                <p className="text-sm uppercase tracking-widest text-gold-100">
                  Font Weights (Body/Sans)
                </p>
                <p className="font-light">Font Light</p>
                <p className="font-normal">Font Normal</p>
                <p className="font-medium">Font Medium</p>
                <p className="font-semibold">Font Semibold</p>
                <p className="font-bold">Font Bold</p>
                <p className="font-extrabold">Font Extrabold</p>
              </div>
              <div className="border-t border-sailor-200 pt-6 flex flex-wrap gap-x-8 gap-y-4 items-baseline">
                <p className="text-xs">text-xs</p>
                <p className="text-sm">text-sm</p>
                <p>text-base</p>
                <p className="text-lg">text-lg</p>
                <p className="text-xl">text-xl</p>
                <p className="text-2xl">text-2xl</p>
                <p className="text-3xl">text-3xl</p>
                <p className="text-4xl">text-4xl</p>
                <p className="text-5xl">text-5xl</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-sailor-100 text-center py-6 mt-16 border-t-2 border-gold">
        <p className="text-gray-300">Payload App. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-1">Powered by Payload CMS & Next.js</p>
      </footer>
    </div>
  )
}
