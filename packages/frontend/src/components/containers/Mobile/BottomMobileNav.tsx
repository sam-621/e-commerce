import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../../types/redux';
import { IUserReduxStore } from '../../../types/user';
import ProfilePic from '../../atoms/ProfilePic';

const BottomMobileNav = () => {
  const user: IUserReduxStore = useSelector<IReduxState>((state) => state.user) as IUserReduxStore;

  return (
    <nav className="BottomMobileNav">
      <div className="BottomMobileNav-asideDiv">
        <Image src="/images/history.svg" width={30} height={30} />
      </div>
      <div className="BottomMobileNav-profilePic">
        <ProfilePic profilePic={user.data.profilePic} isLogged={user.isLogged} />
      </div>
      <div className="BottomMobileNav-asideDiv">
        <Image src="/images/graphs.svg" width={30} height={30} />
      </div>
    </nav>
  );
};

export default BottomMobileNav;
