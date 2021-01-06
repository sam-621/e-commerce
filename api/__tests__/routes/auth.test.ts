import App from '../../src/app';
import req from 'supertest';
import { dbClose, dbConnection, FakeUser } from '../utils/';
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
    const fakeUser = new FakeUser('test', 'userTest@gmail.com', '123456');
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
