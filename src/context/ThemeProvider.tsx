import { css, Global } from '@emotion/react'
import React, { createContext, useState, useCallback } from 'react'
import { lightColorTheme } from '../styles/color/palette'
import { Theme } from '../styles/color/theme'

const ThemeContext =
  createContext<{
    theme: Theme
    setTheme(mode: Theme): void
  } | null>(null)

interface Props {
  initialTheme?: Theme
  children: React.ReactNode
}

export function ThemeProvider({ children, initialTheme = 'velo' }: Props) {
  const [theme, setTheme] = useState(initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <Global styles={styles(initialTheme)} />
    </ThemeContext.Provider>
  )
}

const styles = (theme: Theme) => css`
  body {
    ${lightColorTheme(theme)}
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${lightColorTheme(theme)}
    }
  }

  body[data-theme='light'] {
  }
  body[data-theme='dark'] {
  }
`
