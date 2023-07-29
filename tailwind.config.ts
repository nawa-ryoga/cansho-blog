import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#5B6BA2",
          darken: {
            1: "#4A5787",
            2: "#374473",
          },
        },
        font: {
          default: "#DADDEA",
          darken: {
            1: "#ADB5D1",
            2: "#9BA5C7",
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
