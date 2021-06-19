import { config } from 'dotenv';
config();

const envVars = {
  MODE: process.env.NODE_ENV,
  API_KEY: process.env.API_KEY || 'api_secret',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
  EXPIRES_IN: process.env.EXPIRES_IN || '3h',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  PORT: process.env.PORT as unknown as number,
};

export default envVars;
