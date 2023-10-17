/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: "Cairo Play, sans-serif",
        inter: "Inter, sans-serif",
        manrope: "Manrope, sans-serif",
      },
      colors:{
        main:"#60196d"
      }
    },
  },
  plugins: [require("daisyui")],
};
