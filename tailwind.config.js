/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#839e45",
        "header-1": "#6b784d",
        "header-3": "#464d35",
        "header-4": "#deeeba",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
