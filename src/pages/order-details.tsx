import { Flex } from '@olist/united';

import Layout from '~/common/layouts/Layout';
import Header from '~/order-details/components/Header';
import OrderInfo from '~/order-details/components/OrderInfo';

const OrdersDetails = () => {
  return (
    <Layout>
      <Header />
      <Flex mt={10}>
        <OrderInfo
          channel="Mercado Livre"
          orderId="#4225526010"
          createdAt={new Date().toISOString()}
          estimatedDeliveryAt={new Date().toISOString()}
          finalDeliveryAt={new Date().toISOString()}
        />
      </Flex>
    </Layout>
  );
};

export default OrdersDetails;
