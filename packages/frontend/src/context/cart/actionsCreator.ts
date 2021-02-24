import { IAction, IProduct } from '../interfaces';
import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from './actions';

function addToCartAction(product: IProduct): IAction {
  return {
    type: ADD_TO_CART,
    data: product,
  };
}

function getCartProducts(products: IProduct[] = []): IAction {
  console.log(products);

  return {
    type: GET_CART,
    data: products,
  };
}

function removeFromCart(productID: string) {
  return {
    type: REMOVE_FROM_CART,
    data: productID,
  };
}

export { addToCartAction, getCartProducts, removeFromCart };
