import { IAction, IProduct } from '../interfaces';
import { ADD_TO_CART, GET_CART } from './actions';

function addToCartAction(product: IProduct) {
  return {
    type: ADD_TO_CART,
    data: product,
  };
}

function getCartProducts(products: IProduct[]): IAction {
  return {
    type: GET_CART,
    data: products,
  };
}

export { addToCartAction, getCartProducts };
