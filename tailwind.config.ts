import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['var(--font-heebo)'],
        kalam: ['var(--font-kalam)'],
      },
      colors: {
        primary: {
          400: '#9955E8',
          500: '#8A42DB',
        },
        secondary: '#7DFFAF',
        surface: {
          primary: '#2C243B',
          secondary: '#413A4F',
          background: '#171023',
          tertiary: '#4E4563',
        },
        text: {
          primary: '#F5F6F6',
          secondary: '#CDD0D4',
        },
      },
    },
  },
  plugins: [],
}
export default config
