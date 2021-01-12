import { Request, Response, NextFunction } from 'express';
import { Document, ObjectId } from 'mongoose';
import { IRequest } from '../../middleware/interfaces.middlewares';

export interface IControllerWithToken {
  (req: IRequest, res: Response, next: NextFunction): Response | Promise<Response>;
}

export interface IProduct extends Document {
  productName: string;
  ProductDescription: string;
  productPrice: number;
  productImage: string;
  buyer: ObjectId;
}
