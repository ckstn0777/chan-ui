import React, { useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { useModeContext } from '../context/ModeProvider'
import addons from '@storybook/addons'
import { useThemeContext } from '../context/ThemeProvider'

const channel = addons.getChannel()

export default function StorybookWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const darkTheme = useDarkMode()

  const { setMode } = useModeContext()
  const { setTheme } = useThemeContext()

  useEffect(() => {
    const onThemeChange = (theme: any) =>
      setTheme(theme === 'none' ? 'velo' : theme)

    channel.on('storybook-addon-themes/change', onThemeChange)
    return () =>
      channel.removeListener('storybook-addon-themes/change', onThemeChange)
  }, [setTheme])

  useEffect(() => {
    setMode(darkTheme ? 'dark' : 'light')
  }, [darkTheme, setMode])

  return <>{children}</>
}
