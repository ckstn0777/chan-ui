import { css, Global } from '@emotion/react'
import React, { createContext, useState, useCallback } from 'react'
import { darkColorTheme, lightColorTheme } from '../styles/color/palette'
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
  /** color 기본 설정 */
  body {
    ${lightColorTheme(theme)}
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${darkColorTheme(theme)}
    }
  }

  /** mode에 따라 dataset.theme가 변경되고 그에 따른 스타일 설정 */
  body[data-mode='light'] {
    ${lightColorTheme(theme)}
  }

  body[data-mode='dark'] {
    ${darkColorTheme(theme)}
  }
`
