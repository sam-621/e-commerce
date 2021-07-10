import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IProduct } from '../../types/products';
import { IReduxState } from '../../types/redux';
import NoProductSelected from '../molecules/NoProductSelected';

const AsideDesktopProduct = () => {
  const productSelected = useSelector<IReduxState>((state) => state.productSelected) as IProduct;

  return (
    <aside className="AsideDesktopProduct">
      {productSelected ? null : <NoProductSelected />}
      <div className="AsideDesktopProduct-image">
        <Image src="/images/girl-with-cart.svg" width={245} height={203} />
      </div>
    </aside>
  );
};

export default AsideDesktopProduct;
