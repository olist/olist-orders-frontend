import { ReactElement } from 'react';

import Home from '~/pages/index';

// eslint-disable-next-line react/prop-types
export const Example = (): ReactElement => {
  return <Home />;
};

export default {
  title: 'Pages/Home',
  component: Home,
};
