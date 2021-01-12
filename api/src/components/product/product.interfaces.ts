import { Request, Response, NextFunction } from 'express';
import { Document, ObjectId } from 'mongoose';

export interface IControllerWithToken {
  (req: Request, res: Response, next: NextFunction): Response;
}

export interface IProduct extends Document {
  productName: string;
  ProductDescription: string;
  productPrice: number;
  productImage: string;
  buyer: ObjectId;
}
