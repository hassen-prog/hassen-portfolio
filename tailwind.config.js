/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },

      colors: {
        background: "#07070A",
        surface: "#0D0D12",
        border: "#1E1E27",

        accent: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#6D28D9",
        },

        cyan: {
          DEFAULT: "#22D3EE",
        },
      },

      boxShadow: {
        glow: "0 0 60px rgba(139, 92, 246, 0.15)",
        "glow-lg": "0 0 100px rgba(139, 92, 246, 0.20)",
      },

      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
      },
    },
  },
  plugins: [],
};