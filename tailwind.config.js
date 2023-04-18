const { fontFamily } = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#000000',
      secondary1: '#747474',
      secondary2: '#E2E2E2',
      secondary3: '#F1F1F1',
      neutral: {
        100: '#D3D3D3',
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
      sans: ['var(--font-kumbh)', ...fontFamily.sans],
      serif: ['var(--font-newsreader)', ...fontFamily.serif],
      cursive: ['var(--font-block)', 'cursive'],
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
