/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]

}

 
module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});
