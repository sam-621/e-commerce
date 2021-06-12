import { IServiceResponse } from "../types/services";

class ServiceResponse {
  private data: any;
  private message: string;
  private statusCode: number;
  private error: any 

  constructor(data: any, message: string, statusCode: number, error: any) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.error = error
  }

  public response(): IServiceResponse {
    return {
      data: this.data,
      message: this.message,
      statusCode: this.statusCode,
      error: this.error
    }
  }
}

export default ServiceResponse;
