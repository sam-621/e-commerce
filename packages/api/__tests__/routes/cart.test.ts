import App from '../../src/app';
import req from 'supertest';
import { API_KEY } from '../../src/config';
import {
  dbClose,
  dbConnection,
  registerUserAndGetToken,
  MockProduct,
  clearDatabase,
  addToCart,
} from '../utils/';
import { IUser } from '../../src/components/user/user.interface';
const app = new App(3000).App;

describe('Add to cart endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);
  beforeEach(clearDatabase);

  test('Should response 401, NO TOKEN PROVIDED', async (done) => {
    const mockProduct = new MockProduct('image url', 'product', 25, 'description');
    const res = await req(app).put('/cart/add').set('api_key', API_KEY).send(mockProduct);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO TOKEN PROVIDED');
    done();
  });

  test('Should response 400, WRONG DATA SCHEMA', async (done) => {
    const token: string = await registerUserAndGetToken();
    const mockProduct = new MockProduct('', 'product', 25, 'description');
    const res = await req(app)
      .put('/cart/add')
      .set('api_key', API_KEY)
      .set('authorization', token)
      .send(mockProduct);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('WRONG DATA SCHEMA');
    done();
  });

  test('Should response 200, EVERYTHING OK', async (done) => {
    const mockProduct = new MockProduct('image url', 'product', 25, 'description');
    const token: string = await registerUserAndGetToken();

    const res = await req(app)
      .put('/cart/add')
      .set('api_key', API_KEY)
      .set('authorization', token)
      .send(mockProduct);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('PRODUCT ADDED TO CART');
    done();
  });
});

describe('get cart products endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);

  test('Should response 401, NO TOKEN PROVIDED', async (done) => {
    const res = await req(app).get('/cart/get').set('api_key', API_KEY);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO TOKEN PROVIDED');
    done();
  });

  test('Should response 200, EVERYTHING OK', async (done) => {
    const token: string = await registerUserAndGetToken();
    const res = await req(app).get('/cart/get').set('api_key', API_KEY).set('authorization', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('OK');
    done();
  });
});

describe('Remove product cart endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);

  test('Should response 401, NO TOKEN PROVIDED', async (done) => {
    const res = await req(app).put('/cart/remove').set('api_key', API_KEY);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO TOKEN PROVIDED');
    done();
  });

  test('Should response 400, WRONG DATA SCHEMA', async (done) => {
    const token: string = await registerUserAndGetToken();
    const data = {
      productID: '1',
    };

    const res = await req(app)
      .put('/cart/remove')
      .set('api_key', API_KEY)
      .set('authorization', token)
      .send(data);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('WRONG DATA SCHEMA');
    done();
  });

  test('Should response 200, EVERYTHING OK', async (done) => {
    const token: string = await registerUserAndGetToken();
    const user: IUser = await addToCart();
    const data = {
      productID: user.cart[0]._id,
    };

    const res = await req(app)
      .put('/cart/remove')
      .set('api_key', API_KEY)
      .set('authorization', token)
      .send(data);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('PRODUCT REMOVED');
    done();
  });
});
