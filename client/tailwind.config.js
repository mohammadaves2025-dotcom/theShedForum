/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#3B0E1B',
          deep: '#4A1525',
          primary: '#722338',
          light: '#8B263E',
          bright: '#A8324E',
          accent: '#D4AF37',
          gold: '#C5A059',
          goldLight: '#F3E5C8',
          cream: '#FAF6F0',
          sand: '#F3ECE0',
          darkCard: '#421221',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
