import { useTranslation } from 'react-i18next';

import { Box, Text } from '@olist/united';

export interface OrderInfoProps {
  channel: string;
  orderId: string;
  createdAt: string;
  estimatedDeliveryAt?: string;
  finalDeliveryAt?: string;
}

export default function OrderInfo({
  channel,
  createdAt,
  estimatedDeliveryAt,
  finalDeliveryAt,
  orderId,
}: OrderInfoProps) {
  const { t } = useTranslation('orderDetailsOrderInfo');

  const translatedCreatedAt = t('{{date, dateTimeFormatAsShort}}', {
    date: new Date(createdAt),
  });

  const translatedEstimatedToFinalDate = t('translatedEstimatedToFinalDate', {
    dateOne: new Date(estimatedDeliveryAt),
    dateTwo: new Date(finalDeliveryAt),
  });

  return (
    <Box>
      <Text.H3 fontWeight="bold">
        {channel} {orderId}
      </Text.H3>
      <Text>{translatedCreatedAt}</Text>
      <Text color="foundation.shadeDark">{translatedEstimatedToFinalDate}</Text>
    </Box>
  );
}
