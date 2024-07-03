/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.html', './src/ts/**/*.ts'],
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: '459.98px',
      sm: '575.98px',
      md: '767.98px',
      lg: '991.98px',
      xl: '1365.98px',
      xxl: '2559.98px',
    },
    constants: {
      xs: 24,
      sm: 30,
      md: 38,
      lg: 50,
      xl: 56,
      xxl: 60,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: {
        DEFAULT: '#E88A46',
        light: '#FFE7D0',
        dark: '#F58964',
      },
      second: {
        DEFAULT: '#55AD4D',
        light: '#CDFFE1',
      },
      black: {
        DEFAULT: '#373737',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        DEFAULT: '#F2F2F2',
        dark: '#CACACA',
      },
      grey: {
        DEFAULT: '#E3E3E3',
      },
      red: {
        DEFAULT: '#DB3636',
        light: '#F93C00',
        dark: '#EA6458',
      },
      blue: {
        DEFAULT: '#ECF5FC',
        dark: '#559FE5',
      },
      pink: {
        DEFAULT: '#E2527D',
        light: '#FFECEC',
      },
      purple: {
        DEFAULT: '#606DB8',
      },
    },
    fontFamily: {
      alt: 'var(--tw-font-alt)',
      base: 'var(--tw-font-base)',
    },
    gridColumn: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    gridRow: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    extend: {
      content: {
        auto: '""',
      },
      fontSize: {
        mini: '0.625rem',
      },
      borderRadius: {
        inherit: 'inherit',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('./plugins/container'),
    require('./plugins/dialog'),
    require('./plugins/card'),
    require('./plugins/pack'),
    require('./plugins/picture'),
    require('./plugins/form'),
    require('./plugins/input'),
    require('./plugins/button'),
    require('./plugins/switch'),
  ],
}
