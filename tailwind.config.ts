import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102344",
        bluebrand: "#2563eb",
        mist: "#eff6ff"
      }
    }
  },
  plugins: []
};
export default config;
