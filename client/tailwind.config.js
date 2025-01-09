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
        'black': '000000',
        'white': '#FFFFFF',
        'gray': '#4B4847',
        'gray-light': '#C9C5BA',
        'blue': '#2886A5',
        'light-blue': '#6DD5FF',
        'yellow': '#F0DD34',
      },
    },
    fontFamily: { sans: ['Roboto', 'sans-serif'], },
    backgroundImage: {
      'form-img': "url('src/assets/images/form-bg.png')",
    },
  },
  plugins: [],
}

