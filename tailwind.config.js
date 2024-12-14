/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "montserrat",
      },
      colors: {
        chessbg: {
          700: "#4B4847",
          800: "#2C2B29",
        },
      },
    },
  },
  plugins: [],
};
