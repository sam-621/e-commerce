import { IAction, IInitialState } from '../interfaces';
import { ADD_TO_CART, GET_CART } from './actions';

const initialState: IInitialState = {
  cart: [],
};

function cartReducer(state: IInitialState = initialState, action: IAction): IInitialState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.data),
      };

    case GET_CART:
      return {
        ...state,
        cart: action.data,
      };
    default:
      return state;
  }
}

export { cartReducer, initialState };
