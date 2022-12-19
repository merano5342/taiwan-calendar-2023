/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  theme: {
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    colors: {
      black: '#000000',
      white: '#ffffff',

      softRed: '#ED6A5A',
      cyan: '#5CABAD',
      yellow: '#f6f1aa',

      purple: '#5D576B',
      darkPurple: '#312D38',
      veryPaleOrange: '#FFFEF0',
      screens: {
        mobile: { max: '375px' },
        // => @media (min-width: 375px) { ... }
        desktop: { max: '1440px' },
      },
    },
    plugins: [],
  },
};
