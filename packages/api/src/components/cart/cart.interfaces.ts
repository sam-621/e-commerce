import { ObjectId } from 'mongoose';
import { IProduct } from '../../types/products';

export interface IAddToCartParams {
  product: IProduct;
  userId: ObjectId;
}
