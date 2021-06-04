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
  err: IError;
  data: IUser | null;
  msg: string;
}

export interface IDecodedService {
  decoded: IDecoded;
  err: IError;
}
