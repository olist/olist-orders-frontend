import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Layout as UiCommonsLayout } from '@olist/ui-commons/dist/ui-commons.cjs';

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
