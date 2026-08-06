import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "#F6F8FC",
        "canvas-dim": "#EDF1FA",
        ink: "#0F1330",
        "ink-soft": "#1B2050",
        mist: "#E4E9F6",
        "mist-dark": "#C9D2ED",
        line: {
          violet: "#5B4FE9",
          "violet-dim": "#8B82F0",
          amber: "#FF9F45",
          teal: "#22C7B5",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,79,233,0.15), 0 20px 60px -20px rgba(91,79,233,0.35)",
        soft: "0 10px 40px -12px rgba(15,19,48,0.15)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-line": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        "drift-slow": "drift 9s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
