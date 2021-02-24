import { SetStateAction } from 'react';

interface IProduct {
  _id?: string;
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
  setProductsCart?: any;
  productsCart?: IProduct[];
  fetching?: boolean;
}

interface IInitialState {
  cart: IProduct[];
}

interface IAction {
  type: string;
  data: IProduct | null;
}

export { IProduct, ICartProducts, ICtxReturns, IInitialState, IAction };
