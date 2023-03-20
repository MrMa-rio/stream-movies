/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B132B',
        secondary: '#1C2541',
        tertiary: '#3A506B',
        quartenary: '#5BC0BE',
        quinary: '#FFFFFF',

      }
    },
  },
  plugins: [],
}
