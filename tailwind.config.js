/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('images/backround.jpeg')",
        'bg2': "url('images/doraemon-the-movie-nobitas-sky-utopia-2023_169.jpeg')"
      }
    },
  },
  plugins: [],
  }
  