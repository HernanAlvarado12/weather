/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        lm: '900px'
      },
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '4.5': '4.5rem',
        '5': '5rem',
        '5.5': '5.5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '7': '7rem',
        '7.5': '7.5rem',
        '8': '8rem',
        '8.5': '8.5rem',
        '9': '9rem',
        '9.5': '9.5rem',
        '10': '10rem',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        min: '1.2rem',
        xs: '1.4rem',
        sm: '1.6rem',
        md: '1.8rem',
        base: '2.4rem',
        lg: '3.2rem',
        icon: '3.8rem',
        xl: '4.2rem'
      },
      borderRadius: {
        sm: '0.6rem',
        md: '0.8rem',
        lg: '1rem',
        xl: '1.6rem',
        '2xl': '2.8rem'
      },
      colors: {
        prm: '#b5a1e5',
        'on-prm': '#100e17',
        back: '#131214',
        'on-back': '#eae6f2',
        srfc: {
          DEFAULT: '#1d1c1f',
          100: '#dddae5',
          200: '#7b7980',
          300: '#b9b6b7'
        },
        outline: '#3E3D40',
        'aqi': {
          100: '#89E589',
          150: '#1F331F',
          200: '#E5DD89',
          250: '#33311F',
          300: '#E5C089',
          350: '#332B1F',
          400: '#E58989',
          450: '#331F1F',
          500: '#E589B7',
          550: '#331F29'
        },
        white: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          100: 'hsla(0, 0%, 100%, 0.04)',
          200: 'hsla(0, 0%, 100%, 0.08)'
        },
        black: 'hsla(0, 0%, 0%, 0.1)'
      },
      backgroundImage: {
        'grdnt-1': 'linear-gradient(180deg, hsla(270, 5%, 7%, 0) 0%, hsla(270, 5%, 7%, 0.8) 65%, hsl(270, 5%, 7%) 100%)',
        'grdnt-2': 'linear-gradient(180deg, hsla(260, 5%, 12%, 0) 0%, hsla(260, 5%, 12%, 0.8) 65%, hsl(260, 5%, 12%) 100%)'
      },
      boxShadow: {
        'shadow-1': '0px 1px 3px hsla(0, 0%, 0%, 0.5)',
        'shadow-2': '0px 3px 6px hsla(0, 0%, 0%, 0.4)'
      }
    },
  },
  plugins: [],
}