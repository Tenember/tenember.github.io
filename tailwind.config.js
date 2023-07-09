/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    backgroundImage: {
      "top-right-dust": "url('/public/dust-top-right.bcc932ca.png')",
      "btm-left-dust": "url('/public/dust-btm-left.28ba3476.png')",
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
  },
};
export const plugins = [];
