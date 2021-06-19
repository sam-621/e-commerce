import { IProduct } from './products';

export interface IAction {
  payload: IProduct;
  type: string;
}

export interface IReduxState {
  cart: IProduct[];
}
