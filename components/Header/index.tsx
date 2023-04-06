import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { HeaderContainer } from './HeaderContainer';
import { IconInHeader } from './IconInHeader';

const Header: React.FC = () => {
  const router = useRouter();

  const gotoHome = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <HeaderContainer>
      <IconInHeader onClick={gotoHome} />
    </HeaderContainer>
  );
};

export default Header;
