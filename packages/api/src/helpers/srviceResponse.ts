import { IServiceResponse } from '../types/services';

const serviceResponse: IHelperServiceResponse = (data, message, statusCode, error) => {
  return {
    data: data,
    message: message,
    statusCode: statusCode,
    error: error,
  };
};

export interface IHelperServiceResponse {
  (data: any, message: string, statusCode: number, error: any): IServiceResponse;
}

export default serviceResponse;
