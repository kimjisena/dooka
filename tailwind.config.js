/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      // style guide
      'primary': '#20bead',
      'secondary': '#1f2939',
      'title': '#1f2939',
      'paragraph': '#3d4d69',
      'transparent': 'transparent',
      'success': {
        'light': '#f0fbf9',
        'dark': '#41cb8f',
      },
      'warning': {
        'light': '#fdf3e4',
        'dark': '#f2c741',
      },
      'critical': {
        'light': '#fca5bc',
        'dark': '#f9828b',
      },
      'interactive': {
        'light': '#9a96f9',
        'dark': '#6f7aff',
      },
      'optional': {
        'light': '#d2e4fe',
        'dark': '#4d94fb'
      },
      'gray': {
        'light': '#9eafc2',
        'dark': '#7f9dbf',
      },

      // light theme
      'light-primary': '#00FFAB',
      'light-secondary': '#14C38E',
      'light-tertiary-one': '#B8F1B0',
      'light-tertiary-two': '#E3FCBF',

      // dark theme
      'dark-primary': '#191A19',
      'dark-secondary': '#1E5128',
      'dark-tertiary-one': '#4E9F3D',
      'dark-tertiary-two': '#D8E9A8',
    },
    extend: {},
  },
  plugins: [],
}
