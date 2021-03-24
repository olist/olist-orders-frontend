import Layout from './Layout';

export const Example = () => {
  return (
    <Layout>
      <div>Content inside of the layout</div>
    </Layout>
  );
};

export default {
  title: 'Common/Layouts/Base Layout',
  component: Layout,
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
