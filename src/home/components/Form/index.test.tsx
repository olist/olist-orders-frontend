import userEvent from '@testing-library/user-event';

import Form from '.';

import { ApiErrors, ErrorTest } from '~common/enums/Error';
import { renderWithTheme, screen } from '~tests/utils';

describe('Hom - Form', () => {
  const handleSubmitMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should change input and handleSubmit', () => {
    const value = 'new value to be search';
    renderWithTheme(<Form handleSubmit={handleSubmitMock} />);
    userEvent.type(screen.getByRole('textbox'), value);
    userEvent.click(screen.getByRole('button'));

    expect(handleSubmitMock).toBeCalled();
    expect(handleSubmitMock.mock.calls[0][0].value).toBe(value);
  });

  it('should render error message', () => {
    renderWithTheme(
      <Form
        handleSubmit={handleSubmitMock}
        errors={['buzz', `X thing didn't respond the request`]}
      />
    );

    expect(screen.getByText(ApiErrors.API_ERROR)).toBeInTheDocument();
    expect(screen.getByText(ErrorTest.fuzz)).toBeInTheDocument();
  });
});
