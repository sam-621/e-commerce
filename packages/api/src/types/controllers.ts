import { Response, NextFunction, Request } from 'express';
import { ObjectId } from 'mongoose';

export interface IController {
  (req: IRequest, res: Response, next: NextFunction):
    | Response
    | Promise<Response>
    | Promise<NextFunction>;
}

export interface IRequest extends Request {
  user?: {
    id: ObjectId;
  };
}
