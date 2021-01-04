import Server from '../../src/app';
import req from 'supertest';
const app = new Server(3000).App;

describe('API KEY test', () => {
  test('test for ', async (done) => {
    const res = await req(app).get('/');

    expect(res.status).toBe(401);
    done();
  });
});
