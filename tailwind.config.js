/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1C1B21',
        'accent-1': '#FFC857', // yellow
        'accent-2': '#6184D8', // blue
        'accent-3': '#28272F', // light-grey
        'accent-4': '#EF6461', // red
        'font-color': '#ffffff',
        'font-color-2': '#9F9FA0', // light-grey
      },
      fontFamily: {
        'bowlby': ['Bowlby One', 'cursive'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};