import App from '../../src/app';
import req from 'supertest';
import {
  dbClose,
  dbConnection,
  MockUser,
  dbConnectionAnCreateUser,
  clearDatabase,
  registerUserAndGetToken,
  tokenExpired,
} from '../utils';
import { API_KEY } from '../../src/config';
import UserModel from '../../src/db/models/user.models';
const app = new App(3000).App;

describe('Register endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);

  test('Should response 400 WRONG DATA SCHEMA', async (done) => {
    const mockUser = new MockUser('', 'admim@gmail.c', '123');
    const res = await req(app).post('/register').set('api_key', API_KEY).send(mockUser);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('WRONG DATA SCHEMA');
    done();
  });

  test('Should response 400 SAME EMAIL', async (done) => {
    const mockUser = new MockUser('admin', 'admin@gmail.com', '123456');
    await UserModel.create(mockUser);

    const res = await req(app).post('/register').set('api_key', API_KEY).send(mockUser);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('EMAIL ALREADY TAKEN');
    await UserModel.deleteMany();
    done();
  });

  test('Should response 200 EVERYTHING OK', async (done) => {
    const mockUser = new MockUser('admin', 'admin@gmail.com', '123456');
    const res = await req(app).post('/register').set('api_key', API_KEY).send(mockUser);

    expect(res.status).toBe(201);
    expect(res.body.message).toBe('USER REGISTERED');
    done();
  });
});

describe('Login endpoint', () => {
  beforeAll(dbConnectionAnCreateUser);
  afterAll(dbClose);

  test('Should response 401 NO API_KEY PROVIDED', async (done) => {
    const res = await req(app).post('/login');

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO API_KEY PROVIDED');
    done();
  });

  test('Should response 400 WRONG DATA SCHEMA', async (done) => {
    const mockUser = new MockUser('', 'admim@gmail.c', '123');
    const res = await req(app).post('/login').set('api_key', API_KEY).send(mockUser);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('WRONG DATA SCHEMA');
    done();
  });

  test('Should response 401 WRONG EMAIL', async (done) => {
    const mockUser = new MockUser('admin', 'awrongAdmin@gmail.com', '123456');

    const res = await req(app).post('/login').set('api_key', API_KEY).send(mockUser);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('WRONG CREDENTIALS');
    done();
  });

  test('Should response 401 WRONG PASSWORD', async (done) => {
    const mockUser = new MockUser('admin', 'admin@gmail.com', '1234567');

    const res = await req(app).post('/login').set('api_key', API_KEY).send(mockUser);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('WRONG CREDENTIALS');
    done();
  });

  test('Should response 200 EVERYTHING OK', async (done) => {
    const mockUser = new MockUser('admin', 'admin@gmail.com', '123456');

    const res = await req(app).post('/login').set('api_key', API_KEY).send(mockUser);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('USER LOGGED');
    done();
  });
});

describe('Get user info endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);
  beforeEach(clearDatabase);

  test('Should response 401 NO API_KEY PROVIDED', async (done) => {
    const res = await req(app).get('/user');

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO API_KEY PROVIDED');
    done();
  });

  test('Should response 401 NO TOKEN PROVIDED', async (done) => {
    const res = await req(app).get('/user').set('api_key', API_KEY);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO TOKEN PROVIDED');
    done();
  });

  test('Should response 200 OK', async (done) => {
    const token: string = await registerUserAndGetToken();
    const res = await req(app).get('/user').set('authorization', token).set('api_key', API_KEY);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('OK');
    expect(res.body.data.email).toBe('admin@gmail.com');
    expect(res.body.data.cart.length).toBe(0);
    expect(res.body.data.productsBought.length).toBe(0);
    done();
  });
});

describe('Refresh token endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);
  beforeEach(clearDatabase);

  test('Should response 401 NO API_KEY PROVIDED', async (done) => {
    const res = await req(app).get('/refresh');

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO API_KEY PROVIDED');
    done();
  });

  test('Should response 401 NO TOKEN PROVIDED', async (done) => {
    const res = await req(app).get('/refresh').set('api_key', API_KEY);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO TOKEN PROVIDED');
    done();
  });

  test('Should response 401 NO TOKEN PROVIDED', async (done) => {
    const res = await req(app)
      .get('/refresh')
      .set('api_key', API_KEY)
      .set('authorization', tokenExpired);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('JWT HAS EXPIRED');
    done();
  });

  test('Should response 200 ok', async (done) => {
    const token: string = await registerUserAndGetToken();

    const res = await req(app).get('/refresh').set('api_key', API_KEY).set('authorization', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('TOKEN REFRESHED');
    done();
  });
});

describe('Update user info endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);
  beforeEach(clearDatabase);

  test('Should response 401 NO API_KEY PROVIDED', async (done) => {
    const res = await req(app).put('/user');

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO API_KEY PROVIDED');
    done();
  });

  test('Should response 401 NO TOKEN PROVIDED', async (done) => {
    const res = await req(app).put('/user').set('api_key', API_KEY);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('NO TOKEN PROVIDED');
    done();
  });

  test('Should response 400, WRONG DATA SCHEMA', async (done) => {
    const token1: string = await registerUserAndGetToken();

    const res = await req(app)
      .put('/user')
      .set('api_key', API_KEY)
      .set('authorization', token1)
      .send({
        username: 'admin_v2',
        email: 'admin_v2gmail.com',
      });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('WRONG DATA SCHEMA');
    done();
  });

  test('Should response 200, USER UPDATED', async (done) => {
    const token: string = await registerUserAndGetToken();

    const res = await req(app)
      .put('/user')
      .set('api_key', API_KEY)
      .set('authorization', token)
      .send({
        username: 'admin_v2',
        email: 'admin_v2@gmail.com',
      });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('USER UPDATED');
    done();
  });
});
