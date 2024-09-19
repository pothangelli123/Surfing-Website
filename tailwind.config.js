module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#2563eb',
        },
        teal: {
          400: '#4fd1c5',
          // ... other teal shades
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}