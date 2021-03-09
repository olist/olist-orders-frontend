import Home from '~/pages/index';
import { renderWithTheme, screen, waitFor } from '~tests/utils';

describe('HomePage', () => {
  it('should render the title', async () => {
    renderWithTheme(<Home />);

    expect(screen.getByText('Welcome to the Nextjs Boilerplate')).toBeInTheDocument();
  });
});
