/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "dark-green": "#022C25",
        "normal-green": "#46bc5e",
        "light-green": "#78dd67",
      },
    },
  },
  plugins: [],
};
