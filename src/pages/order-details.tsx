import { ReactElement } from 'react';

import { Box, Flex } from '@olist/united';

import Layout from '~/common/layouts/Layout';
import Header from '~/order-details/components/Header';

const Details = (): ReactElement => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default Details;
