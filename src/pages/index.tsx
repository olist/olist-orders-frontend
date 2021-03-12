import { ReactElement } from 'react';

import Header from '~/home/components/Header';
import Layout from '~common/layouts/Layout';

const HomePage = (): ReactElement => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default HomePage;
