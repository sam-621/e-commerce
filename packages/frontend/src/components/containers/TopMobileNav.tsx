import Image from 'next/image';
import Title from '../atoms/Title';
import CartButton from '../atoms/CartButton';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../types/redux';
import PrimaryButton from '../atoms/PrimaryButton';

const TopMobileNav = () => {
  const isLogged: boolean = useSelector<IReduxState>((state) => state.user.isLogged) as boolean;
  return (
    <nav>
      <div>
        <Image title="Logo" alt="Logo" src="/images/logo.svg" width={40} height={40} />
      </div>
      <div>
        <Title />
      </div>
      {isLogged ? <CartButton /> : <PrimaryButton text="Register" type="button" />}
    </nav>
  );
};

export default TopMobileNav;
