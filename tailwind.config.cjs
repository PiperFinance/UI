/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'inset 0px 0px 5px rgba(0, 0, 0, 0.75)',
        'hover': '0px 0px 5px rgba(0, 0, 0, 0.75)',
        'aside': '0px 0px 5px rgba(0, 0, 0, 0.30)',
      },
      colors: {
        wheat: {
          100: '#FFE7CC',
          200: '#FFD9AE',
          300: '#FFCC91',
          400: '#FFBE74',
          500: '#FFB057',
          600: '#FFA33A',
          700: '#FF951D',
          800: '#FF8700',
          900: '#d5a244',
          122: 'hsla(39,63%,65%,.2)',
          123: '#ffe599',
        },
        primary: {
          50: '#e7eefe',
          100: '#D1F2F6',
          200: '#B8EBF1',
          300: '#9DE1EB',
          400: '#84DCE8',
          500: '#6AD5E3',
          600: '#51CEDE',
          700: '#37C6DA',
          800: '#1DBFD5',
          900: '#1c64f2',
          1000: '#0e5af1',
        },
        gray: {
          50: '#f8fafc',
          100: '#848DA1',
          200: '#9CA3B4',
          300: '#848DA1',
          400: '#6B768F',
          500: '#525F7C',
          600: '#3A486A',
          700: '#213157',
          800: '#081B45',
          900: '#111827',
          1000: '#181818',
          128: "hsla(215,28%,17%,.25)",
          122: '#1c1c1c',
          999: 'hsla(215,0%,10%,.2)',
          123: '#081110',
          124: 'hsla(176, 29%, 10%, .25)',
        },
        cyan: {
          123: '#76A5AF',
        },
      },
    },
  },
  plugins: [],
};
