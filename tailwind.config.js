/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lp12: { max: "1200px" },
      lps: { max: "1024px" },
      tablet: { max: "768px" },
      mlsm: { max: "640px" },
      ml: { max: "425px" },
      ms: { max: "320px" },
    },
  },
  plugins: [],
};
