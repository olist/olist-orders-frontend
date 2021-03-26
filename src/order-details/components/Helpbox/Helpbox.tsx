import { useTranslation } from 'react-i18next';

import { Box, Card, Text } from '@olist/united';

import { ButtonRounded } from '~common/components/Button/index.styles';

export default function Helpbox() {
  const { t } = useTranslation('orderDetailHelpbox');

  return (
    <Card>
      <Box>
        {/* <Text.H4 fontWeight="bold">Problemas com o pedido?</Text.H4> */}
        <Text.H4 fontWeight="bold">{t('title')}</Text.H4>
      </Box>
      <Box>
        {/* <Text>Fale conosco clicando no botão abaixo:</Text> */}
        <Text>{t('description')}</Text>
      </Box>
      <Box mt={4}>
        <ButtonRounded icon="question-circle-outline" variation="alternate">
          {t('button')}
        </ButtonRounded>
      </Box>
    </Card>
  );
}
