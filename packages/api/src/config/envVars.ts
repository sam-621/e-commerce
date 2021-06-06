import { config } from 'dotenv';
config();

const envVars = {
  MODE: process.env.NODE_ENV,
  API_KEY: process.env.API_KEY,
  MONGO_URI: process.env.MONGO_URI,
  EXPIRES_IN: process.env.EXPIRES_IN,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT as unknown as number,
};

export default envVars;
