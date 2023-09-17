/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Folktard'
      }
    },
    colors: {
      'primary-bg': '#7D7E75',
      'active': '#A8A8DA',
      'white': '#EDEDF4',
      'gold': '#DCAC01',
      'primary-dark': '#0F110C',
    }
  },
  plugins: [],
}