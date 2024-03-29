import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#FFD488",
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
        mono: [...fontFamily.mono],
      },

    },
  },
  plugins: [],
};
export default config;
