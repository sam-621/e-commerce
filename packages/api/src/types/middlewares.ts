import { NextFunction, Request, Response } from 'express';

export interface IApiKeyMiddleware {
  (req: Request, res: Response, next: NextFunction): void | Response;
}
