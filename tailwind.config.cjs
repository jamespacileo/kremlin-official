/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark2"]'],

  theme: {
    extend: {
      fontFamily: {
        russo: ["Russo One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
