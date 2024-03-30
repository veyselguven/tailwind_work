/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        genumu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#FZFZFZ",
      },
    },
  },
  plugins: [],
};
