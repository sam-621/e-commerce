import App from '../../src/app';
import req from 'supertest';
import { dbClose, dbConnection, FakeUser, dbConnectionAnCreateUser } from '../utils/';
import UserModel from '../../src/components/user/user.models';
import { API_KEY } from '../../src/config';
const app = new App(3000).App;

describe('Register endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);

  test('Should response 400 WRONG DATA SCHEMA', async (done) => {
    const fakeUser = new FakeUser('', 'admim@gmail.c', '123');
    const res = await req(app).post('/register').set('api_key', API_KEY).send(fakeUser);

    expect(res.status).toBe(400);
    done();
  });

  test('Should response 400 SAME EMAIL', async (done) => {
    const fakeUser = new FakeUser('admin', 'admin@gmail.com', '123456');
    await UserModel.create(fakeUser);

    const res = await req(app).post('/register').set('api_key', API_KEY).send(fakeUser);

    expect(res.status).toBe(400);
    done();
  });

  test('Should response 200 EVERYTHING OK', async (done) => {
    const fakeUser = new FakeUser('userTest', 'register@gmail.com', '123456');
    const res = await req(app).post('/register').set('api_key', API_KEY).send(fakeUser);

    expect(res.status).toBe(200);
    done();
  });
});

describe('Login endpoint', () => {
  beforeAll(dbConnectionAnCreateUser);
  afterAll(dbClose);

  test('Should response 401 NO API_KEY PROVIDED', async (done) => {
    const res = await req(app).post('/login');

    expect(res.status).toBe(401);
    done();
  });

  test('Should response 400 WRONG DATA SCHEMA', async (done) => {
    const fakeUser = new FakeUser('', 'admim@gmail.c', '123');
    const res = await req(app).post('/login').set('api_key', API_KEY).send(fakeUser);

    expect(res.status).toBe(400);
    done();
  });

  test('Should response 401 WRONG EMAIL', async (done) => {
    const fakeUser = new FakeUser('admin', 'awrongAdmin@gmail.com', '123456');

    const res = await req(app).post('/login').set('api_key', API_KEY).send(fakeUser);

    expect(res.status).toBe(401);
    done();
  });

  test('Should response 401 WRONG PASSWORD', async (done) => {
    const fakeUser = new FakeUser('admin', 'admin@gmail.com', '1234567');

    const res = await req(app).post('/login').set('api_key', API_KEY).send(fakeUser);

    expect(res.status).toBe(401);
    done();
  });

  test('Should response 200 EVERYTHING OK', async (done) => {
    const fakeUser = new FakeUser('admin', 'admin@gmail.com', '123456');

    const res = await req(app).post('/login').set('api_key', API_KEY).send(fakeUser);

    expect(res.status).toBe(200);
    done();
  });
});
