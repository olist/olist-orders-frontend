// eslint-disable-next-line
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /locales/,
      loader: '@alienfast/i18next-loader',
      options: {
        basenameAsNamespace: true,
      },
    });
    return config;
  },
};
