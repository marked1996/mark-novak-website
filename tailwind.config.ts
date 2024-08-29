import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#161618",
        blob: "hsl(210, 100%, 50%)",
        markblue: "hsl(210, 100%, 40%)",
        lightgray: "hsla(220, 0%, 91%, 1)",
        offwhite: "hsla(210, 20%, 98%, 1)",
        markgray: "hsla(218, 11%, 65%, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
