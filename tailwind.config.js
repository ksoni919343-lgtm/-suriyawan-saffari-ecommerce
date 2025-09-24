/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chockleti': '#3A1F1A',
        'sandy-gold': '#FFD700',
      },
    },
  },
  plugins: [],
};
