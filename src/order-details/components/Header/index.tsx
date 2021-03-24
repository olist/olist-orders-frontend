import { Flex } from '@olist/united';

import Logo from '~/common/components/Logo';

const Header = () => {
  return (
    <Flex mt={8}>
      <Logo variation="horizontal" />
    </Flex>
  );
};

export default Header;
