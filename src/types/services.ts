export interface IHeaders {
  api_key: string;
  authorization?: string;
  'Content-Type': string;
}

export interface IResponse {
  readonly data?: unknown;
  readonly message?: string;
}
