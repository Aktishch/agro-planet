const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundColor: theme('colors.white.DEFAULT'),
      borderRadius: theme('borderRadius.3xl'),
      transition: '200ms ease',
      overflow: 'hidden',
      '&-active': {
        '&:active': {
          transform: 'translateY(0.25rem)',
        },
      },
      '&-content': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
    },
  })
})
