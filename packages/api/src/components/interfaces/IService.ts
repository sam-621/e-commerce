import { IError } from '../../types/responses';

export interface IService {
  data: any;
  message: string;
  error: IError;
}
