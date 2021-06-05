import { ObjectId } from 'mongoose';
import { IError } from '../../types/responses';
import { IUser } from '../../types/user';

export interface IDecoded {
  id: ObjectId;
  iat: number;
  exp: number;
}

export interface IPayload {
  id: ObjectId;
}

export interface IGetUser {
  error: { message: string; statusCode: number };
  data: IUser | null;
  message: string;
}

export interface IDecodedService {
  decoded: IDecoded;
  error: IError;
}
