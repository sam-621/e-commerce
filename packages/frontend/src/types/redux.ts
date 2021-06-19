import { IProduct } from './products';
import { IUserReduxStore } from './user';

export interface IAction {
  payload: IProduct;
  type: string;
}

export interface IReduxState {
  cart: IProduct[];
  user: IUserReduxStore;
}
