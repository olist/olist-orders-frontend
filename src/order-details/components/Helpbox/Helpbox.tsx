import { useTranslation } from 'react-i18next';

import { Box, Card, Text } from '@olist/united';

import { ButtonRounded } from '~common/components/Button/index.styles';

export default function Helpbox() {
  const { t } = useTranslation('orderDetailHelpbox');

  return (
    <Card minWidth="410px">
      <Box>
        <Text.H4 fontWeight="bold">{t('title')}</Text.H4>
      </Box>
      <Box mt={1}>
        <Text fontSize={1}>{t('description')}</Text>
      </Box>
      <Box mt={4}>
        <ButtonRounded icon="question-circle-outline" variation="alternate">
          {t('button')}
        </ButtonRounded>
      </Box>
    </Card>
  );
}
