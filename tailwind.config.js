/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-info': "url('https://github.com/user-attachments/assets/a95579a7-5987-4119-8eaf-56cc5e949df0')",
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