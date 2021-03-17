import { ReactElement, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex, Text } from '@olist/united';

import Form from '~/home/components/Form';
import Header from '~/home/components/Header';
import ErrorAdapter from '~common/classes/ErrorAdapter';
import ErrorPayload from '~common/classes/ErrorPayload';
import Layout from '~common/layouts/Layout';

const HomePage = (): ReactElement => {
  const { t } = useTranslation('HomePage');
  const [currentErrors, setCurrentErrors] = useState([{ type: 'API_ERROR' }]);

  const errorMessageList = useMemo(() => {
    return currentErrors.map((error: { message: string; type: string }) => {
      const newError = new ErrorPayload(error);
      return new ErrorAdapter(newError).getByType();
    });
  }, [currentErrors]);

  const handleSubmit = () => {};

  return (
    <Layout>
      <Header />
      <Flex mt={10} flexDirection="column" alignItems="center">
        <Box mb={4}>
          <Text.H4>{t('homePageDescription')}</Text.H4>
        </Box>
        <Flex width={1} maxWidth="410px">
          <Form handleSubmit={handleSubmit} errors={errorMessageList} />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default HomePage;
