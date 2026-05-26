/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#00D1FF",
        secondary: "#111827",
        background: "#0B1120",
        panel: "#1F2937",
      },
    },
  },

  plugins: [],
}