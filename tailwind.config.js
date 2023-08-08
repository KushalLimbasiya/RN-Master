/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple':'#8F61F2',
          'bg': '#383B42',
        'indigo':'#6B57DC',
      }
    },
  },
  plugins: [],
}

