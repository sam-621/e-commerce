import { IProduct } from '../../types/products';
import { IAction } from '../../types/redux';

// CONSTANTS
const GET_CART_PRODUCTS: string = 'GET_CART_PRODUCTS';
const ADD_CART_PRODUCT: string = 'ADD_CART_PRODUCT';
const REMOVE_CART_PRODUCT: string = 'REMOVE_CART_PRODUCT';

// STORE
const initialState: IProduct[] = [];

// REDUCER
export default function reducer(state = initialState, action: IAction): IProduct[] {
  const ACTIONS = {
    [GET_CART_PRODUCTS]: state,
    [ADD_CART_PRODUCT]: state.concat(action.payload),
    [REMOVE_CART_PRODUCT]: state.filter((item) => item.id !== action.payload.id),
  };

  return ACTIONS[action.type] || state;
}

// ACTIONS
export const getCartProducts = (): IAction => ({
  type: GET_CART_PRODUCTS,
  payload: null,
});
