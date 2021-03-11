import { ReactElement } from 'react';

import CommonLayout from './CommonLayout';

// eslint-disable-next-line react/prop-types
export const Example = (): ReactElement => {
  return (
    <CommonLayout>
      <div>Inside the Layout</div>
    </CommonLayout>
  );
};

export default {
  title: 'Common/Layouts/CommonLayout',
  component: CommonLayout,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component:
          "It's a altered version of the base Layout from @olist/ui-commons, there's minimal changes on the min-width and min-height. The current min-width is 1440px and current min-height is 100vh.",
      },
    },
  },
};
