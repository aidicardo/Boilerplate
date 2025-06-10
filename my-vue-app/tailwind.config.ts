import type { Config } from 'tailwindcss'
import safeArea from 'tailwindcss-safe-area'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [safeArea],
} satisfies Config
