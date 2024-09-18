module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#2563eb',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}