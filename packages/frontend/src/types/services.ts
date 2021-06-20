export interface IHeaders {
  api_key: string;
  authorization?: string;
  'Content-Type': string;
}

export interface IServiceResponse {
  data: unknown;
  message: string;
}
