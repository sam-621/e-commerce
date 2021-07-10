import { IProduct } from '../../types/products';
import { IAction } from '../../types/redux';

// CONSTANTS
const SELECT_PRODUCT: string = 'SELECT_PRODUCT';
const UNSELECT_PRODUCT: string = 'UNSELECT_PRODUCT';

// STORE
const initialState: IProduct = null;

// REDUCER
export default function reducer(state = initialState, action: ICartAction): IProduct {
  const ACTIONS: IActionOptions = {
    [SELECT_PRODUCT]: action.payload,
    [UNSELECT_PRODUCT]: null,
  };

  return ACTIONS[action.type] || state;
}

// ACTIONS
export const selectProduct = (product: IProduct): IAction => ({
  type: SELECT_PRODUCT,
  payload: product,
});

export const unselectProduct = (): IAction => ({
  type: UNSELECT_PRODUCT,
  payload: null,
});

// INTERFACES
interface ICartAction extends IAction {
  payload: IProduct;
}

interface IActionOptions {
  [x: string]: IProduct | null;
}
