import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#000B0F",
        },
        black: {
          main: "#000",
          off: "#4E4E4E",
        },
        white: {
          main: "#fff",
          off: "#EAEAEA",
          secondary: "#BFBFBF",
        },
        gray: {
          main: "#DEDFE1",
        },
        success: "#1F8D51",
        warning: "#FFB545",
        purple: "#4A25E1 ",
        blueish: "#7B5AFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        uploadPdf: "0px 4px 38px 0px rgba(36, 36, 37, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
