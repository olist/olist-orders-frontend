import { Box, Flex } from '@olist/united';

import Logo from '.';

export const Example = () => {
  return (
    <Flex>
      <Box>
        <Logo variation="vertical" />
      </Box>
      <Box>
        <Logo />
      </Box>
    </Flex>
  );
};

export default {
  title: 'Common/Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: "It's the project logo, it combines the olist store logo to the common slogan",
      },
    },
  },
};
