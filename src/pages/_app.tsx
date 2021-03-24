import { AppProps } from 'next/dist/next-server/lib/router/router';

import { QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ThemeProvider } from 'styled-components';

import { UnitedGlobalStyle, theme } from '@olist/united';

import queryClient from '../common/context/queryClient';
import GlobalStyle from '../common/style/globalStyle';
import i18n from '../common/utils/i18n';

const App = ({ Component, pageProps, router }: AppProps) => {
  if (i18n.language !== router.locale) {
    i18n.changeLanguage(router.locale);
  }

  return (
    <>
      <UnitedGlobalStyle />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
