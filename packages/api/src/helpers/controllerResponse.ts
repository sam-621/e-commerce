import { Response } from 'express';

const controllerResponse: IHelperControllerResponse = (res, data, message, statusCode) => {
  return res.status(statusCode).json({
    data: data,
    message: message,
  });
};

export interface IHelperControllerResponse {
  (res: Response, data: any, message: string, statusCode: number, error: any): Response;
}

export default controllerResponse;
