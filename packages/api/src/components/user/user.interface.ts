import { IPayload } from '../auth/auth.interfaces';

export interface IDataForToken extends IPayload {
  err?: { message: string; statusCode: number };
}
