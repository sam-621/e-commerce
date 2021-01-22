export const MODE = process.env.NODE_ENV;
export const API_KEY = MODE === 'production' ? process.env.API_KEY : 'secret';
export const API_URI = MODE === 'production' ? process.env.API_URI : 'http://localhost:3000';
export const CLIENTID =
  MODE === 'development' ? process.env.CLIENTID_DEV : process.env.CLIENTID_PROD;
