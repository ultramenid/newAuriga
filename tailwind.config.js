/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lora', ...defaultTheme.fontFamily.sans],
        'judul': ['DM Sans']
      },
    },
  },
  plugins: [],
}
