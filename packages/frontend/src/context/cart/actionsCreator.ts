import { IProduct } from '../interfaces';
import { ADD_TO_CART } from './actions';

function addToCartAction(product: IProduct) {
  return {
    type: ADD_TO_CART,
    data: product,
  };
}

export { addToCartAction };
