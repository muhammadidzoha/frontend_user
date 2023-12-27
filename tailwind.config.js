import formsPlugin from "@tailwindcss/forms";
import prelinePlugin from "preline/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#5F3AFF",
        lightPrimary: "#F4F7FE",
        secondary: "#80D9FB",
        text: "#1B254B",
        shadow: {
          500: "rgba(112, 144, 176, 0.08)",
        },
      },
      boxShadow: {
        "3xl": "14px 17px 40px 4px",
        inset: "inset 0px 18px 22px",
        darkinset: "0px 4px 4px inset",
      },
    },
  },
  plugins: [formsPlugin, prelinePlugin],
};
