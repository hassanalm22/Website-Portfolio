import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        parchment: '#f5f4ed',
        ivory: '#faf9f5',
        sand: '#e8e6dc',
        'dark-surface': '#30302e',
        'deep-dark': '#141413',
        terracotta: {
          DEFAULT: '#c96442',
          light: '#d97757',
        },
        warm: {
          50: '#faf9f5',
          100: '#f5f4ed',
          200: '#f0eee6',
          300: '#e8e6dc',
          400: '#d1cfc5',
          500: '#b0aea5',
          600: '#87867f',
          700: '#5e5d59',
          800: '#4d4c48',
          900: '#3d3d3a',
          950: '#141413',
        },
      },
      boxShadow: {
        'ring-standard': '#e8e6dc 0px 0px 0px 0px, #d1cfc5 0px 0px 0px 1px',
        'ring-hover': '#e8e6dc 0px 0px 0px 0px, #c2c0b6 0px 0px 0px 1px',
        'ring-dark': '#30302e 0px 0px 0px 0px, #30302e 0px 0px 0px 1px',
        'ring-terracotta': '#c96442 0px 0px 0px 0px, #c96442 0px 0px 0px 1px',
        whisper: 'rgba(0, 0, 0, 0.05) 0px 4px 24px',
        elevated: 'rgba(0, 0, 0, 0.08) 0px 8px 32px',
      },
      lineHeight: {
        editorial: '1.60',
        headline: '1.10',
        subheadline: '1.20',
      },
    },
  },
  plugins: [],
}

export default config
