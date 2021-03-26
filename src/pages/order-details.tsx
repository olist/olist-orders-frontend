import { Flex } from '@olist/united';

import Layout from '~/common/layouts/Layout';
import Header from '~/order-details/components/Header';
import Helpbox from '~/order-details/components/Helpbox';
import OrderInfo from '~/order-details/components/OrderInfo';

const OrdersDetails = () => {
  return (
    <Layout>
      <Header />
      <Flex mt={10} justifyContent="space-between">
        <OrderInfo
          channel="Mercado Livre"
          orderId="#4225526010"
          createdAt={new Date().toISOString()}
          estimatedDeliveryAt={new Date().toISOString()}
          finalDeliveryAt={new Date().toISOString()}
        />
        <Helpbox />
      </Flex>
    </Layout>
  );
};

export default OrdersDetails;
