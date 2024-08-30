/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        transitionDuration: {
          '2000': '2000ms',
      }
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar':{
          display: 'none',
        },
        '.no-scrollbar':{
          '-ms-overflow-style':'none',
          'scrollbar-width': 'none'
        },
      }
      addUtilities(newUtilities) 
    }
  ],
}

