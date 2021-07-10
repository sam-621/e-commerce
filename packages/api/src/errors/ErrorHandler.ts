import { IErrorHandler } from '../types/responses';

class ErrorHanlder implements IErrorHandler {
  error: any;
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number, error: any) {
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }

  logError() {
    console.log(this.error);
  }
}

export default ErrorHanlder;
