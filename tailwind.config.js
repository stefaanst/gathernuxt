/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

*/

let colors = {
  transparent: 'transparent',

  black: '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  grey: '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  white: '#ffffff',
  bg: '#f6f6f6',
  dimmed: '#999',
  border: '#e3e6e7',
  text: '#424242',
  darktext: '#373736',
  brand: '#A779E9',
  cardborder: '#dbdbdb'
}

module.exports = {
  colors: colors,
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  textSizes: {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem' // 48px
  },
  tracking: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em',
    ultrawide: '0.1em'
  },
  width: {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    full: '100%',
    screen: '100vw'
  },
  padding: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem'
  },
  margin: {
    auto: 'auto',
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem'
  },
  negativeMargin: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem'
  },
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none'
  },
  modules: {
    appearance: false,
    backgroundAttachment: false,
    backgroundColors: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderColors: false,
    borderRadius: false,
    borderStyle: false,
    borderWidths: false,
    cursor: false,
    display: ['responsive', 'hover'],
    flexbox: ['responsive'],
    float: false,
    fonts: false,
    fontWeights: false,
    height: false,
    leading: false,
    lists: false,
    margin: ['responsive'],
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    negativeMargin: ['responsive'],
    opacity: false,
    overflow: false,
    padding: ['responsive'],
    pointerEvents: false,
    position: ['responsive'],
    resize: false,
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: false,
    textColors: false,
    textSizes: false,
    textStyle: false,
    tracking: false,
    userSelect: false,
    verticalAlign: false,
    visibility: ['responsive'],
    whitespace: false,
    width: ['responsive'],
    zIndex: false
  },

  plugins: [
    require('tailwindcss/plugins/container')({
      center: true
      // padding: '1rem',
    })
  ],

  options: {
    prefix: '',
    important: false,
    separator: ':'
  }
}
