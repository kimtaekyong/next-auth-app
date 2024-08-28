/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
        gowun: ['"Gowun Batang"', "serif"],
      },
      marginAuto: {
        margin: "0 auto",
      },
    },
    colors: {
      white: "#ffffff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: "#1f1f1f",
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "38px",
      "4xl": "42px",
      "5xl": "48px",
      "6xl": "54px",
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      medium: "500",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [],
};
