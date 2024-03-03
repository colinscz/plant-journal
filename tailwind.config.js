const FormKitVariants = require('@formkit/themes/tailwindcss')
const tailwindPluginFormKit = require('@formkit/tailwindcss')
const debugScreens = require('tailwindcss-debug-screens')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'formkit.theme.ts'
  ],
  theme: {
    extend: {},
  },
  plugins: [debugScreens, tailwindPluginFormKit, FormKitVariants],
}

