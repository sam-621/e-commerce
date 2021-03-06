import { dbClose, dbConnection, dbConnectionAnCreateUser, clearDatabase } from './dbHandler';
import {
  MockUser,
  MockProduct,
  registerUserAndGetToken,
  addToCart,
  tokenExpired,
} from './fakeData';

export {
  dbConnection,
  dbClose,
  MockUser,
  registerUserAndGetToken,
  dbConnectionAnCreateUser,
  MockProduct,
  clearDatabase,
  addToCart,
  tokenExpired,
};
