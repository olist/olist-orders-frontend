import { ReactElement } from 'react';

import { Flex } from '@olist/united';

import Logo from '~/common/components/Logo';

const Header = (): ReactElement => {
  return (
    <Flex justifyContent="center" mt={5}>
      <Logo variation="vertical" />
    </Flex>
  );
};

export default Header;
