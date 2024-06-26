import { Global } from '@mantine/core'
import { FC } from 'react'

const GlobalStyles: FC = () => (
  <Global
    styles={(theme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      '#__next': {
        minHeight: '100vh',
      },

      '.loader': {
        position: 'absolute',
        top: '50%',
        width: '100%',
        margin: '0 auto',
      },



      link: {
        color: 
        theme.colorScheme === 'dark'
          ? theme.colors.red[5]
          : theme.colors.green[5],
      },

      '::selection': {
        color: theme.colors.dark[9],
        background: theme.colors.yellow[4],
      },

      '::-moz-selection': {
        color: theme.colors.dark[9],
        background: theme.colors.yellow[4],
      },
    })}
  />
)

export default GlobalStyles
