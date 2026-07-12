// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        anima: {
          navy: '#1F2A44',
          navyB: '#19233b',
          gray: '#D9D9D9',
          coral: '#F97A5D',
          pink: '#FBF1F2',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
