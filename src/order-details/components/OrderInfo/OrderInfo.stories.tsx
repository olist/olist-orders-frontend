import OrderInfo from './OrderInfo';

export const Example = () => {
  return (
    <OrderInfo
      channel="Mercado Livre"
      orderId="#4225526010"
      createdAt={new Date().toISOString()}
      estimatedDeliveryAt={new Date().toISOString()}
      finalDeliveryAt={new Date().toISOString()}
    />
  );
};

export default {
  title: 'Order Details/Components/Order Info',
  parameters: {
    docs: {
      description: {
        component:
          'This component is the principal source of information about the order inside the details page .',
      },
    },
  },
};
