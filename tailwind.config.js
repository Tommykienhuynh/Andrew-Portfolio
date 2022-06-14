/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'main': "Open Sans"
    },
    extend: {
      colors:{
        primaryBlack: "#181818",
        primaryRed: "#CE4B4B",
        primaryWhite: "#F4F3F3"
      }
    },
  },
  plugins: [],
}
