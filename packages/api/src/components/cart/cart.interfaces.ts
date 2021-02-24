import { ObjectId } from 'mongoose';
import { IProduct } from '../user/user.interface';

export interface IAddToCartParams {
  buyerID: ObjectId;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface ICartServiceRes {
  data: null | IProduct[] | IProduct;
  msg: string;
  statusCode: number;
}
