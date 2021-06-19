import { IProduct } from '../../types/products';
import { IAction } from '../../types/redux';

// CONSTANTS
const GET_CART_PRODUCTS: string = 'GET_CART_PRODUCTS';

// STORE
const initialState: IProduct[] = [];

// REDUCER
export default function reducer(state = initialState, action: IAction): IProduct[] {
  const ACTIONS = {
    [GET_CART_PRODUCTS]: state,
  };

  return ACTIONS[action.type] || state;
}

// ACTIONS
export const getCartProducts = (): IAction => ({
  type: GET_CART_PRODUCTS,
  payload: null,
});
