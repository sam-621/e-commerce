import { IAllProducts, IProduct } from './products';
import { IUser } from './user';

export interface IResponse {
  data: IUser | IProduct | IAllProducts;
  msg: String;
  error: IError;
}

export interface IError {
  msg: String;
}

export interface IErrorHandler {
  statusCode: number;
  msg: string;
  error: any;
  logError(error: any): void;
}
