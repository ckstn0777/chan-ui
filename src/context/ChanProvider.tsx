import React from 'react'
import { Theme, Mode } from '../styles/color/theme'
import { ModeProvider } from './ModeProvider'
import { ThemeProvider } from './ThemeProvider'

interface Props {
  initialTheme?: Theme
  initialMode?: Mode
  children: React.ReactNode
}

export function ChanProvider({ initialTheme, initialMode, children }: Props) {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <ModeProvider initialMode={initialMode}>{children}</ModeProvider>
    </ThemeProvider>
  )
}
