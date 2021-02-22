/* eslint @typescript-eslint/no-var-requires: "off" */
const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: require('./styles/colors'),
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
  future: {removeDeprecatedGapUtilities: true, purgeLayersByDefault: true},
};
