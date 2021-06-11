import { Response } from 'express';
import { IErroService } from '../types/services';

function response(
  res: Response,
  data: any,
  message: string,
  statusCode: number,
  error: IErroService
): Response {
  return res.status(error?.statusCode || statusCode).json({
    data: data,
    message: message,
    error: error,
  });
}

export default response;
