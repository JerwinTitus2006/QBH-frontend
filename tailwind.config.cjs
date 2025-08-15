/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-5px)" },
          "40%, 80%": { transform: "translateX(5px)" },
        },
        spark: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "50%": { transform: "translateY(-10px) scale(1.2)", opacity: "0.8" },
          "100%": { transform: "translateY(-20px) scale(0)", opacity: "0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255,255,255,0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(255,255,255,0.8)" },
        },
        heal: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.5" },
        },
        scrollBg: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sparkle: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "0", transform: "scale(0)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        spark: "spark 0.6s linear forwards",
        glow: "glow 1s ease-in-out infinite",
        heal: "heal 0.5s ease-in-out",
        scrollBg: "scrollBg 60s linear infinite",
        float: "float 3s ease-in-out infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
