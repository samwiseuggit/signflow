export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        signature: ['Dancing Script', 'cursive'],
        handwriting: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
