const { fontFamily } = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#00000',
      secondary1: '#fcfcfc',
      secondary2: '#c1b59c',
      secondary3: '#1f716c',
      secondary4: '#418b84',
      neutral: {
        100: '#A0937D',
        200: '#8F8F8F',
        300: '#4353ff',
        400: '#fff',
        500: '#c9c9c9',
      },
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      sans: ['Kumbh Sans'],
      serif: ['Newsreader'],
      
    },
    fontSize: {
      xs: ['14px', '1.5em'],
      sm: ['15px', '1.6em'],
      base: ['16px', '1.44em'],
      lg: ['18px', '1.667em'],
      xl: ['20px', '1.5em'],
      xxl: ['22px', '1.5em'],
      '2xl': ['24px', '1.583em'],
      '3xl': ['26px', '1.289em'],
      '4xl': ['32px', '1.289em'],
      '5xl': ['36px', '1.3em'],
      '6xl': ['38px', '1.289em'],
      '7xl': ['42px', '1.3em'],
      '8xl': ['52px', '1.3em'],
      '9xl': ['60px', '1.3em'],
    },
    boxShadow: {
      base: '0 5px 15px 0 rgb(30 61 96 / 3%)',
      dark: '0 15px 15px 0.01px rgba(30, 61, 96, 0.03)',
    },
    extend: {
      spacing: {
        container: `max(
          1rem,
          calc((100vw - calc(1200px - 1rem * 2)) / 2)
        )`,
      },
      aspectRatio: {
        image: '3 / 4',
        'h-image': '4 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
