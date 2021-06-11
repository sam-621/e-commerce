import { Response } from 'express';
import { IErroService } from '../types/services';

const controllerResponse: IHelperControllerResponse = (res, data, message, statusCode, error) => {
  return res.status(error?.statusCode || statusCode).json({
    data: data,
    message: message,
    error: error,
  });
};

export interface IHelperControllerResponse {
  (res: Response, data: any, message: string, statusCode: number, error: IErroService): Response;
}

export default controllerResponse;
