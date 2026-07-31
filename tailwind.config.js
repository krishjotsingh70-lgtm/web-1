/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E5',
          200: '#F5E6BF',
          300: '#EED494',
          400: '#E5C158',
          500: '#D4AF37', // Metallic Gold Base
          600: '#B89228',
          700: '#94701A',
          800: '#6C5014',
          900: '#48330D',
        },
        dark: {
          950: '#070708', // Deep Obsidian
          900: '#0F0F12', // Rich Dark Background
          850: '#15151B',
          800: '#1C1C24', // Card Background
          700: '#2A2A36', // Border / Muted
          600: '#3F3F50',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, rgba(15,15,18,0) 70%)',
        'dark-card': 'linear-gradient(180deg, rgba(28, 28, 36, 0.8) 0%, rgba(15, 15, 18, 0.95) 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.35)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
