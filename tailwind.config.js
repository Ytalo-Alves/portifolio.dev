/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-info': "url('./src/assets/bg-intro.png')",
      },
      fontFamily: {
        'poppins': ['Inconsolata', 'Arial', 'sans-serif'],
        'title': ['Asap'],
        'span': ['Maven Pro'],
      },
    },
  },
  plugins: [],
}