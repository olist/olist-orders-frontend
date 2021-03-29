import { ButtonBorderless, ButtonRounded } from './index.styles';

export const Borderless = () => {
  return <ButtonBorderless>nova pesquisa</ButtonBorderless>;
};

Borderless.storyName = 'ButtonBorderless';

export const Rounded = () => {
  return <ButtonRounded variation="alternate">nova pesquisa</ButtonRounded>;
};

Rounded.storyName = 'ButtonRounded';

export default {
  title: 'Common/Components/Button',
  parameters: {
    docs: {
      description: {
        component: 'These are the common buttons used though the application.',
      },
    },
  },
};
