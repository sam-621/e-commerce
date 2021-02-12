import { SetStateAction } from 'react';

interface IProduct {
  id?: string;
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
  setProductsCart?: SetStateAction<IProduct[]>;
  productsCart: IProduct[];
}
export { IProduct, ICartProducts, ICtxReturns };
