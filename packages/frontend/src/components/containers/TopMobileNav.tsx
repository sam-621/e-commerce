import Image from 'next/image';
import { useRouter } from 'next/router';
import Title from '../atoms/Title';
import CartButton from '../atoms/CartButton';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../types/redux';
import PrimaryLink from '../atoms/PrimaryLink';

const TopMobileNav = () => {
  const isLogged: boolean = useSelector<IReduxState>((state) => state.user.isLogged) as boolean;
  const { pathname } = useRouter();

  const linkText: string = pathname !== '/Register' ? 'Register' : 'Login';
  const linkUrl = pathname !== '/Register' ? '/Register' : '/login';

  return (
    <nav className="TopMobileNav">
      <div>
        <Image title="Logo" alt="Logo" src="/images/logo.svg" width={40} height={40} />
      </div>
      <div>
        <Title />
      </div>
      {isLogged ? <CartButton /> : <PrimaryLink text={linkText} url={linkUrl} />}
    </nav>
  );
};

export default TopMobileNav;
