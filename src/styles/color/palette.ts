import { Theme, getThemeAndMode } from './theme'

export const cssVar = (key: string) => `var(--${key})`

export const lightColorTheme = (theme: Theme) => ({
  /** Background Color */
  '--accent-0': '#ffffff',
  '--accent-1': '#fafafa',
  '--accent-2': '#f5f5f5',
  '--accent-3': '#eeeeee',
  '--accent-4': '#e0e0e0',
  '--accent-5': '#9e9e9e',
  '--accent-6': '#757575',
  '--accent-7': '#616161',
  '--accent-8': '#424242',
  '--accent-9': '#212121',

  /** Brand Color */
  ...getThemeAndMode(theme, 'light'),
  '--element-text': '#ffffff',

  /** Status Color */
})

export const darkColorTheme = (theme: Theme) => ({
  /** Background Color */
  '--accent-0': '#1b1b1b',
  '--accent-1': '#020202',
  '--accent-2': '#2e2e2e',
  '--accent-3': '#3d3d3d',
  '--accent-4': '#5b5b5b',
  '--accent-5': '#848484',
  '--accent-6': '#979797',
  '--accent-7': '#b3b3b3',
  '--accent-8': '#bdbdbd',
  '--accent-9': '#e8eaed',

  /** Brand Color */
  ...getThemeAndMode(theme, 'dark'),
  '--element-text': '#121212',

  /** Status Color */
})
