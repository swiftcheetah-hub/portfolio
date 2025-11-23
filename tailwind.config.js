/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fbbf24',
          dark: '#f59e0b',
          light: '#fcd34d',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          lighter: '#2a2a2a',
        }
      },
    },
  },
  plugins: [],
}

