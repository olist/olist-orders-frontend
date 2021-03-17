import { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Input, FieldError, Flex, Box } from '@olist/united';

import Search, { ISearch } from '~/home/classes/Search';

export interface FormProps {
  errors?: Array<string>;
  loading?: boolean;
  handleSubmit(parameters: ISearch): void;
}

const Form = ({ errors, handleSubmit, loading }: FormProps): ReactElement => {
  const { t } = useTranslation('HomeForm');
  const [inputValue, setInputValue] = useState('');

  const hasErrors = !!errors.length;

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(new Search(inputValue));
  };

  return (
    <Box flexGrow={1}>
      <form onSubmit={handleFormSubmit}>
        <Flex flexDirection="column">
          <Box mb={3}>
            <Input value={inputValue} onChange={handleInputChange} />
            {hasErrors && <FieldError messages={errors} />}
          </Box>
          <Box>
            <Button variation="alternate" loading={loading} type="submit" width={1}>
              {t('search')}
            </Button>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

Form.defaultProps = {
  errors: [],
  loading: false,
};

export default Form;
