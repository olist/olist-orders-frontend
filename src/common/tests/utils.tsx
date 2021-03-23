/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { theme } from '@olist/united';

import queryClient from '~common/context/queryClient';

// eslint-disable-next-line
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

const renderWithTheme = (ui, options = {}) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

export { renderWithTheme };
