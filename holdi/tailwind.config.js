/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "holdi-orange": "#E34618",
        "holdi-gray": "#2B2B2B",
        "holdi-footer": "#1A1A1A",
      },
      backgroundSize: {
        "100%": "153%",
      },
    },
  },
  plugins: [],
};
