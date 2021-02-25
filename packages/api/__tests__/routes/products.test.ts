import App from '../../src/app';
import req from 'supertest';
import { API_KEY } from '../../src/config';
import {
  dbClose,
  dbConnection,
  MockProduct,
  MockUser,
  clearDatabase,
  registerUserAndGetToken,
} from '../utils/';
const app = new App(3000).App;

describe('Get products endpoint', () => {
  test('Should response 200, EVERYTHING OK', async (done) => {
    const res = await req(app).get('/products').set('api_key', API_KEY);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('OK');
    done();
  });
});
// TOKEN? -> DATA? -> OK
describe('Buy a product endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);
  beforeEach(clearDatabase);

  test('Should response 401, NO TOKEN PROVIDED', async (done) => {
    const mockProduct = new MockProduct('image url', 'product', 25, 'description');
    const res = await req(app).put('/products/buy').set('api_key', API_KEY).send(mockProduct);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO TOKEN PROVIDED');
    done();
  });

  // test('Should response 400, WRONG DATA SCHEMA', async (done) => {
  //   const token: string = await registerUserAndGetToken();
  //   const mockProduct = new MockProduct('', 'product', 25, 'description');
  //   const res = await req(app)
  //     .put('/products/buy')
  //     .set('api_key', API_KEY)
  //     .set('authorization', token)
  //     .send(mockProduct);

  //   expect(res.status).toBe(400);
  //   expect(res.body.message).toBe('WRONG DATA SCHEMA');
  //   done();
  // });

  test('Should response 200, EVERYTHING OK', async (done) => {
    const token: string = await registerUserAndGetToken();
    const mockProduct1 = new MockProduct('image url1', 'product1', 251, 'description1');
    const mockProduct2 = new MockProduct('image url2', 'product2', 252, 'description2');
    const mockData = [mockProduct1, mockProduct2];

    const res = await req(app)
      .put('/products/buy')
      .set('api_key', API_KEY)
      .set('authorization', token)
      .send(mockData);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('PRODUCT BOUGHT');
    done();
  });
});
