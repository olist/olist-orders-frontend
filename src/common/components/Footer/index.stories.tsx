import { Flex } from '@olist/united';

import Footer from '.';

export const Example = () => {
  return (
    <Flex width={1} justifyContent="center">
      <Footer />
    </Flex>
  );
};

export default {
  title: 'Common/Components/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'This is a simple footer using a Box and Text',
      },
    },
  },
};
