import { Request, Response, NextFunction } from 'express';

export interface IControllerWithToken {
  (req: Request, res: Response, next: NextFunction): Response;
}
