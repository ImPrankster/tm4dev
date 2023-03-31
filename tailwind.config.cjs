/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        almostFull: "85vh",
      },
      width: {
        almostFull: "90vw",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  },
};
