/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5E9',
        lightBlue: '#B2DAF0',
        mediumBlue: '#79AEDB',
        darkBlue: '#4D7AAB',
      },
    },
  },
  plugins: [],
};
