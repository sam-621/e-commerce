import { ObjectId } from 'mongoose';

export interface IDecoded {
  id: string;
  iat: number;
  exp: number;
}

export interface IPayload {
  id: ObjectId;
}
