import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Text } from '@olist/united';

const Footer = (): ReactElement => {
  const { t } = useTranslation('Footer');
  return (
    <Box>
      <Text>{t('footerDescription')}</Text>
    </Box>
  );
};

export default Footer;
