export interface IUseAuthReturns {
  isAuth: boolean;
  token: string;
  finished: boolean;
}
export interface IUseAuth {
  (tokenArg: string): IUseAuthReturns;
}
