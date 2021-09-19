import { useSelector } from 'react-redux'
import { IProduct } from '@Types/products'
import { IReduxState } from '@Types/redux'
import NoProductSelected from '../../molecules/NoProductSelected'
import DesktopCartSection from './DesktopCartSection'

const AsideDesktopCart = () => {
  const productSelected = useSelector<IReduxState>((state) => state.cart) as IProduct

  return productSelected ? <DesktopCartSection /> : <NoProductSelected />
}

export default AsideDesktopCart
