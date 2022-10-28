import React, { useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { useMode } from '../context/ModeProvider'

export default function StorybookWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const darkTheme = useDarkMode()
  const { setMode } = useMode()

  useEffect(() => {
    setMode(darkTheme ? 'dark' : 'light')
  }, [darkTheme, setMode])

  return <>{children}</>
}
