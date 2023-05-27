/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)'],
        serif: ['var(--font-noto-serif)'],
      },
      colors: {
        primary: '#060606',
        secondary: '#484848',
        lightgray: '#94A3B8',
        background: '#F1F5F9',
      },
    },
  },
  plugins: [],
};
