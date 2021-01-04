import { config } from 'dotenv';
config();

export const API_KEY: string = process.env.API_KEY;
export const MODE: string = process.env.NODE_ENV;
