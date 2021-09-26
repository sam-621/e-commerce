import PrimaryLink from '@Components/atoms/Butons/PrimaryLink'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { IReduxState } from '../../../types/redux'
import { IUserReduxStore } from '../../../types/user'
import ProfilePic from '../../atoms/ProfilePic'

const BottomMobileNav = () => {
  const user: IUserReduxStore = useSelector<IReduxState>((state) => state.user) as IUserReduxStore
  const { pathname } = useRouter()

  const linkText: string = pathname !== '/register' ? 'Register' : 'Login'
  const linkUrl = pathname !== '/register' ? '/register' : '/login'

  return (
    <nav className="BottomMobileNav">
      <div className="BottomMobileNav-asideDiv">
        <Image src="/images/history.svg" width={30} height={30} />
      </div>
      <div className={user.isLogged ? 'BottomMobileNav-profilePic' : ''}>
        {user.isLogged ? (
          <ProfilePic profilePic={user.data.profilePic} isLogged={user.isLogged} />
        ) : (
          <PrimaryLink text={linkText} url={linkUrl} />
        )}
      </div>
      <div className="BottomMobileNav-asideDiv">
        <Image src="/images/graphs.svg" width={30} height={30} />
      </div>
    </nav>
  )
}

export default BottomMobileNav
