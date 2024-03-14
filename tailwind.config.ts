import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ".6rem",
      },
      aspectRatio: {
        "16/12": "16 / 12",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.45s ease-out",
        "left-right": "leftToRight 0.4s ease-out",
        "fade-left-right": "leftToRight 0.2s",
        "bounce-slow": "bounceSlow 7s infinite",
        success: "success 4s",
        "slide-reviews": "slideReviews 65s linear infinite",
      },
      keyframes: {
        slideReviews: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-600%)" },
        },
        success: {
          "0%": { opacity: "0" },
          "5%": { opacity: "0.5" },
          "10%": { opacity: "1" },
          "70%": { opacity: "1", transform: "translateX(0%)" },
          "80%": { opacity: "1", transform: "translateX(100%)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
        bounceSlow: {
          "77%": {
            transform: "translateY(0)",
          },
          "84%": {
            transform: "translateY(-25%)",
          },
          "89%": {
            transform: "translateY(5%)",
          },
          "93%": {
            transform: "translateY(-10%)",
          },
          "97%": {
            transform: "translateY(0)",
          },
          // "98%": {
          //   transform: "translateY(0)",
          // },
          // "100%": {
          //   transform: "translateY(0)",
          // },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          // "50%": { opacity: "0.35" },
          "100%": { opacity: "1" },
        },
        leftToRight: {
          "0%": { opacity: "0.45", transform: "translateX(-3.25%)" }, // Start from left, out of view
          "100%": { opacity: "1", transform: "translateX(0)" }, // End at original position
        },
        shrinkWidth: {
          "0%": { maxWidth: "100%" },
          "100%": { maxWidth: "0%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
