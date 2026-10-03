/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#FAF6ED',
          100: '#F4EBCE',
          200: '#E7D59F',
          300: '#D9BD6E',
          400: '#CBA745',
          500: '#B8922C',
          600: '#967420',
          700: '#755817',
          800: '#543D0F',
          900: '#352507',
        },
        wine: {
          50: '#FAF0F3',
          100: '#F4D6DF',
          200: '#E6A8BA',
          300: '#D57390',
          400: '#BE476E',
          500: '#9B2A50',
          600: '#7C1F3F',
          700: '#5F142F',
          800: '#430C1F',
          900: '#2A0612',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F4EFE2',
          300: '#EBE2CF',
          400: '#DFD1B8',
          500: '#CCB999',
        },
        temple: {
          dark: '#1C1917',
          charcoal: '#262220',
          emerald: '#1C382B',
          stone: '#57534E',
        }
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'subtlePulse 4s ease-in-out infinite',
        'spin-very-slow': 'spin 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(120, 31, 63, 0.08), 0 0 20px 1px rgba(203, 167, 69, 0.1)',
        'luxury-hover': '0 30px 60px -15px rgba(120, 31, 63, 0.15), 0 0 30px 2px rgba(203, 167, 69, 0.2)',
        'gold-glow': '0 0 25px rgba(203, 167, 69, 0.35)',
      }
    },
  },
  plugins: [],
}
