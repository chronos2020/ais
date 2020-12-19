const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter'],
      }
    },
  },
  variants: {
    extend: {
      margin: ['dark'],
      fill: ['hover'],
      display: ['dark']
    },
  },
  plugins: [],
}
