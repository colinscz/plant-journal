const FormKitVariants = require('@formkit/themes/tailwindcss')
const tailwindPluginFormKit = require('@formkit/tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './tailwind-theme.js',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindPluginFormKit, FormKitVariants],
}

