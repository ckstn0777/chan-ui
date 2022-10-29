import React from 'react'
import { css } from '@emotion/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { darkColorTheme, lightColorTheme } from './palette'
import { useModeContext } from '../../context'

export default {
  title: 'Design System/Color',
  component: () => null,
} as ComponentMeta<any>

const Color = ({ name, color }: { name: string; color: string }) => (
  <div css={colorWrapper}>
    <div css={colorBox(color)}></div>
    <b>{name.slice(2)}</b>
    <p>{color}</p>
  </div>
)

const ColorList = ({
  colors,
  namespace,
}: {
  colors: Record<string, string>
  namespace: string
}) => (
  <>
    <h3>{namespace}</h3>
    <div css={colorRowWrapper}>
      {Object.entries(colors)
        .filter(([key]) => key.includes(namespace))
        .map(([key, value]) => (
          <Color key={key} name={key} color={value} />
        ))}
    </div>
  </>
)

const Template: ComponentStory<any> = (arg: any) => {
  const { isDarkMode } = useModeContext()
  const colors = isDarkMode
    ? darkColorTheme(arg.theme)
    : lightColorTheme(arg.theme)

  return (
    <div css={wrapper}>
      <h1>Design System : Color</h1>
      <section>
        <h2>Color</h2>
        <ColorList colors={colors} namespace="accent" />
        <ColorList colors={colors} namespace="primary" />
        <ColorList colors={colors} namespace="secondary" />
        <ColorList colors={colors} namespace="destructive" />
      </section>
    </div>
  )
}

export const VeloTheme = Template.bind({})
VeloTheme.args = {
  theme: 'velo',
}

export const WjtbTheme = Template.bind({})
WjtbTheme.args = {
  theme: 'wjtb',
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  background-color: #262626;
  color: white;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`

const colorRowWrapper = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & > * {
    flex-basis: 7%;
  }
`

const colorWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 0.25rem;

  p {
    margin: 0;
  }

  b {
    text-align: center;
  }
`

const colorBox = (color: string) => css`
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  background-color: ${color};
`
