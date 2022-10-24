import React from 'react'
import { css } from '@emotion/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { darkColorTheme, lightColorTheme } from './palette'

export default {
  title: 'Design System/Color',
  component: () => null,
} as ComponentMeta<any>

const Color = ({ name, color }: { name: string; color: string }) => (
  <div css={colorWrapper}>
    <div css={colorBox(color)}></div>
    <b>{name}</b>
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
  const colors = arg.isLight ? lightColorTheme : darkColorTheme

  return (
    <div css={wrapper}>
      <h1>Design System : Color</h1>
      <section>
        <h2>Color</h2>
        <ColorList colors={colors} namespace="accent" />
        <ColorList colors={colors} namespace="primary" />
      </section>
    </div>
  )
}

export const LightTheme = Template.bind({})
LightTheme.args = {
  isLight: true,
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  isLight: false,
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
`

const colorWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const colorBox = (color: string) => css`
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  background-color: ${color};
`
