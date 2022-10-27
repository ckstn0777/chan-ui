import { ChanProvider } from '../src/context/ChanProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
