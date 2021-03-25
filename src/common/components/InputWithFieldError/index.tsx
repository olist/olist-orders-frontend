import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { Box, FieldError, Input as UnitedInput } from '@olist/united';

const InputWithError = ({ hasError }) =>
  hasError &&
  css`
    border-color: ${themeGet('colors.foundation.errorDefault')};
  `;

const InputWithValidation = styled(UnitedInput)`
  ${InputWithError}
`;

export interface InputProps {
  errors?: Array<string>;
  value?: string;
  onChange(event: { target: HTMLInputElement }): void;
}

const InputWithFieldError = ({ errors, ...props }: InputProps) => {
  const hasErrors = !!errors.length;

  return (
    <Box>
      <Box>
        <InputWithValidation hasError={hasErrors} {...props} />
      </Box>
      {hasErrors && (
        <Box mt={2}>
          <FieldError messages={errors} />
        </Box>
      )}
    </Box>
  );
};

InputWithFieldError.defaultProps = {
  errors: [],
  value: '',
};

export default InputWithFieldError;
