/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary':'#1B2633',
      'paragraph':'#C261F7',
      'title':'#95A4BF',
      'heading':'#BC4EF7',
      'button':'#BD4EF4',
      '#BC4EF7':'heading',
      'white':'white',

    },
    fontFamily:{
      'poppins':['Poppins'],
    },
  },
  plugins: [],
}

