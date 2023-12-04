/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      "ip5": { 'raw': '(max-height: 600px)' },
      "sm": { 'raw': '(max-height: 840px)' }
    }
  },
  plugins: [],
}

