/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-p': '16px', // Add a custom font size for paragraphs if needed
      },
      colors: {
        'gray': '#4B4847',
        'gray-light': '#C9C5BA',
        'green': '#97B1A6',
        'blue': '#6DD5FF',
        'yellow': '#F8E220',
      },
    },
    fontFamily: { sans: ['Poppins', 'sans-serif'], },
  },
  plugins: [],
}

