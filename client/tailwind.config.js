/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        quoteColor: "#787e8d",
      },
      fontFamily: {
        // "crisis": ['Climate Crisis', 'Bebas Neue', 'Montserrat', "cursive"],
        crisis: ["Montez variant0"],
        monteserat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
