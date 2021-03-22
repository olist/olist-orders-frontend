import userEvent from '@testing-library/user-event';

import InputWithFieldError from './index';

import { renderWithTheme, screen } from '~common/tests/utils';

describe('InputWithFieldError', () => {
  const listOfErrors = ['Error 1', 'Error 2'];
  const onChange = jest.fn();

  it('should render the value as default', () => {
    renderWithTheme(<InputWithFieldError value="test" onChange={onChange} />);

    expect(screen.getByRole('textbox')).toHaveDisplayValue('test');
  });

  it('should return on change', () => {
    renderWithTheme(<InputWithFieldError value="" onChange={onChange} />);

    userEvent.type(screen.getByRole('textbox'), 'change text');

    expect(onChange).toHaveBeenCalled();
  });

  it('should render all errors', async () => {
    renderWithTheme(<InputWithFieldError errors={listOfErrors} value="" onChange={onChange} />);

    expect(screen.queryByText(listOfErrors[0])).toBeInTheDocument();
    expect(screen.queryByText(listOfErrors[1])).toBeInTheDocument();
  });

  it('should render without errors', () => {
    renderWithTheme(<InputWithFieldError value="" onChange={onChange} />);

    expect(screen.queryByText(listOfErrors[0])).not.toBeInTheDocument();
    expect(screen.queryByText(listOfErrors[1])).not.toBeInTheDocument();
  });
});
