import Link from 'next/link';

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { Box, Link as UnitedLink, Flex, Text } from '@olist/united';

import ExampleService from '~common/service/example';

const HomePage = (): ReactElement => {
  const { t } = useTranslation('home');
  const { data, error, isLoading } = useQuery(
    'repoData',
    async () => ExampleService.commonRequest(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Flex flexDirection="column">
      <div>{t('welcomeMessage')}</div>
      <div>
        {t('{{date, dateTimeFormatAsShort}}', {
          date: new Date(),
        })}
      </div>
      {error && 'error found'}
      {isLoading ? 'loading content' : <Text>{data.name}</Text>}
      <Box>
        <Link href="/another">
          <UnitedLink>Another Page</UnitedLink>
        </Link>
      </Box>
    </Flex>
  );
};

export default HomePage;
