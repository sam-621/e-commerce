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

<<<<<<< HEAD
export interface IGetUser {
  err: { statusCode: number; msg: string };
  data: IUser | null;
  msg: string;
=======
export interface IDecodedService {
  decoded: IDecoded;
  err: string;
>>>>>>> c38d002396a779bcc36cf36e296f985cda487f14
}
