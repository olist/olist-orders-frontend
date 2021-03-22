import { ReactElement, useState } from 'react';

import InputWithFieldError from './index';

type ExampleProps = {
  onChange(string): void;
  value: string;
};

export const Example = ({ onChange, value }: ExampleProps): ReactElement => {
  const [exampleValue, setExampleValue] = useState(value);
  const handleChange = (event: { target: HTMLInputElement }) => {
    const newVal = event.target.value;
    onChange(newVal);
    setExampleValue(newVal);
  };
  return (
    <InputWithFieldError errors={['Error here']} value={exampleValue} onChange={handleChange} />
  );
};

export default {
  title: 'Common/Components/InputWithFieldError',
  parameters: {
    docs: {
      description: {
        component:
          'This is and iteration of the United Input with the FieldError and border color already adjusted',
      },
    },
  },
  argTypes: {
    onChange: {
      description: 'The method dispatched after change on the input',
      control: {
        type: 'action',
      },
    },
    value: {
      description: 'The value of the Input',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
};
