/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ccdgblack: "#000000",
        ccdggreen: "#34A853",
        ccdgblue: "#4285F4",
        ccdgred: "#EA4336",
        ccdgyellow: "#FAAB00",
      },
    },
  },
  plugins: [],
}
