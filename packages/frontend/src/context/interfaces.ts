import { Dispatch } from 'react';

interface IProduct {
  _id?: string;
  frontID: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ICartProducts {
  _id: string;
  cart: IProduct[];
}

interface ICtxReturns {
  state: IInitialState;
  dispatcher: Dispatch<IAction>;
}

interface IInitialState {
  cart: IProduct[];
}

interface IAction {
  type: string;
  data: IProduct[] | IProduct | string;
}

export { IProduct, ICartProducts, ICtxReturns, IInitialState, IAction };
