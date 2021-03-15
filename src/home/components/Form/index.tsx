import { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Input, Flex, Box } from '@olist/united';

import Search from '~/home/classes/Search';

export interface FormProps {
  loading?: boolean;
  handleSubmit: (string) => void;
}

const Form = ({ handleSubmit, loading }: FormProps): ReactElement => {
  const { t } = useTranslation('HomeForm');
  const [inputValue, setInputValue] = useState('');

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
  loading: false,
};

export default Form;
