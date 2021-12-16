
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const colors = {
  ...defaultColors,
  ...{
    "red-lighter": {
      "100": "#ffd6da",
      "400": "#f05851",
    },
    "scheme": {
      "yellow": "#F1CC00",
      "purple":"#884dca",
      "purple-light":"#875db8",
      "orange": "#FF4800",
      "green": "rgb(85,184,42)",
      "gray": "#3e3e3e",
      "red": "rgb(217,46,82)",
      "red-light": "rgb(232, 93, 117)",
      // "green": "#4EBFA8",
      "dark-green": "#72CCB9",
      "dark-blue": "#00016B",
      "green-85": "rgba(114,204,185, .85)",
      "primary": "#1d1f32",
      "primary-dark": "#0e101c",
      "primary-hover": "#cd342d",
      "primary-pink": "#FFD6DA",
      "primary-custom": "#fff000",
      "primary-green": "#BEF0E0",
      "primary-yellow": "#F1CC00",
      "secondary-light":"#9ca3af",
      "blue": "#3db4f2",
      "blue-light": "#53bdf5",
      "blue-dark": "#338cbc",
    },
  },
}
module.exports = {
  // corePlugins: {
  //   fontFamily: false,
  // },
  content: ["./src/dist/*.html",'./src/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': 'var(--font-family)',
      'body': ['DIN2014', 'sans-serif'],
    },

    extend: {
    },
    colors: colors
  },
  extend: {
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }
  },

  variants: {
    animation: ["motion-safe"],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('tailwindcss'),
    // require('tailwindcss-children'),
  ],
}
