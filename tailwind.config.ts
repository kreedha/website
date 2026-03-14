import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#0B2418',
          'forest-light': '#1A3C2A',
          'forest-dark': '#05120C',
          gold: '#C5A059',
          'gold-light': '#E5D5B0',
          'gold-dark': '#846A32',
          'gold-metallic': '#D4AF37',
          cream: '#FDF8F3',
          'cream-soft': '#FAF9F6',
          'cream-bone': '#F2F0E9',
          sage: '#4A5D4E',
          'sage-muted': '#6B7C70',
          'sage-dark': '#2D3E33',
          copper: '#B87333',
        },
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad6a5',
          300: '#f7b96d',
          400: '#f39133',
          500: '#f0730b',
          600: '#e15706',
          700: '#ba4109',
          800: '#94340e',
          900: '#782d0f',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
