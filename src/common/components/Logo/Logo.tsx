import { useTranslation } from 'react-i18next';

import { LogoOlistStore } from '@olist/ui-commons/dist/ui-commons.cjs';
import { Box, Flex, Text } from '@olist/united';

interface LogoProps {
  variation?: 'vertical' | 'horizontal';
}

const defaultProps: LogoProps = {
  variation: 'horizontal',
};

function Logo({ variation }: LogoProps) {
  const { t } = useTranslation('logo');

  const vertical = {
    alignItems: 'center',
    flexDirection: 'column',
  };

  const horizontal = {
    alignItems: 'center',
  };

  const position = {
    vertical,
    horizontal,
  }[variation];

  const isVertical = variation === 'vertical';
  const isHorizontal = variation === 'horizontal';

  return (
    <Flex {...position}>
      <Box mb={isVertical ? '24px' : 0} mr={isHorizontal ? '24px' : 0}>
        <LogoOlistStore variation="default" />
      </Box>
      <Box>
        <Text.H4 color="foundation.primaryDark">{t('logoSlogan')}</Text.H4>
      </Box>
    </Flex>
  );
}

Logo.defaultProps = defaultProps;

export default Logo;
