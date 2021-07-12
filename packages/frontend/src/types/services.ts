export interface IHeaders {
  api_key: string;
  authorization?: string;
  'Content-Type': string;
}

export interface IResponse {
  data: unknown;
  message: string;
}
