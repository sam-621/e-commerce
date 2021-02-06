import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongoose';

export interface IApiKeyMiddleware {
  (req: Request, res: Response, next: NextFunction): void | Response;
}

export interface IHandlerErrors {
  statusCode: number;
  message: string;
  error: any;
  logError(error: any): void;
}

export interface IRequest extends Request {
  user?: {
    id: ObjectId;
  };
}
