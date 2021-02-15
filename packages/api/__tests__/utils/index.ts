import { dbClose, dbConnection, dbConnectionAnCreateUser, clearDatabase } from './dbHandler';
import { MockUser, MockProduct, registerUserAndGetToken, addToCart } from './fakeData';

export {
  dbConnection,
  dbClose,
  MockUser,
  registerUserAndGetToken,
  dbConnectionAnCreateUser,
  MockProduct,
  clearDatabase,
  addToCart,
};
