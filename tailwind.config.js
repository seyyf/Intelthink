/** @type {import('tailwindcss').Config} */
const color = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*{js, html}"],
  theme: {
    extend: {},
    colors: {
      color,
      grey: "#F3F5F8",
      darkGrey: "#72767C",
    },
  },
  plugins: [],
};
