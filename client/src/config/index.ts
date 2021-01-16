export const MODE = process.env.NODE_ENV;
export const API_KEY = MODE === 'production' ? process.env.API_KEY : 'secret';
export const API_URI = MODE === 'production' ? process.env.API_KEY : 'http://locaslhost:3000';
