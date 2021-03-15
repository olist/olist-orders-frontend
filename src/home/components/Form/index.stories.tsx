import { ReactElement } from 'react';

import { Flex } from '@olist/united';

import Form, { FormProps } from '~/home/components/Form';

// eslint-disable-next-line react/prop-types
export const Example = (props: FormProps): ReactElement => {
  return (
    <Flex width="500px">
      <Form {...props} />
    </Flex>
  );
};

export default {
  title: 'Home/Components/Form',
  component: Form,
  argTypes: {
    loading: {
      name: 'Button Loading',
      control: {
        type: 'boolean',
      },
    },
    handleSubmit: {
      name: 'Form Submit',
      action: 'clicked',
    },
  },
};
