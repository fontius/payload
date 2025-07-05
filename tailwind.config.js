/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

const tailwindConfig = {
  content: [
    './src/app/(frontend)/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sailor: {
          DEFAULT: '#102E50', // primary dark navy
          100: '#324B73', // lighter shade
          200: '#507798',
          300: '#6D93BC',
          400: '#8CB0E0',
        },
        gold: {
          DEFAULT: '#F5C45E', // mustard/gold accent
          100: '#F9D78C',
          200: '#FBD9A7',
          300: '#FCEAC2',
        },
        orange: {
          DEFAULT: '#E78B48', // team orange
          100: '#EC9D69',
          200: '#F1AE8A',
        },
        red: {
          DEFAULT: '#BE3D2A', // bold red
          100: '#D25A46',
          200: '#E48B79',
        },
      },
      fontFamily: {
        sans: ['var(--font-hubot)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-mona)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
