import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/payload/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Map the CSS variables from the root layout, with system font fallbacks.
        // IMPORTANT: The two config files had swapped font assignments.
        // Please verify that 'mona' should be 'sans' and 'hubot' should be 'display'.
        sans: ['var(--font-mona)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-hubot)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Define colors using CSS variables for robust opacity support
        sailor: {
          DEFAULT: 'rgb(var(--color-sailor) / <alpha-value>)',
          '100': 'rgb(var(--color-sailor-100) / <alpha-value>)',
          '200': 'rgb(var(--color-sailor-200) / <alpha-value>)',
          '300': 'rgb(var(--color-sailor-300) / <alpha-value>)',
          '400': 'rgb(var(--color-sailor-400) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--color-gold) / <alpha-value>)',
          '100': 'rgb(var(--color-gold-100) / <alpha-value>)',
          '200': 'rgb(var(--color-gold-200) / <alpha-value>)',
          '300': 'rgb(var(--color-gold-300) / <alpha-value>)',
        },
        orange: {
          DEFAULT: 'rgb(var(--color-orange) / <alpha-value>)',
          '100': 'rgb(var(--color-orange-100) / <alpha-value>)',
          '200': 'rgb(var(--color-orange-200) / <alpha-value>)',
        },
        red: {
          DEFAULT: 'rgb(var(--color-red) / <alpha-value>)',
          '100': 'rgb(var(--color-red-100) / <alpha-value>)',
          '200': 'rgb(var(--color-red-200) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}

export default config
