const defaultColors = require('tailwindcss/colors')
const colors = {
  ...defaultColors,
  ...{
    "red-lighter": {
      "100": "#ffd6da",
      "400": "#f05851",
    },
    "scheme": {
      "yellow": "#F1CC00",
      "whitesmoke": "#fffde9",
      "purple":"#884dca",
      "purple-light":"#875db8",
      "orange": "#FF4800",
      "green":"#224002",
      "green-light":"#7ab850",
      "green-fresh":"#509B10",
      "gray": "#3e3e3e",
      "red": "rgb(217,46,82)",
      "red-light": "rgb(232, 93, 117)",
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
      "dark-green": "#0F3F05",
    },
  },
}
module.exports = {
  content: [
    "./dist/*.html",
    "./dist/**/*.html",
    "./dist/**/**/*.html",
    './src/*.html',
    './src/**/*.html',
    './src/**/**/*.html',
  ],
  purge: [
    "./dist/*.html",
    "./dist/**/*.html",
    "./dist/**/**/*.html",
    './src/*.html',
    './src/**/*.html',
    './src/**/**/*.html',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': 'var(--font-family)',
      'body': ['Excon'],
      "excon": ["Excon"]
    },
    extend: {},
    colors: colors,
    screens: {
      'xs': '375px',
      '2xs': '425px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-54': '-54deg',
      '0': '0',
      '45': '45deg',
      '54': '54deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '100': '100px',
      '200': '200px',
      '300': '300px',
      '400': '400px',
      '446': '446px',
      '500': '500px',
      '550': '550px',
      '600': '600px',
      '660': '660px',
      '700': '700px',
      '788': '788px',
      '800': '800px',
      '900': '900px',
      full: '100%',
      screen: '100vh'
    }),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '100': '100px',
      '200': '200px',
      '300': '300px',
      '400': '400px',
      '446': '446px',
      '500': '500px',
      '600': '600px',
      '660': '660px',
      '700': '700px',
      '800': '800px',
      '900': '900px',
      full: '100%',
      screen: '100vh'
    }),
  },
  variants: {
    extend: {

      fontFamily: ['hover', 'focus'],
    }
  },
  corePlugins: {
    fontFamily: false,
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
