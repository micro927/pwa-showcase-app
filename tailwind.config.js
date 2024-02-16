/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#0e131a',
        background: '#f8fafc',
        primary: '#212831',
        secondary: '#84b0ea',
        accent: '#218746',
      },
    },
  },
  plugins: [],
};
