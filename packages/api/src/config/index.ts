import { config } from 'dotenv';
config();

export const MODE: string = process.env.NODE_ENV;
export const API_KEY: string = MODE === 'production' ? process.env.API_KEY : 'secret';
export const MONGO_URI: string =
  MODE === 'production' ? process.env.MONGO_URI : 'mongodb://localhost:27017/ecommerce';
export const EXPIRES_IN: string = process.env.EXPIRES_IN || '3d';
export const JWT_SECRET: string = MODE === 'production' ? process.env.JWT_SECRET : 'jwt_secret';
export const PORT: number | string = process.env.PORT || 3000;
