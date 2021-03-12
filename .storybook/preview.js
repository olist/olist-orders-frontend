import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import {I18nextProvider} from 'react-i18next';

import { UnitedGlobalStyle, theme } from '@olist/united';

import i18n from '../src/common/utils/i18n';
import queryClient from '../src/common/context/queryClient';
import GlobalStyle from './style';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
        <UnitedGlobalStyle />
        <GlobalStyle />
      </I18nextProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
