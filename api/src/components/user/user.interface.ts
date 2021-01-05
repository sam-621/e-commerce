import { Document } from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  code?: any;
}

export interface IController {
  (req: Request, res: Response, next: NextFunction): Promise<void | Response>;
}

export interface IResponse {
  data: null | object | [] | string;
  msg: string;
  err: any;
  statusCode: number;
}
