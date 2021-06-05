import { IError } from '../../types/responses';

export interface IService {
  data: any;
  message: string;
  error: { message: string; statusCode: number };
}
