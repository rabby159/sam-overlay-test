/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        twinkling: 'twinkling 20s infinite linear',
        move: 'move 10s infinite linear',
      },
      keyframes: {
        twinkling: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        move: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

