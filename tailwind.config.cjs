/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        lato: ['"Lato"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#08268F',
      },
    },
  },
  plugins: [],
}
