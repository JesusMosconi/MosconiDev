import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0C10",
        charcoal: "#1F2833",
        "deep-slate": "#2D3748",
        "cyber-lime": "#C1FF72",
        "on-surface": "#E3E2E8",
        "on-surface-variant": "#C2C9B3",
        outline: "#8C937F",
      },
      fontFamily: {
        display: ["var(--font-epilogue)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: { container: "1200px" },
    },
  },
};

export default config;
