import { ReactElement } from 'react';

import { Flex } from '@olist/united';

import Form, { FormProps } from '~/home/components/Form';

// eslint-disable-next-line react/prop-types
export const WithoutError = (props: FormProps): ReactElement => {
  return (
    <Flex width="500px">
      <Form {...props} />
    </Flex>
  );
};

export const WithError = (props: FormProps): ReactElement => {
  return (
    <Flex width="500px">
      <Form {...props} errors={[{ type: 'API_ERROR' }]} />
    </Flex>
  );
};

export default {
  title: 'Home/Components/Form',
  component: Form,
  argTypes: {
    errors: {
      control: false,
    },
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
