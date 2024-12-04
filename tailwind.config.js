/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
        screens: {
          'xs': '392px', // Custom breakpoint for 372px or smaller
        },
    },
  },
  plugins: [],
}

