import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#EDDFE0',
        primary: '#F5F5F7',
        extra1: '#B7B7B7',
        extra2: '#705C53',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

