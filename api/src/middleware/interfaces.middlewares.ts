import { NextFunction, Request, Response } from 'express';

interface apiKeyMiddleware {
  (req: Request, res: Response, next: NextFunction): void | Response;
}

export { apiKeyMiddleware };
