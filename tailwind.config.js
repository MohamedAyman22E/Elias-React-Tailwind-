/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      first_color: "#282c33",
      color_Two: "#Abb2bf",
      color_Three: "#c77bdd",
      white_color: "#fff",
    },
    screens: {
      1400: "1400px",
      1300: "1300px",
      1200: "1200px",
      1100: "1100px",
      1015: "1015px",
      1000: "1000px",
      900: "900px",
      800: "800px",
      700: "700px",
      630: "630px",
      600: "600px",
      500: "500px",
      470: "470px",
      400: "400px",
      360: "360px",
      300: "300px",
    },
    fontSize: {
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
    },

    fontFamily: {
      bodyFont: ["Fira Code", "monospace"],
    },
    letterSpacing: {
      spacing: "1px",
    },
    scrollPadding: {},
  },
  plugins: [],
};
