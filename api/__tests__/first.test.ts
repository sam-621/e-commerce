import Server from "../src/app";
import req from "supertest";
const app = new Server(3000).App


describe('hi', () => {
    test('should response 200', async (done) =>{
        const res = await req(app).get('/');

        expect(res.status).toBe(200)
        done();
    })
})
