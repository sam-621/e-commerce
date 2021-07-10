import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IProduct } from '../../types/products';
import { IReduxState } from '../../types/redux';
import NoProductSelected from '../molecules/NoProductSelected';

const AsideDesktopProduct = () => {
  const productSelected = useSelector<IReduxState>((state) => state.productSelected) as IProduct;

  return (
    <aside>
      {productSelected ? <ProductDetails /> : <NoProductSelected />}
      <div>
        <Image src="/images/girl-with-cart.svg" layout="fill" />
      </div>
    </aside>
  );
};

export default AsideDesktopProduct;
