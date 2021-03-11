import { Layout } from '@olist/ui-commons/dist/ui-commons.cjs';
import { themeGet } from '@styled-system/theme-get';
import { ReactElement } from 'react';
import styled from 'styled-components';

interface Layout {
  children: JSX.Element[] | JSX.Element;
}

export const Container = styled(Layout.Container).attrs({
  py: 2,
  px: 3,
})`
  background: ${themeGet('colors.foundation.shadeWhite')};
  /* background-color: ${themeGet('colors.blue')}; */
  min-height: 100vh;
  max-width: 1440px;
`;

const CommonLayout = ({ children }: Layout): ReactElement => {
  return <Container>{children}</Container>;
};

export default CommonLayout;
