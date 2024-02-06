/** @type {import('tailwindcss').Config} */

import { withAnimations } from "animated-tailwindcss";

export default withAnimations({
  content: ["./src/**/*.{html,js,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // animations
      animation: {
        rotationalwave: "rotational_wave 10s ease-in-out infinite",
        x_scale: "x_scale 0.3s ease-out",
      },

      // animation keyframes
      keyframes: {
        rotational_wave: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%, 75%": {
            transform: "rotate(20deg)",
          },
          "50%": {
            transform: "rotate(-20deg)",
          },
        },
        x_scale: {
          "0%": {
            width: "80%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
  ],
  daisyui: {
    darkTheme: "mocha",
    themes: [
      {
        latte: {
          primary: "#1e66f5", // blue
          secondary: "#ea76cb", // pink
          accent: "#179299", // teal
          neutral: "#dce0e8", // crust
          "base-100": "#eff1f5", // base
          info: "#209fb5", // sapphire
          success: "#40a02b", // green
          warning: "#df8e1d", // yellow
          error: "#d20f39", // red
        },
        mocha: {
          primary: "#89b4fa", // blue
          secondary: "#f5c2e7", // pink
          accent: "#94e2d5", // teal
          neutral: "#11111b", // crust
          "base-100": "#1e1e2e", // base
          info: "#74c7ec", // sapphire
          success: "#a6e3a1", // green
          warning: "#f9e2af", // yellow
          error: "#f38ba8", // red
        },
      },
    ],
  },
});
