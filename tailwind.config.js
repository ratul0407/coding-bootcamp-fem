/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        dark_blue: "hsl(240, 38%, 20%)",
        grayish_blue: "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
