import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1220",
        "navy-2": "#0F172A",
        royal: "#2563EB",
        violet: "#6D28D9",
        gold: "#F5B942",
        ink: "#0F172A",
        paper: "#F7F8FB",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0B1220 0%, #1E2A5A 45%, #2563EB 75%, #6D28D9 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
