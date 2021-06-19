import { IProduct } from './products';

export interface IAction {
  payload: IProduct | IProduct[];
  type: string;
}
