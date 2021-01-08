import App from '../../src/app';
import req from 'supertest';
import { API_KEY } from '../../src/config';
import { token } from '../utils/';
const app = new App(3000).App;

describe('Get products endpoint', () => {
  test('Should response 401, NO TOKEN PROVIDED', async (done) => {
    const res = await req(app).get('/products').set('api_key', API_KEY);

    expect(res.status).toBe(401);
    done();
  });

  test('Should response 200, EVERYTHING OK', async (done) => {
    const res = await req(app).get('/products').set('api_key', API_KEY).set('authorization', token);

    expect(res.status).toBe(200);
    done();
  });
});
