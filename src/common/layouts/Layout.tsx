import { Flex } from '@olist/united';

import Footer from '~common/components/Footer';
import { Container } from '~common/layouts/Layout.style';

interface Layout {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Layout) => {
  return (
    <Container>
      <Flex flexDirection="column" flexGrow={1}>
        {children}
      </Flex>
      <Flex width={1} justifyContent="center">
        <Footer />
      </Flex>
    </Container>
  );
};

export default Layout;
