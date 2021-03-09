import Link from 'next/link';

import { ReactElement } from 'react';
import { QueryClient, useQueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { Box, Link as UnitedLink, Flex, Text } from '@olist/united';

import ExampleService, { ExampleServiceResponse } from '../common/service/example';

const AnotherPage = (): ReactElement => {
  const queryClient = useQueryClient();
  const data: ExampleServiceResponse = queryClient.getQueryData('repoData');

  return (
    <Flex flexDirection="column">
      {!data ? (
        'nothing to show'
      ) : (
        <Text>
          {data.name} - {data.species} in Another Page
        </Text>
      )}
      <Box>
        <Link href="/">
          <UnitedLink>Home Page</UnitedLink>
        </Link>
      </Box>
    </Flex>
  );
};

interface AnotherPageServerSideProps {
  props: {
    dehydratedState: DehydratedState;
  };
}

export const getServerSideProps = async (): Promise<AnotherPageServerSideProps> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('repoData', async () => ExampleService.commonRequest());
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default AnotherPage;
