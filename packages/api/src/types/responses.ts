import { IAllProducts, IProduct } from './products';
import { IUser, IUserDocument } from './user';

export interface IResponse {
  data: IUser | IUserDocument | IProduct | IAllProducts;
  message: String;
  error: IError;
}

export interface IError {
  message: String;
}

export interface IErrorHandler {
  statusCode: number;
  message: string;
  error: any;
  logError(error: any): void;
}
