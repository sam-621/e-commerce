import { IAction, IInitialState, IProduct } from '../interfaces';
import { ADD_TO_CART } from './actions';

const initialState: IInitialState = {
  cart: [],
};

function cartReducer(state: IInitialState = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TO_CART:
      return state;
    default:
      return state;
  }
}
