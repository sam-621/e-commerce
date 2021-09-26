import { type } from 'os'

export interface IHeaders {
  api_key: string
  authorization?: string
  'Content-Type': string
}

export interface IResponse {
  readonly data?: unknown
  readonly message?: string
}

export interface IUserService<T> extends IResponse {
  data?: T
  errorMessage: string
}
