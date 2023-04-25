/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      header: ["Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      "cornflower-blue": {
        50: "#eef3ff",
        100: "#e0e9ff",
        200: "#c6d6ff",
        300: "#a4b9fd",
        400: "#8093f9",
        500: "#5865f2",
        600: "#4445e7",
        700: "#3836cc",
        800: "#2f2fa4",
        900: "#2d2f82",
        950: "#1a1a4c",
      },
      shark: {
        50: "#f6f7f7",
        100: "#e0e5e7",
        200: "#c1cace",
        300: "#9aa7ae",
        400: "#74848d",
        500: "#5a6872",
        600: "#46535b",
        700: "#3b444a",
        800: "#32383d",
        900: "#23272a",
        950: "#161a1d",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
