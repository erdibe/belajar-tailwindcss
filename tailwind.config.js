/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        grid1: "url('/img/grid/1.jpg')",
        grid2: "url('/img/grid/2.jpg')",
        grid3: "url('/img/grid/3.jpg')",
        grid4: "url('/img/grid/4.jpg')",
        grid5: "url('/img/grid/5.jpg')",
        grid6: "url('/img/grid/6.jpg')",
        grid7: "url('/img/grid/7.jpg')",
        grid8: "url('/img/grid/8.jpg')",
        grid9: "url('/img/grid/9.jpg')",
        grid10: "url('/img/grid/10.jpg')",
      },

      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        rds: "#c0ffee",
        weis: "#bada55",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "goyang 0.5s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
