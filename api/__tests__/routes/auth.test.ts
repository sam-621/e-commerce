import App from '../../src/app';
import req from 'supertest';
import { dbClose, dbConnection } from '../utils/dbHandler';

describe('Register endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);

  test('');
});
