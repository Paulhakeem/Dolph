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
    screens: {
      'sm': '640px',
      'tablet': '640px',
      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        'light': '#e6e9f1',
        'blue': '#5796ff',
        'brown': '#2d2d2d',
        'light-blue': '#c2dafe',
        'heading': '#2d2d2d',
        'box': '#f6f6f6',
        'bg': '#3c4353',
        'cars': '#edf0f7'
      }
    },
  },
  plugins: [require("preline/plugin")],
}

