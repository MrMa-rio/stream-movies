/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#181A1B',
        secondary: '#1C2541',
        tertiary: '#3A506B',
        quartenary: '#5BC0BE',
        quinary: '#FFFFFF',

      },
      screens: {
        'super-small': '390px',
        'small': '436px',
        // => @media (min-width: 576px) { ... }
  
        'middle': '550px',
        // => @media (min-width: 960px) { ... }
  
        'middle-2': '900px',
        // => @media (min-width: 1440px) { ... }
      },
      spacing:{
        smartphone: "31rem"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    }, 
  },
  plugins: [

    require('flowbite/plugin')
  ],
}
