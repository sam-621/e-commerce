import { Response } from 'express';

class ControllerResponse {
  private res: Response;
  private data: any;
  private message: string;
  private statusCode: number;

  constructor(res: Response, data: any, message: string, statusCode: number) {
    this.res = res;
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    // this.response();
  }

  public response(): Response {
    return this.res.status(this.statusCode).json({
      data: this.data,
      message: this.message,
    });
  }
}

export default ControllerResponse;
