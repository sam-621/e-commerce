import { IProduct } from '@Types/products';
import { IAction } from '@Types/redux';
import { LOCAL_STORAGE_CART_FIELD } from 'config/consts';
import { Dispatch } from 'react';
import { addToCartProduct } from './ducks/cart';

const getCartData = (dispatch: Dispatch<IAction>): void => {
  const cart: IProduct[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_FIELD));
  if (cart) {
    cart.forEach((item) => dispatch(addToCartProduct(item)));
  }
};

const fillStore = (dispatch: Dispatch<IAction>): void => {
  getCartData(dispatch);
};

export default fillStore;
