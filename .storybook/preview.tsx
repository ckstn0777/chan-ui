import React from 'react'
import { ChanProvider } from '../src/context/ChanProvider'
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appContentBg: '#333333', appBg: '#2f2f2f' },
    // Override the default light theme
    light: { ...themes.normal },
  },
}

export const decorators = [
  (Story) => {
    return (
      <ChanProvider initialTheme="wjtb">
        <Story />
      </ChanProvider>
    )
  },
]
