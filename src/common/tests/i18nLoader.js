/*eslint-disable*/
import path from 'path';
import i18nLoader from '@alienfast/i18next-loader';
import Module from 'module';

const i18nModule = new Module('i18nModule');

// eslint-disable-next-line no-underscore-dangle
i18nModule._compile(
  i18nLoader.call({
    query: '?{basenameAsNamespace:true}',
    resource: path.resolve('public/locales/index.js'),
    addContextDependency: () => {},
    addDependency: () => {},
  }),
  'i18nModule'
);

export default i18nModule.exports;
