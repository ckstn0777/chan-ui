import { createContext, useState } from 'react'
import { Mode } from '../styles/color/theme'

const ModeContext =
  createContext<{ mode: Mode; setMode(mode: Mode): void } | null>(null)

interface Props {
  initialMode?: Mode
  children: React.ReactNode
}

export function ModeProvider({ children, initialMode = 'default' }: Props) {
  const [mode, setMode] = useState(initialMode)

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}
