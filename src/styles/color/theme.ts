// primary, secondary according to the theme
export type Theme = 'velo' | 'wjtb' | 'typescript'

// light, dark and system mode
export type Mode = 'light' | 'dark' | 'default'

export function getThemeAndMode(theme: Theme, mode: Mode) {
  if (theme === 'velo') {
    return {
      '--primary': '#009688',
      '--primary-hover': '#007e72',
      '--primary-active': '#007267',
      '--secondary': '#c6e8e6',
      '--secondary-hover': '#b6e1de',
      '--secondary-active': '#a6dbd7',
      '--destructive': '#f44336',
      '--destructive-hover': '#cd382d',
      '--destructive-active': '#a62e25',
    }
  } else if (theme === 'wjtb') {
    return {
      '--primary': '#ffa000',
      '--primary-hover': '#ed9400',
      '--primary-active': '#e58f00',
      '--secondary': '#c6e8e6',
      '--secondary-hover': '#b6e1de',
      '--secondary-active': '#a6dbd7',
      '--destructive': '#f44336',
      '--destructive-hover': '#cd382d',
      '--destructive-active': '#a62e25',
    }
  } else if (theme === 'typescript') {
  }
}
