import { MODE } from '../config';
import { IErrorHandler } from '../types/responses';
import { Request, Response } from 'express';

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

function handlerErrors(err: IErrorHandler, req: Request, res: Response) {
  const { statusCode, msg, error } = err;

  if (MODE === 'dev') err.logError(error);

  return res.status(statusCode).json({
    data: null,
    msg: null,
    error: { msg: msg },
  });
}

export { ErrorHandler, handlerErrors };
