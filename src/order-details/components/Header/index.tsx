import { useRouter } from 'next/router';

import { useTranslation } from 'react-i18next';

import { Flex } from '@olist/united';

import { ButtonWithoutBorder } from '~/common/components/Button/index.styles';
import Logo from '~/common/components/Logo';

const Header = () => {
  const { t } = useTranslation('orderDetailsHeader');
  const router = useRouter();

  const handleClick = () => router.push('/');

  return (
    <Flex mt={8} justifyContent="space-between">
      <Logo variation="horizontal" />
      <ButtonWithoutBorder icon="search-outline" onClick={handleClick}>
        {t('headerButtonSearch')}
      </ButtonWithoutBorder>
    </Flex>
  );
};

export default Header;
