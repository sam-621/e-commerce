import { IAllProducts, IProduct } from './products';
import { IUser, IUserDocument } from './user';

export interface IServiceResponse {
  data: IUser | IUserDocument | IProduct | IAllProducts;
  error: IErroService;
  message: string;
}

export interface IErroService {
  statusCode: number;
  message: string;
}
