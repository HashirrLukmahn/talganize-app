/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: '2.25rem',
        subheading: '1.75rem',
        body: '1rem',
        small: '0.875rem'
      },
      colors: {
        black: '000000',
        white: '#FFFFFF',
        'bg-gray': '#4B4847',
        'gray-light': '#C9C5BA',
        'gray-text': '#9BA9BD',
        'talgan-green': '#155263',
        'talgan-green-dark': '#124654',
        'talgan-blue': '#6DD5FF',
        yellow: '#FFBB09',
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))'
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))'
        // },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        cta: '#FFBB09',
        lightbg: '#F5F7F9',
        border: 'hsl(var(--border))',
        darktext: '#33302E',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontWeight: {
        heading: '700',
        subheading: '600',
        body: '400',
        small: '300'
      },
      borderRadius: {
        btn: '0.5rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      padding: {
        'btn-y': '0.625rem',
        'btn-x': '1.25rem'
      }
    },
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif'
      ]
    }
  },
  plugins: [require("tailwindcss-animate")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        select: '#E5E7EB',         //Light Gray(Hover select option)
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
    },
    fontFamily: { sans: ['Roboto', 'sans-serif'], },

  },
  plugins: [],
}

