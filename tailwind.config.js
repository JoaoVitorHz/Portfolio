/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'screen-1368': {'max': '1368px'},
        'screen-1280': {'max': '1280px'},
        'screen-1024': {'max': '1024px'},
        'screen-800': {'max': '800px'},
        'screen-768': {'max': '768px'},
        'screen-735': {'max': '735px'},
        'screen-300': {'max': '300px'},
      },
    },
  },
  plugins: [],
}

