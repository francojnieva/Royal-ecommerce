/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner': 'inset 0 0 32px 15px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}

