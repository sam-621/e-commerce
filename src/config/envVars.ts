export const MODE: string = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
export const BASE_URL: string =
  MODE === 'dev' ? process.env.NEXT_PUBLIC_BASE_URL_DEV : process.env.NEXT_PUBLIC_BASE_URL_PROD;
export const API_KEY: string = MODE === 'dev' ? 'api_secret' : process.env.NEXT_PUBLIC_API_KEY;
