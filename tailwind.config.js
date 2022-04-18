const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: colors.amber,
      white: '#ffffff',
      black: colors.slate['900'],
      gray: colors.neutral,
  },
    extend: {},
  },
  plugins: [],
}