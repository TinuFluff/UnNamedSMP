/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './scripts/main.ts'],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',

      'darker-grey': '#111111',
      'dark-grey': '#1E1E1E',
      'light-grey': '#757575',

      'dark-blue': '#004C82',
      'light-blue': '#0095FF',

      'dark-pink': '#603260',
      'light-pink': '#BF40BF'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'mono': ['Roboto Mono', 'monospace'],
      'staatliches': ['Staatliches', 'cursive']
    }
  },
  plugins: [],
}

