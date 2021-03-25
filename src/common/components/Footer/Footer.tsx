import { useTranslation } from 'react-i18next';

import { Box, Text } from '@olist/united';

const Footer = () => {
  const { t } = useTranslation('Footer');
  return (
    <Box>
      <Text>{t('footerDescription')}</Text>
    </Box>
  );
};

export default Footer;
