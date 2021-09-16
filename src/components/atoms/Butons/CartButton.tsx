import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IProduct } from '@Types/products';
import { IReduxState } from '@Types/redux';

const CartButton = () => {
  const cart: IProduct[] = useSelector<IReduxState>((state) => state.cart) as IProduct[];

  return (
    <div>
      <div className="CartButton">
        <Image src="/images/cart.svg" width="40" height="40" />
        <span>{cart.length}</span>
      </div>
    </div>
  );
};

export default CartButton;
