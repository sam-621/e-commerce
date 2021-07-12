import { useRouter } from 'next/router';
import Title from '../../atoms/Title';
import CartButton from '../../atoms/Butons/CartButton';
import PrimaryLink from '../../atoms/Butons/PrimaryLink';
import Link from 'next/link';

const TopMobileNav = () => {
  const { pathname } = useRouter();

  const linkText: string = pathname !== '/register' ? 'Register' : 'Login';
  const linkUrl = pathname !== '/register' ? '/register' : '/login';
  const isInAuthPage = pathname === '/register' || pathname === '/login';

  return (
    <nav className="TopMobileNav">
      <div>
        <Link href="/">
          <a href="">
            <img title="Logo" alt="Logo" src="/images/logo.svg" width={40} height={40} />
          </a>
        </Link>
      </div>
      <div>
        <Title />
      </div>
      {!isInAuthPage ? <CartButton /> : <PrimaryLink text={linkText} url={linkUrl} />}
    </nav>
  );
};

export default TopMobileNav;
