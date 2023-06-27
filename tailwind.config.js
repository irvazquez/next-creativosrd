/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'orange-brand': '#ff4e00',
      'gray-brand': '#525d7d',
      'gray-text': '#2e2e2e',
      white: '#ffffff',
      'gray-light': '#f7f7f8',
    },
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        anna: ['Anna', 'sans-serif'],
        animation: {
          scroll: 'scroll 40s linear infinite',
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(calc(-500px * 5))' },
          },
        },
      },
    },
  },
  plugins: [],
};
