/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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

