/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zima: {
          50: "#E3F9F7",
          200: "#92D7ED",
          300: "#C8E6FB",
          400: "#37F6EB",
          500: "#37C0F6",
        },
        night: "#111313",
      },
    },
  },
  plugins: [],
};
