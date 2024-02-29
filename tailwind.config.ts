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
        'xxs': '.6rem',
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
      },
      keyframes: {
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
        FadeLeftToRight: {
          "0%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
          },
          "1%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 100%)",
          },
          "2%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 2%, rgba(255,255,255,1) 100%)",
          },
          "3%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 3%, rgba(255,255,255,1) 100%)",
          },
          "4%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 100%)",
          },
          "5%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)",
          },
          "6%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 6%, rgba(255,255,255,1) 100%)",
          },
          "7%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 7%, rgba(255,255,255,1) 100%)",
          },
          "8%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 8%, rgba(255,255,255,1) 100%)",
          },
          "9%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 9%, rgba(255,255,255,1) 100%)",
          },
          "10%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 100%)",
          },
          "11%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 11%, rgba(255,255,255,1) 100%)",
          },
          "12%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 12%, rgba(255,255,255,1) 100%)",
          },
          "13%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 13%, rgba(255,255,255,1) 100%)",
          },
          "14%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 14%, rgba(255,255,255,1) 100%)",
          },
          "15%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%)",
          },
          "16%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 100%)",
          },
          "17%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 17%, rgba(255,255,255,1) 100%)",
          },
          "18%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 18%, rgba(255,255,255,1) 100%)",
          },
          "19%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 19%, rgba(255,255,255,1) 100%)",
          },
          "20%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)",
          },
          "21%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%)",
          },
          "22%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 100%)",
          },
          "23%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%)",
          },
          "24%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 24%, rgba(255,255,255,1) 100%)",
          },
          "25%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)",
          },
          "26%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 100%)",
          },
          "27%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 27%, rgba(255,255,255,1) 100%)",
          },
          "28%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 28%, rgba(255,255,255,1) 100%)",
          },
          "29%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,1) 100%)",
          },
          "30%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%)",
          },
          "31%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 31%, rgba(255,255,255,1) 100%)",
          },
          "32%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 32%, rgba(255,255,255,1) 100%)",
          },
          "33%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 100%)",
          },
          "34%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 34%, rgba(255,255,255,1) 100%)",
          },
          "35%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%)",
          },
          "36%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 36%, rgba(255,255,255,1) 100%)",
          },
          "37%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 37%, rgba(255,255,255,1) 100%)",
          },
          "38%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 38%, rgba(255,255,255,1) 100%)",
          },
          "39%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 39%, rgba(255,255,255,1) 100%)",
          },
          "40%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)",
          },
          "41%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 41%, rgba(255,255,255,1) 100%)",
          },
          "42%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,1) 100%)",
          },
          "43%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 43%, rgba(255,255,255,1) 100%)",
          },
          "44%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 44%, rgba(255,255,255,1) 100%)",
          },
          "45%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 45%, rgba(255,255,255,1) 100%)",
          },
          "46%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 46%, rgba(255,255,255,1) 100%)",
          },
          "47%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 47%, rgba(255,255,255,1) 100%)",
          },
          "48%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)",
          },
          "49%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%)",
          },
          "50%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)",
          },
          "51%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)",
          },
          "52%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 52%, rgba(255,255,255,1) 100%)",
          },
          "53%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 100%)",
          },
          "54%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 54%, rgba(255,255,255,1) 100%)",
          },
          "55%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 55%, rgba(255,255,255,1) 100%)",
          },
          "56%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 56%, rgba(255,255,255,1) 100%)",
          },
          "57%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 57%, rgba(255,255,255,1) 100%)",
          },
          "58%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 58%, rgba(255,255,255,1) 100%)",
          },
          "59%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 59%, rgba(255,255,255,1) 100%)",
          },
          "60%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 100%)",
          },
          "61%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)",
          },
          "62%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 62%, rgba(255,255,255,1) 100%)",
          },
          "63%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%)",
          },
          "64%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 64%, rgba(255,255,255,1) 100%)",
          },
          "65%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 100%)",
          },
          "66%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 66%, rgba(255,255,255,1) 100%)",
          },
          "67%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 67%, rgba(255,255,255,1) 100%)",
          },
          "68%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 68%, rgba(255,255,255,1) 100%)",
          },
          "69%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 69%, rgba(255,255,255,1) 100%)",
          },
          "70%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)",
          },
          "71%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 71%, rgba(255,255,255,1) 100%)",
          },
          "72%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 72%, rgba(255,255,255,1) 100%)",
          },
          "73%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 73%, rgba(255,255,255,1) 100%)",
          },
          "74%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 74%, rgba(255,255,255,1) 100%)",
          },
          "75%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%)",
          },
          "76%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 76%, rgba(255,255,255,1) 100%)",
          },
          "77%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 77%, rgba(255,255,255,1) 100%)",
          },
          "78%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 78%, rgba(255,255,255,1) 100%)",
          },
          "79%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 79%, rgba(255,255,255,1) 100%)",
          },
          "80%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
          },
          "81%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 81%, rgba(255,255,255,1) 100%)",
          },
          "82%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 82%, rgba(255,255,255,1) 100%)",
          },
          "83%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 83%, rgba(255,255,255,1) 100%)",
          },
          "84%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 84%, rgba(255,255,255,1) 100%)",
          },
          "85%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 85%, rgba(255,255,255,1) 100%)",
          },
          "86%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 86%, rgba(255,255,255,1) 100%)",
          },
          "87%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 87%, rgba(255,255,255,1) 100%)",
          },
          "88%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 88%, rgba(255,255,255,1) 100%)",
          },
          "89%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 89%, rgba(255,255,255,1) 100%)",
          },
          "90%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,1) 100%)",
          },
          "91%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 91%, rgba(255,255,255,1) 100%)",
          },
          "92%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 92%, rgba(255,255,255,1) 100%)",
          },
          "93%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 93%, rgba(255,255,255,1) 100%)",
          },
          "94%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 94%, rgba(255,255,255,1) 100%)",
          },
          "95%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 95%, rgba(255,255,255,1) 100%)",
          },
          "96%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 96%, rgba(255,255,255,1) 100%)",
          },
          "97%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 97%, rgba(255,255,255,1) 100%)",
          },
          "98%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 98%, rgba(255,255,255,1) 100%)",
          },
          "99%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 99%, rgba(255,255,255,1) 100%)",
          },
          "100%": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
