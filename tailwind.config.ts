import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffeePrimary: "#2e1610",
        coffeeSecondary: "#492c25",
        coffeeAccent: "#ff8200",
        coffeeAccentDark: "#8f4a00",
        coffeeNeutral: "#d3c9c5",
      },
    },
    animation: {
      "loop-scroll": "loop-scroll 45s linear infinite",
      "loop-scroll-reverse": "loop-scroll-reverse 45s linear infinite",
    },
    fontFamily: {
      fuggles: ["Fuggles", "cursive"],
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      "loop-scroll-reverse": {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX()" },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
