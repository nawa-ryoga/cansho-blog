import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#5B6BA2",
        },
        font: {
          default: "#DADDEA",
          darken: {
            1: "#ADB5D1",
          },
        },
      },
      fontFamily: {
        zenKurenaido: ["Zen Kurenaido", "Noto Sans JP", "sans-serif"],
      },
      letterSpacing: {
        header: ".2em",
      },
    },
  },
  plugins: [],
} satisfies Config;
