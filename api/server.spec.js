const request = require('supertest');

const server = require('./server.js');

describe('server.js', function() {
  describe('check env var', function() {
    it('should set env to testing', function() {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });
});

describe('GET /', function() {
  it('should return 200 OK', function() {
    // always return async code
    return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe('GET /api/users', () => {
  it('should return 200 OK', async () => {
    const res = await request(server).get('/api/users');
    expect(res.statusCode).toEqual(200);
  });
});

// describe('Post /api/users', () => {
//   it('should create a new post', async () => {
//     const res = await request(server)
//       .post('/api/users')
//       .send({
//         name: 'Yoda'
//       });
//     expect(res.statusCode).toEqual(201);
//   });
// });
