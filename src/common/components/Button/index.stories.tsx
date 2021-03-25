import { ButtonBorderless } from './index.styles';

export const Example = () => {
  return <ButtonBorderless>nova pesquisa</ButtonBorderless>;
};

Example.storyName = 'ButtonBorderless';

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
