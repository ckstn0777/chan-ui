const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    'storybook-addon-themes',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf)
    const babelRule = oneOfRule.oneOf.find((rule) =>
      rule.loader?.includes('babel-loader')
    )

    babelRule.options.presets.push('@emotion/babel-preset-css-prop')

    return config
  },
}
