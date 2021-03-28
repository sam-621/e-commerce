import { Document } from 'mongoose';
import { IPayload } from '../auth/auth.interfaces';
import { IProduct } from '../interfaces/IProducts';

export interface IUser extends Document {
  username?: string;
  email: string;
  password: string;
  cart?: IProduct[];
  productsBought?: IProduct[];
}

export interface IDataForToken extends IPayload {
  err?: { msg: string; statusCode: number };
}
