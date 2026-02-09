/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // scan all JS/JSX/TSX files
  darkMode: "class", // use 'dark' class to enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#17cf54",
        "primary-dark": "#12a342",
        secondary: "#0b120d",
        accent: "#ccfccb",
        "background-light": "#f6f8f6",
        "background-dark": "#112116",
        "surface-light": "#ffffff",
        "surface-dark": "#1c2e22",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        sans: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
