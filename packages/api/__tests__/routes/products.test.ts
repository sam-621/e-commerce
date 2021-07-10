import App from '../../src/app';
import req from 'supertest';
import { envVars } from '../../src/config';

const app = new App(3000).App;

describe('Products endpoint', () => {
  test('Should response 401, NO TOKEN PROVIDED', async () => {});

  test('Should response 200, EVERYTHING OK', async (done) => {
    const res = await req(app).get('/products').set('api_key', envVars.API_KEY);

    expect(res.status).toBe(200);
    done();
  });
});
