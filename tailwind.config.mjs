/** @type {import('tailwindcss').Config} */
import colors, { rose } from "tailwindcss/colors";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red,
      zinc: colors.zinc,
      green: colors.green,
      blue: colors.blue,
      lime: colors.lime,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      teal: colors.teal,
      amber: colors.amber,
      indigo: colors.indigo,
      stone: colors.stone,
    },
    extend: {
      boxShadow: {
        own: "0 0 0 1px, 10px 10px 0 0",
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
