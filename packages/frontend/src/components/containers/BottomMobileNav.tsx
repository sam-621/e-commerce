import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../types/redux';
import { IUserReduxStore } from '../../types/user';

const BottomMobileNav = () => {
  const DEFAULT_USER_IMAGE = '/images/user.svg';
  const user: IUserReduxStore = useSelector<IReduxState>((state) => state.user) as IUserReduxStore;

  return (
    <nav className="BottomMobileNav">
      <div>
        <Image src="/images/history.svg" width={30} height={30} />
      </div>
      <div className="BottomMobileNav-profilePic">
        {user.isLogged ? (
          <Image src={user.data.profilePic} width={30} height={30} />
        ) : (
          <Image src={DEFAULT_USER_IMAGE} width={30} height={30} />
        )}
      </div>
      <div>
        <Image src="/images/graphs.svg" width={30} height={30} />
      </div>
    </nav>
  );
};

export default BottomMobileNav;
