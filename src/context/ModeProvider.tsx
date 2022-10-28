import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Mode } from '../styles/color/theme'

const ModeContext =
  createContext<{
    mode: Mode
    setMode(mode: Mode): void
    toggle(): void
  } | null>(null)

function checkIsDarkTheme() {
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  return systemPrefersDark
}

interface Props {
  initialMode?: Mode
  children: React.ReactNode
}

export function ModeProvider({ children, initialMode = 'default' }: Props) {
  const [mode, setMode] = useState(initialMode)
  const [systemIsDark, setSystemIsDark] = useState(() => checkIsDarkTheme())

  /**
   * 초기 설정 (default면 시스템 설정에 따름. 그게 아니면 initialMode에 따름)
   */
  useEffect(() => {
    if (mode === 'default') return
    document.body.dataset.mode = mode
  }, [mode])

  /**
   * 시스템 설정에 따라 systemIsDark 변경
   */
  useEffect(() => {
    const callback = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches)
    }

    const match = window.matchMedia('(prefers-color-scheme: dark)')
    match.addEventListener('change', callback)

    return () => {
      match.removeEventListener('change', callback)
    }
  }, [])

  /**
   * 현재 상태가 다크 모드인지 확인
   */
  const isDarkMode = useMemo(() => {
    if (mode === 'dark') return true
    if (systemIsDark && mode === 'default') return true
    return false
  }, [mode, systemIsDark])

  /**
   * 토글 버튼 클릭 시 mode 변경
   */
  const toggle = useCallback(() => {
    if (isDarkMode) {
      setMode('light')
    } else {
      setMode('dark')
    }
  }, [isDarkMode])

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error('Cannot find ModeProvider')
  }
  return context
}
