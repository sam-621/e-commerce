import { IServiceResponseClass } from '../types/services';

class ServiceResponse implements IServiceResponseClass {
  data: any;
  message: string;
  statusCode: number;
  error: any;

  constructor(data: any, message: string, statusCode: number, error?: any) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default ServiceResponse;
