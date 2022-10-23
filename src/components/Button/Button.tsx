import { css } from '@emotion/react'
import React from 'react'
import { Size, sizeSets } from '../../lib/sizes'
import { lightColorTheme } from '../../styles/color/palette'

type ButtonType = 'primary' | 'secondary' | 'destructive'
// type ButtonVariant = 'default' | 'outline' | 'ghost'

interface ButtonColorScheme {
  background: string
  hover: string
  active: string
  text: string
}

interface ButtonProps {
  /**
   * Content of the button should set via `children` prop
   */
  children: React.ReactNode
  /**
   * Use different button type for different purposes
   * `primary` type is used as default type
   */
  type?: ButtonType
  /**
   * Default size of the button is `md`
   */
  size?: Size
}

export function Button({
  children,
  type = 'primary',
  size = 'md',
}: ButtonProps) {
  const scheme = schemes[type]
  const styles = [buttonStyle(size), defaultStyle(scheme)]

  return <button css={styles}>{children}</button>
}

const schemes: Record<ButtonType, ButtonColorScheme> = {
  primary: {
    background: lightColorTheme.primary,
    hover: lightColorTheme['primary-hover'],
    active: lightColorTheme['primary-active'],
    text: 'black',
  },
  secondary: {
    background: '',
    hover: '',
    active: '',
    text: '',
  },
  destructive: {
    background: '',
    hover: '',
    active: '',
    text: '',
  },
}

const defaultStyle = (scheme: ButtonColorScheme) => css`
  background: ${scheme.background};
  color: ${scheme.text};
  &:hover {
    background: ${scheme.hover};
  }
  &:active {
    background: ${scheme.active};
  }
`

const buttonStyle = (size: Size) => css`
  border: none;
  outline: none;

  border-radius: 0.25rem;
  cursor: pointer;
  font-size: ${sizeSets[size].fontSize};
  height: ${sizeSets[size].height};
  padding-left: 1em;
  padding-right: 1em;
`
