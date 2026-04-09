/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: '#FAFAFA',
        bone: '#F4F1EC',
        champagne: '#E8E0D4',
        mist: '#E5E5E5',
        slate: '#9A9A9A',
        ink: '#111111',
        charcoal: '#333333',
      },
      letterSpacing: {
        'widest2': '0.25em',
        'widest3': '0.35em',
      },
      animation: {
        'line-grow': 'lineGrow 1.2s ease forwards',
      },
      keyframes: {
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
}
