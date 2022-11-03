/** @type {import('tailwindcss').Config} */
const color = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*{js, html}"],
  theme: {
    extend: {},
    colors: {
      ...color,
      grey: "#F3F5F8",
      darkGrey: "#72767C",
      purple: "#A162F7",
      pink: "#FF7E86",
      yellow: "#F6CC0D",
      darkBlue: "#0F2837",
      carrot: "#FF9619",
    },
  },
  plugins: [],
};
