const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      gray: "#333333",
      white: "#e9e9e9",
    },
    plugins: [],
  },
};
