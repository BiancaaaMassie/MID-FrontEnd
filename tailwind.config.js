/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#fbbf24', // amber
        secondary: '#8b5cf6', // violet
        accent: '#10b981', // emerald
        background: '#fdf2f8', // rose-50
        card: '#ffffff',
        text: '#1f2937',
      },
    },
  },
  plugins: [],
}