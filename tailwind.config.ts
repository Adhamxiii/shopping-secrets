import type { Config } from "tailwindcss";
import type { Metadata } from "next";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#ff8f9c",
        blackish: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
export default config;
