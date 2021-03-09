import { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ThemeProvider } from 'styled-components';

import { UnitedGlobalStyle, theme } from '@olist/united';

import queryClient from '../common/context/queryClient';
import GlobalStyle from '../common/style/globalStyle';
import i18n from '../common/utils/i18n';

// eslint-disable-next-line
const App = ({ Component, pageProps, router }): ReactElement => {
  if (i18n.language !== router.locale) {
    i18n.changeLanguage(router.locale);
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <UnitedGlobalStyle />
          <GlobalStyle />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
