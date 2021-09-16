import { IProduct } from './products';
import { IUserReduxStore } from './user';

export interface IAction {
  payload: unknown;
  type: string;
}

export interface IReduxState {
  cart: IProduct[];
  user: IUserReduxStore;
  productSelected: IProduct | null;
}
