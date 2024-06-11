/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js","./form/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee', 'sans-serif'],
        VT323 : ['VT323','sans-serif'],
        Poppins: ['Poppins','sans-serif'],
        Freeman: ['Freeman','sans-serif'], 
        Montserrat: ['Montserrat','sans-serif'] 
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
}