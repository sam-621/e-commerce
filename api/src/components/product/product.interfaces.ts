import { Request, Response, NextFunction } from 'express';

export interface IController {
  (req: Request, res: Response, next: NextFunction): Promise<void | Response>;
}
