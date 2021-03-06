export interface IUseAuthReturns {
  isAuth: boolean;
  token: string;
  loading: boolean;
}
export interface IUseAuth {
  (tokenArg: string): IUseAuthReturns;
}
