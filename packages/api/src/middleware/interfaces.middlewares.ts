import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongoose';

export interface IApiKeyMiddleware {
  (req: Request, res: Response, next: NextFunction): void | Response;
}
