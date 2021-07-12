import { addToCartProduct } from '@Redux/ducks/cart';
import { IProduct } from '@Types/products';
import { IAction } from '@Types/redux';
import { Dispatch } from 'react';

export const addProductToCartWithNoSession = (product: IProduct, dispatch: Dispatch<IAction>) => {
  const CART_FIELD = 'cart';
  const cart: IProduct[] = JSON.parse(localStorage.getItem(CART_FIELD)) || [];

  localStorage.setItem(CART_FIELD, JSON.stringify([...cart, product]));
  dispatch(addToCartProduct(product));
};
