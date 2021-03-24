import { Flex } from '@olist/united';

import { ApiErrors } from '~/common/enums/Error';
import Form, { FormProps } from '~/home/components/Form';

export const WithoutError = (props: FormProps) => {
  return (
    <Flex width="500px">
      <Form {...props} />
    </Flex>
  );
};

export const WithError = (props: FormProps) => {
  return (
    <Flex width="500px">
      <Form {...props} errors={[ApiErrors.API_ERROR]} />
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
