import { Response, NextFunction } from 'express';
import { IRequest } from '../../middleware/interfaces.middlewares';

export interface IController {
  (req: IRequest, res: Response, next: NextFunction): Response | Promise<Response>;
}
