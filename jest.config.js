module.exports = {
  rootDir: './',
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    '^~common/(.*)': '<rootDir>/src/common/$1',
    '^~tests/(.*)': '<rootDir>/src/common/tests/$1',
    '^~utils/(.*)': '<rootDir>/src/common/utils/$1',
    '\\.(jpg|jpeg|png|gif|svg|wav)$': '<rootDir>/src/common/tests/fileMock.ts',
    '\\locales/index.js$': '<rootDir>/src/common/tests/i18nLoader.js',
  },
  clearMocks: true,
  testPathIgnorePatterns: ['./node_modules/', './.next/'],
  transformIgnorePatterns: ['./node_modules/(?!(@olist/ui-commons))'],
  setupFilesAfterEnv: ['<rootDir>/src/common/tests/setup.ts'],
};
