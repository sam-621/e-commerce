import { ObjectId } from 'mongoose';

export interface IAddToCartParams {
  frontID: number;
  buyerID: ObjectId;
  name: string;
  price: number;
  description: string;
  image: string;
}
