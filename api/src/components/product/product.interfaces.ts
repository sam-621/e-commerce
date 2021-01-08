import { Request, Response, NextFunction } from 'express';

export interface IControllerGetProducts {
  (req: Request, res: Response, next: NextFunction): Response;
}
