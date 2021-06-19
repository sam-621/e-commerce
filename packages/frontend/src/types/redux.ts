import { IProduct } from './products';

export interface IAction {
  payload: IProduct;
  type: string;
}
