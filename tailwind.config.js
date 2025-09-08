/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#b9dcff',
          300: '#8cc7ff',
          400: '#57a9ff',
          500: '#2a87ff',
          600: '#186ae6',
          700: '#1455b4',
          800: '#124991',
          900: '#113f78'
        }
      }
    },
  },
  plugins: [],
}
