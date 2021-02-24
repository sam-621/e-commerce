import { IAction, IInitialState, IProduct } from '../interfaces';
import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from './actions';

const initialState: IInitialState = {
  cart: [],
};

function cartReducer(state: IInitialState = initialState, action: IAction): IInitialState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.data as IProduct),
      };

    case GET_CART:
      return {
        ...state,
        cart: action.data as IProduct[],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id != action.data),
      };
    default:
      return state;
  }
}

export { cartReducer, initialState };
