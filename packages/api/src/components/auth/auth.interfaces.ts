import { ObjectId } from 'mongoose';
import { IUser } from '../user/user.interface';

export interface IDecoded {
  id: ObjectId;
  iat: number;
  exp: number;
}

export interface IPayload {
  id: ObjectId;
}

export interface IGetUser {
  err: { statusCode: number; msg: string };
  data: IUser | null;
  msg: string;
}

export interface IDecodedService {
  decoded: IDecoded;
  err: string;
}
