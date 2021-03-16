import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex, Text } from '@olist/united';

import Form from '~/home/components/Form';
import Header from '~/home/components/Header';
import Layout from '~common/layouts/Layout';

const HomePage = (): ReactElement => {
  const { t } = useTranslation('HomePage');

  const handleSubmit = () => {};

  return (
    <Layout>
      <Header />
      <Flex mt={10} flexDirection="column" alignItems="center">
        <Box mb={4}>
          <Text fontSize="19px">{t('homePageDescription')}</Text>
        </Box>
        <Flex width={1} maxWidth="410px">
          <Form handleSubmit={handleSubmit} />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default HomePage;
