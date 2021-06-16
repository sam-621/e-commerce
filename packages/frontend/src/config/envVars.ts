export const MODE: string = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
export const BASE_URL: string =
  MODE === 'dev' ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD;
