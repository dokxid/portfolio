/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      "animation": {
        "rotational-wave": "rotational-wave 0.5s ease-in-out infinite"
      },
      "rotational-wave": {
        "0%": {
          "transform": "rotate(0deg)"
        },
        "25%": {
          "transform": "rotate(20deg)"
        },
        "50%": {
          "transform": "rotate(-20deg)"
        },
        "75%": {
          "transform": "rotate(20deg)"
        },
        "100%": {
          "transform": "rotate(0deg)"
        }
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
      prefix: "ctp",
    }),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        "light": {
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
        "dark": {
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
  }
}