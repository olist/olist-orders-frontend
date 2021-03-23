import { ReactElement } from 'react';

import { Flex } from '@olist/united';

import Logo from '~/common/components/Logo';

const Header = (): ReactElement => {
  return (
    <Flex mt={8}>
      <Logo variation="horizontal" />
    </Flex>
  );
};

export default Header;
