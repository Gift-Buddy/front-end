import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow_friend: '#FFD34C',
        blue_dark: '#37474F',
        black_text: '#010300',
      },
      backgroundColor: {
        yellow_transparency: 'rgba(255, 205, 51, 0.50)',
      },
      gridTemplateRows: {
        main_layout: '112px max-content',
      },
    },
  },
  plugins: [],
}
export default config
