/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':' #008000',
        'neutralDGrey':'#4D4D4D',
        'brandPrimary':'#4CAFAF',
        'neutralGrey':'#717171',
        'NeutralHome':'#ECECEC',
      },   

    },
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        md:"50px"
      }

  },

  },
  plugins: [require('flowbite/plugin')],
}

