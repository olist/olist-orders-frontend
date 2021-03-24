import { Flex } from '@olist/united';

import Logo from '~/common/components/Logo';

const Header = () => {
  return (
    <Flex justifyContent="center" mt={8}>
      <Logo variation="vertical" />
    </Flex>
  );
};

export default Header;
