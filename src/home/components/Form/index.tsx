import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button } from '@olist/united';

import Search, { ISearch } from '~/home/classes/Search';
import InputWithFieldError from '~common/components/InputWithFieldError';

export interface FormProps {
  errors?: Array<string>;
  loading?: boolean;
  handleSubmit(parameters: ISearch): void;
}

const Form = ({ errors, handleSubmit, loading }: FormProps) => {
  const { t } = useTranslation('HomeForm');

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(new Search(inputValue));
  };

  return (
    <Box flexGrow={1}>
      <form action="post" onSubmit={handleFormSubmit}>
        <Box>
          <InputWithFieldError
            aria-label={t('inputAreaLabel')}
            errors={errors}
            value={inputValue}
            onChange={handleInputChange}
          />
          <Box mt={3}>
            <Button variation="alternate" loading={loading} type="submit" width={1}>
              {t('search')}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

Form.defaultProps = {
  errors: [],
  loading: false,
};

export default Form;
