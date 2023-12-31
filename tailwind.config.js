/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/preline/preline.js"
  ],
  theme: {
    extend: {
      colors: {
        'light': '#f4f4f4',
        'bue': '#5796ff',
        'brown': '#2d2d2d',
        'light-blue': '#c2dafe'
      }
    },
  },
  plugins: [require("preline/plugin")],
}

