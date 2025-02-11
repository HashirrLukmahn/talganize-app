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
        'gray-text': '#9BA9BD',
        'green': '#155263',
        'green-dark': '#124654',
        'blue': '#6DD5FF',
        'yellow': '#FFBB09',
      },
    },
    fontFamily: { sans: ['Roboto', 'sans-serif'], },
    backgroundImage: {
      'form-img': "url('src/assets/images/form-bg.png')",
    },
  },
  plugins: [],
}

