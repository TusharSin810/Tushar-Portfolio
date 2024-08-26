/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        transitionDuration: {
          '3000': '3000ms',
      }
    },
  },
  plugins: [],
}

