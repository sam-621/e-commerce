import { useSelector } from 'react-redux';
import { IProduct } from '../../types/products';
import { IReduxState } from '../../types/redux';
import NoProductSelected from '../molecules/NoProductSelected';

const AsideDesktopProduct = () => {
  const productSelected = useSelector<IReduxState>((state) => state.productSelected) as IProduct;

  return productSelected ? null : <NoProductSelected />;
};

export default AsideDesktopProduct;
