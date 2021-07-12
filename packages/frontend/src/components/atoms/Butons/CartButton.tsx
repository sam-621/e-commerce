import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IProduct } from '@Types/products';
import { IReduxState } from '@Types/redux';

const CartButton = () => {
  const cart: IProduct[] = useSelector<IReduxState>((state) => state.cart) as IProduct[];

  return (
    <div>
      <span>{cart.length}</span>
      <Image src="/images/cart.svg" width="20" height="20" />
    </div>
  );
};

export default CartButton;
