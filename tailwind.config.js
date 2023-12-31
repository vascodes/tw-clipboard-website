/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "2560px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      }
    },
  },
  plugins: [],
};
