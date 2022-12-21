/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        wheat: {
          100: "#f6ead5",
          200: "#f1e0c1",
          300: "#ecd6ac",
          400: "#e7cb97",
          500: "#e6c890",
          600: "#e3c182",
          700: "#deb76e",
          800: "#d9ac59",
          900: "#d5a244",
          122: "hsla(39,63%,65%,.2)",
        },
        primary: {
          50: "#e7eefe",
          100: "#cfdefc",
          200: "#b7cdfb",
          300: "#9fbdf9",
          400: "#87acf8",
          500: "#6e9cf7",
          600: "#568bf5",
          700: "#3e7bf4",
          800: "#3e7bf4",
          900: "#1c64f2",
          1000: "#0e5af1",
        },
        gray: {
          50: "#f8fafc",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          1000: "#181818",
          122: "hsla(215,28%,17%,.25)",
          999: "hsla(215,0%,10%,.2)",
        },
      },
    },
  },
  plugins: [],
};
