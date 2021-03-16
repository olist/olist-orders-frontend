import { themeGet } from '@styled-system/theme-get';
import { ReactElement } from 'react';
import styled from 'styled-components';

import { Layout as UiCommonsLayout } from '@olist/ui-commons/dist/ui-commons.cjs';
import { Flex } from '@olist/united';

import Footer from '~common/components/Footer';

interface Layout {
  children: JSX.Element[] | JSX.Element;
}

export const Container = styled(UiCommonsLayout.Container).attrs({
  py: 2,
  px: 3,
})`
  background: ${themeGet('colors.foundation.shadeWhite')};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
`;

const Layout = ({ children }: Layout): ReactElement => {
  return (
    <Container>
      <Flex flexDirection="column" flexGrow={1}>
        {children}
      </Flex>
      <Flex width={1} justifyContent="center">
        <Footer />
      </Flex>
    </Container>
  );
};

export default Layout;
