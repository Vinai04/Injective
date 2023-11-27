/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skyblue': '#2EDFF5',
        'darkblue' : '#38B6FF',
        'lightpink': '#FF66C4',
        'purple' : '#5D25B7',
        'yellow': '#FFDE59',
        'white' : '#FFFFFF',
        'violet' : '#39065D'
      },
      backgroundImage: {
        'background-pattern': "url('/public/launchpage_bg.svg')"
      },
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px)  scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px)  scale(0.8)"
          },
          "100%": {
            transform: "translate(0px, 0px)  scale(1)"
          },
        }
      }
    },
  },
  plugins: [],
}