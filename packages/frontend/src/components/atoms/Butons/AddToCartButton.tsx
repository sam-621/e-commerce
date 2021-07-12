import { addProductToCartWithNoSession } from '@Helpers/cart';
import { IProduct } from '@Types/products';
import { IAction } from '@Types/redux';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const AddToCartButton: FC<IAddToCartButtonProps> = ({ product }) => {
  const dispatch = useDispatch<Dispatch<IAction>>();

  return (
    <button
      className="AddToCartButton"
      type="button"
      onClick={() => addProductToCartWithNoSession(product, dispatch)}
    >
      <img src="/images/add.svg" width={20} height={20} />
    </button>
  );
};

interface IAddToCartButtonProps {
  product: IProduct;
}

export default AddToCartButton;
