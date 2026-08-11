import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#14120F",
        ink: "#ECE3D2",
        moss: "#445A43",
        "moss-light": "#5C7A5A",
        ember: "#9C5330",
        stone: "#6B665C",
        gold: "#B08D57",
        line: "rgba(236,227,210,0.12)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
