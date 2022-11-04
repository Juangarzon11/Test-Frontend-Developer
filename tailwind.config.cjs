/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#E94057',
        'orange': '#F27121',
        'purple': '#8A2387'
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#E94057',
      }),
      textColor:{
        'primary': '#E94057',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}