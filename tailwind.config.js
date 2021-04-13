// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        240: '60rem',
        160: '39.5rem',
        152: '38rem',
        102: '25.5rem',
      },
      height: {
        '1/12': '08.3333333%',
        '2/12': '16.6666666%',
        '3/12': '25%',
        '4/12': '33.3333333%',
        '5/12': '41.6666666%',
        '6/12': '50%',
        '7/12': '58.33333333%',
        '8/12': '66.66666666%',
        '9/12': '75%',
        '10/12': '83.3333333%',
        '11/12': '91.6666666%',
        '12/12': '100%',
      },
    },
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      101: '1.01',
      102: '1.02',
      103: '1.03',
      104: '1.04',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    fontFamily: {
      roboto: ['Roboto'],
      lato: ['Lato'],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      transitionDuration: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
