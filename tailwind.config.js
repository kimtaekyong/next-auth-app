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
      xl: "20px",
      "2xl": "28px",
      "3xl": "32px",
      "4xl": "42px",
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      medium: "500",
      bold: "700",
    },
  },
  plugins: [],
};
