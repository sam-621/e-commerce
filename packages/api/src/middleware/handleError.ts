import { MODE } from '../config';
import { IHandlerErrors } from './interfaces.middlewares';
import { Request, Response, NextFunction } from 'express';

class ErrorHandler extends Error {
  private statusCode: number;
  private error: any;

  constructor(statusCode: number, messages: string, err: any) {
    super();
    this.statusCode = statusCode;
    this.message = messages;
    this.error = err;
  }

  public logError(error: any) {
    console.log(error);
  }
}

function handlerErrors(err: IHandlerErrors, req: Request, res: Response) {
  const { statusCode, message, error } = err;

  if (MODE === 'dev') err.logError(error);

  return res.status(statusCode).json({
    statusCode,
    message,
  });
}

export { ErrorHandler, handlerErrors };
