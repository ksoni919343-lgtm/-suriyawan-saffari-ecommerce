/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F3F',
        gold: '#FFD700',
        beige: '#F5F5DC',
        sand: '#D2B48C',
      },
    },
  },
  plugins: [],
};
