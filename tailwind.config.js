/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
