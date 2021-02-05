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
    ID: ObjectId;
  };
}

export interface IPayload {
  ID: ObjectId;
  rol: string;
}

export interface IDecoded extends IPayload {
  iat: ObjectId;
}
