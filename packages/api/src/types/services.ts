export interface IServiceResponse {
  data: any;
  error: IErroService;
  message: string;
}

export interface IErroService {
  statusCode: number;
  message: string;
}
