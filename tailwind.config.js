/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF6FA",
          100: "#FFE9F2",
          200: "#FFD1E4",
          300: "#FFA8CB",
          400: "#FF7FB0",
          500: "#F4508F",
          600: "#DB2E72",
          700: "#B5195A",
        },
        inkrose: {
          950: "#0B0708",
          900: "#120C10",
          800: "#1A1218",
          700: "#241621",
        },
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        label: ["Quicksand", "sans-serif"],
      },
      keyframes: {
        floatBlob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(24px,-30px) scale(1.06)" },
          "66%": { transform: "translate(-18px,18px) scale(0.94)" },
        },
        sparkleUp: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: 0 },
          "10%": { opacity: 0.9 },
          "90%": { opacity: 0.9 },
          "100%": { transform: "translateY(-420px) rotate(200deg)", opacity: 0 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.18)" },
        },
      },
      animation: {
        floatBlob: "floatBlob 12s ease-in-out infinite",
        sparkleUp: "sparkleUp 10s ease-in infinite",
        shimmer: "shimmer 5s linear infinite",
        heartbeat: "heartbeat 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
