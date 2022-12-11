/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pc_gray: '#414141',
        pc_orange: '#FF963C',
        pc_light_gray: '#777777',
        pc_dark_gray: '#2E2E2E',
        pc_yellow: '#FFCC21',
      },
      fontFamily: {
        inter: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}
