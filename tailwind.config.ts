import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAF9F6",
          dark: "#141414",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          dark: "#EDEDED",
        },
        muted: {
          DEFAULT: "#6B6B63",
          dark: "#A3A39B",
        },
        accent: {
          DEFAULT: "#3B5B7A",
          dark: "#8FB4D8",
        },
        line: {
          DEFAULT: "#E5E2D9",
          dark: "#2A2A2A",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "640px",
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: "1.7",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
