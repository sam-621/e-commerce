import { NextFunction, Request, Response } from 'express';

export interface IApiKeyMiddleware {
  (req: Request, res: Response, next: NextFunction): void | Response;
}
export interface IHandlerErrors {
  statusCode: number;
  message: string;
  error: any;
  logError(error: any): void;
}
