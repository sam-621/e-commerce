import { Document } from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export interface IController {
  (req: Request, res: Response, next: NextFunction): Promise<void | Response>;
}
