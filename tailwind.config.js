// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d63227",
          light: "#e85c53",
          dark: "#d63227",
        },
        red: {
          50: "#fef2f2",
          100: "#fde8e8",
          200: "#fbd5d4",
          300: "#f8b4b2",
          400: "#f38784",
          500: "#d63227",
          600: "#d63227",
          700: "#d63227",
          800: "#99231c",
          900: "#7d1d18",
        },
      },
    
    fontSize: {
    "body-sm": ["14px", { lineHeight: "1.5" }],
    "body-base": ["16px", { lineHeight: "1.6" }],
    "body-md": ["18px", { lineHeight: "1.6" }],
    "body-lg": ["20px", { lineHeight: "1.6" }],
  },
 fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
},
  },
  plugins: [],
};
