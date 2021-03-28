import { ObjectId } from 'mongoose';

export interface IProduct {
  _id?: ObjectId;
  frontID: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
