/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Crucial for our light/dark mode requirement
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ensuring elegant, eye-pleasing recruiter colors (No Gobindo Design)
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#10b981", // Emerald accent
          600: "#059669",
          700: "#047857",
        }
      },
    },
  },
  plugins: [],
};