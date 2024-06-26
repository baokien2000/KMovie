import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        desktop: "1920px", 
        laptop: "1440px",
        laptopSmall: "1024px",
        tablet: "768px",
        smallTablet: "600px",
        bigPhone: "450px",
        phone: "375px",
        smallPhone: "280px"
    },
    colors: {
        primary: "#373743",
        secondary: "#2f2f2f",
      muted: "#7E8695",
      mainBackground: "#2d2d2d",
      mainColor: "#ffce4f",
      cardBackground:"#3A3A3A",
      title: "#cac9c9",
      default:"#ccc",
      dark1: "#474747",
      dark2: "#171717",
      dark3: "#a7a7a7",
      dark4:"#1D1C1C",
        gradientPurple: "linear-gradient(to right, #215bf0, #be54ff)",
        brand: "#1E5BEE",
        purple50: "#5661F5",
        purple10: "#E0E2FF",
        des: "#404040",
        success: "#09D785",
        warning: "#F19C38",
        hypelink: "#459CF9",
        error: "#E8523D",
        troke: "#D2D5DA",
        background: "#FFFFFF"
    },
    },
  },
  plugins: [],
};
export default config;
