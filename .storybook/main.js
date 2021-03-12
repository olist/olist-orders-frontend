const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  'stories': [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  'addons': [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-controls',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /locales/,
      loader: '@alienfast/i18next-loader',
      options: {
        basenameAsNamespace: true,
      },
    });
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
}
