import { ButtonWithoutBorder } from './index.styles';

export const Example = () => {
  return <ButtonWithoutBorder>nova pesquisa</ButtonWithoutBorder>;
};

Example.storyName = 'ButtonWithoutBorder';

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
