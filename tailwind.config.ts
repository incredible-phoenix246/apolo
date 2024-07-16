import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#0b192f",
        secondary: "#64ffda",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },

        slideDown: {
          "50%": {
            opacity: "0.7",
            transform: "translateY(50)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeOut: {
          "50%": {
            opacity: "0.7",
            transform: "translateY(50)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.5s infinite",
        slideDown: "slideDown 0.5s 0.2s ease forwards",
        loadspin: "loadspin 1.5s linear infinite",
      },
      fontFamily: {
        raleway: [`var(--font-raleway)`, "montserrat"],
        unica: [`var(--font-unica)`, "montserrat"],
        poppins: [`var(--font-poppins)`, "sans-serif"],
        worksans: [`var(--font-work-sans)`, "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
