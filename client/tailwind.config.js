/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'heading': '2.25rem', // 36px
        'subheading': '1.75rem', // 28px
        'body': '1rem', // 16px
        'small': '0.875rem', // 14px
      },
      colors: {
        'black': '000000',
        'white': '#FFFFFF',
        'bg-gray': '#4B4847',
        'gray-light': '#C9C5BA',
        'gray-text': '#9BA9BD',
        'talgan-green': '#155263',
        'talgan-green-dark': '#124654',
        'talgan-blue': '#6DD5FF',
        'yellow': '#FFBB09',
        primary: '#111827',      // Dark grayish brown (Headings, Labels)
        secondary: '#155263',    // Deep blue (Buttons, Links)
        accent: '#6DD5FF',       // Sky blue (Hover, Active states)
        muted: '#C9C5BA',        // Muted grayish (Backgrounds, Cards)
        cta: '#FFBB09',          // Yellow (Call to Action)
        lightbg: '#F5F7F9',      // Lightest background (Job Card, Sections)
        border: '#E5E3DD',       // Borders, Muted text
        darktext: '#33302E',     // Dark contrast text
      },
      fontWeight: {
        heading: '700', // Bold for headings
        subheading: '600', // Semi-bold for subheadings
        body: '400', // Normal for paragraphs
        small: '300', // Lighter for small text
      },
      borderRadius: {
        'btn': '0.5rem', // Rounded button
      },
      padding: {
        'btn-y': '0.625rem', // 10px vertical padding
        'btn-x': '1.25rem', // 20px horizontal padding
      },
      fontFamily: { sans: ['Roboto', 'sans-serif'], },
      backgroundImage: {
        'form-img': "url('src/assets/images/form-bg.png')",
      },

    },
  },
  plugins: [],
}

