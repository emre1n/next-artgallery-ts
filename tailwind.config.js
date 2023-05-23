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
        gray: {
          main: '#060606',
          lightlabel: '#484848',
          text: '#94A3B8',
          background: '#F1F5F9',
        },
      },
    },
  },
  plugins: [],
};
