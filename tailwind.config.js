/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
         noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        // Neutral collors.
        Neutral_900: "hsl(227, 75%, 14%)",
        Neutral_800: "hsl(226, 25%, 17%)",
        Neutral_700: "hsl(225, 23%, 24%)",
        Neutral_600: "hsl(226, 11%, 37%)",
        Neutral_300: "hsl(0, 0%, 78%)",
        Neutral_200: "hsl(217, 61%, 90%)",
        Neutral_100: "hsl(0, 0%, 93%)",
        Neutral_0: "hsl(200, 60%, 99%)",
        // red colors.
        Red_400: "hsl(3, 86%, 64%)",
        Red_500: "hsl(3, 71%, 56%)",
        Red_700: "hsl(3, 77%, 44%)",
      },
    },
  },
  plugins: [],
};
